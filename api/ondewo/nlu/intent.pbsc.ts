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
import * as thisProto from './intent.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleRpc007 from '../../google/rpc/status.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf012 from '@ngx-grpc/well-known-types';
import { GRPC_INTENTS_CLIENT_SETTINGS } from './intent.pbconf';
/**
 * Service client implementation for ondewo.nlu.Intents
 */
@Injectable({ providedIn: 'any' })
export class IntentsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Intents/ListIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListIntentsResponse>>
     */
    listIntents: (
      requestData: thisProto.ListIntentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListIntentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/ListIntents',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListIntentsRequest,
        responseClass: thisProto.ListIntentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/GetIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Intent>>
     */
    getIntent: (
      requestData: thisProto.GetIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Intent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/GetIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIntentRequest,
        responseClass: thisProto.Intent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/CreateIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Intent>>
     */
    createIntent: (
      requestData: thisProto.CreateIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Intent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/CreateIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateIntentRequest,
        responseClass: thisProto.Intent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/UpdateIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Intent>>
     */
    updateIntent: (
      requestData: thisProto.UpdateIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Intent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/UpdateIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateIntentRequest,
        responseClass: thisProto.Intent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/DeleteIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteIntent: (
      requestData: thisProto.DeleteIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/DeleteIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteIntentRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchUpdateIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchUpdateIntentsResponse>>
     */
    batchUpdateIntents: (
      requestData: thisProto.BatchUpdateIntentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchUpdateIntentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchUpdateIntents',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateIntentsRequest,
        responseClass: thisProto.BatchUpdateIntentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchDeleteIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
     */
    batchDeleteIntents: (
      requestData: thisProto.BatchDeleteIntentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu011.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchDeleteIntents',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteIntentsRequest,
        responseClass: ondewoNlu011.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/TagIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    tagIntent: (
      requestData: thisProto.IntentTagRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/TagIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.IntentTagRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/DeleteIntentTag
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteIntentTag: (
      requestData: thisProto.IntentTagRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/DeleteIntentTag',
        requestData,
        requestMetadata,
        requestClass: thisProto.IntentTagRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/GetIntentTags
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
     */
    getIntentTags: (
      requestData: thisProto.GetIntentTagsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetIntentTagsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/GetIntentTags',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIntentTagsRequest,
        responseClass: thisProto.GetIntentTagsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/GetAllIntentTags
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
     */
    getAllIntentTags: (
      requestData: thisProto.GetAllIntentTagsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetIntentTagsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/GetAllIntentTags',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAllIntentTagsRequest,
        responseClass: thisProto.GetIntentTagsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchCreateTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
     */
    batchCreateTrainingPhrases: (
      requestData: thisProto.BatchCreateTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchCreateTrainingPhrasesRequest,
        responseClass: thisProto.BatchTrainingPhrasesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchGetTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
     */
    batchGetTrainingPhrases: (
      requestData: thisProto.BatchGetTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchGetTrainingPhrasesRequest,
        responseClass: thisProto.BatchTrainingPhrasesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchUpdateTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
     */
    batchUpdateTrainingPhrases: (
      requestData: thisProto.BatchUpdateTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateTrainingPhrasesRequest,
        responseClass: thisProto.BatchTrainingPhrasesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchDeleteTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>
     */
    batchDeleteTrainingPhrases: (
      requestData: thisProto.BatchDeleteTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteTrainingPhrasesRequest,
        responseClass: thisProto.BatchDeleteTrainingPhrasesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/ListTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>
     */
    listTrainingPhrases: (
      requestData: thisProto.ListTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/ListTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListTrainingPhrasesRequest,
        responseClass: thisProto.ListTrainingPhrasesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchCreateResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
     */
    batchCreateResponseMessages: (
      requestData: thisProto.BatchCreateResponseMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchCreateResponseMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchCreateResponseMessagesRequest,
        responseClass: thisProto.BatchResponseMessagesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchGetResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
     */
    batchGetResponseMessages: (
      requestData: thisProto.BatchGetResponseMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchGetResponseMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchGetResponseMessagesRequest,
        responseClass: thisProto.BatchResponseMessagesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchUpdateResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
     */
    batchUpdateResponseMessages: (
      requestData: thisProto.BatchUpdateResponseMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateResponseMessagesRequest,
        responseClass: thisProto.BatchResponseMessagesStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchDeleteResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>
     */
    batchDeleteResponseMessages: (
      requestData: thisProto.BatchDeleteResponseMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteResponseMessagesRequest,
        responseClass: thisProto.BatchDeleteResponseMessagesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/ListResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>
     */
    listResponseMessages: (
      requestData: thisProto.ListResponseMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/ListResponseMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListResponseMessagesRequest,
        responseClass: thisProto.ListResponseMessagesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchCreateParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
     */
    batchCreateParameters: (
      requestData: thisProto.BatchCreateParametersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchCreateParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchCreateParametersRequest,
        responseClass: thisProto.BatchParametersStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchGetParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
     */
    batchGetParameters: (
      requestData: thisProto.BatchGetParametersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchGetParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchGetParametersRequest,
        responseClass: thisProto.BatchParametersStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchUpdateParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
     */
    batchUpdateParameters: (
      requestData: thisProto.BatchUpdateParametersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchUpdateParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateParametersRequest,
        responseClass: thisProto.BatchParametersStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/BatchDeleteParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>
     */
    batchDeleteParameters: (
      requestData: thisProto.BatchDeleteParametersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/BatchDeleteParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteParametersRequest,
        responseClass: thisProto.BatchDeleteParametersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/ListParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListParametersResponse>>
     */
    listParameters: (
      requestData: thisProto.ListParametersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListParametersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/ListParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListParametersRequest,
        responseClass: thisProto.ListParametersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>>
     */
    listTrainingPhrasesofIntentsWithEnrichment: (
      requestData: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
        requestData,
        requestMetadata,
        requestClass:
          thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
        responseClass:
          thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_INTENTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Intents', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Intents/ListIntents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListIntentsResponse>
   */
  listIntents(
    requestData: thisProto.ListIntentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListIntentsResponse> {
    return this.$raw
      .listIntents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/GetIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Intent>
   */
  getIntent(
    requestData: thisProto.GetIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Intent> {
    return this.$raw
      .getIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/CreateIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Intent>
   */
  createIntent(
    requestData: thisProto.CreateIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Intent> {
    return this.$raw
      .createIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/UpdateIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Intent>
   */
  updateIntent(
    requestData: thisProto.UpdateIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Intent> {
    return this.$raw
      .updateIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/DeleteIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteIntent(
    requestData: thisProto.DeleteIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchUpdateIntents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchUpdateIntentsResponse>
   */
  batchUpdateIntents(
    requestData: thisProto.BatchUpdateIntentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchUpdateIntentsResponse> {
    return this.$raw
      .batchUpdateIntents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchDeleteIntents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu011.Operation>
   */
  batchDeleteIntents(
    requestData: thisProto.BatchDeleteIntentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu011.Operation> {
    return this.$raw
      .batchDeleteIntents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/TagIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  tagIntent(
    requestData: thisProto.IntentTagRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .tagIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/DeleteIntentTag
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteIntentTag(
    requestData: thisProto.IntentTagRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteIntentTag(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/GetIntentTags
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetIntentTagsResponse>
   */
  getIntentTags(
    requestData: thisProto.GetIntentTagsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetIntentTagsResponse> {
    return this.$raw
      .getIntentTags(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/GetAllIntentTags
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetIntentTagsResponse>
   */
  getAllIntentTags(
    requestData: thisProto.GetAllIntentTagsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetIntentTagsResponse> {
    return this.$raw
      .getAllIntentTags(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchCreateTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
   */
  batchCreateTrainingPhrases(
    requestData: thisProto.BatchCreateTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchTrainingPhrasesStatusResponse> {
    return this.$raw
      .batchCreateTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchGetTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
   */
  batchGetTrainingPhrases(
    requestData: thisProto.BatchGetTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchTrainingPhrasesStatusResponse> {
    return this.$raw
      .batchGetTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchUpdateTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
   */
  batchUpdateTrainingPhrases(
    requestData: thisProto.BatchUpdateTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchTrainingPhrasesStatusResponse> {
    return this.$raw
      .batchUpdateTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchDeleteTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchDeleteTrainingPhrasesResponse>
   */
  batchDeleteTrainingPhrases(
    requestData: thisProto.BatchDeleteTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchDeleteTrainingPhrasesResponse> {
    return this.$raw
      .batchDeleteTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/ListTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListTrainingPhrasesResponse>
   */
  listTrainingPhrases(
    requestData: thisProto.ListTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListTrainingPhrasesResponse> {
    return this.$raw
      .listTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchCreateResponseMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
   */
  batchCreateResponseMessages(
    requestData: thisProto.BatchCreateResponseMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchResponseMessagesStatusResponse> {
    return this.$raw
      .batchCreateResponseMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchGetResponseMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
   */
  batchGetResponseMessages(
    requestData: thisProto.BatchGetResponseMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchResponseMessagesStatusResponse> {
    return this.$raw
      .batchGetResponseMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchUpdateResponseMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
   */
  batchUpdateResponseMessages(
    requestData: thisProto.BatchUpdateResponseMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchResponseMessagesStatusResponse> {
    return this.$raw
      .batchUpdateResponseMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchDeleteResponseMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchDeleteResponseMessagesResponse>
   */
  batchDeleteResponseMessages(
    requestData: thisProto.BatchDeleteResponseMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchDeleteResponseMessagesResponse> {
    return this.$raw
      .batchDeleteResponseMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/ListResponseMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListResponseMessagesResponse>
   */
  listResponseMessages(
    requestData: thisProto.ListResponseMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListResponseMessagesResponse> {
    return this.$raw
      .listResponseMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchCreateParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchParametersStatusResponse>
   */
  batchCreateParameters(
    requestData: thisProto.BatchCreateParametersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchParametersStatusResponse> {
    return this.$raw
      .batchCreateParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchGetParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchParametersStatusResponse>
   */
  batchGetParameters(
    requestData: thisProto.BatchGetParametersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchParametersStatusResponse> {
    return this.$raw
      .batchGetParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchUpdateParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchParametersStatusResponse>
   */
  batchUpdateParameters(
    requestData: thisProto.BatchUpdateParametersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchParametersStatusResponse> {
    return this.$raw
      .batchUpdateParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/BatchDeleteParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchDeleteParametersResponse>
   */
  batchDeleteParameters(
    requestData: thisProto.BatchDeleteParametersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchDeleteParametersResponse> {
    return this.$raw
      .batchDeleteParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/ListParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListParametersResponse>
   */
  listParameters(
    requestData: thisProto.ListParametersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListParametersResponse> {
    return this.$raw
      .listParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>
   */
  listTrainingPhrasesofIntentsWithEnrichment(
    requestData: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse> {
    return this.$raw
      .listTrainingPhrasesofIntentsWithEnrichment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
