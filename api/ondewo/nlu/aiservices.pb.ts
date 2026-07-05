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
import * as ondewoNlu005 from '../../ondewo/nlu/common.pb';
import * as googleApi006 from '../../google/api/annotations.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as googleRpc010 from '../../google/rpc/status.pb';
import * as googleType011 from '../../google/type/latlng.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/session.pb';
export enum Mode {
  UNSPECIFIED = 0,
  EXCLUSIVE = 1,
  INCLUSIVE = 2
}
export enum IntentAlgorithms {
  OndewoIntentExactContextDetector = 0,
  OndewoIntentExactMatch = 1,
  OndewoIntentNamedExactMatch = 2,
  OndewoIntentSimilarityMatch = 3,
  OndewoIntentNamedSimilarityMatch = 4,
  OndewoIntentBertClassifier = 7,
  OndewoIntentMetaClassifier = 8,
  IntentExitDetector = 10,
  OndewoIntentRankingMatch = 11,
  OndewoWeightedEnsemble = 13,
  OndewoIntentExitDetector = 14,
  OndewoIntentParameterMatch = 15
}
/**
 * Message implementation for ondewo.nlu.ListLlmModelsRequest
 */
export class ListLlmModelsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmModelsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmModelsRequest();
    ListLlmModelsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmModelsRequest) {
    _instance.ccaiServiceName = _instance.ccaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmModelsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ccaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmModelsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmModelsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiServiceName) {
      _writer.writeString(1, _instance.ccaiServiceName);
    }
  }

  private _ccaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmModelsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLlmModelsRequest.AsObject>) {
    _value = _value || {};
    this.ccaiServiceName = _value.ccaiServiceName;
    ListLlmModelsRequest.refineValues(this);
  }
  get ccaiServiceName(): string {
    return this._ccaiServiceName;
  }
  set ccaiServiceName(value: string) {
    this._ccaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmModelsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmModelsRequest.AsObject {
    return {
      ccaiServiceName: this.ccaiServiceName
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
  ): ListLlmModelsRequest.AsProtobufJSON {
    return {
      ccaiServiceName: this.ccaiServiceName
    };
  }
}
export module ListLlmModelsRequest {
  /**
   * Standard JavaScript object representation for ListLlmModelsRequest
   */
  export interface AsObject {
    ccaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for ListLlmModelsRequest
   */
  export interface AsProtobufJSON {
    ccaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmModelsResponse
 */
export class ListLlmModelsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmModelsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmModelsResponse();
    ListLlmModelsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmModelsResponse) {
    _instance.llmModels = _instance.llmModels || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmModelsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmModel();
          _reader.readMessage(
            messageInitializer1,
            LlmModel.deserializeBinaryFromReader
          );
          (_instance.llmModels = _instance.llmModels || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmModelsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmModelsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.llmModels && _instance.llmModels.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmModels as any,
        LlmModel.serializeBinaryToWriter
      );
    }
  }

  private _llmModels?: LlmModel[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmModelsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLlmModelsResponse.AsObject>) {
    _value = _value || {};
    this.llmModels = (_value.llmModels || []).map(m => new LlmModel(m));
    ListLlmModelsResponse.refineValues(this);
  }
  get llmModels(): LlmModel[] | undefined {
    return this._llmModels;
  }
  set llmModels(value: LlmModel[] | undefined) {
    this._llmModels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmModelsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmModelsResponse.AsObject {
    return {
      llmModels: (this.llmModels || []).map(m => m.toObject())
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
  ): ListLlmModelsResponse.AsProtobufJSON {
    return {
      llmModels: (this.llmModels || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListLlmModelsResponse {
  /**
   * Standard JavaScript object representation for ListLlmModelsResponse
   */
  export interface AsObject {
    llmModels?: LlmModel.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListLlmModelsResponse
   */
  export interface AsProtobufJSON {
    llmModels: LlmModel.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmModel
 */
export class LlmModel implements GrpcMessage {
  static id = 'ondewo.nlu.LlmModel';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmModel();
    LlmModel.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmModel) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.ccaiServiceName = _instance.ccaiServiceName || '';
    _instance.ccaiServiceProvider = _instance.ccaiServiceProvider || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmModel,
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
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.ccaiServiceName = _reader.readString();
          break;
        case 5:
          _instance.ccaiServiceProvider = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmModel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: LlmModel, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.ccaiServiceName) {
      _writer.writeString(4, _instance.ccaiServiceName);
    }
    if (_instance.ccaiServiceProvider) {
      _writer.writeEnum(5, _instance.ccaiServiceProvider);
    }
  }

  private _name: string;
  private _displayName: string;
  private _description: string;
  private _ccaiServiceName: string;
  private _ccaiServiceProvider: ondewoNlu014.CcaiServiceProvider;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmModel to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmModel.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.ccaiServiceName = _value.ccaiServiceName;
    this.ccaiServiceProvider = _value.ccaiServiceProvider;
    LlmModel.refineValues(this);
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
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get ccaiServiceName(): string {
    return this._ccaiServiceName;
  }
  set ccaiServiceName(value: string) {
    this._ccaiServiceName = value;
  }
  get ccaiServiceProvider(): ondewoNlu014.CcaiServiceProvider {
    return this._ccaiServiceProvider;
  }
  set ccaiServiceProvider(value: ondewoNlu014.CcaiServiceProvider) {
    this._ccaiServiceProvider = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmModel.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      ccaiServiceName: this.ccaiServiceName,
      ccaiServiceProvider: this.ccaiServiceProvider
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
  ): LlmModel.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      ccaiServiceName: this.ccaiServiceName,
      ccaiServiceProvider:
        ondewoNlu014.CcaiServiceProvider[
          this.ccaiServiceProvider === null ||
          this.ccaiServiceProvider === undefined
            ? 0
            : this.ccaiServiceProvider
        ]
    };
  }
}
export module LlmModel {
  /**
   * Standard JavaScript object representation for LlmModel
   */
  export interface AsObject {
    name: string;
    displayName: string;
    description: string;
    ccaiServiceName: string;
    ccaiServiceProvider: ondewoNlu014.CcaiServiceProvider;
  }

  /**
   * Protobuf JSON representation for LlmModel
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    description: string;
    ccaiServiceName: string;
    ccaiServiceProvider: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmGenerateRequest
 */
export class LlmGenerateRequest implements GrpcMessage {
  static id = 'ondewo.nlu.LlmGenerateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmGenerateRequest();
    LlmGenerateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmGenerateRequest) {
    _instance.llmGenerationRequest =
      _instance.llmGenerationRequest || undefined;
    _instance.ccaiServiceName = _instance.ccaiServiceName || '';
    _instance.fileResources = _instance.fileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmGenerateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmGenerationRequest = new googleProtobuf003.Struct();
          _reader.readMessage(
            _instance.llmGenerationRequest,
            googleProtobuf003.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.ccaiServiceName = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new ondewoNlu015.FileResource();
          _reader.readMessage(
            messageInitializer3,
            ondewoNlu015.FileResource.deserializeBinaryFromReader
          );
          (_instance.fileResources = _instance.fileResources || []).push(
            messageInitializer3
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LlmGenerateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmGenerateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmGenerationRequest) {
      _writer.writeMessage(
        1,
        _instance.llmGenerationRequest as any,
        googleProtobuf003.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.ccaiServiceName) {
      _writer.writeString(2, _instance.ccaiServiceName);
    }
    if (_instance.fileResources && _instance.fileResources.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.fileResources as any,
        ondewoNlu015.FileResource.serializeBinaryToWriter
      );
    }
  }

  private _llmGenerationRequest?: googleProtobuf003.Struct;
  private _ccaiServiceName: string;
  private _fileResources?: ondewoNlu015.FileResource[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmGenerateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmGenerateRequest.AsObject>) {
    _value = _value || {};
    this.llmGenerationRequest = _value.llmGenerationRequest
      ? new googleProtobuf003.Struct(_value.llmGenerationRequest)
      : undefined;
    this.ccaiServiceName = _value.ccaiServiceName;
    this.fileResources = (_value.fileResources || []).map(
      m => new ondewoNlu015.FileResource(m)
    );
    LlmGenerateRequest.refineValues(this);
  }
  get llmGenerationRequest(): googleProtobuf003.Struct | undefined {
    return this._llmGenerationRequest;
  }
  set llmGenerationRequest(value: googleProtobuf003.Struct | undefined) {
    this._llmGenerationRequest = value;
  }
  get ccaiServiceName(): string {
    return this._ccaiServiceName;
  }
  set ccaiServiceName(value: string) {
    this._ccaiServiceName = value;
  }
  get fileResources(): ondewoNlu015.FileResource[] | undefined {
    return this._fileResources;
  }
  set fileResources(value: ondewoNlu015.FileResource[] | undefined) {
    this._fileResources = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmGenerateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmGenerateRequest.AsObject {
    return {
      llmGenerationRequest: this.llmGenerationRequest
        ? this.llmGenerationRequest.toObject()
        : undefined,
      ccaiServiceName: this.ccaiServiceName,
      fileResources: (this.fileResources || []).map(m => m.toObject())
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
  ): LlmGenerateRequest.AsProtobufJSON {
    return {
      llmGenerationRequest: this.llmGenerationRequest
        ? this.llmGenerationRequest.toProtobufJSON(options)
        : null,
      ccaiServiceName: this.ccaiServiceName,
      fileResources: (this.fileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module LlmGenerateRequest {
  /**
   * Standard JavaScript object representation for LlmGenerateRequest
   */
  export interface AsObject {
    llmGenerationRequest?: googleProtobuf003.Struct.AsObject;
    ccaiServiceName: string;
    fileResources?: ondewoNlu015.FileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for LlmGenerateRequest
   */
  export interface AsProtobufJSON {
    llmGenerationRequest: googleProtobuf003.Struct.AsProtobufJSON | null;
    ccaiServiceName: string;
    fileResources: ondewoNlu015.FileResource.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmGenerateResponse
 */
export class LlmGenerateResponse implements GrpcMessage {
  static id = 'ondewo.nlu.LlmGenerateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmGenerateResponse();
    LlmGenerateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmGenerateResponse) {
    _instance.llmGenerationResponse =
      _instance.llmGenerationResponse || undefined;
    _instance.fileResources = _instance.fileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmGenerateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmGenerationResponse = new googleProtobuf003.Struct();
          _reader.readMessage(
            _instance.llmGenerationResponse,
            googleProtobuf003.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu015.FileResource();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu015.FileResource.deserializeBinaryFromReader
          );
          (_instance.fileResources = _instance.fileResources || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LlmGenerateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmGenerateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.llmGenerationResponse) {
      _writer.writeMessage(
        1,
        _instance.llmGenerationResponse as any,
        googleProtobuf003.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.fileResources && _instance.fileResources.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.fileResources as any,
        ondewoNlu015.FileResource.serializeBinaryToWriter
      );
    }
  }

  private _llmGenerationResponse?: googleProtobuf003.Struct;
  private _fileResources?: ondewoNlu015.FileResource[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmGenerateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmGenerateResponse.AsObject>) {
    _value = _value || {};
    this.llmGenerationResponse = _value.llmGenerationResponse
      ? new googleProtobuf003.Struct(_value.llmGenerationResponse)
      : undefined;
    this.fileResources = (_value.fileResources || []).map(
      m => new ondewoNlu015.FileResource(m)
    );
    LlmGenerateResponse.refineValues(this);
  }
  get llmGenerationResponse(): googleProtobuf003.Struct | undefined {
    return this._llmGenerationResponse;
  }
  set llmGenerationResponse(value: googleProtobuf003.Struct | undefined) {
    this._llmGenerationResponse = value;
  }
  get fileResources(): ondewoNlu015.FileResource[] | undefined {
    return this._fileResources;
  }
  set fileResources(value: ondewoNlu015.FileResource[] | undefined) {
    this._fileResources = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmGenerateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmGenerateResponse.AsObject {
    return {
      llmGenerationResponse: this.llmGenerationResponse
        ? this.llmGenerationResponse.toObject()
        : undefined,
      fileResources: (this.fileResources || []).map(m => m.toObject())
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
  ): LlmGenerateResponse.AsProtobufJSON {
    return {
      llmGenerationResponse: this.llmGenerationResponse
        ? this.llmGenerationResponse.toProtobufJSON(options)
        : null,
      fileResources: (this.fileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module LlmGenerateResponse {
  /**
   * Standard JavaScript object representation for LlmGenerateResponse
   */
  export interface AsObject {
    llmGenerationResponse?: googleProtobuf003.Struct.AsObject;
    fileResources?: ondewoNlu015.FileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for LlmGenerateResponse
   */
  export interface AsProtobufJSON {
    llmGenerationResponse: googleProtobuf003.Struct.AsProtobufJSON | null;
    fileResources: ondewoNlu015.FileResource.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamingLlmGenerateResponse
 */
export class StreamingLlmGenerateResponse implements GrpcMessage {
  static id = 'ondewo.nlu.StreamingLlmGenerateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingLlmGenerateResponse();
    StreamingLlmGenerateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingLlmGenerateResponse) {
    _instance.llmGenerationStreamResponse =
      _instance.llmGenerationStreamResponse || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingLlmGenerateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmGenerationStreamResponse = new googleProtobuf003.Struct();
          _reader.readMessage(
            _instance.llmGenerationStreamResponse,
            googleProtobuf003.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingLlmGenerateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingLlmGenerateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.llmGenerationStreamResponse) {
      _writer.writeMessage(
        1,
        _instance.llmGenerationStreamResponse as any,
        googleProtobuf003.Struct.serializeBinaryToWriter
      );
    }
  }

  private _llmGenerationStreamResponse?: googleProtobuf003.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingLlmGenerateResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamingLlmGenerateResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmGenerationStreamResponse = _value.llmGenerationStreamResponse
      ? new googleProtobuf003.Struct(_value.llmGenerationStreamResponse)
      : undefined;
    StreamingLlmGenerateResponse.refineValues(this);
  }
  get llmGenerationStreamResponse(): googleProtobuf003.Struct | undefined {
    return this._llmGenerationStreamResponse;
  }
  set llmGenerationStreamResponse(value: googleProtobuf003.Struct | undefined) {
    this._llmGenerationStreamResponse = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingLlmGenerateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingLlmGenerateResponse.AsObject {
    return {
      llmGenerationStreamResponse: this.llmGenerationStreamResponse
        ? this.llmGenerationStreamResponse.toObject()
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
  ): StreamingLlmGenerateResponse.AsProtobufJSON {
    return {
      llmGenerationStreamResponse: this.llmGenerationStreamResponse
        ? this.llmGenerationStreamResponse.toProtobufJSON(options)
        : null
    };
  }
}
export module StreamingLlmGenerateResponse {
  /**
   * Standard JavaScript object representation for StreamingLlmGenerateResponse
   */
  export interface AsObject {
    llmGenerationStreamResponse?: googleProtobuf003.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamingLlmGenerateResponse
   */
  export interface AsProtobufJSON {
    llmGenerationStreamResponse: googleProtobuf003.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ExtractEntitiesRequest
 */
export class ExtractEntitiesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExtractEntitiesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExtractEntitiesRequest();
    ExtractEntitiesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExtractEntitiesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.text = _instance.text || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentName = _instance.intentName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExtractEntitiesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.intentName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ExtractEntitiesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExtractEntitiesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.intentName) {
      _writer.writeString(4, _instance.intentName);
    }
  }

  private _parent: string;
  private _text: string;
  private _languageCode: string;
  private _intentName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExtractEntitiesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExtractEntitiesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.text = _value.text;
    this.languageCode = _value.languageCode;
    this.intentName = _value.intentName;
    ExtractEntitiesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentName(): string {
    return this._intentName;
  }
  set intentName(value: string) {
    this._intentName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExtractEntitiesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExtractEntitiesRequest.AsObject {
    return {
      parent: this.parent,
      text: this.text,
      languageCode: this.languageCode,
      intentName: this.intentName
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
  ): ExtractEntitiesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      text: this.text,
      languageCode: this.languageCode,
      intentName: this.intentName
    };
  }
}
export module ExtractEntitiesRequest {
  /**
   * Standard JavaScript object representation for ExtractEntitiesRequest
   */
  export interface AsObject {
    parent: string;
    text: string;
    languageCode: string;
    intentName: string;
  }

  /**
   * Protobuf JSON representation for ExtractEntitiesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    text: string;
    languageCode: string;
    intentName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ExtractEntitiesFuzzyRequest
 */
export class ExtractEntitiesFuzzyRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExtractEntitiesFuzzyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExtractEntitiesFuzzyRequest();
    ExtractEntitiesFuzzyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExtractEntitiesFuzzyRequest) {
    _instance.parent = _instance.parent || '';
    _instance.text = _instance.text || '';
    _instance.potentialEntities = _instance.potentialEntities || [];
    _instance.minimalScore = _instance.minimalScore || 0;
    _instance.allowOverlaps = _instance.allowOverlaps || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExtractEntitiesFuzzyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new EntityTypeFuzzyNerConfig();
          _reader.readMessage(
            messageInitializer3,
            EntityTypeFuzzyNerConfig.deserializeBinaryFromReader
          );
          (_instance.potentialEntities =
            _instance.potentialEntities || []).push(messageInitializer3);
          break;
        case 4:
          _instance.minimalScore = _reader.readFloat();
          break;
        case 5:
          _instance.allowOverlaps = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ExtractEntitiesFuzzyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExtractEntitiesFuzzyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.potentialEntities && _instance.potentialEntities.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.potentialEntities as any,
        EntityTypeFuzzyNerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.minimalScore) {
      _writer.writeFloat(4, _instance.minimalScore);
    }
    if (_instance.allowOverlaps) {
      _writer.writeBool(5, _instance.allowOverlaps);
    }
  }

  private _parent: string;
  private _text: string;
  private _potentialEntities?: EntityTypeFuzzyNerConfig[];
  private _minimalScore: number;
  private _allowOverlaps: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExtractEntitiesFuzzyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExtractEntitiesFuzzyRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.text = _value.text;
    this.potentialEntities = (_value.potentialEntities || []).map(
      m => new EntityTypeFuzzyNerConfig(m)
    );
    this.minimalScore = _value.minimalScore;
    this.allowOverlaps = _value.allowOverlaps;
    ExtractEntitiesFuzzyRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get potentialEntities(): EntityTypeFuzzyNerConfig[] | undefined {
    return this._potentialEntities;
  }
  set potentialEntities(value: EntityTypeFuzzyNerConfig[] | undefined) {
    this._potentialEntities = value;
  }
  get minimalScore(): number {
    return this._minimalScore;
  }
  set minimalScore(value: number) {
    this._minimalScore = value;
  }
  get allowOverlaps(): boolean {
    return this._allowOverlaps;
  }
  set allowOverlaps(value: boolean) {
    this._allowOverlaps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExtractEntitiesFuzzyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExtractEntitiesFuzzyRequest.AsObject {
    return {
      parent: this.parent,
      text: this.text,
      potentialEntities: (this.potentialEntities || []).map(m => m.toObject()),
      minimalScore: this.minimalScore,
      allowOverlaps: this.allowOverlaps
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
  ): ExtractEntitiesFuzzyRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      text: this.text,
      potentialEntities: (this.potentialEntities || []).map(m =>
        m.toProtobufJSON(options)
      ),
      minimalScore: this.minimalScore,
      allowOverlaps: this.allowOverlaps
    };
  }
}
export module ExtractEntitiesFuzzyRequest {
  /**
   * Standard JavaScript object representation for ExtractEntitiesFuzzyRequest
   */
  export interface AsObject {
    parent: string;
    text: string;
    potentialEntities?: EntityTypeFuzzyNerConfig.AsObject[];
    minimalScore: number;
    allowOverlaps: boolean;
  }

  /**
   * Protobuf JSON representation for ExtractEntitiesFuzzyRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    text: string;
    potentialEntities: EntityTypeFuzzyNerConfig.AsProtobufJSON[] | null;
    minimalScore: number;
    allowOverlaps: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.EntityTypeFuzzyNerConfig
 */
export class EntityTypeFuzzyNerConfig implements GrpcMessage {
  static id = 'ondewo.nlu.EntityTypeFuzzyNerConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityTypeFuzzyNerConfig();
    EntityTypeFuzzyNerConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityTypeFuzzyNerConfig) {
    _instance.entityType = _instance.entityType || undefined;
    _instance.minimalScore = _instance.minimalScore || 0;
    _instance.entityValues = _instance.entityValues || [];
    _instance.algorithm = _instance.algorithm || 0;
    _instance.allowOverlaps = _instance.allowOverlaps || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityTypeFuzzyNerConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityType = new ondewoNlu013.EntityType();
          _reader.readMessage(
            _instance.entityType,
            ondewoNlu013.EntityType.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.minimalScore = _reader.readFloat();
          break;
        case 3:
          (_instance.entityValues = _instance.entityValues || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.algorithm = _reader.readEnum();
          break;
        case 5:
          _instance.allowOverlaps = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityTypeFuzzyNerConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityTypeFuzzyNerConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.entityType) {
      _writer.writeMessage(
        1,
        _instance.entityType as any,
        ondewoNlu013.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.minimalScore) {
      _writer.writeFloat(2, _instance.minimalScore);
    }
    if (_instance.entityValues && _instance.entityValues.length) {
      _writer.writeRepeatedString(3, _instance.entityValues);
    }
    if (_instance.algorithm) {
      _writer.writeEnum(4, _instance.algorithm);
    }
    if (_instance.allowOverlaps) {
      _writer.writeBool(5, _instance.allowOverlaps);
    }
  }

  private _entityType?: ondewoNlu013.EntityType;
  private _minimalScore: number;
  private _entityValues: string[];
  private _algorithm: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm;
  private _allowOverlaps: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityTypeFuzzyNerConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityTypeFuzzyNerConfig.AsObject>) {
    _value = _value || {};
    this.entityType = _value.entityType
      ? new ondewoNlu013.EntityType(_value.entityType)
      : undefined;
    this.minimalScore = _value.minimalScore;
    this.entityValues = (_value.entityValues || []).slice();
    this.algorithm = _value.algorithm;
    this.allowOverlaps = _value.allowOverlaps;
    EntityTypeFuzzyNerConfig.refineValues(this);
  }
  get entityType(): ondewoNlu013.EntityType | undefined {
    return this._entityType;
  }
  set entityType(value: ondewoNlu013.EntityType | undefined) {
    this._entityType = value;
  }
  get minimalScore(): number {
    return this._minimalScore;
  }
  set minimalScore(value: number) {
    this._minimalScore = value;
  }
  get entityValues(): string[] {
    return this._entityValues;
  }
  set entityValues(value: string[]) {
    this._entityValues = value;
  }
  get algorithm(): EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm {
    return this._algorithm;
  }
  set algorithm(value: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm) {
    this._algorithm = value;
  }
  get allowOverlaps(): boolean {
    return this._allowOverlaps;
  }
  set allowOverlaps(value: boolean) {
    this._allowOverlaps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityTypeFuzzyNerConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityTypeFuzzyNerConfig.AsObject {
    return {
      entityType: this.entityType ? this.entityType.toObject() : undefined,
      minimalScore: this.minimalScore,
      entityValues: (this.entityValues || []).slice(),
      algorithm: this.algorithm,
      allowOverlaps: this.allowOverlaps
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
  ): EntityTypeFuzzyNerConfig.AsProtobufJSON {
    return {
      entityType: this.entityType
        ? this.entityType.toProtobufJSON(options)
        : null,
      minimalScore: this.minimalScore,
      entityValues: (this.entityValues || []).slice(),
      algorithm:
        EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm[
          this.algorithm === null || this.algorithm === undefined
            ? 0
            : this.algorithm
        ],
      allowOverlaps: this.allowOverlaps
    };
  }
}
export module EntityTypeFuzzyNerConfig {
  /**
   * Standard JavaScript object representation for EntityTypeFuzzyNerConfig
   */
  export interface AsObject {
    entityType?: ondewoNlu013.EntityType.AsObject;
    minimalScore: number;
    entityValues: string[];
    algorithm: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm;
    allowOverlaps: boolean;
  }

  /**
   * Protobuf JSON representation for EntityTypeFuzzyNerConfig
   */
  export interface AsProtobufJSON {
    entityType: ondewoNlu013.EntityType.AsProtobufJSON | null;
    minimalScore: number;
    entityValues: string[];
    algorithm: string;
    allowOverlaps: boolean;
  }
  export enum FuzzyNerAlgorithm {
    PREFILTER_LEVENSHTEIN = 0,
    LOCAL_MAXIMUM = 1
  }
}

/**
 * Message implementation for ondewo.nlu.EntityDetected
 */
export class EntityDetected implements GrpcMessage {
  static id = 'ondewo.nlu.EntityDetected';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityDetected();
    EntityDetected.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityDetected) {
    _instance.entity = _instance.entity || undefined;
    _instance.extractionMethod = _instance.extractionMethod || '';
    _instance.score = _instance.score || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityDetected,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entity = new ondewoNlu012.Intent.TrainingPhrase.Entity();
          _reader.readMessage(
            _instance.entity,
            ondewoNlu012.Intent.TrainingPhrase.Entity
              .deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.extractionMethod = _reader.readString();
          break;
        case 3:
          _instance.score = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityDetected.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityDetected,
    _writer: BinaryWriter
  ) {
    if (_instance.entity) {
      _writer.writeMessage(
        1,
        _instance.entity as any,
        ondewoNlu012.Intent.TrainingPhrase.Entity.serializeBinaryToWriter
      );
    }
    if (_instance.extractionMethod) {
      _writer.writeString(2, _instance.extractionMethod);
    }
    if (_instance.score) {
      _writer.writeFloat(3, _instance.score);
    }
  }

  private _entity?: ondewoNlu012.Intent.TrainingPhrase.Entity;
  private _extractionMethod: string;
  private _score: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityDetected to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityDetected.AsObject>) {
    _value = _value || {};
    this.entity = _value.entity
      ? new ondewoNlu012.Intent.TrainingPhrase.Entity(_value.entity)
      : undefined;
    this.extractionMethod = _value.extractionMethod;
    this.score = _value.score;
    EntityDetected.refineValues(this);
  }
  get entity(): ondewoNlu012.Intent.TrainingPhrase.Entity | undefined {
    return this._entity;
  }
  set entity(value: ondewoNlu012.Intent.TrainingPhrase.Entity | undefined) {
    this._entity = value;
  }
  get extractionMethod(): string {
    return this._extractionMethod;
  }
  set extractionMethod(value: string) {
    this._extractionMethod = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityDetected.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityDetected.AsObject {
    return {
      entity: this.entity ? this.entity.toObject() : undefined,
      extractionMethod: this.extractionMethod,
      score: this.score
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
  ): EntityDetected.AsProtobufJSON {
    return {
      entity: this.entity ? this.entity.toProtobufJSON(options) : null,
      extractionMethod: this.extractionMethod,
      score: this.score
    };
  }
}
export module EntityDetected {
  /**
   * Standard JavaScript object representation for EntityDetected
   */
  export interface AsObject {
    entity?: ondewoNlu012.Intent.TrainingPhrase.Entity.AsObject;
    extractionMethod: string;
    score: number;
  }

  /**
   * Protobuf JSON representation for EntityDetected
   */
  export interface AsProtobufJSON {
    entity: ondewoNlu012.Intent.TrainingPhrase.Entity.AsProtobufJSON | null;
    extractionMethod: string;
    score: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ExtractEntitiesResponse
 */
export class ExtractEntitiesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ExtractEntitiesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExtractEntitiesResponse();
    ExtractEntitiesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExtractEntitiesResponse) {
    _instance.entitiesDetected = _instance.entitiesDetected || [];
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExtractEntitiesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new EntityDetected();
          _reader.readMessage(
            messageInitializer1,
            EntityDetected.deserializeBinaryFromReader
          );
          (_instance.entitiesDetected = _instance.entitiesDetected || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ExtractEntitiesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExtractEntitiesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.entitiesDetected && _instance.entitiesDetected.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.entitiesDetected as any,
        EntityDetected.serializeBinaryToWriter
      );
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
  }

  private _entitiesDetected?: EntityDetected[];
  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExtractEntitiesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExtractEntitiesResponse.AsObject>) {
    _value = _value || {};
    this.entitiesDetected = (_value.entitiesDetected || []).map(
      m => new EntityDetected(m)
    );
    this.text = _value.text;
    ExtractEntitiesResponse.refineValues(this);
  }
  get entitiesDetected(): EntityDetected[] | undefined {
    return this._entitiesDetected;
  }
  set entitiesDetected(value: EntityDetected[] | undefined) {
    this._entitiesDetected = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExtractEntitiesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExtractEntitiesResponse.AsObject {
    return {
      entitiesDetected: (this.entitiesDetected || []).map(m => m.toObject()),
      text: this.text
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
  ): ExtractEntitiesResponse.AsProtobufJSON {
    return {
      entitiesDetected: (this.entitiesDetected || []).map(m =>
        m.toProtobufJSON(options)
      ),
      text: this.text
    };
  }
}
export module ExtractEntitiesResponse {
  /**
   * Standard JavaScript object representation for ExtractEntitiesResponse
   */
  export interface AsObject {
    entitiesDetected?: EntityDetected.AsObject[];
    text: string;
  }

  /**
   * Protobuf JSON representation for ExtractEntitiesResponse
   */
  export interface AsProtobufJSON {
    entitiesDetected: EntityDetected.AsProtobufJSON[] | null;
    text: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesRequest
 */
export class GetAlternativeSentencesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAlternativeSentencesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAlternativeSentencesRequest();
    GetAlternativeSentencesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAlternativeSentencesRequest) {
    _instance.config = _instance.config || undefined;
    _instance.sentence = _instance.sentence || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.parent = _instance.parent || '';
    _instance.protectedWords = _instance.protectedWords || [];
    _instance.wordsToChange = _instance.wordsToChange || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAlternativeSentencesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.config = new DataEnrichmentConfig();
          _reader.readMessage(
            _instance.config,
            DataEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.sentence = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.parent = _reader.readString();
          break;
        case 6:
          (_instance.protectedWords = _instance.protectedWords || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.wordsToChange = _instance.wordsToChange || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetAlternativeSentencesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAlternativeSentencesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.config) {
      _writer.writeMessage(
        1,
        _instance.config as any,
        DataEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.sentence) {
      _writer.writeString(2, _instance.sentence);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.parent) {
      _writer.writeString(5, _instance.parent);
    }
    if (_instance.protectedWords && _instance.protectedWords.length) {
      _writer.writeRepeatedString(6, _instance.protectedWords);
    }
    if (_instance.wordsToChange && _instance.wordsToChange.length) {
      _writer.writeRepeatedString(7, _instance.wordsToChange);
    }
  }

  private _config?: DataEnrichmentConfig;
  private _sentence: string;
  private _languageCode: string;
  private _parent: string;
  private _protectedWords: string[];
  private _wordsToChange: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAlternativeSentencesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetAlternativeSentencesRequest.AsObject>
  ) {
    _value = _value || {};
    this.config = _value.config
      ? new DataEnrichmentConfig(_value.config)
      : undefined;
    this.sentence = _value.sentence;
    this.languageCode = _value.languageCode;
    this.parent = _value.parent;
    this.protectedWords = (_value.protectedWords || []).slice();
    this.wordsToChange = (_value.wordsToChange || []).slice();
    GetAlternativeSentencesRequest.refineValues(this);
  }
  get config(): DataEnrichmentConfig | undefined {
    return this._config;
  }
  set config(value: DataEnrichmentConfig | undefined) {
    this._config = value;
  }
  get sentence(): string {
    return this._sentence;
  }
  set sentence(value: string) {
    this._sentence = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get protectedWords(): string[] {
    return this._protectedWords;
  }
  set protectedWords(value: string[]) {
    this._protectedWords = value;
  }
  get wordsToChange(): string[] {
    return this._wordsToChange;
  }
  set wordsToChange(value: string[]) {
    this._wordsToChange = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAlternativeSentencesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAlternativeSentencesRequest.AsObject {
    return {
      config: this.config ? this.config.toObject() : undefined,
      sentence: this.sentence,
      languageCode: this.languageCode,
      parent: this.parent,
      protectedWords: (this.protectedWords || []).slice(),
      wordsToChange: (this.wordsToChange || []).slice()
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
  ): GetAlternativeSentencesRequest.AsProtobufJSON {
    return {
      config: this.config ? this.config.toProtobufJSON(options) : null,
      sentence: this.sentence,
      languageCode: this.languageCode,
      parent: this.parent,
      protectedWords: (this.protectedWords || []).slice(),
      wordsToChange: (this.wordsToChange || []).slice()
    };
  }
}
export module GetAlternativeSentencesRequest {
  /**
   * Standard JavaScript object representation for GetAlternativeSentencesRequest
   */
  export interface AsObject {
    config?: DataEnrichmentConfig.AsObject;
    sentence: string;
    languageCode: string;
    parent: string;
    protectedWords: string[];
    wordsToChange: string[];
  }

  /**
   * Protobuf JSON representation for GetAlternativeSentencesRequest
   */
  export interface AsProtobufJSON {
    config: DataEnrichmentConfig.AsProtobufJSON | null;
    sentence: string;
    languageCode: string;
    parent: string;
    protectedWords: string[];
    wordsToChange: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GenerateUserSaysRequest
 */
export class GenerateUserSaysRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GenerateUserSaysRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GenerateUserSaysRequest();
    GenerateUserSaysRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GenerateUserSaysRequest) {
    _instance.languageCode = _instance.languageCode || '';
    _instance.parent = _instance.parent || '';
    _instance.nRepeatSynonym = _instance.nRepeatSynonym || 0;
    _instance.branch = _instance.branch || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GenerateUserSaysRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.parent = _reader.readString();
          break;
        case 6:
          _instance.nRepeatSynonym = _reader.readInt32();
          break;
        case 8:
          _instance.branch = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GenerateUserSaysRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GenerateUserSaysRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.parent) {
      _writer.writeString(5, _instance.parent);
    }
    if (_instance.nRepeatSynonym) {
      _writer.writeInt32(6, _instance.nRepeatSynonym);
    }
    if (_instance.branch) {
      _writer.writeString(8, _instance.branch);
    }
  }

  private _languageCode: string;
  private _parent: string;
  private _nRepeatSynonym: number;
  private _branch: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GenerateUserSaysRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GenerateUserSaysRequest.AsObject>) {
    _value = _value || {};
    this.languageCode = _value.languageCode;
    this.parent = _value.parent;
    this.nRepeatSynonym = _value.nRepeatSynonym;
    this.branch = _value.branch;
    GenerateUserSaysRequest.refineValues(this);
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get nRepeatSynonym(): number {
    return this._nRepeatSynonym;
  }
  set nRepeatSynonym(value: number) {
    this._nRepeatSynonym = value;
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
    GenerateUserSaysRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GenerateUserSaysRequest.AsObject {
    return {
      languageCode: this.languageCode,
      parent: this.parent,
      nRepeatSynonym: this.nRepeatSynonym,
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
  ): GenerateUserSaysRequest.AsProtobufJSON {
    return {
      languageCode: this.languageCode,
      parent: this.parent,
      nRepeatSynonym: this.nRepeatSynonym,
      branch: this.branch
    };
  }
}
export module GenerateUserSaysRequest {
  /**
   * Standard JavaScript object representation for GenerateUserSaysRequest
   */
  export interface AsObject {
    languageCode: string;
    parent: string;
    nRepeatSynonym: number;
    branch: string;
  }

  /**
   * Protobuf JSON representation for GenerateUserSaysRequest
   */
  export interface AsProtobufJSON {
    languageCode: string;
    parent: string;
    nRepeatSynonym: number;
    branch: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GenerateResponsesRequest
 */
export class GenerateResponsesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GenerateResponsesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GenerateResponsesRequest();
    GenerateResponsesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GenerateResponsesRequest) {
    _instance.languageCode = _instance.languageCode || '';
    _instance.parent = _instance.parent || '';
    _instance.nRepeatSynonym = _instance.nRepeatSynonym || 0;
    _instance.branch = _instance.branch || '';
    _instance.dropUnknownParameters = _instance.dropUnknownParameters || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GenerateResponsesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.parent = _reader.readString();
          break;
        case 7:
          _instance.nRepeatSynonym = _reader.readInt32();
          break;
        case 8:
          _instance.branch = _reader.readString();
          break;
        case 9:
          _instance.dropUnknownParameters = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    GenerateResponsesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GenerateResponsesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.parent) {
      _writer.writeString(5, _instance.parent);
    }
    if (_instance.nRepeatSynonym) {
      _writer.writeInt32(7, _instance.nRepeatSynonym);
    }
    if (_instance.branch) {
      _writer.writeString(8, _instance.branch);
    }
    if (_instance.dropUnknownParameters) {
      _writer.writeBool(9, _instance.dropUnknownParameters);
    }
  }

  private _languageCode: string;
  private _parent: string;
  private _nRepeatSynonym: number;
  private _branch: string;
  private _dropUnknownParameters: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GenerateResponsesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GenerateResponsesRequest.AsObject>) {
    _value = _value || {};
    this.languageCode = _value.languageCode;
    this.parent = _value.parent;
    this.nRepeatSynonym = _value.nRepeatSynonym;
    this.branch = _value.branch;
    this.dropUnknownParameters = _value.dropUnknownParameters;
    GenerateResponsesRequest.refineValues(this);
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get nRepeatSynonym(): number {
    return this._nRepeatSynonym;
  }
  set nRepeatSynonym(value: number) {
    this._nRepeatSynonym = value;
  }
  get branch(): string {
    return this._branch;
  }
  set branch(value: string) {
    this._branch = value;
  }
  get dropUnknownParameters(): boolean {
    return this._dropUnknownParameters;
  }
  set dropUnknownParameters(value: boolean) {
    this._dropUnknownParameters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GenerateResponsesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GenerateResponsesRequest.AsObject {
    return {
      languageCode: this.languageCode,
      parent: this.parent,
      nRepeatSynonym: this.nRepeatSynonym,
      branch: this.branch,
      dropUnknownParameters: this.dropUnknownParameters
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
  ): GenerateResponsesRequest.AsProtobufJSON {
    return {
      languageCode: this.languageCode,
      parent: this.parent,
      nRepeatSynonym: this.nRepeatSynonym,
      branch: this.branch,
      dropUnknownParameters: this.dropUnknownParameters
    };
  }
}
export module GenerateResponsesRequest {
  /**
   * Standard JavaScript object representation for GenerateResponsesRequest
   */
  export interface AsObject {
    languageCode: string;
    parent: string;
    nRepeatSynonym: number;
    branch: string;
    dropUnknownParameters: boolean;
  }

  /**
   * Protobuf JSON representation for GenerateResponsesRequest
   */
  export interface AsProtobufJSON {
    languageCode: string;
    parent: string;
    nRepeatSynonym: number;
    branch: string;
    dropUnknownParameters: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesRequest
 */
export class GetAlternativeTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAlternativeTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAlternativeTrainingPhrasesRequest();
    GetAlternativeTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAlternativeTrainingPhrasesRequest) {
    _instance.config = _instance.config || undefined;
    _instance.trainingPhrase = _instance.trainingPhrase || undefined;
    _instance.intentName = _instance.intentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.parent = _instance.parent || '';
    _instance.detectEntities = _instance.detectEntities || false;
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.protectedWords = _instance.protectedWords || [];
    _instance.wordsToChange = _instance.wordsToChange || [];
    _instance.branch = _instance.branch || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAlternativeTrainingPhrasesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.config = new DataEnrichmentConfig();
          _reader.readMessage(
            _instance.config,
            DataEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.trainingPhrase = new ondewoNlu012.Intent.TrainingPhrase();
          _reader.readMessage(
            _instance.trainingPhrase,
            ondewoNlu012.Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.intentName = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.parent = _reader.readString();
          break;
        case 6:
          _instance.detectEntities = _reader.readBool();
          break;
        case 7:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 8:
          (_instance.protectedWords = _instance.protectedWords || []).push(
            _reader.readString()
          );
          break;
        case 9:
          (_instance.wordsToChange = _instance.wordsToChange || []).push(
            _reader.readString()
          );
          break;
        case 10:
          _instance.branch = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAlternativeTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAlternativeTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.config) {
      _writer.writeMessage(
        1,
        _instance.config as any,
        DataEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.trainingPhrase) {
      _writer.writeMessage(
        2,
        _instance.trainingPhrase as any,
        ondewoNlu012.Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.intentName) {
      _writer.writeString(3, _instance.intentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.parent) {
      _writer.writeString(5, _instance.parent);
    }
    if (_instance.detectEntities) {
      _writer.writeBool(6, _instance.detectEntities);
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(7, _instance.similarityThreshold);
    }
    if (_instance.protectedWords && _instance.protectedWords.length) {
      _writer.writeRepeatedString(8, _instance.protectedWords);
    }
    if (_instance.wordsToChange && _instance.wordsToChange.length) {
      _writer.writeRepeatedString(9, _instance.wordsToChange);
    }
    if (_instance.branch) {
      _writer.writeString(10, _instance.branch);
    }
  }

  private _config?: DataEnrichmentConfig;
  private _trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase;
  private _intentName: string;
  private _languageCode: string;
  private _parent: string;
  private _detectEntities: boolean;
  private _similarityThreshold: number;
  private _protectedWords: string[];
  private _wordsToChange: string[];
  private _branch: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAlternativeTrainingPhrasesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetAlternativeTrainingPhrasesRequest.AsObject>
  ) {
    _value = _value || {};
    this.config = _value.config
      ? new DataEnrichmentConfig(_value.config)
      : undefined;
    this.trainingPhrase = _value.trainingPhrase
      ? new ondewoNlu012.Intent.TrainingPhrase(_value.trainingPhrase)
      : undefined;
    this.intentName = _value.intentName;
    this.languageCode = _value.languageCode;
    this.parent = _value.parent;
    this.detectEntities = _value.detectEntities;
    this.similarityThreshold = _value.similarityThreshold;
    this.protectedWords = (_value.protectedWords || []).slice();
    this.wordsToChange = (_value.wordsToChange || []).slice();
    this.branch = _value.branch;
    GetAlternativeTrainingPhrasesRequest.refineValues(this);
  }
  get config(): DataEnrichmentConfig | undefined {
    return this._config;
  }
  set config(value: DataEnrichmentConfig | undefined) {
    this._config = value;
  }
  get trainingPhrase(): ondewoNlu012.Intent.TrainingPhrase | undefined {
    return this._trainingPhrase;
  }
  set trainingPhrase(value: ondewoNlu012.Intent.TrainingPhrase | undefined) {
    this._trainingPhrase = value;
  }
  get intentName(): string {
    return this._intentName;
  }
  set intentName(value: string) {
    this._intentName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get detectEntities(): boolean {
    return this._detectEntities;
  }
  set detectEntities(value: boolean) {
    this._detectEntities = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get protectedWords(): string[] {
    return this._protectedWords;
  }
  set protectedWords(value: string[]) {
    this._protectedWords = value;
  }
  get wordsToChange(): string[] {
    return this._wordsToChange;
  }
  set wordsToChange(value: string[]) {
    this._wordsToChange = value;
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
    GetAlternativeTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAlternativeTrainingPhrasesRequest.AsObject {
    return {
      config: this.config ? this.config.toObject() : undefined,
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toObject()
        : undefined,
      intentName: this.intentName,
      languageCode: this.languageCode,
      parent: this.parent,
      detectEntities: this.detectEntities,
      similarityThreshold: this.similarityThreshold,
      protectedWords: (this.protectedWords || []).slice(),
      wordsToChange: (this.wordsToChange || []).slice(),
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
  ): GetAlternativeTrainingPhrasesRequest.AsProtobufJSON {
    return {
      config: this.config ? this.config.toProtobufJSON(options) : null,
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toProtobufJSON(options)
        : null,
      intentName: this.intentName,
      languageCode: this.languageCode,
      parent: this.parent,
      detectEntities: this.detectEntities,
      similarityThreshold: this.similarityThreshold,
      protectedWords: (this.protectedWords || []).slice(),
      wordsToChange: (this.wordsToChange || []).slice(),
      branch: this.branch
    };
  }
}
export module GetAlternativeTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for GetAlternativeTrainingPhrasesRequest
   */
  export interface AsObject {
    config?: DataEnrichmentConfig.AsObject;
    trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase.AsObject;
    intentName: string;
    languageCode: string;
    parent: string;
    detectEntities: boolean;
    similarityThreshold: number;
    protectedWords: string[];
    wordsToChange: string[];
    branch: string;
  }

  /**
   * Protobuf JSON representation for GetAlternativeTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    config: DataEnrichmentConfig.AsProtobufJSON | null;
    trainingPhrase: ondewoNlu012.Intent.TrainingPhrase.AsProtobufJSON | null;
    intentName: string;
    languageCode: string;
    parent: string;
    detectEntities: boolean;
    similarityThreshold: number;
    protectedWords: string[];
    wordsToChange: string[];
    branch: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSynonymsRequest
 */
export class GetSynonymsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSynonymsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSynonymsRequest();
    GetSynonymsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSynonymsRequest) {
    _instance.config = _instance.config || undefined;
    _instance.word = _instance.word || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSynonymsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.config = new DataEnrichmentConfig();
          _reader.readMessage(
            _instance.config,
            DataEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.word = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.parent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSynonymsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSynonymsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.config) {
      _writer.writeMessage(
        1,
        _instance.config as any,
        DataEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.word) {
      _writer.writeString(2, _instance.word);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.parent) {
      _writer.writeString(5, _instance.parent);
    }
  }

  private _config?: DataEnrichmentConfig;
  private _word: string;
  private _languageCode: string;
  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSynonymsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSynonymsRequest.AsObject>) {
    _value = _value || {};
    this.config = _value.config
      ? new DataEnrichmentConfig(_value.config)
      : undefined;
    this.word = _value.word;
    this.languageCode = _value.languageCode;
    this.parent = _value.parent;
    GetSynonymsRequest.refineValues(this);
  }
  get config(): DataEnrichmentConfig | undefined {
    return this._config;
  }
  set config(value: DataEnrichmentConfig | undefined) {
    this._config = value;
  }
  get word(): string {
    return this._word;
  }
  set word(value: string) {
    this._word = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
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
    GetSynonymsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSynonymsRequest.AsObject {
    return {
      config: this.config ? this.config.toObject() : undefined,
      word: this.word,
      languageCode: this.languageCode,
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
  ): GetSynonymsRequest.AsProtobufJSON {
    return {
      config: this.config ? this.config.toProtobufJSON(options) : null,
      word: this.word,
      languageCode: this.languageCode,
      parent: this.parent
    };
  }
}
export module GetSynonymsRequest {
  /**
   * Standard JavaScript object representation for GetSynonymsRequest
   */
  export interface AsObject {
    config?: DataEnrichmentConfig.AsObject;
    word: string;
    languageCode: string;
    parent: string;
  }

  /**
   * Protobuf JSON representation for GetSynonymsRequest
   */
  export interface AsProtobufJSON {
    config: DataEnrichmentConfig.AsProtobufJSON | null;
    word: string;
    languageCode: string;
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSynonymsResponse
 */
export class GetSynonymsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetSynonymsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSynonymsResponse();
    GetSynonymsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSynonymsResponse) {
    _instance.synonyms = _instance.synonyms || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSynonymsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Synonym();
          _reader.readMessage(
            messageInitializer1,
            Synonym.deserializeBinaryFromReader
          );
          (_instance.synonyms = _instance.synonyms || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetSynonymsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSynonymsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.synonyms && _instance.synonyms.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.synonyms as any,
        Synonym.serializeBinaryToWriter
      );
    }
  }

  private _synonyms?: Synonym[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSynonymsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSynonymsResponse.AsObject>) {
    _value = _value || {};
    this.synonyms = (_value.synonyms || []).map(m => new Synonym(m));
    GetSynonymsResponse.refineValues(this);
  }
  get synonyms(): Synonym[] | undefined {
    return this._synonyms;
  }
  set synonyms(value: Synonym[] | undefined) {
    this._synonyms = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSynonymsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSynonymsResponse.AsObject {
    return {
      synonyms: (this.synonyms || []).map(m => m.toObject())
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
  ): GetSynonymsResponse.AsProtobufJSON {
    return {
      synonyms: (this.synonyms || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetSynonymsResponse {
  /**
   * Standard JavaScript object representation for GetSynonymsResponse
   */
  export interface AsObject {
    synonyms?: Synonym.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetSynonymsResponse
   */
  export interface AsProtobufJSON {
    synonyms: Synonym.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.Synonym
 */
export class Synonym implements GrpcMessage {
  static id = 'ondewo.nlu.Synonym';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Synonym();
    Synonym.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Synonym) {
    _instance.synonym = _instance.synonym || '';
    _instance.score = _instance.score || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Synonym,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.synonym = _reader.readString();
          break;
        case 2:
          _instance.score = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Synonym.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Synonym, _writer: BinaryWriter) {
    if (_instance.synonym) {
      _writer.writeString(1, _instance.synonym);
    }
    if (_instance.score) {
      _writer.writeInt32(2, _instance.score);
    }
  }

  private _synonym: string;
  private _score: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Synonym to deeply clone from
   */
  constructor(_value?: RecursivePartial<Synonym.AsObject>) {
    _value = _value || {};
    this.synonym = _value.synonym;
    this.score = _value.score;
    Synonym.refineValues(this);
  }
  get synonym(): string {
    return this._synonym;
  }
  set synonym(value: string) {
    this._synonym = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Synonym.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Synonym.AsObject {
    return {
      synonym: this.synonym,
      score: this.score
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
  ): Synonym.AsProtobufJSON {
    return {
      synonym: this.synonym,
      score: this.score
    };
  }
}
export module Synonym {
  /**
   * Standard JavaScript object representation for Synonym
   */
  export interface AsObject {
    synonym: string;
    score: number;
  }

  /**
   * Protobuf JSON representation for Synonym
   */
  export interface AsProtobufJSON {
    synonym: string;
    score: number;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesResponse
 */
export class GetAlternativeSentencesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetAlternativeSentencesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAlternativeSentencesResponse();
    GetAlternativeSentencesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAlternativeSentencesResponse) {
    _instance.alternativeSentences = _instance.alternativeSentences || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAlternativeSentencesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AltSentence();
          _reader.readMessage(
            messageInitializer1,
            AltSentence.deserializeBinaryFromReader
          );
          (_instance.alternativeSentences =
            _instance.alternativeSentences || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetAlternativeSentencesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAlternativeSentencesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.alternativeSentences &&
      _instance.alternativeSentences.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.alternativeSentences as any,
        AltSentence.serializeBinaryToWriter
      );
    }
  }

  private _alternativeSentences?: AltSentence[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAlternativeSentencesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetAlternativeSentencesResponse.AsObject>
  ) {
    _value = _value || {};
    this.alternativeSentences = (_value.alternativeSentences || []).map(
      m => new AltSentence(m)
    );
    GetAlternativeSentencesResponse.refineValues(this);
  }
  get alternativeSentences(): AltSentence[] | undefined {
    return this._alternativeSentences;
  }
  set alternativeSentences(value: AltSentence[] | undefined) {
    this._alternativeSentences = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAlternativeSentencesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAlternativeSentencesResponse.AsObject {
    return {
      alternativeSentences: (this.alternativeSentences || []).map(m =>
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
  ): GetAlternativeSentencesResponse.AsProtobufJSON {
    return {
      alternativeSentences: (this.alternativeSentences || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module GetAlternativeSentencesResponse {
  /**
   * Standard JavaScript object representation for GetAlternativeSentencesResponse
   */
  export interface AsObject {
    alternativeSentences?: AltSentence.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetAlternativeSentencesResponse
   */
  export interface AsProtobufJSON {
    alternativeSentences: AltSentence.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GenerateResponsesResponse
 */
export class GenerateResponsesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GenerateResponsesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GenerateResponsesResponse();
    GenerateResponsesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GenerateResponsesResponse) {
    _instance.responses = _instance.responses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GenerateResponsesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.responses = _instance.responses || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GenerateResponsesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GenerateResponsesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.responses && _instance.responses.length) {
      _writer.writeRepeatedString(1, _instance.responses);
    }
  }

  private _responses: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GenerateResponsesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GenerateResponsesResponse.AsObject>) {
    _value = _value || {};
    this.responses = (_value.responses || []).slice();
    GenerateResponsesResponse.refineValues(this);
  }
  get responses(): string[] {
    return this._responses;
  }
  set responses(value: string[]) {
    this._responses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GenerateResponsesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GenerateResponsesResponse.AsObject {
    return {
      responses: (this.responses || []).slice()
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
  ): GenerateResponsesResponse.AsProtobufJSON {
    return {
      responses: (this.responses || []).slice()
    };
  }
}
export module GenerateResponsesResponse {
  /**
   * Standard JavaScript object representation for GenerateResponsesResponse
   */
  export interface AsObject {
    responses: string[];
  }

  /**
   * Protobuf JSON representation for GenerateResponsesResponse
   */
  export interface AsProtobufJSON {
    responses: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GenerateUserSaysResponse
 */
export class GenerateUserSaysResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GenerateUserSaysResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GenerateUserSaysResponse();
    GenerateUserSaysResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GenerateUserSaysResponse) {
    _instance.userSays = _instance.userSays || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GenerateUserSaysResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.userSays = _instance.userSays || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GenerateUserSaysResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GenerateUserSaysResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userSays && _instance.userSays.length) {
      _writer.writeRepeatedString(1, _instance.userSays);
    }
  }

  private _userSays: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GenerateUserSaysResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GenerateUserSaysResponse.AsObject>) {
    _value = _value || {};
    this.userSays = (_value.userSays || []).slice();
    GenerateUserSaysResponse.refineValues(this);
  }
  get userSays(): string[] {
    return this._userSays;
  }
  set userSays(value: string[]) {
    this._userSays = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GenerateUserSaysResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GenerateUserSaysResponse.AsObject {
    return {
      userSays: (this.userSays || []).slice()
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
  ): GenerateUserSaysResponse.AsProtobufJSON {
    return {
      userSays: (this.userSays || []).slice()
    };
  }
}
export module GenerateUserSaysResponse {
  /**
   * Standard JavaScript object representation for GenerateUserSaysResponse
   */
  export interface AsObject {
    userSays: string[];
  }

  /**
   * Protobuf JSON representation for GenerateUserSaysResponse
   */
  export interface AsProtobufJSON {
    userSays: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesResponse
 */
export class GetAlternativeTrainingPhrasesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetAlternativeTrainingPhrasesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAlternativeTrainingPhrasesResponse();
    GetAlternativeTrainingPhrasesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAlternativeTrainingPhrasesResponse) {
    _instance.alternativeTrainingPhrases =
      _instance.alternativeTrainingPhrases || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAlternativeTrainingPhrasesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AltTrainingPhrase();
          _reader.readMessage(
            messageInitializer1,
            AltTrainingPhrase.deserializeBinaryFromReader
          );
          (_instance.alternativeTrainingPhrases =
            _instance.alternativeTrainingPhrases || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetAlternativeTrainingPhrasesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAlternativeTrainingPhrasesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.alternativeTrainingPhrases &&
      _instance.alternativeTrainingPhrases.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.alternativeTrainingPhrases as any,
        AltTrainingPhrase.serializeBinaryToWriter
      );
    }
  }

  private _alternativeTrainingPhrases?: AltTrainingPhrase[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAlternativeTrainingPhrasesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetAlternativeTrainingPhrasesResponse.AsObject>
  ) {
    _value = _value || {};
    this.alternativeTrainingPhrases = (
      _value.alternativeTrainingPhrases || []
    ).map(m => new AltTrainingPhrase(m));
    GetAlternativeTrainingPhrasesResponse.refineValues(this);
  }
  get alternativeTrainingPhrases(): AltTrainingPhrase[] | undefined {
    return this._alternativeTrainingPhrases;
  }
  set alternativeTrainingPhrases(value: AltTrainingPhrase[] | undefined) {
    this._alternativeTrainingPhrases = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAlternativeTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAlternativeTrainingPhrasesResponse.AsObject {
    return {
      alternativeTrainingPhrases: (
        this.alternativeTrainingPhrases || []
      ).map(m => m.toObject())
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
  ): GetAlternativeTrainingPhrasesResponse.AsProtobufJSON {
    return {
      alternativeTrainingPhrases: (
        this.alternativeTrainingPhrases || []
      ).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetAlternativeTrainingPhrasesResponse {
  /**
   * Standard JavaScript object representation for GetAlternativeTrainingPhrasesResponse
   */
  export interface AsObject {
    alternativeTrainingPhrases?: AltTrainingPhrase.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetAlternativeTrainingPhrasesResponse
   */
  export interface AsProtobufJSON {
    alternativeTrainingPhrases: AltTrainingPhrase.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.AltSentence
 */
export class AltSentence implements GrpcMessage {
  static id = 'ondewo.nlu.AltSentence';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AltSentence();
    AltSentence.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AltSentence) {
    _instance.sentence = _instance.sentence || '';
    _instance.score = _instance.score || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AltSentence,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sentence = _reader.readString();
          break;
        case 2:
          _instance.score = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    AltSentence.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AltSentence,
    _writer: BinaryWriter
  ) {
    if (_instance.sentence) {
      _writer.writeString(1, _instance.sentence);
    }
    if (_instance.score) {
      _writer.writeFloat(2, _instance.score);
    }
  }

  private _sentence: string;
  private _score: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AltSentence to deeply clone from
   */
  constructor(_value?: RecursivePartial<AltSentence.AsObject>) {
    _value = _value || {};
    this.sentence = _value.sentence;
    this.score = _value.score;
    AltSentence.refineValues(this);
  }
  get sentence(): string {
    return this._sentence;
  }
  set sentence(value: string) {
    this._sentence = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AltSentence.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AltSentence.AsObject {
    return {
      sentence: this.sentence,
      score: this.score
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
  ): AltSentence.AsProtobufJSON {
    return {
      sentence: this.sentence,
      score: this.score
    };
  }
}
export module AltSentence {
  /**
   * Standard JavaScript object representation for AltSentence
   */
  export interface AsObject {
    sentence: string;
    score: number;
  }

  /**
   * Protobuf JSON representation for AltSentence
   */
  export interface AsProtobufJSON {
    sentence: string;
    score: number;
  }
}

/**
 * Message implementation for ondewo.nlu.AltTrainingPhrase
 */
export class AltTrainingPhrase implements GrpcMessage {
  static id = 'ondewo.nlu.AltTrainingPhrase';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AltTrainingPhrase();
    AltTrainingPhrase.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AltTrainingPhrase) {
    _instance.trainingPhrase = _instance.trainingPhrase || undefined;
    _instance.score = _instance.score || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AltTrainingPhrase,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.trainingPhrase = new ondewoNlu012.Intent.TrainingPhrase();
          _reader.readMessage(
            _instance.trainingPhrase,
            ondewoNlu012.Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.score = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    AltTrainingPhrase.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AltTrainingPhrase,
    _writer: BinaryWriter
  ) {
    if (_instance.trainingPhrase) {
      _writer.writeMessage(
        1,
        _instance.trainingPhrase as any,
        ondewoNlu012.Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.score) {
      _writer.writeFloat(2, _instance.score);
    }
  }

  private _trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase;
  private _score: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AltTrainingPhrase to deeply clone from
   */
  constructor(_value?: RecursivePartial<AltTrainingPhrase.AsObject>) {
    _value = _value || {};
    this.trainingPhrase = _value.trainingPhrase
      ? new ondewoNlu012.Intent.TrainingPhrase(_value.trainingPhrase)
      : undefined;
    this.score = _value.score;
    AltTrainingPhrase.refineValues(this);
  }
  get trainingPhrase(): ondewoNlu012.Intent.TrainingPhrase | undefined {
    return this._trainingPhrase;
  }
  set trainingPhrase(value: ondewoNlu012.Intent.TrainingPhrase | undefined) {
    this._trainingPhrase = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AltTrainingPhrase.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AltTrainingPhrase.AsObject {
    return {
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toObject()
        : undefined,
      score: this.score
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
  ): AltTrainingPhrase.AsProtobufJSON {
    return {
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toProtobufJSON(options)
        : null,
      score: this.score
    };
  }
}
export module AltTrainingPhrase {
  /**
   * Standard JavaScript object representation for AltTrainingPhrase
   */
  export interface AsObject {
    trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase.AsObject;
    score: number;
  }

  /**
   * Protobuf JSON representation for AltTrainingPhrase
   */
  export interface AsProtobufJSON {
    trainingPhrase: ondewoNlu012.Intent.TrainingPhrase.AsProtobufJSON | null;
    score: number;
  }
}

/**
 * Message implementation for ondewo.nlu.DataEnrichmentConfig
 */
export class DataEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.DataEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DataEnrichmentConfig();
    DataEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DataEnrichmentConfig) {
    _instance.entityEnrichment = _instance.entityEnrichment || undefined;
    _instance.thesaurusEnrichment = _instance.thesaurusEnrichment || undefined;
    _instance.word2vecEnrichment = _instance.word2vecEnrichment || undefined;
    _instance.wordNetEnrichment = _instance.wordNetEnrichment || undefined;
    _instance.gpt2Enrichment = _instance.gpt2Enrichment || undefined;
    _instance.gloveEnrichment = _instance.gloveEnrichment || undefined;
    _instance.bertEnrichment = _instance.bertEnrichment || undefined;
    _instance.xlnetEnrichment = _instance.xlnetEnrichment || undefined;
    _instance.llmEnrichment = _instance.llmEnrichment || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DataEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityEnrichment = new EntityEnrichmentConfig();
          _reader.readMessage(
            _instance.entityEnrichment,
            EntityEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.thesaurusEnrichment = new ThesaurusEnrichmentConfig();
          _reader.readMessage(
            _instance.thesaurusEnrichment,
            ThesaurusEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.word2vecEnrichment = new Word2VecEnrichmentConfig();
          _reader.readMessage(
            _instance.word2vecEnrichment,
            Word2VecEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.wordNetEnrichment = new WordNetAugEnrichmentConfig();
          _reader.readMessage(
            _instance.wordNetEnrichment,
            WordNetAugEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.gpt2Enrichment = new GPT2EnrichmentConfig();
          _reader.readMessage(
            _instance.gpt2Enrichment,
            GPT2EnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.gloveEnrichment = new GloVeEnrichmentConfig();
          _reader.readMessage(
            _instance.gloveEnrichment,
            GloVeEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.bertEnrichment = new BertAugEnrichmentConfig();
          _reader.readMessage(
            _instance.bertEnrichment,
            BertAugEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.xlnetEnrichment = new XLNetAugEnrichmentConfig();
          _reader.readMessage(
            _instance.xlnetEnrichment,
            XLNetAugEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.llmEnrichment = new LlmEnrichmentConfig();
          _reader.readMessage(
            _instance.llmEnrichment,
            LlmEnrichmentConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DataEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DataEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.entityEnrichment) {
      _writer.writeMessage(
        1,
        _instance.entityEnrichment as any,
        EntityEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.thesaurusEnrichment) {
      _writer.writeMessage(
        2,
        _instance.thesaurusEnrichment as any,
        ThesaurusEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.word2vecEnrichment) {
      _writer.writeMessage(
        3,
        _instance.word2vecEnrichment as any,
        Word2VecEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.wordNetEnrichment) {
      _writer.writeMessage(
        4,
        _instance.wordNetEnrichment as any,
        WordNetAugEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.gpt2Enrichment) {
      _writer.writeMessage(
        5,
        _instance.gpt2Enrichment as any,
        GPT2EnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.gloveEnrichment) {
      _writer.writeMessage(
        6,
        _instance.gloveEnrichment as any,
        GloVeEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.bertEnrichment) {
      _writer.writeMessage(
        8,
        _instance.bertEnrichment as any,
        BertAugEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.xlnetEnrichment) {
      _writer.writeMessage(
        9,
        _instance.xlnetEnrichment as any,
        XLNetAugEnrichmentConfig.serializeBinaryToWriter
      );
    }
    if (_instance.llmEnrichment) {
      _writer.writeMessage(
        10,
        _instance.llmEnrichment as any,
        LlmEnrichmentConfig.serializeBinaryToWriter
      );
    }
  }

  private _entityEnrichment?: EntityEnrichmentConfig;
  private _thesaurusEnrichment?: ThesaurusEnrichmentConfig;
  private _word2vecEnrichment?: Word2VecEnrichmentConfig;
  private _wordNetEnrichment?: WordNetAugEnrichmentConfig;
  private _gpt2Enrichment?: GPT2EnrichmentConfig;
  private _gloveEnrichment?: GloVeEnrichmentConfig;
  private _bertEnrichment?: BertAugEnrichmentConfig;
  private _xlnetEnrichment?: XLNetAugEnrichmentConfig;
  private _llmEnrichment?: LlmEnrichmentConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DataEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<DataEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.entityEnrichment = _value.entityEnrichment
      ? new EntityEnrichmentConfig(_value.entityEnrichment)
      : undefined;
    this.thesaurusEnrichment = _value.thesaurusEnrichment
      ? new ThesaurusEnrichmentConfig(_value.thesaurusEnrichment)
      : undefined;
    this.word2vecEnrichment = _value.word2vecEnrichment
      ? new Word2VecEnrichmentConfig(_value.word2vecEnrichment)
      : undefined;
    this.wordNetEnrichment = _value.wordNetEnrichment
      ? new WordNetAugEnrichmentConfig(_value.wordNetEnrichment)
      : undefined;
    this.gpt2Enrichment = _value.gpt2Enrichment
      ? new GPT2EnrichmentConfig(_value.gpt2Enrichment)
      : undefined;
    this.gloveEnrichment = _value.gloveEnrichment
      ? new GloVeEnrichmentConfig(_value.gloveEnrichment)
      : undefined;
    this.bertEnrichment = _value.bertEnrichment
      ? new BertAugEnrichmentConfig(_value.bertEnrichment)
      : undefined;
    this.xlnetEnrichment = _value.xlnetEnrichment
      ? new XLNetAugEnrichmentConfig(_value.xlnetEnrichment)
      : undefined;
    this.llmEnrichment = _value.llmEnrichment
      ? new LlmEnrichmentConfig(_value.llmEnrichment)
      : undefined;
    DataEnrichmentConfig.refineValues(this);
  }
  get entityEnrichment(): EntityEnrichmentConfig | undefined {
    return this._entityEnrichment;
  }
  set entityEnrichment(value: EntityEnrichmentConfig | undefined) {
    this._entityEnrichment = value;
  }
  get thesaurusEnrichment(): ThesaurusEnrichmentConfig | undefined {
    return this._thesaurusEnrichment;
  }
  set thesaurusEnrichment(value: ThesaurusEnrichmentConfig | undefined) {
    this._thesaurusEnrichment = value;
  }
  get word2vecEnrichment(): Word2VecEnrichmentConfig | undefined {
    return this._word2vecEnrichment;
  }
  set word2vecEnrichment(value: Word2VecEnrichmentConfig | undefined) {
    this._word2vecEnrichment = value;
  }
  get wordNetEnrichment(): WordNetAugEnrichmentConfig | undefined {
    return this._wordNetEnrichment;
  }
  set wordNetEnrichment(value: WordNetAugEnrichmentConfig | undefined) {
    this._wordNetEnrichment = value;
  }
  get gpt2Enrichment(): GPT2EnrichmentConfig | undefined {
    return this._gpt2Enrichment;
  }
  set gpt2Enrichment(value: GPT2EnrichmentConfig | undefined) {
    this._gpt2Enrichment = value;
  }
  get gloveEnrichment(): GloVeEnrichmentConfig | undefined {
    return this._gloveEnrichment;
  }
  set gloveEnrichment(value: GloVeEnrichmentConfig | undefined) {
    this._gloveEnrichment = value;
  }
  get bertEnrichment(): BertAugEnrichmentConfig | undefined {
    return this._bertEnrichment;
  }
  set bertEnrichment(value: BertAugEnrichmentConfig | undefined) {
    this._bertEnrichment = value;
  }
  get xlnetEnrichment(): XLNetAugEnrichmentConfig | undefined {
    return this._xlnetEnrichment;
  }
  set xlnetEnrichment(value: XLNetAugEnrichmentConfig | undefined) {
    this._xlnetEnrichment = value;
  }
  get llmEnrichment(): LlmEnrichmentConfig | undefined {
    return this._llmEnrichment;
  }
  set llmEnrichment(value: LlmEnrichmentConfig | undefined) {
    this._llmEnrichment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DataEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DataEnrichmentConfig.AsObject {
    return {
      entityEnrichment: this.entityEnrichment
        ? this.entityEnrichment.toObject()
        : undefined,
      thesaurusEnrichment: this.thesaurusEnrichment
        ? this.thesaurusEnrichment.toObject()
        : undefined,
      word2vecEnrichment: this.word2vecEnrichment
        ? this.word2vecEnrichment.toObject()
        : undefined,
      wordNetEnrichment: this.wordNetEnrichment
        ? this.wordNetEnrichment.toObject()
        : undefined,
      gpt2Enrichment: this.gpt2Enrichment
        ? this.gpt2Enrichment.toObject()
        : undefined,
      gloveEnrichment: this.gloveEnrichment
        ? this.gloveEnrichment.toObject()
        : undefined,
      bertEnrichment: this.bertEnrichment
        ? this.bertEnrichment.toObject()
        : undefined,
      xlnetEnrichment: this.xlnetEnrichment
        ? this.xlnetEnrichment.toObject()
        : undefined,
      llmEnrichment: this.llmEnrichment
        ? this.llmEnrichment.toObject()
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
  ): DataEnrichmentConfig.AsProtobufJSON {
    return {
      entityEnrichment: this.entityEnrichment
        ? this.entityEnrichment.toProtobufJSON(options)
        : null,
      thesaurusEnrichment: this.thesaurusEnrichment
        ? this.thesaurusEnrichment.toProtobufJSON(options)
        : null,
      word2vecEnrichment: this.word2vecEnrichment
        ? this.word2vecEnrichment.toProtobufJSON(options)
        : null,
      wordNetEnrichment: this.wordNetEnrichment
        ? this.wordNetEnrichment.toProtobufJSON(options)
        : null,
      gpt2Enrichment: this.gpt2Enrichment
        ? this.gpt2Enrichment.toProtobufJSON(options)
        : null,
      gloveEnrichment: this.gloveEnrichment
        ? this.gloveEnrichment.toProtobufJSON(options)
        : null,
      bertEnrichment: this.bertEnrichment
        ? this.bertEnrichment.toProtobufJSON(options)
        : null,
      xlnetEnrichment: this.xlnetEnrichment
        ? this.xlnetEnrichment.toProtobufJSON(options)
        : null,
      llmEnrichment: this.llmEnrichment
        ? this.llmEnrichment.toProtobufJSON(options)
        : null
    };
  }
}
export module DataEnrichmentConfig {
  /**
   * Standard JavaScript object representation for DataEnrichmentConfig
   */
  export interface AsObject {
    entityEnrichment?: EntityEnrichmentConfig.AsObject;
    thesaurusEnrichment?: ThesaurusEnrichmentConfig.AsObject;
    word2vecEnrichment?: Word2VecEnrichmentConfig.AsObject;
    wordNetEnrichment?: WordNetAugEnrichmentConfig.AsObject;
    gpt2Enrichment?: GPT2EnrichmentConfig.AsObject;
    gloveEnrichment?: GloVeEnrichmentConfig.AsObject;
    bertEnrichment?: BertAugEnrichmentConfig.AsObject;
    xlnetEnrichment?: XLNetAugEnrichmentConfig.AsObject;
    llmEnrichment?: LlmEnrichmentConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for DataEnrichmentConfig
   */
  export interface AsProtobufJSON {
    entityEnrichment: EntityEnrichmentConfig.AsProtobufJSON | null;
    thesaurusEnrichment: ThesaurusEnrichmentConfig.AsProtobufJSON | null;
    word2vecEnrichment: Word2VecEnrichmentConfig.AsProtobufJSON | null;
    wordNetEnrichment: WordNetAugEnrichmentConfig.AsProtobufJSON | null;
    gpt2Enrichment: GPT2EnrichmentConfig.AsProtobufJSON | null;
    gloveEnrichment: GloVeEnrichmentConfig.AsProtobufJSON | null;
    bertEnrichment: BertAugEnrichmentConfig.AsProtobufJSON | null;
    xlnetEnrichment: XLNetAugEnrichmentConfig.AsProtobufJSON | null;
    llmEnrichment: LlmEnrichmentConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.EntityEnrichmentConfig
 */
export class EntityEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.EntityEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityEnrichmentConfig();
    EntityEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    EntityEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    EntityEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): EntityEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module EntityEnrichmentConfig {
  /**
   * Standard JavaScript object representation for EntityEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for EntityEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ThesaurusEnrichmentConfig
 */
export class ThesaurusEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.ThesaurusEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ThesaurusEnrichmentConfig();
    ThesaurusEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ThesaurusEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ThesaurusEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ThesaurusEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ThesaurusEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ThesaurusEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<ThesaurusEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    ThesaurusEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ThesaurusEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ThesaurusEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): ThesaurusEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module ThesaurusEnrichmentConfig {
  /**
   * Standard JavaScript object representation for ThesaurusEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for ThesaurusEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.BertAugEnrichmentConfig
 */
export class BertAugEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.BertAugEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BertAugEnrichmentConfig();
    BertAugEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BertAugEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BertAugEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    BertAugEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BertAugEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BertAugEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<BertAugEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    BertAugEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BertAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BertAugEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): BertAugEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module BertAugEnrichmentConfig {
  /**
   * Standard JavaScript object representation for BertAugEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for BertAugEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.GloVeEnrichmentConfig
 */
export class GloVeEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.GloVeEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GloVeEnrichmentConfig();
    GloVeEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GloVeEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GloVeEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GloVeEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GloVeEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GloVeEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<GloVeEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    GloVeEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GloVeEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GloVeEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): GloVeEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module GloVeEnrichmentConfig {
  /**
   * Standard JavaScript object representation for GloVeEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for GloVeEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.GPT2EnrichmentConfig
 */
export class GPT2EnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.GPT2EnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GPT2EnrichmentConfig();
    GPT2EnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GPT2EnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GPT2EnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GPT2EnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GPT2EnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GPT2EnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<GPT2EnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    GPT2EnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GPT2EnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GPT2EnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): GPT2EnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module GPT2EnrichmentConfig {
  /**
   * Standard JavaScript object representation for GPT2EnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for GPT2EnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.Word2VecEnrichmentConfig
 */
export class Word2VecEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.Word2VecEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Word2VecEnrichmentConfig();
    Word2VecEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Word2VecEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Word2VecEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Word2VecEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Word2VecEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Word2VecEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<Word2VecEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    Word2VecEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Word2VecEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Word2VecEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): Word2VecEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module Word2VecEnrichmentConfig {
  /**
   * Standard JavaScript object representation for Word2VecEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for Word2VecEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.WordNetAugEnrichmentConfig
 */
export class WordNetAugEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.WordNetAugEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WordNetAugEnrichmentConfig();
    WordNetAugEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WordNetAugEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WordNetAugEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    WordNetAugEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WordNetAugEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WordNetAugEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<WordNetAugEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    WordNetAugEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WordNetAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WordNetAugEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): WordNetAugEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module WordNetAugEnrichmentConfig {
  /**
   * Standard JavaScript object representation for WordNetAugEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for WordNetAugEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.XLNetAugEnrichmentConfig
 */
export class XLNetAugEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.XLNetAugEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new XLNetAugEnrichmentConfig();
    XLNetAugEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: XLNetAugEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: XLNetAugEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    XLNetAugEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: XLNetAugEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of XLNetAugEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<XLNetAugEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    XLNetAugEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    XLNetAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): XLNetAugEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
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
  ): XLNetAugEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder
    };
  }
}
export module XLNetAugEnrichmentConfig {
  /**
   * Standard JavaScript object representation for XLNetAugEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }

  /**
   * Protobuf JSON representation for XLNetAugEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEnrichmentConfig
 */
export class LlmEnrichmentConfig implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEnrichmentConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEnrichmentConfig();
    LlmEnrichmentConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEnrichmentConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
    _instance.executionOrder = _instance.executionOrder || 0;
    _instance.ccaiServiceName = _instance.ccaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEnrichmentConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.enrichmentFactor = _reader.readInt32();
          break;
        case 3:
          _instance.executionOrder = _reader.readInt32();
          break;
        case 4:
          _instance.ccaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEnrichmentConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEnrichmentConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.enrichmentFactor) {
      _writer.writeInt32(2, _instance.enrichmentFactor);
    }
    if (_instance.executionOrder) {
      _writer.writeInt32(3, _instance.executionOrder);
    }
    if (_instance.ccaiServiceName) {
      _writer.writeString(4, _instance.ccaiServiceName);
    }
  }

  private _isActive: boolean;
  private _enrichmentFactor: number;
  private _executionOrder: number;
  private _ccaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEnrichmentConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEnrichmentConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.enrichmentFactor = _value.enrichmentFactor;
    this.executionOrder = _value.executionOrder;
    this.ccaiServiceName = _value.ccaiServiceName;
    LlmEnrichmentConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get enrichmentFactor(): number {
    return this._enrichmentFactor;
  }
  set enrichmentFactor(value: number) {
    this._enrichmentFactor = value;
  }
  get executionOrder(): number {
    return this._executionOrder;
  }
  set executionOrder(value: number) {
    this._executionOrder = value;
  }
  get ccaiServiceName(): string {
    return this._ccaiServiceName;
  }
  set ccaiServiceName(value: string) {
    this._ccaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEnrichmentConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEnrichmentConfig.AsObject {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder,
      ccaiServiceName: this.ccaiServiceName
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
  ): LlmEnrichmentConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      enrichmentFactor: this.enrichmentFactor,
      executionOrder: this.executionOrder,
      ccaiServiceName: this.ccaiServiceName
    };
  }
}
export module LlmEnrichmentConfig {
  /**
   * Standard JavaScript object representation for LlmEnrichmentConfig
   */
  export interface AsObject {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
    ccaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for LlmEnrichmentConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    enrichmentFactor: number;
    executionOrder: number;
    ccaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ClassifyIntentsRequest
 */
export class ClassifyIntentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ClassifyIntentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ClassifyIntentsRequest();
    ClassifyIntentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ClassifyIntentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.text = _instance.text || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.activeContexts = _instance.activeContexts || false;
    _instance.contextNames = _instance.contextNames || [];
    _instance.mode = _instance.mode || 0;
    _instance.algorithms = _instance.algorithms || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ClassifyIntentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.activeContexts = _reader.readBool();
          break;
        case 5:
          (_instance.contextNames = _instance.contextNames || []).push(
            _reader.readString()
          );
          break;
        case 6:
          _instance.mode = _reader.readEnum();
          break;
        case 7:
          _reader.readPackableEnumInto(
            (_instance.algorithms = _instance.algorithms || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ClassifyIntentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ClassifyIntentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.activeContexts) {
      _writer.writeBool(4, _instance.activeContexts);
    }
    if (_instance.contextNames && _instance.contextNames.length) {
      _writer.writeRepeatedString(5, _instance.contextNames);
    }
    if (_instance.mode) {
      _writer.writeEnum(6, _instance.mode);
    }
    if (_instance.algorithms && _instance.algorithms.length) {
      _writer.writePackedEnum(7, _instance.algorithms);
    }
  }

  private _parent: string;
  private _text: string;
  private _languageCode: string;
  private _activeContexts: boolean;
  private _contextNames: string[];
  private _mode: Mode;
  private _algorithms: IntentAlgorithms[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ClassifyIntentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ClassifyIntentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.text = _value.text;
    this.languageCode = _value.languageCode;
    this.activeContexts = _value.activeContexts;
    this.contextNames = (_value.contextNames || []).slice();
    this.mode = _value.mode;
    this.algorithms = (_value.algorithms || []).slice();
    ClassifyIntentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get activeContexts(): boolean {
    return this._activeContexts;
  }
  set activeContexts(value: boolean) {
    this._activeContexts = value;
  }
  get contextNames(): string[] {
    return this._contextNames;
  }
  set contextNames(value: string[]) {
    this._contextNames = value;
  }
  get mode(): Mode {
    return this._mode;
  }
  set mode(value: Mode) {
    this._mode = value;
  }
  get algorithms(): IntentAlgorithms[] {
    return this._algorithms;
  }
  set algorithms(value: IntentAlgorithms[]) {
    this._algorithms = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ClassifyIntentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ClassifyIntentsRequest.AsObject {
    return {
      parent: this.parent,
      text: this.text,
      languageCode: this.languageCode,
      activeContexts: this.activeContexts,
      contextNames: (this.contextNames || []).slice(),
      mode: this.mode,
      algorithms: (this.algorithms || []).slice()
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
  ): ClassifyIntentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      text: this.text,
      languageCode: this.languageCode,
      activeContexts: this.activeContexts,
      contextNames: (this.contextNames || []).slice(),
      mode: Mode[this.mode === null || this.mode === undefined ? 0 : this.mode],
      algorithms: (this.algorithms || []).map(v => IntentAlgorithms[v])
    };
  }
}
export module ClassifyIntentsRequest {
  /**
   * Standard JavaScript object representation for ClassifyIntentsRequest
   */
  export interface AsObject {
    parent: string;
    text: string;
    languageCode: string;
    activeContexts: boolean;
    contextNames: string[];
    mode: Mode;
    algorithms: IntentAlgorithms[];
  }

  /**
   * Protobuf JSON representation for ClassifyIntentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    text: string;
    languageCode: string;
    activeContexts: boolean;
    contextNames: string[];
    mode: string;
    algorithms: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.IntentClassified
 */
export class IntentClassified implements GrpcMessage {
  static id = 'ondewo.nlu.IntentClassified';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IntentClassified();
    IntentClassified.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IntentClassified) {
    _instance.intentName = _instance.intentName || '';
    _instance.intentDisplayName = _instance.intentDisplayName || '';
    _instance.classifier = _instance.classifier || '';
    _instance.score = _instance.score || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IntentClassified,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        case 2:
          _instance.intentDisplayName = _reader.readString();
          break;
        case 3:
          _instance.classifier = _reader.readString();
          break;
        case 4:
          _instance.score = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    IntentClassified.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IntentClassified,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
    if (_instance.intentDisplayName) {
      _writer.writeString(2, _instance.intentDisplayName);
    }
    if (_instance.classifier) {
      _writer.writeString(3, _instance.classifier);
    }
    if (_instance.score) {
      _writer.writeFloat(4, _instance.score);
    }
  }

  private _intentName: string;
  private _intentDisplayName: string;
  private _classifier: string;
  private _score: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IntentClassified to deeply clone from
   */
  constructor(_value?: RecursivePartial<IntentClassified.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    this.intentDisplayName = _value.intentDisplayName;
    this.classifier = _value.classifier;
    this.score = _value.score;
    IntentClassified.refineValues(this);
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
  get classifier(): string {
    return this._classifier;
  }
  set classifier(value: string) {
    this._classifier = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IntentClassified.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IntentClassified.AsObject {
    return {
      intentName: this.intentName,
      intentDisplayName: this.intentDisplayName,
      classifier: this.classifier,
      score: this.score
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
  ): IntentClassified.AsProtobufJSON {
    return {
      intentName: this.intentName,
      intentDisplayName: this.intentDisplayName,
      classifier: this.classifier,
      score: this.score
    };
  }
}
export module IntentClassified {
  /**
   * Standard JavaScript object representation for IntentClassified
   */
  export interface AsObject {
    intentName: string;
    intentDisplayName: string;
    classifier: string;
    score: number;
  }

  /**
   * Protobuf JSON representation for IntentClassified
   */
  export interface AsProtobufJSON {
    intentName: string;
    intentDisplayName: string;
    classifier: string;
    score: number;
  }
}

/**
 * Message implementation for ondewo.nlu.ClassifyIntentsResponse
 */
export class ClassifyIntentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ClassifyIntentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ClassifyIntentsResponse();
    ClassifyIntentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ClassifyIntentsResponse) {
    _instance.intentsClassified = _instance.intentsClassified || [];
    _instance.text = _instance.text || '';
    _instance.activeContexts = _instance.activeContexts || false;
    _instance.contextNames = _instance.contextNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ClassifyIntentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new IntentClassified();
          _reader.readMessage(
            messageInitializer1,
            IntentClassified.deserializeBinaryFromReader
          );
          (_instance.intentsClassified =
            _instance.intentsClassified || []).push(messageInitializer1);
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        case 3:
          _instance.activeContexts = _reader.readBool();
          break;
        case 4:
          (_instance.contextNames = _instance.contextNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ClassifyIntentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ClassifyIntentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.intentsClassified && _instance.intentsClassified.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.intentsClassified as any,
        IntentClassified.serializeBinaryToWriter
      );
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.activeContexts) {
      _writer.writeBool(3, _instance.activeContexts);
    }
    if (_instance.contextNames && _instance.contextNames.length) {
      _writer.writeRepeatedString(4, _instance.contextNames);
    }
  }

  private _intentsClassified?: IntentClassified[];
  private _text: string;
  private _activeContexts: boolean;
  private _contextNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ClassifyIntentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ClassifyIntentsResponse.AsObject>) {
    _value = _value || {};
    this.intentsClassified = (_value.intentsClassified || []).map(
      m => new IntentClassified(m)
    );
    this.text = _value.text;
    this.activeContexts = _value.activeContexts;
    this.contextNames = (_value.contextNames || []).slice();
    ClassifyIntentsResponse.refineValues(this);
  }
  get intentsClassified(): IntentClassified[] | undefined {
    return this._intentsClassified;
  }
  set intentsClassified(value: IntentClassified[] | undefined) {
    this._intentsClassified = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get activeContexts(): boolean {
    return this._activeContexts;
  }
  set activeContexts(value: boolean) {
    this._activeContexts = value;
  }
  get contextNames(): string[] {
    return this._contextNames;
  }
  set contextNames(value: string[]) {
    this._contextNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ClassifyIntentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ClassifyIntentsResponse.AsObject {
    return {
      intentsClassified: (this.intentsClassified || []).map(m => m.toObject()),
      text: this.text,
      activeContexts: this.activeContexts,
      contextNames: (this.contextNames || []).slice()
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
  ): ClassifyIntentsResponse.AsProtobufJSON {
    return {
      intentsClassified: (this.intentsClassified || []).map(m =>
        m.toProtobufJSON(options)
      ),
      text: this.text,
      activeContexts: this.activeContexts,
      contextNames: (this.contextNames || []).slice()
    };
  }
}
export module ClassifyIntentsResponse {
  /**
   * Standard JavaScript object representation for ClassifyIntentsResponse
   */
  export interface AsObject {
    intentsClassified?: IntentClassified.AsObject[];
    text: string;
    activeContexts: boolean;
    contextNames: string[];
  }

  /**
   * Protobuf JSON representation for ClassifyIntentsResponse
   */
  export interface AsProtobufJSON {
    intentsClassified: IntentClassified.AsProtobufJSON[] | null;
    text: string;
    activeContexts: boolean;
    contextNames: string[];
  }
}
