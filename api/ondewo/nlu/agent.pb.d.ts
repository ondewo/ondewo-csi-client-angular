import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/project-role.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu017 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu018 from '../../ondewo/nlu/session.pb';
export declare enum AgentView {
    AGENT_VIEW_UNSPECIFIED = 0,
    AGENT_VIEW_FULL = 1,
    AGENT_VIEW_SHALLOW = 2,
    AGENT_VIEW_MINIMUM = 3
}
export declare enum InitiationProtocol {
    AS_SOON_AS_POSSIBLE = 0,
    WHEN_TRAINED = 1,
    NEVER = 2
}
export declare enum ReportType {
    ALL = 0,
    INTENT_PER_LANGUAGE = 1,
    ENTITY_PER_LANGUAGE = 2,
    ENTITY_COLLISION = 3,
    INTENT_GENERAL = 4
}
export declare enum SessionsReportType {
    SESSIONS = 0,
    SESSION_STEPS = 1,
    SESSION_TOP_X_INTENTS = 2,
    SESSION_TOP_X_ENTITY_TYPES = 3,
    SESSION_TOP_X_ENTITY_VALUES = 4,
    SESSION_TOP_X_USERS = 5,
    SESSION_TOP_X_LABELS = 6,
    SESSION_TOP_X_TAGS = 7,
    SESSION_TOP_X_PHONE_NUMBERS = 8,
    SESSION_HUMAN_HANDOVERS = 9,
    SESSION_SQL_QUERY = 10,
    SESSION_LEAST_X_INTENTS = 11,
    SESSION_LEAST_X_ENTITY_TYPES = 12,
    SESSION_LEAST_X_ENTITY_VALUES = 13,
    SESSION_LEAST_X_USERS = 14,
    SESSION_LEAST_X_LABELS = 15,
    SESSION_LEAST_X_TAGS = 16,
    TOTAL_STATISTICS = 17
}
export declare enum ReportFormat {
    CSV = 0,
    HTML = 1,
    JSON = 2
}
export declare enum AgentStatus {
    ACTIVE = 0,
    INACTIVE = 1
}
/**
 * Message implementation for ondewo.nlu.Agent
 */
export declare class Agent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Agent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Agent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Agent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Agent, _writer: BinaryWriter): void;
    private _parent;
    private _displayName;
    private _defaultLanguageCode;
    private _supportedLanguageCodes;
    private _timeZone;
    private _nluPlatform;
    private _configs?;
    private _ownerId;
    private _status;
    private _description;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Agent to deeply clone from
     */
    constructor(_value?: RecursivePartial<Agent.AsObject>);
    get parent(): string;
    set parent(value: string);
    get displayName(): string;
    set displayName(value: string);
    get defaultLanguageCode(): string;
    set defaultLanguageCode(value: string);
    get supportedLanguageCodes(): string[];
    set supportedLanguageCodes(value: string[]);
    get timeZone(): string;
    set timeZone(value: string);
    get nluPlatform(): string;
    set nluPlatform(value: string);
    get configs(): googleProtobuf009.Struct | undefined;
    set configs(value: googleProtobuf009.Struct | undefined);
    get ownerId(): string;
    set ownerId(value: string);
    get status(): AgentStatus;
    set status(value: AgentStatus);
    get description(): string;
    set description(value: string);
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
    toObject(): Agent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Agent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Agent.AsProtobufJSON;
}
export declare namespace Agent {
    /**
     * Standard JavaScript object representation for Agent
     */
    interface AsObject {
        parent: string;
        displayName: string;
        defaultLanguageCode: string;
        supportedLanguageCodes: string[];
        timeZone: string;
        nluPlatform: string;
        configs?: googleProtobuf009.Struct.AsObject;
        ownerId: string;
        status: AgentStatus;
        description: string;
        createdAt?: googleProtobuf003.Timestamp.AsObject;
        modifiedAt?: googleProtobuf003.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
    }
    /**
     * Protobuf JSON representation for Agent
     */
    interface AsProtobufJSON {
        parent: string;
        displayName: string;
        defaultLanguageCode: string;
        supportedLanguageCodes: string[];
        timeZone: string;
        nluPlatform: string;
        configs: googleProtobuf009.Struct.AsProtobufJSON | null;
        ownerId: string;
        status: string;
        description: string;
        createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
    }
}
/**
 * Message implementation for ondewo.nlu.AgentWithOwner
 */
