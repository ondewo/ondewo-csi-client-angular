import { Inject, Injectable, InjectionToken } from "@angular/core";
import { map, Observable } from "rxjs";
import type { ConversationsClient } from "../../../api/ondewo/csi/conversation.pbsc";
import type {
  ListS2sPipelinesRequest,
  ListS2sPipelinesResponse,
  S2sPipeline,
  S2sPipelineId
} from "../../../api/ondewo/csi/conversation.pb";

/**
 * The subset of the generated `ondewo.csi.Conversations` service client this
 * example depends on. Deriving it from the real {@link ConversationsClient} type
 * keeps the example honest — a signature change in the generated stub breaks
 * compilation here — while a type-only import keeps this file free of the
 * generated runtime bundle so it can be unit tested without a compiled package.
 */
export type CsiConversationsClient = Pick<ConversationsClient, "listS2sPipelines" | "getS2sPipeline">;

/**
 * DI token the host application binds to the generated `ConversationsClient`.
 *
 * In an Angular application the generated client is already tree-shakeably
 * providable, so the wiring is a one-line alias:
 *
 * ```ts
 * import { ConversationsClient } from "@ondewo/csi-client-angular";
 * import { CSI_CONVERSATIONS_CLIENT } from "@ondewo/csi-client-angular/examples";
 *
 * providers: [
 *   // Register the bearer-auth interceptor so every CSI call is authorized.
 *   provideOndewoCsiAuth(KeycloakTokenProvider),
 *   // Expose the generated client under the example's token.
 *   { provide: CSI_CONVERSATIONS_CLIENT, useExisting: ConversationsClient }
 * ]
 * ```
 */
export const CSI_CONVERSATIONS_CLIENT: InjectionToken<CsiConversationsClient> =
  new InjectionToken<CsiConversationsClient>("ONDEWO_CSI_CONVERSATIONS_CLIENT");

/** A flattened, application-friendly view of a single speech-to-speech pipeline. */
export interface PipelineSummary {
  /** The pipeline id. */
  readonly id: string;
  /** The NLU project the pipeline routes to. */
  readonly nluProjectId: string;
  /** The NLU language code the pipeline uses. */
  readonly nluLanguageCode: string;
}

/**
 * Minimal, idiomatic example of consuming the ONDEWO CSI Angular client.
 *
 * It shows the representative flow for this SDK: inject the generated
 * `ConversationsClient` (via {@link CSI_CONVERSATIONS_CLIENT}), call a unary RPC,
 * and map the streamed gRPC response into a plain domain object. Authorization is
 * transparent — the `Authorization: Bearer <token>` header is attached by the
 * library's `AuthGrpcInterceptor`, so this code never touches tokens.
 *
 * The request messages are constructed by the caller with the generated message
 * classes, e.g. `new ListS2sPipelinesRequest()` and
 * `new S2sPipelineId({ id })`, both exported from `@ondewo/csi-client-angular`.
 */
@Injectable({ providedIn: "root" })
export class CsiConversationsExample {
  /**
   * @param conversations the generated CSI conversations client, injected under
   *   the {@link CSI_CONVERSATIONS_CLIENT} token.
   */
  public constructor(
    @Inject(CSI_CONVERSATIONS_CLIENT) private readonly conversations: CsiConversationsClient
  ) {}

  /**
   * List the ids of every configured speech-to-speech pipeline.
   *
   * @param request the (empty) list request; build it with
   *   `new ListS2sPipelinesRequest()`.
   * @returns an observable emitting the pipeline ids once.
   */
  public listPipelineIds(request: ListS2sPipelinesRequest): Observable<string[]> {
    return this.conversations.listS2sPipelines(request).pipe(
      map((response: ListS2sPipelinesResponse): string[] =>
        (response.pipelines ?? []).map((pipeline: S2sPipeline): string => pipeline.id)
      )
    );
  }

  /**
   * Fetch a single pipeline and flatten it into a {@link PipelineSummary}.
   *
   * @param request identifies the pipeline; build it with
   *   `new S2sPipelineId({ id })`.
   * @returns an observable emitting the pipeline summary once.
   */
  public getPipelineSummary(request: S2sPipelineId): Observable<PipelineSummary> {
    return this.conversations.getS2sPipeline(request).pipe(
      map((pipeline: S2sPipeline): PipelineSummary => ({
        id: pipeline.id,
        nluProjectId: pipeline.nluProjectId,
        nluLanguageCode: pipeline.nluLanguageCode
      }))
    );
  }
}
