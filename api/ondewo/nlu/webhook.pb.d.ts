import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/session.pb';
/**
 * Message implementation for ondewo.nlu.PingRequest
 */
export declare class PingRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): PingRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: PingRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: PingRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: PingRequest, _writer: BinaryWriter): void;
	private _session?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PingRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<PingRequest.AsObject>);
	get session(): string | undefined;
	set session(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): PingRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): PingRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): PingRequest.AsProtobufJSON;
}
export declare module PingRequest {
	/**
	 * Standard JavaScript object representation for PingRequest
	 */
	interface AsObject {
		session?: string;
	}
	/**
	 * Protobuf JSON representation for PingRequest
	 */
	interface AsProtobufJSON {
		session?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.WebhookRequest
 */
export declare class WebhookRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): WebhookRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: WebhookRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: WebhookRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: WebhookRequest, _writer: BinaryWriter): void;
	private _session?;
	private _responseId?;
	private _queryResult?;
	private _originalDetectIntentRequest?;
	private _headers?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WebhookRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<WebhookRequest.AsObject>);
	get session(): string | undefined;
	set session(value: string | undefined);
	get responseId(): string | undefined;
	set responseId(value: string | undefined);
	get queryResult(): ondewoNlu014.QueryResult | undefined;
	set queryResult(value: ondewoNlu014.QueryResult | undefined);
	get originalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
	set originalDetectIntentRequest(value: OriginalDetectIntentRequest | undefined);
	get headers(): googleProtobuf009.Struct | undefined;
	set headers(value: googleProtobuf009.Struct | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): WebhookRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): WebhookRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): WebhookRequest.AsProtobufJSON;
}
export declare module WebhookRequest {
	/**
	 * Standard JavaScript object representation for WebhookRequest
	 */
	interface AsObject {
		session?: string;
		responseId?: string;
		queryResult?: ondewoNlu014.QueryResult.AsObject;
		originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject;
		headers?: googleProtobuf009.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for WebhookRequest
	 */
	interface AsProtobufJSON {
		session?: string;
		responseId?: string;
		queryResult?: ondewoNlu014.QueryResult.AsProtobufJSON | null;
		originalDetectIntentRequest?: OriginalDetectIntentRequest.AsProtobufJSON | null;
		headers?: googleProtobuf009.Struct.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.WebhookResponse
 */
export declare class WebhookResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): WebhookResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: WebhookResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: WebhookResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: WebhookResponse, _writer: BinaryWriter): void;
	private _fulfillmentText?;
	private _fulfillmentMessages?;
	private _source?;
	private _payload?;
	private _outputContexts?;
	private _followupEventInput?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WebhookResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<WebhookResponse.AsObject>);
	get fulfillmentText(): string | undefined;
	set fulfillmentText(value: string | undefined);
	get fulfillmentMessages(): ondewoNlu012.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu012.Intent.Message[] | undefined);
	get source(): string | undefined;
	set source(value: string | undefined);
	get payload(): googleProtobuf009.Struct | undefined;
	set payload(value: googleProtobuf009.Struct | undefined);
	get outputContexts(): ondewoNlu005.Context[] | undefined;
	set outputContexts(value: ondewoNlu005.Context[] | undefined);
	get followupEventInput(): ondewoNlu014.EventInput | undefined;
	set followupEventInput(value: ondewoNlu014.EventInput | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): WebhookResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): WebhookResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): WebhookResponse.AsProtobufJSON;
}
export declare module WebhookResponse {
	/**
	 * Standard JavaScript object representation for WebhookResponse
	 */
	interface AsObject {
		fulfillmentText?: string;
		fulfillmentMessages?: ondewoNlu012.Intent.Message.AsObject[];
		source?: string;
		payload?: googleProtobuf009.Struct.AsObject;
		outputContexts?: ondewoNlu005.Context.AsObject[];
		followupEventInput?: ondewoNlu014.EventInput.AsObject;
	}
	/**
	 * Protobuf JSON representation for WebhookResponse
	 */
	interface AsProtobufJSON {
		fulfillmentText?: string;
		fulfillmentMessages?: ondewoNlu012.Intent.Message.AsProtobufJSON[] | null;
		source?: string;
		payload?: googleProtobuf009.Struct.AsProtobufJSON | null;
		outputContexts?: ondewoNlu005.Context.AsProtobufJSON[] | null;
		followupEventInput?: ondewoNlu014.EventInput.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.OriginalDetectIntentRequest
 */
export declare class OriginalDetectIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): OriginalDetectIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: OriginalDetectIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: OriginalDetectIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: OriginalDetectIntentRequest, _writer: BinaryWriter): void;
	private _source?;
	private _payload?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of OriginalDetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<OriginalDetectIntentRequest.AsObject>);
	get source(): string | undefined;
	set source(value: string | undefined);
	get payload(): googleProtobuf009.Struct | undefined;
	set payload(value: googleProtobuf009.Struct | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): OriginalDetectIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): OriginalDetectIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): OriginalDetectIntentRequest.AsProtobufJSON;
}
export declare module OriginalDetectIntentRequest {
	/**
	 * Standard JavaScript object representation for OriginalDetectIntentRequest
	 */
	interface AsObject {
		source?: string;
		payload?: googleProtobuf009.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for OriginalDetectIntentRequest
	 */
	interface AsProtobufJSON {
		source?: string;
		payload?: googleProtobuf009.Struct.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.PingResponse
 */
export declare class PingResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): PingResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: PingResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: PingResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: PingResponse, _writer: BinaryWriter): void;
	private _isReachable?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PingResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<PingResponse.AsObject>);
	get isReachable(): boolean | undefined;
	set isReachable(value: boolean | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): PingResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): PingResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): PingResponse.AsProtobufJSON;
}
export declare module PingResponse {
	/**
	 * Standard JavaScript object representation for PingResponse
	 */
	interface AsObject {
		isReachable?: boolean;
	}
	/**
	 * Protobuf JSON representation for PingResponse
	 */
	interface AsProtobufJSON {
		isReachable?: boolean;
	}
}
