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
export enum Decoding {
  DEFAULT = 0,
  GREEDY = 1,
  BEAM_SEARCH_WITH_LM = 2,
  BEAM_SEARCH = 3
}
export enum InferenceBackend {
  INFERENCE_BACKEND_UNKNOWN = 0,
  INFERENCE_BACKEND_PYTORCH = 1,
  INFERENCE_BACKEND_FLAX = 2,
  INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON = 3,
  INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM = 4,
  INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE = 5,
  INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT = 6
}
/**
 * Message implementation for ondewo.s2t.TranscribeRequestConfig
 */
export class TranscribeRequestConfig implements GrpcMessage {
  static id = 'ondewo.s2t.TranscribeRequestConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscribeRequestConfig();
    TranscribeRequestConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscribeRequestConfig) {
    _instance.s2tPipelineId = _instance.s2tPipelineId || '';
    _instance.decoding = _instance.decoding || 0;

    _instance.language = _instance.language || '';
    _instance.task = _instance.task || '';
    _instance.s2tServiceConfig = _instance.s2tServiceConfig || undefined;
    _instance.s2tCloudProviderConfig =
      _instance.s2tCloudProviderConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscribeRequestConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tPipelineId = _reader.readString();
          break;
        case 2:
          _instance.decoding = _reader.readEnum();
          break;
        case 3:
          _instance.languageModelName = _reader.readString();
          break;
        case 4:
          _instance.postProcessing = new PostProcessingOptions();
          _reader.readMessage(
            _instance.postProcessing,
            PostProcessingOptions.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.utteranceDetection = new UtteranceDetectionOptions();
          _reader.readMessage(
            _instance.utteranceDetection,
            UtteranceDetectionOptions.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.pyannote = new Pyannote();
          _reader.readMessage(
            _instance.pyannote,
            Pyannote.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.returnOptions = new TranscriptionReturnOptions();
          _reader.readMessage(
            _instance.returnOptions,
            TranscriptionReturnOptions.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.language = _reader.readString();
          break;
        case 10:
          _instance.task = _reader.readString();
          break;
        case 11:
          _instance.s2tServiceConfig = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.s2tServiceConfig,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.s2tCloudProviderConfig = new S2tCloudProviderConfig();
          _reader.readMessage(
            _instance.s2tCloudProviderConfig,
            S2tCloudProviderConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TranscribeRequestConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscribeRequestConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tPipelineId) {
      _writer.writeString(1, _instance.s2tPipelineId);
    }
    if (_instance.decoding) {
      _writer.writeEnum(2, _instance.decoding);
    }
    if (_instance.languageModelName || _instance.languageModelName === '') {
      _writer.writeString(3, _instance.languageModelName);
    }
    if (_instance.postProcessing) {
      _writer.writeMessage(
        4,
        _instance.postProcessing as any,
        PostProcessingOptions.serializeBinaryToWriter
      );
    }
    if (_instance.utteranceDetection) {
      _writer.writeMessage(
        5,
        _instance.utteranceDetection as any,
        UtteranceDetectionOptions.serializeBinaryToWriter
      );
    }
    if (_instance.pyannote) {
      _writer.writeMessage(
        6,
        _instance.pyannote as any,
        Pyannote.serializeBinaryToWriter
      );
    }
    if (_instance.returnOptions) {
      _writer.writeMessage(
        8,
        _instance.returnOptions as any,
        TranscriptionReturnOptions.serializeBinaryToWriter
      );
    }
    if (_instance.language) {
      _writer.writeString(9, _instance.language);
    }
    if (_instance.task) {
      _writer.writeString(10, _instance.task);
    }
    if (_instance.s2tServiceConfig) {
      _writer.writeMessage(
        11,
        _instance.s2tServiceConfig as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudProviderConfig) {
      _writer.writeMessage(
        12,
        _instance.s2tCloudProviderConfig as any,
        S2tCloudProviderConfig.serializeBinaryToWriter
      );
    }
  }

  private _s2tPipelineId: string;
  private _decoding: Decoding;
  private _languageModelName: string;
  private _postProcessing?: PostProcessingOptions;
  private _utteranceDetection?: UtteranceDetectionOptions;
  private _pyannote?: Pyannote;
  private _returnOptions?: TranscriptionReturnOptions;
  private _language: string;
  private _task: string;
  private _s2tServiceConfig?: googleProtobuf001.Struct;
  private _s2tCloudProviderConfig?: S2tCloudProviderConfig;

  private _oneofLanguageModelName: TranscribeRequestConfig.OneofLanguageModelNameCase =
    TranscribeRequestConfig.OneofLanguageModelNameCase.none;
  private _oneofPostProcessing: TranscribeRequestConfig.OneofPostProcessingCase =
    TranscribeRequestConfig.OneofPostProcessingCase.none;
  private _oneofUtteranceDetection: TranscribeRequestConfig.OneofUtteranceDetectionCase =
    TranscribeRequestConfig.OneofUtteranceDetectionCase.none;
  private _voiceActivityDetection: TranscribeRequestConfig.VoiceActivityDetectionCase =
    TranscribeRequestConfig.VoiceActivityDetectionCase.none;
  private _oneofReturnOptions: TranscribeRequestConfig.OneofReturnOptionsCase =
    TranscribeRequestConfig.OneofReturnOptionsCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscribeRequestConfig.AsObject>) {
    _value = _value || {};
    this.s2tPipelineId = _value.s2tPipelineId;
    this.decoding = _value.decoding;
    this.languageModelName = _value.languageModelName;
    this.postProcessing = _value.postProcessing
      ? new PostProcessingOptions(_value.postProcessing)
      : undefined;
    this.utteranceDetection = _value.utteranceDetection
      ? new UtteranceDetectionOptions(_value.utteranceDetection)
      : undefined;
    this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
    this.returnOptions = _value.returnOptions
      ? new TranscriptionReturnOptions(_value.returnOptions)
      : undefined;
    this.language = _value.language;
    this.task = _value.task;
    this.s2tServiceConfig = _value.s2tServiceConfig
      ? new googleProtobuf001.Struct(_value.s2tServiceConfig)
      : undefined;
    this.s2tCloudProviderConfig = _value.s2tCloudProviderConfig
      ? new S2tCloudProviderConfig(_value.s2tCloudProviderConfig)
      : undefined;
    TranscribeRequestConfig.refineValues(this);
  }
  get s2tPipelineId(): string {
    return this._s2tPipelineId;
  }
  set s2tPipelineId(value: string) {
    this._s2tPipelineId = value;
  }
  get decoding(): Decoding {
    return this._decoding;
  }
  set decoding(value: Decoding) {
    this._decoding = value;
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    if (value !== undefined && value !== null) {
      this._oneofLanguageModelName =
        TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
    }
    this._languageModelName = value;
  }
  get postProcessing(): PostProcessingOptions | undefined {
    return this._postProcessing;
  }
  set postProcessing(value: PostProcessingOptions | undefined) {
    if (value !== undefined && value !== null) {
      this._oneofPostProcessing =
        TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
    }
    this._postProcessing = value;
  }
  get utteranceDetection(): UtteranceDetectionOptions | undefined {
    return this._utteranceDetection;
  }
  set utteranceDetection(value: UtteranceDetectionOptions | undefined) {
    if (value !== undefined && value !== null) {
      this._oneofUtteranceDetection =
        TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
    }
    this._utteranceDetection = value;
  }
  get pyannote(): Pyannote | undefined {
    return this._pyannote;
  }
  set pyannote(value: Pyannote | undefined) {
    if (value !== undefined && value !== null) {
      this._voiceActivityDetection =
        TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
    }
    this._pyannote = value;
  }
  get returnOptions(): TranscriptionReturnOptions | undefined {
    return this._returnOptions;
  }
  set returnOptions(value: TranscriptionReturnOptions | undefined) {
    if (value !== undefined && value !== null) {
      this._oneofReturnOptions =
        TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
    }
    this._returnOptions = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get task(): string {
    return this._task;
  }
  set task(value: string) {
    this._task = value;
  }
  get s2tServiceConfig(): googleProtobuf001.Struct | undefined {
    return this._s2tServiceConfig;
  }
  set s2tServiceConfig(value: googleProtobuf001.Struct | undefined) {
    this._s2tServiceConfig = value;
  }
  get s2tCloudProviderConfig(): S2tCloudProviderConfig | undefined {
    return this._s2tCloudProviderConfig;
  }
  set s2tCloudProviderConfig(value: S2tCloudProviderConfig | undefined) {
    this._s2tCloudProviderConfig = value;
  }
  get oneofLanguageModelName() {
    return this._oneofLanguageModelName;
  }
  get oneofPostProcessing() {
    return this._oneofPostProcessing;
  }
  get oneofUtteranceDetection() {
    return this._oneofUtteranceDetection;
  }
  get voiceActivityDetection() {
    return this._voiceActivityDetection;
  }
  get oneofReturnOptions() {
    return this._oneofReturnOptions;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscribeRequestConfig.AsObject {
    return {
      s2tPipelineId: this.s2tPipelineId,
      decoding: this.decoding,
      languageModelName: this.languageModelName,
      postProcessing: this.postProcessing
        ? this.postProcessing.toObject()
        : undefined,
      utteranceDetection: this.utteranceDetection
        ? this.utteranceDetection.toObject()
        : undefined,
      pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
      returnOptions: this.returnOptions
        ? this.returnOptions.toObject()
        : undefined,
      language: this.language,
      task: this.task,
      s2tServiceConfig: this.s2tServiceConfig
        ? this.s2tServiceConfig.toObject()
        : undefined,
      s2tCloudProviderConfig: this.s2tCloudProviderConfig
        ? this.s2tCloudProviderConfig.toObject()
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
  ): TranscribeRequestConfig.AsProtobufJSON {
    return {
      s2tPipelineId: this.s2tPipelineId,
      decoding:
        Decoding[
          this.decoding === null || this.decoding === undefined
            ? 0
            : this.decoding
        ],
      languageModelName:
        this.languageModelName === null || this.languageModelName === undefined
          ? null
          : this.languageModelName,
      postProcessing: this.postProcessing
        ? this.postProcessing.toProtobufJSON(options)
        : null,
      utteranceDetection: this.utteranceDetection
        ? this.utteranceDetection.toProtobufJSON(options)
        : null,
      pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
      returnOptions: this.returnOptions
        ? this.returnOptions.toProtobufJSON(options)
        : null,
      language: this.language,
      task: this.task,
      s2tServiceConfig: this.s2tServiceConfig
        ? this.s2tServiceConfig.toProtobufJSON(options)
        : null,
      s2tCloudProviderConfig: this.s2tCloudProviderConfig
        ? this.s2tCloudProviderConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module TranscribeRequestConfig {
  /**
   * Standard JavaScript object representation for TranscribeRequestConfig
   */
  export interface AsObject {
    s2tPipelineId: string;
    decoding: Decoding;
    languageModelName: string;
    postProcessing?: PostProcessingOptions.AsObject;
    utteranceDetection?: UtteranceDetectionOptions.AsObject;
    pyannote?: Pyannote.AsObject;
    returnOptions?: TranscriptionReturnOptions.AsObject;
    language: string;
    task: string;
    s2tServiceConfig?: googleProtobuf001.Struct.AsObject;
    s2tCloudProviderConfig?: S2tCloudProviderConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for TranscribeRequestConfig
   */
  export interface AsProtobufJSON {
    s2tPipelineId: string;
    decoding: string;
    languageModelName: string | null;
    postProcessing: PostProcessingOptions.AsProtobufJSON | null;
    utteranceDetection: UtteranceDetectionOptions.AsProtobufJSON | null;
    pyannote: Pyannote.AsProtobufJSON | null;
    returnOptions: TranscriptionReturnOptions.AsProtobufJSON | null;
    language: string;
    task: string;
    s2tServiceConfig: googleProtobuf001.Struct.AsProtobufJSON | null;
    s2tCloudProviderConfig: S2tCloudProviderConfig.AsProtobufJSON | null;
  }
  export enum OneofLanguageModelNameCase {
    none = 0,
    languageModelName = 1
  }
  export enum OneofPostProcessingCase {
    none = 0,
    postProcessing = 1
  }
  export enum OneofUtteranceDetectionCase {
    none = 0,
    utteranceDetection = 1
  }
  export enum VoiceActivityDetectionCase {
    none = 0,
    pyannote = 1
  }
  export enum OneofReturnOptionsCase {
    none = 0,
    returnOptions = 1
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfig
 */
export class S2tCloudProviderConfig implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudProviderConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudProviderConfig();
    S2tCloudProviderConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudProviderConfig) {
    _instance.s2tCloudProviderConfigAmazon =
      _instance.s2tCloudProviderConfigAmazon || undefined;
    _instance.s2tCloudProviderConfigDeepgram =
      _instance.s2tCloudProviderConfigDeepgram || undefined;
    _instance.s2tCloudProviderConfigGoogle =
      _instance.s2tCloudProviderConfigGoogle || undefined;
    _instance.s2tCloudProviderConfigMicrosoft =
      _instance.s2tCloudProviderConfigMicrosoft || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudProviderConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tCloudProviderConfigAmazon = new S2tCloudProviderConfigAmazon();
          _reader.readMessage(
            _instance.s2tCloudProviderConfigAmazon,
            S2tCloudProviderConfigAmazon.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.s2tCloudProviderConfigDeepgram = new S2tCloudProviderConfigDeepgram();
          _reader.readMessage(
            _instance.s2tCloudProviderConfigDeepgram,
            S2tCloudProviderConfigDeepgram.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.s2tCloudProviderConfigGoogle = new S2tCloudProviderConfigGoogle();
          _reader.readMessage(
            _instance.s2tCloudProviderConfigGoogle,
            S2tCloudProviderConfigGoogle.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.s2tCloudProviderConfigMicrosoft = new S2tCloudProviderConfigMicrosoft();
          _reader.readMessage(
            _instance.s2tCloudProviderConfigMicrosoft,
            S2tCloudProviderConfigMicrosoft.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudProviderConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudProviderConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tCloudProviderConfigAmazon) {
      _writer.writeMessage(
        1,
        _instance.s2tCloudProviderConfigAmazon as any,
        S2tCloudProviderConfigAmazon.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudProviderConfigDeepgram) {
      _writer.writeMessage(
        2,
        _instance.s2tCloudProviderConfigDeepgram as any,
        S2tCloudProviderConfigDeepgram.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudProviderConfigGoogle) {
      _writer.writeMessage(
        3,
        _instance.s2tCloudProviderConfigGoogle as any,
        S2tCloudProviderConfigGoogle.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudProviderConfigMicrosoft) {
      _writer.writeMessage(
        4,
        _instance.s2tCloudProviderConfigMicrosoft as any,
        S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter
      );
    }
  }

  private _s2tCloudProviderConfigAmazon?: S2tCloudProviderConfigAmazon;
  private _s2tCloudProviderConfigDeepgram?: S2tCloudProviderConfigDeepgram;
  private _s2tCloudProviderConfigGoogle?: S2tCloudProviderConfigGoogle;
  private _s2tCloudProviderConfigMicrosoft?: S2tCloudProviderConfigMicrosoft;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudProviderConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tCloudProviderConfig.AsObject>) {
    _value = _value || {};
    this.s2tCloudProviderConfigAmazon = _value.s2tCloudProviderConfigAmazon
      ? new S2tCloudProviderConfigAmazon(_value.s2tCloudProviderConfigAmazon)
      : undefined;
    this.s2tCloudProviderConfigDeepgram = _value.s2tCloudProviderConfigDeepgram
      ? new S2tCloudProviderConfigDeepgram(
          _value.s2tCloudProviderConfigDeepgram
        )
      : undefined;
    this.s2tCloudProviderConfigGoogle = _value.s2tCloudProviderConfigGoogle
      ? new S2tCloudProviderConfigGoogle(_value.s2tCloudProviderConfigGoogle)
      : undefined;
    this.s2tCloudProviderConfigMicrosoft = _value.s2tCloudProviderConfigMicrosoft
      ? new S2tCloudProviderConfigMicrosoft(
          _value.s2tCloudProviderConfigMicrosoft
        )
      : undefined;
    S2tCloudProviderConfig.refineValues(this);
  }
  get s2tCloudProviderConfigAmazon(): S2tCloudProviderConfigAmazon | undefined {
    return this._s2tCloudProviderConfigAmazon;
  }
  set s2tCloudProviderConfigAmazon(
    value: S2tCloudProviderConfigAmazon | undefined
  ) {
    this._s2tCloudProviderConfigAmazon = value;
  }
  get s2tCloudProviderConfigDeepgram():
    | S2tCloudProviderConfigDeepgram
    | undefined {
    return this._s2tCloudProviderConfigDeepgram;
  }
  set s2tCloudProviderConfigDeepgram(
    value: S2tCloudProviderConfigDeepgram | undefined
  ) {
    this._s2tCloudProviderConfigDeepgram = value;
  }
  get s2tCloudProviderConfigGoogle(): S2tCloudProviderConfigGoogle | undefined {
    return this._s2tCloudProviderConfigGoogle;
  }
  set s2tCloudProviderConfigGoogle(
    value: S2tCloudProviderConfigGoogle | undefined
  ) {
    this._s2tCloudProviderConfigGoogle = value;
  }
  get s2tCloudProviderConfigMicrosoft():
    | S2tCloudProviderConfigMicrosoft
    | undefined {
    return this._s2tCloudProviderConfigMicrosoft;
  }
  set s2tCloudProviderConfigMicrosoft(
    value: S2tCloudProviderConfigMicrosoft | undefined
  ) {
    this._s2tCloudProviderConfigMicrosoft = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudProviderConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudProviderConfig.AsObject {
    return {
      s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon
        ? this.s2tCloudProviderConfigAmazon.toObject()
        : undefined,
      s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram
        ? this.s2tCloudProviderConfigDeepgram.toObject()
        : undefined,
      s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle
        ? this.s2tCloudProviderConfigGoogle.toObject()
        : undefined,
      s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft
        ? this.s2tCloudProviderConfigMicrosoft.toObject()
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
  ): S2tCloudProviderConfig.AsProtobufJSON {
    return {
      s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon
        ? this.s2tCloudProviderConfigAmazon.toProtobufJSON(options)
        : null,
      s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram
        ? this.s2tCloudProviderConfigDeepgram.toProtobufJSON(options)
        : null,
      s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle
        ? this.s2tCloudProviderConfigGoogle.toProtobufJSON(options)
        : null,
      s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft
        ? this.s2tCloudProviderConfigMicrosoft.toProtobufJSON(options)
        : null
    };
  }
}
export module S2tCloudProviderConfig {
  /**
   * Standard JavaScript object representation for S2tCloudProviderConfig
   */
  export interface AsObject {
    s2tCloudProviderConfigAmazon?: S2tCloudProviderConfigAmazon.AsObject;
    s2tCloudProviderConfigDeepgram?: S2tCloudProviderConfigDeepgram.AsObject;
    s2tCloudProviderConfigGoogle?: S2tCloudProviderConfigGoogle.AsObject;
    s2tCloudProviderConfigMicrosoft?: S2tCloudProviderConfigMicrosoft.AsObject;
  }

  /**
   * Protobuf JSON representation for S2tCloudProviderConfig
   */
  export interface AsProtobufJSON {
    s2tCloudProviderConfigAmazon: S2tCloudProviderConfigAmazon.AsProtobufJSON | null;
    s2tCloudProviderConfigDeepgram: S2tCloudProviderConfigDeepgram.AsProtobufJSON | null;
    s2tCloudProviderConfigGoogle: S2tCloudProviderConfigGoogle.AsProtobufJSON | null;
    s2tCloudProviderConfigMicrosoft: S2tCloudProviderConfigMicrosoft.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigAmazon
 */
export class S2tCloudProviderConfigAmazon implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudProviderConfigAmazon';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudProviderConfigAmazon();
    S2tCloudProviderConfigAmazon.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudProviderConfigAmazon) {
    _instance.enablePartialResultsStabilization =
      _instance.enablePartialResultsStabilization || false;
    _instance.partialResultsStability = _instance.partialResultsStability || '';
    _instance.languageModelName = _instance.languageModelName || '';
    _instance.vocabularyName = _instance.vocabularyName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudProviderConfigAmazon,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.enablePartialResultsStabilization = _reader.readBool();
          break;
        case 2:
          _instance.partialResultsStability = _reader.readString();
          break;
        case 3:
          _instance.languageModelName = _reader.readString();
          break;
        case 4:
          _instance.vocabularyName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudProviderConfigAmazon.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudProviderConfigAmazon,
    _writer: BinaryWriter
  ) {
    if (_instance.enablePartialResultsStabilization) {
      _writer.writeBool(1, _instance.enablePartialResultsStabilization);
    }
    if (_instance.partialResultsStability) {
      _writer.writeString(2, _instance.partialResultsStability);
    }
    if (_instance.languageModelName) {
      _writer.writeString(3, _instance.languageModelName);
    }
    if (_instance.vocabularyName) {
      _writer.writeString(4, _instance.vocabularyName);
    }
  }

  private _enablePartialResultsStabilization: boolean;
  private _partialResultsStability: string;
  private _languageModelName: string;
  private _vocabularyName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudProviderConfigAmazon to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<S2tCloudProviderConfigAmazon.AsObject>
  ) {
    _value = _value || {};
    this.enablePartialResultsStabilization =
      _value.enablePartialResultsStabilization;
    this.partialResultsStability = _value.partialResultsStability;
    this.languageModelName = _value.languageModelName;
    this.vocabularyName = _value.vocabularyName;
    S2tCloudProviderConfigAmazon.refineValues(this);
  }
  get enablePartialResultsStabilization(): boolean {
    return this._enablePartialResultsStabilization;
  }
  set enablePartialResultsStabilization(value: boolean) {
    this._enablePartialResultsStabilization = value;
  }
  get partialResultsStability(): string {
    return this._partialResultsStability;
  }
  set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }
  get vocabularyName(): string {
    return this._vocabularyName;
  }
  set vocabularyName(value: string) {
    this._vocabularyName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudProviderConfigAmazon.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudProviderConfigAmazon.AsObject {
    return {
      enablePartialResultsStabilization: this.enablePartialResultsStabilization,
      partialResultsStability: this.partialResultsStability,
      languageModelName: this.languageModelName,
      vocabularyName: this.vocabularyName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudProviderConfigAmazon.AsProtobufJSON {
    return {
      enablePartialResultsStabilization: this.enablePartialResultsStabilization,
      partialResultsStability: this.partialResultsStability,
      languageModelName: this.languageModelName,
      vocabularyName: this.vocabularyName
    };
  }
}
export module S2tCloudProviderConfigAmazon {
  /**
   * Standard JavaScript object representation for S2tCloudProviderConfigAmazon
   */
  export interface AsObject {
    enablePartialResultsStabilization: boolean;
    partialResultsStability: string;
    languageModelName: string;
    vocabularyName: string;
  }

  /**
   * Protobuf JSON representation for S2tCloudProviderConfigAmazon
   */
  export interface AsProtobufJSON {
    enablePartialResultsStabilization: boolean;
    partialResultsStability: string;
    languageModelName: string;
    vocabularyName: string;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigDeepgram
 */
export class S2tCloudProviderConfigDeepgram implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudProviderConfigDeepgram';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudProviderConfigDeepgram();
    S2tCloudProviderConfigDeepgram.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudProviderConfigDeepgram) {
    _instance.punctuate = _instance.punctuate || false;
    _instance.smartFormat = _instance.smartFormat || false;
    _instance.numerals = _instance.numerals || false;
    _instance.measurements = _instance.measurements || false;
    _instance.dictation = _instance.dictation || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudProviderConfigDeepgram,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.punctuate = _reader.readBool();
          break;
        case 2:
          _instance.smartFormat = _reader.readBool();
          break;
        case 3:
          _instance.numerals = _reader.readBool();
          break;
        case 4:
          _instance.measurements = _reader.readBool();
          break;
        case 5:
          _instance.dictation = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudProviderConfigDeepgram.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudProviderConfigDeepgram,
    _writer: BinaryWriter
  ) {
    if (_instance.punctuate) {
      _writer.writeBool(1, _instance.punctuate);
    }
    if (_instance.smartFormat) {
      _writer.writeBool(2, _instance.smartFormat);
    }
    if (_instance.numerals) {
      _writer.writeBool(3, _instance.numerals);
    }
    if (_instance.measurements) {
      _writer.writeBool(4, _instance.measurements);
    }
    if (_instance.dictation) {
      _writer.writeBool(5, _instance.dictation);
    }
  }

  private _punctuate: boolean;
  private _smartFormat: boolean;
  private _numerals: boolean;
  private _measurements: boolean;
  private _dictation: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudProviderConfigDeepgram to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<S2tCloudProviderConfigDeepgram.AsObject>
  ) {
    _value = _value || {};
    this.punctuate = _value.punctuate;
    this.smartFormat = _value.smartFormat;
    this.numerals = _value.numerals;
    this.measurements = _value.measurements;
    this.dictation = _value.dictation;
    S2tCloudProviderConfigDeepgram.refineValues(this);
  }
  get punctuate(): boolean {
    return this._punctuate;
  }
  set punctuate(value: boolean) {
    this._punctuate = value;
  }
  get smartFormat(): boolean {
    return this._smartFormat;
  }
  set smartFormat(value: boolean) {
    this._smartFormat = value;
  }
  get numerals(): boolean {
    return this._numerals;
  }
  set numerals(value: boolean) {
    this._numerals = value;
  }
  get measurements(): boolean {
    return this._measurements;
  }
  set measurements(value: boolean) {
    this._measurements = value;
  }
  get dictation(): boolean {
    return this._dictation;
  }
  set dictation(value: boolean) {
    this._dictation = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudProviderConfigDeepgram.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudProviderConfigDeepgram.AsObject {
    return {
      punctuate: this.punctuate,
      smartFormat: this.smartFormat,
      numerals: this.numerals,
      measurements: this.measurements,
      dictation: this.dictation
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudProviderConfigDeepgram.AsProtobufJSON {
    return {
      punctuate: this.punctuate,
      smartFormat: this.smartFormat,
      numerals: this.numerals,
      measurements: this.measurements,
      dictation: this.dictation
    };
  }
}
export module S2tCloudProviderConfigDeepgram {
  /**
   * Standard JavaScript object representation for S2tCloudProviderConfigDeepgram
   */
  export interface AsObject {
    punctuate: boolean;
    smartFormat: boolean;
    numerals: boolean;
    measurements: boolean;
    dictation: boolean;
  }

  /**
   * Protobuf JSON representation for S2tCloudProviderConfigDeepgram
   */
  export interface AsProtobufJSON {
    punctuate: boolean;
    smartFormat: boolean;
    numerals: boolean;
    measurements: boolean;
    dictation: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigGoogle
 */
export class S2tCloudProviderConfigGoogle implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudProviderConfigGoogle';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudProviderConfigGoogle();
    S2tCloudProviderConfigGoogle.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudProviderConfigGoogle) {
    _instance.enableAutomaticPunctuation =
      _instance.enableAutomaticPunctuation || false;
    _instance.enableWordTimeOffsets = _instance.enableWordTimeOffsets || false;
    _instance.enableWordConfidence = _instance.enableWordConfidence || false;
    _instance.transcriptNormalization =
      _instance.transcriptNormalization || false;
    _instance.maxAlternatives = _instance.maxAlternatives || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudProviderConfigGoogle,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.enableAutomaticPunctuation = _reader.readBool();
          break;
        case 2:
          _instance.enableWordTimeOffsets = _reader.readBool();
          break;
        case 3:
          _instance.enableWordConfidence = _reader.readBool();
          break;
        case 4:
          _instance.transcriptNormalization = _reader.readBool();
          break;
        case 5:
          _instance.maxAlternatives = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudProviderConfigGoogle.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudProviderConfigGoogle,
    _writer: BinaryWriter
  ) {
    if (_instance.enableAutomaticPunctuation) {
      _writer.writeBool(1, _instance.enableAutomaticPunctuation);
    }
    if (_instance.enableWordTimeOffsets) {
      _writer.writeBool(2, _instance.enableWordTimeOffsets);
    }
    if (_instance.enableWordConfidence) {
      _writer.writeBool(3, _instance.enableWordConfidence);
    }
    if (_instance.transcriptNormalization) {
      _writer.writeBool(4, _instance.transcriptNormalization);
    }
    if (_instance.maxAlternatives) {
      _writer.writeInt32(5, _instance.maxAlternatives);
    }
  }

  private _enableAutomaticPunctuation: boolean;
  private _enableWordTimeOffsets: boolean;
  private _enableWordConfidence: boolean;
  private _transcriptNormalization: boolean;
  private _maxAlternatives: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudProviderConfigGoogle to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<S2tCloudProviderConfigGoogle.AsObject>
  ) {
    _value = _value || {};
    this.enableAutomaticPunctuation = _value.enableAutomaticPunctuation;
    this.enableWordTimeOffsets = _value.enableWordTimeOffsets;
    this.enableWordConfidence = _value.enableWordConfidence;
    this.transcriptNormalization = _value.transcriptNormalization;
    this.maxAlternatives = _value.maxAlternatives;
    S2tCloudProviderConfigGoogle.refineValues(this);
  }
  get enableAutomaticPunctuation(): boolean {
    return this._enableAutomaticPunctuation;
  }
  set enableAutomaticPunctuation(value: boolean) {
    this._enableAutomaticPunctuation = value;
  }
  get enableWordTimeOffsets(): boolean {
    return this._enableWordTimeOffsets;
  }
  set enableWordTimeOffsets(value: boolean) {
    this._enableWordTimeOffsets = value;
  }
  get enableWordConfidence(): boolean {
    return this._enableWordConfidence;
  }
  set enableWordConfidence(value: boolean) {
    this._enableWordConfidence = value;
  }
  get transcriptNormalization(): boolean {
    return this._transcriptNormalization;
  }
  set transcriptNormalization(value: boolean) {
    this._transcriptNormalization = value;
  }
  get maxAlternatives(): number {
    return this._maxAlternatives;
  }
  set maxAlternatives(value: number) {
    this._maxAlternatives = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudProviderConfigGoogle.AsObject {
    return {
      enableAutomaticPunctuation: this.enableAutomaticPunctuation,
      enableWordTimeOffsets: this.enableWordTimeOffsets,
      enableWordConfidence: this.enableWordConfidence,
      transcriptNormalization: this.transcriptNormalization,
      maxAlternatives: this.maxAlternatives
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudProviderConfigGoogle.AsProtobufJSON {
    return {
      enableAutomaticPunctuation: this.enableAutomaticPunctuation,
      enableWordTimeOffsets: this.enableWordTimeOffsets,
      enableWordConfidence: this.enableWordConfidence,
      transcriptNormalization: this.transcriptNormalization,
      maxAlternatives: this.maxAlternatives
    };
  }
}
export module S2tCloudProviderConfigGoogle {
  /**
   * Standard JavaScript object representation for S2tCloudProviderConfigGoogle
   */
  export interface AsObject {
    enableAutomaticPunctuation: boolean;
    enableWordTimeOffsets: boolean;
    enableWordConfidence: boolean;
    transcriptNormalization: boolean;
    maxAlternatives: number;
  }

  /**
   * Protobuf JSON representation for S2tCloudProviderConfigGoogle
   */
  export interface AsProtobufJSON {
    enableAutomaticPunctuation: boolean;
    enableWordTimeOffsets: boolean;
    enableWordConfidence: boolean;
    transcriptNormalization: boolean;
    maxAlternatives: number;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigMicrosoft
 */
export class S2tCloudProviderConfigMicrosoft implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudProviderConfigMicrosoft';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudProviderConfigMicrosoft();
    S2tCloudProviderConfigMicrosoft.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudProviderConfigMicrosoft) {
    _instance.useFastTranscriptionApi =
      _instance.useFastTranscriptionApi || false;
    _instance.useDetailedOutputFormat =
      _instance.useDetailedOutputFormat || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudProviderConfigMicrosoft,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.useFastTranscriptionApi = _reader.readBool();
          break;
        case 2:
          _instance.useDetailedOutputFormat = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudProviderConfigMicrosoft.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudProviderConfigMicrosoft,
    _writer: BinaryWriter
  ) {
    if (_instance.useFastTranscriptionApi) {
      _writer.writeBool(1, _instance.useFastTranscriptionApi);
    }
    if (_instance.useDetailedOutputFormat) {
      _writer.writeBool(2, _instance.useDetailedOutputFormat);
    }
  }

  private _useFastTranscriptionApi: boolean;
  private _useDetailedOutputFormat: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudProviderConfigMicrosoft to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<S2tCloudProviderConfigMicrosoft.AsObject>
  ) {
    _value = _value || {};
    this.useFastTranscriptionApi = _value.useFastTranscriptionApi;
    this.useDetailedOutputFormat = _value.useDetailedOutputFormat;
    S2tCloudProviderConfigMicrosoft.refineValues(this);
  }
  get useFastTranscriptionApi(): boolean {
    return this._useFastTranscriptionApi;
  }
  set useFastTranscriptionApi(value: boolean) {
    this._useFastTranscriptionApi = value;
  }
  get useDetailedOutputFormat(): boolean {
    return this._useDetailedOutputFormat;
  }
  set useDetailedOutputFormat(value: boolean) {
    this._useDetailedOutputFormat = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudProviderConfigMicrosoft.AsObject {
    return {
      useFastTranscriptionApi: this.useFastTranscriptionApi,
      useDetailedOutputFormat: this.useDetailedOutputFormat
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudProviderConfigMicrosoft.AsProtobufJSON {
    return {
      useFastTranscriptionApi: this.useFastTranscriptionApi,
      useDetailedOutputFormat: this.useDetailedOutputFormat
    };
  }
}
export module S2tCloudProviderConfigMicrosoft {
  /**
   * Standard JavaScript object representation for S2tCloudProviderConfigMicrosoft
   */
  export interface AsObject {
    useFastTranscriptionApi: boolean;
    useDetailedOutputFormat: boolean;
  }

  /**
   * Protobuf JSON representation for S2tCloudProviderConfigMicrosoft
   */
  export interface AsProtobufJSON {
    useFastTranscriptionApi: boolean;
    useDetailedOutputFormat: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.TranscriptionReturnOptions
 */
export class TranscriptionReturnOptions implements GrpcMessage {
  static id = 'ondewo.s2t.TranscriptionReturnOptions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscriptionReturnOptions();
    TranscriptionReturnOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscriptionReturnOptions) {
    _instance.returnStartOfSpeech = _instance.returnStartOfSpeech || false;
    _instance.returnAudio = _instance.returnAudio || false;
    _instance.returnConfidenceScore = _instance.returnConfidenceScore || false;
    _instance.returnAlternativeTranscriptions =
      _instance.returnAlternativeTranscriptions || false;
    _instance.returnAlternativeTranscriptionsNr =
      _instance.returnAlternativeTranscriptionsNr || 0;
    _instance.returnAlternativeWords =
      _instance.returnAlternativeWords || false;
    _instance.returnAlternativeWordsNr =
      _instance.returnAlternativeWordsNr || 0;
    _instance.returnWordTiming = _instance.returnWordTiming || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscriptionReturnOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.returnStartOfSpeech = _reader.readBool();
          break;
        case 2:
          _instance.returnAudio = _reader.readBool();
          break;
        case 3:
          _instance.returnConfidenceScore = _reader.readBool();
          break;
        case 4:
          _instance.returnAlternativeTranscriptions = _reader.readBool();
          break;
        case 5:
          _instance.returnAlternativeTranscriptionsNr = _reader.readInt32();
          break;
        case 6:
          _instance.returnAlternativeWords = _reader.readBool();
          break;
        case 7:
          _instance.returnAlternativeWordsNr = _reader.readInt32();
          break;
        case 8:
          _instance.returnWordTiming = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    TranscriptionReturnOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscriptionReturnOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.returnStartOfSpeech) {
      _writer.writeBool(1, _instance.returnStartOfSpeech);
    }
    if (_instance.returnAudio) {
      _writer.writeBool(2, _instance.returnAudio);
    }
    if (_instance.returnConfidenceScore) {
      _writer.writeBool(3, _instance.returnConfidenceScore);
    }
    if (_instance.returnAlternativeTranscriptions) {
      _writer.writeBool(4, _instance.returnAlternativeTranscriptions);
    }
    if (_instance.returnAlternativeTranscriptionsNr) {
      _writer.writeInt32(5, _instance.returnAlternativeTranscriptionsNr);
    }
    if (_instance.returnAlternativeWords) {
      _writer.writeBool(6, _instance.returnAlternativeWords);
    }
    if (_instance.returnAlternativeWordsNr) {
      _writer.writeInt32(7, _instance.returnAlternativeWordsNr);
    }
    if (_instance.returnWordTiming) {
      _writer.writeBool(8, _instance.returnWordTiming);
    }
  }

  private _returnStartOfSpeech: boolean;
  private _returnAudio: boolean;
  private _returnConfidenceScore: boolean;
  private _returnAlternativeTranscriptions: boolean;
  private _returnAlternativeTranscriptionsNr: number;
  private _returnAlternativeWords: boolean;
  private _returnAlternativeWordsNr: number;
  private _returnWordTiming: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscriptionReturnOptions.AsObject>) {
    _value = _value || {};
    this.returnStartOfSpeech = _value.returnStartOfSpeech;
    this.returnAudio = _value.returnAudio;
    this.returnConfidenceScore = _value.returnConfidenceScore;
    this.returnAlternativeTranscriptions =
      _value.returnAlternativeTranscriptions;
    this.returnAlternativeTranscriptionsNr =
      _value.returnAlternativeTranscriptionsNr;
    this.returnAlternativeWords = _value.returnAlternativeWords;
    this.returnAlternativeWordsNr = _value.returnAlternativeWordsNr;
    this.returnWordTiming = _value.returnWordTiming;
    TranscriptionReturnOptions.refineValues(this);
  }
  get returnStartOfSpeech(): boolean {
    return this._returnStartOfSpeech;
  }
  set returnStartOfSpeech(value: boolean) {
    this._returnStartOfSpeech = value;
  }
  get returnAudio(): boolean {
    return this._returnAudio;
  }
  set returnAudio(value: boolean) {
    this._returnAudio = value;
  }
  get returnConfidenceScore(): boolean {
    return this._returnConfidenceScore;
  }
  set returnConfidenceScore(value: boolean) {
    this._returnConfidenceScore = value;
  }
  get returnAlternativeTranscriptions(): boolean {
    return this._returnAlternativeTranscriptions;
  }
  set returnAlternativeTranscriptions(value: boolean) {
    this._returnAlternativeTranscriptions = value;
  }
  get returnAlternativeTranscriptionsNr(): number {
    return this._returnAlternativeTranscriptionsNr;
  }
  set returnAlternativeTranscriptionsNr(value: number) {
    this._returnAlternativeTranscriptionsNr = value;
  }
  get returnAlternativeWords(): boolean {
    return this._returnAlternativeWords;
  }
  set returnAlternativeWords(value: boolean) {
    this._returnAlternativeWords = value;
  }
  get returnAlternativeWordsNr(): number {
    return this._returnAlternativeWordsNr;
  }
  set returnAlternativeWordsNr(value: number) {
    this._returnAlternativeWordsNr = value;
  }
  get returnWordTiming(): boolean {
    return this._returnWordTiming;
  }
  set returnWordTiming(value: boolean) {
    this._returnWordTiming = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscriptionReturnOptions.AsObject {
    return {
      returnStartOfSpeech: this.returnStartOfSpeech,
      returnAudio: this.returnAudio,
      returnConfidenceScore: this.returnConfidenceScore,
      returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
      returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
      returnAlternativeWords: this.returnAlternativeWords,
      returnAlternativeWordsNr: this.returnAlternativeWordsNr,
      returnWordTiming: this.returnWordTiming
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscriptionReturnOptions.AsProtobufJSON {
    return {
      returnStartOfSpeech: this.returnStartOfSpeech,
      returnAudio: this.returnAudio,
      returnConfidenceScore: this.returnConfidenceScore,
      returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
      returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
      returnAlternativeWords: this.returnAlternativeWords,
      returnAlternativeWordsNr: this.returnAlternativeWordsNr,
      returnWordTiming: this.returnWordTiming
    };
  }
}
export module TranscriptionReturnOptions {
  /**
   * Standard JavaScript object representation for TranscriptionReturnOptions
   */
  export interface AsObject {
    returnStartOfSpeech: boolean;
    returnAudio: boolean;
    returnConfidenceScore: boolean;
    returnAlternativeTranscriptions: boolean;
    returnAlternativeTranscriptionsNr: number;
    returnAlternativeWords: boolean;
    returnAlternativeWordsNr: number;
    returnWordTiming: boolean;
  }

  /**
   * Protobuf JSON representation for TranscriptionReturnOptions
   */
  export interface AsProtobufJSON {
    returnStartOfSpeech: boolean;
    returnAudio: boolean;
    returnConfidenceScore: boolean;
    returnAlternativeTranscriptions: boolean;
    returnAlternativeTranscriptionsNr: number;
    returnAlternativeWords: boolean;
    returnAlternativeWordsNr: number;
    returnWordTiming: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.UtteranceDetectionOptions
 */
export class UtteranceDetectionOptions implements GrpcMessage {
  static id = 'ondewo.s2t.UtteranceDetectionOptions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UtteranceDetectionOptions();
    UtteranceDetectionOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UtteranceDetectionOptions) {
    _instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UtteranceDetectionOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.transcribeNotFinal = _reader.readBool();
          break;
        case 2:
          _instance.nextChunkTimeout = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    UtteranceDetectionOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UtteranceDetectionOptions,
    _writer: BinaryWriter
  ) {
    if (
      _instance.transcribeNotFinal ||
      _instance.transcribeNotFinal === false
    ) {
      _writer.writeBool(1, _instance.transcribeNotFinal);
    }
    if (_instance.nextChunkTimeout) {
      _writer.writeFloat(2, _instance.nextChunkTimeout);
    }
  }

  private _transcribeNotFinal: boolean;
  private _nextChunkTimeout: number;

  private _oneofTranscribeNotFinal: UtteranceDetectionOptions.OneofTranscribeNotFinalCase =
    UtteranceDetectionOptions.OneofTranscribeNotFinalCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<UtteranceDetectionOptions.AsObject>) {
    _value = _value || {};
    this.transcribeNotFinal = _value.transcribeNotFinal;
    this.nextChunkTimeout = _value.nextChunkTimeout;
    UtteranceDetectionOptions.refineValues(this);
  }
  get transcribeNotFinal(): boolean {
    return this._transcribeNotFinal;
  }
  set transcribeNotFinal(value: boolean) {
    if (value !== undefined && value !== null) {
      this._oneofTranscribeNotFinal =
        UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
    }
    this._transcribeNotFinal = value;
  }
  get nextChunkTimeout(): number {
    return this._nextChunkTimeout;
  }
  set nextChunkTimeout(value: number) {
    this._nextChunkTimeout = value;
  }
  get oneofTranscribeNotFinal() {
    return this._oneofTranscribeNotFinal;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UtteranceDetectionOptions.AsObject {
    return {
      transcribeNotFinal: this.transcribeNotFinal,
      nextChunkTimeout: this.nextChunkTimeout
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UtteranceDetectionOptions.AsProtobufJSON {
    return {
      transcribeNotFinal: this.transcribeNotFinal,
      nextChunkTimeout: this.nextChunkTimeout
    };
  }
}
export module UtteranceDetectionOptions {
  /**
   * Standard JavaScript object representation for UtteranceDetectionOptions
   */
  export interface AsObject {
    transcribeNotFinal: boolean;
    nextChunkTimeout: number;
  }

  /**
   * Protobuf JSON representation for UtteranceDetectionOptions
   */
  export interface AsProtobufJSON {
    transcribeNotFinal: boolean;
    nextChunkTimeout: number;
  }
  export enum OneofTranscribeNotFinalCase {
    none = 0,
    transcribeNotFinal = 1
  }
}

/**
 * Message implementation for ondewo.s2t.PostProcessingOptions
 */
export class PostProcessingOptions implements GrpcMessage {
  static id = 'ondewo.s2t.PostProcessingOptions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PostProcessingOptions();
    PostProcessingOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PostProcessingOptions) {
    _instance.spellingCorrection = _instance.spellingCorrection || false;
    _instance.normalize = _instance.normalize || false;
    _instance.config = _instance.config || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PostProcessingOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.spellingCorrection = _reader.readBool();
          break;
        case 2:
          _instance.normalize = _reader.readBool();
          break;
        case 3:
          _instance.config = new PostProcessing();
          _reader.readMessage(
            _instance.config,
            PostProcessing.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PostProcessingOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PostProcessingOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.spellingCorrection) {
      _writer.writeBool(1, _instance.spellingCorrection);
    }
    if (_instance.normalize) {
      _writer.writeBool(2, _instance.normalize);
    }
    if (_instance.config) {
      _writer.writeMessage(
        3,
        _instance.config as any,
        PostProcessing.serializeBinaryToWriter
      );
    }
  }

  private _spellingCorrection: boolean;
  private _normalize: boolean;
  private _config?: PostProcessing;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<PostProcessingOptions.AsObject>) {
    _value = _value || {};
    this.spellingCorrection = _value.spellingCorrection;
    this.normalize = _value.normalize;
    this.config = _value.config ? new PostProcessing(_value.config) : undefined;
    PostProcessingOptions.refineValues(this);
  }
  get spellingCorrection(): boolean {
    return this._spellingCorrection;
  }
  set spellingCorrection(value: boolean) {
    this._spellingCorrection = value;
  }
  get normalize(): boolean {
    return this._normalize;
  }
  set normalize(value: boolean) {
    this._normalize = value;
  }
  get config(): PostProcessing | undefined {
    return this._config;
  }
  set config(value: PostProcessing | undefined) {
    this._config = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PostProcessingOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PostProcessingOptions.AsObject {
    return {
      spellingCorrection: this.spellingCorrection,
      normalize: this.normalize,
      config: this.config ? this.config.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PostProcessingOptions.AsProtobufJSON {
    return {
      spellingCorrection: this.spellingCorrection,
      normalize: this.normalize,
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module PostProcessingOptions {
  /**
   * Standard JavaScript object representation for PostProcessingOptions
   */
  export interface AsObject {
    spellingCorrection: boolean;
    normalize: boolean;
    config?: PostProcessing.AsObject;
  }

  /**
   * Protobuf JSON representation for PostProcessingOptions
   */
  export interface AsProtobufJSON {
    spellingCorrection: boolean;
    normalize: boolean;
    config: PostProcessing.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.Transcription
 */
export class Transcription implements GrpcMessage {
  static id = 'ondewo.s2t.Transcription';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Transcription();
    Transcription.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Transcription) {
    _instance.transcription = _instance.transcription || '';
    _instance.confidenceScore = _instance.confidenceScore || 0;
    _instance.words = _instance.words || [];
    _instance.alternatives = _instance.alternatives || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Transcription,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.transcription = _reader.readString();
          break;
        case 2:
          _instance.confidenceScore = _reader.readFloat();
          break;
        case 3:
          const messageInitializer3 = new WordDetail();
          _reader.readMessage(
            messageInitializer3,
            WordDetail.deserializeBinaryFromReader
          );
          (_instance.words = _instance.words || []).push(messageInitializer3);
          break;
        case 4:
          const messageInitializer4 = new TranscriptionAlternative();
          _reader.readMessage(
            messageInitializer4,
            TranscriptionAlternative.deserializeBinaryFromReader
          );
          (_instance.alternatives = _instance.alternatives || []).push(
            messageInitializer4
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Transcription.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Transcription,
    _writer: BinaryWriter
  ) {
    if (_instance.transcription) {
      _writer.writeString(1, _instance.transcription);
    }
    if (_instance.confidenceScore) {
      _writer.writeFloat(2, _instance.confidenceScore);
    }
    if (_instance.words && _instance.words.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.words as any,
        WordDetail.serializeBinaryToWriter
      );
    }
    if (_instance.alternatives && _instance.alternatives.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.alternatives as any,
        TranscriptionAlternative.serializeBinaryToWriter
      );
    }
  }

  private _transcription: string;
  private _confidenceScore: number;
  private _words?: WordDetail[];
  private _alternatives?: TranscriptionAlternative[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Transcription to deeply clone from
   */
  constructor(_value?: RecursivePartial<Transcription.AsObject>) {
    _value = _value || {};
    this.transcription = _value.transcription;
    this.confidenceScore = _value.confidenceScore;
    this.words = (_value.words || []).map(m => new WordDetail(m));
    this.alternatives = (_value.alternatives || []).map(
      m => new TranscriptionAlternative(m)
    );
    Transcription.refineValues(this);
  }
  get transcription(): string {
    return this._transcription;
  }
  set transcription(value: string) {
    this._transcription = value;
  }
  get confidenceScore(): number {
    return this._confidenceScore;
  }
  set confidenceScore(value: number) {
    this._confidenceScore = value;
  }
  get words(): WordDetail[] | undefined {
    return this._words;
  }
  set words(value: WordDetail[] | undefined) {
    this._words = value;
  }
  get alternatives(): TranscriptionAlternative[] | undefined {
    return this._alternatives;
  }
  set alternatives(value: TranscriptionAlternative[] | undefined) {
    this._alternatives = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Transcription.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Transcription.AsObject {
    return {
      transcription: this.transcription,
      confidenceScore: this.confidenceScore,
      words: (this.words || []).map(m => m.toObject()),
      alternatives: (this.alternatives || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Transcription.AsProtobufJSON {
    return {
      transcription: this.transcription,
      confidenceScore: this.confidenceScore,
      words: (this.words || []).map(m => m.toProtobufJSON(options)),
      alternatives: (this.alternatives || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module Transcription {
  /**
   * Standard JavaScript object representation for Transcription
   */
  export interface AsObject {
    transcription: string;
    confidenceScore: number;
    words?: WordDetail.AsObject[];
    alternatives?: TranscriptionAlternative.AsObject[];
  }

  /**
   * Protobuf JSON representation for Transcription
   */
  export interface AsProtobufJSON {
    transcription: string;
    confidenceScore: number;
    words: WordDetail.AsProtobufJSON[] | null;
    alternatives: TranscriptionAlternative.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.s2t.TranscriptionAlternative
 */
export class TranscriptionAlternative implements GrpcMessage {
  static id = 'ondewo.s2t.TranscriptionAlternative';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscriptionAlternative();
    TranscriptionAlternative.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscriptionAlternative) {
    _instance.transcript = _instance.transcript || '';
    _instance.confidence = _instance.confidence || 0;
    _instance.words = _instance.words || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscriptionAlternative,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.transcript = _reader.readString();
          break;
        case 2:
          _instance.confidence = _reader.readFloat();
          break;
        case 3:
          const messageInitializer3 = new WordDetail();
          _reader.readMessage(
            messageInitializer3,
            WordDetail.deserializeBinaryFromReader
          );
          (_instance.words = _instance.words || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    TranscriptionAlternative.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscriptionAlternative,
    _writer: BinaryWriter
  ) {
    if (_instance.transcript) {
      _writer.writeString(1, _instance.transcript);
    }
    if (_instance.confidence) {
      _writer.writeFloat(2, _instance.confidence);
    }
    if (_instance.words && _instance.words.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.words as any,
        WordDetail.serializeBinaryToWriter
      );
    }
  }

  private _transcript: string;
  private _confidence: number;
  private _words?: WordDetail[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscriptionAlternative to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscriptionAlternative.AsObject>) {
    _value = _value || {};
    this.transcript = _value.transcript;
    this.confidence = _value.confidence;
    this.words = (_value.words || []).map(m => new WordDetail(m));
    TranscriptionAlternative.refineValues(this);
  }
  get transcript(): string {
    return this._transcript;
  }
  set transcript(value: string) {
    this._transcript = value;
  }
  get confidence(): number {
    return this._confidence;
  }
  set confidence(value: number) {
    this._confidence = value;
  }
  get words(): WordDetail[] | undefined {
    return this._words;
  }
  set words(value: WordDetail[] | undefined) {
    this._words = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscriptionAlternative.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscriptionAlternative.AsObject {
    return {
      transcript: this.transcript,
      confidence: this.confidence,
      words: (this.words || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscriptionAlternative.AsProtobufJSON {
    return {
      transcript: this.transcript,
      confidence: this.confidence,
      words: (this.words || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TranscriptionAlternative {
  /**
   * Standard JavaScript object representation for TranscriptionAlternative
   */
  export interface AsObject {
    transcript: string;
    confidence: number;
    words?: WordDetail.AsObject[];
  }

  /**
   * Protobuf JSON representation for TranscriptionAlternative
   */
  export interface AsProtobufJSON {
    transcript: string;
    confidence: number;
    words: WordDetail.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.s2t.WordDetail
 */
export class WordDetail implements GrpcMessage {
  static id = 'ondewo.s2t.WordDetail';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WordDetail();
    WordDetail.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WordDetail) {
    _instance.startTime = _instance.startTime || 0;
    _instance.endTime = _instance.endTime || 0;
    _instance.word = _instance.word || '';
    _instance.confidence = _instance.confidence || 0;
    _instance.wordAlternatives = _instance.wordAlternatives || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WordDetail,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.startTime = _reader.readFloat();
          break;
        case 2:
          _instance.endTime = _reader.readFloat();
          break;
        case 3:
          _instance.word = _reader.readString();
          break;
        case 4:
          _instance.confidence = _reader.readFloat();
          break;
        case 5:
          const messageInitializer5 = new WordAlternative();
          _reader.readMessage(
            messageInitializer5,
            WordAlternative.deserializeBinaryFromReader
          );
          (_instance.wordAlternatives = _instance.wordAlternatives || []).push(
            messageInitializer5
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WordDetail.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: WordDetail, _writer: BinaryWriter) {
    if (_instance.startTime) {
      _writer.writeFloat(1, _instance.startTime);
    }
    if (_instance.endTime) {
      _writer.writeFloat(2, _instance.endTime);
    }
    if (_instance.word) {
      _writer.writeString(3, _instance.word);
    }
    if (_instance.confidence) {
      _writer.writeFloat(4, _instance.confidence);
    }
    if (_instance.wordAlternatives && _instance.wordAlternatives.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.wordAlternatives as any,
        WordAlternative.serializeBinaryToWriter
      );
    }
  }

  private _startTime: number;
  private _endTime: number;
  private _word: string;
  private _confidence: number;
  private _wordAlternatives?: WordAlternative[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WordDetail to deeply clone from
   */
  constructor(_value?: RecursivePartial<WordDetail.AsObject>) {
    _value = _value || {};
    this.startTime = _value.startTime;
    this.endTime = _value.endTime;
    this.word = _value.word;
    this.confidence = _value.confidence;
    this.wordAlternatives = (_value.wordAlternatives || []).map(
      m => new WordAlternative(m)
    );
    WordDetail.refineValues(this);
  }
  get startTime(): number {
    return this._startTime;
  }
  set startTime(value: number) {
    this._startTime = value;
  }
  get endTime(): number {
    return this._endTime;
  }
  set endTime(value: number) {
    this._endTime = value;
  }
  get word(): string {
    return this._word;
  }
  set word(value: string) {
    this._word = value;
  }
  get confidence(): number {
    return this._confidence;
  }
  set confidence(value: number) {
    this._confidence = value;
  }
  get wordAlternatives(): WordAlternative[] | undefined {
    return this._wordAlternatives;
  }
  set wordAlternatives(value: WordAlternative[] | undefined) {
    this._wordAlternatives = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WordDetail.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WordDetail.AsObject {
    return {
      startTime: this.startTime,
      endTime: this.endTime,
      word: this.word,
      confidence: this.confidence,
      wordAlternatives: (this.wordAlternatives || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WordDetail.AsProtobufJSON {
    return {
      startTime: this.startTime,
      endTime: this.endTime,
      word: this.word,
      confidence: this.confidence,
      wordAlternatives: (this.wordAlternatives || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module WordDetail {
  /**
   * Standard JavaScript object representation for WordDetail
   */
  export interface AsObject {
    startTime: number;
    endTime: number;
    word: string;
    confidence: number;
    wordAlternatives?: WordAlternative.AsObject[];
  }

  /**
   * Protobuf JSON representation for WordDetail
   */
  export interface AsProtobufJSON {
    startTime: number;
    endTime: number;
    word: string;
    confidence: number;
    wordAlternatives: WordAlternative.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.s2t.WordAlternative
 */
export class WordAlternative implements GrpcMessage {
  static id = 'ondewo.s2t.WordAlternative';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WordAlternative();
    WordAlternative.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WordAlternative) {
    _instance.word = _instance.word || '';
    _instance.confidence = _instance.confidence || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WordAlternative,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.word = _reader.readString();
          break;
        case 2:
          _instance.confidence = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    WordAlternative.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WordAlternative,
    _writer: BinaryWriter
  ) {
    if (_instance.word) {
      _writer.writeString(1, _instance.word);
    }
    if (_instance.confidence) {
      _writer.writeFloat(2, _instance.confidence);
    }
  }

  private _word: string;
  private _confidence: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WordAlternative to deeply clone from
   */
  constructor(_value?: RecursivePartial<WordAlternative.AsObject>) {
    _value = _value || {};
    this.word = _value.word;
    this.confidence = _value.confidence;
    WordAlternative.refineValues(this);
  }
  get word(): string {
    return this._word;
  }
  set word(value: string) {
    this._word = value;
  }
  get confidence(): number {
    return this._confidence;
  }
  set confidence(value: number) {
    this._confidence = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WordAlternative.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WordAlternative.AsObject {
    return {
      word: this.word,
      confidence: this.confidence
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WordAlternative.AsProtobufJSON {
    return {
      word: this.word,
      confidence: this.confidence
    };
  }
}
export module WordAlternative {
  /**
   * Standard JavaScript object representation for WordAlternative
   */
  export interface AsObject {
    word: string;
    confidence: number;
  }

  /**
   * Protobuf JSON representation for WordAlternative
   */
  export interface AsProtobufJSON {
    word: string;
    confidence: number;
  }
}

/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
export class TranscribeStreamRequest implements GrpcMessage {
  static id = 'ondewo.s2t.TranscribeStreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscribeStreamRequest();
    TranscribeStreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscribeStreamRequest) {
    _instance.audioChunk = _instance.audioChunk || new Uint8Array();
    _instance.endOfStream = _instance.endOfStream || false;
    _instance.config = _instance.config || undefined;
    _instance.muteAudio = _instance.muteAudio || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscribeStreamRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioChunk = _reader.readBytes();
          break;
        case 2:
          _instance.endOfStream = _reader.readBool();
          break;
        case 3:
          _instance.config = new TranscribeRequestConfig();
          _reader.readMessage(
            _instance.config,
            TranscribeRequestConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.muteAudio = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    TranscribeStreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscribeStreamRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.audioChunk && _instance.audioChunk.length) {
      _writer.writeBytes(1, _instance.audioChunk);
    }
    if (_instance.endOfStream) {
      _writer.writeBool(2, _instance.endOfStream);
    }
    if (_instance.config) {
      _writer.writeMessage(
        3,
        _instance.config as any,
        TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
    if (_instance.muteAudio) {
      _writer.writeBool(4, _instance.muteAudio);
    }
  }

  private _audioChunk: Uint8Array;
  private _endOfStream: boolean;
  private _config?: TranscribeRequestConfig;
  private _muteAudio: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscribeStreamRequest.AsObject>) {
    _value = _value || {};
    this.audioChunk = _value.audioChunk;
    this.endOfStream = _value.endOfStream;
    this.config = _value.config
      ? new TranscribeRequestConfig(_value.config)
      : undefined;
    this.muteAudio = _value.muteAudio;
    TranscribeStreamRequest.refineValues(this);
  }
  get audioChunk(): Uint8Array {
    return this._audioChunk;
  }
  set audioChunk(value: Uint8Array) {
    this._audioChunk = value;
  }
  get endOfStream(): boolean {
    return this._endOfStream;
  }
  set endOfStream(value: boolean) {
    this._endOfStream = value;
  }
  get config(): TranscribeRequestConfig | undefined {
    return this._config;
  }
  set config(value: TranscribeRequestConfig | undefined) {
    this._config = value;
  }
  get muteAudio(): boolean {
    return this._muteAudio;
  }
  set muteAudio(value: boolean) {
    this._muteAudio = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscribeStreamRequest.AsObject {
    return {
      audioChunk: this.audioChunk
        ? this.audioChunk.subarray(0)
        : new Uint8Array(),
      endOfStream: this.endOfStream,
      config: this.config ? this.config.toObject() : undefined,
      muteAudio: this.muteAudio
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscribeStreamRequest.AsProtobufJSON {
    return {
      audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : '',
      endOfStream: this.endOfStream,
      config: this.config ? this.config.toProtobufJSON(options) : null,
      muteAudio: this.muteAudio
    };
  }
}
export module TranscribeStreamRequest {
  /**
   * Standard JavaScript object representation for TranscribeStreamRequest
   */
  export interface AsObject {
    audioChunk: Uint8Array;
    endOfStream: boolean;
    config?: TranscribeRequestConfig.AsObject;
    muteAudio: boolean;
  }

  /**
   * Protobuf JSON representation for TranscribeStreamRequest
   */
  export interface AsProtobufJSON {
    audioChunk: string;
    endOfStream: boolean;
    config: TranscribeRequestConfig.AsProtobufJSON | null;
    muteAudio: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
export class TranscribeStreamResponse implements GrpcMessage {
  static id = 'ondewo.s2t.TranscribeStreamResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscribeStreamResponse();
    TranscribeStreamResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscribeStreamResponse) {
    _instance.transcriptions = _instance.transcriptions || [];
    _instance.time = _instance.time || 0;
    _instance.final = _instance.final || false;
    _instance.returnAudio = _instance.returnAudio || false;
    _instance.audio = _instance.audio || new Uint8Array();
    _instance.utteranceStart = _instance.utteranceStart || false;
    _instance.audioUuid = _instance.audioUuid || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscribeStreamResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Transcription();
          _reader.readMessage(
            messageInitializer1,
            Transcription.deserializeBinaryFromReader
          );
          (_instance.transcriptions = _instance.transcriptions || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.time = _reader.readFloat();
          break;
        case 3:
          _instance.final = _reader.readBool();
          break;
        case 4:
          _instance.returnAudio = _reader.readBool();
          break;
        case 5:
          _instance.audio = _reader.readBytes();
          break;
        case 6:
          _instance.utteranceStart = _reader.readBool();
          break;
        case 7:
          _instance.audioUuid = _reader.readString();
          break;
        case 8:
          _instance.config = new TranscribeRequestConfig();
          _reader.readMessage(
            _instance.config,
            TranscribeRequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TranscribeStreamResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscribeStreamResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.transcriptions && _instance.transcriptions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.transcriptions as any,
        Transcription.serializeBinaryToWriter
      );
    }
    if (_instance.time) {
      _writer.writeFloat(2, _instance.time);
    }
    if (_instance.final) {
      _writer.writeBool(3, _instance.final);
    }
    if (_instance.returnAudio) {
      _writer.writeBool(4, _instance.returnAudio);
    }
    if (_instance.audio && _instance.audio.length) {
      _writer.writeBytes(5, _instance.audio);
    }
    if (_instance.utteranceStart) {
      _writer.writeBool(6, _instance.utteranceStart);
    }
    if (_instance.audioUuid) {
      _writer.writeString(7, _instance.audioUuid);
    }
    if (_instance.config) {
      _writer.writeMessage(
        8,
        _instance.config as any,
        TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _transcriptions?: Transcription[];
  private _time: number;
  private _final: boolean;
  private _returnAudio: boolean;
  private _audio: Uint8Array;
  private _utteranceStart: boolean;
  private _audioUuid: string;
  private _config?: TranscribeRequestConfig;

  private _oneofConfig: TranscribeStreamResponse.OneofConfigCase =
    TranscribeStreamResponse.OneofConfigCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscribeStreamResponse.AsObject>) {
    _value = _value || {};
    this.transcriptions = (_value.transcriptions || []).map(
      m => new Transcription(m)
    );
    this.time = _value.time;
    this.final = _value.final;
    this.returnAudio = _value.returnAudio;
    this.audio = _value.audio;
    this.utteranceStart = _value.utteranceStart;
    this.audioUuid = _value.audioUuid;
    this.config = _value.config
      ? new TranscribeRequestConfig(_value.config)
      : undefined;
    TranscribeStreamResponse.refineValues(this);
  }
  get transcriptions(): Transcription[] | undefined {
    return this._transcriptions;
  }
  set transcriptions(value: Transcription[] | undefined) {
    this._transcriptions = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
  }
  get final(): boolean {
    return this._final;
  }
  set final(value: boolean) {
    this._final = value;
  }
  get returnAudio(): boolean {
    return this._returnAudio;
  }
  set returnAudio(value: boolean) {
    this._returnAudio = value;
  }
  get audio(): Uint8Array {
    return this._audio;
  }
  set audio(value: Uint8Array) {
    this._audio = value;
  }
  get utteranceStart(): boolean {
    return this._utteranceStart;
  }
  set utteranceStart(value: boolean) {
    this._utteranceStart = value;
  }
  get audioUuid(): string {
    return this._audioUuid;
  }
  set audioUuid(value: string) {
    this._audioUuid = value;
  }
  get config(): TranscribeRequestConfig | undefined {
    return this._config;
  }
  set config(value: TranscribeRequestConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.config;
    }
    this._config = value;
  }
  get oneofConfig() {
    return this._oneofConfig;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscribeStreamResponse.AsObject {
    return {
      transcriptions: (this.transcriptions || []).map(m => m.toObject()),
      time: this.time,
      final: this.final,
      returnAudio: this.returnAudio,
      audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
      utteranceStart: this.utteranceStart,
      audioUuid: this.audioUuid,
      config: this.config ? this.config.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscribeStreamResponse.AsProtobufJSON {
    return {
      transcriptions: (this.transcriptions || []).map(m =>
        m.toProtobufJSON(options)
      ),
      time: this.time,
      final: this.final,
      returnAudio: this.returnAudio,
      audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
      utteranceStart: this.utteranceStart,
      audioUuid: this.audioUuid,
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module TranscribeStreamResponse {
  /**
   * Standard JavaScript object representation for TranscribeStreamResponse
   */
  export interface AsObject {
    transcriptions?: Transcription.AsObject[];
    time: number;
    final: boolean;
    returnAudio: boolean;
    audio: Uint8Array;
    utteranceStart: boolean;
    audioUuid: string;
    config?: TranscribeRequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for TranscribeStreamResponse
   */
  export interface AsProtobufJSON {
    transcriptions: Transcription.AsProtobufJSON[] | null;
    time: number;
    final: boolean;
    returnAudio: boolean;
    audio: string;
    utteranceStart: boolean;
    audioUuid: string;
    config: TranscribeRequestConfig.AsProtobufJSON | null;
  }
  export enum OneofConfigCase {
    none = 0,
    config = 1
  }
}

/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
export class TranscribeFileRequest implements GrpcMessage {
  static id = 'ondewo.s2t.TranscribeFileRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscribeFileRequest();
    TranscribeFileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscribeFileRequest) {
    _instance.audioFile = _instance.audioFile || new Uint8Array();
    _instance.config = _instance.config || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscribeFileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioFile = _reader.readBytes();
          break;
        case 2:
          _instance.config = new TranscribeRequestConfig();
          _reader.readMessage(
            _instance.config,
            TranscribeRequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TranscribeFileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscribeFileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.audioFile && _instance.audioFile.length) {
      _writer.writeBytes(1, _instance.audioFile);
    }
    if (_instance.config) {
      _writer.writeMessage(
        2,
        _instance.config as any,
        TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _audioFile: Uint8Array;
  private _config?: TranscribeRequestConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscribeFileRequest.AsObject>) {
    _value = _value || {};
    this.audioFile = _value.audioFile;
    this.config = _value.config
      ? new TranscribeRequestConfig(_value.config)
      : undefined;
    TranscribeFileRequest.refineValues(this);
  }
  get audioFile(): Uint8Array {
    return this._audioFile;
  }
  set audioFile(value: Uint8Array) {
    this._audioFile = value;
  }
  get config(): TranscribeRequestConfig | undefined {
    return this._config;
  }
  set config(value: TranscribeRequestConfig | undefined) {
    this._config = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscribeFileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscribeFileRequest.AsObject {
    return {
      audioFile: this.audioFile ? this.audioFile.subarray(0) : new Uint8Array(),
      config: this.config ? this.config.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscribeFileRequest.AsProtobufJSON {
    return {
      audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : '',
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module TranscribeFileRequest {
  /**
   * Standard JavaScript object representation for TranscribeFileRequest
   */
  export interface AsObject {
    audioFile: Uint8Array;
    config?: TranscribeRequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for TranscribeFileRequest
   */
  export interface AsProtobufJSON {
    audioFile: string;
    config: TranscribeRequestConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
export class TranscribeFileResponse implements GrpcMessage {
  static id = 'ondewo.s2t.TranscribeFileResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TranscribeFileResponse();
    TranscribeFileResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TranscribeFileResponse) {
    _instance.transcriptions = _instance.transcriptions || [];
    _instance.time = _instance.time || 0;
    _instance.audioUuid = _instance.audioUuid || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TranscribeFileResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Transcription();
          _reader.readMessage(
            messageInitializer1,
            Transcription.deserializeBinaryFromReader
          );
          (_instance.transcriptions = _instance.transcriptions || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.time = _reader.readFloat();
          break;
        case 3:
          _instance.audioUuid = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TranscribeFileResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TranscribeFileResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.transcriptions && _instance.transcriptions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.transcriptions as any,
        Transcription.serializeBinaryToWriter
      );
    }
    if (_instance.time) {
      _writer.writeFloat(2, _instance.time);
    }
    if (_instance.audioUuid) {
      _writer.writeString(3, _instance.audioUuid);
    }
  }

  private _transcriptions?: Transcription[];
  private _time: number;
  private _audioUuid: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TranscribeFileResponse.AsObject>) {
    _value = _value || {};
    this.transcriptions = (_value.transcriptions || []).map(
      m => new Transcription(m)
    );
    this.time = _value.time;
    this.audioUuid = _value.audioUuid;
    TranscribeFileResponse.refineValues(this);
  }
  get transcriptions(): Transcription[] | undefined {
    return this._transcriptions;
  }
  set transcriptions(value: Transcription[] | undefined) {
    this._transcriptions = value;
  }
  get time(): number {
    return this._time;
  }
  set time(value: number) {
    this._time = value;
  }
  get audioUuid(): string {
    return this._audioUuid;
  }
  set audioUuid(value: string) {
    this._audioUuid = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TranscribeFileResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TranscribeFileResponse.AsObject {
    return {
      transcriptions: (this.transcriptions || []).map(m => m.toObject()),
      time: this.time,
      audioUuid: this.audioUuid
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TranscribeFileResponse.AsProtobufJSON {
    return {
      transcriptions: (this.transcriptions || []).map(m =>
        m.toProtobufJSON(options)
      ),
      time: this.time,
      audioUuid: this.audioUuid
    };
  }
}
export module TranscribeFileResponse {
  /**
   * Standard JavaScript object representation for TranscribeFileResponse
   */
  export interface AsObject {
    transcriptions?: Transcription.AsObject[];
    time: number;
    audioUuid: string;
  }

  /**
   * Protobuf JSON representation for TranscribeFileResponse
   */
  export interface AsProtobufJSON {
    transcriptions: Transcription.AsProtobufJSON[] | null;
    time: number;
    audioUuid: string;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tPipelineId
 */
export class S2tPipelineId implements GrpcMessage {
  static id = 'ondewo.s2t.S2tPipelineId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tPipelineId();
    S2tPipelineId.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tPipelineId) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tPipelineId,
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

    S2tPipelineId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tPipelineId,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tPipelineId to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tPipelineId.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    S2tPipelineId.refineValues(this);
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
    S2tPipelineId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tPipelineId.AsObject {
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
  ): S2tPipelineId.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module S2tPipelineId {
  /**
   * Standard JavaScript object representation for S2tPipelineId
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for S2tPipelineId
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
export class ListS2tPipelinesRequest implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tPipelinesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tPipelinesRequest();
    ListS2tPipelinesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tPipelinesRequest) {
    _instance.languages = _instance.languages || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
    _instance.domains = _instance.domains || [];
    _instance.registeredOnly = _instance.registeredOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tPipelinesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.registeredOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tPipelinesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tPipelinesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(1, _instance.languages);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(2, _instance.pipelineOwners);
    }
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(3, _instance.domains);
    }
    if (_instance.registeredOnly) {
      _writer.writeBool(4, _instance.registeredOnly);
    }
  }

  private _languages: string[];
  private _pipelineOwners: string[];
  private _domains: string[];
  private _registeredOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tPipelinesRequest.AsObject>) {
    _value = _value || {};
    this.languages = (_value.languages || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    this.domains = (_value.domains || []).slice();
    this.registeredOnly = _value.registeredOnly;
    ListS2tPipelinesRequest.refineValues(this);
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }
  get registeredOnly(): boolean {
    return this._registeredOnly;
  }
  set registeredOnly(value: boolean) {
    this._registeredOnly = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tPipelinesRequest.AsObject {
    return {
      languages: (this.languages || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      domains: (this.domains || []).slice(),
      registeredOnly: this.registeredOnly
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tPipelinesRequest.AsProtobufJSON {
    return {
      languages: (this.languages || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      domains: (this.domains || []).slice(),
      registeredOnly: this.registeredOnly
    };
  }
}
export module ListS2tPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListS2tPipelinesRequest
   */
  export interface AsObject {
    languages: string[];
    pipelineOwners: string[];
    domains: string[];
    registeredOnly: boolean;
  }

  /**
   * Protobuf JSON representation for ListS2tPipelinesRequest
   */
  export interface AsProtobufJSON {
    languages: string[];
    pipelineOwners: string[];
    domains: string[];
    registeredOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
export class ListS2tPipelinesResponse implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tPipelinesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tPipelinesResponse();
    ListS2tPipelinesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tPipelinesResponse) {
    _instance.pipelineConfigs = _instance.pipelineConfigs || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tPipelinesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Speech2TextConfig();
          _reader.readMessage(
            messageInitializer1,
            Speech2TextConfig.deserializeBinaryFromReader
          );
          (_instance.pipelineConfigs = _instance.pipelineConfigs || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tPipelinesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tPipelinesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelineConfigs && _instance.pipelineConfigs.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.pipelineConfigs as any,
        Speech2TextConfig.serializeBinaryToWriter
      );
    }
  }

  private _pipelineConfigs?: Speech2TextConfig[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tPipelinesResponse.AsObject>) {
    _value = _value || {};
    this.pipelineConfigs = (_value.pipelineConfigs || []).map(
      m => new Speech2TextConfig(m)
    );
    ListS2tPipelinesResponse.refineValues(this);
  }
  get pipelineConfigs(): Speech2TextConfig[] | undefined {
    return this._pipelineConfigs;
  }
  set pipelineConfigs(value: Speech2TextConfig[] | undefined) {
    this._pipelineConfigs = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tPipelinesResponse.AsObject {
    return {
      pipelineConfigs: (this.pipelineConfigs || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tPipelinesResponse.AsProtobufJSON {
    return {
      pipelineConfigs: (this.pipelineConfigs || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module ListS2tPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListS2tPipelinesResponse
   */
  export interface AsObject {
    pipelineConfigs?: Speech2TextConfig.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListS2tPipelinesResponse
   */
  export interface AsProtobufJSON {
    pipelineConfigs: Speech2TextConfig.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
export class ListS2tLanguagesRequest implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tLanguagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tLanguagesRequest();
    ListS2tLanguagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tLanguagesRequest) {
    _instance.domains = _instance.domains || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tLanguagesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tLanguagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tLanguagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(1, _instance.domains);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(2, _instance.pipelineOwners);
    }
  }

  private _domains: string[];
  private _pipelineOwners: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tLanguagesRequest.AsObject>) {
    _value = _value || {};
    this.domains = (_value.domains || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    ListS2tLanguagesRequest.refineValues(this);
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tLanguagesRequest.AsObject {
    return {
      domains: (this.domains || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tLanguagesRequest.AsProtobufJSON {
    return {
      domains: (this.domains || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice()
    };
  }
}
export module ListS2tLanguagesRequest {
  /**
   * Standard JavaScript object representation for ListS2tLanguagesRequest
   */
  export interface AsObject {
    domains: string[];
    pipelineOwners: string[];
  }

  /**
   * Protobuf JSON representation for ListS2tLanguagesRequest
   */
  export interface AsProtobufJSON {
    domains: string[];
    pipelineOwners: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
 */
export class ListS2tLanguagesResponse implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tLanguagesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tLanguagesResponse();
    ListS2tLanguagesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tLanguagesResponse) {
    _instance.languages = _instance.languages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tLanguagesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tLanguagesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tLanguagesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(1, _instance.languages);
    }
  }

  private _languages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tLanguagesResponse.AsObject>) {
    _value = _value || {};
    this.languages = (_value.languages || []).slice();
    ListS2tLanguagesResponse.refineValues(this);
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tLanguagesResponse.AsObject {
    return {
      languages: (this.languages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tLanguagesResponse.AsProtobufJSON {
    return {
      languages: (this.languages || []).slice()
    };
  }
}
export module ListS2tLanguagesResponse {
  /**
   * Standard JavaScript object representation for ListS2tLanguagesResponse
   */
  export interface AsObject {
    languages: string[];
  }

  /**
   * Protobuf JSON representation for ListS2tLanguagesResponse
   */
  export interface AsProtobufJSON {
    languages: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
export class ListS2tDomainsRequest implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tDomainsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tDomainsRequest();
    ListS2tDomainsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tDomainsRequest) {
    _instance.languages = _instance.languages || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tDomainsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tDomainsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tDomainsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(1, _instance.languages);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(2, _instance.pipelineOwners);
    }
  }

  private _languages: string[];
  private _pipelineOwners: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tDomainsRequest.AsObject>) {
    _value = _value || {};
    this.languages = (_value.languages || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    ListS2tDomainsRequest.refineValues(this);
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tDomainsRequest.AsObject {
    return {
      languages: (this.languages || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tDomainsRequest.AsProtobufJSON {
    return {
      languages: (this.languages || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice()
    };
  }
}
export module ListS2tDomainsRequest {
  /**
   * Standard JavaScript object representation for ListS2tDomainsRequest
   */
  export interface AsObject {
    languages: string[];
    pipelineOwners: string[];
  }

  /**
   * Protobuf JSON representation for ListS2tDomainsRequest
   */
  export interface AsProtobufJSON {
    languages: string[];
    pipelineOwners: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tDomainsResponse
 */
export class ListS2tDomainsResponse implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tDomainsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tDomainsResponse();
    ListS2tDomainsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tDomainsResponse) {
    _instance.domains = _instance.domains || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tDomainsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tDomainsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tDomainsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(1, _instance.domains);
    }
  }

  private _domains: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tDomainsResponse.AsObject>) {
    _value = _value || {};
    this.domains = (_value.domains || []).slice();
    ListS2tDomainsResponse.refineValues(this);
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tDomainsResponse.AsObject {
    return {
      domains: (this.domains || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tDomainsResponse.AsProtobufJSON {
    return {
      domains: (this.domains || []).slice()
    };
  }
}
export module ListS2tDomainsResponse {
  /**
   * Standard JavaScript object representation for ListS2tDomainsResponse
   */
  export interface AsObject {
    domains: string[];
  }

  /**
   * Protobuf JSON representation for ListS2tDomainsResponse
   */
  export interface AsProtobufJSON {
    domains: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.S2TGetServiceInfoResponse
 */
export class S2TGetServiceInfoResponse implements GrpcMessage {
  static id = 'ondewo.s2t.S2TGetServiceInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2TGetServiceInfoResponse();
    S2TGetServiceInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2TGetServiceInfoResponse) {
    _instance.version = _instance.version || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2TGetServiceInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.version = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2TGetServiceInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2TGetServiceInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.version) {
      _writer.writeString(1, _instance.version);
    }
  }

  private _version: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2TGetServiceInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2TGetServiceInfoResponse.AsObject>) {
    _value = _value || {};
    this.version = _value.version;
    S2TGetServiceInfoResponse.refineValues(this);
  }
  get version(): string {
    return this._version;
  }
  set version(value: string) {
    this._version = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2TGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2TGetServiceInfoResponse.AsObject {
    return {
      version: this.version
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2TGetServiceInfoResponse.AsProtobufJSON {
    return {
      version: this.version
    };
  }
}
export module S2TGetServiceInfoResponse {
  /**
   * Standard JavaScript object representation for S2TGetServiceInfoResponse
   */
  export interface AsObject {
    version: string;
  }

  /**
   * Protobuf JSON representation for S2TGetServiceInfoResponse
   */
  export interface AsProtobufJSON {
    version: string;
  }
}

/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
export class Speech2TextConfig implements GrpcMessage {
  static id = 'ondewo.s2t.Speech2TextConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Speech2TextConfig();
    Speech2TextConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Speech2TextConfig) {
    _instance.id = _instance.id || '';
    _instance.description = _instance.description || undefined;
    _instance.active = _instance.active || false;
    _instance.inference = _instance.inference || undefined;
    _instance.streamingServer = _instance.streamingServer || undefined;
    _instance.voiceActivityDetection =
      _instance.voiceActivityDetection || undefined;
    _instance.postProcessing = _instance.postProcessing || undefined;
    _instance.logging = _instance.logging || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Speech2TextConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.description = new S2TDescription();
          _reader.readMessage(
            _instance.description,
            S2TDescription.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.active = _reader.readBool();
          break;
        case 4:
          _instance.inference = new S2TInference();
          _reader.readMessage(
            _instance.inference,
            S2TInference.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.streamingServer = new StreamingServer();
          _reader.readMessage(
            _instance.streamingServer,
            StreamingServer.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.voiceActivityDetection = new VoiceActivityDetection();
          _reader.readMessage(
            _instance.voiceActivityDetection,
            VoiceActivityDetection.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.postProcessing = new PostProcessing();
          _reader.readMessage(
            _instance.postProcessing,
            PostProcessing.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.logging = new Logging();
          _reader.readMessage(
            _instance.logging,
            Logging.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Speech2TextConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Speech2TextConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.description) {
      _writer.writeMessage(
        2,
        _instance.description as any,
        S2TDescription.serializeBinaryToWriter
      );
    }
    if (_instance.active) {
      _writer.writeBool(3, _instance.active);
    }
    if (_instance.inference) {
      _writer.writeMessage(
        4,
        _instance.inference as any,
        S2TInference.serializeBinaryToWriter
      );
    }
    if (_instance.streamingServer) {
      _writer.writeMessage(
        5,
        _instance.streamingServer as any,
        StreamingServer.serializeBinaryToWriter
      );
    }
    if (_instance.voiceActivityDetection) {
      _writer.writeMessage(
        6,
        _instance.voiceActivityDetection as any,
        VoiceActivityDetection.serializeBinaryToWriter
      );
    }
    if (_instance.postProcessing) {
      _writer.writeMessage(
        7,
        _instance.postProcessing as any,
        PostProcessing.serializeBinaryToWriter
      );
    }
    if (_instance.logging) {
      _writer.writeMessage(
        8,
        _instance.logging as any,
        Logging.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _description?: S2TDescription;
  private _active: boolean;
  private _inference?: S2TInference;
  private _streamingServer?: StreamingServer;
  private _voiceActivityDetection?: VoiceActivityDetection;
  private _postProcessing?: PostProcessing;
  private _logging?: Logging;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<Speech2TextConfig.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.description = _value.description
      ? new S2TDescription(_value.description)
      : undefined;
    this.active = _value.active;
    this.inference = _value.inference
      ? new S2TInference(_value.inference)
      : undefined;
    this.streamingServer = _value.streamingServer
      ? new StreamingServer(_value.streamingServer)
      : undefined;
    this.voiceActivityDetection = _value.voiceActivityDetection
      ? new VoiceActivityDetection(_value.voiceActivityDetection)
      : undefined;
    this.postProcessing = _value.postProcessing
      ? new PostProcessing(_value.postProcessing)
      : undefined;
    this.logging = _value.logging ? new Logging(_value.logging) : undefined;
    Speech2TextConfig.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get description(): S2TDescription | undefined {
    return this._description;
  }
  set description(value: S2TDescription | undefined) {
    this._description = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get inference(): S2TInference | undefined {
    return this._inference;
  }
  set inference(value: S2TInference | undefined) {
    this._inference = value;
  }
  get streamingServer(): StreamingServer | undefined {
    return this._streamingServer;
  }
  set streamingServer(value: StreamingServer | undefined) {
    this._streamingServer = value;
  }
  get voiceActivityDetection(): VoiceActivityDetection | undefined {
    return this._voiceActivityDetection;
  }
  set voiceActivityDetection(value: VoiceActivityDetection | undefined) {
    this._voiceActivityDetection = value;
  }
  get postProcessing(): PostProcessing | undefined {
    return this._postProcessing;
  }
  set postProcessing(value: PostProcessing | undefined) {
    this._postProcessing = value;
  }
  get logging(): Logging | undefined {
    return this._logging;
  }
  set logging(value: Logging | undefined) {
    this._logging = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Speech2TextConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Speech2TextConfig.AsObject {
    return {
      id: this.id,
      description: this.description ? this.description.toObject() : undefined,
      active: this.active,
      inference: this.inference ? this.inference.toObject() : undefined,
      streamingServer: this.streamingServer
        ? this.streamingServer.toObject()
        : undefined,
      voiceActivityDetection: this.voiceActivityDetection
        ? this.voiceActivityDetection.toObject()
        : undefined,
      postProcessing: this.postProcessing
        ? this.postProcessing.toObject()
        : undefined,
      logging: this.logging ? this.logging.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Speech2TextConfig.AsProtobufJSON {
    return {
      id: this.id,
      description: this.description
        ? this.description.toProtobufJSON(options)
        : null,
      active: this.active,
      inference: this.inference ? this.inference.toProtobufJSON(options) : null,
      streamingServer: this.streamingServer
        ? this.streamingServer.toProtobufJSON(options)
        : null,
      voiceActivityDetection: this.voiceActivityDetection
        ? this.voiceActivityDetection.toProtobufJSON(options)
        : null,
      postProcessing: this.postProcessing
        ? this.postProcessing.toProtobufJSON(options)
        : null,
      logging: this.logging ? this.logging.toProtobufJSON(options) : null
    };
  }
}
export module Speech2TextConfig {
  /**
   * Standard JavaScript object representation for Speech2TextConfig
   */
  export interface AsObject {
    id: string;
    description?: S2TDescription.AsObject;
    active: boolean;
    inference?: S2TInference.AsObject;
    streamingServer?: StreamingServer.AsObject;
    voiceActivityDetection?: VoiceActivityDetection.AsObject;
    postProcessing?: PostProcessing.AsObject;
    logging?: Logging.AsObject;
  }

  /**
   * Protobuf JSON representation for Speech2TextConfig
   */
  export interface AsProtobufJSON {
    id: string;
    description: S2TDescription.AsProtobufJSON | null;
    active: boolean;
    inference: S2TInference.AsProtobufJSON | null;
    streamingServer: StreamingServer.AsProtobufJSON | null;
    voiceActivityDetection: VoiceActivityDetection.AsProtobufJSON | null;
    postProcessing: PostProcessing.AsProtobufJSON | null;
    logging: Logging.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.S2TDescription
 */
export class S2TDescription implements GrpcMessage {
  static id = 'ondewo.s2t.S2TDescription';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2TDescription();
    S2TDescription.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2TDescription) {
    _instance.language = _instance.language || '';
    _instance.pipelineOwner = _instance.pipelineOwner || '';
    _instance.domain = _instance.domain || '';
    _instance.comments = _instance.comments || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2TDescription,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          _instance.pipelineOwner = _reader.readString();
          break;
        case 3:
          _instance.domain = _reader.readString();
          break;
        case 4:
          _instance.comments = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2TDescription.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2TDescription,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.pipelineOwner) {
      _writer.writeString(2, _instance.pipelineOwner);
    }
    if (_instance.domain) {
      _writer.writeString(3, _instance.domain);
    }
    if (_instance.comments) {
      _writer.writeString(4, _instance.comments);
    }
  }

  private _language: string;
  private _pipelineOwner: string;
  private _domain: string;
  private _comments: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2TDescription to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2TDescription.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.pipelineOwner = _value.pipelineOwner;
    this.domain = _value.domain;
    this.comments = _value.comments;
    S2TDescription.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get pipelineOwner(): string {
    return this._pipelineOwner;
  }
  set pipelineOwner(value: string) {
    this._pipelineOwner = value;
  }
  get domain(): string {
    return this._domain;
  }
  set domain(value: string) {
    this._domain = value;
  }
  get comments(): string {
    return this._comments;
  }
  set comments(value: string) {
    this._comments = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2TDescription.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2TDescription.AsObject {
    return {
      language: this.language,
      pipelineOwner: this.pipelineOwner,
      domain: this.domain,
      comments: this.comments
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2TDescription.AsProtobufJSON {
    return {
      language: this.language,
      pipelineOwner: this.pipelineOwner,
      domain: this.domain,
      comments: this.comments
    };
  }
}
export module S2TDescription {
  /**
   * Standard JavaScript object representation for S2TDescription
   */
  export interface AsObject {
    language: string;
    pipelineOwner: string;
    domain: string;
    comments: string;
  }

  /**
   * Protobuf JSON representation for S2TDescription
   */
  export interface AsProtobufJSON {
    language: string;
    pipelineOwner: string;
    domain: string;
    comments: string;
  }
}

/**
 * Message implementation for ondewo.s2t.S2TInference
 */
export class S2TInference implements GrpcMessage {
  static id = 'ondewo.s2t.S2TInference';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2TInference();
    S2TInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2TInference) {
    _instance.acousticModels = _instance.acousticModels || undefined;
    _instance.languageModels = _instance.languageModels || undefined;
    _instance.inferenceBackend = _instance.inferenceBackend || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2TInference,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.acousticModels = new AcousticModels();
          _reader.readMessage(
            _instance.acousticModels,
            AcousticModels.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.languageModels = new LanguageModels();
          _reader.readMessage(
            _instance.languageModels,
            LanguageModels.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.inferenceBackend = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    S2TInference.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2TInference,
    _writer: BinaryWriter
  ) {
    if (_instance.acousticModels) {
      _writer.writeMessage(
        1,
        _instance.acousticModels as any,
        AcousticModels.serializeBinaryToWriter
      );
    }
    if (_instance.languageModels) {
      _writer.writeMessage(
        2,
        _instance.languageModels as any,
        LanguageModels.serializeBinaryToWriter
      );
    }
    if (_instance.inferenceBackend) {
      _writer.writeEnum(3, _instance.inferenceBackend);
    }
  }

  private _acousticModels?: AcousticModels;
  private _languageModels?: LanguageModels;
  private _inferenceBackend: InferenceBackend;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2TInference to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2TInference.AsObject>) {
    _value = _value || {};
    this.acousticModels = _value.acousticModels
      ? new AcousticModels(_value.acousticModels)
      : undefined;
    this.languageModels = _value.languageModels
      ? new LanguageModels(_value.languageModels)
      : undefined;
    this.inferenceBackend = _value.inferenceBackend;
    S2TInference.refineValues(this);
  }
  get acousticModels(): AcousticModels | undefined {
    return this._acousticModels;
  }
  set acousticModels(value: AcousticModels | undefined) {
    this._acousticModels = value;
  }
  get languageModels(): LanguageModels | undefined {
    return this._languageModels;
  }
  set languageModels(value: LanguageModels | undefined) {
    this._languageModels = value;
  }
  get inferenceBackend(): InferenceBackend {
    return this._inferenceBackend;
  }
  set inferenceBackend(value: InferenceBackend) {
    this._inferenceBackend = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2TInference.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2TInference.AsObject {
    return {
      acousticModels: this.acousticModels
        ? this.acousticModels.toObject()
        : undefined,
      languageModels: this.languageModels
        ? this.languageModels.toObject()
        : undefined,
      inferenceBackend: this.inferenceBackend
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2TInference.AsProtobufJSON {
    return {
      acousticModels: this.acousticModels
        ? this.acousticModels.toProtobufJSON(options)
        : null,
      languageModels: this.languageModels
        ? this.languageModels.toProtobufJSON(options)
        : null,
      inferenceBackend:
        InferenceBackend[
          this.inferenceBackend === null || this.inferenceBackend === undefined
            ? 0
            : this.inferenceBackend
        ]
    };
  }
}
export module S2TInference {
  /**
   * Standard JavaScript object representation for S2TInference
   */
  export interface AsObject {
    acousticModels?: AcousticModels.AsObject;
    languageModels?: LanguageModels.AsObject;
    inferenceBackend: InferenceBackend;
  }

  /**
   * Protobuf JSON representation for S2TInference
   */
  export interface AsProtobufJSON {
    acousticModels: AcousticModels.AsProtobufJSON | null;
    languageModels: LanguageModels.AsProtobufJSON | null;
    inferenceBackend: string;
  }
}

/**
 * Message implementation for ondewo.s2t.AcousticModels
 */
export class AcousticModels implements GrpcMessage {
  static id = 'ondewo.s2t.AcousticModels';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AcousticModels();
    AcousticModels.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AcousticModels) {
    _instance.type = _instance.type || '';
    _instance.wav2vec = _instance.wav2vec || undefined;
    _instance.wav2vecTriton = _instance.wav2vecTriton || undefined;
    _instance.whisper = _instance.whisper || undefined;
    _instance.whisperTriton = _instance.whisperTriton || undefined;
    _instance.s2tCloudServiceAmazon =
      _instance.s2tCloudServiceAmazon || undefined;
    _instance.s2tCloudServiceDeepgram =
      _instance.s2tCloudServiceDeepgram || undefined;
    _instance.s2tCloudServiceGoogle =
      _instance.s2tCloudServiceGoogle || undefined;
    _instance.s2tCloudServiceMicrosoft =
      _instance.s2tCloudServiceMicrosoft || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AcousticModels,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.wav2vec = new Wav2Vec();
          _reader.readMessage(
            _instance.wav2vec,
            Wav2Vec.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.wav2vecTriton = new Wav2VecTriton();
          _reader.readMessage(
            _instance.wav2vecTriton,
            Wav2VecTriton.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.whisper = new Whisper();
          _reader.readMessage(
            _instance.whisper,
            Whisper.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.whisperTriton = new WhisperTriton();
          _reader.readMessage(
            _instance.whisperTriton,
            WhisperTriton.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.s2tCloudServiceAmazon = new S2tCloudServiceAmazon();
          _reader.readMessage(
            _instance.s2tCloudServiceAmazon,
            S2tCloudServiceAmazon.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.s2tCloudServiceDeepgram = new S2tCloudServiceDeepgram();
          _reader.readMessage(
            _instance.s2tCloudServiceDeepgram,
            S2tCloudServiceDeepgram.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.s2tCloudServiceGoogle = new S2tCloudServiceGoogle();
          _reader.readMessage(
            _instance.s2tCloudServiceGoogle,
            S2tCloudServiceGoogle.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.s2tCloudServiceMicrosoft = new S2tCloudServiceMicrosoft();
          _reader.readMessage(
            _instance.s2tCloudServiceMicrosoft,
            S2tCloudServiceMicrosoft.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AcousticModels.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AcousticModels,
    _writer: BinaryWriter
  ) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.wav2vec) {
      _writer.writeMessage(
        2,
        _instance.wav2vec as any,
        Wav2Vec.serializeBinaryToWriter
      );
    }
    if (_instance.wav2vecTriton) {
      _writer.writeMessage(
        3,
        _instance.wav2vecTriton as any,
        Wav2VecTriton.serializeBinaryToWriter
      );
    }
    if (_instance.whisper) {
      _writer.writeMessage(
        4,
        _instance.whisper as any,
        Whisper.serializeBinaryToWriter
      );
    }
    if (_instance.whisperTriton) {
      _writer.writeMessage(
        5,
        _instance.whisperTriton as any,
        WhisperTriton.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudServiceAmazon) {
      _writer.writeMessage(
        6,
        _instance.s2tCloudServiceAmazon as any,
        S2tCloudServiceAmazon.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudServiceDeepgram) {
      _writer.writeMessage(
        7,
        _instance.s2tCloudServiceDeepgram as any,
        S2tCloudServiceDeepgram.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudServiceGoogle) {
      _writer.writeMessage(
        8,
        _instance.s2tCloudServiceGoogle as any,
        S2tCloudServiceGoogle.serializeBinaryToWriter
      );
    }
    if (_instance.s2tCloudServiceMicrosoft) {
      _writer.writeMessage(
        9,
        _instance.s2tCloudServiceMicrosoft as any,
        S2tCloudServiceMicrosoft.serializeBinaryToWriter
      );
    }
  }

  private _type: string;
  private _wav2vec?: Wav2Vec;
  private _wav2vecTriton?: Wav2VecTriton;
  private _whisper?: Whisper;
  private _whisperTriton?: WhisperTriton;
  private _s2tCloudServiceAmazon?: S2tCloudServiceAmazon;
  private _s2tCloudServiceDeepgram?: S2tCloudServiceDeepgram;
  private _s2tCloudServiceGoogle?: S2tCloudServiceGoogle;
  private _s2tCloudServiceMicrosoft?: S2tCloudServiceMicrosoft;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AcousticModels to deeply clone from
   */
  constructor(_value?: RecursivePartial<AcousticModels.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : undefined;
    this.wav2vecTriton = _value.wav2vecTriton
      ? new Wav2VecTriton(_value.wav2vecTriton)
      : undefined;
    this.whisper = _value.whisper ? new Whisper(_value.whisper) : undefined;
    this.whisperTriton = _value.whisperTriton
      ? new WhisperTriton(_value.whisperTriton)
      : undefined;
    this.s2tCloudServiceAmazon = _value.s2tCloudServiceAmazon
      ? new S2tCloudServiceAmazon(_value.s2tCloudServiceAmazon)
      : undefined;
    this.s2tCloudServiceDeepgram = _value.s2tCloudServiceDeepgram
      ? new S2tCloudServiceDeepgram(_value.s2tCloudServiceDeepgram)
      : undefined;
    this.s2tCloudServiceGoogle = _value.s2tCloudServiceGoogle
      ? new S2tCloudServiceGoogle(_value.s2tCloudServiceGoogle)
      : undefined;
    this.s2tCloudServiceMicrosoft = _value.s2tCloudServiceMicrosoft
      ? new S2tCloudServiceMicrosoft(_value.s2tCloudServiceMicrosoft)
      : undefined;
    AcousticModels.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get wav2vec(): Wav2Vec | undefined {
    return this._wav2vec;
  }
  set wav2vec(value: Wav2Vec | undefined) {
    this._wav2vec = value;
  }
  get wav2vecTriton(): Wav2VecTriton | undefined {
    return this._wav2vecTriton;
  }
  set wav2vecTriton(value: Wav2VecTriton | undefined) {
    this._wav2vecTriton = value;
  }
  get whisper(): Whisper | undefined {
    return this._whisper;
  }
  set whisper(value: Whisper | undefined) {
    this._whisper = value;
  }
  get whisperTriton(): WhisperTriton | undefined {
    return this._whisperTriton;
  }
  set whisperTriton(value: WhisperTriton | undefined) {
    this._whisperTriton = value;
  }
  get s2tCloudServiceAmazon(): S2tCloudServiceAmazon | undefined {
    return this._s2tCloudServiceAmazon;
  }
  set s2tCloudServiceAmazon(value: S2tCloudServiceAmazon | undefined) {
    this._s2tCloudServiceAmazon = value;
  }
  get s2tCloudServiceDeepgram(): S2tCloudServiceDeepgram | undefined {
    return this._s2tCloudServiceDeepgram;
  }
  set s2tCloudServiceDeepgram(value: S2tCloudServiceDeepgram | undefined) {
    this._s2tCloudServiceDeepgram = value;
  }
  get s2tCloudServiceGoogle(): S2tCloudServiceGoogle | undefined {
    return this._s2tCloudServiceGoogle;
  }
  set s2tCloudServiceGoogle(value: S2tCloudServiceGoogle | undefined) {
    this._s2tCloudServiceGoogle = value;
  }
  get s2tCloudServiceMicrosoft(): S2tCloudServiceMicrosoft | undefined {
    return this._s2tCloudServiceMicrosoft;
  }
  set s2tCloudServiceMicrosoft(value: S2tCloudServiceMicrosoft | undefined) {
    this._s2tCloudServiceMicrosoft = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AcousticModels.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AcousticModels.AsObject {
    return {
      type: this.type,
      wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined,
      wav2vecTriton: this.wav2vecTriton
        ? this.wav2vecTriton.toObject()
        : undefined,
      whisper: this.whisper ? this.whisper.toObject() : undefined,
      whisperTriton: this.whisperTriton
        ? this.whisperTriton.toObject()
        : undefined,
      s2tCloudServiceAmazon: this.s2tCloudServiceAmazon
        ? this.s2tCloudServiceAmazon.toObject()
        : undefined,
      s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram
        ? this.s2tCloudServiceDeepgram.toObject()
        : undefined,
      s2tCloudServiceGoogle: this.s2tCloudServiceGoogle
        ? this.s2tCloudServiceGoogle.toObject()
        : undefined,
      s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft
        ? this.s2tCloudServiceMicrosoft.toObject()
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
  ): AcousticModels.AsProtobufJSON {
    return {
      type: this.type,
      wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null,
      wav2vecTriton: this.wav2vecTriton
        ? this.wav2vecTriton.toProtobufJSON(options)
        : null,
      whisper: this.whisper ? this.whisper.toProtobufJSON(options) : null,
      whisperTriton: this.whisperTriton
        ? this.whisperTriton.toProtobufJSON(options)
        : null,
      s2tCloudServiceAmazon: this.s2tCloudServiceAmazon
        ? this.s2tCloudServiceAmazon.toProtobufJSON(options)
        : null,
      s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram
        ? this.s2tCloudServiceDeepgram.toProtobufJSON(options)
        : null,
      s2tCloudServiceGoogle: this.s2tCloudServiceGoogle
        ? this.s2tCloudServiceGoogle.toProtobufJSON(options)
        : null,
      s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft
        ? this.s2tCloudServiceMicrosoft.toProtobufJSON(options)
        : null
    };
  }
}
export module AcousticModels {
  /**
   * Standard JavaScript object representation for AcousticModels
   */
  export interface AsObject {
    type: string;
    wav2vec?: Wav2Vec.AsObject;
    wav2vecTriton?: Wav2VecTriton.AsObject;
    whisper?: Whisper.AsObject;
    whisperTriton?: WhisperTriton.AsObject;
    s2tCloudServiceAmazon?: S2tCloudServiceAmazon.AsObject;
    s2tCloudServiceDeepgram?: S2tCloudServiceDeepgram.AsObject;
    s2tCloudServiceGoogle?: S2tCloudServiceGoogle.AsObject;
    s2tCloudServiceMicrosoft?: S2tCloudServiceMicrosoft.AsObject;
  }

  /**
   * Protobuf JSON representation for AcousticModels
   */
  export interface AsProtobufJSON {
    type: string;
    wav2vec: Wav2Vec.AsProtobufJSON | null;
    wav2vecTriton: Wav2VecTriton.AsProtobufJSON | null;
    whisper: Whisper.AsProtobufJSON | null;
    whisperTriton: WhisperTriton.AsProtobufJSON | null;
    s2tCloudServiceAmazon: S2tCloudServiceAmazon.AsProtobufJSON | null;
    s2tCloudServiceDeepgram: S2tCloudServiceDeepgram.AsProtobufJSON | null;
    s2tCloudServiceGoogle: S2tCloudServiceGoogle.AsProtobufJSON | null;
    s2tCloudServiceMicrosoft: S2tCloudServiceMicrosoft.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudServiceAmazon
 */
export class S2tCloudServiceAmazon implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudServiceAmazon';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudServiceAmazon();
    S2tCloudServiceAmazon.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudServiceAmazon) {
    _instance.language = _instance.language || '';
    _instance.streamingAvailable = _instance.streamingAvailable || false;
    _instance.enablePartialResultsStabilization =
      _instance.enablePartialResultsStabilization || false;
    _instance.partialResultsStability = _instance.partialResultsStability || '';
    _instance.languageModelName = _instance.languageModelName || '';
    _instance.vocabularyName = _instance.vocabularyName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudServiceAmazon,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          _instance.streamingAvailable = _reader.readBool();
          break;
        case 3:
          _instance.enablePartialResultsStabilization = _reader.readBool();
          break;
        case 4:
          _instance.partialResultsStability = _reader.readString();
          break;
        case 5:
          _instance.languageModelName = _reader.readString();
          break;
        case 6:
          _instance.vocabularyName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudServiceAmazon.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudServiceAmazon,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.streamingAvailable) {
      _writer.writeBool(2, _instance.streamingAvailable);
    }
    if (_instance.enablePartialResultsStabilization) {
      _writer.writeBool(3, _instance.enablePartialResultsStabilization);
    }
    if (_instance.partialResultsStability) {
      _writer.writeString(4, _instance.partialResultsStability);
    }
    if (_instance.languageModelName) {
      _writer.writeString(5, _instance.languageModelName);
    }
    if (_instance.vocabularyName) {
      _writer.writeString(6, _instance.vocabularyName);
    }
  }

  private _language: string;
  private _streamingAvailable: boolean;
  private _enablePartialResultsStabilization: boolean;
  private _partialResultsStability: string;
  private _languageModelName: string;
  private _vocabularyName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudServiceAmazon to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tCloudServiceAmazon.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.streamingAvailable = _value.streamingAvailable;
    this.enablePartialResultsStabilization =
      _value.enablePartialResultsStabilization;
    this.partialResultsStability = _value.partialResultsStability;
    this.languageModelName = _value.languageModelName;
    this.vocabularyName = _value.vocabularyName;
    S2tCloudServiceAmazon.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get streamingAvailable(): boolean {
    return this._streamingAvailable;
  }
  set streamingAvailable(value: boolean) {
    this._streamingAvailable = value;
  }
  get enablePartialResultsStabilization(): boolean {
    return this._enablePartialResultsStabilization;
  }
  set enablePartialResultsStabilization(value: boolean) {
    this._enablePartialResultsStabilization = value;
  }
  get partialResultsStability(): string {
    return this._partialResultsStability;
  }
  set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }
  get vocabularyName(): string {
    return this._vocabularyName;
  }
  set vocabularyName(value: string) {
    this._vocabularyName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudServiceAmazon.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudServiceAmazon.AsObject {
    return {
      language: this.language,
      streamingAvailable: this.streamingAvailable,
      enablePartialResultsStabilization: this.enablePartialResultsStabilization,
      partialResultsStability: this.partialResultsStability,
      languageModelName: this.languageModelName,
      vocabularyName: this.vocabularyName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudServiceAmazon.AsProtobufJSON {
    return {
      language: this.language,
      streamingAvailable: this.streamingAvailable,
      enablePartialResultsStabilization: this.enablePartialResultsStabilization,
      partialResultsStability: this.partialResultsStability,
      languageModelName: this.languageModelName,
      vocabularyName: this.vocabularyName
    };
  }
}
export module S2tCloudServiceAmazon {
  /**
   * Standard JavaScript object representation for S2tCloudServiceAmazon
   */
  export interface AsObject {
    language: string;
    streamingAvailable: boolean;
    enablePartialResultsStabilization: boolean;
    partialResultsStability: string;
    languageModelName: string;
    vocabularyName: string;
  }

  /**
   * Protobuf JSON representation for S2tCloudServiceAmazon
   */
  export interface AsProtobufJSON {
    language: string;
    streamingAvailable: boolean;
    enablePartialResultsStabilization: boolean;
    partialResultsStability: string;
    languageModelName: string;
    vocabularyName: string;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudServiceDeepgram
 */
export class S2tCloudServiceDeepgram implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudServiceDeepgram';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudServiceDeepgram();
    S2tCloudServiceDeepgram.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudServiceDeepgram) {
    _instance.modelName = _instance.modelName || '';
    _instance.language = _instance.language || '';
    _instance.punctuate = _instance.punctuate || false;
    _instance.smartFormat = _instance.smartFormat || false;
    _instance.numerals = _instance.numerals || false;
    _instance.measurements = _instance.measurements || false;
    _instance.dictation = _instance.dictation || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudServiceDeepgram,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelName = _reader.readString();
          break;
        case 2:
          _instance.language = _reader.readString();
          break;
        case 3:
          _instance.punctuate = _reader.readBool();
          break;
        case 4:
          _instance.smartFormat = _reader.readBool();
          break;
        case 5:
          _instance.numerals = _reader.readBool();
          break;
        case 6:
          _instance.measurements = _reader.readBool();
          break;
        case 7:
          _instance.dictation = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudServiceDeepgram.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudServiceDeepgram,
    _writer: BinaryWriter
  ) {
    if (_instance.modelName) {
      _writer.writeString(1, _instance.modelName);
    }
    if (_instance.language) {
      _writer.writeString(2, _instance.language);
    }
    if (_instance.punctuate) {
      _writer.writeBool(3, _instance.punctuate);
    }
    if (_instance.smartFormat) {
      _writer.writeBool(4, _instance.smartFormat);
    }
    if (_instance.numerals) {
      _writer.writeBool(5, _instance.numerals);
    }
    if (_instance.measurements) {
      _writer.writeBool(6, _instance.measurements);
    }
    if (_instance.dictation) {
      _writer.writeBool(7, _instance.dictation);
    }
  }

  private _modelName: string;
  private _language: string;
  private _punctuate: boolean;
  private _smartFormat: boolean;
  private _numerals: boolean;
  private _measurements: boolean;
  private _dictation: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudServiceDeepgram to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tCloudServiceDeepgram.AsObject>) {
    _value = _value || {};
    this.modelName = _value.modelName;
    this.language = _value.language;
    this.punctuate = _value.punctuate;
    this.smartFormat = _value.smartFormat;
    this.numerals = _value.numerals;
    this.measurements = _value.measurements;
    this.dictation = _value.dictation;
    S2tCloudServiceDeepgram.refineValues(this);
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get punctuate(): boolean {
    return this._punctuate;
  }
  set punctuate(value: boolean) {
    this._punctuate = value;
  }
  get smartFormat(): boolean {
    return this._smartFormat;
  }
  set smartFormat(value: boolean) {
    this._smartFormat = value;
  }
  get numerals(): boolean {
    return this._numerals;
  }
  set numerals(value: boolean) {
    this._numerals = value;
  }
  get measurements(): boolean {
    return this._measurements;
  }
  set measurements(value: boolean) {
    this._measurements = value;
  }
  get dictation(): boolean {
    return this._dictation;
  }
  set dictation(value: boolean) {
    this._dictation = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudServiceDeepgram.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudServiceDeepgram.AsObject {
    return {
      modelName: this.modelName,
      language: this.language,
      punctuate: this.punctuate,
      smartFormat: this.smartFormat,
      numerals: this.numerals,
      measurements: this.measurements,
      dictation: this.dictation
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudServiceDeepgram.AsProtobufJSON {
    return {
      modelName: this.modelName,
      language: this.language,
      punctuate: this.punctuate,
      smartFormat: this.smartFormat,
      numerals: this.numerals,
      measurements: this.measurements,
      dictation: this.dictation
    };
  }
}
export module S2tCloudServiceDeepgram {
  /**
   * Standard JavaScript object representation for S2tCloudServiceDeepgram
   */
  export interface AsObject {
    modelName: string;
    language: string;
    punctuate: boolean;
    smartFormat: boolean;
    numerals: boolean;
    measurements: boolean;
    dictation: boolean;
  }

  /**
   * Protobuf JSON representation for S2tCloudServiceDeepgram
   */
  export interface AsProtobufJSON {
    modelName: string;
    language: string;
    punctuate: boolean;
    smartFormat: boolean;
    numerals: boolean;
    measurements: boolean;
    dictation: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudServiceGoogle
 */
export class S2tCloudServiceGoogle implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudServiceGoogle';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudServiceGoogle();
    S2tCloudServiceGoogle.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudServiceGoogle) {
    _instance.modelName = _instance.modelName || '';
    _instance.language = _instance.language || '';
    _instance.enableAutomaticPunctuation =
      _instance.enableAutomaticPunctuation || false;
    _instance.enableWordTimeOffsets = _instance.enableWordTimeOffsets || false;
    _instance.enableWordConfidence = _instance.enableWordConfidence || false;
    _instance.transcriptNormalization =
      _instance.transcriptNormalization || false;
    _instance.maxAlternatives = _instance.maxAlternatives || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudServiceGoogle,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelName = _reader.readString();
          break;
        case 2:
          _instance.language = _reader.readString();
          break;
        case 3:
          _instance.enableAutomaticPunctuation = _reader.readBool();
          break;
        case 4:
          _instance.enableWordTimeOffsets = _reader.readBool();
          break;
        case 5:
          _instance.enableWordConfidence = _reader.readBool();
          break;
        case 6:
          _instance.transcriptNormalization = _reader.readBool();
          break;
        case 7:
          _instance.maxAlternatives = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudServiceGoogle.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudServiceGoogle,
    _writer: BinaryWriter
  ) {
    if (_instance.modelName) {
      _writer.writeString(1, _instance.modelName);
    }
    if (_instance.language) {
      _writer.writeString(2, _instance.language);
    }
    if (_instance.enableAutomaticPunctuation) {
      _writer.writeBool(3, _instance.enableAutomaticPunctuation);
    }
    if (_instance.enableWordTimeOffsets) {
      _writer.writeBool(4, _instance.enableWordTimeOffsets);
    }
    if (_instance.enableWordConfidence) {
      _writer.writeBool(5, _instance.enableWordConfidence);
    }
    if (_instance.transcriptNormalization) {
      _writer.writeBool(6, _instance.transcriptNormalization);
    }
    if (_instance.maxAlternatives) {
      _writer.writeInt32(7, _instance.maxAlternatives);
    }
  }

  private _modelName: string;
  private _language: string;
  private _enableAutomaticPunctuation: boolean;
  private _enableWordTimeOffsets: boolean;
  private _enableWordConfidence: boolean;
  private _transcriptNormalization: boolean;
  private _maxAlternatives: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudServiceGoogle to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tCloudServiceGoogle.AsObject>) {
    _value = _value || {};
    this.modelName = _value.modelName;
    this.language = _value.language;
    this.enableAutomaticPunctuation = _value.enableAutomaticPunctuation;
    this.enableWordTimeOffsets = _value.enableWordTimeOffsets;
    this.enableWordConfidence = _value.enableWordConfidence;
    this.transcriptNormalization = _value.transcriptNormalization;
    this.maxAlternatives = _value.maxAlternatives;
    S2tCloudServiceGoogle.refineValues(this);
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get enableAutomaticPunctuation(): boolean {
    return this._enableAutomaticPunctuation;
  }
  set enableAutomaticPunctuation(value: boolean) {
    this._enableAutomaticPunctuation = value;
  }
  get enableWordTimeOffsets(): boolean {
    return this._enableWordTimeOffsets;
  }
  set enableWordTimeOffsets(value: boolean) {
    this._enableWordTimeOffsets = value;
  }
  get enableWordConfidence(): boolean {
    return this._enableWordConfidence;
  }
  set enableWordConfidence(value: boolean) {
    this._enableWordConfidence = value;
  }
  get transcriptNormalization(): boolean {
    return this._transcriptNormalization;
  }
  set transcriptNormalization(value: boolean) {
    this._transcriptNormalization = value;
  }
  get maxAlternatives(): number {
    return this._maxAlternatives;
  }
  set maxAlternatives(value: number) {
    this._maxAlternatives = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudServiceGoogle.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudServiceGoogle.AsObject {
    return {
      modelName: this.modelName,
      language: this.language,
      enableAutomaticPunctuation: this.enableAutomaticPunctuation,
      enableWordTimeOffsets: this.enableWordTimeOffsets,
      enableWordConfidence: this.enableWordConfidence,
      transcriptNormalization: this.transcriptNormalization,
      maxAlternatives: this.maxAlternatives
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudServiceGoogle.AsProtobufJSON {
    return {
      modelName: this.modelName,
      language: this.language,
      enableAutomaticPunctuation: this.enableAutomaticPunctuation,
      enableWordTimeOffsets: this.enableWordTimeOffsets,
      enableWordConfidence: this.enableWordConfidence,
      transcriptNormalization: this.transcriptNormalization,
      maxAlternatives: this.maxAlternatives
    };
  }
}
export module S2tCloudServiceGoogle {
  /**
   * Standard JavaScript object representation for S2tCloudServiceGoogle
   */
  export interface AsObject {
    modelName: string;
    language: string;
    enableAutomaticPunctuation: boolean;
    enableWordTimeOffsets: boolean;
    enableWordConfidence: boolean;
    transcriptNormalization: boolean;
    maxAlternatives: number;
  }

  /**
   * Protobuf JSON representation for S2tCloudServiceGoogle
   */
  export interface AsProtobufJSON {
    modelName: string;
    language: string;
    enableAutomaticPunctuation: boolean;
    enableWordTimeOffsets: boolean;
    enableWordConfidence: boolean;
    transcriptNormalization: boolean;
    maxAlternatives: number;
  }
}

/**
 * Message implementation for ondewo.s2t.S2tCloudServiceMicrosoft
 */
export class S2tCloudServiceMicrosoft implements GrpcMessage {
  static id = 'ondewo.s2t.S2tCloudServiceMicrosoft';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tCloudServiceMicrosoft();
    S2tCloudServiceMicrosoft.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tCloudServiceMicrosoft) {
    _instance.language = _instance.language || '';
    _instance.useFastTranscriptionApi =
      _instance.useFastTranscriptionApi || false;
    _instance.useDetailedOutputFormat =
      _instance.useDetailedOutputFormat || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tCloudServiceMicrosoft,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          _instance.useFastTranscriptionApi = _reader.readBool();
          break;
        case 3:
          _instance.useDetailedOutputFormat = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    S2tCloudServiceMicrosoft.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tCloudServiceMicrosoft,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.useFastTranscriptionApi) {
      _writer.writeBool(2, _instance.useFastTranscriptionApi);
    }
    if (_instance.useDetailedOutputFormat) {
      _writer.writeBool(3, _instance.useDetailedOutputFormat);
    }
  }

  private _language: string;
  private _useFastTranscriptionApi: boolean;
  private _useDetailedOutputFormat: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tCloudServiceMicrosoft to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tCloudServiceMicrosoft.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.useFastTranscriptionApi = _value.useFastTranscriptionApi;
    this.useDetailedOutputFormat = _value.useDetailedOutputFormat;
    S2tCloudServiceMicrosoft.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get useFastTranscriptionApi(): boolean {
    return this._useFastTranscriptionApi;
  }
  set useFastTranscriptionApi(value: boolean) {
    this._useFastTranscriptionApi = value;
  }
  get useDetailedOutputFormat(): boolean {
    return this._useDetailedOutputFormat;
  }
  set useDetailedOutputFormat(value: boolean) {
    this._useDetailedOutputFormat = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tCloudServiceMicrosoft.AsObject {
    return {
      language: this.language,
      useFastTranscriptionApi: this.useFastTranscriptionApi,
      useDetailedOutputFormat: this.useDetailedOutputFormat
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2tCloudServiceMicrosoft.AsProtobufJSON {
    return {
      language: this.language,
      useFastTranscriptionApi: this.useFastTranscriptionApi,
      useDetailedOutputFormat: this.useDetailedOutputFormat
    };
  }
}
export module S2tCloudServiceMicrosoft {
  /**
   * Standard JavaScript object representation for S2tCloudServiceMicrosoft
   */
  export interface AsObject {
    language: string;
    useFastTranscriptionApi: boolean;
    useDetailedOutputFormat: boolean;
  }

  /**
   * Protobuf JSON representation for S2tCloudServiceMicrosoft
   */
  export interface AsProtobufJSON {
    language: string;
    useFastTranscriptionApi: boolean;
    useDetailedOutputFormat: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.Whisper
 */
export class Whisper implements GrpcMessage {
  static id = 'ondewo.s2t.Whisper';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Whisper();
    Whisper.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Whisper) {
    _instance.modelPath = _instance.modelPath || '';
    _instance.useGpu = _instance.useGpu || false;
    _instance.language = _instance.language || '';
    _instance.task = _instance.task || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Whisper,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelPath = _reader.readString();
          break;
        case 2:
          _instance.useGpu = _reader.readBool();
          break;
        case 3:
          _instance.language = _reader.readString();
          break;
        case 4:
          _instance.task = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Whisper.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Whisper, _writer: BinaryWriter) {
    if (_instance.modelPath) {
      _writer.writeString(1, _instance.modelPath);
    }
    if (_instance.useGpu) {
      _writer.writeBool(2, _instance.useGpu);
    }
    if (_instance.language) {
      _writer.writeString(3, _instance.language);
    }
    if (_instance.task) {
      _writer.writeString(4, _instance.task);
    }
  }

  private _modelPath: string;
  private _useGpu: boolean;
  private _language: string;
  private _task: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Whisper to deeply clone from
   */
  constructor(_value?: RecursivePartial<Whisper.AsObject>) {
    _value = _value || {};
    this.modelPath = _value.modelPath;
    this.useGpu = _value.useGpu;
    this.language = _value.language;
    this.task = _value.task;
    Whisper.refineValues(this);
  }
  get modelPath(): string {
    return this._modelPath;
  }
  set modelPath(value: string) {
    this._modelPath = value;
  }
  get useGpu(): boolean {
    return this._useGpu;
  }
  set useGpu(value: boolean) {
    this._useGpu = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get task(): string {
    return this._task;
  }
  set task(value: string) {
    this._task = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Whisper.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Whisper.AsObject {
    return {
      modelPath: this.modelPath,
      useGpu: this.useGpu,
      language: this.language,
      task: this.task
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Whisper.AsProtobufJSON {
    return {
      modelPath: this.modelPath,
      useGpu: this.useGpu,
      language: this.language,
      task: this.task
    };
  }
}
export module Whisper {
  /**
   * Standard JavaScript object representation for Whisper
   */
  export interface AsObject {
    modelPath: string;
    useGpu: boolean;
    language: string;
    task: string;
  }

  /**
   * Protobuf JSON representation for Whisper
   */
  export interface AsProtobufJSON {
    modelPath: string;
    useGpu: boolean;
    language: string;
    task: string;
  }
}

/**
 * Message implementation for ondewo.s2t.WhisperTriton
 */
export class WhisperTriton implements GrpcMessage {
  static id = 'ondewo.s2t.WhisperTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WhisperTriton();
    WhisperTriton.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WhisperTriton) {
    _instance.processorPath = _instance.processorPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonModelVersion = _instance.tritonModelVersion || '';
    _instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
    _instance.language = _instance.language || '';
    _instance.task = _instance.task || '';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WhisperTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.processorPath = _reader.readString();
          break;
        case 2:
          _instance.tritonModelName = _reader.readString();
          break;
        case 3:
          _instance.tritonModelVersion = _reader.readString();
          break;
        case 4:
          _instance.checkStatusTimeout = _reader.readInt64String();
          break;
        case 5:
          _instance.language = _reader.readString();
          break;
        case 6:
          _instance.task = _reader.readString();
          break;
        case 7:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 8:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    WhisperTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WhisperTriton,
    _writer: BinaryWriter
  ) {
    if (_instance.processorPath) {
      _writer.writeString(1, _instance.processorPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(2, _instance.tritonModelName);
    }
    if (_instance.tritonModelVersion) {
      _writer.writeString(3, _instance.tritonModelVersion);
    }
    if (_instance.checkStatusTimeout) {
      _writer.writeInt64String(4, _instance.checkStatusTimeout);
    }
    if (_instance.language) {
      _writer.writeString(5, _instance.language);
    }
    if (_instance.task) {
      _writer.writeString(6, _instance.task);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(7, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(8, _instance.tritonServerPort);
    }
  }

  private _processorPath: string;
  private _tritonModelName: string;
  private _tritonModelVersion: string;
  private _checkStatusTimeout: string;
  private _language: string;
  private _task: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WhisperTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<WhisperTriton.AsObject>) {
    _value = _value || {};
    this.processorPath = _value.processorPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonModelVersion = _value.tritonModelVersion;
    this.checkStatusTimeout = _value.checkStatusTimeout;
    this.language = _value.language;
    this.task = _value.task;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    WhisperTriton.refineValues(this);
  }
  get processorPath(): string {
    return this._processorPath;
  }
  set processorPath(value: string) {
    this._processorPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonModelVersion(): string {
    return this._tritonModelVersion;
  }
  set tritonModelVersion(value: string) {
    this._tritonModelVersion = value;
  }
  get checkStatusTimeout(): string {
    return this._checkStatusTimeout;
  }
  set checkStatusTimeout(value: string) {
    this._checkStatusTimeout = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get task(): string {
    return this._task;
  }
  set task(value: string) {
    this._task = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WhisperTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WhisperTriton.AsObject {
    return {
      processorPath: this.processorPath,
      tritonModelName: this.tritonModelName,
      tritonModelVersion: this.tritonModelVersion,
      checkStatusTimeout: this.checkStatusTimeout,
      language: this.language,
      task: this.task,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WhisperTriton.AsProtobufJSON {
    return {
      processorPath: this.processorPath,
      tritonModelName: this.tritonModelName,
      tritonModelVersion: this.tritonModelVersion,
      checkStatusTimeout: this.checkStatusTimeout,
      language: this.language,
      task: this.task,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module WhisperTriton {
  /**
   * Standard JavaScript object representation for WhisperTriton
   */
  export interface AsObject {
    processorPath: string;
    tritonModelName: string;
    tritonModelVersion: string;
    checkStatusTimeout: string;
    language: string;
    task: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }

  /**
   * Protobuf JSON representation for WhisperTriton
   */
  export interface AsProtobufJSON {
    processorPath: string;
    tritonModelName: string;
    tritonModelVersion: string;
    checkStatusTimeout: string;
    language: string;
    task: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }
}

/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
export class Wav2Vec implements GrpcMessage {
  static id = 'ondewo.s2t.Wav2Vec';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Wav2Vec();
    Wav2Vec.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Wav2Vec) {
    _instance.modelPath = _instance.modelPath || '';
    _instance.useGpu = _instance.useGpu || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Wav2Vec,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelPath = _reader.readString();
          break;
        case 2:
          _instance.useGpu = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    Wav2Vec.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Wav2Vec, _writer: BinaryWriter) {
    if (_instance.modelPath) {
      _writer.writeString(1, _instance.modelPath);
    }
    if (_instance.useGpu) {
      _writer.writeBool(2, _instance.useGpu);
    }
  }

  private _modelPath: string;
  private _useGpu: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Wav2Vec to deeply clone from
   */
  constructor(_value?: RecursivePartial<Wav2Vec.AsObject>) {
    _value = _value || {};
    this.modelPath = _value.modelPath;
    this.useGpu = _value.useGpu;
    Wav2Vec.refineValues(this);
  }
  get modelPath(): string {
    return this._modelPath;
  }
  set modelPath(value: string) {
    this._modelPath = value;
  }
  get useGpu(): boolean {
    return this._useGpu;
  }
  set useGpu(value: boolean) {
    this._useGpu = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Wav2Vec.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Wav2Vec.AsObject {
    return {
      modelPath: this.modelPath,
      useGpu: this.useGpu
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Wav2Vec.AsProtobufJSON {
    return {
      modelPath: this.modelPath,
      useGpu: this.useGpu
    };
  }
}
export module Wav2Vec {
  /**
   * Standard JavaScript object representation for Wav2Vec
   */
  export interface AsObject {
    modelPath: string;
    useGpu: boolean;
  }

  /**
   * Protobuf JSON representation for Wav2Vec
   */
  export interface AsProtobufJSON {
    modelPath: string;
    useGpu: boolean;
  }
}

/**
 * Message implementation for ondewo.s2t.Wav2VecTriton
 */
export class Wav2VecTriton implements GrpcMessage {
  static id = 'ondewo.s2t.Wav2VecTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Wav2VecTriton();
    Wav2VecTriton.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Wav2VecTriton) {
    _instance.processorPath = _instance.processorPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonModelVersion = _instance.tritonModelVersion || '';
    _instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Wav2VecTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.processorPath = _reader.readString();
          break;
        case 2:
          _instance.tritonModelName = _reader.readString();
          break;
        case 3:
          _instance.tritonModelVersion = _reader.readString();
          break;
        case 4:
          _instance.checkStatusTimeout = _reader.readInt64String();
          break;
        case 5:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 6:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    Wav2VecTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Wav2VecTriton,
    _writer: BinaryWriter
  ) {
    if (_instance.processorPath) {
      _writer.writeString(1, _instance.processorPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(2, _instance.tritonModelName);
    }
    if (_instance.tritonModelVersion) {
      _writer.writeString(3, _instance.tritonModelVersion);
    }
    if (_instance.checkStatusTimeout) {
      _writer.writeInt64String(4, _instance.checkStatusTimeout);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(5, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(6, _instance.tritonServerPort);
    }
  }

  private _processorPath: string;
  private _tritonModelName: string;
  private _tritonModelVersion: string;
  private _checkStatusTimeout: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Wav2VecTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<Wav2VecTriton.AsObject>) {
    _value = _value || {};
    this.processorPath = _value.processorPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonModelVersion = _value.tritonModelVersion;
    this.checkStatusTimeout = _value.checkStatusTimeout;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    Wav2VecTriton.refineValues(this);
  }
  get processorPath(): string {
    return this._processorPath;
  }
  set processorPath(value: string) {
    this._processorPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonModelVersion(): string {
    return this._tritonModelVersion;
  }
  set tritonModelVersion(value: string) {
    this._tritonModelVersion = value;
  }
  get checkStatusTimeout(): string {
    return this._checkStatusTimeout;
  }
  set checkStatusTimeout(value: string) {
    this._checkStatusTimeout = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Wav2VecTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Wav2VecTriton.AsObject {
    return {
      processorPath: this.processorPath,
      tritonModelName: this.tritonModelName,
      tritonModelVersion: this.tritonModelVersion,
      checkStatusTimeout: this.checkStatusTimeout,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Wav2VecTriton.AsProtobufJSON {
    return {
      processorPath: this.processorPath,
      tritonModelName: this.tritonModelName,
      tritonModelVersion: this.tritonModelVersion,
      checkStatusTimeout: this.checkStatusTimeout,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module Wav2VecTriton {
  /**
   * Standard JavaScript object representation for Wav2VecTriton
   */
  export interface AsObject {
    processorPath: string;
    tritonModelName: string;
    tritonModelVersion: string;
    checkStatusTimeout: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }

  /**
   * Protobuf JSON representation for Wav2VecTriton
   */
  export interface AsProtobufJSON {
    processorPath: string;
    tritonModelName: string;
    tritonModelVersion: string;
    checkStatusTimeout: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }
}

/**
 * Message implementation for ondewo.s2t.PtFiles
 */
export class PtFiles implements GrpcMessage {
  static id = 'ondewo.s2t.PtFiles';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PtFiles();
    PtFiles.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PtFiles) {
    _instance.path = _instance.path || '';
    _instance.step = _instance.step || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PtFiles,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.path = _reader.readString();
          break;
        case 2:
          _instance.step = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PtFiles.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PtFiles, _writer: BinaryWriter) {
    if (_instance.path) {
      _writer.writeString(1, _instance.path);
    }
    if (_instance.step) {
      _writer.writeString(2, _instance.step);
    }
  }

  private _path: string;
  private _step: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PtFiles to deeply clone from
   */
  constructor(_value?: RecursivePartial<PtFiles.AsObject>) {
    _value = _value || {};
    this.path = _value.path;
    this.step = _value.step;
    PtFiles.refineValues(this);
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }
  get step(): string {
    return this._step;
  }
  set step(value: string) {
    this._step = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PtFiles.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PtFiles.AsObject {
    return {
      path: this.path,
      step: this.step
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PtFiles.AsProtobufJSON {
    return {
      path: this.path,
      step: this.step
    };
  }
}
export module PtFiles {
  /**
   * Standard JavaScript object representation for PtFiles
   */
  export interface AsObject {
    path: string;
    step: string;
  }

  /**
   * Protobuf JSON representation for PtFiles
   */
  export interface AsProtobufJSON {
    path: string;
    step: string;
  }
}

/**
 * Message implementation for ondewo.s2t.CkptFile
 */
export class CkptFile implements GrpcMessage {
  static id = 'ondewo.s2t.CkptFile';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CkptFile();
    CkptFile.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CkptFile) {
    _instance.path = _instance.path || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CkptFile,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.path = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CkptFile.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CkptFile, _writer: BinaryWriter) {
    if (_instance.path) {
      _writer.writeString(1, _instance.path);
    }
  }

  private _path: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CkptFile to deeply clone from
   */
  constructor(_value?: RecursivePartial<CkptFile.AsObject>) {
    _value = _value || {};
    this.path = _value.path;
    CkptFile.refineValues(this);
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CkptFile.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CkptFile.AsObject {
    return {
      path: this.path
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CkptFile.AsProtobufJSON {
    return {
      path: this.path
    };
  }
}
export module CkptFile {
  /**
   * Standard JavaScript object representation for CkptFile
   */
  export interface AsObject {
    path: string;
  }

  /**
   * Protobuf JSON representation for CkptFile
   */
  export interface AsProtobufJSON {
    path: string;
  }
}

/**
 * Message implementation for ondewo.s2t.LanguageModels
 */
export class LanguageModels implements GrpcMessage {
  static id = 'ondewo.s2t.LanguageModels';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LanguageModels();
    LanguageModels.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LanguageModels) {
    _instance.path = _instance.path || '';
    _instance.beamSize = _instance.beamSize || '0';
    _instance.defaultLm = _instance.defaultLm || '';
    _instance.beamSearchScorerAlpha = _instance.beamSearchScorerAlpha || 0;
    _instance.beamSearchScorerBeta = _instance.beamSearchScorerBeta || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LanguageModels,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.path = _reader.readString();
          break;
        case 2:
          _instance.beamSize = _reader.readInt64String();
          break;
        case 3:
          _instance.defaultLm = _reader.readString();
          break;
        case 4:
          _instance.beamSearchScorerAlpha = _reader.readFloat();
          break;
        case 5:
          _instance.beamSearchScorerBeta = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    LanguageModels.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LanguageModels,
    _writer: BinaryWriter
  ) {
    if (_instance.path) {
      _writer.writeString(1, _instance.path);
    }
    if (_instance.beamSize) {
      _writer.writeInt64String(2, _instance.beamSize);
    }
    if (_instance.defaultLm) {
      _writer.writeString(3, _instance.defaultLm);
    }
    if (_instance.beamSearchScorerAlpha) {
      _writer.writeFloat(4, _instance.beamSearchScorerAlpha);
    }
    if (_instance.beamSearchScorerBeta) {
      _writer.writeFloat(5, _instance.beamSearchScorerBeta);
    }
  }

  private _path: string;
  private _beamSize: string;
  private _defaultLm: string;
  private _beamSearchScorerAlpha: number;
  private _beamSearchScorerBeta: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LanguageModels to deeply clone from
   */
  constructor(_value?: RecursivePartial<LanguageModels.AsObject>) {
    _value = _value || {};
    this.path = _value.path;
    this.beamSize = _value.beamSize;
    this.defaultLm = _value.defaultLm;
    this.beamSearchScorerAlpha = _value.beamSearchScorerAlpha;
    this.beamSearchScorerBeta = _value.beamSearchScorerBeta;
    LanguageModels.refineValues(this);
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }
  get beamSize(): string {
    return this._beamSize;
  }
  set beamSize(value: string) {
    this._beamSize = value;
  }
  get defaultLm(): string {
    return this._defaultLm;
  }
  set defaultLm(value: string) {
    this._defaultLm = value;
  }
  get beamSearchScorerAlpha(): number {
    return this._beamSearchScorerAlpha;
  }
  set beamSearchScorerAlpha(value: number) {
    this._beamSearchScorerAlpha = value;
  }
  get beamSearchScorerBeta(): number {
    return this._beamSearchScorerBeta;
  }
  set beamSearchScorerBeta(value: number) {
    this._beamSearchScorerBeta = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LanguageModels.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LanguageModels.AsObject {
    return {
      path: this.path,
      beamSize: this.beamSize,
      defaultLm: this.defaultLm,
      beamSearchScorerAlpha: this.beamSearchScorerAlpha,
      beamSearchScorerBeta: this.beamSearchScorerBeta
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): LanguageModels.AsProtobufJSON {
    return {
      path: this.path,
      beamSize: this.beamSize,
      defaultLm: this.defaultLm,
      beamSearchScorerAlpha: this.beamSearchScorerAlpha,
      beamSearchScorerBeta: this.beamSearchScorerBeta
    };
  }
}
export module LanguageModels {
  /**
   * Standard JavaScript object representation for LanguageModels
   */
  export interface AsObject {
    path: string;
    beamSize: string;
    defaultLm: string;
    beamSearchScorerAlpha: number;
    beamSearchScorerBeta: number;
  }

  /**
   * Protobuf JSON representation for LanguageModels
   */
  export interface AsProtobufJSON {
    path: string;
    beamSize: string;
    defaultLm: string;
    beamSearchScorerAlpha: number;
    beamSearchScorerBeta: number;
  }
}

/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
export class StreamingServer implements GrpcMessage {
  static id = 'ondewo.s2t.StreamingServer';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingServer();
    StreamingServer.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingServer) {
    _instance.host = _instance.host || '';
    _instance.port = _instance.port || '0';
    _instance.outputStyle = _instance.outputStyle || '';
    _instance.streamingSpeechRecognition =
      _instance.streamingSpeechRecognition || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingServer,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.host = _reader.readString();
          break;
        case 2:
          _instance.port = _reader.readInt64String();
          break;
        case 3:
          _instance.outputStyle = _reader.readString();
          break;
        case 4:
          _instance.streamingSpeechRecognition = new StreamingSpeechRecognition();
          _reader.readMessage(
            _instance.streamingSpeechRecognition,
            StreamingSpeechRecognition.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingServer.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingServer,
    _writer: BinaryWriter
  ) {
    if (_instance.host) {
      _writer.writeString(1, _instance.host);
    }
    if (_instance.port) {
      _writer.writeInt64String(2, _instance.port);
    }
    if (_instance.outputStyle) {
      _writer.writeString(3, _instance.outputStyle);
    }
    if (_instance.streamingSpeechRecognition) {
      _writer.writeMessage(
        4,
        _instance.streamingSpeechRecognition as any,
        StreamingSpeechRecognition.serializeBinaryToWriter
      );
    }
  }

  private _host: string;
  private _port: string;
  private _outputStyle: string;
  private _streamingSpeechRecognition?: StreamingSpeechRecognition;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingServer to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingServer.AsObject>) {
    _value = _value || {};
    this.host = _value.host;
    this.port = _value.port;
    this.outputStyle = _value.outputStyle;
    this.streamingSpeechRecognition = _value.streamingSpeechRecognition
      ? new StreamingSpeechRecognition(_value.streamingSpeechRecognition)
      : undefined;
    StreamingServer.refineValues(this);
  }
  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }
  get port(): string {
    return this._port;
  }
  set port(value: string) {
    this._port = value;
  }
  get outputStyle(): string {
    return this._outputStyle;
  }
  set outputStyle(value: string) {
    this._outputStyle = value;
  }
  get streamingSpeechRecognition(): StreamingSpeechRecognition | undefined {
    return this._streamingSpeechRecognition;
  }
  set streamingSpeechRecognition(
    value: StreamingSpeechRecognition | undefined
  ) {
    this._streamingSpeechRecognition = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingServer.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingServer.AsObject {
    return {
      host: this.host,
      port: this.port,
      outputStyle: this.outputStyle,
      streamingSpeechRecognition: this.streamingSpeechRecognition
        ? this.streamingSpeechRecognition.toObject()
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
  ): StreamingServer.AsProtobufJSON {
    return {
      host: this.host,
      port: this.port,
      outputStyle: this.outputStyle,
      streamingSpeechRecognition: this.streamingSpeechRecognition
        ? this.streamingSpeechRecognition.toProtobufJSON(options)
        : null
    };
  }
}
export module StreamingServer {
  /**
   * Standard JavaScript object representation for StreamingServer
   */
  export interface AsObject {
    host: string;
    port: string;
    outputStyle: string;
    streamingSpeechRecognition?: StreamingSpeechRecognition.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamingServer
   */
  export interface AsProtobufJSON {
    host: string;
    port: string;
    outputStyle: string;
    streamingSpeechRecognition: StreamingSpeechRecognition.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.StreamingSpeechRecognition
 */
export class StreamingSpeechRecognition implements GrpcMessage {
  static id = 'ondewo.s2t.StreamingSpeechRecognition';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingSpeechRecognition();
    StreamingSpeechRecognition.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingSpeechRecognition) {
    _instance.transcribeNotFinal = _instance.transcribeNotFinal || false;
    _instance.decodingMethod = _instance.decodingMethod || '';
    _instance.samplingRate = _instance.samplingRate || '0';
    _instance.minAudioChunkSize = _instance.minAudioChunkSize || '0';
    _instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingSpeechRecognition,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.transcribeNotFinal = _reader.readBool();
          break;
        case 2:
          _instance.decodingMethod = _reader.readString();
          break;
        case 3:
          _instance.samplingRate = _reader.readInt64String();
          break;
        case 4:
          _instance.minAudioChunkSize = _reader.readInt64String();
          break;
        case 5:
          _instance.nextChunkTimeout = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingSpeechRecognition.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingSpeechRecognition,
    _writer: BinaryWriter
  ) {
    if (_instance.transcribeNotFinal) {
      _writer.writeBool(1, _instance.transcribeNotFinal);
    }
    if (_instance.decodingMethod) {
      _writer.writeString(2, _instance.decodingMethod);
    }
    if (_instance.samplingRate) {
      _writer.writeInt64String(3, _instance.samplingRate);
    }
    if (_instance.minAudioChunkSize) {
      _writer.writeInt64String(4, _instance.minAudioChunkSize);
    }
    if (_instance.nextChunkTimeout) {
      _writer.writeFloat(5, _instance.nextChunkTimeout);
    }
  }

  private _transcribeNotFinal: boolean;
  private _decodingMethod: string;
  private _samplingRate: string;
  private _minAudioChunkSize: string;
  private _nextChunkTimeout: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingSpeechRecognition.AsObject>) {
    _value = _value || {};
    this.transcribeNotFinal = _value.transcribeNotFinal;
    this.decodingMethod = _value.decodingMethod;
    this.samplingRate = _value.samplingRate;
    this.minAudioChunkSize = _value.minAudioChunkSize;
    this.nextChunkTimeout = _value.nextChunkTimeout;
    StreamingSpeechRecognition.refineValues(this);
  }
  get transcribeNotFinal(): boolean {
    return this._transcribeNotFinal;
  }
  set transcribeNotFinal(value: boolean) {
    this._transcribeNotFinal = value;
  }
  get decodingMethod(): string {
    return this._decodingMethod;
  }
  set decodingMethod(value: string) {
    this._decodingMethod = value;
  }
  get samplingRate(): string {
    return this._samplingRate;
  }
  set samplingRate(value: string) {
    this._samplingRate = value;
  }
  get minAudioChunkSize(): string {
    return this._minAudioChunkSize;
  }
  set minAudioChunkSize(value: string) {
    this._minAudioChunkSize = value;
  }
  get nextChunkTimeout(): number {
    return this._nextChunkTimeout;
  }
  set nextChunkTimeout(value: number) {
    this._nextChunkTimeout = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingSpeechRecognition.AsObject {
    return {
      transcribeNotFinal: this.transcribeNotFinal,
      decodingMethod: this.decodingMethod,
      samplingRate: this.samplingRate,
      minAudioChunkSize: this.minAudioChunkSize,
      nextChunkTimeout: this.nextChunkTimeout
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamingSpeechRecognition.AsProtobufJSON {
    return {
      transcribeNotFinal: this.transcribeNotFinal,
      decodingMethod: this.decodingMethod,
      samplingRate: this.samplingRate,
      minAudioChunkSize: this.minAudioChunkSize,
      nextChunkTimeout: this.nextChunkTimeout
    };
  }
}
export module StreamingSpeechRecognition {
  /**
   * Standard JavaScript object representation for StreamingSpeechRecognition
   */
  export interface AsObject {
    transcribeNotFinal: boolean;
    decodingMethod: string;
    samplingRate: string;
    minAudioChunkSize: string;
    nextChunkTimeout: number;
  }

  /**
   * Protobuf JSON representation for StreamingSpeechRecognition
   */
  export interface AsProtobufJSON {
    transcribeNotFinal: boolean;
    decodingMethod: string;
    samplingRate: string;
    minAudioChunkSize: string;
    nextChunkTimeout: number;
  }
}

/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
export class VoiceActivityDetection implements GrpcMessage {
  static id = 'ondewo.s2t.VoiceActivityDetection';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VoiceActivityDetection();
    VoiceActivityDetection.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VoiceActivityDetection) {
    _instance.active = _instance.active || '';
    _instance.samplingRate = _instance.samplingRate || '0';
    _instance.pyannote = _instance.pyannote || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VoiceActivityDetection,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.active = _reader.readString();
          break;
        case 2:
          _instance.samplingRate = _reader.readInt64String();
          break;
        case 3:
          _instance.pyannote = new Pyannote();
          _reader.readMessage(
            _instance.pyannote,
            Pyannote.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    VoiceActivityDetection.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VoiceActivityDetection,
    _writer: BinaryWriter
  ) {
    if (_instance.active) {
      _writer.writeString(1, _instance.active);
    }
    if (_instance.samplingRate) {
      _writer.writeInt64String(2, _instance.samplingRate);
    }
    if (_instance.pyannote) {
      _writer.writeMessage(
        3,
        _instance.pyannote as any,
        Pyannote.serializeBinaryToWriter
      );
    }
  }

  private _active: string;
  private _samplingRate: string;
  private _pyannote?: Pyannote;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
   */
  constructor(_value?: RecursivePartial<VoiceActivityDetection.AsObject>) {
    _value = _value || {};
    this.active = _value.active;
    this.samplingRate = _value.samplingRate;
    this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
    VoiceActivityDetection.refineValues(this);
  }
  get active(): string {
    return this._active;
  }
  set active(value: string) {
    this._active = value;
  }
  get samplingRate(): string {
    return this._samplingRate;
  }
  set samplingRate(value: string) {
    this._samplingRate = value;
  }
  get pyannote(): Pyannote | undefined {
    return this._pyannote;
  }
  set pyannote(value: Pyannote | undefined) {
    this._pyannote = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VoiceActivityDetection.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VoiceActivityDetection.AsObject {
    return {
      active: this.active,
      samplingRate: this.samplingRate,
      pyannote: this.pyannote ? this.pyannote.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VoiceActivityDetection.AsProtobufJSON {
    return {
      active: this.active,
      samplingRate: this.samplingRate,
      pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null
    };
  }
}
export module VoiceActivityDetection {
  /**
   * Standard JavaScript object representation for VoiceActivityDetection
   */
  export interface AsObject {
    active: string;
    samplingRate: string;
    pyannote?: Pyannote.AsObject;
  }

  /**
   * Protobuf JSON representation for VoiceActivityDetection
   */
  export interface AsProtobufJSON {
    active: string;
    samplingRate: string;
    pyannote: Pyannote.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.Pyannote
 */
export class Pyannote implements GrpcMessage {
  static id = 'ondewo.s2t.Pyannote';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Pyannote();
    Pyannote.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Pyannote) {
    _instance.modelName = _instance.modelName || '';
    _instance.minAudioSize = _instance.minAudioSize || '0';
    _instance.minDurationOff = _instance.minDurationOff || 0;
    _instance.minDurationOn = _instance.minDurationOn || 0;
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Pyannote,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelName = _reader.readString();
          break;
        case 2:
          _instance.minAudioSize = _reader.readInt64String();
          break;
        case 3:
          _instance.minDurationOff = _reader.readFloat();
          break;
        case 4:
          _instance.minDurationOn = _reader.readFloat();
          break;
        case 5:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 6:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    Pyannote.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Pyannote, _writer: BinaryWriter) {
    if (_instance.modelName) {
      _writer.writeString(1, _instance.modelName);
    }
    if (_instance.minAudioSize) {
      _writer.writeInt64String(2, _instance.minAudioSize);
    }
    if (_instance.minDurationOff) {
      _writer.writeFloat(3, _instance.minDurationOff);
    }
    if (_instance.minDurationOn) {
      _writer.writeFloat(4, _instance.minDurationOn);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(5, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(6, _instance.tritonServerPort);
    }
  }

  private _modelName: string;
  private _minAudioSize: string;
  private _minDurationOff: number;
  private _minDurationOn: number;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Pyannote to deeply clone from
   */
  constructor(_value?: RecursivePartial<Pyannote.AsObject>) {
    _value = _value || {};
    this.modelName = _value.modelName;
    this.minAudioSize = _value.minAudioSize;
    this.minDurationOff = _value.minDurationOff;
    this.minDurationOn = _value.minDurationOn;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    Pyannote.refineValues(this);
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get minAudioSize(): string {
    return this._minAudioSize;
  }
  set minAudioSize(value: string) {
    this._minAudioSize = value;
  }
  get minDurationOff(): number {
    return this._minDurationOff;
  }
  set minDurationOff(value: number) {
    this._minDurationOff = value;
  }
  get minDurationOn(): number {
    return this._minDurationOn;
  }
  set minDurationOn(value: number) {
    this._minDurationOn = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Pyannote.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Pyannote.AsObject {
    return {
      modelName: this.modelName,
      minAudioSize: this.minAudioSize,
      minDurationOff: this.minDurationOff,
      minDurationOn: this.minDurationOn,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Pyannote.AsProtobufJSON {
    return {
      modelName: this.modelName,
      minAudioSize: this.minAudioSize,
      minDurationOff: this.minDurationOff,
      minDurationOn: this.minDurationOn,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module Pyannote {
  /**
   * Standard JavaScript object representation for Pyannote
   */
  export interface AsObject {
    modelName: string;
    minAudioSize: string;
    minDurationOff: number;
    minDurationOn: number;
    tritonServerHost: string;
    tritonServerPort: string;
  }

  /**
   * Protobuf JSON representation for Pyannote
   */
  export interface AsProtobufJSON {
    modelName: string;
    minAudioSize: string;
    minDurationOff: number;
    minDurationOn: number;
    tritonServerHost: string;
    tritonServerPort: string;
  }
}

/**
 * Message implementation for ondewo.s2t.PostProcessing
 */
export class PostProcessing implements GrpcMessage {
  static id = 'ondewo.s2t.PostProcessing';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PostProcessing();
    PostProcessing.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PostProcessing) {
    _instance.pipeline = _instance.pipeline || [];
    _instance.postProcessors = _instance.postProcessors || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PostProcessing,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.pipeline = _instance.pipeline || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.postProcessors = new PostProcessors();
          _reader.readMessage(
            _instance.postProcessors,
            PostProcessors.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PostProcessing.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PostProcessing,
    _writer: BinaryWriter
  ) {
    if (_instance.pipeline && _instance.pipeline.length) {
      _writer.writeRepeatedString(1, _instance.pipeline);
    }
    if (_instance.postProcessors) {
      _writer.writeMessage(
        2,
        _instance.postProcessors as any,
        PostProcessors.serializeBinaryToWriter
      );
    }
  }

  private _pipeline: string[];
  private _postProcessors?: PostProcessors;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PostProcessing to deeply clone from
   */
  constructor(_value?: RecursivePartial<PostProcessing.AsObject>) {
    _value = _value || {};
    this.pipeline = (_value.pipeline || []).slice();
    this.postProcessors = _value.postProcessors
      ? new PostProcessors(_value.postProcessors)
      : undefined;
    PostProcessing.refineValues(this);
  }
  get pipeline(): string[] {
    return this._pipeline;
  }
  set pipeline(value: string[]) {
    this._pipeline = value;
  }
  get postProcessors(): PostProcessors | undefined {
    return this._postProcessors;
  }
  set postProcessors(value: PostProcessors | undefined) {
    this._postProcessors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PostProcessing.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PostProcessing.AsObject {
    return {
      pipeline: (this.pipeline || []).slice(),
      postProcessors: this.postProcessors
        ? this.postProcessors.toObject()
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
  ): PostProcessing.AsProtobufJSON {
    return {
      pipeline: (this.pipeline || []).slice(),
      postProcessors: this.postProcessors
        ? this.postProcessors.toProtobufJSON(options)
        : null
    };
  }
}
export module PostProcessing {
  /**
   * Standard JavaScript object representation for PostProcessing
   */
  export interface AsObject {
    pipeline: string[];
    postProcessors?: PostProcessors.AsObject;
  }

  /**
   * Protobuf JSON representation for PostProcessing
   */
  export interface AsProtobufJSON {
    pipeline: string[];
    postProcessors: PostProcessors.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
export class PostProcessors implements GrpcMessage {
  static id = 'ondewo.s2t.PostProcessors';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PostProcessors();
    PostProcessors.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PostProcessors) {
    _instance.symSpell = _instance.symSpell || undefined;
    _instance.normalization = _instance.normalization || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PostProcessors,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.symSpell = new SymSpell();
          _reader.readMessage(
            _instance.symSpell,
            SymSpell.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.normalization = new S2TNormalization();
          _reader.readMessage(
            _instance.normalization,
            S2TNormalization.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PostProcessors.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PostProcessors,
    _writer: BinaryWriter
  ) {
    if (_instance.symSpell) {
      _writer.writeMessage(
        1,
        _instance.symSpell as any,
        SymSpell.serializeBinaryToWriter
      );
    }
    if (_instance.normalization) {
      _writer.writeMessage(
        2,
        _instance.normalization as any,
        S2TNormalization.serializeBinaryToWriter
      );
    }
  }

  private _symSpell?: SymSpell;
  private _normalization?: S2TNormalization;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PostProcessors to deeply clone from
   */
  constructor(_value?: RecursivePartial<PostProcessors.AsObject>) {
    _value = _value || {};
    this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : undefined;
    this.normalization = _value.normalization
      ? new S2TNormalization(_value.normalization)
      : undefined;
    PostProcessors.refineValues(this);
  }
  get symSpell(): SymSpell | undefined {
    return this._symSpell;
  }
  set symSpell(value: SymSpell | undefined) {
    this._symSpell = value;
  }
  get normalization(): S2TNormalization | undefined {
    return this._normalization;
  }
  set normalization(value: S2TNormalization | undefined) {
    this._normalization = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PostProcessors.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PostProcessors.AsObject {
    return {
      symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
      normalization: this.normalization
        ? this.normalization.toObject()
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
  ): PostProcessors.AsProtobufJSON {
    return {
      symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
      normalization: this.normalization
        ? this.normalization.toProtobufJSON(options)
        : null
    };
  }
}
export module PostProcessors {
  /**
   * Standard JavaScript object representation for PostProcessors
   */
  export interface AsObject {
    symSpell?: SymSpell.AsObject;
    normalization?: S2TNormalization.AsObject;
  }

  /**
   * Protobuf JSON representation for PostProcessors
   */
  export interface AsProtobufJSON {
    symSpell: SymSpell.AsProtobufJSON | null;
    normalization: S2TNormalization.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.s2t.SymSpell
 */
export class SymSpell implements GrpcMessage {
  static id = 'ondewo.s2t.SymSpell';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SymSpell();
    SymSpell.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SymSpell) {
    _instance.dictPath = _instance.dictPath || '';
    _instance.maxDictionaryEditDistance =
      _instance.maxDictionaryEditDistance || '0';
    _instance.prefixLength = _instance.prefixLength || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SymSpell,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.dictPath = _reader.readString();
          break;
        case 2:
          _instance.maxDictionaryEditDistance = _reader.readInt64String();
          break;
        case 3:
          _instance.prefixLength = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    SymSpell.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SymSpell, _writer: BinaryWriter) {
    if (_instance.dictPath) {
      _writer.writeString(1, _instance.dictPath);
    }
    if (_instance.maxDictionaryEditDistance) {
      _writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
    }
    if (_instance.prefixLength) {
      _writer.writeInt64String(3, _instance.prefixLength);
    }
  }

  private _dictPath: string;
  private _maxDictionaryEditDistance: string;
  private _prefixLength: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SymSpell to deeply clone from
   */
  constructor(_value?: RecursivePartial<SymSpell.AsObject>) {
    _value = _value || {};
    this.dictPath = _value.dictPath;
    this.maxDictionaryEditDistance = _value.maxDictionaryEditDistance;
    this.prefixLength = _value.prefixLength;
    SymSpell.refineValues(this);
  }
  get dictPath(): string {
    return this._dictPath;
  }
  set dictPath(value: string) {
    this._dictPath = value;
  }
  get maxDictionaryEditDistance(): string {
    return this._maxDictionaryEditDistance;
  }
  set maxDictionaryEditDistance(value: string) {
    this._maxDictionaryEditDistance = value;
  }
  get prefixLength(): string {
    return this._prefixLength;
  }
  set prefixLength(value: string) {
    this._prefixLength = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SymSpell.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SymSpell.AsObject {
    return {
      dictPath: this.dictPath,
      maxDictionaryEditDistance: this.maxDictionaryEditDistance,
      prefixLength: this.prefixLength
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SymSpell.AsProtobufJSON {
    return {
      dictPath: this.dictPath,
      maxDictionaryEditDistance: this.maxDictionaryEditDistance,
      prefixLength: this.prefixLength
    };
  }
}
export module SymSpell {
  /**
   * Standard JavaScript object representation for SymSpell
   */
  export interface AsObject {
    dictPath: string;
    maxDictionaryEditDistance: string;
    prefixLength: string;
  }

  /**
   * Protobuf JSON representation for SymSpell
   */
  export interface AsProtobufJSON {
    dictPath: string;
    maxDictionaryEditDistance: string;
    prefixLength: string;
  }
}

/**
 * Message implementation for ondewo.s2t.S2TNormalization
 */
export class S2TNormalization implements GrpcMessage {
  static id = 'ondewo.s2t.S2TNormalization';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2TNormalization();
    S2TNormalization.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2TNormalization) {
    _instance.language = _instance.language || '';
    _instance.pipeline = _instance.pipeline || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2TNormalization,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          (_instance.pipeline = _instance.pipeline || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    S2TNormalization.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2TNormalization,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.pipeline && _instance.pipeline.length) {
      _writer.writeRepeatedString(2, _instance.pipeline);
    }
  }

  private _language: string;
  private _pipeline: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2TNormalization to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2TNormalization.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.pipeline = (_value.pipeline || []).slice();
    S2TNormalization.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get pipeline(): string[] {
    return this._pipeline;
  }
  set pipeline(value: string[]) {
    this._pipeline = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2TNormalization.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2TNormalization.AsObject {
    return {
      language: this.language,
      pipeline: (this.pipeline || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): S2TNormalization.AsProtobufJSON {
    return {
      language: this.language,
      pipeline: (this.pipeline || []).slice()
    };
  }
}
export module S2TNormalization {
  /**
   * Standard JavaScript object representation for S2TNormalization
   */
  export interface AsObject {
    language: string;
    pipeline: string[];
  }

  /**
   * Protobuf JSON representation for S2TNormalization
   */
  export interface AsProtobufJSON {
    language: string;
    pipeline: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.Logging
 */
export class Logging implements GrpcMessage {
  static id = 'ondewo.s2t.Logging';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Logging();
    Logging.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Logging) {
    _instance.type = _instance.type || '';
    _instance.path = _instance.path || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Logging,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.path = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Logging.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Logging, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.path) {
      _writer.writeString(2, _instance.path);
    }
  }

  private _type: string;
  private _path: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Logging to deeply clone from
   */
  constructor(_value?: RecursivePartial<Logging.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.path = _value.path;
    Logging.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Logging.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Logging.AsObject {
    return {
      type: this.type,
      path: this.path
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Logging.AsProtobufJSON {
    return {
      type: this.type,
      path: this.path
    };
  }
}
export module Logging {
  /**
   * Standard JavaScript object representation for Logging
   */
  export interface AsObject {
    type: string;
    path: string;
  }

  /**
   * Protobuf JSON representation for Logging
   */
  export interface AsProtobufJSON {
    type: string;
    path: string;
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsRequest
 */
export class ListS2tLanguageModelsRequest implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tLanguageModelsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tLanguageModelsRequest();
    ListS2tLanguageModelsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tLanguageModelsRequest) {
    _instance.ids = _instance.ids || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tLanguageModelsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tLanguageModelsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tLanguageModelsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(1, _instance.ids);
    }
  }

  private _ids: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tLanguageModelsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListS2tLanguageModelsRequest.AsObject>
  ) {
    _value = _value || {};
    this.ids = (_value.ids || []).slice();
    ListS2tLanguageModelsRequest.refineValues(this);
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tLanguageModelsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tLanguageModelsRequest.AsObject {
    return {
      ids: (this.ids || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tLanguageModelsRequest.AsProtobufJSON {
    return {
      ids: (this.ids || []).slice()
    };
  }
}
export module ListS2tLanguageModelsRequest {
  /**
   * Standard JavaScript object representation for ListS2tLanguageModelsRequest
   */
  export interface AsObject {
    ids: string[];
  }

  /**
   * Protobuf JSON representation for ListS2tLanguageModelsRequest
   */
  export interface AsProtobufJSON {
    ids: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.LanguageModelPipelineId
 */
export class LanguageModelPipelineId implements GrpcMessage {
  static id = 'ondewo.s2t.LanguageModelPipelineId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LanguageModelPipelineId();
    LanguageModelPipelineId.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LanguageModelPipelineId) {
    _instance.pipelineId = _instance.pipelineId || '';
    _instance.modelNames = _instance.modelNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LanguageModelPipelineId,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pipelineId = _reader.readString();
          break;
        case 2:
          (_instance.modelNames = _instance.modelNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LanguageModelPipelineId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LanguageModelPipelineId,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelineId) {
      _writer.writeString(1, _instance.pipelineId);
    }
    if (_instance.modelNames && _instance.modelNames.length) {
      _writer.writeRepeatedString(2, _instance.modelNames);
    }
  }

  private _pipelineId: string;
  private _modelNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LanguageModelPipelineId to deeply clone from
   */
  constructor(_value?: RecursivePartial<LanguageModelPipelineId.AsObject>) {
    _value = _value || {};
    this.pipelineId = _value.pipelineId;
    this.modelNames = (_value.modelNames || []).slice();
    LanguageModelPipelineId.refineValues(this);
  }
  get pipelineId(): string {
    return this._pipelineId;
  }
  set pipelineId(value: string) {
    this._pipelineId = value;
  }
  get modelNames(): string[] {
    return this._modelNames;
  }
  set modelNames(value: string[]) {
    this._modelNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LanguageModelPipelineId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LanguageModelPipelineId.AsObject {
    return {
      pipelineId: this.pipelineId,
      modelNames: (this.modelNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): LanguageModelPipelineId.AsProtobufJSON {
    return {
      pipelineId: this.pipelineId,
      modelNames: (this.modelNames || []).slice()
    };
  }
}
export module LanguageModelPipelineId {
  /**
   * Standard JavaScript object representation for LanguageModelPipelineId
   */
  export interface AsObject {
    pipelineId: string;
    modelNames: string[];
  }

  /**
   * Protobuf JSON representation for LanguageModelPipelineId
   */
  export interface AsProtobufJSON {
    pipelineId: string;
    modelNames: string[];
  }
}

/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsResponse
 */
export class ListS2tLanguageModelsResponse implements GrpcMessage {
  static id = 'ondewo.s2t.ListS2tLanguageModelsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListS2tLanguageModelsResponse();
    ListS2tLanguageModelsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tLanguageModelsResponse) {
    _instance.lmPipelineIds = _instance.lmPipelineIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListS2tLanguageModelsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LanguageModelPipelineId();
          _reader.readMessage(
            messageInitializer1,
            LanguageModelPipelineId.deserializeBinaryFromReader
          );
          (_instance.lmPipelineIds = _instance.lmPipelineIds || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListS2tLanguageModelsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListS2tLanguageModelsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.lmPipelineIds && _instance.lmPipelineIds.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.lmPipelineIds as any,
        LanguageModelPipelineId.serializeBinaryToWriter
      );
    }
  }

  private _lmPipelineIds?: LanguageModelPipelineId[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tLanguageModelsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListS2tLanguageModelsResponse.AsObject>
  ) {
    _value = _value || {};
    this.lmPipelineIds = (_value.lmPipelineIds || []).map(
      m => new LanguageModelPipelineId(m)
    );
    ListS2tLanguageModelsResponse.refineValues(this);
  }
  get lmPipelineIds(): LanguageModelPipelineId[] | undefined {
    return this._lmPipelineIds;
  }
  set lmPipelineIds(value: LanguageModelPipelineId[] | undefined) {
    this._lmPipelineIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListS2tLanguageModelsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tLanguageModelsResponse.AsObject {
    return {
      lmPipelineIds: (this.lmPipelineIds || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListS2tLanguageModelsResponse.AsProtobufJSON {
    return {
      lmPipelineIds: (this.lmPipelineIds || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module ListS2tLanguageModelsResponse {
  /**
   * Standard JavaScript object representation for ListS2tLanguageModelsResponse
   */
  export interface AsObject {
    lmPipelineIds?: LanguageModelPipelineId.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListS2tLanguageModelsResponse
   */
  export interface AsProtobufJSON {
    lmPipelineIds: LanguageModelPipelineId.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.s2t.CreateUserLanguageModelRequest
 */
export class CreateUserLanguageModelRequest implements GrpcMessage {
  static id = 'ondewo.s2t.CreateUserLanguageModelRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateUserLanguageModelRequest();
    CreateUserLanguageModelRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateUserLanguageModelRequest) {
    _instance.languageModelName = _instance.languageModelName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateUserLanguageModelRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageModelName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateUserLanguageModelRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateUserLanguageModelRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageModelName) {
      _writer.writeString(1, _instance.languageModelName);
    }
  }

  private _languageModelName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateUserLanguageModelRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateUserLanguageModelRequest.AsObject>
  ) {
    _value = _value || {};
    this.languageModelName = _value.languageModelName;
    CreateUserLanguageModelRequest.refineValues(this);
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateUserLanguageModelRequest.AsObject {
    return {
      languageModelName: this.languageModelName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateUserLanguageModelRequest.AsProtobufJSON {
    return {
      languageModelName: this.languageModelName
    };
  }
}
export module CreateUserLanguageModelRequest {
  /**
   * Standard JavaScript object representation for CreateUserLanguageModelRequest
   */
  export interface AsObject {
    languageModelName: string;
  }

  /**
   * Protobuf JSON representation for CreateUserLanguageModelRequest
   */
  export interface AsProtobufJSON {
    languageModelName: string;
  }
}

/**
 * Message implementation for ondewo.s2t.DeleteUserLanguageModelRequest
 */
export class DeleteUserLanguageModelRequest implements GrpcMessage {
  static id = 'ondewo.s2t.DeleteUserLanguageModelRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserLanguageModelRequest();
    DeleteUserLanguageModelRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserLanguageModelRequest) {
    _instance.languageModelName = _instance.languageModelName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserLanguageModelRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageModelName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserLanguageModelRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserLanguageModelRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageModelName) {
      _writer.writeString(1, _instance.languageModelName);
    }
  }

  private _languageModelName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserLanguageModelRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteUserLanguageModelRequest.AsObject>
  ) {
    _value = _value || {};
    this.languageModelName = _value.languageModelName;
    DeleteUserLanguageModelRequest.refineValues(this);
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserLanguageModelRequest.AsObject {
    return {
      languageModelName: this.languageModelName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteUserLanguageModelRequest.AsProtobufJSON {
    return {
      languageModelName: this.languageModelName
    };
  }
}
export module DeleteUserLanguageModelRequest {
  /**
   * Standard JavaScript object representation for DeleteUserLanguageModelRequest
   */
  export interface AsObject {
    languageModelName: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserLanguageModelRequest
   */
  export interface AsProtobufJSON {
    languageModelName: string;
  }
}

/**
 * Message implementation for ondewo.s2t.AddDataToUserLanguageModelRequest
 */
export class AddDataToUserLanguageModelRequest implements GrpcMessage {
  static id = 'ondewo.s2t.AddDataToUserLanguageModelRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddDataToUserLanguageModelRequest();
    AddDataToUserLanguageModelRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddDataToUserLanguageModelRequest) {
    _instance.languageModelName = _instance.languageModelName || '';
    _instance.zippedData = _instance.zippedData || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddDataToUserLanguageModelRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageModelName = _reader.readString();
          break;
        case 2:
          _instance.zippedData = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    AddDataToUserLanguageModelRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddDataToUserLanguageModelRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageModelName) {
      _writer.writeString(1, _instance.languageModelName);
    }
    if (_instance.zippedData && _instance.zippedData.length) {
      _writer.writeBytes(2, _instance.zippedData);
    }
  }

  private _languageModelName: string;
  private _zippedData: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddDataToUserLanguageModelRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddDataToUserLanguageModelRequest.AsObject>
  ) {
    _value = _value || {};
    this.languageModelName = _value.languageModelName;
    this.zippedData = _value.zippedData;
    AddDataToUserLanguageModelRequest.refineValues(this);
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }
  get zippedData(): Uint8Array {
    return this._zippedData;
  }
  set zippedData(value: Uint8Array) {
    this._zippedData = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddDataToUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddDataToUserLanguageModelRequest.AsObject {
    return {
      languageModelName: this.languageModelName,
      zippedData: this.zippedData
        ? this.zippedData.subarray(0)
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
  ): AddDataToUserLanguageModelRequest.AsProtobufJSON {
    return {
      languageModelName: this.languageModelName,
      zippedData: this.zippedData ? uint8ArrayToBase64(this.zippedData) : ''
    };
  }
}
export module AddDataToUserLanguageModelRequest {
  /**
   * Standard JavaScript object representation for AddDataToUserLanguageModelRequest
   */
  export interface AsObject {
    languageModelName: string;
    zippedData: Uint8Array;
  }

  /**
   * Protobuf JSON representation for AddDataToUserLanguageModelRequest
   */
  export interface AsProtobufJSON {
    languageModelName: string;
    zippedData: string;
  }
}

/**
 * Message implementation for ondewo.s2t.TrainUserLanguageModelRequest
 */
export class TrainUserLanguageModelRequest implements GrpcMessage {
  static id = 'ondewo.s2t.TrainUserLanguageModelRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TrainUserLanguageModelRequest();
    TrainUserLanguageModelRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TrainUserLanguageModelRequest) {
    _instance.languageModelName = _instance.languageModelName || '';
    _instance.order = _instance.order || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TrainUserLanguageModelRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageModelName = _reader.readString();
          break;
        case 2:
          _instance.order = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    TrainUserLanguageModelRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TrainUserLanguageModelRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languageModelName) {
      _writer.writeString(1, _instance.languageModelName);
    }
    if (_instance.order) {
      _writer.writeInt64String(2, _instance.order);
    }
  }

  private _languageModelName: string;
  private _order: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TrainUserLanguageModelRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<TrainUserLanguageModelRequest.AsObject>
  ) {
    _value = _value || {};
    this.languageModelName = _value.languageModelName;
    this.order = _value.order;
    TrainUserLanguageModelRequest.refineValues(this);
  }
  get languageModelName(): string {
    return this._languageModelName;
  }
  set languageModelName(value: string) {
    this._languageModelName = value;
  }
  get order(): string {
    return this._order;
  }
  set order(value: string) {
    this._order = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TrainUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TrainUserLanguageModelRequest.AsObject {
    return {
      languageModelName: this.languageModelName,
      order: this.order
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TrainUserLanguageModelRequest.AsProtobufJSON {
    return {
      languageModelName: this.languageModelName,
      order: this.order
    };
  }
}
export module TrainUserLanguageModelRequest {
  /**
   * Standard JavaScript object representation for TrainUserLanguageModelRequest
   */
  export interface AsObject {
    languageModelName: string;
    order: string;
  }

  /**
   * Protobuf JSON representation for TrainUserLanguageModelRequest
   */
  export interface AsProtobufJSON {
    languageModelName: string;
    order: string;
  }
}
