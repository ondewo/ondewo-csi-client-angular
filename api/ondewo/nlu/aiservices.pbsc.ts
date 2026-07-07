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
import * as thisProto from './aiservices.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/common.pb';
import * as googleApi006 from '../../google/api/annotations.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as googleRpc010 from '../../google/rpc/status.pb';
import * as googleType011 from '../../google/type/latlng.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/session.pb';
import { GRPC_AI_SERVICES_CLIENT_SETTINGS } from './aiservices.pbconf';
/**
 * Service client implementation for ondewo.nlu.AiServices
 */
@Injectable({ providedIn: 'any' })
export class AiServicesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.AiServices/ExtractEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
     */
    extractEntities: (
      requestData: thisProto.ExtractEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/ExtractEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExtractEntitiesRequest,
        responseClass: thisProto.ExtractEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/GenerateUserSays
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>
     */
    generateUserSays: (
      requestData: thisProto.GenerateUserSaysRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/GenerateUserSays',
        requestData,
        requestMetadata,
        requestClass: thisProto.GenerateUserSaysRequest,
        responseClass: thisProto.GenerateUserSaysResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/GenerateResponses
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>
     */
    generateResponses: (
      requestData: thisProto.GenerateResponsesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GenerateResponsesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/GenerateResponses',
        requestData,
        requestMetadata,
        requestClass: thisProto.GenerateResponsesRequest,
        responseClass: thisProto.GenerateResponsesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/GetAlternativeSentences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>
     */
    getAlternativeSentences: (
      requestData: thisProto.GetAlternativeSentencesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/GetAlternativeSentences',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAlternativeSentencesRequest,
        responseClass: thisProto.GetAlternativeSentencesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>
     */
    getAlternativeTrainingPhrases: (
      requestData: thisProto.GetAlternativeTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAlternativeTrainingPhrasesRequest,
        responseClass: thisProto.GetAlternativeTrainingPhrasesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/GetSynonyms
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetSynonymsResponse>>
     */
    getSynonyms: (
      requestData: thisProto.GetSynonymsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetSynonymsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/GetSynonyms',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSynonymsRequest,
        responseClass: thisProto.GetSynonymsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/ClassifyIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ClassifyIntentsResponse>>
     */
    classifyIntents: (
      requestData: thisProto.ClassifyIntentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ClassifyIntentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/ClassifyIntents',
        requestData,
        requestMetadata,
        requestClass: thisProto.ClassifyIntentsRequest,
        responseClass: thisProto.ClassifyIntentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/ExtractEntitiesFuzzy
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
     */
    extractEntitiesFuzzy: (
      requestData: thisProto.ExtractEntitiesFuzzyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/ExtractEntitiesFuzzy',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExtractEntitiesFuzzyRequest,
        responseClass: thisProto.ExtractEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/LlmGenerate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmGenerateResponse>>
     */
    llmGenerate: (
      requestData: thisProto.LlmGenerateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmGenerateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/LlmGenerate',
        requestData,
        requestMetadata,
        requestClass: thisProto.LlmGenerateRequest,
        responseClass: thisProto.LlmGenerateResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.AiServices/StreamingLlmGenerate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamingLlmGenerateResponse>>
     */
    streamingLlmGenerate: (
      requestData: thisProto.LlmGenerateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamingLlmGenerateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.AiServices/StreamingLlmGenerate',
        requestData,
        requestMetadata,
        requestClass: thisProto.LlmGenerateRequest,
        responseClass: thisProto.StreamingLlmGenerateResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.AiServices/ListLlmModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmModelsResponse>>
     */
    listLlmModels: (
      requestData: thisProto.ListLlmModelsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmModelsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.AiServices/ListLlmModels',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmModelsRequest,
        responseClass: thisProto.ListLlmModelsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_AI_SERVICES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.AiServices', settings);
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/ExtractEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ExtractEntitiesResponse>
   */
  extractEntities(
    requestData: thisProto.ExtractEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ExtractEntitiesResponse> {
    return this.$raw
      .extractEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/GenerateUserSays
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GenerateUserSaysResponse>
   */
  generateUserSays(
    requestData: thisProto.GenerateUserSaysRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GenerateUserSaysResponse> {
    return this.$raw
      .generateUserSays(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/GenerateResponses
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GenerateResponsesResponse>
   */
  generateResponses(
    requestData: thisProto.GenerateResponsesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GenerateResponsesResponse> {
    return this.$raw
      .generateResponses(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/GetAlternativeSentences
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAlternativeSentencesResponse>
   */
  getAlternativeSentences(
    requestData: thisProto.GetAlternativeSentencesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAlternativeSentencesResponse> {
    return this.$raw
      .getAlternativeSentences(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAlternativeTrainingPhrasesResponse>
   */
  getAlternativeTrainingPhrases(
    requestData: thisProto.GetAlternativeTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAlternativeTrainingPhrasesResponse> {
    return this.$raw
      .getAlternativeTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/GetSynonyms
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetSynonymsResponse>
   */
  getSynonyms(
    requestData: thisProto.GetSynonymsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetSynonymsResponse> {
    return this.$raw
      .getSynonyms(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/ClassifyIntents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ClassifyIntentsResponse>
   */
  classifyIntents(
    requestData: thisProto.ClassifyIntentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ClassifyIntentsResponse> {
    return this.$raw
      .classifyIntents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/ExtractEntitiesFuzzy
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ExtractEntitiesResponse>
   */
  extractEntitiesFuzzy(
    requestData: thisProto.ExtractEntitiesFuzzyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ExtractEntitiesResponse> {
    return this.$raw
      .extractEntitiesFuzzy(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/LlmGenerate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmGenerateResponse>
   */
  llmGenerate(
    requestData: thisProto.LlmGenerateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmGenerateResponse> {
    return this.$raw
      .llmGenerate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.AiServices/StreamingLlmGenerate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamingLlmGenerateResponse>
   */
  streamingLlmGenerate(
    requestData: thisProto.LlmGenerateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamingLlmGenerateResponse> {
    return this.$raw
      .streamingLlmGenerate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.AiServices/ListLlmModels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmModelsResponse>
   */
  listLlmModels(
    requestData: thisProto.ListLlmModelsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmModelsResponse> {
    return this.$raw
      .listLlmModels(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
