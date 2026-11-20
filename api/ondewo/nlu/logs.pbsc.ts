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
import * as thisProto from './logs.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/operation-metadata.pb';
import { GRPC_LOGS_CLIENT_SETTINGS } from './logs.pbconf';
/**
 * Service client implementation for ondewo.nlu.Logs
 */
@Injectable({ providedIn: 'any' })
export class LogsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /ondewo.nlu.Logs/StreamLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamLogsResponse>>
     */
    streamLogs: (
      requestData: thisProto.StreamLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Logs/StreamLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamLogsRequest,
        responseClass: thisProto.StreamLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Logs/ListLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLogsResponse>>
     */
    listLogs: (
      requestData: thisProto.ListLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Logs/ListLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLogsRequest,
        responseClass: thisProto.ListLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Logs/GetLogStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CaiLogStream>>
     */
    getLogStream: (
      requestData: thisProto.GetLogStreamRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CaiLogStream>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Logs/GetLogStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLogStreamRequest,
        responseClass: thisProto.CaiLogStream
      });
    },
    /**
     * Unary call: /ondewo.nlu.Logs/ListLogStreams
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLogStreamsResponse>>
     */
    listLogStreams: (
      requestData: thisProto.ListLogStreamsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLogStreamsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Logs/ListLogStreams',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLogStreamsRequest,
        responseClass: thisProto.ListLogStreamsResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Logs/ExportLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ExportLogsResponse>>
     */
    exportLogs: (
      requestData: thisProto.ExportLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ExportLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Logs/ExportLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExportLogsRequest,
        responseClass: thisProto.ExportLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Logs/DeleteLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteLogsResponse>>
     */
    deleteLogs: (
      requestData: thisProto.DeleteLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Logs/DeleteLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLogsRequest,
        responseClass: thisProto.DeleteLogsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_LOGS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Logs', settings);
  }

  /**
   * Server streaming @/ondewo.nlu.Logs/StreamLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamLogsResponse>
   */
  streamLogs(
    requestData: thisProto.StreamLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamLogsResponse> {
    return this.$raw
      .streamLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Logs/ListLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLogsResponse>
   */
  listLogs(
    requestData: thisProto.ListLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLogsResponse> {
    return this.$raw
      .listLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Logs/GetLogStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CaiLogStream>
   */
  getLogStream(
    requestData: thisProto.GetLogStreamRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CaiLogStream> {
    return this.$raw
      .getLogStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Logs/ListLogStreams
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLogStreamsResponse>
   */
  listLogStreams(
    requestData: thisProto.ListLogStreamsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLogStreamsResponse> {
    return this.$raw
      .listLogStreams(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Logs/ExportLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ExportLogsResponse>
   */
  exportLogs(
    requestData: thisProto.ExportLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ExportLogsResponse> {
    return this.$raw
      .exportLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Logs/DeleteLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteLogsResponse>
   */
  deleteLogs(
    requestData: thisProto.DeleteLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteLogsResponse> {
    return this.$raw
      .deleteLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
