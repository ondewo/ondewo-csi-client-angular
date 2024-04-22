import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
export declare enum TranscriptionType {
	TRANSCRIPTION_TYPE_UNSPECIFIED = 0,
	TRANSCRIPTION_TYPE_S2T = 1,
	TRANSCRIPTION_TYPE_HUMAN = 2
}
export declare enum AudioEncoding {
	AUDIO_ENCODING_UNSPECIFIED = 0,
	AUDIO_ENCODING_LINEAR_16 = 1,
	AUDIO_ENCODING_FLAC = 2,
	AUDIO_ENCODING_MULAW = 3,
	AUDIO_ENCODING_AMR = 4,
	AUDIO_ENCODING_AMR_WB = 5,
	AUDIO_ENCODING_OGG_OPUS = 6,
	AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7
}
export declare enum ComparisonOperator {
	EQUAL = 0,
	GREATER = 1,
	GREATER_OR_EQUAL = 2,
	LESS_OR_EQUAL = 3,
	CONTAINS = 4,
	STARTS_WITH = 5,
	ENDS_WITH = 6
}
export declare enum ResourceView {
	RESOURCE_VIEW_UNSPECIFIED = 0,
	RESOURCE_VIEW_FULL = 1,
	RESOURCE_VIEW_PARTIAL = 2,
	RESOURCE_VIEW_MINIMUM = 3
}
export declare enum AudioFileResourceType {
	AUDIO_FILE_RESOURCE_TYPE_UNSPECIFIED = 0,
	AUDIO_FILE_RESOURCE_TYPE_T2S = 1,
	AUDIO_FILE_RESOURCE_TYPE_S2T = 2,
	AUDIO_FILE_RESOURCE_TYPE_S2T_AND_T2S = 3
}
/**
 * Message implementation for ondewo.nlu.DetectIntentRequest
 */
export declare class DetectIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DetectIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DetectIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DetectIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DetectIntentRequest, _writer: BinaryWriter): void;
	private _session;
	private _queryParams?;
	private _queryInput?;
	private _inputAudio;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectIntentRequest.AsObject>);
	get session(): string;
	set session(value: string);
	get queryParams(): QueryParameters | undefined;
	set queryParams(value: QueryParameters | undefined);
	get queryInput(): QueryInput | undefined;
	set queryInput(value: QueryInput | undefined);
	get inputAudio(): Uint8Array;
	set inputAudio(value: Uint8Array);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DetectIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DetectIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DetectIntentRequest.AsProtobufJSON;
}
export declare module DetectIntentRequest {
	/**
	 * Standard JavaScript object representation for DetectIntentRequest
	 */
	interface AsObject {
		session: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		inputAudio: Uint8Array;
	}
	/**
	 * Protobuf JSON representation for DetectIntentRequest
	 */
	interface AsProtobufJSON {
		session: string;
		queryParams: QueryParameters.AsProtobufJSON | null;
		queryInput: QueryInput.AsProtobufJSON | null;
		inputAudio: string;
	}
}
/**
 * Message implementation for ondewo.nlu.DetectIntentResponse
 */
export declare class DetectIntentResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DetectIntentResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DetectIntentResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DetectIntentResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DetectIntentResponse, _writer: BinaryWriter): void;
	private _responseId;
	private _queryResult?;
	private _webhookStatus?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectIntentResponse.AsObject>);
	get responseId(): string;
	set responseId(value: string);
	get queryResult(): QueryResult | undefined;
	set queryResult(value: QueryResult | undefined);
	get webhookStatus(): googleRpc011.Status | undefined;
	set webhookStatus(value: googleRpc011.Status | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DetectIntentResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DetectIntentResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DetectIntentResponse.AsProtobufJSON;
}
export declare module DetectIntentResponse {
	/**
	 * Standard JavaScript object representation for DetectIntentResponse
	 */
	interface AsObject {
		responseId: string;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: googleRpc011.Status.AsObject;
	}
	/**
	 * Protobuf JSON representation for DetectIntentResponse
	 */
	interface AsProtobufJSON {
		responseId: string;
		queryResult: QueryResult.AsProtobufJSON | null;
		webhookStatus: googleRpc011.Status.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.QueryParameters
 */
export declare class QueryParameters implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): QueryParameters;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: QueryParameters): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: QueryParameters, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: QueryParameters, _writer: BinaryWriter): void;
	private _timeZone;
	private _geoLocation?;
	private _contexts?;
	private _resetContexts;
	private _payload?;
	private _labels;
	private _platforms;
	private _accountId;
	private _propertyId;
	private _datastreamId;
	private _originId;
	private _identifiedUserId;
	private _transcriptions?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryParameters to deeply clone from
	 */
	constructor(_value?: RecursivePartial<QueryParameters.AsObject>);
	get timeZone(): string;
	set timeZone(value: string);
	get geoLocation(): googleType012.LatLng | undefined;
	set geoLocation(value: googleType012.LatLng | undefined);
	get contexts(): ondewoNlu007.Context[] | undefined;
	set contexts(value: ondewoNlu007.Context[] | undefined);
	get resetContexts(): boolean;
	set resetContexts(value: boolean);
	get payload(): googleProtobuf010.Struct | undefined;
	set payload(value: googleProtobuf010.Struct | undefined);
	get labels(): string[];
	set labels(value: string[]);
	get platforms(): ondewoNlu013.Intent.Message.Platform[];
	set platforms(value: ondewoNlu013.Intent.Message.Platform[]);
	get accountId(): string;
	set accountId(value: string);
	get propertyId(): string;
	set propertyId(value: string);
	get datastreamId(): string;
	set datastreamId(value: string);
	get originId(): string;
	set originId(value: string);
	get identifiedUserId(): string;
	set identifiedUserId(value: string);
	get transcriptions(): S2tTranscription[] | undefined;
	set transcriptions(value: S2tTranscription[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): QueryParameters.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): QueryParameters.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): QueryParameters.AsProtobufJSON;
}
export declare module QueryParameters {
	/**
	 * Standard JavaScript object representation for QueryParameters
	 */
	interface AsObject {
		timeZone: string;
		geoLocation?: googleType012.LatLng.AsObject;
		contexts?: ondewoNlu007.Context.AsObject[];
		resetContexts: boolean;
		payload?: googleProtobuf010.Struct.AsObject;
		labels: string[];
		platforms: ondewoNlu013.Intent.Message.Platform[];
		accountId: string;
		propertyId: string;
		datastreamId: string;
		originId: string;
		identifiedUserId: string;
		transcriptions?: S2tTranscription.AsObject[];
	}
	/**
	 * Protobuf JSON representation for QueryParameters
	 */
	interface AsProtobufJSON {
		timeZone: string;
		geoLocation: googleType012.LatLng.AsProtobufJSON | null;
		contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		resetContexts: boolean;
		payload: googleProtobuf010.Struct.AsProtobufJSON | null;
		labels: string[];
		platforms: string[];
		accountId: string;
		propertyId: string;
		datastreamId: string;
		originId: string;
		identifiedUserId: string;
		transcriptions: S2tTranscription.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.S2tTranscription
 */
export declare class S2tTranscription implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): S2tTranscription;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: S2tTranscription): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: S2tTranscription, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: S2tTranscription, _writer: BinaryWriter): void;
	private _name;
	private _text;
	private _score;
	private _languageCode;
	private _audioResourceName;
	private _pipelineId;
	private _durationInS;
	private _transcriptionType;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2tTranscription to deeply clone from
	 */
	constructor(_value?: RecursivePartial<S2tTranscription.AsObject>);
	get name(): string;
	set name(value: string);
	get text(): string;
	set text(value: string);
	get score(): number;
	set score(value: number);
	get languageCode(): string;
	set languageCode(value: string);
	get audioResourceName(): string;
	set audioResourceName(value: string);
	get pipelineId(): string;
	set pipelineId(value: string);
	get durationInS(): number;
	set durationInS(value: number);
	get transcriptionType(): TranscriptionType;
	set transcriptionType(value: TranscriptionType);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): S2tTranscription.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): S2tTranscription.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): S2tTranscription.AsProtobufJSON;
}
export declare module S2tTranscription {
	/**
	 * Standard JavaScript object representation for S2tTranscription
	 */
	interface AsObject {
		name: string;
		text: string;
		score: number;
		languageCode: string;
		audioResourceName: string;
		pipelineId: string;
		durationInS: number;
		transcriptionType: TranscriptionType;
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for S2tTranscription
	 */
	interface AsProtobufJSON {
		name: string;
		text: string;
		score: number;
		languageCode: string;
		audioResourceName: string;
		pipelineId: string;
		durationInS: number;
		transcriptionType: string;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
}
/**
 * Message implementation for ondewo.nlu.QueryInput
 */
export declare class QueryInput implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): QueryInput;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: QueryInput): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: QueryInput, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: QueryInput, _writer: BinaryWriter): void;
	private _audioConfig?;
	private _text?;
	private _event?;
	private _input;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryInput to deeply clone from
	 */
	constructor(_value?: RecursivePartial<QueryInput.AsObject>);
	get audioConfig(): InputAudioConfig | undefined;
	set audioConfig(value: InputAudioConfig | undefined);
	get text(): TextInput | undefined;
	set text(value: TextInput | undefined);
	get event(): EventInput | undefined;
	set event(value: EventInput | undefined);
	get input(): QueryInput.InputCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): QueryInput.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): QueryInput.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): QueryInput.AsProtobufJSON;
}
export declare module QueryInput {
	/**
	 * Standard JavaScript object representation for QueryInput
	 */
	interface AsObject {
		audioConfig?: InputAudioConfig.AsObject;
		text?: TextInput.AsObject;
		event?: EventInput.AsObject;
	}
	/**
	 * Protobuf JSON representation for QueryInput
	 */
	interface AsProtobufJSON {
		audioConfig: InputAudioConfig.AsProtobufJSON | null;
		text: TextInput.AsProtobufJSON | null;
		event: EventInput.AsProtobufJSON | null;
	}
	enum InputCase {
		none = 0,
		audioConfig = 1,
		text = 2,
		event = 3
	}
}
/**
 * Message implementation for ondewo.nlu.QueryResult
 */
