import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { throwError } from "rxjs";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_SECONDS,
  REFRESH_RETRY_BASE_DELAY_SECONDS,
  REFRESH_SKEW_SECONDS
} from "./keycloak-token-provider";

/** Base Keycloak URL (deliberately carries a trailing slash to exercise stripping). */
const KEYCLOAK_URL: string = "https://auth.example.com/auth/";

/** Realm name (the leading-edge value also asserts URL-encoding of the path). */
const REALM: string = "ondewo ccai";

/** Public SDK client id sent on every token request. */
const CLIENT_ID: string = "ondewo-nlu-cai-sdk-public";

/** Pre-issued offline token used by the offline-token login path. */
const OFFLINE_TOKEN: string = "offline-token-0";

/** Technical-user credentials used by the ROPC login path. */
const USERNAME: string = "tech-user@example.com";
const PASSWORD: string = "tech-user-password";

/** The token endpoint URL the provider must POST to, given the config above. */
const TOKEN_ENDPOINT: string = "https://auth.example.com/auth/realms/ondewo%20ccai/protocol/openid-connect/token";

/**
 * Build a provider under test with the given config, wiring the Angular HTTP
 * testing backend so the token endpoint can be mocked.
 *
 * @param config the {@link KeycloakTokenProviderConfig}, or `null` to provide none.
 * @returns the provider instance and the {@link HttpTestingController}.
 */
function build(config: KeycloakTokenProviderConfig | null): {
  provider: KeycloakTokenProvider;
  httpMock: HttpTestingController;
} {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      KeycloakTokenProvider,
      ...(config === null ? [] : [{ provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config }])
    ]
  });
  const provider: KeycloakTokenProvider = TestBed.inject(KeycloakTokenProvider);
  const httpMock: HttpTestingController = TestBed.inject(HttpTestingController);
  return { provider, httpMock };
}

/** A full config that boots via the offline-token (`refresh_token` grant) path. */
function offlineConfig(): KeycloakTokenProviderConfig {
  return { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, offlineToken: OFFLINE_TOKEN };
}

/** A full config that boots via the ROPC (`password` grant) path. */
function credentialsConfig(): KeycloakTokenProviderConfig {
  return { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, username: USERNAME, password: PASSWORD };
}

/** Parse a captured request's form-urlencoded body into a plain field map. */
function formFields(request: TestRequest): Record<string, string> {
  const params: URLSearchParams = new URLSearchParams(request.request.body as string);
  const fields: Record<string, string> = {};
  params.forEach((value: string, key: string): void => {
    fields[key] = value;
  });
  return fields;
}

