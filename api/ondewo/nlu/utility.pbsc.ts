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
import * as thisProto from './utility.pb';
import * as googleApi000 from '../../google/api/annotations.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/entity-type.pb';
import { GRPC_UTILITIES_CLIENT_SETTINGS } from './utility.pbconf';
/**
 * Service client implementation for ondewo.nlu.Utilities
 */
@Injectable({ providedIn: 'any' })
export class UtilitiesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Utilities/ValidateRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ValidateRegexResponse>>
     */
    validateRegex: (
      requestData: thisProto.ValidateRegexRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ValidateRegexResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/ValidateRegex',
        requestData,
        requestMetadata,
        requestClass: thisProto.ValidateRegexRequest,
        responseClass: thisProto.ValidateRegexResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/ValidateEmbeddedRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>
     */
    validateEmbeddedRegex: (
      requestData: thisProto.ValidateEmbeddedRegexRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
        requestData,
        requestMetadata,
        requestClass: thisProto.ValidateEmbeddedRegexRequest,
        responseClass: thisProto.ValidateEmbeddedRegexResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/CleanAllIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>
     */
    cleanAllIntents: (
      requestData: thisProto.CleanAllIntentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/CleanAllIntents',
        requestData,
        requestMetadata,
        requestClass: thisProto.CleanAllIntentsRequest,
        responseClass: thisProto.CleanAllIntentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/CleanIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CleanIntentResponse>>
     */
    cleanIntent: (
      requestData: thisProto.CleanIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CleanIntentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/CleanIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.CleanIntentRequest,
        responseClass: thisProto.CleanIntentResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/CleanAllEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>
     */
    cleanAllEntityTypes: (
      requestData: thisProto.CleanAllEntityTypesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/CleanAllEntityTypes',
        requestData,
        requestMetadata,
        requestClass: thisProto.CleanAllEntityTypesRequest,
        responseClass: thisProto.CleanAllEntityTypesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/CleanEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>
     */
    cleanEntityType: (
      requestData: thisProto.CleanEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/CleanEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.CleanEntityTypeRequest,
        responseClass: thisProto.CleanEntityTypeResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/AddTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
     */
    addTrainingPhrases: (
      requestData: thisProto.AddTrainingPhrasesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/AddTrainingPhrases',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddTrainingPhrasesRequest,
        responseClass: thisProto.AddTrainingPhrasesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
     */
    addTrainingPhrasesFromCSV: (
      requestData: thisProto.AddTrainingPhrasesFromCSVRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddTrainingPhrasesFromCSVRequest,
        responseClass: thisProto.AddTrainingPhrasesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_UTILITIES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Utilities', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/ValidateRegex
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ValidateRegexResponse>
   */
  validateRegex(
    requestData: thisProto.ValidateRegexRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ValidateRegexResponse> {
    return this.$raw
      .validateRegex(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/ValidateEmbeddedRegex
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ValidateEmbeddedRegexResponse>
   */
  validateEmbeddedRegex(
    requestData: thisProto.ValidateEmbeddedRegexRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ValidateEmbeddedRegexResponse> {
    return this.$raw
      .validateEmbeddedRegex(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/CleanAllIntents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CleanAllIntentsResponse>
   */
  cleanAllIntents(
    requestData: thisProto.CleanAllIntentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CleanAllIntentsResponse> {
    return this.$raw
      .cleanAllIntents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/CleanIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CleanIntentResponse>
   */
  cleanIntent(
    requestData: thisProto.CleanIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CleanIntentResponse> {
    return this.$raw
      .cleanIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/CleanAllEntityTypes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CleanAllEntityTypesResponse>
   */
  cleanAllEntityTypes(
    requestData: thisProto.CleanAllEntityTypesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CleanAllEntityTypesResponse> {
    return this.$raw
      .cleanAllEntityTypes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/CleanEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CleanEntityTypeResponse>
   */
  cleanEntityType(
    requestData: thisProto.CleanEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CleanEntityTypeResponse> {
    return this.$raw
      .cleanEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/AddTrainingPhrases
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddTrainingPhrasesResponse>
   */
  addTrainingPhrases(
    requestData: thisProto.AddTrainingPhrasesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddTrainingPhrasesResponse> {
    return this.$raw
      .addTrainingPhrases(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddTrainingPhrasesResponse>
   */
  addTrainingPhrasesFromCSV(
    requestData: thisProto.AddTrainingPhrasesFromCSVRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddTrainingPhrasesResponse> {
    return this.$raw
      .addTrainingPhrasesFromCSV(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
