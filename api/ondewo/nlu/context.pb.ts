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
/**
 * Message implementation for ondewo.nlu.Context
 */
export class Context implements GrpcMessage {
  static id = 'ondewo.nlu.Context';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Context();
    Context.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Context) {
    _instance.name = _instance.name || '';
    _instance.lifespanCount = _instance.lifespanCount || 0;
    _instance.parameters = _instance.parameters || {};
    _instance.lifespanTime = _instance.lifespanTime || 0;
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
    _instance: Context,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.lifespanCount = _reader.readInt32();
          break;
        case 3:
          const msg_3 = {} as any;
          _reader.readMessage(
            msg_3,
            Context.ParametersEntry.deserializeBinaryFromReader
          );
          _instance.parameters = _instance.parameters || {};
          _instance.parameters[msg_3.key] = msg_3.value;
          break;
        case 4:
          _instance.lifespanTime = _reader.readFloat();
          break;
        case 5:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.createdBy = _reader.readString();
          break;
        case 8:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Context.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Context, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.lifespanCount) {
      _writer.writeInt32(2, _instance.lifespanCount);
    }
    if (!!_instance.parameters) {
      const keys_3 = Object.keys(_instance.parameters as any);

      if (keys_3.length) {
        const repeated_3 = keys_3
          .map(key => ({ key: key, value: (_instance.parameters as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          3,
          repeated_3,
          Context.ParametersEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.lifespanTime) {
      _writer.writeFloat(4, _instance.lifespanTime);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        5,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        6,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(7, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(8, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _lifespanCount: number;
  private _parameters: { [prop: string]: Context.Parameter };
  private _lifespanTime: number;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Context to deeply clone from
   */
  constructor(_value?: RecursivePartial<Context.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.lifespanCount = _value.lifespanCount;
    (this.parameters = _value!.parameters
      ? Object.keys(_value!.parameters).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.parameters![k]
              ? new Context.Parameter(_value!.parameters![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.lifespanTime = _value.lifespanTime);
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    Context.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get lifespanCount(): number {
    return this._lifespanCount;
  }
  set lifespanCount(value: number) {
    this._lifespanCount = value;
  }
  get parameters(): { [prop: string]: Context.Parameter } {
    return this._parameters;
  }
  set parameters(value: { [prop: string]: Context.Parameter }) {
    this._parameters = value;
  }
  get lifespanTime(): number {
    return this._lifespanTime;
  }
  set lifespanTime(value: number) {
    this._lifespanTime = value;
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
    Context.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Context.AsObject {
    return {
      name: this.name,
      lifespanCount: this.lifespanCount,
      parameters: this.parameters
        ? Object.keys(this.parameters).reduce(
            (r, k) => ({
              ...r,
              [k]: this.parameters![k]
                ? this.parameters![k].toObject()
                : undefined
            }),
            {}
          )
        : {},
      lifespanTime: this.lifespanTime,
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
  ): Context.AsProtobufJSON {
    return {
      name: this.name,
      lifespanCount: this.lifespanCount,
      parameters: this.parameters
        ? Object.keys(this.parameters).reduce(
            (r, k) => ({
              ...r,
              [k]: this.parameters![k] ? this.parameters![k].toJSON() : null
            }),
            {}
          )
        : {},
      lifespanTime: this.lifespanTime,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module Context {
  /**
   * Standard JavaScript object representation for Context
   */
  export interface AsObject {
    name: string;
    lifespanCount: number;
    parameters: { [prop: string]: Context.Parameter };
    lifespanTime: number;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for Context
   */
  export interface AsProtobufJSON {
    name: string;
    lifespanCount: number;
    parameters: { [prop: string]: Context.Parameter };
    lifespanTime: number;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Message implementation for ondewo.nlu.Context.Parameter
   */
  export class Parameter implements GrpcMessage {
    static id = 'ondewo.nlu.Context.Parameter';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Parameter();
      Parameter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Parameter) {
      _instance.name = _instance.name || '';
      _instance.displayName = _instance.displayName || '';
      _instance.value = _instance.value || '';
      _instance.valueOriginal = _instance.valueOriginal || '';
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
      _instance: Parameter,
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
            _instance.value = _reader.readString();
            break;
          case 4:
            _instance.valueOriginal = _reader.readString();
            break;
          case 5:
            _instance.createdAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 6:
            _instance.modifiedAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.createdBy = _reader.readString();
            break;
          case 8:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      Parameter.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: Parameter,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.displayName) {
        _writer.writeString(2, _instance.displayName);
      }
      if (_instance.value) {
        _writer.writeString(3, _instance.value);
      }
      if (_instance.valueOriginal) {
        _writer.writeString(4, _instance.valueOriginal);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          5,
          _instance.createdAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          6,
          _instance.modifiedAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(7, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(8, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _displayName: string;
    private _value: string;
    private _valueOriginal: string;
    private _createdAt?: googleProtobuf005.Timestamp;
    private _modifiedAt?: googleProtobuf005.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Parameter to deeply clone from
     */
    constructor(_value?: RecursivePartial<Parameter.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.displayName = _value.displayName;
      this.value = _value.value;
      this.valueOriginal = _value.valueOriginal;
      this.createdAt = _value.createdAt
        ? new googleProtobuf005.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf005.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      Parameter.refineValues(this);
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
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }
    get valueOriginal(): string {
      return this._valueOriginal;
    }
    set valueOriginal(value: string) {
      this._valueOriginal = value;
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
      Parameter.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Parameter.AsObject {
      return {
        name: this.name,
        displayName: this.displayName,
        value: this.value,
        valueOriginal: this.valueOriginal,
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
    ): Parameter.AsProtobufJSON {
      return {
        name: this.name,
        displayName: this.displayName,
        value: this.value,
        valueOriginal: this.valueOriginal,
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
  export module Parameter {
    /**
     * Standard JavaScript object representation for Parameter
     */
    export interface AsObject {
      name: string;
      displayName: string;
      value: string;
      valueOriginal: string;
      createdAt?: googleProtobuf005.Timestamp.AsObject;
      modifiedAt?: googleProtobuf005.Timestamp.AsObject;
      createdBy: string;
      modifiedBy: string;
    }

    /**
     * Protobuf JSON representation for Parameter
     */
    export interface AsProtobufJSON {
      name: string;
      displayName: string;
      value: string;
      valueOriginal: string;
      createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      createdBy: string;
      modifiedBy: string;
    }
  }

  /**
   * Message implementation for ondewo.nlu.Context.ParametersEntry
   */
  export class ParametersEntry implements GrpcMessage {
    static id = 'ondewo.nlu.Context.ParametersEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ParametersEntry();
      ParametersEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ParametersEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ParametersEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new Context.Parameter();
            _reader.readMessage(
              _instance.value,
              Context.Parameter.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      ParametersEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ParametersEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          Context.Parameter.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: Context.Parameter;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ParametersEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<ParametersEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value
        ? new Context.Parameter(_value.value)
        : undefined;
      ParametersEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): Context.Parameter | undefined {
      return this._value;
    }
    set value(value: Context.Parameter | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ParametersEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ParametersEntry.AsObject {
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
    ): ParametersEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module ParametersEntry {
    /**
     * Standard JavaScript object representation for ParametersEntry
     */
    export interface AsObject {
      key: string;
      value?: Context.Parameter.AsObject;
    }

    /**
     * Protobuf JSON representation for ParametersEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: Context.Parameter.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListContextsRequest
 */
export class ListContextsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListContextsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListContextsRequest();
    ListContextsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListContextsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListContextsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListContextsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListContextsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _sessionId: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListContextsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListContextsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.pageToken = _value.pageToken;
    ListContextsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
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
    ListContextsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListContextsRequest.AsObject {
    return {
      sessionId: this.sessionId,
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
  ): ListContextsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      pageToken: this.pageToken
    };
  }
}
export module ListContextsRequest {
  /**
   * Standard JavaScript object representation for ListContextsRequest
   */
  export interface AsObject {
    sessionId: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListContextsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListContextsResponse
 */
export class ListContextsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListContextsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListContextsResponse();
    ListContextsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListContextsResponse) {
    _instance.contexts = _instance.contexts || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListContextsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Context();
          _reader.readMessage(
            messageInitializer1,
            Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
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

    ListContextsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListContextsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.contexts as any,
        Context.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _contexts?: Context[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListContextsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListContextsResponse.AsObject>) {
    _value = _value || {};
    this.contexts = (_value.contexts || []).map(m => new Context(m));
    this.nextPageToken = _value.nextPageToken;
    ListContextsResponse.refineValues(this);
  }
  get contexts(): Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: Context[] | undefined) {
    this._contexts = value;
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
    ListContextsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListContextsResponse.AsObject {
    return {
      contexts: (this.contexts || []).map(m => m.toObject()),
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
  ): ListContextsResponse.AsProtobufJSON {
    return {
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListContextsResponse {
  /**
   * Standard JavaScript object representation for ListContextsResponse
   */
  export interface AsObject {
    contexts?: Context.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListContextsResponse
   */
  export interface AsProtobufJSON {
    contexts: Context.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetContextRequest
 */
export class GetContextRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetContextRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetContextRequest();
    GetContextRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetContextRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetContextRequest,
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

    GetContextRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetContextRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetContextRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetContextRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetContextRequest.refineValues(this);
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
    GetContextRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetContextRequest.AsObject {
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
  ): GetContextRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetContextRequest {
  /**
   * Standard JavaScript object representation for GetContextRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetContextRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateContextRequest
 */
export class CreateContextRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateContextRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateContextRequest();
    CreateContextRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateContextRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.context = _instance.context || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateContextRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.context = new Context();
          _reader.readMessage(
            _instance.context,
            Context.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateContextRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateContextRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.context) {
      _writer.writeMessage(
        2,
        _instance.context as any,
        Context.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _context?: Context;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateContextRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateContextRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.context = _value.context ? new Context(_value.context) : undefined;
    CreateContextRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get context(): Context | undefined {
    return this._context;
  }
  set context(value: Context | undefined) {
    this._context = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateContextRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateContextRequest.AsObject {
    return {
      sessionId: this.sessionId,
      context: this.context ? this.context.toObject() : undefined
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
  ): CreateContextRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      context: this.context ? this.context.toProtobufJSON(options) : null
    };
  }
}
export module CreateContextRequest {
  /**
   * Standard JavaScript object representation for CreateContextRequest
   */
  export interface AsObject {
    sessionId: string;
    context?: Context.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateContextRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    context: Context.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateContextRequest
 */
export class UpdateContextRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateContextRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateContextRequest();
    UpdateContextRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateContextRequest) {
    _instance.context = _instance.context || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateContextRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.context = new Context();
          _reader.readMessage(
            _instance.context,
            Context.deserializeBinaryFromReader
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

    UpdateContextRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateContextRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.context) {
      _writer.writeMessage(
        1,
        _instance.context as any,
        Context.serializeBinaryToWriter
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

  private _context?: Context;
  private _updateMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateContextRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateContextRequest.AsObject>) {
    _value = _value || {};
    this.context = _value.context ? new Context(_value.context) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    UpdateContextRequest.refineValues(this);
  }
  get context(): Context | undefined {
    return this._context;
  }
  set context(value: Context | undefined) {
    this._context = value;
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
    UpdateContextRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateContextRequest.AsObject {
    return {
      context: this.context ? this.context.toObject() : undefined,
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
  ): UpdateContextRequest.AsProtobufJSON {
    return {
      context: this.context ? this.context.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateContextRequest {
  /**
   * Standard JavaScript object representation for UpdateContextRequest
   */
  export interface AsObject {
    context?: Context.AsObject;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateContextRequest
   */
  export interface AsProtobufJSON {
    context: Context.AsProtobufJSON | null;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteContextRequest
 */
export class DeleteContextRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteContextRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteContextRequest();
    DeleteContextRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteContextRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteContextRequest,
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

    DeleteContextRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteContextRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteContextRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteContextRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteContextRequest.refineValues(this);
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
    DeleteContextRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteContextRequest.AsObject {
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
  ): DeleteContextRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteContextRequest {
  /**
   * Standard JavaScript object representation for DeleteContextRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteContextRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteAllContextsRequest
 */
export class DeleteAllContextsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteAllContextsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAllContextsRequest();
    DeleteAllContextsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAllContextsRequest) {
    _instance.sessionId = _instance.sessionId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAllContextsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAllContextsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAllContextsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
  }

  private _sessionId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAllContextsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteAllContextsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    DeleteAllContextsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteAllContextsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAllContextsRequest.AsObject {
    return {
      sessionId: this.sessionId
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
  ): DeleteAllContextsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId
    };
  }
}
export module DeleteAllContextsRequest {
  /**
   * Standard JavaScript object representation for DeleteAllContextsRequest
   */
  export interface AsObject {
    sessionId: string;
  }

  /**
   * Protobuf JSON representation for DeleteAllContextsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
  }
}
