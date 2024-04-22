import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export declare enum SortingMode {
	ASCENDING = 0,
	DESCENDING = 1
}
export declare enum NotificationFlaggedStatus {
	NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED = 0,
	NOTIFICATION_FLAGGED_STATUS_FLAGGED = 1,
	NOTIFICATION_FLAGGED_STATUS_UNFLAGGED = 2
}
export declare enum NotificationReadStatus {
	NOTIFICATION_READ_STATUS_UNSPECIFIED = 0,
	NOTIFICATION_READ_STATUS_READ = 1,
	NOTIFICATION_READ_STATUS_UNREAD = 2
}
export declare enum NotificationVisibility {
	NOTIFICATION_VISIBILITY_UNSPECIFIED = 0,
	NOTIFICATION_VISIBILITY_USER = 1,
	NOTIFICATION_VISIBILITY_PROJECT = 2,
	NOTIFICATION_VISIBILITY_PROJECT_OWNER = 3,
	NOTIFICATION_VISIBILITY_PROJECT_ADMIN = 4,
	NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER = 5,
	NOTIFICATION_VISIBILITY_PROJECT_USER = 6,
	NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR = 7,
	NOTIFICATION_VISIBILITY_PROJECT_INACTIVE = 8,
	NOTIFICATION_VISIBILITY_SERVER_ADMIN = 9,
	NOTIFICATION_VISIBILITY_SERVER_MANAGER = 10,
	NOTIFICATION_VISIBILITY_SERVER_USER = 11,
	NOTIFICATION_VISIBILITY_SERVER_INACTIVE = 12
}
export declare enum NotificationType {
	NOTIFICATION_TYPE_UNSPECIFIED = 0,
	NOTIFICATION_TYPE_DEBUG = 1,
	NOTIFICATION_TYPE_WARNING = 2,
	NOTIFICATION_TYPE_INFO = 3,
	NOTIFICATION_TYPE_ERROR = 4,
	NOTIFICATION_TYPE_NEWS = 5
}
export declare enum NotificationOrigin {
	NOTIFICATION_ORIGIN_UNSPECIFIED = 0,
	NOTIFICATION_ORIGIN_ONDEWO_AIM = 1,
	NOTIFICATION_ORIGIN_ONDEWO_BPI = 2,
	NOTIFICATION_ORIGIN_ONDEWO_CSI = 3,
	NOTIFICATION_ORIGIN_ONDEWO_NLU = 4,
	NOTIFICATION_ORIGIN_ONDEWO_S2T = 5,
	NOTIFICATION_ORIGIN_ONDEWO_SIP = 6,
	NOTIFICATION_ORIGIN_ONDEWO_T2S = 7,
	NOTIFICATION_ORIGIN_ONDEWO_VTSI = 8,
	NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ = 9
}
/**
 * Message implementation for ondewo.nlu.StatResponse
 */
export declare class StatResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): StatResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: StatResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: StatResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: StatResponse, _writer: BinaryWriter): void;
	private _value;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StatResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StatResponse.AsObject>);
	get value(): number;
	set value(value: number);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): StatResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): StatResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): StatResponse.AsProtobufJSON;
}
export declare module StatResponse {
	/**
	 * Standard JavaScript object representation for StatResponse
	 */
	interface AsObject {
		value: number;
	}
	/**
	 * Protobuf JSON representation for StatResponse
	 */
	interface AsProtobufJSON {
		value: number;
	}
}
/**
 * Message implementation for ondewo.nlu.Comment
 */