export declare class AgentWithOwner implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AgentWithOwner;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AgentWithOwner): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AgentWithOwner, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AgentWithOwner, _writer: BinaryWriter): void;
    private _agent?;
    private _owner?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentWithOwner to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentWithOwner.AsObject>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get owner(): ondewoNlu017.User | undefined;
    set owner(value: ondewoNlu017.User | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AgentWithOwner.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AgentWithOwner.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AgentWithOwner.AsProtobufJSON;
}
export declare namespace AgentWithOwner {
    /**
     * Standard JavaScript object representation for AgentWithOwner
     */
    interface AsObject {
        agent?: Agent.AsObject;
        owner?: ondewoNlu017.User.AsObject;
    }
    /**
     * Protobuf JSON representation for AgentWithOwner
     */
    interface AsProtobufJSON {
        agent: Agent.AsProtobufJSON | null;
        owner: ondewoNlu017.User.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.AgentOfUserWithOwner
 */
export declare class AgentOfUserWithOwner implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AgentOfUserWithOwner;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AgentOfUserWithOwner): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AgentOfUserWithOwner, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AgentOfUserWithOwner, _writer: BinaryWriter): void;
    private _agentWithOwner?;
    private _projectRole?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentOfUserWithOwner to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentOfUserWithOwner.AsObject>);
    get agentWithOwner(): AgentWithOwner | undefined;
    set agentWithOwner(value: AgentWithOwner | undefined);
    get projectRole(): ondewoNlu010.ProjectRole | undefined;
    set projectRole(value: ondewoNlu010.ProjectRole | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AgentOfUserWithOwner.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AgentOfUserWithOwner.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AgentOfUserWithOwner.AsProtobufJSON;
}
export declare namespace AgentOfUserWithOwner {
    /**
     * Standard JavaScript object representation for AgentOfUserWithOwner
     */
    interface AsObject {
        agentWithOwner?: AgentWithOwner.AsObject;
        projectRole?: ondewoNlu010.ProjectRole.AsObject;
    }
    /**
     * Protobuf JSON representation for AgentOfUserWithOwner
     */
    interface AsProtobufJSON {
        agentWithOwner: AgentWithOwner.AsProtobufJSON | null;
        projectRole: ondewoNlu010.ProjectRole.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateAgentRequest
 */
export declare class CreateAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateAgentRequest, _writer: BinaryWriter): void;
    private _agent?;
    private _agentView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateAgentRequest.AsObject>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView;
    set agentView(value: AgentView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateAgentRequest.AsProtobufJSON;
}
export declare namespace CreateAgentRequest {
    /**
     * Standard JavaScript object representation for CreateAgentRequest
     */
    interface AsObject {
        agent?: Agent.AsObject;
        agentView: AgentView;
    }
    /**
     * Protobuf JSON representation for CreateAgentRequest
     */
    interface AsProtobufJSON {
        agent: Agent.AsProtobufJSON | null;
        agentView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateAgentRequest
 */
export declare class UpdateAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateAgentRequest, _writer: BinaryWriter): void;
    private _agent?;
    private _agentView;
    private _updateMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateAgentRequest.AsObject>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView;
    set agentView(value: AgentView);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateAgentRequest.AsProtobufJSON;
}
export declare namespace UpdateAgentRequest {
    /**
     * Standard JavaScript object representation for UpdateAgentRequest
     */
    interface AsObject {
        agent?: Agent.AsObject;
        agentView: AgentView;
        updateMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateAgentRequest
     */
    interface AsProtobufJSON {
        agent: Agent.AsProtobufJSON | null;
        agentView: string;
        updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteAgentRequest
 */
export declare class DeleteAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteAgentRequest.AsObject>);
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
    toObject(): DeleteAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteAgentRequest.AsProtobufJSON;
}
export declare namespace DeleteAgentRequest {
    /**
     * Standard JavaScript object representation for DeleteAgentRequest
     */
    interface AsObject {
        parent: string;
    }
    /**
     * Protobuf JSON representation for DeleteAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetAgentRequest
 */
export declare class GetAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _agentView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get agentView(): AgentView;
    set agentView(value: AgentView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAgentRequest.AsProtobufJSON;
}
export declare namespace GetAgentRequest {
    /**
     * Standard JavaScript object representation for GetAgentRequest
     */
    interface AsObject {
        parent: string;
        agentView: AgentView;
    }
    /**
     * Protobuf JSON representation for GetAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        agentView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsRequest
 */
export declare class ListAgentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListAgentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListAgentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListAgentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListAgentsRequest, _writer: BinaryWriter): void;
    private _agentView;
    private _pageToken;
    private _sortByField?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsRequest.AsObject>);
    get agentView(): AgentView;
    set agentView(value: AgentView);
    get pageToken(): string;
    set pageToken(value: string);
    get sortByField(): AgentSorting | undefined;
    set sortByField(value: AgentSorting | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListAgentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListAgentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListAgentsRequest.AsProtobufJSON;
}
export declare namespace ListAgentsRequest {
    /**
     * Standard JavaScript object representation for ListAgentsRequest
     */
    interface AsObject {
        agentView: AgentView;
        pageToken: string;
        sortByField?: AgentSorting.AsObject;
    }
    /**
     * Protobuf JSON representation for ListAgentsRequest
     */
    interface AsProtobufJSON {
        agentView: string;
        pageToken: string;
        sortByField: AgentSorting.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsResponse
 */
export declare class ListAgentsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListAgentsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListAgentsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListAgentsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListAgentsResponse, _writer: BinaryWriter): void;
    private _agentsWithOwners?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsResponse.AsObject>);
    get agentsWithOwners(): AgentWithOwner[] | undefined;
    set agentsWithOwners(value: AgentWithOwner[] | undefined);
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
    toObject(): ListAgentsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListAgentsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListAgentsResponse.AsProtobufJSON;
}
export declare namespace ListAgentsResponse {
    /**
     * Standard JavaScript object representation for ListAgentsResponse
     */
    interface AsObject {
        agentsWithOwners?: AgentWithOwner.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListAgentsResponse
     */
    interface AsProtobufJSON {
        agentsWithOwners: AgentWithOwner.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsOfUserResponse
 */
export declare class ListAgentsOfUserResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListAgentsOfUserResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListAgentsOfUserResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListAgentsOfUserResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListAgentsOfUserResponse, _writer: BinaryWriter): void;
    private _agentsOfUserWithOwners?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsOfUserResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsOfUserResponse.AsObject>);
    get agentsOfUserWithOwners(): AgentOfUserWithOwner[] | undefined;
    set agentsOfUserWithOwners(value: AgentOfUserWithOwner[] | undefined);
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
    toObject(): ListAgentsOfUserResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListAgentsOfUserResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListAgentsOfUserResponse.AsProtobufJSON;
}
export declare namespace ListAgentsOfUserResponse {
    /**
     * Standard JavaScript object representation for ListAgentsOfUserResponse
     */
    interface AsObject {
        agentsOfUserWithOwners?: AgentOfUserWithOwner.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListAgentsOfUserResponse
     */
    interface AsProtobufJSON {
        agentsOfUserWithOwners: AgentOfUserWithOwner.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.TrainAgentRequest
 */
export declare class TrainAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TrainAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TrainAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TrainAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _branch;
    private _initiationProtocol;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get branch(): string;
    set branch(value: string);
    get initiationProtocol(): InitiationProtocol;
    set initiationProtocol(value: InitiationProtocol);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TrainAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TrainAgentRequest.AsProtobufJSON;
}
export declare namespace TrainAgentRequest {
    /**
     * Standard JavaScript object representation for TrainAgentRequest
     */
    interface AsObject {
        parent: string;
        branch: string;
        initiationProtocol: InitiationProtocol;
    }
    /**
     * Protobuf JSON representation for TrainAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        branch: string;
        initiationProtocol: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BuildCacheRequest
 */
export declare class BuildCacheRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BuildCacheRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BuildCacheRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BuildCacheRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BuildCacheRequest, _writer: BinaryWriter): void;
    private _parent;
    private _branch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BuildCacheRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BuildCacheRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get branch(): string;
    set branch(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BuildCacheRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BuildCacheRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BuildCacheRequest.AsProtobufJSON;
}
export declare namespace BuildCacheRequest {
    /**
     * Standard JavaScript object representation for BuildCacheRequest
     */
    interface AsObject {
        parent: string;
        branch: string;
    }
    /**
     * Protobuf JSON representation for BuildCacheRequest
     */
    interface AsProtobufJSON {
        parent: string;
        branch: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ExportAgentRequest
 */
export declare class ExportAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _agentUri;
    private _compressionLevel;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get agentUri(): string;
    set agentUri(value: string);
    get compressionLevel(): number;
    set compressionLevel(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExportAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportAgentRequest.AsProtobufJSON;
}
export declare namespace ExportAgentRequest {
    /**
     * Standard JavaScript object representation for ExportAgentRequest
     */
    interface AsObject {
        parent: string;
        agentUri: string;
        compressionLevel: number;
    }
    /**
     * Protobuf JSON representation for ExportAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        agentUri: string;
        compressionLevel: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ExportAgentResponse
 */
export declare class ExportAgentResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportAgentResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportAgentResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportAgentResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportAgentResponse, _writer: BinaryWriter): void;
    private _agentUri;
    private _agentContent;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportAgentResponse.AsObject>);
    get agentUri(): string;
    set agentUri(value: string);
    get agentContent(): Uint8Array;
    set agentContent(value: Uint8Array);
    get agent(): ExportAgentResponse.AgentCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExportAgentResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportAgentResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportAgentResponse.AsProtobufJSON;
}
export declare namespace ExportAgentResponse {
    /**
     * Standard JavaScript object representation for ExportAgentResponse
     */
    interface AsObject {
        agentUri: string;
        agentContent: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ExportAgentResponse
     */
    interface AsProtobufJSON {
        agentUri: string | null;
        agentContent: string;
    }
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
/**
 * Message implementation for ondewo.nlu.ExportBenchmarkAgentRequest
 */
export declare class ExportBenchmarkAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportBenchmarkAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportBenchmarkAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportBenchmarkAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportBenchmarkAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _compressionLevel;
    private _testSize;
    private _trainSize;
    private _randomState;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportBenchmarkAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get compressionLevel(): number;
    set compressionLevel(value: number);
    get testSize(): number;
    set testSize(value: number);
    get trainSize(): number;
    set trainSize(value: number);
    get randomState(): number;
    set randomState(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExportBenchmarkAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportBenchmarkAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportBenchmarkAgentRequest.AsProtobufJSON;
}
export declare namespace ExportBenchmarkAgentRequest {
    /**
     * Standard JavaScript object representation for ExportBenchmarkAgentRequest
     */
    interface AsObject {
        parent: string;
        compressionLevel: number;
        testSize: number;
        trainSize: number;
        randomState: number;
    }
    /**
     * Protobuf JSON representation for ExportBenchmarkAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        compressionLevel: number;
        testSize: number;
        trainSize: number;
        randomState: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ExportBenchmarkAgentResponse
 */
export declare class ExportBenchmarkAgentResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportBenchmarkAgentResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportBenchmarkAgentResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportBenchmarkAgentResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportBenchmarkAgentResponse, _writer: BinaryWriter): void;
    private _agentContent;
    private _trainingPhrases;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportBenchmarkAgentResponse.AsObject>);
    get agentContent(): Uint8Array;
    set agentContent(value: Uint8Array);
    get trainingPhrases(): {
        [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
    };
    set trainingPhrases(value: {
        [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
    });
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExportBenchmarkAgentResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportBenchmarkAgentResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportBenchmarkAgentResponse.AsProtobufJSON;
}
export declare namespace ExportBenchmarkAgentResponse {
    /**
     * Standard JavaScript object representation for ExportBenchmarkAgentResponse
     */
    interface AsObject {
        agentContent: Uint8Array;
        trainingPhrases: {
            [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
        };
    }
    /**
     * Protobuf JSON representation for ExportBenchmarkAgentResponse
     */
    interface AsProtobufJSON {
        agentContent: string;
        trainingPhrases: {
            [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
        };
    }
    /**
     * Message implementation for ondewo.nlu.ExportBenchmarkAgentResponse.TrainingPhrasesEntry
     */
    class TrainingPhrasesEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TrainingPhrasesEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TrainingPhrasesEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TrainingPhrasesEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TrainingPhrasesEntry, _writer: BinaryWriter): void;
        private _key;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhrasesEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<TrainingPhrasesEntry.AsObject>);
        get key(): string;
        set key(value: string);
        get value(): ondewoNlu015.ListTrainingPhrasesResponse | undefined;
        set value(value: ondewoNlu015.ListTrainingPhrasesResponse | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TrainingPhrasesEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TrainingPhrasesEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhrasesEntry.AsProtobufJSON;
    }
    namespace TrainingPhrasesEntry {
        /**
         * Standard JavaScript object representation for TrainingPhrasesEntry
         */
        interface AsObject {
            key: string;
            value?: ondewoNlu015.ListTrainingPhrasesResponse.AsObject;
        }
        /**
         * Protobuf JSON representation for TrainingPhrasesEntry
         */
        interface AsProtobufJSON {
            key: string;
            value: ondewoNlu015.ListTrainingPhrasesResponse.AsProtobufJSON | null;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchRequest
 */
export declare class OptimizeRankingMatchRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): OptimizeRankingMatchRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: OptimizeRankingMatchRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: OptimizeRankingMatchRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: OptimizeRankingMatchRequest, _writer: BinaryWriter): void;
    private _parent;
    private _languageCodes;
    private _optimizationConfigs?;
    private _inPlace;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OptimizeRankingMatchRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<OptimizeRankingMatchRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCodes(): string[];
    set languageCodes(value: string[]);
    get optimizationConfigs(): RankingMatchOptimizationConfig[] | undefined;
    set optimizationConfigs(value: RankingMatchOptimizationConfig[] | undefined);
    get inPlace(): boolean;
    set inPlace(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): OptimizeRankingMatchRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): OptimizeRankingMatchRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): OptimizeRankingMatchRequest.AsProtobufJSON;
}
export declare namespace OptimizeRankingMatchRequest {
    /**
     * Standard JavaScript object representation for OptimizeRankingMatchRequest
     */
    interface AsObject {
        parent: string;
        languageCodes: string[];
        optimizationConfigs?: RankingMatchOptimizationConfig.AsObject[];
        inPlace: boolean;
    }
    /**
     * Protobuf JSON representation for OptimizeRankingMatchRequest
     */
    interface AsProtobufJSON {
        parent: string;
        languageCodes: string[];
        optimizationConfigs: RankingMatchOptimizationConfig.AsProtobufJSON[] | null;
        inPlace: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.RankingMatchOptimizationConfig
 */
export declare class RankingMatchOptimizationConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RankingMatchOptimizationConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RankingMatchOptimizationConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RankingMatchOptimizationConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RankingMatchOptimizationConfig, _writer: BinaryWriter): void;
    private _languageCode;
    private _nSplits;
    private _randomSeed;
    private _initialThresholds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RankingMatchOptimizationConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RankingMatchOptimizationConfig.AsObject>);
    get languageCode(): string;
    set languageCode(value: string);
    get nSplits(): number;
    set nSplits(value: number);
    get randomSeed(): number;
    set randomSeed(value: number);
    get initialThresholds(): googleProtobuf009.Struct | undefined;
    set initialThresholds(value: googleProtobuf009.Struct | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RankingMatchOptimizationConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RankingMatchOptimizationConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RankingMatchOptimizationConfig.AsProtobufJSON;
}
export declare namespace RankingMatchOptimizationConfig {
    /**
     * Standard JavaScript object representation for RankingMatchOptimizationConfig
     */
    interface AsObject {
        languageCode: string;
        nSplits: number;
        randomSeed: number;
        initialThresholds?: googleProtobuf009.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for RankingMatchOptimizationConfig
     */
    interface AsProtobufJSON {
        languageCode: string;
        nSplits: number;
        randomSeed: number;
        initialThresholds: googleProtobuf009.Struct.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchResponse
 */
export declare class OptimizeRankingMatchResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): OptimizeRankingMatchResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: OptimizeRankingMatchResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: OptimizeRankingMatchResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: OptimizeRankingMatchResponse, _writer: BinaryWriter): void;
    private _optimizationInfo?;
    private _optimizedOndewoConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OptimizeRankingMatchResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<OptimizeRankingMatchResponse.AsObject>);
    get optimizationInfo(): googleProtobuf009.Struct | undefined;
    set optimizationInfo(value: googleProtobuf009.Struct | undefined);
    get optimizedOndewoConfig(): googleProtobuf009.Struct | undefined;
    set optimizedOndewoConfig(value: googleProtobuf009.Struct | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): OptimizeRankingMatchResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): OptimizeRankingMatchResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): OptimizeRankingMatchResponse.AsProtobufJSON;
}
export declare namespace OptimizeRankingMatchResponse {
    /**
     * Standard JavaScript object representation for OptimizeRankingMatchResponse
     */
    interface AsObject {
        optimizationInfo?: googleProtobuf009.Struct.AsObject;
        optimizedOndewoConfig?: googleProtobuf009.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for OptimizeRankingMatchResponse
     */
    interface AsProtobufJSON {
        optimizationInfo: googleProtobuf009.Struct.AsProtobufJSON | null;
        optimizedOndewoConfig: googleProtobuf009.Struct.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ImportAgentRequest
 */
export declare class ImportAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ImportAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ImportAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ImportAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ImportAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _agentUri;
    private _agentContent;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ImportAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ImportAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get agentUri(): string;
    set agentUri(value: string);
    get agentContent(): Uint8Array;
    set agentContent(value: Uint8Array);
    get agent(): ImportAgentRequest.AgentCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ImportAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ImportAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ImportAgentRequest.AsProtobufJSON;
}
export declare namespace ImportAgentRequest {
    /**
     * Standard JavaScript object representation for ImportAgentRequest
     */
    interface AsObject {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ImportAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        agentUri: string | null;
        agentContent: string;
    }
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
/**
 * Message implementation for ondewo.nlu.RestoreAgentRequest
 */
export declare class RestoreAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RestoreAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RestoreAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RestoreAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RestoreAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _agentUri;
    private _agentContent;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RestoreAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<RestoreAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get agentUri(): string;
    set agentUri(value: string);
    get agentContent(): Uint8Array;
    set agentContent(value: Uint8Array);
    get agent(): RestoreAgentRequest.AgentCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RestoreAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RestoreAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RestoreAgentRequest.AsProtobufJSON;
}
export declare namespace RestoreAgentRequest {
    /**
     * Standard JavaScript object representation for RestoreAgentRequest
     */
    interface AsObject {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    }
    /**
     * Protobuf JSON representation for RestoreAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        agentUri: string | null;
        agentContent: string;
    }
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsRequest
 */
export declare class GetAgentStatisticsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAgentStatisticsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAgentStatisticsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAgentStatisticsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAgentStatisticsRequest, _writer: BinaryWriter): void;
    private _parent;
    private _format;
    private _languageCode;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentStatisticsRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get format(): ReportFormat;
    set format(value: ReportFormat);
    get languageCode(): string;
    set languageCode(value: string);
    get type(): ReportType;
    set type(value: ReportType);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAgentStatisticsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAgentStatisticsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAgentStatisticsRequest.AsProtobufJSON;
}
export declare namespace GetAgentStatisticsRequest {
    /**
     * Standard JavaScript object representation for GetAgentStatisticsRequest
     */
    interface AsObject {
        parent: string;
        format: ReportFormat;
        languageCode: string;
        type: ReportType;
    }
    /**
     * Protobuf JSON representation for GetAgentStatisticsRequest
     */
    interface AsProtobufJSON {
        parent: string;
        format: string;
        languageCode: string;
        type: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsResponse
 */
export declare class GetAgentStatisticsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAgentStatisticsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAgentStatisticsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAgentStatisticsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAgentStatisticsResponse, _writer: BinaryWriter): void;
    private _reports;
    private _format;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentStatisticsResponse.AsObject>);
    get reports(): Uint8Array;
    set reports(value: Uint8Array);
    get format(): ReportFormat;
    set format(value: ReportFormat);
    get type(): ReportType;
    set type(value: ReportType);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAgentStatisticsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAgentStatisticsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAgentStatisticsResponse.AsProtobufJSON;
}
export declare namespace GetAgentStatisticsResponse {
    /**
     * Standard JavaScript object representation for GetAgentStatisticsResponse
     */
    interface AsObject {
        reports: Uint8Array;
        format: ReportFormat;
        type: ReportType;
    }
    /**
     * Protobuf JSON representation for GetAgentStatisticsResponse
     */
    interface AsProtobufJSON {
        reports: string;
        format: string;
        type: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetSessionsStatisticsRequest
 */
export declare class GetSessionsStatisticsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSessionsStatisticsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSessionsStatisticsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSessionsStatisticsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSessionsStatisticsRequest, _writer: BinaryWriter): void;
    private _parent;
    private _format;
    private _type;
    private _sessionFilter?;
    private _contextFilters?;
    private _limit;
    private _groupBys;
    private _orderBys;
    private _fieldMask?;
    private _sqlQuery;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionsStatisticsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSessionsStatisticsRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get format(): ReportFormat;
    set format(value: ReportFormat);
    get type(): SessionsReportType;
    set type(value: SessionsReportType);
    get sessionFilter(): ondewoNlu018.SessionFilter | undefined;
    set sessionFilter(value: ondewoNlu018.SessionFilter | undefined);
    get contextFilters(): ondewoNlu018.ContextFilter[] | undefined;
    set contextFilters(value: ondewoNlu018.ContextFilter[] | undefined);
    get limit(): number;
    set limit(value: number);
    get groupBys(): string[];
    set groupBys(value: string[]);
    get orderBys(): string[];
    set orderBys(value: string[]);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    get sqlQuery(): string;
    set sqlQuery(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSessionsStatisticsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSessionsStatisticsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionsStatisticsRequest.AsProtobufJSON;
}
export declare namespace GetSessionsStatisticsRequest {
    /**
     * Standard JavaScript object representation for GetSessionsStatisticsRequest
     */
    interface AsObject {
        parent: string;
        format: ReportFormat;
        type: SessionsReportType;
        sessionFilter?: ondewoNlu018.SessionFilter.AsObject;
        contextFilters?: ondewoNlu018.ContextFilter.AsObject[];
        limit: number;
        groupBys: string[];
        orderBys: string[];
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
        sqlQuery: string;
    }
    /**
     * Protobuf JSON representation for GetSessionsStatisticsRequest
     */
    interface AsProtobufJSON {
        parent: string;
        format: string;
        type: string;
        sessionFilter: ondewoNlu018.SessionFilter.AsProtobufJSON | null;
        contextFilters: ondewoNlu018.ContextFilter.AsProtobufJSON[] | null;
        limit: number;
        groupBys: string[];
        orderBys: string[];
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
        sqlQuery: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetSessionsStatisticsResponse
 */
export declare class GetSessionsStatisticsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSessionsStatisticsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSessionsStatisticsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSessionsStatisticsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSessionsStatisticsResponse, _writer: BinaryWriter): void;
    private _reports;
    private _format;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionsStatisticsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSessionsStatisticsResponse.AsObject>);
    get reports(): Uint8Array;
    set reports(value: Uint8Array);
    get format(): ReportFormat;
    set format(value: ReportFormat);
    get type(): SessionsReportType;
    set type(value: SessionsReportType);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSessionsStatisticsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSessionsStatisticsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionsStatisticsResponse.AsProtobufJSON;
}
export declare namespace GetSessionsStatisticsResponse {
    /**
     * Standard JavaScript object representation for GetSessionsStatisticsResponse
     */
    interface AsObject {
        reports: Uint8Array;
        format: ReportFormat;
        type: SessionsReportType;
    }
    /**
     * Protobuf JSON representation for GetSessionsStatisticsResponse
     */
    interface AsProtobufJSON {
        reports: string;
        format: string;
        type: string;
    }
}
/**
 * Message implementation for ondewo.nlu.AddUserToProjectRequest
 */
