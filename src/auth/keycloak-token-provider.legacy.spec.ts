import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { EnvironmentProviders, Provider } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  MIN_REFRESH_DELAY_SECONDS,
  REFRESH_RETRY_BASE_DELAY_IN_S,
  REFRESH_RETRY_BASE_DELAY_SECONDS,
  REFRESH_RETRY_MAX_DELAY_IN_S,
  REFRESH_RETRY_MAX_DELAY_SECONDS,
  REFRESH_SKEW_IN_S,
  REFRESH_SKEW_SECONDS
} from "./keycloak-token-provider";
import { KeycloakLogger } from "./keycloak-token-session";

/** The token endpoint of {@link CONFIG}. */
const TOKEN_ENDPOINT: string = "https://auth.example.com/auth/realms/ondewo/protocol/openid-connect/token";

/** Every WARNING line the providers of this file logged. */
let warnings: string[] = [];

/** A logger that records the WARNING lines and swallows the rest. */
const LOGGER: KeycloakLogger = {
  warn: (message: string): void => {
    warnings.push(message);
  },
  info: (): void => undefined,
  debug: (): void => undefined
};

/** A password-grant configuration. */
const CONFIG: KeycloakTokenProviderConfig = {
  keycloakUrl: "https://auth.example.com/auth",
  realm: "ondewo",
  clientId: "ondewo-nlu-cai-sdk-public",
  username: "technical-user@example.com",
  password: "s3cret",
  randomFraction: (): number => 0,
  logger: LOGGER
};

/** The provider under test and its HTTP mock. */
interface SetupResult {
  /** The provider built through DI. */
  provider: KeycloakTokenProvider;
  /** The HTTP testing backend. */
  httpMock: HttpTestingController;
}

/**
 * @param config the configuration to register, or `null` for none.
 * @returns the provider and its HTTP mock.
 */
function setup(config: KeycloakTokenProviderConfig | null): SetupResult {
  const providers: (Provider | EnvironmentProviders)[] = [provideHttpClient(), provideHttpClientTesting()];
  if (config !== null) {
    providers.push({ provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config });
  }
  TestBed.configureTestingModule({ providers });
  return { provider: TestBed.inject(KeycloakTokenProvider), httpMock: TestBed.inject(HttpTestingController) };
}

/**
 * @param request the pending token request.
 * @param accessToken the access token to hand out.
 * @param expiresIn the lifetime in seconds.
 */
function flushToken(request: TestRequest, accessToken: string, expiresIn: number = 300): void {
  request.flush(JSON.stringify({ access_token: accessToken, refresh_token: "refresh-1", expires_in: expiresIn }));
}

/** @returns a promise that resolves once the queued microtasks have run. */
async function flushMicrotasks(): Promise<void> {
  for (let index: number = 0; index < 20; index++) {
    await Promise.resolve();
  }
}

/**
 * @param promise a promise expected to reject.
 * @returns the rejection reason.
 */
async function rejectionOf(promise: Promise<unknown>): Promise<unknown> {
  try {
    await promise;
  } catch (error: unknown) {
    return error;
  }
  throw new Error("expected the promise to reject");
}

/**
 * The entry points this SDK's KeycloakTokenProvider had before it was aligned with every ONDEWO
 * SDK. They stay, deprecated, so an application written against them keeps compiling and working.
 */
describe("KeycloakTokenProvider deprecated entry points", (): void => {
  beforeEach((): void => {
    jest.useFakeTimers();
    warnings = [];
  });

  afterEach((): void => {
    TestBed.resetTestingModule();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("login() resolves once the start-up login holds a token, issuing no second login", async (): Promise<void> => {
    const result: SetupResult = setup(CONFIG);
    const loggedIn: Promise<void> = result.provider.login();
    flushToken(result.httpMock.expectOne(TOKEN_ENDPOINT), "access-1");
    await loggedIn;
    result.httpMock.expectNone(TOKEN_ENDPOINT);
    expect(result.provider.getToken()).toBe("access-1");
  });

  it("login() re-runs a start-up that failed", async (): Promise<void> => {
    const result: SetupResult = setup(CONFIG);
    result.httpMock.expectOne(TOKEN_ENDPOINT).flush("down", { status: 503, statusText: "Service Unavailable" });
    expect(await rejectionOf(result.provider.whenReady())).toBeInstanceOf(KeycloakAuthenticationError);
    const loggedIn: Promise<void> = result.provider.login();
    await flushMicrotasks();
    flushToken(result.httpMock.expectOne(TOKEN_ENDPOINT), "access-2");
    await loggedIn;
    expect(result.provider.getToken()).toBe("access-2");
  });

  it("login() rejects with the login error when the login fails", async (): Promise<void> => {
    const result: SetupResult = setup(CONFIG);
    const loggedIn: Promise<void> = result.provider.login();
    result.httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
    const error: unknown = await rejectionOf(loggedIn);
    expect(error).toBeInstanceOf(KeycloakAuthenticationError);
    expect((error as Error).message).toBe("Keycloak token login failed with status 401: nope");
  });

  it("login() rejects without any request when no configuration was supplied", async (): Promise<void> => {
    const result: SetupResult = setup(null);
    const error: unknown = await rejectionOf(result.provider.login());
    expect(error).toBeInstanceOf(KeycloakAuthenticationError);
    expect((error as Error).message).toBe(
      "KeycloakTokenProvider has no configuration: provide KEYCLOAK_TOKEN_PROVIDER_CONFIG or call configure()"
    );
    result.httpMock.expectNone(TOKEN_ENDPOINT);
  });

  it("login() resolves without a request when no Keycloak is configured", async (): Promise<void> => {
    const result: SetupResult = setup({ keycloakUrl: "", realm: "", clientId: "" });
    await result.provider.login();
    result.httpMock.expectNone(TOKEN_ENDPOINT);
    expect(result.provider.getToken()).toBeNull();
  });

  it("stop() releases the login like ngOnDestroy: the background refresh no longer fires", async (): Promise<void> => {
    const result: SetupResult = setup(CONFIG);
    flushToken(result.httpMock.expectOne(TOKEN_ENDPOINT), "access-1", 60);
    await result.provider.whenReady();
    result.provider.stop();
    result.provider.stop();
    await jest.advanceTimersByTimeAsync(120_000);
    result.httpMock.expectNone(TOKEN_ENDPOINT);
  });

  it("keeps the *_SECONDS constant names as aliases of the *_IN_S ones", (): void => {
    expect(REFRESH_SKEW_SECONDS).toBe(REFRESH_SKEW_IN_S);
    expect(MIN_REFRESH_DELAY_SECONDS).toBe(MIN_REFRESH_DELAY_IN_S);
    expect(REFRESH_RETRY_BASE_DELAY_SECONDS).toBe(REFRESH_RETRY_BASE_DELAY_IN_S);
    expect(REFRESH_RETRY_MAX_DELAY_SECONDS).toBe(REFRESH_RETRY_MAX_DELAY_IN_S);
  });
});
