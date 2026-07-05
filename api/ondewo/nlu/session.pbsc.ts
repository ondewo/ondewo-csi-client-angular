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
import * as thisProto from './session.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleApi005 from '../../google/api/annotations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
import { GRPC_SESSIONS_CLIENT_SETTINGS } from './session.pbconf';
/**
 * Service client implementation for ondewo.nlu.Sessions
 */
@Injectable({ providedIn: 'any' })
export class SessionsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Sessions/DetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DetectIntentResponse>>
     */
    detectIntent: (
      requestData: thisProto.DetectIntentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DetectIntentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DetectIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.DetectIntentRequest,
        responseClass: thisProto.DetectIntentResponse
      });
    },
    /**
     * Bidirectional streaming: /ondewo.nlu.Sessions/StreamingDetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
     */
    streamingDetectIntent: (
      requestData: Observable<thisProto.StreamingDetectIntentRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamingDetectIntentRequest,
        responseClass: thisProto.StreamingDetectIntentResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSessionsResponse>>
     */
    listSessions: (
      requestData: thisProto.ListSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSessionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSessionsRequest,
        responseClass: thisProto.ListSessionsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    getSession: (
      requestData: thisProto.GetSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSessionRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/CreateSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    createSession: (
      requestData: thisProto.CreateSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/CreateSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSessionRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/CreateSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionStep>>
     */
    createSessionStep: (
      requestData: thisProto.CreateSessionStepRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionStep>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/CreateSessionStep',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSessionStepRequest,
        responseClass: thisProto.SessionStep
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionStep>>
     */
    getSessionStep: (
      requestData: thisProto.GetSessionStepRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionStep>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetSessionStep',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSessionStepRequest,
        responseClass: thisProto.SessionStep
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/UpdateSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionStep>>
     */
    updateSessionStep: (
      requestData: thisProto.UpdateSessionStepRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionStep>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/UpdateSessionStep',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSessionStepRequest,
        responseClass: thisProto.SessionStep
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/DeleteSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
     */
    deleteSessionStep: (
      requestData: thisProto.DeleteSessionStepRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf006.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DeleteSessionStep',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSessionStepRequest,
        responseClass: googleProtobuf006.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/DeleteSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
     */
    deleteSession: (
      requestData: thisProto.DeleteSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf006.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DeleteSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSessionRequest,
        responseClass: googleProtobuf006.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
     */
    listSessionLabels: (
      requestData: thisProto.ListSessionLabelsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListSessionLabels',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSessionLabelsRequest,
        responseClass: thisProto.ListSessionLabelsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
     */
    listSessionLabelsOfAllSessions: (
      requestData: thisProto.ListSessionLabelsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSessionLabelsOfAllSessionsRequest,
        responseClass: thisProto.ListSessionLabelsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLanguageCodesResponse>>
     */
    listLanguageCodesOfAllSessions: (
      requestData: thisProto.ListLanguageCodesOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLanguageCodesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLanguageCodesOfAllSessionsRequest,
        responseClass: thisProto.ListLanguageCodesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListMatchedIntentsResponse>>
     */
    listMatchedIntentsOfAllSessions: (
      requestData: thisProto.ListMatchedIntentsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListMatchedIntentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListMatchedIntentsOfAllSessionsRequest,
        responseClass: thisProto.ListMatchedIntentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListMatchedEntityTypesResponse>>
     */
    listMatchedEntityTypesOfAllSessions: (
      requestData: thisProto.ListMatchedEntityTypesOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListMatchedEntityTypesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListMatchedEntityTypesOfAllSessionsRequest,
        responseClass: thisProto.ListMatchedEntityTypesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListUserIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUserIdsResponse>>
     */
    listUserIdsOfAllSessions: (
      requestData: thisProto.ListUserIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUserIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUserIdsOfAllSessionsRequest,
        responseClass: thisProto.ListUserIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListIdentifiedUserIdsResponse>>
     */
    listIdentifiedUserIdsOfAllSessions: (
      requestData: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListIdentifiedUserIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest,
        responseClass: thisProto.ListIdentifiedUserIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListTagsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListTagsResponse>>
     */
    listTagsOfAllSessions: (
      requestData: thisProto.ListTagsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListTagsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListTagsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListTagsOfAllSessionsRequest,
        responseClass: thisProto.ListTagsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListInputContextsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListInputContextsResponse>>
     */
    listInputContextsOfAllSessions: (
      requestData: thisProto.ListInputContextsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListInputContextsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListInputContextsOfAllSessionsRequest,
        responseClass: thisProto.ListInputContextsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListOutputContextsResponse>>
     */
    listOutputContextsOfAllSessions: (
      requestData: thisProto.ListOutputContextsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListOutputContextsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListOutputContextsOfAllSessionsRequest,
        responseClass: thisProto.ListOutputContextsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListPlatformsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListPlatformsResponse>>
     */
    listPlatformsOfAllSessions: (
      requestData: thisProto.ListPlatformsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListPlatformsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListPlatformsOfAllSessionsRequest,
        responseClass: thisProto.ListPlatformsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAccountIdsResponse>>
     */
    listAccountIdsOfAllSessions: (
      requestData: thisProto.ListAccountIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAccountIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAccountIdsOfAllSessionsRequest,
        responseClass: thisProto.ListAccountIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListPropertyIdsResponse>>
     */
    listPropertyIdsOfAllSessions: (
      requestData: thisProto.ListPropertyIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListPropertyIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListPropertyIdsOfAllSessionsRequest,
        responseClass: thisProto.ListPropertyIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListDatastreamIdsResponse>>
     */
    listDatastreamIdsOfAllSessions: (
      requestData: thisProto.ListDatastreamIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListDatastreamIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListDatastreamIdsOfAllSessionsRequest,
        responseClass: thisProto.ListDatastreamIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListOriginIdsResponse>>
     */
    listOriginIdsOfAllSessions: (
      requestData: thisProto.ListOriginIdsOfAllSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListOriginIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListOriginIdsOfAllSessionsRequest,
        responseClass: thisProto.ListOriginIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/AddSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    addSessionLabels: (
      requestData: thisProto.AddSessionLabelsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/AddSessionLabels',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddSessionLabelsRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/DeleteSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    deleteSessionLabels: (
      requestData: thisProto.DeleteSessionLabelsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DeleteSessionLabels',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSessionLabelsRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/AddSessionComment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Comment>>
     */
    addSessionComment: (
      requestData: thisProto.AddSessionCommentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Comment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/AddSessionComment',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddSessionCommentRequest,
        responseClass: ondewoNlu008.Comment
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/DeleteSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    deleteSessionComments: (
      requestData: thisProto.DeleteSessionCommentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DeleteSessionComments',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSessionCommentsRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/UpdateSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Session>>
     */
    updateSessionComments: (
      requestData: thisProto.UpdateSessionCommentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Session>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/UpdateSessionComments',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSessionCommentsRequest,
        responseClass: thisProto.Session
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSessionCommentsResponse>>
     */
    listSessionComments: (
      requestData: thisProto.ListSessionCommentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSessionCommentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListSessionComments',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSessionCommentsRequest,
        responseClass: thisProto.ListSessionCommentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListSessionReviews
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
     */
    listSessionReviews: (
      requestData: thisProto.ListSessionReviewsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListSessionReviews',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSessionReviewsRequest,
        responseClass: thisProto.ListSessionReviewsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getSessionReview: (
      requestData: thisProto.GetSessionReviewRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionReview>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetSessionReview',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSessionReviewRequest,
        responseClass: thisProto.SessionReview
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetLatestSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getLatestSessionReview: (
      requestData: thisProto.GetLatestSessionReviewRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionReview>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLatestSessionReviewRequest,
        responseClass: thisProto.SessionReview
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/CreateSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SessionReview>>
     */
    createSessionReview: (
      requestData: thisProto.CreateSessionReviewRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SessionReview>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/CreateSessionReview',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSessionReviewRequest,
        responseClass: thisProto.SessionReview
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAudioFilesResponse>>
     */
    getAudioFiles: (
      requestData: thisProto.GetAudioFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAudioFilesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetAudioFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAudioFilesRequest,
        responseClass: thisProto.GetAudioFilesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/AddAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddAudioFilesResponse>>
     */
    addAudioFiles: (
      requestData: thisProto.AddAudioFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddAudioFilesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/AddAudioFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddAudioFilesRequest,
        responseClass: thisProto.AddAudioFilesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/DeleteAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteAudioFilesResponse>>
     */
    deleteAudioFiles: (
      requestData: thisProto.DeleteAudioFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteAudioFilesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/DeleteAudioFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteAudioFilesRequest,
        responseClass: thisProto.DeleteAudioFilesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/GetAudioFileOfSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AudioFileResource>>
     */
    getAudioFileOfSession: (
      requestData: thisProto.GetAudioFileOfSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AudioFileResource>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/GetAudioFileOfSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAudioFileOfSessionRequest,
        responseClass: thisProto.AudioFileResource
      });
    },
    /**
     * Unary call: /ondewo.nlu.Sessions/ListAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAudioFilesResponse>>
     */
    listAudioFiles: (
      requestData: thisProto.ListAudioFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAudioFilesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Sessions/ListAudioFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAudioFilesRequest,
        responseClass: thisProto.ListAudioFilesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SESSIONS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Sessions', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DetectIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DetectIntentResponse>
   */
  detectIntent(
    requestData: thisProto.DetectIntentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DetectIntentResponse> {
    return this.$raw
      .detectIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/ondewo.nlu.Sessions/StreamingDetectIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamingDetectIntentResponse>
   */
  streamingDetectIntent(
    requestData: Observable<thisProto.StreamingDetectIntentRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamingDetectIntentResponse> {
    return this.$raw
      .streamingDetectIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSessionsResponse>
   */
  listSessions(
    requestData: thisProto.ListSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSessionsResponse> {
    return this.$raw
      .listSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  getSession(
    requestData: thisProto.GetSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .getSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/CreateSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  createSession(
    requestData: thisProto.CreateSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .createSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/CreateSessionStep
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionStep>
   */
  createSessionStep(
    requestData: thisProto.CreateSessionStepRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionStep> {
    return this.$raw
      .createSessionStep(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetSessionStep
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionStep>
   */
  getSessionStep(
    requestData: thisProto.GetSessionStepRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionStep> {
    return this.$raw
      .getSessionStep(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/UpdateSessionStep
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionStep>
   */
  updateSessionStep(
    requestData: thisProto.UpdateSessionStepRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionStep> {
    return this.$raw
      .updateSessionStep(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DeleteSessionStep
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf006.Empty>
   */
  deleteSessionStep(
    requestData: thisProto.DeleteSessionStepRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf006.Empty> {
    return this.$raw
      .deleteSessionStep(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DeleteSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf006.Empty>
   */
  deleteSession(
    requestData: thisProto.DeleteSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf006.Empty> {
    return this.$raw
      .deleteSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListSessionLabels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSessionLabelsResponse>
   */
  listSessionLabels(
    requestData: thisProto.ListSessionLabelsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSessionLabelsResponse> {
    return this.$raw
      .listSessionLabels(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSessionLabelsResponse>
   */
  listSessionLabelsOfAllSessions(
    requestData: thisProto.ListSessionLabelsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSessionLabelsResponse> {
    return this.$raw
      .listSessionLabelsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLanguageCodesResponse>
   */
  listLanguageCodesOfAllSessions(
    requestData: thisProto.ListLanguageCodesOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLanguageCodesResponse> {
    return this.$raw
      .listLanguageCodesOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListMatchedIntentsResponse>
   */
  listMatchedIntentsOfAllSessions(
    requestData: thisProto.ListMatchedIntentsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListMatchedIntentsResponse> {
    return this.$raw
      .listMatchedIntentsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListMatchedEntityTypesResponse>
   */
  listMatchedEntityTypesOfAllSessions(
    requestData: thisProto.ListMatchedEntityTypesOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListMatchedEntityTypesResponse> {
    return this.$raw
      .listMatchedEntityTypesOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListUserIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUserIdsResponse>
   */
  listUserIdsOfAllSessions(
    requestData: thisProto.ListUserIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUserIdsResponse> {
    return this.$raw
      .listUserIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListIdentifiedUserIdsResponse>
   */
  listIdentifiedUserIdsOfAllSessions(
    requestData: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListIdentifiedUserIdsResponse> {
    return this.$raw
      .listIdentifiedUserIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListTagsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListTagsResponse>
   */
  listTagsOfAllSessions(
    requestData: thisProto.ListTagsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListTagsResponse> {
    return this.$raw
      .listTagsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListInputContextsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListInputContextsResponse>
   */
  listInputContextsOfAllSessions(
    requestData: thisProto.ListInputContextsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListInputContextsResponse> {
    return this.$raw
      .listInputContextsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListOutputContextsResponse>
   */
  listOutputContextsOfAllSessions(
    requestData: thisProto.ListOutputContextsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListOutputContextsResponse> {
    return this.$raw
      .listOutputContextsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListPlatformsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListPlatformsResponse>
   */
  listPlatformsOfAllSessions(
    requestData: thisProto.ListPlatformsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListPlatformsResponse> {
    return this.$raw
      .listPlatformsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAccountIdsResponse>
   */
  listAccountIdsOfAllSessions(
    requestData: thisProto.ListAccountIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAccountIdsResponse> {
    return this.$raw
      .listAccountIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListPropertyIdsResponse>
   */
  listPropertyIdsOfAllSessions(
    requestData: thisProto.ListPropertyIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListPropertyIdsResponse> {
    return this.$raw
      .listPropertyIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListDatastreamIdsResponse>
   */
  listDatastreamIdsOfAllSessions(
    requestData: thisProto.ListDatastreamIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListDatastreamIdsResponse> {
    return this.$raw
      .listDatastreamIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListOriginIdsResponse>
   */
  listOriginIdsOfAllSessions(
    requestData: thisProto.ListOriginIdsOfAllSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListOriginIdsResponse> {
    return this.$raw
      .listOriginIdsOfAllSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/AddSessionLabels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  addSessionLabels(
    requestData: thisProto.AddSessionLabelsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .addSessionLabels(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DeleteSessionLabels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  deleteSessionLabels(
    requestData: thisProto.DeleteSessionLabelsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .deleteSessionLabels(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/AddSessionComment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Comment>
   */
  addSessionComment(
    requestData: thisProto.AddSessionCommentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Comment> {
    return this.$raw
      .addSessionComment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DeleteSessionComments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  deleteSessionComments(
    requestData: thisProto.DeleteSessionCommentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .deleteSessionComments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/UpdateSessionComments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Session>
   */
  updateSessionComments(
    requestData: thisProto.UpdateSessionCommentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Session> {
    return this.$raw
      .updateSessionComments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListSessionComments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSessionCommentsResponse>
   */
  listSessionComments(
    requestData: thisProto.ListSessionCommentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSessionCommentsResponse> {
    return this.$raw
      .listSessionComments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListSessionReviews
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSessionReviewsResponse>
   */
  listSessionReviews(
    requestData: thisProto.ListSessionReviewsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSessionReviewsResponse> {
    return this.$raw
      .listSessionReviews(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetSessionReview
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionReview>
   */
  getSessionReview(
    requestData: thisProto.GetSessionReviewRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionReview> {
    return this.$raw
      .getSessionReview(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetLatestSessionReview
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionReview>
   */
  getLatestSessionReview(
    requestData: thisProto.GetLatestSessionReviewRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionReview> {
    return this.$raw
      .getLatestSessionReview(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/CreateSessionReview
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SessionReview>
   */
  createSessionReview(
    requestData: thisProto.CreateSessionReviewRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SessionReview> {
    return this.$raw
      .createSessionReview(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetAudioFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAudioFilesResponse>
   */
  getAudioFiles(
    requestData: thisProto.GetAudioFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAudioFilesResponse> {
    return this.$raw
      .getAudioFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/AddAudioFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddAudioFilesResponse>
   */
  addAudioFiles(
    requestData: thisProto.AddAudioFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddAudioFilesResponse> {
    return this.$raw
      .addAudioFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/DeleteAudioFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteAudioFilesResponse>
   */
  deleteAudioFiles(
    requestData: thisProto.DeleteAudioFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteAudioFilesResponse> {
    return this.$raw
      .deleteAudioFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/GetAudioFileOfSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AudioFileResource>
   */
  getAudioFileOfSession(
    requestData: thisProto.GetAudioFileOfSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AudioFileResource> {
    return this.$raw
      .getAudioFileOfSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Sessions/ListAudioFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAudioFilesResponse>
   */
  listAudioFiles(
    requestData: thisProto.ListAudioFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAudioFilesResponse> {
    return this.$raw
      .listAudioFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
