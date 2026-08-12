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
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleApi003 from '../../google/api/annotations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as googleType009 from '../../google/type/latlng.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/llm-evaluation.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/operations.pb';
import * as ondewoNlu016 from '../../ondewo/nlu/session.pb';
export enum RagChunkMethod {
  RAG_CHUNK_METHOD_UNSPECIFIED = 0,
  RAG_CHUNK_METHOD_NAIVE = 1,
  RAG_CHUNK_METHOD_BOOK = 2,
  RAG_CHUNK_METHOD_EMAIL = 3,
  RAG_CHUNK_METHOD_LAWS = 4,
  RAG_CHUNK_METHOD_MANUAL = 5,
  RAG_CHUNK_METHOD_ONE = 6,
  RAG_CHUNK_METHOD_PAPER = 7,
  RAG_CHUNK_METHOD_PICTURE = 8,
  RAG_CHUNK_METHOD_PRESENTATION = 9,
  RAG_CHUNK_METHOD_QA = 10,
  RAG_CHUNK_METHOD_TABLE = 11,
  RAG_CHUNK_METHOD_TAG = 12
}
export enum RagGraphRagMethod {
  RAG_GRAPH_RAG_METHOD_UNSPECIFIED = 0,
  RAG_GRAPH_RAG_METHOD_LIGHT = 1,
  RAG_GRAPH_RAG_METHOD_GENERAL = 2
}
export enum RagDocumentType {
  RAG_DOCUMENT_TYPE_UNSPECIFIED = 0,
  RAG_DOCUMENT_TYPE_PDF = 1,
  RAG_DOCUMENT_TYPE_DOC = 2,
  RAG_DOCUMENT_TYPE_VISUAL = 3,
  RAG_DOCUMENT_TYPE_AURAL = 4,
  RAG_DOCUMENT_TYPE_VIRTUAL = 5,
  RAG_DOCUMENT_TYPE_FOLDER = 6,
  RAG_DOCUMENT_TYPE_OTHER = 7
}
export enum RagDocumentStatus {
  RAG_DOCUMENT_STATUS_UNSPECIFIED = 0,
  RAG_DOCUMENT_STATUS_UNSTART = 1,
  RAG_DOCUMENT_STATUS_RUNNING = 2,
  RAG_DOCUMENT_STATUS_CANCEL = 3,
  RAG_DOCUMENT_STATUS_DONE = 4,
  RAG_DOCUMENT_STATUS_FAIL = 5
}
export enum RagLogic {
  RAG_LOGIC_UNSPECIFIED = 0,
  RAG_LOGIC_AND = 1,
  RAG_LOGIC_OR = 2
}
export enum RagComparisonOperator {
  RAG_COMPARISON_OPERATOR_UNSPECIFIED = 0,
  RAG_COMPARISON_OPERATOR_CONTAINS = 1,
  RAG_COMPARISON_OPERATOR_NOT_CONTAINS = 2,
  RAG_COMPARISON_OPERATOR_IN = 3,
  RAG_COMPARISON_OPERATOR_NOT_IN = 4,
  RAG_COMPARISON_OPERATOR_START_WITH = 5,
  RAG_COMPARISON_OPERATOR_END_WITH = 6,
  RAG_COMPARISON_OPERATOR_EMPTY = 7,
  RAG_COMPARISON_OPERATOR_NOT_EMPTY = 8,
  RAG_COMPARISON_OPERATOR_EQ = 9,
  RAG_COMPARISON_OPERATOR_NEQ = 10,
  RAG_COMPARISON_OPERATOR_GT = 11,
  RAG_COMPARISON_OPERATOR_LT = 12,
  RAG_COMPARISON_OPERATOR_GEQ = 13,
  RAG_COMPARISON_OPERATOR_LEQ = 14
}
export enum RagCrawlerSelectorType {
  RAG_CRAWLER_SELECTOR_TYPE_UNSPECIFIED = 0,
  RAG_CRAWLER_SELECTOR_TYPE_ID = 1,
  RAG_CRAWLER_SELECTOR_TYPE_CSS_CLASS = 2,
  RAG_CRAWLER_SELECTOR_TYPE_XPATH = 3
}
export enum RagCrawlerAuthenticationExecutionType {
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_UNSPECIFIED = 0,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_SERVER_SIDE = 1,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_CLIENT_SIDE = 2
}
export enum RagCrawlerPruningThresholdType {
  RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_UNSPECIFIED = 0,
  RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_FIXED = 1,
  RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_DYNAMIC = 2
}
export enum RagCrawlerMetaDataExtractorType {
  RAG_CRAWLER_META_DATA_EXTRACTOR_TPYE_UNSPECIFIED = 0,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_REGEX = 1,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_FIXED_VALUE = 2,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_CSS_SELECTOR = 3,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_XPATH_SELECTOR = 4,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_ID_SELECTOR = 5
}
export enum RagCrawlerCrawlStrategy {
  RAG_CRAWLER_CRAWL_STRATEGY_UNSPECIFIED = 0,
  RAG_CRAWLER_CRAWL_STRATEGY_BFS = 1,
  RAG_CRAWLER_CRAWL_STRATEGY_DFS = 2,
  RAG_CRAWLER_CRAWL_STRATEGY_BEST_FIRST = 3
}
/**
 * Message implementation for ondewo.nlu.RagFileMetadata
 */
export class RagFileMetadata implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileMetadata';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileMetadata();
    RagFileMetadata.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileMetadata) {
    _instance.fileName = _instance.fileName || '';
    _instance.contentType = _instance.contentType || '';
    _instance.size = _instance.size || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileMetadata,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fileName = _reader.readString();
          break;
        case 2:
          _instance.contentType = _reader.readString();
          break;
        case 3:
          _instance.size = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileMetadata.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileMetadata,
    _writer: BinaryWriter
  ) {
    if (_instance.fileName) {
      _writer.writeString(1, _instance.fileName);
    }
    if (_instance.contentType) {
      _writer.writeString(2, _instance.contentType);
    }
    if (_instance.size) {
      _writer.writeInt64String(3, _instance.size);
    }
  }

  private _fileName: string;
  private _contentType: string;
  private _size: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileMetadata to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileMetadata.AsObject>) {
    _value = _value || {};
    this.fileName = _value.fileName;
    this.contentType = _value.contentType;
    this.size = _value.size;
    RagFileMetadata.refineValues(this);
  }
  get fileName(): string {
    return this._fileName;
  }
  set fileName(value: string) {
    this._fileName = value;
  }
  get contentType(): string {
    return this._contentType;
  }
  set contentType(value: string) {
    this._contentType = value;
  }
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileMetadata.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileMetadata.AsObject {
    return {
      fileName: this.fileName,
      contentType: this.contentType,
      size: this.size
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
  ): RagFileMetadata.AsProtobufJSON {
    return {
      fileName: this.fileName,
      contentType: this.contentType,
      size: this.size
    };
  }
}
export module RagFileMetadata {
  /**
   * Standard JavaScript object representation for RagFileMetadata
   */
  export interface AsObject {
    fileName: string;
    contentType: string;
    size: string;
  }

