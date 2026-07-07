import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, OnDestroy, Optional } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses. Covers clock skew
 * plus the round-trip latency to Keycloak so an in-flight request never travels
 * with a token that expires mid-flight.
 *
 * Mirrors `REFRESH_SKEW_IN_S` in the Node.js SDK and `_EXPIRY_LEEWAY_S` in the
 * Python SDK.
 */
export const REFRESH_SKEW_SECONDS: number = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay, so a tiny or zero
 * `expires_in` cannot spin a hot refresh loop.
 */
export const MIN_REFRESH_DELAY_SECONDS: number = 1;

/**
 * Configuration for {@link KeycloakTokenProvider}.
 *
 * Supply EITHER an `offlineToken` (a pre-issued offline/refresh token — the
 * recommended headless mode, no password is ever sent) OR a `username` +
 * `password` pair (Resource Owner Password Credentials, exchanged once for an
 * offline token via `scope=offline_access`). If both are present the
 * `offlineToken` wins and no password is sent.
 */
export interface KeycloakTokenProviderConfig {
  /**
   * Base Keycloak URL, e.g. `"https://auth.example.com"` or
   * `"https://auth.example.com/auth"`. A trailing slash is tolerated.
   */
  keycloakUrl: string;
  /** Realm name, e.g. `"ondewo-ccai-platform"`. */
  realm: string;
  /**
   * Public SDK client id, e.g. `"ondewo-nlu-cai-sdk-public"`. No
   * `client_secret` is ever sent — the client must be a public client.
   */
  clientId: string;
  /**
   * A pre-issued offline (or refresh) token. When present, the provider boots
   * straight into a `grant_type=refresh_token` exchange and never sends a
   * password. Preferred over `username`/`password`.
   */
  offlineToken?: string;
  /**
   * Technical-user email/username for the one-time ROPC (`grant_type=password`)
   * login. Used only when no `offlineToken` is supplied.
   */
  username?: string;
  /**
   * Technical-user password for the one-time ROPC login. Used only when no
   * `offlineToken` is supplied.
   */
  password?: string;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
   * `HttpClient`'s request options expose no certificate-verification slot. The
   * value is therefore stored on the provider for cross-SDK config parity with
   * the Python/Node.js clients (where it does disable TLS verification) but has
   * no effect on the outgoing request here. For a self-signed local Envoy at
   * `https://localhost:12001/auth`, the certificate must be trusted at the
   * browser/OS level instead.
   */
  keycloakVerifySsl?: boolean;
}

/**
 * DI token under which the consuming application provides the
 * {@link KeycloakTokenProviderConfig} consumed by {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       offlineToken: "<offline-token>",
 *     },
 *   },
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_CSI_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/** Raised on any token-endpoint failure or unusable token-endpoint response. */
export class KeycloakAuthenticationError extends Error {
  /**
   * @param message human-readable description of the token failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "KeycloakAuthenticationError";
  }
}

/** The fields this provider reads from a Keycloak token-endpoint response. */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token?: string;
  /** The (optionally rotated) offline/refresh token; absent if unchanged. */
  refresh_token?: string;
  /** The access token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Render an unknown thrown value as a human-readable detail string for an error
 * message, without risking the default `[object Object]` stringification.
 *
 * @param caughtError the value thrown by a failed token-endpoint call.
 * @returns the error's message (for `Error`s), the value itself (for strings),
 *   or its JSON form (for anything else).
 */
function describeError(caughtError: unknown): string {
  if (caughtError instanceof Error) {
    return caughtError.message;
  }
  if (typeof caughtError === "string") {
    return caughtError;
  }
  return JSON.stringify(caughtError);
}

/**
 * A concrete, ready-to-use {@link TokenProvider} that performs the headless
 * Keycloak offline-token flow itself, so consumers get background access-token
 * refresh without implementing {@link TokenProvider}.
 *
 * On the first {@link login}, the provider obtains an access token + an offline
 * refresh token (via `grant_type=refresh_token` when an `offlineToken` is
 * configured, otherwise via a one-time `grant_type=password` ROPC login with
 * `scope=offline_access`). It then keeps the access token fresh with a
 * background timer that re-runs the `refresh_token` grant {@link REFRESH_SKEW_SECONDS}
 * before the token expires. {@link getToken} returns the current cached access
 * token synchronously (or `null` before {@link login} completes).
 *
 * The flow mirrors the Node.js SDK's `OfflineTokenProvider` and the Python
 * SDK's `KeycloakTokenProvider` (refresh-before-expiry, refresh-token rotation,
 * a non-`null` `access_token` guard). No `client_secret` is ever sent.
 *
 * Register it with the SDK's `provideOndewoCsiAuth(KeycloakTokenProvider)` and
 * provide a {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}; call {@link login} once on
 * application start, and {@link ngOnDestroy} (or {@link stop}) cancels the
 * background refresh.
 */
@Injectable()
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Pre-computed OIDC token endpoint URL for the configured realm. */
  private readonly tokenEndpoint: string;

