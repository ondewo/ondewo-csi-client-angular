import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './ccai-project.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.CcaiProjects
 */
export declare class CcaiProjectsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.CcaiProjects/GetCcaiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CcaiProject>>
         */
        getCcaiProject: (requestData: thisProto.GetCcaiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CcaiProject>>;
        /**
         * Unary call: /ondewo.nlu.CcaiProjects/CreateCcaiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateCcaiProjectResponse>>
         */
        createCcaiProject: (requestData: thisProto.CreateCcaiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateCcaiProjectResponse>>;
        /**
         * Unary call: /ondewo.nlu.CcaiProjects/DeleteCcaiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteCcaiProjectResponse>>
         */
        deleteCcaiProject: (requestData: thisProto.DeleteCcaiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteCcaiProjectResponse>>;
        /**
         * Unary call: /ondewo.nlu.CcaiProjects/ListCcaiProjects
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListCcaiProjectsResponse>>
         */
        listCcaiProjects: (requestData: thisProto.ListCcaiProjectsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListCcaiProjectsResponse>>;
        /**
         * Unary call: /ondewo.nlu.CcaiProjects/UpdateCcaiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateCcaiProjectResponse>>
         */
        updateCcaiProject: (requestData: thisProto.UpdateCcaiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateCcaiProjectResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.CcaiProjects/GetCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CcaiProject>
     */
    getCcaiProject(requestData: thisProto.GetCcaiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CcaiProject>;
    /**
     * Unary call @/ondewo.nlu.CcaiProjects/CreateCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateCcaiProjectResponse>
     */
    createCcaiProject(requestData: thisProto.CreateCcaiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateCcaiProjectResponse>;
    /**
     * Unary call @/ondewo.nlu.CcaiProjects/DeleteCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteCcaiProjectResponse>
     */
    deleteCcaiProject(requestData: thisProto.DeleteCcaiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteCcaiProjectResponse>;
    /**
     * Unary call @/ondewo.nlu.CcaiProjects/ListCcaiProjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListCcaiProjectsResponse>
     */
    listCcaiProjects(requestData: thisProto.ListCcaiProjectsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListCcaiProjectsResponse>;
    /**
     * Unary call @/ondewo.nlu.CcaiProjects/UpdateCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateCcaiProjectResponse>
     */
    updateCcaiProject(requestData: thisProto.UpdateCcaiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateCcaiProjectResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CcaiProjectsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CcaiProjectsClient>;
}