export declare class QueryResult implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): QueryResult;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: QueryResult): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: QueryResult, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: QueryResult, _writer: BinaryWriter): void;
	private _queryText;
	private _speechRecognitionConfidence;
	private _action;
	private _parameters?;
	private _allRequiredParamsPresent;
	private _fulfillmentText;
	private _fulfillmentMessages?;
	private _webhookSource;
	private _webhookPayload?;
	private _outputContexts?;
	private _intent?;
	private _intentDetectionConfidence;
	private _queryTextOriginal;
	private _diagnosticInfo?;
	private _languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryResult to deeply clone from
	 */
	constructor(_value?: RecursivePartial<QueryResult.AsObject>);
	get queryText(): string;
	set queryText(value: string);
	get speechRecognitionConfidence(): number;
	set speechRecognitionConfidence(value: number);
	get action(): string;
	set action(value: string);
	get parameters(): googleProtobuf010.Struct | undefined;
	set parameters(value: googleProtobuf010.Struct | undefined);
	get allRequiredParamsPresent(): boolean;
	set allRequiredParamsPresent(value: boolean);
	get fulfillmentText(): string;
	set fulfillmentText(value: string);
	get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined);
	get webhookSource(): string;
	set webhookSource(value: string);
	get webhookPayload(): googleProtobuf010.Struct | undefined;
	set webhookPayload(value: googleProtobuf010.Struct | undefined);
	get outputContexts(): ondewoNlu007.Context[] | undefined;
	set outputContexts(value: ondewoNlu007.Context[] | undefined);
	get intent(): ondewoNlu013.Intent | undefined;
	set intent(value: ondewoNlu013.Intent | undefined);
	get intentDetectionConfidence(): number;
	set intentDetectionConfidence(value: number);
	get queryTextOriginal(): string;
	set queryTextOriginal(value: string);
	get diagnosticInfo(): googleProtobuf010.Struct | undefined;
	set diagnosticInfo(value: googleProtobuf010.Struct | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): QueryResult.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): QueryResult.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): QueryResult.AsProtobufJSON;
}
export declare module QueryResult {
	/**
	 * Standard JavaScript object representation for QueryResult
	 */
	interface AsObject {
		queryText: string;
		speechRecognitionConfidence: number;
		action: string;
		parameters?: googleProtobuf010.Struct.AsObject;
		allRequiredParamsPresent: boolean;
		fulfillmentText: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
		webhookSource: string;
		webhookPayload?: googleProtobuf010.Struct.AsObject;
		outputContexts?: ondewoNlu007.Context.AsObject[];
		intent?: ondewoNlu013.Intent.AsObject;
		intentDetectionConfidence: number;
		queryTextOriginal: string;
		diagnosticInfo?: googleProtobuf010.Struct.AsObject;
		languageCode: string;
	}
	/**
	 * Protobuf JSON representation for QueryResult
	 */
	interface AsProtobufJSON {
		queryText: string;
		speechRecognitionConfidence: number;
		action: string;
		parameters: googleProtobuf010.Struct.AsProtobufJSON | null;
		allRequiredParamsPresent: boolean;
		fulfillmentText: string;
		fulfillmentMessages: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
		webhookSource: string;
		webhookPayload: googleProtobuf010.Struct.AsProtobufJSON | null;
		outputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		intent: ondewoNlu013.Intent.AsProtobufJSON | null;
		intentDetectionConfidence: number;
		queryTextOriginal: string;
		diagnosticInfo: googleProtobuf010.Struct.AsProtobufJSON | null;
		languageCode: string;
	}
}
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentRequest
 */
export declare class StreamingDetectIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): StreamingDetectIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: StreamingDetectIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: StreamingDetectIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: StreamingDetectIntentRequest, _writer: BinaryWriter): void;
	private _session;
	private _queryParams?;
	private _queryInput?;
	private _singleUtterance;
	private _inputAudio;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingDetectIntentRequest.AsObject>);
	get session(): string;
	set session(value: string);
	get queryParams(): QueryParameters | undefined;
	set queryParams(value: QueryParameters | undefined);
	get queryInput(): QueryInput | undefined;
	set queryInput(value: QueryInput | undefined);
	get singleUtterance(): boolean;
	set singleUtterance(value: boolean);
	get inputAudio(): Uint8Array;
	set inputAudio(value: Uint8Array);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): StreamingDetectIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): StreamingDetectIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): StreamingDetectIntentRequest.AsProtobufJSON;
}
export declare module StreamingDetectIntentRequest {
	/**
	 * Standard JavaScript object representation for StreamingDetectIntentRequest
	 */
	interface AsObject {
		session: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		singleUtterance: boolean;
		inputAudio: Uint8Array;
	}
	/**
	 * Protobuf JSON representation for StreamingDetectIntentRequest
	 */
	interface AsProtobufJSON {
		session: string;
		queryParams: QueryParameters.AsProtobufJSON | null;
		queryInput: QueryInput.AsProtobufJSON | null;
		singleUtterance: boolean;
		inputAudio: string;
	}
}
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentResponse
 */
export declare class StreamingDetectIntentResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): StreamingDetectIntentResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: StreamingDetectIntentResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: StreamingDetectIntentResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: StreamingDetectIntentResponse, _writer: BinaryWriter): void;
	private _responseId;
	private _recognitionResult?;
	private _queryResult?;
	private _webhookStatus?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingDetectIntentResponse.AsObject>);
	get responseId(): string;
	set responseId(value: string);
	get recognitionResult(): StreamingRecognitionResult | undefined;
	set recognitionResult(value: StreamingRecognitionResult | undefined);
	get queryResult(): QueryResult | undefined;
	set queryResult(value: QueryResult | undefined);
	get webhookStatus(): googleRpc011.Status | undefined;
	set webhookStatus(value: googleRpc011.Status | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): StreamingDetectIntentResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): StreamingDetectIntentResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): StreamingDetectIntentResponse.AsProtobufJSON;
}
export declare module StreamingDetectIntentResponse {
	/**
	 * Standard JavaScript object representation for StreamingDetectIntentResponse
	 */
	interface AsObject {
		responseId: string;
		recognitionResult?: StreamingRecognitionResult.AsObject;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: googleRpc011.Status.AsObject;
	}
	/**
	 * Protobuf JSON representation for StreamingDetectIntentResponse
	 */
	interface AsProtobufJSON {
		responseId: string;
		recognitionResult: StreamingRecognitionResult.AsProtobufJSON | null;
		queryResult: QueryResult.AsProtobufJSON | null;
		webhookStatus: googleRpc011.Status.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.StreamingRecognitionResult
 */
export declare class StreamingRecognitionResult implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): StreamingRecognitionResult;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: StreamingRecognitionResult): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: StreamingRecognitionResult, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: StreamingRecognitionResult, _writer: BinaryWriter): void;
	private _messageType;
	private _transcript;
	private _isFinal;
	private _confidence;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingRecognitionResult to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingRecognitionResult.AsObject>);
	get messageType(): StreamingRecognitionResult.MessageType;
	set messageType(value: StreamingRecognitionResult.MessageType);
	get transcript(): string;
	set transcript(value: string);
	get isFinal(): boolean;
	set isFinal(value: boolean);
	get confidence(): number;
	set confidence(value: number);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): StreamingRecognitionResult.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): StreamingRecognitionResult.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): StreamingRecognitionResult.AsProtobufJSON;
}
export declare module StreamingRecognitionResult {
	/**
	 * Standard JavaScript object representation for StreamingRecognitionResult
	 */
	interface AsObject {
		messageType: StreamingRecognitionResult.MessageType;
		transcript: string;
		isFinal: boolean;
		confidence: number;
	}
	/**
	 * Protobuf JSON representation for StreamingRecognitionResult
	 */
	interface AsProtobufJSON {
		messageType: string;
		transcript: string;
		isFinal: boolean;
		confidence: number;
	}
	enum MessageType {
		MESSAGE_TYPE_UNSPECIFIED = 0,
		TRANSCRIPT = 1,
		END_OF_SINGLE_UTTERANCE = 2
	}
}
/**
 * Message implementation for ondewo.nlu.InputAudioConfig
 */
export declare class InputAudioConfig implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): InputAudioConfig;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: InputAudioConfig): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: InputAudioConfig, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: InputAudioConfig, _writer: BinaryWriter): void;
	private _audioEncoding;
	private _sampleRateHertz;
	private _languageCode;
	private _phraseHints;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of InputAudioConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<InputAudioConfig.AsObject>);
	get audioEncoding(): AudioEncoding;
	set audioEncoding(value: AudioEncoding);
	get sampleRateHertz(): number;
	set sampleRateHertz(value: number);
	get languageCode(): string;
	set languageCode(value: string);
	get phraseHints(): string[];
	set phraseHints(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): InputAudioConfig.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): InputAudioConfig.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): InputAudioConfig.AsProtobufJSON;
}
export declare module InputAudioConfig {
	/**
	 * Standard JavaScript object representation for InputAudioConfig
	 */
	interface AsObject {
		audioEncoding: AudioEncoding;
		sampleRateHertz: number;
		languageCode: string;
		phraseHints: string[];
	}
	/**
	 * Protobuf JSON representation for InputAudioConfig
	 */
	interface AsProtobufJSON {
		audioEncoding: string;
		sampleRateHertz: number;
		languageCode: string;
		phraseHints: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.TextInput
 */
export declare class TextInput implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): TextInput;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: TextInput): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: TextInput, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: TextInput, _writer: BinaryWriter): void;
	private _text;
	private _languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TextInput to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TextInput.AsObject>);
	get text(): string;
	set text(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): TextInput.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): TextInput.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): TextInput.AsProtobufJSON;
}
export declare module TextInput {
	/**
	 * Standard JavaScript object representation for TextInput
	 */
	interface AsObject {
		text: string;
		languageCode: string;
	}
	/**
	 * Protobuf JSON representation for TextInput
	 */
	interface AsProtobufJSON {
		text: string;
		languageCode: string;
	}
}
/**
 * Message implementation for ondewo.nlu.EventInput
 */
export declare class EventInput implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): EventInput;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: EventInput): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: EventInput, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: EventInput, _writer: BinaryWriter): void;
	private _name;
	private _parameters?;
	private _languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of EventInput to deeply clone from
	 */
	constructor(_value?: RecursivePartial<EventInput.AsObject>);
	get name(): string;
	set name(value: string);
	get parameters(): googleProtobuf010.Struct | undefined;
	set parameters(value: googleProtobuf010.Struct | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): EventInput.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): EventInput.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): EventInput.AsProtobufJSON;
}
export declare module EventInput {
	/**
	 * Standard JavaScript object representation for EventInput
	 */
	interface AsObject {
		name: string;
		parameters?: googleProtobuf010.Struct.AsObject;
		languageCode: string;
	}
	/**
	 * Protobuf JSON representation for EventInput
	 */
	interface AsProtobufJSON {
		name: string;
		parameters: googleProtobuf010.Struct.AsProtobufJSON | null;
		languageCode: string;
	}
}
/**
 * Message implementation for ondewo.nlu.Session
 */
