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
import * as thisProto from './context.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import { GRPC_CONTEXTS_CLIENT_SETTINGS } from './context.pbconf';
/**
 * Service client implementation for ondewo.nlu.Contexts
 */
@Injectable({ providedIn: 'any' })
export class ContextsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Contexts/ListContexts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListContextsResponse>>
     */
    listContexts: (
      requestData: thisProto.ListContextsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListContextsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/ListContexts',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListContextsRequest,
        responseClass: thisProto.ListContextsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Contexts/GetContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Context>>
     */
    getContext: (
      requestData: thisProto.GetContextRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Context>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/GetContext',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetContextRequest,
        responseClass: thisProto.Context
      });
    },
    /**
     * Unary call: /ondewo.nlu.Contexts/CreateContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Context>>
     */
    createContext: (
      requestData: thisProto.CreateContextRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Context>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/CreateContext',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateContextRequest,
        responseClass: thisProto.Context
      });
    },
    /**
     * Unary call: /ondewo.nlu.Contexts/UpdateContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Context>>
     */
    updateContext: (
      requestData: thisProto.UpdateContextRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Context>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/UpdateContext',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateContextRequest,
        responseClass: thisProto.Context
      });
    },
    /**
     * Unary call: /ondewo.nlu.Contexts/DeleteContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteContext: (
      requestData: thisProto.DeleteContextRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/DeleteContext',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteContextRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Contexts/DeleteAllContexts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAllContexts: (
      requestData: thisProto.DeleteAllContextsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Contexts/DeleteAllContexts',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteAllContextsRequest,
        responseClass: googleProtobuf003.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CONTEXTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Contexts', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/ListContexts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListContextsResponse>
   */
  listContexts(
    requestData: thisProto.ListContextsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListContextsResponse> {
    return this.$raw
      .listContexts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/GetContext
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Context>
   */
  getContext(
    requestData: thisProto.GetContextRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Context> {
    return this.$raw
      .getContext(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/CreateContext
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Context>
   */
  createContext(
    requestData: thisProto.CreateContextRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Context> {
    return this.$raw
      .createContext(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/UpdateContext
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Context>
   */
  updateContext(
    requestData: thisProto.UpdateContextRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Context> {
    return this.$raw
      .updateContext(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/DeleteContext
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteContext(
    requestData: thisProto.DeleteContextRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteContext(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Contexts/DeleteAllContexts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteAllContexts(
    requestData: thisProto.DeleteAllContextsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteAllContexts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
