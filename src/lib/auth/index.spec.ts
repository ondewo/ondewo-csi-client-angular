import * as authApi from "./index";

/** Specs for the `index.ts` public-API barrel that re-exports the auth surface. */
describe("auth public API barrel", () => {
  /** Every interceptor, provider, helper, constant and DI token is re-exported. */
  it("re-exports the full hand-written auth surface", () => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoCsiAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("Authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
    expect(typeof authApi.KeycloakTokenProvider).toBe("function");
    expect(typeof authApi.KeycloakAuthenticationError).toBe("function");
    expect(authApi.KEYCLOAK_TOKEN_PROVIDER_CONFIG).toBeDefined();
    expect(authApi.REFRESH_SKEW_SECONDS).toBe(30);
    expect(authApi.MIN_REFRESH_DELAY_SECONDS).toBe(1);
  });
});
