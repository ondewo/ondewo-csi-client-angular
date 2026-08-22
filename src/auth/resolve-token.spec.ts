import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  once,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative JWT-shaped access token used across the token-resolution specs. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

/** Specs covering the exported header-name and bearer-scheme string constants. */
describe("constants", () => {
  /** The header name must be the canonical `Authorization` form. */
  it("uses the canonical Authorization header name", () => {
    expect(AUTHORIZATION_HEADER).toBe("Authorization");
  });

  /** The scheme prefix must be the standard `"Bearer "` (with trailing space). */
  it("uses the standard bearer scheme prefix", () => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

/** Specs for `resolveToken`: normalization of every `TokenResult` shape into a single observable. */
describe("resolveToken", () => {
  /** A ready synchronous string token is emitted unchanged. */
  it("resolves a synchronous string token", async () => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** A `null` input (unauthenticated) emits `null`. */
  it("resolves null when the token is null", async () => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty string is treated as "no token" and collapsed to `null`. */
  it("collapses an empty-string token to null", async () => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only string is treated as "no token" and collapsed to `null`. */
  it("collapses a whitespace-only token to null", async () => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /** A misbehaving source emitting `undefined` is tolerated and collapsed to `null`. */
  it("collapses an undefined emission from a misbehaving source to null", async () => {
    // A `TokenResult` source can emit `undefined` at runtime even though the
    // type says `string | null`; it must be treated as "no token", not crash.
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace is trimmed from an otherwise-usable token. */
  it("trims surrounding whitespace from a real token", async () => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise`-based source is awaited and its token emitted. */
  it("resolves a Promise-based token source", async () => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` resolving to `null` emits `null`. */
  it("resolves a Promise that resolves to null", async () => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable`-based source is subscribed and its token emitted. */
  it("resolves an Observable-based token source", async () => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source propagates its error to the subscriber. */
  it("propagates an error from a Promise token source", async () => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source propagates its error to the subscriber. */
  it("propagates an error from an Observable token source", async () => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the result tears down the underlying source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", () => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

/** Specs for `buildBearerValue`: the pure token-to-header-value mapping. */
describe("buildBearerValue", () => {
  /** A real token is prefixed with the bearer scheme. */
  it("prefixes a real token with the bearer scheme", () => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields `null` (no header value). */
  it("returns null for a null token", () => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

/** Specs for `resolveBearerValue`: end-to-end token resolution plus bearer-header build. */
describe("resolveBearerValue", () => {
  /** A present token is resolved and emitted as a full `"Bearer <token>"` value. */
  it("emits the bearer header value for a present token", async () => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields a `null` header value. */
  it("emits null when no token is available", async () => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** An empty token yields a `null` header value (never an empty `Bearer`). */
  it("emits null for an empty token", async () => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** An error from the token source propagates through to the subscriber. */
  it("propagates an error from the token source", async () => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the result tears down the underlying source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", () => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through an `Observable` source is mapped to its bearer value. */
  it("emits the bearer value for a token pushed through an Observable source", async () => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});

/** Specs for the `once` synchronous-value-to-observable helper. */
describe("once", () => {
  /** The supplied value is emitted exactly once. */
  it("emits the given value exactly once", async () => {
    await expect(firstValueFrom(once("value"))).resolves.toBe("value");
  });
});
