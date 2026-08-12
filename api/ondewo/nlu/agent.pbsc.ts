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
import * as thisProto from './agent.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleApi005 from '../../google/api/annotations.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/project-role.pb';
import * as googleProtobuf011 from '@ngx-grpc/well-known-types';
import * as googleRpc012 from '../../google/rpc/status.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/operation-metadata.pb';
import * as googleType014 from '../../google/type/latlng.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu016 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu017 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu018 from '../../ondewo/nlu/llm-evaluation.pb';
import * as ondewoNlu019 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu020 from '../../ondewo/nlu/session.pb';
import { GRPC_AGENTS_CLIENT_SETTINGS } from './agent.pbconf';
/**
 * Service client implementation for ondewo.nlu.Agents
 */
@Injectable({ providedIn: 'any' })
export class AgentsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Agents/CreateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Agent>>
     */
    createAgent: (
      requestData: thisProto.CreateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Agent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/CreateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateAgentRequest,
        responseClass: thisProto.Agent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/UpdateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Agent>>
     */
    updateAgent: (
      requestData: thisProto.UpdateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Agent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/UpdateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateAgentRequest,
        responseClass: thisProto.Agent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Agent>>
     */
    getAgent: (
      requestData: thisProto.GetAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Agent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAgentRequest,
        responseClass: thisProto.Agent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/DeleteAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    deleteAgent: (
      requestData: thisProto.DeleteAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/DeleteAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteAgentRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/DeleteAllAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    deleteAllAgents: (
      requestData: googleProtobuf009.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/DeleteAllAgents',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf009.Empty,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAgents: (
      requestData: thisProto.ListAgentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAgentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListAgents',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAgentsRequest,
        responseClass: thisProto.ListAgentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListAgentsOfUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>
     */
    listAgentsOfUser: (
      requestData: thisProto.ListAgentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListAgentsOfUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAgentsRequest,
        responseClass: thisProto.ListAgentsOfUserResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListAllAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAllAgents: (
      requestData: thisProto.ListAgentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAgentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListAllAgents',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAgentsRequest,
        responseClass: thisProto.ListAgentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/AddUserToProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    addUserToProject: (
      requestData: thisProto.AddUserToProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/AddUserToProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddUserToProjectRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/RemoveUserFromProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    removeUserFromProject: (
      requestData: thisProto.RemoveUserFromProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/RemoveUserFromProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.RemoveUserFromProjectRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListUsersInProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>
     */
    listUsersInProject: (
      requestData: thisProto.ListUsersInProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListUsersInProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUsersInProjectRequest,
        responseClass: thisProto.ListUsersInProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetPlatformInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>
     */
    getPlatformInfo: (
      requestData: googleProtobuf009.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetPlatformInfo',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf009.Empty,
        responseClass: thisProto.GetPlatformInfoResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListProjectPermissions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>
     */
    listProjectPermissions: (
      requestData: thisProto.ListProjectPermissionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListProjectPermissions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProjectPermissionsRequest,
        responseClass: thisProto.ListProjectPermissionsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/TrainAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    trainAgent: (
      requestData: thisProto.TrainAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/TrainAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.TrainAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/BuildCache
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    buildCache: (
      requestData: thisProto.BuildCacheRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/BuildCache',
        requestData,
        requestMetadata,
        requestClass: thisProto.BuildCacheRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ExportAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    exportAgent: (
      requestData: thisProto.ExportAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ExportAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExportAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ExportBenchmarkAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    exportBenchmarkAgent: (
      requestData: thisProto.ExportBenchmarkAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ExportBenchmarkAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExportBenchmarkAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ImportAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    importAgent: (
      requestData: thisProto.ImportAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ImportAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ImportAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/MigrateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    migrateAgent: (
      requestData: thisProto.MigrateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/MigrateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.MigrateAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/OptimizeRankingMatch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    optimizeRankingMatch: (
      requestData: thisProto.OptimizeRankingMatchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/OptimizeRankingMatch',
        requestData,
        requestMetadata,
        requestClass: thisProto.OptimizeRankingMatchRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/RestoreAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    restoreAgent: (
      requestData: thisProto.RestoreAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/RestoreAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RestoreAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetAgentStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>
     */
    getAgentStatistics: (
      requestData: thisProto.GetAgentStatisticsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetAgentStatistics',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAgentStatisticsRequest,
        responseClass: thisProto.GetAgentStatisticsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetSessionsStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetSessionsStatisticsResponse>>
     */
    getSessionsStatistics: (
      requestData: thisProto.GetSessionsStatisticsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetSessionsStatisticsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetSessionsStatistics',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSessionsStatisticsRequest,
        responseClass: thisProto.GetSessionsStatisticsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetSessionsStatisticsTimeSeries
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetSessionsStatisticsTimeSeriesResponse>>
     */
    getSessionsStatisticsTimeSeries: (
      requestData: thisProto.GetSessionsStatisticsTimeSeriesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.GetSessionsStatisticsTimeSeriesResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetSessionsStatisticsTimeSeries',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSessionsStatisticsTimeSeriesRequest,
        responseClass: thisProto.GetSessionsStatisticsTimeSeriesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/SetAgentStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Agent>>
     */
    setAgentStatus: (
      requestData: thisProto.SetAgentStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Agent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/SetAgentStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.SetAgentStatusRequest,
        responseClass: thisProto.Agent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/SetResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    setResources: (
      requestData: thisProto.SetResourcesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/SetResources',
        requestData,
        requestMetadata,
        requestClass: thisProto.SetResourcesRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/DeleteResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    deleteResources: (
      requestData: thisProto.DeleteResourcesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/DeleteResources',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteResourcesRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ExportResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ExportResourcesResponse>>
     */
    exportResources: (
      requestData: thisProto.ExportResourcesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ExportResourcesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ExportResources',
        requestData,
        requestMetadata,
        requestClass: thisProto.ExportResourcesRequest,
        responseClass: thisProto.ExportResourcesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetModelStatuses
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetModelStatusesResponse>>
     */
    getModelStatuses: (
      requestData: thisProto.GetModelStatusesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetModelStatusesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetModelStatuses',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetModelStatusesRequest,
        responseClass: thisProto.GetModelStatusesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetPlatformMapping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PlatformMapping>>
     */
    getPlatformMapping: (
      requestData: thisProto.GetPlatformMappingRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PlatformMapping>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetPlatformMapping',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetPlatformMappingRequest,
        responseClass: thisProto.PlatformMapping
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/SetPlatformMapping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PlatformMapping>>
     */
    setPlatformMapping: (
      requestData: thisProto.PlatformMapping,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PlatformMapping>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/SetPlatformMapping',
        requestData,
        requestMetadata,
        requestClass: thisProto.PlatformMapping,
        responseClass: thisProto.PlatformMapping
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntityType>>
     */
    getFullTextSearchEntityType: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullTextSearchResponseEntityType>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchEntityType',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseEntityType
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntity>>
     */
    getFullTextSearchEntity: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullTextSearchResponseEntity>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchEntity',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseEntity
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntitySynonym
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntitySynonym>>
     */
    getFullTextSearchEntitySynonym: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullTextSearchResponseEntitySynonym>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseEntitySynonym
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntent>>
     */
    getFullTextSearchIntent: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullTextSearchResponseIntent>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntent',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntent
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentContextIn
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextIn>>
     */
    getFullTextSearchIntentContextIn: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.FullTextSearchResponseIntentContextIn>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentContextIn
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentContextOut
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextOut>>
     */
    getFullTextSearchIntentContextOut: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.FullTextSearchResponseIntentContextOut>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentContextOut
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentUsersays
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentUsersays>>
     */
    getFullTextSearchIntentUsersays: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.FullTextSearchResponseIntentUsersays>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentUsersays
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentTags
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentTags>>
     */
    getFullTextSearchIntentTags: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentTags>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentTags',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentTags
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentResponse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentResponse>>
     */
    getFullTextSearchIntentResponse: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.FullTextSearchResponseIntentResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentResponse',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentParameters>>
     */
    getFullTextSearchIntentParameters: (
      requestData: thisProto.FullTextSearchRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.FullTextSearchResponseIntentParameters>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/GetFullTextSearchIntentParameters',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullTextSearchRequest,
        responseClass: thisProto.FullTextSearchResponseIntentParameters
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ReindexAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    reindexAgent: (
      requestData: thisProto.ReindexAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ReindexAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReindexAgentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/CreateProjectTechnicalUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateProjectTechnicalUserResponse>>
     */
    createProjectTechnicalUser: (
      requestData: thisProto.CreateProjectTechnicalUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateProjectTechnicalUserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/CreateProjectTechnicalUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateProjectTechnicalUserRequest,
        responseClass: thisProto.CreateProjectTechnicalUserResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/ListProjectTechnicalUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListProjectTechnicalUsersResponse>>
     */
    listProjectTechnicalUsers: (
      requestData: thisProto.ListProjectTechnicalUsersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListProjectTechnicalUsersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/ListProjectTechnicalUsers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProjectTechnicalUsersRequest,
        responseClass: thisProto.ListProjectTechnicalUsersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/DeleteProjectTechnicalUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf009.Empty>>
     */
    deleteProjectTechnicalUser: (
      requestData: thisProto.DeleteProjectTechnicalUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf009.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/DeleteProjectTechnicalUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteProjectTechnicalUserRequest,
        responseClass: googleProtobuf009.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Agents/RotateProjectTechnicalUserPassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RotateProjectTechnicalUserPasswordResponse>>
     */
    rotateProjectTechnicalUserPassword: (
      requestData: thisProto.RotateProjectTechnicalUserPasswordRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.RotateProjectTechnicalUserPasswordResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Agents/RotateProjectTechnicalUserPassword',
        requestData,
        requestMetadata,
        requestClass: thisProto.RotateProjectTechnicalUserPasswordRequest,
        responseClass: thisProto.RotateProjectTechnicalUserPasswordResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_AGENTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Agents', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Agents/CreateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Agent>
   */
  createAgent(
    requestData: thisProto.CreateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Agent> {
    return this.$raw
      .createAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/UpdateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Agent>
   */
  updateAgent(
    requestData: thisProto.UpdateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Agent> {
    return this.$raw
      .updateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Agent>
   */
  getAgent(
    requestData: thisProto.GetAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Agent> {
    return this.$raw
      .getAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/DeleteAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  deleteAgent(
    requestData: thisProto.DeleteAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .deleteAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/DeleteAllAgents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  deleteAllAgents(
    requestData: googleProtobuf009.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .deleteAllAgents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListAgents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAgentsResponse>
   */
  listAgents(
    requestData: thisProto.ListAgentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAgentsResponse> {
    return this.$raw
      .listAgents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListAgentsOfUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAgentsOfUserResponse>
   */
  listAgentsOfUser(
    requestData: thisProto.ListAgentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAgentsOfUserResponse> {
    return this.$raw
      .listAgentsOfUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListAllAgents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAgentsResponse>
   */
  listAllAgents(
    requestData: thisProto.ListAgentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAgentsResponse> {
    return this.$raw
      .listAllAgents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/AddUserToProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  addUserToProject(
    requestData: thisProto.AddUserToProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .addUserToProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/RemoveUserFromProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  removeUserFromProject(
    requestData: thisProto.RemoveUserFromProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .removeUserFromProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListUsersInProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUsersInProjectResponse>
   */
  listUsersInProject(
    requestData: thisProto.ListUsersInProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUsersInProjectResponse> {
    return this.$raw
      .listUsersInProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetPlatformInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetPlatformInfoResponse>
   */
  getPlatformInfo(
    requestData: googleProtobuf009.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetPlatformInfoResponse> {
    return this.$raw
      .getPlatformInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListProjectPermissions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListProjectPermissionsResponse>
   */
  listProjectPermissions(
    requestData: thisProto.ListProjectPermissionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListProjectPermissionsResponse> {
    return this.$raw
      .listProjectPermissions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/TrainAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  trainAgent(
    requestData: thisProto.TrainAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .trainAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/BuildCache
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  buildCache(
    requestData: thisProto.BuildCacheRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .buildCache(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ExportAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  exportAgent(
    requestData: thisProto.ExportAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .exportAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ExportBenchmarkAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  exportBenchmarkAgent(
    requestData: thisProto.ExportBenchmarkAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .exportBenchmarkAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ImportAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  importAgent(
    requestData: thisProto.ImportAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .importAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/MigrateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  migrateAgent(
    requestData: thisProto.MigrateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .migrateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/OptimizeRankingMatch
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  optimizeRankingMatch(
    requestData: thisProto.OptimizeRankingMatchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .optimizeRankingMatch(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/RestoreAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  restoreAgent(
    requestData: thisProto.RestoreAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .restoreAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetAgentStatistics
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAgentStatisticsResponse>
   */
  getAgentStatistics(
    requestData: thisProto.GetAgentStatisticsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAgentStatisticsResponse> {
    return this.$raw
      .getAgentStatistics(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetSessionsStatistics
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetSessionsStatisticsResponse>
   */
  getSessionsStatistics(
    requestData: thisProto.GetSessionsStatisticsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetSessionsStatisticsResponse> {
    return this.$raw
      .getSessionsStatistics(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetSessionsStatisticsTimeSeries
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetSessionsStatisticsTimeSeriesResponse>
   */
  getSessionsStatisticsTimeSeries(
    requestData: thisProto.GetSessionsStatisticsTimeSeriesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetSessionsStatisticsTimeSeriesResponse> {
    return this.$raw
      .getSessionsStatisticsTimeSeries(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/SetAgentStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Agent>
   */
  setAgentStatus(
    requestData: thisProto.SetAgentStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Agent> {
    return this.$raw
      .setAgentStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/SetResources
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  setResources(
    requestData: thisProto.SetResourcesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .setResources(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/DeleteResources
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  deleteResources(
    requestData: thisProto.DeleteResourcesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .deleteResources(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ExportResources
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ExportResourcesResponse>
   */
  exportResources(
    requestData: thisProto.ExportResourcesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ExportResourcesResponse> {
    return this.$raw
      .exportResources(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetModelStatuses
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetModelStatusesResponse>
   */
  getModelStatuses(
    requestData: thisProto.GetModelStatusesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetModelStatusesResponse> {
    return this.$raw
      .getModelStatuses(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetPlatformMapping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PlatformMapping>
   */
  getPlatformMapping(
    requestData: thisProto.GetPlatformMappingRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PlatformMapping> {
    return this.$raw
      .getPlatformMapping(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/SetPlatformMapping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PlatformMapping>
   */
  setPlatformMapping(
    requestData: thisProto.PlatformMapping,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PlatformMapping> {
    return this.$raw
      .setPlatformMapping(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntityType
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseEntityType>
   */
  getFullTextSearchEntityType(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseEntityType> {
    return this.$raw
      .getFullTextSearchEntityType(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntity
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseEntity>
   */
  getFullTextSearchEntity(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseEntity> {
    return this.$raw
      .getFullTextSearchEntity(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseEntitySynonym>
   */
  getFullTextSearchEntitySynonym(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseEntitySynonym> {
    return this.$raw
      .getFullTextSearchEntitySynonym(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntent>
   */
  getFullTextSearchIntent(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntent> {
    return this.$raw
      .getFullTextSearchIntent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentContextIn>
   */
  getFullTextSearchIntentContextIn(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentContextIn> {
    return this.$raw
      .getFullTextSearchIntentContextIn(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentContextOut>
   */
  getFullTextSearchIntentContextOut(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentContextOut> {
    return this.$raw
      .getFullTextSearchIntentContextOut(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentUsersays>
   */
  getFullTextSearchIntentUsersays(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentUsersays> {
    return this.$raw
      .getFullTextSearchIntentUsersays(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentTags
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentTags>
   */
  getFullTextSearchIntentTags(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentTags> {
    return this.$raw
      .getFullTextSearchIntentTags(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentResponse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentResponse>
   */
  getFullTextSearchIntentResponse(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentResponse> {
    return this.$raw
      .getFullTextSearchIntentResponse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentParameters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullTextSearchResponseIntentParameters>
   */
  getFullTextSearchIntentParameters(
    requestData: thisProto.FullTextSearchRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullTextSearchResponseIntentParameters> {
    return this.$raw
      .getFullTextSearchIntentParameters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ReindexAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  reindexAgent(
    requestData: thisProto.ReindexAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .reindexAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/CreateProjectTechnicalUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateProjectTechnicalUserResponse>
   */
  createProjectTechnicalUser(
    requestData: thisProto.CreateProjectTechnicalUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateProjectTechnicalUserResponse> {
    return this.$raw
      .createProjectTechnicalUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/ListProjectTechnicalUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListProjectTechnicalUsersResponse>
   */
  listProjectTechnicalUsers(
    requestData: thisProto.ListProjectTechnicalUsersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListProjectTechnicalUsersResponse> {
    return this.$raw
      .listProjectTechnicalUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/DeleteProjectTechnicalUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf009.Empty>
   */
  deleteProjectTechnicalUser(
    requestData: thisProto.DeleteProjectTechnicalUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf009.Empty> {
    return this.$raw
      .deleteProjectTechnicalUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Agents/RotateProjectTechnicalUserPassword
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RotateProjectTechnicalUserPasswordResponse>
   */
  rotateProjectTechnicalUserPassword(
    requestData: thisProto.RotateProjectTechnicalUserPasswordRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RotateProjectTechnicalUserPasswordResponse> {
    return this.$raw
      .rotateProjectTechnicalUserPassword(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
