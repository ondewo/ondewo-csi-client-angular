import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleProtobuf008 from '@ngx-grpc/well-known-types';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/project-role.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/user.pb';
export declare enum AgentView {
    AGENT_VIEW_UNSPECIFIED = 0,
    AGENT_VIEW_FULL = 1,
    AGENT_VIEW_SHALLOW = 2
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
    private _parent?;
    private _displayName?;
    private _defaultLanguageCode?;
    private _supportedLanguageCodes?;
    private _timeZone?;
    private _nluPlatform?;
    private _configs?;
    private _ownerId?;
    private _status?;
    private _description?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Agent to deeply clone from
     */
    constructor(_value?: RecursivePartial<Agent.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get defaultLanguageCode(): string | undefined;
    set defaultLanguageCode(value: string | undefined);
    get supportedLanguageCodes(): string[] | undefined;
    set supportedLanguageCodes(value: string[] | undefined);
    get timeZone(): string | undefined;
    set timeZone(value: string | undefined);
    get nluPlatform(): string | undefined;
    set nluPlatform(value: string | undefined);
    get configs(): googleProtobuf009.Struct | undefined;
    set configs(value: googleProtobuf009.Struct | undefined);
    get ownerId(): string | undefined;
    set ownerId(value: string | undefined);
    get status(): AgentStatus | undefined;
    set status(value: AgentStatus | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
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
export declare module Agent {
    /**
     * Standard JavaScript object representation for Agent
     */
    interface AsObject {
        parent?: string;
        displayName?: string;
        defaultLanguageCode?: string;
        supportedLanguageCodes?: string[];
        timeZone?: string;
        nluPlatform?: string;
        configs?: googleProtobuf009.Struct.AsObject;
        ownerId?: string;
        status?: AgentStatus;
        description?: string;
    }
    /**
     * Protobuf JSON representation for Agent
     */
    interface AsProtobufJSON {
        parent?: string;
        displayName?: string;
        defaultLanguageCode?: string;
        supportedLanguageCodes?: string[];
        timeZone?: string;
        nluPlatform?: string;
        configs?: googleProtobuf009.Struct.AsProtobufJSON | null;
        ownerId?: string;
        status?: string;
        description?: string;
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
    get owner(): ondewoNlu015.User | undefined;
    set owner(value: ondewoNlu015.User | undefined);
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
export declare module AgentWithOwner {
    /**
     * Standard JavaScript object representation for AgentWithOwner
     */
    interface AsObject {
        agent?: Agent.AsObject;
        owner?: ondewoNlu015.User.AsObject;
    }
    /**
     * Protobuf JSON representation for AgentWithOwner
     */
    interface AsProtobufJSON {
        agent?: Agent.AsProtobufJSON | null;
        owner?: ondewoNlu015.User.AsProtobufJSON | null;
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
export declare module AgentOfUserWithOwner {
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
        agentWithOwner?: AgentWithOwner.AsProtobufJSON | null;
        projectRole?: ondewoNlu010.ProjectRole.AsProtobufJSON | null;
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
    private _agentView?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateAgentRequest.AsObject>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
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
export declare module CreateAgentRequest {
    /**
     * Standard JavaScript object representation for CreateAgentRequest
     */
    interface AsObject {
        agent?: Agent.AsObject;
        agentView?: AgentView;
    }
    /**
     * Protobuf JSON representation for CreateAgentRequest
     */
    interface AsProtobufJSON {
        agent?: Agent.AsProtobufJSON | null;
        agentView?: string;
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
    private _agentView?;
    private _updateMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateAgentRequest.AsObject>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    get updateMask(): googleProtobuf008.FieldMask | undefined;
    set updateMask(value: googleProtobuf008.FieldMask | undefined);
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
export declare module UpdateAgentRequest {
    /**
     * Standard JavaScript object representation for UpdateAgentRequest
     */
    interface AsObject {
        agent?: Agent.AsObject;
        agentView?: AgentView;
        updateMask?: googleProtobuf008.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateAgentRequest
     */
    interface AsProtobufJSON {
        agent?: Agent.AsProtobufJSON | null;
        agentView?: string;
        updateMask?: googleProtobuf008.FieldMask.AsProtobufJSON | null;
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
    private _parent?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteAgentRequest.AsObject>);
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
export declare module DeleteAgentRequest {
    /**
     * Standard JavaScript object representation for DeleteAgentRequest
     */
    interface AsObject {
        parent?: string;
    }
    /**
     * Protobuf JSON representation for DeleteAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
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
    private _parent?;
    private _agentView?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
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
export declare module GetAgentRequest {
    /**
     * Standard JavaScript object representation for GetAgentRequest
     */
    interface AsObject {
        parent?: string;
        agentView?: AgentView;
    }
    /**
     * Protobuf JSON representation for GetAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        agentView?: string;
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
    private _agentView?;
    private _pageToken?;
    private _sortByField?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsRequest.AsObject>);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
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
export declare module ListAgentsRequest {
    /**
     * Standard JavaScript object representation for ListAgentsRequest
     */
    interface AsObject {
        agentView?: AgentView;
        pageToken?: string;
        sortByField?: AgentSorting.AsObject;
    }
    /**
     * Protobuf JSON representation for ListAgentsRequest
     */
    interface AsProtobufJSON {
        agentView?: string;
        pageToken?: string;
        sortByField?: AgentSorting.AsProtobufJSON | null;
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
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsResponse.AsObject>);
    get agentsWithOwners(): AgentWithOwner[] | undefined;
    set agentsWithOwners(value: AgentWithOwner[] | undefined);
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
export declare module ListAgentsResponse {
    /**
     * Standard JavaScript object representation for ListAgentsResponse
     */
    interface AsObject {
        agentsWithOwners?: AgentWithOwner.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListAgentsResponse
     */
    interface AsProtobufJSON {
        agentsWithOwners?: AgentWithOwner.AsProtobufJSON[] | null;
        nextPageToken?: string;
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
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsOfUserResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListAgentsOfUserResponse.AsObject>);
    get agentsOfUserWithOwners(): AgentOfUserWithOwner[] | undefined;
    set agentsOfUserWithOwners(value: AgentOfUserWithOwner[] | undefined);
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
export declare module ListAgentsOfUserResponse {
    /**
     * Standard JavaScript object representation for ListAgentsOfUserResponse
     */
    interface AsObject {
        agentsOfUserWithOwners?: AgentOfUserWithOwner.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListAgentsOfUserResponse
     */
    interface AsProtobufJSON {
        agentsOfUserWithOwners?: AgentOfUserWithOwner.AsProtobufJSON[] | null;
        nextPageToken?: string;
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
    private _parent?;
    private _branch?;
    private _initiationProtocol?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    get initiationProtocol(): InitiationProtocol | undefined;
    set initiationProtocol(value: InitiationProtocol | undefined);
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
export declare module TrainAgentRequest {
    /**
     * Standard JavaScript object representation for TrainAgentRequest
     */
    interface AsObject {
        parent?: string;
        branch?: string;
        initiationProtocol?: InitiationProtocol;
    }
    /**
     * Protobuf JSON representation for TrainAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        branch?: string;
        initiationProtocol?: string;
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
    private _parent?;
    private _branch?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BuildCacheRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BuildCacheRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
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
export declare module BuildCacheRequest {
    /**
     * Standard JavaScript object representation for BuildCacheRequest
     */
    interface AsObject {
        parent?: string;
        branch?: string;
    }
    /**
     * Protobuf JSON representation for BuildCacheRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        branch?: string;
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
    private _parent?;
    private _agentUri?;
    private _compressionLevel?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get compressionLevel(): number | undefined;
    set compressionLevel(value: number | undefined);
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
export declare module ExportAgentRequest {
    /**
     * Standard JavaScript object representation for ExportAgentRequest
     */
    interface AsObject {
        parent?: string;
        agentUri?: string;
        compressionLevel?: number;
    }
    /**
     * Protobuf JSON representation for ExportAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        agentUri?: string;
        compressionLevel?: number;
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
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportAgentResponse.AsObject>);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
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
export declare module ExportAgentResponse {
    /**
     * Standard JavaScript object representation for ExportAgentResponse
     */
    interface AsObject {
        agentUri?: string;
        agentContent?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ExportAgentResponse
     */
    interface AsProtobufJSON {
        agentUri?: string | null;
        agentContent?: string;
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
    private _parent?;
    private _compressionLevel?;
    private _testSize?;
    private _trainSize?;
    private _randomState?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportBenchmarkAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get compressionLevel(): number | undefined;
    set compressionLevel(value: number | undefined);
    get testSize(): number | undefined;
    set testSize(value: number | undefined);
    get trainSize(): number | undefined;
    set trainSize(value: number | undefined);
    get randomState(): number | undefined;
    set randomState(value: number | undefined);
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
export declare module ExportBenchmarkAgentRequest {
    /**
     * Standard JavaScript object representation for ExportBenchmarkAgentRequest
     */
    interface AsObject {
        parent?: string;
        compressionLevel?: number;
        testSize?: number;
        trainSize?: number;
        randomState?: number;
    }
    /**
     * Protobuf JSON representation for ExportBenchmarkAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        compressionLevel?: number;
        testSize?: number;
        trainSize?: number;
        randomState?: number;
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
    private _agentContent?;
    private _trainingPhrases?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportBenchmarkAgentResponse.AsObject>);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
    get trainingPhrases(): {
        [prop: string]: ondewoNlu014.ListTrainingPhrasesResponse;
    } | undefined;
    set trainingPhrases(value: {
        [prop: string]: ondewoNlu014.ListTrainingPhrasesResponse;
    } | undefined);
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
export declare module ExportBenchmarkAgentResponse {
    /**
     * Standard JavaScript object representation for ExportBenchmarkAgentResponse
     */
    interface AsObject {
        agentContent?: Uint8Array;
        trainingPhrases?: {
            [prop: string]: ondewoNlu014.ListTrainingPhrasesResponse;
        };
    }
    /**
     * Protobuf JSON representation for ExportBenchmarkAgentResponse
     */
    interface AsProtobufJSON {
        agentContent?: string;
        trainingPhrases?: {
            [prop: string]: ondewoNlu014.ListTrainingPhrasesResponse;
        };
    }
    /**
     * Message implementation for ondewo.nlu.TrainingPhrasesEntry
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
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhrasesEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<TrainingPhrasesEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): ondewoNlu014.ListTrainingPhrasesResponse | undefined;
        set value(value: ondewoNlu014.ListTrainingPhrasesResponse | undefined);
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
    module TrainingPhrasesEntry {
        /**
         * Standard JavaScript object representation for TrainingPhrasesEntry
         */
        interface AsObject {
            key?: string;
            value?: ondewoNlu014.ListTrainingPhrasesResponse.AsObject;
        }
        /**
         * Protobuf JSON representation for TrainingPhrasesEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: ondewoNlu014.ListTrainingPhrasesResponse.AsProtobufJSON | null;
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
    private _parent?;
    private _languageCodes?;
    private _optimizationConfigs?;
    private _inPlace?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OptimizeRankingMatchRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<OptimizeRankingMatchRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCodes(): string[] | undefined;
    set languageCodes(value: string[] | undefined);
    get optimizationConfigs(): RankingMatchOptimizationConfig[] | undefined;
    set optimizationConfigs(value: RankingMatchOptimizationConfig[] | undefined);
    get inPlace(): boolean | undefined;
    set inPlace(value: boolean | undefined);
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
export declare module OptimizeRankingMatchRequest {
    /**
     * Standard JavaScript object representation for OptimizeRankingMatchRequest
     */
    interface AsObject {
        parent?: string;
        languageCodes?: string[];
        optimizationConfigs?: RankingMatchOptimizationConfig.AsObject[];
        inPlace?: boolean;
    }
    /**
     * Protobuf JSON representation for OptimizeRankingMatchRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCodes?: string[];
        optimizationConfigs?: RankingMatchOptimizationConfig.AsProtobufJSON[] | null;
        inPlace?: boolean;
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
    private _languageCode?;
    private _nSplits?;
    private _randomSeed?;
    private _initialThresholds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RankingMatchOptimizationConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RankingMatchOptimizationConfig.AsObject>);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get nSplits(): number | undefined;
    set nSplits(value: number | undefined);
    get randomSeed(): number | undefined;
    set randomSeed(value: number | undefined);
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
export declare module RankingMatchOptimizationConfig {
    /**
     * Standard JavaScript object representation for RankingMatchOptimizationConfig
     */
    interface AsObject {
        languageCode?: string;
        nSplits?: number;
        randomSeed?: number;
        initialThresholds?: googleProtobuf009.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for RankingMatchOptimizationConfig
     */
    interface AsProtobufJSON {
        languageCode?: string;
        nSplits?: number;
        randomSeed?: number;
        initialThresholds?: googleProtobuf009.Struct.AsProtobufJSON | null;
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
export declare module OptimizeRankingMatchResponse {
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
        optimizationInfo?: googleProtobuf009.Struct.AsProtobufJSON | null;
        optimizedOndewoConfig?: googleProtobuf009.Struct.AsProtobufJSON | null;
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
    private _parent?;
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ImportAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ImportAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
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
export declare module ImportAgentRequest {
    /**
     * Standard JavaScript object representation for ImportAgentRequest
     */
    interface AsObject {
        parent?: string;
        agentUri?: string;
        agentContent?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ImportAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        agentUri?: string | null;
        agentContent?: string;
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
    private _parent?;
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RestoreAgentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<RestoreAgentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
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
export declare module RestoreAgentRequest {
    /**
     * Standard JavaScript object representation for RestoreAgentRequest
     */
    interface AsObject {
        parent?: string;
        agentUri?: string;
        agentContent?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for RestoreAgentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        agentUri?: string | null;
        agentContent?: string;
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
    private _parent?;
    private _format?;
    private _languageCode?;
    private _type?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentStatisticsRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get format(): ReportFormat | undefined;
    set format(value: ReportFormat | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get type(): ReportType | undefined;
    set type(value: ReportType | undefined);
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
export declare module GetAgentStatisticsRequest {
    /**
     * Standard JavaScript object representation for GetAgentStatisticsRequest
     */
    interface AsObject {
        parent?: string;
        format?: ReportFormat;
        languageCode?: string;
        type?: ReportType;
    }
    /**
     * Protobuf JSON representation for GetAgentStatisticsRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        format?: string;
        languageCode?: string;
        type?: string;
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
    private _reports?;
    private _format?;
    private _type?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAgentStatisticsResponse.AsObject>);
    get reports(): Uint8Array | undefined;
    set reports(value: Uint8Array | undefined);
    get format(): ReportFormat | undefined;
    set format(value: ReportFormat | undefined);
    get type(): ReportType | undefined;
    set type(value: ReportType | undefined);
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
export declare module GetAgentStatisticsResponse {
    /**
     * Standard JavaScript object representation for GetAgentStatisticsResponse
     */
    interface AsObject {
        reports?: Uint8Array;
        format?: ReportFormat;
        type?: ReportType;
    }
    /**
     * Protobuf JSON representation for GetAgentStatisticsResponse
     */
    interface AsProtobufJSON {
        reports?: string;
        format?: string;
        type?: string;
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
    private _parent?;
    private _userId?;
    private _projectRoleId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddUserToProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddUserToProjectRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    get projectRoleId(): number | undefined;
    set projectRoleId(value: number | undefined);
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
export declare module AddUserToProjectRequest {
    /**
     * Standard JavaScript object representation for AddUserToProjectRequest
     */
    interface AsObject {
        parent?: string;
        userId?: string;
        projectRoleId?: number;
    }
    /**
     * Protobuf JSON representation for AddUserToProjectRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        userId?: string;
        projectRoleId?: number;
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
    private _parent?;
    private _userId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveUserFromProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveUserFromProjectRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get userId(): string | undefined;
    set userId(value: string | undefined);
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
export declare module RemoveUserFromProjectRequest {
    /**
     * Standard JavaScript object representation for RemoveUserFromProjectRequest
     */
    interface AsObject {
        parent?: string;
        userId?: string;
    }
    /**
     * Protobuf JSON representation for RemoveUserFromProjectRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        userId?: string;
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
    private _parent?;
    private _pageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListUsersInProjectRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
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
export declare module ListUsersInProjectRequest {
    /**
     * Standard JavaScript object representation for ListUsersInProjectRequest
     */
    interface AsObject {
        parent?: string;
        pageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListUsersInProjectRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        pageToken?: string;
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
    private _parent?;
    private _user?;
    private _roleId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserInProject to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserInProject.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get user(): ondewoNlu015.User | undefined;
    set user(value: ondewoNlu015.User | undefined);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
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
export declare module UserInProject {
    /**
     * Standard JavaScript object representation for UserInProject
     */
    interface AsObject {
        parent?: string;
        user?: ondewoNlu015.User.AsObject;
        roleId?: number;
    }
    /**
     * Protobuf JSON representation for UserInProject
     */
    interface AsProtobufJSON {
        parent?: string;
        user?: ondewoNlu015.User.AsProtobufJSON | null;
        roleId?: number;
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
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListUsersInProjectResponse.AsObject>);
    get users(): UserInProject[] | undefined;
    set users(value: UserInProject[] | undefined);
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
export declare module ListUsersInProjectResponse {
    /**
     * Standard JavaScript object representation for ListUsersInProjectResponse
     */
    interface AsObject {
        users?: UserInProject.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListUsersInProjectResponse
     */
    interface AsProtobufJSON {
        users?: UserInProject.AsProtobufJSON[] | null;
        nextPageToken?: string;
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
    private _version?;
    private _commitHash?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformInfoResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPlatformInfoResponse.AsObject>);
    get version(): string | undefined;
    set version(value: string | undefined);
    get commitHash(): string | undefined;
    set commitHash(value: string | undefined);
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
export declare module GetPlatformInfoResponse {
    /**
     * Standard JavaScript object representation for GetPlatformInfoResponse
     */
    interface AsObject {
        version?: string;
        commitHash?: string;
    }
    /**
     * Protobuf JSON representation for GetPlatformInfoResponse
     */
    interface AsProtobufJSON {
        version?: string;
        commitHash?: string;
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
    private _pageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectPermissionsRequest.AsObject>);
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
export declare module ListProjectPermissionsRequest {
    /**
     * Standard JavaScript object representation for ListProjectPermissionsRequest
     */
    interface AsObject {
        pageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListProjectPermissionsRequest
     */
    interface AsProtobufJSON {
        pageToken?: string;
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
    private _permissions?;
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectPermissionsResponse.AsObject>);
    get permissions(): string[] | undefined;
    set permissions(value: string[] | undefined);
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
export declare module ListProjectPermissionsResponse {
    /**
     * Standard JavaScript object representation for ListProjectPermissionsResponse
     */
    interface AsObject {
        permissions?: string[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListProjectPermissionsResponse
     */
    interface AsProtobufJSON {
        permissions?: string[];
        nextPageToken?: string;
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
    private _parent?;
    private _status?;
    private _agentView?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetAgentStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetAgentStatusRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get status(): AgentStatus | undefined;
    set status(value: AgentStatus | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
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
export declare module SetAgentStatusRequest {
    /**
     * Standard JavaScript object representation for SetAgentStatusRequest
     */
    interface AsObject {
        parent?: string;
        status?: AgentStatus;
        agentView?: AgentView;
    }
    /**
     * Protobuf JSON representation for SetAgentStatusRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        status?: string;
        agentView?: string;
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
    private _sortingField?;
    private _sortingMode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentSorting.AsObject>);
    get sortingField(): AgentSorting.AgentSortingField | undefined;
    set sortingField(value: AgentSorting.AgentSortingField | undefined);
    get sortingMode(): ondewoNlu004.SortingMode | undefined;
    set sortingMode(value: ondewoNlu004.SortingMode | undefined);
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
export declare module AgentSorting {
    /**
     * Standard JavaScript object representation for AgentSorting
     */
    interface AsObject {
        sortingField?: AgentSorting.AgentSortingField;
        sortingMode?: ondewoNlu004.SortingMode;
    }
    /**
     * Protobuf JSON representation for AgentSorting
     */
    interface AsProtobufJSON {
        sortingField?: string;
        sortingMode?: string;
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
    private _parent?;
    private _name?;
    private _type?;
    private _resourceFile?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetResourcesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get resourceFile(): Uint8Array | undefined;
    set resourceFile(value: Uint8Array | undefined);
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
export declare module SetResourcesRequest {
    /**
     * Standard JavaScript object representation for SetResourcesRequest
     */
    interface AsObject {
        parent?: string;
        name?: string;
        type?: string;
        resourceFile?: Uint8Array;
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for SetResourcesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        name?: string;
        type?: string;
        resourceFile?: string;
        languageCode?: string;
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
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteResourcesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
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
export declare module DeleteResourcesRequest {
    /**
     * Standard JavaScript object representation for DeleteResourcesRequest
     */
    interface AsObject {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for DeleteResourcesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
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
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportResourcesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
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
export declare module ExportResourcesRequest {
    /**
     * Standard JavaScript object representation for ExportResourcesRequest
     */
    interface AsObject {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for ExportResourcesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
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
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    private _resourceFile?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExportResourcesResponse.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get resourceFile(): Uint8Array | undefined;
    set resourceFile(value: Uint8Array | undefined);
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
export declare module ExportResourcesResponse {
    /**
     * Standard JavaScript object representation for ExportResourcesResponse
     */
    interface AsObject {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
        resourceFile?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for ExportResourcesResponse
     */
    interface AsProtobufJSON {
        parent?: string;
        name?: string;
        type?: string;
        languageCode?: string;
        resourceFile?: string;
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
    private _parent?;
    private _cacheVersion?;
    private _languageCode?;
    private _modelName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetModelStatusesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetModelStatusesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get cacheVersion(): number | undefined;
    set cacheVersion(value: number | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get modelName(): string | undefined;
    set modelName(value: string | undefined);
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
export declare module GetModelStatusesRequest {
    /**
     * Standard JavaScript object representation for GetModelStatusesRequest
     */
    interface AsObject {
        parent?: string;
        cacheVersion?: number;
        languageCode?: string;
        modelName?: string;
    }
    /**
     * Protobuf JSON representation for GetModelStatusesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        cacheVersion?: number;
        languageCode?: string;
        modelName?: string;
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
    private _cacheVersion?;
    private _languageCode?;
    private _modelName?;
    private _statusSetTime?;
    private _config?;
    private _status?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModelStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModelStatus.AsObject>);
    get cacheVersion(): number | undefined;
    set cacheVersion(value: number | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get modelName(): string | undefined;
    set modelName(value: string | undefined);
    get statusSetTime(): googleProtobuf007.Timestamp | undefined;
    set statusSetTime(value: googleProtobuf007.Timestamp | undefined);
    get config(): string | undefined;
    set config(value: string | undefined);
    get status(): ModelStatus.StatusName | undefined;
    set status(value: ModelStatus.StatusName | undefined);
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
export declare module ModelStatus {
    /**
     * Standard JavaScript object representation for ModelStatus
     */
    interface AsObject {
        cacheVersion?: number;
        languageCode?: string;
        modelName?: string;
        statusSetTime?: googleProtobuf007.Timestamp.AsObject;
        config?: string;
        status?: ModelStatus.StatusName;
    }
    /**
     * Protobuf JSON representation for ModelStatus
     */
    interface AsProtobufJSON {
        cacheVersion?: number;
        languageCode?: string;
        modelName?: string;
        statusSetTime?: googleProtobuf007.Timestamp.AsProtobufJSON | null;
        config?: string;
        status?: string;
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
export declare module GetModelStatusesResponse {
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
        modelStatuses?: ModelStatus.AsProtobufJSON[] | null;
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
    private _platform?;
    private _displayName?;
    private _position?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPlatformInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<CustomPlatformInfo.AsObject>);
    get platform(): ondewoNlu014.Intent.Message.Platform | undefined;
    set platform(value: ondewoNlu014.Intent.Message.Platform | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get position(): number | undefined;
    set position(value: number | undefined);
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
export declare module CustomPlatformInfo {
    /**
     * Standard JavaScript object representation for CustomPlatformInfo
     */
    interface AsObject {
        platform?: ondewoNlu014.Intent.Message.Platform;
        displayName?: string;
        position?: number;
    }
    /**
     * Protobuf JSON representation for CustomPlatformInfo
     */
    interface AsProtobufJSON {
        platform?: string;
        displayName?: string;
        position?: number;
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
    private _parent?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformMappingRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPlatformMappingRequest.AsObject>);
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
export declare module GetPlatformMappingRequest {
    /**
     * Standard JavaScript object representation for GetPlatformMappingRequest
     */
    interface AsObject {
        parent?: string;
    }
    /**
     * Protobuf JSON representation for GetPlatformMappingRequest
     */
    interface AsProtobufJSON {
        parent?: string;
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
    private _parent?;
    private _platformInfo?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PlatformMapping to deeply clone from
     */
    constructor(_value?: RecursivePartial<PlatformMapping.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
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
export declare module PlatformMapping {
    /**
     * Standard JavaScript object representation for PlatformMapping
     */
    interface AsObject {
        parent?: string;
        platformInfo?: CustomPlatformInfo.AsObject[];
    }
    /**
     * Protobuf JSON representation for PlatformMapping
     */
    interface AsProtobufJSON {
        parent?: string;
        platformInfo?: CustomPlatformInfo.AsProtobufJSON[] | null;
    }
}