export declare class Session implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Session;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Session): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Session, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Session, _writer: BinaryWriter): void;
	private _name;
	private _sessionSteps?;
	private _sessionInfo?;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Session to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Session.AsObject>);
	get name(): string;
	set name(value: string);
	get sessionSteps(): SessionStep[] | undefined;
	set sessionSteps(value: SessionStep[] | undefined);
	get sessionInfo(): SessionInfo | undefined;
	set sessionInfo(value: SessionInfo | undefined);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Session.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Session.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Session.AsProtobufJSON;
}
export declare module Session {
	/**
	 * Standard JavaScript object representation for Session
	 */
	interface AsObject {
		name: string;
		sessionSteps?: SessionStep.AsObject[];
		sessionInfo?: SessionInfo.AsObject;
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for Session
	 */
	interface AsProtobufJSON {
		name: string;
		sessionSteps: SessionStep.AsProtobufJSON[] | null;
		sessionInfo: SessionInfo.AsProtobufJSON | null;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
	enum View {
		VIEW_UNSPECIFIED = 0,
		VIEW_FULL = 1,
		VIEW_SPARSE = 2
	}
}
/**
 * Message implementation for ondewo.nlu.SessionStep
 */
export declare class SessionStep implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionStep;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionStep): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionStep, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionStep, _writer: BinaryWriter): void;
	private _name;
	private _detectIntentRequest?;
	private _detectIntentResponse?;
	private _contexts?;
	private _timestamp?;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	private _audioFileResources?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionStep to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionStep.AsObject>);
	get name(): string;
	set name(value: string);
	get detectIntentRequest(): DetectIntentRequest | undefined;
	set detectIntentRequest(value: DetectIntentRequest | undefined);
	get detectIntentResponse(): DetectIntentResponse | undefined;
	set detectIntentResponse(value: DetectIntentResponse | undefined);
	get contexts(): ondewoNlu007.Context[] | undefined;
	set contexts(value: ondewoNlu007.Context[] | undefined);
	get timestamp(): googleProtobuf004.Timestamp | undefined;
	set timestamp(value: googleProtobuf004.Timestamp | undefined);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	get audioFileResources(): AudioFileResource[] | undefined;
	set audioFileResources(value: AudioFileResource[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionStep.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionStep.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionStep.AsProtobufJSON;
}
export declare module SessionStep {
	/**
	 * Standard JavaScript object representation for SessionStep
	 */
	interface AsObject {
		name: string;
		detectIntentRequest?: DetectIntentRequest.AsObject;
		detectIntentResponse?: DetectIntentResponse.AsObject;
		contexts?: ondewoNlu007.Context.AsObject[];
		timestamp?: googleProtobuf004.Timestamp.AsObject;
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
		audioFileResources?: AudioFileResource.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionStep
	 */
	interface AsProtobufJSON {
		name: string;
		detectIntentRequest: DetectIntentRequest.AsProtobufJSON | null;
		detectIntentResponse: DetectIntentResponse.AsProtobufJSON | null;
		contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		timestamp: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
		audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.TrackSessionStepRequest
 */
export declare class TrackSessionStepRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): TrackSessionStepRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: TrackSessionStepRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: TrackSessionStepRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: TrackSessionStepRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _sessionStep?;
	private _sessionView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrackSessionStepRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TrackSessionStepRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get sessionStep(): SessionStep | undefined;
	set sessionStep(value: SessionStep | undefined);
	get sessionView(): Session.View;
	set sessionView(value: Session.View);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): TrackSessionStepRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): TrackSessionStepRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): TrackSessionStepRequest.AsProtobufJSON;
}
export declare module TrackSessionStepRequest {
	/**
	 * Standard JavaScript object representation for TrackSessionStepRequest
	 */
	interface AsObject {
		sessionId: string;
		sessionStep?: SessionStep.AsObject;
		sessionView: Session.View;
	}
	/**
	 * Protobuf JSON representation for TrackSessionStepRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		sessionStep: SessionStep.AsProtobufJSON | null;
		sessionView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionsRequest
 */
export declare class ListSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionView;
	private _pageToken;
	private _sessionFilter?;
	private _fieldMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionView(): Session.View;
	set sessionView(value: Session.View);
	get pageToken(): string;
	set pageToken(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	get fieldMask(): googleProtobuf003.FieldMask | undefined;
	set fieldMask(value: googleProtobuf003.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionsRequest.AsProtobufJSON;
}
export declare module ListSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionView: Session.View;
		pageToken: string;
		sessionFilter?: SessionFilter.AsObject;
		fieldMask?: googleProtobuf003.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionView: string;
		pageToken: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
		fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ContextFilter
 */
export declare class ContextFilter implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ContextFilter;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ContextFilter): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ContextFilter, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ContextFilter, _writer: BinaryWriter): void;
	private _contextName;
	private _key;
	private _value;
	private _operator;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ContextFilter to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ContextFilter.AsObject>);
	get contextName(): string;
	set contextName(value: string);
	get key(): string;
	set key(value: string);
	get value(): string;
	set value(value: string);
	get operator(): ComparisonOperator;
	set operator(value: ComparisonOperator);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ContextFilter.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ContextFilter.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ContextFilter.AsProtobufJSON;
}
export declare module ContextFilter {
	/**
	 * Standard JavaScript object representation for ContextFilter
	 */
	interface AsObject {
		contextName: string;
		key: string;
		value: string;
		operator: ComparisonOperator;
	}
	/**
	 * Protobuf JSON representation for ContextFilter
	 */
	interface AsProtobufJSON {
		contextName: string;
		key: string;
		value: string;
		operator: string;
	}
}
/**
 * Message implementation for ondewo.nlu.SessionFilter
 */
export declare class SessionFilter implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionFilter;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionFilter): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionFilter, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionFilter, _writer: BinaryWriter): void;
	private _languageCodes;
	private _matchedIntents?;
	private _matchedEntityTypes?;
	private _minIntentsConfidenceMin;
	private _minIntentsConfidenceMax;
	private _minEntityTypesConfidenceMin;
	private _minEntityTypesConfidenceMax;
	private _earliest;
	private _latest;
	private _minNumberTurns;
	private _maxNumberTurns;
	private _labels;
	private _userIds;
	private _intentTags;
	private _sessionIds;
	private _inputContexts?;
	private _outputContexts?;
	private _durationInSMin;
	private _durationInSMax;
	private _durationInMMin;
	private _durationInMMax;
	private _durationInMRoundedMin;
	private _durationInMRoundedMax;
	private _durationInterval15sRoundedMin;
	private _durationInterval15sRoundedMax;
	private _durationInterval30sRoundedMin;
	private _durationInterval30sRoundedMax;
	private _durationInterval45sRoundedMin;
	private _durationInterval45sRoundedMax;
	private _startedTimeSlotPerHourMin;
	private _startedTimeSlotPerHourMax;
	private _startedTimeSlotPerQuarterHourMin;
	private _startedTimeSlotPerQuarterHourMax;
	private _startedTimeSlotPerHalfHourMin;
	private _startedTimeSlotPerHalfHourMax;
	private _startedTimeSlotPerDayPhaseMin;
	private _startedTimeSlotPerDayPhaseMax;
	private _startedTimeSlotPerMinuteMin;
	private _startedTimeSlotPerMinuteMax;
	private _durationInSRoundedMin;
	private _durationInSRoundedMax;
	private _platforms;
	private _accountIds;
	private _propertyIds;
	private _datastreamIds;
	private _originIds;
	private _identifiedUserIds;
	private _durationInterval60sRoundedMin;
	private _durationInterval60sRoundedMax;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionFilter to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionFilter.AsObject>);
	get languageCodes(): string[];
	set languageCodes(value: string[]);
	get matchedIntents(): ondewoNlu013.Intent[] | undefined;
	set matchedIntents(value: ondewoNlu013.Intent[] | undefined);
	get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined;
	set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined);
	get minIntentsConfidenceMin(): number;
	set minIntentsConfidenceMin(value: number);
	get minIntentsConfidenceMax(): number;
	set minIntentsConfidenceMax(value: number);
	get minEntityTypesConfidenceMin(): number;
	set minEntityTypesConfidenceMin(value: number);
	get minEntityTypesConfidenceMax(): number;
	set minEntityTypesConfidenceMax(value: number);
	get earliest(): number;
	set earliest(value: number);
	get latest(): number;
	set latest(value: number);
	get minNumberTurns(): number;
	set minNumberTurns(value: number);
	get maxNumberTurns(): number;
	set maxNumberTurns(value: number);
	get labels(): string[];
	set labels(value: string[]);
	get userIds(): string[];
	set userIds(value: string[]);
	get intentTags(): string[];
	set intentTags(value: string[]);
	get sessionIds(): string[];
	set sessionIds(value: string[]);
	get inputContexts(): ondewoNlu007.Context[] | undefined;
	set inputContexts(value: ondewoNlu007.Context[] | undefined);
	get outputContexts(): ondewoNlu007.Context[] | undefined;
	set outputContexts(value: ondewoNlu007.Context[] | undefined);
	get durationInSMin(): number;
	set durationInSMin(value: number);
	get durationInSMax(): number;
	set durationInSMax(value: number);
	get durationInMMin(): number;
	set durationInMMin(value: number);
	get durationInMMax(): number;
	set durationInMMax(value: number);
	get durationInMRoundedMin(): number;
	set durationInMRoundedMin(value: number);
	get durationInMRoundedMax(): number;
	set durationInMRoundedMax(value: number);
	get durationInterval15sRoundedMin(): number;
	set durationInterval15sRoundedMin(value: number);
	get durationInterval15sRoundedMax(): number;
	set durationInterval15sRoundedMax(value: number);
	get durationInterval30sRoundedMin(): number;
	set durationInterval30sRoundedMin(value: number);
	get durationInterval30sRoundedMax(): number;
	set durationInterval30sRoundedMax(value: number);
	get durationInterval45sRoundedMin(): number;
	set durationInterval45sRoundedMin(value: number);
	get durationInterval45sRoundedMax(): number;
	set durationInterval45sRoundedMax(value: number);
	get startedTimeSlotPerHourMin(): string;
	set startedTimeSlotPerHourMin(value: string);
	get startedTimeSlotPerHourMax(): string;
	set startedTimeSlotPerHourMax(value: string);
	get startedTimeSlotPerQuarterHourMin(): string;
	set startedTimeSlotPerQuarterHourMin(value: string);
	get startedTimeSlotPerQuarterHourMax(): string;
	set startedTimeSlotPerQuarterHourMax(value: string);
	get startedTimeSlotPerHalfHourMin(): string;
	set startedTimeSlotPerHalfHourMin(value: string);
	get startedTimeSlotPerHalfHourMax(): string;
	set startedTimeSlotPerHalfHourMax(value: string);
	get startedTimeSlotPerDayPhaseMin(): string;
	set startedTimeSlotPerDayPhaseMin(value: string);
	get startedTimeSlotPerDayPhaseMax(): string;
	set startedTimeSlotPerDayPhaseMax(value: string);
	get startedTimeSlotPerMinuteMin(): string;
	set startedTimeSlotPerMinuteMin(value: string);
	get startedTimeSlotPerMinuteMax(): string;
	set startedTimeSlotPerMinuteMax(value: string);
	get durationInSRoundedMin(): number;
	set durationInSRoundedMin(value: number);
	get durationInSRoundedMax(): number;
	set durationInSRoundedMax(value: number);
	get platforms(): ondewoNlu013.Intent.Message.Platform[];
	set platforms(value: ondewoNlu013.Intent.Message.Platform[]);
	get accountIds(): string[];
	set accountIds(value: string[]);
	get propertyIds(): string[];
	set propertyIds(value: string[]);
	get datastreamIds(): string[];
	set datastreamIds(value: string[]);
	get originIds(): string[];
	set originIds(value: string[]);
	get identifiedUserIds(): string[];
	set identifiedUserIds(value: string[]);
	get durationInterval60sRoundedMin(): number;
	set durationInterval60sRoundedMin(value: number);
	get durationInterval60sRoundedMax(): number;
	set durationInterval60sRoundedMax(value: number);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionFilter.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionFilter.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionFilter.AsProtobufJSON;
}
export declare module SessionFilter {
	/**
	 * Standard JavaScript object representation for SessionFilter
	 */
	interface AsObject {
		languageCodes: string[];
		matchedIntents?: ondewoNlu013.Intent.AsObject[];
		matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
		minIntentsConfidenceMin: number;
		minIntentsConfidenceMax: number;
		minEntityTypesConfidenceMin: number;
		minEntityTypesConfidenceMax: number;
		earliest: number;
		latest: number;
		minNumberTurns: number;
		maxNumberTurns: number;
		labels: string[];
		userIds: string[];
		intentTags: string[];
		sessionIds: string[];
		inputContexts?: ondewoNlu007.Context.AsObject[];
		outputContexts?: ondewoNlu007.Context.AsObject[];
		durationInSMin: number;
		durationInSMax: number;
		durationInMMin: number;
		durationInMMax: number;
		durationInMRoundedMin: number;
		durationInMRoundedMax: number;
		durationInterval15sRoundedMin: number;
		durationInterval15sRoundedMax: number;
		durationInterval30sRoundedMin: number;
		durationInterval30sRoundedMax: number;
		durationInterval45sRoundedMin: number;
		durationInterval45sRoundedMax: number;
		startedTimeSlotPerHourMin: string;
		startedTimeSlotPerHourMax: string;
		startedTimeSlotPerQuarterHourMin: string;
		startedTimeSlotPerQuarterHourMax: string;
		startedTimeSlotPerHalfHourMin: string;
		startedTimeSlotPerHalfHourMax: string;
		startedTimeSlotPerDayPhaseMin: string;
		startedTimeSlotPerDayPhaseMax: string;
		startedTimeSlotPerMinuteMin: string;
		startedTimeSlotPerMinuteMax: string;
		durationInSRoundedMin: number;
		durationInSRoundedMax: number;
		platforms: ondewoNlu013.Intent.Message.Platform[];
		accountIds: string[];
		propertyIds: string[];
		datastreamIds: string[];
		originIds: string[];
		identifiedUserIds: string[];
		durationInterval60sRoundedMin: number;
		durationInterval60sRoundedMax: number;
	}
	/**
	 * Protobuf JSON representation for SessionFilter
	 */
	interface AsProtobufJSON {
		languageCodes: string[];
		matchedIntents: ondewoNlu013.Intent.AsProtobufJSON[] | null;
		matchedEntityTypes: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
		minIntentsConfidenceMin: number;
		minIntentsConfidenceMax: number;
		minEntityTypesConfidenceMin: number;
		minEntityTypesConfidenceMax: number;
		earliest: number;
		latest: number;
		minNumberTurns: number;
		maxNumberTurns: number;
		labels: string[];
		userIds: string[];
		intentTags: string[];
		sessionIds: string[];
		inputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		outputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		durationInSMin: number;
		durationInSMax: number;
		durationInMMin: number;
		durationInMMax: number;
		durationInMRoundedMin: number;
		durationInMRoundedMax: number;
		durationInterval15sRoundedMin: number;
		durationInterval15sRoundedMax: number;
		durationInterval30sRoundedMin: number;
		durationInterval30sRoundedMax: number;
		durationInterval45sRoundedMin: number;
		durationInterval45sRoundedMax: number;
		startedTimeSlotPerHourMin: string;
		startedTimeSlotPerHourMax: string;
		startedTimeSlotPerQuarterHourMin: string;
		startedTimeSlotPerQuarterHourMax: string;
		startedTimeSlotPerHalfHourMin: string;
		startedTimeSlotPerHalfHourMax: string;
		startedTimeSlotPerDayPhaseMin: string;
		startedTimeSlotPerDayPhaseMax: string;
		startedTimeSlotPerMinuteMin: string;
		startedTimeSlotPerMinuteMax: string;
		durationInSRoundedMin: number;
		durationInSRoundedMax: number;
		platforms: string[];
		accountIds: string[];
		propertyIds: string[];
		datastreamIds: string[];
		originIds: string[];
		identifiedUserIds: string[];
		durationInterval60sRoundedMin: number;
		durationInterval60sRoundedMax: number;
	}
}
/**
 * Message implementation for ondewo.nlu.SessionInfo
 */
