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
import * as thisProto from './project-role.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import { GRPC_PROJECT_ROLES_CLIENT_SETTINGS } from './project-role.pbconf';
/**
 * Service client implementation for ondewo.nlu.ProjectRoles
 */
@Injectable({ providedIn: 'any' })
export class ProjectRolesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.ProjectRoles/CreateProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    createProjectRole: (
      requestData: thisProto.CreateProjectRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ProjectRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectRoles/CreateProjectRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateProjectRoleRequest,
        responseClass: thisProto.ProjectRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectRoles/GetProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    getProjectRole: (
      requestData: thisProto.GetProjectRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ProjectRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectRoles/GetProjectRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectRoleRequest,
        responseClass: thisProto.ProjectRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectRoles/DeleteProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteProjectRole: (
      requestData: thisProto.DeleteProjectRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteProjectRoleRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectRoles/UpdateProjectRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    updateProjectRole: (
      requestData: thisProto.UpdateProjectRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ProjectRole>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateProjectRoleRequest,
        responseClass: thisProto.ProjectRole
      });
    },
    /**
     * Unary call: /ondewo.nlu.ProjectRoles/ListProjectRoles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
     */
    listProjectRoles: (
      requestData: thisProto.ListProjectRolesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListProjectRolesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.ProjectRoles/ListProjectRoles',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProjectRolesRequest,
        responseClass: thisProto.ListProjectRolesResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PROJECT_ROLES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.ProjectRoles',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.ProjectRoles/CreateProjectRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ProjectRole>
   */
  createProjectRole(
    requestData: thisProto.CreateProjectRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ProjectRole> {
    return this.$raw
      .createProjectRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectRoles/GetProjectRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ProjectRole>
   */
  getProjectRole(
    requestData: thisProto.GetProjectRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ProjectRole> {
    return this.$raw
      .getProjectRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectRoles/DeleteProjectRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteProjectRole(
    requestData: thisProto.DeleteProjectRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteProjectRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectRoles/UpdateProjectRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ProjectRole>
   */
  updateProjectRole(
    requestData: thisProto.UpdateProjectRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ProjectRole> {
    return this.$raw
      .updateProjectRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.ProjectRoles/ListProjectRoles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListProjectRolesResponse>
   */
  listProjectRoles(
    requestData: thisProto.ListProjectRolesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListProjectRolesResponse> {
    return this.$raw
      .listProjectRoles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
