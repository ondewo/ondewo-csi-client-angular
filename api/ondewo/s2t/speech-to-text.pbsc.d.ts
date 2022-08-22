import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './speech-to-text.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.s2t.Speech2Text
 */
export declare class Speech2TextClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.s2t.Speech2Text/TranscribeFile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
         */
        transcribeFile: (requestData: thisProto.TranscribeFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.TranscribeFileResponse>>;
        /**
         * Bidirectional streaming: /ondewo.s2t.Speech2Text/TranscribeStream
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
         */
        transcribeStream: (requestData: Observable<thisProto.TranscribeStreamRequest>, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/GetS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Speech2TextConfig>>
         */
        getS2tPipeline: (requestData: thisProto.S2tPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Speech2TextConfig>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/CreateS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.S2tPipelineId>>
         */
        createS2tPipeline: (requestData: thisProto.Speech2TextConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.S2tPipelineId>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/DeleteS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteS2tPipeline: (requestData: thisProto.S2tPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/UpdateS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        updateS2tPipeline: (requestData: thisProto.Speech2TextConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/ListS2tPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
         */
        listS2tPipelines: (requestData: thisProto.ListS2tPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
         */
        listS2tLanguages: (requestData: thisProto.ListS2tLanguagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/ListS2tDomains
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
         */
        listS2tDomains: (requestData: thisProto.ListS2tDomainsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/GetServiceInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.S2TGetServiceInfoResponse>>
         */
        getServiceInfo: (requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.S2TGetServiceInfoResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguageModels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>>
         */
        listS2tLanguageModels: (requestData: thisProto.ListS2tLanguageModelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/CreateUserLanguageModel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        createUserLanguageModel: (requestData: thisProto.CreateUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/DeleteUserLanguageModel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteUserLanguageModel: (requestData: thisProto.DeleteUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        addDataToUserLanguageModel: (requestData: thisProto.AddDataToUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.s2t.Speech2Text/TrainUserLanguageModel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        trainUserLanguageModel: (requestData: thisProto.TrainUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.s2t.Speech2Text/TranscribeFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TranscribeFileResponse>
     */
    transcribeFile(requestData: thisProto.TranscribeFileRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.TranscribeFileResponse>;
    /**
     * Bidirectional streaming @/ondewo.s2t.Speech2Text/TranscribeStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TranscribeStreamResponse>
     */
    transcribeStream(requestData: Observable<thisProto.TranscribeStreamRequest>, requestMetadata?: GrpcMetadata): Observable<thisProto.TranscribeStreamResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/GetS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Speech2TextConfig>
     */
    getS2tPipeline(requestData: thisProto.S2tPipelineId, requestMetadata?: GrpcMetadata): Observable<thisProto.Speech2TextConfig>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/CreateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.S2tPipelineId>
     */
    createS2tPipeline(requestData: thisProto.Speech2TextConfig, requestMetadata?: GrpcMetadata): Observable<thisProto.S2tPipelineId>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/DeleteS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteS2tPipeline(requestData: thisProto.S2tPipelineId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/UpdateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    updateS2tPipeline(requestData: thisProto.Speech2TextConfig, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tPipelinesResponse>
     */
    listS2tPipelines(requestData: thisProto.ListS2tPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListS2tPipelinesResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tLanguagesResponse>
     */
    listS2tLanguages(requestData: thisProto.ListS2tLanguagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListS2tLanguagesResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tDomainsResponse>
     */
    listS2tDomains(requestData: thisProto.ListS2tDomainsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListS2tDomainsResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.S2TGetServiceInfoResponse>
     */
    getServiceInfo(requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.S2TGetServiceInfoResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguageModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tLanguageModelsResponse>
     */
    listS2tLanguageModels(requestData: thisProto.ListS2tLanguageModelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListS2tLanguageModelsResponse>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/CreateUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    createUserLanguageModel(requestData: thisProto.CreateUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/DeleteUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteUserLanguageModel(requestData: thisProto.DeleteUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    addDataToUserLanguageModel(requestData: thisProto.AddDataToUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.s2t.Speech2Text/TrainUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    trainUserLanguageModel(requestData: thisProto.TrainUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Speech2TextClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Speech2TextClient>;
}
