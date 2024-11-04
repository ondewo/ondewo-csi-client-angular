import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './project-statistics.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.ProjectStatistics
 */
export declare class ProjectStatisticsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetIntentCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getIntentCount: (requestData: thisProto.GetIntentCountRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetEntityTypeCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getEntityTypeCount: (requestData: thisProto.GetEntityTypeCountRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetUserCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getUserCount: (requestData: thisProto.GetProjectStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetSessionCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getSessionCount: (requestData: thisProto.GetProjectStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getTrainingPhraseCount: (requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetResponseCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getResponseCount: (requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetEntityValueCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getEntityValueCount: (requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ProjectStatistics/GetEntitySynonymCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getEntitySynonymCount: (requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetIntentCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getIntentCount(requestData: thisProto.GetIntentCountRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetEntityTypeCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getEntityTypeCount(requestData: thisProto.GetEntityTypeCountRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetUserCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getUserCount(requestData: thisProto.GetProjectStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetSessionCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getSessionCount(requestData: thisProto.GetProjectStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getTrainingPhraseCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetResponseCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getResponseCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetEntityValueCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getEntityValueCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getEntitySynonymCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProjectStatisticsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProjectStatisticsClient>;
}
