import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
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
	private _session?;
	private _queryParams?;
	private _queryInput?;
	private _inputAudio?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectIntentRequest.AsObject>);
	get session(): string | undefined;
	set session(value: string | undefined);
	get queryParams(): QueryParameters | undefined;
	set queryParams(value: QueryParameters | undefined);
	get queryInput(): QueryInput | undefined;
	set queryInput(value: QueryInput | undefined);
	get inputAudio(): Uint8Array | undefined;
	set inputAudio(value: Uint8Array | undefined);
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
		session?: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		inputAudio?: Uint8Array;
	}
	/**
	 * Protobuf JSON representation for DetectIntentRequest
	 */
	interface AsProtobufJSON {
		session?: string;
		queryParams?: QueryParameters.AsProtobufJSON | null;
		queryInput?: QueryInput.AsProtobufJSON | null;
		inputAudio?: string;
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
	private _responseId?;
	private _queryResult?;
	private _webhookStatus?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectIntentResponse.AsObject>);
	get responseId(): string | undefined;
	set responseId(value: string | undefined);
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
		responseId?: string;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: googleRpc011.Status.AsObject;
	}
	/**
	 * Protobuf JSON representation for DetectIntentResponse
	 */
	interface AsProtobufJSON {
		responseId?: string;
		queryResult?: QueryResult.AsProtobufJSON | null;
		webhookStatus?: googleRpc011.Status.AsProtobufJSON | null;
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
	private _timeZone?;
	private _geoLocation?;
	private _contexts?;
	private _resetContexts?;
	private _payload?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryParameters to deeply clone from
	 */
	constructor(_value?: RecursivePartial<QueryParameters.AsObject>);
	get timeZone(): string | undefined;
	set timeZone(value: string | undefined);
	get geoLocation(): googleType012.LatLng | undefined;
	set geoLocation(value: googleType012.LatLng | undefined);
	get contexts(): ondewoNlu006.Context[] | undefined;
	set contexts(value: ondewoNlu006.Context[] | undefined);
	get resetContexts(): boolean | undefined;
	set resetContexts(value: boolean | undefined);
	get payload(): googleProtobuf010.Struct | undefined;
	set payload(value: googleProtobuf010.Struct | undefined);
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
		timeZone?: string;
		geoLocation?: googleType012.LatLng.AsObject;
		contexts?: ondewoNlu006.Context.AsObject[];
		resetContexts?: boolean;
		payload?: googleProtobuf010.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for QueryParameters
	 */
	interface AsProtobufJSON {
		timeZone?: string;
		geoLocation?: googleType012.LatLng.AsProtobufJSON | null;
		contexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
		resetContexts?: boolean;
		payload?: googleProtobuf010.Struct.AsProtobufJSON | null;
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
		audioConfig?: InputAudioConfig.AsProtobufJSON | null;
		text?: TextInput.AsProtobufJSON | null;
		event?: EventInput.AsProtobufJSON | null;
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
	private _queryText?;
	private _languageCode?;
	private _speechRecognitionConfidence?;
	private _action?;
	private _parameters?;
	private _allRequiredParamsPresent?;
	private _fulfillmentText?;
	private _fulfillmentMessages?;
	private _webhookSource?;
	private _webhookPayload?;
	private _outputContexts?;
	private _intent?;
	private _intentDetectionConfidence?;
	private _diagnosticInfo?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryResult to deeply clone from
	 */
	constructor(_value?: RecursivePartial<QueryResult.AsObject>);
	get queryText(): string | undefined;
	set queryText(value: string | undefined);
	get languageCode(): string | undefined;
	set languageCode(value: string | undefined);
	get speechRecognitionConfidence(): number | undefined;
	set speechRecognitionConfidence(value: number | undefined);
	get action(): string | undefined;
	set action(value: string | undefined);
	get parameters(): googleProtobuf010.Struct | undefined;
	set parameters(value: googleProtobuf010.Struct | undefined);
	get allRequiredParamsPresent(): boolean | undefined;
	set allRequiredParamsPresent(value: boolean | undefined);
	get fulfillmentText(): string | undefined;
	set fulfillmentText(value: string | undefined);
	get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined);
	get webhookSource(): string | undefined;
	set webhookSource(value: string | undefined);
	get webhookPayload(): googleProtobuf010.Struct | undefined;
	set webhookPayload(value: googleProtobuf010.Struct | undefined);
	get outputContexts(): ondewoNlu006.Context[] | undefined;
	set outputContexts(value: ondewoNlu006.Context[] | undefined);
	get intent(): ondewoNlu013.Intent | undefined;
	set intent(value: ondewoNlu013.Intent | undefined);
	get intentDetectionConfidence(): number | undefined;
	set intentDetectionConfidence(value: number | undefined);
	get diagnosticInfo(): googleProtobuf010.Struct | undefined;
	set diagnosticInfo(value: googleProtobuf010.Struct | undefined);
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
		queryText?: string;
		languageCode?: string;
		speechRecognitionConfidence?: number;
		action?: string;
		parameters?: googleProtobuf010.Struct.AsObject;
		allRequiredParamsPresent?: boolean;
		fulfillmentText?: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
		webhookSource?: string;
		webhookPayload?: googleProtobuf010.Struct.AsObject;
		outputContexts?: ondewoNlu006.Context.AsObject[];
		intent?: ondewoNlu013.Intent.AsObject;
		intentDetectionConfidence?: number;
		diagnosticInfo?: googleProtobuf010.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for QueryResult
	 */
	interface AsProtobufJSON {
		queryText?: string;
		languageCode?: string;
		speechRecognitionConfidence?: number;
		action?: string;
		parameters?: googleProtobuf010.Struct.AsProtobufJSON | null;
		allRequiredParamsPresent?: boolean;
		fulfillmentText?: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
		webhookSource?: string;
		webhookPayload?: googleProtobuf010.Struct.AsProtobufJSON | null;
		outputContexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
		intent?: ondewoNlu013.Intent.AsProtobufJSON | null;
		intentDetectionConfidence?: number;
		diagnosticInfo?: googleProtobuf010.Struct.AsProtobufJSON | null;
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
	private _session?;
	private _queryParams?;
	private _queryInput?;
	private _singleUtterance?;
	private _inputAudio?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingDetectIntentRequest.AsObject>);
	get session(): string | undefined;
	set session(value: string | undefined);
	get queryParams(): QueryParameters | undefined;
	set queryParams(value: QueryParameters | undefined);
	get queryInput(): QueryInput | undefined;
	set queryInput(value: QueryInput | undefined);
	get singleUtterance(): boolean | undefined;
	set singleUtterance(value: boolean | undefined);
	get inputAudio(): Uint8Array | undefined;
	set inputAudio(value: Uint8Array | undefined);
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
		session?: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		singleUtterance?: boolean;
		inputAudio?: Uint8Array;
	}
	/**
	 * Protobuf JSON representation for StreamingDetectIntentRequest
	 */
	interface AsProtobufJSON {
		session?: string;
		queryParams?: QueryParameters.AsProtobufJSON | null;
		queryInput?: QueryInput.AsProtobufJSON | null;
		singleUtterance?: boolean;
		inputAudio?: string;
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
	private _responseId?;
	private _recognitionResult?;
	private _queryResult?;
	private _webhookStatus?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingDetectIntentResponse.AsObject>);
	get responseId(): string | undefined;
	set responseId(value: string | undefined);
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
		responseId?: string;
		recognitionResult?: StreamingRecognitionResult.AsObject;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: googleRpc011.Status.AsObject;
	}
	/**
	 * Protobuf JSON representation for StreamingDetectIntentResponse
	 */
	interface AsProtobufJSON {
		responseId?: string;
		recognitionResult?: StreamingRecognitionResult.AsProtobufJSON | null;
		queryResult?: QueryResult.AsProtobufJSON | null;
		webhookStatus?: googleRpc011.Status.AsProtobufJSON | null;
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
	private _messageType?;
	private _transcript?;
	private _isFinal?;
	private _confidence?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingRecognitionResult to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StreamingRecognitionResult.AsObject>);
	get messageType(): StreamingRecognitionResult.MessageType | undefined;
	set messageType(value: StreamingRecognitionResult.MessageType | undefined);
	get transcript(): string | undefined;
	set transcript(value: string | undefined);
	get isFinal(): boolean | undefined;
	set isFinal(value: boolean | undefined);
	get confidence(): number | undefined;
	set confidence(value: number | undefined);
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
		messageType?: StreamingRecognitionResult.MessageType;
		transcript?: string;
		isFinal?: boolean;
		confidence?: number;
	}
	/**
	 * Protobuf JSON representation for StreamingRecognitionResult
	 */
	interface AsProtobufJSON {
		messageType?: string;
		transcript?: string;
		isFinal?: boolean;
		confidence?: number;
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
	private _audioEncoding?;
	private _sampleRateHertz?;
	private _languageCode?;
	private _phraseHints?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of InputAudioConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<InputAudioConfig.AsObject>);
	get audioEncoding(): AudioEncoding | undefined;
	set audioEncoding(value: AudioEncoding | undefined);
	get sampleRateHertz(): number | undefined;
	set sampleRateHertz(value: number | undefined);
	get languageCode(): string | undefined;
	set languageCode(value: string | undefined);
	get phraseHints(): string[] | undefined;
	set phraseHints(value: string[] | undefined);
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
		audioEncoding?: AudioEncoding;
		sampleRateHertz?: number;
		languageCode?: string;
		phraseHints?: string[];
	}
	/**
	 * Protobuf JSON representation for InputAudioConfig
	 */
	interface AsProtobufJSON {
		audioEncoding?: string;
		sampleRateHertz?: number;
		languageCode?: string;
		phraseHints?: string[];
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
	private _text?;
	private _languageCode?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TextInput to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TextInput.AsObject>);
	get text(): string | undefined;
	set text(value: string | undefined);
	get languageCode(): string | undefined;
	set languageCode(value: string | undefined);
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
		text?: string;
		languageCode?: string;
	}
	/**
	 * Protobuf JSON representation for TextInput
	 */
	interface AsProtobufJSON {
		text?: string;
		languageCode?: string;
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
	private _name?;
	private _parameters?;
	private _languageCode?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of EventInput to deeply clone from
	 */
	constructor(_value?: RecursivePartial<EventInput.AsObject>);
	get name(): string | undefined;
	set name(value: string | undefined);
	get parameters(): googleProtobuf010.Struct | undefined;
	set parameters(value: googleProtobuf010.Struct | undefined);
	get languageCode(): string | undefined;
	set languageCode(value: string | undefined);
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
		name?: string;
		parameters?: googleProtobuf010.Struct.AsObject;
		languageCode?: string;
	}
	/**
	 * Protobuf JSON representation for EventInput
	 */
	interface AsProtobufJSON {
		name?: string;
		parameters?: googleProtobuf010.Struct.AsProtobufJSON | null;
		languageCode?: string;
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
	private _sessionId?;
	private _sessionSteps?;
	private _sessionInfo?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Session to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Session.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get sessionSteps(): SessionStep[] | undefined;
	set sessionSteps(value: SessionStep[] | undefined);
	get sessionInfo(): SessionInfo | undefined;
	set sessionInfo(value: SessionInfo | undefined);
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
		sessionId?: string;
		sessionSteps?: SessionStep.AsObject[];
		sessionInfo?: SessionInfo.AsObject;
	}
	/**
	 * Protobuf JSON representation for Session
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		sessionSteps?: SessionStep.AsProtobufJSON[] | null;
		sessionInfo?: SessionInfo.AsProtobufJSON | null;
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
	private _detectIntentRequest?;
	private _detectIntentResponse?;
	private _contexts?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionStep to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionStep.AsObject>);
	get detectIntentRequest(): DetectIntentRequest | undefined;
	set detectIntentRequest(value: DetectIntentRequest | undefined);
	get detectIntentResponse(): DetectIntentResponse | undefined;
	set detectIntentResponse(value: DetectIntentResponse | undefined);
	get contexts(): ondewoNlu006.Context[] | undefined;
	set contexts(value: ondewoNlu006.Context[] | undefined);
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
		detectIntentRequest?: DetectIntentRequest.AsObject;
		detectIntentResponse?: DetectIntentResponse.AsObject;
		contexts?: ondewoNlu006.Context.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionStep
	 */
	interface AsProtobufJSON {
		detectIntentRequest?: DetectIntentRequest.AsProtobufJSON | null;
		detectIntentResponse?: DetectIntentResponse.AsProtobufJSON | null;
		contexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
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
	private _sessionId?;
	private _sessionStep?;
	private _sessionView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrackSessionStepRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TrackSessionStepRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get sessionStep(): SessionStep | undefined;
	set sessionStep(value: SessionStep | undefined);
	get sessionView(): Session.View | undefined;
	set sessionView(value: Session.View | undefined);
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
		sessionId?: string;
		sessionStep?: SessionStep.AsObject;
		sessionView?: Session.View;
	}
	/**
	 * Protobuf JSON representation for TrackSessionStepRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		sessionStep?: SessionStep.AsProtobufJSON | null;
		sessionView?: string;
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
	private _parent?;
	private _sessionView?;
	private _pageToken?;
	private _sessionFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionsRequest.AsObject>);
	get parent(): string | undefined;
	set parent(value: string | undefined);
	get sessionView(): Session.View | undefined;
	set sessionView(value: Session.View | undefined);
	get pageToken(): string | undefined;
	set pageToken(value: string | undefined);
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
		parent?: string;
		sessionView?: Session.View;
		pageToken?: string;
		sessionFilter?: SessionFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListSessionsRequest
	 */
	interface AsProtobufJSON {
		parent?: string;
		sessionView?: string;
		pageToken?: string;
		sessionFilter?: SessionFilter.AsProtobufJSON | null;
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
	private _languageCodes?;
	private _matchedIntents?;
	private _matchedEntityTypes?;
	private _minIntentsConfidenceMin?;
	private _minIntentsConfidenceMax?;
	private _minEntityTypesConfidenceMin?;
	private _minEntityTypesConfidenceMax?;
	private _earliest?;
	private _latest?;
	private _minNumberTurns?;
	private _maxNumberTurns?;
	private _labels?;
	private _userIds?;
	private _intentTags?;
	private _sessionIds?;
	private _inputContexts?;
	private _outputContexts?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionFilter to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionFilter.AsObject>);
	get languageCodes(): string[] | undefined;
	set languageCodes(value: string[] | undefined);
	get matchedIntents(): ondewoNlu013.Intent[] | undefined;
	set matchedIntents(value: ondewoNlu013.Intent[] | undefined);
	get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined;
	set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined);
	get minIntentsConfidenceMin(): number | undefined;
	set minIntentsConfidenceMin(value: number | undefined);
	get minIntentsConfidenceMax(): number | undefined;
	set minIntentsConfidenceMax(value: number | undefined);
	get minEntityTypesConfidenceMin(): number | undefined;
	set minEntityTypesConfidenceMin(value: number | undefined);
	get minEntityTypesConfidenceMax(): number | undefined;
	set minEntityTypesConfidenceMax(value: number | undefined);
	get earliest(): number | undefined;
	set earliest(value: number | undefined);
	get latest(): number | undefined;
	set latest(value: number | undefined);
	get minNumberTurns(): number | undefined;
	set minNumberTurns(value: number | undefined);
	get maxNumberTurns(): number | undefined;
	set maxNumberTurns(value: number | undefined);
	get labels(): string[] | undefined;
	set labels(value: string[] | undefined);
	get userIds(): string[] | undefined;
	set userIds(value: string[] | undefined);
	get intentTags(): string[] | undefined;
	set intentTags(value: string[] | undefined);
	get sessionIds(): string[] | undefined;
	set sessionIds(value: string[] | undefined);
	get inputContexts(): ondewoNlu006.Context[] | undefined;
	set inputContexts(value: ondewoNlu006.Context[] | undefined);
	get outputContexts(): ondewoNlu006.Context[] | undefined;
	set outputContexts(value: ondewoNlu006.Context[] | undefined);
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
		languageCodes?: string[];
		matchedIntents?: ondewoNlu013.Intent.AsObject[];
		matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
		minIntentsConfidenceMin?: number;
		minIntentsConfidenceMax?: number;
		minEntityTypesConfidenceMin?: number;
		minEntityTypesConfidenceMax?: number;
		earliest?: number;
		latest?: number;
		minNumberTurns?: number;
		maxNumberTurns?: number;
		labels?: string[];
		userIds?: string[];
		intentTags?: string[];
		sessionIds?: string[];
		inputContexts?: ondewoNlu006.Context.AsObject[];
		outputContexts?: ondewoNlu006.Context.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionFilter
	 */
	interface AsProtobufJSON {
		languageCodes?: string[];
		matchedIntents?: ondewoNlu013.Intent.AsProtobufJSON[] | null;
		matchedEntityTypes?: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
		minIntentsConfidenceMin?: number;
		minIntentsConfidenceMax?: number;
		minEntityTypesConfidenceMin?: number;
		minEntityTypesConfidenceMax?: number;
		earliest?: number;
		latest?: number;
		minNumberTurns?: number;
		maxNumberTurns?: number;
		labels?: string[];
		userIds?: string[];
		intentTags?: string[];
		sessionIds?: string[];
		inputContexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
		outputContexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
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
	private _languageCodes?;
	private _matchedIntents?;
	private _matchedEntityTypes?;
	private _minIntentsConfidence?;
	private _minEntityTypesConfidence?;
	private _earliest?;
	private _latest?;
	private _numberTurns?;
	private _labels?;
	private _userIds?;
	private _intentTags?;
	private _inputContextSteps?;
	private _outputContextSteps?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionInfo to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionInfo.AsObject>);
	get languageCodes(): string[] | undefined;
	set languageCodes(value: string[] | undefined);
	get matchedIntents(): ondewoNlu013.Intent[] | undefined;
	set matchedIntents(value: ondewoNlu013.Intent[] | undefined);
	get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined;
	set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined);
	get minIntentsConfidence(): number | undefined;
	set minIntentsConfidence(value: number | undefined);
	get minEntityTypesConfidence(): number | undefined;
	set minEntityTypesConfidence(value: number | undefined);
	get earliest(): number | undefined;
	set earliest(value: number | undefined);
	get latest(): number | undefined;
	set latest(value: number | undefined);
	get numberTurns(): number | undefined;
	set numberTurns(value: number | undefined);
	get labels(): string[] | undefined;
	set labels(value: string[] | undefined);
	get userIds(): string[] | undefined;
	set userIds(value: string[] | undefined);
	get intentTags(): string[] | undefined;
	set intentTags(value: string[] | undefined);
	get inputContextSteps(): SessionInfo.ContextSteps[] | undefined;
	set inputContextSteps(value: SessionInfo.ContextSteps[] | undefined);
	get outputContextSteps(): SessionInfo.ContextSteps[] | undefined;
	set outputContextSteps(value: SessionInfo.ContextSteps[] | undefined);
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
		languageCodes?: string[];
		matchedIntents?: ondewoNlu013.Intent.AsObject[];
		matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
		minIntentsConfidence?: number;
		minEntityTypesConfidence?: number;
		earliest?: number;
		latest?: number;
		numberTurns?: number;
		labels?: string[];
		userIds?: string[];
		intentTags?: string[];
		inputContextSteps?: SessionInfo.ContextSteps.AsObject[];
		outputContextSteps?: SessionInfo.ContextSteps.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionInfo
	 */
	interface AsProtobufJSON {
		languageCodes?: string[];
		matchedIntents?: ondewoNlu013.Intent.AsProtobufJSON[] | null;
		matchedEntityTypes?: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
		minIntentsConfidence?: number;
		minEntityTypesConfidence?: number;
		earliest?: number;
		latest?: number;
		numberTurns?: number;
		labels?: string[];
		userIds?: string[];
		intentTags?: string[];
		inputContextSteps?: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
		outputContextSteps?: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
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
		get contexts(): ondewoNlu006.Context[] | undefined;
		set contexts(value: ondewoNlu006.Context[] | undefined);
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
			contexts?: ondewoNlu006.Context.AsObject[];
		}
		/**
		 * Protobuf JSON representation for ContextSteps
		 */
		interface AsProtobufJSON {
			contexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
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
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionsResponse.AsObject>);
	get sessions(): Session[] | undefined;
	set sessions(value: Session[] | undefined);
	get nextPageToken(): string | undefined;
	set nextPageToken(value: string | undefined);
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
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionsResponse
	 */
	interface AsProtobufJSON {
		sessions?: Session.AsProtobufJSON[] | null;
		nextPageToken?: string;
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
	private _sessionId?;
	private _sessionView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSessionRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get sessionView(): Session.View | undefined;
	set sessionView(value: Session.View | undefined);
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
		sessionId?: string;
		sessionView?: Session.View;
	}
	/**
	 * Protobuf JSON representation for GetSessionRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		sessionView?: string;
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
	private _parent?;
	private _sessionUuid?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSessionRequest.AsObject>);
	get parent(): string | undefined;
	set parent(value: string | undefined);
	get sessionUuid(): string | undefined;
	set sessionUuid(value: string | undefined);
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
		parent?: string;
		sessionUuid?: string;
	}
	/**
	 * Protobuf JSON representation for CreateSessionRequest
	 */
	interface AsProtobufJSON {
		parent?: string;
		sessionUuid?: string;
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
	private _sessionId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSessionRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
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
		sessionId?: string;
	}
	/**
	 * Protobuf JSON representation for DeleteSessionRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
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
	private _sessionId?;
	private _parentReviewId?;
	private _sessionReview?;
	private _sessionReviewView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSessionReviewRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get parentReviewId(): string | undefined;
	set parentReviewId(value: string | undefined);
	get sessionReview(): SessionReview | undefined;
	set sessionReview(value: SessionReview | undefined);
	get sessionReviewView(): SessionReview.View | undefined;
	set sessionReviewView(value: SessionReview.View | undefined);
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
		sessionId?: string;
		parentReviewId?: string;
		sessionReview?: SessionReview.AsObject;
		sessionReviewView?: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for CreateSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		parentReviewId?: string;
		sessionReview?: SessionReview.AsProtobufJSON | null;
		sessionReviewView?: string;
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
	private _sessionReviewId?;
	private _sessionReviewSteps?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReview to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionReview.AsObject>);
	get sessionReviewId(): string | undefined;
	set sessionReviewId(value: string | undefined);
	get sessionReviewSteps(): SessionReviewStep[] | undefined;
	set sessionReviewSteps(value: SessionReviewStep[] | undefined);
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
		sessionReviewId?: string;
		sessionReviewSteps?: SessionReviewStep.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionReview
	 */
	interface AsProtobufJSON {
		sessionReviewId?: string;
		sessionReviewSteps?: SessionReviewStep.AsProtobufJSON[] | null;
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
	private _annotatedUsersays?;
	private _languageCode?;
	private _detectedIntents?;
	private _contexts?;
	private _contextsOut?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReviewStep to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionReviewStep.AsObject>);
	get annotatedUsersays(): ondewoNlu013.Intent.TrainingPhrase | undefined;
	set annotatedUsersays(value: ondewoNlu013.Intent.TrainingPhrase | undefined);
	get languageCode(): string | undefined;
	set languageCode(value: string | undefined);
	get detectedIntents(): DetectedIntent[] | undefined;
	set detectedIntents(value: DetectedIntent[] | undefined);
	get contexts(): ondewoNlu006.Context[] | undefined;
	set contexts(value: ondewoNlu006.Context[] | undefined);
	get contextsOut(): ondewoNlu006.Context[] | undefined;
	set contextsOut(value: ondewoNlu006.Context[] | undefined);
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
		annotatedUsersays?: ondewoNlu013.Intent.TrainingPhrase.AsObject;
		languageCode?: string;
		detectedIntents?: DetectedIntent.AsObject[];
		contexts?: ondewoNlu006.Context.AsObject[];
		contextsOut?: ondewoNlu006.Context.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionReviewStep
	 */
	interface AsProtobufJSON {
		annotatedUsersays?: ondewoNlu013.Intent.TrainingPhrase.AsProtobufJSON | null;
		languageCode?: string;
		detectedIntents?: DetectedIntent.AsProtobufJSON[] | null;
		contexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
		contextsOut?: ondewoNlu006.Context.AsProtobufJSON[] | null;
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
	private _score?;
	private _algorithm?;
	private _fulfillmentMessages?;
	private _requiredParamMissing?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectedIntent to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DetectedIntent.AsObject>);
	get intent(): ondewoNlu013.Intent | undefined;
	set intent(value: ondewoNlu013.Intent | undefined);
	get score(): number | undefined;
	set score(value: number | undefined);
	get algorithm(): string | undefined;
	set algorithm(value: string | undefined);
	get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined);
	get requiredParamMissing(): boolean | undefined;
	set requiredParamMissing(value: boolean | undefined);
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
		score?: number;
		algorithm?: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
		requiredParamMissing?: boolean;
	}
	/**
	 * Protobuf JSON representation for DetectedIntent
	 */
	interface AsProtobufJSON {
		intent?: ondewoNlu013.Intent.AsProtobufJSON | null;
		score?: number;
		algorithm?: string;
		fulfillmentMessages?: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
		requiredParamMissing?: boolean;
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
	private _parent?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionLabelsRequest.AsObject>);
	get parent(): string | undefined;
	set parent(value: string | undefined);
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
		parent?: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		parent?: string;
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
	private _labels?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionLabelsResponse.AsObject>);
	get labels(): string[] | undefined;
	set labels(value: string[] | undefined);
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
		labels?: string[];
	}
	/**
	 * Protobuf JSON representation for ListSessionLabelsResponse
	 */
	interface AsProtobufJSON {
		labels?: string[];
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
	private _sessionId?;
	private _labels?;
	private _sessionView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddSessionLabelsRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get labels(): string[] | undefined;
	set labels(value: string[] | undefined);
	get sessionView(): Session.View | undefined;
	set sessionView(value: Session.View | undefined);
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
		sessionId?: string;
		labels?: string[];
		sessionView?: Session.View;
	}
	/**
	 * Protobuf JSON representation for AddSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		labels?: string[];
		sessionView?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.RemoveSessionLabelsRequest
 */
