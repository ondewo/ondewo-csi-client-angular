import { TestBed } from "@angular/core/testing";
import { firstValueFrom, Observable, of } from "rxjs";
import type {
  ListS2sPipelinesRequest,
  ListS2sPipelinesResponse,
  S2sPipeline,
  S2sPipelineId
} from "../../../api/ondewo/csi/conversation.pb";
import {
  CSI_CONVERSATIONS_CLIENT,
  CsiConversationsClient,
  CsiConversationsExample,
  PipelineSummary
} from "./csi-conversations.example";

/**
 * A jest mock of the generated CSI conversations client. The two RPC methods are
 * `jest.fn`s so each spec can stub the returned gRPC stream and assert the exact
 * request the example forwarded. No compiled protobuf runtime is involved.
 */
interface MockConversationsClient {
  listS2sPipelines: jest.Mock<Observable<ListS2sPipelinesResponse>, [ListS2sPipelinesRequest]>;
  getS2sPipeline: jest.Mock<Observable<S2sPipeline>, [S2sPipelineId]>;
}

/**
 * Build a fresh mock client whose methods return the supplied streams.
 *
 * @param listResponse the stream `listS2sPipelines` returns.
 * @param pipeline the stream `getS2sPipeline` returns.
 * @returns a mock client typed for the example's structural dependency.
 */
function buildMockClient(
  listResponse: Observable<ListS2sPipelinesResponse>,
  pipeline: Observable<S2sPipeline>
): MockConversationsClient {
  return {
    listS2sPipelines: jest.fn<Observable<ListS2sPipelinesResponse>, [ListS2sPipelinesRequest]>(
      (): Observable<ListS2sPipelinesResponse> => listResponse
    ),
    getS2sPipeline: jest.fn<Observable<S2sPipeline>, [S2sPipelineId]>(
      (): Observable<S2sPipeline> => pipeline
    )
  };
}

/**
 * Resolve the example under test from an Angular injector with the mock client
 * bound to {@link CSI_CONVERSATIONS_CLIENT}. Exercising real DI proves the token
 * wiring a host application would use.
 *
 * @param client the mock CSI conversations client.
 * @returns the injected example instance.
 */
function injectExample(client: MockConversationsClient): CsiConversationsExample {
  TestBed.configureTestingModule({
    providers: [{ provide: CSI_CONVERSATIONS_CLIENT, useValue: client as unknown as CsiConversationsClient }]
  });
  return TestBed.inject(CsiConversationsExample);
}

/** A recognizable pipeline id used to build the get request. */
const PIPELINE_ID: string = "pipeline-42";

/** Specs for the CSI conversations usage example. */
describe("CsiConversationsExample", () => {
  afterEach((): void => {
    TestBed.resetTestingModule();
  });

  /** `listPipelineIds` forwards the request and maps the response to pipeline ids. */
  it("forwards the list request and maps the response to pipeline ids", async () => {
    const response: ListS2sPipelinesResponse = {
      pipelines: [{ id: "p-1" } as S2sPipeline, { id: "p-2" } as S2sPipeline]
    } as unknown as ListS2sPipelinesResponse;
    const client: MockConversationsClient = buildMockClient(of(response), of({} as S2sPipeline));
    const example: CsiConversationsExample = injectExample(client);
    const request: ListS2sPipelinesRequest = {} as unknown as ListS2sPipelinesRequest;

    const ids: string[] = await firstValueFrom(example.listPipelineIds(request));

    expect(ids).toEqual(["p-1", "p-2"]);
    expect(client.listS2sPipelines).toHaveBeenCalledTimes(1);
    expect(client.listS2sPipelines).toHaveBeenCalledWith(request);
  });

  /** `listPipelineIds` yields an empty array when the response carries no pipelines. */
  it("maps a response with no pipelines to an empty array", async () => {
    const response: ListS2sPipelinesResponse = {} as unknown as ListS2sPipelinesResponse;
    const client: MockConversationsClient = buildMockClient(of(response), of({} as S2sPipeline));
    const example: CsiConversationsExample = injectExample(client);

    const ids: string[] = await firstValueFrom(
      example.listPipelineIds({} as unknown as ListS2sPipelinesRequest)
    );

    expect(ids).toEqual([]);
  });

  /** `getPipelineSummary` forwards the id request and flattens the pipeline response. */
  it("forwards the get request and flattens the pipeline into a summary", async () => {
    const pipeline: S2sPipeline = {
      id: PIPELINE_ID,
      nluProjectId: "project-7",
      nluLanguageCode: "en"
    } as unknown as S2sPipeline;
    const client: MockConversationsClient = buildMockClient(
      of({} as ListS2sPipelinesResponse),
      of(pipeline)
    );
    const example: CsiConversationsExample = injectExample(client);
    const request: S2sPipelineId = { id: PIPELINE_ID } as unknown as S2sPipelineId;

    const summary: PipelineSummary = await firstValueFrom(example.getPipelineSummary(request));

    expect(summary).toEqual({ id: PIPELINE_ID, nluProjectId: "project-7", nluLanguageCode: "en" });
    expect(client.getS2sPipeline).toHaveBeenCalledTimes(1);
    expect(client.getS2sPipeline).toHaveBeenCalledWith(request);
  });
});
