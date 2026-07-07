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
import * as thisProto from './conversation.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleApi001 from '../../google/api/annotations.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as googleType007 from '../../google/type/latlng.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/session.pb';
import * as ondewoT2s013 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoS2t014 from '../../ondewo/s2t/speech-to-text.pb';
import { GRPC_CONVERSATIONS_CLIENT_SETTINGS } from './conversation.pbconf';
/**
 * Service client implementation for ondewo.csi.Conversations
 */
@Injectable({ providedIn: 'any' })
export class ConversationsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.csi.Conversations/CreateS2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    createS2sPipeline: (
      requestData: thisProto.S2sPipeline,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/CreateS2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2sPipeline,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/GetS2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2sPipeline>>
     */
    getS2sPipeline: (
      requestData: thisProto.S2sPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.S2sPipeline>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/GetS2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2sPipelineId,
        responseClass: thisProto.S2sPipeline
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/UpdateS2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    updateS2sPipeline: (
      requestData: thisProto.S2sPipeline,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/UpdateS2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2sPipeline,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/DeleteS2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteS2sPipeline: (
      requestData: thisProto.S2sPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/DeleteS2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2sPipelineId,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/ListS2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2sPipelinesResponse>>
     */
    listS2sPipelines: (
      requestData: thisProto.ListS2sPipelinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListS2sPipelinesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/ListS2sPipelines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListS2sPipelinesRequest,
        responseClass: thisProto.ListS2sPipelinesResponse
      });
    },
    /**
     * Bidirectional streaming: /ondewo.csi.Conversations/S2sStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2sStreamResponse>>
     */
    s2sStream: (
      requestData: Observable<thisProto.S2sStreamRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.S2sStreamResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/ondewo.csi.Conversations/S2sStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.S2sStreamRequest,
        responseClass: thisProto.S2sStreamResponse
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/CheckUpstreamHealth
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CheckUpstreamHealthResponse>>
     */
    checkUpstreamHealth: (
      requestData: googleProtobuf002.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CheckUpstreamHealthResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/CheckUpstreamHealth',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf002.Empty,
        responseClass: thisProto.CheckUpstreamHealthResponse
      });
    },
    /**
     * Server streaming: /ondewo.csi.Conversations/GetControlStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ControlStreamResponse>>
     */
    getControlStream: (
      requestData: thisProto.ControlStreamRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ControlStreamResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.csi.Conversations/GetControlStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.ControlStreamRequest,
        responseClass: thisProto.ControlStreamResponse
      });
    },
    /**
     * Unary call: /ondewo.csi.Conversations/SetControlStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SetControlStatusResponse>>
     */
    setControlStatus: (
      requestData: thisProto.SetControlStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SetControlStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.csi.Conversations/SetControlStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.SetControlStatusRequest,
        responseClass: thisProto.SetControlStatusResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CONVERSATIONS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.csi.Conversations',
      settings
    );
  }

  /**
   * Unary call @/ondewo.csi.Conversations/CreateS2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  createS2sPipeline(
    requestData: thisProto.S2sPipeline,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .createS2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/GetS2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2sPipeline>
   */
  getS2sPipeline(
    requestData: thisProto.S2sPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.S2sPipeline> {
    return this.$raw
      .getS2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/UpdateS2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  updateS2sPipeline(
    requestData: thisProto.S2sPipeline,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .updateS2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/DeleteS2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  deleteS2sPipeline(
    requestData: thisProto.S2sPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .deleteS2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/ListS2sPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2sPipelinesResponse>
   */
  listS2sPipelines(
    requestData: thisProto.ListS2sPipelinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListS2sPipelinesResponse> {
    return this.$raw
      .listS2sPipelines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/ondewo.csi.Conversations/S2sStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2sStreamResponse>
   */
  s2sStream(
    requestData: Observable<thisProto.S2sStreamRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.S2sStreamResponse> {
    return this.$raw
      .s2sStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/CheckUpstreamHealth
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CheckUpstreamHealthResponse>
   */
  checkUpstreamHealth(
    requestData: googleProtobuf002.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CheckUpstreamHealthResponse> {
    return this.$raw
      .checkUpstreamHealth(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.csi.Conversations/GetControlStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ControlStreamResponse>
   */
  getControlStream(
    requestData: thisProto.ControlStreamRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ControlStreamResponse> {
    return this.$raw
      .getControlStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.csi.Conversations/SetControlStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SetControlStatusResponse>
   */
  setControlStatus(
    requestData: thisProto.SetControlStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SetControlStatusResponse> {
    return this.$raw
      .setControlStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