export declare class RemoveSessionLabelsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): RemoveSessionLabelsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: RemoveSessionLabelsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: RemoveSessionLabelsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: RemoveSessionLabelsRequest, _writer: BinaryWriter): void;
	private _sessionId?;
	private _labels?;
	private _sessionView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of RemoveSessionLabelsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<RemoveSessionLabelsRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get labels(): string[] | undefined;
	set labels(value: string[] | undefined);
	get sessionView(): Session.View | undefined;
	set sessionView(value: Session.View | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): RemoveSessionLabelsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): RemoveSessionLabelsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): RemoveSessionLabelsRequest.AsProtobufJSON;
}
export declare module RemoveSessionLabelsRequest {
	/**
	 * Standard JavaScript object representation for RemoveSessionLabelsRequest
	 */
	interface AsObject {
		sessionId?: string;
		labels?: string[];
		sessionView?: Session.View;
	}
	/**
	 * Protobuf JSON representation for RemoveSessionLabelsRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		labels?: string[];
		sessionView?: string;
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
	private _sessionId?;
	private _sessionReviewView?;
	private _pageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionReviewsRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get sessionReviewView(): SessionReview.View | undefined;
	set sessionReviewView(value: SessionReview.View | undefined);
	get pageToken(): string | undefined;
	set pageToken(value: string | undefined);
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
		sessionId?: string;
		sessionReviewView?: SessionReview.View;
		pageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionReviewsRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		sessionReviewView?: string;
		pageToken?: string;
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
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionReviewsResponse.AsObject>);
	get sessionReviews(): SessionReview[] | undefined;
	set sessionReviews(value: SessionReview[] | undefined);
	get nextPageToken(): string | undefined;
	set nextPageToken(value: string | undefined);
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
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionReviewsResponse
	 */
	interface AsProtobufJSON {
		sessionReviews?: SessionReview.AsProtobufJSON[] | null;
		nextPageToken?: string;
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
	private _sessionReviewId?;
	private _sessionReviewView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSessionReviewRequest.AsObject>);
	get sessionReviewId(): string | undefined;
	set sessionReviewId(value: string | undefined);
	get sessionReviewView(): SessionReview.View | undefined;
	set sessionReviewView(value: SessionReview.View | undefined);
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
		sessionReviewId?: string;
		sessionReviewView?: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for GetSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionReviewId?: string;
		sessionReviewView?: string;
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
	private _sessionId?;
	private _sessionReviewView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetLatestSessionReviewRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetLatestSessionReviewRequest.AsObject>);
	get sessionId(): string | undefined;
	set sessionId(value: string | undefined);
	get sessionReviewView(): SessionReview.View | undefined;
	set sessionReviewView(value: SessionReview.View | undefined);
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
		sessionId?: string;
		sessionReviewView?: SessionReview.View;
	}
	/**
	 * Protobuf JSON representation for GetLatestSessionReviewRequest
	 */
	interface AsProtobufJSON {
		sessionId?: string;
		sessionReviewView?: string;
	}
}
