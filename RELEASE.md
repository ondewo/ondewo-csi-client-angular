# Release History

*****************

## Release ONDEWO CSI Angular Client 5.9.2

### New Features

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Keycloak authentication with offline-token start-up, the same behaviour as ondewo-csi-client-python 5.9.2: `refreshToken` (`offlineToken` stays as a deprecated alias) in the `KeycloakTokenProvider` configuration hands the client a Keycloak *offline* refresh token instead of a password. The client then starts with one `grant_type=refresh_token` exchange and never sends a password grant, not even as a fallback; a refused token is never answered with a password login. Keycloak's brute-force detection counts failed LOGINS, so N processes booting at once with one technical user are a burst the realm penalises, while N refresh grants of one offline token are not.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A Keycloak configuration needs a password OR a refresh token, and the Keycloak URL, realm and client id are all-or-nothing; when both credentials are set the token wins. The password and the token are redacted from every rendering of the configuration and take part (hashed) in the shared-provider registry key, so two token-only configurations of different tenants never share a provider. The `token_expiration_in_s` window is armed on both start-up paths.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) The framework-free `KeycloakTokenSession` carries the logic and `KeycloakTokenProvider` is a thin DI adapter over it; `getToken()` runs the shared, single-flight refresh inside the 30 s leeway and waits for an in-flight first login instead of answering `null`, so a request issued right after bootstrap is not sent unauthenticated. `configure()`, `whenReady()` and `ensureFreshToken({ force })` are new; `login()`, `stop()` and the `*_SECONDS` constant names stay as deprecated aliases.

### Bug Fixes

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A failed token refresh never ends the background refresh: any failure of the token endpoint (a 502 from a proxy, a DNS failure, a restarting Keycloak, a dead offline session) is retried with one full-jitter backoff (5 s doubling up to 300 s, measured from the moment the failure is recorded) that `getToken()` shares, and a success resets it. Concurrent callers during an outage share one in-flight refresh, so an outage costs one token request, not one per call.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A token that is still valid keeps being served when its refresh fails inside the 30 s expiry leeway; only an EXPIRED token raises `KeycloakAuthenticationError`, whatever failed underneath: a transport error, a non-2xx status, a body that is not JSON or not a JSON object, a missing `access_token` or a non-numeric `expires_in`, each with the original error as its cause. A malformed response changes no provider state, and a password login whose response carries no `refresh_token` keeps the previous one, as the python SDK does.

### Improvements

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) One Keycloak contract across every ONDEWO client SDK, with the python SDK as the reference: the same constants, log lines and error texts. The token request is bounded by 10 s, quoted Keycloak error bodies are cut at 500 characters, a token response is reported by its field names only (never its values), and each failure logs one WARNING with the attempt number and the retry delay, the first success afterwards one INFO; no credential appears in either line.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Tests implement the cross-SDK test catalogue T01-T62 plus edge cases, on a fake token endpoint and clock, with 100 % coverage of the hand-written authentication code.
* Tracking API Version [5.9.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.9.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) ); the generated code is unchanged against 5.9.0.

*****************

## Release ONDEWO CSI Angular Client 5.9.0

### Improvements

* Tracking API Version [5.9.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.9.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )
* Generated with ondewo-proto-compiler 5.17.0 (protoc 35.1); new runtime floors: `grpc-web 2.1.1` (exact) and `google-protobuf ~3.21.4` as peers next to `@ngx-grpc/common` / `@ngx-grpc/core` `~3.1.2`. Because `@ngx-grpc/grpc-web-client` still declares the peer `grpc-web ^1.2.1`, an app installing this client needs `"grpc-web": "2.1.1"` as an exact direct dependency plus `"overrides": { "grpc-web": "$grpc-web" }`.

*****************

## Release ONDEWO CSI Angular Client 5.7.0

### Improvements

