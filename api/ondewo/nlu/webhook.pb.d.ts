import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
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
	private _session;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PingRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<PingRequest.AsObject>);
	get session(): string;
	set session(value: string);
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
		session: string;
	}
	/**
	 * Protobuf JSON representation for PingRequest
	 */
	interface AsProtobufJSON {
		session: string;
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
	private _responseId;
	private _queryResult?;
	private _originalDetectIntentRequest?;
	private _session;
	private _headers?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WebhookRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<WebhookRequest.AsObject>);
	get responseId(): string;
	set responseId(value: string);
	get queryResult(): ondewoNlu014.QueryResult | undefined;
	set queryResult(value: ondewoNlu014.QueryResult | undefined);
	get originalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
	set originalDetectIntentRequest(value: OriginalDetectIntentRequest | undefined);
	get session(): string;
	set session(value: string);
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
		responseId: string;
		queryResult?: ondewoNlu014.QueryResult.AsObject;
		originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject;
		session: string;
		headers?: googleProtobuf009.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for WebhookRequest
	 */
	interface AsProtobufJSON {
		responseId: string;
		queryResult: ondewoNlu014.QueryResult.AsProtobufJSON | null;
		originalDetectIntentRequest: OriginalDetectIntentRequest.AsProtobufJSON | null;
		session: string;
		headers: googleProtobuf009.Struct.AsProtobufJSON | null;
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
	private _fulfillmentText;
	private _fulfillmentMessages?;
	private _source;
	private _payload?;
	private _outputContexts?;
	private _followupEventInput?;
	private _sessionEntityTypes?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WebhookResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<WebhookResponse.AsObject>);
	get fulfillmentText(): string;
	set fulfillmentText(value: string);
	get fulfillmentMessages(): ondewoNlu012.Intent.Message[] | undefined;
	set fulfillmentMessages(value: ondewoNlu012.Intent.Message[] | undefined);
	get source(): string;
	set source(value: string);
	get payload(): googleProtobuf009.Struct | undefined;
	set payload(value: googleProtobuf009.Struct | undefined);
	get outputContexts(): ondewoNlu008.Context[] | undefined;
	set outputContexts(value: ondewoNlu008.Context[] | undefined);
	get followupEventInput(): ondewoNlu014.EventInput | undefined;
	set followupEventInput(value: ondewoNlu014.EventInput | undefined);
	get sessionEntityTypes(): SessionEntityType[] | undefined;
	set sessionEntityTypes(value: SessionEntityType[] | undefined);
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
		fulfillmentText: string;
		fulfillmentMessages?: ondewoNlu012.Intent.Message.AsObject[];
		source: string;
		payload?: googleProtobuf009.Struct.AsObject;
		outputContexts?: ondewoNlu008.Context.AsObject[];
		followupEventInput?: ondewoNlu014.EventInput.AsObject;
		sessionEntityTypes?: SessionEntityType.AsObject[];
	}
	/**
	 * Protobuf JSON representation for WebhookResponse
	 */
	interface AsProtobufJSON {
		fulfillmentText: string;
		fulfillmentMessages: ondewoNlu012.Intent.Message.AsProtobufJSON[] | null;
		source: string;
		payload: googleProtobuf009.Struct.AsProtobufJSON | null;
		outputContexts: ondewoNlu008.Context.AsProtobufJSON[] | null;
		followupEventInput: ondewoNlu014.EventInput.AsProtobufJSON | null;
		sessionEntityTypes: SessionEntityType.AsProtobufJSON[] | null;
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
	private _source;
	private _payload?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of OriginalDetectIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<OriginalDetectIntentRequest.AsObject>);
	get source(): string;
	set source(value: string);
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
		source: string;
		payload?: googleProtobuf009.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for OriginalDetectIntentRequest
	 */
	interface AsProtobufJSON {
		source: string;
		payload: googleProtobuf009.Struct.AsProtobufJSON | null;
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
	private _isReachable;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PingResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<PingResponse.AsObject>);
	get isReachable(): boolean;
	set isReachable(value: boolean);
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
		isReachable: boolean;
	}
	/**
	 * Protobuf JSON representation for PingResponse
	 */
	interface AsProtobufJSON {
		isReachable: boolean;
	}
}
/**
 * Message implementation for ondewo.nlu.SessionEntityType
 */
