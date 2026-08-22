import { EnvironmentProviders, Provider } from "@angular/core";
import { GRPC_INTERCEPTORS } from "@ngx-grpc/core";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { provideOndewoCsiAuth } from "./auth.providers";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A concrete `TokenProvider` the consumer would register. */
class KeycloakTokenProvider implements TokenProvider {
  /**
   * @returns a fixed stand-in access token.
   */
  public getToken(): TokenResult {
    return "token-from-keycloak";
  }
}

/**
 * `makeEnvironmentProviders` wraps the provider array in an opaque
 * `EnvironmentProviders` whose flat list lives under the internal `ɵproviders`
 * field. Reading it lets us assert the exact wiring without bootstrapping a full
 * Angular environment injector (which would need zone.js / TestBed).
 *
 * @param environmentProviders the opaque providers returned by `provideOndewoCsiAuth`.
 * @returns the flat provider list carried inside it.
 */
function flatten(environmentProviders: EnvironmentProviders): Provider[] {
  return (environmentProviders as unknown as { ɵproviders: Provider[] }).ɵproviders;
}

/** Specs for `provideOndewoCsiAuth`: the exact DI wiring it produces. */
describe("provideOndewoCsiAuth", () => {
  /** The supplied `TokenProvider` class is registered so Angular can instantiate it. */
  it("registers the supplied TokenProvider class so it is instantiable", () => {
    const providers: Provider[] = flatten(provideOndewoCsiAuth(KeycloakTokenProvider));
    expect(providers).toContain(KeycloakTokenProvider);
  });

  /** `TOKEN_PROVIDER` is aliased to the supplied class via `useExisting`. */
  it("aliases TOKEN_PROVIDER to the supplied implementation via useExisting", () => {
    const providers: Provider[] = flatten(provideOndewoCsiAuth(KeycloakTokenProvider));
    const tokenBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" && provider !== null && "provide" in provider && provider.provide === TOKEN_PROVIDER
    );
    expect(tokenBinding).toEqual({ provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider });
  });

  /** `AuthGrpcInterceptor` is registered as a `multi` `GRPC_INTERCEPTORS` provider. */
  it("registers AuthGrpcInterceptor as a multi GRPC_INTERCEPTORS provider", () => {
    const providers: Provider[] = flatten(provideOndewoCsiAuth(KeycloakTokenProvider));
    const interceptorBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === GRPC_INTERCEPTORS
    );
    expect(interceptorBinding).toEqual({
      provide: GRPC_INTERCEPTORS,
      useClass: AuthGrpcInterceptor,
      multi: true
    });
  });
});
