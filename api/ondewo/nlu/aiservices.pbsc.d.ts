import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './aiservices.pb';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.nlu.AiServices
 */
export declare class AiServicesClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.nlu.AiServices/ExtractEntities
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
		 */
		extractEntities: (
			requestData: thisProto.ExtractEntitiesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/GenerateUserSays
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>
		 */
		generateUserSays: (
			requestData: thisProto.GenerateUserSaysRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/GenerateResponses
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>
		 */
		generateResponses: (
			requestData: thisProto.GenerateResponsesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/GetAlternativeSentences
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>
		 */
		getAlternativeSentences: (
			requestData: thisProto.GetAlternativeSentencesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>
		 */
		getAlternativeTrainingPhrases: (
			requestData: thisProto.GetAlternativeTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/GetSynonyms
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetSynonymsResponse>>
		 */
		getSynonyms: (
			requestData: thisProto.GetSynonymsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetSynonymsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/ClassifyIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ClassifyIntentsResponse>>
		 */
		classifyIntents: (
			requestData: thisProto.ClassifyIntentsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ClassifyIntentsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.AiServices/ExtractEntitiesFuzzy
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
		 */
		extractEntitiesFuzzy: (
			requestData: thisProto.ExtractEntitiesFuzzyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.AiServices/ExtractEntities
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ExtractEntitiesResponse>
	 */
	extractEntities(
		requestData: thisProto.ExtractEntitiesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ExtractEntitiesResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/GenerateUserSays
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GenerateUserSaysResponse>
	 */
	generateUserSays(
		requestData: thisProto.GenerateUserSaysRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GenerateUserSaysResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/GenerateResponses
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GenerateResponsesResponse>
	 */
	generateResponses(
		requestData: thisProto.GenerateResponsesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GenerateResponsesResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/GetAlternativeSentences
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetAlternativeSentencesResponse>
	 */
	getAlternativeSentences(
		requestData: thisProto.GetAlternativeSentencesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetAlternativeSentencesResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetAlternativeTrainingPhrasesResponse>
	 */
	getAlternativeTrainingPhrases(
		requestData: thisProto.GetAlternativeTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetAlternativeTrainingPhrasesResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/GetSynonyms
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetSynonymsResponse>
	 */
	getSynonyms(
		requestData: thisProto.GetSynonymsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetSynonymsResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/ClassifyIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ClassifyIntentsResponse>
	 */
	classifyIntents(
		requestData: thisProto.ClassifyIntentsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ClassifyIntentsResponse>;
	/**
	 * Unary call @/ondewo.nlu.AiServices/ExtractEntitiesFuzzy
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ExtractEntitiesResponse>
	 */
	extractEntitiesFuzzy(
		requestData: thisProto.ExtractEntitiesFuzzyRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ExtractEntitiesResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<AiServicesClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<AiServicesClient>;
}
