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
import * as thisProto from './speech-to-text.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_SPEECH2_TEXT_CLIENT_SETTINGS } from './speech-to-text.pbconf';
/**
 * Service client implementation for ondewo.s2t.Speech2Text
 */
@Injectable({ providedIn: 'any' })
export class Speech2TextClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.s2t.Speech2Text/TranscribeFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
     */
    transcribeFile: (
      requestData: thisProto.TranscribeFileRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TranscribeFileResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/TranscribeFile',
        requestData,
        requestMetadata,
        requestClass: thisProto.TranscribeFileRequest,
        responseClass: thisProto.TranscribeFileResponse
      });
    },
    /**
     * Bidirectional streaming: /ondewo.s2t.Speech2Text/TranscribeStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
     */
    transcribeStream: (
      requestData: Observable<thisProto.TranscribeStreamRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TranscribeStreamResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/TranscribeStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.TranscribeStreamRequest,
        responseClass: thisProto.TranscribeStreamResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/GetS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Speech2TextConfig>>
     */
    getS2tPipeline: (
      requestData: thisProto.S2tPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Speech2TextConfig>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/GetS2tPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2tPipelineId,
        responseClass: thisProto.Speech2TextConfig
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/CreateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2tPipelineId>>
     */
    createS2tPipeline: (
      requestData: thisProto.Speech2TextConfig,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.S2tPipelineId>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.Speech2TextConfig,
        responseClass: thisProto.S2tPipelineId
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/DeleteS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteS2tPipeline: (
      requestData: thisProto.S2tPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2tPipelineId,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/UpdateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateS2tPipeline: (
      requestData: thisProto.Speech2TextConfig,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.Speech2TextConfig,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
     */
    listS2tPipelines: (
      requestData: thisProto.ListS2tPipelinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/ListS2tPipelines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2tPipelinesRequest,
        responseClass: thisProto.ListS2tPipelinesResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
     */
    listS2tLanguages: (
      requestData: thisProto.ListS2tLanguagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/ListS2tLanguages',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2tLanguagesRequest,
        responseClass: thisProto.ListS2tLanguagesResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
     */
    listS2tDomains: (
      requestData: thisProto.ListS2tDomainsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/ListS2tDomains',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2tDomainsRequest,
        responseClass: thisProto.ListS2tDomainsResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2tGetServiceInfoResponse>>
     */
    getServiceInfo: (
      requestData: googleProtobuf000.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.S2tGetServiceInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/GetServiceInfo',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf000.Empty,
        responseClass: thisProto.S2tGetServiceInfoResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguageModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>>
     */
    listS2tLanguageModels: (
      requestData: thisProto.ListS2tLanguageModelsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/ListS2tLanguageModels',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2tLanguageModelsRequest,
        responseClass: thisProto.ListS2tLanguageModelsResponse
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/CreateUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    createUserLanguageModel: (
      requestData: thisProto.CreateUserLanguageModelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/CreateUserLanguageModel',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateUserLanguageModelRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/DeleteUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteUserLanguageModel: (
      requestData: thisProto.DeleteUserLanguageModelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/DeleteUserLanguageModel',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteUserLanguageModelRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    addDataToUserLanguageModel: (
      requestData: thisProto.AddDataToUserLanguageModelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddDataToUserLanguageModelRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/TrainUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    trainUserLanguageModel: (
      requestData: thisProto.TrainUserLanguageModelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/TrainUserLanguageModel',
        requestData,
        requestMetadata,
        requestClass: thisProto.TrainUserLanguageModelRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tNormalizationPipelinesResponse>>
     */
    listS2tNormalizationPipelines: (
      requestData: thisProto.ListS2tNormalizationPipelinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListS2tNormalizationPipelinesResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2tNormalizationPipelinesRequest,
        responseClass: thisProto.ListS2tNormalizationPipelinesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SPEECH2_TEXT_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.s2t.Speech2Text',
      settings
    );
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/TranscribeFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TranscribeFileResponse>
   */
  transcribeFile(
    requestData: thisProto.TranscribeFileRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TranscribeFileResponse> {
    return this.$raw
      .transcribeFile(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/ondewo.s2t.Speech2Text/TranscribeStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TranscribeStreamResponse>
   */
  transcribeStream(
    requestData: Observable<thisProto.TranscribeStreamRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TranscribeStreamResponse> {
    return this.$raw
      .transcribeStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/GetS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Speech2TextConfig>
   */
  getS2tPipeline(
    requestData: thisProto.S2tPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Speech2TextConfig> {
    return this.$raw
      .getS2tPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/CreateS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2tPipelineId>
   */
  createS2tPipeline(
    requestData: thisProto.Speech2TextConfig,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.S2tPipelineId> {
    return this.$raw
      .createS2tPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/DeleteS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteS2tPipeline(
    requestData: thisProto.S2tPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteS2tPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/UpdateS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateS2tPipeline(
    requestData: thisProto.Speech2TextConfig,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .updateS2tPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tPipelinesResponse>
   */
  listS2tPipelines(
    requestData: thisProto.ListS2tPipelinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2tPipelinesResponse> {
    return this.$raw
      .listS2tPipelines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tLanguagesResponse>
   */
  listS2tLanguages(
    requestData: thisProto.ListS2tLanguagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2tLanguagesResponse> {
    return this.$raw
      .listS2tLanguages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tDomains
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tDomainsResponse>
   */
  listS2tDomains(
    requestData: thisProto.ListS2tDomainsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2tDomainsResponse> {
    return this.$raw
      .listS2tDomains(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/GetServiceInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2tGetServiceInfoResponse>
   */
  getServiceInfo(
    requestData: googleProtobuf000.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.S2tGetServiceInfoResponse> {
    return this.$raw
      .getServiceInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguageModels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tLanguageModelsResponse>
   */
  listS2tLanguageModels(
    requestData: thisProto.ListS2tLanguageModelsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2tLanguageModelsResponse> {
    return this.$raw
      .listS2tLanguageModels(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/CreateUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  createUserLanguageModel(
    requestData: thisProto.CreateUserLanguageModelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .createUserLanguageModel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/DeleteUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteUserLanguageModel(
    requestData: thisProto.DeleteUserLanguageModelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteUserLanguageModel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  addDataToUserLanguageModel(
    requestData: thisProto.AddDataToUserLanguageModelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .addDataToUserLanguageModel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/TrainUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  trainUserLanguageModel(
    requestData: thisProto.TrainUserLanguageModelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .trainUserLanguageModel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tNormalizationPipelinesResponse>
   */
  listS2tNormalizationPipelines(
    requestData: thisProto.ListS2tNormalizationPipelinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2tNormalizationPipelinesResponse> {
    return this.$raw
      .listS2tNormalizationPipelines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
