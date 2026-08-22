import { Dirent, existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

/**
 * Guard: no hand-written source may live inside ng-packagr's destination directory.
 *
 * The angular proto-compiler copies its default `ng-package.json` into the root of the
 * mounted input volume -- this `src/` directory -- whenever the client does not ship one of
 * its own, and ng-packagr 20.x deletes `dest` recursively *before* tsc compiles the entry
 * point. Hand-written sources placed under `dest` are therefore gone by the time the
 * generated public-api barrel that star-exports them is compiled, and the library build dies
 * with `TS2307: Cannot find module './lib/auth'`. That is exactly what happened once the
 * proto-compiler learned (5.13.0) to star-export the hand-written `auth/` barrel: the auth
 * surface lived at `src/lib/auth`, i.e. inside `dest`.
 *
 * `dest` is read from the compiler's own configuration rather than spelled out here, so the
 * guard follows the compiler if it ever moves the build output somewhere else.
 */

/** The subset of the ng-packagr configuration this guard reads. */
interface NgPackageConfig {
  dest?: string;
}

/** `src/`, the library source root the compiler mounts as its input volume. */
const LIB_SOURCE_ROOT: string = resolve(__dirname, "..");

/** The repository root, one level above the library source root. */
const REPO_ROOT: string = resolve(LIB_SOURCE_ROOT, "..");

/**
 * The compiler's default `ng-package.json`, used whenever the client ships none.
 * See `compile-proto-2-angular.sh`, which copies it next to the entry file.
 */
const COMPILER_NG_PACKAGE: string = join(
  REPO_ROOT,
  "ondewo-proto-compiler",
  "angular",
  "image-data",
  "default-lib-files",
  "ng-package.json"
);

/** A client-supplied `ng-package.json` wins: the compiler only copies its default when absent. */
const LOCAL_NG_PACKAGE: string = join(LIB_SOURCE_ROOT, "ng-package.json");

/** Directories under `src/` that hold no hand-written source of ours. */
const IGNORED_DIRECTORY_NAMES: string[] = ["node_modules", "ondewo-csi-api", ".github"];

/**
 * The `ng-package.json` the build will actually use.
 *
 * Throws rather than defaulting when neither file is present: an inspection that resolved no
 * configuration has established nothing, and must never be mistaken for a passing guard. In
 * CI the proto-compiler submodule is checked out for exactly this reason.
 */
function effectiveNgPackagePath(): string {
  if (existsSync(LOCAL_NG_PACKAGE)) {
    return LOCAL_NG_PACKAGE;
  }
  if (existsSync(COMPILER_NG_PACKAGE)) {
    return COMPILER_NG_PACKAGE;
  }
  throw new Error(
    `No ng-package.json found: neither ${LOCAL_NG_PACKAGE} nor ${COMPILER_NG_PACKAGE} exists. ` +
      "Run `git submodule update --init ondewo-proto-compiler` so ng-packagr's destination " +
      "can be read from the compiler's own configuration."
  );
}

/** The absolute directory ng-packagr writes to -- and deletes -- on every build. */
function ngPackagrDestDirectory(): string {
  const ngPackagePath: string = effectiveNgPackagePath();
  const config: NgPackageConfig = JSON.parse(readFileSync(ngPackagePath, "utf8")) as NgPackageConfig;
  const dest: string | undefined = config.dest;
  if (dest === undefined || dest === "") {
    throw new Error(`${ngPackagePath} declares no "dest"; ng-packagr's destination cannot be resolved.`);
  }
  // `dest` is relative to the ng-package.json, which the build places at the source root.
  return resolve(LIB_SOURCE_ROOT, dest);
}

/** Every `.ts` file under `directory`, recursively, skipping submodules and dependencies. */
function typeScriptSourcesUnder(directory: string): string[] {
  if (!existsSync(directory)) {
    return [];
  }
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry: Dirent): string[] => {
    if (IGNORED_DIRECTORY_NAMES.includes(entry.name)) {
      return [];
    }
    const full: string = join(directory, entry.name);
    if (entry.isDirectory()) {
      return typeScriptSourcesUnder(full);
    }
    if (entry.name.endsWith(".ts")) {
      return [full];
    }
    return [];
  });
}

/** True when `candidate` is inside `directory` (or is that directory itself). */
function isInside(candidate: string, directory: string): boolean {
  const rel: string = relative(directory, candidate);
  return rel === "" || (!rel.startsWith(`..${sep}`) && rel !== "..");
}

describe("library layout: hand-written sources versus ng-packagr's destination", () => {
  /** The destination is derived, not assumed -- a broken derivation must fail here, not silently pass. */
  it("resolves ng-packagr's destination from the compiler's own ng-package.json", () => {
    const dest: string = ngPackagrDestDirectory();

    expect(isInside(dest, REPO_ROOT)).toBe(true);
    // A destination equal to the source root would delete the whole library on every build.
    expect(dest).not.toBe(LIB_SOURCE_ROOT);
  });

  /** Without this the guard could pass simply because there is no hand-written surface left. */
  it("has a hand-written auth barrel for the generated public-api to star-export", () => {
    expect(existsSync(join(LIB_SOURCE_ROOT, "auth", "index.ts"))).toBe(true);
  });

  /**
   * The regression itself: `src/lib/auth/index.ts` was deleted by ng-packagr before tsc read
   * the barrel exporting it, so the library build failed with TS2307.
   */
  it("keeps every hand-written source outside the directory ng-packagr deletes", () => {
    const dest: string = ngPackagrDestDirectory();
    const offenders: string[] = typeScriptSourcesUnder(LIB_SOURCE_ROOT)
      .filter((source: string): boolean => isInside(source, dest))
      .map((source: string): string => relative(REPO_ROOT, source));

    expect(offenders).toEqual([]);
  });
});