export declare class AddUserToProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddUserToProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddUserToProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddUserToProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddUserToProjectRequest, _writer: BinaryWriter): void;
    private _parent;
    private _userId;
    private _projectRoleId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddUserToProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddUserToProjectRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get userId(): string;
    set userId(value: string);
    get projectRoleId(): number;
    set projectRoleId(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddUserToProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddUserToProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddUserToProjectRequest.AsProtobufJSON;
}
export declare namespace AddUserToProjectRequest {
    /**
     * Standard JavaScript object representation for AddUserToProjectRequest
     */
    interface AsObject {
        parent: string;
        userId: string;
        projectRoleId: number;
    }
    /**
     * Protobuf JSON representation for AddUserToProjectRequest
     */
    interface AsProtobufJSON {
        parent: string;
        userId: string;
        projectRoleId: number;
    }
}
/**
 * Message implementation for ondewo.nlu.RemoveUserFromProjectRequest
 */
export declare class RemoveUserFromProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveUserFromProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveUserFromProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveUserFromProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveUserFromProjectRequest, _writer: BinaryWriter): void;
    private _parent;
    private _userId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveUserFromProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveUserFromProjectRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get userId(): string;
    set userId(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveUserFromProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveUserFromProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveUserFromProjectRequest.AsProtobufJSON;
}
export declare namespace RemoveUserFromProjectRequest {
    /**
     * Standard JavaScript object representation for RemoveUserFromProjectRequest
     */
    interface AsObject {
        parent: string;
        userId: string;
    }
    /**
     * Protobuf JSON representation for RemoveUserFromProjectRequest
     */
    interface AsProtobufJSON {
        parent: string;
        userId: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListUsersInProjectRequest
 */
export declare class ListUsersInProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListUsersInProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListUsersInProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListUsersInProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListUsersInProjectRequest, _writer: BinaryWriter): void;
    private _parent;
    private _pageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListUsersInProjectRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
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
    toObject(): ListUsersInProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListUsersInProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListUsersInProjectRequest.AsProtobufJSON;
}
export declare namespace ListUsersInProjectRequest {
    /**
     * Standard JavaScript object representation for ListUsersInProjectRequest
     */
    interface AsObject {
        parent: string;
        pageToken: string;
    }
    /**
     * Protobuf JSON representation for ListUsersInProjectRequest
     */
    interface AsProtobufJSON {
        parent: string;
        pageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UserInProject
 */
export declare class UserInProject implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UserInProject;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserInProject): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UserInProject, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserInProject, _writer: BinaryWriter): void;
    private _parent;
    private _user?;
    private _roleId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserInProject to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserInProject.AsObject>);
    get parent(): string;
    set parent(value: string);
    get user(): ondewoNlu017.User | undefined;
    set user(value: ondewoNlu017.User | undefined);
    get roleId(): number;
    set roleId(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserInProject.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UserInProject.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UserInProject.AsProtobufJSON;
}
export declare namespace UserInProject {
    /**
     * Standard JavaScript object representation for UserInProject
     */
    interface AsObject {
        parent: string;
        user?: ondewoNlu017.User.AsObject;
        roleId: number;
    }
    /**
     * Protobuf JSON representation for UserInProject
     */
    interface AsProtobufJSON {
        parent: string;
        user: ondewoNlu017.User.AsProtobufJSON | null;
        roleId: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ListUsersInProjectResponse
 */
export declare class ListUsersInProjectResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListUsersInProjectResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListUsersInProjectResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListUsersInProjectResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListUsersInProjectResponse, _writer: BinaryWriter): void;
    private _users?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListUsersInProjectResponse.AsObject>);
    get users(): UserInProject[] | undefined;
    set users(value: UserInProject[] | undefined);
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
    toObject(): ListUsersInProjectResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListUsersInProjectResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListUsersInProjectResponse.AsProtobufJSON;
}
export declare namespace ListUsersInProjectResponse {
    /**
     * Standard JavaScript object representation for ListUsersInProjectResponse
     */
    interface AsObject {
        users?: UserInProject.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListUsersInProjectResponse
     */
    interface AsProtobufJSON {
        users: UserInProject.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetPlatformInfoResponse
 */
export declare class GetPlatformInfoResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetPlatformInfoResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetPlatformInfoResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetPlatformInfoResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetPlatformInfoResponse, _writer: BinaryWriter): void;
    private _version;
    private _commitHash;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformInfoResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPlatformInfoResponse.AsObject>);
    get version(): string;
    set version(value: string);
    get commitHash(): string;
    set commitHash(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetPlatformInfoResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetPlatformInfoResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetPlatformInfoResponse.AsProtobufJSON;
}
export declare namespace GetPlatformInfoResponse {
    /**
     * Standard JavaScript object representation for GetPlatformInfoResponse
     */
    interface AsObject {
        version: string;
        commitHash: string;
    }
    /**
     * Protobuf JSON representation for GetPlatformInfoResponse
     */
    interface AsProtobufJSON {
        version: string;
        commitHash: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsRequest
 */
export declare class ListProjectPermissionsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListProjectPermissionsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListProjectPermissionsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListProjectPermissionsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListProjectPermissionsRequest, _writer: BinaryWriter): void;
    private _pageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectPermissionsRequest.AsObject>);
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
    toObject(): ListProjectPermissionsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListProjectPermissionsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListProjectPermissionsRequest.AsProtobufJSON;
}
export declare namespace ListProjectPermissionsRequest {
    /**
     * Standard JavaScript object representation for ListProjectPermissionsRequest
     */
    interface AsObject {
        pageToken: string;
    }
    /**
     * Protobuf JSON representation for ListProjectPermissionsRequest
     */
    interface AsProtobufJSON {
        pageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsResponse
 */
export declare class ListProjectPermissionsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListProjectPermissionsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListProjectPermissionsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListProjectPermissionsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListProjectPermissionsResponse, _writer: BinaryWriter): void;
    private _permissions;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectPermissionsResponse.AsObject>);
    get permissions(): string[];
    set permissions(value: string[]);
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
    toObject(): ListProjectPermissionsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListProjectPermissionsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListProjectPermissionsResponse.AsProtobufJSON;
}
export declare namespace ListProjectPermissionsResponse {
    /**
     * Standard JavaScript object representation for ListProjectPermissionsResponse
     */
    interface AsObject {
        permissions: string[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListProjectPermissionsResponse
     */
    interface AsProtobufJSON {
        permissions: string[];
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.SetAgentStatusRequest
 */
export declare class SetAgentStatusRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetAgentStatusRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetAgentStatusRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetAgentStatusRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetAgentStatusRequest, _writer: BinaryWriter): void;
    private _parent;
    private _status;
    private _agentView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetAgentStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetAgentStatusRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get status(): AgentStatus;
    set status(value: AgentStatus);
    get agentView(): AgentView;
    set agentView(value: AgentView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SetAgentStatusRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetAgentStatusRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetAgentStatusRequest.AsProtobufJSON;
}
export declare namespace SetAgentStatusRequest {
    /**
     * Standard JavaScript object representation for SetAgentStatusRequest
     */
    interface AsObject {
        parent: string;
        status: AgentStatus;
        agentView: AgentView;
    }
    /**
     * Protobuf JSON representation for SetAgentStatusRequest
     */
    interface AsProtobufJSON {
        parent: string;
        status: string;
        agentView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.AgentSorting
 */
export declare class AgentSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AgentSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AgentSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AgentSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AgentSorting, _writer: BinaryWriter): void;
    private _sortingField;
    private _sortingMode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentSorting.AsObject>);
    get sortingField(): AgentSorting.AgentSortingField;
    set sortingField(value: AgentSorting.AgentSortingField);
    get sortingMode(): ondewoNlu006.SortingMode;
    set sortingMode(value: ondewoNlu006.SortingMode);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AgentSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AgentSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AgentSorting.AsProtobufJSON;
}
export declare namespace AgentSorting {
    /**
     * Standard JavaScript object representation for AgentSorting
     */
    interface AsObject {
        sortingField: AgentSorting.AgentSortingField;
        sortingMode: ondewoNlu006.SortingMode;
    }
    /**
     * Protobuf JSON representation for AgentSorting
     */
    interface AsProtobufJSON {
        sortingField: string;
        sortingMode: string;
    }
    enum AgentSortingField {
        NO_AGENT_SORTING = 0,
        SORT_AGENT_BY_NAME = 1,
        SORT_AGENT_BY_CREATION_DATE = 2,
        SORT_AGENT_BY_LAST_UPDATED = 3,
        SORT_AGENT_BY_OWNER_NAME = 4
    }
}
/**
 * Message implementation for ondewo.nlu.SetResourcesRequest
 */
export declare class SetResourcesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetResourcesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetResourcesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetResourcesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetResourcesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _name;
    private _type;
    private _resourceFile;
    private _languageCode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetResourcesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get name(): string;
    set name(value: string);
    get type(): string;
    set type(value: string);
    get resourceFile(): Uint8Array;
    set resourceFile(value: Uint8Array);
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
    toObject(): SetResourcesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetResourcesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetResourcesRequest.AsProtobufJSON;
}
export declare namespace SetResourcesRequest {
    /**
     * Standard JavaScript object representation for SetResourcesRequest
     */
    interface AsObject {
        parent: string;
        name: string;
        type: string;
        resourceFile: Uint8Array;
        languageCode: string;
    }
    /**
     * Protobuf JSON representation for SetResourcesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        name: string;
        type: string;
        resourceFile: string;
        languageCode: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteResourcesRequest
 */
export declare class DeleteResourcesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteResourcesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteResourcesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteResourcesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteResourcesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _name;
    private _type;
    private _languageCode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteResourcesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get name(): string;
    set name(value: string);
    get type(): string;
    set type(value: string);
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
    toObject(): DeleteResourcesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteResourcesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteResourcesRequest.AsProtobufJSON;
}
export declare namespace DeleteResourcesRequest {
    /**
     * Standard JavaScript object representation for DeleteResourcesRequest
     */
    interface AsObject {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    }
    /**
     * Protobuf JSON representation for DeleteResourcesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ExportResourcesRequest
 */
export declare class ExportResourcesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportResourcesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportResourcesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportResourcesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportResourcesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _name;
    private _type;
    private _languageCode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportResourcesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get name(): string;
    set name(value: string);
    get type(): string;
    set type(value: string);
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
    toObject(): ExportResourcesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportResourcesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportResourcesRequest.AsProtobufJSON;
}
export declare namespace ExportResourcesRequest {
    /**
     * Standard JavaScript object representation for ExportResourcesRequest
     */
    interface AsObject {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    }
    /**
     * Protobuf JSON representation for ExportResourcesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ExportResourcesResponse
 */
export declare class ExportResourcesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExportResourcesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExportResourcesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExportResourcesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExportResourcesResponse, _writer: BinaryWriter): void;
    private _parent;
    private _name;
    private _type;
    private _languageCode;
    private _resourceFile;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportResourcesResponse.AsObject>);
    get parent(): string;
    set parent(value: string);
    get name(): string;
    set name(value: string);
    get type(): string;
    set type(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get resourceFile(): Uint8Array;
    set resourceFile(value: Uint8Array);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExportResourcesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExportResourcesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExportResourcesResponse.AsProtobufJSON;
}
export declare namespace ExportResourcesResponse {
    /**
     * Standard JavaScript object representation for ExportResourcesResponse
     */
    interface AsObject {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
        resourceFile: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ExportResourcesResponse
     */
    interface AsProtobufJSON {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
        resourceFile: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetModelStatusesRequest
 */
export declare class GetModelStatusesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetModelStatusesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetModelStatusesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetModelStatusesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetModelStatusesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _cacheVersion;
    private _languageCode;
    private _modelName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetModelStatusesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetModelStatusesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get cacheVersion(): number;
    set cacheVersion(value: number);
    get languageCode(): string;
    set languageCode(value: string);
    get modelName(): string;
    set modelName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetModelStatusesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetModelStatusesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetModelStatusesRequest.AsProtobufJSON;
}
export declare namespace GetModelStatusesRequest {
    /**
     * Standard JavaScript object representation for GetModelStatusesRequest
     */
    interface AsObject {
        parent: string;
        cacheVersion: number;
        languageCode: string;
        modelName: string;
    }
    /**
     * Protobuf JSON representation for GetModelStatusesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        cacheVersion: number;
        languageCode: string;
        modelName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ModelStatus
 */
export declare class ModelStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModelStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModelStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModelStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModelStatus, _writer: BinaryWriter): void;
    private _cacheVersion;
    private _languageCode;
    private _modelName;
    private _statusSetTime?;
    private _config;
    private _status;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModelStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModelStatus.AsObject>);
    get cacheVersion(): number;
    set cacheVersion(value: number);
    get languageCode(): string;
    set languageCode(value: string);
    get modelName(): string;
    set modelName(value: string);
    get statusSetTime(): googleProtobuf003.Timestamp | undefined;
    set statusSetTime(value: googleProtobuf003.Timestamp | undefined);
    get config(): string;
    set config(value: string);
    get status(): ModelStatus.StatusName;
    set status(value: ModelStatus.StatusName);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModelStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModelStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModelStatus.AsProtobufJSON;
}
export declare namespace ModelStatus {
    /**
     * Standard JavaScript object representation for ModelStatus
     */
    interface AsObject {
        cacheVersion: number;
        languageCode: string;
        modelName: string;
        statusSetTime?: googleProtobuf003.Timestamp.AsObject;
        config: string;
        status: ModelStatus.StatusName;
    }
    /**
     * Protobuf JSON representation for ModelStatus
     */
    interface AsProtobufJSON {
        cacheVersion: number;
        languageCode: string;
        modelName: string;
        statusSetTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        config: string;
        status: string;
    }
    enum StatusName {
        UNKNOWN = 0,
        INITIALIZING = 1,
        INITIALIZED = 2,
        LOADING_DATA = 3,
        TRAINING = 4,
        TESTING = 5,
        TRAINED = 6
    }
}
/**
 * Message implementation for ondewo.nlu.GetModelStatusesResponse
 */