export declare class Comment implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Comment;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Comment): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Comment, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Comment, _writer: BinaryWriter): void;
	private _name;
	private _text;
	private _userId;
	private _commentAboutName;
	private _parentCommentName;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Comment to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Comment.AsObject>);
	get name(): string;
	set name(value: string);
	get text(): string;
	set text(value: string);
	get userId(): string;
	set userId(value: string);
	get commentAboutName(): string;
	set commentAboutName(value: string);
	get parentCommentName(): string;
	set parentCommentName(value: string);
	get createdAt(): googleProtobuf001.Timestamp | undefined;
	set createdAt(value: googleProtobuf001.Timestamp | undefined);
	get modifiedAt(): googleProtobuf001.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf001.Timestamp | undefined);
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
	toObject(): Comment.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Comment.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Comment.AsProtobufJSON;
}
export declare module Comment {
	/**
	 * Standard JavaScript object representation for Comment
	 */
	interface AsObject {
		name: string;
		text: string;
		userId: string;
		commentAboutName: string;
		parentCommentName: string;
		createdAt?: googleProtobuf001.Timestamp.AsObject;
		modifiedAt?: googleProtobuf001.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for Comment
	 */
	interface AsProtobufJSON {
		name: string;
		text: string;
		userId: string;
		commentAboutName: string;
		parentCommentName: string;
		createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
}
/**
 * Message implementation for ondewo.nlu.Notification
 */
export declare class Notification implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Notification;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Notification): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Notification, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Notification, _writer: BinaryWriter): void;
	private _name;
	private _userName;
	private _title;
	private _descriptionShort;
	private _descriptionLong;
	private _notificationFlaggedStatus;
	private _notificationFlaggedTimestamp?;
	private _notificationReadStatus;
	private _notificationReadTimestamp?;
	private _notificationOrigin;
	private _originName;
	private _originLanguage;
	private _notificationType;
	private _notificationVisibility;
	private _createdAt?;
	private _modifiedAt?;
	private _createdBy;
	private _modifiedBy;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Notification to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Notification.AsObject>);
	get name(): string;
	set name(value: string);
	get userName(): string;
	set userName(value: string);
	get title(): string;
	set title(value: string);
	get descriptionShort(): string;
	set descriptionShort(value: string);
	get descriptionLong(): string;
	set descriptionLong(value: string);
	get notificationFlaggedStatus(): NotificationFlaggedStatus;
	set notificationFlaggedStatus(value: NotificationFlaggedStatus);
	get notificationFlaggedTimestamp(): googleProtobuf001.Timestamp | undefined;
	set notificationFlaggedTimestamp(value: googleProtobuf001.Timestamp | undefined);
	get notificationReadStatus(): NotificationReadStatus;
	set notificationReadStatus(value: NotificationReadStatus);
	get notificationReadTimestamp(): googleProtobuf001.Timestamp | undefined;
	set notificationReadTimestamp(value: googleProtobuf001.Timestamp | undefined);
	get notificationOrigin(): NotificationOrigin;
	set notificationOrigin(value: NotificationOrigin);
	get originName(): string;
	set originName(value: string);
	get originLanguage(): string;
	set originLanguage(value: string);
	get notificationType(): NotificationType;
	set notificationType(value: NotificationType);
	get notificationVisibility(): NotificationVisibility;
	set notificationVisibility(value: NotificationVisibility);
	get createdAt(): googleProtobuf001.Timestamp | undefined;
	set createdAt(value: googleProtobuf001.Timestamp | undefined);
	get modifiedAt(): googleProtobuf001.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf001.Timestamp | undefined);
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
	toObject(): Notification.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Notification.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Notification.AsProtobufJSON;
}
export declare module Notification {
	/**
	 * Standard JavaScript object representation for Notification
	 */
	interface AsObject {
		name: string;
		userName: string;
		title: string;
		descriptionShort: string;
		descriptionLong: string;
		notificationFlaggedStatus: NotificationFlaggedStatus;
		notificationFlaggedTimestamp?: googleProtobuf001.Timestamp.AsObject;
		notificationReadStatus: NotificationReadStatus;
		notificationReadTimestamp?: googleProtobuf001.Timestamp.AsObject;
		notificationOrigin: NotificationOrigin;
		originName: string;
		originLanguage: string;
		notificationType: NotificationType;
		notificationVisibility: NotificationVisibility;
		createdAt?: googleProtobuf001.Timestamp.AsObject;
		modifiedAt?: googleProtobuf001.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	}
	/**
	 * Protobuf JSON representation for Notification
	 */
	interface AsProtobufJSON {
		name: string;
		userName: string;
		title: string;
		descriptionShort: string;
		descriptionLong: string;
		notificationFlaggedStatus: string;
		notificationFlaggedTimestamp: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		notificationReadStatus: string;
		notificationReadTimestamp: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		notificationOrigin: string;
		originName: string;
		originLanguage: string;
		notificationType: string;
		notificationVisibility: string;
		createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		createdBy: string;
		modifiedBy: string;
	}
}
/**
 * Message implementation for ondewo.nlu.AddNotificationsRequest
 */