describe("KeycloakTokenProvider", () => {
  /** Constructor-time config validation (no network call made). */
  describe("config validation", () => {
    /** A missing config token is reported with a clear error. */
    it("throws when no config is provided", () => {
      expect(() => build(null)).toThrow(KeycloakAuthenticationError);
    });

    /** Each of the three mandatory string fields is required and non-empty. */
    it.each(["keycloakUrl", "realm", "clientId"] as const)(
      "throws when %s is empty",
      (field: "keycloakUrl" | "realm" | "clientId"): void => {
        const config: KeycloakTokenProviderConfig = { ...offlineConfig(), [field]: "" };
        expect(() => build(config)).toThrow(KeycloakAuthenticationError);
      }
    );

    /** Neither an offline token nor a credentials pair → unusable config. */
    it("throws when neither offlineToken nor username/password is supplied", () => {
      const config: KeycloakTokenProviderConfig = { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID };
      expect(() => build(config)).toThrow(KeycloakAuthenticationError);
    });

    /** A username without a password is incomplete and rejected. */
    it("throws when a username is supplied without a password", () => {
      const config: KeycloakTokenProviderConfig = { ...credentialsConfig(), password: "" };
      expect(() => build(config)).toThrow(KeycloakAuthenticationError);
    });

    /** Before login, getToken reports no token. */
    it("returns null from getToken before login", () => {
      const { provider, httpMock } = build(offlineConfig());
      expect(provider.getToken()).toBeNull();
      httpMock.verify();
    });
  });

  describe("login", () => {
    afterEach(() => {
      jest.useRealTimers();
    });

    /** The offline-token path posts a refresh_token grant and caches the token. */
    it("logs in via the refresh_token grant when an offlineToken is configured", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

      expect(request.request.method).toBe("POST");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      expect(formFields(request)).toEqual({
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        refresh_token: OFFLINE_TOKEN
      });

      request.flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: 300 });
      await pending;

      expect(provider.getToken()).toBe("access-0");
      provider.stop();
      httpMock.verify();
    });

    /** The ROPC path posts a password grant with the offline_access scope. */
    it("logs in via the password grant when only credentials are configured", async () => {
      const { provider, httpMock } = build(credentialsConfig());
      const pending: Promise<void> = provider.login();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

      expect(formFields(request)).toEqual({
        grant_type: "password",
        client_id: CLIENT_ID,
        username: USERNAME,
        password: PASSWORD,
        scope: "offline_access"
      });

      request.flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: 300 });
      await pending;

      expect(provider.getToken()).toBe("access-0");
      provider.stop();
      httpMock.verify();
    });

    /** offlineToken wins over credentials when both are present. */
    it("prefers the offlineToken over credentials when both are present", async () => {
      const { provider, httpMock } = build({ ...credentialsConfig(), offlineToken: OFFLINE_TOKEN });
      const pending: Promise<void> = provider.login();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

      expect(formFields(request).grant_type).toBe("refresh_token");
      request.flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: 300 });
      await pending;
      provider.stop();
      httpMock.verify();
    });

    /** A response without an access_token is rejected. */
    it("rejects when the response carries no access_token", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ refresh_token: "offline-token-1", expires_in: 300 });
      await expect(pending).rejects.toBeInstanceOf(KeycloakAuthenticationError);
      httpMock.verify();
    });

    /** The ROPC path rejects when the response omits a refresh_token. */
    it("rejects when the response carries no refresh_token", async () => {
      const { provider, httpMock } = build(credentialsConfig());
      const pending: Promise<void> = provider.login();
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: "access-0", expires_in: 300 });
      await expect(pending).rejects.toBeInstanceOf(KeycloakAuthenticationError);
      httpMock.verify();
    });

    /** A transport error is wrapped in a KeycloakAuthenticationError. */
    it("wraps a transport error in a KeycloakAuthenticationError", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(pending).rejects.toBeInstanceOf(KeycloakAuthenticationError);
      httpMock.verify();
    });

    /** An Error-typed transport rejection is wrapped, surfacing its message. */
    it("wraps an Error-typed transport rejection, surfacing its message", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const post: jest.SpyInstance = jest.spyOn(provider["http"], "post");
      post.mockReturnValue(throwError((): Error => new Error("network down")));
      await expect(provider.login()).rejects.toThrow("network down");
      post.mockRestore();
      httpMock.verify();
    });

    /** A non-Error transport rejection is still wrapped (stringified). */
    it("wraps a non-Error transport rejection", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const post: jest.SpyInstance = jest.spyOn(provider["http"], "post");
      post.mockReturnValue(throwError((): string => "string-failure"));
      await expect(provider.login()).rejects.toThrow("string-failure");
      post.mockRestore();
      httpMock.verify();
    });
  });

  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", () => {
    afterEach(() => {
      jest.useRealTimers();
    });

    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", () => {
      const { provider, httpMock } = build(offlineConfig());
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.verify();
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", () => {
      const { provider, httpMock } = build({ ...offlineConfig(), keycloakVerifySsl: true });
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.verify();
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", () => {
      const { provider, httpMock } = build({ ...offlineConfig(), keycloakVerifySsl: false });
      expect(provider.keycloakVerifySsl).toBe(false);
      httpMock.verify();
    });

    /**
     * The flag is inert at the transport layer: with keycloakVerifySsl: false the
     * provider issues the SAME single POST (same URL, method, headers, body) and
     * logs in exactly as with the field omitted — proving it is a no-op, not wired
     * to TLS.
     */
    it("does not alter or break the token request when keycloakVerifySsl is false", async () => {
      const { provider, httpMock } = build({ ...offlineConfig(), keycloakVerifySsl: false });
      const pending: Promise<void> = provider.login();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

      expect(request.request.method).toBe("POST");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      expect(formFields(request)).toEqual({
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        refresh_token: OFFLINE_TOKEN
      });

      request.flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: 300 });
      await pending;

      expect(provider.getToken()).toBe("access-0");
      provider.stop();
      httpMock.verify();
    });
  });

  describe("background refresh", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    /**
     * Drive a login + initial flush so the provider is authenticated and a
     * refresh timer is armed, returning the captured pieces.
     */
    async function loggedIn(expiresIn: number): Promise<{
      provider: KeycloakTokenProvider;
      httpMock: HttpTestingController;
    }> {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: expiresIn });
      await pending;
      return { provider, httpMock };
    }

    /** The refresh fires REFRESH_SKEW_SECONDS before expiry, rotating both tokens. */
    it("refreshes shortly before expiry and rotates the refresh token", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);

      // Nothing fires before (expires_in - skew) seconds.
      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000 - 1);
      httpMock.expectNone(TOKEN_ENDPOINT);

      await jest.advanceTimersByTimeAsync(1);
      const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(formFields(refreshRequest)).toEqual({
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        refresh_token: "offline-token-1"
      });
      refreshRequest.flush({ access_token: "access-1", refresh_token: "offline-token-2", expires_in: expiresIn });
      await Promise.resolve();

      expect(provider.getToken()).toBe("access-1");
      provider.stop();
      httpMock.verify();
    });

    /** A background-refresh HTTP failure is swallowed; the previous token stays served. */
    it("swallows a failed background refresh and keeps the previous token", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      refreshRequest.flush("nope", { status: 401, statusText: "Unauthorized" });
      // Drain the rejected refresh promise plus its swallowing catch handler.
      await Promise.resolve();
      await Promise.resolve();

      // The failed refresh is swallowed and the previous access token stays served.
      expect(provider.getToken()).toBe("access-0");
      provider.stop();
      httpMock.verify();
    });

    /**
     * Drive a login with a deterministic jitter source, so the failure-path backoff delay
     * is exact rather than drawn from Math.random.
     *
     * @param expiresIn the access-token lifetime the login response reports.
     * @param fraction the [0,1) value the backoff jitter should use.
     */
    async function loggedInWithJitter(
      expiresIn: number,
      fraction: number
    ): Promise<{ provider: KeycloakTokenProvider; httpMock: HttpTestingController }> {
      const { provider, httpMock } = build({ ...offlineConfig(), randomFraction: (): number => fraction });
      const pending: Promise<void> = provider.login();
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: expiresIn });
      await pending;
      return { provider, httpMock };
    }

    // A failed background refresh must RE-ARM the loop. Before this the provider armed its next
    // refresh only on the success path, so a single transient failure ended token renewal for the
    // whole life of the application -- silently, because the stale token keeps working until it
    // expires. Re-arming at MIN_REFRESH_DELAY_SECONDS (1 s) would have traded that for a 1 Hz poll
    // per client against a realm every call container logs into, hence the jittered ladder.

    /** A failed refresh re-arms the loop, and the next attempt recovers the token. */
    it("re-arms the refresh loop after a failed background refresh", async () => {
      const expiresIn: number = 300;
      // fraction 0 puts every retry at the base of its window, so the delay is exactly 5 s.
      const { provider, httpMock } = await loggedInWithJitter(expiresIn, 0);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();
      expect(provider.getToken()).toBe("access-0");

      // Nothing may fire before the 5 s retry base...
      await jest.advanceTimersByTimeAsync(REFRESH_RETRY_BASE_DELAY_SECONDS * 1000 - 1);
      httpMock.expectNone(TOKEN_ENDPOINT);

      // ...and the retry must fire once it does. This is the assertion that fails outright on the
      // pre-fix provider, where no timer was ever re-armed.
      await jest.advanceTimersByTimeAsync(1);
      const retry: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(formFields(retry).grant_type).toBe("refresh_token");
      retry.flush({ access_token: "access-1", refresh_token: "offline-token-2", expires_in: expiresIn });
      await Promise.resolve();

      expect(provider.getToken()).toBe("access-1");
      provider.stop();
      httpMock.verify();
    });

    /** Consecutive failures back off exponentially and stop growing at the ceiling. */
    it("backs off exponentially while refreshes keep failing, capped at the ceiling", async () => {
      const expiresIn: number = 300;
      // fraction 1 puts every retry at the TOP of its window, i.e. exactly the ceiling for that
      // failure count -- which is what makes the ladder observable.
      const { provider, httpMock } = await loggedInWithJitter(expiresIn, 1);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // base * 2^(failures-1), capped at REFRESH_RETRY_MAX_DELAY_SECONDS. The cap is the point:
      // without it a long outage would push the next attempt out by hours.
      const expectedDelaysInS: number[] = [5, 10, 20, 40, 80, 160, 300, 300];
      for (const delayInS of expectedDelaysInS) {
        await jest.advanceTimersByTimeAsync(delayInS * 1000 - 1);
        httpMock.expectNone(TOKEN_ENDPOINT);

        await jest.advanceTimersByTimeAsync(1);
        httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
        await Promise.resolve();
        await Promise.resolve();
      }
      expect(provider.getToken()).toBe("access-0");
      provider.stop();
      httpMock.verify();
    });

    /** The delay is drawn from inside the jitter window, not pinned to either edge. */
    it("draws the retry delay from the jitter window", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedInWithJitter(expiresIn, 0.5);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // Failure 1: window [5, 5] -> 5 s regardless of the fraction.
      await jest.advanceTimersByTimeAsync(5000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // Failure 2: window [5, 10], fraction 0.5 -> 7.5 s. Neither edge of the window.
      await jest.advanceTimersByTimeAsync(7499);
      httpMock.expectNone(TOKEN_ENDPOINT);
      await jest.advanceTimersByTimeAsync(1);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({
        access_token: "access-1",
        refresh_token: "offline-token-2",
        expires_in: expiresIn
      });
      await Promise.resolve();

      expect(provider.getToken()).toBe("access-1");
      provider.stop();
      httpMock.verify();
    });

    /** A successful refresh resets the ladder, so the next failure waits the base again. */
    it("resets the backoff ladder after a successful refresh", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedInWithJitter(expiresIn, 1);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // Failure 1 -> 5 s, and this attempt fails too.
      await jest.advanceTimersByTimeAsync(5000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // Failure 2 -> 10 s, and this attempt SUCCEEDS.
      await jest.advanceTimersByTimeAsync(10000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({
        access_token: "access-1",
        refresh_token: "offline-token-2",
        expires_in: expiresIn
      });
      await Promise.resolve();
      expect(provider.getToken()).toBe("access-1");

      // Back on the success schedule, and that attempt fails again.
      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      // Because the ladder was reset it must wait 5 s, not 20 s.
      await jest.advanceTimersByTimeAsync(4999);
      httpMock.expectNone(TOKEN_ENDPOINT);
      await jest.advanceTimersByTimeAsync(1);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 503, statusText: "Unavailable" });
      await Promise.resolve();
      await Promise.resolve();

      provider.stop();
      httpMock.verify();
    });

    /** A response without a rotated refresh_token keeps the previous one. */
    it("keeps the previous refresh token when the response omits a new one", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);

      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: "access-1", expires_in: expiresIn });
      await Promise.resolve();

      // The next scheduled refresh must reuse the un-rotated refresh token.
      await jest.advanceTimersByTimeAsync((expiresIn - REFRESH_SKEW_SECONDS) * 1000);
      const second: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(formFields(second).refresh_token).toBe("offline-token-1");
      second.flush({ access_token: "access-2", expires_in: expiresIn });
      await Promise.resolve();

      provider.stop();
      httpMock.verify();
    });

    /** A missing/zero expires_in floors the delay at MIN_REFRESH_DELAY_SECONDS. */
    it("floors the refresh delay when expires_in is absent", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: "access-0", refresh_token: "offline-token-1" });
      await pending;

      await jest.advanceTimersByTimeAsync(MIN_REFRESH_DELAY_SECONDS * 1000 - 1);
      httpMock.expectNone(TOKEN_ENDPOINT);
      await jest.advanceTimersByTimeAsync(1);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: "access-1", refresh_token: "offline-token-1" });
      await Promise.resolve();

      provider.stop();
      httpMock.verify();
    });

    /** stop() cancels the armed timer so no further refresh fires. */
    it("stops the refresh loop on stop()", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);
      provider.stop();
      await jest.advanceTimersByTimeAsync(expiresIn * 1000);
      httpMock.expectNone(TOKEN_ENDPOINT);
      httpMock.verify();
    });

    /** ngOnDestroy stops the loop too (Angular lifecycle teardown). */
    it("stops the refresh loop on ngOnDestroy()", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);
      provider.ngOnDestroy();
      await jest.advanceTimersByTimeAsync(expiresIn * 1000);
      httpMock.expectNone(TOKEN_ENDPOINT);
      httpMock.verify();
    });

    /** stop() is idempotent and safe before any timer was ever armed. */
    it("is a no-op when stop() runs before login", () => {
      const { provider, httpMock } = build(offlineConfig());
      expect(() => {
        provider.stop();
        provider.stop();
      }).not.toThrow();
      httpMock.verify();
    });

    /** stop() during an in-flight login suppresses the post-response reschedule. */
    it("does not arm a refresh when stopped while the login is in flight", async () => {
      const { provider, httpMock } = build(offlineConfig());
      const pending: Promise<void> = provider.login();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      // Stop while the response is in flight; the resolving login() must not arm a timer.
      provider.stop();
      request.flush({ access_token: "access-0", refresh_token: "offline-token-1", expires_in: 300 });
      await pending;

      await jest.advanceTimersByTimeAsync(300 * 1000);
      httpMock.expectNone(TOKEN_ENDPOINT);
      httpMock.verify();
    });

    /** A refresh that fires after stop() no-ops without a network call. */
    it("does not refresh once stopped even if a timer fires", async () => {
      const expiresIn: number = 300;
      const { provider, httpMock } = await loggedIn(expiresIn);
      // Mark stopped without clearing the timer, then fire it: refresh() must bail.
      (provider as unknown as { stopped: boolean }).stopped = true;
      await jest.advanceTimersByTimeAsync(expiresIn * 1000);
      httpMock.expectNone(TOKEN_ENDPOINT);
      httpMock.verify();
    });
  });
});