* Tracking API Version [5.7.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.7.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 5.6.2

### Improvements

* Tracking API Version [5.6.2](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.6.2) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Angular Client 5.6.1

### Bug Fixes

* Removed the service-client methods of every client-streaming and bidirectional-streaming RPC, because they never worked in a browser: gRPC-web, the protocol this library speaks, carries unary and server-streaming calls only. The methods (plain and `$raw`) are gone from `ConversationsClient.s2sStream`, `SessionsClient.streamingDetectIntent`, `RagsClient.ragUploadDocument`, `Speech2TextClient.transcribeStream` and `Text2SpeechClient.streamingSynthesize`. Their request and response messages are still exported, and every unary and server-streaming method is unchanged. **Migration:** a client that has to send a request stream (speech-to-speech audio, streaming recognition, synthesis or detect-intent) uses a native SDK such as `ondewo-csi-client` (python, PyPI) or `@ondewo/csi-client-nodejs`. The js and typescript SDKs never generated these methods.
* Generated with ondewo-proto-compiler [5.15.7](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.7), which omits these methods for the angular target. `src/auth/no-client-streaming.spec.ts` fails if the public typings (`index.d.ts`) expose a method whose request is an `Observable`.

*****************

## Release ONDEWO CSI Angular Client 5.6.0

### New Features

* Tracking API Version [5.6.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.6.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) ). The generated `ConversationsClient` gains `setCallMediaControl` (`CallMediaControlLevel` -> `SetCallMediaControlResponse`): per-call operator media control (bot muted, listening paused) pushed by ondewo-sip with a monotonic `generation`; the response reports the `applied` level, `changed`, `stale`, `botPlaybackInFlight` and a `refusalReason`.
* `ControlStreamResponse.mediaControl`: set only on media-control messages of `getControlStream` (pushed on a level change and seeded on every connect). Handle such a message as media control and do not apply its echoed `controlStatus`.
* The API is purely additive: no field, enum value or RPC was renumbered or removed, so code written against 5.5.x keeps compiling.

### Build

* Generated with ondewo-proto-compiler 5.15.5 (5.5.2 was generated with 5.15.2).

*****************

## Release ONDEWO CSI Angular Client 5.5.2

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` /
  `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL (the `host` setting of
  `@ngx-grpc/grpc-web-client`): `https://` by default; `http://` only with `useSecureChannel: false`, and then a
  `console.warn` naming `host:port`. A bare IPv6 literal is bracketed (`https://[::1]:8443`); a host that already
  carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is
  refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the
  TLS handshake: it trusts its own certificate store and presents a client certificate only from the browser / OS
  store, so application code can neither add a CA nor attach a client identity. A non-empty `grpcCert`,
  `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`)
  throws a `GrpcWebEndpointError`; a private key is never shipped to a browser. An empty host, a `host:port` string,
  and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* Mutual TLS works through the browser's certificate store, or by letting the gRPC-web proxy (Envoy) terminate the
  browser's TLS and use mutual TLS upstream. Node.js callers that need certificates in code use the nodejs client.
* README: new section "TLS, mutual TLS and certificates" (modes table, Angular example, openssl test PKI, security
  notes, troubleshooting of the browser's handshake errors).

### Tests

* Unit tests for every rule above; real-handshake tests run the built URL against an HTTPS server with an in-test
  openssl PKI (trusted CA, CRLF-encoded CA, unrelated CA, client certificate required, `[::1]`).
* A jest spec pins the release-notes slice: the Makefile's slice command, the spelling of every heading, the closing
  `*****` separators, one section per version, non-empty notes for the released version, and `src/RELEASE.md`
  identical to `RELEASE.md`.

### Documentation

* RELEASE.md regains the sections and bullets that only the GitHub release bodies or the tags carried, and
  misspelled headings now match the Makefile's slice.

### Build

* Generated with ondewo-proto-compiler 5.15.2 (5.5.1 was generated with 5.13.0).

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