export declare class AddNotificationsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddNotificationsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddNotificationsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddNotificationsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddNotificationsRequest, _writer: BinaryWriter): void;
	private _notification?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddNotificationsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddNotificationsRequest.AsObject>);
	get notification(): Notification[] | undefined;
	set notification(value: Notification[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddNotificationsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddNotificationsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddNotificationsRequest.AsProtobufJSON;
}
export declare module AddNotificationsRequest {
	/**
	 * Standard JavaScript object representation for AddNotificationsRequest
	 */
	interface AsObject {
		notification?: Notification.AsObject[];
	}
	/**
	 * Protobuf JSON representation for AddNotificationsRequest
	 */
	interface AsProtobufJSON {
		notification: Notification.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.AddNotificationsResponse
 */
export declare class AddNotificationsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AddNotificationsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AddNotificationsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AddNotificationsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AddNotificationsResponse, _writer: BinaryWriter): void;
	private _notification?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddNotificationsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AddNotificationsResponse.AsObject>);
	get notification(): Notification[] | undefined;
	set notification(value: Notification[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AddNotificationsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AddNotificationsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AddNotificationsResponse.AsProtobufJSON;
}
export declare module AddNotificationsResponse {
	/**
	 * Standard JavaScript object representation for AddNotificationsResponse
	 */
	interface AsObject {
		notification?: Notification.AsObject[];
	}
	/**
	 * Protobuf JSON representation for AddNotificationsResponse
	 */
	interface AsProtobufJSON {
		notification: Notification.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.NotificationFilter
 */
export declare class NotificationFilter implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): NotificationFilter;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: NotificationFilter): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: NotificationFilter, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: NotificationFilter, _writer: BinaryWriter): void;
	private _languageCodes;
	private _notificationOrigins;
	private _notificationVisibilities;
	private _notificationFlaggedStatus;
	private _notificationReadStatus;
	private _earliest?;
	private _latest?;
	private _userNames;
	private _originNames;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of NotificationFilter to deeply clone from
	 */
	constructor(_value?: RecursivePartial<NotificationFilter.AsObject>);
	get languageCodes(): string[];
	set languageCodes(value: string[]);
	get notificationOrigins(): NotificationOrigin[];
	set notificationOrigins(value: NotificationOrigin[]);
	get notificationVisibilities(): NotificationVisibility[];
	set notificationVisibilities(value: NotificationVisibility[]);
	get notificationFlaggedStatus(): NotificationFlaggedStatus[];
	set notificationFlaggedStatus(value: NotificationFlaggedStatus[]);
	get notificationReadStatus(): NotificationReadStatus[];
	set notificationReadStatus(value: NotificationReadStatus[]);
	get earliest(): googleProtobuf001.Timestamp | undefined;
	set earliest(value: googleProtobuf001.Timestamp | undefined);
	get latest(): googleProtobuf001.Timestamp | undefined;
	set latest(value: googleProtobuf001.Timestamp | undefined);
	get userNames(): string[];
	set userNames(value: string[]);
	get originNames(): string[];
	set originNames(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): NotificationFilter.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): NotificationFilter.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): NotificationFilter.AsProtobufJSON;
}
export declare module NotificationFilter {
	/**
	 * Standard JavaScript object representation for NotificationFilter
	 */
	interface AsObject {
		languageCodes: string[];
		notificationOrigins: NotificationOrigin[];
		notificationVisibilities: NotificationVisibility[];
		notificationFlaggedStatus: NotificationFlaggedStatus[];
		notificationReadStatus: NotificationReadStatus[];
		earliest?: googleProtobuf001.Timestamp.AsObject;
		latest?: googleProtobuf001.Timestamp.AsObject;
		userNames: string[];
		originNames: string[];
	}
	/**
	 * Protobuf JSON representation for NotificationFilter
	 */
	interface AsProtobufJSON {
		languageCodes: string[];
		notificationOrigins: string[];
		notificationVisibilities: string[];
		notificationFlaggedStatus: string[];
		notificationReadStatus: string[];
		earliest: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		latest: googleProtobuf001.Timestamp.AsProtobufJSON | null;
		userNames: string[];
		originNames: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListNotificationsRequest
 */
export declare class ListNotificationsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListNotificationsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListNotificationsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListNotificationsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListNotificationsRequest, _writer: BinaryWriter): void;
	private _notificationFilter?;
	private _pageToken;
	private _fieldMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListNotificationsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListNotificationsRequest.AsObject>);
	get notificationFilter(): NotificationFilter | undefined;
	set notificationFilter(value: NotificationFilter | undefined);
	get pageToken(): string;
	set pageToken(value: string);
	get fieldMask(): googleProtobuf000.FieldMask | undefined;
	set fieldMask(value: googleProtobuf000.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListNotificationsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListNotificationsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListNotificationsRequest.AsProtobufJSON;
}
export declare module ListNotificationsRequest {
	/**
	 * Standard JavaScript object representation for ListNotificationsRequest
	 */
	interface AsObject {
		notificationFilter?: NotificationFilter.AsObject;
		pageToken: string;
		fieldMask?: googleProtobuf000.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListNotificationsRequest
	 */
	interface AsProtobufJSON {
		notificationFilter: NotificationFilter.AsProtobufJSON | null;
		pageToken: string;
		fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.nlu.ListNotificationsResponse
 */
export declare class ListNotificationsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListNotificationsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListNotificationsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListNotificationsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListNotificationsResponse, _writer: BinaryWriter): void;
	private _notification?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListNotificationsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListNotificationsResponse.AsObject>);
	get notification(): Notification[] | undefined;
	set notification(value: Notification[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListNotificationsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListNotificationsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListNotificationsResponse.AsProtobufJSON;
}
export declare module ListNotificationsResponse {
	/**
	 * Standard JavaScript object representation for ListNotificationsResponse
	 */
	interface AsObject {
		notification?: Notification.AsObject[];
	}
	/**
	 * Protobuf JSON representation for ListNotificationsResponse
	 */
	interface AsProtobufJSON {
		notification: Notification.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export declare class SetNotificationsFlaggedStatusRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SetNotificationsFlaggedStatusRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SetNotificationsFlaggedStatusRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SetNotificationsFlaggedStatusRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SetNotificationsFlaggedStatusRequest, _writer: BinaryWriter): void;
	private _notificationName;
	private _flagged;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SetNotificationsFlaggedStatusRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SetNotificationsFlaggedStatusRequest.AsObject>);
	get notificationName(): string[];
	set notificationName(value: string[]);
	get flagged(): boolean[];
	set flagged(value: boolean[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SetNotificationsFlaggedStatusRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SetNotificationsFlaggedStatusRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SetNotificationsFlaggedStatusRequest.AsProtobufJSON;
}
export declare module SetNotificationsFlaggedStatusRequest {
	/**
	 * Standard JavaScript object representation for SetNotificationsFlaggedStatusRequest
	 */
	interface AsObject {
		notificationName: string[];
		flagged: boolean[];
	}
	/**
	 * Protobuf JSON representation for SetNotificationsFlaggedStatusRequest
	 */
	interface AsProtobufJSON {
		notificationName: string[];
		flagged: boolean[];
	}
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsReadStatusRequest
 */
export declare class SetNotificationsReadStatusRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SetNotificationsReadStatusRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SetNotificationsReadStatusRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SetNotificationsReadStatusRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SetNotificationsReadStatusRequest, _writer: BinaryWriter): void;
	private _notificationName;
	private _flagged;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SetNotificationsReadStatusRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SetNotificationsReadStatusRequest.AsObject>);
	get notificationName(): string[];
	set notificationName(value: string[]);
	get flagged(): boolean[];
	set flagged(value: boolean[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SetNotificationsReadStatusRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SetNotificationsReadStatusRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SetNotificationsReadStatusRequest.AsProtobufJSON;
}
export declare module SetNotificationsReadStatusRequest {
	/**
	 * Standard JavaScript object representation for SetNotificationsReadStatusRequest
	 */
	interface AsObject {
		notificationName: string[];
		flagged: boolean[];
	}
	/**
	 * Protobuf JSON representation for SetNotificationsReadStatusRequest
	 */
	interface AsProtobufJSON {
		notificationName: string[];
		flagged: boolean[];
	}
}
/**
 * Message implementation for ondewo.nlu.KeyValuePair
 */
export declare class KeyValuePair implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): KeyValuePair;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: KeyValuePair): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: KeyValuePair, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: KeyValuePair, _writer: BinaryWriter): void;
	private _key;
	private _intValue;
	private _floatValue;
	private _doubleValue;
	private _stringValue;
	private _createdAt?;
	private _value;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of KeyValuePair to deeply clone from
	 */
	constructor(_value?: RecursivePartial<KeyValuePair.AsObject>);
	get key(): string;
	set key(value: string);
	get intValue(): number;
	set intValue(value: number);
	get floatValue(): number;
	set floatValue(value: number);
	get doubleValue(): number;
	set doubleValue(value: number);
	get stringValue(): string;
	set stringValue(value: string);
	get createdAt(): googleProtobuf001.Timestamp | undefined;
	set createdAt(value: googleProtobuf001.Timestamp | undefined);
	get value(): KeyValuePair.ValueCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): KeyValuePair.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): KeyValuePair.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): KeyValuePair.AsProtobufJSON;
}
export declare module KeyValuePair {
	/**
	 * Standard JavaScript object representation for KeyValuePair
	 */
	interface AsObject {
		key: string;
		intValue: number;
		floatValue: number;
		doubleValue: number;
		stringValue: string;
		createdAt?: googleProtobuf001.Timestamp.AsObject;
	}
	/**
	 * Protobuf JSON representation for KeyValuePair
	 */
	interface AsProtobufJSON {
		key: string;
		intValue: number | null;
		floatValue: number | null;
		doubleValue: number | null;
		stringValue: string | null;
		createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
	}
	enum ValueCase {
		none = 0,
		intValue = 1,
		floatValue = 2,
		doubleValue = 3,
		stringValue = 4,
		createdAt = 5
	}
}
