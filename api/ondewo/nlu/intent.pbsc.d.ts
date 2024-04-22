import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './intent.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.nlu.Intents
 */
export declare class IntentsClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.nlu.Intents/ListIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListIntentsResponse>>
		 */
		listIntents: (
			requestData: thisProto.ListIntentsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListIntentsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/GetIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		getIntent: (
			requestData: thisProto.GetIntentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Intent>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/CreateIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		createIntent: (
			requestData: thisProto.CreateIntentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Intent>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/UpdateIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		updateIntent: (
			requestData: thisProto.UpdateIntentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.Intent>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/DeleteIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteIntent: (
			requestData: thisProto.DeleteIntentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchUpdateIntentsResponse>>
		 */
		batchUpdateIntents: (
			requestData: thisProto.BatchUpdateIntentsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchUpdateIntentsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
		 */
		batchDeleteIntents: (
			requestData: thisProto.BatchDeleteIntentsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<ondewoNlu011.Operation>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/TagIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		tagIntent: (
			requestData: thisProto.IntentTagRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/DeleteIntentTag
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteIntentTag: (
			requestData: thisProto.IntentTagRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/GetIntentTags
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
		 */
		getIntentTags: (
			requestData: thisProto.GetIntentTagsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/GetAllIntentTags
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
		 */
		getAllIntentTags: (
			requestData: thisProto.GetAllIntentTagsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchCreateTrainingPhrases: (
			requestData: thisProto.BatchCreateTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchGetTrainingPhrases: (
			requestData: thisProto.BatchGetTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchUpdateTrainingPhrases: (
			requestData: thisProto.BatchUpdateTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>
		 */
		batchDeleteTrainingPhrases: (
			requestData: thisProto.BatchDeleteTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/ListTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>
		 */
		listTrainingPhrases: (
			requestData: thisProto.ListTrainingPhrasesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchCreateResponseMessages: (
			requestData: thisProto.BatchCreateResponseMessagesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchGetResponseMessages: (
			requestData: thisProto.BatchGetResponseMessagesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchUpdateResponseMessages: (
			requestData: thisProto.BatchUpdateResponseMessagesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>
		 */
		batchDeleteResponseMessages: (
			requestData: thisProto.BatchDeleteResponseMessagesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/ListResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>
		 */
		listResponseMessages: (
			requestData: thisProto.ListResponseMessagesRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchCreateParameters: (
			requestData: thisProto.BatchCreateParametersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchGetParameters: (
			requestData: thisProto.BatchGetParametersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchUpdateParameters: (
			requestData: thisProto.BatchUpdateParametersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>
		 */
		batchDeleteParameters: (
			requestData: thisProto.BatchDeleteParametersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/ListParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListParametersResponse>>
		 */
		listParameters: (
			requestData: thisProto.ListParametersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListParametersResponse>>;
		/**
		 * Unary call: /ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>>
		 */
		listTrainingPhrasesofIntentsWithEnrichment: (
			requestData: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.nlu.Intents/ListIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListIntentsResponse>
	 */
	listIntents(
		requestData: thisProto.ListIntentsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListIntentsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/GetIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	getIntent(requestData: thisProto.GetIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Intent>;
	/**
	 * Unary call @/ondewo.nlu.Intents/CreateIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	createIntent(
		requestData: thisProto.CreateIntentRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Intent>;
	/**
	 * Unary call @/ondewo.nlu.Intents/UpdateIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	updateIntent(
		requestData: thisProto.UpdateIntentRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.Intent>;
	/**
	 * Unary call @/ondewo.nlu.Intents/DeleteIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteIntent(
		requestData: thisProto.DeleteIntentRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchUpdateIntentsResponse>
	 */
	batchUpdateIntents(
		requestData: thisProto.BatchUpdateIntentsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchUpdateIntentsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu011.Operation>
	 */
	batchDeleteIntents(
		requestData: thisProto.BatchDeleteIntentsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<ondewoNlu011.Operation>;
	/**
	 * Unary call @/ondewo.nlu.Intents/TagIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	tagIntent(
		requestData: thisProto.IntentTagRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.nlu.Intents/DeleteIntentTag
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteIntentTag(
		requestData: thisProto.IntentTagRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.nlu.Intents/GetIntentTags
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetIntentTagsResponse>
	 */
	getIntentTags(
		requestData: thisProto.GetIntentTagsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetIntentTagsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/GetAllIntentTags
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetIntentTagsResponse>
	 */
	getAllIntentTags(
		requestData: thisProto.GetAllIntentTagsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetIntentTagsResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchCreateTrainingPhrases(
		requestData: thisProto.BatchCreateTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchGetTrainingPhrases(
		requestData: thisProto.BatchGetTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchUpdateTrainingPhrases(
		requestData: thisProto.BatchUpdateTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteTrainingPhrasesResponse>
	 */
	batchDeleteTrainingPhrases(
		requestData: thisProto.BatchDeleteTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchDeleteTrainingPhrasesResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/ListTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListTrainingPhrasesResponse>
	 */
	listTrainingPhrases(
		requestData: thisProto.ListTrainingPhrasesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListTrainingPhrasesResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchCreateResponseMessages(
		requestData: thisProto.BatchCreateResponseMessagesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchResponseMessagesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchGetResponseMessages(
		requestData: thisProto.BatchGetResponseMessagesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchResponseMessagesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchUpdateResponseMessages(
		requestData: thisProto.BatchUpdateResponseMessagesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchResponseMessagesStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteResponseMessagesResponse>
	 */
	batchDeleteResponseMessages(
		requestData: thisProto.BatchDeleteResponseMessagesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchDeleteResponseMessagesResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/ListResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListResponseMessagesResponse>
	 */
	listResponseMessages(
		requestData: thisProto.ListResponseMessagesRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListResponseMessagesResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchCreateParameters(
		requestData: thisProto.BatchCreateParametersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchParametersStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchGetParameters(
		requestData: thisProto.BatchGetParametersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchParametersStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchUpdateParameters(
		requestData: thisProto.BatchUpdateParametersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchParametersStatusResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteParametersResponse>
	 */
	batchDeleteParameters(
		requestData: thisProto.BatchDeleteParametersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.BatchDeleteParametersResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/ListParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListParametersResponse>
	 */
	listParameters(
		requestData: thisProto.ListParametersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListParametersResponse>;
	/**
	 * Unary call @/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>
	 */
	listTrainingPhrasesofIntentsWithEnrichment(
		requestData: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<IntentsClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<IntentsClient>;
}
