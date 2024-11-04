import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as ondewoNlu009 from '../../ondewo/nlu/common.pb';
export declare enum EntityTypeView {
    ENTITY_TYPE_VIEW_UNSPECIFIED = 0,
    ENTITY_TYPE_VIEW_FULL = 1,
    ENTITY_TYPE_VIEW_PARTIAL = 2,
    ENTITY_TYPE_VIEW_SHALLOW = 3,
    ENTITY_TYPE_VIEW_MINIMUM = 4
}
export declare enum EntityTypeCategory {
    ALL_ENTITY_TYPES = 0,
    DEFAULT_ENTITY_TYPES = 1,
    USER_DEFINED_ENTITY_TYPES = 2
}
/**
 * Message implementation for ondewo.nlu.EntityType
 */
export declare class EntityType implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityType;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityType): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityType, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityType, _writer: BinaryWriter): void;
    private _name;
    private _displayName;
    private _kind;
    private _autoExpansionMode;
    private _entities?;
    private _nextPageToken;
    private _entityCount;
    private _status;
    private _synonymCount;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityType to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityType.AsObject>);
    get name(): string;
    set name(value: string);
    get displayName(): string;
    set displayName(value: string);
    get kind(): EntityType.Kind;
    set kind(value: EntityType.Kind);
    get autoExpansionMode(): EntityType.AutoExpansionMode;
    set autoExpansionMode(value: EntityType.AutoExpansionMode);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get nextPageToken(): string;
    set nextPageToken(value: string);
    get entityCount(): number;
    set entityCount(value: number);
    get status(): EntityType.EntityTypeStatus;
    set status(value: EntityType.EntityTypeStatus);
    get synonymCount(): number;
    set synonymCount(value: number);
    get createdAt(): googleProtobuf003.Timestamp | undefined;
    set createdAt(value: googleProtobuf003.Timestamp | undefined);
    get modifiedAt(): googleProtobuf003.Timestamp | undefined;
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined);
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
    toObject(): EntityType.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityType.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityType.AsProtobufJSON;
}
export declare namespace EntityType {
    /**
     * Standard JavaScript object representation for EntityType
     */
    interface AsObject {
        name: string;
        displayName: string;
        kind: EntityType.Kind;
        autoExpansionMode: EntityType.AutoExpansionMode;
        entities?: EntityType.Entity.AsObject[];
        nextPageToken: string;
        entityCount: number;
        status: EntityType.EntityTypeStatus;
        synonymCount: number;
        createdAt?: googleProtobuf003.Timestamp.AsObject;
        modifiedAt?: googleProtobuf003.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
    }
    /**
     * Protobuf JSON representation for EntityType
     */
    interface AsProtobufJSON {
        name: string;
        displayName: string;
        kind: string;
        autoExpansionMode: string;
        entities: EntityType.Entity.AsProtobufJSON[] | null;
        nextPageToken: string;
        entityCount: number;
        status: string;
        synonymCount: number;
        createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
    }
    enum Kind {
        KIND_UNSPECIFIED = 0,
        KIND_MAP = 1,
        KIND_LIST = 2
    }
    enum EntityTypeStatus {
        ACTIVE = 0,
        INACTIVE = 1
    }
    enum AutoExpansionMode {
        AUTO_EXPANSION_MODE_UNSPECIFIED = 0,
        AUTO_EXPANSION_MODE_DEFAULT = 1
    }
    /**
     * Message implementation for ondewo.nlu.EntityType.Entity
     */
    class Entity implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Entity;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Entity): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Entity, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter): void;
        private _value;
        private _synonyms;
        private _name;
        private _displayName;
        private _synonymCount;
        private _languageCode;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Entity to deeply clone from
         */
        constructor(_value?: RecursivePartial<Entity.AsObject>);
        get value(): string;
        set value(value: string);
        get synonyms(): string[];
        set synonyms(value: string[]);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get synonymCount(): number;
        set synonymCount(value: number);
        get languageCode(): string;
        set languageCode(value: string);
        get createdAt(): googleProtobuf003.Timestamp | undefined;
        set createdAt(value: googleProtobuf003.Timestamp | undefined);
        get modifiedAt(): googleProtobuf003.Timestamp | undefined;
        set modifiedAt(value: googleProtobuf003.Timestamp | undefined);
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
        toObject(): Entity.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Entity.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Entity.AsProtobufJSON;
    }
    namespace Entity {
        /**
         * Standard JavaScript object representation for Entity
         */
        interface AsObject {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
            languageCode: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for Entity
         */
        interface AsProtobufJSON {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
            languageCode: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntityTypesRequest
 */
export declare class ListEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _pageToken;
    private _entityTypeView;
    private _filterByCategory;
    private _sortByField?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntityTypesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get entityTypeView(): EntityTypeView;
    set entityTypeView(value: EntityTypeView);
    get filterByCategory(): EntityTypeCategory;
    set filterByCategory(value: EntityTypeCategory);
    get sortByField(): EntityTypeSorting | undefined;
    set sortByField(value: EntityTypeSorting | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntityTypesRequest.AsProtobufJSON;
}
export declare namespace ListEntityTypesRequest {
    /**
     * Standard JavaScript object representation for ListEntityTypesRequest
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: EntityTypeView;
        filterByCategory: EntityTypeCategory;
        sortByField?: EntityTypeSorting.AsObject;
    }
    /**
     * Protobuf JSON representation for ListEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: string;
        filterByCategory: string;
        sortByField: EntityTypeSorting.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntityTypesResponse
 */
export declare class ListEntityTypesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntityTypesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntityTypesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntityTypesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntityTypesResponse, _writer: BinaryWriter): void;
    private _entityTypes?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntityTypesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntityTypesResponse.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
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
    toObject(): ListEntityTypesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntityTypesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntityTypesResponse.AsProtobufJSON;
}
export declare namespace ListEntityTypesResponse {
    /**
     * Standard JavaScript object representation for ListEntityTypesResponse
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListEntityTypesResponse
     */
    interface AsProtobufJSON {
        entityTypes: EntityType.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetEntityTypeRequest
 */
export declare class GetEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetEntityTypeRequest, _writer: BinaryWriter): void;
    private _name;
    private _languageCode;
    private _pageToken;
    private _entityTypeView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetEntityTypeRequest.AsObject>);
    get name(): string;
    set name(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get entityTypeView(): EntityTypeView;
    set entityTypeView(value: EntityTypeView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetEntityTypeRequest.AsProtobufJSON;
}
export declare namespace GetEntityTypeRequest {
    /**
     * Standard JavaScript object representation for GetEntityTypeRequest
     */
    interface AsObject {
        name: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: EntityTypeView;
    }
    /**
     * Protobuf JSON representation for GetEntityTypeRequest
     */
    interface AsProtobufJSON {
        name: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateEntityTypeRequest
 */
export declare class CreateEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateEntityTypeRequest, _writer: BinaryWriter): void;
    private _parent;
    private _entityType?;
    private _languageCode;
    private _entityTypeView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateEntityTypeRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string;
    set languageCode(value: string);
    get entityTypeView(): EntityTypeView;
    set entityTypeView(value: EntityTypeView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateEntityTypeRequest.AsProtobufJSON;
}
export declare namespace CreateEntityTypeRequest {
    /**
     * Standard JavaScript object representation for CreateEntityTypeRequest
     */
    interface AsObject {
        parent: string;
        entityType?: EntityType.AsObject;
        languageCode: string;
        entityTypeView: EntityTypeView;
    }
    /**
     * Protobuf JSON representation for CreateEntityTypeRequest
     */
    interface AsProtobufJSON {
        parent: string;
        entityType: EntityType.AsProtobufJSON | null;
        languageCode: string;
        entityTypeView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateEntityTypeRequest
 */
export declare class UpdateEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateEntityTypeRequest, _writer: BinaryWriter): void;
    private _entityType?;
    private _languageCode;
    private _updateMask?;
    private _entityTypeView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateEntityTypeRequest.AsObject>);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string;
    set languageCode(value: string);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    get entityTypeView(): EntityTypeView;
    set entityTypeView(value: EntityTypeView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateEntityTypeRequest.AsProtobufJSON;
}
export declare namespace UpdateEntityTypeRequest {
    /**
     * Standard JavaScript object representation for UpdateEntityTypeRequest
     */
    interface AsObject {
        entityType?: EntityType.AsObject;
        languageCode: string;
        updateMask?: googleProtobuf002.FieldMask.AsObject;
        entityTypeView: EntityTypeView;
    }
    /**
     * Protobuf JSON representation for UpdateEntityTypeRequest
     */
    interface AsProtobufJSON {
        entityType: EntityType.AsProtobufJSON | null;
        languageCode: string;
        updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
        entityTypeView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteEntityTypeRequest
 */
export declare class DeleteEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteEntityTypeRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteEntityTypeRequest.AsObject>);
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
    toObject(): DeleteEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteEntityTypeRequest.AsProtobufJSON;
}
export declare namespace DeleteEntityTypeRequest {
    /**
     * Standard JavaScript object representation for DeleteEntityTypeRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for DeleteEntityTypeRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesRequest
 */
export declare class BatchUpdateEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _entityTypeBatchUri;
    private _entityTypeBatchInline?;
    private _languageCode;
    private _updateMask?;
    private _entityTypeBatch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntityTypesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get entityTypeBatchUri(): string;
    set entityTypeBatchUri(value: string);
    get entityTypeBatchInline(): EntityTypeBatch | undefined;
    set entityTypeBatchInline(value: EntityTypeBatch | undefined);
    get languageCode(): string;
    set languageCode(value: string);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    get entityTypeBatch(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntityTypesRequest.AsProtobufJSON;
}
export declare namespace BatchUpdateEntityTypesRequest {
    /**
     * Standard JavaScript object representation for BatchUpdateEntityTypesRequest
     */
    interface AsObject {
        parent: string;
        entityTypeBatchUri: string;
        entityTypeBatchInline?: EntityTypeBatch.AsObject;
        languageCode: string;
        updateMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        entityTypeBatchUri: string | null;
        entityTypeBatchInline: EntityTypeBatch.AsProtobufJSON | null;
        languageCode: string;
        updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
    enum EntityTypeBatchCase {
        none = 0,
        entityTypeBatchUri = 1,
        entityTypeBatchInline = 2
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesResponse
 */
export declare class BatchUpdateEntityTypesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntityTypesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntityTypesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntityTypesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntityTypesResponse, _writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntityTypesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntityTypesResponse.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntityTypesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntityTypesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntityTypesResponse.AsProtobufJSON;
}
export declare namespace BatchUpdateEntityTypesResponse {
    /**
     * Standard JavaScript object representation for BatchUpdateEntityTypesResponse
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntityTypesResponse
     */
    interface AsProtobufJSON {
        entityTypes: EntityType.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteEntityTypesRequest
 */
export declare class BatchDeleteEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _entityTypeNames;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteEntityTypesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get entityTypeNames(): string[];
    set entityTypeNames(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchDeleteEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteEntityTypesRequest.AsProtobufJSON;
}
export declare namespace BatchDeleteEntityTypesRequest {
    /**
     * Standard JavaScript object representation for BatchDeleteEntityTypesRequest
     */
    interface AsObject {
        parent: string;
        entityTypeNames: string[];
    }
    /**
     * Protobuf JSON representation for BatchDeleteEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        entityTypeNames: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeBatch
 */
export declare class EntityTypeBatch implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeBatch;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeBatch): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeBatch, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeBatch, _writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeBatch to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeBatch.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeBatch.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeBatch.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeBatch.AsProtobufJSON;
}
export declare namespace EntityTypeBatch {
    /**
     * Standard JavaScript object representation for EntityTypeBatch
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
    }
    /**
     * Protobuf JSON representation for EntityTypeBatch
     */
    interface AsProtobufJSON {
        entityTypes: EntityType.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeSorting
 */
export declare class EntityTypeSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeSorting, _writer: BinaryWriter): void;
    private _sortingField;
    private _sortingMode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeSorting.AsObject>);
    get sortingField(): EntityTypeSorting.EntityTypeSortingField;
    set sortingField(value: EntityTypeSorting.EntityTypeSortingField);
    get sortingMode(): ondewoNlu009.SortingMode;
    set sortingMode(value: ondewoNlu009.SortingMode);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeSorting.AsProtobufJSON;
}
export declare namespace EntityTypeSorting {
    /**
     * Standard JavaScript object representation for EntityTypeSorting
     */
    interface AsObject {
        sortingField: EntityTypeSorting.EntityTypeSortingField;
        sortingMode: ondewoNlu009.SortingMode;
    }
    /**
     * Protobuf JSON representation for EntityTypeSorting
     */
    interface AsProtobufJSON {
        sortingField: string;
        sortingMode: string;
    }
    enum EntityTypeSortingField {
        NO_ENTITY_TYPE_SORTING = 0,
        SORT_ENTITY_TYPE_BY_NAME = 1,
        SORT_ENTITY_TYPE_BY_CREATION_DATE = 2,
        SORT_ENTITY_TYPE_BY_LAST_UPDATED = 3,
        SORT_ENTITY_TYPE_BY_ENTITY_VALUE_COUNT = 4,
        SORT_ENTITY_TYPE_BY_SYNONYM_COUNT = 5
    }
}
/**
 * Message implementation for ondewo.nlu.EntityStatus
 */
export declare class EntityStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityStatus, _writer: BinaryWriter): void;
    private _entity?;
    private _errorMessage;
    private _entityOrStatus;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityStatus.AsObject>);
    get entity(): EntityType.Entity | undefined;
    set entity(value: EntityType.Entity | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    get entityOrStatus(): EntityStatus.EntityOrStatusCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityStatus.AsProtobufJSON;
}
export declare namespace EntityStatus {
    /**
     * Standard JavaScript object representation for EntityStatus
     */
    interface AsObject {
        entity?: EntityType.Entity.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for EntityStatus
     */
    interface AsProtobufJSON {
        entity: EntityType.Entity.AsProtobufJSON | null;
        errorMessage: string | null;
    }
    enum EntityOrStatusCase {
        none = 0,
        entity = 1,
        errorMessage = 2
    }
}
/**
 * Message implementation for ondewo.nlu.BatchEntitiesResponse
 */
export declare class BatchEntitiesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchEntitiesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchEntitiesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchEntitiesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchEntitiesResponse, _writer: BinaryWriter): void;
    private _entityStatuses?;
    private _hasErrors;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchEntitiesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchEntitiesResponse.AsObject>);
    get entityStatuses(): EntityStatus[] | undefined;
    set entityStatuses(value: EntityStatus[] | undefined);
    get hasErrors(): boolean;
    set hasErrors(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchEntitiesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchEntitiesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchEntitiesResponse.AsProtobufJSON;
}
export declare namespace BatchEntitiesResponse {
    /**
     * Standard JavaScript object representation for BatchEntitiesResponse
     */
    interface AsObject {
        entityStatuses?: EntityStatus.AsObject[];
        hasErrors: boolean;
    }
    /**
     * Protobuf JSON representation for BatchEntitiesResponse
     */
    interface AsProtobufJSON {
        entityStatuses: EntityStatus.AsProtobufJSON[] | null;
        hasErrors: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateEntityRequest
 */
export declare class CreateEntityRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateEntityRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateEntityRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateEntityRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateEntityRequest, _writer: BinaryWriter): void;
    private _entityTypeName;
    private _entity?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateEntityRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateEntityRequest.AsObject>);
    get entityTypeName(): string;
    set entityTypeName(value: string);
    get entity(): EntityType.Entity | undefined;
    set entity(value: EntityType.Entity | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateEntityRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateEntityRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateEntityRequest.AsProtobufJSON;
}
export declare namespace CreateEntityRequest {
    /**
     * Standard JavaScript object representation for CreateEntityRequest
     */
    interface AsObject {
        entityTypeName: string;
        entity?: EntityType.Entity.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateEntityRequest
     */
    interface AsProtobufJSON {
        entityTypeName: string;
        entity: EntityType.Entity.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchCreateEntitiesRequest
 */
export declare class BatchCreateEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchCreateEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchCreateEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchCreateEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchCreateEntitiesRequest, _writer: BinaryWriter): void;
    private _createEntityRequests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchCreateEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchCreateEntitiesRequest.AsObject>);
    get createEntityRequests(): CreateEntityRequest[] | undefined;
    set createEntityRequests(value: CreateEntityRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchCreateEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchCreateEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchCreateEntitiesRequest.AsProtobufJSON;
}
export declare namespace BatchCreateEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchCreateEntitiesRequest
     */
    interface AsObject {
        createEntityRequests?: CreateEntityRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchCreateEntitiesRequest
     */
    interface AsProtobufJSON {
        createEntityRequests: CreateEntityRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntitiesRequest
 */
export declare class BatchUpdateEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntitiesRequest, _writer: BinaryWriter): void;
    private _entities?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntitiesRequest.AsObject>);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntitiesRequest.AsProtobufJSON;
}
export declare namespace BatchUpdateEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchUpdateEntitiesRequest
     */
    interface AsObject {
        entities?: EntityType.Entity.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntitiesRequest
     */
    interface AsProtobufJSON {
        entities: EntityType.Entity.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateEntityRequest
 */
export declare class UpdateEntityRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateEntityRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateEntityRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateEntityRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateEntityRequest, _writer: BinaryWriter): void;
    private _entity?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateEntityRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateEntityRequest.AsObject>);
    get entity(): EntityType.Entity | undefined;
    set entity(value: EntityType.Entity | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateEntityRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateEntityRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateEntityRequest.AsProtobufJSON;
}
export declare namespace UpdateEntityRequest {
    /**
     * Standard JavaScript object representation for UpdateEntityRequest
     */
    interface AsObject {
        entity?: EntityType.Entity.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateEntityRequest
     */
    interface AsProtobufJSON {
        entity: EntityType.Entity.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GetEntityRequest
 */
export declare class GetEntityRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetEntityRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetEntityRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetEntityRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetEntityRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetEntityRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetEntityRequest.AsObject>);
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
    toObject(): GetEntityRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetEntityRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetEntityRequest.AsProtobufJSON;
}
export declare namespace GetEntityRequest {
    /**
     * Standard JavaScript object representation for GetEntityRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for GetEntityRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchGetEntitiesRequest
 */
export declare class BatchGetEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchGetEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchGetEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchGetEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchGetEntitiesRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchGetEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchGetEntitiesRequest.AsObject>);
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
    toObject(): BatchGetEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchGetEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchGetEntitiesRequest.AsProtobufJSON;
}
export declare namespace BatchGetEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchGetEntitiesRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for BatchGetEntitiesRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteEntitiesRequest
 */
export declare class BatchDeleteEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteEntitiesRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteEntitiesRequest.AsObject>);
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
    toObject(): BatchDeleteEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteEntitiesRequest.AsProtobufJSON;
}
export declare namespace BatchDeleteEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchDeleteEntitiesRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for BatchDeleteEntitiesRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteEntityRequest
 */
export declare class DeleteEntityRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteEntityRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteEntityRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteEntityRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteEntityRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteEntityRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteEntityRequest.AsObject>);
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
    toObject(): DeleteEntityRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteEntityRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteEntityRequest.AsProtobufJSON;
}
export declare namespace DeleteEntityRequest {
    /**
     * Standard JavaScript object representation for DeleteEntityRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for DeleteEntityRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteEntityStatus
 */
export declare class DeleteEntityStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteEntityStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteEntityStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteEntityStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteEntityStatus, _writer: BinaryWriter): void;
    private _successfullyDeleted?;
    private _errorMessage;
    private _deleteStatus;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteEntityStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteEntityStatus.AsObject>);
    get successfullyDeleted(): googleProtobuf006.Empty | undefined;
    set successfullyDeleted(value: googleProtobuf006.Empty | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    get deleteStatus(): DeleteEntityStatus.DeleteStatusCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteEntityStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteEntityStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteEntityStatus.AsProtobufJSON;
}
export declare namespace DeleteEntityStatus {
    /**
     * Standard JavaScript object representation for DeleteEntityStatus
     */
    interface AsObject {
        successfullyDeleted?: googleProtobuf006.Empty.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for DeleteEntityStatus
     */
    interface AsProtobufJSON {
        successfullyDeleted: googleProtobuf006.Empty.AsProtobufJSON | null;
        errorMessage: string | null;
    }
    enum DeleteStatusCase {
        none = 0,
        successfullyDeleted = 1,
        errorMessage = 2
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteEntitiesResponse
 */
export declare class BatchDeleteEntitiesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteEntitiesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteEntitiesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteEntitiesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteEntitiesResponse, _writer: BinaryWriter): void;
    private _deleteStatuses?;
    private _hasErrors;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteEntitiesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteEntitiesResponse.AsObject>);
    get deleteStatuses(): DeleteEntityStatus[] | undefined;
    set deleteStatuses(value: DeleteEntityStatus[] | undefined);
    get hasErrors(): boolean;
    set hasErrors(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchDeleteEntitiesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteEntitiesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteEntitiesResponse.AsProtobufJSON;
}
export declare namespace BatchDeleteEntitiesResponse {
    /**
     * Standard JavaScript object representation for BatchDeleteEntitiesResponse
     */
    interface AsObject {
        deleteStatuses?: DeleteEntityStatus.AsObject[];
        hasErrors: boolean;
    }
    /**
     * Protobuf JSON representation for BatchDeleteEntitiesResponse
     */
    interface AsProtobufJSON {
        deleteStatuses: DeleteEntityStatus.AsProtobufJSON[] | null;
        hasErrors: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntitiesRequest
 */
export declare class ListEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntitiesRequest, _writer: BinaryWriter): void;
    private _entityTypeName;
    private _languageCode;
    private _pageToken;
    private _sortByField?;
    private _searchByPattern;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntitiesRequest.AsObject>);
    get entityTypeName(): string;
    set entityTypeName(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get sortByField(): EntityValueSorting | undefined;
    set sortByField(value: EntityValueSorting | undefined);
    get searchByPattern(): string;
    set searchByPattern(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntitiesRequest.AsProtobufJSON;
}
export declare namespace ListEntitiesRequest {
    /**
     * Standard JavaScript object representation for ListEntitiesRequest
     */
    interface AsObject {
        entityTypeName: string;
        languageCode: string;
        pageToken: string;
        sortByField?: EntityValueSorting.AsObject;
        searchByPattern: string;
    }
    /**
     * Protobuf JSON representation for ListEntitiesRequest
     */
    interface AsProtobufJSON {
        entityTypeName: string;
        languageCode: string;
        pageToken: string;
        sortByField: EntityValueSorting.AsProtobufJSON | null;
        searchByPattern: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntitiesResponse
 */
export declare class ListEntitiesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntitiesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntitiesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntitiesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntitiesResponse, _writer: BinaryWriter): void;
    private _entities?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntitiesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntitiesResponse.AsObject>);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
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
    toObject(): ListEntitiesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntitiesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntitiesResponse.AsProtobufJSON;
}
export declare namespace ListEntitiesResponse {
    /**
     * Standard JavaScript object representation for ListEntitiesResponse
     */
    interface AsObject {
        entities?: EntityType.Entity.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListEntitiesResponse
     */
    interface AsProtobufJSON {
        entities: EntityType.Entity.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityValueSorting
 */
export declare class EntityValueSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityValueSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityValueSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityValueSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityValueSorting, _writer: BinaryWriter): void;
    private _sortingField;
    private _sortingMode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityValueSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityValueSorting.AsObject>);
    get sortingField(): EntityValueSorting.EntityValueSortingField;
    set sortingField(value: EntityValueSorting.EntityValueSortingField);
    get sortingMode(): ondewoNlu009.SortingMode;
    set sortingMode(value: ondewoNlu009.SortingMode);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityValueSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityValueSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityValueSorting.AsProtobufJSON;
}
export declare namespace EntityValueSorting {
    /**
     * Standard JavaScript object representation for EntityValueSorting
     */
    interface AsObject {
        sortingField: EntityValueSorting.EntityValueSortingField;
        sortingMode: ondewoNlu009.SortingMode;
    }
    /**
     * Protobuf JSON representation for EntityValueSorting
     */
    interface AsProtobufJSON {
        sortingField: string;
        sortingMode: string;
    }
    enum EntityValueSortingField {
        NO_ENTITY_VALUE_SORTING = 0,
        SORT_ENTITY_VALUE_BY_DISPLAY_NAME = 1,
        SORT_ENTITY_VALUE_BY_VALUE = 2,
        SORT_ENTITY_VALUE_BY_SYNONYM_COUNT = 3
    }
}
