<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fcsi-client-angular"><img src="https://badge.fury.io/js/%40ondewo%2Fcsi-client-angular.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO CSI Client Angular
  </h1>
</div>

## Overview

`@ondewo/csi-client-angular` is a compiled version of the [ONDEWO CSI API](https://github.com/ondewo/ondewo-csi-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the CSI API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/csi-client-angular
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-csi-client-angular.git ## Clone repository
cd ondewo-csi-client-angular                                      ## Change into repo-directoy
make setup_developer_environment_locally                          ## Install dependencies
```

## Package structure

```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations.pb.d.ts
│   │   │   └── http.pb.d.ts
│   │   ├── rpc
│   │   │   └── status.pb.d.ts
│   │   └── type
│   │       └── latlng.pb.d.ts
│   └── ondewo
│       ├── csi
│       │   ├── conversation.pbconf.d.ts
│       │   ├── conversation.pb.d.ts
│       │   └── conversation.pbsc.d.ts
│       ├── nlu
│       │   ├── agent.pbconf.d.ts
│       │   ├── agent.pb.d.ts
│       │   ├── agent.pbsc.d.ts
│       │   ├── aiservices.pbconf.d.ts
│       │   ├── aiservices.pb.d.ts
│       │   ├── aiservices.pbsc.d.ts
│       │   ├── ...
│       ├── s2t
│       │   ├── speech-to-text.pbconf.d.ts
│       │   ├── speech-to-text.pb.d.ts
│       │   └── speech-to-text.pbsc.d.ts
│       └── t2s
│           ├── text-to-speech.pbconf.d.ts
│           ├── text-to-speech.pb.d.ts
│           └── text-to-speech.pbsc.d.ts
├── esm2022
│   ├── api
│   │   ├── google
│   │   │   ├── api
│   │   │   │   ├── annotations.pb.mjs
│   │   │   │   └── http.pb.mjs
│   │   │   ├── rpc
│   │   │   │   └── status.pb.mjs
│   │   │   └── type
│   │   │       └── latlng.pb.mjs
│   │   └── ondewo
│   │       ├── csi
│   │       │   ├── conversation.pbconf.mjs
│   │       │   ├── conversation.pb.mjs
│   │       │   └── conversation.pbsc.mjs
│   │       ├── nlu
│   │       │   ├── agent.pbconf.mjs
│   │       │   ├── agent.pb.mjs
│   │       │   ├── agent.pbsc.mjs
│   │       │   ├── aiservices.pbconf.mjs
│   │       │   ├── aiservices.pb.mjs
│   │       │   ├── aiservices.pbsc.mjs
│   │       │   ├── ...
│   │       ├── s2t
│   │       │   ├── speech-to-text.pbconf.mjs
│   │       │   ├── speech-to-text.pb.mjs
│   │       │   └── speech-to-text.pbsc.mjs
│   │       └── t2s
│   │           ├── text-to-speech.pbconf.mjs
│   │           ├── text-to-speech.pb.mjs
│   │           └── text-to-speech.pbsc.mjs
│   ├── ondewo-csi-client-angular.mjs
│   └── public-api.mjs
├── fesm2022
│   ├── ondewo-csi-client-angular.mjs
│   └── ondewo-csi-client-angular.mjs.map
├── index.d.ts
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md
```

## TLS, mutual TLS and certificates

gRPC encrypts with **TLS**; in this library the transport is **gRPC-web** over the browser's `fetch`/XHR, so TLS
means an `https://` endpoint (an Envoy or other gRPC-web proxy in front of the ONDEWO server). The **browser** owns
the handshake: it verifies the server against its own (OS / browser) trust store, and it presents a client
certificate only from its own certificate store. Application code can neither add a CA nor attach a client identity,
so this package takes no certificate or key. `buildGrpcWebHost` builds the endpoint URL from the same `host` /
`port` / `useSecureChannel` fields every ONDEWO SDK uses:

| Mode | `useSecureChannel` | Where the certificates live |
| --- | --- | --- |
| Plaintext (not for production) | `false` | none; `http://`, logged with `console.warn` naming `host:port` |
| TLS, public CA (system roots) | `true` (default) | nothing to do: the browser trusts the server certificate |
| TLS, private / custom CA | `true` (default) | the CA (`ca.pem`) imported into the OS / browser trust store of every client machine |
| Mutual TLS | `true` (default) | the proxy requests a client certificate; the browser offers one from the user's certificate store |

For mutual TLS without certificates on the client machines, let the gRPC-web proxy (Envoy) terminate the browser's
TLS and use mutual TLS on its upstream connection to the ONDEWO server.

```ts
import { GrpcCoreModule } from "@ngx-grpc/core";
import { GrpcWebClientModule } from "@ngx-grpc/grpc-web-client";
import { buildGrpcWebHost } from "@ondewo/csi-client-angular";

@NgModule({
  imports: [
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: buildGrpcWebHost({ host: "csi.example.com", port: 443 }) } // https://csi.example.com:443
    })
  ]
})
export class AppModule {}
```

Rules the code enforces (`GrpcWebEndpointError`, whose message names the field, never its value):

- `useSecureChannel` defaults to `true` (`https://`). `false` gives `http://` and a `console.warn` naming `host:port`.
- `grpcCert`, `grpcClientCert`, `grpcClientKey` (and the snake_case spellings of the other SDKs' configs) are
  **refused** when non-empty, instead of being silently dropped: never ship a private key or certificate in a browser
  bundle. Empty strings / `null` count as unset (plain TLS).
- A bare IPv6 literal is bracketed (`::1` → `https://[::1]:8443`); a bracketed host is left alone. A host with a
  scheme (`https://csi.example.com/grpc`) is used as given; then `port` must be omitted, and an `http://` URL
  together with `useSecureChannel: true` is refused. A `host:port` string is refused; use `port`.
- The certificate's subject alternative names (SAN) must match the host in the URL; a browser has no
  `ssl_target_name_override`.

Outside a browser (Node.js services, tests, CLIs) use [`@ondewo/csi-client-nodejs`](https://www.npmjs.com/package/@ondewo/csi-client-nodejs): it takes
the CA and the client certificate / key as PEM content and implements mutual TLS in code. This package runs only in a
browser (Angular, gRPC-web) and has no Node.js transport.

### A test PKI with openssl

A CA, a server certificate with SANs, and a client certificate with the `clientAuth` extended key usage. For tests
only: the keys are unencrypted.

```bash
openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes -days 365 \
  -subj "/CN=Test CA" -keyout ca.key -out ca.pem

printf 'subjectAltName=DNS:localhost,IP:127.0.0.1\nextendedKeyUsage=serverAuth\n' > server.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=localhost" -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile server.ext -out server.pem

printf 'extendedKeyUsage=clientAuth\n' > client.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=my-client" -keyout client.key -out client.csr
openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile client.ext -out client.pem

# the browser imports a client identity as PKCS#12
openssl pkcs12 -export -in client.pem -inkey client.key -certfile ca.pem -out client.p12

chmod 600 *.key *.p12
openssl verify -CAfile ca.pem server.pem client.pem
```

The gRPC-web proxy serves `server.pem` / `server.key` and, for mutual TLS, trusts `ca.pem` for its clients (Envoy:
`require_client_certificate: true` with `validation_context.trusted_ca`). The browser machine imports `ca.pem` as a
trusted root and, for mutual TLS, `client.p12` as a personal certificate.

### TLS security notes

- No secret is part of the endpoint config, so nothing in it needs redacting, and this package never logs a config.
- A private key in a web application is readable by anyone who loads the page. Keep client identities in the
  browser's certificate store (or a smart card), never in `environment.ts`, `assets/` or the bundle.
- A page served over `https://` cannot call an `http://` endpoint (mixed content); use plaintext only for local
  development with the page itself on `http://localhost`.

### TLS troubleshooting

The browser reports a failed handshake to gRPC-web as status `UNAVAILABLE` / `UNKNOWN` with little detail; the cause
is in the browser's developer tools (Network tab / console):

- **`net::ERR_CERT_AUTHORITY_INVALID`**: the server certificate is signed by a CA the browser does not trust. Import
  the CA into the OS / browser trust store, or serve a certificate from a public CA.
- **`net::ERR_CERT_COMMON_NAME_INVALID`**: the host in the URL is not in the certificate's SAN. Connect by the name in
  the SAN, or reissue the certificate with the host (`IP:` SAN for an address).
- **`net::ERR_BAD_SSL_CLIENT_AUTH_CERT`** / **`ERR_SSL_CLIENT_AUTH_CERT_NEEDED`**: the proxy requires a client
  certificate and the browser has none (or one the proxy's CA did not sign). Import the user's `.p12`, and check that
  the proxy trusts its CA.
- **Mixed content / blocked request**: the page is on `https://` and the endpoint on `http://`; use
  `useSecureChannel: true`.
- **CORS error**: not a TLS problem; the gRPC-web proxy must allow the page's origin and the `grpc-web` headers.

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-csi-api](https://github.com/ondewo/ondewo-csi-api) -- `CSI_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and hands the files the root-run codegen container wrote back to the current user (with a container, not `sudo`).

## GitHub Repository - Release Automation

The repository is published to npm and GitHub by the automated release process of ONDEWO
(`make release_all_clients` in [ondewo-csi-api](https://github.com/ondewo/ondewo-csi-api), which runs
`make ondewo_release` here).

Before releasing:

- Check out and pull `master`.
- Set `ONDEWO_CSI_VERSION` in the `Makefile`.
- Add the release notes to `src/RELEASE.md`, with the heading spelled exactly like this (the release
  matches it anchored, `^#+ Release ONDEWO CSI Angular Client <version>$`):

  ```text
  ## Release ONDEWO CSI Angular Client X.Y.Z    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- Release:

  ```shell
  make ondewo_release
  ```

`make ondewo_release` loads the npm and GitHub tokens from the devops-accounts repository (cloned into a
temporary directory outside this repository, or read from `DEVOPS_ACCOUNT_DIR` when the driver hands one
over), deletes the clone again before anything else runs (also when it fails), and runs `make release`:

1. `release_preflight` (read-only) stops the release before anything is built, committed or pushed unless
   the npm token authenticates (`npm whoami`), the GitHub token can push to this repository, this host can
   `git push`, neither the tag nor the `release/<version>` branch exists (locally or on origin), npm does
   not have the version yet, `src/RELEASE.md` has non-empty notes for it, and the host tools exist.
2. `build`, `check_build`, `release_tests` (`npm ci` and the whole jest suite) and the pre-commit hooks run
   **without** the credentials in their environment.
3. The generated code is committed locally; `check_tag_matches_package` then requires every file the npm
   package ships to be committed and byte-equal at that commit.
4. The `npm` folder is published to npmjs.com, and `check_npm_published` waits until npm serves the version.
5. Only then is the commit pushed and the `release/<version>` branch and `<version>` tag created and pushed.
6. The GitHub release is created (it refuses empty notes), and `release_verify` checks the tag on origin, the
   GitHub release body and the npm version.

A failing step stops the release; nothing after it runs. `make release_preflight` and `make release_verify`
can be run on their own (both read-only).

Host requirements: `docker`, `make`, `git`, `perl` and `curl`, plus SSH push access to this repository.
npm and the GitHub CLI run in the pinned `Dockerfile.utils` image; node steps (dependency install, tests,
hooks, `npm pack`, `npm view`) run on the host when `npm` is installed, otherwise in the same pinned node
image as the invoking user.

[comment]: <> (END OF GITHUB README)
