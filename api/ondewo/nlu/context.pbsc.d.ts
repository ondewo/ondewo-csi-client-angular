import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './context.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.nlu.Contexts
 */
export declare class ContextsClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.nlu.Contexts/ListContexts
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListContextsResponse>>
		 */
		listContexts: (
			requestData: thisProto.ListContextsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListContextsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Contexts/GetContext
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Context>>
		 */
		getContext: (
			requestData: thisProto.GetContextRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Context>>;
		/**
		 * Unary call: /ondewo.nlu.Contexts/CreateContext
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Context>>
		 */
		createContext: (
			requestData: thisProto.CreateContextRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Context>>;
		/**
		 * Unary call: /ondewo.nlu.Contexts/UpdateContext
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Context>>
		 */
		updateContext: (
			requestData: thisProto.UpdateContextRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Context>>;
		/**
		 * Unary call: /ondewo.nlu.Contexts/DeleteContext
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteContext: (
			requestData: thisProto.DeleteContextRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.Contexts/DeleteAllContexts
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteAllContexts: (
			requestData: thisProto.DeleteAllContextsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.Contexts/ListContexts
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListContextsResponse>
	 */
	listContexts(
		requestData: thisProto.ListContextsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListContextsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Contexts/GetContext
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Context>
	 */
	getContext(requestData: thisProto.GetContextRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Context>;
	/**
	 * Unary call @/ondewo.nlu.Contexts/CreateContext
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Context>
	 */
	createContext(
		requestData: thisProto.CreateContextRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Context>;
	/**
	 * Unary call @/ondewo.nlu.Contexts/UpdateContext
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Context>
	 */
	updateContext(
		requestData: thisProto.UpdateContextRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Context>;
	/**
	 * Unary call @/ondewo.nlu.Contexts/DeleteContext
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteContext(
		requestData: thisProto.DeleteContextRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.nlu.Contexts/DeleteAllContexts
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteAllContexts(
		requestData: thisProto.DeleteAllContextsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	static ɵfac: i0.ɵɵFactoryDeclaration<ContextsClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<ContextsClient>;
}
