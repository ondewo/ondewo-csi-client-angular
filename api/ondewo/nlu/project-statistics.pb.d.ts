import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
/**
 * Message implementation for ondewo.nlu.GetIntentCountRequest
 */
export declare class GetIntentCountRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetIntentCountRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetIntentCountRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetIntentCountRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetIntentCountRequest, _writer: BinaryWriter): void;
    private _parent;
    private _filterByCategory;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIntentCountRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetIntentCountRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get filterByCategory(): ondewoNlu010.IntentCategory;
    set filterByCategory(value: ondewoNlu010.IntentCategory);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetIntentCountRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetIntentCountRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetIntentCountRequest.AsProtobufJSON;
}
export declare namespace GetIntentCountRequest {
    /**
     * Standard JavaScript object representation for GetIntentCountRequest
     */
    interface AsObject {
        parent: string;
        filterByCategory: ondewoNlu010.IntentCategory;
    }
    /**
     * Protobuf JSON representation for GetIntentCountRequest
     */
    interface AsProtobufJSON {
        parent: string;
        filterByCategory: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetEntityTypeCountRequest
 */
export declare class GetEntityTypeCountRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetEntityTypeCountRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetEntityTypeCountRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetEntityTypeCountRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetEntityTypeCountRequest, _writer: BinaryWriter): void;
    private _parent;
    private _filterByCategory;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetEntityTypeCountRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetEntityTypeCountRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get filterByCategory(): ondewoNlu011.EntityTypeCategory;
    set filterByCategory(value: ondewoNlu011.EntityTypeCategory);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetEntityTypeCountRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetEntityTypeCountRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetEntityTypeCountRequest.AsProtobufJSON;
}
export declare namespace GetEntityTypeCountRequest {
    /**
     * Standard JavaScript object representation for GetEntityTypeCountRequest
     */
    interface AsObject {
        parent: string;
        filterByCategory: ondewoNlu011.EntityTypeCategory;
    }
    /**
     * Protobuf JSON representation for GetEntityTypeCountRequest
     */
    interface AsProtobufJSON {
        parent: string;
        filterByCategory: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetProjectStatRequest
 */
export declare class GetProjectStatRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetProjectStatRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetProjectStatRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetProjectStatRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetProjectStatRequest, _writer: BinaryWriter): void;
    private _parent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectStatRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetProjectStatRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetProjectStatRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetProjectStatRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectStatRequest.AsProtobufJSON;
}
export declare namespace GetProjectStatRequest {
    /**
     * Standard JavaScript object representation for GetProjectStatRequest
     */
    interface AsObject {
        parent: string;
    }
    /**
     * Protobuf JSON representation for GetProjectStatRequest
     */
    interface AsProtobufJSON {
        parent: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetProjectElementStatRequest
 */
export declare class GetProjectElementStatRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetProjectElementStatRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetProjectElementStatRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetProjectElementStatRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetProjectElementStatRequest, _writer: BinaryWriter): void;
    private _name;
    private _languageCode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectElementStatRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetProjectElementStatRequest.AsObject>);
    get name(): string;
    set name(value: string);
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
    toObject(): GetProjectElementStatRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetProjectElementStatRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectElementStatRequest.AsProtobufJSON;
}
export declare namespace GetProjectElementStatRequest {
    /**
     * Standard JavaScript object representation for GetProjectElementStatRequest
     */
    interface AsObject {
        name: string;
        languageCode: string;
    }
    /**
     * Protobuf JSON representation for GetProjectElementStatRequest
     */
    interface AsProtobufJSON {
        name: string;
        languageCode: string;
    }
}
