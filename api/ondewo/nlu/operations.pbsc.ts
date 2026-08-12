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
import * as thisProto from './operations.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleApi006 from '../../google/api/annotations.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleRpc008 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import { GRPC_OPERATIONS_CLIENT_SETTINGS } from './operations.pbconf';
/**
 * Service client implementation for ondewo.nlu.Operations
 */
@Injectable({ providedIn: 'any' })
export class OperationsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Operations/ListOperations
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListOperationsResponse>>
     */
    listOperations: (
      requestData: thisProto.ListOperationsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListOperationsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/ListOperations',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListOperationsRequest,
        responseClass: thisProto.ListOperationsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/GetOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Operation>>
     */
    getOperation: (
      requestData: thisProto.GetOperationRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/GetOperation',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetOperationRequest,
        responseClass: thisProto.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/DeleteOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf007.Empty>>
     */
    deleteOperation: (
      requestData: thisProto.DeleteOperationRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf007.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/DeleteOperation',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteOperationRequest,
        responseClass: googleProtobuf007.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/CancelOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf007.Empty>>
     */
    cancelOperation: (
      requestData: thisProto.CancelOperationRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf007.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/CancelOperation',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelOperationRequest,
        responseClass: googleProtobuf007.Empty
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Operations/StreamRemoteOperationContainerLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RemoteOperationContainerLogLine>>
     */
    streamRemoteOperationContainerLogs: (
      requestData: thisProto.StreamRemoteOperationContainerLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RemoteOperationContainerLogLine>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Operations/StreamRemoteOperationContainerLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamRemoteOperationContainerLogsRequest,
        responseClass: thisProto.RemoteOperationContainerLogLine
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/GetRemoteOperationContainerLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetRemoteOperationContainerLogsResponse>>
     */
    getRemoteOperationContainerLogs: (
      requestData: thisProto.GetRemoteOperationContainerLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.GetRemoteOperationContainerLogsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/GetRemoteOperationContainerLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetRemoteOperationContainerLogsRequest,
        responseClass: thisProto.GetRemoteOperationContainerLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/GetRemoteOperationContainerStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RemoteOperationContainerStatus>>
     */
    getRemoteOperationContainerStatus: (
      requestData: thisProto.GetRemoteOperationContainerStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RemoteOperationContainerStatus>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/GetRemoteOperationContainerStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetRemoteOperationContainerStatusRequest,
        responseClass: thisProto.RemoteOperationContainerStatus
      });
    },
    /**
     * Unary call: /ondewo.nlu.Operations/ListRemoteOperationContainers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListRemoteOperationContainersResponse>>
     */
    listRemoteOperationContainers: (
      requestData: thisProto.ListRemoteOperationContainersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListRemoteOperationContainersResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Operations/ListRemoteOperationContainers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListRemoteOperationContainersRequest,
        responseClass: thisProto.ListRemoteOperationContainersResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_OPERATIONS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Operations', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Operations/ListOperations
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListOperationsResponse>
   */
  listOperations(
    requestData: thisProto.ListOperationsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListOperationsResponse> {
    return this.$raw
      .listOperations(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/GetOperation
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Operation>
   */
  getOperation(
    requestData: thisProto.GetOperationRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Operation> {
    return this.$raw
      .getOperation(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/DeleteOperation
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf007.Empty>
   */
  deleteOperation(
    requestData: thisProto.DeleteOperationRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf007.Empty> {
    return this.$raw
      .deleteOperation(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/CancelOperation
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf007.Empty>
   */
  cancelOperation(
    requestData: thisProto.CancelOperationRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf007.Empty> {
    return this.$raw
      .cancelOperation(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Operations/StreamRemoteOperationContainerLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RemoteOperationContainerLogLine>
   */
  streamRemoteOperationContainerLogs(
    requestData: thisProto.StreamRemoteOperationContainerLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RemoteOperationContainerLogLine> {
    return this.$raw
      .streamRemoteOperationContainerLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/GetRemoteOperationContainerLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetRemoteOperationContainerLogsResponse>
   */
  getRemoteOperationContainerLogs(
    requestData: thisProto.GetRemoteOperationContainerLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetRemoteOperationContainerLogsResponse> {
    return this.$raw
      .getRemoteOperationContainerLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/GetRemoteOperationContainerStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RemoteOperationContainerStatus>
   */
  getRemoteOperationContainerStatus(
    requestData: thisProto.GetRemoteOperationContainerStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RemoteOperationContainerStatus> {
    return this.$raw
      .getRemoteOperationContainerStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Operations/ListRemoteOperationContainers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListRemoteOperationContainersResponse>
   */
  listRemoteOperationContainers(
    requestData: thisProto.ListRemoteOperationContainersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListRemoteOperationContainersResponse> {
    return this.$raw
      .listRemoteOperationContainers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
