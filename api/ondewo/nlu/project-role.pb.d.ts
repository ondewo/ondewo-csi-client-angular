import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
export declare enum DefaultProjectRole {
    PROJECT_UNSPECIFIED = 0,
    PROJECT_USER = 1,
    PROJECT_EXECUTOR = 2,
    PROJECT_DEVELOPER = 3,
    PROJECT_ADMIN = 4,
    PROJECT_INACTIVE = 5
}
export declare enum ProjectRoleView {
    PROJECT_ROLE_VIEW_UNSPECIFIED = 0,
    PROJECT_ROLE_VIEW_SHALLOW = 1,
    PROJECT_ROLE_VIEW_FULL = 2
}
/**
 * Message implementation for ondewo.nlu.ProjectRole
 */
export declare class ProjectRole implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ProjectRole;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ProjectRole): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ProjectRole, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ProjectRole, _writer: BinaryWriter): void;
    private _roleId;
    private _name;
    private _permissions;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ProjectRole to deeply clone from
     */
    constructor(_value?: RecursivePartial<ProjectRole.AsObject>);
    get roleId(): number;
    set roleId(value: number);
    get name(): string;
    set name(value: string);
    get permissions(): string[];
    set permissions(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ProjectRole.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ProjectRole.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ProjectRole.AsProtobufJSON;
}
export declare module ProjectRole {
    /**
     * Standard JavaScript object representation for ProjectRole
     */
    interface AsObject {
        roleId: number;
        name: string;
        permissions: string[];
    }
    /**
     * Protobuf JSON representation for ProjectRole
     */
    interface AsProtobufJSON {
        roleId: number;
        name: string;
        permissions: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.CreateProjectRoleRequest
 */
export declare class CreateProjectRoleRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateProjectRoleRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateProjectRoleRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateProjectRoleRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateProjectRoleRequest, _writer: BinaryWriter): void;
    private _parent;
    private _role?;
    private _projectRoleView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateProjectRoleRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateProjectRoleRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get role(): ProjectRole | undefined;
    set role(value: ProjectRole | undefined);
    get projectRoleView(): ProjectRoleView;
    set projectRoleView(value: ProjectRoleView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateProjectRoleRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateProjectRoleRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateProjectRoleRequest.AsProtobufJSON;
}
export declare module CreateProjectRoleRequest {
    /**
     * Standard JavaScript object representation for CreateProjectRoleRequest
     */
    interface AsObject {
        parent: string;
        role?: ProjectRole.AsObject;
        projectRoleView: ProjectRoleView;
    }
    /**
     * Protobuf JSON representation for CreateProjectRoleRequest
     */
    interface AsProtobufJSON {
        parent: string;
        role: ProjectRole.AsProtobufJSON | null;
        projectRoleView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateProjectRoleRequest
 */
export declare class UpdateProjectRoleRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateProjectRoleRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateProjectRoleRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateProjectRoleRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateProjectRoleRequest, _writer: BinaryWriter): void;
    private _parent;
    private _role?;
    private _updateMask?;
    private _projectRoleView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateProjectRoleRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateProjectRoleRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get role(): ProjectRole | undefined;
    set role(value: ProjectRole | undefined);
    get updateMask(): googleProtobuf003.FieldMask | undefined;
    set updateMask(value: googleProtobuf003.FieldMask | undefined);
    get projectRoleView(): ProjectRoleView;
    set projectRoleView(value: ProjectRoleView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateProjectRoleRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateProjectRoleRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateProjectRoleRequest.AsProtobufJSON;
}
export declare module UpdateProjectRoleRequest {
    /**
     * Standard JavaScript object representation for UpdateProjectRoleRequest
     */
    interface AsObject {
        parent: string;
        role?: ProjectRole.AsObject;
        updateMask?: googleProtobuf003.FieldMask.AsObject;
        projectRoleView: ProjectRoleView;
    }
    /**
     * Protobuf JSON representation for UpdateProjectRoleRequest
     */
    interface AsProtobufJSON {
        parent: string;
        role: ProjectRole.AsProtobufJSON | null;
        updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
        projectRoleView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetProjectRoleRequest
 */
export declare class GetProjectRoleRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetProjectRoleRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetProjectRoleRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetProjectRoleRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetProjectRoleRequest, _writer: BinaryWriter): void;
    private _parent;
    private _roleId;
    private _roleName;
    private _projectRoleView;
    private _projectRoleIdentifier;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectRoleRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetProjectRoleRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get roleId(): number;
    set roleId(value: number);
    get roleName(): string;
    set roleName(value: string);
    get projectRoleView(): ProjectRoleView;
    set projectRoleView(value: ProjectRoleView);
    get projectRoleIdentifier(): GetProjectRoleRequest.ProjectRoleIdentifierCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetProjectRoleRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetProjectRoleRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectRoleRequest.AsProtobufJSON;
}
export declare module GetProjectRoleRequest {
    /**
     * Standard JavaScript object representation for GetProjectRoleRequest
     */
    interface AsObject {
        parent: string;
        roleId: number;
        roleName: string;
        projectRoleView: ProjectRoleView;
    }
    /**
     * Protobuf JSON representation for GetProjectRoleRequest
     */
    interface AsProtobufJSON {
        parent: string;
        roleId: number | null;
        roleName: string | null;
        projectRoleView: string;
    }
    enum ProjectRoleIdentifierCase {
        none = 0,
        roleId = 1,
        roleName = 2
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteProjectRoleRequest
 */
export declare class DeleteProjectRoleRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteProjectRoleRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteProjectRoleRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteProjectRoleRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteProjectRoleRequest, _writer: BinaryWriter): void;
    private _parent;
    private _roleId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteProjectRoleRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteProjectRoleRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
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
    toObject(): DeleteProjectRoleRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteProjectRoleRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteProjectRoleRequest.AsProtobufJSON;
}
export declare module DeleteProjectRoleRequest {
    /**
     * Standard JavaScript object representation for DeleteProjectRoleRequest
     */
    interface AsObject {
        parent: string;
        roleId: number;
    }
    /**
     * Protobuf JSON representation for DeleteProjectRoleRequest
     */
    interface AsProtobufJSON {
        parent: string;
        roleId: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectRolesRequest
 */
export declare class ListProjectRolesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListProjectRolesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListProjectRolesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListProjectRolesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListProjectRolesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _pageToken;
    private _projectRoleView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectRolesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectRolesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get projectRoleView(): ProjectRoleView;
    set projectRoleView(value: ProjectRoleView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListProjectRolesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListProjectRolesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListProjectRolesRequest.AsProtobufJSON;
}
export declare module ListProjectRolesRequest {
    /**
     * Standard JavaScript object representation for ListProjectRolesRequest
     */
    interface AsObject {
        parent: string;
        pageToken: string;
        projectRoleView: ProjectRoleView;
    }
    /**
     * Protobuf JSON representation for ListProjectRolesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        pageToken: string;
        projectRoleView: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectRolesResponse
 */
export declare class ListProjectRolesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListProjectRolesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListProjectRolesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListProjectRolesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListProjectRolesResponse, _writer: BinaryWriter): void;
    private _projectRoles?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectRolesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectRolesResponse.AsObject>);
    get projectRoles(): ProjectRole[] | undefined;
    set projectRoles(value: ProjectRole[] | undefined);
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
    toObject(): ListProjectRolesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListProjectRolesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListProjectRolesResponse.AsProtobufJSON;
}
export declare module ListProjectRolesResponse {
    /**
     * Standard JavaScript object representation for ListProjectRolesResponse
     */
    interface AsObject {
        projectRoles?: ProjectRole.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListProjectRolesResponse
     */
    interface AsProtobufJSON {
        projectRoles: ProjectRole.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
