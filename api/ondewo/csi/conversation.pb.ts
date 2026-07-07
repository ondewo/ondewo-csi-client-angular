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
import * as googleApi001 from '../../google/api/annotations.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as googleType007 from '../../google/type/latlng.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/session.pb';
import * as ondewoT2s013 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoS2t014 from '../../ondewo/s2t/speech-to-text.pb';
export enum ControlStatus {
  OK = 0,
  EMERGENCY_STOP = 1,
  VAD_START_OF_SPEECH = 2
}
export enum ControlMessageServiceName {
  UNKNOWNNAME = 0,
  ondewo_s2t = 1,
  ondewo_t2s = 2,
  ondewo_nlu = 3,
  ondewo_sip = 4,
  ondewo_vtsi = 5,
  ondewo_csi = 6,
  ondewo_survey = 7
}
export enum ControlMessageServiceMethod {
  UNKNOWNMETHOD = 0,
  update_config = 1,
  undo_config = 2,
  reset_config = 3,
  end_call = 4,
  transfer_call = 5,
  play_wav_files = 6,
  play_text = 7,
  mute = 8,
  un_mute = 9,
  stop_all_control_messages = 10,
  train_agent = 11,
  cancel_train_agent = 12,
  delete_session = 13,
  delete_all_contexts = 14,
  create_context = 15,
  update_context = 16,
  delete_context = 17,
  detect_intent = 18
}
export enum ConditionType {
  UNKNOWTYPE = 0,
  immediate = 1,
  duration = 2,
  datetime = 3,
  interactions = 4
}
/**
 * Message implementation for ondewo.csi.S2sPipeline
 */
