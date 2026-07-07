/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/project-role.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
export enum DefaultServerRole {
  SERVER_UNSPECIFIED = 0,
  SERVER_USER = 1,
  SERVER_MANAGER = 2,
  SERVER_ADMIN = 3,
  SERVER_INACTIVE = 4
}
/**
 * Message implementation for ondewo.nlu.User
 */
export class User implements GrpcMessage {
  static id = 'ondewo.nlu.User';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new User();
    User.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: User) {
    _instance.userId = _instance.userId || '';
    _instance.displayName = _instance.displayName || '';
    _instance.serverRoleId = _instance.serverRoleId || 0;
    _instance.userEmail = _instance.userEmail || '';
    _instance.userProfilePicture =
      _instance.userProfilePicture || new Uint8Array();
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.userId = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 6:
          _instance.serverRoleId = _reader.readUint32();
          break;
        case 7:
          _instance.userEmail = _reader.readString();
          break;
        case 8:
          _instance.userProfilePicture = _reader.readBytes();
          break;
        case 9:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.createdBy = _reader.readString();
          break;
        case 12:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    User.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter) {
    if (_instance.userId) {
      _writer.writeString(2, _instance.userId);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.serverRoleId) {
      _writer.writeUint32(6, _instance.serverRoleId);
    }
    if (_instance.userEmail) {
      _writer.writeString(7, _instance.userEmail);
    }
    if (_instance.userProfilePicture && _instance.userProfilePicture.length) {
      _writer.writeBytes(8, _instance.userProfilePicture);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        9,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        10,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(11, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(12, _instance.modifiedBy);
    }
  }

  private _userId: string;
  private _displayName: string;
  private _serverRoleId: number;
  private _userEmail: string;
  private _userProfilePicture: Uint8Array;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of User to deeply clone from
   */
  constructor(_value?: RecursivePartial<User.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    this.displayName = _value.displayName;
    this.serverRoleId = _value.serverRoleId;
    this.userEmail = _value.userEmail;
    this.userProfilePicture = _value.userProfilePicture;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    User.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get serverRoleId(): number {
    return this._serverRoleId;
  }
  set serverRoleId(value: number) {
    this._serverRoleId = value;
  }
  get userEmail(): string {
    return this._userEmail;
  }
  set userEmail(value: string) {
    this._userEmail = value;
  }
  get userProfilePicture(): Uint8Array {
    return this._userProfilePicture;
  }
  set userProfilePicture(value: Uint8Array) {
    this._userProfilePicture = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    User.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): User.AsObject {
    return {
      userId: this.userId,
      displayName: this.displayName,
      serverRoleId: this.serverRoleId,
      userEmail: this.userEmail,
      userProfilePicture: this.userProfilePicture
        ? this.userProfilePicture.subarray(0)
        : new Uint8Array(),
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
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
  ): User.AsProtobufJSON {
    return {
      userId: this.userId,
      displayName: this.displayName,
      serverRoleId: this.serverRoleId,
      userEmail: this.userEmail,
      userProfilePicture: this.userProfilePicture
        ? uint8ArrayToBase64(this.userProfilePicture)
        : '',
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module User {
  /**
   * Standard JavaScript object representation for User
   */
  export interface AsObject {
    userId: string;
    displayName: string;
    serverRoleId: number;
    userEmail: string;
    userProfilePicture: Uint8Array;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for User
   */
  export interface AsProtobufJSON {
    userId: string;
    displayName: string;
    serverRoleId: number;
    userEmail: string;
    userProfilePicture: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UserInfo
 */
export class UserInfo implements GrpcMessage {
  static id = 'ondewo.nlu.UserInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfo();
    UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfo) {
    _instance.user = _instance.user || undefined;
    _instance.projectRoles = _instance.projectRoles || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        case 2:
          const msg_2 = {} as any;
          _reader.readMessage(
            msg_2,
            UserInfo.ProjectRolesEntry.deserializeBinaryFromReader
          );
          _instance.projectRoles = _instance.projectRoles || {};
          _instance.projectRoles[msg_2.key] = msg_2.value;
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
    if (!!_instance.projectRoles) {
      const keys_2 = Object.keys(_instance.projectRoles as any);

      if (keys_2.length) {
        const repeated_2 = keys_2
          .map(key => ({
            key: key,
            value: (_instance.projectRoles as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          2,
          repeated_2,
          UserInfo.ProjectRolesEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _user?: User;
  private _projectRoles: { [prop: string]: ondewoNlu006.ProjectRole };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new User(_value.user) : undefined;
    (this.projectRoles = _value!.projectRoles
      ? Object.keys(_value!.projectRoles).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.projectRoles![k]
              ? new ondewoNlu006.ProjectRole(_value!.projectRoles![k])
              : undefined
          }),
          {}
        )
      : {}),
      UserInfo.refineValues(this);
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }
  get projectRoles(): { [prop: string]: ondewoNlu006.ProjectRole } {
    return this._projectRoles;
  }
  set projectRoles(value: { [prop: string]: ondewoNlu006.ProjectRole }) {
    this._projectRoles = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfo.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      projectRoles: this.projectRoles
        ? Object.keys(this.projectRoles).reduce(
            (r, k) => ({
              ...r,
              [k]: this.projectRoles![k]
                ? this.projectRoles![k].toObject()
                : undefined
            }),
            {}
          )
        : {}
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
  ): UserInfo.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      projectRoles: this.projectRoles
        ? Object.keys(this.projectRoles).reduce(
            (r, k) => ({
              ...r,
              [k]: this.projectRoles![k] ? this.projectRoles![k].toJSON() : null
            }),
            {}
          )
        : {}
    };
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    user?: User.AsObject;
    projectRoles: { [prop: string]: ondewoNlu006.ProjectRole };
  }

  /**
   * Protobuf JSON representation for UserInfo
   */
  export interface AsProtobufJSON {
    user: User.AsProtobufJSON | null;
    projectRoles: { [prop: string]: ondewoNlu006.ProjectRole };
  }

  /**
   * Message implementation for ondewo.nlu.UserInfo.ProjectRolesEntry
   */
  export class ProjectRolesEntry implements GrpcMessage {
    static id = 'ondewo.nlu.UserInfo.ProjectRolesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ProjectRolesEntry();
      ProjectRolesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ProjectRolesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ProjectRolesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new ondewoNlu006.ProjectRole();
            _reader.readMessage(
              _instance.value,
              ondewoNlu006.ProjectRole.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      ProjectRolesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ProjectRolesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          ondewoNlu006.ProjectRole.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: ondewoNlu006.ProjectRole;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ProjectRolesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<ProjectRolesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value
        ? new ondewoNlu006.ProjectRole(_value.value)
        : undefined;
      ProjectRolesEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): ondewoNlu006.ProjectRole | undefined {
      return this._value;
    }
    set value(value: ondewoNlu006.ProjectRole | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ProjectRolesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ProjectRolesEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
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
    ): ProjectRolesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module ProjectRolesEntry {
    /**
     * Standard JavaScript object representation for ProjectRolesEntry
     */
    export interface AsObject {
      key: string;
      value?: ondewoNlu006.ProjectRole.AsObject;
    }

    /**
     * Protobuf JSON representation for ProjectRolesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: ondewoNlu006.ProjectRole.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.CreateUserRequest
 */
export class CreateUserRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateUserRequest();
    CreateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateUserRequest) {
    _instance.user = _instance.user || undefined;
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
  }

  private _user?: User;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateUserRequest.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new User(_value.user) : undefined;
    this.password = _value.password;
    CreateUserRequest.refineValues(this);
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateUserRequest.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      password: this.password
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
  ): CreateUserRequest.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      password: this.password
    };
  }
}
export module CreateUserRequest {
  /**
   * Standard JavaScript object representation for CreateUserRequest
   */
  export interface AsObject {
    user?: User.AsObject;
    password: string;
  }

  /**
   * Protobuf JSON representation for CreateUserRequest
   */
  export interface AsProtobufJSON {
    user: User.AsProtobufJSON | null;
    password: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateUserRequest
 */
export class UpdateUserRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateUserRequest();
    UpdateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateUserRequest) {
    _instance.user = _instance.user || undefined;
    _instance.password = _instance.password || '';
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        case 4:
          _instance.password = _reader.readString();
          break;
        case 5:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
    if (_instance.password) {
      _writer.writeString(4, _instance.password);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        5,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _user?: User;
  private _password: string;
  private _updateMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateUserRequest.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new User(_value.user) : undefined;
    this.password = _value.password;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    UpdateUserRequest.refineValues(this);
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateUserRequest.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      password: this.password,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined
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
  ): UpdateUserRequest.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      password: this.password,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateUserRequest {
  /**
   * Standard JavaScript object representation for UpdateUserRequest
   */
  export interface AsObject {
    user?: User.AsObject;
    password: string;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateUserRequest
   */
  export interface AsProtobufJSON {
    user: User.AsProtobufJSON | null;
    password: string;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GetUserRequest
 */
export class GetUserRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserRequest();
    GetUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        case 3:
          _instance.userEmail = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId || _instance.userId === '') {
      _writer.writeString(1, _instance.userId);
    }
    if (_instance.userEmail || _instance.userEmail === '') {
      _writer.writeString(3, _instance.userEmail);
    }
  }

  private _userId: string;
  private _userEmail: string;

  private _userIdentifier: GetUserRequest.UserIdentifierCase =
    GetUserRequest.UserIdentifierCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    this.userEmail = _value.userEmail;
    GetUserRequest.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    if (value !== undefined && value !== null) {
      this._userEmail = undefined;
      this._userIdentifier = GetUserRequest.UserIdentifierCase.userId;
    }
    this._userId = value;
  }
  get userEmail(): string {
    return this._userEmail;
  }
  set userEmail(value: string) {
    if (value !== undefined && value !== null) {
      this._userId = undefined;
      this._userIdentifier = GetUserRequest.UserIdentifierCase.userEmail;
    }
    this._userEmail = value;
  }
  get userIdentifier() {
    return this._userIdentifier;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserRequest.AsObject {
    return {
      userId: this.userId,
      userEmail: this.userEmail
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
  ): GetUserRequest.AsProtobufJSON {
    return {
      userId:
        this.userId === null || this.userId === undefined ? null : this.userId,
      userEmail:
        this.userEmail === null || this.userEmail === undefined
          ? null
          : this.userEmail
    };
  }
}
export module GetUserRequest {
  /**
   * Standard JavaScript object representation for GetUserRequest
   */
  export interface AsObject {
    userId: string;
    userEmail: string;
  }

  /**
   * Protobuf JSON representation for GetUserRequest
   */
  export interface AsProtobufJSON {
    userId: string | null;
    userEmail: string | null;
  }
  export enum UserIdentifierCase {
    none = 0,
    userId = 1,
    userEmail = 2
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteUserRequest
 */
export class DeleteUserRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserRequest();
    DeleteUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteUserRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    DeleteUserRequest.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserRequest.AsObject {
    return {
      userId: this.userId
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
  ): DeleteUserRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module DeleteUserRequest {
  /**
   * Standard JavaScript object representation for DeleteUserRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUsersRequest
 */
export class ListUsersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListUsersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUsersRequest();
    ListUsersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUsersRequest) {
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUsersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListUsersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUsersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
  }

  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUsersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUsersRequest.AsObject>) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    ListUsersRequest.refineValues(this);
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUsersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUsersRequest.AsObject {
    return {
      pageToken: this.pageToken
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
  ): ListUsersRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken
    };
  }
}
export module ListUsersRequest {
  /**
   * Standard JavaScript object representation for ListUsersRequest
   */
  export interface AsObject {
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListUsersRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUsersResponse
 */
export class ListUsersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListUsersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUsersResponse();
    ListUsersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUsersResponse) {
    _instance.users = _instance.users || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUsersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new User();
          _reader.readMessage(
            messageInitializer1,
            User.deserializeBinaryFromReader
          );
          (_instance.users = _instance.users || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListUsersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUsersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        User.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _users?: User[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUsersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUsersResponse.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new User(m));
    this.nextPageToken = _value.nextPageToken;
    ListUsersResponse.refineValues(this);
  }
  get users(): User[] | undefined {
    return this._users;
  }
  set users(value: User[] | undefined) {
    this._users = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUsersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUsersResponse.AsObject {
    return {
      users: (this.users || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
  ): ListUsersResponse.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListUsersResponse {
  /**
   * Standard JavaScript object representation for ListUsersResponse
   */
  export interface AsObject {
    users?: User.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListUsersResponse
   */
  export interface AsProtobufJSON {
    users: User.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUserInfosResponse
 */
export class ListUserInfosResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListUserInfosResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserInfosResponse();
    ListUserInfosResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserInfosResponse) {
    _instance.users = _instance.users || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserInfosResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UserInfo();
          _reader.readMessage(
            messageInitializer1,
            UserInfo.deserializeBinaryFromReader
          );
          (_instance.users = _instance.users || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListUserInfosResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserInfosResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        UserInfo.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _users?: UserInfo[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserInfosResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserInfosResponse.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new UserInfo(m));
    this.nextPageToken = _value.nextPageToken;
    ListUserInfosResponse.refineValues(this);
  }
  get users(): UserInfo[] | undefined {
    return this._users;
  }
  set users(value: UserInfo[] | undefined) {
    this._users = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUserInfosResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserInfosResponse.AsObject {
    return {
      users: (this.users || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
  ): ListUserInfosResponse.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListUserInfosResponse {
  /**
   * Standard JavaScript object representation for ListUserInfosResponse
   */
  export interface AsObject {
    users?: UserInfo.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListUserInfosResponse
   */
  export interface AsProtobufJSON {
    users: UserInfo.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ServerRole
 */
export class ServerRole implements GrpcMessage {
  static id = 'ondewo.nlu.ServerRole';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ServerRole();
    ServerRole.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ServerRole) {
    _instance.roleId = _instance.roleId || 0;
    _instance.name = _instance.name || '';
    _instance.permissions = _instance.permissions || [];
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ServerRole,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.roleId = _reader.readUint32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          (_instance.permissions = _instance.permissions || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createdBy = _reader.readString();
          break;
        case 7:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ServerRole.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ServerRole, _writer: BinaryWriter) {
    if (_instance.roleId) {
      _writer.writeUint32(1, _instance.roleId);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.permissions && _instance.permissions.length) {
      _writer.writeRepeatedString(3, _instance.permissions);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        5,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(6, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(7, _instance.modifiedBy);
    }
  }

  private _roleId: number;
  private _name: string;
  private _permissions: string[];
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ServerRole to deeply clone from
   */
  constructor(_value?: RecursivePartial<ServerRole.AsObject>) {
    _value = _value || {};
    this.roleId = _value.roleId;
    this.name = _value.name;
    this.permissions = (_value.permissions || []).slice();
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    ServerRole.refineValues(this);
  }
  get roleId(): number {
    return this._roleId;
  }
  set roleId(value: number) {
    this._roleId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get permissions(): string[] {
    return this._permissions;
  }
  set permissions(value: string[]) {
    this._permissions = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ServerRole.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ServerRole.AsObject {
    return {
      roleId: this.roleId,
      name: this.name,
      permissions: (this.permissions || []).slice(),
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
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
  ): ServerRole.AsProtobufJSON {
    return {
      roleId: this.roleId,
      name: this.name,
      permissions: (this.permissions || []).slice(),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module ServerRole {
  /**
   * Standard JavaScript object representation for ServerRole
   */
  export interface AsObject {
    roleId: number;
    name: string;
    permissions: string[];
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for ServerRole
   */
  export interface AsProtobufJSON {
    roleId: number;
    name: string;
    permissions: string[];
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateServerRoleRequest
 */
export class CreateServerRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateServerRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateServerRoleRequest();
    CreateServerRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateServerRoleRequest) {
    _instance.role = _instance.role || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateServerRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.role = new ServerRole();
          _reader.readMessage(
            _instance.role,
            ServerRole.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateServerRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateServerRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.role) {
      _writer.writeMessage(
        1,
        _instance.role as any,
        ServerRole.serializeBinaryToWriter
      );
    }
  }

  private _role?: ServerRole;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateServerRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateServerRoleRequest.AsObject>) {
    _value = _value || {};
    this.role = _value.role ? new ServerRole(_value.role) : undefined;
    CreateServerRoleRequest.refineValues(this);
  }
  get role(): ServerRole | undefined {
    return this._role;
  }
  set role(value: ServerRole | undefined) {
    this._role = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateServerRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateServerRoleRequest.AsObject {
    return {
      role: this.role ? this.role.toObject() : undefined
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
  ): CreateServerRoleRequest.AsProtobufJSON {
    return {
      role: this.role ? this.role.toProtobufJSON(options) : null
    };
  }
}
export module CreateServerRoleRequest {
  /**
   * Standard JavaScript object representation for CreateServerRoleRequest
   */
  export interface AsObject {
    role?: ServerRole.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateServerRoleRequest
   */
  export interface AsProtobufJSON {
    role: ServerRole.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateServerRoleRequest
 */
export class UpdateServerRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateServerRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateServerRoleRequest();
    UpdateServerRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateServerRoleRequest) {
    _instance.role = _instance.role || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateServerRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.role = new ServerRole();
          _reader.readMessage(
            _instance.role,
            ServerRole.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateServerRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateServerRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.role) {
      _writer.writeMessage(
        1,
        _instance.role as any,
        ServerRole.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _role?: ServerRole;
  private _updateMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateServerRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateServerRoleRequest.AsObject>) {
    _value = _value || {};
    this.role = _value.role ? new ServerRole(_value.role) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    UpdateServerRoleRequest.refineValues(this);
  }
  get role(): ServerRole | undefined {
    return this._role;
  }
  set role(value: ServerRole | undefined) {
    this._role = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateServerRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateServerRoleRequest.AsObject {
    return {
      role: this.role ? this.role.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined
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
  ): UpdateServerRoleRequest.AsProtobufJSON {
    return {
      role: this.role ? this.role.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateServerRoleRequest {
  /**
   * Standard JavaScript object representation for UpdateServerRoleRequest
   */
  export interface AsObject {
    role?: ServerRole.AsObject;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateServerRoleRequest
   */
  export interface AsProtobufJSON {
    role: ServerRole.AsProtobufJSON | null;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteServerRoleRequest
 */
export class DeleteServerRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteServerRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteServerRoleRequest();
    DeleteServerRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteServerRoleRequest) {
    _instance.roleId = _instance.roleId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteServerRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.roleId = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteServerRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteServerRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.roleId) {
      _writer.writeUint32(1, _instance.roleId);
    }
  }

  private _roleId: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteServerRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteServerRoleRequest.AsObject>) {
    _value = _value || {};
    this.roleId = _value.roleId;
    DeleteServerRoleRequest.refineValues(this);
  }
  get roleId(): number {
    return this._roleId;
  }
  set roleId(value: number) {
    this._roleId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteServerRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteServerRoleRequest.AsObject {
    return {
      roleId: this.roleId
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
  ): DeleteServerRoleRequest.AsProtobufJSON {
    return {
      roleId: this.roleId
    };
  }
}
export module DeleteServerRoleRequest {
  /**
   * Standard JavaScript object representation for DeleteServerRoleRequest
   */
  export interface AsObject {
    roleId: number;
  }

  /**
   * Protobuf JSON representation for DeleteServerRoleRequest
   */
  export interface AsProtobufJSON {
    roleId: number;
  }
}

/**
 * Message implementation for ondewo.nlu.GetServerRoleRequest
 */
export class GetServerRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetServerRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetServerRoleRequest();
    GetServerRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetServerRoleRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetServerRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.roleId = _reader.readUint32();
          break;
        case 2:
          _instance.roleName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetServerRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetServerRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.roleId || _instance.roleId === 0) {
      _writer.writeUint32(1, _instance.roleId);
    }
    if (_instance.roleName || _instance.roleName === '') {
      _writer.writeString(2, _instance.roleName);
    }
  }

  private _roleId: number;
  private _roleName: string;

  private _serverRoleIdentifier: GetServerRoleRequest.ServerRoleIdentifierCase =
    GetServerRoleRequest.ServerRoleIdentifierCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetServerRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetServerRoleRequest.AsObject>) {
    _value = _value || {};
    this.roleId = _value.roleId;
    this.roleName = _value.roleName;
    GetServerRoleRequest.refineValues(this);
  }
  get roleId(): number {
    return this._roleId;
  }
  set roleId(value: number) {
    if (value !== undefined && value !== null) {
      this._roleName = undefined;
      this._serverRoleIdentifier =
        GetServerRoleRequest.ServerRoleIdentifierCase.roleId;
    }
    this._roleId = value;
  }
  get roleName(): string {
    return this._roleName;
  }
  set roleName(value: string) {
    if (value !== undefined && value !== null) {
      this._roleId = undefined;
      this._serverRoleIdentifier =
        GetServerRoleRequest.ServerRoleIdentifierCase.roleName;
    }
    this._roleName = value;
  }
  get serverRoleIdentifier() {
    return this._serverRoleIdentifier;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetServerRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetServerRoleRequest.AsObject {
    return {
      roleId: this.roleId,
      roleName: this.roleName
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
  ): GetServerRoleRequest.AsProtobufJSON {
    return {
      roleId:
        this.roleId === null || this.roleId === undefined ? null : this.roleId,
      roleName:
        this.roleName === null || this.roleName === undefined
          ? null
          : this.roleName
    };
  }
}
export module GetServerRoleRequest {
  /**
   * Standard JavaScript object representation for GetServerRoleRequest
   */
  export interface AsObject {
    roleId: number;
    roleName: string;
  }

  /**
   * Protobuf JSON representation for GetServerRoleRequest
   */
  export interface AsProtobufJSON {
    roleId: number | null;
    roleName: string | null;
  }
  export enum ServerRoleIdentifierCase {
    none = 0,
    roleId = 1,
    roleName = 2
  }
}

/**
 * Message implementation for ondewo.nlu.ListServerRolesRequest
 */
export class ListServerRolesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListServerRolesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListServerRolesRequest();
    ListServerRolesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListServerRolesRequest) {
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListServerRolesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListServerRolesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListServerRolesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
  }

  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListServerRolesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListServerRolesRequest.AsObject>) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    ListServerRolesRequest.refineValues(this);
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListServerRolesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListServerRolesRequest.AsObject {
    return {
      pageToken: this.pageToken
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
  ): ListServerRolesRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken
    };
  }
}
export module ListServerRolesRequest {
  /**
   * Standard JavaScript object representation for ListServerRolesRequest
   */
  export interface AsObject {
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListServerRolesRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListServerRolesResponse
 */
export class ListServerRolesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListServerRolesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListServerRolesResponse();
    ListServerRolesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListServerRolesResponse) {
    _instance.serverRoles = _instance.serverRoles || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListServerRolesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ServerRole();
          _reader.readMessage(
            messageInitializer1,
            ServerRole.deserializeBinaryFromReader
          );
          (_instance.serverRoles = _instance.serverRoles || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListServerRolesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListServerRolesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.serverRoles && _instance.serverRoles.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.serverRoles as any,
        ServerRole.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _serverRoles?: ServerRole[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListServerRolesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListServerRolesResponse.AsObject>) {
    _value = _value || {};
    this.serverRoles = (_value.serverRoles || []).map(m => new ServerRole(m));
    this.nextPageToken = _value.nextPageToken;
    ListServerRolesResponse.refineValues(this);
  }
  get serverRoles(): ServerRole[] | undefined {
    return this._serverRoles;
  }
  set serverRoles(value: ServerRole[] | undefined) {
    this._serverRoles = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListServerRolesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListServerRolesResponse.AsObject {
    return {
      serverRoles: (this.serverRoles || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
  ): ListServerRolesResponse.AsProtobufJSON {
    return {
      serverRoles: (this.serverRoles || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListServerRolesResponse {
  /**
   * Standard JavaScript object representation for ListServerRolesResponse
   */
  export interface AsObject {
    serverRoles?: ServerRole.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListServerRolesResponse
   */
  export interface AsProtobufJSON {
    serverRoles: ServerRole.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListServerPermissionsRequest
 */
export class ListServerPermissionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListServerPermissionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListServerPermissionsRequest();
    ListServerPermissionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListServerPermissionsRequest) {
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListServerPermissionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListServerPermissionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListServerPermissionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
  }

  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListServerPermissionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListServerPermissionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    ListServerPermissionsRequest.refineValues(this);
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListServerPermissionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListServerPermissionsRequest.AsObject {
    return {
      pageToken: this.pageToken
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
  ): ListServerPermissionsRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken
    };
  }
}
export module ListServerPermissionsRequest {
  /**
   * Standard JavaScript object representation for ListServerPermissionsRequest
   */
  export interface AsObject {
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListServerPermissionsRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListServerPermissionsResponse
 */
export class ListServerPermissionsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListServerPermissionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListServerPermissionsResponse();
    ListServerPermissionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListServerPermissionsResponse) {
    _instance.permissions = _instance.permissions || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListServerPermissionsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.permissions = _instance.permissions || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListServerPermissionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListServerPermissionsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.permissions && _instance.permissions.length) {
      _writer.writeRepeatedString(1, _instance.permissions);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _permissions: string[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListServerPermissionsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListServerPermissionsResponse.AsObject>
  ) {
    _value = _value || {};
    this.permissions = (_value.permissions || []).slice();
    this.nextPageToken = _value.nextPageToken;
    ListServerPermissionsResponse.refineValues(this);
  }
  get permissions(): string[] {
    return this._permissions;
  }
  set permissions(value: string[]) {
    this._permissions = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListServerPermissionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListServerPermissionsResponse.AsObject {
    return {
      permissions: (this.permissions || []).slice(),
      nextPageToken: this.nextPageToken
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
  ): ListServerPermissionsResponse.AsProtobufJSON {
    return {
      permissions: (this.permissions || []).slice(),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListServerPermissionsResponse {
  /**
   * Standard JavaScript object representation for ListServerPermissionsResponse
   */
  export interface AsObject {
    permissions: string[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListServerPermissionsResponse
   */
  export interface AsProtobufJSON {
    permissions: string[];
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LoginRequest
 */
export class LoginRequest implements GrpcMessage {
  static id = 'ondewo.nlu.LoginRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginRequest();
    LoginRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginRequest) {
    _instance.userEmail = _instance.userEmail || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userEmail = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userEmail) {
      _writer.writeString(1, _instance.userEmail);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _userEmail: string;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginRequest.AsObject>) {
    _value = _value || {};
    this.userEmail = _value.userEmail;
    this.password = _value.password;
    LoginRequest.refineValues(this);
  }
  get userEmail(): string {
    return this._userEmail;
  }
  set userEmail(value: string) {
    this._userEmail = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginRequest.AsObject {
    return {
      userEmail: this.userEmail,
      password: this.password
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
  ): LoginRequest.AsProtobufJSON {
    return {
      userEmail: this.userEmail,
      password: this.password
    };
  }
}
export module LoginRequest {
  /**
   * Standard JavaScript object representation for LoginRequest
   */
  export interface AsObject {
    userEmail: string;
    password: string;
  }

  /**
   * Protobuf JSON representation for LoginRequest
   */
  export interface AsProtobufJSON {
    userEmail: string;
    password: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LoginResponse
 */
export class LoginResponse implements GrpcMessage {
  static id = 'ondewo.nlu.LoginResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginResponse();
    LoginResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginResponse) {
    _instance.user = _instance.user || undefined;
    _instance.authToken = _instance.authToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        case 2:
          _instance.authToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
    if (_instance.authToken) {
      _writer.writeString(2, _instance.authToken);
    }
  }

  private _user?: User;
  private _authToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginResponse.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new User(_value.user) : undefined;
    this.authToken = _value.authToken;
    LoginResponse.refineValues(this);
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }
  get authToken(): string {
    return this._authToken;
  }
  set authToken(value: string) {
    this._authToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginResponse.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      authToken: this.authToken
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
  ): LoginResponse.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      authToken: this.authToken
    };
  }
}
export module LoginResponse {
  /**
   * Standard JavaScript object representation for LoginResponse
   */
  export interface AsObject {
    user?: User.AsObject;
    authToken: string;
  }

  /**
   * Protobuf JSON representation for LoginResponse
   */
  export interface AsProtobufJSON {
    user: User.AsProtobufJSON | null;
    authToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetUserPreferencesRequest
 */
export class GetUserPreferencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetUserPreferencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserPreferencesRequest();
    GetUserPreferencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserPreferencesRequest) {
    _instance.userName = _instance.userName || '';
    _instance.keys = _instance.keys || [];
    _instance.regexInclude = _instance.regexInclude || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserPreferencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          (_instance.keys = _instance.keys || []).push(_reader.readString());
          break;
        case 3:
          _instance.regexInclude = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserPreferencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserPreferencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keys && _instance.keys.length) {
      _writer.writeRepeatedString(2, _instance.keys);
    }
    if (_instance.regexInclude) {
      _writer.writeString(3, _instance.regexInclude);
    }
  }

  private _userName: string;
  private _keys: string[];
  private _regexInclude: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserPreferencesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserPreferencesRequest.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keys = (_value.keys || []).slice();
    this.regexInclude = _value.regexInclude;
    GetUserPreferencesRequest.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keys(): string[] {
    return this._keys;
  }
  set keys(value: string[]) {
    this._keys = value;
  }
  get regexInclude(): string {
    return this._regexInclude;
  }
  set regexInclude(value: string) {
    this._regexInclude = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserPreferencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserPreferencesRequest.AsObject {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      regexInclude: this.regexInclude
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
  ): GetUserPreferencesRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      regexInclude: this.regexInclude
    };
  }
}
export module GetUserPreferencesRequest {
  /**
   * Standard JavaScript object representation for GetUserPreferencesRequest
   */
  export interface AsObject {
    userName: string;
    keys: string[];
    regexInclude: string;
  }

  /**
   * Protobuf JSON representation for GetUserPreferencesRequest
   */
  export interface AsProtobufJSON {
    userName: string;
    keys: string[];
    regexInclude: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetUserPreferencesResponse
 */
export class GetUserPreferencesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetUserPreferencesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserPreferencesResponse();
    GetUserPreferencesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserPreferencesResponse) {
    _instance.userName = _instance.userName || '';
    _instance.keyValuePairs = _instance.keyValuePairs || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserPreferencesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu007.KeyValuePair();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu007.KeyValuePair.deserializeBinaryFromReader
          );
          (_instance.keyValuePairs = _instance.keyValuePairs || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserPreferencesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserPreferencesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keyValuePairs && _instance.keyValuePairs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.keyValuePairs as any,
        ondewoNlu007.KeyValuePair.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _userName: string;
  private _keyValuePairs?: ondewoNlu007.KeyValuePair[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserPreferencesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserPreferencesResponse.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keyValuePairs = (_value.keyValuePairs || []).map(
      m => new ondewoNlu007.KeyValuePair(m)
    );
    this.errorMessage = _value.errorMessage;
    GetUserPreferencesResponse.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keyValuePairs(): ondewoNlu007.KeyValuePair[] | undefined {
    return this._keyValuePairs;
  }
  set keyValuePairs(value: ondewoNlu007.KeyValuePair[] | undefined) {
    this._keyValuePairs = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserPreferencesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserPreferencesResponse.AsObject {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m => m.toObject()),
      errorMessage: this.errorMessage
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
  ): GetUserPreferencesResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module GetUserPreferencesResponse {
  /**
   * Standard JavaScript object representation for GetUserPreferencesResponse
   */
  export interface AsObject {
    userName: string;
    keyValuePairs?: ondewoNlu007.KeyValuePair.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for GetUserPreferencesResponse
   */
  export interface AsProtobufJSON {
    userName: string;
    keyValuePairs: ondewoNlu007.KeyValuePair.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.SetUserPreferencesRequest
 */
export class SetUserPreferencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SetUserPreferencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetUserPreferencesRequest();
    SetUserPreferencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetUserPreferencesRequest) {
    _instance.userName = _instance.userName || '';
    _instance.keyValuePairs = _instance.keyValuePairs || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetUserPreferencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu007.KeyValuePair();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu007.KeyValuePair.deserializeBinaryFromReader
          );
          (_instance.keyValuePairs = _instance.keyValuePairs || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SetUserPreferencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetUserPreferencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keyValuePairs && _instance.keyValuePairs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.keyValuePairs as any,
        ondewoNlu007.KeyValuePair.serializeBinaryToWriter
      );
    }
  }

  private _userName: string;
  private _keyValuePairs?: ondewoNlu007.KeyValuePair[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetUserPreferencesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetUserPreferencesRequest.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keyValuePairs = (_value.keyValuePairs || []).map(
      m => new ondewoNlu007.KeyValuePair(m)
    );
    SetUserPreferencesRequest.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keyValuePairs(): ondewoNlu007.KeyValuePair[] | undefined {
    return this._keyValuePairs;
  }
  set keyValuePairs(value: ondewoNlu007.KeyValuePair[] | undefined) {
    this._keyValuePairs = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetUserPreferencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetUserPreferencesRequest.AsObject {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m => m.toObject())
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
  ): SetUserPreferencesRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module SetUserPreferencesRequest {
  /**
   * Standard JavaScript object representation for SetUserPreferencesRequest
   */
  export interface AsObject {
    userName: string;
    keyValuePairs?: ondewoNlu007.KeyValuePair.AsObject[];
  }

  /**
   * Protobuf JSON representation for SetUserPreferencesRequest
   */
  export interface AsProtobufJSON {
    userName: string;
    keyValuePairs: ondewoNlu007.KeyValuePair.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.SetUserPreferencesResponse
 */
export class SetUserPreferencesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.SetUserPreferencesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetUserPreferencesResponse();
    SetUserPreferencesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetUserPreferencesResponse) {
    _instance.userName = _instance.userName || '';
    _instance.keys = _instance.keys || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetUserPreferencesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          (_instance.keys = _instance.keys || []).push(_reader.readString());
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SetUserPreferencesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetUserPreferencesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keys && _instance.keys.length) {
      _writer.writeRepeatedString(2, _instance.keys);
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _userName: string;
  private _keys: string[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetUserPreferencesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetUserPreferencesResponse.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keys = (_value.keys || []).slice();
    this.errorMessage = _value.errorMessage;
    SetUserPreferencesResponse.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keys(): string[] {
    return this._keys;
  }
  set keys(value: string[]) {
    this._keys = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetUserPreferencesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetUserPreferencesResponse.AsObject {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      errorMessage: this.errorMessage
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
  ): SetUserPreferencesResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      errorMessage: this.errorMessage
    };
  }
}
export module SetUserPreferencesResponse {
  /**
   * Standard JavaScript object representation for SetUserPreferencesResponse
   */
  export interface AsObject {
    userName: string;
    keys: string[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for SetUserPreferencesResponse
   */
  export interface AsProtobufJSON {
    userName: string;
    keys: string[];
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteUserPreferencesRequest
 */
export class DeleteUserPreferencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteUserPreferencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserPreferencesRequest();
    DeleteUserPreferencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserPreferencesRequest) {
    _instance.userName = _instance.userName || '';
    _instance.keys = _instance.keys || [];
    _instance.regexInclude = _instance.regexInclude || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserPreferencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          (_instance.keys = _instance.keys || []).push(_reader.readString());
          break;
        case 3:
          _instance.regexInclude = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserPreferencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserPreferencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keys && _instance.keys.length) {
      _writer.writeRepeatedString(2, _instance.keys);
    }
    if (_instance.regexInclude) {
      _writer.writeString(3, _instance.regexInclude);
    }
  }

  private _userName: string;
  private _keys: string[];
  private _regexInclude: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserPreferencesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteUserPreferencesRequest.AsObject>
  ) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keys = (_value.keys || []).slice();
    this.regexInclude = _value.regexInclude;
    DeleteUserPreferencesRequest.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keys(): string[] {
    return this._keys;
  }
  set keys(value: string[]) {
    this._keys = value;
  }
  get regexInclude(): string {
    return this._regexInclude;
  }
  set regexInclude(value: string) {
    this._regexInclude = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserPreferencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserPreferencesRequest.AsObject {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      regexInclude: this.regexInclude
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
  ): DeleteUserPreferencesRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      regexInclude: this.regexInclude
    };
  }
}
export module DeleteUserPreferencesRequest {
  /**
   * Standard JavaScript object representation for DeleteUserPreferencesRequest
   */
  export interface AsObject {
    userName: string;
    keys: string[];
    regexInclude: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserPreferencesRequest
   */
  export interface AsProtobufJSON {
    userName: string;
    keys: string[];
    regexInclude: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteUserPreferencesResponse
 */
export class DeleteUserPreferencesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteUserPreferencesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserPreferencesResponse();
    DeleteUserPreferencesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserPreferencesResponse) {
    _instance.userName = _instance.userName || '';
    _instance.keys = _instance.keys || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserPreferencesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          (_instance.keys = _instance.keys || []).push(_reader.readString());
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserPreferencesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserPreferencesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keys && _instance.keys.length) {
      _writer.writeRepeatedString(2, _instance.keys);
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _userName: string;
  private _keys: string[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserPreferencesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteUserPreferencesResponse.AsObject>
  ) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keys = (_value.keys || []).slice();
    this.errorMessage = _value.errorMessage;
    DeleteUserPreferencesResponse.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keys(): string[] {
    return this._keys;
  }
  set keys(value: string[]) {
    this._keys = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserPreferencesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserPreferencesResponse.AsObject {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      errorMessage: this.errorMessage
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
  ): DeleteUserPreferencesResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      keys: (this.keys || []).slice(),
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteUserPreferencesResponse {
  /**
   * Standard JavaScript object representation for DeleteUserPreferencesResponse
   */
  export interface AsObject {
    userName: string;
    keys: string[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserPreferencesResponse
   */
  export interface AsProtobufJSON {
    userName: string;
    keys: string[];
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteAllUserPreferencesRequest
 */
export class DeleteAllUserPreferencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteAllUserPreferencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAllUserPreferencesRequest();
    DeleteAllUserPreferencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAllUserPreferencesRequest) {
    _instance.userName = _instance.userName || '';
    _instance.regexFilter = _instance.regexFilter || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAllUserPreferencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          _instance.regexFilter = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAllUserPreferencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAllUserPreferencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.regexFilter) {
      _writer.writeString(2, _instance.regexFilter);
    }
  }

  private _userName: string;
  private _regexFilter: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAllUserPreferencesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteAllUserPreferencesRequest.AsObject>
  ) {
    _value = _value || {};
    this.userName = _value.userName;
    this.regexFilter = _value.regexFilter;
    DeleteAllUserPreferencesRequest.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get regexFilter(): string {
    return this._regexFilter;
  }
  set regexFilter(value: string) {
    this._regexFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteAllUserPreferencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAllUserPreferencesRequest.AsObject {
    return {
      userName: this.userName,
      regexFilter: this.regexFilter
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
  ): DeleteAllUserPreferencesRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      regexFilter: this.regexFilter
    };
  }
}
export module DeleteAllUserPreferencesRequest {
  /**
   * Standard JavaScript object representation for DeleteAllUserPreferencesRequest
   */
  export interface AsObject {
    userName: string;
    regexFilter: string;
  }

  /**
   * Protobuf JSON representation for DeleteAllUserPreferencesRequest
   */
  export interface AsProtobufJSON {
    userName: string;
    regexFilter: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUserPreferencesRequest
 */
export class ListUserPreferencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListUserPreferencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserPreferencesRequest();
    ListUserPreferencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserPreferencesRequest) {
    _instance.userName = _instance.userName || '';
    _instance.regexFilter = _instance.regexFilter || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserPreferencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          _instance.regexFilter = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListUserPreferencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserPreferencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.regexFilter) {
      _writer.writeString(2, _instance.regexFilter);
    }
  }

  private _userName: string;
  private _regexFilter: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserPreferencesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserPreferencesRequest.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.regexFilter = _value.regexFilter;
    ListUserPreferencesRequest.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get regexFilter(): string {
    return this._regexFilter;
  }
  set regexFilter(value: string) {
    this._regexFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUserPreferencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserPreferencesRequest.AsObject {
    return {
      userName: this.userName,
      regexFilter: this.regexFilter
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
  ): ListUserPreferencesRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      regexFilter: this.regexFilter
    };
  }
}
export module ListUserPreferencesRequest {
  /**
   * Standard JavaScript object representation for ListUserPreferencesRequest
   */
  export interface AsObject {
    userName: string;
    regexFilter: string;
  }

  /**
   * Protobuf JSON representation for ListUserPreferencesRequest
   */
  export interface AsProtobufJSON {
    userName: string;
    regexFilter: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUserPreferencesResponse
 */
export class ListUserPreferencesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListUserPreferencesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserPreferencesResponse();
    ListUserPreferencesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserPreferencesResponse) {
    _instance.userName = _instance.userName || '';
    _instance.keyValuePairs = _instance.keyValuePairs || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserPreferencesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu007.KeyValuePair();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu007.KeyValuePair.deserializeBinaryFromReader
          );
          (_instance.keyValuePairs = _instance.keyValuePairs || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListUserPreferencesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserPreferencesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.keyValuePairs && _instance.keyValuePairs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.keyValuePairs as any,
        ondewoNlu007.KeyValuePair.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _userName: string;
  private _keyValuePairs?: ondewoNlu007.KeyValuePair[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserPreferencesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserPreferencesResponse.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.keyValuePairs = (_value.keyValuePairs || []).map(
      m => new ondewoNlu007.KeyValuePair(m)
    );
    this.errorMessage = _value.errorMessage;
    ListUserPreferencesResponse.refineValues(this);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }
  get keyValuePairs(): ondewoNlu007.KeyValuePair[] | undefined {
    return this._keyValuePairs;
  }
  set keyValuePairs(value: ondewoNlu007.KeyValuePair[] | undefined) {
    this._keyValuePairs = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUserPreferencesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserPreferencesResponse.AsObject {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m => m.toObject()),
      errorMessage: this.errorMessage
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
  ): ListUserPreferencesResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      keyValuePairs: (this.keyValuePairs || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module ListUserPreferencesResponse {
  /**
   * Standard JavaScript object representation for ListUserPreferencesResponse
   */
  export interface AsObject {
    userName: string;
    keyValuePairs?: ondewoNlu007.KeyValuePair.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for ListUserPreferencesResponse
   */
  export interface AsProtobufJSON {
    userName: string;
    keyValuePairs: ondewoNlu007.KeyValuePair.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}