  /** The current access token, or `null` before {@link login} has completed. */
  private accessToken: string | null = null;

  /** The current offline/refresh token, or `""` before {@link login}. */
  private refreshToken: string = "";

  /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;

  /** Whether {@link stop} has run; suppresses any further (re-)scheduling. */
  private stopped: boolean = false;

  /** Public SDK client id sent on every token request (no `client_secret`). */
  private readonly clientId: string;

  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
   * NO-OP in this browser client (the browser owns the TLS handshake), so the
   * outgoing {@link postTokenRequest} call is unaffected by its value. See
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private readonly verifySsl: boolean;

  /**
   * The form fields for the one-time {@link login} grant: a `refresh_token`
   * grant when an `offlineToken` is configured, otherwise a `password` grant.
   * Built once in the constructor so {@link login} carries no assertions.
   */
  private readonly loginParams: Record<string, string>;

  /**
   * Construct the provider. No network call is made here — call {@link login}
   * to acquire the first token and arm the background refresh.
   *
   * @param http the Angular {@link HttpClient} used for token-endpoint calls.
   * @param injectedConfig the {@link KeycloakTokenProviderConfig} (injected via
   *   {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}).
   * @throws KeycloakAuthenticationError when no config is provided, when a
   *   mandatory field is empty, or when neither an `offlineToken` nor a
   *   `username`/`password` pair is supplied.
   */
  public constructor(
    private readonly http: HttpClient,
    @Optional()
    @Inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG)
    injectedConfig: KeycloakTokenProviderConfig | null
  ) {
    if (injectedConfig === null) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProvider requires a KEYCLOAK_TOKEN_PROVIDER_CONFIG to be provided"
      );
    }
    for (const key of ["keycloakUrl", "realm", "clientId"] as const) {
      const value: string | undefined = injectedConfig[key];
      if (typeof value !== "string" || value.length === 0) {
        throw new KeycloakAuthenticationError(
          `KeycloakTokenProvider config field "${key}" is required and must be a non-empty string`
        );
      }
    }

    this.clientId = injectedConfig.clientId;
    // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
    this.verifySsl = injectedConfig.keycloakVerifySsl ?? true;
    const base: string = injectedConfig.keycloakUrl.replace(/\/+$/, "");
    this.tokenEndpoint = `${base}/realms/${encodeURIComponent(injectedConfig.realm)}/protocol/openid-connect/token`;

    const offlineToken: string | undefined = injectedConfig.offlineToken;
    const username: string | undefined = injectedConfig.username;
    const password: string | undefined = injectedConfig.password;
    if (typeof offlineToken === "string" && offlineToken.length > 0) {
      this.loginParams = {
        grant_type: "refresh_token",
        client_id: this.clientId,
        refresh_token: offlineToken
      };
    } else if (typeof username === "string" && username.length > 0 && typeof password === "string" && password.length > 0) {
      this.loginParams = {
        grant_type: "password",
        client_id: this.clientId,
        username,
        password,
        scope: "offline_access"
      };
    } else {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProvider config must supply either an offlineToken or a username + password"
      );
    }
  }

  /**
   * Return the current access token, or `null` before {@link login} has
   * completed. Synchronous: the background timer keeps the cached token fresh,
   * so the SDK's interceptors read it without awaiting a network round-trip.
   *
   * @returns the current access token, or `null` when not yet authenticated.
   */
  public getToken(): TokenResult {
    return this.accessToken;
  }

  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   *
   * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
   * this browser client — the browser owns the TLS handshake, so the value never
   * reaches {@link postTokenRequest} and does not change the outgoing request.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  public get keycloakVerifySsl(): boolean {
    return this.verifySsl;
  }

  /**
   * Perform the one-time login and arm the first background refresh.
   *
   * When the config carries an `offlineToken`, this runs a
   * `grant_type=refresh_token` exchange; otherwise it runs a one-time
   * `grant_type=password` ROPC login with `scope=offline_access`. Idempotent
   * results are not guaranteed — call it exactly once on application start.
   *
   * @returns a promise that resolves once the first access token is cached and
   *   the background refresh is armed.
   * @throws KeycloakAuthenticationError when the token endpoint fails, the
   *   response lacks an `access_token`, or (for the ROPC path) the response
   *   carries no `refresh_token`.
   */
  public async login(): Promise<void> {
    const response: KeycloakTokenResponse = await this.postTokenRequest(this.loginParams);
    this.storeTokens(response);
    if (this.refreshToken.length === 0) {
      throw new KeycloakAuthenticationError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants and the offline_access scope"
      );
    }
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Exchange the offline refresh token for a fresh access token and re-arm the
   * next refresh. No-ops once {@link stop} has run.
   *
   * @returns a promise resolving once the token is refreshed and re-armed.
   * @throws KeycloakAuthenticationError when the refresh request fails or
   *   returns an unusable body.
   */
  private async refresh(): Promise<void> {
    if (this.stopped) {
      return;
    }
    const response: KeycloakTokenResponse = await this.postTokenRequest({
      grant_type: "refresh_token",
      client_id: this.clientId,
      refresh_token: this.refreshToken
    });
    this.storeTokens(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Arm a single timer for the next refresh. The delay is `expiresInRaw` minus
   * {@link REFRESH_SKEW_SECONDS}, floored at {@link MIN_REFRESH_DELAY_SECONDS}.
   * A missing or non-positive `expires_in` falls back to the floor.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest response.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.stopped) {
      return;
    }
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
    const expiresInSeconds: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_SECONDS;
    const delaySeconds: number = Math.max(expiresInSeconds - REFRESH_SKEW_SECONDS, MIN_REFRESH_DELAY_SECONDS);
    this.timer = setTimeout((): void => {
      void this.refresh().catch((): void => {
        // Swallow a transient background-refresh failure: the next interceptor read
        // gets the stale (possibly expired) token and the server replies
        // UNAUTHENTICATED, prompting the consumer to re-login.
      });
    }, delaySeconds * 1000);
  }

  /**
   * POST a form-urlencoded body to the token endpoint and return the parsed
   * response.
   *
   * @param params the form fields to URL-encode into the request body.
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws KeycloakAuthenticationError on a transport error.
   */
  private async postTokenRequest(params: Record<string, string>): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    try {
      return await firstValueFrom(this.http.post<KeycloakTokenResponse>(this.tokenEndpoint, body, { headers }));
    } catch (caughtError: unknown) {
      throw new KeycloakAuthenticationError(`Keycloak token request failed: ${describeError(caughtError)}`);
    }
  }

  /**
   * Store the access token and (rotated) refresh token from a token response.
   *
   * @param response the parsed token-endpoint response.
   * @throws KeycloakAuthenticationError when the response carries no
   *   `access_token`.
   */
  private storeTokens(response: KeycloakTokenResponse): void {
    if (typeof response.access_token !== "string" || response.access_token.length === 0) {
      throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
    }
    this.accessToken = response.access_token;
    // Keycloak may rotate the offline refresh token; keep the newest when present so a
    // response that omits it does not blank out the offline token.
    if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) {
      this.refreshToken = response.refresh_token;
    }
  }

  /** Stop the background refresh loop. Idempotent; safe to call from any state. */
  public stop(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /** Angular lifecycle hook: cancels the background refresh on destruction. */
  public ngOnDestroy(): void {
    this.stop();
  }
}
