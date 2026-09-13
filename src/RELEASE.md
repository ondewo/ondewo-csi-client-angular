# Release History

*****************

## Release ONDEWO CSI Angular Client 5.5.1

### Bug Fixes

* A failed background token refresh no longer ends token renewal for the life of the process.
  `scheduleRefresh` ran only on the success path, so a single transient Keycloak failure left no timer
  armed: the access token then lapsed and every later call failed `UNAUTHENTICATED` until the
  application logged in again. The stale token keeps working until it expires, which is what made the
  defect silent.
* The failure path now re-arms with bounded exponential backoff and full jitter -- 5 s doubling to a
  300 s ceiling, with the actual wait drawn uniformly from `[base, ceiling]` -- rather than at the 1 s
  scheduling floor. The jitter is load-bearing at ondewo's fan-out: one client per call container means
  N clients whose refreshes fail in the same instant would otherwise retry in lockstep against a realm
  they all share.
* A successful refresh resets the backoff ladder, and the bounded-deadline and `stop()` guards still
  apply to every re-arm.

*****************

## Release ONDEWO CSI Angular Client 5.5.0

### Improvements

* Built against [ondewo-csi-api 5.5.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.5.0), which tracks ondewo-nlu-api 7.1.0 (was 7.0.0) and ondewo-s2t-api 7.5.0 (was 7.4.0).
* `ondewo/csi/conversation.proto` is unchanged in that API release, so the CSI service surface is identical and this client stays wire-compatible with its predecessor. What grows is the vendored surface it re-exports: `speech-to-text.proto` gains the `VadMethod` and `TsdMethod` enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection configuration), and `rag.proto` gains `RagCrawlerIncrementalConfig`.

*****************

## Release ONDEWO CSI Angular Client 5.4.2

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written Keycloak auth sources moved out of ng-packagr's output directory: `src/lib/auth` is now `src/auth` and `src/lib/examples` is now `src/examples`. The proto-compiler's default `ng-package.json` declares `"dest": "lib"` relative to the mounted source root, and ng-packagr 20.x removes that directory recursively *before* tsc compiles the entry point, so everything hand-written under `src/lib` was already deleted by the time the generated `public-api.ts` was compiled. Nothing referenced it while the barrel listed only proto stubs, but as soon as the barrel star-exported the auth surface the library build failed with `TS2307: Cannot find module './lib/auth'`. `src/auth` is also the first location the compiler looks in, and the layout `ondewo-nlu-client-angular` already builds green with.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The auth surface is now actually published. `ONDEWO_PROTO_COMPILER_GIT_BRANCH` moved from `tags/5.12.0` to [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0), whose `generate-public-api.sh` star-exports the hand-written `auth/index.ts` barrel; 5.12.0 emitted no such export, so `AuthGrpcInterceptor`, `KeycloakTokenProvider`, `provideOndewoCsiAuth`, `authHttpInterceptor`, `resolveToken` and the rest were compiled but unreachable and `@ondewo/csi-client-angular` 5.4.1 shipped none of them. Measured against the published 5.4.1 tarball, the whole public-API delta of this release is that surface - 14 values and 3 types added, nothing removed, and no generated protobuf stub changed.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) A regression guard, `src/auth/library-layout.spec.ts`, fails the unit suite if a hand-written source moves back under the directory ng-packagr deletes. It reads `dest` from the compiler's own `ng-package.json` rather than hard-coding `lib`, and raises instead of passing when it can resolve no configuration at all, so the GitHub Actions workflow now checks out the `ondewo-proto-compiler` submodule.

*****************

## Release ONDEWO CSI Angular Client 5.4.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO CSI Angular Client 5.4.0

### Improvements

* Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 5.1.0

### Improvements

* Tracking API Version [5.1.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 4.0.0

### Improvements

* Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 3.2.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [3.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 3.2.0

### Improvements

* Tracking API Version [3.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 3.0.0

### Improvements

* Tracking API Version [3.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 2.3.1

### Improvements

* Track version 2.3.1 of [ONDEWO CSI API](https://github.com/ondewo/ondewo-csi-api/releases/2.3.1)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
