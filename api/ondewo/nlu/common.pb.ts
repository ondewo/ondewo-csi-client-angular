/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
export enum SortingMode {
  ASCENDING = 0,
  DESCENDING = 1
}
export enum NotificationFlaggedStatus {
  NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED = 0,
  NOTIFICATION_FLAGGED_STATUS_FLAGGED = 1,
  NOTIFICATION_FLAGGED_STATUS_UNFLAGGED = 2
}
export enum NotificationReadStatus {
  NOTIFICATION_READ_STATUS_UNSPECIFIED = 0,
  NOTIFICATION_READ_STATUS_READ = 1,
  NOTIFICATION_READ_STATUS_UNREAD = 2
}
export enum NotificationVisibility {
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
export enum NotificationType {
  NOTIFICATION_TYPE_UNSPECIFIED = 0,
  NOTIFICATION_TYPE_DEBUG = 1,
  NOTIFICATION_TYPE_WARNING = 2,
  NOTIFICATION_TYPE_INFO = 3,
  NOTIFICATION_TYPE_ERROR = 4,
  NOTIFICATION_TYPE_NEWS = 5
}
export enum NotificationOrigin {
  NOTIFICATION_ORIGIN_UNSPECIFIED = 0,
  NOTIFICATION_ORIGIN_ONDEWO_AIM = 1,
  NOTIFICATION_ORIGIN_ONDEWO_BPI = 2,
  NOTIFICATION_ORIGIN_ONDEWO_CSI = 3,
  NOTIFICATION_ORIGIN_ONDEWO_NLU = 4,
  NOTIFICATION_ORIGIN_ONDEWO_S2T = 5,
  NOTIFICATION_ORIGIN_ONDEWO_SIP = 6,
  NOTIFICATION_ORIGIN_ONDEWO_T2S = 7,
  NOTIFICATION_ORIGIN_ONDEWO_VTSI = 8,
  NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ = 9,
  NOTIFICATION_ORIGIN_ONDEWO_SURVEY = 10
}
export enum LogSeverity {
  LOG_SEVERITY_UNSPECIFIED = 0,
  LOG_SEVERITY_TRACE = 1,
  LOG_SEVERITY_DEBUG = 2,
  LOG_SEVERITY_INFO = 3,
  LOG_SEVERITY_SUCCESS = 4,
  LOG_SEVERITY_WARNING = 5,
  LOG_SEVERITY_ERROR = 6,
  LOG_SEVERITY_CRITICAL = 7
}
/**
 * Message implementation for ondewo.nlu.StatResponse
 */
export class StatResponse implements GrpcMessage {
  static id = 'ondewo.nlu.StatResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StatResponse();
    StatResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StatResponse) {
    _instance.value = _instance.value || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StatResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.value = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    StatResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StatResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.value) {
      _writer.writeUint32(1, _instance.value);
    }
  }

  private _value: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StatResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StatResponse.AsObject>) {
    _value = _value || {};
    this.value = _value.value;
    StatResponse.refineValues(this);
  }
  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StatResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StatResponse.AsObject {
    return {
      value: this.value
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StatResponse.AsProtobufJSON {
    return {
      value: this.value
    };
  }
}
export module StatResponse {
  /**
   * Standard JavaScript object representation for StatResponse
   */
  export interface AsObject {
    value: number;
  }

  /**
   * Protobuf JSON representation for StatResponse
   */
  export interface AsProtobufJSON {
    value: number;
  }
}

/**
 * Message implementation for ondewo.nlu.Comment
 */
export class Comment implements GrpcMessage {
  static id = 'ondewo.nlu.Comment';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Comment();
    Comment.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Comment) {
    _instance.name = _instance.name || '';
    _instance.text = _instance.text || '';
    _instance.userId = _instance.userId || '';
    _instance.commentAboutName = _instance.commentAboutName || '';
    _instance.parentCommentName = _instance.parentCommentName || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.isResolved = _instance.isResolved || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Comment,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readString();
          break;
        case 4:
          _instance.commentAboutName = _reader.readString();
          break;
        case 5:
          _instance.parentCommentName = _reader.readString();
          break;
        case 6:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.modifiedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.createdBy = _reader.readString();
          break;
        case 9:
          _instance.modifiedBy = _reader.readString();
          break;
        case 10:
          _instance.isResolved = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    Comment.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Comment, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.userId) {
      _writer.writeString(3, _instance.userId);
    }
    if (_instance.commentAboutName) {
      _writer.writeString(4, _instance.commentAboutName);
    }
    if (_instance.parentCommentName) {
      _writer.writeString(5, _instance.parentCommentName);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        7,
        _instance.modifiedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(8, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(9, _instance.modifiedBy);
    }
    if (_instance.isResolved) {
      _writer.writeBool(10, _instance.isResolved);
    }
  }

  private _name: string;
  private _text: string;
  private _userId: string;
  private _commentAboutName: string;
  private _parentCommentName: string;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _modifiedAt?: googleProtobuf002.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _isResolved: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Comment to deeply clone from
   */
  constructor(_value?: RecursivePartial<Comment.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.text = _value.text;
    this.userId = _value.userId;
    this.commentAboutName = _value.commentAboutName;
    this.parentCommentName = _value.parentCommentName;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf002.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.isResolved = _value.isResolved;
    Comment.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get commentAboutName(): string {
    return this._commentAboutName;
  }
  set commentAboutName(value: string) {
    this._commentAboutName = value;
  }
  get parentCommentName(): string {
    return this._parentCommentName;
  }
  set parentCommentName(value: string) {
    this._parentCommentName = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf002.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get isResolved(): boolean {
    return this._isResolved;
  }
  set isResolved(value: boolean) {
    this._isResolved = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Comment.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Comment.AsObject {
    return {
      name: this.name,
      text: this.text,
      userId: this.userId,
      commentAboutName: this.commentAboutName,
      parentCommentName: this.parentCommentName,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      isResolved: this.isResolved
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Comment.AsProtobufJSON {
    return {
      name: this.name,
      text: this.text,
      userId: this.userId,
      commentAboutName: this.commentAboutName,
      parentCommentName: this.parentCommentName,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      isResolved: this.isResolved
    };
  }
}
export module Comment {
  /**
   * Standard JavaScript object representation for Comment
   */
  export interface AsObject {
    name: string;
    text: string;
    userId: string;
    commentAboutName: string;
    parentCommentName: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    modifiedAt?: googleProtobuf002.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    isResolved: boolean;
  }

  /**
   * Protobuf JSON representation for Comment
   */
  export interface AsProtobufJSON {
    name: string;
    text: string;
    userId: string;
    commentAboutName: string;
    parentCommentName: string;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    isResolved: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.Notification
 */
export class Notification implements GrpcMessage {
  static id = 'ondewo.nlu.Notification';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Notification();
    Notification.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Notification) {
    _instance.name = _instance.name || '';
    _instance.userName = _instance.userName || '';
    _instance.title = _instance.title || '';
    _instance.descriptionShort = _instance.descriptionShort || '';
    _instance.descriptionLong = _instance.descriptionLong || '';
    _instance.notificationFlaggedStatus =
      _instance.notificationFlaggedStatus || 0;
    _instance.notificationFlaggedTimestamp =
      _instance.notificationFlaggedTimestamp || undefined;
    _instance.notificationReadStatus = _instance.notificationReadStatus || 0;
    _instance.notificationReadTimestamp =
      _instance.notificationReadTimestamp || undefined;
    _instance.notificationOrigin = _instance.notificationOrigin || 0;
    _instance.originName = _instance.originName || '';
    _instance.originLanguage = _instance.originLanguage || '';
    _instance.notificationType = _instance.notificationType || 0;
    _instance.notificationVisibility = _instance.notificationVisibility || 0;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.link = _instance.link || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Notification,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.userName = _reader.readString();
          break;
        case 3:
          _instance.title = _reader.readString();
          break;
        case 4:
          _instance.descriptionShort = _reader.readString();
          break;
        case 5:
          _instance.descriptionLong = _reader.readString();
          break;
        case 6:
          _instance.notificationFlaggedStatus = _reader.readEnum();
          break;
        case 7:
          _instance.notificationFlaggedTimestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.notificationFlaggedTimestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.notificationReadStatus = _reader.readEnum();
          break;
        case 9:
          _instance.notificationReadTimestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.notificationReadTimestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.notificationOrigin = _reader.readEnum();
          break;
        case 11:
          _instance.originName = _reader.readString();
          break;
        case 12:
          _instance.originLanguage = _reader.readString();
          break;
        case 13:
          _instance.notificationType = _reader.readEnum();
          break;
        case 14:
          _instance.notificationVisibility = _reader.readEnum();
          break;
        case 15:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.modifiedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.createdBy = _reader.readString();
          break;
        case 18:
          _instance.modifiedBy = _reader.readString();
          break;
        case 19:
          _instance.link = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Notification.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Notification,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.userName) {
      _writer.writeString(2, _instance.userName);
    }
    if (_instance.title) {
      _writer.writeString(3, _instance.title);
    }
    if (_instance.descriptionShort) {
      _writer.writeString(4, _instance.descriptionShort);
    }
    if (_instance.descriptionLong) {
      _writer.writeString(5, _instance.descriptionLong);
    }
    if (_instance.notificationFlaggedStatus) {
      _writer.writeEnum(6, _instance.notificationFlaggedStatus);
    }
    if (_instance.notificationFlaggedTimestamp) {
      _writer.writeMessage(
        7,
        _instance.notificationFlaggedTimestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.notificationReadStatus) {
      _writer.writeEnum(8, _instance.notificationReadStatus);
    }
    if (_instance.notificationReadTimestamp) {
      _writer.writeMessage(
        9,
        _instance.notificationReadTimestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.notificationOrigin) {
      _writer.writeEnum(10, _instance.notificationOrigin);
    }
    if (_instance.originName) {
      _writer.writeString(11, _instance.originName);
    }
    if (_instance.originLanguage) {
      _writer.writeString(12, _instance.originLanguage);
    }
    if (_instance.notificationType) {
      _writer.writeEnum(13, _instance.notificationType);
    }
    if (_instance.notificationVisibility) {
      _writer.writeEnum(14, _instance.notificationVisibility);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        15,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        16,
        _instance.modifiedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(17, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(18, _instance.modifiedBy);
    }
    if (_instance.link) {
      _writer.writeString(19, _instance.link);
    }
  }

  private _name: string;
  private _userName: string;
  private _title: string;
  private _descriptionShort: string;
  private _descriptionLong: string;
  private _notificationFlaggedStatus: NotificationFlaggedStatus;
  private _notificationFlaggedTimestamp?: googleProtobuf002.Timestamp;
  private _notificationReadStatus: NotificationReadStatus;
  private _notificationReadTimestamp?: googleProtobuf002.Timestamp;
  private _notificationOrigin: NotificationOrigin;
  private _originName: string;
  private _originLanguage: string;
  private _notificationType: NotificationType;
  private _notificationVisibility: NotificationVisibility;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _modifiedAt?: googleProtobuf002.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _link: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Notification to deeply clone from
   */
  constructor(_value?: RecursivePartial<Notification.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.userName = _value.userName;
    this.title = _value.title;
    this.descriptionShort = _value.descriptionShort;
    this.descriptionLong = _value.descriptionLong;
    this.notificationFlaggedStatus = _value.notificationFlaggedStatus;
    this.notificationFlaggedTimestamp = _value.notificationFlaggedTimestamp
      ? new googleProtobuf002.Timestamp(_value.notificationFlaggedTimestamp)
      : undefined;
    this.notificationReadStatus = _value.notificationReadStatus;
    this.notificationReadTimestamp = _value.notificationReadTimestamp
      ? new googleProtobuf002.Timestamp(_value.notificationReadTimestamp)
      : undefined;
    this.notificationOrigin = _value.notificationOrigin;
    this.originName = _value.originName;
    this.originLanguage = _value.originLanguage;
    this.notificationType = _value.notificationType;
    this.notificationVisibility = _value.notificationVisibility;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf002.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.link = _value.link;
    Notification.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get descriptionShort(): string {
    return this._descriptionShort;
  }
  set descriptionShort(value: string) {
    this._descriptionShort = value;
  }
  get descriptionLong(): string {
    return this._descriptionLong;
  }
  set descriptionLong(value: string) {
    this._descriptionLong = value;
  }
  get notificationFlaggedStatus(): NotificationFlaggedStatus {
    return this._notificationFlaggedStatus;
  }
  set notificationFlaggedStatus(value: NotificationFlaggedStatus) {
    this._notificationFlaggedStatus = value;
  }
  get notificationFlaggedTimestamp(): googleProtobuf002.Timestamp | undefined {
    return this._notificationFlaggedTimestamp;
  }
  set notificationFlaggedTimestamp(
    value: googleProtobuf002.Timestamp | undefined
  ) {
    this._notificationFlaggedTimestamp = value;
  }
  get notificationReadStatus(): NotificationReadStatus {
    return this._notificationReadStatus;
  }
  set notificationReadStatus(value: NotificationReadStatus) {
    this._notificationReadStatus = value;
  }
  get notificationReadTimestamp(): googleProtobuf002.Timestamp | undefined {
    return this._notificationReadTimestamp;
  }
  set notificationReadTimestamp(
    value: googleProtobuf002.Timestamp | undefined
  ) {
    this._notificationReadTimestamp = value;
  }
  get notificationOrigin(): NotificationOrigin {
    return this._notificationOrigin;
  }
  set notificationOrigin(value: NotificationOrigin) {
    this._notificationOrigin = value;
  }
  get originName(): string {
    return this._originName;
  }
  set originName(value: string) {
    this._originName = value;
  }
  get originLanguage(): string {
    return this._originLanguage;
  }
  set originLanguage(value: string) {
    this._originLanguage = value;
  }
  get notificationType(): NotificationType {
    return this._notificationType;
  }
  set notificationType(value: NotificationType) {
    this._notificationType = value;
  }
  get notificationVisibility(): NotificationVisibility {
    return this._notificationVisibility;
  }
  set notificationVisibility(value: NotificationVisibility) {
    this._notificationVisibility = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf002.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get link(): string {
    return this._link;
  }
  set link(value: string) {
    this._link = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Notification.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Notification.AsObject {
    return {
      name: this.name,
      userName: this.userName,
      title: this.title,
      descriptionShort: this.descriptionShort,
      descriptionLong: this.descriptionLong,
      notificationFlaggedStatus: this.notificationFlaggedStatus,
      notificationFlaggedTimestamp: this.notificationFlaggedTimestamp
        ? this.notificationFlaggedTimestamp.toObject()
        : undefined,
      notificationReadStatus: this.notificationReadStatus,
      notificationReadTimestamp: this.notificationReadTimestamp
        ? this.notificationReadTimestamp.toObject()
        : undefined,
      notificationOrigin: this.notificationOrigin,
      originName: this.originName,
      originLanguage: this.originLanguage,
      notificationType: this.notificationType,
      notificationVisibility: this.notificationVisibility,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      link: this.link
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Notification.AsProtobufJSON {
    return {
      name: this.name,
      userName: this.userName,
      title: this.title,
      descriptionShort: this.descriptionShort,
      descriptionLong: this.descriptionLong,
      notificationFlaggedStatus:
        NotificationFlaggedStatus[
          this.notificationFlaggedStatus === null ||
          this.notificationFlaggedStatus === undefined
            ? 0
            : this.notificationFlaggedStatus
        ],
      notificationFlaggedTimestamp: this.notificationFlaggedTimestamp
        ? this.notificationFlaggedTimestamp.toProtobufJSON(options)
        : null,
      notificationReadStatus:
        NotificationReadStatus[
          this.notificationReadStatus === null ||
          this.notificationReadStatus === undefined
            ? 0
            : this.notificationReadStatus
        ],
      notificationReadTimestamp: this.notificationReadTimestamp
        ? this.notificationReadTimestamp.toProtobufJSON(options)
        : null,
      notificationOrigin:
        NotificationOrigin[
          this.notificationOrigin === null ||
          this.notificationOrigin === undefined
            ? 0
            : this.notificationOrigin
        ],
      originName: this.originName,
      originLanguage: this.originLanguage,
      notificationType:
        NotificationType[
          this.notificationType === null || this.notificationType === undefined
            ? 0
            : this.notificationType
        ],
      notificationVisibility:
        NotificationVisibility[
          this.notificationVisibility === null ||
          this.notificationVisibility === undefined
            ? 0
            : this.notificationVisibility
        ],
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      link: this.link
    };
  }
}
export module Notification {
  /**
   * Standard JavaScript object representation for Notification
   */
  export interface AsObject {
    name: string;
    userName: string;
    title: string;
    descriptionShort: string;
    descriptionLong: string;
    notificationFlaggedStatus: NotificationFlaggedStatus;
    notificationFlaggedTimestamp?: googleProtobuf002.Timestamp.AsObject;
    notificationReadStatus: NotificationReadStatus;
    notificationReadTimestamp?: googleProtobuf002.Timestamp.AsObject;
    notificationOrigin: NotificationOrigin;
    originName: string;
    originLanguage: string;
    notificationType: NotificationType;
    notificationVisibility: NotificationVisibility;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    modifiedAt?: googleProtobuf002.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    link: string;
  }

  /**
   * Protobuf JSON representation for Notification
   */
  export interface AsProtobufJSON {
    name: string;
    userName: string;
    title: string;
    descriptionShort: string;
    descriptionLong: string;
    notificationFlaggedStatus: string;
    notificationFlaggedTimestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    notificationReadStatus: string;
    notificationReadTimestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    notificationOrigin: string;
    originName: string;
    originLanguage: string;
    notificationType: string;
    notificationVisibility: string;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    link: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddNotificationsRequest
 */
export class AddNotificationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddNotificationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddNotificationsRequest();
    AddNotificationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddNotificationsRequest) {
    _instance.notifications = _instance.notifications || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddNotificationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Notification();
          _reader.readMessage(
            messageInitializer1,
            Notification.deserializeBinaryFromReader
          );
          (_instance.notifications = _instance.notifications || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddNotificationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddNotificationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notifications && _instance.notifications.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.notifications as any,
        Notification.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _notifications?: Notification[];
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddNotificationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddNotificationsRequest.AsObject>) {
    _value = _value || {};
    this.notifications = (_value.notifications || []).map(
      m => new Notification(m)
    );
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    AddNotificationsRequest.refineValues(this);
  }
  get notifications(): Notification[] | undefined {
    return this._notifications;
  }
  set notifications(value: Notification[] | undefined) {
    this._notifications = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddNotificationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddNotificationsRequest.AsObject {
    return {
      notifications: (this.notifications || []).map(m => m.toObject()),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddNotificationsRequest.AsProtobufJSON {
    return {
      notifications: (this.notifications || []).map(m =>
        m.toProtobufJSON(options)
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module AddNotificationsRequest {
  /**
   * Standard JavaScript object representation for AddNotificationsRequest
   */
  export interface AsObject {
    notifications?: Notification.AsObject[];
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for AddNotificationsRequest
   */
  export interface AsProtobufJSON {
    notifications: Notification.AsProtobufJSON[] | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.AddNotificationsResponse
 */
export class AddNotificationsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.AddNotificationsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddNotificationsResponse();
    AddNotificationsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddNotificationsResponse) {
    _instance.notifications = _instance.notifications || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddNotificationsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Notification();
          _reader.readMessage(
            messageInitializer1,
            Notification.deserializeBinaryFromReader
          );
          (_instance.notifications = _instance.notifications || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddNotificationsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddNotificationsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.notifications && _instance.notifications.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.notifications as any,
        Notification.serializeBinaryToWriter
      );
    }
  }

  private _notifications?: Notification[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddNotificationsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddNotificationsResponse.AsObject>) {
    _value = _value || {};
    this.notifications = (_value.notifications || []).map(
      m => new Notification(m)
    );
    AddNotificationsResponse.refineValues(this);
  }
  get notifications(): Notification[] | undefined {
    return this._notifications;
  }
  set notifications(value: Notification[] | undefined) {
    this._notifications = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddNotificationsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddNotificationsResponse.AsObject {
    return {
      notifications: (this.notifications || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddNotificationsResponse.AsProtobufJSON {
    return {
      notifications: (this.notifications || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module AddNotificationsResponse {
  /**
   * Standard JavaScript object representation for AddNotificationsResponse
   */
  export interface AsObject {
    notifications?: Notification.AsObject[];
  }

  /**
   * Protobuf JSON representation for AddNotificationsResponse
   */
  export interface AsProtobufJSON {
    notifications: Notification.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.NotificationFilter
 */
export class NotificationFilter implements GrpcMessage {
  static id = 'ondewo.nlu.NotificationFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NotificationFilter();
    NotificationFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NotificationFilter) {
    _instance.languageCodes = _instance.languageCodes || [];
    _instance.notificationOrigins = _instance.notificationOrigins || [];
    _instance.notificationVisibilities =
      _instance.notificationVisibilities || [];
    _instance.notificationFlaggedStatus =
      _instance.notificationFlaggedStatus || [];
    _instance.notificationReadStatus = _instance.notificationReadStatus || [];
    _instance.earliest = _instance.earliest || undefined;
    _instance.latest = _instance.latest || undefined;
    _instance.userNames = _instance.userNames || [];
    _instance.originNames = _instance.originNames || [];
    _instance.notificationTypes = _instance.notificationTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NotificationFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languageCodes = _instance.languageCodes || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _reader.readPackableEnumInto(
            (_instance.notificationOrigins =
              _instance.notificationOrigins || [])
          );
          break;
        case 3:
          _reader.readPackableEnumInto(
            (_instance.notificationVisibilities =
              _instance.notificationVisibilities || [])
          );
          break;
        case 4:
          _reader.readPackableEnumInto(
            (_instance.notificationFlaggedStatus =
              _instance.notificationFlaggedStatus || [])
          );
          break;
        case 5:
          _reader.readPackableEnumInto(
            (_instance.notificationReadStatus =
              _instance.notificationReadStatus || [])
          );
          break;
        case 6:
          _instance.earliest = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.earliest,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.latest = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.latest,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          (_instance.userNames = _instance.userNames || []).push(
            _reader.readString()
          );
          break;
        case 9:
          (_instance.originNames = _instance.originNames || []).push(
            _reader.readString()
          );
          break;
        case 10:
          _reader.readPackableEnumInto(
            (_instance.notificationTypes = _instance.notificationTypes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    NotificationFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NotificationFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(1, _instance.languageCodes);
    }
    if (_instance.notificationOrigins && _instance.notificationOrigins.length) {
      _writer.writePackedEnum(2, _instance.notificationOrigins);
    }
    if (
      _instance.notificationVisibilities &&
      _instance.notificationVisibilities.length
    ) {
      _writer.writePackedEnum(3, _instance.notificationVisibilities);
    }
    if (
      _instance.notificationFlaggedStatus &&
      _instance.notificationFlaggedStatus.length
    ) {
      _writer.writePackedEnum(4, _instance.notificationFlaggedStatus);
    }
    if (
      _instance.notificationReadStatus &&
      _instance.notificationReadStatus.length
    ) {
      _writer.writePackedEnum(5, _instance.notificationReadStatus);
    }
    if (_instance.earliest) {
      _writer.writeMessage(
        6,
        _instance.earliest as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.latest) {
      _writer.writeMessage(
        7,
        _instance.latest as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.userNames && _instance.userNames.length) {
      _writer.writeRepeatedString(8, _instance.userNames);
    }
    if (_instance.originNames && _instance.originNames.length) {
      _writer.writeRepeatedString(9, _instance.originNames);
    }
    if (_instance.notificationTypes && _instance.notificationTypes.length) {
      _writer.writePackedEnum(10, _instance.notificationTypes);
    }
  }

  private _languageCodes: string[];
  private _notificationOrigins: NotificationOrigin[];
  private _notificationVisibilities: NotificationVisibility[];
  private _notificationFlaggedStatus: NotificationFlaggedStatus[];
  private _notificationReadStatus: NotificationReadStatus[];
  private _earliest?: googleProtobuf002.Timestamp;
  private _latest?: googleProtobuf002.Timestamp;
  private _userNames: string[];
  private _originNames: string[];
  private _notificationTypes: NotificationType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NotificationFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<NotificationFilter.AsObject>) {
    _value = _value || {};
    this.languageCodes = (_value.languageCodes || []).slice();
    this.notificationOrigins = (_value.notificationOrigins || []).slice();
    this.notificationVisibilities = (
      _value.notificationVisibilities || []
    ).slice();
    this.notificationFlaggedStatus = (
      _value.notificationFlaggedStatus || []
    ).slice();
    this.notificationReadStatus = (_value.notificationReadStatus || []).slice();
    this.earliest = _value.earliest
      ? new googleProtobuf002.Timestamp(_value.earliest)
      : undefined;
    this.latest = _value.latest
      ? new googleProtobuf002.Timestamp(_value.latest)
      : undefined;
    this.userNames = (_value.userNames || []).slice();
    this.originNames = (_value.originNames || []).slice();
    this.notificationTypes = (_value.notificationTypes || []).slice();
    NotificationFilter.refineValues(this);
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }
  get notificationOrigins(): NotificationOrigin[] {
    return this._notificationOrigins;
  }
  set notificationOrigins(value: NotificationOrigin[]) {
    this._notificationOrigins = value;
  }
  get notificationVisibilities(): NotificationVisibility[] {
    return this._notificationVisibilities;
  }
  set notificationVisibilities(value: NotificationVisibility[]) {
    this._notificationVisibilities = value;
  }
  get notificationFlaggedStatus(): NotificationFlaggedStatus[] {
    return this._notificationFlaggedStatus;
  }
  set notificationFlaggedStatus(value: NotificationFlaggedStatus[]) {
    this._notificationFlaggedStatus = value;
  }
  get notificationReadStatus(): NotificationReadStatus[] {
    return this._notificationReadStatus;
  }
  set notificationReadStatus(value: NotificationReadStatus[]) {
    this._notificationReadStatus = value;
  }
  get earliest(): googleProtobuf002.Timestamp | undefined {
    return this._earliest;
  }
  set earliest(value: googleProtobuf002.Timestamp | undefined) {
    this._earliest = value;
  }
  get latest(): googleProtobuf002.Timestamp | undefined {
    return this._latest;
  }
  set latest(value: googleProtobuf002.Timestamp | undefined) {
    this._latest = value;
  }
  get userNames(): string[] {
    return this._userNames;
  }
  set userNames(value: string[]) {
    this._userNames = value;
  }
  get originNames(): string[] {
    return this._originNames;
  }
  set originNames(value: string[]) {
    this._originNames = value;
  }
  get notificationTypes(): NotificationType[] {
    return this._notificationTypes;
  }
  set notificationTypes(value: NotificationType[]) {
    this._notificationTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NotificationFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NotificationFilter.AsObject {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      notificationOrigins: (this.notificationOrigins || []).slice(),
      notificationVisibilities: (this.notificationVisibilities || []).slice(),
      notificationFlaggedStatus: (this.notificationFlaggedStatus || []).slice(),
      notificationReadStatus: (this.notificationReadStatus || []).slice(),
      earliest: this.earliest ? this.earliest.toObject() : undefined,
      latest: this.latest ? this.latest.toObject() : undefined,
      userNames: (this.userNames || []).slice(),
      originNames: (this.originNames || []).slice(),
      notificationTypes: (this.notificationTypes || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): NotificationFilter.AsProtobufJSON {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      notificationOrigins: (this.notificationOrigins || []).map(
        v => NotificationOrigin[v]
      ),
      notificationVisibilities: (this.notificationVisibilities || []).map(
        v => NotificationVisibility[v]
      ),
      notificationFlaggedStatus: (this.notificationFlaggedStatus || []).map(
        v => NotificationFlaggedStatus[v]
      ),
      notificationReadStatus: (this.notificationReadStatus || []).map(
        v => NotificationReadStatus[v]
      ),
      earliest: this.earliest ? this.earliest.toProtobufJSON(options) : null,
      latest: this.latest ? this.latest.toProtobufJSON(options) : null,
      userNames: (this.userNames || []).slice(),
      originNames: (this.originNames || []).slice(),
      notificationTypes: (this.notificationTypes || []).map(
        v => NotificationType[v]
      )
    };
  }
}
export module NotificationFilter {
  /**
   * Standard JavaScript object representation for NotificationFilter
   */
  export interface AsObject {
    languageCodes: string[];
    notificationOrigins: NotificationOrigin[];
    notificationVisibilities: NotificationVisibility[];
    notificationFlaggedStatus: NotificationFlaggedStatus[];
    notificationReadStatus: NotificationReadStatus[];
    earliest?: googleProtobuf002.Timestamp.AsObject;
    latest?: googleProtobuf002.Timestamp.AsObject;
    userNames: string[];
    originNames: string[];
    notificationTypes: NotificationType[];
  }

  /**
   * Protobuf JSON representation for NotificationFilter
   */
  export interface AsProtobufJSON {
    languageCodes: string[];
    notificationOrigins: string[];
    notificationVisibilities: string[];
    notificationFlaggedStatus: string[];
    notificationReadStatus: string[];
    earliest: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    latest: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    userNames: string[];
    originNames: string[];
    notificationTypes: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListNotificationsRequest
 */
export class ListNotificationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListNotificationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListNotificationsRequest();
    ListNotificationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListNotificationsRequest) {
    _instance.notificationFilter = _instance.notificationFilter || undefined;
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListNotificationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.notificationFilter = new NotificationFilter();
          _reader.readMessage(
            _instance.notificationFilter,
            NotificationFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListNotificationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListNotificationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notificationFilter) {
      _writer.writeMessage(
        1,
        _instance.notificationFilter as any,
        NotificationFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _notificationFilter?: NotificationFilter;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListNotificationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListNotificationsRequest.AsObject>) {
    _value = _value || {};
    this.notificationFilter = _value.notificationFilter
      ? new NotificationFilter(_value.notificationFilter)
      : undefined;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    ListNotificationsRequest.refineValues(this);
  }
  get notificationFilter(): NotificationFilter | undefined {
    return this._notificationFilter;
  }
  set notificationFilter(value: NotificationFilter | undefined) {
    this._notificationFilter = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListNotificationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListNotificationsRequest.AsObject {
    return {
      notificationFilter: this.notificationFilter
        ? this.notificationFilter.toObject()
        : undefined,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListNotificationsRequest.AsProtobufJSON {
    return {
      notificationFilter: this.notificationFilter
        ? this.notificationFilter.toProtobufJSON(options)
        : null,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module ListNotificationsRequest {
  /**
   * Standard JavaScript object representation for ListNotificationsRequest
   */
  export interface AsObject {
    notificationFilter?: NotificationFilter.AsObject;
    pageToken: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ListNotificationsRequest
   */
  export interface AsProtobufJSON {
    notificationFilter: NotificationFilter.AsProtobufJSON | null;
    pageToken: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListNotificationsResponse
 */
export class ListNotificationsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListNotificationsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListNotificationsResponse();
    ListNotificationsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListNotificationsResponse) {
    _instance.notifications = _instance.notifications || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListNotificationsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Notification();
          _reader.readMessage(
            messageInitializer1,
            Notification.deserializeBinaryFromReader
          );
          (_instance.notifications = _instance.notifications || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListNotificationsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListNotificationsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.notifications && _instance.notifications.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.notifications as any,
        Notification.serializeBinaryToWriter
      );
    }
  }

  private _notifications?: Notification[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListNotificationsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListNotificationsResponse.AsObject>) {
    _value = _value || {};
    this.notifications = (_value.notifications || []).map(
      m => new Notification(m)
    );
    ListNotificationsResponse.refineValues(this);
  }
  get notifications(): Notification[] | undefined {
    return this._notifications;
  }
  set notifications(value: Notification[] | undefined) {
    this._notifications = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListNotificationsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListNotificationsResponse.AsObject {
    return {
      notifications: (this.notifications || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListNotificationsResponse.AsProtobufJSON {
    return {
      notifications: (this.notifications || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module ListNotificationsResponse {
  /**
   * Standard JavaScript object representation for ListNotificationsResponse
   */
  export interface AsObject {
    notifications?: Notification.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListNotificationsResponse
   */
  export interface AsProtobufJSON {
    notifications: Notification.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export class SetNotificationsFlaggedStatusRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SetNotificationsFlaggedStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetNotificationsFlaggedStatusRequest();
    SetNotificationsFlaggedStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetNotificationsFlaggedStatusRequest) {
    _instance.notificationNames = _instance.notificationNames || [];
    _instance.flagged = _instance.flagged || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetNotificationsFlaggedStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.notificationNames =
            _instance.notificationNames || []).push(_reader.readString());
          break;
        case 2:
          _reader.readPackableBoolInto(
            (_instance.flagged = _instance.flagged || [])
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SetNotificationsFlaggedStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetNotificationsFlaggedStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notificationNames && _instance.notificationNames.length) {
      _writer.writeRepeatedString(1, _instance.notificationNames);
    }
    if (_instance.flagged && _instance.flagged.length) {
      _writer.writePackedBool(2, _instance.flagged);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _notificationNames: string[];
  private _flagged: boolean[];
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetNotificationsFlaggedStatusRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<SetNotificationsFlaggedStatusRequest.AsObject>
  ) {
    _value = _value || {};
    this.notificationNames = (_value.notificationNames || []).slice();
    this.flagged = (_value.flagged || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    SetNotificationsFlaggedStatusRequest.refineValues(this);
  }
  get notificationNames(): string[] {
    return this._notificationNames;
  }
  set notificationNames(value: string[]) {
    this._notificationNames = value;
  }
  get flagged(): boolean[] {
    return this._flagged;
  }
  set flagged(value: boolean[]) {
    this._flagged = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetNotificationsFlaggedStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetNotificationsFlaggedStatusRequest.AsObject {
    return {
      notificationNames: (this.notificationNames || []).slice(),
      flagged: (this.flagged || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SetNotificationsFlaggedStatusRequest.AsProtobufJSON {
    return {
      notificationNames: (this.notificationNames || []).slice(),
      flagged: (this.flagged || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module SetNotificationsFlaggedStatusRequest {
  /**
   * Standard JavaScript object representation for SetNotificationsFlaggedStatusRequest
   */
  export interface AsObject {
    notificationNames: string[];
    flagged: boolean[];
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for SetNotificationsFlaggedStatusRequest
   */
  export interface AsProtobufJSON {
    notificationNames: string[];
    flagged: boolean[];
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.SetNotificationsReadStatusRequest
 */
export class SetNotificationsReadStatusRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SetNotificationsReadStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetNotificationsReadStatusRequest();
    SetNotificationsReadStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetNotificationsReadStatusRequest) {
    _instance.notificationNames = _instance.notificationNames || [];
    _instance.flagged = _instance.flagged || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetNotificationsReadStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.notificationNames =
            _instance.notificationNames || []).push(_reader.readString());
          break;
        case 2:
          _reader.readPackableBoolInto(
            (_instance.flagged = _instance.flagged || [])
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SetNotificationsReadStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetNotificationsReadStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notificationNames && _instance.notificationNames.length) {
      _writer.writeRepeatedString(1, _instance.notificationNames);
    }
    if (_instance.flagged && _instance.flagged.length) {
      _writer.writePackedBool(2, _instance.flagged);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _notificationNames: string[];
  private _flagged: boolean[];
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetNotificationsReadStatusRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<SetNotificationsReadStatusRequest.AsObject>
  ) {
    _value = _value || {};
    this.notificationNames = (_value.notificationNames || []).slice();
    this.flagged = (_value.flagged || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    SetNotificationsReadStatusRequest.refineValues(this);
  }
  get notificationNames(): string[] {
    return this._notificationNames;
  }
  set notificationNames(value: string[]) {
    this._notificationNames = value;
  }
  get flagged(): boolean[] {
    return this._flagged;
  }
  set flagged(value: boolean[]) {
    this._flagged = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetNotificationsReadStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetNotificationsReadStatusRequest.AsObject {
    return {
      notificationNames: (this.notificationNames || []).slice(),
      flagged: (this.flagged || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SetNotificationsReadStatusRequest.AsProtobufJSON {
    return {
      notificationNames: (this.notificationNames || []).slice(),
      flagged: (this.flagged || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module SetNotificationsReadStatusRequest {
  /**
   * Standard JavaScript object representation for SetNotificationsReadStatusRequest
   */
  export interface AsObject {
    notificationNames: string[];
    flagged: boolean[];
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for SetNotificationsReadStatusRequest
   */
  export interface AsProtobufJSON {
    notificationNames: string[];
    flagged: boolean[];
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GetNotificationRequest
 */
export class GetNotificationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetNotificationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetNotificationRequest();
    GetNotificationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetNotificationRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetNotificationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetNotificationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetNotificationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetNotificationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetNotificationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetNotificationRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetNotificationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetNotificationRequest.AsObject {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetNotificationRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetNotificationRequest {
  /**
   * Standard JavaScript object representation for GetNotificationRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetNotificationRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateNotificationRequest
 */
export class UpdateNotificationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateNotificationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateNotificationRequest();
    UpdateNotificationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateNotificationRequest) {
    _instance.notification = _instance.notification || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateNotificationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.notification = new Notification();
          _reader.readMessage(
            _instance.notification,
            Notification.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateNotificationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateNotificationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notification) {
      _writer.writeMessage(
        1,
        _instance.notification as any,
        Notification.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _notification?: Notification;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateNotificationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateNotificationRequest.AsObject>) {
    _value = _value || {};
    this.notification = _value.notification
      ? new Notification(_value.notification)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    UpdateNotificationRequest.refineValues(this);
  }
  get notification(): Notification | undefined {
    return this._notification;
  }
  set notification(value: Notification | undefined) {
    this._notification = value;
  }
  get updateMask(): googleProtobuf000.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf000.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateNotificationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateNotificationRequest.AsObject {
    return {
      notification: this.notification
        ? this.notification.toObject()
        : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateNotificationRequest.AsProtobufJSON {
    return {
      notification: this.notification
        ? this.notification.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateNotificationRequest {
  /**
   * Standard JavaScript object representation for UpdateNotificationRequest
   */
  export interface AsObject {
    notification?: Notification.AsObject;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateNotificationRequest
   */
  export interface AsProtobufJSON {
    notification: Notification.AsProtobufJSON | null;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteNotificationsRequest
 */
export class DeleteNotificationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteNotificationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteNotificationsRequest();
    DeleteNotificationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteNotificationsRequest) {
    _instance.notificationNames = _instance.notificationNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteNotificationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.notificationNames =
            _instance.notificationNames || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteNotificationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteNotificationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notificationNames && _instance.notificationNames.length) {
      _writer.writeRepeatedString(1, _instance.notificationNames);
    }
  }

  private _notificationNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteNotificationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteNotificationsRequest.AsObject>) {
    _value = _value || {};
    this.notificationNames = (_value.notificationNames || []).slice();
    DeleteNotificationsRequest.refineValues(this);
  }
  get notificationNames(): string[] {
    return this._notificationNames;
  }
  set notificationNames(value: string[]) {
    this._notificationNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteNotificationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteNotificationsRequest.AsObject {
    return {
      notificationNames: (this.notificationNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteNotificationsRequest.AsProtobufJSON {
    return {
      notificationNames: (this.notificationNames || []).slice()
    };
  }
}
export module DeleteNotificationsRequest {
  /**
   * Standard JavaScript object representation for DeleteNotificationsRequest
   */
  export interface AsObject {
    notificationNames: string[];
  }

  /**
   * Protobuf JSON representation for DeleteNotificationsRequest
   */
  export interface AsProtobufJSON {
    notificationNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.StreamNotificationsRequest
 */
export class StreamNotificationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.StreamNotificationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamNotificationsRequest();
    StreamNotificationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamNotificationsRequest) {
    _instance.notificationFilter = _instance.notificationFilter || undefined;
    _instance.includeExisting = _instance.includeExisting || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamNotificationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.notificationFilter = new NotificationFilter();
          _reader.readMessage(
            _instance.notificationFilter,
            NotificationFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.includeExisting = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamNotificationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamNotificationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.notificationFilter) {
      _writer.writeMessage(
        1,
        _instance.notificationFilter as any,
        NotificationFilter.serializeBinaryToWriter
      );
    }
    if (_instance.includeExisting) {
      _writer.writeBool(2, _instance.includeExisting);
    }
  }

  private _notificationFilter?: NotificationFilter;
  private _includeExisting: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamNotificationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamNotificationsRequest.AsObject>) {
    _value = _value || {};
    this.notificationFilter = _value.notificationFilter
      ? new NotificationFilter(_value.notificationFilter)
      : undefined;
    this.includeExisting = _value.includeExisting;
    StreamNotificationsRequest.refineValues(this);
  }
  get notificationFilter(): NotificationFilter | undefined {
    return this._notificationFilter;
  }
  set notificationFilter(value: NotificationFilter | undefined) {
    this._notificationFilter = value;
  }
  get includeExisting(): boolean {
    return this._includeExisting;
  }
  set includeExisting(value: boolean) {
    this._includeExisting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamNotificationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamNotificationsRequest.AsObject {
    return {
      notificationFilter: this.notificationFilter
        ? this.notificationFilter.toObject()
        : undefined,
      includeExisting: this.includeExisting
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamNotificationsRequest.AsProtobufJSON {
    return {
      notificationFilter: this.notificationFilter
        ? this.notificationFilter.toProtobufJSON(options)
        : null,
      includeExisting: this.includeExisting
    };
  }
}
export module StreamNotificationsRequest {
  /**
   * Standard JavaScript object representation for StreamNotificationsRequest
   */
  export interface AsObject {
    notificationFilter?: NotificationFilter.AsObject;
    includeExisting: boolean;
  }

  /**
   * Protobuf JSON representation for StreamNotificationsRequest
   */
  export interface AsProtobufJSON {
    notificationFilter: NotificationFilter.AsProtobufJSON | null;
    includeExisting: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.KeyValuePair
 */
export class KeyValuePair implements GrpcMessage {
  static id = 'ondewo.nlu.KeyValuePair';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new KeyValuePair();
    KeyValuePair.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: KeyValuePair) {
    _instance.key = _instance.key || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: KeyValuePair,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.key = _reader.readString();
          break;
        case 2:
          _instance.intValue = _reader.readInt32();
          break;
        case 3:
          _instance.floatValue = _reader.readFloat();
          break;
        case 4:
          _instance.doubleValue = _reader.readDouble();
          break;
        case 5:
          _instance.stringValue = _reader.readString();
          break;
        case 6:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    KeyValuePair.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: KeyValuePair,
    _writer: BinaryWriter
  ) {
    if (_instance.key) {
      _writer.writeString(1, _instance.key);
    }
    if (_instance.intValue || _instance.intValue === 0) {
      _writer.writeInt32(2, _instance.intValue);
    }
    if (_instance.floatValue || _instance.floatValue === 0) {
      _writer.writeFloat(3, _instance.floatValue);
    }
    if (_instance.doubleValue || _instance.doubleValue === 0) {
      _writer.writeDouble(4, _instance.doubleValue);
    }
    if (_instance.stringValue || _instance.stringValue === '') {
      _writer.writeString(5, _instance.stringValue);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _key: string;
  private _intValue: number;
  private _floatValue: number;
  private _doubleValue: number;
  private _stringValue: string;
  private _createdAt?: googleProtobuf002.Timestamp;

  private _value: KeyValuePair.ValueCase = KeyValuePair.ValueCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of KeyValuePair to deeply clone from
   */
  constructor(_value?: RecursivePartial<KeyValuePair.AsObject>) {
    _value = _value || {};
    this.key = _value.key;
    this.intValue = _value.intValue;
    this.floatValue = _value.floatValue;
    this.doubleValue = _value.doubleValue;
    this.stringValue = _value.stringValue;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    KeyValuePair.refineValues(this);
  }
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
  }
  get intValue(): number {
    return this._intValue;
  }
  set intValue(value: number) {
    if (value !== undefined && value !== null) {
      this._floatValue = this._doubleValue = this._stringValue = this._createdAt = undefined;
      this._value = KeyValuePair.ValueCase.intValue;
    }
    this._intValue = value;
  }
  get floatValue(): number {
    return this._floatValue;
  }
  set floatValue(value: number) {
    if (value !== undefined && value !== null) {
      this._intValue = this._doubleValue = this._stringValue = this._createdAt = undefined;
      this._value = KeyValuePair.ValueCase.floatValue;
    }
    this._floatValue = value;
  }
  get doubleValue(): number {
    return this._doubleValue;
  }
  set doubleValue(value: number) {
    if (value !== undefined && value !== null) {
      this._intValue = this._floatValue = this._stringValue = this._createdAt = undefined;
      this._value = KeyValuePair.ValueCase.doubleValue;
    }
    this._doubleValue = value;
  }
  get stringValue(): string {
    return this._stringValue;
  }
  set stringValue(value: string) {
    if (value !== undefined && value !== null) {
      this._intValue = this._floatValue = this._doubleValue = this._createdAt = undefined;
      this._value = KeyValuePair.ValueCase.stringValue;
    }
    this._stringValue = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    if (value !== undefined && value !== null) {
      this._intValue = this._floatValue = this._doubleValue = this._stringValue = undefined;
      this._value = KeyValuePair.ValueCase.createdAt;
    }
    this._createdAt = value;
  }
  get value() {
    return this._value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    KeyValuePair.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): KeyValuePair.AsObject {
    return {
      key: this.key,
      intValue: this.intValue,
      floatValue: this.floatValue,
      doubleValue: this.doubleValue,
      stringValue: this.stringValue,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): KeyValuePair.AsProtobufJSON {
    return {
      key: this.key,
      intValue:
        this.intValue === null || this.intValue === undefined
          ? null
          : this.intValue,
      floatValue:
        this.floatValue === null || this.floatValue === undefined
          ? null
          : this.floatValue,
      doubleValue:
        this.doubleValue === null || this.doubleValue === undefined
          ? null
          : this.doubleValue,
      stringValue:
        this.stringValue === null || this.stringValue === undefined
          ? null
          : this.stringValue,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module KeyValuePair {
  /**
   * Standard JavaScript object representation for KeyValuePair
   */
  export interface AsObject {
    key: string;
    intValue: number;
    floatValue: number;
    doubleValue: number;
    stringValue: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for KeyValuePair
   */
  export interface AsProtobufJSON {
    key: string;
    intValue: number | null;
    floatValue: number | null;
    doubleValue: number | null;
    stringValue: string | null;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
  export enum ValueCase {
    none = 0,
    intValue = 1,
    floatValue = 2,
    doubleValue = 3,
    stringValue = 4,
    createdAt = 5
  }
}

/**
 * Message implementation for ondewo.nlu.LogEntry
 */
export class LogEntry implements GrpcMessage {
  static id = 'ondewo.nlu.LogEntry';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LogEntry();
    LogEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LogEntry) {
    _instance.name = _instance.name || '';
    _instance.logEntrySequenceIndex = _instance.logEntrySequenceIndex || 0;
    _instance.displayName = _instance.displayName || '';
    _instance.logEntryTimestamp = _instance.logEntryTimestamp || undefined;
    _instance.logEntryReceiveTimestamp =
      _instance.logEntryReceiveTimestamp || undefined;
    _instance.logEntrySeverity = _instance.logEntrySeverity || 0;
    _instance.logEntryPhase = _instance.logEntryPhase || '';
    _instance.logEntryOperationName = _instance.logEntryOperationName || '';
    _instance.logEntryDetails = _instance.logEntryDetails || undefined;
    _instance.logEntryContext = _instance.logEntryContext || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LogEntry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.logEntrySequenceIndex = _reader.readInt32();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.logEntryTimestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.logEntryTimestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.logEntryReceiveTimestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.logEntryReceiveTimestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.logEntrySeverity = _reader.readEnum();
          break;
        case 7:
          _instance.logEntryPhase = _reader.readString();
          break;
        case 8:
          _instance.logEntryOperationName = _reader.readString();
          break;
        case 9:
          _instance.logEntryDetails = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.logEntryDetails,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.logEntryContext = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.logEntryContext,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LogEntry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: LogEntry, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.logEntrySequenceIndex) {
      _writer.writeInt32(2, _instance.logEntrySequenceIndex);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.logEntryTimestamp) {
      _writer.writeMessage(
        4,
        _instance.logEntryTimestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.logEntryReceiveTimestamp) {
      _writer.writeMessage(
        5,
        _instance.logEntryReceiveTimestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.logEntrySeverity) {
      _writer.writeEnum(6, _instance.logEntrySeverity);
    }
    if (_instance.logEntryPhase) {
      _writer.writeString(7, _instance.logEntryPhase);
    }
    if (_instance.logEntryOperationName) {
      _writer.writeString(8, _instance.logEntryOperationName);
    }
    if (_instance.logEntryDetails) {
      _writer.writeMessage(
        9,
        _instance.logEntryDetails as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.logEntryContext) {
      _writer.writeMessage(
        10,
        _instance.logEntryContext as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _logEntrySequenceIndex: number;
  private _displayName: string;
  private _logEntryTimestamp?: googleProtobuf002.Timestamp;
  private _logEntryReceiveTimestamp?: googleProtobuf002.Timestamp;
  private _logEntrySeverity: LogSeverity;
  private _logEntryPhase: string;
  private _logEntryOperationName: string;
  private _logEntryDetails?: googleProtobuf001.Struct;
  private _logEntryContext?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LogEntry to deeply clone from
   */
  constructor(_value?: RecursivePartial<LogEntry.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.logEntrySequenceIndex = _value.logEntrySequenceIndex;
    this.displayName = _value.displayName;
    this.logEntryTimestamp = _value.logEntryTimestamp
      ? new googleProtobuf002.Timestamp(_value.logEntryTimestamp)
      : undefined;
    this.logEntryReceiveTimestamp = _value.logEntryReceiveTimestamp
      ? new googleProtobuf002.Timestamp(_value.logEntryReceiveTimestamp)
      : undefined;
    this.logEntrySeverity = _value.logEntrySeverity;
    this.logEntryPhase = _value.logEntryPhase;
    this.logEntryOperationName = _value.logEntryOperationName;
    this.logEntryDetails = _value.logEntryDetails
      ? new googleProtobuf001.Struct(_value.logEntryDetails)
      : undefined;
    this.logEntryContext = _value.logEntryContext
      ? new googleProtobuf001.Struct(_value.logEntryContext)
      : undefined;
    LogEntry.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get logEntrySequenceIndex(): number {
    return this._logEntrySequenceIndex;
  }
  set logEntrySequenceIndex(value: number) {
    this._logEntrySequenceIndex = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get logEntryTimestamp(): googleProtobuf002.Timestamp | undefined {
    return this._logEntryTimestamp;
  }
  set logEntryTimestamp(value: googleProtobuf002.Timestamp | undefined) {
    this._logEntryTimestamp = value;
  }
  get logEntryReceiveTimestamp(): googleProtobuf002.Timestamp | undefined {
    return this._logEntryReceiveTimestamp;
  }
  set logEntryReceiveTimestamp(value: googleProtobuf002.Timestamp | undefined) {
    this._logEntryReceiveTimestamp = value;
  }
  get logEntrySeverity(): LogSeverity {
    return this._logEntrySeverity;
  }
  set logEntrySeverity(value: LogSeverity) {
    this._logEntrySeverity = value;
  }
  get logEntryPhase(): string {
    return this._logEntryPhase;
  }
  set logEntryPhase(value: string) {
    this._logEntryPhase = value;
  }
  get logEntryOperationName(): string {
    return this._logEntryOperationName;
  }
  set logEntryOperationName(value: string) {
    this._logEntryOperationName = value;
  }
  get logEntryDetails(): googleProtobuf001.Struct | undefined {
    return this._logEntryDetails;
  }
  set logEntryDetails(value: googleProtobuf001.Struct | undefined) {
    this._logEntryDetails = value;
  }
  get logEntryContext(): googleProtobuf001.Struct | undefined {
    return this._logEntryContext;
  }
  set logEntryContext(value: googleProtobuf001.Struct | undefined) {
    this._logEntryContext = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LogEntry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LogEntry.AsObject {
    return {
      name: this.name,
      logEntrySequenceIndex: this.logEntrySequenceIndex,
      displayName: this.displayName,
      logEntryTimestamp: this.logEntryTimestamp
        ? this.logEntryTimestamp.toObject()
        : undefined,
      logEntryReceiveTimestamp: this.logEntryReceiveTimestamp
        ? this.logEntryReceiveTimestamp.toObject()
        : undefined,
      logEntrySeverity: this.logEntrySeverity,
      logEntryPhase: this.logEntryPhase,
      logEntryOperationName: this.logEntryOperationName,
      logEntryDetails: this.logEntryDetails
        ? this.logEntryDetails.toObject()
        : undefined,
      logEntryContext: this.logEntryContext
        ? this.logEntryContext.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): LogEntry.AsProtobufJSON {
    return {
      name: this.name,
      logEntrySequenceIndex: this.logEntrySequenceIndex,
      displayName: this.displayName,
      logEntryTimestamp: this.logEntryTimestamp
        ? this.logEntryTimestamp.toProtobufJSON(options)
        : null,
      logEntryReceiveTimestamp: this.logEntryReceiveTimestamp
        ? this.logEntryReceiveTimestamp.toProtobufJSON(options)
        : null,
      logEntrySeverity:
        LogSeverity[
          this.logEntrySeverity === null || this.logEntrySeverity === undefined
            ? 0
            : this.logEntrySeverity
        ],
      logEntryPhase: this.logEntryPhase,
      logEntryOperationName: this.logEntryOperationName,
      logEntryDetails: this.logEntryDetails
        ? this.logEntryDetails.toProtobufJSON(options)
        : null,
      logEntryContext: this.logEntryContext
        ? this.logEntryContext.toProtobufJSON(options)
        : null
    };
  }
}
export module LogEntry {
  /**
   * Standard JavaScript object representation for LogEntry
   */
  export interface AsObject {
    name: string;
    logEntrySequenceIndex: number;
    displayName: string;
    logEntryTimestamp?: googleProtobuf002.Timestamp.AsObject;
    logEntryReceiveTimestamp?: googleProtobuf002.Timestamp.AsObject;
    logEntrySeverity: LogSeverity;
    logEntryPhase: string;
    logEntryOperationName: string;
    logEntryDetails?: googleProtobuf001.Struct.AsObject;
    logEntryContext?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for LogEntry
   */
  export interface AsProtobufJSON {
    name: string;
    logEntrySequenceIndex: number;
    displayName: string;
    logEntryTimestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    logEntryReceiveTimestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    logEntrySeverity: string;
    logEntryPhase: string;
    logEntryOperationName: string;
    logEntryDetails: googleProtobuf001.Struct.AsProtobufJSON | null;
    logEntryContext: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}
