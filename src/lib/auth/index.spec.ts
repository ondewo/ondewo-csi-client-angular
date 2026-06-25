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
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
  });
});