export declare class GetModelStatusesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetModelStatusesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetModelStatusesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetModelStatusesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetModelStatusesResponse, _writer: BinaryWriter): void;
    private _modelStatuses?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetModelStatusesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetModelStatusesResponse.AsObject>);
    get modelStatuses(): ModelStatus[] | undefined;
    set modelStatuses(value: ModelStatus[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetModelStatusesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetModelStatusesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetModelStatusesResponse.AsProtobufJSON;
}
export declare namespace GetModelStatusesResponse {
    /**
     * Standard JavaScript object representation for GetModelStatusesResponse
     */
    interface AsObject {
        modelStatuses?: ModelStatus.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetModelStatusesResponse
     */
    interface AsProtobufJSON {
        modelStatuses: ModelStatus.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.CustomPlatformInfo
 */
export declare class CustomPlatformInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CustomPlatformInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CustomPlatformInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CustomPlatformInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CustomPlatformInfo, _writer: BinaryWriter): void;
    private _platform;
    private _displayName;
    private _position;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPlatformInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<CustomPlatformInfo.AsObject>);
    get platform(): ondewoNlu015.Intent.Message.Platform;
    set platform(value: ondewoNlu015.Intent.Message.Platform);
    get displayName(): string;
    set displayName(value: string);
    get position(): number;
    set position(value: number);
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
    toObject(): CustomPlatformInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CustomPlatformInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CustomPlatformInfo.AsProtobufJSON;
}
export declare namespace CustomPlatformInfo {
    /**
     * Standard JavaScript object representation for CustomPlatformInfo
     */
    interface AsObject {
        platform: ondewoNlu015.Intent.Message.Platform;
        displayName: string;
        position: number;
        createdAt?: googleProtobuf003.Timestamp.AsObject;
        modifiedAt?: googleProtobuf003.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
    }
    /**
     * Protobuf JSON representation for CustomPlatformInfo
     */
    interface AsProtobufJSON {
        platform: string;
        displayName: string;
        position: number;
        createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetPlatformMappingRequest
 */
export declare class GetPlatformMappingRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetPlatformMappingRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetPlatformMappingRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetPlatformMappingRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetPlatformMappingRequest, _writer: BinaryWriter): void;
    private _parent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformMappingRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPlatformMappingRequest.AsObject>);
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
    toObject(): GetPlatformMappingRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetPlatformMappingRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetPlatformMappingRequest.AsProtobufJSON;
}
export declare namespace GetPlatformMappingRequest {
    /**
     * Standard JavaScript object representation for GetPlatformMappingRequest
     */
    interface AsObject {
        parent: string;
    }
    /**
     * Protobuf JSON representation for GetPlatformMappingRequest
     */
    interface AsProtobufJSON {
        parent: string;
    }
}
/**
 * Message implementation for ondewo.nlu.PlatformMapping
 */
