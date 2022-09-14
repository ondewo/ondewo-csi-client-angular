import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './conversation.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.csi.Conversations
 */
export declare class ConversationsClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.csi.Conversations/CreateS2sPipeline
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
		 */
		createS2sPipeline: (
			requestData: thisProto.S2sPipeline,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf002.Empty>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/GetS2sPipeline
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.S2sPipeline>>
		 */
		getS2sPipeline: (
			requestData: thisProto.S2sPipelineId,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.S2sPipeline>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/UpdateS2sPipeline
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
		 */
		updateS2sPipeline: (
			requestData: thisProto.S2sPipeline,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf002.Empty>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/DeleteS2sPipeline
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
		 */
		deleteS2sPipeline: (
			requestData: thisProto.S2sPipelineId,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf002.Empty>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/ListS2sPipelines
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListS2sPipelinesResponse>>
		 */
		listS2sPipelines: (
			requestData: thisProto.ListS2sPipelinesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListS2sPipelinesResponse>>;
		/**
		 * Bidirectional streaming: /ondewo.csi.Conversations/S2sStream
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.S2sStreamResponse>>
		 */
		s2sStream: (
			requestData: Observable<thisProto.S2sStreamRequest>,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.S2sStreamResponse>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/CheckUpstreamHealth
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.CheckUpstreamHealthResponse>>
		 */
		checkUpstreamHealth: (
			requestData: googleProtobuf002.Empty,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.CheckUpstreamHealthResponse>>;
		/**
		 * Server streaming: /ondewo.csi.Conversations/GetControlStream
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ControlStreamResponse>>
		 */
		getControlStream: (
			requestData: thisProto.ControlStreamRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ControlStreamResponse>>;
		/**
		 * Unary call: /ondewo.csi.Conversations/SetControlStatus
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SetControlStatusResponse>>
		 */
		setControlStatus: (
			requestData: thisProto.SetControlStatusRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SetControlStatusResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.csi.Conversations/CreateS2sPipeline
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf002.Empty>
	 */
	createS2sPipeline(
		requestData: thisProto.S2sPipeline,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf002.Empty>;
	/**
	 * Unary call @/ondewo.csi.Conversations/GetS2sPipeline
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.S2sPipeline>
	 */
	getS2sPipeline(
		requestData: thisProto.S2sPipelineId,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.S2sPipeline>;
	/**
	 * Unary call @/ondewo.csi.Conversations/UpdateS2sPipeline
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf002.Empty>
	 */
	updateS2sPipeline(
		requestData: thisProto.S2sPipeline,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf002.Empty>;
	/**
	 * Unary call @/ondewo.csi.Conversations/DeleteS2sPipeline
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf002.Empty>
	 */
	deleteS2sPipeline(
		requestData: thisProto.S2sPipelineId,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf002.Empty>;
	/**
	 * Unary call @/ondewo.csi.Conversations/ListS2sPipelines
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListS2sPipelinesResponse>
	 */
	listS2sPipelines(
		requestData: thisProto.ListS2sPipelinesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListS2sPipelinesResponse>;
	/**
	 * Bidirectional streaming @/ondewo.csi.Conversations/S2sStream
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.S2sStreamResponse>
	 */
	s2sStream(
		requestData: Observable<thisProto.S2sStreamRequest>,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.S2sStreamResponse>;
	/**
	 * Unary call @/ondewo.csi.Conversations/CheckUpstreamHealth
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.CheckUpstreamHealthResponse>
	 */
	checkUpstreamHealth(
		requestData: googleProtobuf002.Empty,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.CheckUpstreamHealthResponse>;
	/**
	 * Server streaming @/ondewo.csi.Conversations/GetControlStream
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ControlStreamResponse>
	 */
	getControlStream(
		requestData: thisProto.ControlStreamRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ControlStreamResponse>;
	/**
	 * Unary call @/ondewo.csi.Conversations/SetControlStatus
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SetControlStatusResponse>
	 */
	setControlStatus(
		requestData: thisProto.SetControlStatusRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SetControlStatusResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<ConversationsClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<ConversationsClient>;
}
