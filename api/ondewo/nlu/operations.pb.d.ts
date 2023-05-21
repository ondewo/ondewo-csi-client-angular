import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operation-metadata.pb';
/**
 * Message implementation for ondewo.nlu.Operation
 */
export declare class Operation implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Operation;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Operation): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Operation, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Operation, _writer: BinaryWriter): void;
	private _name;
	private _metadata?;
	private _done;
	private _error?;
	private _response?;
	private _result;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Operation to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Operation.AsObject>);
	get name(): string;
	set name(value: string);
	get metadata(): ondewoNlu007.OperationMetadata | undefined;
	set metadata(value: ondewoNlu007.OperationMetadata | undefined);
	get done(): boolean;
	set done(value: boolean);
	get error(): googleRpc006.Status | undefined;
	set error(value: googleRpc006.Status | undefined);
	get response(): googleProtobuf002.Any | undefined;
	set response(value: googleProtobuf002.Any | undefined);
	get result(): Operation.ResultCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Operation.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Operation.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Operation.AsProtobufJSON;
}
export declare module Operation {
	/**
	 * Standard JavaScript object representation for Operation
	 */
	interface AsObject {
		name: string;
		metadata?: ondewoNlu007.OperationMetadata.AsObject;
		done: boolean;
		error?: googleRpc006.Status.AsObject;
		response?: googleProtobuf002.Any.AsObject;
	}
	/**
	 * Protobuf JSON representation for Operation
	 */
	interface AsProtobufJSON {
		name: string;
		metadata: ondewoNlu007.OperationMetadata.AsProtobufJSON | null;
		done: boolean;
		error: googleRpc006.Status.AsProtobufJSON | null;
		response: googleProtobuf002.Any.AsProtobufJSON | null;
	}
	enum ResultCase {
		none = 0,
		error = 1,
		response = 2
	}
}
/**
 * Message implementation for ondewo.nlu.GetOperationRequest
 */
export declare class GetOperationRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetOperationRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetOperationRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetOperationRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetOperationRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetOperationRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetOperationRequest.AsObject>);
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
	toObject(): GetOperationRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetOperationRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetOperationRequest.AsProtobufJSON;
}
export declare module GetOperationRequest {
	/**
	 * Standard JavaScript object representation for GetOperationRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for GetOperationRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListOperationsRequest
 */
export declare class ListOperationsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOperationsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOperationsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOperationsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOperationsRequest, _writer: BinaryWriter): void;
	private _name;
	private _filter;
	private _pageSize;
	private _pageToken;
	private _operationFilter?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOperationsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOperationsRequest.AsObject>);
	get name(): string;
	set name(value: string);
	get filter(): string;
	set filter(value: string);
	get pageSize(): number;
	set pageSize(value: number);
	get pageToken(): string;
	set pageToken(value: string);
	get operationFilter(): OperationFilter | undefined;
	set operationFilter(value: OperationFilter | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListOperationsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOperationsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOperationsRequest.AsProtobufJSON;
}
export declare module ListOperationsRequest {
	/**
	 * Standard JavaScript object representation for ListOperationsRequest
	 */
	interface AsObject {
		name: string;
		filter: string;
		pageSize: number;
		pageToken: string;
		operationFilter?: OperationFilter.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListOperationsRequest
	 */
	interface AsProtobufJSON {
		name: string;
		filter: string;
		pageSize: number;
		pageToken: string;
		operationFilter: OperationFilter.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.OperationFilter
 */
export declare class OperationFilter implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): OperationFilter;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: OperationFilter): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: OperationFilter, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: OperationFilter, _writer: BinaryWriter): void;
	private _projectParents;
	private _statuses;
	private _types;
	private _startTime?;
	private _endTime?;
	private _userIds;
	private _startTimeOneof;
	private _endTimeOneof;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of OperationFilter to deeply clone from
	 */
	constructor(_value?: RecursivePartial<OperationFilter.AsObject>);
	get projectParents(): string[];
	set projectParents(value: string[]);
	get statuses(): ondewoNlu007.OperationMetadata.Status[];
	set statuses(value: ondewoNlu007.OperationMetadata.Status[]);
	get types(): ondewoNlu007.OperationMetadata.OperationType[];
	set types(value: ondewoNlu007.OperationMetadata.OperationType[]);
	get startTime(): googleProtobuf003.Timestamp | undefined;
	set startTime(value: googleProtobuf003.Timestamp | undefined);
	get endTime(): googleProtobuf003.Timestamp | undefined;
	set endTime(value: googleProtobuf003.Timestamp | undefined);
	get userIds(): string[];
	set userIds(value: string[]);
	get startTimeOneof(): OperationFilter.StartTimeOneofCase;
	get endTimeOneof(): OperationFilter.EndTimeOneofCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): OperationFilter.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): OperationFilter.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): OperationFilter.AsProtobufJSON;
}
export declare module OperationFilter {
	/**
	 * Standard JavaScript object representation for OperationFilter
	 */
	interface AsObject {
		projectParents: string[];
		statuses: ondewoNlu007.OperationMetadata.Status[];
		types: ondewoNlu007.OperationMetadata.OperationType[];
		startTime?: googleProtobuf003.Timestamp.AsObject;
		endTime?: googleProtobuf003.Timestamp.AsObject;
		userIds: string[];
	}
	/**
	 * Protobuf JSON representation for OperationFilter
	 */
	interface AsProtobufJSON {
		projectParents: string[];
		statuses: string[];
		types: string[];
		startTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
		endTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
		userIds: string[];
	}
	enum StartTimeOneofCase {
		none = 0,
		startTime = 1
	}
	enum EndTimeOneofCase {
		none = 0,
		endTime = 1
	}
}
/**
 * Message implementation for ondewo.nlu.ListOperationsResponse
 */
export declare class ListOperationsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListOperationsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListOperationsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListOperationsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListOperationsResponse, _writer: BinaryWriter): void;
	private _operations?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOperationsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListOperationsResponse.AsObject>);
	get operations(): Operation[] | undefined;
	set operations(value: Operation[] | undefined);
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
	toObject(): ListOperationsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListOperationsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListOperationsResponse.AsProtobufJSON;
}
export declare module ListOperationsResponse {
	/**
	 * Standard JavaScript object representation for ListOperationsResponse
	 */
	interface AsObject {
		operations?: Operation.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListOperationsResponse
	 */
	interface AsProtobufJSON {
		operations: Operation.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.CancelOperationRequest
 */
export declare class CancelOperationRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CancelOperationRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CancelOperationRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CancelOperationRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CancelOperationRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CancelOperationRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CancelOperationRequest.AsObject>);
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
	toObject(): CancelOperationRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CancelOperationRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CancelOperationRequest.AsProtobufJSON;
}
export declare module CancelOperationRequest {
	/**
	 * Standard JavaScript object representation for CancelOperationRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for CancelOperationRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteOperationRequest
 */
export declare class DeleteOperationRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteOperationRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteOperationRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteOperationRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteOperationRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteOperationRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteOperationRequest.AsObject>);
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
	toObject(): DeleteOperationRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteOperationRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteOperationRequest.AsProtobufJSON;
}
export declare module DeleteOperationRequest {
	/**
	 * Standard JavaScript object representation for DeleteOperationRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for DeleteOperationRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
