import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/project-role.pb';
export declare enum DefaultServerRole {
	SERVER_UNSPECIFIED = 0,
	SERVER_USER = 1,
	SERVER_MANAGER = 2,
	SERVER_ADMIN = 3,
	SERVER_INACTIVE = 4
}
/**
 * Message implementation for ondewo.nlu.User
 */
export declare class User implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): User;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: User): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter): void;
	private _userId?;
	private _displayName?;
	private _serverRoleId?;
	private _userEmail?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of User to deeply clone from
	 */
	constructor(_value?: RecursivePartial<User.AsObject>);
	get userId(): string | undefined;
	set userId(value: string | undefined);
	get displayName(): string | undefined;
	set displayName(value: string | undefined);
	get serverRoleId(): number | undefined;
	set serverRoleId(value: number | undefined);
	get userEmail(): string | undefined;
	set userEmail(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): User.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): User.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): User.AsProtobufJSON;
}
export declare module User {
	/**
	 * Standard JavaScript object representation for User
	 */
	interface AsObject {
		userId?: string;
		displayName?: string;
		serverRoleId?: number;
		userEmail?: string;
	}
	/**
	 * Protobuf JSON representation for User
	 */
	interface AsProtobufJSON {
		userId?: string;
		displayName?: string;
		serverRoleId?: number;
		userEmail?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.UserInfo
 */
export declare class UserInfo implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UserInfo;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UserInfo): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UserInfo, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter): void;
	private _user?;
	private _projectRoles?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UserInfo to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UserInfo.AsObject>);
	get user(): User | undefined;
	set user(value: User | undefined);
	get projectRoles():
		| {
				[prop: string]: ondewoNlu005.ProjectRole;
		  }
		| undefined;
	set projectRoles(
		value:
			| {
					[prop: string]: ondewoNlu005.ProjectRole;
			  }
			| undefined
	);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UserInfo.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UserInfo.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UserInfo.AsProtobufJSON;
}
export declare module UserInfo {
	/**
	 * Standard JavaScript object representation for UserInfo
	 */
	interface AsObject {
		user?: User.AsObject;
		projectRoles?: {
			[prop: string]: ondewoNlu005.ProjectRole;
		};
	}
	/**
	 * Protobuf JSON representation for UserInfo
	 */
	interface AsProtobufJSON {
		user?: User.AsProtobufJSON | null;
		projectRoles?: {
			[prop: string]: ondewoNlu005.ProjectRole;
		};
	}
	/**
	 * Message implementation for ondewo.nlu.ProjectRolesEntry
	 */
	class ProjectRolesEntry implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): ProjectRolesEntry;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: ProjectRolesEntry): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: ProjectRolesEntry, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: ProjectRolesEntry, _writer: BinaryWriter): void;
		private _key?;
		private _value?;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ProjectRolesEntry to deeply clone from
		 */
		constructor(_value?: RecursivePartial<ProjectRolesEntry.AsObject>);
		get key(): string | undefined;
		set key(value: string | undefined);
		get value(): ondewoNlu005.ProjectRole | undefined;
		set value(value: ondewoNlu005.ProjectRole | undefined);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): ProjectRolesEntry.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): ProjectRolesEntry.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): ProjectRolesEntry.AsProtobufJSON;
	}
	module ProjectRolesEntry {
		/**
		 * Standard JavaScript object representation for ProjectRolesEntry
		 */
		interface AsObject {
			key?: string;
			value?: ondewoNlu005.ProjectRole.AsObject;
		}
		/**
		 * Protobuf JSON representation for ProjectRolesEntry
		 */
		interface AsProtobufJSON {
			key?: string;
			value?: ondewoNlu005.ProjectRole.AsProtobufJSON | null;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.CreateUserRequest
 */
export declare class CreateUserRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateUserRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateUserRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateUserRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateUserRequest, _writer: BinaryWriter): void;
	private _user?;
	private _password?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateUserRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateUserRequest.AsObject>);
	get user(): User | undefined;
	set user(value: User | undefined);
	get password(): string | undefined;
	set password(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateUserRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateUserRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateUserRequest.AsProtobufJSON;
}
export declare module CreateUserRequest {
	/**
	 * Standard JavaScript object representation for CreateUserRequest
	 */
	interface AsObject {
		user?: User.AsObject;
		password?: string;
	}
	/**
	 * Protobuf JSON representation for CreateUserRequest
	 */
	interface AsProtobufJSON {
		user?: User.AsProtobufJSON | null;
		password?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.UpdateUserRequest
 */
export declare class UpdateUserRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateUserRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateUserRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateUserRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateUserRequest, _writer: BinaryWriter): void;
	private _user?;
	private _password?;
	private _updateMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateUserRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateUserRequest.AsObject>);
	get user(): User | undefined;
	set user(value: User | undefined);
	get password(): string | undefined;
	set password(value: string | undefined);
	get updateMask(): googleProtobuf003.FieldMask | undefined;
	set updateMask(value: googleProtobuf003.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateUserRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateUserRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateUserRequest.AsProtobufJSON;
}
export declare module UpdateUserRequest {
	/**
	 * Standard JavaScript object representation for UpdateUserRequest
	 */
	interface AsObject {
		user?: User.AsObject;
		password?: string;
		updateMask?: googleProtobuf003.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateUserRequest
	 */
	interface AsProtobufJSON {
		user?: User.AsProtobufJSON | null;
		password?: string;
		updateMask?: googleProtobuf003.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.GetUserRequest
 */
export declare class GetUserRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetUserRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetUserRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetUserRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetUserRequest, _writer: BinaryWriter): void;
	private _userId?;
	private _userEmail?;
	private _userIdentifier;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetUserRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetUserRequest.AsObject>);
	get userId(): string | undefined;
	set userId(value: string | undefined);
	get userEmail(): string | undefined;
	set userEmail(value: string | undefined);
	get userIdentifier(): GetUserRequest.UserIdentifierCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetUserRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetUserRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetUserRequest.AsProtobufJSON;
}
export declare module GetUserRequest {
	/**
	 * Standard JavaScript object representation for GetUserRequest
	 */
	interface AsObject {
		userId?: string;
		userEmail?: string;
	}
	/**
	 * Protobuf JSON representation for GetUserRequest
	 */
	interface AsProtobufJSON {
		userId?: string | null;
		userEmail?: string | null;
	}
	enum UserIdentifierCase {
		none = 0,
		userId = 1,
		userEmail = 2
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteUserRequest
 */
export declare class DeleteUserRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteUserRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteUserRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteUserRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteUserRequest, _writer: BinaryWriter): void;
	private _userId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteUserRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteUserRequest.AsObject>);
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
	toObject(): DeleteUserRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteUserRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteUserRequest.AsProtobufJSON;
}
export declare module DeleteUserRequest {
	/**
	 * Standard JavaScript object representation for DeleteUserRequest
	 */
	interface AsObject {
		userId?: string;
	}
	/**
	 * Protobuf JSON representation for DeleteUserRequest
	 */
	interface AsProtobufJSON {
		userId?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListUsersRequest
 */
export declare class ListUsersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListUsersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListUsersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListUsersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListUsersRequest, _writer: BinaryWriter): void;
	private _pageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUsersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListUsersRequest.AsObject>);
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
	toObject(): ListUsersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListUsersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListUsersRequest.AsProtobufJSON;
}
export declare module ListUsersRequest {
	/**
	 * Standard JavaScript object representation for ListUsersRequest
	 */
	interface AsObject {
		pageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListUsersRequest
	 */
	interface AsProtobufJSON {
		pageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListUsersResponse
 */
export declare class ListUsersResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListUsersResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListUsersResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListUsersResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListUsersResponse, _writer: BinaryWriter): void;
	private _users?;
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUsersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListUsersResponse.AsObject>);
	get users(): User[] | undefined;
	set users(value: User[] | undefined);
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
	toObject(): ListUsersResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListUsersResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListUsersResponse.AsProtobufJSON;
}
export declare module ListUsersResponse {
	/**
	 * Standard JavaScript object representation for ListUsersResponse
	 */
	interface AsObject {
		users?: User.AsObject[];
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListUsersResponse
	 */
	interface AsProtobufJSON {
		users?: User.AsProtobufJSON[] | null;
		nextPageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListUserInfosResponse
 */
export declare class ListUserInfosResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListUserInfosResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListUserInfosResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListUserInfosResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListUserInfosResponse, _writer: BinaryWriter): void;
	private _users?;
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUserInfosResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListUserInfosResponse.AsObject>);
	get users(): UserInfo[] | undefined;
	set users(value: UserInfo[] | undefined);
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
	toObject(): ListUserInfosResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListUserInfosResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListUserInfosResponse.AsProtobufJSON;
}
export declare module ListUserInfosResponse {
	/**
	 * Standard JavaScript object representation for ListUserInfosResponse
	 */
	interface AsObject {
		users?: UserInfo.AsObject[];
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListUserInfosResponse
	 */
	interface AsProtobufJSON {
		users?: UserInfo.AsProtobufJSON[] | null;
		nextPageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ServerRole
 */
export declare class ServerRole implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ServerRole;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ServerRole): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ServerRole, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ServerRole, _writer: BinaryWriter): void;
	private _roleId?;
	private _name?;
	private _permissions?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ServerRole to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ServerRole.AsObject>);
	get roleId(): number | undefined;
	set roleId(value: number | undefined);
	get name(): string | undefined;
	set name(value: string | undefined);
	get permissions(): string[] | undefined;
	set permissions(value: string[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ServerRole.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ServerRole.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ServerRole.AsProtobufJSON;
}
export declare module ServerRole {
	/**
	 * Standard JavaScript object representation for ServerRole
	 */
	interface AsObject {
		roleId?: number;
		name?: string;
		permissions?: string[];
	}
	/**
	 * Protobuf JSON representation for ServerRole
	 */
	interface AsProtobufJSON {
		roleId?: number;
		name?: string;
		permissions?: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.CreateServerRoleRequest
 */
export declare class CreateServerRoleRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateServerRoleRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateServerRoleRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateServerRoleRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateServerRoleRequest, _writer: BinaryWriter): void;
	private _role?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateServerRoleRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateServerRoleRequest.AsObject>);
	get role(): ServerRole | undefined;
	set role(value: ServerRole | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateServerRoleRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateServerRoleRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateServerRoleRequest.AsProtobufJSON;
}
export declare module CreateServerRoleRequest {
	/**
	 * Standard JavaScript object representation for CreateServerRoleRequest
	 */
	interface AsObject {
		role?: ServerRole.AsObject;
	}
	/**
	 * Protobuf JSON representation for CreateServerRoleRequest
	 */
	interface AsProtobufJSON {
		role?: ServerRole.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.UpdateServerRoleRequest
 */
export declare class UpdateServerRoleRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateServerRoleRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateServerRoleRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateServerRoleRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateServerRoleRequest, _writer: BinaryWriter): void;
	private _role?;
	private _updateMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateServerRoleRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateServerRoleRequest.AsObject>);
	get role(): ServerRole | undefined;
	set role(value: ServerRole | undefined);
	get updateMask(): googleProtobuf003.FieldMask | undefined;
	set updateMask(value: googleProtobuf003.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateServerRoleRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateServerRoleRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateServerRoleRequest.AsProtobufJSON;
}
export declare module UpdateServerRoleRequest {
	/**
	 * Standard JavaScript object representation for UpdateServerRoleRequest
	 */
	interface AsObject {
		role?: ServerRole.AsObject;
		updateMask?: googleProtobuf003.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateServerRoleRequest
	 */
	interface AsProtobufJSON {
		role?: ServerRole.AsProtobufJSON | null;
		updateMask?: googleProtobuf003.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteServerRoleRequest
 */
export declare class DeleteServerRoleRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteServerRoleRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteServerRoleRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteServerRoleRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteServerRoleRequest, _writer: BinaryWriter): void;
	private _roleId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteServerRoleRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteServerRoleRequest.AsObject>);
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
	toObject(): DeleteServerRoleRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteServerRoleRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteServerRoleRequest.AsProtobufJSON;
}
export declare module DeleteServerRoleRequest {
	/**
	 * Standard JavaScript object representation for DeleteServerRoleRequest
	 */
	interface AsObject {
		roleId?: number;
	}
	/**
	 * Protobuf JSON representation for DeleteServerRoleRequest
	 */
	interface AsProtobufJSON {
		roleId?: number;
	}
}
/**
 * Message implementation for ondewo.nlu.GetServerRoleRequest
 */
export declare class GetServerRoleRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetServerRoleRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetServerRoleRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetServerRoleRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetServerRoleRequest, _writer: BinaryWriter): void;
	private _roleId?;
	private _roleName?;
	private _serverRoleIdentifier;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetServerRoleRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetServerRoleRequest.AsObject>);
	get roleId(): number | undefined;
	set roleId(value: number | undefined);
	get roleName(): string | undefined;
	set roleName(value: string | undefined);
	get serverRoleIdentifier(): GetServerRoleRequest.ServerRoleIdentifierCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetServerRoleRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetServerRoleRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetServerRoleRequest.AsProtobufJSON;
}
export declare module GetServerRoleRequest {
	/**
	 * Standard JavaScript object representation for GetServerRoleRequest
	 */
	interface AsObject {
		roleId?: number;
		roleName?: string;
	}
	/**
	 * Protobuf JSON representation for GetServerRoleRequest
	 */
	interface AsProtobufJSON {
		roleId?: number | null;
		roleName?: string | null;
	}
	enum ServerRoleIdentifierCase {
		none = 0,
		roleId = 1,
		roleName = 2
	}
}
/**
 * Message implementation for ondewo.nlu.ListServerRolesRequest
 */
