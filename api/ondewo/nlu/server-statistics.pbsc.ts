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
import * as thisProto from './server-statistics.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleApi004 from '../../google/api/annotations.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import { GRPC_SERVER_STATISTICS_CLIENT_SETTINGS } from './server-statistics.pbconf';
/**
 * Service client implementation for ondewo.nlu.ServerStatistics
 */
@Injectable({ providedIn: 'any' })
export class ServerStatisticsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.ServerStatistics/GetProjectCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu006.StatResponse>>
     */
    getProjectCount: (
      requestData: googleProtobuf005.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu006.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ServerStatistics/GetProjectCount',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf005.Empty,
        responseClass: ondewoNlu006.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ServerStatistics/GetUserProjectCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu006.StatResponse>>
     */
    getUserProjectCount: (
      requestData: thisProto.GetUserProjectCountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu006.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserProjectCountRequest,
        responseClass: ondewoNlu006.StatResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.ServerStatistics/GetUserCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu006.StatResponse>>
     */
    getUserCount: (
      requestData: googleProtobuf005.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu006.StatResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ServerStatistics/GetUserCount',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf005.Empty,
        responseClass: ondewoNlu006.StatResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SERVER_STATISTICS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.ServerStatistics',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.ServerStatistics/GetProjectCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu006.StatResponse>
   */
  getProjectCount(
    requestData: googleProtobuf005.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu006.StatResponse> {
    return this.$raw
      .getProjectCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ServerStatistics/GetUserProjectCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu006.StatResponse>
   */
  getUserProjectCount(
    requestData: thisProto.GetUserProjectCountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu006.StatResponse> {
    return this.$raw
      .getUserProjectCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ServerStatistics/GetUserCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu006.StatResponse>
   */
  getUserCount(
    requestData: googleProtobuf005.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu006.StatResponse> {
    return this.$raw
      .getUserCount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