  /**
   * Protobuf JSON representation for RagFileMetadata
   */
  export interface AsProtobufJSON {
    fileName: string;
    contentType: string;
    size: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagPartialSuccess
 */
export class RagPartialSuccess implements GrpcMessage {
  static id = 'ondewo.nlu.RagPartialSuccess';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagPartialSuccess();
    RagPartialSuccess.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagPartialSuccess) {
    _instance.successCount = _instance.successCount || 0;
    _instance.errors = _instance.errors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagPartialSuccess,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.successCount = _reader.readInt32();
          break;
        case 2:
          (_instance.errors = _instance.errors || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagPartialSuccess.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagPartialSuccess,
    _writer: BinaryWriter
  ) {
    if (_instance.successCount) {
      _writer.writeInt32(1, _instance.successCount);
    }
    if (_instance.errors && _instance.errors.length) {
      _writer.writeRepeatedString(2, _instance.errors);
    }
  }

  private _successCount: number;
  private _errors: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagPartialSuccess to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagPartialSuccess.AsObject>) {
    _value = _value || {};
    this.successCount = _value.successCount;
    this.errors = (_value.errors || []).slice();
    RagPartialSuccess.refineValues(this);
  }
  get successCount(): number {
    return this._successCount;
  }
  set successCount(value: number) {
    this._successCount = value;
  }
  get errors(): string[] {
    return this._errors;
  }
  set errors(value: string[]) {
    this._errors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagPartialSuccess.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagPartialSuccess.AsObject {
    return {
      successCount: this.successCount,
      errors: (this.errors || []).slice()
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
  ): RagPartialSuccess.AsProtobufJSON {
    return {
      successCount: this.successCount,
      errors: (this.errors || []).slice()
    };
  }
}
export module RagPartialSuccess {
  /**
   * Standard JavaScript object representation for RagPartialSuccess
   */
  export interface AsObject {
    successCount: number;
    errors: string[];
  }

  /**
   * Protobuf JSON representation for RagPartialSuccess
   */
  export interface AsProtobufJSON {
    successCount: number;
    errors: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateDatasetRequest
 */
export class RagCreateDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateDatasetRequest();
    RagCreateDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateDatasetRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.embeddingModelCcaiServiceName =
      _instance.embeddingModelCcaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateDatasetRequest,
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
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.avatar = _reader.readString();
          break;
        case 6:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 7:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.embeddingModelCcaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(5, _instance.avatar);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(6, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        7,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModelCcaiServiceName) {
      _writer.writeString(8, _instance.embeddingModelCcaiServiceName);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _embeddingModelCcaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateDatasetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateDatasetRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.embeddingModelCcaiServiceName = _value.embeddingModelCcaiServiceName;
    RagCreateDatasetRequest.refineValues(this);
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
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get embeddingModelCcaiServiceName(): string {
    return this._embeddingModelCcaiServiceName;
  }
  set embeddingModelCcaiServiceName(value: string) {
    this._embeddingModelCcaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateDatasetRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
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
  ): RagCreateDatasetRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
    };
  }
}
export module RagCreateDatasetRequest {
  /**
   * Standard JavaScript object representation for RagCreateDatasetRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    name: string;
    description: string;
    avatar: string;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    embeddingModelCcaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for RagCreateDatasetRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    name: string;
    description: string;
    avatar: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    embeddingModelCcaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagParserConfig
 */
export class RagParserConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagParserConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagParserConfig();
    RagParserConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagParserConfig) {
    _instance.autoKeywords = _instance.autoKeywords || 0;
    _instance.autoQuestions = _instance.autoQuestions || 0;
    _instance.chunkTokenNum = _instance.chunkTokenNum || 0;
    _instance.delimiter = _instance.delimiter || '';
    _instance.html4excel = _instance.html4excel || false;
    _instance.layoutRecognize = _instance.layoutRecognize || '';
    _instance.tagKbIds = _instance.tagKbIds || [];
    _instance.topnTags = _instance.topnTags || 0;
    _instance.filenameEmbdWeight = _instance.filenameEmbdWeight || 0;
    _instance.taskPageSize = _instance.taskPageSize || 0;
    _instance.raptor = _instance.raptor || undefined;
    _instance.graphrag = _instance.graphrag || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagParserConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.autoKeywords = _reader.readInt32();
          break;
        case 2:
          _instance.autoQuestions = _reader.readInt32();
          break;
        case 3:
          _instance.chunkTokenNum = _reader.readInt32();
          break;
        case 4:
          _instance.delimiter = _reader.readString();
          break;
        case 5:
          _instance.html4excel = _reader.readBool();
          break;
        case 6:
          _instance.layoutRecognize = _reader.readString();
          break;
        case 7:
          (_instance.tagKbIds = _instance.tagKbIds || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _instance.topnTags = _reader.readInt32();
          break;
        case 9:
          _instance.filenameEmbdWeight = _reader.readFloat();
          break;
        case 10:
          _instance.taskPageSize = _reader.readInt32();
          break;
        case 11:
          _instance.raptor = new RagRaptorConfig();
          _reader.readMessage(
            _instance.raptor,
            RagRaptorConfig.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.graphrag = new RagGraphRagConfig();
          _reader.readMessage(
            _instance.graphrag,
            RagGraphRagConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagParserConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagParserConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.autoKeywords) {
      _writer.writeInt32(1, _instance.autoKeywords);
    }
    if (_instance.autoQuestions) {
      _writer.writeInt32(2, _instance.autoQuestions);
    }
    if (_instance.chunkTokenNum) {
      _writer.writeInt32(3, _instance.chunkTokenNum);
    }
    if (_instance.delimiter) {
      _writer.writeString(4, _instance.delimiter);
    }
    if (_instance.html4excel) {
      _writer.writeBool(5, _instance.html4excel);
    }
    if (_instance.layoutRecognize) {
      _writer.writeString(6, _instance.layoutRecognize);
    }
    if (_instance.tagKbIds && _instance.tagKbIds.length) {
      _writer.writeRepeatedString(7, _instance.tagKbIds);
    }
    if (_instance.topnTags) {
      _writer.writeInt32(8, _instance.topnTags);
    }
    if (_instance.filenameEmbdWeight) {
      _writer.writeFloat(9, _instance.filenameEmbdWeight);
    }
    if (_instance.taskPageSize) {
      _writer.writeInt32(10, _instance.taskPageSize);
    }
    if (_instance.raptor) {
      _writer.writeMessage(
        11,
        _instance.raptor as any,
        RagRaptorConfig.serializeBinaryToWriter
      );
    }
    if (_instance.graphrag) {
      _writer.writeMessage(
        12,
        _instance.graphrag as any,
        RagGraphRagConfig.serializeBinaryToWriter
      );
    }
  }

  private _autoKeywords: number;
  private _autoQuestions: number;
  private _chunkTokenNum: number;
  private _delimiter: string;
  private _html4excel: boolean;
  private _layoutRecognize: string;
  private _tagKbIds: string[];
  private _topnTags: number;
  private _filenameEmbdWeight: number;
  private _taskPageSize: number;
  private _raptor?: RagRaptorConfig;
  private _graphrag?: RagGraphRagConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagParserConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagParserConfig.AsObject>) {
    _value = _value || {};
    this.autoKeywords = _value.autoKeywords;
    this.autoQuestions = _value.autoQuestions;
    this.chunkTokenNum = _value.chunkTokenNum;
    this.delimiter = _value.delimiter;
    this.html4excel = _value.html4excel;
    this.layoutRecognize = _value.layoutRecognize;
    this.tagKbIds = (_value.tagKbIds || []).slice();
    this.topnTags = _value.topnTags;
    this.filenameEmbdWeight = _value.filenameEmbdWeight;
    this.taskPageSize = _value.taskPageSize;
    this.raptor = _value.raptor
      ? new RagRaptorConfig(_value.raptor)
      : undefined;
    this.graphrag = _value.graphrag
      ? new RagGraphRagConfig(_value.graphrag)
      : undefined;
    RagParserConfig.refineValues(this);
  }
  get autoKeywords(): number {
    return this._autoKeywords;
  }
  set autoKeywords(value: number) {
    this._autoKeywords = value;
  }
  get autoQuestions(): number {
    return this._autoQuestions;
  }
  set autoQuestions(value: number) {
    this._autoQuestions = value;
  }
  get chunkTokenNum(): number {
    return this._chunkTokenNum;
  }
  set chunkTokenNum(value: number) {
    this._chunkTokenNum = value;
  }
  get delimiter(): string {
    return this._delimiter;
  }
  set delimiter(value: string) {
    this._delimiter = value;
  }
  get html4excel(): boolean {
    return this._html4excel;
  }
  set html4excel(value: boolean) {
    this._html4excel = value;
  }
  get layoutRecognize(): string {
    return this._layoutRecognize;
  }
  set layoutRecognize(value: string) {
    this._layoutRecognize = value;
  }
  get tagKbIds(): string[] {
    return this._tagKbIds;
  }
  set tagKbIds(value: string[]) {
    this._tagKbIds = value;
  }
  get topnTags(): number {
    return this._topnTags;
  }
  set topnTags(value: number) {
    this._topnTags = value;
  }
  get filenameEmbdWeight(): number {
    return this._filenameEmbdWeight;
  }
  set filenameEmbdWeight(value: number) {
    this._filenameEmbdWeight = value;
  }
  get taskPageSize(): number {
    return this._taskPageSize;
  }
  set taskPageSize(value: number) {
    this._taskPageSize = value;
  }
  get raptor(): RagRaptorConfig | undefined {
    return this._raptor;
  }
  set raptor(value: RagRaptorConfig | undefined) {
    this._raptor = value;
  }
  get graphrag(): RagGraphRagConfig | undefined {
    return this._graphrag;
  }
  set graphrag(value: RagGraphRagConfig | undefined) {
    this._graphrag = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagParserConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagParserConfig.AsObject {
    return {
      autoKeywords: this.autoKeywords,
      autoQuestions: this.autoQuestions,
      chunkTokenNum: this.chunkTokenNum,
      delimiter: this.delimiter,
      html4excel: this.html4excel,
      layoutRecognize: this.layoutRecognize,
      tagKbIds: (this.tagKbIds || []).slice(),
      topnTags: this.topnTags,
      filenameEmbdWeight: this.filenameEmbdWeight,
      taskPageSize: this.taskPageSize,
      raptor: this.raptor ? this.raptor.toObject() : undefined,
      graphrag: this.graphrag ? this.graphrag.toObject() : undefined
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
  ): RagParserConfig.AsProtobufJSON {
    return {
      autoKeywords: this.autoKeywords,
      autoQuestions: this.autoQuestions,
      chunkTokenNum: this.chunkTokenNum,
      delimiter: this.delimiter,
      html4excel: this.html4excel,
      layoutRecognize: this.layoutRecognize,
      tagKbIds: (this.tagKbIds || []).slice(),
      topnTags: this.topnTags,
      filenameEmbdWeight: this.filenameEmbdWeight,
      taskPageSize: this.taskPageSize,
      raptor: this.raptor ? this.raptor.toProtobufJSON(options) : null,
      graphrag: this.graphrag ? this.graphrag.toProtobufJSON(options) : null
    };
  }
}
export module RagParserConfig {
  /**
   * Standard JavaScript object representation for RagParserConfig
   */
  export interface AsObject {
    autoKeywords: number;
    autoQuestions: number;
    chunkTokenNum: number;
    delimiter: string;
    html4excel: boolean;
    layoutRecognize: string;
    tagKbIds: string[];
    topnTags: number;
    filenameEmbdWeight: number;
    taskPageSize: number;
    raptor?: RagRaptorConfig.AsObject;
    graphrag?: RagGraphRagConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for RagParserConfig
   */
  export interface AsProtobufJSON {
    autoKeywords: number;
    autoQuestions: number;
    chunkTokenNum: number;
    delimiter: string;
    html4excel: boolean;
    layoutRecognize: string;
    tagKbIds: string[];
    topnTags: number;
    filenameEmbdWeight: number;
    taskPageSize: number;
    raptor: RagRaptorConfig.AsProtobufJSON | null;
    graphrag: RagGraphRagConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRaptorConfig
 */
export class RagRaptorConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagRaptorConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRaptorConfig();
    RagRaptorConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRaptorConfig) {
    _instance.useRaptor = _instance.useRaptor || false;
    _instance.prompt = _instance.prompt || '';
    _instance.maxToken = _instance.maxToken || 0;
    _instance.threshold = _instance.threshold || 0;
    _instance.maxCluster = _instance.maxCluster || 0;
    _instance.randomSeed = _instance.randomSeed || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRaptorConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.useRaptor = _reader.readBool();
          break;
        case 2:
          _instance.prompt = _reader.readString();
          break;
        case 3:
          _instance.maxToken = _reader.readInt32();
          break;
        case 4:
          _instance.threshold = _reader.readFloat();
          break;
        case 5:
          _instance.maxCluster = _reader.readInt32();
          break;
        case 6:
          _instance.randomSeed = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RagRaptorConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRaptorConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.useRaptor) {
      _writer.writeBool(1, _instance.useRaptor);
    }
    if (_instance.prompt) {
      _writer.writeString(2, _instance.prompt);
    }
    if (_instance.maxToken) {
      _writer.writeInt32(3, _instance.maxToken);
    }
    if (_instance.threshold) {
      _writer.writeFloat(4, _instance.threshold);
    }
    if (_instance.maxCluster) {
      _writer.writeInt32(5, _instance.maxCluster);
    }
    if (_instance.randomSeed) {
      _writer.writeInt64String(6, _instance.randomSeed);
    }
  }

  private _useRaptor: boolean;
  private _prompt: string;
  private _maxToken: number;
  private _threshold: number;
  private _maxCluster: number;
  private _randomSeed: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRaptorConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRaptorConfig.AsObject>) {
    _value = _value || {};
    this.useRaptor = _value.useRaptor;
    this.prompt = _value.prompt;
    this.maxToken = _value.maxToken;
    this.threshold = _value.threshold;
    this.maxCluster = _value.maxCluster;
    this.randomSeed = _value.randomSeed;
    RagRaptorConfig.refineValues(this);
  }
  get useRaptor(): boolean {
    return this._useRaptor;
  }
  set useRaptor(value: boolean) {
    this._useRaptor = value;
  }
  get prompt(): string {
    return this._prompt;
  }
  set prompt(value: string) {
    this._prompt = value;
  }
  get maxToken(): number {
    return this._maxToken;
  }
  set maxToken(value: number) {
    this._maxToken = value;
  }
  get threshold(): number {
    return this._threshold;
  }
  set threshold(value: number) {
    this._threshold = value;
  }
  get maxCluster(): number {
    return this._maxCluster;
  }
  set maxCluster(value: number) {
    this._maxCluster = value;
  }
  get randomSeed(): string {
    return this._randomSeed;
  }
  set randomSeed(value: string) {
    this._randomSeed = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRaptorConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRaptorConfig.AsObject {
    return {
      useRaptor: this.useRaptor,
      prompt: this.prompt,
      maxToken: this.maxToken,
      threshold: this.threshold,
      maxCluster: this.maxCluster,
      randomSeed: this.randomSeed
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
  ): RagRaptorConfig.AsProtobufJSON {
    return {
      useRaptor: this.useRaptor,
      prompt: this.prompt,
      maxToken: this.maxToken,
      threshold: this.threshold,
      maxCluster: this.maxCluster,
      randomSeed: this.randomSeed
    };
  }
}
export module RagRaptorConfig {
  /**
   * Standard JavaScript object representation for RagRaptorConfig
   */
  export interface AsObject {
    useRaptor: boolean;
    prompt: string;
    maxToken: number;
    threshold: number;
    maxCluster: number;
    randomSeed: string;
  }

  /**
   * Protobuf JSON representation for RagRaptorConfig
   */
  export interface AsProtobufJSON {
    useRaptor: boolean;
    prompt: string;
    maxToken: number;
    threshold: number;
    maxCluster: number;
    randomSeed: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGraphRagConfig
 */
export class RagGraphRagConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagGraphRagConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGraphRagConfig();
    RagGraphRagConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGraphRagConfig) {
    _instance.useGraphrag = _instance.useGraphrag || false;
    _instance.entityTypes = _instance.entityTypes || [];
    _instance.method = _instance.method || 0;
    _instance.community = _instance.community || false;
    _instance.resolution = _instance.resolution || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGraphRagConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.useGraphrag = _reader.readBool();
          break;
        case 2:
          (_instance.entityTypes = _instance.entityTypes || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.method = _reader.readEnum();
          break;
        case 4:
          _instance.community = _reader.readBool();
          break;
        case 5:
          _instance.resolution = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGraphRagConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGraphRagConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.useGraphrag) {
      _writer.writeBool(1, _instance.useGraphrag);
    }
    if (_instance.entityTypes && _instance.entityTypes.length) {
      _writer.writeRepeatedString(2, _instance.entityTypes);
    }
    if (_instance.method) {
      _writer.writeEnum(3, _instance.method);
    }
    if (_instance.community) {
      _writer.writeBool(4, _instance.community);
    }
    if (_instance.resolution) {
      _writer.writeBool(5, _instance.resolution);
    }
  }

  private _useGraphrag: boolean;
  private _entityTypes: string[];
  private _method: RagGraphRagMethod;
  private _community: boolean;
  private _resolution: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGraphRagConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGraphRagConfig.AsObject>) {
    _value = _value || {};
    this.useGraphrag = _value.useGraphrag;
    this.entityTypes = (_value.entityTypes || []).slice();
    this.method = _value.method;
    this.community = _value.community;
    this.resolution = _value.resolution;
    RagGraphRagConfig.refineValues(this);
  }
  get useGraphrag(): boolean {
    return this._useGraphrag;
  }
  set useGraphrag(value: boolean) {
    this._useGraphrag = value;
  }
  get entityTypes(): string[] {
    return this._entityTypes;
  }
  set entityTypes(value: string[]) {
    this._entityTypes = value;
  }
  get method(): RagGraphRagMethod {
    return this._method;
  }
  set method(value: RagGraphRagMethod) {
    this._method = value;
  }
  get community(): boolean {
    return this._community;
  }
  set community(value: boolean) {
    this._community = value;
  }
  get resolution(): boolean {
    return this._resolution;
  }
  set resolution(value: boolean) {
    this._resolution = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGraphRagConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGraphRagConfig.AsObject {
    return {
      useGraphrag: this.useGraphrag,
      entityTypes: (this.entityTypes || []).slice(),
      method: this.method,
      community: this.community,
      resolution: this.resolution
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
  ): RagGraphRagConfig.AsProtobufJSON {
    return {
      useGraphrag: this.useGraphrag,
      entityTypes: (this.entityTypes || []).slice(),
      method:
        RagGraphRagMethod[
          this.method === null || this.method === undefined ? 0 : this.method
        ],
      community: this.community,
      resolution: this.resolution
    };
  }
}
export module RagGraphRagConfig {
  /**
   * Standard JavaScript object representation for RagGraphRagConfig
   */
  export interface AsObject {
    useGraphrag: boolean;
    entityTypes: string[];
    method: RagGraphRagMethod;
    community: boolean;
    resolution: boolean;
  }

  /**
   * Protobuf JSON representation for RagGraphRagConfig
   */
  export interface AsProtobufJSON {
    useGraphrag: boolean;
    entityTypes: string[];
    method: string;
    community: boolean;
    resolution: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDataset
 */
export class RagDataset implements GrpcMessage {
  static id = 'ondewo.nlu.RagDataset';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDataset();
    RagDataset.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDataset) {
    _instance.id = _instance.id || '';
    _instance.avatar = _instance.avatar || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.documentCount = _instance.documentCount || 0;
    _instance.tokenNum = _instance.tokenNum || 0;
    _instance.chunkCount = _instance.chunkCount || 0;
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.pagerank = _instance.pagerank || 0;
    _instance.parsingStatus = _instance.parsingStatus || undefined;
    _instance.createTime = _instance.createTime || undefined;
    _instance.updateTime = _instance.updateTime || undefined;
    _instance.embeddingModelCcaiServiceName =
      _instance.embeddingModelCcaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDataset,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.avatar = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.documentCount = _reader.readInt32();
          break;
        case 6:
          _instance.tokenNum = _reader.readInt32();
          break;
        case 7:
          _instance.chunkCount = _reader.readInt32();
          break;
        case 8:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 9:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.pagerank = _reader.readInt32();
          break;
        case 11:
          _instance.parsingStatus = new RagDatasetParsingStatus();
          _reader.readMessage(
            _instance.parsingStatus,
            RagDatasetParsingStatus.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.createTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.updateTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updateTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.embeddingModelCcaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDataset.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagDataset, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.avatar) {
      _writer.writeString(2, _instance.avatar);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.documentCount) {
      _writer.writeInt32(5, _instance.documentCount);
    }
    if (_instance.tokenNum) {
      _writer.writeInt32(6, _instance.tokenNum);
    }
    if (_instance.chunkCount) {
      _writer.writeInt32(7, _instance.chunkCount);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(8, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        9,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.pagerank) {
      _writer.writeInt32(10, _instance.pagerank);
    }
    if (_instance.parsingStatus) {
      _writer.writeMessage(
        11,
        _instance.parsingStatus as any,
        RagDatasetParsingStatus.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeMessage(
        12,
        _instance.createTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.updateTime) {
      _writer.writeMessage(
        13,
        _instance.updateTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModelCcaiServiceName) {
      _writer.writeString(14, _instance.embeddingModelCcaiServiceName);
    }
  }

  private _id: string;
  private _avatar: string;
  private _name: string;
  private _description: string;
  private _documentCount: number;
  private _tokenNum: number;
  private _chunkCount: number;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _pagerank: number;
  private _parsingStatus?: RagDatasetParsingStatus;
  private _createTime?: googleProtobuf002.Timestamp;
  private _updateTime?: googleProtobuf002.Timestamp;
  private _embeddingModelCcaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDataset to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDataset.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.avatar = _value.avatar;
    this.name = _value.name;
    this.description = _value.description;
    this.documentCount = _value.documentCount;
    this.tokenNum = _value.tokenNum;
    this.chunkCount = _value.chunkCount;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.pagerank = _value.pagerank;
    this.parsingStatus = _value.parsingStatus
      ? new RagDatasetParsingStatus(_value.parsingStatus)
      : undefined;
    this.createTime = _value.createTime
      ? new googleProtobuf002.Timestamp(_value.createTime)
      : undefined;
    this.updateTime = _value.updateTime
      ? new googleProtobuf002.Timestamp(_value.updateTime)
      : undefined;
    this.embeddingModelCcaiServiceName = _value.embeddingModelCcaiServiceName;
    RagDataset.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get documentCount(): number {
    return this._documentCount;
  }
  set documentCount(value: number) {
    this._documentCount = value;
  }
  get tokenNum(): number {
    return this._tokenNum;
  }
  set tokenNum(value: number) {
    this._tokenNum = value;
  }
  get chunkCount(): number {
    return this._chunkCount;
  }
  set chunkCount(value: number) {
    this._chunkCount = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get pagerank(): number {
    return this._pagerank;
  }
  set pagerank(value: number) {
    this._pagerank = value;
  }
  get parsingStatus(): RagDatasetParsingStatus | undefined {
    return this._parsingStatus;
  }
  set parsingStatus(value: RagDatasetParsingStatus | undefined) {
    this._parsingStatus = value;
  }
  get createTime(): googleProtobuf002.Timestamp | undefined {
    return this._createTime;
  }
  set createTime(value: googleProtobuf002.Timestamp | undefined) {
    this._createTime = value;
  }
  get updateTime(): googleProtobuf002.Timestamp | undefined {
    return this._updateTime;
  }
  set updateTime(value: googleProtobuf002.Timestamp | undefined) {
    this._updateTime = value;
  }
  get embeddingModelCcaiServiceName(): string {
    return this._embeddingModelCcaiServiceName;
  }
  set embeddingModelCcaiServiceName(value: string) {
    this._embeddingModelCcaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDataset.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDataset.AsObject {
    return {
      id: this.id,
      avatar: this.avatar,
      name: this.name,
      description: this.description,
      documentCount: this.documentCount,
      tokenNum: this.tokenNum,
      chunkCount: this.chunkCount,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      pagerank: this.pagerank,
      parsingStatus: this.parsingStatus
        ? this.parsingStatus.toObject()
        : undefined,
      createTime: this.createTime ? this.createTime.toObject() : undefined,
      updateTime: this.updateTime ? this.updateTime.toObject() : undefined,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
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
  ): RagDataset.AsProtobufJSON {
    return {
      id: this.id,
      avatar: this.avatar,
      name: this.name,
      description: this.description,
      documentCount: this.documentCount,
      tokenNum: this.tokenNum,
      chunkCount: this.chunkCount,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      pagerank: this.pagerank,
      parsingStatus: this.parsingStatus
        ? this.parsingStatus.toProtobufJSON(options)
        : null,
      createTime: this.createTime
        ? this.createTime.toProtobufJSON(options)
        : null,
      updateTime: this.updateTime
        ? this.updateTime.toProtobufJSON(options)
        : null,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
    };
  }
}
export module RagDataset {
  /**
   * Standard JavaScript object representation for RagDataset
   */
  export interface AsObject {
    id: string;
    avatar: string;
    name: string;
    description: string;
    documentCount: number;
    tokenNum: number;
    chunkCount: number;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    pagerank: number;
    parsingStatus?: RagDatasetParsingStatus.AsObject;
    createTime?: googleProtobuf002.Timestamp.AsObject;
    updateTime?: googleProtobuf002.Timestamp.AsObject;
    embeddingModelCcaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for RagDataset
   */
  export interface AsProtobufJSON {
    id: string;
    avatar: string;
    name: string;
    description: string;
    documentCount: number;
    tokenNum: number;
    chunkCount: number;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    pagerank: number;
    parsingStatus: RagDatasetParsingStatus.AsProtobufJSON | null;
    createTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    updateTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    embeddingModelCcaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDatasetParsingStatus
 */
export class RagDatasetParsingStatus implements GrpcMessage {
  static id = 'ondewo.nlu.RagDatasetParsingStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDatasetParsingStatus();
    RagDatasetParsingStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDatasetParsingStatus) {
    _instance.unstart = _instance.unstart || 0;
    _instance.running = _instance.running || 0;
    _instance.cancel = _instance.cancel || 0;
    _instance.done = _instance.done || 0;
    _instance.fail = _instance.fail || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDatasetParsingStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.unstart = _reader.readInt32();
          break;
        case 2:
          _instance.running = _reader.readInt32();
          break;
        case 3:
          _instance.cancel = _reader.readInt32();
          break;
        case 4:
          _instance.done = _reader.readInt32();
          break;
        case 5:
          _instance.fail = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDatasetParsingStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDatasetParsingStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.unstart) {
      _writer.writeInt32(1, _instance.unstart);
    }
    if (_instance.running) {
      _writer.writeInt32(2, _instance.running);
    }
    if (_instance.cancel) {
      _writer.writeInt32(3, _instance.cancel);
    }
    if (_instance.done) {
      _writer.writeInt32(4, _instance.done);
    }
    if (_instance.fail) {
      _writer.writeInt32(5, _instance.fail);
    }
  }

  private _unstart: number;
  private _running: number;
  private _cancel: number;
  private _done: number;
  private _fail: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDatasetParsingStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDatasetParsingStatus.AsObject>) {
    _value = _value || {};
    this.unstart = _value.unstart;
    this.running = _value.running;
    this.cancel = _value.cancel;
    this.done = _value.done;
    this.fail = _value.fail;
    RagDatasetParsingStatus.refineValues(this);
  }
  get unstart(): number {
    return this._unstart;
  }
  set unstart(value: number) {
    this._unstart = value;
  }
  get running(): number {
    return this._running;
  }
  set running(value: number) {
    this._running = value;
  }
  get cancel(): number {
    return this._cancel;
  }
  set cancel(value: number) {
    this._cancel = value;
  }
  get done(): number {
    return this._done;
  }
  set done(value: number) {
    this._done = value;
  }
  get fail(): number {
    return this._fail;
  }
  set fail(value: number) {
    this._fail = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDatasetParsingStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDatasetParsingStatus.AsObject {
    return {
      unstart: this.unstart,
      running: this.running,
      cancel: this.cancel,
      done: this.done,
      fail: this.fail
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
  ): RagDatasetParsingStatus.AsProtobufJSON {
    return {
      unstart: this.unstart,
      running: this.running,
      cancel: this.cancel,
      done: this.done,
      fail: this.fail
    };
  }
}
export module RagDatasetParsingStatus {
  /**
   * Standard JavaScript object representation for RagDatasetParsingStatus
   */
  export interface AsObject {
    unstart: number;
    running: number;
    cancel: number;
    done: number;
    fail: number;
  }

  /**
   * Protobuf JSON representation for RagDatasetParsingStatus
   */
  export interface AsProtobufJSON {
    unstart: number;
    running: number;
    cancel: number;
    done: number;
    fail: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateDatasetRequest
 */
export class RagUpdateDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateDatasetRequest();
    RagUpdateDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateDatasetRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.pagerank = _instance.pagerank || 0;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.embeddingModelCcaiServiceName =
      _instance.embeddingModelCcaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateDatasetRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.description = _reader.readString();
          break;
        case 6:
          _instance.avatar = _reader.readString();
          break;
        case 7:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 8:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.pagerank = _reader.readInt32();
          break;
        case 10:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.embeddingModelCcaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(5, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(6, _instance.avatar);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(7, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        8,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.pagerank) {
      _writer.writeInt32(9, _instance.pagerank);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        10,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        11,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModelCcaiServiceName) {
      _writer.writeString(12, _instance.embeddingModelCcaiServiceName);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _pagerank: number;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _embeddingModelCcaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateDatasetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateDatasetRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.pagerank = _value.pagerank;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.embeddingModelCcaiServiceName = _value.embeddingModelCcaiServiceName;
    RagUpdateDatasetRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get pagerank(): number {
    return this._pagerank;
  }
  set pagerank(value: number) {
    this._pagerank = value;
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
  get embeddingModelCcaiServiceName(): string {
    return this._embeddingModelCcaiServiceName;
  }
  set embeddingModelCcaiServiceName(value: string) {
    this._embeddingModelCcaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateDatasetRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      pagerank: this.pagerank,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
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
  ): RagUpdateDatasetRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      pagerank: this.pagerank,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      embeddingModelCcaiServiceName: this.embeddingModelCcaiServiceName
    };
  }
}
export module RagUpdateDatasetRequest {
  /**
   * Standard JavaScript object representation for RagUpdateDatasetRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    name: string;
    description: string;
    avatar: string;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    pagerank: number;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    embeddingModelCcaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for RagUpdateDatasetRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    name: string;
    description: string;
    avatar: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    pagerank: number;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    embeddingModelCcaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteRequest
 */
export class RagDeleteRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteRequest();
    RagDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteRequest,
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
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 4:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(3, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(4, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteRequest.refineValues(this);
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
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteRequest {
  /**
   * Standard JavaScript object representation for RagDeleteRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListDatasetsRequest
 */
export class RagListDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListDatasetsRequest();
    RagListDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.sortingMode = _instance.sortingMode || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListDatasetsRequest,
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
          _instance.pageToken = _reader.readString();
          break;
        case 4:
          _instance.id = _reader.readString();
          break;
        case 5:
          _instance.name = _reader.readString();
          break;
        case 6:
          _instance.orderby = _reader.readString();
          break;
        case 7:
          _instance.desc = _reader.readBool();
          break;
        case 8:
          _instance.sortingMode = _reader.readEnum();
          break;
        case 9:
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

    RagListDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.id) {
      _writer.writeString(4, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(5, _instance.name);
    }
    if (_instance.orderby) {
      _writer.writeString(6, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(7, _instance.desc);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(8, _instance.sortingMode);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        9,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _pageToken: string;
  private _id: string;
  private _name: string;
  private _orderby: string;
  private _desc: boolean;
  private _sortingMode: ondewoNlu008.SortingMode;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListDatasetsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListDatasetsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    this.id = _value.id;
    this.name = _value.name;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.sortingMode = _value.sortingMode;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagListDatasetsRequest.refineValues(this);
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
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
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
    RagListDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      sortingMode: this.sortingMode,
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
  ): RagListDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagListDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagListDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    pageToken: string;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    sortingMode: ondewoNlu008.SortingMode;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    pageToken: string;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    sortingMode: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDatasetList
 */
export class RagDatasetList implements GrpcMessage {
  static id = 'ondewo.nlu.RagDatasetList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDatasetList();
    RagDatasetList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDatasetList) {
    _instance.datasets = _instance.datasets || [];
    _instance.total = _instance.total || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDatasetList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDataset();
          _reader.readMessage(
            messageInitializer1,
            RagDataset.deserializeBinaryFromReader
          );
          (_instance.datasets = _instance.datasets || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        case 3:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDatasetList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDatasetList,
    _writer: BinaryWriter
  ) {
    if (_instance.datasets && _instance.datasets.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.datasets as any,
        RagDataset.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(3, _instance.nextPageToken);
    }
  }

  private _datasets?: RagDataset[];
  private _total: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDatasetList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDatasetList.AsObject>) {
    _value = _value || {};
    this.datasets = (_value.datasets || []).map(m => new RagDataset(m));
    this.total = _value.total;
    this.nextPageToken = _value.nextPageToken;
    RagDatasetList.refineValues(this);
  }
  get datasets(): RagDataset[] | undefined {
    return this._datasets;
  }
  set datasets(value: RagDataset[] | undefined) {
    this._datasets = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
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
    RagDatasetList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDatasetList.AsObject {
    return {
      datasets: (this.datasets || []).map(m => m.toObject()),
      total: this.total,
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
  ): RagDatasetList.AsProtobufJSON {
    return {
      datasets: (this.datasets || []).map(m => m.toProtobufJSON(options)),
      total: this.total,
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagDatasetList {
  /**
   * Standard JavaScript object representation for RagDatasetList
   */
  export interface AsObject {
    datasets?: RagDataset.AsObject[];
    total: number;
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagDatasetList
   */
  export interface AsProtobufJSON {
    datasets: RagDataset.AsProtobufJSON[] | null;
    total: number;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUploadDocumentRequest
 */
export class RagUploadDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUploadDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUploadDocumentRequest();
    RagUploadDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUploadDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.metadata = _instance.metadata || undefined;
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUploadDocumentRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.metadata = new RagFileMetadata();
          _reader.readMessage(
            _instance.metadata,
            RagFileMetadata.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    RagUploadDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUploadDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        4,
        _instance.metadata as any,
        RagFileMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(5, _instance.data);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _metadata?: RagFileMetadata;
  private _data: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUploadDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUploadDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.metadata = _value.metadata
      ? new RagFileMetadata(_value.metadata)
      : undefined;
    this.data = _value.data;
    RagUploadDocumentRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get metadata(): RagFileMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: RagFileMetadata | undefined) {
    this._metadata = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUploadDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUploadDocumentRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): RagUploadDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module RagUploadDocumentRequest {
  /**
   * Standard JavaScript object representation for RagUploadDocumentRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    metadata?: RagFileMetadata.AsObject;
    data: Uint8Array;
  }

  /**
   * Protobuf JSON representation for RagUploadDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    metadata: RagFileMetadata.AsProtobufJSON | null;
    data: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocument
 */
export class RagDocument implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocument';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocument();
    RagDocument.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocument) {
    _instance.id = _instance.id || '';
    _instance.thumbnail = _instance.thumbnail || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.type = _instance.type || 0;
    _instance.name = _instance.name || '';
    _instance.size = _instance.size || '0';
    _instance.chunkCount = _instance.chunkCount || 0;
    _instance.tokenCount = _instance.tokenCount || 0;
    _instance.progress = _instance.progress || 0;
    _instance.progressMsg = _instance.progressMsg || '';
    _instance.processBeginAt = _instance.processBeginAt || undefined;
    _instance.processDuration = _instance.processDuration || 0;
    _instance.metaFields = _instance.metaFields || undefined;
    _instance.run = _instance.run || 0;
    _instance.status = _instance.status || '';
    _instance.createTime = _instance.createTime || undefined;
    _instance.updateTime = _instance.updateTime || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocument,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.thumbnail = _reader.readString();
          break;
        case 3:
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 5:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.type = _reader.readEnum();
          break;
        case 7:
          _instance.name = _reader.readString();
          break;
        case 8:
          _instance.size = _reader.readInt64String();
          break;
        case 9:
          _instance.chunkCount = _reader.readInt32();
          break;
        case 10:
          _instance.tokenCount = _reader.readInt32();
          break;
        case 11:
          _instance.progress = _reader.readFloat();
          break;
        case 12:
          _instance.progressMsg = _reader.readString();
          break;
        case 13:
          _instance.processBeginAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.processBeginAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.processDuration = _reader.readFloat();
          break;
        case 15:
          _instance.metaFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metaFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.run = _reader.readEnum();
          break;
        case 17:
          _instance.status = _reader.readString();
          break;
        case 18:
          _instance.createTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.updateTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updateTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocument.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDocument,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.thumbnail) {
      _writer.writeString(2, _instance.thumbnail);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(4, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        5,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.type) {
      _writer.writeEnum(6, _instance.type);
    }
    if (_instance.name) {
      _writer.writeString(7, _instance.name);
    }
    if (_instance.size) {
      _writer.writeInt64String(8, _instance.size);
    }
    if (_instance.chunkCount) {
      _writer.writeInt32(9, _instance.chunkCount);
    }
    if (_instance.tokenCount) {
      _writer.writeInt32(10, _instance.tokenCount);
    }
    if (_instance.progress) {
      _writer.writeFloat(11, _instance.progress);
    }
    if (_instance.progressMsg) {
      _writer.writeString(12, _instance.progressMsg);
    }
    if (_instance.processBeginAt) {
      _writer.writeMessage(
        13,
        _instance.processBeginAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.processDuration) {
      _writer.writeFloat(14, _instance.processDuration);
    }
    if (_instance.metaFields) {
      _writer.writeMessage(
        15,
        _instance.metaFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.run) {
      _writer.writeEnum(16, _instance.run);
    }
    if (_instance.status) {
      _writer.writeString(17, _instance.status);
    }
    if (_instance.createTime) {
      _writer.writeMessage(
        18,
        _instance.createTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.updateTime) {
      _writer.writeMessage(
        19,
        _instance.updateTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _thumbnail: string;
  private _datasetId: string;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _type: RagDocumentType;
  private _name: string;
  private _size: string;
  private _chunkCount: number;
  private _tokenCount: number;
  private _progress: number;
  private _progressMsg: string;
  private _processBeginAt?: googleProtobuf002.Timestamp;
  private _processDuration: number;
  private _metaFields?: googleProtobuf001.Struct;
  private _run: RagDocumentStatus;
  private _status: string;
  private _createTime?: googleProtobuf002.Timestamp;
  private _updateTime?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocument to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocument.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.thumbnail = _value.thumbnail;
    this.datasetId = _value.datasetId;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.type = _value.type;
    this.name = _value.name;
    this.size = _value.size;
    this.chunkCount = _value.chunkCount;
    this.tokenCount = _value.tokenCount;
    this.progress = _value.progress;
    this.progressMsg = _value.progressMsg;
    this.processBeginAt = _value.processBeginAt
      ? new googleProtobuf002.Timestamp(_value.processBeginAt)
      : undefined;
    this.processDuration = _value.processDuration;
    this.metaFields = _value.metaFields
      ? new googleProtobuf001.Struct(_value.metaFields)
      : undefined;
    this.run = _value.run;
    this.status = _value.status;
    this.createTime = _value.createTime
      ? new googleProtobuf002.Timestamp(_value.createTime)
      : undefined;
    this.updateTime = _value.updateTime
      ? new googleProtobuf002.Timestamp(_value.updateTime)
      : undefined;
    RagDocument.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get thumbnail(): string {
    return this._thumbnail;
  }
  set thumbnail(value: string) {
    this._thumbnail = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get type(): RagDocumentType {
    return this._type;
  }
  set type(value: RagDocumentType) {
    this._type = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
  }
  get chunkCount(): number {
    return this._chunkCount;
  }
  set chunkCount(value: number) {
    this._chunkCount = value;
  }
  get tokenCount(): number {
    return this._tokenCount;
  }
  set tokenCount(value: number) {
    this._tokenCount = value;
  }
  get progress(): number {
    return this._progress;
  }
  set progress(value: number) {
    this._progress = value;
  }
  get progressMsg(): string {
    return this._progressMsg;
  }
  set progressMsg(value: string) {
    this._progressMsg = value;
  }
  get processBeginAt(): googleProtobuf002.Timestamp | undefined {
    return this._processBeginAt;
  }
  set processBeginAt(value: googleProtobuf002.Timestamp | undefined) {
    this._processBeginAt = value;
  }
  get processDuration(): number {
    return this._processDuration;
  }
  set processDuration(value: number) {
    this._processDuration = value;
  }
  get metaFields(): googleProtobuf001.Struct | undefined {
    return this._metaFields;
  }
  set metaFields(value: googleProtobuf001.Struct | undefined) {
    this._metaFields = value;
  }
  get run(): RagDocumentStatus {
    return this._run;
  }
  set run(value: RagDocumentStatus) {
    this._run = value;
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }
  get createTime(): googleProtobuf002.Timestamp | undefined {
    return this._createTime;
  }
  set createTime(value: googleProtobuf002.Timestamp | undefined) {
    this._createTime = value;
  }
  get updateTime(): googleProtobuf002.Timestamp | undefined {
    return this._updateTime;
  }
  set updateTime(value: googleProtobuf002.Timestamp | undefined) {
    this._updateTime = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDocument.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocument.AsObject {
    return {
      id: this.id,
      thumbnail: this.thumbnail,
      datasetId: this.datasetId,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      type: this.type,
      name: this.name,
      size: this.size,
      chunkCount: this.chunkCount,
      tokenCount: this.tokenCount,
      progress: this.progress,
      progressMsg: this.progressMsg,
      processBeginAt: this.processBeginAt
        ? this.processBeginAt.toObject()
        : undefined,
      processDuration: this.processDuration,
      metaFields: this.metaFields ? this.metaFields.toObject() : undefined,
      run: this.run,
      status: this.status,
      createTime: this.createTime ? this.createTime.toObject() : undefined,
      updateTime: this.updateTime ? this.updateTime.toObject() : undefined
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
  ): RagDocument.AsProtobufJSON {
    return {
      id: this.id,
      thumbnail: this.thumbnail,
      datasetId: this.datasetId,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      type:
        RagDocumentType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      name: this.name,
      size: this.size,
      chunkCount: this.chunkCount,
      tokenCount: this.tokenCount,
      progress: this.progress,
      progressMsg: this.progressMsg,
      processBeginAt: this.processBeginAt
        ? this.processBeginAt.toProtobufJSON(options)
        : null,
      processDuration: this.processDuration,
      metaFields: this.metaFields
        ? this.metaFields.toProtobufJSON(options)
        : null,
      run:
        RagDocumentStatus[
          this.run === null || this.run === undefined ? 0 : this.run
        ],
      status: this.status,
      createTime: this.createTime
        ? this.createTime.toProtobufJSON(options)
        : null,
      updateTime: this.updateTime
        ? this.updateTime.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDocument {
  /**
   * Standard JavaScript object representation for RagDocument
   */
  export interface AsObject {
    id: string;
    thumbnail: string;
    datasetId: string;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    type: RagDocumentType;
    name: string;
    size: string;
    chunkCount: number;
    tokenCount: number;
    progress: number;
    progressMsg: string;
    processBeginAt?: googleProtobuf002.Timestamp.AsObject;
    processDuration: number;
    metaFields?: googleProtobuf001.Struct.AsObject;
    run: RagDocumentStatus;
    status: string;
    createTime?: googleProtobuf002.Timestamp.AsObject;
    updateTime?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDocument
   */
  export interface AsProtobufJSON {
    id: string;
    thumbnail: string;
    datasetId: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    type: string;
    name: string;
    size: string;
    chunkCount: number;
    tokenCount: number;
    progress: number;
    progressMsg: string;
    processBeginAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    processDuration: number;
    metaFields: googleProtobuf001.Struct.AsProtobufJSON | null;
    run: string;
    status: string;
    createTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    updateTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateDocumentRequest
 */
export class RagUpdateDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateDocumentRequest();
    RagUpdateDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.name = _instance.name || '';
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.enabled = _instance.enabled || false;
    _instance.metaFields = _instance.metaFields || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateDocumentRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.documentId = _reader.readString();
          break;
        case 5:
          _instance.name = _reader.readString();
          break;
        case 6:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 7:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.enabled = _reader.readBool();
          break;
        case 9:
          _instance.metaFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metaFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 11:
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

    RagUpdateDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(4, _instance.documentId);
    }
    if (_instance.name) {
      _writer.writeString(5, _instance.name);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(6, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        7,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.enabled) {
      _writer.writeBool(8, _instance.enabled);
    }
    if (_instance.metaFields) {
      _writer.writeMessage(
        9,
        _instance.metaFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        10,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        11,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _documentId: string;
  private _name: string;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _enabled: boolean;
  private _metaFields?: googleProtobuf001.Struct;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.name = _value.name;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.enabled = _value.enabled;
    this.metaFields = _value.metaFields
      ? new googleProtobuf001.Struct(_value.metaFields)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagUpdateDocumentRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get enabled(): boolean {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
  get metaFields(): googleProtobuf001.Struct | undefined {
    return this._metaFields;
  }
  set metaFields(value: googleProtobuf001.Struct | undefined) {
    this._metaFields = value;
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
    RagUpdateDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateDocumentRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentId: this.documentId,
      name: this.name,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      enabled: this.enabled,
      metaFields: this.metaFields ? this.metaFields.toObject() : undefined,
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
  ): RagUpdateDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentId: this.documentId,
      name: this.name,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      enabled: this.enabled,
      metaFields: this.metaFields
        ? this.metaFields.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagUpdateDocumentRequest {
  /**
   * Standard JavaScript object representation for RagUpdateDocumentRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentId: string;
    name: string;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    enabled: boolean;
    metaFields?: googleProtobuf001.Struct.AsObject;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentId: string;
    name: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    enabled: boolean;
    metaFields: googleProtobuf001.Struct.AsProtobufJSON | null;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDownloadDocumentRequest
 */
export class RagDownloadDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDownloadDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDownloadDocumentRequest();
    RagDownloadDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDownloadDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDownloadDocumentRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.documentId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDownloadDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDownloadDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(4, _instance.documentId);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _documentId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDownloadDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDownloadDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    RagDownloadDocumentRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDownloadDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDownloadDocumentRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentId: this.documentId
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
  ): RagDownloadDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentId: this.documentId
    };
  }
}
export module RagDownloadDocumentRequest {
  /**
   * Standard JavaScript object representation for RagDownloadDocumentRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentId: string;
  }

  /**
   * Protobuf JSON representation for RagDownloadDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileChunk
 */
export class RagFileChunk implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileChunk';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileChunk();
    RagFileChunk.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileChunk) {
    _instance.metadata = _instance.metadata || undefined;
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileChunk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.metadata = new RagFileMetadata();
          _reader.readMessage(
            _instance.metadata,
            RagFileMetadata.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileChunk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileChunk,
    _writer: BinaryWriter
  ) {
    if (_instance.metadata) {
      _writer.writeMessage(
        1,
        _instance.metadata as any,
        RagFileMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(2, _instance.data);
    }
  }

  private _metadata?: RagFileMetadata;
  private _data: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileChunk to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileChunk.AsObject>) {
    _value = _value || {};
    this.metadata = _value.metadata
      ? new RagFileMetadata(_value.metadata)
      : undefined;
    this.data = _value.data;
    RagFileChunk.refineValues(this);
  }
  get metadata(): RagFileMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: RagFileMetadata | undefined) {
    this._metadata = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileChunk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileChunk.AsObject {
    return {
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): RagFileChunk.AsProtobufJSON {
    return {
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module RagFileChunk {
  /**
   * Standard JavaScript object representation for RagFileChunk
   */
  export interface AsObject {
    metadata?: RagFileMetadata.AsObject;
    data: Uint8Array;
  }

  /**
   * Protobuf JSON representation for RagFileChunk
   */
  export interface AsProtobufJSON {
    metadata: RagFileMetadata.AsProtobufJSON | null;
    data: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListDocumentsRequest
 */
export class RagListDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListDocumentsRequest();
    RagListDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListDocumentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.keywords = _instance.keywords || '';
    _instance.suffix = _instance.suffix || [];
    _instance.runStatus = _instance.runStatus || [];
    _instance.createTimeFrom = _instance.createTimeFrom || undefined;
    _instance.createTimeTo = _instance.createTimeTo || undefined;
    _instance.metadataCondition = _instance.metadataCondition || undefined;
    _instance.sortingMode = _instance.sortingMode || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListDocumentsRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          _instance.id = _reader.readString();
          break;
        case 5:
          _instance.name = _reader.readString();
          break;
        case 6:
          _instance.pageToken = _reader.readString();
          break;
        case 7:
          _instance.orderby = _reader.readString();
          break;
        case 8:
          _instance.desc = _reader.readBool();
          break;
        case 9:
          _instance.keywords = _reader.readString();
          break;
        case 10:
          (_instance.suffix = _instance.suffix || []).push(
            _reader.readString()
          );
          break;
        case 11:
          _reader.readPackableEnumInto(
            (_instance.runStatus = _instance.runStatus || [])
          );
          break;
        case 12:
          _instance.createTimeFrom = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createTimeFrom,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.createTimeTo = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createTimeTo,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.metadataCondition = new RagMetadataConditions();
          _reader.readMessage(
            _instance.metadataCondition,
            RagMetadataConditions.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.sortingMode = _reader.readEnum();
          break;
        case 16:
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

    RagListDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.id) {
      _writer.writeString(4, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(5, _instance.name);
    }
    if (_instance.pageToken) {
      _writer.writeString(6, _instance.pageToken);
    }
    if (_instance.orderby) {
      _writer.writeString(7, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(8, _instance.desc);
    }
    if (_instance.keywords) {
      _writer.writeString(9, _instance.keywords);
    }
    if (_instance.suffix && _instance.suffix.length) {
      _writer.writeRepeatedString(10, _instance.suffix);
    }
    if (_instance.runStatus && _instance.runStatus.length) {
      _writer.writePackedEnum(11, _instance.runStatus);
    }
    if (_instance.createTimeFrom) {
      _writer.writeMessage(
        12,
        _instance.createTimeFrom as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createTimeTo) {
      _writer.writeMessage(
        13,
        _instance.createTimeTo as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.metadataCondition) {
      _writer.writeMessage(
        14,
        _instance.metadataCondition as any,
        RagMetadataConditions.serializeBinaryToWriter
      );
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(15, _instance.sortingMode);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        16,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _id: string;
  private _name: string;
  private _pageToken: string;
  private _orderby: string;
  private _desc: boolean;
  private _keywords: string;
  private _suffix: string[];
  private _runStatus: RagDocumentStatus[];
  private _createTimeFrom?: googleProtobuf002.Timestamp;
  private _createTimeTo?: googleProtobuf002.Timestamp;
  private _metadataCondition?: RagMetadataConditions;
  private _sortingMode: ondewoNlu008.SortingMode;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.id = _value.id;
    this.name = _value.name;
    this.pageToken = _value.pageToken;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.keywords = _value.keywords;
    this.suffix = (_value.suffix || []).slice();
    this.runStatus = (_value.runStatus || []).slice();
    this.createTimeFrom = _value.createTimeFrom
      ? new googleProtobuf002.Timestamp(_value.createTimeFrom)
      : undefined;
    this.createTimeTo = _value.createTimeTo
      ? new googleProtobuf002.Timestamp(_value.createTimeTo)
      : undefined;
    this.metadataCondition = _value.metadataCondition
      ? new RagMetadataConditions(_value.metadataCondition)
      : undefined;
    this.sortingMode = _value.sortingMode;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagListDocumentsRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get keywords(): string {
    return this._keywords;
  }
  set keywords(value: string) {
    this._keywords = value;
  }
  get suffix(): string[] {
    return this._suffix;
  }
  set suffix(value: string[]) {
    this._suffix = value;
  }
  get runStatus(): RagDocumentStatus[] {
    return this._runStatus;
  }
  set runStatus(value: RagDocumentStatus[]) {
    this._runStatus = value;
  }
  get createTimeFrom(): googleProtobuf002.Timestamp | undefined {
    return this._createTimeFrom;
  }
  set createTimeFrom(value: googleProtobuf002.Timestamp | undefined) {
    this._createTimeFrom = value;
  }
  get createTimeTo(): googleProtobuf002.Timestamp | undefined {
    return this._createTimeTo;
  }
  set createTimeTo(value: googleProtobuf002.Timestamp | undefined) {
    this._createTimeTo = value;
  }
  get metadataCondition(): RagMetadataConditions | undefined {
    return this._metadataCondition;
  }
  set metadataCondition(value: RagMetadataConditions | undefined) {
    this._metadataCondition = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
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
    RagListDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      id: this.id,
      name: this.name,
      pageToken: this.pageToken,
      orderby: this.orderby,
      desc: this.desc,
      keywords: this.keywords,
      suffix: (this.suffix || []).slice(),
      runStatus: (this.runStatus || []).slice(),
      createTimeFrom: this.createTimeFrom
        ? this.createTimeFrom.toObject()
        : undefined,
      createTimeTo: this.createTimeTo
        ? this.createTimeTo.toObject()
        : undefined,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toObject()
        : undefined,
      sortingMode: this.sortingMode,
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
  ): RagListDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      id: this.id,
      name: this.name,
      pageToken: this.pageToken,
      orderby: this.orderby,
      desc: this.desc,
      keywords: this.keywords,
      suffix: (this.suffix || []).slice(),
      runStatus: (this.runStatus || []).map(v => RagDocumentStatus[v]),
      createTimeFrom: this.createTimeFrom
        ? this.createTimeFrom.toProtobufJSON(options)
        : null,
      createTimeTo: this.createTimeTo
        ? this.createTimeTo.toProtobufJSON(options)
        : null,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toProtobufJSON(options)
        : null,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagListDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagListDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    id: string;
    name: string;
    pageToken: string;
    orderby: string;
    desc: boolean;
    keywords: string;
    suffix: string[];
    runStatus: RagDocumentStatus[];
    createTimeFrom?: googleProtobuf002.Timestamp.AsObject;
    createTimeTo?: googleProtobuf002.Timestamp.AsObject;
    metadataCondition?: RagMetadataConditions.AsObject;
    sortingMode: ondewoNlu008.SortingMode;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    id: string;
    name: string;
    pageToken: string;
    orderby: string;
    desc: boolean;
    keywords: string;
    suffix: string[];
    runStatus: string[];
    createTimeFrom: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createTimeTo: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    metadataCondition: RagMetadataConditions.AsProtobufJSON | null;
    sortingMode: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagMetadataConditions
 */
export class RagMetadataConditions implements GrpcMessage {
  static id = 'ondewo.nlu.RagMetadataConditions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagMetadataConditions();
    RagMetadataConditions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagMetadataConditions) {
    _instance.logic = _instance.logic || 0;
    _instance.conditions = _instance.conditions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagMetadataConditions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.logic = _reader.readEnum();
          break;
        case 2:
          const messageInitializer2 = new RagMetadataCondition();
          _reader.readMessage(
            messageInitializer2,
            RagMetadataCondition.deserializeBinaryFromReader
          );
          (_instance.conditions = _instance.conditions || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagMetadataConditions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagMetadataConditions,
    _writer: BinaryWriter
  ) {
    if (_instance.logic) {
      _writer.writeEnum(1, _instance.logic);
    }
    if (_instance.conditions && _instance.conditions.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.conditions as any,
        RagMetadataCondition.serializeBinaryToWriter
      );
    }
  }

  private _logic: RagLogic;
  private _conditions?: RagMetadataCondition[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagMetadataConditions to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagMetadataConditions.AsObject>) {
    _value = _value || {};
    this.logic = _value.logic;
    this.conditions = (_value.conditions || []).map(
      m => new RagMetadataCondition(m)
    );
    RagMetadataConditions.refineValues(this);
  }
  get logic(): RagLogic {
    return this._logic;
  }
  set logic(value: RagLogic) {
    this._logic = value;
  }
  get conditions(): RagMetadataCondition[] | undefined {
    return this._conditions;
  }
  set conditions(value: RagMetadataCondition[] | undefined) {
    this._conditions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagMetadataConditions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagMetadataConditions.AsObject {
    return {
      logic: this.logic,
      conditions: (this.conditions || []).map(m => m.toObject())
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
  ): RagMetadataConditions.AsProtobufJSON {
    return {
      logic:
        RagLogic[
          this.logic === null || this.logic === undefined ? 0 : this.logic
        ],
      conditions: (this.conditions || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagMetadataConditions {
  /**
   * Standard JavaScript object representation for RagMetadataConditions
   */
  export interface AsObject {
    logic: RagLogic;
    conditions?: RagMetadataCondition.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagMetadataConditions
   */
  export interface AsProtobufJSON {
    logic: string;
    conditions: RagMetadataCondition.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagMetadataCondition
 */
export class RagMetadataCondition implements GrpcMessage {
  static id = 'ondewo.nlu.RagMetadataCondition';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagMetadataCondition();
    RagMetadataCondition.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagMetadataCondition) {
    _instance.name = _instance.name || '';
    _instance.comparisonOperator = _instance.comparisonOperator || 0;
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagMetadataCondition,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.comparisonOperator = _reader.readEnum();
          break;
        case 3:
          _instance.value = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagMetadataCondition.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagMetadataCondition,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.comparisonOperator) {
      _writer.writeEnum(2, _instance.comparisonOperator);
    }
    if (_instance.value) {
      _writer.writeString(3, _instance.value);
    }
  }

  private _name: string;
  private _comparisonOperator: RagComparisonOperator;
  private _value: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagMetadataCondition to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagMetadataCondition.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.comparisonOperator = _value.comparisonOperator;
    this.value = _value.value;
    RagMetadataCondition.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get comparisonOperator(): RagComparisonOperator {
    return this._comparisonOperator;
  }
  set comparisonOperator(value: RagComparisonOperator) {
    this._comparisonOperator = value;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagMetadataCondition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagMetadataCondition.AsObject {
    return {
      name: this.name,
      comparisonOperator: this.comparisonOperator,
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
  ): RagMetadataCondition.AsProtobufJSON {
    return {
      name: this.name,
      comparisonOperator:
        RagComparisonOperator[
          this.comparisonOperator === null ||
          this.comparisonOperator === undefined
            ? 0
            : this.comparisonOperator
        ],
      value: this.value
    };
  }
}
export module RagMetadataCondition {
  /**
   * Standard JavaScript object representation for RagMetadataCondition
   */
  export interface AsObject {
    name: string;
    comparisonOperator: RagComparisonOperator;
    value: string;
  }

  /**
   * Protobuf JSON representation for RagMetadataCondition
   */
  export interface AsProtobufJSON {
    name: string;
    comparisonOperator: string;
    value: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocumentList
 */
export class RagDocumentList implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocumentList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocumentList();
    RagDocumentList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocumentList) {
    _instance.documents = _instance.documents || [];
    _instance.total = _instance.total || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocumentList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDocument();
          _reader.readMessage(
            messageInitializer1,
            RagDocument.deserializeBinaryFromReader
          );
          (_instance.documents = _instance.documents || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        case 3:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocumentList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDocumentList,
    _writer: BinaryWriter
  ) {
    if (_instance.documents && _instance.documents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.documents as any,
        RagDocument.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(3, _instance.nextPageToken);
    }
  }

  private _documents?: RagDocument[];
  private _total: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocumentList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocumentList.AsObject>) {
    _value = _value || {};
    this.documents = (_value.documents || []).map(m => new RagDocument(m));
    this.total = _value.total;
    this.nextPageToken = _value.nextPageToken;
    RagDocumentList.refineValues(this);
  }
  get documents(): RagDocument[] | undefined {
    return this._documents;
  }
  set documents(value: RagDocument[] | undefined) {
    this._documents = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
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
    RagDocumentList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocumentList.AsObject {
    return {
      documents: (this.documents || []).map(m => m.toObject()),
      total: this.total,
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
  ): RagDocumentList.AsProtobufJSON {
    return {
      documents: (this.documents || []).map(m => m.toProtobufJSON(options)),
      total: this.total,
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagDocumentList {
  /**
   * Standard JavaScript object representation for RagDocumentList
   */
  export interface AsObject {
    documents?: RagDocument.AsObject[];
    total: number;
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagDocumentList
   */
  export interface AsProtobufJSON {
    documents: RagDocument.AsProtobufJSON[] | null;
    total: number;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteDocumentsRequest
 */
export class RagDeleteDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteDocumentsRequest();
    RagDeleteDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteDocumentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteDocumentsRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 5:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(4, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(5, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteDocumentsRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocumentIdsRequest
 */
export class RagDocumentIdsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocumentIdsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocumentIdsRequest();
    RagDocumentIdsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocumentIdsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentIds = _instance.documentIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocumentIdsRequest,
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
          _instance.datasetId = _reader.readString();
          break;
        case 4:
          (_instance.documentIds = _instance.documentIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocumentIdsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDocumentIdsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetId) {
      _writer.writeString(3, _instance.datasetId);
    }
    if (_instance.documentIds && _instance.documentIds.length) {
      _writer.writeRepeatedString(4, _instance.documentIds);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetId: string;
  private _documentIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocumentIdsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocumentIdsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetId = _value.datasetId;
    this.documentIds = (_value.documentIds || []).slice();
    RagDocumentIdsRequest.refineValues(this);
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
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentIds(): string[] {
    return this._documentIds;
  }
  set documentIds(value: string[]) {
    this._documentIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDocumentIdsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocumentIdsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
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
  ): RagDocumentIdsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
    };
  }
}
export module RagDocumentIdsRequest {
  /**
   * Standard JavaScript object representation for RagDocumentIdsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentIds: string[];
  }

  /**
   * Protobuf JSON representation for RagDocumentIdsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetId: string;
    documentIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagRetrievalRequest
 */
export class RagRetrievalRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRetrievalRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRetrievalRequest();
    RagRetrievalRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRetrievalRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.pageToken = _instance.pageToken || '';
    _instance.question = _instance.question || '';
    _instance.documentIds = _instance.documentIds || [];
    _instance.useKg = _instance.useKg || false;
    _instance.crossLanguages = _instance.crossLanguages || [];
    _instance.metadataCondition = _instance.metadataCondition || undefined;
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.vectorSimilarityWeight = _instance.vectorSimilarityWeight || 0;
    _instance.topK = _instance.topK || 0;
    _instance.highlight = _instance.highlight || false;
    _instance.keyword = _instance.keyword || false;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.rerankModelCcaiServiceName =
      _instance.rerankModelCcaiServiceName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRetrievalRequest,
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
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.question = _reader.readString();
          break;
        case 6:
          (_instance.documentIds = _instance.documentIds || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.useKg = _reader.readBool();
          break;
        case 8:
          (_instance.crossLanguages = _instance.crossLanguages || []).push(
            _reader.readString()
          );
          break;
        case 9:
          _instance.metadataCondition = new RagMetadataConditions();
          _reader.readMessage(
            _instance.metadataCondition,
            RagMetadataConditions.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 11:
          _instance.vectorSimilarityWeight = _reader.readFloat();
          break;
        case 12:
          _instance.topK = _reader.readInt32();
          break;
        case 13:
          _instance.highlight = _reader.readBool();
          break;
        case 14:
          _instance.keyword = _reader.readBool();
          break;
        case 15:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.rerankModelCcaiServiceName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagRetrievalRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRetrievalRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(3, _instance.datasetIds);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.question) {
      _writer.writeString(5, _instance.question);
    }
    if (_instance.documentIds && _instance.documentIds.length) {
      _writer.writeRepeatedString(6, _instance.documentIds);
    }
    if (_instance.useKg) {
      _writer.writeBool(7, _instance.useKg);
    }
    if (_instance.crossLanguages && _instance.crossLanguages.length) {
      _writer.writeRepeatedString(8, _instance.crossLanguages);
    }
    if (_instance.metadataCondition) {
      _writer.writeMessage(
        9,
        _instance.metadataCondition as any,
        RagMetadataConditions.serializeBinaryToWriter
      );
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(10, _instance.similarityThreshold);
    }
    if (_instance.vectorSimilarityWeight) {
      _writer.writeFloat(11, _instance.vectorSimilarityWeight);
    }
    if (_instance.topK) {
      _writer.writeInt32(12, _instance.topK);
    }
    if (_instance.highlight) {
      _writer.writeBool(13, _instance.highlight);
    }
    if (_instance.keyword) {
      _writer.writeBool(14, _instance.keyword);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        15,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.rerankModelCcaiServiceName) {
      _writer.writeString(16, _instance.rerankModelCcaiServiceName);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _datasetIds: string[];
  private _pageToken: string;
  private _question: string;
  private _documentIds: string[];
  private _useKg: boolean;
  private _crossLanguages: string[];
  private _metadataCondition?: RagMetadataConditions;
  private _similarityThreshold: number;
  private _vectorSimilarityWeight: number;
  private _topK: number;
  private _highlight: boolean;
  private _keyword: boolean;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _rerankModelCcaiServiceName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRetrievalRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRetrievalRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.pageToken = _value.pageToken;
    this.question = _value.question;
    this.documentIds = (_value.documentIds || []).slice();
    this.useKg = _value.useKg;
    this.crossLanguages = (_value.crossLanguages || []).slice();
    this.metadataCondition = _value.metadataCondition
      ? new RagMetadataConditions(_value.metadataCondition)
      : undefined;
    this.similarityThreshold = _value.similarityThreshold;
    this.vectorSimilarityWeight = _value.vectorSimilarityWeight;
    this.topK = _value.topK;
    this.highlight = _value.highlight;
    this.keyword = _value.keyword;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.rerankModelCcaiServiceName = _value.rerankModelCcaiServiceName;
    RagRetrievalRequest.refineValues(this);
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
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get documentIds(): string[] {
    return this._documentIds;
  }
  set documentIds(value: string[]) {
    this._documentIds = value;
  }
  get useKg(): boolean {
    return this._useKg;
  }
  set useKg(value: boolean) {
    this._useKg = value;
  }
  get crossLanguages(): string[] {
    return this._crossLanguages;
  }
  set crossLanguages(value: string[]) {
    this._crossLanguages = value;
  }
  get metadataCondition(): RagMetadataConditions | undefined {
    return this._metadataCondition;
  }
  set metadataCondition(value: RagMetadataConditions | undefined) {
    this._metadataCondition = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get vectorSimilarityWeight(): number {
    return this._vectorSimilarityWeight;
  }
  set vectorSimilarityWeight(value: number) {
    this._vectorSimilarityWeight = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get highlight(): boolean {
    return this._highlight;
  }
  set highlight(value: boolean) {
    this._highlight = value;
  }
  get keyword(): boolean {
    return this._keyword;
  }
  set keyword(value: boolean) {
    this._keyword = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get rerankModelCcaiServiceName(): string {
    return this._rerankModelCcaiServiceName;
  }
  set rerankModelCcaiServiceName(value: string) {
    this._rerankModelCcaiServiceName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRetrievalRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRetrievalRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetIds: (this.datasetIds || []).slice(),
      pageToken: this.pageToken,
      question: this.question,
      documentIds: (this.documentIds || []).slice(),
      useKg: this.useKg,
      crossLanguages: (this.crossLanguages || []).slice(),
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toObject()
        : undefined,
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      topK: this.topK,
      highlight: this.highlight,
      keyword: this.keyword,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      rerankModelCcaiServiceName: this.rerankModelCcaiServiceName
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
  ): RagRetrievalRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      datasetIds: (this.datasetIds || []).slice(),
      pageToken: this.pageToken,
      question: this.question,
      documentIds: (this.documentIds || []).slice(),
      useKg: this.useKg,
      crossLanguages: (this.crossLanguages || []).slice(),
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toProtobufJSON(options)
        : null,
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      topK: this.topK,
      highlight: this.highlight,
      keyword: this.keyword,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      rerankModelCcaiServiceName: this.rerankModelCcaiServiceName
    };
  }
}
export module RagRetrievalRequest {
  /**
   * Standard JavaScript object representation for RagRetrievalRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    datasetIds: string[];
    pageToken: string;
    question: string;
    documentIds: string[];
    useKg: boolean;
    crossLanguages: string[];
    metadataCondition?: RagMetadataConditions.AsObject;
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    topK: number;
    highlight: boolean;
    keyword: boolean;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    rerankModelCcaiServiceName: string;
  }

  /**
   * Protobuf JSON representation for RagRetrievalRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    datasetIds: string[];
    pageToken: string;
    question: string;
    documentIds: string[];
    useKg: boolean;
    crossLanguages: string[];
    metadataCondition: RagMetadataConditions.AsProtobufJSON | null;
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    topK: number;
    highlight: boolean;
    keyword: boolean;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    rerankModelCcaiServiceName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRetrievalResponse
 */
export class RagRetrievalResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagRetrievalResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRetrievalResponse();
    RagRetrievalResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRetrievalResponse) {
    _instance.chunks = _instance.chunks || [];
    _instance.docAggs = _instance.docAggs || [];
    _instance.total = _instance.total || 0;
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRetrievalResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagChunk();
          _reader.readMessage(
            messageInitializer1,
            RagChunk.deserializeBinaryFromReader
          );
          (_instance.chunks = _instance.chunks || []).push(messageInitializer1);
          break;
        case 2:
          const messageInitializer2 = new RagDocAgg();
          _reader.readMessage(
            messageInitializer2,
            RagDocAgg.deserializeBinaryFromReader
          );
          (_instance.docAggs = _instance.docAggs || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.total = _reader.readInt32();
          break;
        case 4:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagRetrievalResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRetrievalResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunks && _instance.chunks.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.chunks as any,
        RagChunk.serializeBinaryToWriter
      );
    }
    if (_instance.docAggs && _instance.docAggs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.docAggs as any,
        RagDocAgg.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(3, _instance.total);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(4, _instance.nextPageToken);
    }
  }

  private _chunks?: RagChunk[];
  private _docAggs?: RagDocAgg[];
  private _total: number;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRetrievalResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRetrievalResponse.AsObject>) {
    _value = _value || {};
    this.chunks = (_value.chunks || []).map(m => new RagChunk(m));
    this.docAggs = (_value.docAggs || []).map(m => new RagDocAgg(m));
    this.total = _value.total;
    this.nextPageToken = _value.nextPageToken;
    RagRetrievalResponse.refineValues(this);
  }
  get chunks(): RagChunk[] | undefined {
    return this._chunks;
  }
  set chunks(value: RagChunk[] | undefined) {
    this._chunks = value;
  }
  get docAggs(): RagDocAgg[] | undefined {
    return this._docAggs;
  }
  set docAggs(value: RagDocAgg[] | undefined) {
    this._docAggs = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
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
    RagRetrievalResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRetrievalResponse.AsObject {
    return {
      chunks: (this.chunks || []).map(m => m.toObject()),
      docAggs: (this.docAggs || []).map(m => m.toObject()),
      total: this.total,
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
  ): RagRetrievalResponse.AsProtobufJSON {
    return {
      chunks: (this.chunks || []).map(m => m.toProtobufJSON(options)),
      docAggs: (this.docAggs || []).map(m => m.toProtobufJSON(options)),
      total: this.total,
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagRetrievalResponse {
  /**
   * Standard JavaScript object representation for RagRetrievalResponse
   */
  export interface AsObject {
    chunks?: RagChunk.AsObject[];
    docAggs?: RagDocAgg.AsObject[];
    total: number;
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagRetrievalResponse
   */
  export interface AsProtobufJSON {
    chunks: RagChunk.AsProtobufJSON[] | null;
    docAggs: RagDocAgg.AsProtobufJSON[] | null;
    total: number;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChunk
 */
export class RagChunk implements GrpcMessage {
  static id = 'ondewo.nlu.RagChunk';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChunk();
    RagChunk.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChunk) {
    _instance.id = _instance.id || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.content = _instance.content || '';
    _instance.importantKeywords = _instance.importantKeywords || [];
    _instance.questions = _instance.questions || [];
    _instance.imageId = _instance.imageId || '';
    _instance.positions = _instance.positions || [];
    _instance.createTime = _instance.createTime || undefined;
    _instance.documentKeyword = _instance.documentKeyword || '';
    _instance.similarity = _instance.similarity || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChunk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.content = _reader.readString();
          break;
        case 5:
          (_instance.importantKeywords =
            _instance.importantKeywords || []).push(_reader.readString());
          break;
        case 6:
          (_instance.questions = _instance.questions || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.imageId = _reader.readString();
          break;
        case 8:
          const messageInitializer8 = new googleProtobuf001.ListValue();
          _reader.readMessage(
            messageInitializer8,
            googleProtobuf001.ListValue.deserializeBinaryFromReader
          );
          (_instance.positions = _instance.positions || []).push(
            messageInitializer8
          );
          break;
        case 9:
          _instance.createTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.documentKeyword = _reader.readString();
          break;
        case 11:
          _instance.similarity = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    RagChunk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagChunk, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.content) {
      _writer.writeString(4, _instance.content);
    }
    if (_instance.importantKeywords && _instance.importantKeywords.length) {
      _writer.writeRepeatedString(5, _instance.importantKeywords);
    }
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedString(6, _instance.questions);
    }
    if (_instance.imageId) {
      _writer.writeString(7, _instance.imageId);
    }
    if (_instance.positions && _instance.positions.length) {
      _writer.writeRepeatedMessage(
        8,
        _instance.positions as any,
        googleProtobuf001.ListValue.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeMessage(
        9,
        _instance.createTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.documentKeyword) {
      _writer.writeString(10, _instance.documentKeyword);
    }
    if (_instance.similarity) {
      _writer.writeFloat(11, _instance.similarity);
    }
  }

  private _id: string;
  private _datasetId: string;
  private _documentId: string;
  private _content: string;
  private _importantKeywords: string[];
  private _questions: string[];
  private _imageId: string;
  private _positions?: googleProtobuf001.ListValue[];
  private _createTime?: googleProtobuf002.Timestamp;
  private _documentKeyword: string;
  private _similarity: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChunk to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChunk.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.content = _value.content;
    this.importantKeywords = (_value.importantKeywords || []).slice();
    this.questions = (_value.questions || []).slice();
    this.imageId = _value.imageId;
    this.positions = (_value.positions || []).map(
      m => new googleProtobuf001.ListValue(m)
    );
    this.createTime = _value.createTime
      ? new googleProtobuf002.Timestamp(_value.createTime)
      : undefined;
    this.documentKeyword = _value.documentKeyword;
    this.similarity = _value.similarity;
    RagChunk.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get importantKeywords(): string[] {
    return this._importantKeywords;
  }
  set importantKeywords(value: string[]) {
    this._importantKeywords = value;
  }
  get questions(): string[] {
    return this._questions;
  }
  set questions(value: string[]) {
    this._questions = value;
  }
  get imageId(): string {
    return this._imageId;
  }
  set imageId(value: string) {
    this._imageId = value;
  }
  get positions(): googleProtobuf001.ListValue[] | undefined {
    return this._positions;
  }
  set positions(value: googleProtobuf001.ListValue[] | undefined) {
    this._positions = value;
  }
  get createTime(): googleProtobuf002.Timestamp | undefined {
    return this._createTime;
  }
  set createTime(value: googleProtobuf002.Timestamp | undefined) {
    this._createTime = value;
  }
  get documentKeyword(): string {
    return this._documentKeyword;
  }
  set documentKeyword(value: string) {
    this._documentKeyword = value;
  }
  get similarity(): number {
    return this._similarity;
  }
  set similarity(value: number) {
    this._similarity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChunk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChunk.AsObject {
    return {
      id: this.id,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      imageId: this.imageId,
      positions: (this.positions || []).map(m => m.toObject()),
      createTime: this.createTime ? this.createTime.toObject() : undefined,
      documentKeyword: this.documentKeyword,
      similarity: this.similarity
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
  ): RagChunk.AsProtobufJSON {
    return {
      id: this.id,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      imageId: this.imageId,
      positions: (this.positions || []).map(m => m.toProtobufJSON(options)),
      createTime: this.createTime
        ? this.createTime.toProtobufJSON(options)
        : null,
      documentKeyword: this.documentKeyword,
      similarity: this.similarity
    };
  }
}
export module RagChunk {
  /**
   * Standard JavaScript object representation for RagChunk
   */
  export interface AsObject {
    id: string;
    datasetId: string;
    documentId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    imageId: string;
    positions?: googleProtobuf001.ListValue.AsObject[];
    createTime?: googleProtobuf002.Timestamp.AsObject;
    documentKeyword: string;
    similarity: number;
  }

  /**
   * Protobuf JSON representation for RagChunk
   */
  export interface AsProtobufJSON {
    id: string;
    datasetId: string;
    documentId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    imageId: string;
    positions: googleProtobuf001.ListValue.AsProtobufJSON[] | null;
    createTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    documentKeyword: string;
    similarity: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocAgg
 */
export class RagDocAgg implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocAgg';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocAgg();
    RagDocAgg.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocAgg) {
    _instance.docName = _instance.docName || '';
    _instance.docId = _instance.docId || '';
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocAgg,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.docName = _reader.readString();
          break;
        case 2:
          _instance.docId = _reader.readString();
          break;
        case 3:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocAgg.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagDocAgg, _writer: BinaryWriter) {
    if (_instance.docName) {
      _writer.writeString(1, _instance.docName);
    }
    if (_instance.docId) {
      _writer.writeString(2, _instance.docId);
    }
    if (_instance.count) {
      _writer.writeInt32(3, _instance.count);
    }
  }

  private _docName: string;
  private _docId: string;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocAgg to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocAgg.AsObject>) {
    _value = _value || {};
    this.docName = _value.docName;
    this.docId = _value.docId;
    this.count = _value.count;
    RagDocAgg.refineValues(this);
  }
  get docName(): string {
    return this._docName;
  }
  set docName(value: string) {
    this._docName = value;
  }
  get docId(): string {
    return this._docId;
  }
  set docId(value: string) {
    this._docId = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDocAgg.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocAgg.AsObject {
    return {
      docName: this.docName,
      docId: this.docId,
      count: this.count
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
  ): RagDocAgg.AsProtobufJSON {
    return {
      docName: this.docName,
      docId: this.docId,
      count: this.count
    };
  }
}
export module RagDocAgg {
  /**
   * Standard JavaScript object representation for RagDocAgg
   */
  export interface AsObject {
    docName: string;
    docId: string;
    count: number;
  }

  /**
   * Protobuf JSON representation for RagDocAgg
   */
  export interface AsProtobufJSON {
    docName: string;
    docId: string;
    count: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateCrawlerRequest
 */
export class RagCreateCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateCrawlerRequest();
    RagCreateCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateCrawlerRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawler = _instance.crawler || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateCrawlerRequest,
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
          _instance.crawler = new RagCrawler();
          _reader.readMessage(
            _instance.crawler,
            RagCrawler.deserializeBinaryFromReader
          );
          break;
        case 4:
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

    RagCreateCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawler) {
      _writer.writeMessage(
        3,
        _instance.crawler as any,
        RagCrawler.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawler?: RagCrawler;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawler = _value.crawler ? new RagCrawler(_value.crawler) : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagCreateCrawlerRequest.refineValues(this);
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
  get crawler(): RagCrawler | undefined {
    return this._crawler;
  }
  set crawler(value: RagCrawler | undefined) {
    this._crawler = value;
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
    RagCreateCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateCrawlerRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawler: this.crawler ? this.crawler.toObject() : undefined,
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
  ): RagCreateCrawlerRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawler: this.crawler ? this.crawler.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagCreateCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagCreateCrawlerRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawler?: RagCrawler.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateCrawlerRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawler: RagCrawler.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlerRequest
 */
export class RagDeleteCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlerRequest();
    RagDeleteCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlerRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    RagDeleteCrawlerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlerRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
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
  ): RagDeleteCrawlerRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module RagDeleteCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlerRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlerResponse
 */
export class RagDeleteCrawlerResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlerResponse();
    RagDeleteCrawlerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteCrawlerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    RagDeleteCrawlerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    RagDeleteCrawlerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlerResponse.AsObject {
    return {
      name: this.name,
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
  ): RagDeleteCrawlerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module RagDeleteCrawlerResponse {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlersRequest
 */
export class RagDeleteCrawlersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlersRequest();
    RagDeleteCrawlersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlersRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlersRequest,
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
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(3, _instance.names);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteCrawlersRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.names = (_value.names || []).slice();
    RagDeleteCrawlersRequest.refineValues(this);
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
    RagDeleteCrawlersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlersRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
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
  ): RagDeleteCrawlersRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      names: (this.names || []).slice()
    };
  }
}
export module RagDeleteCrawlersRequest {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlersRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    names: string[];
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlersRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlersResponse
 */
export class RagDeleteCrawlersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlersResponse();
    RagDeleteCrawlersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlersResponse) {
    _instance.deleteCrawlerResponses = _instance.deleteCrawlerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDeleteCrawlerResponse();
          _reader.readMessage(
            messageInitializer1,
            RagDeleteCrawlerResponse.deserializeBinaryFromReader
          );
          (_instance.deleteCrawlerResponses =
            _instance.deleteCrawlerResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlersResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.deleteCrawlerResponses &&
      _instance.deleteCrawlerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteCrawlerResponses as any,
        RagDeleteCrawlerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _deleteCrawlerResponses?: RagDeleteCrawlerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteCrawlersResponse.AsObject>) {
    _value = _value || {};
    this.deleteCrawlerResponses = (_value.deleteCrawlerResponses || []).map(
      m => new RagDeleteCrawlerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    RagDeleteCrawlersResponse.refineValues(this);
  }
  get deleteCrawlerResponses(): RagDeleteCrawlerResponse[] | undefined {
    return this._deleteCrawlerResponses;
  }
  set deleteCrawlerResponses(value: RagDeleteCrawlerResponse[] | undefined) {
    this._deleteCrawlerResponses = value;
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
    RagDeleteCrawlersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlersResponse.AsObject {
    return {
      deleteCrawlerResponses: (this.deleteCrawlerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): RagDeleteCrawlersResponse.AsProtobufJSON {
    return {
      deleteCrawlerResponses: (this.deleteCrawlerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module RagDeleteCrawlersResponse {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlersResponse
   */
  export interface AsObject {
    deleteCrawlerResponses?: RagDeleteCrawlerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlersResponse
   */
  export interface AsProtobufJSON {
    deleteCrawlerResponses: RagDeleteCrawlerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListCrawlersRequest
 */
export class RagListCrawlersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListCrawlersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListCrawlersRequest();
    RagListCrawlersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListCrawlersRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.datasetName = _instance.datasetName || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.orderby = _instance.orderby || '';
    _instance.sortingMode = _instance.sortingMode || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListCrawlersRequest,
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
          _instance.pageToken = _reader.readString();
          break;
        case 4:
          _instance.datasetName = _reader.readString();
          break;
        case 5:
          _instance.crawlerName = _reader.readString();
          break;
        case 6:
          _instance.orderby = _reader.readString();
          break;
        case 7:
          _instance.sortingMode = _reader.readEnum();
          break;
        case 8:
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

    RagListCrawlersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListCrawlersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.datasetName) {
      _writer.writeString(4, _instance.datasetName);
    }
    if (_instance.crawlerName) {
      _writer.writeString(5, _instance.crawlerName);
    }
    if (_instance.orderby) {
      _writer.writeString(6, _instance.orderby);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(7, _instance.sortingMode);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        8,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _pageToken: string;
  private _datasetName: string;
  private _crawlerName: string;
  private _orderby: string;
  private _sortingMode: ondewoNlu008.SortingMode;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListCrawlersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListCrawlersRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    this.datasetName = _value.datasetName;
    this.crawlerName = _value.crawlerName;
    this.orderby = _value.orderby;
    this.sortingMode = _value.sortingMode;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagListCrawlersRequest.refineValues(this);
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
  get datasetName(): string {
    return this._datasetName;
  }
  set datasetName(value: string) {
    this._datasetName = value;
  }
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
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
    RagListCrawlersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListCrawlersRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      datasetName: this.datasetName,
      crawlerName: this.crawlerName,
      orderby: this.orderby,
      sortingMode: this.sortingMode,
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
  ): RagListCrawlersRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      pageToken: this.pageToken,
      datasetName: this.datasetName,
      crawlerName: this.crawlerName,
      orderby: this.orderby,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagListCrawlersRequest {
  /**
   * Standard JavaScript object representation for RagListCrawlersRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    pageToken: string;
    datasetName: string;
    crawlerName: string;
    orderby: string;
    sortingMode: ondewoNlu008.SortingMode;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListCrawlersRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    pageToken: string;
    datasetName: string;
    crawlerName: string;
    orderby: string;
    sortingMode: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListCrawlersResponse
 */
export class RagListCrawlersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagListCrawlersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListCrawlersResponse();
    RagListCrawlersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListCrawlersResponse) {
    _instance.crawlers = _instance.crawlers || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListCrawlersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagCrawler();
          _reader.readMessage(
            messageInitializer1,
            RagCrawler.deserializeBinaryFromReader
          );
          (_instance.crawlers = _instance.crawlers || []).push(
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

    RagListCrawlersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListCrawlersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.crawlers && _instance.crawlers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.crawlers as any,
        RagCrawler.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _crawlers?: RagCrawler[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListCrawlersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListCrawlersResponse.AsObject>) {
    _value = _value || {};
    this.crawlers = (_value.crawlers || []).map(m => new RagCrawler(m));
    this.nextPageToken = _value.nextPageToken;
    RagListCrawlersResponse.refineValues(this);
  }
  get crawlers(): RagCrawler[] | undefined {
    return this._crawlers;
  }
  set crawlers(value: RagCrawler[] | undefined) {
    this._crawlers = value;
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
    RagListCrawlersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListCrawlersResponse.AsObject {
    return {
      crawlers: (this.crawlers || []).map(m => m.toObject()),
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
  ): RagListCrawlersResponse.AsProtobufJSON {
    return {
      crawlers: (this.crawlers || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagListCrawlersResponse {
  /**
   * Standard JavaScript object representation for RagListCrawlersResponse
   */
  export interface AsObject {
    crawlers?: RagCrawler.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagListCrawlersResponse
   */
  export interface AsProtobufJSON {
    crawlers: RagCrawler.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerRequest
 */
export class RagGetCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerRequest();
    RagGetCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
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

    RagGetCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagGetCrawlerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    RagGetCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode,
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
  ): RagGetCrawlerRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagGetCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateCrawlerRequest
 */
export class RagUpdateCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateCrawlerRequest();
    RagUpdateCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateCrawlerRequest) {
    _instance.crawler = _instance.crawler || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateCrawlerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.crawler = new RagCrawler();
          _reader.readMessage(
            _instance.crawler,
            RagCrawler.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
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

    RagUpdateCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.crawler) {
      _writer.writeMessage(
        1,
        _instance.crawler as any,
        RagCrawler.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        4,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _crawler?: RagCrawler;
  private _parent: string;
  private _languageCode: string;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.crawler = _value.crawler ? new RagCrawler(_value.crawler) : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagUpdateCrawlerRequest.refineValues(this);
  }
  get crawler(): RagCrawler | undefined {
    return this._crawler;
  }
  set crawler(value: RagCrawler | undefined) {
    this._crawler = value;
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
    RagUpdateCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateCrawlerRequest.AsObject {
    return {
      crawler: this.crawler ? this.crawler.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode,
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
  ): RagUpdateCrawlerRequest.AsProtobufJSON {
    return {
      crawler: this.crawler ? this.crawler.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagUpdateCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagUpdateCrawlerRequest
   */
  export interface AsObject {
    crawler?: RagCrawler.AsObject;
    parent: string;
    languageCode: string;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateCrawlerRequest
   */
  export interface AsProtobufJSON {
    crawler: RagCrawler.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawler
 */
export class RagCrawler implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawler';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawler();
    RagCrawler.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawler) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.crawlerSources = _instance.crawlerSources || undefined;
    _instance.crawlerSeedUrlFilters =
      _instance.crawlerSeedUrlFilters || undefined;
    _instance.crawlerAuth = _instance.crawlerAuth || undefined;
    _instance.crawlerBrowserConfig =
      _instance.crawlerBrowserConfig || undefined;
    _instance.crawlerConfig = _instance.crawlerConfig || undefined;
    _instance.retryConfig = _instance.retryConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawler,
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
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.modifiedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.createdBy = _reader.readString();
          break;
        case 6:
          _instance.modifiedBy = _reader.readString();
          break;
        case 7:
          _instance.crawlerSources = new RagCrawlerSources();
          _reader.readMessage(
            _instance.crawlerSources,
            RagCrawlerSources.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.crawlerSeedUrlFilters = new RagCrawlerSeedUrlFilters();
          _reader.readMessage(
            _instance.crawlerSeedUrlFilters,
            RagCrawlerSeedUrlFilters.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.crawlerAuth = new RagCrawlerAuth();
          _reader.readMessage(
            _instance.crawlerAuth,
            RagCrawlerAuth.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.crawlerBrowserConfig = new RagCrawlerBrowserConfig();
          _reader.readMessage(
            _instance.crawlerBrowserConfig,
            RagCrawlerBrowserConfig.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.crawlerConfig = new RagCrawlerConfig();
          _reader.readMessage(
            _instance.crawlerConfig,
            RagCrawlerConfig.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.retryConfig = new RagCrawlerRetryConfig();
          _reader.readMessage(
            _instance.retryConfig,
            RagCrawlerRetryConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawler.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagCrawler, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        3,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        4,
        _instance.modifiedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(5, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(6, _instance.modifiedBy);
    }
    if (_instance.crawlerSources) {
      _writer.writeMessage(
        7,
        _instance.crawlerSources as any,
        RagCrawlerSources.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerSeedUrlFilters) {
      _writer.writeMessage(
        8,
        _instance.crawlerSeedUrlFilters as any,
        RagCrawlerSeedUrlFilters.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerAuth) {
      _writer.writeMessage(
        9,
        _instance.crawlerAuth as any,
        RagCrawlerAuth.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerBrowserConfig) {
      _writer.writeMessage(
        10,
        _instance.crawlerBrowserConfig as any,
        RagCrawlerBrowserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerConfig) {
      _writer.writeMessage(
        11,
        _instance.crawlerConfig as any,
        RagCrawlerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.retryConfig) {
      _writer.writeMessage(
        12,
        _instance.retryConfig as any,
        RagCrawlerRetryConfig.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _modifiedAt?: googleProtobuf002.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _crawlerSources?: RagCrawlerSources;
  private _crawlerSeedUrlFilters?: RagCrawlerSeedUrlFilters;
  private _crawlerAuth?: RagCrawlerAuth;
  private _crawlerBrowserConfig?: RagCrawlerBrowserConfig;
  private _crawlerConfig?: RagCrawlerConfig;
  private _retryConfig?: RagCrawlerRetryConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawler to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawler.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf002.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.crawlerSources = _value.crawlerSources
      ? new RagCrawlerSources(_value.crawlerSources)
      : undefined;
    this.crawlerSeedUrlFilters = _value.crawlerSeedUrlFilters
      ? new RagCrawlerSeedUrlFilters(_value.crawlerSeedUrlFilters)
      : undefined;
    this.crawlerAuth = _value.crawlerAuth
      ? new RagCrawlerAuth(_value.crawlerAuth)
      : undefined;
    this.crawlerBrowserConfig = _value.crawlerBrowserConfig
      ? new RagCrawlerBrowserConfig(_value.crawlerBrowserConfig)
      : undefined;
    this.crawlerConfig = _value.crawlerConfig
      ? new RagCrawlerConfig(_value.crawlerConfig)
      : undefined;
    this.retryConfig = _value.retryConfig
      ? new RagCrawlerRetryConfig(_value.retryConfig)
      : undefined;
    RagCrawler.refineValues(this);
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
  get crawlerSources(): RagCrawlerSources | undefined {
    return this._crawlerSources;
  }
  set crawlerSources(value: RagCrawlerSources | undefined) {
    this._crawlerSources = value;
  }
  get crawlerSeedUrlFilters(): RagCrawlerSeedUrlFilters | undefined {
    return this._crawlerSeedUrlFilters;
  }
  set crawlerSeedUrlFilters(value: RagCrawlerSeedUrlFilters | undefined) {
    this._crawlerSeedUrlFilters = value;
  }
  get crawlerAuth(): RagCrawlerAuth | undefined {
    return this._crawlerAuth;
  }
  set crawlerAuth(value: RagCrawlerAuth | undefined) {
    this._crawlerAuth = value;
  }
  get crawlerBrowserConfig(): RagCrawlerBrowserConfig | undefined {
    return this._crawlerBrowserConfig;
  }
  set crawlerBrowserConfig(value: RagCrawlerBrowserConfig | undefined) {
    this._crawlerBrowserConfig = value;
  }
  get crawlerConfig(): RagCrawlerConfig | undefined {
    return this._crawlerConfig;
  }
  set crawlerConfig(value: RagCrawlerConfig | undefined) {
    this._crawlerConfig = value;
  }
  get retryConfig(): RagCrawlerRetryConfig | undefined {
    return this._retryConfig;
  }
  set retryConfig(value: RagCrawlerRetryConfig | undefined) {
    this._retryConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawler.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawler.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      crawlerSources: this.crawlerSources
        ? this.crawlerSources.toObject()
        : undefined,
      crawlerSeedUrlFilters: this.crawlerSeedUrlFilters
        ? this.crawlerSeedUrlFilters.toObject()
        : undefined,
      crawlerAuth: this.crawlerAuth ? this.crawlerAuth.toObject() : undefined,
      crawlerBrowserConfig: this.crawlerBrowserConfig
        ? this.crawlerBrowserConfig.toObject()
        : undefined,
      crawlerConfig: this.crawlerConfig
        ? this.crawlerConfig.toObject()
        : undefined,
      retryConfig: this.retryConfig ? this.retryConfig.toObject() : undefined
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
  ): RagCrawler.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      crawlerSources: this.crawlerSources
        ? this.crawlerSources.toProtobufJSON(options)
        : null,
      crawlerSeedUrlFilters: this.crawlerSeedUrlFilters
        ? this.crawlerSeedUrlFilters.toProtobufJSON(options)
        : null,
      crawlerAuth: this.crawlerAuth
        ? this.crawlerAuth.toProtobufJSON(options)
        : null,
      crawlerBrowserConfig: this.crawlerBrowserConfig
        ? this.crawlerBrowserConfig.toProtobufJSON(options)
        : null,
      crawlerConfig: this.crawlerConfig
        ? this.crawlerConfig.toProtobufJSON(options)
        : null,
      retryConfig: this.retryConfig
        ? this.retryConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCrawler {
  /**
   * Standard JavaScript object representation for RagCrawler
   */
  export interface AsObject {
    name: string;
    displayName: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    modifiedAt?: googleProtobuf002.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    crawlerSources?: RagCrawlerSources.AsObject;
    crawlerSeedUrlFilters?: RagCrawlerSeedUrlFilters.AsObject;
    crawlerAuth?: RagCrawlerAuth.AsObject;
    crawlerBrowserConfig?: RagCrawlerBrowserConfig.AsObject;
    crawlerConfig?: RagCrawlerConfig.AsObject;
    retryConfig?: RagCrawlerRetryConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCrawler
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    crawlerSources: RagCrawlerSources.AsProtobufJSON | null;
    crawlerSeedUrlFilters: RagCrawlerSeedUrlFilters.AsProtobufJSON | null;
    crawlerAuth: RagCrawlerAuth.AsProtobufJSON | null;
    crawlerBrowserConfig: RagCrawlerBrowserConfig.AsProtobufJSON | null;
    crawlerConfig: RagCrawlerConfig.AsProtobufJSON | null;
    retryConfig: RagCrawlerRetryConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerSources
 */
export class RagCrawlerSources implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerSources';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerSources();
    RagCrawlerSources.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerSources) {
    _instance.urls = _instance.urls || [];
    _instance.sitemaps = _instance.sitemaps || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerSources,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.urls = _instance.urls || []).push(_reader.readString());
          break;
        case 2:
          (_instance.sitemaps = _instance.sitemaps || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerSources.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerSources,
    _writer: BinaryWriter
  ) {
    if (_instance.urls && _instance.urls.length) {
      _writer.writeRepeatedString(1, _instance.urls);
    }
    if (_instance.sitemaps && _instance.sitemaps.length) {
      _writer.writeRepeatedString(2, _instance.sitemaps);
    }
  }

  private _urls: string[];
  private _sitemaps: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerSources to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerSources.AsObject>) {
    _value = _value || {};
    this.urls = (_value.urls || []).slice();
    this.sitemaps = (_value.sitemaps || []).slice();
    RagCrawlerSources.refineValues(this);
  }
  get urls(): string[] {
    return this._urls;
  }
  set urls(value: string[]) {
    this._urls = value;
  }
  get sitemaps(): string[] {
    return this._sitemaps;
  }
  set sitemaps(value: string[]) {
    this._sitemaps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerSources.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerSources.AsObject {
    return {
      urls: (this.urls || []).slice(),
      sitemaps: (this.sitemaps || []).slice()
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
  ): RagCrawlerSources.AsProtobufJSON {
    return {
      urls: (this.urls || []).slice(),
      sitemaps: (this.sitemaps || []).slice()
    };
  }
}
export module RagCrawlerSources {
  /**
   * Standard JavaScript object representation for RagCrawlerSources
   */
  export interface AsObject {
    urls: string[];
    sitemaps: string[];
  }

  /**
   * Protobuf JSON representation for RagCrawlerSources
   */
  export interface AsProtobufJSON {
    urls: string[];
    sitemaps: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerFilters
 */
export class RagCrawlerFilters implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerFilters';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerFilters();
    RagCrawlerFilters.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerFilters) {
    _instance.allowedDomains = _instance.allowedDomains || [];
    _instance.disallowedDomains = _instance.disallowedDomains || [];
    _instance.allowInternalLinks = _instance.allowInternalLinks || false;
    _instance.allowExternalLinks = _instance.allowExternalLinks || false;
    _instance.allowSocialMediaLinks = _instance.allowSocialMediaLinks || false;
    _instance.allowedRegex = _instance.allowedRegex || [];
    _instance.disallowedRegex = _instance.disallowedRegex || [];
    _instance.allowedPaths = _instance.allowedPaths || [];
    _instance.disallowedPaths = _instance.disallowedPaths || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerFilters,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.allowedDomains = _instance.allowedDomains || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.disallowedDomains =
            _instance.disallowedDomains || []).push(_reader.readString());
          break;
        case 3:
          _instance.allowInternalLinks = _reader.readBool();
          break;
        case 4:
          _instance.allowExternalLinks = _reader.readBool();
          break;
        case 5:
          _instance.allowSocialMediaLinks = _reader.readBool();
          break;
        case 6:
          (_instance.allowedRegex = _instance.allowedRegex || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.disallowedRegex = _instance.disallowedRegex || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.allowedPaths = _instance.allowedPaths || []).push(
            _reader.readString()
          );
          break;
        case 9:
          (_instance.disallowedPaths = _instance.disallowedPaths || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerFilters.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerFilters,
    _writer: BinaryWriter
  ) {
    if (_instance.allowedDomains && _instance.allowedDomains.length) {
      _writer.writeRepeatedString(1, _instance.allowedDomains);
    }
    if (_instance.disallowedDomains && _instance.disallowedDomains.length) {
      _writer.writeRepeatedString(2, _instance.disallowedDomains);
    }
    if (_instance.allowInternalLinks) {
      _writer.writeBool(3, _instance.allowInternalLinks);
    }
    if (_instance.allowExternalLinks) {
      _writer.writeBool(4, _instance.allowExternalLinks);
    }
    if (_instance.allowSocialMediaLinks) {
      _writer.writeBool(5, _instance.allowSocialMediaLinks);
    }
    if (_instance.allowedRegex && _instance.allowedRegex.length) {
      _writer.writeRepeatedString(6, _instance.allowedRegex);
    }
    if (_instance.disallowedRegex && _instance.disallowedRegex.length) {
      _writer.writeRepeatedString(7, _instance.disallowedRegex);
    }
    if (_instance.allowedPaths && _instance.allowedPaths.length) {
      _writer.writeRepeatedString(8, _instance.allowedPaths);
    }
    if (_instance.disallowedPaths && _instance.disallowedPaths.length) {
      _writer.writeRepeatedString(9, _instance.disallowedPaths);
    }
  }

  private _allowedDomains: string[];
  private _disallowedDomains: string[];
  private _allowInternalLinks: boolean;
  private _allowExternalLinks: boolean;
  private _allowSocialMediaLinks: boolean;
  private _allowedRegex: string[];
  private _disallowedRegex: string[];
  private _allowedPaths: string[];
  private _disallowedPaths: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerFilters to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerFilters.AsObject>) {
    _value = _value || {};
    this.allowedDomains = (_value.allowedDomains || []).slice();
    this.disallowedDomains = (_value.disallowedDomains || []).slice();
    this.allowInternalLinks = _value.allowInternalLinks;
    this.allowExternalLinks = _value.allowExternalLinks;
    this.allowSocialMediaLinks = _value.allowSocialMediaLinks;
    this.allowedRegex = (_value.allowedRegex || []).slice();
    this.disallowedRegex = (_value.disallowedRegex || []).slice();
    this.allowedPaths = (_value.allowedPaths || []).slice();
    this.disallowedPaths = (_value.disallowedPaths || []).slice();
    RagCrawlerFilters.refineValues(this);
  }
  get allowedDomains(): string[] {
    return this._allowedDomains;
  }
  set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  get disallowedDomains(): string[] {
    return this._disallowedDomains;
  }
  set disallowedDomains(value: string[]) {
    this._disallowedDomains = value;
  }
  get allowInternalLinks(): boolean {
    return this._allowInternalLinks;
  }
  set allowInternalLinks(value: boolean) {
    this._allowInternalLinks = value;
  }
  get allowExternalLinks(): boolean {
    return this._allowExternalLinks;
  }
  set allowExternalLinks(value: boolean) {
    this._allowExternalLinks = value;
  }
  get allowSocialMediaLinks(): boolean {
    return this._allowSocialMediaLinks;
  }
  set allowSocialMediaLinks(value: boolean) {
    this._allowSocialMediaLinks = value;
  }
  get allowedRegex(): string[] {
    return this._allowedRegex;
  }
  set allowedRegex(value: string[]) {
    this._allowedRegex = value;
  }
  get disallowedRegex(): string[] {
    return this._disallowedRegex;
  }
  set disallowedRegex(value: string[]) {
    this._disallowedRegex = value;
  }
  get allowedPaths(): string[] {
    return this._allowedPaths;
  }
  set allowedPaths(value: string[]) {
    this._allowedPaths = value;
  }
  get disallowedPaths(): string[] {
    return this._disallowedPaths;
  }
  set disallowedPaths(value: string[]) {
    this._disallowedPaths = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerFilters.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerFilters.AsObject {
    return {
      allowedDomains: (this.allowedDomains || []).slice(),
      disallowedDomains: (this.disallowedDomains || []).slice(),
      allowInternalLinks: this.allowInternalLinks,
      allowExternalLinks: this.allowExternalLinks,
      allowSocialMediaLinks: this.allowSocialMediaLinks,
      allowedRegex: (this.allowedRegex || []).slice(),
      disallowedRegex: (this.disallowedRegex || []).slice(),
      allowedPaths: (this.allowedPaths || []).slice(),
      disallowedPaths: (this.disallowedPaths || []).slice()
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
  ): RagCrawlerFilters.AsProtobufJSON {
    return {
      allowedDomains: (this.allowedDomains || []).slice(),
      disallowedDomains: (this.disallowedDomains || []).slice(),
      allowInternalLinks: this.allowInternalLinks,
      allowExternalLinks: this.allowExternalLinks,
      allowSocialMediaLinks: this.allowSocialMediaLinks,
      allowedRegex: (this.allowedRegex || []).slice(),
      disallowedRegex: (this.disallowedRegex || []).slice(),
      allowedPaths: (this.allowedPaths || []).slice(),
      disallowedPaths: (this.disallowedPaths || []).slice()
    };
  }
}
export module RagCrawlerFilters {
  /**
   * Standard JavaScript object representation for RagCrawlerFilters
   */
  export interface AsObject {
    allowedDomains: string[];
    disallowedDomains: string[];
    allowInternalLinks: boolean;
    allowExternalLinks: boolean;
    allowSocialMediaLinks: boolean;
    allowedRegex: string[];
    disallowedRegex: string[];
    allowedPaths: string[];
    disallowedPaths: string[];
  }

  /**
   * Protobuf JSON representation for RagCrawlerFilters
   */
  export interface AsProtobufJSON {
    allowedDomains: string[];
    disallowedDomains: string[];
    allowInternalLinks: boolean;
    allowExternalLinks: boolean;
    allowSocialMediaLinks: boolean;
    allowedRegex: string[];
    disallowedRegex: string[];
    allowedPaths: string[];
    disallowedPaths: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerSeedUrlFilters
 */
export class RagCrawlerSeedUrlFilters implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerSeedUrlFilters';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerSeedUrlFilters();
    RagCrawlerSeedUrlFilters.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerSeedUrlFilters) {
    _instance.allowedRegex = _instance.allowedRegex || [];
    _instance.disallowedRegex = _instance.disallowedRegex || [];
    _instance.allowedDomains = _instance.allowedDomains || [];
    _instance.disallowedDomains = _instance.disallowedDomains || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerSeedUrlFilters,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.allowedRegex = _instance.allowedRegex || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.disallowedRegex = _instance.disallowedRegex || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.allowedDomains = _instance.allowedDomains || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.disallowedDomains =
            _instance.disallowedDomains || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerSeedUrlFilters.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerSeedUrlFilters,
    _writer: BinaryWriter
  ) {
    if (_instance.allowedRegex && _instance.allowedRegex.length) {
      _writer.writeRepeatedString(1, _instance.allowedRegex);
    }
    if (_instance.disallowedRegex && _instance.disallowedRegex.length) {
      _writer.writeRepeatedString(2, _instance.disallowedRegex);
    }
    if (_instance.allowedDomains && _instance.allowedDomains.length) {
      _writer.writeRepeatedString(3, _instance.allowedDomains);
    }
    if (_instance.disallowedDomains && _instance.disallowedDomains.length) {
      _writer.writeRepeatedString(4, _instance.disallowedDomains);
    }
  }

  private _allowedRegex: string[];
  private _disallowedRegex: string[];
  private _allowedDomains: string[];
  private _disallowedDomains: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerSeedUrlFilters to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerSeedUrlFilters.AsObject>) {
    _value = _value || {};
    this.allowedRegex = (_value.allowedRegex || []).slice();
    this.disallowedRegex = (_value.disallowedRegex || []).slice();
    this.allowedDomains = (_value.allowedDomains || []).slice();
    this.disallowedDomains = (_value.disallowedDomains || []).slice();
    RagCrawlerSeedUrlFilters.refineValues(this);
  }
  get allowedRegex(): string[] {
    return this._allowedRegex;
  }
  set allowedRegex(value: string[]) {
    this._allowedRegex = value;
  }
  get disallowedRegex(): string[] {
    return this._disallowedRegex;
  }
  set disallowedRegex(value: string[]) {
    this._disallowedRegex = value;
  }
  get allowedDomains(): string[] {
    return this._allowedDomains;
  }
  set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  get disallowedDomains(): string[] {
    return this._disallowedDomains;
  }
  set disallowedDomains(value: string[]) {
    this._disallowedDomains = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerSeedUrlFilters.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerSeedUrlFilters.AsObject {
    return {
      allowedRegex: (this.allowedRegex || []).slice(),
      disallowedRegex: (this.disallowedRegex || []).slice(),
      allowedDomains: (this.allowedDomains || []).slice(),
      disallowedDomains: (this.disallowedDomains || []).slice()
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
  ): RagCrawlerSeedUrlFilters.AsProtobufJSON {
    return {
      allowedRegex: (this.allowedRegex || []).slice(),
      disallowedRegex: (this.disallowedRegex || []).slice(),
      allowedDomains: (this.allowedDomains || []).slice(),
      disallowedDomains: (this.disallowedDomains || []).slice()
    };
  }
}
export module RagCrawlerSeedUrlFilters {
  /**
   * Standard JavaScript object representation for RagCrawlerSeedUrlFilters
   */
  export interface AsObject {
    allowedRegex: string[];
    disallowedRegex: string[];
    allowedDomains: string[];
    disallowedDomains: string[];
  }

  /**
   * Protobuf JSON representation for RagCrawlerSeedUrlFilters
   */
  export interface AsProtobufJSON {
    allowedRegex: string[];
    disallowedRegex: string[];
    allowedDomains: string[];
    disallowedDomains: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerAuth
 */
export class RagCrawlerAuth implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerAuth';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerAuth();
    RagCrawlerAuth.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerAuth) {
    _instance.httpAuth = _instance.httpAuth || undefined;
    _instance.htmlAuth = _instance.htmlAuth || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerAuth,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.httpAuth = new RagCrawlerHttpAuth();
          _reader.readMessage(
            _instance.httpAuth,
            RagCrawlerHttpAuth.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.htmlAuth = new RagCrawlerHtmlAuth();
          _reader.readMessage(
            _instance.htmlAuth,
            RagCrawlerHtmlAuth.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerAuth.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerAuth,
    _writer: BinaryWriter
  ) {
    if (_instance.httpAuth) {
      _writer.writeMessage(
        1,
        _instance.httpAuth as any,
        RagCrawlerHttpAuth.serializeBinaryToWriter
      );
    }
    if (_instance.htmlAuth) {
      _writer.writeMessage(
        2,
        _instance.htmlAuth as any,
        RagCrawlerHtmlAuth.serializeBinaryToWriter
      );
    }
  }

  private _httpAuth?: RagCrawlerHttpAuth;
  private _htmlAuth?: RagCrawlerHtmlAuth;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerAuth to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerAuth.AsObject>) {
    _value = _value || {};
    this.httpAuth = _value.httpAuth
      ? new RagCrawlerHttpAuth(_value.httpAuth)
      : undefined;
    this.htmlAuth = _value.htmlAuth
      ? new RagCrawlerHtmlAuth(_value.htmlAuth)
      : undefined;
    RagCrawlerAuth.refineValues(this);
  }
  get httpAuth(): RagCrawlerHttpAuth | undefined {
    return this._httpAuth;
  }
  set httpAuth(value: RagCrawlerHttpAuth | undefined) {
    this._httpAuth = value;
  }
  get htmlAuth(): RagCrawlerHtmlAuth | undefined {
    return this._htmlAuth;
  }
  set htmlAuth(value: RagCrawlerHtmlAuth | undefined) {
    this._htmlAuth = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerAuth.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerAuth.AsObject {
    return {
      httpAuth: this.httpAuth ? this.httpAuth.toObject() : undefined,
      htmlAuth: this.htmlAuth ? this.htmlAuth.toObject() : undefined
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
  ): RagCrawlerAuth.AsProtobufJSON {
    return {
      httpAuth: this.httpAuth ? this.httpAuth.toProtobufJSON(options) : null,
      htmlAuth: this.htmlAuth ? this.htmlAuth.toProtobufJSON(options) : null
    };
  }
}
export module RagCrawlerAuth {
  /**
   * Standard JavaScript object representation for RagCrawlerAuth
   */
  export interface AsObject {
    httpAuth?: RagCrawlerHttpAuth.AsObject;
    htmlAuth?: RagCrawlerHtmlAuth.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCrawlerAuth
   */
  export interface AsProtobufJSON {
    httpAuth: RagCrawlerHttpAuth.AsProtobufJSON | null;
    htmlAuth: RagCrawlerHtmlAuth.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerHtmlAuth
 */
export class RagCrawlerHtmlAuth implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerHtmlAuth';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerHtmlAuth();
    RagCrawlerHtmlAuth.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerHtmlAuth) {
    _instance.htmlAuthBaseUrl = _instance.htmlAuthBaseUrl || '';
    _instance.htmlAuthUsernameSelectorType =
      _instance.htmlAuthUsernameSelectorType || 0;
    _instance.htmlAuthUsernameSelector =
      _instance.htmlAuthUsernameSelector || '';
    _instance.htmlAuthUsername = _instance.htmlAuthUsername || '';
    _instance.htmlAuthPasswordSelectorType =
      _instance.htmlAuthPasswordSelectorType || 0;
    _instance.htmlAuthPasswordSelector =
      _instance.htmlAuthPasswordSelector || '';
    _instance.htmlAuthPassword = _instance.htmlAuthPassword || '';
    _instance.authenticationExecutionType =
      _instance.authenticationExecutionType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerHtmlAuth,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.htmlAuthBaseUrl = _reader.readString();
          break;
        case 2:
          _instance.htmlAuthUsernameSelectorType = _reader.readEnum();
          break;
        case 3:
          _instance.htmlAuthUsernameSelector = _reader.readString();
          break;
        case 4:
          _instance.htmlAuthUsername = _reader.readString();
          break;
        case 5:
          _instance.htmlAuthPasswordSelectorType = _reader.readEnum();
          break;
        case 6:
          _instance.htmlAuthPasswordSelector = _reader.readString();
          break;
        case 7:
          _instance.htmlAuthPassword = _reader.readString();
          break;
        case 8:
          _instance.authenticationExecutionType = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerHtmlAuth.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerHtmlAuth,
    _writer: BinaryWriter
  ) {
    if (_instance.htmlAuthBaseUrl) {
      _writer.writeString(1, _instance.htmlAuthBaseUrl);
    }
    if (_instance.htmlAuthUsernameSelectorType) {
      _writer.writeEnum(2, _instance.htmlAuthUsernameSelectorType);
    }
    if (_instance.htmlAuthUsernameSelector) {
      _writer.writeString(3, _instance.htmlAuthUsernameSelector);
    }
    if (_instance.htmlAuthUsername) {
      _writer.writeString(4, _instance.htmlAuthUsername);
    }
    if (_instance.htmlAuthPasswordSelectorType) {
      _writer.writeEnum(5, _instance.htmlAuthPasswordSelectorType);
    }
    if (_instance.htmlAuthPasswordSelector) {
      _writer.writeString(6, _instance.htmlAuthPasswordSelector);
    }
    if (_instance.htmlAuthPassword) {
      _writer.writeString(7, _instance.htmlAuthPassword);
    }
    if (_instance.authenticationExecutionType) {
      _writer.writeEnum(8, _instance.authenticationExecutionType);
    }
  }

  private _htmlAuthBaseUrl: string;
  private _htmlAuthUsernameSelectorType: RagCrawlerSelectorType;
  private _htmlAuthUsernameSelector: string;
  private _htmlAuthUsername: string;
  private _htmlAuthPasswordSelectorType: RagCrawlerSelectorType;
  private _htmlAuthPasswordSelector: string;
  private _htmlAuthPassword: string;
  private _authenticationExecutionType: RagCrawlerAuthenticationExecutionType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerHtmlAuth to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerHtmlAuth.AsObject>) {
    _value = _value || {};
    this.htmlAuthBaseUrl = _value.htmlAuthBaseUrl;
    this.htmlAuthUsernameSelectorType = _value.htmlAuthUsernameSelectorType;
    this.htmlAuthUsernameSelector = _value.htmlAuthUsernameSelector;
    this.htmlAuthUsername = _value.htmlAuthUsername;
    this.htmlAuthPasswordSelectorType = _value.htmlAuthPasswordSelectorType;
    this.htmlAuthPasswordSelector = _value.htmlAuthPasswordSelector;
    this.htmlAuthPassword = _value.htmlAuthPassword;
    this.authenticationExecutionType = _value.authenticationExecutionType;
    RagCrawlerHtmlAuth.refineValues(this);
  }
  get htmlAuthBaseUrl(): string {
    return this._htmlAuthBaseUrl;
  }
  set htmlAuthBaseUrl(value: string) {
    this._htmlAuthBaseUrl = value;
  }
  get htmlAuthUsernameSelectorType(): RagCrawlerSelectorType {
    return this._htmlAuthUsernameSelectorType;
  }
  set htmlAuthUsernameSelectorType(value: RagCrawlerSelectorType) {
    this._htmlAuthUsernameSelectorType = value;
  }
  get htmlAuthUsernameSelector(): string {
    return this._htmlAuthUsernameSelector;
  }
  set htmlAuthUsernameSelector(value: string) {
    this._htmlAuthUsernameSelector = value;
  }
  get htmlAuthUsername(): string {
    return this._htmlAuthUsername;
  }
  set htmlAuthUsername(value: string) {
    this._htmlAuthUsername = value;
  }
  get htmlAuthPasswordSelectorType(): RagCrawlerSelectorType {
    return this._htmlAuthPasswordSelectorType;
  }
  set htmlAuthPasswordSelectorType(value: RagCrawlerSelectorType) {
    this._htmlAuthPasswordSelectorType = value;
  }
  get htmlAuthPasswordSelector(): string {
    return this._htmlAuthPasswordSelector;
  }
  set htmlAuthPasswordSelector(value: string) {
    this._htmlAuthPasswordSelector = value;
  }
  get htmlAuthPassword(): string {
    return this._htmlAuthPassword;
  }
  set htmlAuthPassword(value: string) {
    this._htmlAuthPassword = value;
  }
  get authenticationExecutionType(): RagCrawlerAuthenticationExecutionType {
    return this._authenticationExecutionType;
  }
  set authenticationExecutionType(
    value: RagCrawlerAuthenticationExecutionType
  ) {
    this._authenticationExecutionType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerHtmlAuth.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerHtmlAuth.AsObject {
    return {
      htmlAuthBaseUrl: this.htmlAuthBaseUrl,
      htmlAuthUsernameSelectorType: this.htmlAuthUsernameSelectorType,
      htmlAuthUsernameSelector: this.htmlAuthUsernameSelector,
      htmlAuthUsername: this.htmlAuthUsername,
      htmlAuthPasswordSelectorType: this.htmlAuthPasswordSelectorType,
      htmlAuthPasswordSelector: this.htmlAuthPasswordSelector,
      htmlAuthPassword: this.htmlAuthPassword,
      authenticationExecutionType: this.authenticationExecutionType
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
  ): RagCrawlerHtmlAuth.AsProtobufJSON {
    return {
      htmlAuthBaseUrl: this.htmlAuthBaseUrl,
      htmlAuthUsernameSelectorType:
        RagCrawlerSelectorType[
          this.htmlAuthUsernameSelectorType === null ||
          this.htmlAuthUsernameSelectorType === undefined
            ? 0
            : this.htmlAuthUsernameSelectorType
        ],
      htmlAuthUsernameSelector: this.htmlAuthUsernameSelector,
      htmlAuthUsername: this.htmlAuthUsername,
      htmlAuthPasswordSelectorType:
        RagCrawlerSelectorType[
          this.htmlAuthPasswordSelectorType === null ||
          this.htmlAuthPasswordSelectorType === undefined
            ? 0
            : this.htmlAuthPasswordSelectorType
        ],
      htmlAuthPasswordSelector: this.htmlAuthPasswordSelector,
      htmlAuthPassword: this.htmlAuthPassword,
      authenticationExecutionType:
        RagCrawlerAuthenticationExecutionType[
          this.authenticationExecutionType === null ||
          this.authenticationExecutionType === undefined
            ? 0
            : this.authenticationExecutionType
        ]
    };
  }
}
export module RagCrawlerHtmlAuth {
  /**
   * Standard JavaScript object representation for RagCrawlerHtmlAuth
   */
  export interface AsObject {
    htmlAuthBaseUrl: string;
    htmlAuthUsernameSelectorType: RagCrawlerSelectorType;
    htmlAuthUsernameSelector: string;
    htmlAuthUsername: string;
    htmlAuthPasswordSelectorType: RagCrawlerSelectorType;
    htmlAuthPasswordSelector: string;
    htmlAuthPassword: string;
    authenticationExecutionType: RagCrawlerAuthenticationExecutionType;
  }

  /**
   * Protobuf JSON representation for RagCrawlerHtmlAuth
   */
  export interface AsProtobufJSON {
    htmlAuthBaseUrl: string;
    htmlAuthUsernameSelectorType: string;
    htmlAuthUsernameSelector: string;
    htmlAuthUsername: string;
    htmlAuthPasswordSelectorType: string;
    htmlAuthPasswordSelector: string;
    htmlAuthPassword: string;
    authenticationExecutionType: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerHttpAuth
 */
export class RagCrawlerHttpAuth implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerHttpAuth';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerHttpAuth();
    RagCrawlerHttpAuth.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerHttpAuth) {
    _instance.httpAuthUsername = _instance.httpAuthUsername || '';
    _instance.httpAuthPassword = _instance.httpAuthPassword || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerHttpAuth,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.httpAuthUsername = _reader.readString();
          break;
        case 2:
          _instance.httpAuthPassword = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerHttpAuth.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerHttpAuth,
    _writer: BinaryWriter
  ) {
    if (_instance.httpAuthUsername) {
      _writer.writeString(1, _instance.httpAuthUsername);
    }
    if (_instance.httpAuthPassword) {
      _writer.writeString(2, _instance.httpAuthPassword);
    }
  }

  private _httpAuthUsername: string;
  private _httpAuthPassword: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerHttpAuth to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerHttpAuth.AsObject>) {
    _value = _value || {};
    this.httpAuthUsername = _value.httpAuthUsername;
    this.httpAuthPassword = _value.httpAuthPassword;
    RagCrawlerHttpAuth.refineValues(this);
  }
  get httpAuthUsername(): string {
    return this._httpAuthUsername;
  }
  set httpAuthUsername(value: string) {
    this._httpAuthUsername = value;
  }
  get httpAuthPassword(): string {
    return this._httpAuthPassword;
  }
  set httpAuthPassword(value: string) {
    this._httpAuthPassword = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerHttpAuth.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerHttpAuth.AsObject {
    return {
      httpAuthUsername: this.httpAuthUsername,
      httpAuthPassword: this.httpAuthPassword
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
  ): RagCrawlerHttpAuth.AsProtobufJSON {
    return {
      httpAuthUsername: this.httpAuthUsername,
      httpAuthPassword: this.httpAuthPassword
    };
  }
}
export module RagCrawlerHttpAuth {
  /**
   * Standard JavaScript object representation for RagCrawlerHttpAuth
   */
  export interface AsObject {
    httpAuthUsername: string;
    httpAuthPassword: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerHttpAuth
   */
  export interface AsProtobufJSON {
    httpAuthUsername: string;
    httpAuthPassword: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerBrowserConfig
 */
export class RagCrawlerBrowserConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerBrowserConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerBrowserConfig();
    RagCrawlerBrowserConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerBrowserConfig) {
    _instance.crawlerHeaders = _instance.crawlerHeaders || [];
    _instance.crawlerCookies = _instance.crawlerCookies || [];
    _instance.crawlerUserAgent = _instance.crawlerUserAgent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerBrowserConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new googleProtobuf001.Struct();
          _reader.readMessage(
            messageInitializer1,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          (_instance.crawlerHeaders = _instance.crawlerHeaders || []).push(
            messageInitializer1
          );
          break;
        case 2:
          const messageInitializer2 = new RagCrawlerCookie();
          _reader.readMessage(
            messageInitializer2,
            RagCrawlerCookie.deserializeBinaryFromReader
          );
          (_instance.crawlerCookies = _instance.crawlerCookies || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.crawlerUserAgent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerBrowserConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerBrowserConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.crawlerHeaders && _instance.crawlerHeaders.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.crawlerHeaders as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerCookies && _instance.crawlerCookies.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.crawlerCookies as any,
        RagCrawlerCookie.serializeBinaryToWriter
      );
    }
    if (_instance.crawlerUserAgent) {
      _writer.writeString(3, _instance.crawlerUserAgent);
    }
  }

  private _crawlerHeaders?: googleProtobuf001.Struct[];
  private _crawlerCookies?: RagCrawlerCookie[];
  private _crawlerUserAgent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerBrowserConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerBrowserConfig.AsObject>) {
    _value = _value || {};
    this.crawlerHeaders = (_value.crawlerHeaders || []).map(
      m => new googleProtobuf001.Struct(m)
    );
    this.crawlerCookies = (_value.crawlerCookies || []).map(
      m => new RagCrawlerCookie(m)
    );
    this.crawlerUserAgent = _value.crawlerUserAgent;
    RagCrawlerBrowserConfig.refineValues(this);
  }
  get crawlerHeaders(): googleProtobuf001.Struct[] | undefined {
    return this._crawlerHeaders;
  }
  set crawlerHeaders(value: googleProtobuf001.Struct[] | undefined) {
    this._crawlerHeaders = value;
  }
  get crawlerCookies(): RagCrawlerCookie[] | undefined {
    return this._crawlerCookies;
  }
  set crawlerCookies(value: RagCrawlerCookie[] | undefined) {
    this._crawlerCookies = value;
  }
  get crawlerUserAgent(): string {
    return this._crawlerUserAgent;
  }
  set crawlerUserAgent(value: string) {
    this._crawlerUserAgent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerBrowserConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerBrowserConfig.AsObject {
    return {
      crawlerHeaders: (this.crawlerHeaders || []).map(m => m.toObject()),
      crawlerCookies: (this.crawlerCookies || []).map(m => m.toObject()),
      crawlerUserAgent: this.crawlerUserAgent
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
  ): RagCrawlerBrowserConfig.AsProtobufJSON {
    return {
      crawlerHeaders: (this.crawlerHeaders || []).map(m =>
        m.toProtobufJSON(options)
      ),
      crawlerCookies: (this.crawlerCookies || []).map(m =>
        m.toProtobufJSON(options)
      ),
      crawlerUserAgent: this.crawlerUserAgent
    };
  }
}
export module RagCrawlerBrowserConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerBrowserConfig
   */
  export interface AsObject {
    crawlerHeaders?: googleProtobuf001.Struct.AsObject[];
    crawlerCookies?: RagCrawlerCookie.AsObject[];
    crawlerUserAgent: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerBrowserConfig
   */
  export interface AsProtobufJSON {
    crawlerHeaders: googleProtobuf001.Struct.AsProtobufJSON[] | null;
    crawlerCookies: RagCrawlerCookie.AsProtobufJSON[] | null;
    crawlerUserAgent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerCookie
 */
export class RagCrawlerCookie implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerCookie';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerCookie();
    RagCrawlerCookie.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerCookie) {
    _instance.cookieName = _instance.cookieName || '';
    _instance.cookieValue = _instance.cookieValue || '';
    _instance.cookieDomain = _instance.cookieDomain || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerCookie,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cookieName = _reader.readString();
          break;
        case 2:
          _instance.cookieValue = _reader.readString();
          break;
        case 3:
          _instance.cookieDomain = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerCookie.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerCookie,
    _writer: BinaryWriter
  ) {
    if (_instance.cookieName) {
      _writer.writeString(1, _instance.cookieName);
    }
    if (_instance.cookieValue) {
      _writer.writeString(2, _instance.cookieValue);
    }
    if (_instance.cookieDomain) {
      _writer.writeString(3, _instance.cookieDomain);
    }
  }

  private _cookieName: string;
  private _cookieValue: string;
  private _cookieDomain: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerCookie to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerCookie.AsObject>) {
    _value = _value || {};
    this.cookieName = _value.cookieName;
    this.cookieValue = _value.cookieValue;
    this.cookieDomain = _value.cookieDomain;
    RagCrawlerCookie.refineValues(this);
  }
  get cookieName(): string {
    return this._cookieName;
  }
  set cookieName(value: string) {
    this._cookieName = value;
  }
  get cookieValue(): string {
    return this._cookieValue;
  }
  set cookieValue(value: string) {
    this._cookieValue = value;
  }
  get cookieDomain(): string {
    return this._cookieDomain;
  }
  set cookieDomain(value: string) {
    this._cookieDomain = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerCookie.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerCookie.AsObject {
    return {
      cookieName: this.cookieName,
      cookieValue: this.cookieValue,
      cookieDomain: this.cookieDomain
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
  ): RagCrawlerCookie.AsProtobufJSON {
    return {
      cookieName: this.cookieName,
      cookieValue: this.cookieValue,
      cookieDomain: this.cookieDomain
    };
  }
}
export module RagCrawlerCookie {
  /**
   * Standard JavaScript object representation for RagCrawlerCookie
   */
  export interface AsObject {
    cookieName: string;
    cookieValue: string;
    cookieDomain: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerCookie
   */
  export interface AsProtobufJSON {
    cookieName: string;
    cookieValue: string;
    cookieDomain: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerConcurrencyConfig
 */
export class RagCrawlerConcurrencyConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerConcurrencyConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerConcurrencyConfig();
    RagCrawlerConcurrencyConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerConcurrencyConfig) {
    _instance.maxConcurrentRequests = _instance.maxConcurrentRequests || 0;
    _instance.slowCrawl = _instance.slowCrawl || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerConcurrencyConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.maxConcurrentRequests = _reader.readInt32();
          break;
        case 2:
          _instance.slowCrawl = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerConcurrencyConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerConcurrencyConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.maxConcurrentRequests) {
      _writer.writeInt32(1, _instance.maxConcurrentRequests);
    }
    if (_instance.slowCrawl) {
      _writer.writeBool(2, _instance.slowCrawl);
    }
  }

  private _maxConcurrentRequests: number;
  private _slowCrawl: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerConcurrencyConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerConcurrencyConfig.AsObject>) {
    _value = _value || {};
    this.maxConcurrentRequests = _value.maxConcurrentRequests;
    this.slowCrawl = _value.slowCrawl;
    RagCrawlerConcurrencyConfig.refineValues(this);
  }
  get maxConcurrentRequests(): number {
    return this._maxConcurrentRequests;
  }
  set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  get slowCrawl(): boolean {
    return this._slowCrawl;
  }
  set slowCrawl(value: boolean) {
    this._slowCrawl = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerConcurrencyConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerConcurrencyConfig.AsObject {
    return {
      maxConcurrentRequests: this.maxConcurrentRequests,
      slowCrawl: this.slowCrawl
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
  ): RagCrawlerConcurrencyConfig.AsProtobufJSON {
    return {
      maxConcurrentRequests: this.maxConcurrentRequests,
      slowCrawl: this.slowCrawl
    };
  }
}
export module RagCrawlerConcurrencyConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerConcurrencyConfig
   */
  export interface AsObject {
    maxConcurrentRequests: number;
    slowCrawl: boolean;
  }

  /**
   * Protobuf JSON representation for RagCrawlerConcurrencyConfig
   */
  export interface AsProtobufJSON {
    maxConcurrentRequests: number;
    slowCrawl: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerConfig
 */
export class RagCrawlerConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerConfig();
    RagCrawlerConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerConfig) {
    _instance.concurrencyConfig = _instance.concurrencyConfig || undefined;
    _instance.deepCrawlerConfig = _instance.deepCrawlerConfig || undefined;
    _instance.outputConfig = _instance.outputConfig || undefined;
    _instance.statusFilter = _instance.statusFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.concurrencyConfig = new RagCrawlerConcurrencyConfig();
          _reader.readMessage(
            _instance.concurrencyConfig,
            RagCrawlerConcurrencyConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.deepCrawlerConfig = new RagCrawlerDeepCrawlerConfig();
          _reader.readMessage(
            _instance.deepCrawlerConfig,
            RagCrawlerDeepCrawlerConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.outputConfig = new RagCrawlerResultsConfig();
          _reader.readMessage(
            _instance.outputConfig,
            RagCrawlerResultsConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.statusFilter = new RagCrawlerStatusFilter();
          _reader.readMessage(
            _instance.statusFilter,
            RagCrawlerStatusFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.concurrencyConfig) {
      _writer.writeMessage(
        1,
        _instance.concurrencyConfig as any,
        RagCrawlerConcurrencyConfig.serializeBinaryToWriter
      );
    }
    if (_instance.deepCrawlerConfig) {
      _writer.writeMessage(
        2,
        _instance.deepCrawlerConfig as any,
        RagCrawlerDeepCrawlerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.outputConfig) {
      _writer.writeMessage(
        3,
        _instance.outputConfig as any,
        RagCrawlerResultsConfig.serializeBinaryToWriter
      );
    }
    if (_instance.statusFilter) {
      _writer.writeMessage(
        4,
        _instance.statusFilter as any,
        RagCrawlerStatusFilter.serializeBinaryToWriter
      );
    }
  }

  private _concurrencyConfig?: RagCrawlerConcurrencyConfig;
  private _deepCrawlerConfig?: RagCrawlerDeepCrawlerConfig;
  private _outputConfig?: RagCrawlerResultsConfig;
  private _statusFilter?: RagCrawlerStatusFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerConfig.AsObject>) {
    _value = _value || {};
    this.concurrencyConfig = _value.concurrencyConfig
      ? new RagCrawlerConcurrencyConfig(_value.concurrencyConfig)
      : undefined;
    this.deepCrawlerConfig = _value.deepCrawlerConfig
      ? new RagCrawlerDeepCrawlerConfig(_value.deepCrawlerConfig)
      : undefined;
    this.outputConfig = _value.outputConfig
      ? new RagCrawlerResultsConfig(_value.outputConfig)
      : undefined;
    this.statusFilter = _value.statusFilter
      ? new RagCrawlerStatusFilter(_value.statusFilter)
      : undefined;
    RagCrawlerConfig.refineValues(this);
  }
  get concurrencyConfig(): RagCrawlerConcurrencyConfig | undefined {
    return this._concurrencyConfig;
  }
  set concurrencyConfig(value: RagCrawlerConcurrencyConfig | undefined) {
    this._concurrencyConfig = value;
  }
  get deepCrawlerConfig(): RagCrawlerDeepCrawlerConfig | undefined {
    return this._deepCrawlerConfig;
  }
  set deepCrawlerConfig(value: RagCrawlerDeepCrawlerConfig | undefined) {
    this._deepCrawlerConfig = value;
  }
  get outputConfig(): RagCrawlerResultsConfig | undefined {
    return this._outputConfig;
  }
  set outputConfig(value: RagCrawlerResultsConfig | undefined) {
    this._outputConfig = value;
  }
  get statusFilter(): RagCrawlerStatusFilter | undefined {
    return this._statusFilter;
  }
  set statusFilter(value: RagCrawlerStatusFilter | undefined) {
    this._statusFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerConfig.AsObject {
    return {
      concurrencyConfig: this.concurrencyConfig
        ? this.concurrencyConfig.toObject()
        : undefined,
      deepCrawlerConfig: this.deepCrawlerConfig
        ? this.deepCrawlerConfig.toObject()
        : undefined,
      outputConfig: this.outputConfig
        ? this.outputConfig.toObject()
        : undefined,
      statusFilter: this.statusFilter ? this.statusFilter.toObject() : undefined
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
  ): RagCrawlerConfig.AsProtobufJSON {
    return {
      concurrencyConfig: this.concurrencyConfig
        ? this.concurrencyConfig.toProtobufJSON(options)
        : null,
      deepCrawlerConfig: this.deepCrawlerConfig
        ? this.deepCrawlerConfig.toProtobufJSON(options)
        : null,
      outputConfig: this.outputConfig
        ? this.outputConfig.toProtobufJSON(options)
        : null,
      statusFilter: this.statusFilter
        ? this.statusFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCrawlerConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerConfig
   */
  export interface AsObject {
    concurrencyConfig?: RagCrawlerConcurrencyConfig.AsObject;
    deepCrawlerConfig?: RagCrawlerDeepCrawlerConfig.AsObject;
    outputConfig?: RagCrawlerResultsConfig.AsObject;
    statusFilter?: RagCrawlerStatusFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCrawlerConfig
   */
  export interface AsProtobufJSON {
    concurrencyConfig: RagCrawlerConcurrencyConfig.AsProtobufJSON | null;
    deepCrawlerConfig: RagCrawlerDeepCrawlerConfig.AsProtobufJSON | null;
    outputConfig: RagCrawlerResultsConfig.AsProtobufJSON | null;
    statusFilter: RagCrawlerStatusFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerDeepCrawlerConfig
 */
export class RagCrawlerDeepCrawlerConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerDeepCrawlerConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerDeepCrawlerConfig();
    RagCrawlerDeepCrawlerConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerDeepCrawlerConfig) {
    _instance.isActive = _instance.isActive || false;
    _instance.crawlStrategy = _instance.crawlStrategy || 0;
    _instance.maxDepth = _instance.maxDepth || 0;
    _instance.maxPages = _instance.maxPages || 0;
    _instance.deepCrawlerFilters = _instance.deepCrawlerFilters || undefined;
    _instance.normalizeUrlCase = _instance.normalizeUrlCase || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerDeepCrawlerConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.crawlStrategy = _reader.readEnum();
          break;
        case 3:
          _instance.maxDepth = _reader.readInt32();
          break;
        case 4:
          _instance.maxPages = _reader.readInt32();
          break;
        case 5:
          _instance.deepCrawlerFilters = new RagCrawlerFilters();
          _reader.readMessage(
            _instance.deepCrawlerFilters,
            RagCrawlerFilters.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.normalizeUrlCase = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerDeepCrawlerConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerDeepCrawlerConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.crawlStrategy) {
      _writer.writeEnum(2, _instance.crawlStrategy);
    }
    if (_instance.maxDepth) {
      _writer.writeInt32(3, _instance.maxDepth);
    }
    if (_instance.maxPages) {
      _writer.writeInt32(4, _instance.maxPages);
    }
    if (_instance.deepCrawlerFilters) {
      _writer.writeMessage(
        5,
        _instance.deepCrawlerFilters as any,
        RagCrawlerFilters.serializeBinaryToWriter
      );
    }
    if (_instance.normalizeUrlCase) {
      _writer.writeBool(6, _instance.normalizeUrlCase);
    }
  }

  private _isActive: boolean;
  private _crawlStrategy: RagCrawlerCrawlStrategy;
  private _maxDepth: number;
  private _maxPages: number;
  private _deepCrawlerFilters?: RagCrawlerFilters;
  private _normalizeUrlCase: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerDeepCrawlerConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerDeepCrawlerConfig.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.crawlStrategy = _value.crawlStrategy;
    this.maxDepth = _value.maxDepth;
    this.maxPages = _value.maxPages;
    this.deepCrawlerFilters = _value.deepCrawlerFilters
      ? new RagCrawlerFilters(_value.deepCrawlerFilters)
      : undefined;
    this.normalizeUrlCase = _value.normalizeUrlCase;
    RagCrawlerDeepCrawlerConfig.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get crawlStrategy(): RagCrawlerCrawlStrategy {
    return this._crawlStrategy;
  }
  set crawlStrategy(value: RagCrawlerCrawlStrategy) {
    this._crawlStrategy = value;
  }
  get maxDepth(): number {
    return this._maxDepth;
  }
  set maxDepth(value: number) {
    this._maxDepth = value;
  }
  get maxPages(): number {
    return this._maxPages;
  }
  set maxPages(value: number) {
    this._maxPages = value;
  }
  get deepCrawlerFilters(): RagCrawlerFilters | undefined {
    return this._deepCrawlerFilters;
  }
  set deepCrawlerFilters(value: RagCrawlerFilters | undefined) {
    this._deepCrawlerFilters = value;
  }
  get normalizeUrlCase(): boolean {
    return this._normalizeUrlCase;
  }
  set normalizeUrlCase(value: boolean) {
    this._normalizeUrlCase = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerDeepCrawlerConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerDeepCrawlerConfig.AsObject {
    return {
      isActive: this.isActive,
      crawlStrategy: this.crawlStrategy,
      maxDepth: this.maxDepth,
      maxPages: this.maxPages,
      deepCrawlerFilters: this.deepCrawlerFilters
        ? this.deepCrawlerFilters.toObject()
        : undefined,
      normalizeUrlCase: this.normalizeUrlCase
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
  ): RagCrawlerDeepCrawlerConfig.AsProtobufJSON {
    return {
      isActive: this.isActive,
      crawlStrategy:
        RagCrawlerCrawlStrategy[
          this.crawlStrategy === null || this.crawlStrategy === undefined
            ? 0
            : this.crawlStrategy
        ],
      maxDepth: this.maxDepth,
      maxPages: this.maxPages,
      deepCrawlerFilters: this.deepCrawlerFilters
        ? this.deepCrawlerFilters.toProtobufJSON(options)
        : null,
      normalizeUrlCase: this.normalizeUrlCase
    };
  }
}
export module RagCrawlerDeepCrawlerConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerDeepCrawlerConfig
   */
  export interface AsObject {
    isActive: boolean;
    crawlStrategy: RagCrawlerCrawlStrategy;
    maxDepth: number;
    maxPages: number;
    deepCrawlerFilters?: RagCrawlerFilters.AsObject;
    normalizeUrlCase: boolean;
  }

  /**
   * Protobuf JSON representation for RagCrawlerDeepCrawlerConfig
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    crawlStrategy: string;
    maxDepth: number;
    maxPages: number;
    deepCrawlerFilters: RagCrawlerFilters.AsProtobufJSON | null;
    normalizeUrlCase: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerResultsConfig
 */
export class RagCrawlerResultsConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerResultsConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerResultsConfig();
    RagCrawlerResultsConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerResultsConfig) {
    _instance.injectFrontmatter = _instance.injectFrontmatter || false;
    _instance.metaDataExtractors = _instance.metaDataExtractors || [];
    _instance.contentScope = _instance.contentScope || undefined;
    _instance.densityPruning = _instance.densityPruning || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerResultsConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.injectFrontmatter = _reader.readBool();
          break;
        case 2:
          const messageInitializer2 = new RagCrawlerMetaDataExtractor();
          _reader.readMessage(
            messageInitializer2,
            RagCrawlerMetaDataExtractor.deserializeBinaryFromReader
          );
          (_instance.metaDataExtractors =
            _instance.metaDataExtractors || []).push(messageInitializer2);
          break;
        case 3:
          _instance.contentScope = new RagCrawlerContentScope();
          _reader.readMessage(
            _instance.contentScope,
            RagCrawlerContentScope.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.densityPruning = new RagCrawlerDensityPruning();
          _reader.readMessage(
            _instance.densityPruning,
            RagCrawlerDensityPruning.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerResultsConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerResultsConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.injectFrontmatter) {
      _writer.writeBool(1, _instance.injectFrontmatter);
    }
    if (_instance.metaDataExtractors && _instance.metaDataExtractors.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.metaDataExtractors as any,
        RagCrawlerMetaDataExtractor.serializeBinaryToWriter
      );
    }
    if (_instance.contentScope) {
      _writer.writeMessage(
        3,
        _instance.contentScope as any,
        RagCrawlerContentScope.serializeBinaryToWriter
      );
    }
    if (_instance.densityPruning) {
      _writer.writeMessage(
        4,
        _instance.densityPruning as any,
        RagCrawlerDensityPruning.serializeBinaryToWriter
      );
    }
  }

  private _injectFrontmatter: boolean;
  private _metaDataExtractors?: RagCrawlerMetaDataExtractor[];
  private _contentScope?: RagCrawlerContentScope;
  private _densityPruning?: RagCrawlerDensityPruning;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerResultsConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerResultsConfig.AsObject>) {
    _value = _value || {};
    this.injectFrontmatter = _value.injectFrontmatter;
    this.metaDataExtractors = (_value.metaDataExtractors || []).map(
      m => new RagCrawlerMetaDataExtractor(m)
    );
    this.contentScope = _value.contentScope
      ? new RagCrawlerContentScope(_value.contentScope)
      : undefined;
    this.densityPruning = _value.densityPruning
      ? new RagCrawlerDensityPruning(_value.densityPruning)
      : undefined;
    RagCrawlerResultsConfig.refineValues(this);
  }
  get injectFrontmatter(): boolean {
    return this._injectFrontmatter;
  }
  set injectFrontmatter(value: boolean) {
    this._injectFrontmatter = value;
  }
  get metaDataExtractors(): RagCrawlerMetaDataExtractor[] | undefined {
    return this._metaDataExtractors;
  }
  set metaDataExtractors(value: RagCrawlerMetaDataExtractor[] | undefined) {
    this._metaDataExtractors = value;
  }
  get contentScope(): RagCrawlerContentScope | undefined {
    return this._contentScope;
  }
  set contentScope(value: RagCrawlerContentScope | undefined) {
    this._contentScope = value;
  }
  get densityPruning(): RagCrawlerDensityPruning | undefined {
    return this._densityPruning;
  }
  set densityPruning(value: RagCrawlerDensityPruning | undefined) {
    this._densityPruning = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerResultsConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerResultsConfig.AsObject {
    return {
      injectFrontmatter: this.injectFrontmatter,
      metaDataExtractors: (this.metaDataExtractors || []).map(m =>
        m.toObject()
      ),
      contentScope: this.contentScope
        ? this.contentScope.toObject()
        : undefined,
      densityPruning: this.densityPruning
        ? this.densityPruning.toObject()
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
  ): RagCrawlerResultsConfig.AsProtobufJSON {
    return {
      injectFrontmatter: this.injectFrontmatter,
      metaDataExtractors: (this.metaDataExtractors || []).map(m =>
        m.toProtobufJSON(options)
      ),
      contentScope: this.contentScope
        ? this.contentScope.toProtobufJSON(options)
        : null,
      densityPruning: this.densityPruning
        ? this.densityPruning.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCrawlerResultsConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerResultsConfig
   */
  export interface AsObject {
    injectFrontmatter: boolean;
    metaDataExtractors?: RagCrawlerMetaDataExtractor.AsObject[];
    contentScope?: RagCrawlerContentScope.AsObject;
    densityPruning?: RagCrawlerDensityPruning.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCrawlerResultsConfig
   */
  export interface AsProtobufJSON {
    injectFrontmatter: boolean;
    metaDataExtractors: RagCrawlerMetaDataExtractor.AsProtobufJSON[] | null;
    contentScope: RagCrawlerContentScope.AsProtobufJSON | null;
    densityPruning: RagCrawlerDensityPruning.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerContentScope
 */
export class RagCrawlerContentScope implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerContentScope';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerContentScope();
    RagCrawlerContentScope.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerContentScope) {
    _instance.includeSelectors = _instance.includeSelectors || [];
    _instance.excludeSelectors = _instance.excludeSelectors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerContentScope,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.includeSelectors = _instance.includeSelectors || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.excludeSelectors = _instance.excludeSelectors || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerContentScope.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerContentScope,
    _writer: BinaryWriter
  ) {
    if (_instance.includeSelectors && _instance.includeSelectors.length) {
      _writer.writeRepeatedString(1, _instance.includeSelectors);
    }
    if (_instance.excludeSelectors && _instance.excludeSelectors.length) {
      _writer.writeRepeatedString(2, _instance.excludeSelectors);
    }
  }

  private _includeSelectors: string[];
  private _excludeSelectors: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerContentScope to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerContentScope.AsObject>) {
    _value = _value || {};
    this.includeSelectors = (_value.includeSelectors || []).slice();
    this.excludeSelectors = (_value.excludeSelectors || []).slice();
    RagCrawlerContentScope.refineValues(this);
  }
  get includeSelectors(): string[] {
    return this._includeSelectors;
  }
  set includeSelectors(value: string[]) {
    this._includeSelectors = value;
  }
  get excludeSelectors(): string[] {
    return this._excludeSelectors;
  }
  set excludeSelectors(value: string[]) {
    this._excludeSelectors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerContentScope.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerContentScope.AsObject {
    return {
      includeSelectors: (this.includeSelectors || []).slice(),
      excludeSelectors: (this.excludeSelectors || []).slice()
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
  ): RagCrawlerContentScope.AsProtobufJSON {
    return {
      includeSelectors: (this.includeSelectors || []).slice(),
      excludeSelectors: (this.excludeSelectors || []).slice()
    };
  }
}
export module RagCrawlerContentScope {
  /**
   * Standard JavaScript object representation for RagCrawlerContentScope
   */
  export interface AsObject {
    includeSelectors: string[];
    excludeSelectors: string[];
  }

  /**
   * Protobuf JSON representation for RagCrawlerContentScope
   */
  export interface AsProtobufJSON {
    includeSelectors: string[];
    excludeSelectors: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerDensityPruning
 */
export class RagCrawlerDensityPruning implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerDensityPruning';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerDensityPruning();
    RagCrawlerDensityPruning.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerDensityPruning) {
    _instance.isActive = _instance.isActive || false;
    _instance.threshold = _instance.threshold || 0;
    _instance.thresholdType = _instance.thresholdType || 0;
    _instance.minWordThreshold = _instance.minWordThreshold || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerDensityPruning,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _instance.threshold = _reader.readFloat();
          break;
        case 3:
          _instance.thresholdType = _reader.readEnum();
          break;
        case 4:
          _instance.minWordThreshold = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerDensityPruning.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerDensityPruning,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.threshold) {
      _writer.writeFloat(2, _instance.threshold);
    }
    if (_instance.thresholdType) {
      _writer.writeEnum(3, _instance.thresholdType);
    }
    if (_instance.minWordThreshold) {
      _writer.writeInt32(4, _instance.minWordThreshold);
    }
  }

  private _isActive: boolean;
  private _threshold: number;
  private _thresholdType: RagCrawlerPruningThresholdType;
  private _minWordThreshold: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerDensityPruning to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerDensityPruning.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.threshold = _value.threshold;
    this.thresholdType = _value.thresholdType;
    this.minWordThreshold = _value.minWordThreshold;
    RagCrawlerDensityPruning.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get threshold(): number {
    return this._threshold;
  }
  set threshold(value: number) {
    this._threshold = value;
  }
  get thresholdType(): RagCrawlerPruningThresholdType {
    return this._thresholdType;
  }
  set thresholdType(value: RagCrawlerPruningThresholdType) {
    this._thresholdType = value;
  }
  get minWordThreshold(): number {
    return this._minWordThreshold;
  }
  set minWordThreshold(value: number) {
    this._minWordThreshold = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerDensityPruning.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerDensityPruning.AsObject {
    return {
      isActive: this.isActive,
      threshold: this.threshold,
      thresholdType: this.thresholdType,
      minWordThreshold: this.minWordThreshold
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
  ): RagCrawlerDensityPruning.AsProtobufJSON {
    return {
      isActive: this.isActive,
      threshold: this.threshold,
      thresholdType:
        RagCrawlerPruningThresholdType[
          this.thresholdType === null || this.thresholdType === undefined
            ? 0
            : this.thresholdType
        ],
      minWordThreshold: this.minWordThreshold
    };
  }
}
export module RagCrawlerDensityPruning {
  /**
   * Standard JavaScript object representation for RagCrawlerDensityPruning
   */
  export interface AsObject {
    isActive: boolean;
    threshold: number;
    thresholdType: RagCrawlerPruningThresholdType;
    minWordThreshold: number;
  }

  /**
   * Protobuf JSON representation for RagCrawlerDensityPruning
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    threshold: number;
    thresholdType: string;
    minWordThreshold: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerMetaDataExtractor
 */
export class RagCrawlerMetaDataExtractor implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerMetaDataExtractor';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerMetaDataExtractor();
    RagCrawlerMetaDataExtractor.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerMetaDataExtractor) {
    _instance.type = _instance.type || 0;
    _instance.value = _instance.value || '';
    _instance.key = _instance.key || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerMetaDataExtractor,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readEnum();
          break;
        case 2:
          _instance.value = _reader.readString();
          break;
        case 3:
          _instance.key = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerMetaDataExtractor.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerMetaDataExtractor,
    _writer: BinaryWriter
  ) {
    if (_instance.type) {
      _writer.writeEnum(1, _instance.type);
    }
    if (_instance.value) {
      _writer.writeString(2, _instance.value);
    }
    if (_instance.key) {
      _writer.writeString(3, _instance.key);
    }
  }

  private _type: RagCrawlerMetaDataExtractorType;
  private _value: string;
  private _key: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerMetaDataExtractor to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerMetaDataExtractor.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.value = _value.value;
    this.key = _value.key;
    RagCrawlerMetaDataExtractor.refineValues(this);
  }
  get type(): RagCrawlerMetaDataExtractorType {
    return this._type;
  }
  set type(value: RagCrawlerMetaDataExtractorType) {
    this._type = value;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerMetaDataExtractor.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerMetaDataExtractor.AsObject {
    return {
      type: this.type,
      value: this.value,
      key: this.key
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
  ): RagCrawlerMetaDataExtractor.AsProtobufJSON {
    return {
      type:
        RagCrawlerMetaDataExtractorType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      value: this.value,
      key: this.key
    };
  }
}
export module RagCrawlerMetaDataExtractor {
  /**
   * Standard JavaScript object representation for RagCrawlerMetaDataExtractor
   */
  export interface AsObject {
    type: RagCrawlerMetaDataExtractorType;
    value: string;
    key: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerMetaDataExtractor
   */
  export interface AsProtobufJSON {
    type: string;
    value: string;
    key: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerRetryConfig
 */
export class RagCrawlerRetryConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerRetryConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerRetryConfig();
    RagCrawlerRetryConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerRetryConfig) {
    _instance.pageLoadTimeoutSeconds = _instance.pageLoadTimeoutSeconds || 0;
    _instance.retryMaxAttempts = _instance.retryMaxAttempts || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerRetryConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageLoadTimeoutSeconds = _reader.readInt32();
          break;
        case 2:
          _instance.retryMaxAttempts = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerRetryConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerRetryConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.pageLoadTimeoutSeconds) {
      _writer.writeInt32(1, _instance.pageLoadTimeoutSeconds);
    }
    if (_instance.retryMaxAttempts) {
      _writer.writeInt32(2, _instance.retryMaxAttempts);
    }
  }

  private _pageLoadTimeoutSeconds: number;
  private _retryMaxAttempts: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerRetryConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerRetryConfig.AsObject>) {
    _value = _value || {};
    this.pageLoadTimeoutSeconds = _value.pageLoadTimeoutSeconds;
    this.retryMaxAttempts = _value.retryMaxAttempts;
    RagCrawlerRetryConfig.refineValues(this);
  }
  get pageLoadTimeoutSeconds(): number {
    return this._pageLoadTimeoutSeconds;
  }
  set pageLoadTimeoutSeconds(value: number) {
    this._pageLoadTimeoutSeconds = value;
  }
  get retryMaxAttempts(): number {
    return this._retryMaxAttempts;
  }
  set retryMaxAttempts(value: number) {
    this._retryMaxAttempts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerRetryConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerRetryConfig.AsObject {
    return {
      pageLoadTimeoutSeconds: this.pageLoadTimeoutSeconds,
      retryMaxAttempts: this.retryMaxAttempts
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
  ): RagCrawlerRetryConfig.AsProtobufJSON {
    return {
      pageLoadTimeoutSeconds: this.pageLoadTimeoutSeconds,
      retryMaxAttempts: this.retryMaxAttempts
    };
  }
}
export module RagCrawlerRetryConfig {
  /**
   * Standard JavaScript object representation for RagCrawlerRetryConfig
   */
  export interface AsObject {
    pageLoadTimeoutSeconds: number;
    retryMaxAttempts: number;
  }

  /**
   * Protobuf JSON representation for RagCrawlerRetryConfig
   */
  export interface AsProtobufJSON {
    pageLoadTimeoutSeconds: number;
    retryMaxAttempts: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerStatusFilter
 */
export class RagCrawlerStatusFilter implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerStatusFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerStatusFilter();
    RagCrawlerStatusFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerStatusFilter) {
    _instance.isActive = _instance.isActive || false;
    _instance.acceptedStatusCodes = _instance.acceptedStatusCodes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerStatusFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isActive = _reader.readBool();
          break;
        case 2:
          _reader.readPackableInt32Into(
            (_instance.acceptedStatusCodes =
              _instance.acceptedStatusCodes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerStatusFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerStatusFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.isActive) {
      _writer.writeBool(1, _instance.isActive);
    }
    if (_instance.acceptedStatusCodes && _instance.acceptedStatusCodes.length) {
      _writer.writePackedInt32(2, _instance.acceptedStatusCodes);
    }
  }

  private _isActive: boolean;
  private _acceptedStatusCodes: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerStatusFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerStatusFilter.AsObject>) {
    _value = _value || {};
    this.isActive = _value.isActive;
    this.acceptedStatusCodes = (_value.acceptedStatusCodes || []).slice();
    RagCrawlerStatusFilter.refineValues(this);
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  get acceptedStatusCodes(): number[] {
    return this._acceptedStatusCodes;
  }
  set acceptedStatusCodes(value: number[]) {
    this._acceptedStatusCodes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerStatusFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerStatusFilter.AsObject {
    return {
      isActive: this.isActive,
      acceptedStatusCodes: (this.acceptedStatusCodes || []).slice()
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
  ): RagCrawlerStatusFilter.AsProtobufJSON {
    return {
      isActive: this.isActive,
      acceptedStatusCodes: (this.acceptedStatusCodes || []).slice()
    };
  }
}
export module RagCrawlerStatusFilter {
  /**
   * Standard JavaScript object representation for RagCrawlerStatusFilter
   */
  export interface AsObject {
    isActive: boolean;
    acceptedStatusCodes: number[];
  }

  /**
   * Protobuf JSON representation for RagCrawlerStatusFilter
   */
  export interface AsProtobufJSON {
    isActive: boolean;
    acceptedStatusCodes: number[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerContentResult
 */
export class RagCrawlerContentResult implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerContentResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerContentResult();
    RagCrawlerContentResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerContentResult) {
    _instance.metadata = _instance.metadata || undefined;
    _instance.markdown = _instance.markdown || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerContentResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.metadata = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metadata,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.markdown = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerContentResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerContentResult,
    _writer: BinaryWriter
  ) {
    if (_instance.metadata) {
      _writer.writeMessage(
        1,
        _instance.metadata as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.markdown) {
      _writer.writeString(2, _instance.markdown);
    }
  }

  private _metadata?: googleProtobuf001.Struct;
  private _markdown: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerContentResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerContentResult.AsObject>) {
    _value = _value || {};
    this.metadata = _value.metadata
      ? new googleProtobuf001.Struct(_value.metadata)
      : undefined;
    this.markdown = _value.markdown;
    RagCrawlerContentResult.refineValues(this);
  }
  get metadata(): googleProtobuf001.Struct | undefined {
    return this._metadata;
  }
  set metadata(value: googleProtobuf001.Struct | undefined) {
    this._metadata = value;
  }
  get markdown(): string {
    return this._markdown;
  }
  set markdown(value: string) {
    this._markdown = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerContentResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerContentResult.AsObject {
    return {
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      markdown: this.markdown
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
  ): RagCrawlerContentResult.AsProtobufJSON {
    return {
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      markdown: this.markdown
    };
  }
}
export module RagCrawlerContentResult {
  /**
   * Standard JavaScript object representation for RagCrawlerContentResult
   */
  export interface AsObject {
    metadata?: googleProtobuf001.Struct.AsObject;
    markdown: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerContentResult
   */
  export interface AsProtobufJSON {
    metadata: googleProtobuf001.Struct.AsProtobufJSON | null;
    markdown: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerExecutionInfo
 */
export class RagCrawlerExecutionInfo implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerExecutionInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerExecutionInfo();
    RagCrawlerExecutionInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerExecutionInfo) {
    _instance.sslCertificate = _instance.sslCertificate || undefined;
    _instance.success = _instance.success || false;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerExecutionInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sslCertificate = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.sslCertificate,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.success = _reader.readBool();
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerExecutionInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerExecutionInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.sslCertificate) {
      _writer.writeMessage(
        1,
        _instance.sslCertificate as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.success) {
      _writer.writeBool(2, _instance.success);
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _sslCertificate?: googleProtobuf001.Struct;
  private _success: boolean;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerExecutionInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerExecutionInfo.AsObject>) {
    _value = _value || {};
    this.sslCertificate = _value.sslCertificate
      ? new googleProtobuf001.Struct(_value.sslCertificate)
      : undefined;
    this.success = _value.success;
    this.errorMessage = _value.errorMessage;
    RagCrawlerExecutionInfo.refineValues(this);
  }
  get sslCertificate(): googleProtobuf001.Struct | undefined {
    return this._sslCertificate;
  }
  set sslCertificate(value: googleProtobuf001.Struct | undefined) {
    this._sslCertificate = value;
  }
  get success(): boolean {
    return this._success;
  }
  set success(value: boolean) {
    this._success = value;
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
    RagCrawlerExecutionInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerExecutionInfo.AsObject {
    return {
      sslCertificate: this.sslCertificate
        ? this.sslCertificate.toObject()
        : undefined,
      success: this.success,
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
  ): RagCrawlerExecutionInfo.AsProtobufJSON {
    return {
      sslCertificate: this.sslCertificate
        ? this.sslCertificate.toProtobufJSON(options)
        : null,
      success: this.success,
      errorMessage: this.errorMessage
    };
  }
}
export module RagCrawlerExecutionInfo {
  /**
   * Standard JavaScript object representation for RagCrawlerExecutionInfo
   */
  export interface AsObject {
    sslCertificate?: googleProtobuf001.Struct.AsObject;
    success: boolean;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for RagCrawlerExecutionInfo
   */
  export interface AsProtobufJSON {
    sslCertificate: googleProtobuf001.Struct.AsProtobufJSON | null;
    success: boolean;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCrawlerResult
 */
export class RagCrawlerResult implements GrpcMessage {
  static id = 'ondewo.nlu.RagCrawlerResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCrawlerResult();
    RagCrawlerResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCrawlerResult) {
    _instance.name = _instance.name || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.operationName = _instance.operationName || '';
    _instance.sourceUrl = _instance.sourceUrl || '';
    _instance.fileResource = _instance.fileResource || undefined;
    _instance.lastCrawledDate = _instance.lastCrawledDate || undefined;
    _instance.contentResult = _instance.contentResult || undefined;
    _instance.pageLastUpdatedDate = _instance.pageLastUpdatedDate || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCrawlerResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.crawlerName = _reader.readString();
          break;
        case 3:
          _instance.operationName = _reader.readString();
          break;
        case 4:
          _instance.sourceUrl = _reader.readString();
          break;
        case 5:
          _instance.fileResource = new ondewoNlu016.FileResource();
          _reader.readMessage(
            _instance.fileResource,
            ondewoNlu016.FileResource.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.lastCrawledDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.lastCrawledDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.contentResult = new RagCrawlerContentResult();
          _reader.readMessage(
            _instance.contentResult,
            RagCrawlerContentResult.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.pageLastUpdatedDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.pageLastUpdatedDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCrawlerResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCrawlerResult,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.crawlerName) {
      _writer.writeString(2, _instance.crawlerName);
    }
    if (_instance.operationName) {
      _writer.writeString(3, _instance.operationName);
    }
    if (_instance.sourceUrl) {
      _writer.writeString(4, _instance.sourceUrl);
    }
    if (_instance.fileResource) {
      _writer.writeMessage(
        5,
        _instance.fileResource as any,
        ondewoNlu016.FileResource.serializeBinaryToWriter
      );
    }
    if (_instance.lastCrawledDate) {
      _writer.writeMessage(
        6,
        _instance.lastCrawledDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.contentResult) {
      _writer.writeMessage(
        7,
        _instance.contentResult as any,
        RagCrawlerContentResult.serializeBinaryToWriter
      );
    }
    if (_instance.pageLastUpdatedDate) {
      _writer.writeMessage(
        8,
        _instance.pageLastUpdatedDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _crawlerName: string;
  private _operationName: string;
  private _sourceUrl: string;
  private _fileResource?: ondewoNlu016.FileResource;
  private _lastCrawledDate?: googleProtobuf002.Timestamp;
  private _contentResult?: RagCrawlerContentResult;
  private _pageLastUpdatedDate?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCrawlerResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCrawlerResult.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.crawlerName = _value.crawlerName;
    this.operationName = _value.operationName;
    this.sourceUrl = _value.sourceUrl;
    this.fileResource = _value.fileResource
      ? new ondewoNlu016.FileResource(_value.fileResource)
      : undefined;
    this.lastCrawledDate = _value.lastCrawledDate
      ? new googleProtobuf002.Timestamp(_value.lastCrawledDate)
      : undefined;
    this.contentResult = _value.contentResult
      ? new RagCrawlerContentResult(_value.contentResult)
      : undefined;
    this.pageLastUpdatedDate = _value.pageLastUpdatedDate
      ? new googleProtobuf002.Timestamp(_value.pageLastUpdatedDate)
      : undefined;
    RagCrawlerResult.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get sourceUrl(): string {
    return this._sourceUrl;
  }
  set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  get fileResource(): ondewoNlu016.FileResource | undefined {
    return this._fileResource;
  }
  set fileResource(value: ondewoNlu016.FileResource | undefined) {
    this._fileResource = value;
  }
  get lastCrawledDate(): googleProtobuf002.Timestamp | undefined {
    return this._lastCrawledDate;
  }
  set lastCrawledDate(value: googleProtobuf002.Timestamp | undefined) {
    this._lastCrawledDate = value;
  }
  get contentResult(): RagCrawlerContentResult | undefined {
    return this._contentResult;
  }
  set contentResult(value: RagCrawlerContentResult | undefined) {
    this._contentResult = value;
  }
  get pageLastUpdatedDate(): googleProtobuf002.Timestamp | undefined {
    return this._pageLastUpdatedDate;
  }
  set pageLastUpdatedDate(value: googleProtobuf002.Timestamp | undefined) {
    this._pageLastUpdatedDate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCrawlerResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCrawlerResult.AsObject {
    return {
      name: this.name,
      crawlerName: this.crawlerName,
      operationName: this.operationName,
      sourceUrl: this.sourceUrl,
      fileResource: this.fileResource
        ? this.fileResource.toObject()
        : undefined,
      lastCrawledDate: this.lastCrawledDate
        ? this.lastCrawledDate.toObject()
        : undefined,
      contentResult: this.contentResult
        ? this.contentResult.toObject()
        : undefined,
      pageLastUpdatedDate: this.pageLastUpdatedDate
        ? this.pageLastUpdatedDate.toObject()
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
  ): RagCrawlerResult.AsProtobufJSON {
    return {
      name: this.name,
      crawlerName: this.crawlerName,
      operationName: this.operationName,
      sourceUrl: this.sourceUrl,
      fileResource: this.fileResource
        ? this.fileResource.toProtobufJSON(options)
        : null,
      lastCrawledDate: this.lastCrawledDate
        ? this.lastCrawledDate.toProtobufJSON(options)
        : null,
      contentResult: this.contentResult
        ? this.contentResult.toProtobufJSON(options)
        : null,
      pageLastUpdatedDate: this.pageLastUpdatedDate
        ? this.pageLastUpdatedDate.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCrawlerResult {
  /**
   * Standard JavaScript object representation for RagCrawlerResult
   */
  export interface AsObject {
    name: string;
    crawlerName: string;
    operationName: string;
    sourceUrl: string;
    fileResource?: ondewoNlu016.FileResource.AsObject;
    lastCrawledDate?: googleProtobuf002.Timestamp.AsObject;
    contentResult?: RagCrawlerContentResult.AsObject;
    pageLastUpdatedDate?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCrawlerResult
   */
  export interface AsProtobufJSON {
    name: string;
    crawlerName: string;
    operationName: string;
    sourceUrl: string;
    fileResource: ondewoNlu016.FileResource.AsProtobufJSON | null;
    lastCrawledDate: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    contentResult: RagCrawlerContentResult.AsProtobufJSON | null;
    pageLastUpdatedDate: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagStartCrawlerRequest
 */
export class RagStartCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagStartCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagStartCrawlerRequest();
    RagStartCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagStartCrawlerRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerName = _instance.crawlerName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagStartCrawlerRequest,
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
          _instance.crawlerName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagStartCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagStartCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerName) {
      _writer.writeString(3, _instance.crawlerName);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagStartCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagStartCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerName = _value.crawlerName;
    RagStartCrawlerRequest.refineValues(this);
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
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagStartCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagStartCrawlerRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName
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
  ): RagStartCrawlerRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName
    };
  }
}
export module RagStartCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagStartCrawlerRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerName: string;
  }

  /**
   * Protobuf JSON representation for RagStartCrawlerRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerRunRequest
 */
export class RagGetCrawlerRunRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerRunRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerRunRequest();
    RagGetCrawlerRunRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerRunRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerRunName = _instance.crawlerRunName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerRunRequest,
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
          _instance.crawlerRunName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetCrawlerRunRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerRunRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerRunName) {
      _writer.writeString(3, _instance.crawlerRunName);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerRunName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerRunRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetCrawlerRunRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerRunName = _value.crawlerRunName;
    RagGetCrawlerRunRequest.refineValues(this);
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
  get crawlerRunName(): string {
    return this._crawlerRunName;
  }
  set crawlerRunName(value: string) {
    this._crawlerRunName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetCrawlerRunRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerRunRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerRunName: this.crawlerRunName
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
  ): RagGetCrawlerRunRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerRunName: this.crawlerRunName
    };
  }
}
export module RagGetCrawlerRunRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerRunRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerRunName: string;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerRunRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerRunName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListCrawlerRunsRequest
 */
export class RagListCrawlerRunsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListCrawlerRunsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListCrawlerRunsRequest();
    RagListCrawlerRunsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListCrawlerRunsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.status = _instance.status || 0;
    _instance.orderby = _instance.orderby || '';
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListCrawlerRunsRequest,
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
          _instance.crawlerName = _reader.readString();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.status = _reader.readEnum();
          break;
        case 6:
          _instance.orderby = _reader.readString();
          break;
        case 7:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    RagListCrawlerRunsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListCrawlerRunsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerName) {
      _writer.writeString(3, _instance.crawlerName);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.status) {
      _writer.writeEnum(5, _instance.status);
    }
    if (_instance.orderby) {
      _writer.writeString(6, _instance.orderby);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(7, _instance.sortingMode);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerName: string;
  private _pageToken: string;
  private _status: ondewoNlu007.OperationMetadata.Status;
  private _orderby: string;
  private _sortingMode: ondewoNlu008.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListCrawlerRunsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListCrawlerRunsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerName = _value.crawlerName;
    this.pageToken = _value.pageToken;
    this.status = _value.status;
    this.orderby = _value.orderby;
    this.sortingMode = _value.sortingMode;
    RagListCrawlerRunsRequest.refineValues(this);
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
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get status(): ondewoNlu007.OperationMetadata.Status {
    return this._status;
  }
  set status(value: ondewoNlu007.OperationMetadata.Status) {
    this._status = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListCrawlerRunsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListCrawlerRunsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      pageToken: this.pageToken,
      status: this.status,
      orderby: this.orderby,
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
  ): RagListCrawlerRunsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      pageToken: this.pageToken,
      status:
        ondewoNlu007.OperationMetadata.Status[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      orderby: this.orderby,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module RagListCrawlerRunsRequest {
  /**
   * Standard JavaScript object representation for RagListCrawlerRunsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerName: string;
    pageToken: string;
    status: ondewoNlu007.OperationMetadata.Status;
    orderby: string;
    sortingMode: ondewoNlu008.SortingMode;
  }

  /**
   * Protobuf JSON representation for RagListCrawlerRunsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerName: string;
    pageToken: string;
    status: string;
    orderby: string;
    sortingMode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListCrawlerRunsResponse
 */
export class RagListCrawlerRunsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagListCrawlerRunsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListCrawlerRunsResponse();
    RagListCrawlerRunsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListCrawlerRunsResponse) {
    _instance.crawlerRuns = _instance.crawlerRuns || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListCrawlerRunsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ondewoNlu015.Operation();
          _reader.readMessage(
            messageInitializer1,
            ondewoNlu015.Operation.deserializeBinaryFromReader
          );
          (_instance.crawlerRuns = _instance.crawlerRuns || []).push(
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

    RagListCrawlerRunsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListCrawlerRunsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.crawlerRuns && _instance.crawlerRuns.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.crawlerRuns as any,
        ondewoNlu015.Operation.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _crawlerRuns?: ondewoNlu015.Operation[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListCrawlerRunsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListCrawlerRunsResponse.AsObject>) {
    _value = _value || {};
    this.crawlerRuns = (_value.crawlerRuns || []).map(
      m => new ondewoNlu015.Operation(m)
    );
    this.nextPageToken = _value.nextPageToken;
    RagListCrawlerRunsResponse.refineValues(this);
  }
  get crawlerRuns(): ondewoNlu015.Operation[] | undefined {
    return this._crawlerRuns;
  }
  set crawlerRuns(value: ondewoNlu015.Operation[] | undefined) {
    this._crawlerRuns = value;
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
    RagListCrawlerRunsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListCrawlerRunsResponse.AsObject {
    return {
      crawlerRuns: (this.crawlerRuns || []).map(m => m.toObject()),
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
  ): RagListCrawlerRunsResponse.AsProtobufJSON {
    return {
      crawlerRuns: (this.crawlerRuns || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagListCrawlerRunsResponse {
  /**
   * Standard JavaScript object representation for RagListCrawlerRunsResponse
   */
  export interface AsObject {
    crawlerRuns?: ondewoNlu015.Operation.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagListCrawlerRunsResponse
   */
  export interface AsProtobufJSON {
    crawlerRuns: ondewoNlu015.Operation.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlerRunsRequest
 */
export class RagDeleteCrawlerRunsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlerRunsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlerRunsRequest();
    RagDeleteCrawlerRunsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlerRunsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerRunNames = _instance.crawlerRunNames || [];
    _instance.crawlerNames = _instance.crawlerNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlerRunsRequest,
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
          (_instance.crawlerRunNames = _instance.crawlerRunNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.crawlerNames = _instance.crawlerNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlerRunsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlerRunsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerRunNames && _instance.crawlerRunNames.length) {
      _writer.writeRepeatedString(3, _instance.crawlerRunNames);
    }
    if (_instance.crawlerNames && _instance.crawlerNames.length) {
      _writer.writeRepeatedString(4, _instance.crawlerNames);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerRunNames: string[];
  private _crawlerNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlerRunsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteCrawlerRunsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerRunNames = (_value.crawlerRunNames || []).slice();
    this.crawlerNames = (_value.crawlerNames || []).slice();
    RagDeleteCrawlerRunsRequest.refineValues(this);
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
  get crawlerRunNames(): string[] {
    return this._crawlerRunNames;
  }
  set crawlerRunNames(value: string[]) {
    this._crawlerRunNames = value;
  }
  get crawlerNames(): string[] {
    return this._crawlerNames;
  }
  set crawlerNames(value: string[]) {
    this._crawlerNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteCrawlerRunsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlerRunsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerRunNames: (this.crawlerRunNames || []).slice(),
      crawlerNames: (this.crawlerNames || []).slice()
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
  ): RagDeleteCrawlerRunsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerRunNames: (this.crawlerRunNames || []).slice(),
      crawlerNames: (this.crawlerNames || []).slice()
    };
  }
}
export module RagDeleteCrawlerRunsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlerRunsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerRunNames: string[];
    crawlerNames: string[];
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlerRunsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerRunNames: string[];
    crawlerNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteCrawlerRunsResponse
 */
export class RagDeleteCrawlerRunsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteCrawlerRunsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteCrawlerRunsResponse();
    RagDeleteCrawlerRunsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteCrawlerRunsResponse) {
    _instance.deletedCount = _instance.deletedCount || 0;
    _instance.deletedRunNames = _instance.deletedRunNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteCrawlerRunsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deletedCount = _reader.readInt32();
          break;
        case 2:
          (_instance.deletedRunNames = _instance.deletedRunNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteCrawlerRunsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteCrawlerRunsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deletedCount) {
      _writer.writeInt32(1, _instance.deletedCount);
    }
    if (_instance.deletedRunNames && _instance.deletedRunNames.length) {
      _writer.writeRepeatedString(2, _instance.deletedRunNames);
    }
  }

  private _deletedCount: number;
  private _deletedRunNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteCrawlerRunsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagDeleteCrawlerRunsResponse.AsObject>
  ) {
    _value = _value || {};
    this.deletedCount = _value.deletedCount;
    this.deletedRunNames = (_value.deletedRunNames || []).slice();
    RagDeleteCrawlerRunsResponse.refineValues(this);
  }
  get deletedCount(): number {
    return this._deletedCount;
  }
  set deletedCount(value: number) {
    this._deletedCount = value;
  }
  get deletedRunNames(): string[] {
    return this._deletedRunNames;
  }
  set deletedRunNames(value: string[]) {
    this._deletedRunNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteCrawlerRunsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteCrawlerRunsResponse.AsObject {
    return {
      deletedCount: this.deletedCount,
      deletedRunNames: (this.deletedRunNames || []).slice()
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
  ): RagDeleteCrawlerRunsResponse.AsProtobufJSON {
    return {
      deletedCount: this.deletedCount,
      deletedRunNames: (this.deletedRunNames || []).slice()
    };
  }
}
export module RagDeleteCrawlerRunsResponse {
  /**
   * Standard JavaScript object representation for RagDeleteCrawlerRunsResponse
   */
  export interface AsObject {
    deletedCount: number;
    deletedRunNames: string[];
  }

  /**
   * Protobuf JSON representation for RagDeleteCrawlerRunsResponse
   */
  export interface AsProtobufJSON {
    deletedCount: number;
    deletedRunNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagStopCrawlerRequest
 */
export class RagStopCrawlerRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagStopCrawlerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagStopCrawlerRequest();
    RagStopCrawlerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagStopCrawlerRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagStopCrawlerRequest,
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
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagStopCrawlerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagStopCrawlerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagStopCrawlerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagStopCrawlerRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.name = _value.name;
    RagStopCrawlerRequest.refineValues(this);
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
    RagStopCrawlerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagStopCrawlerRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
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
  ): RagStopCrawlerRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      name: this.name
    };
  }
}
export module RagStopCrawlerRequest {
  /**
   * Standard JavaScript object representation for RagStopCrawlerRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for RagStopCrawlerRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagStopCrawlerResponse
 */
export class RagStopCrawlerResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagStopCrawlerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagStopCrawlerResponse();
    RagStopCrawlerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagStopCrawlerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagStopCrawlerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagStopCrawlerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagStopCrawlerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagStopCrawlerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagStopCrawlerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    RagStopCrawlerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    RagStopCrawlerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagStopCrawlerResponse.AsObject {
    return {
      name: this.name,
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
  ): RagStopCrawlerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module RagStopCrawlerResponse {
  /**
   * Standard JavaScript object representation for RagStopCrawlerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for RagStopCrawlerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerResultsRequest
 */
export class RagGetCrawlerResultsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerResultsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerResultsRequest();
    RagGetCrawlerResultsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerResultsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.operationName = _instance.operationName || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.urlQuery = _instance.urlQuery || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.orderby = _instance.orderby || '';
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerResultsRequest,
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
          _instance.operationName = _reader.readString();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.urlQuery = _reader.readString();
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.orderby = _reader.readString();
          break;
        case 8:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetCrawlerResultsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerResultsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.operationName) {
      _writer.writeString(3, _instance.operationName);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.urlQuery) {
      _writer.writeString(5, _instance.urlQuery);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.orderby) {
      _writer.writeString(7, _instance.orderby);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(8, _instance.sortingMode);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _operationName: string;
  private _pageToken: string;
  private _urlQuery: string;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _orderby: string;
  private _sortingMode: ondewoNlu008.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerResultsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetCrawlerResultsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.operationName = _value.operationName;
    this.pageToken = _value.pageToken;
    this.urlQuery = _value.urlQuery;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.orderby = _value.orderby;
    this.sortingMode = _value.sortingMode;
    RagGetCrawlerResultsRequest.refineValues(this);
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
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get urlQuery(): string {
    return this._urlQuery;
  }
  set urlQuery(value: string) {
    this._urlQuery = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetCrawlerResultsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerResultsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      pageToken: this.pageToken,
      urlQuery: this.urlQuery,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      orderby: this.orderby,
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
  ): RagGetCrawlerResultsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      pageToken: this.pageToken,
      urlQuery: this.urlQuery,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      orderby: this.orderby,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module RagGetCrawlerResultsRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerResultsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    operationName: string;
    pageToken: string;
    urlQuery: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    orderby: string;
    sortingMode: ondewoNlu008.SortingMode;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerResultsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    operationName: string;
    pageToken: string;
    urlQuery: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    orderby: string;
    sortingMode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerResultsResponse
 */
export class RagGetCrawlerResultsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerResultsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerResultsResponse();
    RagGetCrawlerResultsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerResultsResponse) {
    _instance.crawlerResults = _instance.crawlerResults || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalSize = _instance.totalSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerResultsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagCrawlerResult();
          _reader.readMessage(
            messageInitializer1,
            RagCrawlerResult.deserializeBinaryFromReader
          );
          (_instance.crawlerResults = _instance.crawlerResults || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.totalSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetCrawlerResultsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerResultsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.crawlerResults && _instance.crawlerResults.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.crawlerResults as any,
        RagCrawlerResult.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.totalSize) {
      _writer.writeInt32(3, _instance.totalSize);
    }
  }

  private _crawlerResults?: RagCrawlerResult[];
  private _nextPageToken: string;
  private _totalSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerResultsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetCrawlerResultsResponse.AsObject>
  ) {
    _value = _value || {};
    this.crawlerResults = (_value.crawlerResults || []).map(
      m => new RagCrawlerResult(m)
    );
    this.nextPageToken = _value.nextPageToken;
    this.totalSize = _value.totalSize;
    RagGetCrawlerResultsResponse.refineValues(this);
  }
  get crawlerResults(): RagCrawlerResult[] | undefined {
    return this._crawlerResults;
  }
  set crawlerResults(value: RagCrawlerResult[] | undefined) {
    this._crawlerResults = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalSize(): number {
    return this._totalSize;
  }
  set totalSize(value: number) {
    this._totalSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetCrawlerResultsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerResultsResponse.AsObject {
    return {
      crawlerResults: (this.crawlerResults || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
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
  ): RagGetCrawlerResultsResponse.AsProtobufJSON {
    return {
      crawlerResults: (this.crawlerResults || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
    };
  }
}
export module RagGetCrawlerResultsResponse {
  /**
   * Standard JavaScript object representation for RagGetCrawlerResultsResponse
   */
  export interface AsObject {
    crawlerResults?: RagCrawlerResult.AsObject[];
    nextPageToken: string;
    totalSize: number;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerResultsResponse
   */
  export interface AsProtobufJSON {
    crawlerResults: RagCrawlerResult.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalSize: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerResultRequest
 */
export class RagGetCrawlerResultRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerResultRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerResultRequest();
    RagGetCrawlerResultRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerResultRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.operationName = _instance.operationName || '';
    _instance.url = _instance.url || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerResultRequest,
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
          _instance.operationName = _reader.readString();
          break;
        case 4:
          _instance.url = _reader.readString();
          break;
        case 5:
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

    RagGetCrawlerResultRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerResultRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.operationName) {
      _writer.writeString(3, _instance.operationName);
    }
    if (_instance.url) {
      _writer.writeString(4, _instance.url);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _operationName: string;
  private _url: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerResultRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetCrawlerResultRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.operationName = _value.operationName;
    this.url = _value.url;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagGetCrawlerResultRequest.refineValues(this);
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
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
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
    RagGetCrawlerResultRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerResultRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      url: this.url,
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
  ): RagGetCrawlerResultRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      url: this.url,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagGetCrawlerResultRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerResultRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    operationName: string;
    url: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerResultRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    operationName: string;
    url: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest
 */
export class RagAddCrawlerResultsToDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAddCrawlerResultsToDatasetsRequest();
    RagAddCrawlerResultsToDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAddCrawlerResultsToDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerNames = _instance.crawlerNames || [];
    _instance.crawlerResultNames = _instance.crawlerResultNames || [];
    _instance.datasetIds = _instance.datasetIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAddCrawlerResultsToDatasetsRequest,
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
          (_instance.crawlerNames = _instance.crawlerNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.crawlerResultNames =
            _instance.crawlerResultNames || []).push(_reader.readString());
          break;
        case 5:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAddCrawlerResultsToDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAddCrawlerResultsToDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerNames && _instance.crawlerNames.length) {
      _writer.writeRepeatedString(3, _instance.crawlerNames);
    }
    if (_instance.crawlerResultNames && _instance.crawlerResultNames.length) {
      _writer.writeRepeatedString(4, _instance.crawlerResultNames);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(5, _instance.datasetIds);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerNames: string[];
  private _crawlerResultNames: string[];
  private _datasetIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAddCrawlerResultsToDatasetsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagAddCrawlerResultsToDatasetsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerNames = (_value.crawlerNames || []).slice();
    this.crawlerResultNames = (_value.crawlerResultNames || []).slice();
    this.datasetIds = (_value.datasetIds || []).slice();
    RagAddCrawlerResultsToDatasetsRequest.refineValues(this);
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
  get crawlerNames(): string[] {
    return this._crawlerNames;
  }
  set crawlerNames(value: string[]) {
    this._crawlerNames = value;
  }
  get crawlerResultNames(): string[] {
    return this._crawlerResultNames;
  }
  set crawlerResultNames(value: string[]) {
    this._crawlerResultNames = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAddCrawlerResultsToDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAddCrawlerResultsToDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerNames: (this.crawlerNames || []).slice(),
      crawlerResultNames: (this.crawlerResultNames || []).slice(),
      datasetIds: (this.datasetIds || []).slice()
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
  ): RagAddCrawlerResultsToDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerNames: (this.crawlerNames || []).slice(),
      crawlerResultNames: (this.crawlerResultNames || []).slice(),
      datasetIds: (this.datasetIds || []).slice()
    };
  }
}
export module RagAddCrawlerResultsToDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagAddCrawlerResultsToDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerNames: string[];
    crawlerResultNames: string[];
    datasetIds: string[];
  }

  /**
   * Protobuf JSON representation for RagAddCrawlerResultsToDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerNames: string[];
    crawlerResultNames: string[];
    datasetIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest
 */
export class RagRemoveCrawlerResultsFromDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRemoveCrawlerResultsFromDatasetsRequest();
    RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRemoveCrawlerResultsFromDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.crawlerResultNames = _instance.crawlerResultNames || [];
    _instance.datasetIds = _instance.datasetIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRemoveCrawlerResultsFromDatasetsRequest,
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
          _instance.crawlerName = _reader.readString();
          break;
        case 4:
          (_instance.crawlerResultNames =
            _instance.crawlerResultNames || []).push(_reader.readString());
          break;
        case 5:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRemoveCrawlerResultsFromDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRemoveCrawlerResultsFromDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerName) {
      _writer.writeString(3, _instance.crawlerName);
    }
    if (_instance.crawlerResultNames && _instance.crawlerResultNames.length) {
      _writer.writeRepeatedString(4, _instance.crawlerResultNames);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(5, _instance.datasetIds);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerName: string;
  private _crawlerResultNames: string[];
  private _datasetIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRemoveCrawlerResultsFromDatasetsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      RagRemoveCrawlerResultsFromDatasetsRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerName = _value.crawlerName;
    this.crawlerResultNames = (_value.crawlerResultNames || []).slice();
    this.datasetIds = (_value.datasetIds || []).slice();
    RagRemoveCrawlerResultsFromDatasetsRequest.refineValues(this);
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
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get crawlerResultNames(): string[] {
    return this._crawlerResultNames;
  }
  set crawlerResultNames(value: string[]) {
    this._crawlerResultNames = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRemoveCrawlerResultsFromDatasetsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      crawlerResultNames: (this.crawlerResultNames || []).slice(),
      datasetIds: (this.datasetIds || []).slice()
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
  ): RagRemoveCrawlerResultsFromDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      crawlerResultNames: (this.crawlerResultNames || []).slice(),
      datasetIds: (this.datasetIds || []).slice()
    };
  }
}
export module RagRemoveCrawlerResultsFromDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagRemoveCrawlerResultsFromDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerName: string;
    crawlerResultNames: string[];
    datasetIds: string[];
  }

  /**
   * Protobuf JSON representation for RagRemoveCrawlerResultsFromDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerName: string;
    crawlerResultNames: string[];
    datasetIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest
 */
export class RagGetCrawlerAttachedDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerAttachedDatasetsRequest();
    RagGetCrawlerAttachedDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerAttachedDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.orderby = _instance.orderby || '';
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerAttachedDatasetsRequest,
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
          _instance.crawlerName = _reader.readString();
          break;
        case 4:
          _instance.pageSize = _reader.readInt32();
          break;
        case 5:
          _instance.pageToken = _reader.readString();
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.orderby = _reader.readString();
          break;
        case 8:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetCrawlerAttachedDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerAttachedDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.crawlerName) {
      _writer.writeString(3, _instance.crawlerName);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(4, _instance.pageSize);
    }
    if (_instance.pageToken) {
      _writer.writeString(5, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.orderby) {
      _writer.writeString(7, _instance.orderby);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(8, _instance.sortingMode);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _crawlerName: string;
  private _pageSize: number;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _orderby: string;
  private _sortingMode: ondewoNlu008.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerAttachedDatasetsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetCrawlerAttachedDatasetsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.crawlerName = _value.crawlerName;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.orderby = _value.orderby;
    this.sortingMode = _value.sortingMode;
    RagGetCrawlerAttachedDatasetsRequest.refineValues(this);
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
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
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
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetCrawlerAttachedDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerAttachedDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      orderby: this.orderby,
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
  ): RagGetCrawlerAttachedDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      crawlerName: this.crawlerName,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      orderby: this.orderby,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module RagGetCrawlerAttachedDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerAttachedDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    crawlerName: string;
    pageSize: number;
    pageToken: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    orderby: string;
    sortingMode: ondewoNlu008.SortingMode;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerAttachedDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    crawlerName: string;
    pageSize: number;
    pageToken: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    orderby: string;
    sortingMode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse
 */
export class RagGetCrawlerAttachedDatasetsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerAttachedDatasetsResponse();
    RagGetCrawlerAttachedDatasetsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerAttachedDatasetsResponse) {
    _instance.datasets = _instance.datasets || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerAttachedDatasetsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDataset();
          _reader.readMessage(
            messageInitializer1,
            RagDataset.deserializeBinaryFromReader
          );
          (_instance.datasets = _instance.datasets || []).push(
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

    RagGetCrawlerAttachedDatasetsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerAttachedDatasetsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.datasets && _instance.datasets.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.datasets as any,
        RagDataset.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _datasets?: RagDataset[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerAttachedDatasetsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetCrawlerAttachedDatasetsResponse.AsObject>
  ) {
    _value = _value || {};
    this.datasets = (_value.datasets || []).map(m => new RagDataset(m));
    this.nextPageToken = _value.nextPageToken;
    RagGetCrawlerAttachedDatasetsResponse.refineValues(this);
  }
  get datasets(): RagDataset[] | undefined {
    return this._datasets;
  }
  set datasets(value: RagDataset[] | undefined) {
    this._datasets = value;
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
    RagGetCrawlerAttachedDatasetsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerAttachedDatasetsResponse.AsObject {
    return {
      datasets: (this.datasets || []).map(m => m.toObject()),
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
  ): RagGetCrawlerAttachedDatasetsResponse.AsProtobufJSON {
    return {
      datasets: (this.datasets || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module RagGetCrawlerAttachedDatasetsResponse {
  /**
   * Standard JavaScript object representation for RagGetCrawlerAttachedDatasetsResponse
   */
  export interface AsObject {
    datasets?: RagDataset.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerAttachedDatasetsResponse
   */
  export interface AsProtobufJSON {
    datasets: RagDataset.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerRunLogsRequest
 */
export class RagGetCrawlerRunLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerRunLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerRunLogsRequest();
    RagGetCrawlerRunLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerRunLogsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.operationName = _instance.operationName || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.levelFilters = _instance.levelFilters || [];
    _instance.phaseFilter = _instance.phaseFilter || '';
    _instance.searchQuery = _instance.searchQuery || '';
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.sourceUrlFilter = _instance.sourceUrlFilter || '';
    _instance.orderby = _instance.orderby || '';
    _instance.sortingMode = _instance.sortingMode || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerRunLogsRequest,
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
          _instance.operationName = _reader.readString();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.pageSize = _reader.readInt32();
          break;
        case 6:
          _reader.readPackableEnumInto(
            (_instance.levelFilters = _instance.levelFilters || [])
          );
          break;
        case 7:
          _instance.phaseFilter = _reader.readString();
          break;
        case 8:
          _instance.searchQuery = _reader.readString();
          break;
        case 9:
          _instance.startTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.endTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.sourceUrlFilter = _reader.readString();
          break;
        case 12:
          _instance.orderby = _reader.readString();
          break;
        case 13:
          _instance.sortingMode = _reader.readEnum();
          break;
        case 14:
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

    RagGetCrawlerRunLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerRunLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.operationName) {
      _writer.writeString(3, _instance.operationName);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(5, _instance.pageSize);
    }
    if (_instance.levelFilters && _instance.levelFilters.length) {
      _writer.writePackedEnum(6, _instance.levelFilters);
    }
    if (_instance.phaseFilter) {
      _writer.writeString(7, _instance.phaseFilter);
    }
    if (_instance.searchQuery) {
      _writer.writeString(8, _instance.searchQuery);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        9,
        _instance.startTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        10,
        _instance.endTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.sourceUrlFilter) {
      _writer.writeString(11, _instance.sourceUrlFilter);
    }
    if (_instance.orderby) {
      _writer.writeString(12, _instance.orderby);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(13, _instance.sortingMode);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        14,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _operationName: string;
  private _pageToken: string;
  private _pageSize: number;
  private _levelFilters: ondewoNlu008.LogSeverity[];
  private _phaseFilter: string;
  private _searchQuery: string;
  private _startTime?: googleProtobuf002.Timestamp;
  private _endTime?: googleProtobuf002.Timestamp;
  private _sourceUrlFilter: string;
  private _orderby: string;
  private _sortingMode: ondewoNlu008.SortingMode;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerRunLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetCrawlerRunLogsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.operationName = _value.operationName;
    this.pageToken = _value.pageToken;
    this.pageSize = _value.pageSize;
    this.levelFilters = (_value.levelFilters || []).slice();
    this.phaseFilter = _value.phaseFilter;
    this.searchQuery = _value.searchQuery;
    this.startTime = _value.startTime
      ? new googleProtobuf002.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf002.Timestamp(_value.endTime)
      : undefined;
    this.sourceUrlFilter = _value.sourceUrlFilter;
    this.orderby = _value.orderby;
    this.sortingMode = _value.sortingMode;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    RagGetCrawlerRunLogsRequest.refineValues(this);
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
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get levelFilters(): ondewoNlu008.LogSeverity[] {
    return this._levelFilters;
  }
  set levelFilters(value: ondewoNlu008.LogSeverity[]) {
    this._levelFilters = value;
  }
  get phaseFilter(): string {
    return this._phaseFilter;
  }
  set phaseFilter(value: string) {
    this._phaseFilter = value;
  }
  get searchQuery(): string {
    return this._searchQuery;
  }
  set searchQuery(value: string) {
    this._searchQuery = value;
  }
  get startTime(): googleProtobuf002.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf002.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf002.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf002.Timestamp | undefined) {
    this._endTime = value;
  }
  get sourceUrlFilter(): string {
    return this._sourceUrlFilter;
  }
  set sourceUrlFilter(value: string) {
    this._sourceUrlFilter = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get sortingMode(): ondewoNlu008.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu008.SortingMode) {
    this._sortingMode = value;
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
    RagGetCrawlerRunLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerRunLogsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      pageToken: this.pageToken,
      pageSize: this.pageSize,
      levelFilters: (this.levelFilters || []).slice(),
      phaseFilter: this.phaseFilter,
      searchQuery: this.searchQuery,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      sourceUrlFilter: this.sourceUrlFilter,
      orderby: this.orderby,
      sortingMode: this.sortingMode,
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
  ): RagGetCrawlerRunLogsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      operationName: this.operationName,
      pageToken: this.pageToken,
      pageSize: this.pageSize,
      levelFilters: (this.levelFilters || []).map(
        v => ondewoNlu008.LogSeverity[v]
      ),
      phaseFilter: this.phaseFilter,
      searchQuery: this.searchQuery,
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      sourceUrlFilter: this.sourceUrlFilter,
      orderby: this.orderby,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RagGetCrawlerRunLogsRequest {
  /**
   * Standard JavaScript object representation for RagGetCrawlerRunLogsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    operationName: string;
    pageToken: string;
    pageSize: number;
    levelFilters: ondewoNlu008.LogSeverity[];
    phaseFilter: string;
    searchQuery: string;
    startTime?: googleProtobuf002.Timestamp.AsObject;
    endTime?: googleProtobuf002.Timestamp.AsObject;
    sourceUrlFilter: string;
    orderby: string;
    sortingMode: ondewoNlu008.SortingMode;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerRunLogsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    operationName: string;
    pageToken: string;
    pageSize: number;
    levelFilters: string[];
    phaseFilter: string;
    searchQuery: string;
    startTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    sourceUrlFilter: string;
    orderby: string;
    sortingMode: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetCrawlerRunLogsResponse
 */
export class RagGetCrawlerRunLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetCrawlerRunLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetCrawlerRunLogsResponse();
    RagGetCrawlerRunLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetCrawlerRunLogsResponse) {
    _instance.operationName = _instance.operationName || '';
    _instance.crawlerName = _instance.crawlerName || '';
    _instance.status = _instance.status || 0;
    _instance.entries = _instance.entries || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalLogEntries = _instance.totalLogEntries || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetCrawlerRunLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.operationName = _reader.readString();
          break;
        case 2:
          _instance.crawlerName = _reader.readString();
          break;
        case 3:
          _instance.status = _reader.readEnum();
          break;
        case 4:
          const messageInitializer4 = new ondewoNlu008.LogEntry();
          _reader.readMessage(
            messageInitializer4,
            ondewoNlu008.LogEntry.deserializeBinaryFromReader
          );
          (_instance.entries = _instance.entries || []).push(
            messageInitializer4
          );
          break;
        case 5:
          _instance.nextPageToken = _reader.readString();
          break;
        case 6:
          _instance.totalLogEntries = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetCrawlerRunLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetCrawlerRunLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.operationName) {
      _writer.writeString(1, _instance.operationName);
    }
    if (_instance.crawlerName) {
      _writer.writeString(2, _instance.crawlerName);
    }
    if (_instance.status) {
      _writer.writeEnum(3, _instance.status);
    }
    if (_instance.entries && _instance.entries.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.entries as any,
        ondewoNlu008.LogEntry.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(5, _instance.nextPageToken);
    }
    if (_instance.totalLogEntries) {
      _writer.writeInt32(6, _instance.totalLogEntries);
    }
  }

  private _operationName: string;
  private _crawlerName: string;
  private _status: ondewoNlu007.OperationMetadata.Status;
  private _entries?: ondewoNlu008.LogEntry[];
  private _nextPageToken: string;
  private _totalLogEntries: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetCrawlerRunLogsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetCrawlerRunLogsResponse.AsObject>
  ) {
    _value = _value || {};
    this.operationName = _value.operationName;
    this.crawlerName = _value.crawlerName;
    this.status = _value.status;
    this.entries = (_value.entries || []).map(
      m => new ondewoNlu008.LogEntry(m)
    );
    this.nextPageToken = _value.nextPageToken;
    this.totalLogEntries = _value.totalLogEntries;
    RagGetCrawlerRunLogsResponse.refineValues(this);
  }
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get crawlerName(): string {
    return this._crawlerName;
  }
  set crawlerName(value: string) {
    this._crawlerName = value;
  }
  get status(): ondewoNlu007.OperationMetadata.Status {
    return this._status;
  }
  set status(value: ondewoNlu007.OperationMetadata.Status) {
    this._status = value;
  }
  get entries(): ondewoNlu008.LogEntry[] | undefined {
    return this._entries;
  }
  set entries(value: ondewoNlu008.LogEntry[] | undefined) {
    this._entries = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalLogEntries(): number {
    return this._totalLogEntries;
  }
  set totalLogEntries(value: number) {
    this._totalLogEntries = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetCrawlerRunLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetCrawlerRunLogsResponse.AsObject {
    return {
      operationName: this.operationName,
      crawlerName: this.crawlerName,
      status: this.status,
      entries: (this.entries || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalLogEntries: this.totalLogEntries
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
  ): RagGetCrawlerRunLogsResponse.AsProtobufJSON {
    return {
      operationName: this.operationName,
      crawlerName: this.crawlerName,
      status:
        ondewoNlu007.OperationMetadata.Status[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      entries: (this.entries || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      totalLogEntries: this.totalLogEntries
    };
  }
}
export module RagGetCrawlerRunLogsResponse {
  /**
   * Standard JavaScript object representation for RagGetCrawlerRunLogsResponse
   */
  export interface AsObject {
    operationName: string;
    crawlerName: string;
    status: ondewoNlu007.OperationMetadata.Status;
    entries?: ondewoNlu008.LogEntry.AsObject[];
    nextPageToken: string;
    totalLogEntries: number;
  }

  /**
   * Protobuf JSON representation for RagGetCrawlerRunLogsResponse
   */
  export interface AsProtobufJSON {
    operationName: string;
    crawlerName: string;
    status: string;
    entries: ondewoNlu008.LogEntry.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalLogEntries: number;
  }
}
