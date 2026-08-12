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
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
export enum DefaultProjectRole {
  PROJECT_UNSPECIFIED = 0,
  PROJECT_USER = 1,
  PROJECT_EXECUTOR = 2,
  PROJECT_DEVELOPER = 3,
  PROJECT_ADMIN = 4,
  PROJECT_INACTIVE = 5
}
export enum ProjectRoleView {
  PROJECT_ROLE_VIEW_UNSPECIFIED = 0,
  PROJECT_ROLE_VIEW_SHALLOW = 1,
  PROJECT_ROLE_VIEW_FULL = 2
}
/**
 * Message implementation for ondewo.nlu.ProjectRole
 */
export class ProjectRole implements GrpcMessage {
  static id = 'ondewo.nlu.ProjectRole';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProjectRole();
    ProjectRole.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProjectRole) {
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
    _instance: ProjectRole,
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

    ProjectRole.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProjectRole,
    _writer: BinaryWriter
  ) {
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
   * @param _value initial values object or instance of ProjectRole to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProjectRole.AsObject>) {
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
    ProjectRole.refineValues(this);
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
    ProjectRole.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProjectRole.AsObject {
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
  ): ProjectRole.AsProtobufJSON {
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
export module ProjectRole {
  /**
   * Standard JavaScript object representation for ProjectRole
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
   * Protobuf JSON representation for ProjectRole
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
 * Message implementation for ondewo.nlu.CreateProjectRoleRequest
 */
export class CreateProjectRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateProjectRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateProjectRoleRequest();
    CreateProjectRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateProjectRoleRequest) {
    _instance.parent = _instance.parent || '';
    _instance.role = _instance.role || undefined;
    _instance.projectRoleView = _instance.projectRoleView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateProjectRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.role = new ProjectRole();
          _reader.readMessage(
            _instance.role,
            ProjectRole.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.projectRoleView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateProjectRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateProjectRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.role) {
      _writer.writeMessage(
        2,
        _instance.role as any,
        ProjectRole.serializeBinaryToWriter
      );
    }
    if (_instance.projectRoleView) {
      _writer.writeEnum(3, _instance.projectRoleView);
    }
  }

  private _parent: string;
  private _role?: ProjectRole;
  private _projectRoleView: ProjectRoleView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProjectRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProjectRoleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.role = _value.role ? new ProjectRole(_value.role) : undefined;
    this.projectRoleView = _value.projectRoleView;
    CreateProjectRoleRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get role(): ProjectRole | undefined {
    return this._role;
  }
  set role(value: ProjectRole | undefined) {
    this._role = value;
  }
  get projectRoleView(): ProjectRoleView {
    return this._projectRoleView;
  }
  set projectRoleView(value: ProjectRoleView) {
    this._projectRoleView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateProjectRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateProjectRoleRequest.AsObject {
    return {
      parent: this.parent,
      role: this.role ? this.role.toObject() : undefined,
      projectRoleView: this.projectRoleView
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
  ): CreateProjectRoleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      role: this.role ? this.role.toProtobufJSON(options) : null,
      projectRoleView:
        ProjectRoleView[
          this.projectRoleView === null || this.projectRoleView === undefined
            ? 0
            : this.projectRoleView
        ]
    };
  }
}
export module CreateProjectRoleRequest {
  /**
   * Standard JavaScript object representation for CreateProjectRoleRequest
   */
  export interface AsObject {
    parent: string;
    role?: ProjectRole.AsObject;
    projectRoleView: ProjectRoleView;
  }

  /**
   * Protobuf JSON representation for CreateProjectRoleRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    role: ProjectRole.AsProtobufJSON | null;
    projectRoleView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateProjectRoleRequest
 */
export class UpdateProjectRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateProjectRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateProjectRoleRequest();
    UpdateProjectRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateProjectRoleRequest) {
    _instance.parent = _instance.parent || '';
    _instance.role = _instance.role || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.projectRoleView = _instance.projectRoleView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateProjectRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.role = new ProjectRole();
          _reader.readMessage(
            _instance.role,
            ProjectRole.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.projectRoleView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateProjectRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateProjectRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.role) {
      _writer.writeMessage(
        2,
        _instance.role as any,
        ProjectRole.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        3,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.projectRoleView) {
      _writer.writeEnum(4, _instance.projectRoleView);
    }
  }

  private _parent: string;
  private _role?: ProjectRole;
  private _updateMask?: googleProtobuf004.FieldMask;
  private _projectRoleView: ProjectRoleView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateProjectRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateProjectRoleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.role = _value.role ? new ProjectRole(_value.role) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    this.projectRoleView = _value.projectRoleView;
    UpdateProjectRoleRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get role(): ProjectRole | undefined {
    return this._role;
  }
  set role(value: ProjectRole | undefined) {
    this._role = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }
  get projectRoleView(): ProjectRoleView {
    return this._projectRoleView;
  }
  set projectRoleView(value: ProjectRoleView) {
    this._projectRoleView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateProjectRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateProjectRoleRequest.AsObject {
    return {
      parent: this.parent,
      role: this.role ? this.role.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      projectRoleView: this.projectRoleView
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
  ): UpdateProjectRoleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      role: this.role ? this.role.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      projectRoleView:
        ProjectRoleView[
          this.projectRoleView === null || this.projectRoleView === undefined
            ? 0
            : this.projectRoleView
        ]
    };
  }
}
export module UpdateProjectRoleRequest {
  /**
   * Standard JavaScript object representation for UpdateProjectRoleRequest
   */
  export interface AsObject {
    parent: string;
    role?: ProjectRole.AsObject;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
    projectRoleView: ProjectRoleView;
  }

  /**
   * Protobuf JSON representation for UpdateProjectRoleRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    role: ProjectRole.AsProtobufJSON | null;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
    projectRoleView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetProjectRoleRequest
 */
export class GetProjectRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetProjectRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProjectRoleRequest();
    GetProjectRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProjectRoleRequest) {
    _instance.parent = _instance.parent || '';

    _instance.projectRoleView = _instance.projectRoleView || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProjectRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.roleId = _reader.readUint32();
          break;
        case 3:
          _instance.roleName = _reader.readString();
          break;
        case 4:
          _instance.projectRoleView = _reader.readEnum();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetProjectRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProjectRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.roleId || _instance.roleId === 0) {
      _writer.writeUint32(2, _instance.roleId);
    }
    if (_instance.roleName || _instance.roleName === '') {
      _writer.writeString(3, _instance.roleName);
    }
    if (_instance.projectRoleView) {
      _writer.writeEnum(4, _instance.projectRoleView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _roleId: number;
  private _roleName: string;
  private _projectRoleView: ProjectRoleView;
  private _fieldMask?: googleProtobuf004.FieldMask;

  private _projectRoleIdentifier: GetProjectRoleRequest.ProjectRoleIdentifierCase =
    GetProjectRoleRequest.ProjectRoleIdentifierCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProjectRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProjectRoleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.roleId = _value.roleId;
    this.roleName = _value.roleName;
    this.projectRoleView = _value.projectRoleView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    GetProjectRoleRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get roleId(): number {
    return this._roleId;
  }
  set roleId(value: number) {
    if (value !== undefined && value !== null) {
      this._roleName = undefined;
      this._projectRoleIdentifier =
        GetProjectRoleRequest.ProjectRoleIdentifierCase.roleId;
    }
    this._roleId = value;
  }
  get roleName(): string {
    return this._roleName;
  }
  set roleName(value: string) {
    if (value !== undefined && value !== null) {
      this._roleId = undefined;
      this._projectRoleIdentifier =
        GetProjectRoleRequest.ProjectRoleIdentifierCase.roleName;
    }
    this._roleName = value;
  }
  get projectRoleView(): ProjectRoleView {
    return this._projectRoleView;
  }
  set projectRoleView(value: ProjectRoleView) {
    this._projectRoleView = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get projectRoleIdentifier() {
    return this._projectRoleIdentifier;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProjectRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProjectRoleRequest.AsObject {
    return {
      parent: this.parent,
      roleId: this.roleId,
      roleName: this.roleName,
      projectRoleView: this.projectRoleView,
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
  ): GetProjectRoleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      roleId:
        this.roleId === null || this.roleId === undefined ? null : this.roleId,
      roleName:
        this.roleName === null || this.roleName === undefined
          ? null
          : this.roleName,
      projectRoleView:
        ProjectRoleView[
          this.projectRoleView === null || this.projectRoleView === undefined
            ? 0
            : this.projectRoleView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetProjectRoleRequest {
  /**
   * Standard JavaScript object representation for GetProjectRoleRequest
   */
  export interface AsObject {
    parent: string;
    roleId: number;
    roleName: string;
    projectRoleView: ProjectRoleView;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetProjectRoleRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    roleId: number | null;
    roleName: string | null;
    projectRoleView: string;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
  export enum ProjectRoleIdentifierCase {
    none = 0,
    roleId = 1,
    roleName = 2
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteProjectRoleRequest
 */
export class DeleteProjectRoleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteProjectRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteProjectRoleRequest();
    DeleteProjectRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteProjectRoleRequest) {
    _instance.parent = _instance.parent || '';
    _instance.roleId = _instance.roleId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteProjectRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.roleId = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteProjectRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteProjectRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.roleId) {
      _writer.writeUint32(2, _instance.roleId);
    }
  }

  private _parent: string;
  private _roleId: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteProjectRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteProjectRoleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.roleId = _value.roleId;
    DeleteProjectRoleRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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
    DeleteProjectRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteProjectRoleRequest.AsObject {
    return {
      parent: this.parent,
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
  ): DeleteProjectRoleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      roleId: this.roleId
    };
  }
}
export module DeleteProjectRoleRequest {
  /**
   * Standard JavaScript object representation for DeleteProjectRoleRequest
   */
  export interface AsObject {
    parent: string;
    roleId: number;
  }

  /**
   * Protobuf JSON representation for DeleteProjectRoleRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    roleId: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ListProjectRolesRequest
 */
export class ListProjectRolesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListProjectRolesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProjectRolesRequest();
    ListProjectRolesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProjectRolesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.projectRoleView = _instance.projectRoleView || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProjectRolesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.projectRoleView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListProjectRolesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProjectRolesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.projectRoleView) {
      _writer.writeEnum(3, _instance.projectRoleView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pageToken: string;
  private _projectRoleView: ProjectRoleView;
  private _fieldMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProjectRolesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProjectRolesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageToken = _value.pageToken;
    this.projectRoleView = _value.projectRoleView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    ListProjectRolesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get projectRoleView(): ProjectRoleView {
    return this._projectRoleView;
  }
  set projectRoleView(value: ProjectRoleView) {
    this._projectRoleView = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListProjectRolesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProjectRolesRequest.AsObject {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      projectRoleView: this.projectRoleView,
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
  ): ListProjectRolesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      projectRoleView:
        ProjectRoleView[
          this.projectRoleView === null || this.projectRoleView === undefined
            ? 0
            : this.projectRoleView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module ListProjectRolesRequest {
  /**
   * Standard JavaScript object representation for ListProjectRolesRequest
   */
  export interface AsObject {
    parent: string;
    pageToken: string;
    projectRoleView: ProjectRoleView;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ListProjectRolesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pageToken: string;
    projectRoleView: string;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListProjectRolesResponse
 */
export class ListProjectRolesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListProjectRolesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProjectRolesResponse();
    ListProjectRolesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProjectRolesResponse) {
    _instance.projectRoles = _instance.projectRoles || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProjectRolesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ProjectRole();
          _reader.readMessage(
            messageInitializer1,
            ProjectRole.deserializeBinaryFromReader
          );
          (_instance.projectRoles = _instance.projectRoles || []).push(
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

    ListProjectRolesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProjectRolesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.projectRoles && _instance.projectRoles.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.projectRoles as any,
        ProjectRole.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _projectRoles?: ProjectRole[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProjectRolesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProjectRolesResponse.AsObject>) {
    _value = _value || {};
    this.projectRoles = (_value.projectRoles || []).map(
      m => new ProjectRole(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListProjectRolesResponse.refineValues(this);
  }
  get projectRoles(): ProjectRole[] | undefined {
    return this._projectRoles;
  }
  set projectRoles(value: ProjectRole[] | undefined) {
    this._projectRoles = value;
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
    ListProjectRolesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProjectRolesResponse.AsObject {
    return {
      projectRoles: (this.projectRoles || []).map(m => m.toObject()),
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
  ): ListProjectRolesResponse.AsProtobufJSON {
    return {
      projectRoles: (this.projectRoles || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListProjectRolesResponse {
  /**
   * Standard JavaScript object representation for ListProjectRolesResponse
   */
  export interface AsObject {
    projectRoles?: ProjectRole.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListProjectRolesResponse
   */
  export interface AsProtobufJSON {
    projectRoles: ProjectRole.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}
