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
import * as thisProto from './entity-type.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleApi005 from '../../google/api/annotations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleRpc008 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
import { GRPC_ENTITY_TYPES_CLIENT_SETTINGS } from './entity-type.pbconf';
/**
 * Service client implementation for ondewo.nlu.EntityTypes
 */
@Injectable({ providedIn: 'any' })
export class EntityTypesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.EntityTypes/ListEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
     */
    listEntityTypes: (
      requestData: thisProto.ListEntityTypesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListEntityTypesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListEntityTypesRequest,
        responseClass: thisProto.ListEntityTypesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/GetEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType>>
     */
    getEntityType: (
      requestData: thisProto.GetEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/GetEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetEntityTypeRequest,
        responseClass: thisProto.EntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/CreateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType>>
     */
    createEntityType: (
      requestData: thisProto.CreateEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/CreateEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateEntityTypeRequest,
        responseClass: thisProto.EntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/UpdateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType>>
     */
    updateEntityType: (
      requestData: thisProto.UpdateEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateEntityTypeRequest,
        responseClass: thisProto.EntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/DeleteEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf007.Empty>>
     */
    deleteEntityType: (
      requestData: thisProto.DeleteEntityTypeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf007.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteEntityTypeRequest,
        responseClass: googleProtobuf007.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
     */
    batchUpdateEntityTypes: (
      requestData: thisProto.BatchUpdateEntityTypesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu011.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateEntityTypesRequest,
        responseClass: ondewoNlu011.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
     */
    batchDeleteEntityTypes: (
      requestData: thisProto.BatchDeleteEntityTypesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu011.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteEntityTypesRequest,
        responseClass: ondewoNlu011.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/GetEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
     */
    getEntity: (
      requestData: thisProto.GetEntityRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType.Entity>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/GetEntity',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetEntityRequest,
        responseClass: thisProto.EntityType.Entity
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/CreateEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
     */
    createEntity: (
      requestData: thisProto.CreateEntityRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType.Entity>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/CreateEntity',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateEntityRequest,
        responseClass: thisProto.EntityType.Entity
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/UpdateEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EntityType.Entity>>
     */
    updateEntity: (
      requestData: thisProto.UpdateEntityRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EntityType.Entity>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/UpdateEntity',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateEntityRequest,
        responseClass: thisProto.EntityType.Entity
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/DeleteEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteEntityStatus>>
     */
    deleteEntity: (
      requestData: thisProto.DeleteEntityRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteEntityStatus>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/DeleteEntity',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteEntityRequest,
        responseClass: thisProto.DeleteEntityStatus
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchCreateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
     */
    batchCreateEntities: (
      requestData: thisProto.BatchCreateEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchCreateEntitiesRequest,
        responseClass: thisProto.BatchEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
     */
    batchUpdateEntities: (
      requestData: thisProto.BatchUpdateEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchUpdateEntitiesRequest,
        responseClass: thisProto.BatchEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchGetEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
     */
    batchGetEntities: (
      requestData: thisProto.BatchGetEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchGetEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchGetEntitiesRequest,
        responseClass: thisProto.BatchEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>
     */
    batchDeleteEntities: (
      requestData: thisProto.BatchDeleteEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchDeleteEntitiesRequest,
        responseClass: thisProto.BatchDeleteEntitiesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.EntityTypes/ListEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListEntitiesResponse>>
     */
    listEntities: (
      requestData: thisProto.ListEntitiesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListEntitiesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.EntityTypes/ListEntities',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListEntitiesRequest,
        responseClass: thisProto.ListEntitiesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ENTITY_TYPES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.EntityTypes',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/ListEntityTypes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListEntityTypesResponse>
   */
  listEntityTypes(
    requestData: thisProto.ListEntityTypesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListEntityTypesResponse> {
    return this.$raw
      .listEntityTypes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/GetEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType>
   */
  getEntityType(
    requestData: thisProto.GetEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType> {
    return this.$raw
      .getEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/CreateEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType>
   */
  createEntityType(
    requestData: thisProto.CreateEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType> {
    return this.$raw
      .createEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/UpdateEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType>
   */
  updateEntityType(
    requestData: thisProto.UpdateEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType> {
    return this.$raw
      .updateEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/DeleteEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf007.Empty>
   */
  deleteEntityType(
    requestData: thisProto.DeleteEntityTypeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf007.Empty> {
    return this.$raw
      .deleteEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu011.Operation>
   */
  batchUpdateEntityTypes(
    requestData: thisProto.BatchUpdateEntityTypesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu011.Operation> {
    return this.$raw
      .batchUpdateEntityTypes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu011.Operation>
   */
  batchDeleteEntityTypes(
    requestData: thisProto.BatchDeleteEntityTypesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu011.Operation> {
    return this.$raw
      .batchDeleteEntityTypes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/GetEntity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType.Entity>
   */
  getEntity(
    requestData: thisProto.GetEntityRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType.Entity> {
    return this.$raw
      .getEntity(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/CreateEntity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType.Entity>
   */
  createEntity(
    requestData: thisProto.CreateEntityRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType.Entity> {
    return this.$raw
      .createEntity(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/UpdateEntity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EntityType.Entity>
   */
  updateEntity(
    requestData: thisProto.UpdateEntityRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EntityType.Entity> {
    return this.$raw
      .updateEntity(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/DeleteEntity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteEntityStatus>
   */
  deleteEntity(
    requestData: thisProto.DeleteEntityRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteEntityStatus> {
    return this.$raw
      .deleteEntity(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchCreateEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchEntitiesResponse>
   */
  batchCreateEntities(
    requestData: thisProto.BatchCreateEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchEntitiesResponse> {
    return this.$raw
      .batchCreateEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchEntitiesResponse>
   */
  batchUpdateEntities(
    requestData: thisProto.BatchUpdateEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchEntitiesResponse> {
    return this.$raw
      .batchUpdateEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchGetEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchEntitiesResponse>
   */
  batchGetEntities(
    requestData: thisProto.BatchGetEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchEntitiesResponse> {
    return this.$raw
      .batchGetEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchDeleteEntitiesResponse>
   */
  batchDeleteEntities(
    requestData: thisProto.BatchDeleteEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchDeleteEntitiesResponse> {
    return this.$raw
      .batchDeleteEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.EntityTypes/ListEntities
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListEntitiesResponse>
   */
  listEntities(
    requestData: thisProto.ListEntitiesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListEntitiesResponse> {
    return this.$raw
      .listEntities(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
