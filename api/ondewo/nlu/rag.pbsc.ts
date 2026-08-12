/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './rag.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleApi003 from '../../google/api/annotations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as googleType009 from '../../google/type/latlng.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/llm-evaluation.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/operations.pb';
import * as ondewoNlu016 from '../../ondewo/nlu/session.pb';
import { GRPC_RAGS_CLIENT_SETTINGS } from './rag.pbconf';
/**
 * Service client implementation for ondewo.nlu.Rags
 */
@Injectable({ providedIn: 'any' })
export class RagsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDataset>>
     */
    ragCreateDataset: (
      requestData: thisProto.RagCreateDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateDatasetRequest,
        responseClass: thisProto.RagDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDataset>>
     */
    ragUpdateDataset: (
      requestData: thisProto.RagUpdateDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateDatasetRequest,
        responseClass: thisProto.RagDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteDatasets: (
      requestData: thisProto.RagDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDatasetList>>
     */
    ragListDatasets: (
      requestData: thisProto.RagListDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDatasetList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListDatasetsRequest,
        responseClass: thisProto.RagDatasetList
      });
    },
    /**
     * Client streaming: /ondewo.nlu.Rags/RagUploadDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocument>>
     */
    ragUploadDocument: (
      requestData: Observable<thisProto.RagUploadDocumentRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocument>> => {
      return this.handler.handle({
        type: GrpcCallType.clientStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUploadDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUploadDocumentRequest,
        responseClass: thisProto.RagDocument
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocument>>
     */
    ragUpdateDocument: (
      requestData: thisProto.RagUpdateDocumentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocument>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateDocumentRequest,
        responseClass: thisProto.RagDocument
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagDownloadDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFileChunk>>
     */
    ragDownloadDocument: (
      requestData: thisProto.RagDownloadDocumentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFileChunk>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDownloadDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDownloadDocumentRequest,
        responseClass: thisProto.RagFileChunk
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocumentList>>
     */
    ragListDocuments: (
      requestData: thisProto.RagListDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocumentList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListDocumentsRequest,
        responseClass: thisProto.RagDocumentList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteDocuments: (
      requestData: thisProto.RagDeleteDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteDocumentsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRetrieval
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagRetrievalResponse>>
     */
    ragRetrieval: (
      requestData: thisProto.RagRetrievalRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagRetrievalResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRetrieval',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRetrievalRequest,
        responseClass: thisProto.RagRetrievalResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagParseDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragParseDocuments: (
      requestData: thisProto.RagDocumentIdsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagParseDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDocumentIdsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStopParsing
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragStopParsing: (
      requestData: thisProto.RagDocumentIdsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStopParsing',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDocumentIdsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragCreateCrawler: (
      requestData: thisProto.RagCreateCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragGetCrawler: (
      requestData: thisProto.RagGetCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListCrawlers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListCrawlersResponse>>
     */
    ragListCrawlers: (
      requestData: thisProto.RagListCrawlersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListCrawlersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListCrawlers',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListCrawlersRequest,
        responseClass: thisProto.RagListCrawlersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragUpdateCrawler: (
      requestData: thisProto.RagUpdateCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlerResponse>>
     */
    ragDeleteCrawler: (
      requestData: thisProto.RagDeleteCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlerRequest,
        responseClass: thisProto.RagDeleteCrawlerResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStartCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu015.Operation>>
     */
    ragStartCrawler: (
      requestData: thisProto.RagStartCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu015.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStartCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagStartCrawlerRequest,
        responseClass: ondewoNlu015.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStopCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagStopCrawlerResponse>>
     */
    ragStopCrawler: (
      requestData: thisProto.RagStopCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagStopCrawlerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStopCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagStopCrawlerRequest,
        responseClass: thisProto.RagStopCrawlerResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerRun
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu015.Operation>>
     */
    ragGetCrawlerRun: (
      requestData: thisProto.RagGetCrawlerRunRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu015.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerRun',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerRunRequest,
        responseClass: ondewoNlu015.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListCrawlerRuns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListCrawlerRunsResponse>>
     */
    ragListCrawlerRuns: (
      requestData: thisProto.RagListCrawlerRunsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListCrawlerRunsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListCrawlerRuns',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListCrawlerRunsRequest,
        responseClass: thisProto.RagListCrawlerRunsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawlerRuns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlerRunsResponse>>
     */
    ragDeleteCrawlerRuns: (
      requestData: thisProto.RagDeleteCrawlerRunsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlerRunsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawlerRuns',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlerRunsRequest,
        responseClass: thisProto.RagDeleteCrawlerRunsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerResult
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawlerResult>>
     */
    ragGetCrawlerResult: (
      requestData: thisProto.RagGetCrawlerResultRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawlerResult>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerResult',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerResultRequest,
        responseClass: thisProto.RagCrawlerResult
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerResults
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetCrawlerResultsResponse>>
     */
    ragGetCrawlerResults: (
      requestData: thisProto.RagGetCrawlerResultsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetCrawlerResultsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerResults',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerResultsRequest,
        responseClass: thisProto.RagGetCrawlerResultsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu015.Operation>>
     */
    ragAddCrawlerResultsToDatasets: (
      requestData: thisProto.RagAddCrawlerResultsToDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu015.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAddCrawlerResultsToDatasetsRequest,
        responseClass: ondewoNlu015.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu015.Operation>>
     */
    ragRemoveCrawlerResultsFromDatasets: (
      requestData: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu015.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
        responseClass: ondewoNlu015.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetCrawlerAttachedDatasetsResponse>>
     */
    ragGetCrawlerAttachedDatasets: (
      requestData: thisProto.RagGetCrawlerAttachedDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.RagGetCrawlerAttachedDatasetsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerAttachedDatasetsRequest,
        responseClass: thisProto.RagGetCrawlerAttachedDatasetsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawlers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlersResponse>>
     */
    ragDeleteCrawlers: (
      requestData: thisProto.RagDeleteCrawlersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawlers',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlersRequest,
        responseClass: thisProto.RagDeleteCrawlersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerRunLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetCrawlerRunLogsResponse>>
     */
    ragGetCrawlerRunLogs: (
      requestData: thisProto.RagGetCrawlerRunLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetCrawlerRunLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerRunLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerRunLogsRequest,
        responseClass: thisProto.RagGetCrawlerRunLogsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_RAGS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Rags', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDataset>
   */
  ragCreateDataset(
    requestData: thisProto.RagCreateDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDataset> {
    return this.$raw
      .ragCreateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDataset>
   */
  ragUpdateDataset(
    requestData: thisProto.RagUpdateDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDataset> {
    return this.$raw
      .ragUpdateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteDatasets(
    requestData: thisProto.RagDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDatasetList>
   */
  ragListDatasets(
    requestData: thisProto.RagListDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDatasetList> {
    return this.$raw
      .ragListDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Client streaming @/ondewo.nlu.Rags/RagUploadDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocument>
   */
  ragUploadDocument(
    requestData: Observable<thisProto.RagUploadDocumentRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocument> {
    return this.$raw
      .ragUploadDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocument>
   */
  ragUpdateDocument(
    requestData: thisProto.RagUpdateDocumentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocument> {
    return this.$raw
      .ragUpdateDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagDownloadDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFileChunk>
   */
  ragDownloadDocument(
    requestData: thisProto.RagDownloadDocumentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFileChunk> {
    return this.$raw
      .ragDownloadDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocumentList>
   */
  ragListDocuments(
    requestData: thisProto.RagListDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocumentList> {
    return this.$raw
      .ragListDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteDocuments(
    requestData: thisProto.RagDeleteDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRetrieval
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagRetrievalResponse>
   */
  ragRetrieval(
    requestData: thisProto.RagRetrievalRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagRetrievalResponse> {
    return this.$raw
      .ragRetrieval(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagParseDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragParseDocuments(
    requestData: thisProto.RagDocumentIdsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragParseDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStopParsing
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragStopParsing(
    requestData: thisProto.RagDocumentIdsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragStopParsing(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragCreateCrawler(
    requestData: thisProto.RagCreateCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragCreateCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragGetCrawler(
    requestData: thisProto.RagGetCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragGetCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListCrawlers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListCrawlersResponse>
   */
  ragListCrawlers(
    requestData: thisProto.RagListCrawlersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListCrawlersResponse> {
    return this.$raw
      .ragListCrawlers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragUpdateCrawler(
    requestData: thisProto.RagUpdateCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragUpdateCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlerResponse>
   */
  ragDeleteCrawler(
    requestData: thisProto.RagDeleteCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlerResponse> {
    return this.$raw
      .ragDeleteCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStartCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu015.Operation>
   */
  ragStartCrawler(
    requestData: thisProto.RagStartCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu015.Operation> {
    return this.$raw
      .ragStartCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStopCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagStopCrawlerResponse>
   */
  ragStopCrawler(
    requestData: thisProto.RagStopCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagStopCrawlerResponse> {
    return this.$raw
      .ragStopCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerRun
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu015.Operation>
   */
  ragGetCrawlerRun(
    requestData: thisProto.RagGetCrawlerRunRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu015.Operation> {
    return this.$raw
      .ragGetCrawlerRun(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListCrawlerRuns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListCrawlerRunsResponse>
   */
  ragListCrawlerRuns(
    requestData: thisProto.RagListCrawlerRunsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListCrawlerRunsResponse> {
    return this.$raw
      .ragListCrawlerRuns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawlerRuns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlerRunsResponse>
   */
  ragDeleteCrawlerRuns(
    requestData: thisProto.RagDeleteCrawlerRunsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlerRunsResponse> {
    return this.$raw
      .ragDeleteCrawlerRuns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerResult
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawlerResult>
   */
  ragGetCrawlerResult(
    requestData: thisProto.RagGetCrawlerResultRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawlerResult> {
    return this.$raw
      .ragGetCrawlerResult(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerResults
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetCrawlerResultsResponse>
   */
  ragGetCrawlerResults(
    requestData: thisProto.RagGetCrawlerResultsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetCrawlerResultsResponse> {
    return this.$raw
      .ragGetCrawlerResults(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu015.Operation>
   */
  ragAddCrawlerResultsToDatasets(
    requestData: thisProto.RagAddCrawlerResultsToDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu015.Operation> {
    return this.$raw
      .ragAddCrawlerResultsToDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu015.Operation>
   */
  ragRemoveCrawlerResultsFromDatasets(
    requestData: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu015.Operation> {
    return this.$raw
      .ragRemoveCrawlerResultsFromDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetCrawlerAttachedDatasetsResponse>
   */
  ragGetCrawlerAttachedDatasets(
    requestData: thisProto.RagGetCrawlerAttachedDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetCrawlerAttachedDatasetsResponse> {
    return this.$raw
      .ragGetCrawlerAttachedDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawlers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlersResponse>
   */
  ragDeleteCrawlers(
    requestData: thisProto.RagDeleteCrawlersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlersResponse> {
    return this.$raw
      .ragDeleteCrawlers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerRunLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetCrawlerRunLogsResponse>
   */
  ragGetCrawlerRunLogs(
    requestData: thisProto.RagGetCrawlerRunLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetCrawlerRunLogsResponse> {
    return this.$raw
      .ragGetCrawlerRunLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
