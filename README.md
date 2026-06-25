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

## Authentication (Keycloak bearer token)

The hand-written auth surface lives in [`src/lib/auth/`](src/lib/auth) and attaches the consumer's current
Keycloak access token as an `Authorization: Bearer <token>` credential to every outgoing gRPC-web and HTTP
request. This library performs **no** OAuth/OIDC flow itself — it never sees a password and never stores a
token. Acquiring and refreshing the token is the responsibility of `keycloak-js` / `keycloak-angular` in the
host application; this client only reads the current token through a `TokenProvider` and forwards it.

### 1. Implement a `TokenProvider` backed by `keycloak-js`

```ts
import { Injectable } from "@angular/core";
import Keycloak from "keycloak-js";
import { TokenProvider, TokenResult } from "@ondewo/csi-client-angular";

@Injectable({ providedIn: "root" })
export class KeycloakTokenProvider implements TokenProvider {
  constructor(private readonly keycloak: Keycloak) {}

  // Refresh the token if it expires within 30s, then return the current one.
  // Returning a Promise lets the interceptor await the refresh before sending.
  getToken(): TokenResult {
    return this.keycloak
      .updateToken(30)
      .then(() => this.keycloak.token ?? null)
      .catch(() => null);
  }
}
```

`getToken()` may return a `string`, `null` (unauthenticated — the request is sent without an `Authorization`
header), a `Promise<string | null>`, or an `Observable<string | null>`. With `keycloak-angular` you would
instead inject `KeycloakService` and call `this.keycloakService.getToken()`.

### 2. Register the provider and the interceptors

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authHttpInterceptor, provideOndewoCsiAuth } from "@ondewo/csi-client-angular";
import { KeycloakTokenProvider } from "./keycloak-token-provider";

bootstrapApplication(AppComponent, {
  providers: [
    // Binds TOKEN_PROVIDER to your implementation and registers the
    // @ngx-grpc AuthGrpcInterceptor for all generated *.pbsc.ts clients.
    provideOndewoCsiAuth(KeycloakTokenProvider),
    // For plain HTTP requests, also register the functional HTTP interceptor.
    provideHttpClient(withInterceptors([authHttpInterceptor]))
  ]
});
```

That is all the wiring required: every CSI service client request now carries `authorization: Bearer <token>`
whenever a token is available, and is sent unchanged when it is not.

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

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-csi-api](https://github.com/ondewo/ondewo-csi-api) -- `CSI_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-files from `root` to the `current user`.

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- Checkout master
  ```shell
  git checkout master
  ```
- Pull newest state
  ```shell
  git pull
  ```
- Adjust `ONDEWO_CSI_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO CSI Angular Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- Release
  ```shell
  make ondewo_release
  ```
  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-csi-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
