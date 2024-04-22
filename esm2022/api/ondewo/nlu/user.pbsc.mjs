/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './user.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
import { GRPC_USERS_CLIENT_SETTINGS } from './user.pbconf';
import * as i0 from '@angular/core';
import * as i1 from '@ngx-grpc/core';
/**
 * Service client implementation for ondewo.nlu.Users
 */
export class UsersClient {
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		/**
		 * Raw RPC implementation for each service client method.
		 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
		 * Attention: these methods do not throw errors when non-zero status codes are received.
		 */
		this.$raw = {
			/**
			 * Unary call: /ondewo.nlu.Users/CreateUser
			 *
			 * @param requestMessage Request message
			 * @param requestMetadata Request metadata
			 * @returns Observable<GrpcEvent<thisProto.User>>
			 */
			createUser: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			getUser: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			getUserInfo: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			deleteUser: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			updateUser: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			listUsers: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			listUserInfos: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			createServerRole: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			getServerRole: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			deleteServerRole: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			updateServerRole: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			listServerRoles: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			listServerPermissions: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			login: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			checkLogin: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			listNotifications: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			setNotificationsFlaggedStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			setNotificationsReadStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			getUserPreferences: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			setUserPreferences: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			deleteUserPreferences: (requestData, requestMetadata = new GrpcMetadata()) => {
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
			deleteAllUserPreferences: (requestData, requestMetadata = new GrpcMetadata()) => {
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
		this.client = clientFactory.createClient('ondewo.nlu.Users', settings);
	}
	/**
	 * Unary call @/ondewo.nlu.Users/CreateUser
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.User>
	 */
	createUser(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createUser(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/GetUser
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.User>
	 */
	getUser(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getUser(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/GetUserInfo
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.UserInfo>
	 */
	getUserInfo(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getUserInfo(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/DeleteUser
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteUser(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteUser(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/UpdateUser
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.User>
	 */
	updateUser(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateUser(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/ListUsers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListUsersResponse>
	 */
	listUsers(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listUsers(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/ListUserInfos
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListUserInfosResponse>
	 */
	listUserInfos(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listUserInfos(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/CreateServerRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ServerRole>
	 */
	createServerRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createServerRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/GetServerRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ServerRole>
	 */
	getServerRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getServerRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/DeleteServerRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteServerRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteServerRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/UpdateServerRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ServerRole>
	 */
	updateServerRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateServerRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/ListServerRoles
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListServerRolesResponse>
	 */
	listServerRoles(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listServerRoles(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/ListServerPermissions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListServerPermissionsResponse>
	 */
	listServerPermissions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listServerPermissions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/Login
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.LoginResponse>
	 */
	login(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.login(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/CheckLogin
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	checkLogin(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.checkLogin(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/ListNotifications
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu007.ListNotificationsResponse>
	 */
	listNotifications(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listNotifications(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/SetNotificationsFlaggedStatus
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu007.ListNotificationsResponse>
	 */
	setNotificationsFlaggedStatus(requestData, requestMetadata = new GrpcMetadata()) {
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
	setNotificationsReadStatus(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.setNotificationsReadStatus(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/GetUserPreferences
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetUserPreferencesResponse>
	 */
	getUserPreferences(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getUserPreferences(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/SetUserPreferences
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SetUserPreferencesResponse>
	 */
	setUserPreferences(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.setUserPreferences(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/DeleteUserPreferences
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.DeleteUserPreferencesResponse>
	 */
	deleteUserPreferences(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteUserPreferences(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Users/DeleteAllUserPreferences
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.DeleteUserPreferencesResponse>
	 */
	deleteAllUserPreferences(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteAllUserPreferences(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: '12.0.0',
			version: '16.2.12',
			ngImport: i0,
			type: UsersClient,
			deps: [
				{ token: GRPC_USERS_CLIENT_SETTINGS, optional: true },
				{ token: GRPC_CLIENT_FACTORY },
				{ token: i1.GrpcHandler }
			],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: '12.0.0',
			version: '16.2.12',
			ngImport: i0,
			type: UsersClient,
			providedIn: 'any'
		});
	}
}
i0.ɵɵngDeclareClassMetadata({
	minVersion: '12.0.0',
	version: '16.2.12',
	ngImport: i0,
	type: UsersClient,
	decorators: [
		{
			type: Injectable,
			args: [{ providedIn: 'any' }]
		}
	],
	ctorParameters: function () {
		return [
			{
				type: undefined,
				decorators: [
					{
						type: Optional
					},
					{
						type: Inject,
						args: [GRPC_USERS_CLIENT_SETTINGS]
					}
				]
			},
			{
				type: undefined,
				decorators: [
					{
						type: Inject,
						args: [GRPC_CLIENT_FACTORY]
					}
				]
			},
			{ type: i1.GrpcHandler }
		];
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvdXNlci5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBSXZDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUloRSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQzNEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUF5ZHRCLFlBQ2tELFFBQWEsRUFDaEMsYUFBcUMsRUFDMUQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQXpkOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILFVBQVUsRUFBRSxDQUNWLFdBQXdDLEVBQ3hDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNHLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsOEJBQThCO29CQUNwQyxXQUFXO29C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Qy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrQkFBa0IsQ0FDaEIsV0FBZ0QsRUFDaEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ2hELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFCQUFxQixDQUNuQixXQUFtRCxFQUNuRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDbkQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsd0JBQXdCLENBQ3RCLFdBQXNELEVBQ3RELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2Isd0JBQXdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUN0RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7K0dBL3pCVSxXQUFXLGtCQTBkQSwwQkFBMEIsNkJBQ3RDLG1CQUFtQjttSEEzZGxCLFdBQVcsY0FERSxLQUFLOzs0RkFDbEIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7OzBCQTJkNUIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQywwQkFBMEI7OzBCQUM3QyxNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vdXNlci5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMiBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNiBmcm9tICcuLi8uLi9vbmRld28vbmx1L3Byb2plY3Qtcm9sZS5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0IHsgR1JQQ19VU0VSU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL3VzZXIucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVXNlcnNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIFVzZXJzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0NyZWF0ZVVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+XG4gICAgICovXG4gICAgY3JlYXRlVXNlcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVVc2VyUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Vc2VyPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9DcmVhdGVVc2VyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlVXNlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0dldFVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+XG4gICAgICovXG4gICAgZ2V0VXNlcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Vc2VyPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0dldFVzZXJJbmZvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVzZXJJbmZvPj5cbiAgICAgKi9cbiAgICBnZXRVc2VySW5mbzogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Vc2VySW5mbz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvR2V0VXNlckluZm8nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVzZXJJbmZvXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0RlbGV0ZVVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT4+XG4gICAgICovXG4gICAgZGVsZXRlVXNlcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVVc2VyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL1VwZGF0ZVVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+XG4gICAgICovXG4gICAgdXBkYXRlVXNlcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVVc2VyUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Vc2VyPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9VcGRhdGVVc2VyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlVXNlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0xpc3RVc2Vyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0VXNlcnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFVzZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFVzZXJzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xpc3RVc2VycycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0VXNlcnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Vc2Vycy9MaXN0VXNlckluZm9zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RVc2VySW5mb3NSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFVzZXJJbmZvczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RVc2VySW5mb3NSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvTGlzdFVzZXJJbmZvcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0VXNlckluZm9zUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvQ3JlYXRlU2VydmVyUm9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICAgKi9cbiAgICBjcmVhdGVTZXJ2ZXJSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0NyZWF0ZVNlcnZlclJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlcnZlclJvbGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvR2V0U2VydmVyUm9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICAgKi9cbiAgICBnZXRTZXJ2ZXJSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlcnZlclJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0dldFNlcnZlclJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlcnZlclJvbGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvRGVsZXRlU2VydmVyUm9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj5cbiAgICAgKi9cbiAgICBkZWxldGVTZXJ2ZXJSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0RlbGV0ZVNlcnZlclJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDMuRW1wdHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvVXBkYXRlU2VydmVyUm9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICAgKi9cbiAgICB1cGRhdGVTZXJ2ZXJSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL1VwZGF0ZVNlcnZlclJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlcnZlclJvbGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvTGlzdFNlcnZlclJvbGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0U2VydmVyUm9sZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2VydmVyUm9sZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvTGlzdFNlcnZlclJvbGVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0xpc3RTZXJ2ZXJQZXJtaXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFNlcnZlclBlcm1pc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xpc3RTZXJ2ZXJQZXJtaXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Vc2Vycy9Mb2dpblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Mb2dpblJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsb2dpbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Mb2dpblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTG9naW5SZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvTG9naW4nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5Mb2dpblJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Mb2dpblJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0NoZWNrTG9naW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT4+XG4gICAgICovXG4gICAgY2hlY2tMb2dpbjogKFxuICAgICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0NoZWNrTG9naW4nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMy5FbXB0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Vc2Vycy9MaXN0Tm90aWZpY2F0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0Tm90aWZpY2F0aW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDcuTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvTGlzdE5vdGlmaWNhdGlvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL1NldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIHNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogb25kZXdvTmx1MDA3LlNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9TZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1cycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogb25kZXdvTmx1MDA3LlNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogb25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDcuTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgc2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiBvbmRld29ObHUwMDcuU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL1NldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBvbmRld29ObHUwMDcuU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMDcuTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VyUHJlZmVyZW5jZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldFVzZXJQcmVmZXJlbmNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VyUHJlZmVyZW5jZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuVXNlcnMvU2V0VXNlclByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNldFVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBzZXRVc2VyUHJlZmVyZW5jZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0VXNlclByZWZlcmVuY2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXRVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXNlcnMvU2V0VXNlclByZWZlcmVuY2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2V0VXNlclByZWZlcmVuY2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNldFVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlVzZXJzL0RlbGV0ZVVzZXJQcmVmZXJlbmNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5EZWxldGVVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgZGVsZXRlVXNlclByZWZlcmVuY2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVVzZXJQcmVmZXJlbmNlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlVXNlclByZWZlcmVuY2VzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0RlbGV0ZVVzZXJQcmVmZXJlbmNlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkRlbGV0ZVVzZXJQcmVmZXJlbmNlc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5EZWxldGVVc2VyUHJlZmVyZW5jZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlVXNlclByZWZlcmVuY2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGRlbGV0ZUFsbFVzZXJQcmVmZXJlbmNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRlbGV0ZVVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRGVsZXRlVXNlclByZWZlcmVuY2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfVVNFUlNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuVXNlcnMnLCBzZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXNlcnMvQ3JlYXRlVXNlclxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Vc2VyPlxuICAgKi9cbiAgY3JlYXRlVXNlcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Vc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZVVzZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+XG4gICAqL1xuICBnZXRVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0VXNlcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0dldFVzZXJJbmZvXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXJJbmZvPlxuICAgKi9cbiAgZ2V0VXNlckluZm8oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXNlckluZm8+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0VXNlckluZm8ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVVc2VyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+XG4gICAqL1xuICBkZWxldGVVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlVXNlcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL1VwZGF0ZVVzZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXNlcj5cbiAgICovXG4gIHVwZGF0ZVVzZXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVVc2VyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXNlcj4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVVc2VyKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXNlcnMvTGlzdFVzZXJzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RVc2Vyc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFVzZXJzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFVzZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFVzZXJzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFVzZXJzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXNlcnMvTGlzdFVzZXJJbmZvc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VXNlckluZm9zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VXNlckluZm9zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFVzZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFVzZXJJbmZvc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RVc2VySW5mb3MocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9DcmVhdGVTZXJ2ZXJSb2xlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlcnZlclJvbGU+XG4gICAqL1xuICBjcmVhdGVTZXJ2ZXJSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlcnZlclJvbGU+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY3JlYXRlU2VydmVyUm9sZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0dldFNlcnZlclJvbGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VydmVyUm9sZT5cbiAgICovXG4gIGdldFNlcnZlclJvbGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VydmVyUm9sZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRTZXJ2ZXJSb2xlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXNlcnMvRGVsZXRlU2VydmVyUm9sZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlU2VydmVyUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmRlbGV0ZVNlcnZlclJvbGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9VcGRhdGVTZXJ2ZXJSb2xlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlcnZlclJvbGU+XG4gICAqL1xuICB1cGRhdGVTZXJ2ZXJSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlcnZlclJvbGU+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlU2VydmVyUm9sZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0xpc3RTZXJ2ZXJSb2xlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2VydmVyUm9sZXNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXJ2ZXJSb2xlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RTZXJ2ZXJSb2xlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0xpc3RTZXJ2ZXJQZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXJ2ZXJQZXJtaXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RTZXJ2ZXJQZXJtaXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0xvZ2luXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxvZ2luUmVzcG9uc2U+XG4gICAqL1xuICBsb2dpbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxvZ2luUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5sb2dpbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlVzZXJzL0NoZWNrTG9naW5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT5cbiAgICovXG4gIGNoZWNrTG9naW4oXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNoZWNrTG9naW4ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9MaXN0Tm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdE5vdGlmaWNhdGlvbnMoXG4gICAgcmVxdWVzdERhdGE6IG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdE5vdGlmaWNhdGlvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9TZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPlxuICAgKi9cbiAgc2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXMoXG4gICAgcmVxdWVzdERhdGE6IG9uZGV3b05sdTAwNy5TZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9TZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPG9uZGV3b05sdTAwNy5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPlxuICAgKi9cbiAgc2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXMoXG4gICAgcmVxdWVzdERhdGE6IG9uZGV3b05sdTAwNy5TZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDA3Lkxpc3ROb3RpZmljYXRpb25zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VyUHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2U+XG4gICAqL1xuICBnZXRVc2VyUHJlZmVyZW5jZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRVc2VyUHJlZmVyZW5jZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9TZXRVc2VyUHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2U+XG4gICAqL1xuICBzZXRVc2VyUHJlZmVyZW5jZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZXRVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXRVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZXRVc2VyUHJlZmVyZW5jZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVVc2VyUHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGVsZXRlVXNlclByZWZlcmVuY2VzUmVzcG9uc2U+XG4gICAqL1xuICBkZWxldGVVc2VyUHJlZmVyZW5jZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVVc2VyUHJlZmVyZW5jZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGVsZXRlVXNlclByZWZlcmVuY2VzUmVzcG9uc2U+XG4gICAqL1xuICBkZWxldGVBbGxVc2VyUHJlZmVyZW5jZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVBbGxVc2VyUHJlZmVyZW5jZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVBbGxVc2VyUHJlZmVyZW5jZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19
