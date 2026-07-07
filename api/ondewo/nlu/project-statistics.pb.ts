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
import * as ondewoNlu003 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleProtobuf008 from '@ngx-grpc/well-known-types';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
/**
 * Message implementation for ondewo.nlu.GetIntentCountRequest
 */
export class GetIntentCountRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetIntentCountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIntentCountRequest();
    GetIntentCountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIntentCountRequest) {
    _instance.parent = _instance.parent || '';
    _instance.filterByCategory = _instance.filterByCategory || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIntentCountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.filterByCategory = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetIntentCountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIntentCountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.filterByCategory) {
      _writer.writeEnum(2, _instance.filterByCategory);
    }
  }

  private _parent: string;
  private _filterByCategory: ondewoNlu010.IntentCategory;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIntentCountRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIntentCountRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.filterByCategory = _value.filterByCategory;
    GetIntentCountRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get filterByCategory(): ondewoNlu010.IntentCategory {
    return this._filterByCategory;
  }
  set filterByCategory(value: ondewoNlu010.IntentCategory) {
    this._filterByCategory = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIntentCountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIntentCountRequest.AsObject {
    return {
      parent: this.parent,
      filterByCategory: this.filterByCategory
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
  ): GetIntentCountRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      filterByCategory:
        ondewoNlu010.IntentCategory[
          this.filterByCategory === null || this.filterByCategory === undefined
            ? 0
            : this.filterByCategory
        ]
    };
  }
}
export module GetIntentCountRequest {
  /**
   * Standard JavaScript object representation for GetIntentCountRequest
   */
  export interface AsObject {
    parent: string;
    filterByCategory: ondewoNlu010.IntentCategory;
  }

  /**
   * Protobuf JSON representation for GetIntentCountRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    filterByCategory: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetEntityTypeCountRequest
 */
export class GetEntityTypeCountRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetEntityTypeCountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetEntityTypeCountRequest();
    GetEntityTypeCountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetEntityTypeCountRequest) {
    _instance.parent = _instance.parent || '';
    _instance.filterByCategory = _instance.filterByCategory || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetEntityTypeCountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.filterByCategory = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetEntityTypeCountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetEntityTypeCountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.filterByCategory) {
      _writer.writeEnum(2, _instance.filterByCategory);
    }
  }

  private _parent: string;
  private _filterByCategory: ondewoNlu011.EntityTypeCategory;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetEntityTypeCountRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetEntityTypeCountRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.filterByCategory = _value.filterByCategory;
    GetEntityTypeCountRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get filterByCategory(): ondewoNlu011.EntityTypeCategory {
    return this._filterByCategory;
  }
  set filterByCategory(value: ondewoNlu011.EntityTypeCategory) {
    this._filterByCategory = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetEntityTypeCountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetEntityTypeCountRequest.AsObject {
    return {
      parent: this.parent,
      filterByCategory: this.filterByCategory
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
  ): GetEntityTypeCountRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      filterByCategory:
        ondewoNlu011.EntityTypeCategory[
          this.filterByCategory === null || this.filterByCategory === undefined
            ? 0
            : this.filterByCategory
        ]
    };
  }
}
export module GetEntityTypeCountRequest {
  /**
   * Standard JavaScript object representation for GetEntityTypeCountRequest
   */
  export interface AsObject {
    parent: string;
    filterByCategory: ondewoNlu011.EntityTypeCategory;
  }

  /**
   * Protobuf JSON representation for GetEntityTypeCountRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    filterByCategory: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetProjectStatRequest
 */
export class GetProjectStatRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetProjectStatRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProjectStatRequest();
    GetProjectStatRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProjectStatRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProjectStatRequest,
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

    GetProjectStatRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProjectStatRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProjectStatRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProjectStatRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    GetProjectStatRequest.refineValues(this);
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
    GetProjectStatRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProjectStatRequest.AsObject {
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
  ): GetProjectStatRequest.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module GetProjectStatRequest {
  /**
   * Standard JavaScript object representation for GetProjectStatRequest
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for GetProjectStatRequest
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetProjectElementStatRequest
 */
export class GetProjectElementStatRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetProjectElementStatRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProjectElementStatRequest();
    GetProjectElementStatRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProjectElementStatRequest) {
    _instance.name = _instance.name || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProjectElementStatRequest,
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
        default:
          _reader.skipField();
      }
    }

    GetProjectElementStatRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProjectElementStatRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
  }

  private _name: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProjectElementStatRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetProjectElementStatRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.languageCode = _value.languageCode;
    GetProjectElementStatRequest.refineValues(this);
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProjectElementStatRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProjectElementStatRequest.AsObject {
    return {
      name: this.name,
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
  ): GetProjectElementStatRequest.AsProtobufJSON {
    return {
      name: this.name,
      languageCode: this.languageCode
    };
  }
}
export module GetProjectElementStatRequest {
  /**
   * Standard JavaScript object representation for GetProjectElementStatRequest
   */
  export interface AsObject {
    name: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for GetProjectElementStatRequest
   */
  export interface AsProtobufJSON {
    name: string;
    languageCode: string;
  }
}
