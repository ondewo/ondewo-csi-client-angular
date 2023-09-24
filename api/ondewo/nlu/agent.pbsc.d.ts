import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './agent.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.Agents
 */
export declare class AgentsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.Agents/CreateAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Agent>>
         */
        createAgent: (requestData: thisProto.CreateAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Agent>>;
        /**
         * Unary call: /ondewo.nlu.Agents/UpdateAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Agent>>
         */
        updateAgent: (requestData: thisProto.UpdateAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Agent>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Agent>>
         */
        getAgent: (requestData: thisProto.GetAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Agent>>;
        /**
         * Unary call: /ondewo.nlu.Agents/DeleteAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        deleteAgent: (requestData: thisProto.DeleteAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/DeleteAllAgents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        deleteAllAgents: (requestData: googleProtobuf006.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ListAgents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListAgentsResponse>>
         */
        listAgents: (requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListAgentsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ListAgentsOfUser
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>
         */
        listAgentsOfUser: (requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ListAllAgents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListAgentsResponse>>
         */
        listAllAgents: (requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListAgentsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/AddUserToProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        addUserToProject: (requestData: thisProto.AddUserToProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/RemoveUserFromProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        removeUserFromProject: (requestData: thisProto.RemoveUserFromProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ListUsersInProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>
         */
        listUsersInProject: (requestData: thisProto.ListUsersInProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetPlatformInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>
         */
        getPlatformInfo: (requestData: googleProtobuf006.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ListProjectPermissions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>
         */
        listProjectPermissions: (requestData: thisProto.ListProjectPermissionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/TrainAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        trainAgent: (requestData: thisProto.TrainAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/BuildCache
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        buildCache: (requestData: thisProto.BuildCacheRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ExportAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        exportAgent: (requestData: thisProto.ExportAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ExportBenchmarkAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        exportBenchmarkAgent: (requestData: thisProto.ExportBenchmarkAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ImportAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        importAgent: (requestData: thisProto.ImportAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/OptimizeRankingMatch
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        optimizeRankingMatch: (requestData: thisProto.OptimizeRankingMatchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/RestoreAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        restoreAgent: (requestData: thisProto.RestoreAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetAgentStatistics
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>
         */
        getAgentStatistics: (requestData: thisProto.GetAgentStatisticsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetSessionsStatistics
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetSessionsStatisticsResponse>>
         */
        getSessionsStatistics: (requestData: thisProto.GetSessionsStatisticsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetSessionsStatisticsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/SetAgentStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Agent>>
         */
        setAgentStatus: (requestData: thisProto.SetAgentStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Agent>>;
        /**
         * Unary call: /ondewo.nlu.Agents/SetResources
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        setResources: (requestData: thisProto.SetResourcesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/DeleteResources
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf006.Empty>>
         */
        deleteResources: (requestData: thisProto.DeleteResourcesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ExportResources
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ExportResourcesResponse>>
         */
        exportResources: (requestData: thisProto.ExportResourcesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ExportResourcesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetModelStatuses
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetModelStatusesResponse>>
         */
        getModelStatuses: (requestData: thisProto.GetModelStatusesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetModelStatusesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetPlatformMapping
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PlatformMapping>>
         */
        getPlatformMapping: (requestData: thisProto.GetPlatformMappingRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PlatformMapping>>;
        /**
         * Unary call: /ondewo.nlu.Agents/SetPlatformMapping
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PlatformMapping>>
         */
        setPlatformMapping: (requestData: thisProto.PlatformMapping, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PlatformMapping>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntityType>>
         */
        getFullTextSearchEntityType: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseEntityType>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntity
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntity>>
         */
        getFullTextSearchEntity: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseEntity>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchEntitySynonym
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseEntitySynonym>>
         */
        getFullTextSearchEntitySynonym: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseEntitySynonym>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntent>>
         */
        getFullTextSearchIntent: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntent>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentContextIn
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextIn>>
         */
        getFullTextSearchIntentContextIn: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextIn>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentContextOut
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextOut>>
         */
        getFullTextSearchIntentContextOut: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentContextOut>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentUsersays
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentUsersays>>
         */
        getFullTextSearchIntentUsersays: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentUsersays>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentTags
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentTags>>
         */
        getFullTextSearchIntentTags: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentTags>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentResponse
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentResponse>>
         */
        getFullTextSearchIntentResponse: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentResponse>>;
        /**
         * Unary call: /ondewo.nlu.Agents/GetFullTextSearchIntentParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentParameters>>
         */
        getFullTextSearchIntentParameters: (requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FullTextSearchResponseIntentParameters>>;
        /**
         * Unary call: /ondewo.nlu.Agents/ReindexAgent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu005.Operation>>
         */
        reindexAgent: (requestData: thisProto.ReindexAgentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu005.Operation>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.Agents/CreateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Agent>
     */
    createAgent(requestData: thisProto.CreateAgentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Agent>;
    /**
     * Unary call @/ondewo.nlu.Agents/UpdateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Agent>
     */
    updateAgent(requestData: thisProto.UpdateAgentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Agent>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Agent>
     */
    getAgent(requestData: thisProto.GetAgentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Agent>;
    /**
     * Unary call @/ondewo.nlu.Agents/DeleteAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    deleteAgent(requestData: thisProto.DeleteAgentRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/DeleteAllAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    deleteAllAgents(requestData: googleProtobuf006.Empty, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/ListAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListAgentsResponse>
     */
    listAgents(requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListAgentsResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/ListAgentsOfUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListAgentsOfUserResponse>
     */
    listAgentsOfUser(requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListAgentsOfUserResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/ListAllAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListAgentsResponse>
     */
    listAllAgents(requestData: thisProto.ListAgentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListAgentsResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/AddUserToProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    addUserToProject(requestData: thisProto.AddUserToProjectRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/RemoveUserFromProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    removeUserFromProject(requestData: thisProto.RemoveUserFromProjectRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/ListUsersInProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListUsersInProjectResponse>
     */
    listUsersInProject(requestData: thisProto.ListUsersInProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListUsersInProjectResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetPlatformInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetPlatformInfoResponse>
     */
    getPlatformInfo(requestData: googleProtobuf006.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.GetPlatformInfoResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/ListProjectPermissions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListProjectPermissionsResponse>
     */
    listProjectPermissions(requestData: thisProto.ListProjectPermissionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListProjectPermissionsResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/TrainAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    trainAgent(requestData: thisProto.TrainAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/BuildCache
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    buildCache(requestData: thisProto.BuildCacheRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/ExportAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    exportAgent(requestData: thisProto.ExportAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/ExportBenchmarkAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    exportBenchmarkAgent(requestData: thisProto.ExportBenchmarkAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/ImportAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    importAgent(requestData: thisProto.ImportAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/OptimizeRankingMatch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    optimizeRankingMatch(requestData: thisProto.OptimizeRankingMatchRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/RestoreAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    restoreAgent(requestData: thisProto.RestoreAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetAgentStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAgentStatisticsResponse>
     */
    getAgentStatistics(requestData: thisProto.GetAgentStatisticsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAgentStatisticsResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetSessionsStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSessionsStatisticsResponse>
     */
    getSessionsStatistics(requestData: thisProto.GetSessionsStatisticsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetSessionsStatisticsResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/SetAgentStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Agent>
     */
    setAgentStatus(requestData: thisProto.SetAgentStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Agent>;
    /**
     * Unary call @/ondewo.nlu.Agents/SetResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    setResources(requestData: thisProto.SetResourcesRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/DeleteResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf006.Empty>
     */
    deleteResources(requestData: thisProto.DeleteResourcesRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
    /**
     * Unary call @/ondewo.nlu.Agents/ExportResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ExportResourcesResponse>
     */
    exportResources(requestData: thisProto.ExportResourcesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ExportResourcesResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetModelStatuses
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetModelStatusesResponse>
     */
    getModelStatuses(requestData: thisProto.GetModelStatusesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetModelStatusesResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetPlatformMapping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PlatformMapping>
     */
    getPlatformMapping(requestData: thisProto.GetPlatformMappingRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.PlatformMapping>;
    /**
     * Unary call @/ondewo.nlu.Agents/SetPlatformMapping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PlatformMapping>
     */
    setPlatformMapping(requestData: thisProto.PlatformMapping, requestMetadata?: GrpcMetadata): Observable<thisProto.PlatformMapping>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseEntityType>
     */
    getFullTextSearchEntityType(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseEntityType>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseEntity>
     */
    getFullTextSearchEntity(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseEntity>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseEntitySynonym>
     */
    getFullTextSearchEntitySynonym(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseEntitySynonym>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntent>
     */
    getFullTextSearchIntent(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntent>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentContextIn>
     */
    getFullTextSearchIntentContextIn(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentContextIn>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentContextOut>
     */
    getFullTextSearchIntentContextOut(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentContextOut>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentUsersays>
     */
    getFullTextSearchIntentUsersays(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentUsersays>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentTags
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentTags>
     */
    getFullTextSearchIntentTags(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentTags>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentResponse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentResponse>
     */
    getFullTextSearchIntentResponse(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentResponse>;
    /**
     * Unary call @/ondewo.nlu.Agents/GetFullTextSearchIntentParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FullTextSearchResponseIntentParameters>
     */
    getFullTextSearchIntentParameters(requestData: thisProto.FullTextSearchRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.FullTextSearchResponseIntentParameters>;
    /**
     * Unary call @/ondewo.nlu.Agents/ReindexAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu005.Operation>
     */
    reindexAgent(requestData: thisProto.ReindexAgentRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu005.Operation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentsClient>;
}