export declare class ListServerRolesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListServerRolesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListServerRolesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListServerRolesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListServerRolesRequest, _writer: BinaryWriter): void;
	private _pageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListServerRolesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListServerRolesRequest.AsObject>);
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
	toObject(): ListServerRolesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListServerRolesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListServerRolesRequest.AsProtobufJSON;
}
export declare module ListServerRolesRequest {
	/**
	 * Standard JavaScript object representation for ListServerRolesRequest
	 */
	interface AsObject {
		pageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListServerRolesRequest
	 */
	interface AsProtobufJSON {
		pageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListServerRolesResponse
 */
export declare class ListServerRolesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListServerRolesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListServerRolesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListServerRolesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListServerRolesResponse, _writer: BinaryWriter): void;
	private _serverRoles?;
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListServerRolesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListServerRolesResponse.AsObject>);
	get serverRoles(): ServerRole[] | undefined;
	set serverRoles(value: ServerRole[] | undefined);
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
	toObject(): ListServerRolesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListServerRolesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListServerRolesResponse.AsProtobufJSON;
}
export declare module ListServerRolesResponse {
	/**
	 * Standard JavaScript object representation for ListServerRolesResponse
	 */
	interface AsObject {
		serverRoles?: ServerRole.AsObject[];
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListServerRolesResponse
	 */
	interface AsProtobufJSON {
		serverRoles?: ServerRole.AsProtobufJSON[] | null;
		nextPageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListServerPermissionsRequest
 */
export declare class ListServerPermissionsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListServerPermissionsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListServerPermissionsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListServerPermissionsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListServerPermissionsRequest, _writer: BinaryWriter): void;
	private _pageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListServerPermissionsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListServerPermissionsRequest.AsObject>);
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
	toObject(): ListServerPermissionsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListServerPermissionsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListServerPermissionsRequest.AsProtobufJSON;
}
export declare module ListServerPermissionsRequest {
	/**
	 * Standard JavaScript object representation for ListServerPermissionsRequest
	 */
	interface AsObject {
		pageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListServerPermissionsRequest
	 */
	interface AsProtobufJSON {
		pageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListServerPermissionsResponse
 */
export declare class ListServerPermissionsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListServerPermissionsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListServerPermissionsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListServerPermissionsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListServerPermissionsResponse, _writer: BinaryWriter): void;
	private _permissions?;
	private _nextPageToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListServerPermissionsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListServerPermissionsResponse.AsObject>);
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
	toObject(): ListServerPermissionsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListServerPermissionsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListServerPermissionsResponse.AsProtobufJSON;
}
export declare module ListServerPermissionsResponse {
	/**
	 * Standard JavaScript object representation for ListServerPermissionsResponse
	 */
	interface AsObject {
		permissions?: string[];
		nextPageToken?: string;
	}
	/**
	 * Protobuf JSON representation for ListServerPermissionsResponse
	 */
	interface AsProtobufJSON {
		permissions?: string[];
		nextPageToken?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.LoginRequest
 */
export declare class LoginRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): LoginRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: LoginRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: LoginRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: LoginRequest, _writer: BinaryWriter): void;
	private _userEmail?;
	private _password?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of LoginRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<LoginRequest.AsObject>);
	get userEmail(): string | undefined;
	set userEmail(value: string | undefined);
	get password(): string | undefined;
	set password(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): LoginRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): LoginRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): LoginRequest.AsProtobufJSON;
}
export declare module LoginRequest {
	/**
	 * Standard JavaScript object representation for LoginRequest
	 */
	interface AsObject {
		userEmail?: string;
		password?: string;
	}
	/**
	 * Protobuf JSON representation for LoginRequest
	 */
	interface AsProtobufJSON {
		userEmail?: string;
		password?: string;
	}
}
/**
 * Message implementation for ondewo.nlu.LoginResponse
 */
export declare class LoginResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): LoginResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: LoginResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: LoginResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: LoginResponse, _writer: BinaryWriter): void;
	private _user?;
	private _authToken?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of LoginResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<LoginResponse.AsObject>);
	get user(): User | undefined;
	set user(value: User | undefined);
	get authToken(): string | undefined;
	set authToken(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): LoginResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): LoginResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): LoginResponse.AsProtobufJSON;
}
export declare module LoginResponse {
	/**
	 * Standard JavaScript object representation for LoginResponse
	 */
	interface AsObject {
		user?: User.AsObject;
		authToken?: string;
	}
	/**
	 * Protobuf JSON representation for LoginResponse
	 */
	interface AsProtobufJSON {
		user?: User.AsProtobufJSON | null;
		authToken?: string;
	}
}
