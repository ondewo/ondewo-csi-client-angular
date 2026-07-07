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
import * as thisProto from './project-statistics.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleProtobuf008 from '@ngx-grpc/well-known-types';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
import { GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS } from './project-statistics.pbconf';
/**
 * Service client implementation for ondewo.nlu.ProjectStatistics
 */
@Injectable({ providedIn: 'any' })
export class ProjectStatisticsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetIntentCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getIntentCount: (
      requestData: thisProto.GetIntentCountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetIntentCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIntentCountRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetEntityTypeCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getEntityTypeCount: (
      requestData: thisProto.GetEntityTypeCountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetEntityTypeCountRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetUserCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getUserCount: (
      requestData: thisProto.GetProjectStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetUserCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetSessionCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getSessionCount: (
      requestData: thisProto.GetProjectStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetSessionCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getTrainingPhraseCount: (
      requestData: thisProto.GetProjectElementStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectElementStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetResponseCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getResponseCount: (
      requestData: thisProto.GetProjectElementStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetResponseCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectElementStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetEntityValueCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getEntityValueCount: (
      requestData: thisProto.GetProjectElementStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectElementStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectStatistics/GetEntitySynonymCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
     */
    getEntitySynonymCount: (
      requestData: thisProto.GetProjectElementStatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu004.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectElementStatRequest,
        responseClass: ondewoNlu004.StatResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.ProjectStatistics',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetIntentCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getIntentCount(
    requestData: thisProto.GetIntentCountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getIntentCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetEntityTypeCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getEntityTypeCount(
    requestData: thisProto.GetEntityTypeCountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getEntityTypeCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetUserCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getUserCount(
    requestData: thisProto.GetProjectStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getUserCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetSessionCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getSessionCount(
    requestData: thisProto.GetProjectStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getSessionCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getTrainingPhraseCount(
    requestData: thisProto.GetProjectElementStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getTrainingPhraseCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetResponseCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getResponseCount(
    requestData: thisProto.GetProjectElementStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getResponseCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetEntityValueCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getEntityValueCount(
    requestData: thisProto.GetProjectElementStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getEntityValueCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu004.StatResponse>
   */
  getEntitySynonymCount(
    requestData: thisProto.GetProjectElementStatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu004.StatResponse> {
    return this.$raw
      .getEntitySynonymCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