export declare class SessionInfo implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionInfo;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionInfo): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionInfo, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionInfo, _writer: BinaryWriter): void;
	private _languageCodes;
	private _matchedIntents?;
	private _matchedEntityTypes?;
	private _minIntentsConfidence;
	private _minEntityTypesConfidence;
	private _earliest;
	private _latest;
	private _numberTurns;
	private _labels;
	private _userIds;
	private _intentTags;
	private _inputContextSteps?;
	private _outputContextSteps?;
	private _durationInS;
	private _durationInM;
	private _durationInMRounded;
	private _durationInterval15sRounded;
	private _durationInterval30sRounded;
	private _durationInterval45sRounded;
	private _startedTimeSlotPerHour;
	private _startedTimeSlotPerQuarterHour;
	private _startedTimeSlotPerHalfHour;
	private _startedTimeSlotPerDayPhase;
	private _startedTimeSlotPerMinute;
	private _durationInSRounded;
	private _platforms;
	private _accountIds;
	private _propertyIds;
	private _datastreamIds;
	private _originIds;
	private _identifiedUserIds;
	private _durationInterval60sRounded;
	private _parentComment?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionInfo to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionInfo.AsObject>);
	get languageCodes(): string[];
	set languageCodes(value: string[]);
	get matchedIntents(): ondewoNlu013.Intent[] | undefined;
	set matchedIntents(value: ondewoNlu013.Intent[] | undefined);
	get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined;
	set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined);
	get minIntentsConfidence(): number;
	set minIntentsConfidence(value: number);
	get minEntityTypesConfidence(): number;
	set minEntityTypesConfidence(value: number);
	get earliest(): number;
	set earliest(value: number);
	get latest(): number;
	set latest(value: number);
	get numberTurns(): number;
	set numberTurns(value: number);
	get labels(): string[];
	set labels(value: string[]);
	get userIds(): string[];
	set userIds(value: string[]);
	get intentTags(): string[];
	set intentTags(value: string[]);
	get inputContextSteps(): SessionInfo.ContextSteps[] | undefined;
	set inputContextSteps(value: SessionInfo.ContextSteps[] | undefined);
	get outputContextSteps(): SessionInfo.ContextSteps[] | undefined;
	set outputContextSteps(value: SessionInfo.ContextSteps[] | undefined);
	get durationInS(): number;
	set durationInS(value: number);
	get durationInM(): number;
	set durationInM(value: number);
	get durationInMRounded(): number;
	set durationInMRounded(value: number);
	get durationInterval15sRounded(): number;
	set durationInterval15sRounded(value: number);
	get durationInterval30sRounded(): number;
	set durationInterval30sRounded(value: number);
	get durationInterval45sRounded(): number;
	set durationInterval45sRounded(value: number);
	get startedTimeSlotPerHour(): string;
	set startedTimeSlotPerHour(value: string);
	get startedTimeSlotPerQuarterHour(): string;
	set startedTimeSlotPerQuarterHour(value: string);
	get startedTimeSlotPerHalfHour(): string;
	set startedTimeSlotPerHalfHour(value: string);
	get startedTimeSlotPerDayPhase(): string;
	set startedTimeSlotPerDayPhase(value: string);
	get startedTimeSlotPerMinute(): string;
	set startedTimeSlotPerMinute(value: string);
	get durationInSRounded(): number;
	set durationInSRounded(value: number);
	get platforms(): ondewoNlu013.Intent.Message.Platform[];
	set platforms(value: ondewoNlu013.Intent.Message.Platform[]);
	get accountIds(): string[];
	set accountIds(value: string[]);
	get propertyIds(): string[];
	set propertyIds(value: string[]);
	get datastreamIds(): string[];
	set datastreamIds(value: string[]);
	get originIds(): string[];
	set originIds(value: string[]);
	get identifiedUserIds(): string[];
	set identifiedUserIds(value: string[]);
	get durationInterval60sRounded(): number;
	set durationInterval60sRounded(value: number);
	get parentComment(): ondewoNlu008.Comment[] | undefined;
	set parentComment(value: ondewoNlu008.Comment[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionInfo.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionInfo.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionInfo.AsProtobufJSON;
}
export declare module SessionInfo {
	/**
	 * Standard JavaScript object representation for SessionInfo
	 */
	interface AsObject {
		languageCodes: string[];
		matchedIntents?: ondewoNlu013.Intent.AsObject[];
		matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
		minIntentsConfidence: number;
		minEntityTypesConfidence: number;
		earliest: number;
		latest: number;
		numberTurns: number;
		labels: string[];
		userIds: string[];
		intentTags: string[];
		inputContextSteps?: SessionInfo.ContextSteps.AsObject[];
		outputContextSteps?: SessionInfo.ContextSteps.AsObject[];
		durationInS: number;
		durationInM: number;
		durationInMRounded: number;
		durationInterval15sRounded: number;
		durationInterval30sRounded: number;
		durationInterval45sRounded: number;
		startedTimeSlotPerHour: string;
		startedTimeSlotPerQuarterHour: string;
		startedTimeSlotPerHalfHour: string;
		startedTimeSlotPerDayPhase: string;
		startedTimeSlotPerMinute: string;
		durationInSRounded: number;
		platforms: ondewoNlu013.Intent.Message.Platform[];
		accountIds: string[];
		propertyIds: string[];
		datastreamIds: string[];
		originIds: string[];
		identifiedUserIds: string[];
		durationInterval60sRounded: number;
		parentComment?: ondewoNlu008.Comment.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionInfo
	 */
	interface AsProtobufJSON {
		languageCodes: string[];
		matchedIntents: ondewoNlu013.Intent.AsProtobufJSON[] | null;
		matchedEntityTypes: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
		minIntentsConfidence: number;
		minEntityTypesConfidence: number;
		earliest: number;
		latest: number;
		numberTurns: number;
		labels: string[];
		userIds: string[];
		intentTags: string[];
		inputContextSteps: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
		outputContextSteps: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
		durationInS: number;
		durationInM: number;
		durationInMRounded: number;
		durationInterval15sRounded: number;
		durationInterval30sRounded: number;
		durationInterval45sRounded: number;
		startedTimeSlotPerHour: string;
		startedTimeSlotPerQuarterHour: string;
		startedTimeSlotPerHalfHour: string;
		startedTimeSlotPerDayPhase: string;
		startedTimeSlotPerMinute: string;
		durationInSRounded: number;
		platforms: string[];
		accountIds: string[];
		propertyIds: string[];
		datastreamIds: string[];
		originIds: string[];
		identifiedUserIds: string[];
		durationInterval60sRounded: number;
		parentComment: ondewoNlu008.Comment.AsProtobufJSON[] | null;
	}
	/**
	 * Message implementation for ondewo.nlu.SessionInfo.ContextSteps
	 */
	class ContextSteps implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): ContextSteps;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: ContextSteps): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: ContextSteps, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: ContextSteps, _writer: BinaryWriter): void;
		private _contexts?;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ContextSteps to deeply clone from
		 */
		constructor(_value?: RecursivePartial<ContextSteps.AsObject>);
		get contexts(): ondewoNlu007.Context[] | undefined;
		set contexts(value: ondewoNlu007.Context[] | undefined);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): ContextSteps.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): ContextSteps.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): ContextSteps.AsProtobufJSON;
	}
	module ContextSteps {
		/**
		 * Standard JavaScript object representation for ContextSteps
		 */
		interface AsObject {
			contexts?: ondewoNlu007.Context.AsObject[];
		}
		/**
		 * Protobuf JSON representation for ContextSteps
		 */
		interface AsProtobufJSON {
			contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionsResponse
 */
export declare class ListSessionsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionsResponse, _writer: BinaryWriter): void;
	private _sessions?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionsResponse.AsObject>);
	get sessions(): Session[] | undefined;
	set sessions(value: Session[] | undefined);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionsResponse.AsProtobufJSON;
}
export declare module ListSessionsResponse {
	/**
	 * Standard JavaScript object representation for ListSessionsResponse
	 */
	interface AsObject {
		sessions?: Session.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionsResponse
	 */
	interface AsProtobufJSON {
		sessions: Session.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetSessionRequest
 */
export declare class GetSessionRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetSessionRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetSessionRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetSessionRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetSessionRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _sessionView;
	private _fieldMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSessionRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get sessionView(): Session.View;
	set sessionView(value: Session.View);
	get fieldMask(): googleProtobuf003.FieldMask | undefined;
	set fieldMask(value: googleProtobuf003.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetSessionRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetSessionRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionRequest.AsProtobufJSON;
}
export declare module GetSessionRequest {
	/**
	 * Standard JavaScript object representation for GetSessionRequest
	 */
	interface AsObject {
		sessionId: string;
		sessionView: Session.View;
		fieldMask?: googleProtobuf003.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for GetSessionRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		sessionView: string;
		fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.CreateSessionRequest
 */
export declare class CreateSessionRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateSessionRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateSessionRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateSessionRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateSessionRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionUuid;
	private _labels;
	private _contexts?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSessionRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionUuid(): string;
	set sessionUuid(value: string);
	get labels(): string[];
	set labels(value: string[]);
	get contexts(): ondewoNlu007.Context[] | undefined;
	set contexts(value: ondewoNlu007.Context[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateSessionRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateSessionRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateSessionRequest.AsProtobufJSON;
}
export declare module CreateSessionRequest {
	/**
	 * Standard JavaScript object representation for CreateSessionRequest
	 */
	interface AsObject {
		parent: string;
		sessionUuid: string;
		labels: string[];
		contexts?: ondewoNlu007.Context.AsObject[];
	}
	/**
	 * Protobuf JSON representation for CreateSessionRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionUuid: string;
		labels: string[];
		contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteSessionRequest
 */
export declare class DeleteSessionRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteSessionRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteSessionRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteSessionRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteSessionRequest, _writer: BinaryWriter): void;
	private _sessionId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSessionRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteSessionRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteSessionRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteSessionRequest.AsProtobufJSON;
}
export declare module DeleteSessionRequest {
	/**
	 * Standard JavaScript object representation for DeleteSessionRequest
	 */
	interface AsObject {
		sessionId: string;
	}
	/**
	 * Protobuf JSON representation for DeleteSessionRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
	}
}
/**
 * Message implementation for ondewo.nlu.CreateSessionReviewRequest
 */
export declare class CreateSessionReviewRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateSessionReviewRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateSessionReviewRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateSessionReviewRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateSessionReviewRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _parentReviewId;
	private _sessionReview?;
	private _sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSessionReviewRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get parentReviewId(): string;
	set parentReviewId(value: string);
	get sessionReview(): SessionReview | undefined;
	set sessionReview(value: SessionReview | undefined);
	get sessionReviewView(): SessionReview.View;
	set sessionReviewView(value: SessionReview.View);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateSessionReviewRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateSessionReviewRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateSessionReviewRequest.AsProtobufJSON;
}
export declare module CreateSessionReviewRequest {
	/**
	 * Standard JavaScript object representation for CreateSessionReviewRequest
	 */
	interface AsObject {
		sessionId: string;
		parentReviewId: string;
		sessionReview?: SessionReview.AsObject;
		sessionReviewView: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for CreateSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		parentReviewId: string;
		sessionReview: SessionReview.AsProtobufJSON | null;
		sessionReviewView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.SessionReview
 */
export declare class SessionReview implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionReview;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionReview): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionReview, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionReview, _writer: BinaryWriter): void;
	private _name;
	private _sessionReviewSteps?;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReview to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionReview.AsObject>);
	get name(): string;
	set name(value: string);
	get sessionReviewSteps(): SessionReviewStep[] | undefined;
	set sessionReviewSteps(value: SessionReviewStep[] | undefined);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionReview.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionReview.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionReview.AsProtobufJSON;
}
export declare module SessionReview {
	/**
	 * Standard JavaScript object representation for SessionReview
	 */
	interface AsObject {
		name: string;
		sessionReviewSteps?: SessionReviewStep.AsObject[];
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for SessionReview
	 */
	interface AsProtobufJSON {
		name: string;
		sessionReviewSteps: SessionReviewStep.AsProtobufJSON[] | null;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
	enum View {
		VIEW_UNSPECIFIED = 0,
		VIEW_FULL = 1,
		VIEW_SPARSE = 2
	}
}
/**
 * Message implementation for ondewo.nlu.SessionReviewStep
 */
export declare class SessionReviewStep implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionReviewStep;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionReviewStep): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionReviewStep, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionReviewStep, _writer: BinaryWriter): void;
	private _name;
	private _annotatedUsersays?;
	private _languageCode;
	private _detectedIntents?;
	private _contexts?;
	private _contextsOut?;
	private _queryTextOriginal;
	private _platforms;
	private _timestamp?;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	private _audioFileResources?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReviewStep to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionReviewStep.AsObject>);
	get name(): string;
	set name(value: string);
	get annotatedUsersays(): ondewoNlu013.Intent.TrainingPhrase | undefined;
	set annotatedUsersays(value: ondewoNlu013.Intent.TrainingPhrase | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	get detectedIntents(): DetectedIntent[] | undefined;
	set detectedIntents(value: DetectedIntent[] | undefined);
	get contexts(): ondewoNlu007.Context[] | undefined;
	set contexts(value: ondewoNlu007.Context[] | undefined);
	get contextsOut(): ondewoNlu007.Context[] | undefined;
	set contextsOut(value: ondewoNlu007.Context[] | undefined);
	get queryTextOriginal(): string;
	set queryTextOriginal(value: string);
	get platforms(): ondewoNlu013.Intent.Message.Platform[];
	set platforms(value: ondewoNlu013.Intent.Message.Platform[]);
	get timestamp(): googleProtobuf004.Timestamp | undefined;
	set timestamp(value: googleProtobuf004.Timestamp | undefined);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	get audioFileResources(): AudioFileResource[] | undefined;
	set audioFileResources(value: AudioFileResource[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionReviewStep.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionReviewStep.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionReviewStep.AsProtobufJSON;
}
export declare module SessionReviewStep {
	/**
	 * Standard JavaScript object representation for SessionReviewStep
	 */
	interface AsObject {
		name: string;
		annotatedUsersays?: ondewoNlu013.Intent.TrainingPhrase.AsObject;
		languageCode: string;
		detectedIntents?: DetectedIntent.AsObject[];
		contexts?: ondewoNlu007.Context.AsObject[];
		contextsOut?: ondewoNlu007.Context.AsObject[];
		queryTextOriginal: string;
		platforms: ondewoNlu013.Intent.Message.Platform[];
		timestamp?: googleProtobuf004.Timestamp.AsObject;
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
		audioFileResources?: AudioFileResource.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionReviewStep
	 */
	interface AsProtobufJSON {
		name: string;
		annotatedUsersays: ondewoNlu013.Intent.TrainingPhrase.AsProtobufJSON | null;
		languageCode: string;
		detectedIntents: DetectedIntent.AsProtobufJSON[] | null;
		contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
		contextsOut: ondewoNlu007.Context.AsProtobufJSON[] | null;
		queryTextOriginal: string;
		platforms: string[];
		timestamp: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
		audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.DetectedIntent
 */
export declare class DetectedIntent implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DetectedIntent;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DetectedIntent): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DetectedIntent, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DetectedIntent, _writer: BinaryWriter): void;
	private _intent?;
	private _score;
	private _algorithm;
	private _fulfillmentMessages?;
	private _requiredParamMissing;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectedIntent to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectedIntent.AsObject>);
	get intent(): ondewoNlu013.Intent | undefined;
	set intent(value: ondewoNlu013.Intent | undefined);
	get score(): number;
	set score(value: number);
	get algorithm(): string;
	set algorithm(value: string);
	get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined);
	get requiredParamMissing(): boolean;
	set requiredParamMissing(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DetectedIntent.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DetectedIntent.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DetectedIntent.AsProtobufJSON;
}
export declare module DetectedIntent {
	/**
	 * Standard JavaScript object representation for DetectedIntent
	 */
	interface AsObject {
		intent?: ondewoNlu013.Intent.AsObject;
		score: number;
		algorithm: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
		requiredParamMissing: boolean;
	}
	/**
	 * Protobuf JSON representation for DetectedIntent
	 */
	interface AsProtobufJSON {
		intent: ondewoNlu013.Intent.AsProtobufJSON | null;
		score: number;
		algorithm: string;
		fulfillmentMessages: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
		requiredParamMissing: boolean;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsRequest
 */
export declare class ListSessionLabelsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionLabelsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionLabelsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionLabelsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionLabelsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionLabelsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionLabelsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionLabelsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionLabelsRequest.AsProtobufJSON;
}
export declare module ListSessionLabelsRequest {
	/**
	 * Standard JavaScript object representation for ListSessionLabelsRequest
	 */
	interface AsObject {
		sessionId: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsOfAllSessionsRequest
 */
export declare class ListSessionLabelsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionLabelsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionLabelsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionLabelsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionLabelsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionLabelsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionLabelsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionLabelsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionLabelsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListSessionLabelsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListSessionLabelsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListSessionLabelsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsResponse
 */
export declare class ListSessionLabelsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionLabelsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionLabelsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionLabelsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionLabelsResponse, _writer: BinaryWriter): void;
	private _labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionLabelsResponse.AsObject>);
	get labels(): string[];
	set labels(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionLabelsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionLabelsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionLabelsResponse.AsProtobufJSON;
}
export declare module ListSessionLabelsResponse {
	/**
	 * Standard JavaScript object representation for ListSessionLabelsResponse
	 */
	interface AsObject {
		labels: string[];
	}
	/**
	 * Protobuf JSON representation for ListSessionLabelsResponse
	 */
	interface AsProtobufJSON {
		labels: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListLanguageCodesOfAllSessionsRequest
 */
export declare class ListLanguageCodesOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListLanguageCodesOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListLanguageCodesOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListLanguageCodesOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListLanguageCodesOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListLanguageCodesOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListLanguageCodesOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListLanguageCodesOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListLanguageCodesOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListLanguageCodesOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListLanguageCodesOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListLanguageCodesOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListLanguageCodesOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListLanguageCodesResponse
 */
export declare class ListLanguageCodesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListLanguageCodesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListLanguageCodesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListLanguageCodesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListLanguageCodesResponse, _writer: BinaryWriter): void;
	private _languageCodes;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListLanguageCodesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListLanguageCodesResponse.AsObject>);
	get languageCodes(): string[];
	set languageCodes(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListLanguageCodesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListLanguageCodesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListLanguageCodesResponse.AsProtobufJSON;
}
export declare module ListLanguageCodesResponse {
	/**
	 * Standard JavaScript object representation for ListLanguageCodesResponse
	 */
	interface AsObject {
		languageCodes: string[];
	}
	/**
	 * Protobuf JSON representation for ListLanguageCodesResponse
	 */
	interface AsProtobufJSON {
		languageCodes: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest
 */
export declare class ListMatchedIntentsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListMatchedIntentsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListMatchedIntentsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListMatchedIntentsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListMatchedIntentsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedIntentsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListMatchedIntentsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListMatchedIntentsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListMatchedIntentsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListMatchedIntentsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListMatchedIntentsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListMatchedIntentsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListMatchedIntentsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsResponse
 */
export declare class ListMatchedIntentsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListMatchedIntentsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListMatchedIntentsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListMatchedIntentsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListMatchedIntentsResponse, _writer: BinaryWriter): void;
	private _matchedIntents;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedIntentsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListMatchedIntentsResponse.AsObject>);
	get matchedIntents(): string[];
	set matchedIntents(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListMatchedIntentsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListMatchedIntentsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListMatchedIntentsResponse.AsProtobufJSON;
}
export declare module ListMatchedIntentsResponse {
	/**
	 * Standard JavaScript object representation for ListMatchedIntentsResponse
	 */
	interface AsObject {
		matchedIntents: string[];
	}
	/**
	 * Protobuf JSON representation for ListMatchedIntentsResponse
	 */
	interface AsProtobufJSON {
		matchedIntents: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest
 */
export declare class ListMatchedEntityTypesOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListMatchedEntityTypesOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListMatchedEntityTypesOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(
		_instance: ListMatchedEntityTypesOfAllSessionsRequest,
		_reader: BinaryReader
	): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListMatchedEntityTypesOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedEntityTypesOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListMatchedEntityTypesOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListMatchedEntityTypesOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListMatchedEntityTypesOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListMatchedEntityTypesOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListMatchedEntityTypesOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesResponse
 */
export declare class ListMatchedEntityTypesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListMatchedEntityTypesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListMatchedEntityTypesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListMatchedEntityTypesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListMatchedEntityTypesResponse, _writer: BinaryWriter): void;
	private _matchedEntityTypes;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedEntityTypesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListMatchedEntityTypesResponse.AsObject>);
	get matchedEntityTypes(): string[];
	set matchedEntityTypes(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListMatchedEntityTypesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListMatchedEntityTypesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListMatchedEntityTypesResponse.AsProtobufJSON;
}
export declare module ListMatchedEntityTypesResponse {
	/**
	 * Standard JavaScript object representation for ListMatchedEntityTypesResponse
	 */
	interface AsObject {
		matchedEntityTypes: string[];
	}
	/**
	 * Protobuf JSON representation for ListMatchedEntityTypesResponse
	 */
	interface AsProtobufJSON {
		matchedEntityTypes: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListUserIdsOfAllSessionsRequest
 */
export declare class ListUserIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListUserIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListUserIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListUserIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListUserIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUserIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListUserIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListUserIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListUserIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListUserIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListUserIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListUserIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListUserIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListUserIdsResponse
 */
export declare class ListUserIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListUserIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListUserIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListUserIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListUserIdsResponse, _writer: BinaryWriter): void;
	private _userIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUserIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListUserIdsResponse.AsObject>);
	get userIds(): string[];
	set userIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListUserIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListUserIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListUserIdsResponse.AsProtobufJSON;
}
export declare module ListUserIdsResponse {
	/**
	 * Standard JavaScript object representation for ListUserIdsResponse
	 */
	interface AsObject {
		userIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListUserIdsResponse
	 */
	interface AsProtobufJSON {
		userIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest
 */
export declare class ListIdentifiedUserIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListIdentifiedUserIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListIdentifiedUserIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListIdentifiedUserIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListIdentifiedUserIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIdentifiedUserIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListIdentifiedUserIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListIdentifiedUserIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListIdentifiedUserIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListIdentifiedUserIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListIdentifiedUserIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsResponse
 */
export declare class ListIdentifiedUserIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListIdentifiedUserIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListIdentifiedUserIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListIdentifiedUserIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListIdentifiedUserIdsResponse, _writer: BinaryWriter): void;
	private _identifiedUserIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIdentifiedUserIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListIdentifiedUserIdsResponse.AsObject>);
	get identifiedUserIds(): string[];
	set identifiedUserIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListIdentifiedUserIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListIdentifiedUserIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListIdentifiedUserIdsResponse.AsProtobufJSON;
}
export declare module ListIdentifiedUserIdsResponse {
	/**
	 * Standard JavaScript object representation for ListIdentifiedUserIdsResponse
	 */
	interface AsObject {
		identifiedUserIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListIdentifiedUserIdsResponse
	 */
	interface AsProtobufJSON {
		identifiedUserIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListTagsOfAllSessionsRequest
 */
export declare class ListTagsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTagsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTagsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListTagsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListTagsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTagsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTagsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListTagsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTagsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTagsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListTagsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListTagsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListTagsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListTagsResponse
 */
export declare class ListTagsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTagsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTagsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListTagsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListTagsResponse, _writer: BinaryWriter): void;
	private _tags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTagsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTagsResponse.AsObject>);
	get tags(): string[];
	set tags(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListTagsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTagsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTagsResponse.AsProtobufJSON;
}
export declare module ListTagsResponse {
	/**
	 * Standard JavaScript object representation for ListTagsResponse
	 */
	interface AsObject {
		tags: string[];
	}
	/**
	 * Protobuf JSON representation for ListTagsResponse
	 */
	interface AsProtobufJSON {
		tags: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListInputContextsOfAllSessionsRequest
 */
export declare class ListInputContextsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListInputContextsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListInputContextsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListInputContextsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListInputContextsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListInputContextsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListInputContextsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListInputContextsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListInputContextsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListInputContextsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListInputContextsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListInputContextsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListInputContextsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListInputContextsResponse
 */
export declare class ListInputContextsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListInputContextsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListInputContextsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListInputContextsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListInputContextsResponse, _writer: BinaryWriter): void;
	private _inputContexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListInputContextsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListInputContextsResponse.AsObject>);
	get inputContexts(): string[];
	set inputContexts(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListInputContextsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListInputContextsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListInputContextsResponse.AsProtobufJSON;
}
export declare module ListInputContextsResponse {
	/**
	 * Standard JavaScript object representation for ListInputContextsResponse
	 */
	interface AsObject {
		inputContexts: string[];
	}
	/**
	 * Protobuf JSON representation for ListInputContextsResponse
	 */
	interface AsProtobufJSON {
		inputContexts: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListOutputContextsOfAllSessionsRequest
 */
export declare class ListOutputContextsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOutputContextsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOutputContextsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOutputContextsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOutputContextsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOutputContextsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOutputContextsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListOutputContextsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOutputContextsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOutputContextsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListOutputContextsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListOutputContextsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListOutputContextsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListOutputContextsResponse
 */
export declare class ListOutputContextsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOutputContextsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOutputContextsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOutputContextsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOutputContextsResponse, _writer: BinaryWriter): void;
	private _outputContexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOutputContextsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOutputContextsResponse.AsObject>);
	get outputContexts(): string[];
	set outputContexts(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListOutputContextsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOutputContextsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOutputContextsResponse.AsProtobufJSON;
}
export declare module ListOutputContextsResponse {
	/**
	 * Standard JavaScript object representation for ListOutputContextsResponse
	 */
	interface AsObject {
		outputContexts: string[];
	}
	/**
	 * Protobuf JSON representation for ListOutputContextsResponse
	 */
	interface AsProtobufJSON {
		outputContexts: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListPlatformsOfAllSessionsRequest
 */
export declare class ListPlatformsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListPlatformsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListPlatformsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListPlatformsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListPlatformsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPlatformsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListPlatformsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListPlatformsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListPlatformsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListPlatformsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListPlatformsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListPlatformsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListPlatformsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListPlatformsResponse
 */
export declare class ListPlatformsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListPlatformsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListPlatformsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListPlatformsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListPlatformsResponse, _writer: BinaryWriter): void;
	private _platforms;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPlatformsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListPlatformsResponse.AsObject>);
	get platforms(): string[];
	set platforms(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListPlatformsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListPlatformsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListPlatformsResponse.AsProtobufJSON;
}
export declare module ListPlatformsResponse {
	/**
	 * Standard JavaScript object representation for ListPlatformsResponse
	 */
	interface AsObject {
		platforms: string[];
	}
	/**
	 * Protobuf JSON representation for ListPlatformsResponse
	 */
	interface AsProtobufJSON {
		platforms: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListAccountIdsOfAllSessionsRequest
 */
export declare class ListAccountIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListAccountIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListAccountIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListAccountIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListAccountIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAccountIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListAccountIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListAccountIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListAccountIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListAccountIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListAccountIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListAccountIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListAccountIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListAccountIdsResponse
 */
export declare class ListAccountIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListAccountIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListAccountIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListAccountIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListAccountIdsResponse, _writer: BinaryWriter): void;
	private _accountIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAccountIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListAccountIdsResponse.AsObject>);
	get accountIds(): string[];
	set accountIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListAccountIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListAccountIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListAccountIdsResponse.AsProtobufJSON;
}
export declare module ListAccountIdsResponse {
	/**
	 * Standard JavaScript object representation for ListAccountIdsResponse
	 */
	interface AsObject {
		accountIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListAccountIdsResponse
	 */
	interface AsProtobufJSON {
		accountIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListPropertyIdsOfAllSessionsRequest
 */
export declare class ListPropertyIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListPropertyIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListPropertyIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListPropertyIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListPropertyIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPropertyIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListPropertyIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListPropertyIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListPropertyIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListPropertyIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListPropertyIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListPropertyIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListPropertyIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListPropertyIdsResponse
 */
export declare class ListPropertyIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListPropertyIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListPropertyIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListPropertyIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListPropertyIdsResponse, _writer: BinaryWriter): void;
	private _propertyIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPropertyIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListPropertyIdsResponse.AsObject>);
	get propertyIds(): string[];
	set propertyIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListPropertyIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListPropertyIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListPropertyIdsResponse.AsProtobufJSON;
}
export declare module ListPropertyIdsResponse {
	/**
	 * Standard JavaScript object representation for ListPropertyIdsResponse
	 */
	interface AsObject {
		propertyIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListPropertyIdsResponse
	 */
	interface AsProtobufJSON {
		propertyIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest
 */
export declare class ListDatastreamIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListDatastreamIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListDatastreamIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListDatastreamIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListDatastreamIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListDatastreamIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListDatastreamIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListDatastreamIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListDatastreamIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListDatastreamIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListDatastreamIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListDatastreamIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListDatastreamIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsResponse
 */
export declare class ListDatastreamIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListDatastreamIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListDatastreamIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListDatastreamIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListDatastreamIdsResponse, _writer: BinaryWriter): void;
	private _datastreamIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListDatastreamIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListDatastreamIdsResponse.AsObject>);
	get datastreamIds(): string[];
	set datastreamIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListDatastreamIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListDatastreamIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListDatastreamIdsResponse.AsProtobufJSON;
}
export declare module ListDatastreamIdsResponse {
	/**
	 * Standard JavaScript object representation for ListDatastreamIdsResponse
	 */
	interface AsObject {
		datastreamIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListDatastreamIdsResponse
	 */
	interface AsProtobufJSON {
		datastreamIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListOriginIdsOfAllSessionsRequest
 */
export declare class ListOriginIdsOfAllSessionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOriginIdsOfAllSessionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOriginIdsOfAllSessionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOriginIdsOfAllSessionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOriginIdsOfAllSessionsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOriginIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOriginIdsOfAllSessionsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionFilter(): SessionFilter | undefined;
	set sessionFilter(value: SessionFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListOriginIdsOfAllSessionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOriginIdsOfAllSessionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOriginIdsOfAllSessionsRequest.AsProtobufJSON;
}
export declare module ListOriginIdsOfAllSessionsRequest {
	/**
	 * Standard JavaScript object representation for ListOriginIdsOfAllSessionsRequest
	 */
	interface AsObject {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListOriginIdsOfAllSessionsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionFilter: SessionFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListOriginIdsResponse
 */
export declare class ListOriginIdsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOriginIdsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOriginIdsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOriginIdsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOriginIdsResponse, _writer: BinaryWriter): void;
	private _originIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOriginIdsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOriginIdsResponse.AsObject>);
	get originIds(): string[];
	set originIds(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListOriginIdsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOriginIdsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOriginIdsResponse.AsProtobufJSON;
}
export declare module ListOriginIdsResponse {
	/**
	 * Standard JavaScript object representation for ListOriginIdsResponse
	 */
	interface AsObject {
		originIds: string[];
	}
	/**
	 * Protobuf JSON representation for ListOriginIdsResponse
	 */
	interface AsProtobufJSON {
		originIds: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.AddSessionLabelsRequest
 */
export declare class AddSessionLabelsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddSessionLabelsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddSessionLabelsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddSessionLabelsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddSessionLabelsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddSessionLabelsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get labels(): string[];
	set labels(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddSessionLabelsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddSessionLabelsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddSessionLabelsRequest.AsProtobufJSON;
}
export declare module AddSessionLabelsRequest {
	/**
	 * Standard JavaScript object representation for AddSessionLabelsRequest
	 */
	interface AsObject {
		sessionId: string;
		labels: string[];
	}
	/**
	 * Protobuf JSON representation for AddSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		labels: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteSessionLabelsRequest
 */
export declare class DeleteSessionLabelsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteSessionLabelsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteSessionLabelsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteSessionLabelsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteSessionLabelsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSessionLabelsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get labels(): string[];
	set labels(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteSessionLabelsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteSessionLabelsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteSessionLabelsRequest.AsProtobufJSON;
}
export declare module DeleteSessionLabelsRequest {
	/**
	 * Standard JavaScript object representation for DeleteSessionLabelsRequest
	 */
	interface AsObject {
		sessionId: string;
		labels: string[];
	}
	/**
	 * Protobuf JSON representation for DeleteSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		labels: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.AddSessionCommentRequest
 */
export declare class AddSessionCommentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddSessionCommentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddSessionCommentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddSessionCommentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddSessionCommentRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _comment?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddSessionCommentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddSessionCommentRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get comment(): ondewoNlu008.Comment | undefined;
	set comment(value: ondewoNlu008.Comment | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddSessionCommentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddSessionCommentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddSessionCommentRequest.AsProtobufJSON;
}
export declare module AddSessionCommentRequest {
	/**
	 * Standard JavaScript object representation for AddSessionCommentRequest
	 */
	interface AsObject {
		sessionId: string;
		comment?: ondewoNlu008.Comment.AsObject;
	}
	/**
	 * Protobuf JSON representation for AddSessionCommentRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		comment: ondewoNlu008.Comment.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteSessionCommentsRequest
 */
export declare class DeleteSessionCommentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteSessionCommentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteSessionCommentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteSessionCommentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteSessionCommentsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _commentNames;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionCommentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSessionCommentsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get commentNames(): string[];
	set commentNames(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteSessionCommentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteSessionCommentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteSessionCommentsRequest.AsProtobufJSON;
}
export declare module DeleteSessionCommentsRequest {
	/**
	 * Standard JavaScript object representation for DeleteSessionCommentsRequest
	 */
	interface AsObject {
		sessionId: string;
		commentNames: string[];
	}
	/**
	 * Protobuf JSON representation for DeleteSessionCommentsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		commentNames: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.UpdateSessionCommentsRequest
 */
export declare class UpdateSessionCommentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateSessionCommentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateSessionCommentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateSessionCommentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateSessionCommentsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _comment?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateSessionCommentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateSessionCommentsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get comment(): ondewoNlu008.Comment | undefined;
	set comment(value: ondewoNlu008.Comment | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateSessionCommentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateSessionCommentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateSessionCommentsRequest.AsProtobufJSON;
}
export declare module UpdateSessionCommentsRequest {
	/**
	 * Standard JavaScript object representation for UpdateSessionCommentsRequest
	 */
	interface AsObject {
		sessionId: string;
		comment?: ondewoNlu008.Comment.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateSessionCommentsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		comment: ondewoNlu008.Comment.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionCommentsRequest
 */
export declare class ListSessionCommentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionCommentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionCommentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionCommentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionCommentsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionCommentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionCommentsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionCommentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionCommentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionCommentsRequest.AsProtobufJSON;
}
export declare module ListSessionCommentsRequest {
	/**
	 * Standard JavaScript object representation for ListSessionCommentsRequest
	 */
	interface AsObject {
		sessionId: string;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionCommentsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionCommentsResponse
 */
export declare class ListSessionCommentsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionCommentsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionCommentsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionCommentsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionCommentsResponse, _writer: BinaryWriter): void;
	private _comment?;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionCommentsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionCommentsResponse.AsObject>);
	get comment(): ondewoNlu008.Comment[] | undefined;
	set comment(value: ondewoNlu008.Comment[] | undefined);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionCommentsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionCommentsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionCommentsResponse.AsProtobufJSON;
}
export declare module ListSessionCommentsResponse {
	/**
	 * Standard JavaScript object representation for ListSessionCommentsResponse
	 */
	interface AsObject {
		comment?: ondewoNlu008.Comment.AsObject[];
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionCommentsResponse
	 */
	interface AsProtobufJSON {
		comment: ondewoNlu008.Comment.AsProtobufJSON[] | null;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsRequest
 */
export declare class ListSessionReviewsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionReviewsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionReviewsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionReviewsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionReviewsRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _sessionReviewView;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionReviewsRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get sessionReviewView(): SessionReview.View;
	set sessionReviewView(value: SessionReview.View);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionReviewsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionReviewsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionReviewsRequest.AsProtobufJSON;
}
export declare module ListSessionReviewsRequest {
	/**
	 * Standard JavaScript object representation for ListSessionReviewsRequest
	 */
	interface AsObject {
		sessionId: string;
		sessionReviewView: SessionReview.View;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionReviewsRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		sessionReviewView: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsResponse
 */
export declare class ListSessionReviewsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionReviewsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionReviewsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionReviewsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionReviewsResponse, _writer: BinaryWriter): void;
	private _sessionReviews?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionReviewsResponse.AsObject>);
	get sessionReviews(): SessionReview[] | undefined;
	set sessionReviews(value: SessionReview[] | undefined);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSessionReviewsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionReviewsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionReviewsResponse.AsProtobufJSON;
}
export declare module ListSessionReviewsResponse {
	/**
	 * Standard JavaScript object representation for ListSessionReviewsResponse
	 */
	interface AsObject {
		sessionReviews?: SessionReview.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionReviewsResponse
	 */
	interface AsProtobufJSON {
		sessionReviews: SessionReview.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetSessionReviewRequest
 */
export declare class GetSessionReviewRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetSessionReviewRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetSessionReviewRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetSessionReviewRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetSessionReviewRequest, _writer: BinaryWriter): void;
	private _sessionReviewId;
	private _sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSessionReviewRequest.AsObject>);
	get sessionReviewId(): string;
	set sessionReviewId(value: string);
	get sessionReviewView(): SessionReview.View;
	set sessionReviewView(value: SessionReview.View);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetSessionReviewRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetSessionReviewRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionReviewRequest.AsProtobufJSON;
}
export declare module GetSessionReviewRequest {
	/**
	 * Standard JavaScript object representation for GetSessionReviewRequest
	 */
	interface AsObject {
		sessionReviewId: string;
		sessionReviewView: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for GetSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionReviewId: string;
		sessionReviewView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetLatestSessionReviewRequest
 */
export declare class GetLatestSessionReviewRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetLatestSessionReviewRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetLatestSessionReviewRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetLatestSessionReviewRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetLatestSessionReviewRequest, _writer: BinaryWriter): void;
	private _sessionId;
	private _sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetLatestSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetLatestSessionReviewRequest.AsObject>);
	get sessionId(): string;
	set sessionId(value: string);
	get sessionReviewView(): SessionReview.View;
	set sessionReviewView(value: SessionReview.View);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetLatestSessionReviewRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetLatestSessionReviewRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetLatestSessionReviewRequest.AsProtobufJSON;
}
export declare module GetLatestSessionReviewRequest {
	/**
	 * Standard JavaScript object representation for GetLatestSessionReviewRequest
	 */
	interface AsObject {
		sessionId: string;
		sessionReviewView: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for GetLatestSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionId: string;
		sessionReviewView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.AudioFileResource
 */
export declare class AudioFileResource implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AudioFileResource;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AudioFileResource): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AudioFileResource, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AudioFileResource, _writer: BinaryWriter): void;
	private _name;
	private _bytes;
	private _language;
	private _durationInS;
	private _sampleRate;
	private _audioFileResourceType;
	private _transcriptions?;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AudioFileResource to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AudioFileResource.AsObject>);
	get name(): string;
	set name(value: string);
	get bytes(): Uint8Array;
	set bytes(value: Uint8Array);
	get language(): string;
	set language(value: string);
	get durationInS(): number;
	set durationInS(value: number);
	get sampleRate(): number;
	set sampleRate(value: number);
	get audioFileResourceType(): AudioFileResourceType;
	set audioFileResourceType(value: AudioFileResourceType);
	get transcriptions(): S2tTranscription[] | undefined;
	set transcriptions(value: S2tTranscription[] | undefined);
	get createdAt(): googleProtobuf004.Timestamp | undefined;
	set createdAt(value: googleProtobuf004.Timestamp | undefined);
	get modifiedAt(): googleProtobuf004.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf004.Timestamp | undefined);
	get createdBy(): string;
	set createdBy(value: string);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AudioFileResource.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AudioFileResource.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AudioFileResource.AsProtobufJSON;
}
export declare module AudioFileResource {
	/**
	 * Standard JavaScript object representation for AudioFileResource
	 */
	interface AsObject {
		name: string;
		bytes: Uint8Array;
		language: string;
		durationInS: number;
		sampleRate: number;
		audioFileResourceType: AudioFileResourceType;
		transcriptions?: S2tTranscription.AsObject[];
		createdAt?: googleProtobuf004.Timestamp.AsObject;
		modifiedAt?: googleProtobuf004.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for AudioFileResource
	 */
	interface AsProtobufJSON {
		name: string;
		bytes: string;
		language: string;
		durationInS: number;
		sampleRate: number;
		audioFileResourceType: string;
		transcriptions: S2tTranscription.AsProtobufJSON[] | null;
		createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetAudioFilesRequest
 */
export declare class GetAudioFilesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetAudioFilesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetAudioFilesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetAudioFilesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetAudioFilesRequest, _writer: BinaryWriter): void;
	private _parent;
	private _names;
	private _resourceView;
	private _pageToken;
	private _sortingMode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetAudioFilesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetAudioFilesRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get names(): string[];
	set names(value: string[]);
	get resourceView(): ResourceView;
	set resourceView(value: ResourceView);
	get pageToken(): string;
	set pageToken(value: string);
	get sortingMode(): ondewoNlu008.SortingMode;
	set sortingMode(value: ondewoNlu008.SortingMode);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetAudioFilesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetAudioFilesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetAudioFilesRequest.AsProtobufJSON;
}
export declare module GetAudioFilesRequest {
	/**
	 * Standard JavaScript object representation for GetAudioFilesRequest
	 */
	interface AsObject {
		parent: string;
		names: string[];
		resourceView: ResourceView;
		pageToken: string;
		sortingMode: ondewoNlu008.SortingMode;
	}
	/**
	 * Protobuf JSON representation for GetAudioFilesRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		names: string[];
		resourceView: string;
		pageToken: string;
		sortingMode: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetAudioFilesResponse
 */
export declare class GetAudioFilesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetAudioFilesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetAudioFilesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetAudioFilesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetAudioFilesResponse, _writer: BinaryWriter): void;
	private _audioFiles?;
	private _errorMessage;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetAudioFilesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetAudioFilesResponse.AsObject>);
	get audioFiles(): AudioFileResource[] | undefined;
	set audioFiles(value: AudioFileResource[] | undefined);
	get errorMessage(): string;
	set errorMessage(value: string);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetAudioFilesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetAudioFilesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetAudioFilesResponse.AsProtobufJSON;
}
export declare module GetAudioFilesResponse {
	/**
	 * Standard JavaScript object representation for GetAudioFilesResponse
	 */
	interface AsObject {
		audioFiles?: AudioFileResource.AsObject[];
		errorMessage: string;
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for GetAudioFilesResponse
	 */
	interface AsProtobufJSON {
		audioFiles: AudioFileResource.AsProtobufJSON[] | null;
		errorMessage: string;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.AddAudioFilesRequest
 */
export declare class AddAudioFilesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddAudioFilesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddAudioFilesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddAudioFilesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddAudioFilesRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionId;
	private _audioFileResources?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddAudioFilesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddAudioFilesRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionId(): string;
	set sessionId(value: string);
	get audioFileResources(): AudioFileResource[] | undefined;
	set audioFileResources(value: AudioFileResource[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddAudioFilesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddAudioFilesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddAudioFilesRequest.AsProtobufJSON;
}
export declare module AddAudioFilesRequest {
	/**
	 * Standard JavaScript object representation for AddAudioFilesRequest
	 */
	interface AsObject {
		parent: string;
		sessionId: string;
		audioFileResources?: AudioFileResource.AsObject[];
	}
	/**
	 * Protobuf JSON representation for AddAudioFilesRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionId: string;
		audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.AddAudioFilesResponse
 */
export declare class AddAudioFilesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddAudioFilesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddAudioFilesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddAudioFilesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddAudioFilesResponse, _writer: BinaryWriter): void;
	private _audioFileResources?;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddAudioFilesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddAudioFilesResponse.AsObject>);
	get audioFileResources(): AudioFileResource[] | undefined;
	set audioFileResources(value: AudioFileResource[] | undefined);
	get errorMessage(): string;
	set errorMessage(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddAudioFilesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddAudioFilesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddAudioFilesResponse.AsProtobufJSON;
}
export declare module AddAudioFilesResponse {
	/**
	 * Standard JavaScript object representation for AddAudioFilesResponse
	 */
	interface AsObject {
		audioFileResources?: AudioFileResource.AsObject[];
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for AddAudioFilesResponse
	 */
	interface AsProtobufJSON {
		audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteAudioFilesRequest
 */
export declare class DeleteAudioFilesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteAudioFilesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteAudioFilesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteAudioFilesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteAudioFilesRequest, _writer: BinaryWriter): void;
	private _parent;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteAudioFilesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteAudioFilesRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteAudioFilesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteAudioFilesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteAudioFilesRequest.AsProtobufJSON;
}
export declare module DeleteAudioFilesRequest {
	/**
	 * Standard JavaScript object representation for DeleteAudioFilesRequest
	 */
	interface AsObject {
		parent: string;
		names: string[];
	}
	/**
	 * Protobuf JSON representation for DeleteAudioFilesRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteAudioFilesResponse
 */
export declare class DeleteAudioFilesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteAudioFilesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteAudioFilesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteAudioFilesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteAudioFilesResponse, _writer: BinaryWriter): void;
	private _names;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteAudioFilesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteAudioFilesResponse.AsObject>);
	get names(): string[];
	set names(value: string[]);
	get errorMessage(): string;
	set errorMessage(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteAudioFilesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteAudioFilesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteAudioFilesResponse.AsProtobufJSON;
}
export declare module DeleteAudioFilesResponse {
	/**
	 * Standard JavaScript object representation for DeleteAudioFilesResponse
	 */
	interface AsObject {
		names: string[];
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for DeleteAudioFilesResponse
	 */
	interface AsProtobufJSON {
		names: string[];
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListAudioFilesRequest
 */
export declare class ListAudioFilesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListAudioFilesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListAudioFilesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListAudioFilesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListAudioFilesRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionId;
	private _resourceView;
	private _pageToken;
	private _sortingMode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAudioFilesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListAudioFilesRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionId(): string;
	set sessionId(value: string);
	get resourceView(): ResourceView;
	set resourceView(value: ResourceView);
	get pageToken(): string;
	set pageToken(value: string);
	get sortingMode(): ondewoNlu008.SortingMode;
	set sortingMode(value: ondewoNlu008.SortingMode);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListAudioFilesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListAudioFilesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListAudioFilesRequest.AsProtobufJSON;
}
export declare module ListAudioFilesRequest {
	/**
	 * Standard JavaScript object representation for ListAudioFilesRequest
	 */
	interface AsObject {
		parent: string;
		sessionId: string;
		resourceView: ResourceView;
		pageToken: string;
		sortingMode: ondewoNlu008.SortingMode;
	}
	/**
	 * Protobuf JSON representation for ListAudioFilesRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionId: string;
		resourceView: string;
		pageToken: string;
		sortingMode: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListAudioFilesResponse
 */
export declare class ListAudioFilesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListAudioFilesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListAudioFilesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListAudioFilesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListAudioFilesResponse, _writer: BinaryWriter): void;
	private _audioFiles?;
	private _nextPageToken;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAudioFilesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListAudioFilesResponse.AsObject>);
	get audioFiles(): AudioFileResource[] | undefined;
	set audioFiles(value: AudioFileResource[] | undefined);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	get errorMessage(): string;
	set errorMessage(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListAudioFilesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListAudioFilesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListAudioFilesResponse.AsProtobufJSON;
}
export declare module ListAudioFilesResponse {
	/**
	 * Standard JavaScript object representation for ListAudioFilesResponse
	 */
	interface AsObject {
		audioFiles?: AudioFileResource.AsObject[];
		nextPageToken: string;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for ListAudioFilesResponse
	 */
	interface AsProtobufJSON {
		audioFiles: AudioFileResource.AsProtobufJSON[] | null;
		nextPageToken: string;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetAudioFileOfSessionRequest
 */
export declare class GetAudioFileOfSessionRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetAudioFileOfSessionRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetAudioFileOfSessionRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetAudioFileOfSessionRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetAudioFileOfSessionRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionId;
	private _resourceView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetAudioFileOfSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetAudioFileOfSessionRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionId(): string;
	set sessionId(value: string);
	get resourceView(): ResourceView;
	set resourceView(value: ResourceView);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetAudioFileOfSessionRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetAudioFileOfSessionRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetAudioFileOfSessionRequest.AsProtobufJSON;
}
export declare module GetAudioFileOfSessionRequest {
	/**
	 * Standard JavaScript object representation for GetAudioFileOfSessionRequest
	 */
	interface AsObject {
		parent: string;
		sessionId: string;
		resourceView: ResourceView;
	}
	/**
	 * Protobuf JSON representation for GetAudioFileOfSessionRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionId: string;
		resourceView: string;
	}
}
