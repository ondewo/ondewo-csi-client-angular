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
import * as thisProto from './ccai-project.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
import { GRPC_CCAI_PROJECTS_CLIENT_SETTINGS } from './ccai-project.pbconf';
/**
 * Service client implementation for ondewo.nlu.CcaiProjects
 */
@Injectable({ providedIn: 'any' })
export class CcaiProjectsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/GetCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CcaiProject>>
     */
    getCcaiProject: (
      requestData: thisProto.GetCcaiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CcaiProject>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/GetCcaiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCcaiProjectRequest,
        responseClass: thisProto.CcaiProject
      });
    },
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/CreateCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateCcaiProjectResponse>>
     */
    createCcaiProject: (
      requestData: thisProto.CreateCcaiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateCcaiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/CreateCcaiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateCcaiProjectRequest,
        responseClass: thisProto.CreateCcaiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/DeleteCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCcaiProjectResponse>>
     */
    deleteCcaiProject: (
      requestData: thisProto.DeleteCcaiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCcaiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/DeleteCcaiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCcaiProjectRequest,
        responseClass: thisProto.DeleteCcaiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/ListCcaiProjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCcaiProjectsResponse>>
     */
    listCcaiProjects: (
      requestData: thisProto.ListCcaiProjectsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCcaiProjectsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/ListCcaiProjects',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCcaiProjectsRequest,
        responseClass: thisProto.ListCcaiProjectsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/UpdateCcaiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCcaiProjectResponse>>
     */
    updateCcaiProject: (
      requestData: thisProto.UpdateCcaiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCcaiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/UpdateCcaiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCcaiProjectRequest,
        responseClass: thisProto.UpdateCcaiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.CcaiProjects/GetCcaiService
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CcaiService>>
     */
    getCcaiService: (
      requestData: thisProto.GetCcaiServiceRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CcaiService>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.CcaiProjects/GetCcaiService',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCcaiServiceRequest,
        responseClass: thisProto.CcaiService
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CCAI_PROJECTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.CcaiProjects',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/GetCcaiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CcaiProject>
   */
  getCcaiProject(
    requestData: thisProto.GetCcaiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CcaiProject> {
    return this.$raw
      .getCcaiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/CreateCcaiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateCcaiProjectResponse>
   */
  createCcaiProject(
    requestData: thisProto.CreateCcaiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateCcaiProjectResponse> {
    return this.$raw
      .createCcaiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/DeleteCcaiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCcaiProjectResponse>
   */
  deleteCcaiProject(
    requestData: thisProto.DeleteCcaiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCcaiProjectResponse> {
    return this.$raw
      .deleteCcaiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/ListCcaiProjects
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCcaiProjectsResponse>
   */
  listCcaiProjects(
    requestData: thisProto.ListCcaiProjectsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCcaiProjectsResponse> {
    return this.$raw
      .listCcaiProjects(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/UpdateCcaiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCcaiProjectResponse>
   */
  updateCcaiProject(
    requestData: thisProto.UpdateCcaiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCcaiProjectResponse> {
    return this.$raw
      .updateCcaiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.CcaiProjects/GetCcaiService
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CcaiService>
   */
  getCcaiService(
    requestData: thisProto.GetCcaiServiceRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CcaiService> {
    return this.$raw
      .getCcaiService(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
