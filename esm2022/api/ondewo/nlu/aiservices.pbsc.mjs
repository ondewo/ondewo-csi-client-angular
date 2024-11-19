/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './aiservices.pb';
import { GRPC_AI_SERVICES_CLIENT_SETTINGS } from './aiservices.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.AiServices
 */
export class AiServicesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.nlu.AiServices/ExtractEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
             */
            extractEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/ExtractEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ExtractEntitiesRequest,
                    responseClass: thisProto.ExtractEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/GenerateUserSays
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>
             */
            generateUserSays: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/GenerateUserSays',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GenerateUserSaysRequest,
                    responseClass: thisProto.GenerateUserSaysResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/GenerateResponses
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>
             */
            generateResponses: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/GenerateResponses',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GenerateResponsesRequest,
                    responseClass: thisProto.GenerateResponsesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/GetAlternativeSentences
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>
             */
            getAlternativeSentences: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/GetAlternativeSentences',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetAlternativeSentencesRequest,
                    responseClass: thisProto.GetAlternativeSentencesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>
             */
            getAlternativeTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetAlternativeTrainingPhrasesRequest,
                    responseClass: thisProto.GetAlternativeTrainingPhrasesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/GetSynonyms
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetSynonymsResponse>>
             */
            getSynonyms: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/GetSynonyms',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetSynonymsRequest,
                    responseClass: thisProto.GetSynonymsResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/ClassifyIntents
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ClassifyIntentsResponse>>
             */
            classifyIntents: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/ClassifyIntents',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ClassifyIntentsRequest,
                    responseClass: thisProto.ClassifyIntentsResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/ExtractEntitiesFuzzy
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
             */
            extractEntitiesFuzzy: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/ExtractEntitiesFuzzy',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ExtractEntitiesFuzzyRequest,
                    responseClass: thisProto.ExtractEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/LlmGenerate
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.LlmGenerateResponse>>
             */
            llmGenerate: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/LlmGenerate',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.LlmGenerateRequest,
                    responseClass: thisProto.LlmGenerateResponse
                });
            },
            /**
             * Server streaming: /ondewo.nlu.AiServices/StreamingLlmGenerate
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.StreamingLlmGenerateResponse>>
             */
            streamingLlmGenerate: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.serverStream,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/StreamingLlmGenerate',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.LlmGenerateRequest,
                    responseClass: thisProto.StreamingLlmGenerateResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.AiServices/ListLlmModels
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListLlmModelsResponse>>
             */
            listLlmModels: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.AiServices/ListLlmModels',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListLlmModelsRequest,
                    responseClass: thisProto.ListLlmModelsResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.AiServices', settings);
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/ExtractEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ExtractEntitiesResponse>
     */
    extractEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .extractEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/GenerateUserSays
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GenerateUserSaysResponse>
     */
    generateUserSays(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .generateUserSays(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/GenerateResponses
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GenerateResponsesResponse>
     */
    generateResponses(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .generateResponses(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/GetAlternativeSentences
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAlternativeSentencesResponse>
     */
    getAlternativeSentences(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getAlternativeSentences(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAlternativeTrainingPhrasesResponse>
     */
    getAlternativeTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getAlternativeTrainingPhrases(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/GetSynonyms
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSynonymsResponse>
     */
    getSynonyms(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getSynonyms(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/ClassifyIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ClassifyIntentsResponse>
     */
    classifyIntents(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .classifyIntents(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/ExtractEntitiesFuzzy
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ExtractEntitiesResponse>
     */
    extractEntitiesFuzzy(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .extractEntitiesFuzzy(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/LlmGenerate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LlmGenerateResponse>
     */
    llmGenerate(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .llmGenerate(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Server streaming @/ondewo.nlu.AiServices/StreamingLlmGenerate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StreamingLlmGenerateResponse>
     */
    streamingLlmGenerate(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .streamingLlmGenerate(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.AiServices/ListLlmModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListLlmModelsResponse>
     */
    listLlmModels(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listLlmModels(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: AiServicesClient, deps: [{ token: GRPC_AI_SERVICES_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: AiServicesClient, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: AiServicesClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_AI_SERVICES_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlzZXJ2aWNlcy5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvYWlzZXJ2aWNlcy5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFpQjdDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFDdkU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBb1AzQixZQUN3RCxRQUFhLEVBQ3RDLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFwUDlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxlQUFlLEVBQUUsQ0FDZixXQUE2QyxFQUM3QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDc0IsRUFBRTtnQkFDNUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSx3Q0FBd0M7b0JBQzlDLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHNCQUFzQjtvQkFDOUMsYUFBYSxFQUFF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QUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxhQUFhLENBQ1gsV0FBMkMsRUFDM0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixhQUFhLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUMzQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7K0dBMWFVLGdCQUFnQixrQkFxUEwsZ0NBQWdDLDZCQUM1QyxtQkFBbUI7bUhBdFBsQixnQkFBZ0IsY0FESCxLQUFLOzs0RkFDbEIsZ0JBQWdCO2tCQUQ1QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBc1A1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGdDQUFnQzs7MEJBQ25ELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9haXNlcnZpY2VzLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDIgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA1IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwNiBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNyBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbnRleHQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA4IGZyb20gJy4uLy4uL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwOSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVScGMwMTAgZnJvbSAnLi4vLi4vZ29vZ2xlL3JwYy9zdGF0dXMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlVHlwZTAxMSBmcm9tICcuLi8uLi9nb29nbGUvdHlwZS9sYXRsbmcucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDEyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvaW50ZW50LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L2VudGl0eS10eXBlLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxNCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NjYWktcHJvamVjdC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTUgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9zZXNzaW9uLnBiJztcbmltcG9ydCB7IEdSUENfQUlfU0VSVklDRVNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9haXNlcnZpY2VzLnBiY29uZic7XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFpU2VydmljZXNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIEFpU2VydmljZXNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9FeHRyYWN0RW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRXh0cmFjdEVudGl0aWVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGV4dHJhY3RFbnRpdGllczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5FeHRyYWN0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0V4dHJhY3RFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FeHRyYWN0RW50aXRpZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0dlbmVyYXRlVXNlclNheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVVzZXJTYXlzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdlbmVyYXRlVXNlclNheXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZW5lcmF0ZVVzZXJTYXlzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZW5lcmF0ZVJlc3BvbnNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlc3BvbnNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZW5lcmF0ZVJlc3BvbnNlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBnZXRBbHRlcm5hdGl2ZVNlbnRlbmNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZXRBbHRlcm5hdGl2ZVNlbnRlbmNlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBnZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPFxuICAgICAgR3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPlxuICAgID4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0dldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0dldFN5bm9ueW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFN5bm9ueW1zUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldFN5bm9ueW1zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFN5bm9ueW1zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRTeW5vbnltc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0dldFN5bm9ueW1zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0U3lub255bXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0U3lub255bXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0NsYXNzaWZ5SW50ZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DbGFzc2lmeUludGVudHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgY2xhc3NpZnlJbnRlbnRzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNsYXNzaWZ5SW50ZW50c1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2xhc3NpZnlJbnRlbnRzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkFpU2VydmljZXMvQ2xhc3NpZnlJbnRlbnRzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkNsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkFpU2VydmljZXMvRXh0cmFjdEVudGl0aWVzRnV6enlcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRXh0cmFjdEVudGl0aWVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGV4dHJhY3RFbnRpdGllc0Z1enp5OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FeHRyYWN0RW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9FeHRyYWN0RW50aXRpZXNGdXp6eScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkFpU2VydmljZXMvTGxtR2VuZXJhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGxtR2VuZXJhdGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxsbUdlbmVyYXRlUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkFpU2VydmljZXMvTGxtR2VuZXJhdGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MbG1HZW5lcmF0ZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MbG1HZW5lcmF0ZVJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNlcnZlciBzdHJlYW1pbmc6IC9vbmRld28ubmx1LkFpU2VydmljZXMvU3RyZWFtaW5nTGxtR2VuZXJhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU3RyZWFtaW5nTGxtR2VuZXJhdGVSZXNwb25zZT4+XG4gICAgICovXG4gICAgc3RyZWFtaW5nTGxtR2VuZXJhdGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlN0cmVhbWluZ0xsbUdlbmVyYXRlUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS5zZXJ2ZXJTdHJlYW0sXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5BaVNlcnZpY2VzL1N0cmVhbWluZ0xsbUdlbmVyYXRlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU3RyZWFtaW5nTGxtR2VuZXJhdGVSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0xpc3RMbG1Nb2RlbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdExsbU1vZGVsc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0TGxtTW9kZWxzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RMbG1Nb2RlbHNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RMbG1Nb2RlbHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9MaXN0TGxtTW9kZWxzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdExsbU1vZGVsc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0TGxtTW9kZWxzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfQUlfU0VSVklDRVNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuQWlTZXJ2aWNlcycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0V4dHJhY3RFbnRpdGllc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5FeHRyYWN0RW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGV4dHJhY3RFbnRpdGllcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmV4dHJhY3RFbnRpdGllcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkFpU2VydmljZXMvR2VuZXJhdGVVc2VyU2F5c1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2U+XG4gICAqL1xuICBnZW5lcmF0ZVVzZXJTYXlzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdlbmVyYXRlVXNlclNheXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZW5lcmF0ZVVzZXJTYXlzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZW5lcmF0ZVJlc3BvbnNlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlPlxuICAgKi9cbiAgZ2VuZXJhdGVSZXNwb25zZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2VuZXJhdGVSZXNwb25zZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0dldEFsdGVybmF0aXZlU2VudGVuY2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2U+XG4gICAqL1xuICBnZXRBbHRlcm5hdGl2ZVNlbnRlbmNlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRBbHRlcm5hdGl2ZVNlbnRlbmNlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkFpU2VydmljZXMvR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZT5cbiAgICovXG4gIGdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9HZXRTeW5vbnltc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRTeW5vbnltc1Jlc3BvbnNlPlxuICAgKi9cbiAgZ2V0U3lub255bXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTeW5vbnltc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFN5bm9ueW1zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0U3lub255bXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0NsYXNzaWZ5SW50ZW50c1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DbGFzc2lmeUludGVudHNSZXNwb25zZT5cbiAgICovXG4gIGNsYXNzaWZ5SW50ZW50cyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNsYXNzaWZ5SW50ZW50c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNsYXNzaWZ5SW50ZW50cyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkFpU2VydmljZXMvRXh0cmFjdEVudGl0aWVzRnV6enlcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRXh0cmFjdEVudGl0aWVzUmVzcG9uc2U+XG4gICAqL1xuICBleHRyYWN0RW50aXRpZXNGdXp6eShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRXh0cmFjdEVudGl0aWVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZXh0cmFjdEVudGl0aWVzRnV6enkocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5BaVNlcnZpY2VzL0xsbUdlbmVyYXRlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxsbUdlbmVyYXRlUmVzcG9uc2U+XG4gICAqL1xuICBsbG1HZW5lcmF0ZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxsbUdlbmVyYXRlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5sbG1HZW5lcmF0ZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcnZlciBzdHJlYW1pbmcgQC9vbmRld28ubmx1LkFpU2VydmljZXMvU3RyZWFtaW5nTGxtR2VuZXJhdGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3RyZWFtaW5nTGxtR2VuZXJhdGVSZXNwb25zZT5cbiAgICovXG4gIHN0cmVhbWluZ0xsbUdlbmVyYXRlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGxtR2VuZXJhdGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TdHJlYW1pbmdMbG1HZW5lcmF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnN0cmVhbWluZ0xsbUdlbmVyYXRlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuQWlTZXJ2aWNlcy9MaXN0TGxtTW9kZWxzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RMbG1Nb2RlbHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RMbG1Nb2RlbHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0TGxtTW9kZWxzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdExsbU1vZGVsc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RMbG1Nb2RlbHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19