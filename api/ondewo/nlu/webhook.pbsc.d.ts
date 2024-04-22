import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './webhook.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.nlu.Webhook
 */
export declare class WebhookClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.nlu.Webhook/ResponseRefinement
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
		 */
		responseRefinement: (
			requestData: thisProto.WebhookRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.WebhookResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Webhook/SlotFilling
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
		 */
		slotFilling: (
			requestData: thisProto.WebhookRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.WebhookResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Webhook/Ping
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.PingResponse>>
		 */
		ping: (
			requestData: thisProto.PingRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.PingResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Webhook/CreateSessionEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionEntityType>>
		 */
		createSessionEntityType: (
			requestData: thisProto.CreateSessionEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SessionEntityType>>;
		/**
		 * Unary call: /ondewo.nlu.Webhook/UpdateSessionEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionEntityType>>
		 */
		updateSessionEntityType: (
			requestData: thisProto.UpdateSessionEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SessionEntityType>>;
		/**
		 * Unary call: /ondewo.nlu.Webhook/DeleteSessionEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteSessionEntityType: (
			requestData: thisProto.DeleteSessionEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.Webhook/ResponseRefinement
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.WebhookResponse>
	 */
	responseRefinement(
		requestData: thisProto.WebhookRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.WebhookResponse>;
	/**
	 * Unary call @/ondewo.nlu.Webhook/SlotFilling
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.WebhookResponse>
	 */
	slotFilling(
		requestData: thisProto.WebhookRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.WebhookResponse>;
	/**
	 * Unary call @/ondewo.nlu.Webhook/Ping
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.PingResponse>
	 */
	ping(requestData: thisProto.PingRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.PingResponse>;
	/**
	 * Unary call @/ondewo.nlu.Webhook/CreateSessionEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionEntityType>
	 */
	createSessionEntityType(
		requestData: thisProto.CreateSessionEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SessionEntityType>;
	/**
	 * Unary call @/ondewo.nlu.Webhook/UpdateSessionEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionEntityType>
	 */
	updateSessionEntityType(
		requestData: thisProto.UpdateSessionEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SessionEntityType>;
	/**
	 * Unary call @/ondewo.nlu.Webhook/DeleteSessionEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteSessionEntityType(
		requestData: thisProto.DeleteSessionEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	static ɵfac: i0.ɵɵFactoryDeclaration<WebhookClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<WebhookClient>;
}
