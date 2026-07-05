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
import * as thisProto from './user.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/project-role.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
import { GRPC_USERS_CLIENT_SETTINGS } from './user.pbconf';
/**
 * Service client implementation for ondewo.nlu.Users
 */
@Injectable({ providedIn: 'any' })
export class UsersClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Users/CreateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    createUser: (
      requestData: thisProto.CreateUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/CreateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/GetUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    getUser: (
      requestData: thisProto.GetUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/GetUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/GetUserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInfo>>
     */
    getUserInfo: (
      requestData: thisProto.GetUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInfo>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/GetUserInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserRequest,
        responseClass: thisProto.UserInfo
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteUser: (
      requestData: thisProto.GetUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/UpdateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    updateUser: (
      requestData: thisProto.UpdateUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/UpdateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/ListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUsersResponse>>
     */
    listUsers: (
      requestData: thisProto.ListUsersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUsersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/ListUsers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUsersRequest,
        responseClass: thisProto.ListUsersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/ListUserInfos
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUserInfosResponse>>
     */
    listUserInfos: (
      requestData: thisProto.ListUsersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUserInfosResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/ListUserInfos',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUsersRequest,
        responseClass: thisProto.ListUserInfosResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/CreateServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ServerRole>>
     */
    createServerRole: (
      requestData: thisProto.CreateServerRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ServerRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/CreateServerRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateServerRoleRequest,
        responseClass: thisProto.ServerRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/GetServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ServerRole>>
     */
    getServerRole: (
      requestData: thisProto.GetServerRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ServerRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/GetServerRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetServerRoleRequest,
        responseClass: thisProto.ServerRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/DeleteServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteServerRole: (
      requestData: thisProto.DeleteServerRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/DeleteServerRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteServerRoleRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/UpdateServerRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ServerRole>>
     */
    updateServerRole: (
      requestData: thisProto.UpdateServerRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ServerRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/UpdateServerRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateServerRoleRequest,
        responseClass: thisProto.ServerRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/ListServerRoles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListServerRolesResponse>>
     */
    listServerRoles: (
      requestData: thisProto.ListServerRolesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListServerRolesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/ListServerRoles',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListServerRolesRequest,
        responseClass: thisProto.ListServerRolesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/ListServerPermissions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>
     */
    listServerPermissions: (
      requestData: thisProto.ListServerPermissionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/ListServerPermissions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListServerPermissionsRequest,
        responseClass: thisProto.ListServerPermissionsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login: (
      requestData: thisProto.LoginRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LoginResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/Login',
        requestData,
        requestMetadata,
        requestClass: thisProto.LoginRequest,
        responseClass: thisProto.LoginResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/CheckLogin
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    checkLogin: (
      requestData: googleProtobuf003.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/CheckLogin',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf003.Empty,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/ListNotifications
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>>
     */
    listNotifications: (
      requestData: ondewoNlu007.ListNotificationsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/ListNotifications',
        requestData,
        requestMetadata,
        requestClass: ondewoNlu007.ListNotificationsRequest,
        responseClass: ondewoNlu007.ListNotificationsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/SetNotificationsFlaggedStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>>
     */
    setNotificationsFlaggedStatus: (
      requestData: ondewoNlu007.SetNotificationsFlaggedStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/SetNotificationsFlaggedStatus',
        requestData,
        requestMetadata,
        requestClass: ondewoNlu007.SetNotificationsFlaggedStatusRequest,
        responseClass: ondewoNlu007.ListNotificationsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/SetNotificationsReadStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>>
     */
    setNotificationsReadStatus: (
      requestData: ondewoNlu007.SetNotificationsReadStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu007.ListNotificationsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/SetNotificationsReadStatus',
        requestData,
        requestMetadata,
        requestClass: ondewoNlu007.SetNotificationsReadStatusRequest,
        responseClass: ondewoNlu007.ListNotificationsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/GetUserPreferences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetUserPreferencesResponse>>
     */
    getUserPreferences: (
      requestData: thisProto.GetUserPreferencesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetUserPreferencesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/GetUserPreferences',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserPreferencesRequest,
        responseClass: thisProto.GetUserPreferencesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/SetUserPreferences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SetUserPreferencesResponse>>
     */
    setUserPreferences: (
      requestData: thisProto.SetUserPreferencesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SetUserPreferencesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/SetUserPreferences',
        requestData,
        requestMetadata,
        requestClass: thisProto.SetUserPreferencesRequest,
        responseClass: thisProto.SetUserPreferencesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/DeleteUserPreferences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteUserPreferencesResponse>>
     */
    deleteUserPreferences: (
      requestData: thisProto.DeleteUserPreferencesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteUserPreferencesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/DeleteUserPreferences',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteUserPreferencesRequest,
        responseClass: thisProto.DeleteUserPreferencesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Users/DeleteAllUserPreferences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteUserPreferencesResponse>>
     */
    deleteAllUserPreferences: (
      requestData: thisProto.DeleteAllUserPreferencesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteUserPreferencesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Users/DeleteAllUserPreferences',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteAllUserPreferencesRequest,
        responseClass: thisProto.DeleteUserPreferencesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Users', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Users/CreateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  createUser(
    requestData: thisProto.CreateUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .createUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/GetUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  getUser(
    requestData: thisProto.GetUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .getUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/GetUserInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInfo>
   */
  getUserInfo(
    requestData: thisProto.GetUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInfo> {
    return this.$raw
      .getUserInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/DeleteUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteUser(
    requestData: thisProto.GetUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/UpdateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  updateUser(
    requestData: thisProto.UpdateUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .updateUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/ListUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUsersResponse>
   */
  listUsers(
    requestData: thisProto.ListUsersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUsersResponse> {
    return this.$raw
      .listUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/ListUserInfos
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUserInfosResponse>
   */
  listUserInfos(
    requestData: thisProto.ListUsersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUserInfosResponse> {
    return this.$raw
      .listUserInfos(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/CreateServerRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ServerRole>
   */
  createServerRole(
    requestData: thisProto.CreateServerRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ServerRole> {
    return this.$raw
      .createServerRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/GetServerRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ServerRole>
   */
  getServerRole(
    requestData: thisProto.GetServerRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ServerRole> {
    return this.$raw
      .getServerRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/DeleteServerRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteServerRole(
    requestData: thisProto.DeleteServerRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteServerRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/UpdateServerRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ServerRole>
   */
  updateServerRole(
    requestData: thisProto.UpdateServerRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ServerRole> {
    return this.$raw
      .updateServerRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/ListServerRoles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListServerRolesResponse>
   */
  listServerRoles(
    requestData: thisProto.ListServerRolesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListServerRolesResponse> {
    return this.$raw
      .listServerRoles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/ListServerPermissions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListServerPermissionsResponse>
   */
  listServerPermissions(
    requestData: thisProto.ListServerPermissionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListServerPermissionsResponse> {
    return this.$raw
      .listServerPermissions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/Login
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LoginResponse>
   */
  login(
    requestData: thisProto.LoginRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LoginResponse> {
    return this.$raw
      .login(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/CheckLogin
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  checkLogin(
    requestData: googleProtobuf003.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .checkLogin(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/ListNotifications
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu007.ListNotificationsResponse>
   */
  listNotifications(
    requestData: ondewoNlu007.ListNotificationsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu007.ListNotificationsResponse> {
    return this.$raw
      .listNotifications(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/SetNotificationsFlaggedStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu007.ListNotificationsResponse>
   */
  setNotificationsFlaggedStatus(
    requestData: ondewoNlu007.SetNotificationsFlaggedStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu007.ListNotificationsResponse> {
    return this.$raw
      .setNotificationsFlaggedStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/SetNotificationsReadStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu007.ListNotificationsResponse>
   */
  setNotificationsReadStatus(
    requestData: ondewoNlu007.SetNotificationsReadStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu007.ListNotificationsResponse> {
    return this.$raw
      .setNotificationsReadStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/GetUserPreferences
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetUserPreferencesResponse>
   */
  getUserPreferences(
    requestData: thisProto.GetUserPreferencesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetUserPreferencesResponse> {
    return this.$raw
      .getUserPreferences(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/SetUserPreferences
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SetUserPreferencesResponse>
   */
  setUserPreferences(
    requestData: thisProto.SetUserPreferencesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SetUserPreferencesResponse> {
    return this.$raw
      .setUserPreferences(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/DeleteUserPreferences
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteUserPreferencesResponse>
   */
  deleteUserPreferences(
    requestData: thisProto.DeleteUserPreferencesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteUserPreferencesResponse> {
    return this.$raw
      .deleteUserPreferences(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Users/DeleteAllUserPreferences
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteUserPreferencesResponse>
   */
  deleteAllUserPreferences(
    requestData: thisProto.DeleteAllUserPreferencesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteUserPreferencesResponse> {
    return this.$raw
      .deleteAllUserPreferences(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
