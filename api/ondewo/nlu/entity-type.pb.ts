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
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleApi005 from '../../google/api/annotations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleRpc008 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
export enum EntityTypeView {
  ENTITY_TYPE_VIEW_UNSPECIFIED = 0,
  ENTITY_TYPE_VIEW_FULL = 1,
  ENTITY_TYPE_VIEW_PARTIAL = 2,
  ENTITY_TYPE_VIEW_SHALLOW = 3,
  ENTITY_TYPE_VIEW_MINIMUM = 4
}
export enum EntityTypeCategory {
  ALL_ENTITY_TYPES = 0,
  DEFAULT_ENTITY_TYPES = 1,
  USER_DEFINED_ENTITY_TYPES = 2
}
/**
 * Message implementation for ondewo.nlu.EntityType
 */
export class EntityType implements GrpcMessage {
  static id = 'ondewo.nlu.EntityType';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityType();
    EntityType.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityType) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.kind = _instance.kind || 0;
    _instance.autoExpansionMode = _instance.autoExpansionMode || 0;
    _instance.entities = _instance.entities || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.entityCount = _instance.entityCount || 0;
    _instance.status = _instance.status || 0;
    _instance.synonymCount = _instance.synonymCount || 0;
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
    _instance: EntityType,
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
          _instance.kind = _reader.readEnum();
          break;
        case 4:
          _instance.autoExpansionMode = _reader.readEnum();
          break;
        case 6:
          const messageInitializer6 = new EntityType.Entity();
          _reader.readMessage(
            messageInitializer6,
            EntityType.Entity.deserializeBinaryFromReader
          );
          (_instance.entities = _instance.entities || []).push(
            messageInitializer6
          );
          break;
        case 10:
          _instance.nextPageToken = _reader.readString();
          break;
        case 11:
          _instance.entityCount = _reader.readInt32();
          break;
        case 12:
          _instance.status = _reader.readEnum();
          break;
        case 13:
          _instance.synonymCount = _reader.readInt32();
          break;
        case 14:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.createdBy = _reader.readString();
          break;
        case 17:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityType.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: EntityType, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.kind) {
      _writer.writeEnum(3, _instance.kind);
    }
    if (_instance.autoExpansionMode) {
      _writer.writeEnum(4, _instance.autoExpansionMode);
    }
    if (_instance.entities && _instance.entities.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.entities as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(10, _instance.nextPageToken);
    }
    if (_instance.entityCount) {
      _writer.writeInt32(11, _instance.entityCount);
    }
    if (_instance.status) {
      _writer.writeEnum(12, _instance.status);
    }
    if (_instance.synonymCount) {
      _writer.writeInt32(13, _instance.synonymCount);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        14,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        15,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(16, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(17, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _kind: EntityType.Kind;
  private _autoExpansionMode: EntityType.AutoExpansionMode;
  private _entities?: EntityType.Entity[];
  private _nextPageToken: string;
  private _entityCount: number;
  private _status: EntityType.EntityTypeStatus;
  private _synonymCount: number;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityType to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityType.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.kind = _value.kind;
    this.autoExpansionMode = _value.autoExpansionMode;
    this.entities = (_value.entities || []).map(m => new EntityType.Entity(m));
    this.nextPageToken = _value.nextPageToken;
    this.entityCount = _value.entityCount;
    this.status = _value.status;
    this.synonymCount = _value.synonymCount;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    EntityType.refineValues(this);
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
  get kind(): EntityType.Kind {
    return this._kind;
  }
  set kind(value: EntityType.Kind) {
    this._kind = value;
  }
  get autoExpansionMode(): EntityType.AutoExpansionMode {
    return this._autoExpansionMode;
  }
  set autoExpansionMode(value: EntityType.AutoExpansionMode) {
    this._autoExpansionMode = value;
  }
  get entities(): EntityType.Entity[] | undefined {
    return this._entities;
  }
  set entities(value: EntityType.Entity[] | undefined) {
    this._entities = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get entityCount(): number {
    return this._entityCount;
  }
  set entityCount(value: number) {
    this._entityCount = value;
  }
  get status(): EntityType.EntityTypeStatus {
    return this._status;
  }
  set status(value: EntityType.EntityTypeStatus) {
    this._status = value;
  }
  get synonymCount(): number {
    return this._synonymCount;
  }
  set synonymCount(value: number) {
    this._synonymCount = value;
  }
  get createdAt(): googleProtobuf004.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf004.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf004.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf004.Timestamp | undefined) {
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
    EntityType.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityType.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      kind: this.kind,
      autoExpansionMode: this.autoExpansionMode,
      entities: (this.entities || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      entityCount: this.entityCount,
      status: this.status,
      synonymCount: this.synonymCount,
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
  ): EntityType.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      kind:
        EntityType.Kind[
          this.kind === null || this.kind === undefined ? 0 : this.kind
        ],
      autoExpansionMode:
        EntityType.AutoExpansionMode[
          this.autoExpansionMode === null ||
          this.autoExpansionMode === undefined
            ? 0
            : this.autoExpansionMode
        ],
      entities: (this.entities || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      entityCount: this.entityCount,
      status:
        EntityType.EntityTypeStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      synonymCount: this.synonymCount,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module EntityType {
  /**
   * Standard JavaScript object representation for EntityType
   */
  export interface AsObject {
    name: string;
    displayName: string;
    kind: EntityType.Kind;
    autoExpansionMode: EntityType.AutoExpansionMode;
    entities?: EntityType.Entity.AsObject[];
    nextPageToken: string;
    entityCount: number;
    status: EntityType.EntityTypeStatus;
    synonymCount: number;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for EntityType
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    kind: string;
    autoExpansionMode: string;
    entities: EntityType.Entity.AsProtobufJSON[] | null;
    nextPageToken: string;
    entityCount: number;
    status: string;
    synonymCount: number;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
  export enum Kind {
    KIND_UNSPECIFIED = 0,
    KIND_MAP = 1,
    KIND_LIST = 2
  }
  export enum EntityTypeStatus {
    ACTIVE = 0,
    INACTIVE = 1
  }
  export enum AutoExpansionMode {
    AUTO_EXPANSION_MODE_UNSPECIFIED = 0,
    AUTO_EXPANSION_MODE_DEFAULT = 1
  }
  /**
   * Message implementation for ondewo.nlu.EntityType.Entity
   */
  export class Entity implements GrpcMessage {
    static id = 'ondewo.nlu.EntityType.Entity';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Entity();
      Entity.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Entity) {
      _instance.value = _instance.value || '';
      _instance.synonyms = _instance.synonyms || [];
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.synonymCount = _instance.synonymCount || 0;
      _instance.languageCode = _instance.languageCode || '';
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
      _instance: Entity,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.value = _reader.readString();
            break;
          case 2:
            (_instance.synonyms = _instance.synonyms || []).push(
              _reader.readString()
            );
            break;
          case 3:
            _instance.name = _reader.readString();
            break;
          case 4:
            _instance.displayName = _reader.readString();
            break;
          case 5:
            _instance.synonymCount = _reader.readInt32();
            break;
          case 6:
            _instance.languageCode = _reader.readString();
            break;
          case 7:
            _instance.createdAt = new googleProtobuf004.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf004.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.modifiedAt = new googleProtobuf004.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf004.Timestamp.deserializeBinaryFromReader
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

      Entity.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter) {
      if (_instance.value) {
        _writer.writeString(1, _instance.value);
      }
      if (_instance.synonyms && _instance.synonyms.length) {
        _writer.writeRepeatedString(2, _instance.synonyms);
      }
      if (_instance.name) {
        _writer.writeString(3, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(4, _instance.displayName);
      }
      if (_instance.synonymCount) {
        _writer.writeInt32(5, _instance.synonymCount);
      }
      if (_instance.languageCode) {
        _writer.writeString(6, _instance.languageCode);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          7,
          _instance.createdAt as any,
          googleProtobuf004.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          8,
          _instance.modifiedAt as any,
          googleProtobuf004.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(9, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(10, _instance.modifiedBy);
      }
    }

    private _value: string;
    private _synonyms: string[];
    private _name: string;
    private _displayName: string;
    private _synonymCount: number;
    private _languageCode: string;
    private _createdAt?: googleProtobuf004.Timestamp;
    private _modifiedAt?: googleProtobuf004.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Entity to deeply clone from
     */
    constructor(_value?: RecursivePartial<Entity.AsObject>) {
      _value = _value || {};
      this.value = _value.value;
      this.synonyms = (_value.synonyms || []).slice();
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.synonymCount = _value.synonymCount;
      this.languageCode = _value.languageCode;
      this.createdAt = _value.createdAt
        ? new googleProtobuf004.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf004.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      Entity.refineValues(this);
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }
    get synonyms(): string[] {
      return this._synonyms;
    }
    set synonyms(value: string[]) {
      this._synonyms = value;
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
    get synonymCount(): number {
      return this._synonymCount;
    }
    set synonymCount(value: number) {
      this._synonymCount = value;
    }
    get languageCode(): string {
      return this._languageCode;
    }
    set languageCode(value: string) {
      this._languageCode = value;
    }
    get createdAt(): googleProtobuf004.Timestamp | undefined {
      return this._createdAt;
    }
    set createdAt(value: googleProtobuf004.Timestamp | undefined) {
      this._createdAt = value;
    }
    get modifiedAt(): googleProtobuf004.Timestamp | undefined {
      return this._modifiedAt;
    }
    set modifiedAt(value: googleProtobuf004.Timestamp | undefined) {
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
      Entity.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Entity.AsObject {
      return {
        value: this.value,
        synonyms: (this.synonyms || []).slice(),
        name: this.name,
        displayName: this.displayName,
        synonymCount: this.synonymCount,
        languageCode: this.languageCode,
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
    ): Entity.AsProtobufJSON {
      return {
        value: this.value,
        synonyms: (this.synonyms || []).slice(),
        name: this.name,
        displayName: this.displayName,
        synonymCount: this.synonymCount,
        languageCode: this.languageCode,
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
  export module Entity {
    /**
     * Standard JavaScript object representation for Entity
     */
    export interface AsObject {
      value: string;
      synonyms: string[];
      name: string;
      displayName: string;
      synonymCount: number;
      languageCode: string;
      createdAt?: googleProtobuf004.Timestamp.AsObject;
      modifiedAt?: googleProtobuf004.Timestamp.AsObject;
      createdBy: string;
      modifiedBy: string;
    }

    /**
     * Protobuf JSON representation for Entity
     */
    export interface AsProtobufJSON {
      value: string;
      synonyms: string[];
      name: string;
      displayName: string;
      synonymCount: number;
      languageCode: string;
      createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
      modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
      createdBy: string;
      modifiedBy: string;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListEntityTypesRequest
 */
export class ListEntityTypesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListEntityTypesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListEntityTypesRequest();
    ListEntityTypesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListEntityTypesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.entityTypeView = _instance.entityTypeView || 0;
    _instance.filterByCategory = _instance.filterByCategory || 0;
    _instance.sortByField = _instance.sortByField || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListEntityTypesRequest,
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
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.entityTypeView = _reader.readEnum();
          break;
        case 6:
          _instance.filterByCategory = _reader.readEnum();
          break;
        case 7:
          _instance.sortByField = new EntityTypeSorting();
          _reader.readMessage(
            _instance.sortByField,
            EntityTypeSorting.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListEntityTypesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListEntityTypesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.entityTypeView) {
      _writer.writeEnum(5, _instance.entityTypeView);
    }
    if (_instance.filterByCategory) {
      _writer.writeEnum(6, _instance.filterByCategory);
    }
    if (_instance.sortByField) {
      _writer.writeMessage(
        7,
        _instance.sortByField as any,
        EntityTypeSorting.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _pageToken: string;
  private _entityTypeView: EntityTypeView;
  private _filterByCategory: EntityTypeCategory;
  private _sortByField?: EntityTypeSorting;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListEntityTypesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListEntityTypesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    this.entityTypeView = _value.entityTypeView;
    this.filterByCategory = _value.filterByCategory;
    this.sortByField = _value.sortByField
      ? new EntityTypeSorting(_value.sortByField)
      : undefined;
    ListEntityTypesRequest.refineValues(this);
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
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get entityTypeView(): EntityTypeView {
    return this._entityTypeView;
  }
  set entityTypeView(value: EntityTypeView) {
    this._entityTypeView = value;
  }
  get filterByCategory(): EntityTypeCategory {
    return this._filterByCategory;
  }
  set filterByCategory(value: EntityTypeCategory) {
    this._filterByCategory = value;
  }
  get sortByField(): EntityTypeSorting | undefined {
    return this._sortByField;
  }
  set sortByField(value: EntityTypeSorting | undefined) {
    this._sortByField = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListEntityTypesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListEntityTypesRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      entityTypeView: this.entityTypeView,
      filterByCategory: this.filterByCategory,
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
  ): ListEntityTypesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      entityTypeView:
        EntityTypeView[
          this.entityTypeView === null || this.entityTypeView === undefined
            ? 0
            : this.entityTypeView
        ],
      filterByCategory:
        EntityTypeCategory[
          this.filterByCategory === null || this.filterByCategory === undefined
            ? 0
            : this.filterByCategory
        ],
      sortByField: this.sortByField
        ? this.sortByField.toProtobufJSON(options)
        : null
    };
  }
}
export module ListEntityTypesRequest {
  /**
   * Standard JavaScript object representation for ListEntityTypesRequest
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class ListEntityTypesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListEntityTypesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListEntityTypesResponse();
    ListEntityTypesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListEntityTypesResponse) {
    _instance.entityTypes = _instance.entityTypes || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListEntityTypesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityType();
          _reader.readMessage(
            messageInitializer1,
            EntityType.deserializeBinaryFromReader
          );
          (_instance.entityTypes = _instance.entityTypes || []).push(
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

    ListEntityTypesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListEntityTypesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypes && _instance.entityTypes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entityTypes as any,
        EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _entityTypes?: EntityType[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListEntityTypesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListEntityTypesResponse.AsObject>) {
    _value = _value || {};
    this.entityTypes = (_value.entityTypes || []).map(m => new EntityType(m));
    this.nextPageToken = _value.nextPageToken;
    ListEntityTypesResponse.refineValues(this);
  }
  get entityTypes(): EntityType[] | undefined {
    return this._entityTypes;
  }
  set entityTypes(value: EntityType[] | undefined) {
    this._entityTypes = value;
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
    ListEntityTypesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListEntityTypesResponse.AsObject {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toObject()),
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
  ): ListEntityTypesResponse.AsProtobufJSON {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListEntityTypesResponse {
  /**
   * Standard JavaScript object representation for ListEntityTypesResponse
   */
  export interface AsObject {
    entityTypes?: EntityType.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListEntityTypesResponse
   */
  export interface AsProtobufJSON {
    entityTypes: EntityType.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetEntityTypeRequest
 */
export class GetEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetEntityTypeRequest();
    GetEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetEntityTypeRequest) {
    _instance.name = _instance.name || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.entityTypeView = _instance.entityTypeView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.pageToken = _reader.readString();
          break;
        case 6:
          _instance.entityTypeView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(5, _instance.pageToken);
    }
    if (_instance.entityTypeView) {
      _writer.writeEnum(6, _instance.entityTypeView);
    }
  }

  private _name: string;
  private _languageCode: string;
  private _pageToken: string;
  private _entityTypeView: EntityTypeView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    this.entityTypeView = _value.entityTypeView;
    GetEntityTypeRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get entityTypeView(): EntityTypeView {
    return this._entityTypeView;
  }
  set entityTypeView(value: EntityTypeView) {
    this._entityTypeView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetEntityTypeRequest.AsObject {
    return {
      name: this.name,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      entityTypeView: this.entityTypeView
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
  ): GetEntityTypeRequest.AsProtobufJSON {
    return {
      name: this.name,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      entityTypeView:
        EntityTypeView[
          this.entityTypeView === null || this.entityTypeView === undefined
            ? 0
            : this.entityTypeView
        ]
    };
  }
}
export module GetEntityTypeRequest {
  /**
   * Standard JavaScript object representation for GetEntityTypeRequest
   */
  export interface AsObject {
    name: string;
    languageCode: string;
    pageToken: string;
    entityTypeView: EntityTypeView;
  }

  /**
   * Protobuf JSON representation for GetEntityTypeRequest
   */
  export interface AsProtobufJSON {
    name: string;
    languageCode: string;
    pageToken: string;
    entityTypeView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateEntityTypeRequest
 */
export class CreateEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateEntityTypeRequest();
    CreateEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateEntityTypeRequest) {
    _instance.parent = _instance.parent || '';
    _instance.entityType = _instance.entityType || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.entityTypeView = _instance.entityTypeView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.entityType = new EntityType();
          _reader.readMessage(
            _instance.entityType,
            EntityType.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 6:
          _instance.entityTypeView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.entityType) {
      _writer.writeMessage(
        2,
        _instance.entityType as any,
        EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.entityTypeView) {
      _writer.writeEnum(6, _instance.entityTypeView);
    }
  }

  private _parent: string;
  private _entityType?: EntityType;
  private _languageCode: string;
  private _entityTypeView: EntityTypeView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.entityType = _value.entityType
      ? new EntityType(_value.entityType)
      : undefined;
    this.languageCode = _value.languageCode;
    this.entityTypeView = _value.entityTypeView;
    CreateEntityTypeRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get entityType(): EntityType | undefined {
    return this._entityType;
  }
  set entityType(value: EntityType | undefined) {
    this._entityType = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get entityTypeView(): EntityTypeView {
    return this._entityTypeView;
  }
  set entityTypeView(value: EntityTypeView) {
    this._entityTypeView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateEntityTypeRequest.AsObject {
    return {
      parent: this.parent,
      entityType: this.entityType ? this.entityType.toObject() : undefined,
      languageCode: this.languageCode,
      entityTypeView: this.entityTypeView
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
  ): CreateEntityTypeRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      entityType: this.entityType
        ? this.entityType.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      entityTypeView:
        EntityTypeView[
          this.entityTypeView === null || this.entityTypeView === undefined
            ? 0
            : this.entityTypeView
        ]
    };
  }
}
export module CreateEntityTypeRequest {
  /**
   * Standard JavaScript object representation for CreateEntityTypeRequest
   */
  export interface AsObject {
    parent: string;
    entityType?: EntityType.AsObject;
    languageCode: string;
    entityTypeView: EntityTypeView;
  }

  /**
   * Protobuf JSON representation for CreateEntityTypeRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    entityType: EntityType.AsProtobufJSON | null;
    languageCode: string;
    entityTypeView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateEntityTypeRequest
 */
export class UpdateEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateEntityTypeRequest();
    UpdateEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateEntityTypeRequest) {
    _instance.entityType = _instance.entityType || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.entityTypeView = _instance.entityTypeView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityType = new EntityType();
          _reader.readMessage(
            _instance.entityType,
            EntityType.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.updateMask = new googleProtobuf002.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf002.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.entityTypeView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entityType) {
      _writer.writeMessage(
        1,
        _instance.entityType as any,
        EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        3,
        _instance.updateMask as any,
        googleProtobuf002.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.entityTypeView) {
      _writer.writeEnum(6, _instance.entityTypeView);
    }
  }

  private _entityType?: EntityType;
  private _languageCode: string;
  private _updateMask?: googleProtobuf002.FieldMask;
  private _entityTypeView: EntityTypeView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.entityType = _value.entityType
      ? new EntityType(_value.entityType)
      : undefined;
    this.languageCode = _value.languageCode;
    this.updateMask = _value.updateMask
      ? new googleProtobuf002.FieldMask(_value.updateMask)
      : undefined;
    this.entityTypeView = _value.entityTypeView;
    UpdateEntityTypeRequest.refineValues(this);
  }
  get entityType(): EntityType | undefined {
    return this._entityType;
  }
  set entityType(value: EntityType | undefined) {
    this._entityType = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get updateMask(): googleProtobuf002.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf002.FieldMask | undefined) {
    this._updateMask = value;
  }
  get entityTypeView(): EntityTypeView {
    return this._entityTypeView;
  }
  set entityTypeView(value: EntityTypeView) {
    this._entityTypeView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateEntityTypeRequest.AsObject {
    return {
      entityType: this.entityType ? this.entityType.toObject() : undefined,
      languageCode: this.languageCode,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      entityTypeView: this.entityTypeView
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
  ): UpdateEntityTypeRequest.AsProtobufJSON {
    return {
      entityType: this.entityType
        ? this.entityType.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      entityTypeView:
        EntityTypeView[
          this.entityTypeView === null || this.entityTypeView === undefined
            ? 0
            : this.entityTypeView
        ]
    };
  }
}
export module UpdateEntityTypeRequest {
  /**
   * Standard JavaScript object representation for UpdateEntityTypeRequest
   */
  export interface AsObject {
    entityType?: EntityType.AsObject;
    languageCode: string;
    updateMask?: googleProtobuf002.FieldMask.AsObject;
    entityTypeView: EntityTypeView;
  }

  /**
   * Protobuf JSON representation for UpdateEntityTypeRequest
   */
  export interface AsProtobufJSON {
    entityType: EntityType.AsProtobufJSON | null;
    languageCode: string;
    updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    entityTypeView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteEntityTypeRequest
 */
export class DeleteEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteEntityTypeRequest();
    DeleteEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteEntityTypeRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteEntityTypeRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteEntityTypeRequest.AsObject {
    return {
      name: this.name
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
  ): DeleteEntityTypeRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteEntityTypeRequest {
  /**
   * Standard JavaScript object representation for DeleteEntityTypeRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteEntityTypeRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesRequest
 */
export class BatchUpdateEntityTypesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateEntityTypesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateEntityTypesRequest();
    BatchUpdateEntityTypesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateEntityTypesRequest) {
    _instance.parent = _instance.parent || '';

    _instance.languageCode = _instance.languageCode || '';
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateEntityTypesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.entityTypeBatchUri = _reader.readString();
          break;
        case 3:
          _instance.entityTypeBatchInline = new EntityTypeBatch();
          _reader.readMessage(
            _instance.entityTypeBatchInline,
            EntityTypeBatch.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
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

    BatchUpdateEntityTypesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateEntityTypesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.entityTypeBatchUri || _instance.entityTypeBatchUri === '') {
      _writer.writeString(2, _instance.entityTypeBatchUri);
    }
    if (_instance.entityTypeBatchInline) {
      _writer.writeMessage(
        3,
        _instance.entityTypeBatchInline as any,
        EntityTypeBatch.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        5,
        _instance.updateMask as any,
        googleProtobuf002.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _entityTypeBatchUri: string;
  private _entityTypeBatchInline?: EntityTypeBatch;
  private _languageCode: string;
  private _updateMask?: googleProtobuf002.FieldMask;

  private _entityTypeBatch: BatchUpdateEntityTypesRequest.EntityTypeBatchCase =
    BatchUpdateEntityTypesRequest.EntityTypeBatchCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateEntityTypesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchUpdateEntityTypesRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.entityTypeBatchUri = _value.entityTypeBatchUri;
    this.entityTypeBatchInline = _value.entityTypeBatchInline
      ? new EntityTypeBatch(_value.entityTypeBatchInline)
      : undefined;
    this.languageCode = _value.languageCode;
    this.updateMask = _value.updateMask
      ? new googleProtobuf002.FieldMask(_value.updateMask)
      : undefined;
    BatchUpdateEntityTypesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get entityTypeBatchUri(): string {
    return this._entityTypeBatchUri;
  }
  set entityTypeBatchUri(value: string) {
    if (value !== undefined && value !== null) {
      this._entityTypeBatchInline = undefined;
      this._entityTypeBatch =
        BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchUri;
    }
    this._entityTypeBatchUri = value;
  }
  get entityTypeBatchInline(): EntityTypeBatch | undefined {
    return this._entityTypeBatchInline;
  }
  set entityTypeBatchInline(value: EntityTypeBatch | undefined) {
    if (value !== undefined && value !== null) {
      this._entityTypeBatchUri = undefined;
      this._entityTypeBatch =
        BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchInline;
    }
    this._entityTypeBatchInline = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get updateMask(): googleProtobuf002.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf002.FieldMask | undefined) {
    this._updateMask = value;
  }
  get entityTypeBatch() {
    return this._entityTypeBatch;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateEntityTypesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateEntityTypesRequest.AsObject {
    return {
      parent: this.parent,
      entityTypeBatchUri: this.entityTypeBatchUri,
      entityTypeBatchInline: this.entityTypeBatchInline
        ? this.entityTypeBatchInline.toObject()
        : undefined,
      languageCode: this.languageCode,
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
  ): BatchUpdateEntityTypesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      entityTypeBatchUri:
        this.entityTypeBatchUri === null ||
        this.entityTypeBatchUri === undefined
          ? null
          : this.entityTypeBatchUri,
      entityTypeBatchInline: this.entityTypeBatchInline
        ? this.entityTypeBatchInline.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module BatchUpdateEntityTypesRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateEntityTypesRequest
   */
  export interface AsObject {
    parent: string;
    entityTypeBatchUri: string;
    entityTypeBatchInline?: EntityTypeBatch.AsObject;
    languageCode: string;
    updateMask?: googleProtobuf002.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for BatchUpdateEntityTypesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    entityTypeBatchUri: string | null;
    entityTypeBatchInline: EntityTypeBatch.AsProtobufJSON | null;
    languageCode: string;
    updateMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
  }
  export enum EntityTypeBatchCase {
    none = 0,
    entityTypeBatchUri = 1,
    entityTypeBatchInline = 2
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesResponse
 */
export class BatchUpdateEntityTypesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateEntityTypesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateEntityTypesResponse();
    BatchUpdateEntityTypesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateEntityTypesResponse) {
    _instance.entityTypes = _instance.entityTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateEntityTypesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityType();
          _reader.readMessage(
            messageInitializer1,
            EntityType.deserializeBinaryFromReader
          );
          (_instance.entityTypes = _instance.entityTypes || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateEntityTypesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateEntityTypesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypes && _instance.entityTypes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entityTypes as any,
        EntityType.serializeBinaryToWriter
      );
    }
  }

  private _entityTypes?: EntityType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateEntityTypesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchUpdateEntityTypesResponse.AsObject>
  ) {
    _value = _value || {};
    this.entityTypes = (_value.entityTypes || []).map(m => new EntityType(m));
    BatchUpdateEntityTypesResponse.refineValues(this);
  }
  get entityTypes(): EntityType[] | undefined {
    return this._entityTypes;
  }
  set entityTypes(value: EntityType[] | undefined) {
    this._entityTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateEntityTypesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateEntityTypesResponse.AsObject {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toObject())
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
  ): BatchUpdateEntityTypesResponse.AsProtobufJSON {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module BatchUpdateEntityTypesResponse {
  /**
   * Standard JavaScript object representation for BatchUpdateEntityTypesResponse
   */
  export interface AsObject {
    entityTypes?: EntityType.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateEntityTypesResponse
   */
  export interface AsProtobufJSON {
    entityTypes: EntityType.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteEntityTypesRequest
 */
export class BatchDeleteEntityTypesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteEntityTypesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteEntityTypesRequest();
    BatchDeleteEntityTypesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteEntityTypesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.entityTypeNames = _instance.entityTypeNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteEntityTypesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.entityTypeNames = _instance.entityTypeNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchDeleteEntityTypesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteEntityTypesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.entityTypeNames && _instance.entityTypeNames.length) {
      _writer.writeRepeatedString(2, _instance.entityTypeNames);
    }
  }

  private _parent: string;
  private _entityTypeNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteEntityTypesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteEntityTypesRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.entityTypeNames = (_value.entityTypeNames || []).slice();
    BatchDeleteEntityTypesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get entityTypeNames(): string[] {
    return this._entityTypeNames;
  }
  set entityTypeNames(value: string[]) {
    this._entityTypeNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchDeleteEntityTypesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteEntityTypesRequest.AsObject {
    return {
      parent: this.parent,
      entityTypeNames: (this.entityTypeNames || []).slice()
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
  ): BatchDeleteEntityTypesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      entityTypeNames: (this.entityTypeNames || []).slice()
    };
  }
}
export module BatchDeleteEntityTypesRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteEntityTypesRequest
   */
  export interface AsObject {
    parent: string;
    entityTypeNames: string[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteEntityTypesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    entityTypeNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.EntityTypeBatch
 */
export class EntityTypeBatch implements GrpcMessage {
  static id = 'ondewo.nlu.EntityTypeBatch';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityTypeBatch();
    EntityTypeBatch.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityTypeBatch) {
    _instance.entityTypes = _instance.entityTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityTypeBatch,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityType();
          _reader.readMessage(
            messageInitializer1,
            EntityType.deserializeBinaryFromReader
          );
          (_instance.entityTypes = _instance.entityTypes || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EntityTypeBatch.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityTypeBatch,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypes && _instance.entityTypes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entityTypes as any,
        EntityType.serializeBinaryToWriter
      );
    }
  }

  private _entityTypes?: EntityType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityTypeBatch to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityTypeBatch.AsObject>) {
    _value = _value || {};
    this.entityTypes = (_value.entityTypes || []).map(m => new EntityType(m));
    EntityTypeBatch.refineValues(this);
  }
  get entityTypes(): EntityType[] | undefined {
    return this._entityTypes;
  }
  set entityTypes(value: EntityType[] | undefined) {
    this._entityTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityTypeBatch.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityTypeBatch.AsObject {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toObject())
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
  ): EntityTypeBatch.AsProtobufJSON {
    return {
      entityTypes: (this.entityTypes || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module EntityTypeBatch {
  /**
   * Standard JavaScript object representation for EntityTypeBatch
   */
  export interface AsObject {
    entityTypes?: EntityType.AsObject[];
  }

  /**
   * Protobuf JSON representation for EntityTypeBatch
   */
  export interface AsProtobufJSON {
    entityTypes: EntityType.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.EntityTypeSorting
 */
export class EntityTypeSorting implements GrpcMessage {
  static id = 'ondewo.nlu.EntityTypeSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityTypeSorting();
    EntityTypeSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityTypeSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityTypeSorting,
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

    EntityTypeSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityTypeSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: EntityTypeSorting.EntityTypeSortingField;
  private _sortingMode: ondewoNlu010.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityTypeSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityTypeSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    EntityTypeSorting.refineValues(this);
  }
  get sortingField(): EntityTypeSorting.EntityTypeSortingField {
    return this._sortingField;
  }
  set sortingField(value: EntityTypeSorting.EntityTypeSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoNlu010.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu010.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityTypeSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityTypeSorting.AsObject {
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
  ): EntityTypeSorting.AsProtobufJSON {
    return {
      sortingField:
        EntityTypeSorting.EntityTypeSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoNlu010.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module EntityTypeSorting {
  /**
   * Standard JavaScript object representation for EntityTypeSorting
   */
  export interface AsObject {
    sortingField: EntityTypeSorting.EntityTypeSortingField;
    sortingMode: ondewoNlu010.SortingMode;
  }

  /**
   * Protobuf JSON representation for EntityTypeSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum EntityTypeSortingField {
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
export class EntityStatus implements GrpcMessage {
  static id = 'ondewo.nlu.EntityStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityStatus();
    EntityStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityStatus) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entity = new EntityType.Entity();
          _reader.readMessage(
            _instance.entity,
            EntityType.Entity.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.entity) {
      _writer.writeMessage(
        1,
        _instance.entity as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage || _instance.errorMessage === '') {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _entity?: EntityType.Entity;
  private _errorMessage: string;

  private _entityOrStatus: EntityStatus.EntityOrStatusCase =
    EntityStatus.EntityOrStatusCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityStatus.AsObject>) {
    _value = _value || {};
    this.entity = _value.entity
      ? new EntityType.Entity(_value.entity)
      : undefined;
    this.errorMessage = _value.errorMessage;
    EntityStatus.refineValues(this);
  }
  get entity(): EntityType.Entity | undefined {
    return this._entity;
  }
  set entity(value: EntityType.Entity | undefined) {
    if (value !== undefined && value !== null) {
      this._errorMessage = undefined;
      this._entityOrStatus = EntityStatus.EntityOrStatusCase.entity;
    }
    this._entity = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    if (value !== undefined && value !== null) {
      this._entity = undefined;
      this._entityOrStatus = EntityStatus.EntityOrStatusCase.errorMessage;
    }
    this._errorMessage = value;
  }
  get entityOrStatus() {
    return this._entityOrStatus;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityStatus.AsObject {
    return {
      entity: this.entity ? this.entity.toObject() : undefined,
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
  ): EntityStatus.AsProtobufJSON {
    return {
      entity: this.entity ? this.entity.toProtobufJSON(options) : null,
      errorMessage:
        this.errorMessage === null || this.errorMessage === undefined
          ? null
          : this.errorMessage
    };
  }
}
export module EntityStatus {
  /**
   * Standard JavaScript object representation for EntityStatus
   */
  export interface AsObject {
    entity?: EntityType.Entity.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for EntityStatus
   */
  export interface AsProtobufJSON {
    entity: EntityType.Entity.AsProtobufJSON | null;
    errorMessage: string | null;
  }
  export enum EntityOrStatusCase {
    none = 0,
    entity = 1,
    errorMessage = 2
  }
}

/**
 * Message implementation for ondewo.nlu.BatchEntitiesResponse
 */
export class BatchEntitiesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchEntitiesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchEntitiesResponse();
    BatchEntitiesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchEntitiesResponse) {
    _instance.entityStatuses = _instance.entityStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchEntitiesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityStatus();
          _reader.readMessage(
            messageInitializer1,
            EntityStatus.deserializeBinaryFromReader
          );
          (_instance.entityStatuses = _instance.entityStatuses || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.hasErrors = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchEntitiesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchEntitiesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.entityStatuses && _instance.entityStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entityStatuses as any,
        EntityStatus.serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _entityStatuses?: EntityStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchEntitiesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchEntitiesResponse.AsObject>) {
    _value = _value || {};
    this.entityStatuses = (_value.entityStatuses || []).map(
      m => new EntityStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchEntitiesResponse.refineValues(this);
  }
  get entityStatuses(): EntityStatus[] | undefined {
    return this._entityStatuses;
  }
  set entityStatuses(value: EntityStatus[] | undefined) {
    this._entityStatuses = value;
  }
  get hasErrors(): boolean {
    return this._hasErrors;
  }
  set hasErrors(value: boolean) {
    this._hasErrors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchEntitiesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchEntitiesResponse.AsObject {
    return {
      entityStatuses: (this.entityStatuses || []).map(m => m.toObject()),
      hasErrors: this.hasErrors
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
  ): BatchEntitiesResponse.AsProtobufJSON {
    return {
      entityStatuses: (this.entityStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchEntitiesResponse {
  /**
   * Standard JavaScript object representation for BatchEntitiesResponse
   */
  export interface AsObject {
    entityStatuses?: EntityStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchEntitiesResponse
   */
  export interface AsProtobufJSON {
    entityStatuses: EntityStatus.AsProtobufJSON[] | null;
    hasErrors: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateEntityRequest
 */
export class CreateEntityRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateEntityRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateEntityRequest();
    CreateEntityRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateEntityRequest) {
    _instance.entityTypeName = _instance.entityTypeName || '';
    _instance.entity = _instance.entity || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateEntityRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityTypeName = _reader.readString();
          break;
        case 2:
          _instance.entity = new EntityType.Entity();
          _reader.readMessage(
            _instance.entity,
            EntityType.Entity.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateEntityRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateEntityRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypeName) {
      _writer.writeString(1, _instance.entityTypeName);
    }
    if (_instance.entity) {
      _writer.writeMessage(
        2,
        _instance.entity as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
  }

  private _entityTypeName: string;
  private _entity?: EntityType.Entity;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateEntityRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateEntityRequest.AsObject>) {
    _value = _value || {};
    this.entityTypeName = _value.entityTypeName;
    this.entity = _value.entity
      ? new EntityType.Entity(_value.entity)
      : undefined;
    CreateEntityRequest.refineValues(this);
  }
  get entityTypeName(): string {
    return this._entityTypeName;
  }
  set entityTypeName(value: string) {
    this._entityTypeName = value;
  }
  get entity(): EntityType.Entity | undefined {
    return this._entity;
  }
  set entity(value: EntityType.Entity | undefined) {
    this._entity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateEntityRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateEntityRequest.AsObject {
    return {
      entityTypeName: this.entityTypeName,
      entity: this.entity ? this.entity.toObject() : undefined
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
  ): CreateEntityRequest.AsProtobufJSON {
    return {
      entityTypeName: this.entityTypeName,
      entity: this.entity ? this.entity.toProtobufJSON(options) : null
    };
  }
}
export module CreateEntityRequest {
  /**
   * Standard JavaScript object representation for CreateEntityRequest
   */
  export interface AsObject {
    entityTypeName: string;
    entity?: EntityType.Entity.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateEntityRequest
   */
  export interface AsProtobufJSON {
    entityTypeName: string;
    entity: EntityType.Entity.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchCreateEntitiesRequest
 */
export class BatchCreateEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchCreateEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchCreateEntitiesRequest();
    BatchCreateEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchCreateEntitiesRequest) {
    _instance.createEntityRequests = _instance.createEntityRequests || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchCreateEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CreateEntityRequest();
          _reader.readMessage(
            messageInitializer1,
            CreateEntityRequest.deserializeBinaryFromReader
          );
          (_instance.createEntityRequests =
            _instance.createEntityRequests || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    BatchCreateEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchCreateEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (
      _instance.createEntityRequests &&
      _instance.createEntityRequests.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.createEntityRequests as any,
        CreateEntityRequest.serializeBinaryToWriter
      );
    }
  }

  private _createEntityRequests?: CreateEntityRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchCreateEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchCreateEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.createEntityRequests = (_value.createEntityRequests || []).map(
      m => new CreateEntityRequest(m)
    );
    BatchCreateEntitiesRequest.refineValues(this);
  }
  get createEntityRequests(): CreateEntityRequest[] | undefined {
    return this._createEntityRequests;
  }
  set createEntityRequests(value: CreateEntityRequest[] | undefined) {
    this._createEntityRequests = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchCreateEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchCreateEntitiesRequest.AsObject {
    return {
      createEntityRequests: (this.createEntityRequests || []).map(m =>
        m.toObject()
      )
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
  ): BatchCreateEntitiesRequest.AsProtobufJSON {
    return {
      createEntityRequests: (this.createEntityRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchCreateEntitiesRequest {
  /**
   * Standard JavaScript object representation for BatchCreateEntitiesRequest
   */
  export interface AsObject {
    createEntityRequests?: CreateEntityRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchCreateEntitiesRequest
   */
  export interface AsProtobufJSON {
    createEntityRequests: CreateEntityRequest.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateEntitiesRequest
 */
export class BatchUpdateEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateEntitiesRequest();
    BatchUpdateEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateEntitiesRequest) {
    _instance.entities = _instance.entities || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityType.Entity();
          _reader.readMessage(
            messageInitializer1,
            EntityType.Entity.deserializeBinaryFromReader
          );
          (_instance.entities = _instance.entities || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entities && _instance.entities.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entities as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
  }

  private _entities?: EntityType.Entity[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchUpdateEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.entities = (_value.entities || []).map(m => new EntityType.Entity(m));
    BatchUpdateEntitiesRequest.refineValues(this);
  }
  get entities(): EntityType.Entity[] | undefined {
    return this._entities;
  }
  set entities(value: EntityType.Entity[] | undefined) {
    this._entities = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateEntitiesRequest.AsObject {
    return {
      entities: (this.entities || []).map(m => m.toObject())
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
  ): BatchUpdateEntitiesRequest.AsProtobufJSON {
    return {
      entities: (this.entities || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module BatchUpdateEntitiesRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateEntitiesRequest
   */
  export interface AsObject {
    entities?: EntityType.Entity.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateEntitiesRequest
   */
  export interface AsProtobufJSON {
    entities: EntityType.Entity.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateEntityRequest
 */
export class UpdateEntityRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateEntityRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateEntityRequest();
    UpdateEntityRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateEntityRequest) {
    _instance.entity = _instance.entity || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateEntityRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entity = new EntityType.Entity();
          _reader.readMessage(
            _instance.entity,
            EntityType.Entity.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateEntityRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateEntityRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entity) {
      _writer.writeMessage(
        1,
        _instance.entity as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
  }

  private _entity?: EntityType.Entity;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateEntityRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateEntityRequest.AsObject>) {
    _value = _value || {};
    this.entity = _value.entity
      ? new EntityType.Entity(_value.entity)
      : undefined;
    UpdateEntityRequest.refineValues(this);
  }
  get entity(): EntityType.Entity | undefined {
    return this._entity;
  }
  set entity(value: EntityType.Entity | undefined) {
    this._entity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateEntityRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateEntityRequest.AsObject {
    return {
      entity: this.entity ? this.entity.toObject() : undefined
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
  ): UpdateEntityRequest.AsProtobufJSON {
    return {
      entity: this.entity ? this.entity.toProtobufJSON(options) : null
    };
  }
}
export module UpdateEntityRequest {
  /**
   * Standard JavaScript object representation for UpdateEntityRequest
   */
  export interface AsObject {
    entity?: EntityType.Entity.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateEntityRequest
   */
  export interface AsProtobufJSON {
    entity: EntityType.Entity.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GetEntityRequest
 */
export class GetEntityRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetEntityRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetEntityRequest();
    GetEntityRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetEntityRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetEntityRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetEntityRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetEntityRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetEntityRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetEntityRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetEntityRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetEntityRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetEntityRequest.AsObject {
    return {
      name: this.name
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
  ): GetEntityRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetEntityRequest {
  /**
   * Standard JavaScript object representation for GetEntityRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetEntityRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchGetEntitiesRequest
 */
export class BatchGetEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchGetEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchGetEntitiesRequest();
    BatchGetEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchGetEntitiesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchGetEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    BatchGetEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchGetEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchGetEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchGetEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchGetEntitiesRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchGetEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchGetEntitiesRequest.AsObject {
    return {
      names: (this.names || []).slice()
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
  ): BatchGetEntitiesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchGetEntitiesRequest {
  /**
   * Standard JavaScript object representation for BatchGetEntitiesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchGetEntitiesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteEntitiesRequest
 */
export class BatchDeleteEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteEntitiesRequest();
    BatchDeleteEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteEntitiesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    BatchDeleteEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchDeleteEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchDeleteEntitiesRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchDeleteEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteEntitiesRequest.AsObject {
    return {
      names: (this.names || []).slice()
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
  ): BatchDeleteEntitiesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchDeleteEntitiesRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteEntitiesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteEntitiesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteEntityRequest
 */
export class DeleteEntityRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteEntityRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteEntityRequest();
    DeleteEntityRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteEntityRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteEntityRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteEntityRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteEntityRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteEntityRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteEntityRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteEntityRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteEntityRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteEntityRequest.AsObject {
    return {
      name: this.name
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
  ): DeleteEntityRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteEntityRequest {
  /**
   * Standard JavaScript object representation for DeleteEntityRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteEntityRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteEntityStatus
 */
export class DeleteEntityStatus implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteEntityStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteEntityStatus();
    DeleteEntityStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteEntityStatus) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteEntityStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.successfullyDeleted = new googleProtobuf007.Empty();
          _reader.readMessage(
            _instance.successfullyDeleted,
            googleProtobuf007.Empty.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteEntityStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteEntityStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.successfullyDeleted) {
      _writer.writeMessage(
        1,
        _instance.successfullyDeleted as any,
        googleProtobuf007.Empty.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage || _instance.errorMessage === '') {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _successfullyDeleted?: googleProtobuf007.Empty;
  private _errorMessage: string;

  private _deleteStatus: DeleteEntityStatus.DeleteStatusCase =
    DeleteEntityStatus.DeleteStatusCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteEntityStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteEntityStatus.AsObject>) {
    _value = _value || {};
    this.successfullyDeleted = _value.successfullyDeleted
      ? new googleProtobuf007.Empty(_value.successfullyDeleted)
      : undefined;
    this.errorMessage = _value.errorMessage;
    DeleteEntityStatus.refineValues(this);
  }
  get successfullyDeleted(): googleProtobuf007.Empty | undefined {
    return this._successfullyDeleted;
  }
  set successfullyDeleted(value: googleProtobuf007.Empty | undefined) {
    if (value !== undefined && value !== null) {
      this._errorMessage = undefined;
      this._deleteStatus =
        DeleteEntityStatus.DeleteStatusCase.successfullyDeleted;
    }
    this._successfullyDeleted = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    if (value !== undefined && value !== null) {
      this._successfullyDeleted = undefined;
      this._deleteStatus = DeleteEntityStatus.DeleteStatusCase.errorMessage;
    }
    this._errorMessage = value;
  }
  get deleteStatus() {
    return this._deleteStatus;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteEntityStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteEntityStatus.AsObject {
    return {
      successfullyDeleted: this.successfullyDeleted
        ? this.successfullyDeleted.toObject()
        : undefined,
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
  ): DeleteEntityStatus.AsProtobufJSON {
    return {
      successfullyDeleted: this.successfullyDeleted
        ? this.successfullyDeleted.toProtobufJSON(options)
        : null,
      errorMessage:
        this.errorMessage === null || this.errorMessage === undefined
          ? null
          : this.errorMessage
    };
  }
}
export module DeleteEntityStatus {
  /**
   * Standard JavaScript object representation for DeleteEntityStatus
   */
  export interface AsObject {
    successfullyDeleted?: googleProtobuf007.Empty.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteEntityStatus
   */
  export interface AsProtobufJSON {
    successfullyDeleted: googleProtobuf007.Empty.AsProtobufJSON | null;
    errorMessage: string | null;
  }
  export enum DeleteStatusCase {
    none = 0,
    successfullyDeleted = 1,
    errorMessage = 2
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteEntitiesResponse
 */
export class BatchDeleteEntitiesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteEntitiesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteEntitiesResponse();
    BatchDeleteEntitiesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteEntitiesResponse) {
    _instance.deleteStatuses = _instance.deleteStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteEntitiesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new DeleteEntityStatus();
          _reader.readMessage(
            messageInitializer1,
            DeleteEntityStatus.deserializeBinaryFromReader
          );
          (_instance.deleteStatuses = _instance.deleteStatuses || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.hasErrors = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchDeleteEntitiesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteEntitiesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteStatuses as any,
        DeleteEntityStatus.serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _deleteStatuses?: DeleteEntityStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteEntitiesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchDeleteEntitiesResponse.AsObject>) {
    _value = _value || {};
    this.deleteStatuses = (_value.deleteStatuses || []).map(
      m => new DeleteEntityStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchDeleteEntitiesResponse.refineValues(this);
  }
  get deleteStatuses(): DeleteEntityStatus[] | undefined {
    return this._deleteStatuses;
  }
  set deleteStatuses(value: DeleteEntityStatus[] | undefined) {
    this._deleteStatuses = value;
  }
  get hasErrors(): boolean {
    return this._hasErrors;
  }
  set hasErrors(value: boolean) {
    this._hasErrors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchDeleteEntitiesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteEntitiesResponse.AsObject {
    return {
      deleteStatuses: (this.deleteStatuses || []).map(m => m.toObject()),
      hasErrors: this.hasErrors
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
  ): BatchDeleteEntitiesResponse.AsProtobufJSON {
    return {
      deleteStatuses: (this.deleteStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchDeleteEntitiesResponse {
  /**
   * Standard JavaScript object representation for BatchDeleteEntitiesResponse
   */
  export interface AsObject {
    deleteStatuses?: DeleteEntityStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchDeleteEntitiesResponse
   */
  export interface AsProtobufJSON {
    deleteStatuses: DeleteEntityStatus.AsProtobufJSON[] | null;
    hasErrors: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.ListEntitiesRequest
 */
export class ListEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListEntitiesRequest();
    ListEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListEntitiesRequest) {
    _instance.entityTypeName = _instance.entityTypeName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.sortByField = _instance.sortByField || undefined;
    _instance.searchByPattern = _instance.searchByPattern || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityTypeName = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.sortByField = new EntityValueSorting();
          _reader.readMessage(
            _instance.sortByField,
            EntityValueSorting.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.searchByPattern = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypeName) {
      _writer.writeString(1, _instance.entityTypeName);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.sortByField) {
      _writer.writeMessage(
        5,
        _instance.sortByField as any,
        EntityValueSorting.serializeBinaryToWriter
      );
    }
    if (_instance.searchByPattern) {
      _writer.writeString(6, _instance.searchByPattern);
    }
  }

  private _entityTypeName: string;
  private _languageCode: string;
  private _pageToken: string;
  private _sortByField?: EntityValueSorting;
  private _searchByPattern: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.entityTypeName = _value.entityTypeName;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    this.sortByField = _value.sortByField
      ? new EntityValueSorting(_value.sortByField)
      : undefined;
    this.searchByPattern = _value.searchByPattern;
    ListEntitiesRequest.refineValues(this);
  }
  get entityTypeName(): string {
    return this._entityTypeName;
  }
  set entityTypeName(value: string) {
    this._entityTypeName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get sortByField(): EntityValueSorting | undefined {
    return this._sortByField;
  }
  set sortByField(value: EntityValueSorting | undefined) {
    this._sortByField = value;
  }
  get searchByPattern(): string {
    return this._searchByPattern;
  }
  set searchByPattern(value: string) {
    this._searchByPattern = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListEntitiesRequest.AsObject {
    return {
      entityTypeName: this.entityTypeName,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      sortByField: this.sortByField ? this.sortByField.toObject() : undefined,
      searchByPattern: this.searchByPattern
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
  ): ListEntitiesRequest.AsProtobufJSON {
    return {
      entityTypeName: this.entityTypeName,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      sortByField: this.sortByField
        ? this.sortByField.toProtobufJSON(options)
        : null,
      searchByPattern: this.searchByPattern
    };
  }
}
export module ListEntitiesRequest {
  /**
   * Standard JavaScript object representation for ListEntitiesRequest
   */
  export interface AsObject {
    entityTypeName: string;
    languageCode: string;
    pageToken: string;
    sortByField?: EntityValueSorting.AsObject;
    searchByPattern: string;
  }

  /**
   * Protobuf JSON representation for ListEntitiesRequest
   */
  export interface AsProtobufJSON {
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
export class ListEntitiesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListEntitiesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListEntitiesResponse();
    ListEntitiesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListEntitiesResponse) {
    _instance.entities = _instance.entities || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListEntitiesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityType.Entity();
          _reader.readMessage(
            messageInitializer1,
            EntityType.Entity.deserializeBinaryFromReader
          );
          (_instance.entities = _instance.entities || []).push(
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

    ListEntitiesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListEntitiesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.entities && _instance.entities.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entities as any,
        EntityType.Entity.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _entities?: EntityType.Entity[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListEntitiesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListEntitiesResponse.AsObject>) {
    _value = _value || {};
    this.entities = (_value.entities || []).map(m => new EntityType.Entity(m));
    this.nextPageToken = _value.nextPageToken;
    ListEntitiesResponse.refineValues(this);
  }
  get entities(): EntityType.Entity[] | undefined {
    return this._entities;
  }
  set entities(value: EntityType.Entity[] | undefined) {
    this._entities = value;
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
    ListEntitiesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListEntitiesResponse.AsObject {
    return {
      entities: (this.entities || []).map(m => m.toObject()),
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
  ): ListEntitiesResponse.AsProtobufJSON {
    return {
      entities: (this.entities || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListEntitiesResponse {
  /**
   * Standard JavaScript object representation for ListEntitiesResponse
   */
  export interface AsObject {
    entities?: EntityType.Entity.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListEntitiesResponse
   */
  export interface AsProtobufJSON {
    entities: EntityType.Entity.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.EntityValueSorting
 */
export class EntityValueSorting implements GrpcMessage {
  static id = 'ondewo.nlu.EntityValueSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityValueSorting();
    EntityValueSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityValueSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityValueSorting,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 7:
          _instance.sortingField = _reader.readEnum();
          break;
        case 8:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityValueSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityValueSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(7, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(8, _instance.sortingMode);
    }
  }

  private _sortingField: EntityValueSorting.EntityValueSortingField;
  private _sortingMode: ondewoNlu010.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityValueSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityValueSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    EntityValueSorting.refineValues(this);
  }
  get sortingField(): EntityValueSorting.EntityValueSortingField {
    return this._sortingField;
  }
  set sortingField(value: EntityValueSorting.EntityValueSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoNlu010.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu010.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityValueSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityValueSorting.AsObject {
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
  ): EntityValueSorting.AsProtobufJSON {
    return {
      sortingField:
        EntityValueSorting.EntityValueSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoNlu010.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module EntityValueSorting {
  /**
   * Standard JavaScript object representation for EntityValueSorting
   */
  export interface AsObject {
    sortingField: EntityValueSorting.EntityValueSortingField;
    sortingMode: ondewoNlu010.SortingMode;
  }

  /**
   * Protobuf JSON representation for EntityValueSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum EntityValueSortingField {
    NO_ENTITY_VALUE_SORTING = 0,
    SORT_ENTITY_VALUE_BY_DISPLAY_NAME = 1,
    SORT_ENTITY_VALUE_BY_VALUE = 2,
    SORT_ENTITY_VALUE_BY_SYNONYM_COUNT = 3
  }
}
