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
import * as thisProto from './webhook.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operations.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as googleRpc010 from '../../google/rpc/status.pb';
import * as googleType011 from '../../google/type/latlng.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/session.pb';
import { GRPC_WEBHOOK_CLIENT_SETTINGS } from './webhook.pbconf';
/**
 * Service client implementation for ondewo.nlu.Webhook
 */
@Injectable({ providedIn: 'any' })
export class WebhookClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Webhook/ResponseRefinement
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    responseRefinement: (
      requestData: thisProto.WebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WebhookResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/ResponseRefinement',
        requestData,
        requestMetadata,
        requestClass: thisProto.WebhookRequest,
        responseClass: thisProto.WebhookResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Webhook/SlotFilling
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    slotFilling: (
      requestData: thisProto.WebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WebhookResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/SlotFilling',
        requestData,
        requestMetadata,
        requestClass: thisProto.WebhookRequest,
        responseClass: thisProto.WebhookResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Webhook/Ping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PingResponse>>
     */
    ping: (
      requestData: thisProto.PingRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PingResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/Ping',
        requestData,
        requestMetadata,
        requestClass: thisProto.PingRequest,
        responseClass: thisProto.PingResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Webhook/CreateSessionEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionEntityType>>
     */
    createSessionEntityType: (
      requestData: thisProto.CreateSessionEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionEntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/CreateSessionEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSessionEntityTypeRequest,
        responseClass: thisProto.SessionEntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.Webhook/UpdateSessionEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionEntityType>>
     */
    updateSessionEntityType: (
      requestData: thisProto.UpdateSessionEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionEntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/UpdateSessionEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSessionEntityTypeRequest,
        responseClass: thisProto.SessionEntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.Webhook/DeleteSessionEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteSessionEntityType: (
      requestData: thisProto.DeleteSessionEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Webhook/DeleteSessionEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSessionEntityTypeRequest,
        responseClass: googleProtobuf003.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_WEBHOOK_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Webhook', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/ResponseRefinement
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WebhookResponse>
   */
  responseRefinement(
    requestData: thisProto.WebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WebhookResponse> {
    return this.$raw
      .responseRefinement(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/SlotFilling
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WebhookResponse>
   */
  slotFilling(
    requestData: thisProto.WebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WebhookResponse> {
    return this.$raw
      .slotFilling(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/Ping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PingResponse>
   */
  ping(
    requestData: thisProto.PingRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PingResponse> {
    return this.$raw
      .ping(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/CreateSessionEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionEntityType>
   */
  createSessionEntityType(
    requestData: thisProto.CreateSessionEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionEntityType> {
    return this.$raw
      .createSessionEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/UpdateSessionEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionEntityType>
   */
  updateSessionEntityType(
    requestData: thisProto.UpdateSessionEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionEntityType> {
    return this.$raw
      .updateSessionEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Webhook/DeleteSessionEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteSessionEntityType(
    requestData: thisProto.DeleteSessionEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteSessionEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
