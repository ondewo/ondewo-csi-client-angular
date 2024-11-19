import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './session.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.Sessions
 */
export declare class SessionsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.Sessions/DetectIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DetectIntentResponse>>
         */
        detectIntent: (requestData: thisProto.DetectIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DetectIntentResponse>>;
        /**
         * Bidirectional streaming: /ondewo.nlu.Sessions/StreamingDetectIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
         */
        streamingDetectIntent: (requestData: Observable<thisProto.StreamingDetectIntentRequest>, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionsResponse>>
         */
        listSessions: (requestData: thisProto.ListSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        getSession: (requestData: thisProto.GetSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/CreateSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        createSession: (requestData: thisProto.CreateSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/CreateSessionStep
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionStep>>
         */
        createSessionStep: (requestData: thisProto.CreateSessionStepRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionStep>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetSessionStep
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionStep>>
         */
        getSessionStep: (requestData: thisProto.GetSessionStepRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionStep>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/UpdateSessionStep
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionStep>>
         */
        updateSessionStep: (requestData: thisProto.UpdateSessionStepRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionStep>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/DeleteSessionStep
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        deleteSessionStep: (requestData: thisProto.DeleteSessionStepRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/DeleteSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        deleteSession: (requestData: thisProto.DeleteSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
         */
        listSessionLabels: (requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
         */
        listSessionLabelsOfAllSessions: (requestData: thisProto.ListSessionLabelsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListLanguageCodesResponse>>
         */
        listLanguageCodesOfAllSessions: (requestData: thisProto.ListLanguageCodesOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListLanguageCodesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListMatchedIntentsResponse>>
         */
        listMatchedIntentsOfAllSessions: (requestData: thisProto.ListMatchedIntentsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListMatchedIntentsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListMatchedEntityTypesResponse>>
         */
        listMatchedEntityTypesOfAllSessions: (requestData: thisProto.ListMatchedEntityTypesOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListMatchedEntityTypesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListUserIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListUserIdsResponse>>
         */
        listUserIdsOfAllSessions: (requestData: thisProto.ListUserIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListUserIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListIdentifiedUserIdsResponse>>
         */
        listIdentifiedUserIdsOfAllSessions: (requestData: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListIdentifiedUserIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListTagsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListTagsResponse>>
         */
        listTagsOfAllSessions: (requestData: thisProto.ListTagsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListTagsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListInputContextsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListInputContextsResponse>>
         */
        listInputContextsOfAllSessions: (requestData: thisProto.ListInputContextsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListInputContextsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListOutputContextsResponse>>
         */
        listOutputContextsOfAllSessions: (requestData: thisProto.ListOutputContextsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListOutputContextsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListPlatformsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListPlatformsResponse>>
         */
        listPlatformsOfAllSessions: (requestData: thisProto.ListPlatformsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListPlatformsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListAccountIdsResponse>>
         */
        listAccountIdsOfAllSessions: (requestData: thisProto.ListAccountIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListAccountIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListPropertyIdsResponse>>
         */
        listPropertyIdsOfAllSessions: (requestData: thisProto.ListPropertyIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListPropertyIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListDatastreamIdsResponse>>
         */
        listDatastreamIdsOfAllSessions: (requestData: thisProto.ListDatastreamIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListDatastreamIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListOriginIdsResponse>>
         */
        listOriginIdsOfAllSessions: (requestData: thisProto.ListOriginIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListOriginIdsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/AddSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        addSessionLabels: (requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/DeleteSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        deleteSessionLabels: (requestData: thisProto.DeleteSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/AddSessionComment
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu008.Comment>>
         */
        addSessionComment: (requestData: thisProto.AddSessionCommentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu008.Comment>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/DeleteSessionComments
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        deleteSessionComments: (requestData: thisProto.DeleteSessionCommentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/UpdateSessionComments
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        updateSessionComments: (requestData: thisProto.UpdateSessionCommentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListSessionComments
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionCommentsResponse>>
         */
        listSessionComments: (requestData: thisProto.ListSessionCommentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionCommentsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListSessionReviews
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
         */
        listSessionReviews: (requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        getSessionReview: (requestData: thisProto.GetSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetLatestSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        getLatestSessionReview: (requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/CreateSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        createSessionReview: (requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetAudioFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAudioFilesResponse>>
         */
        getAudioFiles: (requestData: thisProto.GetAudioFilesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAudioFilesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/AddAudioFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddAudioFilesResponse>>
         */
        addAudioFiles: (requestData: thisProto.AddAudioFilesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddAudioFilesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/DeleteAudioFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteAudioFilesResponse>>
         */
        deleteAudioFiles: (requestData: thisProto.DeleteAudioFilesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteAudioFilesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/GetAudioFileOfSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AudioFileResource>>
         */
        getAudioFileOfSession: (requestData: thisProto.GetAudioFileOfSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AudioFileResource>>;
        /**
         * Unary call: /ondewo.nlu.Sessions/ListAudioFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListAudioFilesResponse>>
         */
        listAudioFiles: (requestData: thisProto.ListAudioFilesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListAudioFilesResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.Sessions/DetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DetectIntentResponse>
     */
    detectIntent(requestData: thisProto.DetectIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DetectIntentResponse>;
    /**
     * Bidirectional streaming @/ondewo.nlu.Sessions/StreamingDetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StreamingDetectIntentResponse>
     */
    streamingDetectIntent(requestData: Observable<thisProto.StreamingDetectIntentRequest>, requestMetadata?: GrpcMetadata): Observable<thisProto.StreamingDetectIntentResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionsResponse>
     */
    listSessions(requestData: thisProto.ListSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    getSession(requestData: thisProto.GetSessionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/CreateSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    createSession(requestData: thisProto.CreateSessionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/CreateSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionStep>
     */
    createSessionStep(requestData: thisProto.CreateSessionStepRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionStep>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionStep>
     */
    getSessionStep(requestData: thisProto.GetSessionStepRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionStep>;
    /**
     * Unary call @/ondewo.nlu.Sessions/UpdateSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionStep>
     */
    updateSessionStep(requestData: thisProto.UpdateSessionStepRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionStep>;
    /**
     * Unary call @/ondewo.nlu.Sessions/DeleteSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    deleteSessionStep(requestData: thisProto.DeleteSessionStepRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Sessions/DeleteSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    deleteSession(requestData: thisProto.DeleteSessionRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabels(requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionLabelsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabelsOfAllSessions(requestData: thisProto.ListSessionLabelsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionLabelsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListLanguageCodesResponse>
     */
    listLanguageCodesOfAllSessions(requestData: thisProto.ListLanguageCodesOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListLanguageCodesResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListMatchedIntentsResponse>
     */
    listMatchedIntentsOfAllSessions(requestData: thisProto.ListMatchedIntentsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListMatchedIntentsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListMatchedEntityTypesResponse>
     */
    listMatchedEntityTypesOfAllSessions(requestData: thisProto.ListMatchedEntityTypesOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListMatchedEntityTypesResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListUserIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListUserIdsResponse>
     */
    listUserIdsOfAllSessions(requestData: thisProto.ListUserIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListUserIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListIdentifiedUserIdsResponse>
     */
    listIdentifiedUserIdsOfAllSessions(requestData: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListIdentifiedUserIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListTagsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListTagsResponse>
     */
    listTagsOfAllSessions(requestData: thisProto.ListTagsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListTagsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListInputContextsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListInputContextsResponse>
     */
    listInputContextsOfAllSessions(requestData: thisProto.ListInputContextsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListInputContextsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListOutputContextsResponse>
     */
    listOutputContextsOfAllSessions(requestData: thisProto.ListOutputContextsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListOutputContextsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListPlatformsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListPlatformsResponse>
     */
    listPlatformsOfAllSessions(requestData: thisProto.ListPlatformsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListPlatformsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListAccountIdsResponse>
     */
    listAccountIdsOfAllSessions(requestData: thisProto.ListAccountIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListAccountIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListPropertyIdsResponse>
     */
    listPropertyIdsOfAllSessions(requestData: thisProto.ListPropertyIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListPropertyIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListDatastreamIdsResponse>
     */
    listDatastreamIdsOfAllSessions(requestData: thisProto.ListDatastreamIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListDatastreamIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListOriginIdsResponse>
     */
    listOriginIdsOfAllSessions(requestData: thisProto.ListOriginIdsOfAllSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListOriginIdsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/AddSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    addSessionLabels(requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/DeleteSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    deleteSessionLabels(requestData: thisProto.DeleteSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/AddSessionComment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu008.Comment>
     */
    addSessionComment(requestData: thisProto.AddSessionCommentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu008.Comment>;
    /**
     * Unary call @/ondewo.nlu.Sessions/DeleteSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    deleteSessionComments(requestData: thisProto.DeleteSessionCommentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/UpdateSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    updateSessionComments(requestData: thisProto.UpdateSessionCommentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListSessionComments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionCommentsResponse>
     */
    listSessionComments(requestData: thisProto.ListSessionCommentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionCommentsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListSessionReviews
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionReviewsResponse>
     */
    listSessionReviews(requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionReviewsResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    getSessionReview(requestData: thisProto.GetSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetLatestSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    getLatestSessionReview(requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
    /**
     * Unary call @/ondewo.nlu.Sessions/CreateSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    createSessionReview(requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAudioFilesResponse>
     */
    getAudioFiles(requestData: thisProto.GetAudioFilesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAudioFilesResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/AddAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddAudioFilesResponse>
     */
    addAudioFiles(requestData: thisProto.AddAudioFilesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AddAudioFilesResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/DeleteAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteAudioFilesResponse>
     */
    deleteAudioFiles(requestData: thisProto.DeleteAudioFilesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteAudioFilesResponse>;
    /**
     * Unary call @/ondewo.nlu.Sessions/GetAudioFileOfSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AudioFileResource>
     */
    getAudioFileOfSession(requestData: thisProto.GetAudioFileOfSessionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AudioFileResource>;
    /**
     * Unary call @/ondewo.nlu.Sessions/ListAudioFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListAudioFilesResponse>
     */
    listAudioFiles(requestData: thisProto.ListAudioFilesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListAudioFilesResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionsClient>;
}
