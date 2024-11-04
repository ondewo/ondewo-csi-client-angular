import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './project-role.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.ProjectRoles
 */
export declare class ProjectRolesClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.ProjectRoles/CreateProjectRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
         */
        createProjectRole: (requestData: thisProto.CreateProjectRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ProjectRole>>;
        /**
         * Unary call: /ondewo.nlu.ProjectRoles/GetProjectRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
         */
        getProjectRole: (requestData: thisProto.GetProjectRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ProjectRole>>;
        /**
         * Unary call: /ondewo.nlu.ProjectRoles/DeleteProjectRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        deleteProjectRole: (requestData: thisProto.DeleteProjectRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
        /**
         * Unary call: /ondewo.nlu.ProjectRoles/UpdateProjectRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
         */
        updateProjectRole: (requestData: thisProto.UpdateProjectRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ProjectRole>>;
        /**
         * Unary call: /ondewo.nlu.ProjectRoles/ListProjectRoles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
         */
        listProjectRoles: (requestData: thisProto.ListProjectRolesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.ProjectRoles/CreateProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ProjectRole>
     */
    createProjectRole(requestData: thisProto.CreateProjectRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary call @/ondewo.nlu.ProjectRoles/GetProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ProjectRole>
     */
    getProjectRole(requestData: thisProto.GetProjectRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary call @/ondewo.nlu.ProjectRoles/DeleteProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteProjectRole(requestData: thisProto.DeleteProjectRoleRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary call @/ondewo.nlu.ProjectRoles/UpdateProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ProjectRole>
     */
    updateProjectRole(requestData: thisProto.UpdateProjectRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary call @/ondewo.nlu.ProjectRoles/ListProjectRoles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListProjectRolesResponse>
     */
    listProjectRoles(requestData: thisProto.ListProjectRolesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListProjectRolesResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProjectRolesClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProjectRolesClient>;
}
