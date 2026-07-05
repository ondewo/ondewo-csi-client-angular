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
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleApi004 from '../../google/api/annotations.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf008 from '@ngx-grpc/well-known-types';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/project-role.pb';
import * as googleProtobuf011 from '@ngx-grpc/well-known-types';
import * as googleRpc012 from '../../google/rpc/status.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/operation-metadata.pb';
import * as googleType014 from '../../google/type/latlng.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu016 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu017 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu018 from '../../ondewo/nlu/session.pb';
export enum AgentView {
  AGENT_VIEW_UNSPECIFIED = 0,
  AGENT_VIEW_FULL = 1,
  AGENT_VIEW_SHALLOW = 2,
  AGENT_VIEW_MINIMUM = 3
}
export enum InitiationProtocol {
  AS_SOON_AS_POSSIBLE = 0,
  WHEN_TRAINED = 1,
  NEVER = 2
}
export enum ReportType {
  ALL = 0,
  INTENT_PER_LANGUAGE = 1,
  ENTITY_PER_LANGUAGE = 2,
  ENTITY_COLLISION = 3,
  INTENT_GENERAL = 4
}
export enum SessionsReportType {
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
export enum ReportFormat {
  CSV = 0,
  HTML = 1,
  JSON = 2
}
export enum AgentStatus {
  ACTIVE = 0,
  INACTIVE = 1
}
/**
 * Message implementation for ondewo.nlu.Agent
 */
export class Agent implements GrpcMessage {
  static id = 'ondewo.nlu.Agent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Agent();
    Agent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Agent) {
    _instance.parent = _instance.parent || '';
    _instance.displayName = _instance.displayName || '';
    _instance.defaultLanguageCode = _instance.defaultLanguageCode || '';
    _instance.supportedLanguageCodes = _instance.supportedLanguageCodes || [];
    _instance.timeZone = _instance.timeZone || '';
    _instance.nluPlatform = _instance.nluPlatform || '';
    _instance.configs = _instance.configs || undefined;
    _instance.ownerId = _instance.ownerId || '';
    _instance.status = _instance.status || 0;
    _instance.description = _instance.description || '';
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
  static deserializeBinaryFromReader(_instance: Agent, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.defaultLanguageCode = _reader.readString();
          break;
        case 4:
          (_instance.supportedLanguageCodes =
            _instance.supportedLanguageCodes || []).push(_reader.readString());
          break;
        case 5:
          _instance.timeZone = _reader.readString();
          break;
        case 6:
          _instance.nluPlatform = _reader.readString();
          break;
        case 7:
          _instance.configs = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.configs,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.ownerId = _reader.readString();
          break;
        case 9:
          _instance.status = _reader.readEnum();
          break;
        case 10:
          _instance.description = _reader.readString();
          break;
        case 11:
          _instance.createdAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.modifiedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.createdBy = _reader.readString();
          break;
        case 14:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Agent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Agent, _writer: BinaryWriter) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.defaultLanguageCode) {
      _writer.writeString(3, _instance.defaultLanguageCode);
    }
    if (
      _instance.supportedLanguageCodes &&
      _instance.supportedLanguageCodes.length
    ) {
      _writer.writeRepeatedString(4, _instance.supportedLanguageCodes);
    }
    if (_instance.timeZone) {
      _writer.writeString(5, _instance.timeZone);
    }
    if (_instance.nluPlatform) {
      _writer.writeString(6, _instance.nluPlatform);
    }
    if (_instance.configs) {
      _writer.writeMessage(
        7,
        _instance.configs as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.ownerId) {
      _writer.writeString(8, _instance.ownerId);
    }
    if (_instance.status) {
      _writer.writeEnum(9, _instance.status);
    }
    if (_instance.description) {
      _writer.writeString(10, _instance.description);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        11,
        _instance.createdAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        12,
        _instance.modifiedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(13, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(14, _instance.modifiedBy);
    }
  }

  private _parent: string;
  private _displayName: string;
  private _defaultLanguageCode: string;
  private _supportedLanguageCodes: string[];
  private _timeZone: string;
  private _nluPlatform: string;
  private _configs?: googleProtobuf009.Struct;
  private _ownerId: string;
  private _status: AgentStatus;
  private _description: string;
  private _createdAt?: googleProtobuf003.Timestamp;
  private _modifiedAt?: googleProtobuf003.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Agent to deeply clone from
   */
  constructor(_value?: RecursivePartial<Agent.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.displayName = _value.displayName;
    this.defaultLanguageCode = _value.defaultLanguageCode;
    this.supportedLanguageCodes = (_value.supportedLanguageCodes || []).slice();
    this.timeZone = _value.timeZone;
    this.nluPlatform = _value.nluPlatform;
    this.configs = _value.configs
      ? new googleProtobuf009.Struct(_value.configs)
      : undefined;
    this.ownerId = _value.ownerId;
    this.status = _value.status;
    this.description = _value.description;
    this.createdAt = _value.createdAt
      ? new googleProtobuf003.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf003.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    Agent.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get defaultLanguageCode(): string {
    return this._defaultLanguageCode;
  }
  set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  get supportedLanguageCodes(): string[] {
    return this._supportedLanguageCodes;
  }
  set supportedLanguageCodes(value: string[]) {
    this._supportedLanguageCodes = value;
  }
  get timeZone(): string {
    return this._timeZone;
  }
  set timeZone(value: string) {
    this._timeZone = value;
  }
  get nluPlatform(): string {
    return this._nluPlatform;
  }
  set nluPlatform(value: string) {
    this._nluPlatform = value;
  }
  get configs(): googleProtobuf009.Struct | undefined {
    return this._configs;
  }
  set configs(value: googleProtobuf009.Struct | undefined) {
    this._configs = value;
  }
  get ownerId(): string {
    return this._ownerId;
  }
  set ownerId(value: string) {
    this._ownerId = value;
  }
  get status(): AgentStatus {
    return this._status;
  }
  set status(value: AgentStatus) {
    this._status = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get createdAt(): googleProtobuf003.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf003.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf003.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
    Agent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Agent.AsObject {
    return {
      parent: this.parent,
      displayName: this.displayName,
      defaultLanguageCode: this.defaultLanguageCode,
      supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
      timeZone: this.timeZone,
      nluPlatform: this.nluPlatform,
      configs: this.configs ? this.configs.toObject() : undefined,
      ownerId: this.ownerId,
      status: this.status,
      description: this.description,
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
  ): Agent.AsProtobufJSON {
    return {
      parent: this.parent,
      displayName: this.displayName,
      defaultLanguageCode: this.defaultLanguageCode,
      supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
      timeZone: this.timeZone,
      nluPlatform: this.nluPlatform,
      configs: this.configs ? this.configs.toProtobufJSON(options) : null,
      ownerId: this.ownerId,
      status:
        AgentStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      description: this.description,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module Agent {
  /**
   * Standard JavaScript object representation for Agent
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class AgentWithOwner implements GrpcMessage {
  static id = 'ondewo.nlu.AgentWithOwner';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AgentWithOwner();
    AgentWithOwner.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AgentWithOwner) {
    _instance.agent = _instance.agent || undefined;
    _instance.owner = _instance.owner || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AgentWithOwner,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agent = new Agent();
          _reader.readMessage(
            _instance.agent,
            Agent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.owner = new ondewoNlu017.User();
          _reader.readMessage(
            _instance.owner,
            ondewoNlu017.User.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AgentWithOwner.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AgentWithOwner,
    _writer: BinaryWriter
  ) {
    if (_instance.agent) {
      _writer.writeMessage(
        1,
        _instance.agent as any,
        Agent.serializeBinaryToWriter
      );
    }
    if (_instance.owner) {
      _writer.writeMessage(
        2,
        _instance.owner as any,
        ondewoNlu017.User.serializeBinaryToWriter
      );
    }
  }

  private _agent?: Agent;
  private _owner?: ondewoNlu017.User;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AgentWithOwner to deeply clone from
   */
  constructor(_value?: RecursivePartial<AgentWithOwner.AsObject>) {
    _value = _value || {};
    this.agent = _value.agent ? new Agent(_value.agent) : undefined;
    this.owner = _value.owner ? new ondewoNlu017.User(_value.owner) : undefined;
    AgentWithOwner.refineValues(this);
  }
  get agent(): Agent | undefined {
    return this._agent;
  }
  set agent(value: Agent | undefined) {
    this._agent = value;
  }
  get owner(): ondewoNlu017.User | undefined {
    return this._owner;
  }
  set owner(value: ondewoNlu017.User | undefined) {
    this._owner = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AgentWithOwner.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AgentWithOwner.AsObject {
    return {
      agent: this.agent ? this.agent.toObject() : undefined,
      owner: this.owner ? this.owner.toObject() : undefined
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
  ): AgentWithOwner.AsProtobufJSON {
    return {
      agent: this.agent ? this.agent.toProtobufJSON(options) : null,
      owner: this.owner ? this.owner.toProtobufJSON(options) : null
    };
  }
}
export module AgentWithOwner {
  /**
   * Standard JavaScript object representation for AgentWithOwner
   */
  export interface AsObject {
    agent?: Agent.AsObject;
    owner?: ondewoNlu017.User.AsObject;
  }

  /**
   * Protobuf JSON representation for AgentWithOwner
   */
  export interface AsProtobufJSON {
    agent: Agent.AsProtobufJSON | null;
    owner: ondewoNlu017.User.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.AgentOfUserWithOwner
 */
export class AgentOfUserWithOwner implements GrpcMessage {
  static id = 'ondewo.nlu.AgentOfUserWithOwner';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AgentOfUserWithOwner();
    AgentOfUserWithOwner.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AgentOfUserWithOwner) {
    _instance.agentWithOwner = _instance.agentWithOwner || undefined;
    _instance.projectRole = _instance.projectRole || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AgentOfUserWithOwner,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agentWithOwner = new AgentWithOwner();
          _reader.readMessage(
            _instance.agentWithOwner,
            AgentWithOwner.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.projectRole = new ondewoNlu010.ProjectRole();
          _reader.readMessage(
            _instance.projectRole,
            ondewoNlu010.ProjectRole.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AgentOfUserWithOwner.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AgentOfUserWithOwner,
    _writer: BinaryWriter
  ) {
    if (_instance.agentWithOwner) {
      _writer.writeMessage(
        1,
        _instance.agentWithOwner as any,
        AgentWithOwner.serializeBinaryToWriter
      );
    }
    if (_instance.projectRole) {
      _writer.writeMessage(
        2,
        _instance.projectRole as any,
        ondewoNlu010.ProjectRole.serializeBinaryToWriter
      );
    }
  }

  private _agentWithOwner?: AgentWithOwner;
  private _projectRole?: ondewoNlu010.ProjectRole;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AgentOfUserWithOwner to deeply clone from
   */
  constructor(_value?: RecursivePartial<AgentOfUserWithOwner.AsObject>) {
    _value = _value || {};
    this.agentWithOwner = _value.agentWithOwner
      ? new AgentWithOwner(_value.agentWithOwner)
      : undefined;
    this.projectRole = _value.projectRole
      ? new ondewoNlu010.ProjectRole(_value.projectRole)
      : undefined;
    AgentOfUserWithOwner.refineValues(this);
  }
  get agentWithOwner(): AgentWithOwner | undefined {
    return this._agentWithOwner;
  }
  set agentWithOwner(value: AgentWithOwner | undefined) {
    this._agentWithOwner = value;
  }
  get projectRole(): ondewoNlu010.ProjectRole | undefined {
    return this._projectRole;
  }
  set projectRole(value: ondewoNlu010.ProjectRole | undefined) {
    this._projectRole = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AgentOfUserWithOwner.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AgentOfUserWithOwner.AsObject {
    return {
      agentWithOwner: this.agentWithOwner
        ? this.agentWithOwner.toObject()
        : undefined,
      projectRole: this.projectRole ? this.projectRole.toObject() : undefined
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
  ): AgentOfUserWithOwner.AsProtobufJSON {
    return {
      agentWithOwner: this.agentWithOwner
        ? this.agentWithOwner.toProtobufJSON(options)
        : null,
      projectRole: this.projectRole
        ? this.projectRole.toProtobufJSON(options)
        : null
    };
  }
}
export module AgentOfUserWithOwner {
  /**
   * Standard JavaScript object representation for AgentOfUserWithOwner
   */
  export interface AsObject {
    agentWithOwner?: AgentWithOwner.AsObject;
    projectRole?: ondewoNlu010.ProjectRole.AsObject;
  }

  /**
   * Protobuf JSON representation for AgentOfUserWithOwner
   */
  export interface AsProtobufJSON {
    agentWithOwner: AgentWithOwner.AsProtobufJSON | null;
    projectRole: ondewoNlu010.ProjectRole.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateAgentRequest
 */
export class CreateAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateAgentRequest();
    CreateAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateAgentRequest) {
    _instance.agent = _instance.agent || undefined;
    _instance.agentView = _instance.agentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agent = new Agent();
          _reader.readMessage(
            _instance.agent,
            Agent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.agentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.agent) {
      _writer.writeMessage(
        1,
        _instance.agent as any,
        Agent.serializeBinaryToWriter
      );
    }
    if (_instance.agentView) {
      _writer.writeEnum(2, _instance.agentView);
    }
  }

  private _agent?: Agent;
  private _agentView: AgentView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateAgentRequest.AsObject>) {
    _value = _value || {};
    this.agent = _value.agent ? new Agent(_value.agent) : undefined;
    this.agentView = _value.agentView;
    CreateAgentRequest.refineValues(this);
  }
  get agent(): Agent | undefined {
    return this._agent;
  }
  set agent(value: Agent | undefined) {
    this._agent = value;
  }
  get agentView(): AgentView {
    return this._agentView;
  }
  set agentView(value: AgentView) {
    this._agentView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateAgentRequest.AsObject {
    return {
      agent: this.agent ? this.agent.toObject() : undefined,
      agentView: this.agentView
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
  ): CreateAgentRequest.AsProtobufJSON {
    return {
      agent: this.agent ? this.agent.toProtobufJSON(options) : null,
      agentView:
        AgentView[
          this.agentView === null || this.agentView === undefined
            ? 0
            : this.agentView
        ]
    };
  }
}
export module CreateAgentRequest {
  /**
   * Standard JavaScript object representation for CreateAgentRequest
   */
  export interface AsObject {
    agent?: Agent.AsObject;
    agentView: AgentView;
  }

  /**
   * Protobuf JSON representation for CreateAgentRequest
   */
  export interface AsProtobufJSON {
    agent: Agent.AsProtobufJSON | null;
    agentView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateAgentRequest
 */
export class UpdateAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateAgentRequest();
    UpdateAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateAgentRequest) {
    _instance.agent = _instance.agent || undefined;
    _instance.agentView = _instance.agentView || 0;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agent = new Agent();
          _reader.readMessage(
            _instance.agent,
            Agent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.agentView = _reader.readEnum();
          break;
        case 3:
          _instance.updateMask = new googleProtobuf002.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf002.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.agent) {
      _writer.writeMessage(
        1,
        _instance.agent as any,
        Agent.serializeBinaryToWriter
      );
    }
    if (_instance.agentView) {
      _writer.writeEnum(2, _instance.agentView);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        3,
        _instance.updateMask as any,
        googleProtobuf002.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _agent?: Agent;
  private _agentView: AgentView;
  private _updateMask?: googleProtobuf002.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateAgentRequest.AsObject>) {
    _value = _value || {};
    this.agent = _value.agent ? new Agent(_value.agent) : undefined;
    this.agentView = _value.agentView;
    this.updateMask = _value.updateMask
      ? new googleProtobuf002.FieldMask(_value.updateMask)
      : undefined;
    UpdateAgentRequest.refineValues(this);
  }
  get agent(): Agent | undefined {
    return this._agent;
  }
  set agent(value: Agent | undefined) {
    this._agent = value;
  }
  get agentView(): AgentView {
    return this._agentView;
  }
  set agentView(value: AgentView) {
    this._agentView = value;
  }
  get updateMask(): googleProtobuf002.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf002.FieldMask | undefined) {
    this._updateMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateAgentRequest.AsObject {
    return {
      agent: this.agent ? this.agent.toObject() : undefined,
      agentView: this.agentView,
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
  ): UpdateAgentRequest.AsProtobufJSON {
    return {
      agent: this.agent ? this.agent.toProtobufJSON(options) : null,
      agentView:
        AgentView[
          this.agentView === null || this.agentView === undefined
            ? 0
            : this.agentView
        ],
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateAgentRequest {
  /**
   * Standard JavaScript object representation for UpdateAgentRequest
   */
  export interface AsObject {
    agent?: Agent.AsObject;
    agentView: AgentView;
    updateMask?: googleProtobuf002.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateAgentRequest
   */
  export interface AsProtobufJSON {
    agent: Agent.AsProtobufJSON | null;
    agentView: string;
    updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteAgentRequest
 */
export class DeleteAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAgentRequest();
    DeleteAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAgentRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    DeleteAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAgentRequest.AsObject {
    return {
      parent: this.parent
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
  ): DeleteAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module DeleteAgentRequest {
  /**
   * Standard JavaScript object representation for DeleteAgentRequest
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for DeleteAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAgentRequest
 */
export class GetAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAgentRequest();
    GetAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentView = _instance.agentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentView) {
      _writer.writeEnum(2, _instance.agentView);
    }
  }

  private _parent: string;
  private _agentView: AgentView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentView = _value.agentView;
    GetAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentView(): AgentView {
    return this._agentView;
  }
  set agentView(value: AgentView) {
    this._agentView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentView: this.agentView
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
  ): GetAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentView:
        AgentView[
          this.agentView === null || this.agentView === undefined
            ? 0
            : this.agentView
        ]
    };
  }
}
export module GetAgentRequest {
  /**
   * Standard JavaScript object representation for GetAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentView: AgentView;
  }

  /**
   * Protobuf JSON representation for GetAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAgentsRequest
 */
export class ListAgentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListAgentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAgentsRequest();
    ListAgentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAgentsRequest) {
    _instance.agentView = _instance.agentView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.sortByField = _instance.sortByField || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAgentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agentView = _reader.readEnum();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.sortByField = new AgentSorting();
          _reader.readMessage(
            _instance.sortByField,
            AgentSorting.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListAgentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAgentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.agentView) {
      _writer.writeEnum(1, _instance.agentView);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.sortByField) {
      _writer.writeMessage(
        3,
        _instance.sortByField as any,
        AgentSorting.serializeBinaryToWriter
      );
    }
  }

  private _agentView: AgentView;
  private _pageToken: string;
  private _sortByField?: AgentSorting;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAgentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAgentsRequest.AsObject>) {
    _value = _value || {};
    this.agentView = _value.agentView;
    this.pageToken = _value.pageToken;
    this.sortByField = _value.sortByField
      ? new AgentSorting(_value.sortByField)
      : undefined;
    ListAgentsRequest.refineValues(this);
  }
  get agentView(): AgentView {
    return this._agentView;
  }
  set agentView(value: AgentView) {
    this._agentView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get sortByField(): AgentSorting | undefined {
    return this._sortByField;
  }
  set sortByField(value: AgentSorting | undefined) {
    this._sortByField = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListAgentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAgentsRequest.AsObject {
    return {
      agentView: this.agentView,
      pageToken: this.pageToken,
      sortByField: this.sortByField ? this.sortByField.toObject() : undefined
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
  ): ListAgentsRequest.AsProtobufJSON {
    return {
      agentView:
        AgentView[
          this.agentView === null || this.agentView === undefined
            ? 0
            : this.agentView
        ],
      pageToken: this.pageToken,
      sortByField: this.sortByField
        ? this.sortByField.toProtobufJSON(options)
        : null
    };
  }
}
export module ListAgentsRequest {
  /**
   * Standard JavaScript object representation for ListAgentsRequest
   */
  export interface AsObject {
    agentView: AgentView;
    pageToken: string;
    sortByField?: AgentSorting.AsObject;
  }

  /**
   * Protobuf JSON representation for ListAgentsRequest
   */
  export interface AsProtobufJSON {
    agentView: string;
    pageToken: string;
    sortByField: AgentSorting.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAgentsResponse
 */
export class ListAgentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListAgentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAgentsResponse();
    ListAgentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAgentsResponse) {
    _instance.agentsWithOwners = _instance.agentsWithOwners || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAgentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AgentWithOwner();
          _reader.readMessage(
            messageInitializer1,
            AgentWithOwner.deserializeBinaryFromReader
          );
          (_instance.agentsWithOwners = _instance.agentsWithOwners || []).push(
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

    ListAgentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAgentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.agentsWithOwners && _instance.agentsWithOwners.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.agentsWithOwners as any,
        AgentWithOwner.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _agentsWithOwners?: AgentWithOwner[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAgentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAgentsResponse.AsObject>) {
    _value = _value || {};
    this.agentsWithOwners = (_value.agentsWithOwners || []).map(
      m => new AgentWithOwner(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListAgentsResponse.refineValues(this);
  }
  get agentsWithOwners(): AgentWithOwner[] | undefined {
    return this._agentsWithOwners;
  }
  set agentsWithOwners(value: AgentWithOwner[] | undefined) {
    this._agentsWithOwners = value;
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
    ListAgentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAgentsResponse.AsObject {
    return {
      agentsWithOwners: (this.agentsWithOwners || []).map(m => m.toObject()),
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
  ): ListAgentsResponse.AsProtobufJSON {
    return {
      agentsWithOwners: (this.agentsWithOwners || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListAgentsResponse {
  /**
   * Standard JavaScript object representation for ListAgentsResponse
   */
  export interface AsObject {
    agentsWithOwners?: AgentWithOwner.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListAgentsResponse
   */
  export interface AsProtobufJSON {
    agentsWithOwners: AgentWithOwner.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAgentsOfUserResponse
 */
export class ListAgentsOfUserResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListAgentsOfUserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAgentsOfUserResponse();
    ListAgentsOfUserResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAgentsOfUserResponse) {
    _instance.agentsOfUserWithOwners = _instance.agentsOfUserWithOwners || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAgentsOfUserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AgentOfUserWithOwner();
          _reader.readMessage(
            messageInitializer1,
            AgentOfUserWithOwner.deserializeBinaryFromReader
          );
          (_instance.agentsOfUserWithOwners =
            _instance.agentsOfUserWithOwners || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListAgentsOfUserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAgentsOfUserResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.agentsOfUserWithOwners &&
      _instance.agentsOfUserWithOwners.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.agentsOfUserWithOwners as any,
        AgentOfUserWithOwner.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _agentsOfUserWithOwners?: AgentOfUserWithOwner[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAgentsOfUserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAgentsOfUserResponse.AsObject>) {
    _value = _value || {};
    this.agentsOfUserWithOwners = (_value.agentsOfUserWithOwners || []).map(
      m => new AgentOfUserWithOwner(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListAgentsOfUserResponse.refineValues(this);
  }
  get agentsOfUserWithOwners(): AgentOfUserWithOwner[] | undefined {
    return this._agentsOfUserWithOwners;
  }
  set agentsOfUserWithOwners(value: AgentOfUserWithOwner[] | undefined) {
    this._agentsOfUserWithOwners = value;
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
    ListAgentsOfUserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAgentsOfUserResponse.AsObject {
    return {
      agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m =>
        m.toObject()
      ),
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
  ): ListAgentsOfUserResponse.AsProtobufJSON {
    return {
      agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListAgentsOfUserResponse {
  /**
   * Standard JavaScript object representation for ListAgentsOfUserResponse
   */
  export interface AsObject {
    agentsOfUserWithOwners?: AgentOfUserWithOwner.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListAgentsOfUserResponse
   */
  export interface AsProtobufJSON {
    agentsOfUserWithOwners: AgentOfUserWithOwner.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.TrainAgentRequest
 */
export class TrainAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.TrainAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TrainAgentRequest();
    TrainAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TrainAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.branch = _instance.branch || '';
    _instance.initiationProtocol = _instance.initiationProtocol || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TrainAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.branch = _reader.readString();
          break;
        case 3:
          _instance.initiationProtocol = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    TrainAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TrainAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.branch) {
      _writer.writeString(2, _instance.branch);
    }
    if (_instance.initiationProtocol) {
      _writer.writeEnum(3, _instance.initiationProtocol);
    }
  }

  private _parent: string;
  private _branch: string;
  private _initiationProtocol: InitiationProtocol;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TrainAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TrainAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.branch = _value.branch;
    this.initiationProtocol = _value.initiationProtocol;
    TrainAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get branch(): string {
    return this._branch;
  }
  set branch(value: string) {
    this._branch = value;
  }
  get initiationProtocol(): InitiationProtocol {
    return this._initiationProtocol;
  }
  set initiationProtocol(value: InitiationProtocol) {
    this._initiationProtocol = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TrainAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TrainAgentRequest.AsObject {
    return {
      parent: this.parent,
      branch: this.branch,
      initiationProtocol: this.initiationProtocol
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
  ): TrainAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      branch: this.branch,
      initiationProtocol:
        InitiationProtocol[
          this.initiationProtocol === null ||
          this.initiationProtocol === undefined
            ? 0
            : this.initiationProtocol
        ]
    };
  }
}
export module TrainAgentRequest {
  /**
   * Standard JavaScript object representation for TrainAgentRequest
   */
  export interface AsObject {
    parent: string;
    branch: string;
    initiationProtocol: InitiationProtocol;
  }

  /**
   * Protobuf JSON representation for TrainAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    branch: string;
    initiationProtocol: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BuildCacheRequest
 */
export class BuildCacheRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BuildCacheRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BuildCacheRequest();
    BuildCacheRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BuildCacheRequest) {
    _instance.parent = _instance.parent || '';
    _instance.branch = _instance.branch || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BuildCacheRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.branch = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    BuildCacheRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BuildCacheRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.branch) {
      _writer.writeString(2, _instance.branch);
    }
  }

  private _parent: string;
  private _branch: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BuildCacheRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BuildCacheRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.branch = _value.branch;
    BuildCacheRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get branch(): string {
    return this._branch;
  }
  set branch(value: string) {
    this._branch = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BuildCacheRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BuildCacheRequest.AsObject {
    return {
      parent: this.parent,
      branch: this.branch
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
  ): BuildCacheRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      branch: this.branch
    };
  }
}
export module BuildCacheRequest {
  /**
   * Standard JavaScript object representation for BuildCacheRequest
   */
  export interface AsObject {
    parent: string;
    branch: string;
  }

  /**
   * Protobuf JSON representation for BuildCacheRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    branch: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportAgentRequest
 */
export class ExportAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExportAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportAgentRequest();
    ExportAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentUri = _instance.agentUri || '';
    _instance.compressionLevel = _instance.compressionLevel || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentUri = _reader.readString();
          break;
        case 3:
          _instance.compressionLevel = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentUri) {
      _writer.writeString(2, _instance.agentUri);
    }
    if (_instance.compressionLevel) {
      _writer.writeInt32(3, _instance.compressionLevel);
    }
  }

  private _parent: string;
  private _agentUri: string;
  private _compressionLevel: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentUri = _value.agentUri;
    this.compressionLevel = _value.compressionLevel;
    ExportAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentUri(): string {
    return this._agentUri;
  }
  set agentUri(value: string) {
    this._agentUri = value;
  }
  get compressionLevel(): number {
    return this._compressionLevel;
  }
  set compressionLevel(value: number) {
    this._compressionLevel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentUri: this.agentUri,
      compressionLevel: this.compressionLevel
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
  ): ExportAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentUri: this.agentUri,
      compressionLevel: this.compressionLevel
    };
  }
}
export module ExportAgentRequest {
  /**
   * Standard JavaScript object representation for ExportAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentUri: string;
    compressionLevel: number;
  }

  /**
   * Protobuf JSON representation for ExportAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentUri: string;
    compressionLevel: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportAgentResponse
 */
export class ExportAgentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ExportAgentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportAgentResponse();
    ExportAgentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportAgentResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportAgentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agentUri = _reader.readString();
          break;
        case 2:
          _instance.agentContent = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportAgentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportAgentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.agentUri || _instance.agentUri === '') {
      _writer.writeString(1, _instance.agentUri);
    }
    if (_instance.agentContent && _instance.agentContent.length) {
      _writer.writeBytes(2, _instance.agentContent);
    }
  }

  private _agentUri: string;
  private _agentContent: Uint8Array;

  private _agent: ExportAgentResponse.AgentCase =
    ExportAgentResponse.AgentCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportAgentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportAgentResponse.AsObject>) {
    _value = _value || {};
    this.agentUri = _value.agentUri;
    this.agentContent = _value.agentContent;
    ExportAgentResponse.refineValues(this);
  }
  get agentUri(): string {
    return this._agentUri;
  }
  set agentUri(value: string) {
    if (value !== undefined && value !== null) {
      this._agentContent = undefined;
      this._agent = ExportAgentResponse.AgentCase.agentUri;
    }
    this._agentUri = value;
  }
  get agentContent(): Uint8Array {
    return this._agentContent;
  }
  set agentContent(value: Uint8Array) {
    if (value !== undefined && value !== null) {
      this._agentUri = undefined;
      this._agent = ExportAgentResponse.AgentCase.agentContent;
    }
    this._agentContent = value;
  }
  get agent() {
    return this._agent;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportAgentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportAgentResponse.AsObject {
    return {
      agentUri: this.agentUri,
      agentContent: this.agentContent
        ? this.agentContent.subarray(0)
        : new Uint8Array()
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
  ): ExportAgentResponse.AsProtobufJSON {
    return {
      agentUri:
        this.agentUri === null || this.agentUri === undefined
          ? null
          : this.agentUri,
      agentContent: this.agentContent
        ? uint8ArrayToBase64(this.agentContent)
        : ''
    };
  }
}
export module ExportAgentResponse {
  /**
   * Standard JavaScript object representation for ExportAgentResponse
   */
  export interface AsObject {
    agentUri: string;
    agentContent: Uint8Array;
  }

  /**
   * Protobuf JSON representation for ExportAgentResponse
   */
  export interface AsProtobufJSON {
    agentUri: string | null;
    agentContent: string;
  }
  export enum AgentCase {
    none = 0,
    agentUri = 1,
    agentContent = 2
  }
}

/**
 * Message implementation for ondewo.nlu.ExportBenchmarkAgentRequest
 */
export class ExportBenchmarkAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExportBenchmarkAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportBenchmarkAgentRequest();
    ExportBenchmarkAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportBenchmarkAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.compressionLevel = _instance.compressionLevel || 0;
    _instance.testSize = _instance.testSize || 0;
    _instance.trainSize = _instance.trainSize || 0;
    _instance.randomState = _instance.randomState || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportBenchmarkAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.compressionLevel = _reader.readInt32();
          break;
        case 3:
          _instance.testSize = _reader.readFloat();
          break;
        case 4:
          _instance.trainSize = _reader.readFloat();
          break;
        case 5:
          _instance.randomState = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportBenchmarkAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportBenchmarkAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.compressionLevel) {
      _writer.writeInt32(2, _instance.compressionLevel);
    }
    if (_instance.testSize) {
      _writer.writeFloat(3, _instance.testSize);
    }
    if (_instance.trainSize) {
      _writer.writeFloat(4, _instance.trainSize);
    }
    if (_instance.randomState) {
      _writer.writeInt32(5, _instance.randomState);
    }
  }

  private _parent: string;
  private _compressionLevel: number;
  private _testSize: number;
  private _trainSize: number;
  private _randomState: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportBenchmarkAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportBenchmarkAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.compressionLevel = _value.compressionLevel;
    this.testSize = _value.testSize;
    this.trainSize = _value.trainSize;
    this.randomState = _value.randomState;
    ExportBenchmarkAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get compressionLevel(): number {
    return this._compressionLevel;
  }
  set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  get testSize(): number {
    return this._testSize;
  }
  set testSize(value: number) {
    this._testSize = value;
  }
  get trainSize(): number {
    return this._trainSize;
  }
  set trainSize(value: number) {
    this._trainSize = value;
  }
  get randomState(): number {
    return this._randomState;
  }
  set randomState(value: number) {
    this._randomState = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportBenchmarkAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportBenchmarkAgentRequest.AsObject {
    return {
      parent: this.parent,
      compressionLevel: this.compressionLevel,
      testSize: this.testSize,
      trainSize: this.trainSize,
      randomState: this.randomState
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
  ): ExportBenchmarkAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      compressionLevel: this.compressionLevel,
      testSize: this.testSize,
      trainSize: this.trainSize,
      randomState: this.randomState
    };
  }
}
export module ExportBenchmarkAgentRequest {
  /**
   * Standard JavaScript object representation for ExportBenchmarkAgentRequest
   */
  export interface AsObject {
    parent: string;
    compressionLevel: number;
    testSize: number;
    trainSize: number;
    randomState: number;
  }

  /**
   * Protobuf JSON representation for ExportBenchmarkAgentRequest
   */
  export interface AsProtobufJSON {
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
export class ExportBenchmarkAgentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ExportBenchmarkAgentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportBenchmarkAgentResponse();
    ExportBenchmarkAgentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportBenchmarkAgentResponse) {
    _instance.agentContent = _instance.agentContent || new Uint8Array();
    _instance.trainingPhrases = _instance.trainingPhrases || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportBenchmarkAgentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.agentContent = _reader.readBytes();
          break;
        case 2:
          const msg_2 = {} as any;
          _reader.readMessage(
            msg_2,
            ExportBenchmarkAgentResponse.TrainingPhrasesEntry
              .deserializeBinaryFromReader
          );
          _instance.trainingPhrases = _instance.trainingPhrases || {};
          _instance.trainingPhrases[msg_2.key] = msg_2.value;
          break;
        default:
          _reader.skipField();
      }
    }

    ExportBenchmarkAgentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportBenchmarkAgentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.agentContent && _instance.agentContent.length) {
      _writer.writeBytes(1, _instance.agentContent);
    }
    if (!!_instance.trainingPhrases) {
      const keys_2 = Object.keys(_instance.trainingPhrases as any);

      if (keys_2.length) {
        const repeated_2 = keys_2
          .map(key => ({
            key: key,
            value: (_instance.trainingPhrases as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          2,
          repeated_2,
          ExportBenchmarkAgentResponse.TrainingPhrasesEntry
            .serializeBinaryToWriter
        );
      }
    }
  }

  private _agentContent: Uint8Array;
  private _trainingPhrases: {
    [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
  };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportBenchmarkAgentResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ExportBenchmarkAgentResponse.AsObject>
  ) {
    _value = _value || {};
    this.agentContent = _value.agentContent;
    (this.trainingPhrases = _value!.trainingPhrases
      ? Object.keys(_value!.trainingPhrases).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.trainingPhrases![k]
              ? new ondewoNlu015.ListTrainingPhrasesResponse(
                  _value!.trainingPhrases![k]
                )
              : undefined
          }),
          {}
        )
      : {}),
      ExportBenchmarkAgentResponse.refineValues(this);
  }
  get agentContent(): Uint8Array {
    return this._agentContent;
  }
  set agentContent(value: Uint8Array) {
    this._agentContent = value;
  }
  get trainingPhrases(): {
    [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
  } {
    return this._trainingPhrases;
  }
  set trainingPhrases(value: {
    [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
  }) {
    this._trainingPhrases = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportBenchmarkAgentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportBenchmarkAgentResponse.AsObject {
    return {
      agentContent: this.agentContent
        ? this.agentContent.subarray(0)
        : new Uint8Array(),
      trainingPhrases: this.trainingPhrases
        ? Object.keys(this.trainingPhrases).reduce(
            (r, k) => ({
              ...r,
              [k]: this.trainingPhrases![k]
                ? this.trainingPhrases![k].toObject()
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
  ): ExportBenchmarkAgentResponse.AsProtobufJSON {
    return {
      agentContent: this.agentContent
        ? uint8ArrayToBase64(this.agentContent)
        : '',
      trainingPhrases: this.trainingPhrases
        ? Object.keys(this.trainingPhrases).reduce(
            (r, k) => ({
              ...r,
              [k]: this.trainingPhrases![k]
                ? this.trainingPhrases![k].toJSON()
                : null
            }),
            {}
          )
        : {}
    };
  }
}
export module ExportBenchmarkAgentResponse {
  /**
   * Standard JavaScript object representation for ExportBenchmarkAgentResponse
   */
  export interface AsObject {
    agentContent: Uint8Array;
    trainingPhrases: {
      [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
    };
  }

  /**
   * Protobuf JSON representation for ExportBenchmarkAgentResponse
   */
  export interface AsProtobufJSON {
    agentContent: string;
    trainingPhrases: {
      [prop: string]: ondewoNlu015.ListTrainingPhrasesResponse;
    };
  }

  /**
   * Message implementation for ondewo.nlu.ExportBenchmarkAgentResponse.TrainingPhrasesEntry
   */
  export class TrainingPhrasesEntry implements GrpcMessage {
    static id = 'ondewo.nlu.ExportBenchmarkAgentResponse.TrainingPhrasesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new TrainingPhrasesEntry();
      TrainingPhrasesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainingPhrasesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: TrainingPhrasesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new ondewoNlu015.ListTrainingPhrasesResponse();
            _reader.readMessage(
              _instance.value,
              ondewoNlu015.ListTrainingPhrasesResponse
                .deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      TrainingPhrasesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: TrainingPhrasesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          ondewoNlu015.ListTrainingPhrasesResponse.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: ondewoNlu015.ListTrainingPhrasesResponse;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhrasesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainingPhrasesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value
        ? new ondewoNlu015.ListTrainingPhrasesResponse(_value.value)
        : undefined;
      TrainingPhrasesEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): ondewoNlu015.ListTrainingPhrasesResponse | undefined {
      return this._value;
    }
    set value(value: ondewoNlu015.ListTrainingPhrasesResponse | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      TrainingPhrasesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainingPhrasesEntry.AsObject {
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
    ): TrainingPhrasesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module TrainingPhrasesEntry {
    /**
     * Standard JavaScript object representation for TrainingPhrasesEntry
     */
    export interface AsObject {
      key: string;
      value?: ondewoNlu015.ListTrainingPhrasesResponse.AsObject;
    }

    /**
     * Protobuf JSON representation for TrainingPhrasesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: ondewoNlu015.ListTrainingPhrasesResponse.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchRequest
 */
export class OptimizeRankingMatchRequest implements GrpcMessage {
  static id = 'ondewo.nlu.OptimizeRankingMatchRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OptimizeRankingMatchRequest();
    OptimizeRankingMatchRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OptimizeRankingMatchRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCodes = _instance.languageCodes || [];
    _instance.optimizationConfigs = _instance.optimizationConfigs || [];
    _instance.inPlace = _instance.inPlace || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OptimizeRankingMatchRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.languageCodes = _instance.languageCodes || []).push(
            _reader.readString()
          );
          break;
        case 3:
          const messageInitializer3 = new RankingMatchOptimizationConfig();
          _reader.readMessage(
            messageInitializer3,
            RankingMatchOptimizationConfig.deserializeBinaryFromReader
          );
          (_instance.optimizationConfigs =
            _instance.optimizationConfigs || []).push(messageInitializer3);
          break;
        case 4:
          _instance.inPlace = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    OptimizeRankingMatchRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OptimizeRankingMatchRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(2, _instance.languageCodes);
    }
    if (_instance.optimizationConfigs && _instance.optimizationConfigs.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.optimizationConfigs as any,
        RankingMatchOptimizationConfig.serializeBinaryToWriter
      );
    }
    if (_instance.inPlace) {
      _writer.writeBool(4, _instance.inPlace);
    }
  }

  private _parent: string;
  private _languageCodes: string[];
  private _optimizationConfigs?: RankingMatchOptimizationConfig[];
  private _inPlace: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OptimizeRankingMatchRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<OptimizeRankingMatchRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCodes = (_value.languageCodes || []).slice();
    this.optimizationConfigs = (_value.optimizationConfigs || []).map(
      m => new RankingMatchOptimizationConfig(m)
    );
    this.inPlace = _value.inPlace;
    OptimizeRankingMatchRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }
  get optimizationConfigs(): RankingMatchOptimizationConfig[] | undefined {
    return this._optimizationConfigs;
  }
  set optimizationConfigs(value: RankingMatchOptimizationConfig[] | undefined) {
    this._optimizationConfigs = value;
  }
  get inPlace(): boolean {
    return this._inPlace;
  }
  set inPlace(value: boolean) {
    this._inPlace = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OptimizeRankingMatchRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OptimizeRankingMatchRequest.AsObject {
    return {
      parent: this.parent,
      languageCodes: (this.languageCodes || []).slice(),
      optimizationConfigs: (this.optimizationConfigs || []).map(m =>
        m.toObject()
      ),
      inPlace: this.inPlace
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
  ): OptimizeRankingMatchRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCodes: (this.languageCodes || []).slice(),
      optimizationConfigs: (this.optimizationConfigs || []).map(m =>
        m.toProtobufJSON(options)
      ),
      inPlace: this.inPlace
    };
  }
}
export module OptimizeRankingMatchRequest {
  /**
   * Standard JavaScript object representation for OptimizeRankingMatchRequest
   */
  export interface AsObject {
    parent: string;
    languageCodes: string[];
    optimizationConfigs?: RankingMatchOptimizationConfig.AsObject[];
    inPlace: boolean;
  }

  /**
   * Protobuf JSON representation for OptimizeRankingMatchRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCodes: string[];
    optimizationConfigs: RankingMatchOptimizationConfig.AsProtobufJSON[] | null;
    inPlace: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RankingMatchOptimizationConfig
 */
export class RankingMatchOptimizationConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RankingMatchOptimizationConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RankingMatchOptimizationConfig();
    RankingMatchOptimizationConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RankingMatchOptimizationConfig) {
    _instance.languageCode = _instance.languageCode || '';
    _instance.nSplits = _instance.nSplits || 0;
    _instance.randomSeed = _instance.randomSeed || 0;
    _instance.initialThresholds = _instance.initialThresholds || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RankingMatchOptimizationConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageCode = _reader.readString();
          break;
        case 2:
          _instance.nSplits = _reader.readInt32();
          break;
        case 3:
          _instance.randomSeed = _reader.readInt32();
          break;
        case 4:
          _instance.initialThresholds = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.initialThresholds,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RankingMatchOptimizationConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RankingMatchOptimizationConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCode) {
      _writer.writeString(1, _instance.languageCode);
    }
    if (_instance.nSplits) {
      _writer.writeInt32(2, _instance.nSplits);
    }
    if (_instance.randomSeed) {
      _writer.writeInt32(3, _instance.randomSeed);
    }
    if (_instance.initialThresholds) {
      _writer.writeMessage(
        4,
        _instance.initialThresholds as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
  }

  private _languageCode: string;
  private _nSplits: number;
  private _randomSeed: number;
  private _initialThresholds?: googleProtobuf009.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RankingMatchOptimizationConfig to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RankingMatchOptimizationConfig.AsObject>
  ) {
    _value = _value || {};
    this.languageCode = _value.languageCode;
    this.nSplits = _value.nSplits;
    this.randomSeed = _value.randomSeed;
    this.initialThresholds = _value.initialThresholds
      ? new googleProtobuf009.Struct(_value.initialThresholds)
      : undefined;
    RankingMatchOptimizationConfig.refineValues(this);
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get nSplits(): number {
    return this._nSplits;
  }
  set nSplits(value: number) {
    this._nSplits = value;
  }
  get randomSeed(): number {
    return this._randomSeed;
  }
  set randomSeed(value: number) {
    this._randomSeed = value;
  }
  get initialThresholds(): googleProtobuf009.Struct | undefined {
    return this._initialThresholds;
  }
  set initialThresholds(value: googleProtobuf009.Struct | undefined) {
    this._initialThresholds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RankingMatchOptimizationConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RankingMatchOptimizationConfig.AsObject {
    return {
      languageCode: this.languageCode,
      nSplits: this.nSplits,
      randomSeed: this.randomSeed,
      initialThresholds: this.initialThresholds
        ? this.initialThresholds.toObject()
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
  ): RankingMatchOptimizationConfig.AsProtobufJSON {
    return {
      languageCode: this.languageCode,
      nSplits: this.nSplits,
      randomSeed: this.randomSeed,
      initialThresholds: this.initialThresholds
        ? this.initialThresholds.toProtobufJSON(options)
        : null
    };
  }
}
export module RankingMatchOptimizationConfig {
  /**
   * Standard JavaScript object representation for RankingMatchOptimizationConfig
   */
  export interface AsObject {
    languageCode: string;
    nSplits: number;
    randomSeed: number;
    initialThresholds?: googleProtobuf009.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RankingMatchOptimizationConfig
   */
  export interface AsProtobufJSON {
    languageCode: string;
    nSplits: number;
    randomSeed: number;
    initialThresholds: googleProtobuf009.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchResponse
 */
export class OptimizeRankingMatchResponse implements GrpcMessage {
  static id = 'ondewo.nlu.OptimizeRankingMatchResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OptimizeRankingMatchResponse();
    OptimizeRankingMatchResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OptimizeRankingMatchResponse) {
    _instance.optimizationInfo = _instance.optimizationInfo || undefined;
    _instance.optimizedOndewoConfig =
      _instance.optimizedOndewoConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OptimizeRankingMatchResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.optimizationInfo = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.optimizationInfo,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.optimizedOndewoConfig = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.optimizedOndewoConfig,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OptimizeRankingMatchResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OptimizeRankingMatchResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.optimizationInfo) {
      _writer.writeMessage(
        1,
        _instance.optimizationInfo as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.optimizedOndewoConfig) {
      _writer.writeMessage(
        3,
        _instance.optimizedOndewoConfig as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
  }

  private _optimizationInfo?: googleProtobuf009.Struct;
  private _optimizedOndewoConfig?: googleProtobuf009.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OptimizeRankingMatchResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<OptimizeRankingMatchResponse.AsObject>
  ) {
    _value = _value || {};
    this.optimizationInfo = _value.optimizationInfo
      ? new googleProtobuf009.Struct(_value.optimizationInfo)
      : undefined;
    this.optimizedOndewoConfig = _value.optimizedOndewoConfig
      ? new googleProtobuf009.Struct(_value.optimizedOndewoConfig)
      : undefined;
    OptimizeRankingMatchResponse.refineValues(this);
  }
  get optimizationInfo(): googleProtobuf009.Struct | undefined {
    return this._optimizationInfo;
  }
  set optimizationInfo(value: googleProtobuf009.Struct | undefined) {
    this._optimizationInfo = value;
  }
  get optimizedOndewoConfig(): googleProtobuf009.Struct | undefined {
    return this._optimizedOndewoConfig;
  }
  set optimizedOndewoConfig(value: googleProtobuf009.Struct | undefined) {
    this._optimizedOndewoConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OptimizeRankingMatchResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OptimizeRankingMatchResponse.AsObject {
    return {
      optimizationInfo: this.optimizationInfo
        ? this.optimizationInfo.toObject()
        : undefined,
      optimizedOndewoConfig: this.optimizedOndewoConfig
        ? this.optimizedOndewoConfig.toObject()
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
  ): OptimizeRankingMatchResponse.AsProtobufJSON {
    return {
      optimizationInfo: this.optimizationInfo
        ? this.optimizationInfo.toProtobufJSON(options)
        : null,
      optimizedOndewoConfig: this.optimizedOndewoConfig
        ? this.optimizedOndewoConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module OptimizeRankingMatchResponse {
  /**
   * Standard JavaScript object representation for OptimizeRankingMatchResponse
   */
  export interface AsObject {
    optimizationInfo?: googleProtobuf009.Struct.AsObject;
    optimizedOndewoConfig?: googleProtobuf009.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for OptimizeRankingMatchResponse
   */
  export interface AsProtobufJSON {
    optimizationInfo: googleProtobuf009.Struct.AsProtobufJSON | null;
    optimizedOndewoConfig: googleProtobuf009.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ImportAgentRequest
 */
export class ImportAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ImportAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ImportAgentRequest();
    ImportAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ImportAgentRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ImportAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentUri = _reader.readString();
          break;
        case 3:
          _instance.agentContent = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    ImportAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ImportAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentUri || _instance.agentUri === '') {
      _writer.writeString(2, _instance.agentUri);
    }
    if (_instance.agentContent && _instance.agentContent.length) {
      _writer.writeBytes(3, _instance.agentContent);
    }
  }

  private _parent: string;
  private _agentUri: string;
  private _agentContent: Uint8Array;

  private _agent: ImportAgentRequest.AgentCase =
    ImportAgentRequest.AgentCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ImportAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ImportAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentUri = _value.agentUri;
    this.agentContent = _value.agentContent;
    ImportAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentUri(): string {
    return this._agentUri;
  }
  set agentUri(value: string) {
    if (value !== undefined && value !== null) {
      this._agentContent = undefined;
      this._agent = ImportAgentRequest.AgentCase.agentUri;
    }
    this._agentUri = value;
  }
  get agentContent(): Uint8Array {
    return this._agentContent;
  }
  set agentContent(value: Uint8Array) {
    if (value !== undefined && value !== null) {
      this._agentUri = undefined;
      this._agent = ImportAgentRequest.AgentCase.agentContent;
    }
    this._agentContent = value;
  }
  get agent() {
    return this._agent;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ImportAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ImportAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentUri: this.agentUri,
      agentContent: this.agentContent
        ? this.agentContent.subarray(0)
        : new Uint8Array()
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
  ): ImportAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentUri:
        this.agentUri === null || this.agentUri === undefined
          ? null
          : this.agentUri,
      agentContent: this.agentContent
        ? uint8ArrayToBase64(this.agentContent)
        : ''
    };
  }
}
export module ImportAgentRequest {
  /**
   * Standard JavaScript object representation for ImportAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentUri: string;
    agentContent: Uint8Array;
  }

  /**
   * Protobuf JSON representation for ImportAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentUri: string | null;
    agentContent: string;
  }
  export enum AgentCase {
    none = 0,
    agentUri = 1,
    agentContent = 2
  }
}

/**
 * Message implementation for ondewo.nlu.RestoreAgentRequest
 */
export class RestoreAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RestoreAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RestoreAgentRequest();
    RestoreAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RestoreAgentRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RestoreAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentUri = _reader.readString();
          break;
        case 3:
          _instance.agentContent = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    RestoreAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RestoreAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentUri || _instance.agentUri === '') {
      _writer.writeString(2, _instance.agentUri);
    }
    if (_instance.agentContent && _instance.agentContent.length) {
      _writer.writeBytes(3, _instance.agentContent);
    }
  }

  private _parent: string;
  private _agentUri: string;
  private _agentContent: Uint8Array;

  private _agent: RestoreAgentRequest.AgentCase =
    RestoreAgentRequest.AgentCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RestoreAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RestoreAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentUri = _value.agentUri;
    this.agentContent = _value.agentContent;
    RestoreAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentUri(): string {
    return this._agentUri;
  }
  set agentUri(value: string) {
    if (value !== undefined && value !== null) {
      this._agentContent = undefined;
      this._agent = RestoreAgentRequest.AgentCase.agentUri;
    }
    this._agentUri = value;
  }
  get agentContent(): Uint8Array {
    return this._agentContent;
  }
  set agentContent(value: Uint8Array) {
    if (value !== undefined && value !== null) {
      this._agentUri = undefined;
      this._agent = RestoreAgentRequest.AgentCase.agentContent;
    }
    this._agentContent = value;
  }
  get agent() {
    return this._agent;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RestoreAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RestoreAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentUri: this.agentUri,
      agentContent: this.agentContent
        ? this.agentContent.subarray(0)
        : new Uint8Array()
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
  ): RestoreAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentUri:
        this.agentUri === null || this.agentUri === undefined
          ? null
          : this.agentUri,
      agentContent: this.agentContent
        ? uint8ArrayToBase64(this.agentContent)
        : ''
    };
  }
}
export module RestoreAgentRequest {
  /**
   * Standard JavaScript object representation for RestoreAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentUri: string;
    agentContent: Uint8Array;
  }

  /**
   * Protobuf JSON representation for RestoreAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentUri: string | null;
    agentContent: string;
  }
  export enum AgentCase {
    none = 0,
    agentUri = 1,
    agentContent = 2
  }
}

/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsRequest
 */
export class GetAgentStatisticsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAgentStatisticsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAgentStatisticsRequest();
    GetAgentStatisticsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAgentStatisticsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.format = _instance.format || 0;
    _instance.languageCode = _instance.languageCode || '';
    _instance.type = _instance.type || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAgentStatisticsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.format = _reader.readEnum();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.type = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAgentStatisticsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAgentStatisticsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.format) {
      _writer.writeEnum(2, _instance.format);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.type) {
      _writer.writeEnum(4, _instance.type);
    }
  }

  private _parent: string;
  private _format: ReportFormat;
  private _languageCode: string;
  private _type: ReportType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAgentStatisticsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAgentStatisticsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.format = _value.format;
    this.languageCode = _value.languageCode;
    this.type = _value.type;
    GetAgentStatisticsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get format(): ReportFormat {
    return this._format;
  }
  set format(value: ReportFormat) {
    this._format = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get type(): ReportType {
    return this._type;
  }
  set type(value: ReportType) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAgentStatisticsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAgentStatisticsRequest.AsObject {
    return {
      parent: this.parent,
      format: this.format,
      languageCode: this.languageCode,
      type: this.type
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
  ): GetAgentStatisticsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      format:
        ReportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      languageCode: this.languageCode,
      type:
        ReportType[
          this.type === null || this.type === undefined ? 0 : this.type
        ]
    };
  }
}
export module GetAgentStatisticsRequest {
  /**
   * Standard JavaScript object representation for GetAgentStatisticsRequest
   */
  export interface AsObject {
    parent: string;
    format: ReportFormat;
    languageCode: string;
    type: ReportType;
  }

  /**
   * Protobuf JSON representation for GetAgentStatisticsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    format: string;
    languageCode: string;
    type: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsResponse
 */
export class GetAgentStatisticsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetAgentStatisticsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAgentStatisticsResponse();
    GetAgentStatisticsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAgentStatisticsResponse) {
    _instance.reports = _instance.reports || new Uint8Array();
    _instance.format = _instance.format || 0;
    _instance.type = _instance.type || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAgentStatisticsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.reports = _reader.readBytes();
          break;
        case 2:
          _instance.format = _reader.readEnum();
          break;
        case 3:
          _instance.type = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAgentStatisticsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAgentStatisticsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.reports && _instance.reports.length) {
      _writer.writeBytes(1, _instance.reports);
    }
    if (_instance.format) {
      _writer.writeEnum(2, _instance.format);
    }
    if (_instance.type) {
      _writer.writeEnum(3, _instance.type);
    }
  }

  private _reports: Uint8Array;
  private _format: ReportFormat;
  private _type: ReportType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAgentStatisticsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAgentStatisticsResponse.AsObject>) {
    _value = _value || {};
    this.reports = _value.reports;
    this.format = _value.format;
    this.type = _value.type;
    GetAgentStatisticsResponse.refineValues(this);
  }
  get reports(): Uint8Array {
    return this._reports;
  }
  set reports(value: Uint8Array) {
    this._reports = value;
  }
  get format(): ReportFormat {
    return this._format;
  }
  set format(value: ReportFormat) {
    this._format = value;
  }
  get type(): ReportType {
    return this._type;
  }
  set type(value: ReportType) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAgentStatisticsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAgentStatisticsResponse.AsObject {
    return {
      reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
      format: this.format,
      type: this.type
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
  ): GetAgentStatisticsResponse.AsProtobufJSON {
    return {
      reports: this.reports ? uint8ArrayToBase64(this.reports) : '',
      format:
        ReportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      type:
        ReportType[
          this.type === null || this.type === undefined ? 0 : this.type
        ]
    };
  }
}
export module GetAgentStatisticsResponse {
  /**
   * Standard JavaScript object representation for GetAgentStatisticsResponse
   */
  export interface AsObject {
    reports: Uint8Array;
    format: ReportFormat;
    type: ReportType;
  }

  /**
   * Protobuf JSON representation for GetAgentStatisticsResponse
   */
  export interface AsProtobufJSON {
    reports: string;
    format: string;
    type: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSessionsStatisticsRequest
 */
export class GetSessionsStatisticsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionsStatisticsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionsStatisticsRequest();
    GetSessionsStatisticsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionsStatisticsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.format = _instance.format || 0;
    _instance.type = _instance.type || 0;
    _instance.sessionFilter = _instance.sessionFilter || undefined;
    _instance.contextFilters = _instance.contextFilters || [];
    _instance.limit = _instance.limit || 0;
    _instance.groupBys = _instance.groupBys || [];
    _instance.orderBys = _instance.orderBys || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.sqlQuery = _instance.sqlQuery || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionsStatisticsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.format = _reader.readEnum();
          break;
        case 3:
          _instance.type = _reader.readEnum();
          break;
        case 4:
          _instance.sessionFilter = new ondewoNlu018.SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            ondewoNlu018.SessionFilter.deserializeBinaryFromReader
          );
          break;
        case 5:
          const messageInitializer5 = new ondewoNlu018.ContextFilter();
          _reader.readMessage(
            messageInitializer5,
            ondewoNlu018.ContextFilter.deserializeBinaryFromReader
          );
          (_instance.contextFilters = _instance.contextFilters || []).push(
            messageInitializer5
          );
          break;
        case 6:
          _instance.limit = _reader.readInt32();
          break;
        case 7:
          (_instance.groupBys = _instance.groupBys || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.orderBys = _instance.orderBys || []).push(
            _reader.readString()
          );
          break;
        case 9:
          _instance.fieldMask = new googleProtobuf002.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf002.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.sqlQuery = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSessionsStatisticsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionsStatisticsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.format) {
      _writer.writeEnum(2, _instance.format);
    }
    if (_instance.type) {
      _writer.writeEnum(3, _instance.type);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        4,
        _instance.sessionFilter as any,
        ondewoNlu018.SessionFilter.serializeBinaryToWriter
      );
    }
    if (_instance.contextFilters && _instance.contextFilters.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.contextFilters as any,
        ondewoNlu018.ContextFilter.serializeBinaryToWriter
      );
    }
    if (_instance.limit) {
      _writer.writeInt32(6, _instance.limit);
    }
    if (_instance.groupBys && _instance.groupBys.length) {
      _writer.writeRepeatedString(7, _instance.groupBys);
    }
    if (_instance.orderBys && _instance.orderBys.length) {
      _writer.writeRepeatedString(8, _instance.orderBys);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        9,
        _instance.fieldMask as any,
        googleProtobuf002.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.sqlQuery) {
      _writer.writeString(10, _instance.sqlQuery);
    }
  }

  private _parent: string;
  private _format: ReportFormat;
  private _type: SessionsReportType;
  private _sessionFilter?: ondewoNlu018.SessionFilter;
  private _contextFilters?: ondewoNlu018.ContextFilter[];
  private _limit: number;
  private _groupBys: string[];
  private _orderBys: string[];
  private _fieldMask?: googleProtobuf002.FieldMask;
  private _sqlQuery: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionsStatisticsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetSessionsStatisticsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.format = _value.format;
    this.type = _value.type;
    this.sessionFilter = _value.sessionFilter
      ? new ondewoNlu018.SessionFilter(_value.sessionFilter)
      : undefined;
    this.contextFilters = (_value.contextFilters || []).map(
      m => new ondewoNlu018.ContextFilter(m)
    );
    this.limit = _value.limit;
    this.groupBys = (_value.groupBys || []).slice();
    this.orderBys = (_value.orderBys || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf002.FieldMask(_value.fieldMask)
      : undefined;
    this.sqlQuery = _value.sqlQuery;
    GetSessionsStatisticsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get format(): ReportFormat {
    return this._format;
  }
  set format(value: ReportFormat) {
    this._format = value;
  }
  get type(): SessionsReportType {
    return this._type;
  }
  set type(value: SessionsReportType) {
    this._type = value;
  }
  get sessionFilter(): ondewoNlu018.SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: ondewoNlu018.SessionFilter | undefined) {
    this._sessionFilter = value;
  }
  get contextFilters(): ondewoNlu018.ContextFilter[] | undefined {
    return this._contextFilters;
  }
  set contextFilters(value: ondewoNlu018.ContextFilter[] | undefined) {
    this._contextFilters = value;
  }
  get limit(): number {
    return this._limit;
  }
  set limit(value: number) {
    this._limit = value;
  }
  get groupBys(): string[] {
    return this._groupBys;
  }
  set groupBys(value: string[]) {
    this._groupBys = value;
  }
  get orderBys(): string[] {
    return this._orderBys;
  }
  set orderBys(value: string[]) {
    this._orderBys = value;
  }
  get fieldMask(): googleProtobuf002.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf002.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get sqlQuery(): string {
    return this._sqlQuery;
  }
  set sqlQuery(value: string) {
    this._sqlQuery = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSessionsStatisticsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionsStatisticsRequest.AsObject {
    return {
      parent: this.parent,
      format: this.format,
      type: this.type,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
        : undefined,
      contextFilters: (this.contextFilters || []).map(m => m.toObject()),
      limit: this.limit,
      groupBys: (this.groupBys || []).slice(),
      orderBys: (this.orderBys || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      sqlQuery: this.sqlQuery
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
  ): GetSessionsStatisticsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      format:
        ReportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      type:
        SessionsReportType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null,
      contextFilters: (this.contextFilters || []).map(m =>
        m.toProtobufJSON(options)
      ),
      limit: this.limit,
      groupBys: (this.groupBys || []).slice(),
      orderBys: (this.orderBys || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      sqlQuery: this.sqlQuery
    };
  }
}
export module GetSessionsStatisticsRequest {
  /**
   * Standard JavaScript object representation for GetSessionsStatisticsRequest
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class GetSessionsStatisticsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionsStatisticsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionsStatisticsResponse();
    GetSessionsStatisticsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionsStatisticsResponse) {
    _instance.reports = _instance.reports || new Uint8Array();
    _instance.format = _instance.format || 0;
    _instance.type = _instance.type || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionsStatisticsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.reports = _reader.readBytes();
          break;
        case 2:
          _instance.format = _reader.readEnum();
          break;
        case 3:
          _instance.type = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSessionsStatisticsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionsStatisticsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.reports && _instance.reports.length) {
      _writer.writeBytes(1, _instance.reports);
    }
    if (_instance.format) {
      _writer.writeEnum(2, _instance.format);
    }
    if (_instance.type) {
      _writer.writeEnum(3, _instance.type);
    }
  }

  private _reports: Uint8Array;
  private _format: ReportFormat;
  private _type: SessionsReportType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionsStatisticsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetSessionsStatisticsResponse.AsObject>
  ) {
    _value = _value || {};
    this.reports = _value.reports;
    this.format = _value.format;
    this.type = _value.type;
    GetSessionsStatisticsResponse.refineValues(this);
  }
  get reports(): Uint8Array {
    return this._reports;
  }
  set reports(value: Uint8Array) {
    this._reports = value;
  }
  get format(): ReportFormat {
    return this._format;
  }
  set format(value: ReportFormat) {
    this._format = value;
  }
  get type(): SessionsReportType {
    return this._type;
  }
  set type(value: SessionsReportType) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSessionsStatisticsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionsStatisticsResponse.AsObject {
    return {
      reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
      format: this.format,
      type: this.type
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
  ): GetSessionsStatisticsResponse.AsProtobufJSON {
    return {
      reports: this.reports ? uint8ArrayToBase64(this.reports) : '',
      format:
        ReportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      type:
        SessionsReportType[
          this.type === null || this.type === undefined ? 0 : this.type
        ]
    };
  }
}
export module GetSessionsStatisticsResponse {
  /**
   * Standard JavaScript object representation for GetSessionsStatisticsResponse
   */
  export interface AsObject {
    reports: Uint8Array;
    format: ReportFormat;
    type: SessionsReportType;
  }

  /**
   * Protobuf JSON representation for GetSessionsStatisticsResponse
   */
  export interface AsProtobufJSON {
    reports: string;
    format: string;
    type: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddUserToProjectRequest
 */
export class AddUserToProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddUserToProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddUserToProjectRequest();
    AddUserToProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddUserToProjectRequest) {
    _instance.parent = _instance.parent || '';
    _instance.userId = _instance.userId || '';
    _instance.projectRoleId = _instance.projectRoleId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddUserToProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.userId = _reader.readString();
          break;
        case 4:
          _instance.projectRoleId = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    AddUserToProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddUserToProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.userId) {
      _writer.writeString(2, _instance.userId);
    }
    if (_instance.projectRoleId) {
      _writer.writeUint32(4, _instance.projectRoleId);
    }
  }

  private _parent: string;
  private _userId: string;
  private _projectRoleId: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddUserToProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddUserToProjectRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.userId = _value.userId;
    this.projectRoleId = _value.projectRoleId;
    AddUserToProjectRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get projectRoleId(): number {
    return this._projectRoleId;
  }
  set projectRoleId(value: number) {
    this._projectRoleId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddUserToProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddUserToProjectRequest.AsObject {
    return {
      parent: this.parent,
      userId: this.userId,
      projectRoleId: this.projectRoleId
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
  ): AddUserToProjectRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      userId: this.userId,
      projectRoleId: this.projectRoleId
    };
  }
}
export module AddUserToProjectRequest {
  /**
   * Standard JavaScript object representation for AddUserToProjectRequest
   */
  export interface AsObject {
    parent: string;
    userId: string;
    projectRoleId: number;
  }

  /**
   * Protobuf JSON representation for AddUserToProjectRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    userId: string;
    projectRoleId: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RemoveUserFromProjectRequest
 */
export class RemoveUserFromProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RemoveUserFromProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoveUserFromProjectRequest();
    RemoveUserFromProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoveUserFromProjectRequest) {
    _instance.parent = _instance.parent || '';
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoveUserFromProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoveUserFromProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoveUserFromProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.userId) {
      _writer.writeString(2, _instance.userId);
    }
  }

  private _parent: string;
  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoveUserFromProjectRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoveUserFromProjectRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.userId = _value.userId;
    RemoveUserFromProjectRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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
    RemoveUserFromProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoveUserFromProjectRequest.AsObject {
    return {
      parent: this.parent,
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
  ): RemoveUserFromProjectRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      userId: this.userId
    };
  }
}
export module RemoveUserFromProjectRequest {
  /**
   * Standard JavaScript object representation for RemoveUserFromProjectRequest
   */
  export interface AsObject {
    parent: string;
    userId: string;
  }

  /**
   * Protobuf JSON representation for RemoveUserFromProjectRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    userId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUsersInProjectRequest
 */
export class ListUsersInProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListUsersInProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUsersInProjectRequest();
    ListUsersInProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUsersInProjectRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUsersInProjectRequest,
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
        default:
          _reader.skipField();
      }
    }

    ListUsersInProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUsersInProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
  }

  private _parent: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUsersInProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUsersInProjectRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageToken = _value.pageToken;
    ListUsersInProjectRequest.refineValues(this);
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUsersInProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUsersInProjectRequest.AsObject {
    return {
      parent: this.parent,
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
  ): ListUsersInProjectRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageToken: this.pageToken
    };
  }
}
export module ListUsersInProjectRequest {
  /**
   * Standard JavaScript object representation for ListUsersInProjectRequest
   */
  export interface AsObject {
    parent: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListUsersInProjectRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UserInProject
 */
export class UserInProject implements GrpcMessage {
  static id = 'ondewo.nlu.UserInProject';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInProject();
    UserInProject.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInProject) {
    _instance.parent = _instance.parent || '';
    _instance.user = _instance.user || undefined;
    _instance.roleId = _instance.roleId || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInProject,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.user = new ondewoNlu017.User();
          _reader.readMessage(
            _instance.user,
            ondewoNlu017.User.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.roleId = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInProject.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInProject,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.user) {
      _writer.writeMessage(
        2,
        _instance.user as any,
        ondewoNlu017.User.serializeBinaryToWriter
      );
    }
    if (_instance.roleId) {
      _writer.writeUint32(3, _instance.roleId);
    }
  }

  private _parent: string;
  private _user?: ondewoNlu017.User;
  private _roleId: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInProject to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInProject.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.user = _value.user ? new ondewoNlu017.User(_value.user) : undefined;
    this.roleId = _value.roleId;
    UserInProject.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get user(): ondewoNlu017.User | undefined {
    return this._user;
  }
  set user(value: ondewoNlu017.User | undefined) {
    this._user = value;
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
    UserInProject.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInProject.AsObject {
    return {
      parent: this.parent,
      user: this.user ? this.user.toObject() : undefined,
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
  ): UserInProject.AsProtobufJSON {
    return {
      parent: this.parent,
      user: this.user ? this.user.toProtobufJSON(options) : null,
      roleId: this.roleId
    };
  }
}
export module UserInProject {
  /**
   * Standard JavaScript object representation for UserInProject
   */
  export interface AsObject {
    parent: string;
    user?: ondewoNlu017.User.AsObject;
    roleId: number;
  }

  /**
   * Protobuf JSON representation for UserInProject
   */
  export interface AsProtobufJSON {
    parent: string;
    user: ondewoNlu017.User.AsProtobufJSON | null;
    roleId: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUsersInProjectResponse
 */
export class ListUsersInProjectResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListUsersInProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUsersInProjectResponse();
    ListUsersInProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUsersInProjectResponse) {
    _instance.users = _instance.users || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUsersInProjectResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UserInProject();
          _reader.readMessage(
            messageInitializer1,
            UserInProject.deserializeBinaryFromReader
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

    ListUsersInProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUsersInProjectResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        UserInProject.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _users?: UserInProject[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUsersInProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUsersInProjectResponse.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new UserInProject(m));
    this.nextPageToken = _value.nextPageToken;
    ListUsersInProjectResponse.refineValues(this);
  }
  get users(): UserInProject[] | undefined {
    return this._users;
  }
  set users(value: UserInProject[] | undefined) {
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
    ListUsersInProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUsersInProjectResponse.AsObject {
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
  ): ListUsersInProjectResponse.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListUsersInProjectResponse {
  /**
   * Standard JavaScript object representation for ListUsersInProjectResponse
   */
  export interface AsObject {
    users?: UserInProject.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListUsersInProjectResponse
   */
  export interface AsProtobufJSON {
    users: UserInProject.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetPlatformInfoResponse
 */
export class GetPlatformInfoResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetPlatformInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetPlatformInfoResponse();
    GetPlatformInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetPlatformInfoResponse) {
    _instance.version = _instance.version || '';
    _instance.commitHash = _instance.commitHash || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetPlatformInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.version = _reader.readString();
          break;
        case 2:
          _instance.commitHash = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetPlatformInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetPlatformInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.version) {
      _writer.writeString(1, _instance.version);
    }
    if (_instance.commitHash) {
      _writer.writeString(2, _instance.commitHash);
    }
  }

  private _version: string;
  private _commitHash: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetPlatformInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetPlatformInfoResponse.AsObject>) {
    _value = _value || {};
    this.version = _value.version;
    this.commitHash = _value.commitHash;
    GetPlatformInfoResponse.refineValues(this);
  }
  get version(): string {
    return this._version;
  }
  set version(value: string) {
    this._version = value;
  }
  get commitHash(): string {
    return this._commitHash;
  }
  set commitHash(value: string) {
    this._commitHash = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetPlatformInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetPlatformInfoResponse.AsObject {
    return {
      version: this.version,
      commitHash: this.commitHash
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
  ): GetPlatformInfoResponse.AsProtobufJSON {
    return {
      version: this.version,
      commitHash: this.commitHash
    };
  }
}
export module GetPlatformInfoResponse {
  /**
   * Standard JavaScript object representation for GetPlatformInfoResponse
   */
  export interface AsObject {
    version: string;
    commitHash: string;
  }

  /**
   * Protobuf JSON representation for GetPlatformInfoResponse
   */
  export interface AsProtobufJSON {
    version: string;
    commitHash: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsRequest
 */
export class ListProjectPermissionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListProjectPermissionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProjectPermissionsRequest();
    ListProjectPermissionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProjectPermissionsRequest) {
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProjectPermissionsRequest,
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

    ListProjectPermissionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProjectPermissionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
  }

  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProjectPermissionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListProjectPermissionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    ListProjectPermissionsRequest.refineValues(this);
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
    ListProjectPermissionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProjectPermissionsRequest.AsObject {
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
  ): ListProjectPermissionsRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken
    };
  }
}
export module ListProjectPermissionsRequest {
  /**
   * Standard JavaScript object representation for ListProjectPermissionsRequest
   */
  export interface AsObject {
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListProjectPermissionsRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsResponse
 */
export class ListProjectPermissionsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListProjectPermissionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProjectPermissionsResponse();
    ListProjectPermissionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProjectPermissionsResponse) {
    _instance.permissions = _instance.permissions || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProjectPermissionsResponse,
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

    ListProjectPermissionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProjectPermissionsResponse,
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
   * @param _value initial values object or instance of ListProjectPermissionsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListProjectPermissionsResponse.AsObject>
  ) {
    _value = _value || {};
    this.permissions = (_value.permissions || []).slice();
    this.nextPageToken = _value.nextPageToken;
    ListProjectPermissionsResponse.refineValues(this);
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
    ListProjectPermissionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProjectPermissionsResponse.AsObject {
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
  ): ListProjectPermissionsResponse.AsProtobufJSON {
    return {
      permissions: (this.permissions || []).slice(),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListProjectPermissionsResponse {
  /**
   * Standard JavaScript object representation for ListProjectPermissionsResponse
   */
  export interface AsObject {
    permissions: string[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListProjectPermissionsResponse
   */
  export interface AsProtobufJSON {
    permissions: string[];
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.SetAgentStatusRequest
 */
export class SetAgentStatusRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SetAgentStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetAgentStatusRequest();
    SetAgentStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetAgentStatusRequest) {
    _instance.parent = _instance.parent || '';
    _instance.status = _instance.status || 0;
    _instance.agentView = _instance.agentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetAgentStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readEnum();
          break;
        case 3:
          _instance.agentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    SetAgentStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetAgentStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.status) {
      _writer.writeEnum(2, _instance.status);
    }
    if (_instance.agentView) {
      _writer.writeEnum(3, _instance.agentView);
    }
  }

  private _parent: string;
  private _status: AgentStatus;
  private _agentView: AgentView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetAgentStatusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetAgentStatusRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.status = _value.status;
    this.agentView = _value.agentView;
    SetAgentStatusRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get status(): AgentStatus {
    return this._status;
  }
  set status(value: AgentStatus) {
    this._status = value;
  }
  get agentView(): AgentView {
    return this._agentView;
  }
  set agentView(value: AgentView) {
    this._agentView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetAgentStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetAgentStatusRequest.AsObject {
    return {
      parent: this.parent,
      status: this.status,
      agentView: this.agentView
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
  ): SetAgentStatusRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      status:
        AgentStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      agentView:
        AgentView[
          this.agentView === null || this.agentView === undefined
            ? 0
            : this.agentView
        ]
    };
  }
}
export module SetAgentStatusRequest {
  /**
   * Standard JavaScript object representation for SetAgentStatusRequest
   */
  export interface AsObject {
    parent: string;
    status: AgentStatus;
    agentView: AgentView;
  }

  /**
   * Protobuf JSON representation for SetAgentStatusRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    status: string;
    agentView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AgentSorting
 */
export class AgentSorting implements GrpcMessage {
  static id = 'ondewo.nlu.AgentSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AgentSorting();
    AgentSorting.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AgentSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AgentSorting,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sortingField = _reader.readEnum();
          break;
        case 2:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    AgentSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AgentSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: AgentSorting.AgentSortingField;
  private _sortingMode: ondewoNlu006.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AgentSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<AgentSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    AgentSorting.refineValues(this);
  }
  get sortingField(): AgentSorting.AgentSortingField {
    return this._sortingField;
  }
  set sortingField(value: AgentSorting.AgentSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoNlu006.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu006.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AgentSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AgentSorting.AsObject {
    return {
      sortingField: this.sortingField,
      sortingMode: this.sortingMode
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
  ): AgentSorting.AsProtobufJSON {
    return {
      sortingField:
        AgentSorting.AgentSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoNlu006.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module AgentSorting {
  /**
   * Standard JavaScript object representation for AgentSorting
   */
  export interface AsObject {
    sortingField: AgentSorting.AgentSortingField;
    sortingMode: ondewoNlu006.SortingMode;
  }

  /**
   * Protobuf JSON representation for AgentSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum AgentSortingField {
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
export class SetResourcesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SetResourcesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetResourcesRequest();
    SetResourcesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetResourcesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.resourceFile = _instance.resourceFile || new Uint8Array();
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetResourcesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.resourceFile = _reader.readBytes();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SetResourcesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetResourcesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.resourceFile && _instance.resourceFile.length) {
      _writer.writeBytes(4, _instance.resourceFile);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
  }

  private _parent: string;
  private _name: string;
  private _type: string;
  private _resourceFile: Uint8Array;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetResourcesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetResourcesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.type = _value.type;
    this.resourceFile = _value.resourceFile;
    this.languageCode = _value.languageCode;
    SetResourcesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get resourceFile(): Uint8Array {
    return this._resourceFile;
  }
  set resourceFile(value: Uint8Array) {
    this._resourceFile = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetResourcesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetResourcesRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      resourceFile: this.resourceFile
        ? this.resourceFile.subarray(0)
        : new Uint8Array(),
      languageCode: this.languageCode
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
  ): SetResourcesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      resourceFile: this.resourceFile
        ? uint8ArrayToBase64(this.resourceFile)
        : '',
      languageCode: this.languageCode
    };
  }
}
export module SetResourcesRequest {
  /**
   * Standard JavaScript object representation for SetResourcesRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    type: string;
    resourceFile: Uint8Array;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for SetResourcesRequest
   */
  export interface AsProtobufJSON {
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
export class DeleteResourcesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteResourcesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteResourcesRequest();
    DeleteResourcesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteResourcesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteResourcesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteResourcesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteResourcesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _parent: string;
  private _name: string;
  private _type: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteResourcesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteResourcesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.type = _value.type;
    this.languageCode = _value.languageCode;
    DeleteResourcesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteResourcesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteResourcesRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode
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
  ): DeleteResourcesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode
    };
  }
}
export module DeleteResourcesRequest {
  /**
   * Standard JavaScript object representation for DeleteResourcesRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    type: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for DeleteResourcesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    name: string;
    type: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportResourcesRequest
 */
export class ExportResourcesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExportResourcesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportResourcesRequest();
    ExportResourcesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportResourcesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportResourcesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportResourcesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportResourcesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _parent: string;
  private _name: string;
  private _type: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportResourcesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportResourcesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.type = _value.type;
    this.languageCode = _value.languageCode;
    ExportResourcesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportResourcesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportResourcesRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode
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
  ): ExportResourcesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode
    };
  }
}
export module ExportResourcesRequest {
  /**
   * Standard JavaScript object representation for ExportResourcesRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    type: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for ExportResourcesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    name: string;
    type: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportResourcesResponse
 */
export class ExportResourcesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ExportResourcesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportResourcesResponse();
    ExportResourcesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportResourcesResponse) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.resourceFile = _instance.resourceFile || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportResourcesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.resourceFile = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportResourcesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportResourcesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.resourceFile && _instance.resourceFile.length) {
      _writer.writeBytes(5, _instance.resourceFile);
    }
  }

  private _parent: string;
  private _name: string;
  private _type: string;
  private _languageCode: string;
  private _resourceFile: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportResourcesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportResourcesResponse.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.type = _value.type;
    this.languageCode = _value.languageCode;
    this.resourceFile = _value.resourceFile;
    ExportResourcesResponse.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get resourceFile(): Uint8Array {
    return this._resourceFile;
  }
  set resourceFile(value: Uint8Array) {
    this._resourceFile = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportResourcesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportResourcesResponse.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode,
      resourceFile: this.resourceFile
        ? this.resourceFile.subarray(0)
        : new Uint8Array()
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
  ): ExportResourcesResponse.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      type: this.type,
      languageCode: this.languageCode,
      resourceFile: this.resourceFile
        ? uint8ArrayToBase64(this.resourceFile)
        : ''
    };
  }
}
export module ExportResourcesResponse {
  /**
   * Standard JavaScript object representation for ExportResourcesResponse
   */
  export interface AsObject {
    parent: string;
    name: string;
    type: string;
    languageCode: string;
    resourceFile: Uint8Array;
  }

  /**
   * Protobuf JSON representation for ExportResourcesResponse
   */
  export interface AsProtobufJSON {
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
export class GetModelStatusesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetModelStatusesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetModelStatusesRequest();
    GetModelStatusesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetModelStatusesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.cacheVersion = _instance.cacheVersion || 0;
    _instance.languageCode = _instance.languageCode || '';
    _instance.modelName = _instance.modelName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetModelStatusesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.cacheVersion = _reader.readInt32();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.modelName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetModelStatusesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetModelStatusesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.cacheVersion) {
      _writer.writeInt32(2, _instance.cacheVersion);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.modelName) {
      _writer.writeString(4, _instance.modelName);
    }
  }

  private _parent: string;
  private _cacheVersion: number;
  private _languageCode: string;
  private _modelName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetModelStatusesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetModelStatusesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.cacheVersion = _value.cacheVersion;
    this.languageCode = _value.languageCode;
    this.modelName = _value.modelName;
    GetModelStatusesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get cacheVersion(): number {
    return this._cacheVersion;
  }
  set cacheVersion(value: number) {
    this._cacheVersion = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetModelStatusesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetModelStatusesRequest.AsObject {
    return {
      parent: this.parent,
      cacheVersion: this.cacheVersion,
      languageCode: this.languageCode,
      modelName: this.modelName
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
  ): GetModelStatusesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      cacheVersion: this.cacheVersion,
      languageCode: this.languageCode,
      modelName: this.modelName
    };
  }
}
export module GetModelStatusesRequest {
  /**
   * Standard JavaScript object representation for GetModelStatusesRequest
   */
  export interface AsObject {
    parent: string;
    cacheVersion: number;
    languageCode: string;
    modelName: string;
  }

  /**
   * Protobuf JSON representation for GetModelStatusesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    cacheVersion: number;
    languageCode: string;
    modelName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ModelStatus
 */
export class ModelStatus implements GrpcMessage {
  static id = 'ondewo.nlu.ModelStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ModelStatus();
    ModelStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ModelStatus) {
    _instance.cacheVersion = _instance.cacheVersion || 0;
    _instance.languageCode = _instance.languageCode || '';
    _instance.modelName = _instance.modelName || '';
    _instance.statusSetTime = _instance.statusSetTime || undefined;
    _instance.config = _instance.config || '';
    _instance.status = _instance.status || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ModelStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cacheVersion = _reader.readInt32();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.modelName = _reader.readString();
          break;
        case 4:
          _instance.statusSetTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.statusSetTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.config = _reader.readString();
          break;
        case 6:
          _instance.status = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ModelStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ModelStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.cacheVersion) {
      _writer.writeInt32(1, _instance.cacheVersion);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.modelName) {
      _writer.writeString(3, _instance.modelName);
    }
    if (_instance.statusSetTime) {
      _writer.writeMessage(
        4,
        _instance.statusSetTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.config) {
      _writer.writeString(5, _instance.config);
    }
    if (_instance.status) {
      _writer.writeEnum(6, _instance.status);
    }
  }

  private _cacheVersion: number;
  private _languageCode: string;
  private _modelName: string;
  private _statusSetTime?: googleProtobuf003.Timestamp;
  private _config: string;
  private _status: ModelStatus.StatusName;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ModelStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<ModelStatus.AsObject>) {
    _value = _value || {};
    this.cacheVersion = _value.cacheVersion;
    this.languageCode = _value.languageCode;
    this.modelName = _value.modelName;
    this.statusSetTime = _value.statusSetTime
      ? new googleProtobuf003.Timestamp(_value.statusSetTime)
      : undefined;
    this.config = _value.config;
    this.status = _value.status;
    ModelStatus.refineValues(this);
  }
  get cacheVersion(): number {
    return this._cacheVersion;
  }
  set cacheVersion(value: number) {
    this._cacheVersion = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get statusSetTime(): googleProtobuf003.Timestamp | undefined {
    return this._statusSetTime;
  }
  set statusSetTime(value: googleProtobuf003.Timestamp | undefined) {
    this._statusSetTime = value;
  }
  get config(): string {
    return this._config;
  }
  set config(value: string) {
    this._config = value;
  }
  get status(): ModelStatus.StatusName {
    return this._status;
  }
  set status(value: ModelStatus.StatusName) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ModelStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ModelStatus.AsObject {
    return {
      cacheVersion: this.cacheVersion,
      languageCode: this.languageCode,
      modelName: this.modelName,
      statusSetTime: this.statusSetTime
        ? this.statusSetTime.toObject()
        : undefined,
      config: this.config,
      status: this.status
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
  ): ModelStatus.AsProtobufJSON {
    return {
      cacheVersion: this.cacheVersion,
      languageCode: this.languageCode,
      modelName: this.modelName,
      statusSetTime: this.statusSetTime
        ? this.statusSetTime.toProtobufJSON(options)
        : null,
      config: this.config,
      status:
        ModelStatus.StatusName[
          this.status === null || this.status === undefined ? 0 : this.status
        ]
    };
  }
}
export module ModelStatus {
  /**
   * Standard JavaScript object representation for ModelStatus
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    cacheVersion: number;
    languageCode: string;
    modelName: string;
    statusSetTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    config: string;
    status: string;
  }
  export enum StatusName {
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
export class GetModelStatusesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetModelStatusesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetModelStatusesResponse();
    GetModelStatusesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetModelStatusesResponse) {
    _instance.modelStatuses = _instance.modelStatuses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetModelStatusesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ModelStatus();
          _reader.readMessage(
            messageInitializer1,
            ModelStatus.deserializeBinaryFromReader
          );
          (_instance.modelStatuses = _instance.modelStatuses || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetModelStatusesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetModelStatusesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.modelStatuses && _instance.modelStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.modelStatuses as any,
        ModelStatus.serializeBinaryToWriter
      );
    }
  }

  private _modelStatuses?: ModelStatus[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetModelStatusesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetModelStatusesResponse.AsObject>) {
    _value = _value || {};
    this.modelStatuses = (_value.modelStatuses || []).map(
      m => new ModelStatus(m)
    );
    GetModelStatusesResponse.refineValues(this);
  }
  get modelStatuses(): ModelStatus[] | undefined {
    return this._modelStatuses;
  }
  set modelStatuses(value: ModelStatus[] | undefined) {
    this._modelStatuses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetModelStatusesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetModelStatusesResponse.AsObject {
    return {
      modelStatuses: (this.modelStatuses || []).map(m => m.toObject())
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
  ): GetModelStatusesResponse.AsProtobufJSON {
    return {
      modelStatuses: (this.modelStatuses || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module GetModelStatusesResponse {
  /**
   * Standard JavaScript object representation for GetModelStatusesResponse
   */
  export interface AsObject {
    modelStatuses?: ModelStatus.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetModelStatusesResponse
   */
  export interface AsProtobufJSON {
    modelStatuses: ModelStatus.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CustomPlatformInfo
 */
export class CustomPlatformInfo implements GrpcMessage {
  static id = 'ondewo.nlu.CustomPlatformInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CustomPlatformInfo();
    CustomPlatformInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CustomPlatformInfo) {
    _instance.platform = _instance.platform || 0;
    _instance.displayName = _instance.displayName || '';
    _instance.position = _instance.position || 0;
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
    _instance: CustomPlatformInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.platform = _reader.readEnum();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.position = _reader.readUint32();
          break;
        case 4:
          _instance.createdAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.modifiedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
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

    CustomPlatformInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CustomPlatformInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.platform) {
      _writer.writeEnum(1, _instance.platform);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.position) {
      _writer.writeUint32(3, _instance.position);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        5,
        _instance.modifiedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(6, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(7, _instance.modifiedBy);
    }
  }

  private _platform: ondewoNlu015.Intent.Message.Platform;
  private _displayName: string;
  private _position: number;
  private _createdAt?: googleProtobuf003.Timestamp;
  private _modifiedAt?: googleProtobuf003.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CustomPlatformInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CustomPlatformInfo.AsObject>) {
    _value = _value || {};
    this.platform = _value.platform;
    this.displayName = _value.displayName;
    this.position = _value.position;
    this.createdAt = _value.createdAt
      ? new googleProtobuf003.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf003.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    CustomPlatformInfo.refineValues(this);
  }
  get platform(): ondewoNlu015.Intent.Message.Platform {
    return this._platform;
  }
  set platform(value: ondewoNlu015.Intent.Message.Platform) {
    this._platform = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get position(): number {
    return this._position;
  }
  set position(value: number) {
    this._position = value;
  }
  get createdAt(): googleProtobuf003.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf003.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf003.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
    CustomPlatformInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CustomPlatformInfo.AsObject {
    return {
      platform: this.platform,
      displayName: this.displayName,
      position: this.position,
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
  ): CustomPlatformInfo.AsProtobufJSON {
    return {
      platform:
        ondewoNlu015.Intent.Message.Platform[
          this.platform === null || this.platform === undefined
            ? 0
            : this.platform
        ],
      displayName: this.displayName,
      position: this.position,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module CustomPlatformInfo {
  /**
   * Standard JavaScript object representation for CustomPlatformInfo
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class GetPlatformMappingRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetPlatformMappingRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetPlatformMappingRequest();
    GetPlatformMappingRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetPlatformMappingRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetPlatformMappingRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetPlatformMappingRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetPlatformMappingRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetPlatformMappingRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetPlatformMappingRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    GetPlatformMappingRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetPlatformMappingRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetPlatformMappingRequest.AsObject {
    return {
      parent: this.parent
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
  ): GetPlatformMappingRequest.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module GetPlatformMappingRequest {
  /**
   * Standard JavaScript object representation for GetPlatformMappingRequest
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for GetPlatformMappingRequest
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.PlatformMapping
 */
export class PlatformMapping implements GrpcMessage {
  static id = 'ondewo.nlu.PlatformMapping';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PlatformMapping();
    PlatformMapping.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PlatformMapping) {
    _instance.parent = _instance.parent || '';
    _instance.platformInfo = _instance.platformInfo || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PlatformMapping,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new CustomPlatformInfo();
          _reader.readMessage(
            messageInitializer2,
            CustomPlatformInfo.deserializeBinaryFromReader
          );
          (_instance.platformInfo = _instance.platformInfo || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PlatformMapping.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PlatformMapping,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.platformInfo && _instance.platformInfo.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.platformInfo as any,
        CustomPlatformInfo.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _platformInfo?: CustomPlatformInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PlatformMapping to deeply clone from
   */
  constructor(_value?: RecursivePartial<PlatformMapping.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.platformInfo = (_value.platformInfo || []).map(
      m => new CustomPlatformInfo(m)
    );
    PlatformMapping.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get platformInfo(): CustomPlatformInfo[] | undefined {
    return this._platformInfo;
  }
  set platformInfo(value: CustomPlatformInfo[] | undefined) {
    this._platformInfo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PlatformMapping.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PlatformMapping.AsObject {
    return {
      parent: this.parent,
      platformInfo: (this.platformInfo || []).map(m => m.toObject())
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
  ): PlatformMapping.AsProtobufJSON {
    return {
      parent: this.parent,
      platformInfo: (this.platformInfo || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module PlatformMapping {
  /**
   * Standard JavaScript object representation for PlatformMapping
   */
  export interface AsObject {
    parent: string;
    platformInfo?: CustomPlatformInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for PlatformMapping
   */
  export interface AsProtobufJSON {
    parent: string;
    platformInfo: CustomPlatformInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.FullTextSearchRequest
 */
export class FullTextSearchRequest implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchRequest();
    FullTextSearchRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.term = _instance.term || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.term = _reader.readString();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.term) {
      _writer.writeString(3, _instance.term);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _term: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<FullTextSearchRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.term = _value.term;
    this.pageToken = _value.pageToken;
    FullTextSearchRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
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
    FullTextSearchRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      term: this.term,
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
  ): FullTextSearchRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      term: this.term,
      pageToken: this.pageToken
    };
  }
}
export module FullTextSearchRequest {
  /**
   * Standard JavaScript object representation for FullTextSearchRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    term: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for FullTextSearchRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    term: string;
    pageToken: string;
  }
  export enum QueryType {
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
export class FullTextSearchResponseEntityType implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseEntityType';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseEntityType();
    FullTextSearchResponseEntityType.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseEntityType) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.entityTypeResults = _instance.entityTypeResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseEntityType,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseEntityType.EntityTypeSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseEntityType.EntityTypeSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.entityTypeResults =
            _instance.entityTypeResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseEntityType.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseEntityType,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.entityTypeResults && _instance.entityTypeResults.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.entityTypeResults as any,
        FullTextSearchResponseEntityType.EntityTypeSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _entityTypeResults?: FullTextSearchResponseEntityType.EntityTypeSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseEntityType to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseEntityType.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.entityTypeResults = (_value.entityTypeResults || []).map(
      m => new FullTextSearchResponseEntityType.EntityTypeSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseEntityType.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get entityTypeResults():
    | FullTextSearchResponseEntityType.EntityTypeSearchResult[]
    | undefined {
    return this._entityTypeResults;
  }
  set entityTypeResults(
    value: FullTextSearchResponseEntityType.EntityTypeSearchResult[] | undefined
  ) {
    this._entityTypeResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseEntityType.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseEntityType.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entityTypeResults: (this.entityTypeResults || []).map(m => m.toObject()),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseEntityType.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entityTypeResults: (this.entityTypeResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseEntityType {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseEntityType
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    entityTypeResults:
      | FullTextSearchResponseEntityType.EntityTypeSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult
   */
  export class EntityTypeSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EntityTypeSearchResult();
      EntityTypeSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeSearchResult) {
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.language = _instance.language || '';
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
      _instance: EntityTypeSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.displayName = _reader.readString();
            break;
          case 3:
            _instance.language = _reader.readString();
            break;
          case 4:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 5:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
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

      EntityTypeSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EntityTypeSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(2, _instance.displayName);
      }
      if (_instance.language) {
        _writer.writeString(3, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          4,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          5,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(6, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(7, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _displayName: string;
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeSearchResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeSearchResult.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      EntityTypeSearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get displayName(): string {
      return this._displayName;
    }
    set displayName(value: string) {
      this._displayName = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      EntityTypeSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeSearchResult.AsObject {
      return {
        name: this.name,
        displayName: this.displayName,
        language: this.language,
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
    ): EntityTypeSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        displayName: this.displayName,
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module EntityTypeSearchResult {
    /**
     * Standard JavaScript object representation for EntityTypeSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseEntity implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseEntity';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseEntity();
    FullTextSearchResponseEntity.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseEntity) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.entityResults = _instance.entityResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseEntity,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseEntity.EntitySearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseEntity.EntitySearchResult
              .deserializeBinaryFromReader
          );
          (_instance.entityResults = _instance.entityResults || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseEntity.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseEntity,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.entityResults && _instance.entityResults.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.entityResults as any,
        FullTextSearchResponseEntity.EntitySearchResult.serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _entityResults?: FullTextSearchResponseEntity.EntitySearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseEntity to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseEntity.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.entityResults = (_value.entityResults || []).map(
      m => new FullTextSearchResponseEntity.EntitySearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseEntity.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get entityResults():
    | FullTextSearchResponseEntity.EntitySearchResult[]
    | undefined {
    return this._entityResults;
  }
  set entityResults(
    value: FullTextSearchResponseEntity.EntitySearchResult[] | undefined
  ) {
    this._entityResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseEntity.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseEntity.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entityResults: (this.entityResults || []).map(m => m.toObject()),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseEntity.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entityResults: (this.entityResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseEntity {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseEntity
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    entityResults:
      | FullTextSearchResponseEntity.EntitySearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult
   */
  export class EntitySearchResult implements GrpcMessage {
    static id = 'ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EntitySearchResult();
      EntitySearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntitySearchResult) {
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.entityTypeName = _instance.entityTypeName || '';
      _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
      _instance.language = _instance.language || '';
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
      _instance: EntitySearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.displayName = _reader.readString();
            break;
          case 3:
            _instance.entityTypeName = _reader.readString();
            break;
          case 4:
            _instance.entityTypeDisplayName = _reader.readString();
            break;
          case 5:
            _instance.language = _reader.readString();
            break;
          case 6:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.createdBy = _reader.readString();
            break;
          case 9:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      EntitySearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EntitySearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(2, _instance.displayName);
      }
      if (_instance.entityTypeName) {
        _writer.writeString(3, _instance.entityTypeName);
      }
      if (_instance.entityTypeDisplayName) {
        _writer.writeString(4, _instance.entityTypeDisplayName);
      }
      if (_instance.language) {
        _writer.writeString(5, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          6,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          7,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(8, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(9, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _displayName: string;
    private _entityTypeName: string;
    private _entityTypeDisplayName: string;
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntitySearchResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntitySearchResult.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.entityTypeName = _value.entityTypeName;
      this.entityTypeDisplayName = _value.entityTypeDisplayName;
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      EntitySearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get displayName(): string {
      return this._displayName;
    }
    set displayName(value: string) {
      this._displayName = value;
    }
    get entityTypeName(): string {
      return this._entityTypeName;
    }
    set entityTypeName(value: string) {
      this._entityTypeName = value;
    }
    get entityTypeDisplayName(): string {
      return this._entityTypeDisplayName;
    }
    set entityTypeDisplayName(value: string) {
      this._entityTypeDisplayName = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      EntitySearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntitySearchResult.AsObject {
      return {
        name: this.name,
        displayName: this.displayName,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        language: this.language,
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
    ): EntitySearchResult.AsProtobufJSON {
      return {
        name: this.name,
        displayName: this.displayName,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module EntitySearchResult {
    /**
     * Standard JavaScript object representation for EntitySearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseEntitySynonym implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseEntitySynonym';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseEntitySynonym();
    FullTextSearchResponseEntitySynonym.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseEntitySynonym) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.entitySynonymResults = _instance.entitySynonymResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseEntitySynonym,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.entitySynonymResults =
            _instance.entitySynonymResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseEntitySynonym.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseEntitySynonym,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.entitySynonymResults &&
      _instance.entitySynonymResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.entitySynonymResults as any,
        FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _entitySynonymResults?: FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseEntitySynonym to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseEntitySynonym.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.entitySynonymResults = (_value.entitySynonymResults || []).map(
      m => new FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseEntitySynonym.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get entitySynonymResults():
    | FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult[]
    | undefined {
    return this._entitySynonymResults;
  }
  set entitySynonymResults(
    value:
      | FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult[]
      | undefined
  ) {
    this._entitySynonymResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseEntitySynonym.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseEntitySynonym.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entitySynonymResults: (this.entitySynonymResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseEntitySynonym.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      entitySynonymResults: (this.entitySynonymResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseEntitySynonym {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseEntitySynonym
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    entitySynonymResults:
      | FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
   */
  export class EntitySynonymSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EntitySynonymSearchResult();
      EntitySynonymSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntitySynonymSearchResult) {
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.entityTypeName = _instance.entityTypeName || '';
      _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
      _instance.entityName = _instance.entityName || '';
      _instance.entityDisplayName = _instance.entityDisplayName || '';
      _instance.language = _instance.language || '';
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
      _instance: EntitySynonymSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.displayName = _reader.readString();
            break;
          case 3:
            _instance.entityTypeName = _reader.readString();
            break;
          case 4:
            _instance.entityTypeDisplayName = _reader.readString();
            break;
          case 5:
            _instance.entityName = _reader.readString();
            break;
          case 6:
            _instance.entityDisplayName = _reader.readString();
            break;
          case 7:
            _instance.language = _reader.readString();
            break;
          case 8:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 9:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 10:
            _instance.createdBy = _reader.readString();
            break;
          case 11:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      EntitySynonymSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EntitySynonymSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(2, _instance.displayName);
      }
      if (_instance.entityTypeName) {
        _writer.writeString(3, _instance.entityTypeName);
      }
      if (_instance.entityTypeDisplayName) {
        _writer.writeString(4, _instance.entityTypeDisplayName);
      }
      if (_instance.entityName) {
        _writer.writeString(5, _instance.entityName);
      }
      if (_instance.entityDisplayName) {
        _writer.writeString(6, _instance.entityDisplayName);
      }
      if (_instance.language) {
        _writer.writeString(7, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          8,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          9,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(10, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(11, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _displayName: string;
    private _entityTypeName: string;
    private _entityTypeDisplayName: string;
    private _entityName: string;
    private _entityDisplayName: string;
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntitySynonymSearchResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntitySynonymSearchResult.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.entityTypeName = _value.entityTypeName;
      this.entityTypeDisplayName = _value.entityTypeDisplayName;
      this.entityName = _value.entityName;
      this.entityDisplayName = _value.entityDisplayName;
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      EntitySynonymSearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get displayName(): string {
      return this._displayName;
    }
    set displayName(value: string) {
      this._displayName = value;
    }
    get entityTypeName(): string {
      return this._entityTypeName;
    }
    set entityTypeName(value: string) {
      this._entityTypeName = value;
    }
    get entityTypeDisplayName(): string {
      return this._entityTypeDisplayName;
    }
    set entityTypeDisplayName(value: string) {
      this._entityTypeDisplayName = value;
    }
    get entityName(): string {
      return this._entityName;
    }
    set entityName(value: string) {
      this._entityName = value;
    }
    get entityDisplayName(): string {
      return this._entityDisplayName;
    }
    set entityDisplayName(value: string) {
      this._entityDisplayName = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      EntitySynonymSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntitySynonymSearchResult.AsObject {
      return {
        name: this.name,
        displayName: this.displayName,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        entityName: this.entityName,
        entityDisplayName: this.entityDisplayName,
        language: this.language,
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
    ): EntitySynonymSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        displayName: this.displayName,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        entityName: this.entityName,
        entityDisplayName: this.entityDisplayName,
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module EntitySynonymSearchResult {
    /**
     * Standard JavaScript object representation for EntitySynonymSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntent implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntent();
    FullTextSearchResponseIntent.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntent) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentResults = _instance.intentResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntent.IntentSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntent.IntentSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentResults = _instance.intentResults || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntent,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.intentResults && _instance.intentResults.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentResults as any,
        FullTextSearchResponseIntent.IntentSearchResult.serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentResults?: FullTextSearchResponseIntent.IntentSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntent to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntent.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentResults = (_value.intentResults || []).map(
      m => new FullTextSearchResponseIntent.IntentSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntent.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentResults():
    | FullTextSearchResponseIntent.IntentSearchResult[]
    | undefined {
    return this._intentResults;
  }
  set intentResults(
    value: FullTextSearchResponseIntent.IntentSearchResult[] | undefined
  ) {
    this._intentResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntent.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentResults: (this.intentResults || []).map(m => m.toObject()),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntent.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentResults: (this.intentResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntent {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntent
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentResults:
      | FullTextSearchResponseIntent.IntentSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult
   */
  export class IntentSearchResult implements GrpcMessage {
    static id = 'ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentSearchResult();
      IntentSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentSearchResult) {
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.domainName = _instance.domainName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.displayName = _reader.readString();
            break;
          case 3:
            _instance.domainName = _reader.readString();
            break;
          case 4:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 5:
            _instance.language = _reader.readString();
            break;
          case 6:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.createdBy = _reader.readString();
            break;
          case 9:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(2, _instance.displayName);
      }
      if (_instance.domainName) {
        _writer.writeString(3, _instance.domainName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(4, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(5, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          6,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          7,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(8, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(9, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _displayName: string;
    private _domainName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentSearchResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentSearchResult.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.domainName = _value.domainName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentSearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get displayName(): string {
      return this._displayName;
    }
    set displayName(value: string) {
      this._displayName = value;
    }
    get domainName(): string {
      return this._domainName;
    }
    set domainName(value: string) {
      this._domainName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentSearchResult.AsObject {
      return {
        name: this.name,
        displayName: this.displayName,
        domainName: this.domainName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        displayName: this.displayName,
        domainName: this.domainName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentSearchResult {
    /**
     * Standard JavaScript object representation for IntentSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentContextIn implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentContextIn';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentContextIn();
    FullTextSearchResponseIntentContextIn.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentContextIn) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentContextInResults = _instance.intentContextInResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentContextIn,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentContextIn.IntentContextInSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentContextInResults =
            _instance.intentContextInResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentContextIn.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentContextIn,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.intentContextInResults &&
      _instance.intentContextInResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentContextInResults as any,
        FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentContextInResults?: FullTextSearchResponseIntentContextIn.IntentContextInSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentContextIn to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentContextIn.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentContextInResults = (_value.intentContextInResults || []).map(
      m =>
        new FullTextSearchResponseIntentContextIn.IntentContextInSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentContextIn.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentContextInResults():
    | FullTextSearchResponseIntentContextIn.IntentContextInSearchResult[]
    | undefined {
    return this._intentContextInResults;
  }
  set intentContextInResults(
    value:
      | FullTextSearchResponseIntentContextIn.IntentContextInSearchResult[]
      | undefined
  ) {
    this._intentContextInResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentContextIn.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentContextIn.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentContextInResults: (this.intentContextInResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentContextIn.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentContextInResults: (this.intentContextInResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentContextIn {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentContextIn
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentContextInResults:
      | FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
   */
  export class IntentContextInSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentContextInSearchResult();
      IntentContextInSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentContextInSearchResult) {
      _instance.name = _instance.name || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentContextInSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.intentName = _reader.readString();
            break;
          case 3:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 4:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 5:
            _instance.language = _reader.readString();
            break;
          case 6:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.createdBy = _reader.readString();
            break;
          case 9:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentContextInSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentContextInSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.intentName) {
        _writer.writeString(2, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(3, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(4, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(5, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          6,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          7,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(8, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(9, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentContextInSearchResult to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<IntentContextInSearchResult.AsObject>
    ) {
      _value = _value || {};
      this.name = _value.name;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentContextInSearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentContextInSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentContextInSearchResult.AsObject {
      return {
        name: this.name,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentContextInSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentContextInSearchResult {
    /**
     * Standard JavaScript object representation for IntentContextInSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentContextOut implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentContextOut';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentContextOut();
    FullTextSearchResponseIntentContextOut.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentContextOut) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentContextOutResults = _instance.intentContextOutResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentContextOut,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentContextOutResults =
            _instance.intentContextOutResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentContextOut.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentContextOut,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.intentContextOutResults &&
      _instance.intentContextOutResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentContextOutResults as any,
        FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentContextOutResults?: FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentContextOut to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentContextOut.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentContextOutResults = (_value.intentContextOutResults || []).map(
      m =>
        new FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult(
          m
        )
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentContextOut.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentContextOutResults():
    | FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult[]
    | undefined {
    return this._intentContextOutResults;
  }
  set intentContextOutResults(
    value:
      | FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult[]
      | undefined
  ) {
    this._intentContextOutResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentContextOut.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentContextOut.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentContextOutResults: (this.intentContextOutResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentContextOut.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentContextOutResults: (this.intentContextOutResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentContextOut {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentContextOut
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentContextOutResults:
      | FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
   */
  export class IntentContextOutSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentContextOutSearchResult();
      IntentContextOutSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentContextOutSearchResult) {
      _instance.name = _instance.name || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentContextOutSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.intentName = _reader.readString();
            break;
          case 3:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 4:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 5:
            _instance.language = _reader.readString();
            break;
          case 6:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.createdBy = _reader.readString();
            break;
          case 9:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentContextOutSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentContextOutSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.intentName) {
        _writer.writeString(2, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(3, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(4, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(5, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          6,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          7,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(8, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(9, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentContextOutSearchResult to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<IntentContextOutSearchResult.AsObject>
    ) {
      _value = _value || {};
      this.name = _value.name;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentContextOutSearchResult.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentContextOutSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentContextOutSearchResult.AsObject {
      return {
        name: this.name,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentContextOutSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentContextOutSearchResult {
    /**
     * Standard JavaScript object representation for IntentContextOutSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentUsersays implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentUsersays';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentUsersays();
    FullTextSearchResponseIntentUsersays.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentUsersays) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentUsersaysResults = _instance.intentUsersaysResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentUsersays,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentUsersaysResults =
            _instance.intentUsersaysResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentUsersays.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentUsersays,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.intentUsersaysResults &&
      _instance.intentUsersaysResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentUsersaysResults as any,
        FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentUsersaysResults?: FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentUsersays to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentUsersays.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentUsersaysResults = (_value.intentUsersaysResults || []).map(
      m =>
        new FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentUsersays.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentUsersaysResults():
    | FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult[]
    | undefined {
    return this._intentUsersaysResults;
  }
  set intentUsersaysResults(
    value:
      | FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult[]
      | undefined
  ) {
    this._intentUsersaysResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentUsersays.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentUsersays.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentUsersaysResults: (this.intentUsersaysResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentUsersays.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentUsersaysResults: (this.intentUsersaysResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentUsersays {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentUsersays
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentUsersaysResults:
      | FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
   */
  export class IntentUsersaysSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentUsersaysSearchResult();
      IntentUsersaysSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentUsersaysSearchResult) {
      _instance.name = _instance.name || '';
      _instance.text = _instance.text || '';
      _instance.textAsEntityTypes = _instance.textAsEntityTypes || '';
      _instance.textAsEntityValues = _instance.textAsEntityValues || '';
      _instance.type = _instance.type || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentUsersaysSearchResult,
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
            _instance.textAsEntityTypes = _reader.readString();
            break;
          case 4:
            _instance.textAsEntityValues = _reader.readString();
            break;
          case 5:
            _instance.type = _reader.readString();
            break;
          case 6:
            _instance.intentName = _reader.readString();
            break;
          case 7:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 8:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 9:
            _instance.language = _reader.readString();
            break;
          case 10:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 11:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 12:
            _instance.createdBy = _reader.readString();
            break;
          case 13:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentUsersaysSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentUsersaysSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.text) {
        _writer.writeString(2, _instance.text);
      }
      if (_instance.textAsEntityTypes) {
        _writer.writeString(3, _instance.textAsEntityTypes);
      }
      if (_instance.textAsEntityValues) {
        _writer.writeString(4, _instance.textAsEntityValues);
      }
      if (_instance.type) {
        _writer.writeString(5, _instance.type);
      }
      if (_instance.intentName) {
        _writer.writeString(6, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(7, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(8, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(9, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          10,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          11,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(12, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(13, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _text: string;
    private _textAsEntityTypes: string;
    private _textAsEntityValues: string;
    private _type: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentUsersaysSearchResult to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<IntentUsersaysSearchResult.AsObject>
    ) {
      _value = _value || {};
      this.name = _value.name;
      this.text = _value.text;
      this.textAsEntityTypes = _value.textAsEntityTypes;
      this.textAsEntityValues = _value.textAsEntityValues;
      this.type = _value.type;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentUsersaysSearchResult.refineValues(this);
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
    get textAsEntityTypes(): string {
      return this._textAsEntityTypes;
    }
    set textAsEntityTypes(value: string) {
      this._textAsEntityTypes = value;
    }
    get textAsEntityValues(): string {
      return this._textAsEntityValues;
    }
    set textAsEntityValues(value: string) {
      this._textAsEntityValues = value;
    }
    get type(): string {
      return this._type;
    }
    set type(value: string) {
      this._type = value;
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentUsersaysSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentUsersaysSearchResult.AsObject {
      return {
        name: this.name,
        text: this.text,
        textAsEntityTypes: this.textAsEntityTypes,
        textAsEntityValues: this.textAsEntityValues,
        type: this.type,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentUsersaysSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        text: this.text,
        textAsEntityTypes: this.textAsEntityTypes,
        textAsEntityValues: this.textAsEntityValues,
        type: this.type,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentUsersaysSearchResult {
    /**
     * Standard JavaScript object representation for IntentUsersaysSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentTags implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentTags';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentTags();
    FullTextSearchResponseIntentTags.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentTags) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentTagsResults = _instance.intentTagsResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentTags,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentTags.IntentTagsSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentTags.IntentTagsSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentTagsResults =
            _instance.intentTagsResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentTags.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentTags,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.intentTagsResults && _instance.intentTagsResults.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentTagsResults as any,
        FullTextSearchResponseIntentTags.IntentTagsSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentTagsResults?: FullTextSearchResponseIntentTags.IntentTagsSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentTags to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentTags.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentTagsResults = (_value.intentTagsResults || []).map(
      m => new FullTextSearchResponseIntentTags.IntentTagsSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentTags.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentTagsResults():
    | FullTextSearchResponseIntentTags.IntentTagsSearchResult[]
    | undefined {
    return this._intentTagsResults;
  }
  set intentTagsResults(
    value: FullTextSearchResponseIntentTags.IntentTagsSearchResult[] | undefined
  ) {
    this._intentTagsResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentTags.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentTags.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentTagsResults: (this.intentTagsResults || []).map(m => m.toObject()),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentTags.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentTagsResults: (this.intentTagsResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentTags {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentTags
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentTagsResults:
      | FullTextSearchResponseIntentTags.IntentTagsSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult
   */
  export class IntentTagsSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentTagsSearchResult();
      IntentTagsSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentTagsSearchResult) {
      _instance.name = _instance.name || '';
      _instance.text = _instance.text || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentTagsSearchResult,
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
            _instance.intentName = _reader.readString();
            break;
          case 4:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 5:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 6:
            _instance.language = _reader.readString();
            break;
          case 7:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 9:
            _instance.createdBy = _reader.readString();
            break;
          case 10:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentTagsSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentTagsSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.text) {
        _writer.writeString(2, _instance.text);
      }
      if (_instance.intentName) {
        _writer.writeString(3, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(4, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(5, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(6, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          7,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          8,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(9, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(10, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _text: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentTagsSearchResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentTagsSearchResult.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.text = _value.text;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentTagsSearchResult.refineValues(this);
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
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentTagsSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentTagsSearchResult.AsObject {
      return {
        name: this.name,
        text: this.text,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentTagsSearchResult.AsProtobufJSON {
      return {
        name: this.name,
        text: this.text,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentTagsSearchResult {
    /**
     * Standard JavaScript object representation for IntentTagsSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentResponse();
    FullTextSearchResponseIntentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentResponse) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentResponseResults = _instance.intentResponseResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentResponse.IntentResponseSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentResponse.IntentResponseSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentResponseResults =
            _instance.intentResponseResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.intentResponseResults &&
      _instance.intentResponseResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentResponseResults as any,
        FullTextSearchResponseIntentResponse.IntentResponseSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentResponseResults?: FullTextSearchResponseIntentResponse.IntentResponseSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentResponse.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentResponseResults = (_value.intentResponseResults || []).map(
      m =>
        new FullTextSearchResponseIntentResponse.IntentResponseSearchResult(m)
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentResponse.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentResponseResults():
    | FullTextSearchResponseIntentResponse.IntentResponseSearchResult[]
    | undefined {
    return this._intentResponseResults;
  }
  set intentResponseResults(
    value:
      | FullTextSearchResponseIntentResponse.IntentResponseSearchResult[]
      | undefined
  ) {
    this._intentResponseResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentResponse.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentResponseResults: (this.intentResponseResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentResponse.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentResponseResults: (this.intentResponseResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentResponse {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentResponse
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentResponseResults:
      | FullTextSearchResponseIntentResponse.IntentResponseSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult
   */
  export class IntentResponseSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentResponseSearchResult();
      IntentResponseSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentResponseSearchResult) {
      _instance.text = _instance.text || '';
      _instance.platform = _instance.platform || '';
      _instance.responseType = _instance.responseType || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentResponseSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.text = _reader.readString();
            break;
          case 2:
            _instance.platform = _reader.readString();
            break;
          case 3:
            _instance.responseType = _reader.readString();
            break;
          case 4:
            _instance.intentName = _reader.readString();
            break;
          case 5:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 6:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 7:
            _instance.language = _reader.readString();
            break;
          case 8:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 9:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 10:
            _instance.createdBy = _reader.readString();
            break;
          case 11:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentResponseSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentResponseSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.text) {
        _writer.writeString(1, _instance.text);
      }
      if (_instance.platform) {
        _writer.writeString(2, _instance.platform);
      }
      if (_instance.responseType) {
        _writer.writeString(3, _instance.responseType);
      }
      if (_instance.intentName) {
        _writer.writeString(4, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(5, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(6, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(7, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          8,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          9,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(10, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(11, _instance.modifiedBy);
      }
    }

    private _text: string;
    private _platform: string;
    private _responseType: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentResponseSearchResult to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<IntentResponseSearchResult.AsObject>
    ) {
      _value = _value || {};
      this.text = _value.text;
      this.platform = _value.platform;
      this.responseType = _value.responseType;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentResponseSearchResult.refineValues(this);
    }
    get text(): string {
      return this._text;
    }
    set text(value: string) {
      this._text = value;
    }
    get platform(): string {
      return this._platform;
    }
    set platform(value: string) {
      this._platform = value;
    }
    get responseType(): string {
      return this._responseType;
    }
    set responseType(value: string) {
      this._responseType = value;
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentResponseSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentResponseSearchResult.AsObject {
      return {
        text: this.text,
        platform: this.platform,
        responseType: this.responseType,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentResponseSearchResult.AsProtobufJSON {
      return {
        text: this.text,
        platform: this.platform,
        responseType: this.responseType,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentResponseSearchResult {
    /**
     * Standard JavaScript object representation for IntentResponseSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class FullTextSearchResponseIntentParameters implements GrpcMessage {
  static id = 'ondewo.nlu.FullTextSearchResponseIntentParameters';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullTextSearchResponseIntentParameters();
    FullTextSearchResponseIntentParameters.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullTextSearchResponseIntentParameters) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentParametersResults = _instance.intentParametersResults || [];
    _instance.term = _instance.term || '';
    _instance.elasticQuery = _instance.elasticQuery || '';
    _instance.time = _instance.time || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullTextSearchResponseIntentParameters,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new FullTextSearchResponseIntentParameters.IntentParametersSearchResult();
          _reader.readMessage(
            messageInitializer3,
            FullTextSearchResponseIntentParameters.IntentParametersSearchResult
              .deserializeBinaryFromReader
          );
          (_instance.intentParametersResults =
            _instance.intentParametersResults || []).push(messageInitializer3);
          break;
        case 4:
          _instance.term = _reader.readString();
          break;
        case 5:
          _instance.elasticQuery = _reader.readString();
          break;
        case 6:
          _instance.time = _reader.readFloat();
          break;
        case 7:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FullTextSearchResponseIntentParameters.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullTextSearchResponseIntentParameters,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (
      _instance.intentParametersResults &&
      _instance.intentParametersResults.length
    ) {
      _writer.writeRepeatedMessage(
        3,
        _instance.intentParametersResults as any,
        FullTextSearchResponseIntentParameters.IntentParametersSearchResult
          .serializeBinaryToWriter
      );
    }
    if (_instance.term) {
      _writer.writeString(4, _instance.term);
    }
    if (_instance.elasticQuery) {
      _writer.writeString(5, _instance.elasticQuery);
    }
    if (_instance.time) {
      _writer.writeFloat(6, _instance.time);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(7, _instance.nextPageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentParametersResults?: FullTextSearchResponseIntentParameters.IntentParametersSearchResult[];
  private _term: string;
  private _elasticQuery: string;
  private _time: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullTextSearchResponseIntentParameters to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<FullTextSearchResponseIntentParameters.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentParametersResults = (_value.intentParametersResults || []).map(
      m =>
        new FullTextSearchResponseIntentParameters.IntentParametersSearchResult(
          m
        )
    );
    this.term = _value.term;
    this.elasticQuery = _value.elasticQuery;
    this.time = _value.time;
    this.nextPageToken = _value.nextPageToken;
    FullTextSearchResponseIntentParameters.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentParametersResults():
    | FullTextSearchResponseIntentParameters.IntentParametersSearchResult[]
    | undefined {
    return this._intentParametersResults;
  }
  set intentParametersResults(
    value:
      | FullTextSearchResponseIntentParameters.IntentParametersSearchResult[]
      | undefined
  ) {
    this._intentParametersResults = value;
  }
  get term(): string {
    return this._term;
  }
  set term(value: string) {
    this._term = value;
  }
  get elasticQuery(): string {
    return this._elasticQuery;
  }
  set elasticQuery(value: string) {
    this._elasticQuery = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
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
    FullTextSearchResponseIntentParameters.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullTextSearchResponseIntentParameters.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentParametersResults: (this.intentParametersResults || []).map(m =>
        m.toObject()
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
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
  ): FullTextSearchResponseIntentParameters.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentParametersResults: (this.intentParametersResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      term: this.term,
      elasticQuery: this.elasticQuery,
      time: this.time,
      nextPageToken: this.nextPageToken
    };
  }
}
export module FullTextSearchResponseIntentParameters {
  /**
   * Standard JavaScript object representation for FullTextSearchResponseIntentParameters
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentParametersResults:
      | FullTextSearchResponseIntentParameters.IntentParametersSearchResult.AsProtobufJSON[]
      | null;
    term: string;
    elasticQuery: string;
    time: number;
    nextPageToken: string;
  }

  /**
   * Message implementation for ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult
   */
  export class IntentParametersSearchResult implements GrpcMessage {
    static id =
      'ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new IntentParametersSearchResult();
      IntentParametersSearchResult.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentParametersSearchResult) {
      _instance.parameterName = _instance.parameterName || '';
      _instance.parameterDisplayName = _instance.parameterDisplayName || '';
      _instance.intentName = _instance.intentName || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.tags = _instance.tags || [];
      _instance.language = _instance.language || '';
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
      _instance: IntentParametersSearchResult,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.parameterName = _reader.readString();
            break;
          case 2:
            _instance.parameterDisplayName = _reader.readString();
            break;
          case 3:
            _instance.intentName = _reader.readString();
            break;
          case 4:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 5:
            (_instance.tags = _instance.tags || []).push(_reader.readString());
            break;
          case 6:
            _instance.language = _reader.readString();
            break;
          case 7:
            _instance.createdAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.modifiedAt = new googleProtobuf003.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf003.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 9:
            _instance.createdBy = _reader.readString();
            break;
          case 10:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      IntentParametersSearchResult.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: IntentParametersSearchResult,
      _writer: BinaryWriter
    ) {
      if (_instance.parameterName) {
        _writer.writeString(1, _instance.parameterName);
      }
      if (_instance.parameterDisplayName) {
        _writer.writeString(2, _instance.parameterDisplayName);
      }
      if (_instance.intentName) {
        _writer.writeString(3, _instance.intentName);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(4, _instance.intentDisplayName);
      }
      if (_instance.tags && _instance.tags.length) {
        _writer.writeRepeatedString(5, _instance.tags);
      }
      if (_instance.language) {
        _writer.writeString(6, _instance.language);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          7,
          _instance.createdAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          8,
          _instance.modifiedAt as any,
          googleProtobuf003.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(9, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(10, _instance.modifiedBy);
      }
    }

    private _parameterName: string;
    private _parameterDisplayName: string;
    private _intentName: string;
    private _intentDisplayName: string;
    private _tags: string[];
    private _language: string;
    private _createdAt?: googleProtobuf003.Timestamp;
    private _modifiedAt?: googleProtobuf003.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentParametersSearchResult to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<IntentParametersSearchResult.AsObject>
    ) {
      _value = _value || {};
      this.parameterName = _value.parameterName;
      this.parameterDisplayName = _value.parameterDisplayName;
      this.intentName = _value.intentName;
      this.intentDisplayName = _value.intentDisplayName;
      this.tags = (_value.tags || []).slice();
      this.language = _value.language;
      this.createdAt = _value.createdAt
        ? new googleProtobuf003.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf003.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      IntentParametersSearchResult.refineValues(this);
    }
    get parameterName(): string {
      return this._parameterName;
    }
    set parameterName(value: string) {
      this._parameterName = value;
    }
    get parameterDisplayName(): string {
      return this._parameterDisplayName;
    }
    set parameterDisplayName(value: string) {
      this._parameterDisplayName = value;
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get tags(): string[] {
      return this._tags;
    }
    set tags(value: string[]) {
      this._tags = value;
    }
    get language(): string {
      return this._language;
    }
    set language(value: string) {
      this._language = value;
    }
    get createdAt(): googleProtobuf003.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf003.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf003.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf003.Timestamp | undefined) {
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
      IntentParametersSearchResult.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentParametersSearchResult.AsObject {
      return {
        parameterName: this.parameterName,
        parameterDisplayName: this.parameterDisplayName,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
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
    ): IntentParametersSearchResult.AsProtobufJSON {
      return {
        parameterName: this.parameterName,
        parameterDisplayName: this.parameterDisplayName,
        intentName: this.intentName,
        intentDisplayName: this.intentDisplayName,
        tags: (this.tags || []).slice(),
        language: this.language,
        createdAt: this.createdAt
          ? this.createdAt.toProtobufJSON(options)
          : null,
        modifiedAt: this.modifiedAt
          ? this.modifiedAt.toProtobufJSON(options)
          : null,
        createdBy: this.createdBy,
        modifiedBy: this.modifiedBy
      };
    }
  }
  export module IntentParametersSearchResult {
    /**
     * Standard JavaScript object representation for IntentParametersSearchResult
     */
    export interface AsObject {
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
    export interface AsProtobufJSON {
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
export class ReindexAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ReindexAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReindexAgentRequest();
    ReindexAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReindexAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.branchName = _instance.branchName || '';
    _instance.indexTypes = _instance.indexTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReindexAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.branchName = _reader.readString();
          break;
        case 3:
          _reader.readPackableEnumInto(
            (_instance.indexTypes = _instance.indexTypes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ReindexAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReindexAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.branchName) {
      _writer.writeString(2, _instance.branchName);
    }
    if (_instance.indexTypes && _instance.indexTypes.length) {
      _writer.writePackedEnum(3, _instance.indexTypes);
    }
  }

  private _parent: string;
  private _branchName: string;
  private _indexTypes: FullTextSearchRequest.QueryType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReindexAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReindexAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.branchName = _value.branchName;
    this.indexTypes = (_value.indexTypes || []).slice();
    ReindexAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get branchName(): string {
    return this._branchName;
  }
  set branchName(value: string) {
    this._branchName = value;
  }
  get indexTypes(): FullTextSearchRequest.QueryType[] {
    return this._indexTypes;
  }
  set indexTypes(value: FullTextSearchRequest.QueryType[]) {
    this._indexTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReindexAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReindexAgentRequest.AsObject {
    return {
      parent: this.parent,
      branchName: this.branchName,
      indexTypes: (this.indexTypes || []).slice()
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
  ): ReindexAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      branchName: this.branchName,
      indexTypes: (this.indexTypes || []).map(
        v => FullTextSearchRequest.QueryType[v]
      )
    };
  }
}
export module ReindexAgentRequest {
  /**
   * Standard JavaScript object representation for ReindexAgentRequest
   */
  export interface AsObject {
    parent: string;
    branchName: string;
    indexTypes: FullTextSearchRequest.QueryType[];
  }

  /**
   * Protobuf JSON representation for ReindexAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    branchName: string;
    indexTypes: string[];
  }
}