export class S2sPipeline implements GrpcMessage {
  static id = 'ondewo.csi.S2sPipeline';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2sPipeline();
    S2sPipeline.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2sPipeline) {
    _instance.id = _instance.id || '';
    _instance.s2tPipelineId = _instance.s2tPipelineId || '';
    _instance.nluProjectId = _instance.nluProjectId || '';
    _instance.nluLanguageCode = _instance.nluLanguageCode || '';
    _instance.t2sPipelineId = _instance.t2sPipelineId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2sPipeline,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.s2tPipelineId = _reader.readString();
          break;
        case 3:
          _instance.nluProjectId = _reader.readString();
          break;
        case 4:
          _instance.nluLanguageCode = _reader.readString();
          break;
        case 5:
          _instance.t2sPipelineId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2sPipeline.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2sPipeline,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.s2tPipelineId) {
      _writer.writeString(2, _instance.s2tPipelineId);
    }
    if (_instance.nluProjectId) {
      _writer.writeString(3, _instance.nluProjectId);
    }
    if (_instance.nluLanguageCode) {
      _writer.writeString(4, _instance.nluLanguageCode);
    }
    if (_instance.t2sPipelineId) {
      _writer.writeString(5, _instance.t2sPipelineId);
    }
  }

  private _id: string;
  private _s2tPipelineId: string;
  private _nluProjectId: string;
  private _nluLanguageCode: string;
  private _t2sPipelineId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2sPipeline to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2sPipeline.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.s2tPipelineId = _value.s2tPipelineId;
    this.nluProjectId = _value.nluProjectId;
    this.nluLanguageCode = _value.nluLanguageCode;
    this.t2sPipelineId = _value.t2sPipelineId;
    S2sPipeline.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get s2tPipelineId(): string {
    return this._s2tPipelineId;
  }
  set s2tPipelineId(value: string) {
    this._s2tPipelineId = value;
  }
  get nluProjectId(): string {
    return this._nluProjectId;
  }
  set nluProjectId(value: string) {
    this._nluProjectId = value;
  }
  get nluLanguageCode(): string {
    return this._nluLanguageCode;
  }
  set nluLanguageCode(value: string) {
    this._nluLanguageCode = value;
  }
  get t2sPipelineId(): string {
    return this._t2sPipelineId;
  }
  set t2sPipelineId(value: string) {
    this._t2sPipelineId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2sPipeline.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2sPipeline.AsObject {
    return {
      id: this.id,
      s2tPipelineId: this.s2tPipelineId,
      nluProjectId: this.nluProjectId,
      nluLanguageCode: this.nluLanguageCode,
      t2sPipelineId: this.t2sPipelineId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2sPipeline.AsProtobufJSON {
    return {
      id: this.id,
      s2tPipelineId: this.s2tPipelineId,
      nluProjectId: this.nluProjectId,
      nluLanguageCode: this.nluLanguageCode,
      t2sPipelineId: this.t2sPipelineId
    };
  }
}
export module S2sPipeline {
  /**
   * Standard JavaScript object representation for S2sPipeline
   */
  export interface AsObject {
    id: string;
    s2tPipelineId: string;
    nluProjectId: string;
    nluLanguageCode: string;
    t2sPipelineId: string;
  }

  /**
   * Protobuf JSON representation for S2sPipeline
   */
  export interface AsProtobufJSON {
    id: string;
    s2tPipelineId: string;
    nluProjectId: string;
    nluLanguageCode: string;
    t2sPipelineId: string;
  }
}

/**
 * Message implementation for ondewo.csi.S2sPipelineId
 */
export class S2sPipelineId implements GrpcMessage {
  static id = 'ondewo.csi.S2sPipelineId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2sPipelineId();
    S2sPipelineId.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2sPipelineId) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2sPipelineId,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2sPipelineId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2sPipelineId,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2sPipelineId to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2sPipelineId.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    S2sPipelineId.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2sPipelineId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2sPipelineId.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2sPipelineId.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module S2sPipelineId {
  /**
   * Standard JavaScript object representation for S2sPipelineId
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for S2sPipelineId
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for ondewo.csi.ListS2sPipelinesRequest
 */
export class ListS2sPipelinesRequest implements GrpcMessage {
  static id = 'ondewo.csi.ListS2sPipelinesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2sPipelinesRequest();
    ListS2sPipelinesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2sPipelinesRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2sPipelinesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ListS2sPipelinesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2sPipelinesRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2sPipelinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2sPipelinesRequest.AsObject>) {
    _value = _value || {};
    ListS2sPipelinesRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2sPipelinesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2sPipelinesRequest.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2sPipelinesRequest.AsProtobufJSON {
    return {};
  }
}
export module ListS2sPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListS2sPipelinesRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ListS2sPipelinesRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for ondewo.csi.ListS2sPipelinesResponse
 */
export class ListS2sPipelinesResponse implements GrpcMessage {
  static id = 'ondewo.csi.ListS2sPipelinesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2sPipelinesResponse();
    ListS2sPipelinesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2sPipelinesResponse) {
    _instance.pipelines = _instance.pipelines || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2sPipelinesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new S2sPipeline();
          _reader.readMessage(
            messageInitializer1,
            S2sPipeline.deserializeBinaryFromReader
          );
          (_instance.pipelines = _instance.pipelines || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2sPipelinesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2sPipelinesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelines && _instance.pipelines.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.pipelines as any,
        S2sPipeline.serializeBinaryToWriter
      );
    }
  }

  private _pipelines?: S2sPipeline[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2sPipelinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2sPipelinesResponse.AsObject>) {
    _value = _value || {};
    this.pipelines = (_value.pipelines || []).map(m => new S2sPipeline(m));
    ListS2sPipelinesResponse.refineValues(this);
  }
  get pipelines(): S2sPipeline[] | undefined {
    return this._pipelines;
  }
  set pipelines(value: S2sPipeline[] | undefined) {
    this._pipelines = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2sPipelinesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2sPipelinesResponse.AsObject {
    return {
      pipelines: (this.pipelines || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2sPipelinesResponse.AsProtobufJSON {
    return {
      pipelines: (this.pipelines || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListS2sPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListS2sPipelinesResponse
   */
  export interface AsObject {
    pipelines?: S2sPipeline.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListS2sPipelinesResponse
   */
  export interface AsProtobufJSON {
    pipelines: S2sPipeline.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.csi.S2sStreamRequest
 */
export class S2sStreamRequest implements GrpcMessage {
  static id = 'ondewo.csi.S2sStreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2sStreamRequest();
    S2sStreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2sStreamRequest) {
    _instance.pipelineId = _instance.pipelineId || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.audio = _instance.audio || new Uint8Array();
    _instance.endOfStream = _instance.endOfStream || false;
    _instance.initialIntentDisplayName =
      _instance.initialIntentDisplayName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2sStreamRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pipelineId = _reader.readString();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.audio = _reader.readBytes();
          break;
        case 4:
          _instance.endOfStream = _reader.readBool();
          break;
        case 5:
          _instance.initialIntentDisplayName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2sStreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2sStreamRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelineId) {
      _writer.writeString(1, _instance.pipelineId);
    }
    if (_instance.sessionId) {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.audio && _instance.audio.length) {
      _writer.writeBytes(3, _instance.audio);
    }
    if (_instance.endOfStream) {
      _writer.writeBool(4, _instance.endOfStream);
    }
    if (_instance.initialIntentDisplayName) {
      _writer.writeString(5, _instance.initialIntentDisplayName);
    }
  }

  private _pipelineId: string;
  private _sessionId: string;
  private _audio: Uint8Array;
  private _endOfStream: boolean;
  private _initialIntentDisplayName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2sStreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2sStreamRequest.AsObject>) {
    _value = _value || {};
    this.pipelineId = _value.pipelineId;
    this.sessionId = _value.sessionId;
    this.audio = _value.audio;
    this.endOfStream = _value.endOfStream;
    this.initialIntentDisplayName = _value.initialIntentDisplayName;
    S2sStreamRequest.refineValues(this);
  }
  get pipelineId(): string {
    return this._pipelineId;
  }
  set pipelineId(value: string) {
    this._pipelineId = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get audio(): Uint8Array {
    return this._audio;
  }
  set audio(value: Uint8Array) {
    this._audio = value;
  }
  get endOfStream(): boolean {
    return this._endOfStream;
  }
  set endOfStream(value: boolean) {
    this._endOfStream = value;
  }
  get initialIntentDisplayName(): string {
    return this._initialIntentDisplayName;
  }
  set initialIntentDisplayName(value: string) {
    this._initialIntentDisplayName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2sStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2sStreamRequest.AsObject {
    return {
      pipelineId: this.pipelineId,
      sessionId: this.sessionId,
      audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
      endOfStream: this.endOfStream,
      initialIntentDisplayName: this.initialIntentDisplayName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2sStreamRequest.AsProtobufJSON {
    return {
      pipelineId: this.pipelineId,
      sessionId: this.sessionId,
      audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
      endOfStream: this.endOfStream,
      initialIntentDisplayName: this.initialIntentDisplayName
    };
  }
}
export module S2sStreamRequest {
  /**
   * Standard JavaScript object representation for S2sStreamRequest
   */
  export interface AsObject {
    pipelineId: string;
    sessionId: string;
    audio: Uint8Array;
    endOfStream: boolean;
    initialIntentDisplayName: string;
  }

  /**
   * Protobuf JSON representation for S2sStreamRequest
   */
  export interface AsProtobufJSON {
    pipelineId: string;
    sessionId: string;
    audio: string;
    endOfStream: boolean;
    initialIntentDisplayName: string;
  }
}

/**
 * Message implementation for ondewo.csi.S2sStreamResponse
 */
export class S2sStreamResponse implements GrpcMessage {
  static id = 'ondewo.csi.S2sStreamResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2sStreamResponse();
    S2sStreamResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2sStreamResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2sStreamResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.detectIntentResponse = new ondewoNlu012.DetectIntentResponse();
          _reader.readMessage(
            _instance.detectIntentResponse,
            ondewoNlu012.DetectIntentResponse.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.synthesizeResponse = new ondewoT2s013.SynthesizeResponse();
          _reader.readMessage(
            _instance.synthesizeResponse,
            ondewoT2s013.SynthesizeResponse.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.sipTrigger = new SipTrigger();
          _reader.readMessage(
            _instance.sipTrigger,
            SipTrigger.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    S2sStreamResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2sStreamResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.detectIntentResponse) {
      _writer.writeMessage(
        1,
        _instance.detectIntentResponse as any,
        ondewoNlu012.DetectIntentResponse.serializeBinaryToWriter
      );
    }
    if (_instance.synthesizeResponse) {
      _writer.writeMessage(
        2,
        _instance.synthesizeResponse as any,
        ondewoT2s013.SynthesizeResponse.serializeBinaryToWriter
      );
    }
    if (_instance.sipTrigger) {
      _writer.writeMessage(
        3,
        _instance.sipTrigger as any,
        SipTrigger.serializeBinaryToWriter
      );
    }
  }

  private _detectIntentResponse?: ondewoNlu012.DetectIntentResponse;
  private _synthesizeResponse?: ondewoT2s013.SynthesizeResponse;
  private _sipTrigger?: SipTrigger;

  private _response: S2sStreamResponse.ResponseCase =
    S2sStreamResponse.ResponseCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2sStreamResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2sStreamResponse.AsObject>) {
    _value = _value || {};
    this.detectIntentResponse = _value.detectIntentResponse
      ? new ondewoNlu012.DetectIntentResponse(_value.detectIntentResponse)
      : undefined;
    this.synthesizeResponse = _value.synthesizeResponse
      ? new ondewoT2s013.SynthesizeResponse(_value.synthesizeResponse)
      : undefined;
    this.sipTrigger = _value.sipTrigger
      ? new SipTrigger(_value.sipTrigger)
      : undefined;
    S2sStreamResponse.refineValues(this);
  }
  get detectIntentResponse(): ondewoNlu012.DetectIntentResponse | undefined {
    return this._detectIntentResponse;
  }
  set detectIntentResponse(
    value: ondewoNlu012.DetectIntentResponse | undefined
  ) {
    if (value !== undefined && value !== null) {
      this._synthesizeResponse = this._sipTrigger = undefined;
      this._response = S2sStreamResponse.ResponseCase.detectIntentResponse;
    }
    this._detectIntentResponse = value;
  }
  get synthesizeResponse(): ondewoT2s013.SynthesizeResponse | undefined {
    return this._synthesizeResponse;
  }
  set synthesizeResponse(value: ondewoT2s013.SynthesizeResponse | undefined) {
    if (value !== undefined && value !== null) {
      this._detectIntentResponse = this._sipTrigger = undefined;
      this._response = S2sStreamResponse.ResponseCase.synthesizeResponse;
    }
    this._synthesizeResponse = value;
  }
  get sipTrigger(): SipTrigger | undefined {
    return this._sipTrigger;
  }
  set sipTrigger(value: SipTrigger | undefined) {
    if (value !== undefined && value !== null) {
      this._detectIntentResponse = this._synthesizeResponse = undefined;
      this._response = S2sStreamResponse.ResponseCase.sipTrigger;
    }
    this._sipTrigger = value;
  }
  get response() {
    return this._response;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2sStreamResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2sStreamResponse.AsObject {
    return {
      detectIntentResponse: this.detectIntentResponse
        ? this.detectIntentResponse.toObject()
        : undefined,
      synthesizeResponse: this.synthesizeResponse
        ? this.synthesizeResponse.toObject()
        : undefined,
      sipTrigger: this.sipTrigger ? this.sipTrigger.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2sStreamResponse.AsProtobufJSON {
    return {
      detectIntentResponse: this.detectIntentResponse
        ? this.detectIntentResponse.toProtobufJSON(options)
        : null,
      synthesizeResponse: this.synthesizeResponse
        ? this.synthesizeResponse.toProtobufJSON(options)
        : null,
      sipTrigger: this.sipTrigger
        ? this.sipTrigger.toProtobufJSON(options)
        : null
    };
  }
}
export module S2sStreamResponse {
  /**
   * Standard JavaScript object representation for S2sStreamResponse
   */
  export interface AsObject {
    detectIntentResponse?: ondewoNlu012.DetectIntentResponse.AsObject;
    synthesizeResponse?: ondewoT2s013.SynthesizeResponse.AsObject;
    sipTrigger?: SipTrigger.AsObject;
  }

  /**
   * Protobuf JSON representation for S2sStreamResponse
   */
  export interface AsProtobufJSON {
    detectIntentResponse: ondewoNlu012.DetectIntentResponse.AsProtobufJSON | null;
    synthesizeResponse: ondewoT2s013.SynthesizeResponse.AsProtobufJSON | null;
    sipTrigger: SipTrigger.AsProtobufJSON | null;
  }
  export enum ResponseCase {
    none = 0,
    detectIntentResponse = 1,
    synthesizeResponse = 2,
    sipTrigger = 3
  }
}

/**
 * Message implementation for ondewo.csi.SipTrigger
 */
export class SipTrigger implements GrpcMessage {
  static id = 'ondewo.csi.SipTrigger';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SipTrigger();
    SipTrigger.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SipTrigger) {
    _instance.type = _instance.type || 0;
    _instance.content = _instance.content || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SipTrigger,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readEnum();
          break;
        case 2:
          _instance.content = new googleProtobuf004.Struct();
          _reader.readMessage(
            _instance.content,
            googleProtobuf004.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SipTrigger.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SipTrigger, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeEnum(1, _instance.type);
    }
    if (_instance.content) {
      _writer.writeMessage(
        2,
        _instance.content as any,
        googleProtobuf004.Struct.serializeBinaryToWriter
      );
    }
  }

  private _type: SipTrigger.SipTriggerType;
  private _content?: googleProtobuf004.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SipTrigger to deeply clone from
   */
  constructor(_value?: RecursivePartial<SipTrigger.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.content = _value.content
      ? new googleProtobuf004.Struct(_value.content)
      : undefined;
    SipTrigger.refineValues(this);
  }
  get type(): SipTrigger.SipTriggerType {
    return this._type;
  }
  set type(value: SipTrigger.SipTriggerType) {
    this._type = value;
  }
  get content(): googleProtobuf004.Struct | undefined {
    return this._content;
  }
  set content(value: googleProtobuf004.Struct | undefined) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SipTrigger.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SipTrigger.AsObject {
    return {
      type: this.type,
      content: this.content ? this.content.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SipTrigger.AsProtobufJSON {
    return {
      type:
        SipTrigger.SipTriggerType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      content: this.content ? this.content.toProtobufJSON(options) : null
    };
  }
}
export module SipTrigger {
  /**
   * Standard JavaScript object representation for SipTrigger
   */
  export interface AsObject {
    type: SipTrigger.SipTriggerType;
    content?: googleProtobuf004.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for SipTrigger
   */
  export interface AsProtobufJSON {
    type: string;
    content: googleProtobuf004.Struct.AsProtobufJSON | null;
  }
  export enum SipTriggerType {
    UNSPECIFIED = 0,
    HANGUP = 1,
    HUMAN_HANDOVER = 2,
    SEND_NOW = 3,
    PAUSE = 4,
    TRANSFER = 5,
    INVITE = 6,
    PLAY_AUDIO = 7
  }
}

/**
 * Message implementation for ondewo.csi.CheckUpstreamHealthResponse
 */
export class CheckUpstreamHealthResponse implements GrpcMessage {
  static id = 'ondewo.csi.CheckUpstreamHealthResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CheckUpstreamHealthResponse();
    CheckUpstreamHealthResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CheckUpstreamHealthResponse) {
    _instance.s2tStatus = _instance.s2tStatus || undefined;
    _instance.nluStatus = _instance.nluStatus || undefined;
    _instance.t2sStatus = _instance.t2sStatus || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CheckUpstreamHealthResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tStatus = new googleRpc006.Status();
          _reader.readMessage(
            _instance.s2tStatus,
            googleRpc006.Status.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.nluStatus = new googleRpc006.Status();
          _reader.readMessage(
            _instance.nluStatus,
            googleRpc006.Status.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.t2sStatus = new googleRpc006.Status();
          _reader.readMessage(
            _instance.t2sStatus,
            googleRpc006.Status.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CheckUpstreamHealthResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CheckUpstreamHealthResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tStatus) {
      _writer.writeMessage(
        1,
        _instance.s2tStatus as any,
        googleRpc006.Status.serializeBinaryToWriter
      );
    }
    if (_instance.nluStatus) {
      _writer.writeMessage(
        2,
        _instance.nluStatus as any,
        googleRpc006.Status.serializeBinaryToWriter
      );
    }
    if (_instance.t2sStatus) {
      _writer.writeMessage(
        3,
        _instance.t2sStatus as any,
        googleRpc006.Status.serializeBinaryToWriter
      );
    }
  }

  private _s2tStatus?: googleRpc006.Status;
  private _nluStatus?: googleRpc006.Status;
  private _t2sStatus?: googleRpc006.Status;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CheckUpstreamHealthResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CheckUpstreamHealthResponse.AsObject>) {
    _value = _value || {};
    this.s2tStatus = _value.s2tStatus
      ? new googleRpc006.Status(_value.s2tStatus)
      : undefined;
    this.nluStatus = _value.nluStatus
      ? new googleRpc006.Status(_value.nluStatus)
      : undefined;
    this.t2sStatus = _value.t2sStatus
      ? new googleRpc006.Status(_value.t2sStatus)
      : undefined;
    CheckUpstreamHealthResponse.refineValues(this);
  }
  get s2tStatus(): googleRpc006.Status | undefined {
    return this._s2tStatus;
  }
  set s2tStatus(value: googleRpc006.Status | undefined) {
    this._s2tStatus = value;
  }
  get nluStatus(): googleRpc006.Status | undefined {
    return this._nluStatus;
  }
  set nluStatus(value: googleRpc006.Status | undefined) {
    this._nluStatus = value;
  }
  get t2sStatus(): googleRpc006.Status | undefined {
    return this._t2sStatus;
  }
  set t2sStatus(value: googleRpc006.Status | undefined) {
    this._t2sStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CheckUpstreamHealthResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CheckUpstreamHealthResponse.AsObject {
    return {
      s2tStatus: this.s2tStatus ? this.s2tStatus.toObject() : undefined,
      nluStatus: this.nluStatus ? this.nluStatus.toObject() : undefined,
      t2sStatus: this.t2sStatus ? this.t2sStatus.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CheckUpstreamHealthResponse.AsProtobufJSON {
    return {
      s2tStatus: this.s2tStatus ? this.s2tStatus.toProtobufJSON(options) : null,
      nluStatus: this.nluStatus ? this.nluStatus.toProtobufJSON(options) : null,
      t2sStatus: this.t2sStatus ? this.t2sStatus.toProtobufJSON(options) : null
    };
  }
}
export module CheckUpstreamHealthResponse {
  /**
   * Standard JavaScript object representation for CheckUpstreamHealthResponse
   */
  export interface AsObject {
    s2tStatus?: googleRpc006.Status.AsObject;
    nluStatus?: googleRpc006.Status.AsObject;
    t2sStatus?: googleRpc006.Status.AsObject;
  }

  /**
   * Protobuf JSON representation for CheckUpstreamHealthResponse
   */
  export interface AsProtobufJSON {
    s2tStatus: googleRpc006.Status.AsProtobufJSON | null;
    nluStatus: googleRpc006.Status.AsProtobufJSON | null;
    t2sStatus: googleRpc006.Status.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.csi.ControlStreamRequest
 */
export class ControlStreamRequest implements GrpcMessage {
  static id = 'ondewo.csi.ControlStreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ControlStreamRequest();
    ControlStreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ControlStreamRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ControlStreamRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ControlStreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ControlStreamRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ControlStreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ControlStreamRequest.AsObject>) {
    _value = _value || {};
    ControlStreamRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ControlStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ControlStreamRequest.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ControlStreamRequest.AsProtobufJSON {
    return {};
  }
}
export module ControlStreamRequest {
  /**
   * Standard JavaScript object representation for ControlStreamRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ControlStreamRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for ondewo.csi.ControlStreamResponse
 */
export class ControlStreamResponse implements GrpcMessage {
  static id = 'ondewo.csi.ControlStreamResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ControlStreamResponse();
    ControlStreamResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ControlStreamResponse) {
    _instance.controlStatus = _instance.controlStatus || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ControlStreamResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.controlStatus = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ControlStreamResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ControlStreamResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.controlStatus) {
      _writer.writeEnum(1, _instance.controlStatus);
    }
  }

  private _controlStatus: ControlStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ControlStreamResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ControlStreamResponse.AsObject>) {
    _value = _value || {};
    this.controlStatus = _value.controlStatus;
    ControlStreamResponse.refineValues(this);
  }
  get controlStatus(): ControlStatus {
    return this._controlStatus;
  }
  set controlStatus(value: ControlStatus) {
    this._controlStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ControlStreamResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ControlStreamResponse.AsObject {
    return {
      controlStatus: this.controlStatus
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ControlStreamResponse.AsProtobufJSON {
    return {
      controlStatus:
        ControlStatus[
          this.controlStatus === null || this.controlStatus === undefined
            ? 0
            : this.controlStatus
        ]
    };
  }
}
export module ControlStreamResponse {
  /**
   * Standard JavaScript object representation for ControlStreamResponse
   */
  export interface AsObject {
    controlStatus: ControlStatus;
  }

  /**
   * Protobuf JSON representation for ControlStreamResponse
   */
  export interface AsProtobufJSON {
    controlStatus: string;
  }
}

/**
 * Message implementation for ondewo.csi.SetControlStatusRequest
 */
export class SetControlStatusRequest implements GrpcMessage {
  static id = 'ondewo.csi.SetControlStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetControlStatusRequest();
    SetControlStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetControlStatusRequest) {
    _instance.controlStatus = _instance.controlStatus || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetControlStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.controlStatus = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    SetControlStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetControlStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.controlStatus) {
      _writer.writeEnum(1, _instance.controlStatus);
    }
  }

  private _controlStatus: ControlStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetControlStatusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetControlStatusRequest.AsObject>) {
    _value = _value || {};
    this.controlStatus = _value.controlStatus;
    SetControlStatusRequest.refineValues(this);
  }
  get controlStatus(): ControlStatus {
    return this._controlStatus;
  }
  set controlStatus(value: ControlStatus) {
    this._controlStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetControlStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetControlStatusRequest.AsObject {
    return {
      controlStatus: this.controlStatus
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SetControlStatusRequest.AsProtobufJSON {
    return {
      controlStatus:
        ControlStatus[
          this.controlStatus === null || this.controlStatus === undefined
            ? 0
            : this.controlStatus
        ]
    };
  }
}
export module SetControlStatusRequest {
  /**
   * Standard JavaScript object representation for SetControlStatusRequest
   */
  export interface AsObject {
    controlStatus: ControlStatus;
  }

  /**
   * Protobuf JSON representation for SetControlStatusRequest
   */
  export interface AsProtobufJSON {
    controlStatus: string;
  }
}

/**
 * Message implementation for ondewo.csi.SetControlStatusResponse
 */
export class SetControlStatusResponse implements GrpcMessage {
  static id = 'ondewo.csi.SetControlStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetControlStatusResponse();
    SetControlStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetControlStatusResponse) {
    _instance.oldControlStatus = _instance.oldControlStatus || 0;
    _instance.newControlStatus = _instance.newControlStatus || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetControlStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.oldControlStatus = _reader.readEnum();
          break;
        case 2:
          _instance.newControlStatus = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    SetControlStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetControlStatusResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.oldControlStatus) {
      _writer.writeEnum(1, _instance.oldControlStatus);
    }
    if (_instance.newControlStatus) {
      _writer.writeEnum(2, _instance.newControlStatus);
    }
  }

  private _oldControlStatus: ControlStatus;
  private _newControlStatus: ControlStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetControlStatusResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetControlStatusResponse.AsObject>) {
    _value = _value || {};
    this.oldControlStatus = _value.oldControlStatus;
    this.newControlStatus = _value.newControlStatus;
    SetControlStatusResponse.refineValues(this);
  }
  get oldControlStatus(): ControlStatus {
    return this._oldControlStatus;
  }
  set oldControlStatus(value: ControlStatus) {
    this._oldControlStatus = value;
  }
  get newControlStatus(): ControlStatus {
    return this._newControlStatus;
  }
  set newControlStatus(value: ControlStatus) {
    this._newControlStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetControlStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetControlStatusResponse.AsObject {
    return {
      oldControlStatus: this.oldControlStatus,
      newControlStatus: this.newControlStatus
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SetControlStatusResponse.AsProtobufJSON {
    return {
      oldControlStatus:
        ControlStatus[
          this.oldControlStatus === null || this.oldControlStatus === undefined
            ? 0
            : this.oldControlStatus
        ],
      newControlStatus:
        ControlStatus[
          this.newControlStatus === null || this.newControlStatus === undefined
            ? 0
            : this.newControlStatus
        ]
    };
  }
}
export module SetControlStatusResponse {
  /**
   * Standard JavaScript object representation for SetControlStatusResponse
   */
  export interface AsObject {
    oldControlStatus: ControlStatus;
    newControlStatus: ControlStatus;
  }

  /**
   * Protobuf JSON representation for SetControlStatusResponse
   */
  export interface AsProtobufJSON {
    oldControlStatus: string;
    newControlStatus: string;
  }
}

/**
 * Message implementation for ondewo.csi.Condition
 */
export class Condition implements GrpcMessage {
  static id = 'ondewo.csi.Condition';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Condition();
    Condition.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Condition) {
    _instance.type = _instance.type || 0;
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Condition,
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
        default:
          _reader.skipField();
      }
    }

    Condition.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Condition, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeEnum(1, _instance.type);
    }
    if (_instance.value) {
      _writer.writeString(2, _instance.value);
    }
  }

  private _type: ConditionType;
  private _value: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Condition to deeply clone from
   */
  constructor(_value?: RecursivePartial<Condition.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.value = _value.value;
    Condition.refineValues(this);
  }
  get type(): ConditionType {
    return this._type;
  }
  set type(value: ConditionType) {
    this._type = value;
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
    Condition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Condition.AsObject {
    return {
      type: this.type,
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
  ): Condition.AsProtobufJSON {
    return {
      type:
        ConditionType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      value: this.value
    };
  }
}
export module Condition {
  /**
   * Standard JavaScript object representation for Condition
   */
  export interface AsObject {
    type: ConditionType;
    value: string;
  }

  /**
   * Protobuf JSON representation for Condition
   */
  export interface AsProtobufJSON {
    type: string;
    value: string;
  }
}

/**
 * Message implementation for ondewo.csi.ControlMessageServiceParameters
 */
export class ControlMessageServiceParameters implements GrpcMessage {
  static id = 'ondewo.csi.ControlMessageServiceParameters';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ControlMessageServiceParameters();
    ControlMessageServiceParameters.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ControlMessageServiceParameters) {
    _instance.transferId = _instance.transferId || '';
    _instance.wavFiles = _instance.wavFiles || [];
    _instance.text = _instance.text || '';
    _instance.context = _instance.context || undefined;
    _instance.sessionId = _instance.sessionId || '';
    _instance.contextName = _instance.contextName || '';
    _instance.conditionStart = _instance.conditionStart || undefined;
    _instance.conditionEnd = _instance.conditionEnd || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ControlMessageServiceParameters,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.t2sConfig = new ondewoT2s013.RequestConfig();
          _reader.readMessage(
            _instance.t2sConfig,
            ondewoT2s013.RequestConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.s2tConfig = new ondewoS2t014.TranscribeRequestConfig();
          _reader.readMessage(
            _instance.s2tConfig,
            ondewoS2t014.TranscribeRequestConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.transferId = _reader.readString();
          break;
        case 4:
          (_instance.wavFiles = _instance.wavFiles || []).push(
            _reader.readBytes()
          );
          break;
        case 5:
          _instance.text = _reader.readString();
          break;
        case 6:
          _instance.context = new ondewoNlu009.Context();
          _reader.readMessage(
            _instance.context,
            ondewoNlu009.Context.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.sessionId = _reader.readString();
          break;
        case 8:
          _instance.contextName = _reader.readString();
          break;
        case 9:
          _instance.conditionStart = new Condition();
          _reader.readMessage(
            _instance.conditionStart,
            Condition.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.conditionEnd = new Condition();
          _reader.readMessage(
            _instance.conditionEnd,
            Condition.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ControlMessageServiceParameters.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ControlMessageServiceParameters,
    _writer: BinaryWriter
  ) {
    if (_instance.t2sConfig) {
      _writer.writeMessage(
        1,
        _instance.t2sConfig as any,
        ondewoT2s013.RequestConfig.serializeBinaryToWriter
      );
    }
    if (_instance.s2tConfig) {
      _writer.writeMessage(
        2,
        _instance.s2tConfig as any,
        ondewoS2t014.TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
    if (_instance.transferId) {
      _writer.writeString(3, _instance.transferId);
    }
    if (_instance.wavFiles && _instance.wavFiles.length) {
      _writer.writeRepeatedBytes(4, _instance.wavFiles);
    }
    if (_instance.text) {
      _writer.writeString(5, _instance.text);
    }
    if (_instance.context) {
      _writer.writeMessage(
        6,
        _instance.context as any,
        ondewoNlu009.Context.serializeBinaryToWriter
      );
    }
    if (_instance.sessionId) {
      _writer.writeString(7, _instance.sessionId);
    }
    if (_instance.contextName) {
      _writer.writeString(8, _instance.contextName);
    }
    if (_instance.conditionStart) {
      _writer.writeMessage(
        9,
        _instance.conditionStart as any,
        Condition.serializeBinaryToWriter
      );
    }
    if (_instance.conditionEnd) {
      _writer.writeMessage(
        10,
        _instance.conditionEnd as any,
        Condition.serializeBinaryToWriter
      );
    }
  }

  private _t2sConfig?: ondewoT2s013.RequestConfig;
  private _s2tConfig?: ondewoS2t014.TranscribeRequestConfig;
  private _transferId: string;
  private _wavFiles: Uint8Array[];
  private _text: string;
  private _context?: ondewoNlu009.Context;
  private _sessionId: string;
  private _contextName: string;
  private _conditionStart?: Condition;
  private _conditionEnd?: Condition;

  private _config: ControlMessageServiceParameters.ConfigCase =
    ControlMessageServiceParameters.ConfigCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ControlMessageServiceParameters to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ControlMessageServiceParameters.AsObject>
  ) {
    _value = _value || {};
    this.t2sConfig = _value.t2sConfig
      ? new ondewoT2s013.RequestConfig(_value.t2sConfig)
      : undefined;
    this.s2tConfig = _value.s2tConfig
      ? new ondewoS2t014.TranscribeRequestConfig(_value.s2tConfig)
      : undefined;
    this.transferId = _value.transferId;
    this.wavFiles = (_value.wavFiles || []).map(b =>
      b ? b.subarray(0) : new Uint8Array()
    );
    this.text = _value.text;
    this.context = _value.context
      ? new ondewoNlu009.Context(_value.context)
      : undefined;
    this.sessionId = _value.sessionId;
    this.contextName = _value.contextName;
    this.conditionStart = _value.conditionStart
      ? new Condition(_value.conditionStart)
      : undefined;
    this.conditionEnd = _value.conditionEnd
      ? new Condition(_value.conditionEnd)
      : undefined;
    ControlMessageServiceParameters.refineValues(this);
  }
  get t2sConfig(): ondewoT2s013.RequestConfig | undefined {
    return this._t2sConfig;
  }
  set t2sConfig(value: ondewoT2s013.RequestConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._s2tConfig = undefined;
      this._config = ControlMessageServiceParameters.ConfigCase.t2sConfig;
    }
    this._t2sConfig = value;
  }
  get s2tConfig(): ondewoS2t014.TranscribeRequestConfig | undefined {
    return this._s2tConfig;
  }
  set s2tConfig(value: ondewoS2t014.TranscribeRequestConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._t2sConfig = undefined;
      this._config = ControlMessageServiceParameters.ConfigCase.s2tConfig;
    }
    this._s2tConfig = value;
  }
  get transferId(): string {
    return this._transferId;
  }
  set transferId(value: string) {
    this._transferId = value;
  }
  get wavFiles(): Uint8Array[] {
    return this._wavFiles;
  }
  set wavFiles(value: Uint8Array[]) {
    this._wavFiles = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get context(): ondewoNlu009.Context | undefined {
    return this._context;
  }
  set context(value: ondewoNlu009.Context | undefined) {
    this._context = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get contextName(): string {
    return this._contextName;
  }
  set contextName(value: string) {
    this._contextName = value;
  }
  get conditionStart(): Condition | undefined {
    return this._conditionStart;
  }
  set conditionStart(value: Condition | undefined) {
    this._conditionStart = value;
  }
  get conditionEnd(): Condition | undefined {
    return this._conditionEnd;
  }
  set conditionEnd(value: Condition | undefined) {
    this._conditionEnd = value;
  }
  get config() {
    return this._config;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ControlMessageServiceParameters.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ControlMessageServiceParameters.AsObject {
    return {
      t2sConfig: this.t2sConfig ? this.t2sConfig.toObject() : undefined,
      s2tConfig: this.s2tConfig ? this.s2tConfig.toObject() : undefined,
      transferId: this.transferId,
      wavFiles: (this.wavFiles || []).map(b =>
        b ? b.subarray(0) : new Uint8Array()
      ),
      text: this.text,
      context: this.context ? this.context.toObject() : undefined,
      sessionId: this.sessionId,
      contextName: this.contextName,
      conditionStart: this.conditionStart
        ? this.conditionStart.toObject()
        : undefined,
      conditionEnd: this.conditionEnd ? this.conditionEnd.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ControlMessageServiceParameters.AsProtobufJSON {
    return {
      t2sConfig: this.t2sConfig ? this.t2sConfig.toProtobufJSON(options) : null,
      s2tConfig: this.s2tConfig ? this.s2tConfig.toProtobufJSON(options) : null,
      transferId: this.transferId,
      wavFiles: (this.wavFiles || []).map(b =>
        b ? uint8ArrayToBase64(b) : ''
      ),
      text: this.text,
      context: this.context ? this.context.toProtobufJSON(options) : null,
      sessionId: this.sessionId,
      contextName: this.contextName,
      conditionStart: this.conditionStart
        ? this.conditionStart.toProtobufJSON(options)
        : null,
      conditionEnd: this.conditionEnd
        ? this.conditionEnd.toProtobufJSON(options)
        : null
    };
  }
}
export module ControlMessageServiceParameters {
  /**
   * Standard JavaScript object representation for ControlMessageServiceParameters
   */
  export interface AsObject {
    t2sConfig?: ondewoT2s013.RequestConfig.AsObject;
    s2tConfig?: ondewoS2t014.TranscribeRequestConfig.AsObject;
    transferId: string;
    wavFiles: Uint8Array[];
    text: string;
    context?: ondewoNlu009.Context.AsObject;
    sessionId: string;
    contextName: string;
    conditionStart?: Condition.AsObject;
    conditionEnd?: Condition.AsObject;
  }

  /**
   * Protobuf JSON representation for ControlMessageServiceParameters
   */
  export interface AsProtobufJSON {
    t2sConfig: ondewoT2s013.RequestConfig.AsProtobufJSON | null;
    s2tConfig: ondewoS2t014.TranscribeRequestConfig.AsProtobufJSON | null;
    transferId: string;
    wavFiles: string[];
    text: string;
    context: ondewoNlu009.Context.AsProtobufJSON | null;
    sessionId: string;
    contextName: string;
    conditionStart: Condition.AsProtobufJSON | null;
    conditionEnd: Condition.AsProtobufJSON | null;
  }
  export enum ConfigCase {
    none = 0,
    t2sConfig = 1,
    s2tConfig = 2
  }
}

/**
 * Message implementation for ondewo.csi.ControlMessage
 */
export class ControlMessage implements GrpcMessage {
  static id = 'ondewo.csi.ControlMessage';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ControlMessage();
    ControlMessage.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ControlMessage) {
    _instance.service = _instance.service || 0;
    _instance.method = _instance.method || 0;
    _instance.parameters = _instance.parameters || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ControlMessage,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.service = _reader.readEnum();
          break;
        case 2:
          _instance.method = _reader.readEnum();
          break;
        case 3:
          _instance.parameters = new ControlMessageServiceParameters();
          _reader.readMessage(
            _instance.parameters,
            ControlMessageServiceParameters.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ControlMessage.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ControlMessage,
    _writer: BinaryWriter
  ) {
    if (_instance.service) {
      _writer.writeEnum(1, _instance.service);
    }
    if (_instance.method) {
      _writer.writeEnum(2, _instance.method);
    }
    if (_instance.parameters) {
      _writer.writeMessage(
        3,
        _instance.parameters as any,
        ControlMessageServiceParameters.serializeBinaryToWriter
      );
    }
  }

  private _service: ControlMessageServiceName;
  private _method: ControlMessageServiceMethod;
  private _parameters?: ControlMessageServiceParameters;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ControlMessage to deeply clone from
   */
  constructor(_value?: RecursivePartial<ControlMessage.AsObject>) {
    _value = _value || {};
    this.service = _value.service;
    this.method = _value.method;
    this.parameters = _value.parameters
      ? new ControlMessageServiceParameters(_value.parameters)
      : undefined;
    ControlMessage.refineValues(this);
  }
  get service(): ControlMessageServiceName {
    return this._service;
  }
  set service(value: ControlMessageServiceName) {
    this._service = value;
  }
  get method(): ControlMessageServiceMethod {
    return this._method;
  }
  set method(value: ControlMessageServiceMethod) {
    this._method = value;
  }
  get parameters(): ControlMessageServiceParameters | undefined {
    return this._parameters;
  }
  set parameters(value: ControlMessageServiceParameters | undefined) {
    this._parameters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ControlMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ControlMessage.AsObject {
    return {
      service: this.service,
      method: this.method,
      parameters: this.parameters ? this.parameters.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ControlMessage.AsProtobufJSON {
    return {
      service:
        ControlMessageServiceName[
          this.service === null || this.service === undefined ? 0 : this.service
        ],
      method:
        ControlMessageServiceMethod[
          this.method === null || this.method === undefined ? 0 : this.method
        ],
      parameters: this.parameters
        ? this.parameters.toProtobufJSON(options)
        : null
    };
  }
}
export module ControlMessage {
  /**
   * Standard JavaScript object representation for ControlMessage
   */
  export interface AsObject {
    service: ControlMessageServiceName;
    method: ControlMessageServiceMethod;
    parameters?: ControlMessageServiceParameters.AsObject;
  }

  /**
   * Protobuf JSON representation for ControlMessage
   */
  export interface AsProtobufJSON {
    service: string;
    method: string;
    parameters: ControlMessageServiceParameters.AsProtobufJSON | null;
  }
}