export declare class PlatformMapping implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PlatformMapping;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PlatformMapping): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PlatformMapping, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PlatformMapping, _writer: BinaryWriter): void;
    private _parent;
    private _platformInfo?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PlatformMapping to deeply clone from
     */
    constructor(_value?: RecursivePartial<PlatformMapping.AsObject>);
    get parent(): string;
    set parent(value: string);
    get platformInfo(): CustomPlatformInfo[] | undefined;
    set platformInfo(value: CustomPlatformInfo[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PlatformMapping.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PlatformMapping.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PlatformMapping.AsProtobufJSON;
}
export declare namespace PlatformMapping {
    /**
     * Standard JavaScript object representation for PlatformMapping
     */
    interface AsObject {
        parent: string;
        platformInfo?: CustomPlatformInfo.AsObject[];
    }
    /**
     * Protobuf JSON representation for PlatformMapping
     */
    interface AsProtobufJSON {
        parent: string;
        platformInfo: CustomPlatformInfo.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchRequest
 */
export declare class FullTextSearchRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchRequest, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _term;
    private _pageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get term(): string;
    set term(value: string);
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
    toObject(): FullTextSearchRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchRequest.AsProtobufJSON;
}
export declare namespace FullTextSearchRequest {
    /**
     * Standard JavaScript object representation for FullTextSearchRequest
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        term: string;
        pageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchRequest
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        term: string;
        pageToken: string;
    }
    enum QueryType {
        ALL = 0,
        OndewoEntityQuery = 1,
        OndewoEntityTypeQuery = 2,
        OndewoEntitySynonymQuery = 3,
        OndewoIntentQuery = 4,
        OndewoIntentContextInQuery = 5,
        OndewoIntentContextOutQuery = 6,
        OndewoIntentUsersaysQuery = 7,
        OndewoIntentTagsQuery = 8,
        OndewoIntentParametersQuery = 9,
        OndewoIntentResponseQuery = 10
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntityType
 */
export declare class FullTextSearchResponseEntityType implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseEntityType;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseEntityType): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseEntityType, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseEntityType, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _entityTypeResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntityType to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseEntityType.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get entityTypeResults(): FullTextSearchResponseEntityType.EntityTypeSearchResult[] | undefined;
    set entityTypeResults(value: FullTextSearchResponseEntityType.EntityTypeSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseEntityType.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseEntityType.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseEntityType.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseEntityType {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseEntityType
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        entityTypeResults?: FullTextSearchResponseEntityType.EntityTypeSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseEntityType
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        entityTypeResults: FullTextSearchResponseEntityType.EntityTypeSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult
     */
    class EntityTypeSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): EntityTypeSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: EntityTypeSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: EntityTypeSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: EntityTypeSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _displayName;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntityTypeSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<EntityTypeSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get language(): string;
        set language(value: string);
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
        toObject(): EntityTypeSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): EntityTypeSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeSearchResult.AsProtobufJSON;
    }
    namespace EntityTypeSearchResult {
        /**
         * Standard JavaScript object representation for EntityTypeSearchResult
         */
        interface AsObject {
            name: string;
            displayName: string;
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for EntityTypeSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            displayName: string;
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntity
 */
export declare class FullTextSearchResponseEntity implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseEntity;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseEntity): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseEntity, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseEntity, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _entityResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntity to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseEntity.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get entityResults(): FullTextSearchResponseEntity.EntitySearchResult[] | undefined;
    set entityResults(value: FullTextSearchResponseEntity.EntitySearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseEntity.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseEntity.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseEntity.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseEntity {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseEntity
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        entityResults?: FullTextSearchResponseEntity.EntitySearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseEntity
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        entityResults: FullTextSearchResponseEntity.EntitySearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult
     */
    class EntitySearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): EntitySearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: EntitySearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: EntitySearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: EntitySearchResult, _writer: BinaryWriter): void;
        private _name;
        private _displayName;
        private _entityTypeName;
        private _entityTypeDisplayName;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntitySearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<EntitySearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get entityTypeName(): string;
        set entityTypeName(value: string);
        get entityTypeDisplayName(): string;
        set entityTypeDisplayName(value: string);
        get language(): string;
        set language(value: string);
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
        toObject(): EntitySearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): EntitySearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): EntitySearchResult.AsProtobufJSON;
    }
    namespace EntitySearchResult {
        /**
         * Standard JavaScript object representation for EntitySearchResult
         */
        interface AsObject {
            name: string;
            displayName: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for EntitySearchResult
         */
        interface AsProtobufJSON {
            name: string;
            displayName: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntitySynonym
 */
export declare class FullTextSearchResponseEntitySynonym implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseEntitySynonym;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseEntitySynonym): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseEntitySynonym, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseEntitySynonym, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _entitySynonymResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntitySynonym to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseEntitySynonym.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get entitySynonymResults(): FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult[] | undefined;
    set entitySynonymResults(value: FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseEntitySynonym.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseEntitySynonym.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseEntitySynonym.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseEntitySynonym {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseEntitySynonym
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        entitySynonymResults?: FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseEntitySynonym
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        entitySynonymResults: FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
     */
    class EntitySynonymSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): EntitySynonymSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: EntitySynonymSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: EntitySynonymSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: EntitySynonymSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _displayName;
        private _entityTypeName;
        private _entityTypeDisplayName;
        private _entityName;
        private _entityDisplayName;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntitySynonymSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<EntitySynonymSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get entityTypeName(): string;
        set entityTypeName(value: string);
        get entityTypeDisplayName(): string;
        set entityTypeDisplayName(value: string);
        get entityName(): string;
        set entityName(value: string);
        get entityDisplayName(): string;
        set entityDisplayName(value: string);
        get language(): string;
        set language(value: string);
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
        toObject(): EntitySynonymSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): EntitySynonymSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): EntitySynonymSearchResult.AsProtobufJSON;
    }
    namespace EntitySynonymSearchResult {
        /**
         * Standard JavaScript object representation for EntitySynonymSearchResult
         */
        interface AsObject {
            name: string;
            displayName: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            entityName: string;
            entityDisplayName: string;
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for EntitySynonymSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            displayName: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            entityName: string;
            entityDisplayName: string;
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntent
 */
export declare class FullTextSearchResponseIntent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntent, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntent to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntent.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentResults(): FullTextSearchResponseIntent.IntentSearchResult[] | undefined;
    set intentResults(value: FullTextSearchResponseIntent.IntentSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntent.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntent {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntent
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentResults?: FullTextSearchResponseIntent.IntentSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntent
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentResults: FullTextSearchResponseIntent.IntentSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult
     */
    class IntentSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _displayName;
        private _domainName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get domainName(): string;
        set domainName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentSearchResult.AsProtobufJSON;
    }
    namespace IntentSearchResult {
        /**
         * Standard JavaScript object representation for IntentSearchResult
         */
        interface AsObject {
            name: string;
            displayName: string;
            domainName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            displayName: string;
            domainName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextIn
 */
export declare class FullTextSearchResponseIntentContextIn implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentContextIn;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentContextIn): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentContextIn, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentContextIn, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentContextInResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentContextIn to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentContextIn.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentContextInResults(): FullTextSearchResponseIntentContextIn.IntentContextInSearchResult[] | undefined;
    set intentContextInResults(value: FullTextSearchResponseIntentContextIn.IntentContextInSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentContextIn.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentContextIn.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentContextIn.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentContextIn {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentContextIn
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentContextInResults?: FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentContextIn
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentContextInResults: FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
     */
    class IntentContextInSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentContextInSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentContextInSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentContextInSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentContextInSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentContextInSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentContextInSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentContextInSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentContextInSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentContextInSearchResult.AsProtobufJSON;
    }
    namespace IntentContextInSearchResult {
        /**
         * Standard JavaScript object representation for IntentContextInSearchResult
         */
        interface AsObject {
            name: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentContextInSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextOut
 */
export declare class FullTextSearchResponseIntentContextOut implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentContextOut;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentContextOut): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentContextOut, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentContextOut, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentContextOutResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentContextOut to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentContextOut.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentContextOutResults(): FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult[] | undefined;
    set intentContextOutResults(value: FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentContextOut.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentContextOut.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentContextOut.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentContextOut {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentContextOut
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentContextOutResults?: FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentContextOut
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentContextOutResults: FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
     */
    class IntentContextOutSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentContextOutSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentContextOutSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentContextOutSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentContextOutSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentContextOutSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentContextOutSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentContextOutSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentContextOutSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentContextOutSearchResult.AsProtobufJSON;
    }
    namespace IntentContextOutSearchResult {
        /**
         * Standard JavaScript object representation for IntentContextOutSearchResult
         */
        interface AsObject {
            name: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentContextOutSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentUsersays
 */
export declare class FullTextSearchResponseIntentUsersays implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentUsersays;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentUsersays): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentUsersays, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentUsersays, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentUsersaysResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentUsersays to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentUsersays.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentUsersaysResults(): FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult[] | undefined;
    set intentUsersaysResults(value: FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentUsersays.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentUsersays.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentUsersays.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentUsersays {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentUsersays
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentUsersaysResults?: FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentUsersays
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentUsersaysResults: FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
     */
    class IntentUsersaysSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentUsersaysSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentUsersaysSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentUsersaysSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentUsersaysSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _text;
        private _textAsEntityTypes;
        private _textAsEntityValues;
        private _type;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentUsersaysSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentUsersaysSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get text(): string;
        set text(value: string);
        get textAsEntityTypes(): string;
        set textAsEntityTypes(value: string);
        get textAsEntityValues(): string;
        set textAsEntityValues(value: string);
        get type(): string;
        set type(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentUsersaysSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentUsersaysSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentUsersaysSearchResult.AsProtobufJSON;
    }
    namespace IntentUsersaysSearchResult {
        /**
         * Standard JavaScript object representation for IntentUsersaysSearchResult
         */
        interface AsObject {
            name: string;
            text: string;
            textAsEntityTypes: string;
            textAsEntityValues: string;
            type: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentUsersaysSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            text: string;
            textAsEntityTypes: string;
            textAsEntityValues: string;
            type: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentTags
 */
export declare class FullTextSearchResponseIntentTags implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentTags;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentTags): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentTags, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentTags, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentTagsResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentTags to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentTags.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentTagsResults(): FullTextSearchResponseIntentTags.IntentTagsSearchResult[] | undefined;
    set intentTagsResults(value: FullTextSearchResponseIntentTags.IntentTagsSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentTags.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentTags.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentTags.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentTags {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentTags
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentTagsResults?: FullTextSearchResponseIntentTags.IntentTagsSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentTags
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentTagsResults: FullTextSearchResponseIntentTags.IntentTagsSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult
     */
    class IntentTagsSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentTagsSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentTagsSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentTagsSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentTagsSearchResult, _writer: BinaryWriter): void;
        private _name;
        private _text;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentTagsSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentTagsSearchResult.AsObject>);
        get name(): string;
        set name(value: string);
        get text(): string;
        set text(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentTagsSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentTagsSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentTagsSearchResult.AsProtobufJSON;
    }
    namespace IntentTagsSearchResult {
        /**
         * Standard JavaScript object representation for IntentTagsSearchResult
         */
        interface AsObject {
            name: string;
            text: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentTagsSearchResult
         */
        interface AsProtobufJSON {
            name: string;
            text: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentResponse
 */
export declare class FullTextSearchResponseIntentResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentResponse, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentResponseResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentResponse.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentResponseResults(): FullTextSearchResponseIntentResponse.IntentResponseSearchResult[] | undefined;
    set intentResponseResults(value: FullTextSearchResponseIntentResponse.IntentResponseSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentResponse.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentResponse {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentResponse
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentResponseResults?: FullTextSearchResponseIntentResponse.IntentResponseSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentResponse
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentResponseResults: FullTextSearchResponseIntentResponse.IntentResponseSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult
     */
    class IntentResponseSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentResponseSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentResponseSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentResponseSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentResponseSearchResult, _writer: BinaryWriter): void;
        private _text;
        private _platform;
        private _responseType;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentResponseSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentResponseSearchResult.AsObject>);
        get text(): string;
        set text(value: string);
        get platform(): string;
        set platform(value: string);
        get responseType(): string;
        set responseType(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentResponseSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentResponseSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentResponseSearchResult.AsProtobufJSON;
    }
    namespace IntentResponseSearchResult {
        /**
         * Standard JavaScript object representation for IntentResponseSearchResult
         */
        interface AsObject {
            text: string;
            platform: string;
            responseType: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentResponseSearchResult
         */
        interface AsProtobufJSON {
            text: string;
            platform: string;
            responseType: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentParameters
 */
export declare class FullTextSearchResponseIntentParameters implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FullTextSearchResponseIntentParameters;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FullTextSearchResponseIntentParameters): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FullTextSearchResponseIntentParameters, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FullTextSearchResponseIntentParameters, _writer: BinaryWriter): void;
    private _parent;
    private _languageCode;
    private _intentParametersResults?;
    private _term;
    private _elasticQuery;
    private _time;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentParameters to deeply clone from
     */
    constructor(_value?: RecursivePartial<FullTextSearchResponseIntentParameters.AsObject>);
    get parent(): string;
    set parent(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentParametersResults(): FullTextSearchResponseIntentParameters.IntentParametersSearchResult[] | undefined;
    set intentParametersResults(value: FullTextSearchResponseIntentParameters.IntentParametersSearchResult[] | undefined);
    get term(): string;
    set term(value: string);
    get elasticQuery(): string;
    set elasticQuery(value: string);
    get time(): number;
    set time(value: number);
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
    toObject(): FullTextSearchResponseIntentParameters.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FullTextSearchResponseIntentParameters.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FullTextSearchResponseIntentParameters.AsProtobufJSON;
}
export declare namespace FullTextSearchResponseIntentParameters {
    /**
     * Standard JavaScript object representation for FullTextSearchResponseIntentParameters
     */
    interface AsObject {
        parent: string;
        languageCode: string;
        intentParametersResults?: FullTextSearchResponseIntentParameters.IntentParametersSearchResult.AsObject[];
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for FullTextSearchResponseIntentParameters
     */
    interface AsProtobufJSON {
        parent: string;
        languageCode: string;
        intentParametersResults: FullTextSearchResponseIntentParameters.IntentParametersSearchResult.AsProtobufJSON[] | null;
        term: string;
        elasticQuery: string;
        time: number;
        nextPageToken: string;
    }
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult
     */
    class IntentParametersSearchResult implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): IntentParametersSearchResult;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: IntentParametersSearchResult): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: IntentParametersSearchResult, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: IntentParametersSearchResult, _writer: BinaryWriter): void;
        private _parameterName;
        private _parameterDisplayName;
        private _intentName;
        private _intentDisplayName;
        private _tags;
        private _language;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentParametersSearchResult to deeply clone from
         */
        constructor(_value?: RecursivePartial<IntentParametersSearchResult.AsObject>);
        get parameterName(): string;
        set parameterName(value: string);
        get parameterDisplayName(): string;
        set parameterDisplayName(value: string);
        get intentName(): string;
        set intentName(value: string);
        get intentDisplayName(): string;
        set intentDisplayName(value: string);
        get tags(): string[];
        set tags(value: string[]);
        get language(): string;
        set language(value: string);
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
        toObject(): IntentParametersSearchResult.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): IntentParametersSearchResult.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): IntentParametersSearchResult.AsProtobufJSON;
    }
    namespace IntentParametersSearchResult {
        /**
         * Standard JavaScript object representation for IntentParametersSearchResult
         */
        interface AsObject {
            parameterName: string;
            parameterDisplayName: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt?: googleProtobuf003.Timestamp.AsObject;
            modifiedAt?: googleProtobuf003.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for IntentParametersSearchResult
         */
        interface AsProtobufJSON {
            parameterName: string;
            parameterDisplayName: string;
            intentName: string;
            intentDisplayName: string;
            tags: string[];
            language: string;
            createdAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.ReindexAgentRequest
 */
export declare class ReindexAgentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReindexAgentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReindexAgentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReindexAgentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReindexAgentRequest, _writer: BinaryWriter): void;
    private _parent;
    private _branchName;
    private _indexTypes;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReindexAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReindexAgentRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get branchName(): string;
    set branchName(value: string);
    get indexTypes(): FullTextSearchRequest.QueryType[];
    set indexTypes(value: FullTextSearchRequest.QueryType[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReindexAgentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReindexAgentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReindexAgentRequest.AsProtobufJSON;
}
export declare namespace ReindexAgentRequest {
    /**
     * Standard JavaScript object representation for ReindexAgentRequest
     */
    interface AsObject {
        parent: string;
        branchName: string;
        indexTypes: FullTextSearchRequest.QueryType[];
    }
    /**
     * Protobuf JSON representation for ReindexAgentRequest
     */
    interface AsProtobufJSON {
        parent: string;
        branchName: string;
        indexTypes: string[];
    }
}
