import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './session.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
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
		detectIntent: (
			requestData: thisProto.DetectIntentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.DetectIntentResponse>>;
		/**
		 * Bidirectional streaming: /ondewo.nlu.Sessions/StreamingDetectIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
		 */
		streamingDetectIntent: (
			requestData: Observable<thisProto.StreamingDetectIntentRequest>,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionsResponse>>
		 */
		listSessions: (
			requestData: thisProto.ListSessionsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListSessionsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		getSession: (
			requestData: thisProto.GetSessionRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Session>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/CreateSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		createSession: (
			requestData: thisProto.CreateSessionRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Session>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/TrackSessionStep
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		trackSessionStep: (
			requestData: thisProto.TrackSessionStepRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Session>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/DeleteSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
		 */
		deleteSession: (
			requestData: thisProto.DeleteSessionRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
		 */
		listSessionLabels: (
			requestData: thisProto.ListSessionLabelsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/AddSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		addSessionLabels: (
			requestData: thisProto.AddSessionLabelsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Session>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/RemoveSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		removeSessionLabels: (
			requestData: thisProto.RemoveSessionLabelsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Session>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessionReviews
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
		 */
		listSessionReviews: (
			requestData: thisProto.ListSessionReviewsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		getSessionReview: (
			requestData: thisProto.GetSessionReviewRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SessionReview>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetLatestSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		getLatestSessionReview: (
			requestData: thisProto.GetLatestSessionReviewRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SessionReview>>;
		/**
		 * Unary call: /ondewo.nlu.Sessions/CreateSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		createSessionReview: (
			requestData: thisProto.CreateSessionReviewRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SessionReview>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.Sessions/DetectIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.DetectIntentResponse>
	 */
	detectIntent(
		requestData: thisProto.DetectIntentRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.DetectIntentResponse>;
	/**
	 * Bidirectional streaming @/ondewo.nlu.Sessions/StreamingDetectIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.StreamingDetectIntentResponse>
	 */
	streamingDetectIntent(
		requestData: Observable<thisProto.StreamingDetectIntentRequest>,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.StreamingDetectIntentResponse>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionsResponse>
	 */
	listSessions(
		requestData: thisProto.ListSessionsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListSessionsResponse>;
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
	createSession(
		requestData: thisProto.CreateSessionRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Session>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/TrackSessionStep
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	trackSessionStep(
		requestData: thisProto.TrackSessionStepRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Session>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/DeleteSession
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf004.Empty>
	 */
	deleteSession(
		requestData: thisProto.DeleteSessionRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf004.Empty>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionLabelsResponse>
	 */
	listSessionLabels(
		requestData: thisProto.ListSessionLabelsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListSessionLabelsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/AddSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	addSessionLabels(
		requestData: thisProto.AddSessionLabelsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Session>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/RemoveSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	removeSessionLabels(
		requestData: thisProto.RemoveSessionLabelsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Session>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessionReviews
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionReviewsResponse>
	 */
	listSessionReviews(
		requestData: thisProto.ListSessionReviewsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListSessionReviewsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/GetSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	getSessionReview(
		requestData: thisProto.GetSessionReviewRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SessionReview>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/GetLatestSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	getLatestSessionReview(
		requestData: thisProto.GetLatestSessionReviewRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SessionReview>;
	/**
	 * Unary call @/ondewo.nlu.Sessions/CreateSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	createSessionReview(
		requestData: thisProto.CreateSessionReviewRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SessionReview>;
	static ɵfac: i0.ɵɵFactoryDeclaration<SessionsClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<SessionsClient>;
}
