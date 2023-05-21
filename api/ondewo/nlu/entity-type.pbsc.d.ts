import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './entity-type.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/operations.pb';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.nlu.EntityTypes
 */
export declare class EntityTypesClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/ListEntityTypes
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
		 */
		listEntityTypes: (
			requestData: thisProto.ListEntityTypesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/GetEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType>>
		 */
		getEntityType: (
			requestData: thisProto.GetEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/CreateEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType>>
		 */
		createEntityType: (
			requestData: thisProto.CreateEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/UpdateEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType>>
		 */
		updateEntityType: (
			requestData: thisProto.UpdateEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/DeleteEntityType
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
		 */
		deleteEntityType: (
			requestData: thisProto.DeleteEntityTypeRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoNlu010.Operation>>
		 */
		batchUpdateEntityTypes: (
			requestData: thisProto.BatchUpdateEntityTypesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<ondewoNlu010.Operation>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoNlu010.Operation>>
		 */
		batchDeleteEntityTypes: (
			requestData: thisProto.BatchDeleteEntityTypesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<ondewoNlu010.Operation>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/GetEntity
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
		 */
		getEntity: (
			requestData: thisProto.GetEntityRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType.Entity>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/CreateEntity
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
		 */
		createEntity: (
			requestData: thisProto.CreateEntityRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType.Entity>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/UpdateEntity
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
		 */
		updateEntity: (
			requestData: thisProto.UpdateEntityRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.EntityType.Entity>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/DeleteEntity
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.DeleteEntityStatus>>
		 */
		deleteEntity: (
			requestData: thisProto.DeleteEntityRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.DeleteEntityStatus>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchCreateEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
		 */
		batchCreateEntities: (
			requestData: thisProto.BatchCreateEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
		 */
		batchUpdateEntities: (
			requestData: thisProto.BatchUpdateEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchGetEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
		 */
		batchGetEntities: (
			requestData: thisProto.BatchGetEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>
		 */
		batchDeleteEntities: (
			requestData: thisProto.BatchDeleteEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.EntityTypes/ListEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListEntitiesResponse>>
		 */
		listEntities: (
			requestData: thisProto.ListEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListEntitiesResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/ListEntityTypes
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListEntityTypesResponse>
	 */
	listEntityTypes(
		requestData: thisProto.ListEntityTypesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListEntityTypesResponse>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/GetEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType>
	 */
	getEntityType(
		requestData: thisProto.GetEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/CreateEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType>
	 */
	createEntityType(
		requestData: thisProto.CreateEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/UpdateEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType>
	 */
	updateEntityType(
		requestData: thisProto.UpdateEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/DeleteEntityType
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf004.Empty>
	 */
	deleteEntityType(
		requestData: thisProto.DeleteEntityTypeRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf004.Empty>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu010.Operation>
	 */
	batchUpdateEntityTypes(
		requestData: thisProto.BatchUpdateEntityTypesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<ondewoNlu010.Operation>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu010.Operation>
	 */
	batchDeleteEntityTypes(
		requestData: thisProto.BatchDeleteEntityTypesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<ondewoNlu010.Operation>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/GetEntity
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType.Entity>
	 */
	getEntity(
		requestData: thisProto.GetEntityRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType.Entity>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/CreateEntity
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType.Entity>
	 */
	createEntity(
		requestData: thisProto.CreateEntityRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType.Entity>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/UpdateEntity
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.EntityType.Entity>
	 */
	updateEntity(
		requestData: thisProto.UpdateEntityRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.EntityType.Entity>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/DeleteEntity
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.DeleteEntityStatus>
	 */
	deleteEntity(
		requestData: thisProto.DeleteEntityRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.DeleteEntityStatus>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchCreateEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchEntitiesResponse>
	 */
	batchCreateEntities(
		requestData: thisProto.BatchCreateEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchEntitiesResponse>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchEntitiesResponse>
	 */
	batchUpdateEntities(
		requestData: thisProto.BatchUpdateEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchEntitiesResponse>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchGetEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchEntitiesResponse>
	 */
	batchGetEntities(
		requestData: thisProto.BatchGetEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchEntitiesResponse>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteEntitiesResponse>
	 */
	batchDeleteEntities(
		requestData: thisProto.BatchDeleteEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchDeleteEntitiesResponse>;
	/**
	 * Unary call @/ondewo.nlu.EntityTypes/ListEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListEntitiesResponse>
	 */
	listEntities(
		requestData: thisProto.ListEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListEntitiesResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypesClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<EntityTypesClient>;
}