export declare class SessionEntityType implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SessionEntityType;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SessionEntityType): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SessionEntityType, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SessionEntityType, _writer: BinaryWriter): void;
	private _name;
	private _entityOverrideMode;
	private _entities?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionEntityType to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SessionEntityType.AsObject>);
	get name(): string;
	set name(value: string);
	get entityOverrideMode(): SessionEntityType.EntityOverrideMode;
	set entityOverrideMode(value: SessionEntityType.EntityOverrideMode);
	get entities(): ondewoNlu013.EntityType.Entity[] | undefined;
	set entities(value: ondewoNlu013.EntityType.Entity[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SessionEntityType.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SessionEntityType.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SessionEntityType.AsProtobufJSON;
}
export declare module SessionEntityType {
	/**
	 * Standard JavaScript object representation for SessionEntityType
	 */
	interface AsObject {
		name: string;
		entityOverrideMode: SessionEntityType.EntityOverrideMode;
		entities?: ondewoNlu013.EntityType.Entity.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SessionEntityType
	 */
	interface AsProtobufJSON {
		name: string;
		entityOverrideMode: string;
		entities: ondewoNlu013.EntityType.Entity.AsProtobufJSON[] | null;
	}
	enum EntityOverrideMode {
		ENTITY_OVERRIDE_MODE_UNSPECIFIED = 0,
		ENTITY_OVERRIDE_MODE_OVERRIDE = 1,
		ENTITY_OVERRIDE_MODE_SUPPLEMENT = 2
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionEntityTypesRequest
 */
export declare class ListSessionEntityTypesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionEntityTypesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionEntityTypesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionEntityTypesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionEntityTypesRequest, _writer: BinaryWriter): void;
	private _parent;
	private _pageSize;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionEntityTypesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionEntityTypesRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get pageSize(): number;
	set pageSize(value: number);
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
	toObject(): ListSessionEntityTypesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionEntityTypesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionEntityTypesRequest.AsProtobufJSON;
}
export declare module ListSessionEntityTypesRequest {
	/**
	 * Standard JavaScript object representation for ListSessionEntityTypesRequest
	 */
	interface AsObject {
		parent: string;
		pageSize: number;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionEntityTypesRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		pageSize: number;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListSessionEntityTypesResponse
 */
export declare class ListSessionEntityTypesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSessionEntityTypesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSessionEntityTypesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSessionEntityTypesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSessionEntityTypesResponse, _writer: BinaryWriter): void;
	private _sessionEntityTypes?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionEntityTypesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSessionEntityTypesResponse.AsObject>);
	get sessionEntityTypes(): SessionEntityType[] | undefined;
	set sessionEntityTypes(value: SessionEntityType[] | undefined);
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
	toObject(): ListSessionEntityTypesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSessionEntityTypesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSessionEntityTypesResponse.AsProtobufJSON;
}
export declare module ListSessionEntityTypesResponse {
	/**
	 * Standard JavaScript object representation for ListSessionEntityTypesResponse
	 */
	interface AsObject {
		sessionEntityTypes?: SessionEntityType.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSessionEntityTypesResponse
	 */
	interface AsProtobufJSON {
		sessionEntityTypes: SessionEntityType.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetSessionEntityTypeRequest
 */
export declare class GetSessionEntityTypeRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetSessionEntityTypeRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetSessionEntityTypeRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetSessionEntityTypeRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetSessionEntityTypeRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionEntityTypeRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSessionEntityTypeRequest.AsObject>);
	get name(): string;
	set name(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetSessionEntityTypeRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetSessionEntityTypeRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionEntityTypeRequest.AsProtobufJSON;
}
export declare module GetSessionEntityTypeRequest {
	/**
	 * Standard JavaScript object representation for GetSessionEntityTypeRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for GetSessionEntityTypeRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.nlu.CreateSessionEntityTypeRequest
 */
export declare class CreateSessionEntityTypeRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateSessionEntityTypeRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateSessionEntityTypeRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateSessionEntityTypeRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateSessionEntityTypeRequest, _writer: BinaryWriter): void;
	private _parent;
	private _sessionEntityType?;
	private _sessionId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionEntityTypeRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSessionEntityTypeRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get sessionEntityType(): SessionEntityType | undefined;
	set sessionEntityType(value: SessionEntityType | undefined);
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
	toObject(): CreateSessionEntityTypeRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateSessionEntityTypeRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateSessionEntityTypeRequest.AsProtobufJSON;
}
export declare module CreateSessionEntityTypeRequest {
	/**
	 * Standard JavaScript object representation for CreateSessionEntityTypeRequest
	 */
	interface AsObject {
		parent: string;
		sessionEntityType?: SessionEntityType.AsObject;
		sessionId: string;
	}
	/**
	 * Protobuf JSON representation for CreateSessionEntityTypeRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		sessionEntityType: SessionEntityType.AsProtobufJSON | null;
		sessionId: string;
	}
}
/**
 * Message implementation for ondewo.nlu.UpdateSessionEntityTypeRequest
 */
export declare class UpdateSessionEntityTypeRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateSessionEntityTypeRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateSessionEntityTypeRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateSessionEntityTypeRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateSessionEntityTypeRequest, _writer: BinaryWriter): void;
	private _sessionEntityType?;
	private _updateMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateSessionEntityTypeRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateSessionEntityTypeRequest.AsObject>);
	get sessionEntityType(): SessionEntityType | undefined;
	set sessionEntityType(value: SessionEntityType | undefined);
	get updateMask(): googleProtobuf004.FieldMask | undefined;
	set updateMask(value: googleProtobuf004.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateSessionEntityTypeRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateSessionEntityTypeRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateSessionEntityTypeRequest.AsProtobufJSON;
}
export declare module UpdateSessionEntityTypeRequest {
	/**
	 * Standard JavaScript object representation for UpdateSessionEntityTypeRequest
	 */
	interface AsObject {
		sessionEntityType?: SessionEntityType.AsObject;
		updateMask?: googleProtobuf004.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateSessionEntityTypeRequest
	 */
	interface AsProtobufJSON {
		sessionEntityType: SessionEntityType.AsProtobufJSON | null;
		updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteSessionEntityTypeRequest
 */
export declare class DeleteSessionEntityTypeRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteSessionEntityTypeRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteSessionEntityTypeRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteSessionEntityTypeRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteSessionEntityTypeRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionEntityTypeRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSessionEntityTypeRequest.AsObject>);
	get name(): string;
	set name(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteSessionEntityTypeRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteSessionEntityTypeRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteSessionEntityTypeRequest.AsProtobufJSON;
}
export declare module DeleteSessionEntityTypeRequest {
	/**
	 * Standard JavaScript object representation for DeleteSessionEntityTypeRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for DeleteSessionEntityTypeRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
