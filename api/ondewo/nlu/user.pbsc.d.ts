import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './user.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.Users
 */
export declare class UsersClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.Users/CreateUser
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.User>>
         */
        createUser: (requestData: thisProto.CreateUserRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.User>>;
        /**
         * Unary call: /ondewo.nlu.Users/GetUser
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.User>>
         */
        getUser: (requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.User>>;
        /**
         * Unary call: /ondewo.nlu.Users/GetUserInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UserInfo>>
         */
        getUserInfo: (requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UserInfo>>;
        /**
         * Unary call: /ondewo.nlu.Users/DeleteUser
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        deleteUser: (requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Users/UpdateUser
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.User>>
         */
        updateUser: (requestData: thisProto.UpdateUserRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.User>>;
        /**
         * Unary call: /ondewo.nlu.Users/ListUsers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListUsersResponse>>
         */
        listUsers: (requestData: thisProto.ListUsersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListUsersResponse>>;
        /**
         * Unary call: /ondewo.nlu.Users/ListUserInfos
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListUserInfosResponse>>
         */
        listUserInfos: (requestData: thisProto.ListUsersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListUserInfosResponse>>;
        /**
         * Unary call: /ondewo.nlu.Users/CreateServerRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ServerRole>>
         */
        createServerRole: (requestData: thisProto.CreateServerRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ServerRole>>;
        /**
         * Unary call: /ondewo.nlu.Users/GetServerRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ServerRole>>
         */
        getServerRole: (requestData: thisProto.GetServerRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ServerRole>>;
        /**
         * Unary call: /ondewo.nlu.Users/DeleteServerRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        deleteServerRole: (requestData: thisProto.DeleteServerRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
        /**
         * Unary call: /ondewo.nlu.Users/UpdateServerRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ServerRole>>
         */
        updateServerRole: (requestData: thisProto.UpdateServerRoleRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ServerRole>>;
        /**
         * Unary call: /ondewo.nlu.Users/ListServerRoles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListServerRolesResponse>>
         */
        listServerRoles: (requestData: thisProto.ListServerRolesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListServerRolesResponse>>;
        /**
         * Unary call: /ondewo.nlu.Users/ListServerPermissions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>
         */
        listServerPermissions: (requestData: thisProto.ListServerPermissionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>;
        /**
         * Unary call: /ondewo.nlu.Users/Login
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.LoginResponse>>
         */
        login: (requestData: thisProto.LoginRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.LoginResponse>>;
        /**
         * Unary call: /ondewo.nlu.Users/CheckLogin
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        checkLogin: (requestData: googleProtobuf004.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.Users/CreateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.User>
     */
    createUser(requestData: thisProto.CreateUserRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.User>;
    /**
     * Unary call @/ondewo.nlu.Users/GetUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.User>
     */
    getUser(requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.User>;
    /**
     * Unary call @/ondewo.nlu.Users/GetUserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UserInfo>
     */
    getUserInfo(requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UserInfo>;
    /**
     * Unary call @/ondewo.nlu.Users/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteUser(requestData: thisProto.GetUserRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary call @/ondewo.nlu.Users/UpdateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.User>
     */
    updateUser(requestData: thisProto.UpdateUserRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.User>;
    /**
     * Unary call @/ondewo.nlu.Users/ListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListUsersResponse>
     */
    listUsers(requestData: thisProto.ListUsersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListUsersResponse>;
    /**
     * Unary call @/ondewo.nlu.Users/ListUserInfos
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListUserInfosResponse>
     */
    listUserInfos(requestData: thisProto.ListUsersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListUserInfosResponse>;
    /**
     * Unary call @/ondewo.nlu.Users/CreateServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ServerRole>
     */
    createServerRole(requestData: thisProto.CreateServerRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ServerRole>;
    /**
     * Unary call @/ondewo.nlu.Users/GetServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ServerRole>
     */
    getServerRole(requestData: thisProto.GetServerRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ServerRole>;
    /**
     * Unary call @/ondewo.nlu.Users/DeleteServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteServerRole(requestData: thisProto.DeleteServerRoleRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary call @/ondewo.nlu.Users/UpdateServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ServerRole>
     */
    updateServerRole(requestData: thisProto.UpdateServerRoleRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ServerRole>;
    /**
     * Unary call @/ondewo.nlu.Users/ListServerRoles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListServerRolesResponse>
     */
    listServerRoles(requestData: thisProto.ListServerRolesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListServerRolesResponse>;
    /**
     * Unary call @/ondewo.nlu.Users/ListServerPermissions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListServerPermissionsResponse>
     */
    listServerPermissions(requestData: thisProto.ListServerPermissionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListServerPermissionsResponse>;
    /**
     * Unary call @/ondewo.nlu.Users/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LoginResponse>
     */
    login(requestData: thisProto.LoginRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.LoginResponse>;
    /**
     * Unary call @/ondewo.nlu.Users/CheckLogin
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    checkLogin(requestData: googleProtobuf004.Empty, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersClient>;
}
