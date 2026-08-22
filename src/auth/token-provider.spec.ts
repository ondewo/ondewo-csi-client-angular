import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

/** Specs for the `TOKEN_PROVIDER` dependency-injection token. */
describe("TOKEN_PROVIDER", () => {
  /** It is an Angular `InjectionToken` carrying the documented descriptive name. */
  it("is an InjectionToken with a descriptive name", () => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_CSI_TOKEN_PROVIDER");
  });
});
