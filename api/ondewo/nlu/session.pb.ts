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
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleApi005 from '../../google/api/annotations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
export enum TranscriptionType {
  TRANSCRIPTION_TYPE_UNSPECIFIED = 0,
  TRANSCRIPTION_TYPE_S2T = 1,
  TRANSCRIPTION_TYPE_HUMAN = 2
}
export enum AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = 0,
  AUDIO_ENCODING_LINEAR_16 = 1,
  AUDIO_ENCODING_FLAC = 2,
  AUDIO_ENCODING_MULAW = 3,
  AUDIO_ENCODING_AMR = 4,
  AUDIO_ENCODING_AMR_WB = 5,
  AUDIO_ENCODING_OGG_OPUS = 6,
  AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7
}
export enum ComparisonOperator {
  EQUAL = 0,
  GREATER = 1,
  GREATER_OR_EQUAL = 2,
  LESS_OR_EQUAL = 3,
  CONTAINS = 4,
  STARTS_WITH = 5,
  ENDS_WITH = 6
}
export enum ResourceView {
  RESOURCE_VIEW_UNSPECIFIED = 0,
  RESOURCE_VIEW_FULL = 1,
  RESOURCE_VIEW_PARTIAL = 2,
  RESOURCE_VIEW_MINIMUM = 3
}
export enum AudioFileResourceType {
  AUDIO_FILE_RESOURCE_TYPE_UNSPECIFIED = 0,
  AUDIO_FILE_RESOURCE_TYPE_T2S = 1,
  AUDIO_FILE_RESOURCE_TYPE_S2T = 2,
  AUDIO_FILE_RESOURCE_TYPE_S2T_AND_T2S = 3
}
/**
 * Message implementation for ondewo.nlu.DetectIntentRequest
 */
export class DetectIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DetectIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DetectIntentRequest();
    DetectIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DetectIntentRequest) {
    _instance.session = _instance.session || '';
    _instance.queryParams = _instance.queryParams || undefined;
    _instance.queryInput = _instance.queryInput || undefined;
    _instance.inputAudio = _instance.inputAudio || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DetectIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.session = _reader.readString();
          break;
        case 2:
          _instance.queryParams = new QueryParameters();
          _reader.readMessage(
            _instance.queryParams,
            QueryParameters.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.queryInput = new QueryInput();
          _reader.readMessage(
            _instance.queryInput,
            QueryInput.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.inputAudio = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    DetectIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DetectIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.session) {
      _writer.writeString(1, _instance.session);
    }
    if (_instance.queryParams) {
      _writer.writeMessage(
        2,
        _instance.queryParams as any,
        QueryParameters.serializeBinaryToWriter
      );
    }
    if (_instance.queryInput) {
      _writer.writeMessage(
        3,
        _instance.queryInput as any,
        QueryInput.serializeBinaryToWriter
      );
    }
    if (_instance.inputAudio && _instance.inputAudio.length) {
      _writer.writeBytes(5, _instance.inputAudio);
    }
  }

  private _session: string;
  private _queryParams?: QueryParameters;
  private _queryInput?: QueryInput;
  private _inputAudio: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DetectIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DetectIntentRequest.AsObject>) {
    _value = _value || {};
    this.session = _value.session;
    this.queryParams = _value.queryParams
      ? new QueryParameters(_value.queryParams)
      : undefined;
    this.queryInput = _value.queryInput
      ? new QueryInput(_value.queryInput)
      : undefined;
    this.inputAudio = _value.inputAudio;
    DetectIntentRequest.refineValues(this);
  }
  get session(): string {
    return this._session;
  }
  set session(value: string) {
    this._session = value;
  }
  get queryParams(): QueryParameters | undefined {
    return this._queryParams;
  }
  set queryParams(value: QueryParameters | undefined) {
    this._queryParams = value;
  }
  get queryInput(): QueryInput | undefined {
    return this._queryInput;
  }
  set queryInput(value: QueryInput | undefined) {
    this._queryInput = value;
  }
  get inputAudio(): Uint8Array {
    return this._inputAudio;
  }
  set inputAudio(value: Uint8Array) {
    this._inputAudio = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DetectIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DetectIntentRequest.AsObject {
    return {
      session: this.session,
      queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
      queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
      inputAudio: this.inputAudio
        ? this.inputAudio.subarray(0)
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
  ): DetectIntentRequest.AsProtobufJSON {
    return {
      session: this.session,
      queryParams: this.queryParams
        ? this.queryParams.toProtobufJSON(options)
        : null,
      queryInput: this.queryInput
        ? this.queryInput.toProtobufJSON(options)
        : null,
      inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
    };
  }
}
export module DetectIntentRequest {
  /**
   * Standard JavaScript object representation for DetectIntentRequest
   */
  export interface AsObject {
    session: string;
    queryParams?: QueryParameters.AsObject;
    queryInput?: QueryInput.AsObject;
    inputAudio: Uint8Array;
  }

  /**
   * Protobuf JSON representation for DetectIntentRequest
   */
  export interface AsProtobufJSON {
    session: string;
    queryParams: QueryParameters.AsProtobufJSON | null;
    queryInput: QueryInput.AsProtobufJSON | null;
    inputAudio: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DetectIntentResponse
 */
export class DetectIntentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.DetectIntentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DetectIntentResponse();
    DetectIntentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DetectIntentResponse) {
    _instance.responseId = _instance.responseId || '';
    _instance.queryResult = _instance.queryResult || undefined;
    _instance.webhookStatus = _instance.webhookStatus || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DetectIntentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.responseId = _reader.readString();
          break;
        case 2:
          _instance.queryResult = new QueryResult();
          _reader.readMessage(
            _instance.queryResult,
            QueryResult.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.webhookStatus = new googleRpc011.Status();
          _reader.readMessage(
            _instance.webhookStatus,
            googleRpc011.Status.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DetectIntentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DetectIntentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.responseId) {
      _writer.writeString(1, _instance.responseId);
    }
    if (_instance.queryResult) {
      _writer.writeMessage(
        2,
        _instance.queryResult as any,
        QueryResult.serializeBinaryToWriter
      );
    }
    if (_instance.webhookStatus) {
      _writer.writeMessage(
        3,
        _instance.webhookStatus as any,
        googleRpc011.Status.serializeBinaryToWriter
      );
    }
  }

  private _responseId: string;
  private _queryResult?: QueryResult;
  private _webhookStatus?: googleRpc011.Status;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DetectIntentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DetectIntentResponse.AsObject>) {
    _value = _value || {};
    this.responseId = _value.responseId;
    this.queryResult = _value.queryResult
      ? new QueryResult(_value.queryResult)
      : undefined;
    this.webhookStatus = _value.webhookStatus
      ? new googleRpc011.Status(_value.webhookStatus)
      : undefined;
    DetectIntentResponse.refineValues(this);
  }
  get responseId(): string {
    return this._responseId;
  }
  set responseId(value: string) {
    this._responseId = value;
  }
  get queryResult(): QueryResult | undefined {
    return this._queryResult;
  }
  set queryResult(value: QueryResult | undefined) {
    this._queryResult = value;
  }
  get webhookStatus(): googleRpc011.Status | undefined {
    return this._webhookStatus;
  }
  set webhookStatus(value: googleRpc011.Status | undefined) {
    this._webhookStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DetectIntentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DetectIntentResponse.AsObject {
    return {
      responseId: this.responseId,
      queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
      webhookStatus: this.webhookStatus
        ? this.webhookStatus.toObject()
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
  ): DetectIntentResponse.AsProtobufJSON {
    return {
      responseId: this.responseId,
      queryResult: this.queryResult
        ? this.queryResult.toProtobufJSON(options)
        : null,
      webhookStatus: this.webhookStatus
        ? this.webhookStatus.toProtobufJSON(options)
        : null
    };
  }
}
export module DetectIntentResponse {
  /**
   * Standard JavaScript object representation for DetectIntentResponse
   */
  export interface AsObject {
    responseId: string;
    queryResult?: QueryResult.AsObject;
    webhookStatus?: googleRpc011.Status.AsObject;
  }

  /**
   * Protobuf JSON representation for DetectIntentResponse
   */
  export interface AsProtobufJSON {
    responseId: string;
    queryResult: QueryResult.AsProtobufJSON | null;
    webhookStatus: googleRpc011.Status.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.QueryParameters
 */
export class QueryParameters implements GrpcMessage {
  static id = 'ondewo.nlu.QueryParameters';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QueryParameters();
    QueryParameters.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QueryParameters) {
    _instance.timeZone = _instance.timeZone || '';
    _instance.geoLocation = _instance.geoLocation || undefined;
    _instance.contexts = _instance.contexts || [];
    _instance.resetContexts = _instance.resetContexts || false;
    _instance.payload = _instance.payload || undefined;
    _instance.labels = _instance.labels || [];
    _instance.platforms = _instance.platforms || [];
    _instance.accountId = _instance.accountId || '';
    _instance.propertyId = _instance.propertyId || '';
    _instance.datastreamId = _instance.datastreamId || '';
    _instance.originId = _instance.originId || '';
    _instance.identifiedUserId = _instance.identifiedUserId || '';
    _instance.transcriptions = _instance.transcriptions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QueryParameters,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timeZone = _reader.readString();
          break;
        case 2:
          _instance.geoLocation = new googleType012.LatLng();
          _reader.readMessage(
            _instance.geoLocation,
            googleType012.LatLng.deserializeBinaryFromReader
          );
          break;
        case 3:
          const messageInitializer3 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer3,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.resetContexts = _reader.readBool();
          break;
        case 6:
          _instance.payload = new googleProtobuf010.Struct();
          _reader.readMessage(
            _instance.payload,
            googleProtobuf010.Struct.deserializeBinaryFromReader
          );
          break;
        case 7:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _reader.readPackableEnumInto(
            (_instance.platforms = _instance.platforms || [])
          );
          break;
        case 9:
          _instance.accountId = _reader.readString();
          break;
        case 10:
          _instance.propertyId = _reader.readString();
          break;
        case 11:
          _instance.datastreamId = _reader.readString();
          break;
        case 12:
          _instance.originId = _reader.readString();
          break;
        case 13:
          _instance.identifiedUserId = _reader.readString();
          break;
        case 14:
          const messageInitializer14 = new S2tTranscription();
          _reader.readMessage(
            messageInitializer14,
            S2tTranscription.deserializeBinaryFromReader
          );
          (_instance.transcriptions = _instance.transcriptions || []).push(
            messageInitializer14
          );
          break;
        default:
          _reader.skipField();
      }
    }

    QueryParameters.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QueryParameters,
    _writer: BinaryWriter
  ) {
    if (_instance.timeZone) {
      _writer.writeString(1, _instance.timeZone);
    }
    if (_instance.geoLocation) {
      _writer.writeMessage(
        2,
        _instance.geoLocation as any,
        googleType012.LatLng.serializeBinaryToWriter
      );
    }
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.contexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.resetContexts) {
      _writer.writeBool(4, _instance.resetContexts);
    }
    if (_instance.payload) {
      _writer.writeMessage(
        6,
        _instance.payload as any,
        googleProtobuf010.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(7, _instance.labels);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(8, _instance.platforms);
    }
    if (_instance.accountId) {
      _writer.writeString(9, _instance.accountId);
    }
    if (_instance.propertyId) {
      _writer.writeString(10, _instance.propertyId);
    }
    if (_instance.datastreamId) {
      _writer.writeString(11, _instance.datastreamId);
    }
    if (_instance.originId) {
      _writer.writeString(12, _instance.originId);
    }
    if (_instance.identifiedUserId) {
      _writer.writeString(13, _instance.identifiedUserId);
    }
    if (_instance.transcriptions && _instance.transcriptions.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.transcriptions as any,
        S2tTranscription.serializeBinaryToWriter
      );
    }
  }

  private _timeZone: string;
  private _geoLocation?: googleType012.LatLng;
  private _contexts?: ondewoNlu007.Context[];
  private _resetContexts: boolean;
  private _payload?: googleProtobuf010.Struct;
  private _labels: string[];
  private _platforms: ondewoNlu013.Intent.Message.Platform[];
  private _accountId: string;
  private _propertyId: string;
  private _datastreamId: string;
  private _originId: string;
  private _identifiedUserId: string;
  private _transcriptions?: S2tTranscription[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QueryParameters to deeply clone from
   */
  constructor(_value?: RecursivePartial<QueryParameters.AsObject>) {
    _value = _value || {};
    this.timeZone = _value.timeZone;
    this.geoLocation = _value.geoLocation
      ? new googleType012.LatLng(_value.geoLocation)
      : undefined;
    this.contexts = (_value.contexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.resetContexts = _value.resetContexts;
    this.payload = _value.payload
      ? new googleProtobuf010.Struct(_value.payload)
      : undefined;
    this.labels = (_value.labels || []).slice();
    this.platforms = (_value.platforms || []).slice();
    this.accountId = _value.accountId;
    this.propertyId = _value.propertyId;
    this.datastreamId = _value.datastreamId;
    this.originId = _value.originId;
    this.identifiedUserId = _value.identifiedUserId;
    this.transcriptions = (_value.transcriptions || []).map(
      m => new S2tTranscription(m)
    );
    QueryParameters.refineValues(this);
  }
  get timeZone(): string {
    return this._timeZone;
  }
  set timeZone(value: string) {
    this._timeZone = value;
  }
  get geoLocation(): googleType012.LatLng | undefined {
    return this._geoLocation;
  }
  set geoLocation(value: googleType012.LatLng | undefined) {
    this._geoLocation = value;
  }
  get contexts(): ondewoNlu007.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu007.Context[] | undefined) {
    this._contexts = value;
  }
  get resetContexts(): boolean {
    return this._resetContexts;
  }
  set resetContexts(value: boolean) {
    this._resetContexts = value;
  }
  get payload(): googleProtobuf010.Struct | undefined {
    return this._payload;
  }
  set payload(value: googleProtobuf010.Struct | undefined) {
    this._payload = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }
  get platforms(): ondewoNlu013.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu013.Intent.Message.Platform[]) {
    this._platforms = value;
  }
  get accountId(): string {
    return this._accountId;
  }
  set accountId(value: string) {
    this._accountId = value;
  }
  get propertyId(): string {
    return this._propertyId;
  }
  set propertyId(value: string) {
    this._propertyId = value;
  }
  get datastreamId(): string {
    return this._datastreamId;
  }
  set datastreamId(value: string) {
    this._datastreamId = value;
  }
  get originId(): string {
    return this._originId;
  }
  set originId(value: string) {
    this._originId = value;
  }
  get identifiedUserId(): string {
    return this._identifiedUserId;
  }
  set identifiedUserId(value: string) {
    this._identifiedUserId = value;
  }
  get transcriptions(): S2tTranscription[] | undefined {
    return this._transcriptions;
  }
  set transcriptions(value: S2tTranscription[] | undefined) {
    this._transcriptions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QueryParameters.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QueryParameters.AsObject {
    return {
      timeZone: this.timeZone,
      geoLocation: this.geoLocation ? this.geoLocation.toObject() : undefined,
      contexts: (this.contexts || []).map(m => m.toObject()),
      resetContexts: this.resetContexts,
      payload: this.payload ? this.payload.toObject() : undefined,
      labels: (this.labels || []).slice(),
      platforms: (this.platforms || []).slice(),
      accountId: this.accountId,
      propertyId: this.propertyId,
      datastreamId: this.datastreamId,
      originId: this.originId,
      identifiedUserId: this.identifiedUserId,
      transcriptions: (this.transcriptions || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QueryParameters.AsProtobufJSON {
    return {
      timeZone: this.timeZone,
      geoLocation: this.geoLocation
        ? this.geoLocation.toProtobufJSON(options)
        : null,
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
      resetContexts: this.resetContexts,
      payload: this.payload ? this.payload.toProtobufJSON(options) : null,
      labels: (this.labels || []).slice(),
      platforms: (this.platforms || []).map(
        v => ondewoNlu013.Intent.Message.Platform[v]
      ),
      accountId: this.accountId,
      propertyId: this.propertyId,
      datastreamId: this.datastreamId,
      originId: this.originId,
      identifiedUserId: this.identifiedUserId,
      transcriptions: (this.transcriptions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module QueryParameters {
  /**
   * Standard JavaScript object representation for QueryParameters
   */
  export interface AsObject {
    timeZone: string;
    geoLocation?: googleType012.LatLng.AsObject;
    contexts?: ondewoNlu007.Context.AsObject[];
    resetContexts: boolean;
    payload?: googleProtobuf010.Struct.AsObject;
    labels: string[];
    platforms: ondewoNlu013.Intent.Message.Platform[];
    accountId: string;
    propertyId: string;
    datastreamId: string;
    originId: string;
    identifiedUserId: string;
    transcriptions?: S2tTranscription.AsObject[];
  }

  /**
   * Protobuf JSON representation for QueryParameters
   */
  export interface AsProtobufJSON {
    timeZone: string;
    geoLocation: googleType012.LatLng.AsProtobufJSON | null;
    contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    resetContexts: boolean;
    payload: googleProtobuf010.Struct.AsProtobufJSON | null;
    labels: string[];
    platforms: string[];
    accountId: string;
    propertyId: string;
    datastreamId: string;
    originId: string;
    identifiedUserId: string;
    transcriptions: S2tTranscription.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.S2tTranscription
 */
export class S2tTranscription implements GrpcMessage {
  static id = 'ondewo.nlu.S2tTranscription';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tTranscription();
    S2tTranscription.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tTranscription) {
    _instance.name = _instance.name || '';
    _instance.text = _instance.text || '';
    _instance.score = _instance.score || 0;
    _instance.languageCode = _instance.languageCode || '';
    _instance.audioResourceName = _instance.audioResourceName || '';
    _instance.pipelineId = _instance.pipelineId || '';
    _instance.durationInS = _instance.durationInS || 0;
    _instance.transcriptionType = _instance.transcriptionType || 0;
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
    _instance: S2tTranscription,
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
          _instance.score = _reader.readFloat();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.audioResourceName = _reader.readString();
          break;
        case 6:
          _instance.pipelineId = _reader.readString();
          break;
        case 7:
          _instance.durationInS = _reader.readFloat();
          break;
        case 8:
          _instance.transcriptionType = _reader.readEnum();
          break;
        case 9:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
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

    S2tTranscription.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tTranscription,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
    if (_instance.score) {
      _writer.writeFloat(3, _instance.score);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.audioResourceName) {
      _writer.writeString(5, _instance.audioResourceName);
    }
    if (_instance.pipelineId) {
      _writer.writeString(6, _instance.pipelineId);
    }
    if (_instance.durationInS) {
      _writer.writeFloat(7, _instance.durationInS);
    }
    if (_instance.transcriptionType) {
      _writer.writeEnum(8, _instance.transcriptionType);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        9,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        10,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(11, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(12, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _text: string;
  private _score: number;
  private _languageCode: string;
  private _audioResourceName: string;
  private _pipelineId: string;
  private _durationInS: number;
  private _transcriptionType: TranscriptionType;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tTranscription to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tTranscription.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.text = _value.text;
    this.score = _value.score;
    this.languageCode = _value.languageCode;
    this.audioResourceName = _value.audioResourceName;
    this.pipelineId = _value.pipelineId;
    this.durationInS = _value.durationInS;
    this.transcriptionType = _value.transcriptionType;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    S2tTranscription.refineValues(this);
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
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get audioResourceName(): string {
    return this._audioResourceName;
  }
  set audioResourceName(value: string) {
    this._audioResourceName = value;
  }
  get pipelineId(): string {
    return this._pipelineId;
  }
  set pipelineId(value: string) {
    this._pipelineId = value;
  }
  get durationInS(): number {
    return this._durationInS;
  }
  set durationInS(value: number) {
    this._durationInS = value;
  }
  get transcriptionType(): TranscriptionType {
    return this._transcriptionType;
  }
  set transcriptionType(value: TranscriptionType) {
    this._transcriptionType = value;
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
    S2tTranscription.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tTranscription.AsObject {
    return {
      name: this.name,
      text: this.text,
      score: this.score,
      languageCode: this.languageCode,
      audioResourceName: this.audioResourceName,
      pipelineId: this.pipelineId,
      durationInS: this.durationInS,
      transcriptionType: this.transcriptionType,
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
  ): S2tTranscription.AsProtobufJSON {
    return {
      name: this.name,
      text: this.text,
      score: this.score,
      languageCode: this.languageCode,
      audioResourceName: this.audioResourceName,
      pipelineId: this.pipelineId,
      durationInS: this.durationInS,
      transcriptionType:
        TranscriptionType[
          this.transcriptionType === null ||
          this.transcriptionType === undefined
            ? 0
            : this.transcriptionType
        ],
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module S2tTranscription {
  /**
   * Standard JavaScript object representation for S2tTranscription
   */
  export interface AsObject {
    name: string;
    text: string;
    score: number;
    languageCode: string;
    audioResourceName: string;
    pipelineId: string;
    durationInS: number;
    transcriptionType: TranscriptionType;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for S2tTranscription
   */
  export interface AsProtobufJSON {
    name: string;
    text: string;
    score: number;
    languageCode: string;
    audioResourceName: string;
    pipelineId: string;
    durationInS: number;
    transcriptionType: string;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.QueryInput
 */
export class QueryInput implements GrpcMessage {
  static id = 'ondewo.nlu.QueryInput';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QueryInput();
    QueryInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QueryInput) {
    _instance.fileResources = _instance.fileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QueryInput,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioConfig = new InputAudioConfig();
          _reader.readMessage(
            _instance.audioConfig,
            InputAudioConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.text = new TextInput();
          _reader.readMessage(
            _instance.text,
            TextInput.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.event = new EventInput();
          _reader.readMessage(
            _instance.event,
            EventInput.deserializeBinaryFromReader
          );
          break;
        case 4:
          const messageInitializer4 = new FileResource();
          _reader.readMessage(
            messageInitializer4,
            FileResource.deserializeBinaryFromReader
          );
          (_instance.fileResources = _instance.fileResources || []).push(
            messageInitializer4
          );
          break;
        default:
          _reader.skipField();
      }
    }

    QueryInput.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: QueryInput, _writer: BinaryWriter) {
    if (_instance.audioConfig) {
      _writer.writeMessage(
        1,
        _instance.audioConfig as any,
        InputAudioConfig.serializeBinaryToWriter
      );
    }
    if (_instance.text) {
      _writer.writeMessage(
        2,
        _instance.text as any,
        TextInput.serializeBinaryToWriter
      );
    }
    if (_instance.event) {
      _writer.writeMessage(
        3,
        _instance.event as any,
        EventInput.serializeBinaryToWriter
      );
    }
    if (_instance.fileResources && _instance.fileResources.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.fileResources as any,
        FileResource.serializeBinaryToWriter
      );
    }
  }

  private _audioConfig?: InputAudioConfig;
  private _text?: TextInput;
  private _event?: EventInput;
  private _fileResources?: FileResource[];

  private _input: QueryInput.InputCase = QueryInput.InputCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QueryInput to deeply clone from
   */
  constructor(_value?: RecursivePartial<QueryInput.AsObject>) {
    _value = _value || {};
    this.audioConfig = _value.audioConfig
      ? new InputAudioConfig(_value.audioConfig)
      : undefined;
    this.text = _value.text ? new TextInput(_value.text) : undefined;
    this.event = _value.event ? new EventInput(_value.event) : undefined;
    this.fileResources = (_value.fileResources || []).map(
      m => new FileResource(m)
    );
    QueryInput.refineValues(this);
  }
  get audioConfig(): InputAudioConfig | undefined {
    return this._audioConfig;
  }
  set audioConfig(value: InputAudioConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._text = this._event = undefined;
      this._input = QueryInput.InputCase.audioConfig;
    }
    this._audioConfig = value;
  }
  get text(): TextInput | undefined {
    return this._text;
  }
  set text(value: TextInput | undefined) {
    if (value !== undefined && value !== null) {
      this._audioConfig = this._event = undefined;
      this._input = QueryInput.InputCase.text;
    }
    this._text = value;
  }
  get event(): EventInput | undefined {
    return this._event;
  }
  set event(value: EventInput | undefined) {
    if (value !== undefined && value !== null) {
      this._audioConfig = this._text = undefined;
      this._input = QueryInput.InputCase.event;
    }
    this._event = value;
  }
  get fileResources(): FileResource[] | undefined {
    return this._fileResources;
  }
  set fileResources(value: FileResource[] | undefined) {
    this._fileResources = value;
  }
  get input() {
    return this._input;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QueryInput.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QueryInput.AsObject {
    return {
      audioConfig: this.audioConfig ? this.audioConfig.toObject() : undefined,
      text: this.text ? this.text.toObject() : undefined,
      event: this.event ? this.event.toObject() : undefined,
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
  ): QueryInput.AsProtobufJSON {
    return {
      audioConfig: this.audioConfig
        ? this.audioConfig.toProtobufJSON(options)
        : null,
      text: this.text ? this.text.toProtobufJSON(options) : null,
      event: this.event ? this.event.toProtobufJSON(options) : null,
      fileResources: (this.fileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module QueryInput {
  /**
   * Standard JavaScript object representation for QueryInput
   */
  export interface AsObject {
    audioConfig?: InputAudioConfig.AsObject;
    text?: TextInput.AsObject;
    event?: EventInput.AsObject;
    fileResources?: FileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for QueryInput
   */
  export interface AsProtobufJSON {
    audioConfig: InputAudioConfig.AsProtobufJSON | null;
    text: TextInput.AsProtobufJSON | null;
    event: EventInput.AsProtobufJSON | null;
    fileResources: FileResource.AsProtobufJSON[] | null;
  }
  export enum InputCase {
    none = 0,
    audioConfig = 1,
    text = 2,
    event = 3
  }
}

/**
 * Message implementation for ondewo.nlu.QueryResult
 */
export class QueryResult implements GrpcMessage {
  static id = 'ondewo.nlu.QueryResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QueryResult();
    QueryResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QueryResult) {
    _instance.queryText = _instance.queryText || '';
    _instance.speechRecognitionConfidence =
      _instance.speechRecognitionConfidence || 0;
    _instance.action = _instance.action || '';
    _instance.parameters = _instance.parameters || undefined;
    _instance.allRequiredParamsPresent =
      _instance.allRequiredParamsPresent || false;
    _instance.fulfillmentText = _instance.fulfillmentText || '';
    _instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
    _instance.webhookSource = _instance.webhookSource || '';
    _instance.webhookPayload = _instance.webhookPayload || undefined;
    _instance.outputContexts = _instance.outputContexts || [];
    _instance.intent = _instance.intent || undefined;
    _instance.intentDetectionConfidence =
      _instance.intentDetectionConfidence || 0;
    _instance.queryTextOriginal = _instance.queryTextOriginal || '';
    _instance.diagnosticInfo = _instance.diagnosticInfo || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.fileResources = _instance.fileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QueryResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.queryText = _reader.readString();
          break;
        case 2:
          _instance.speechRecognitionConfidence = _reader.readFloat();
          break;
        case 3:
          _instance.action = _reader.readString();
          break;
        case 4:
          _instance.parameters = new googleProtobuf010.Struct();
          _reader.readMessage(
            _instance.parameters,
            googleProtobuf010.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.allRequiredParamsPresent = _reader.readBool();
          break;
        case 6:
          _instance.fulfillmentText = _reader.readString();
          break;
        case 7:
          const messageInitializer7 = new ondewoNlu013.Intent.Message();
          _reader.readMessage(
            messageInitializer7,
            ondewoNlu013.Intent.Message.deserializeBinaryFromReader
          );
          (_instance.fulfillmentMessages =
            _instance.fulfillmentMessages || []).push(messageInitializer7);
          break;
        case 8:
          _instance.webhookSource = _reader.readString();
          break;
        case 9:
          _instance.webhookPayload = new googleProtobuf010.Struct();
          _reader.readMessage(
            _instance.webhookPayload,
            googleProtobuf010.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          const messageInitializer10 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer10,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.outputContexts = _instance.outputContexts || []).push(
            messageInitializer10
          );
          break;
        case 11:
          _instance.intent = new ondewoNlu013.Intent();
          _reader.readMessage(
            _instance.intent,
            ondewoNlu013.Intent.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.intentDetectionConfidence = _reader.readFloat();
          break;
        case 13:
          _instance.queryTextOriginal = _reader.readString();
          break;
        case 14:
          _instance.diagnosticInfo = new googleProtobuf010.Struct();
          _reader.readMessage(
            _instance.diagnosticInfo,
            googleProtobuf010.Struct.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.languageCode = _reader.readString();
          break;
        case 16:
          const messageInitializer16 = new FileResource();
          _reader.readMessage(
            messageInitializer16,
            FileResource.deserializeBinaryFromReader
          );
          (_instance.fileResources = _instance.fileResources || []).push(
            messageInitializer16
          );
          break;
        default:
          _reader.skipField();
      }
    }

    QueryResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QueryResult,
    _writer: BinaryWriter
  ) {
    if (_instance.queryText) {
      _writer.writeString(1, _instance.queryText);
    }
    if (_instance.speechRecognitionConfidence) {
      _writer.writeFloat(2, _instance.speechRecognitionConfidence);
    }
    if (_instance.action) {
      _writer.writeString(3, _instance.action);
    }
    if (_instance.parameters) {
      _writer.writeMessage(
        4,
        _instance.parameters as any,
        googleProtobuf010.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.allRequiredParamsPresent) {
      _writer.writeBool(5, _instance.allRequiredParamsPresent);
    }
    if (_instance.fulfillmentText) {
      _writer.writeString(6, _instance.fulfillmentText);
    }
    if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.fulfillmentMessages as any,
        ondewoNlu013.Intent.Message.serializeBinaryToWriter
      );
    }
    if (_instance.webhookSource) {
      _writer.writeString(8, _instance.webhookSource);
    }
    if (_instance.webhookPayload) {
      _writer.writeMessage(
        9,
        _instance.webhookPayload as any,
        googleProtobuf010.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.outputContexts && _instance.outputContexts.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.outputContexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.intent) {
      _writer.writeMessage(
        11,
        _instance.intent as any,
        ondewoNlu013.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.intentDetectionConfidence) {
      _writer.writeFloat(12, _instance.intentDetectionConfidence);
    }
    if (_instance.queryTextOriginal) {
      _writer.writeString(13, _instance.queryTextOriginal);
    }
    if (_instance.diagnosticInfo) {
      _writer.writeMessage(
        14,
        _instance.diagnosticInfo as any,
        googleProtobuf010.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(15, _instance.languageCode);
    }
    if (_instance.fileResources && _instance.fileResources.length) {
      _writer.writeRepeatedMessage(
        16,
        _instance.fileResources as any,
        FileResource.serializeBinaryToWriter
      );
    }
  }

  private _queryText: string;
  private _speechRecognitionConfidence: number;
  private _action: string;
  private _parameters?: googleProtobuf010.Struct;
  private _allRequiredParamsPresent: boolean;
  private _fulfillmentText: string;
  private _fulfillmentMessages?: ondewoNlu013.Intent.Message[];
  private _webhookSource: string;
  private _webhookPayload?: googleProtobuf010.Struct;
  private _outputContexts?: ondewoNlu007.Context[];
  private _intent?: ondewoNlu013.Intent;
  private _intentDetectionConfidence: number;
  private _queryTextOriginal: string;
  private _diagnosticInfo?: googleProtobuf010.Struct;
  private _languageCode: string;
  private _fileResources?: FileResource[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QueryResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<QueryResult.AsObject>) {
    _value = _value || {};
    this.queryText = _value.queryText;
    this.speechRecognitionConfidence = _value.speechRecognitionConfidence;
    this.action = _value.action;
    this.parameters = _value.parameters
      ? new googleProtobuf010.Struct(_value.parameters)
      : undefined;
    this.allRequiredParamsPresent = _value.allRequiredParamsPresent;
    this.fulfillmentText = _value.fulfillmentText;
    this.fulfillmentMessages = (_value.fulfillmentMessages || []).map(
      m => new ondewoNlu013.Intent.Message(m)
    );
    this.webhookSource = _value.webhookSource;
    this.webhookPayload = _value.webhookPayload
      ? new googleProtobuf010.Struct(_value.webhookPayload)
      : undefined;
    this.outputContexts = (_value.outputContexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.intent = _value.intent
      ? new ondewoNlu013.Intent(_value.intent)
      : undefined;
    this.intentDetectionConfidence = _value.intentDetectionConfidence;
    this.queryTextOriginal = _value.queryTextOriginal;
    this.diagnosticInfo = _value.diagnosticInfo
      ? new googleProtobuf010.Struct(_value.diagnosticInfo)
      : undefined;
    this.languageCode = _value.languageCode;
    this.fileResources = (_value.fileResources || []).map(
      m => new FileResource(m)
    );
    QueryResult.refineValues(this);
  }
  get queryText(): string {
    return this._queryText;
  }
  set queryText(value: string) {
    this._queryText = value;
  }
  get speechRecognitionConfidence(): number {
    return this._speechRecognitionConfidence;
  }
  set speechRecognitionConfidence(value: number) {
    this._speechRecognitionConfidence = value;
  }
  get action(): string {
    return this._action;
  }
  set action(value: string) {
    this._action = value;
  }
  get parameters(): googleProtobuf010.Struct | undefined {
    return this._parameters;
  }
  set parameters(value: googleProtobuf010.Struct | undefined) {
    this._parameters = value;
  }
  get allRequiredParamsPresent(): boolean {
    return this._allRequiredParamsPresent;
  }
  set allRequiredParamsPresent(value: boolean) {
    this._allRequiredParamsPresent = value;
  }
  get fulfillmentText(): string {
    return this._fulfillmentText;
  }
  set fulfillmentText(value: string) {
    this._fulfillmentText = value;
  }
  get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined {
    return this._fulfillmentMessages;
  }
  set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined) {
    this._fulfillmentMessages = value;
  }
  get webhookSource(): string {
    return this._webhookSource;
  }
  set webhookSource(value: string) {
    this._webhookSource = value;
  }
  get webhookPayload(): googleProtobuf010.Struct | undefined {
    return this._webhookPayload;
  }
  set webhookPayload(value: googleProtobuf010.Struct | undefined) {
    this._webhookPayload = value;
  }
  get outputContexts(): ondewoNlu007.Context[] | undefined {
    return this._outputContexts;
  }
  set outputContexts(value: ondewoNlu007.Context[] | undefined) {
    this._outputContexts = value;
  }
  get intent(): ondewoNlu013.Intent | undefined {
    return this._intent;
  }
  set intent(value: ondewoNlu013.Intent | undefined) {
    this._intent = value;
  }
  get intentDetectionConfidence(): number {
    return this._intentDetectionConfidence;
  }
  set intentDetectionConfidence(value: number) {
    this._intentDetectionConfidence = value;
  }
  get queryTextOriginal(): string {
    return this._queryTextOriginal;
  }
  set queryTextOriginal(value: string) {
    this._queryTextOriginal = value;
  }
  get diagnosticInfo(): googleProtobuf010.Struct | undefined {
    return this._diagnosticInfo;
  }
  set diagnosticInfo(value: googleProtobuf010.Struct | undefined) {
    this._diagnosticInfo = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get fileResources(): FileResource[] | undefined {
    return this._fileResources;
  }
  set fileResources(value: FileResource[] | undefined) {
    this._fileResources = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QueryResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QueryResult.AsObject {
    return {
      queryText: this.queryText,
      speechRecognitionConfidence: this.speechRecognitionConfidence,
      action: this.action,
      parameters: this.parameters ? this.parameters.toObject() : undefined,
      allRequiredParamsPresent: this.allRequiredParamsPresent,
      fulfillmentText: this.fulfillmentText,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toObject()
      ),
      webhookSource: this.webhookSource,
      webhookPayload: this.webhookPayload
        ? this.webhookPayload.toObject()
        : undefined,
      outputContexts: (this.outputContexts || []).map(m => m.toObject()),
      intent: this.intent ? this.intent.toObject() : undefined,
      intentDetectionConfidence: this.intentDetectionConfidence,
      queryTextOriginal: this.queryTextOriginal,
      diagnosticInfo: this.diagnosticInfo
        ? this.diagnosticInfo.toObject()
        : undefined,
      languageCode: this.languageCode,
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
  ): QueryResult.AsProtobufJSON {
    return {
      queryText: this.queryText,
      speechRecognitionConfidence: this.speechRecognitionConfidence,
      action: this.action,
      parameters: this.parameters
        ? this.parameters.toProtobufJSON(options)
        : null,
      allRequiredParamsPresent: this.allRequiredParamsPresent,
      fulfillmentText: this.fulfillmentText,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toProtobufJSON(options)
      ),
      webhookSource: this.webhookSource,
      webhookPayload: this.webhookPayload
        ? this.webhookPayload.toProtobufJSON(options)
        : null,
      outputContexts: (this.outputContexts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      intent: this.intent ? this.intent.toProtobufJSON(options) : null,
      intentDetectionConfidence: this.intentDetectionConfidence,
      queryTextOriginal: this.queryTextOriginal,
      diagnosticInfo: this.diagnosticInfo
        ? this.diagnosticInfo.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      fileResources: (this.fileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module QueryResult {
  /**
   * Standard JavaScript object representation for QueryResult
   */
  export interface AsObject {
    queryText: string;
    speechRecognitionConfidence: number;
    action: string;
    parameters?: googleProtobuf010.Struct.AsObject;
    allRequiredParamsPresent: boolean;
    fulfillmentText: string;
    fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
    webhookSource: string;
    webhookPayload?: googleProtobuf010.Struct.AsObject;
    outputContexts?: ondewoNlu007.Context.AsObject[];
    intent?: ondewoNlu013.Intent.AsObject;
    intentDetectionConfidence: number;
    queryTextOriginal: string;
    diagnosticInfo?: googleProtobuf010.Struct.AsObject;
    languageCode: string;
    fileResources?: FileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for QueryResult
   */
  export interface AsProtobufJSON {
    queryText: string;
    speechRecognitionConfidence: number;
    action: string;
    parameters: googleProtobuf010.Struct.AsProtobufJSON | null;
    allRequiredParamsPresent: boolean;
    fulfillmentText: string;
    fulfillmentMessages: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
    webhookSource: string;
    webhookPayload: googleProtobuf010.Struct.AsProtobufJSON | null;
    outputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    intent: ondewoNlu013.Intent.AsProtobufJSON | null;
    intentDetectionConfidence: number;
    queryTextOriginal: string;
    diagnosticInfo: googleProtobuf010.Struct.AsProtobufJSON | null;
    languageCode: string;
    fileResources: FileResource.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentRequest
 */
export class StreamingDetectIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.StreamingDetectIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingDetectIntentRequest();
    StreamingDetectIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingDetectIntentRequest) {
    _instance.session = _instance.session || '';
    _instance.queryParams = _instance.queryParams || undefined;
    _instance.queryInput = _instance.queryInput || undefined;
    _instance.singleUtterance = _instance.singleUtterance || false;
    _instance.inputAudio = _instance.inputAudio || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingDetectIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.session = _reader.readString();
          break;
        case 2:
          _instance.queryParams = new QueryParameters();
          _reader.readMessage(
            _instance.queryParams,
            QueryParameters.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.queryInput = new QueryInput();
          _reader.readMessage(
            _instance.queryInput,
            QueryInput.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.singleUtterance = _reader.readBool();
          break;
        case 6:
          _instance.inputAudio = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingDetectIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingDetectIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.session) {
      _writer.writeString(1, _instance.session);
    }
    if (_instance.queryParams) {
      _writer.writeMessage(
        2,
        _instance.queryParams as any,
        QueryParameters.serializeBinaryToWriter
      );
    }
    if (_instance.queryInput) {
      _writer.writeMessage(
        3,
        _instance.queryInput as any,
        QueryInput.serializeBinaryToWriter
      );
    }
    if (_instance.singleUtterance) {
      _writer.writeBool(4, _instance.singleUtterance);
    }
    if (_instance.inputAudio && _instance.inputAudio.length) {
      _writer.writeBytes(6, _instance.inputAudio);
    }
  }

  private _session: string;
  private _queryParams?: QueryParameters;
  private _queryInput?: QueryInput;
  private _singleUtterance: boolean;
  private _inputAudio: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingDetectIntentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamingDetectIntentRequest.AsObject>
  ) {
    _value = _value || {};
    this.session = _value.session;
    this.queryParams = _value.queryParams
      ? new QueryParameters(_value.queryParams)
      : undefined;
    this.queryInput = _value.queryInput
      ? new QueryInput(_value.queryInput)
      : undefined;
    this.singleUtterance = _value.singleUtterance;
    this.inputAudio = _value.inputAudio;
    StreamingDetectIntentRequest.refineValues(this);
  }
  get session(): string {
    return this._session;
  }
  set session(value: string) {
    this._session = value;
  }
  get queryParams(): QueryParameters | undefined {
    return this._queryParams;
  }
  set queryParams(value: QueryParameters | undefined) {
    this._queryParams = value;
  }
  get queryInput(): QueryInput | undefined {
    return this._queryInput;
  }
  set queryInput(value: QueryInput | undefined) {
    this._queryInput = value;
  }
  get singleUtterance(): boolean {
    return this._singleUtterance;
  }
  set singleUtterance(value: boolean) {
    this._singleUtterance = value;
  }
  get inputAudio(): Uint8Array {
    return this._inputAudio;
  }
  set inputAudio(value: Uint8Array) {
    this._inputAudio = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingDetectIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingDetectIntentRequest.AsObject {
    return {
      session: this.session,
      queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
      queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
      singleUtterance: this.singleUtterance,
      inputAudio: this.inputAudio
        ? this.inputAudio.subarray(0)
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
  ): StreamingDetectIntentRequest.AsProtobufJSON {
    return {
      session: this.session,
      queryParams: this.queryParams
        ? this.queryParams.toProtobufJSON(options)
        : null,
      queryInput: this.queryInput
        ? this.queryInput.toProtobufJSON(options)
        : null,
      singleUtterance: this.singleUtterance,
      inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
    };
  }
}
export module StreamingDetectIntentRequest {
  /**
   * Standard JavaScript object representation for StreamingDetectIntentRequest
   */
  export interface AsObject {
    session: string;
    queryParams?: QueryParameters.AsObject;
    queryInput?: QueryInput.AsObject;
    singleUtterance: boolean;
    inputAudio: Uint8Array;
  }

  /**
   * Protobuf JSON representation for StreamingDetectIntentRequest
   */
  export interface AsProtobufJSON {
    session: string;
    queryParams: QueryParameters.AsProtobufJSON | null;
    queryInput: QueryInput.AsProtobufJSON | null;
    singleUtterance: boolean;
    inputAudio: string;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentResponse
 */
export class StreamingDetectIntentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.StreamingDetectIntentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingDetectIntentResponse();
    StreamingDetectIntentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingDetectIntentResponse) {
    _instance.responseId = _instance.responseId || '';
    _instance.recognitionResult = _instance.recognitionResult || undefined;
    _instance.queryResult = _instance.queryResult || undefined;
    _instance.webhookStatus = _instance.webhookStatus || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingDetectIntentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.responseId = _reader.readString();
          break;
        case 2:
          _instance.recognitionResult = new StreamingRecognitionResult();
          _reader.readMessage(
            _instance.recognitionResult,
            StreamingRecognitionResult.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.queryResult = new QueryResult();
          _reader.readMessage(
            _instance.queryResult,
            QueryResult.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.webhookStatus = new googleRpc011.Status();
          _reader.readMessage(
            _instance.webhookStatus,
            googleRpc011.Status.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingDetectIntentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingDetectIntentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.responseId) {
      _writer.writeString(1, _instance.responseId);
    }
    if (_instance.recognitionResult) {
      _writer.writeMessage(
        2,
        _instance.recognitionResult as any,
        StreamingRecognitionResult.serializeBinaryToWriter
      );
    }
    if (_instance.queryResult) {
      _writer.writeMessage(
        3,
        _instance.queryResult as any,
        QueryResult.serializeBinaryToWriter
      );
    }
    if (_instance.webhookStatus) {
      _writer.writeMessage(
        4,
        _instance.webhookStatus as any,
        googleRpc011.Status.serializeBinaryToWriter
      );
    }
  }

  private _responseId: string;
  private _recognitionResult?: StreamingRecognitionResult;
  private _queryResult?: QueryResult;
  private _webhookStatus?: googleRpc011.Status;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingDetectIntentResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamingDetectIntentResponse.AsObject>
  ) {
    _value = _value || {};
    this.responseId = _value.responseId;
    this.recognitionResult = _value.recognitionResult
      ? new StreamingRecognitionResult(_value.recognitionResult)
      : undefined;
    this.queryResult = _value.queryResult
      ? new QueryResult(_value.queryResult)
      : undefined;
    this.webhookStatus = _value.webhookStatus
      ? new googleRpc011.Status(_value.webhookStatus)
      : undefined;
    StreamingDetectIntentResponse.refineValues(this);
  }
  get responseId(): string {
    return this._responseId;
  }
  set responseId(value: string) {
    this._responseId = value;
  }
  get recognitionResult(): StreamingRecognitionResult | undefined {
    return this._recognitionResult;
  }
  set recognitionResult(value: StreamingRecognitionResult | undefined) {
    this._recognitionResult = value;
  }
  get queryResult(): QueryResult | undefined {
    return this._queryResult;
  }
  set queryResult(value: QueryResult | undefined) {
    this._queryResult = value;
  }
  get webhookStatus(): googleRpc011.Status | undefined {
    return this._webhookStatus;
  }
  set webhookStatus(value: googleRpc011.Status | undefined) {
    this._webhookStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingDetectIntentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingDetectIntentResponse.AsObject {
    return {
      responseId: this.responseId,
      recognitionResult: this.recognitionResult
        ? this.recognitionResult.toObject()
        : undefined,
      queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
      webhookStatus: this.webhookStatus
        ? this.webhookStatus.toObject()
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
  ): StreamingDetectIntentResponse.AsProtobufJSON {
    return {
      responseId: this.responseId,
      recognitionResult: this.recognitionResult
        ? this.recognitionResult.toProtobufJSON(options)
        : null,
      queryResult: this.queryResult
        ? this.queryResult.toProtobufJSON(options)
        : null,
      webhookStatus: this.webhookStatus
        ? this.webhookStatus.toProtobufJSON(options)
        : null
    };
  }
}
export module StreamingDetectIntentResponse {
  /**
   * Standard JavaScript object representation for StreamingDetectIntentResponse
   */
  export interface AsObject {
    responseId: string;
    recognitionResult?: StreamingRecognitionResult.AsObject;
    queryResult?: QueryResult.AsObject;
    webhookStatus?: googleRpc011.Status.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamingDetectIntentResponse
   */
  export interface AsProtobufJSON {
    responseId: string;
    recognitionResult: StreamingRecognitionResult.AsProtobufJSON | null;
    queryResult: QueryResult.AsProtobufJSON | null;
    webhookStatus: googleRpc011.Status.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamingRecognitionResult
 */
export class StreamingRecognitionResult implements GrpcMessage {
  static id = 'ondewo.nlu.StreamingRecognitionResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingRecognitionResult();
    StreamingRecognitionResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingRecognitionResult) {
    _instance.messageType = _instance.messageType || 0;
    _instance.transcript = _instance.transcript || '';
    _instance.isFinal = _instance.isFinal || false;
    _instance.confidence = _instance.confidence || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingRecognitionResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.messageType = _reader.readEnum();
          break;
        case 2:
          _instance.transcript = _reader.readString();
          break;
        case 3:
          _instance.isFinal = _reader.readBool();
          break;
        case 4:
          _instance.confidence = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingRecognitionResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingRecognitionResult,
    _writer: BinaryWriter
  ) {
    if (_instance.messageType) {
      _writer.writeEnum(1, _instance.messageType);
    }
    if (_instance.transcript) {
      _writer.writeString(2, _instance.transcript);
    }
    if (_instance.isFinal) {
      _writer.writeBool(3, _instance.isFinal);
    }
    if (_instance.confidence) {
      _writer.writeFloat(4, _instance.confidence);
    }
  }

  private _messageType: StreamingRecognitionResult.MessageType;
  private _transcript: string;
  private _isFinal: boolean;
  private _confidence: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingRecognitionResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingRecognitionResult.AsObject>) {
    _value = _value || {};
    this.messageType = _value.messageType;
    this.transcript = _value.transcript;
    this.isFinal = _value.isFinal;
    this.confidence = _value.confidence;
    StreamingRecognitionResult.refineValues(this);
  }
  get messageType(): StreamingRecognitionResult.MessageType {
    return this._messageType;
  }
  set messageType(value: StreamingRecognitionResult.MessageType) {
    this._messageType = value;
  }
  get transcript(): string {
    return this._transcript;
  }
  set transcript(value: string) {
    this._transcript = value;
  }
  get isFinal(): boolean {
    return this._isFinal;
  }
  set isFinal(value: boolean) {
    this._isFinal = value;
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
    StreamingRecognitionResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingRecognitionResult.AsObject {
    return {
      messageType: this.messageType,
      transcript: this.transcript,
      isFinal: this.isFinal,
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
  ): StreamingRecognitionResult.AsProtobufJSON {
    return {
      messageType:
        StreamingRecognitionResult.MessageType[
          this.messageType === null || this.messageType === undefined
            ? 0
            : this.messageType
        ],
      transcript: this.transcript,
      isFinal: this.isFinal,
      confidence: this.confidence
    };
  }
}
export module StreamingRecognitionResult {
  /**
   * Standard JavaScript object representation for StreamingRecognitionResult
   */
  export interface AsObject {
    messageType: StreamingRecognitionResult.MessageType;
    transcript: string;
    isFinal: boolean;
    confidence: number;
  }

  /**
   * Protobuf JSON representation for StreamingRecognitionResult
   */
  export interface AsProtobufJSON {
    messageType: string;
    transcript: string;
    isFinal: boolean;
    confidence: number;
  }
  export enum MessageType {
    MESSAGE_TYPE_UNSPECIFIED = 0,
    TRANSCRIPT = 1,
    END_OF_SINGLE_UTTERANCE = 2
  }
}

/**
 * Message implementation for ondewo.nlu.InputAudioConfig
 */
export class InputAudioConfig implements GrpcMessage {
  static id = 'ondewo.nlu.InputAudioConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InputAudioConfig();
    InputAudioConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InputAudioConfig) {
    _instance.audioEncoding = _instance.audioEncoding || 0;
    _instance.sampleRateHertz = _instance.sampleRateHertz || 0;
    _instance.languageCode = _instance.languageCode || '';
    _instance.phraseHints = _instance.phraseHints || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InputAudioConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioEncoding = _reader.readEnum();
          break;
        case 2:
          _instance.sampleRateHertz = _reader.readInt32();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          (_instance.phraseHints = _instance.phraseHints || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    InputAudioConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InputAudioConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.audioEncoding) {
      _writer.writeEnum(1, _instance.audioEncoding);
    }
    if (_instance.sampleRateHertz) {
      _writer.writeInt32(2, _instance.sampleRateHertz);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.phraseHints && _instance.phraseHints.length) {
      _writer.writeRepeatedString(4, _instance.phraseHints);
    }
  }

  private _audioEncoding: AudioEncoding;
  private _sampleRateHertz: number;
  private _languageCode: string;
  private _phraseHints: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InputAudioConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<InputAudioConfig.AsObject>) {
    _value = _value || {};
    this.audioEncoding = _value.audioEncoding;
    this.sampleRateHertz = _value.sampleRateHertz;
    this.languageCode = _value.languageCode;
    this.phraseHints = (_value.phraseHints || []).slice();
    InputAudioConfig.refineValues(this);
  }
  get audioEncoding(): AudioEncoding {
    return this._audioEncoding;
  }
  set audioEncoding(value: AudioEncoding) {
    this._audioEncoding = value;
  }
  get sampleRateHertz(): number {
    return this._sampleRateHertz;
  }
  set sampleRateHertz(value: number) {
    this._sampleRateHertz = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get phraseHints(): string[] {
    return this._phraseHints;
  }
  set phraseHints(value: string[]) {
    this._phraseHints = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InputAudioConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InputAudioConfig.AsObject {
    return {
      audioEncoding: this.audioEncoding,
      sampleRateHertz: this.sampleRateHertz,
      languageCode: this.languageCode,
      phraseHints: (this.phraseHints || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): InputAudioConfig.AsProtobufJSON {
    return {
      audioEncoding:
        AudioEncoding[
          this.audioEncoding === null || this.audioEncoding === undefined
            ? 0
            : this.audioEncoding
        ],
      sampleRateHertz: this.sampleRateHertz,
      languageCode: this.languageCode,
      phraseHints: (this.phraseHints || []).slice()
    };
  }
}
export module InputAudioConfig {
  /**
   * Standard JavaScript object representation for InputAudioConfig
   */
  export interface AsObject {
    audioEncoding: AudioEncoding;
    sampleRateHertz: number;
    languageCode: string;
    phraseHints: string[];
  }

  /**
   * Protobuf JSON representation for InputAudioConfig
   */
  export interface AsProtobufJSON {
    audioEncoding: string;
    sampleRateHertz: number;
    languageCode: string;
    phraseHints: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.TextInput
 */
export class TextInput implements GrpcMessage {
  static id = 'ondewo.nlu.TextInput';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TextInput();
    TextInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TextInput) {
    _instance.text = _instance.text || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TextInput,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TextInput.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TextInput, _writer: BinaryWriter) {
    if (_instance.text) {
      _writer.writeString(1, _instance.text);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
  }

  private _text: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TextInput to deeply clone from
   */
  constructor(_value?: RecursivePartial<TextInput.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    this.languageCode = _value.languageCode;
    TextInput.refineValues(this);
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TextInput.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TextInput.AsObject {
    return {
      text: this.text,
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
  ): TextInput.AsProtobufJSON {
    return {
      text: this.text,
      languageCode: this.languageCode
    };
  }
}
export module TextInput {
  /**
   * Standard JavaScript object representation for TextInput
   */
  export interface AsObject {
    text: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for TextInput
   */
  export interface AsProtobufJSON {
    text: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.EventInput
 */
export class EventInput implements GrpcMessage {
  static id = 'ondewo.nlu.EventInput';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EventInput();
    EventInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EventInput) {
    _instance.name = _instance.name || '';
    _instance.parameters = _instance.parameters || undefined;
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EventInput,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parameters = new googleProtobuf010.Struct();
          _reader.readMessage(
            _instance.parameters,
            googleProtobuf010.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    EventInput.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: EventInput, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parameters) {
      _writer.writeMessage(
        2,
        _instance.parameters as any,
        googleProtobuf010.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parameters?: googleProtobuf010.Struct;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EventInput to deeply clone from
   */
  constructor(_value?: RecursivePartial<EventInput.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.parameters = _value.parameters
      ? new googleProtobuf010.Struct(_value.parameters)
      : undefined;
    this.languageCode = _value.languageCode;
    EventInput.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parameters(): googleProtobuf010.Struct | undefined {
    return this._parameters;
  }
  set parameters(value: googleProtobuf010.Struct | undefined) {
    this._parameters = value;
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
    EventInput.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EventInput.AsObject {
    return {
      name: this.name,
      parameters: this.parameters ? this.parameters.toObject() : undefined,
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
  ): EventInput.AsProtobufJSON {
    return {
      name: this.name,
      parameters: this.parameters
        ? this.parameters.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode
    };
  }
}
export module EventInput {
  /**
   * Standard JavaScript object representation for EventInput
   */
  export interface AsObject {
    name: string;
    parameters?: googleProtobuf010.Struct.AsObject;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for EventInput
   */
  export interface AsProtobufJSON {
    name: string;
    parameters: googleProtobuf010.Struct.AsProtobufJSON | null;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.Session
 */
export class Session implements GrpcMessage {
  static id = 'ondewo.nlu.Session';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Session();
    Session.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Session) {
    _instance.name = _instance.name || '';
    _instance.sessionSteps = _instance.sessionSteps || [];
    _instance.sessionInfo = _instance.sessionInfo || undefined;
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
    _instance: Session,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new SessionStep();
          _reader.readMessage(
            messageInitializer2,
            SessionStep.deserializeBinaryFromReader
          );
          (_instance.sessionSteps = _instance.sessionSteps || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.sessionInfo = new SessionInfo();
          _reader.readMessage(
            _instance.sessionInfo,
            SessionInfo.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
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

    Session.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Session, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.sessionSteps && _instance.sessionSteps.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.sessionSteps as any,
        SessionStep.serializeBinaryToWriter
      );
    }
    if (_instance.sessionInfo) {
      _writer.writeMessage(
        3,
        _instance.sessionInfo as any,
        SessionInfo.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        5,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
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
  private _sessionSteps?: SessionStep[];
  private _sessionInfo?: SessionInfo;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Session to deeply clone from
   */
  constructor(_value?: RecursivePartial<Session.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.sessionSteps = (_value.sessionSteps || []).map(
      m => new SessionStep(m)
    );
    this.sessionInfo = _value.sessionInfo
      ? new SessionInfo(_value.sessionInfo)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    Session.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get sessionSteps(): SessionStep[] | undefined {
    return this._sessionSteps;
  }
  set sessionSteps(value: SessionStep[] | undefined) {
    this._sessionSteps = value;
  }
  get sessionInfo(): SessionInfo | undefined {
    return this._sessionInfo;
  }
  set sessionInfo(value: SessionInfo | undefined) {
    this._sessionInfo = value;
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
    Session.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Session.AsObject {
    return {
      name: this.name,
      sessionSteps: (this.sessionSteps || []).map(m => m.toObject()),
      sessionInfo: this.sessionInfo ? this.sessionInfo.toObject() : undefined,
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
  ): Session.AsProtobufJSON {
    return {
      name: this.name,
      sessionSteps: (this.sessionSteps || []).map(m =>
        m.toProtobufJSON(options)
      ),
      sessionInfo: this.sessionInfo
        ? this.sessionInfo.toProtobufJSON(options)
        : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module Session {
  /**
   * Standard JavaScript object representation for Session
   */
  export interface AsObject {
    name: string;
    sessionSteps?: SessionStep.AsObject[];
    sessionInfo?: SessionInfo.AsObject;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for Session
   */
  export interface AsProtobufJSON {
    name: string;
    sessionSteps: SessionStep.AsProtobufJSON[] | null;
    sessionInfo: SessionInfo.AsProtobufJSON | null;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
  export enum View {
    VIEW_UNSPECIFIED = 0,
    VIEW_FULL = 1,
    VIEW_SPARSE = 2
  }
}

/**
 * Message implementation for ondewo.nlu.SessionStep
 */
export class SessionStep implements GrpcMessage {
  static id = 'ondewo.nlu.SessionStep';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionStep();
    SessionStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionStep) {
    _instance.name = _instance.name || '';
    _instance.detectIntentRequest = _instance.detectIntentRequest || undefined;
    _instance.detectIntentResponse =
      _instance.detectIntentResponse || undefined;
    _instance.contexts = _instance.contexts || [];
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.audioFileResources = _instance.audioFileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SessionStep,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.detectIntentRequest = new DetectIntentRequest();
          _reader.readMessage(
            _instance.detectIntentRequest,
            DetectIntentRequest.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.detectIntentResponse = new DetectIntentResponse();
          _reader.readMessage(
            _instance.detectIntentResponse,
            DetectIntentResponse.deserializeBinaryFromReader
          );
          break;
        case 4:
          const messageInitializer4 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer4,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
            messageInitializer4
          );
          break;
        case 5:
          _instance.timestamp = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.createdBy = _reader.readString();
          break;
        case 9:
          _instance.modifiedBy = _reader.readString();
          break;
        case 10:
          const messageInitializer10 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer10,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFileResources =
            _instance.audioFileResources || []).push(messageInitializer10);
          break;
        default:
          _reader.skipField();
      }
    }

    SessionStep.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionStep,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.detectIntentRequest) {
      _writer.writeMessage(
        2,
        _instance.detectIntentRequest as any,
        DetectIntentRequest.serializeBinaryToWriter
      );
    }
    if (_instance.detectIntentResponse) {
      _writer.writeMessage(
        3,
        _instance.detectIntentResponse as any,
        DetectIntentResponse.serializeBinaryToWriter
      );
    }
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.contexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        5,
        _instance.timestamp as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        7,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(8, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(9, _instance.modifiedBy);
    }
    if (_instance.audioFileResources && _instance.audioFileResources.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.audioFileResources as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _detectIntentRequest?: DetectIntentRequest;
  private _detectIntentResponse?: DetectIntentResponse;
  private _contexts?: ondewoNlu007.Context[];
  private _timestamp?: googleProtobuf004.Timestamp;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _audioFileResources?: AudioFileResource[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionStep to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionStep.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.detectIntentRequest = _value.detectIntentRequest
      ? new DetectIntentRequest(_value.detectIntentRequest)
      : undefined;
    this.detectIntentResponse = _value.detectIntentResponse
      ? new DetectIntentResponse(_value.detectIntentResponse)
      : undefined;
    this.contexts = (_value.contexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.timestamp = _value.timestamp
      ? new googleProtobuf004.Timestamp(_value.timestamp)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.audioFileResources = (_value.audioFileResources || []).map(
      m => new AudioFileResource(m)
    );
    SessionStep.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get detectIntentRequest(): DetectIntentRequest | undefined {
    return this._detectIntentRequest;
  }
  set detectIntentRequest(value: DetectIntentRequest | undefined) {
    this._detectIntentRequest = value;
  }
  get detectIntentResponse(): DetectIntentResponse | undefined {
    return this._detectIntentResponse;
  }
  set detectIntentResponse(value: DetectIntentResponse | undefined) {
    this._detectIntentResponse = value;
  }
  get contexts(): ondewoNlu007.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu007.Context[] | undefined) {
    this._contexts = value;
  }
  get timestamp(): googleProtobuf004.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf004.Timestamp | undefined) {
    this._timestamp = value;
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
  get audioFileResources(): AudioFileResource[] | undefined {
    return this._audioFileResources;
  }
  set audioFileResources(value: AudioFileResource[] | undefined) {
    this._audioFileResources = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SessionStep.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionStep.AsObject {
    return {
      name: this.name,
      detectIntentRequest: this.detectIntentRequest
        ? this.detectIntentRequest.toObject()
        : undefined,
      detectIntentResponse: this.detectIntentResponse
        ? this.detectIntentResponse.toObject()
        : undefined,
      contexts: (this.contexts || []).map(m => m.toObject()),
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      audioFileResources: (this.audioFileResources || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SessionStep.AsProtobufJSON {
    return {
      name: this.name,
      detectIntentRequest: this.detectIntentRequest
        ? this.detectIntentRequest.toProtobufJSON(options)
        : null,
      detectIntentResponse: this.detectIntentResponse
        ? this.detectIntentResponse.toProtobufJSON(options)
        : null,
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      audioFileResources: (this.audioFileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module SessionStep {
  /**
   * Standard JavaScript object representation for SessionStep
   */
  export interface AsObject {
    name: string;
    detectIntentRequest?: DetectIntentRequest.AsObject;
    detectIntentResponse?: DetectIntentResponse.AsObject;
    contexts?: ondewoNlu007.Context.AsObject[];
    timestamp?: googleProtobuf004.Timestamp.AsObject;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    audioFileResources?: AudioFileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for SessionStep
   */
  export interface AsProtobufJSON {
    name: string;
    detectIntentRequest: DetectIntentRequest.AsProtobufJSON | null;
    detectIntentResponse: DetectIntentResponse.AsProtobufJSON | null;
    contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    timestamp: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSessionStepRequest
 */
export class GetSessionStepRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionStepRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionStepRequest();
    GetSessionStepRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionStepRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionStepRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetSessionStepRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionStepRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionStepRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSessionStepRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    GetSessionStepRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSessionStepRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionStepRequest.AsObject {
    return {
      name: this.name,
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
  ): GetSessionStepRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetSessionStepRequest {
  /**
   * Standard JavaScript object representation for GetSessionStepRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetSessionStepRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateSessionStepRequest
 */
export class UpdateSessionStepRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateSessionStepRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSessionStepRequest();
    UpdateSessionStepRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSessionStepRequest) {
    _instance.sessionStep = _instance.sessionStep || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSessionStepRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionStep = new SessionStep();
          _reader.readMessage(
            _instance.sessionStep,
            SessionStep.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateSessionStepRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSessionStepRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionStep) {
      _writer.writeMessage(
        1,
        _instance.sessionStep as any,
        SessionStep.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _sessionStep?: SessionStep;
  private _updateMask?: googleProtobuf003.FieldMask;
  private _fieldMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSessionStepRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateSessionStepRequest.AsObject>) {
    _value = _value || {};
    this.sessionStep = _value.sessionStep
      ? new SessionStep(_value.sessionStep)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    UpdateSessionStepRequest.refineValues(this);
  }
  get sessionStep(): SessionStep | undefined {
    return this._sessionStep;
  }
  set sessionStep(value: SessionStep | undefined) {
    this._sessionStep = value;
  }
  get updateMask(): googleProtobuf003.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf003.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateSessionStepRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSessionStepRequest.AsObject {
    return {
      sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
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
  ): UpdateSessionStepRequest.AsProtobufJSON {
    return {
      sessionStep: this.sessionStep
        ? this.sessionStep.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateSessionStepRequest {
  /**
   * Standard JavaScript object representation for UpdateSessionStepRequest
   */
  export interface AsObject {
    sessionStep?: SessionStep.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSessionStepRequest
   */
  export interface AsProtobufJSON {
    sessionStep: SessionStep.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteSessionStepRequest
 */
export class DeleteSessionStepRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteSessionStepRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSessionStepRequest();
    DeleteSessionStepRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSessionStepRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSessionStepRequest,
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

    DeleteSessionStepRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSessionStepRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSessionStepRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteSessionStepRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteSessionStepRequest.refineValues(this);
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
    DeleteSessionStepRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSessionStepRequest.AsObject {
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
  ): DeleteSessionStepRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteSessionStepRequest {
  /**
   * Standard JavaScript object representation for DeleteSessionStepRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteSessionStepRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateSessionStepRequest
 */
export class CreateSessionStepRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateSessionStepRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSessionStepRequest();
    CreateSessionStepRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSessionStepRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.sessionStep = _instance.sessionStep || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSessionStepRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.sessionStep = new SessionStep();
          _reader.readMessage(
            _instance.sessionStep,
            SessionStep.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSessionStepRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSessionStepRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.sessionStep) {
      _writer.writeMessage(
        2,
        _instance.sessionStep as any,
        SessionStep.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _sessionStep?: SessionStep;
  private _fieldMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSessionStepRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateSessionStepRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.sessionStep = _value.sessionStep
      ? new SessionStep(_value.sessionStep)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    CreateSessionStepRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get sessionStep(): SessionStep | undefined {
    return this._sessionStep;
  }
  set sessionStep(value: SessionStep | undefined) {
    this._sessionStep = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSessionStepRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSessionStepRequest.AsObject {
    return {
      sessionId: this.sessionId,
      sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
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
  ): CreateSessionStepRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      sessionStep: this.sessionStep
        ? this.sessionStep.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module CreateSessionStepRequest {
  /**
   * Standard JavaScript object representation for CreateSessionStepRequest
   */
  export interface AsObject {
    sessionId: string;
    sessionStep?: SessionStep.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateSessionStepRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    sessionStep: SessionStep.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionsRequest
 */
export class ListSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionsRequest();
    ListSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionView = _instance.sessionView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionView = _reader.readEnum();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionView) {
      _writer.writeEnum(2, _instance.sessionView);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        5,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionView: Session.View;
  private _pageToken: string;
  private _sessionFilter?: SessionFilter;
  private _fieldMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionView = _value.sessionView;
    this.pageToken = _value.pageToken;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    ListSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionView(): Session.View {
    return this._sessionView;
  }
  set sessionView(value: Session.View) {
    this._sessionView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionView: this.sessionView,
      pageToken: this.pageToken,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
        : undefined,
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
  ): ListSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionView:
        Session.View[
          this.sessionView === null || this.sessionView === undefined
            ? 0
            : this.sessionView
        ],
      pageToken: this.pageToken,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module ListSessionsRequest {
  /**
   * Standard JavaScript object representation for ListSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionView: Session.View;
    pageToken: string;
    sessionFilter?: SessionFilter.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ListSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionView: string;
    pageToken: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ContextFilter
 */
export class ContextFilter implements GrpcMessage {
  static id = 'ondewo.nlu.ContextFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ContextFilter();
    ContextFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ContextFilter) {
    _instance.contextName = _instance.contextName || '';
    _instance.key = _instance.key || '';
    _instance.value = _instance.value || '';
    _instance.operator = _instance.operator || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ContextFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.contextName = _reader.readString();
          break;
        case 2:
          _instance.key = _reader.readString();
          break;
        case 3:
          _instance.value = _reader.readString();
          break;
        case 4:
          _instance.operator = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ContextFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ContextFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.contextName) {
      _writer.writeString(1, _instance.contextName);
    }
    if (_instance.key) {
      _writer.writeString(2, _instance.key);
    }
    if (_instance.value) {
      _writer.writeString(3, _instance.value);
    }
    if (_instance.operator) {
      _writer.writeEnum(4, _instance.operator);
    }
  }

  private _contextName: string;
  private _key: string;
  private _value: string;
  private _operator: ComparisonOperator;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ContextFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<ContextFilter.AsObject>) {
    _value = _value || {};
    this.contextName = _value.contextName;
    this.key = _value.key;
    this.value = _value.value;
    this.operator = _value.operator;
    ContextFilter.refineValues(this);
  }
  get contextName(): string {
    return this._contextName;
  }
  set contextName(value: string) {
    this._contextName = value;
  }
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  get operator(): ComparisonOperator {
    return this._operator;
  }
  set operator(value: ComparisonOperator) {
    this._operator = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ContextFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ContextFilter.AsObject {
    return {
      contextName: this.contextName,
      key: this.key,
      value: this.value,
      operator: this.operator
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ContextFilter.AsProtobufJSON {
    return {
      contextName: this.contextName,
      key: this.key,
      value: this.value,
      operator:
        ComparisonOperator[
          this.operator === null || this.operator === undefined
            ? 0
            : this.operator
        ]
    };
  }
}
export module ContextFilter {
  /**
   * Standard JavaScript object representation for ContextFilter
   */
  export interface AsObject {
    contextName: string;
    key: string;
    value: string;
    operator: ComparisonOperator;
  }

  /**
   * Protobuf JSON representation for ContextFilter
   */
  export interface AsProtobufJSON {
    contextName: string;
    key: string;
    value: string;
    operator: string;
  }
}

/**
 * Message implementation for ondewo.nlu.SessionFilter
 */
export class SessionFilter implements GrpcMessage {
  static id = 'ondewo.nlu.SessionFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionFilter();
    SessionFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionFilter) {
    _instance.languageCodes = _instance.languageCodes || [];
    _instance.matchedIntents = _instance.matchedIntents || [];
    _instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
    _instance.minIntentsConfidenceMin = _instance.minIntentsConfidenceMin || 0;
    _instance.minIntentsConfidenceMax = _instance.minIntentsConfidenceMax || 0;
    _instance.minEntityTypesConfidenceMin =
      _instance.minEntityTypesConfidenceMin || 0;
    _instance.minEntityTypesConfidenceMax =
      _instance.minEntityTypesConfidenceMax || 0;
    _instance.earliest = _instance.earliest || 0;
    _instance.latest = _instance.latest || 0;
    _instance.minNumberTurns = _instance.minNumberTurns || 0;
    _instance.maxNumberTurns = _instance.maxNumberTurns || 0;
    _instance.labels = _instance.labels || [];
    _instance.userIds = _instance.userIds || [];
    _instance.intentTags = _instance.intentTags || [];
    _instance.sessionIds = _instance.sessionIds || [];
    _instance.inputContexts = _instance.inputContexts || [];
    _instance.outputContexts = _instance.outputContexts || [];
    _instance.durationInSMin = _instance.durationInSMin || 0;
    _instance.durationInSMax = _instance.durationInSMax || 0;
    _instance.durationInMMin = _instance.durationInMMin || 0;
    _instance.durationInMMax = _instance.durationInMMax || 0;
    _instance.durationInMRoundedMin = _instance.durationInMRoundedMin || 0;
    _instance.durationInMRoundedMax = _instance.durationInMRoundedMax || 0;
    _instance.durationInterval15sRoundedMin =
      _instance.durationInterval15sRoundedMin || 0;
    _instance.durationInterval15sRoundedMax =
      _instance.durationInterval15sRoundedMax || 0;
    _instance.durationInterval30sRoundedMin =
      _instance.durationInterval30sRoundedMin || 0;
    _instance.durationInterval30sRoundedMax =
      _instance.durationInterval30sRoundedMax || 0;
    _instance.durationInterval45sRoundedMin =
      _instance.durationInterval45sRoundedMin || 0;
    _instance.durationInterval45sRoundedMax =
      _instance.durationInterval45sRoundedMax || 0;
    _instance.startedTimeSlotPerHourMin =
      _instance.startedTimeSlotPerHourMin || '';
    _instance.startedTimeSlotPerHourMax =
      _instance.startedTimeSlotPerHourMax || '';
    _instance.startedTimeSlotPerQuarterHourMin =
      _instance.startedTimeSlotPerQuarterHourMin || '';
    _instance.startedTimeSlotPerQuarterHourMax =
      _instance.startedTimeSlotPerQuarterHourMax || '';
    _instance.startedTimeSlotPerHalfHourMin =
      _instance.startedTimeSlotPerHalfHourMin || '';
    _instance.startedTimeSlotPerHalfHourMax =
      _instance.startedTimeSlotPerHalfHourMax || '';
    _instance.startedTimeSlotPerDayPhaseMin =
      _instance.startedTimeSlotPerDayPhaseMin || '';
    _instance.startedTimeSlotPerDayPhaseMax =
      _instance.startedTimeSlotPerDayPhaseMax || '';
    _instance.startedTimeSlotPerMinuteMin =
      _instance.startedTimeSlotPerMinuteMin || '';
    _instance.startedTimeSlotPerMinuteMax =
      _instance.startedTimeSlotPerMinuteMax || '';
    _instance.durationInSRoundedMin = _instance.durationInSRoundedMin || 0;
    _instance.durationInSRoundedMax = _instance.durationInSRoundedMax || 0;
    _instance.platforms = _instance.platforms || [];
    _instance.accountIds = _instance.accountIds || [];
    _instance.propertyIds = _instance.propertyIds || [];
    _instance.datastreamIds = _instance.datastreamIds || [];
    _instance.originIds = _instance.originIds || [];
    _instance.identifiedUserIds = _instance.identifiedUserIds || [];
    _instance.durationInterval60sRoundedMin =
      _instance.durationInterval60sRoundedMin || 0;
    _instance.durationInterval60sRoundedMax =
      _instance.durationInterval60sRoundedMax || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SessionFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languageCodes = _instance.languageCodes || []).push(
            _reader.readString()
          );
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu013.Intent();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu013.Intent.deserializeBinaryFromReader
          );
          (_instance.matchedIntents = _instance.matchedIntents || []).push(
            messageInitializer2
          );
          break;
        case 3:
          const messageInitializer3 = new ondewoNlu014.EntityType();
          _reader.readMessage(
            messageInitializer3,
            ondewoNlu014.EntityType.deserializeBinaryFromReader
          );
          (_instance.matchedEntityTypes =
            _instance.matchedEntityTypes || []).push(messageInitializer3);
          break;
        case 4:
          _instance.minIntentsConfidenceMin = _reader.readFloat();
          break;
        case 5:
          _instance.minIntentsConfidenceMax = _reader.readFloat();
          break;
        case 6:
          _instance.minEntityTypesConfidenceMin = _reader.readFloat();
          break;
        case 7:
          _instance.minEntityTypesConfidenceMax = _reader.readFloat();
          break;
        case 8:
          _instance.earliest = _reader.readDouble();
          break;
        case 9:
          _instance.latest = _reader.readDouble();
          break;
        case 10:
          _instance.minNumberTurns = _reader.readInt32();
          break;
        case 11:
          _instance.maxNumberTurns = _reader.readInt32();
          break;
        case 12:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        case 13:
          (_instance.userIds = _instance.userIds || []).push(
            _reader.readString()
          );
          break;
        case 14:
          (_instance.intentTags = _instance.intentTags || []).push(
            _reader.readString()
          );
          break;
        case 15:
          (_instance.sessionIds = _instance.sessionIds || []).push(
            _reader.readString()
          );
          break;
        case 16:
          const messageInitializer16 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer16,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.inputContexts = _instance.inputContexts || []).push(
            messageInitializer16
          );
          break;
        case 17:
          const messageInitializer17 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer17,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.outputContexts = _instance.outputContexts || []).push(
            messageInitializer17
          );
          break;
        case 18:
          _instance.durationInSMin = _reader.readFloat();
          break;
        case 19:
          _instance.durationInSMax = _reader.readFloat();
          break;
        case 20:
          _instance.durationInMMin = _reader.readFloat();
          break;
        case 21:
          _instance.durationInMMax = _reader.readFloat();
          break;
        case 22:
          _instance.durationInMRoundedMin = _reader.readFloat();
          break;
        case 23:
          _instance.durationInMRoundedMax = _reader.readFloat();
          break;
        case 24:
          _instance.durationInterval15sRoundedMin = _reader.readFloat();
          break;
        case 25:
          _instance.durationInterval15sRoundedMax = _reader.readFloat();
          break;
        case 26:
          _instance.durationInterval30sRoundedMin = _reader.readFloat();
          break;
        case 27:
          _instance.durationInterval30sRoundedMax = _reader.readFloat();
          break;
        case 28:
          _instance.durationInterval45sRoundedMin = _reader.readFloat();
          break;
        case 29:
          _instance.durationInterval45sRoundedMax = _reader.readFloat();
          break;
        case 30:
          _instance.startedTimeSlotPerHourMin = _reader.readString();
          break;
        case 31:
          _instance.startedTimeSlotPerHourMax = _reader.readString();
          break;
        case 32:
          _instance.startedTimeSlotPerQuarterHourMin = _reader.readString();
          break;
        case 33:
          _instance.startedTimeSlotPerQuarterHourMax = _reader.readString();
          break;
        case 34:
          _instance.startedTimeSlotPerHalfHourMin = _reader.readString();
          break;
        case 35:
          _instance.startedTimeSlotPerHalfHourMax = _reader.readString();
          break;
        case 36:
          _instance.startedTimeSlotPerDayPhaseMin = _reader.readString();
          break;
        case 37:
          _instance.startedTimeSlotPerDayPhaseMax = _reader.readString();
          break;
        case 38:
          _instance.startedTimeSlotPerMinuteMin = _reader.readString();
          break;
        case 39:
          _instance.startedTimeSlotPerMinuteMax = _reader.readString();
          break;
        case 40:
          _instance.durationInSRoundedMin = _reader.readFloat();
          break;
        case 41:
          _instance.durationInSRoundedMax = _reader.readFloat();
          break;
        case 42:
          _reader.readPackableEnumInto(
            (_instance.platforms = _instance.platforms || [])
          );
          break;
        case 43:
          (_instance.accountIds = _instance.accountIds || []).push(
            _reader.readString()
          );
          break;
        case 44:
          (_instance.propertyIds = _instance.propertyIds || []).push(
            _reader.readString()
          );
          break;
        case 45:
          (_instance.datastreamIds = _instance.datastreamIds || []).push(
            _reader.readString()
          );
          break;
        case 46:
          (_instance.originIds = _instance.originIds || []).push(
            _reader.readString()
          );
          break;
        case 47:
          (_instance.identifiedUserIds =
            _instance.identifiedUserIds || []).push(_reader.readString());
          break;
        case 48:
          _instance.durationInterval60sRoundedMin = _reader.readFloat();
          break;
        case 49:
          _instance.durationInterval60sRoundedMax = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    SessionFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(1, _instance.languageCodes);
    }
    if (_instance.matchedIntents && _instance.matchedIntents.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.matchedIntents as any,
        ondewoNlu013.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.matchedEntityTypes as any,
        ondewoNlu014.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.minIntentsConfidenceMin) {
      _writer.writeFloat(4, _instance.minIntentsConfidenceMin);
    }
    if (_instance.minIntentsConfidenceMax) {
      _writer.writeFloat(5, _instance.minIntentsConfidenceMax);
    }
    if (_instance.minEntityTypesConfidenceMin) {
      _writer.writeFloat(6, _instance.minEntityTypesConfidenceMin);
    }
    if (_instance.minEntityTypesConfidenceMax) {
      _writer.writeFloat(7, _instance.minEntityTypesConfidenceMax);
    }
    if (_instance.earliest) {
      _writer.writeDouble(8, _instance.earliest);
    }
    if (_instance.latest) {
      _writer.writeDouble(9, _instance.latest);
    }
    if (_instance.minNumberTurns) {
      _writer.writeInt32(10, _instance.minNumberTurns);
    }
    if (_instance.maxNumberTurns) {
      _writer.writeInt32(11, _instance.maxNumberTurns);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(12, _instance.labels);
    }
    if (_instance.userIds && _instance.userIds.length) {
      _writer.writeRepeatedString(13, _instance.userIds);
    }
    if (_instance.intentTags && _instance.intentTags.length) {
      _writer.writeRepeatedString(14, _instance.intentTags);
    }
    if (_instance.sessionIds && _instance.sessionIds.length) {
      _writer.writeRepeatedString(15, _instance.sessionIds);
    }
    if (_instance.inputContexts && _instance.inputContexts.length) {
      _writer.writeRepeatedMessage(
        16,
        _instance.inputContexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.outputContexts && _instance.outputContexts.length) {
      _writer.writeRepeatedMessage(
        17,
        _instance.outputContexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.durationInSMin) {
      _writer.writeFloat(18, _instance.durationInSMin);
    }
    if (_instance.durationInSMax) {
      _writer.writeFloat(19, _instance.durationInSMax);
    }
    if (_instance.durationInMMin) {
      _writer.writeFloat(20, _instance.durationInMMin);
    }
    if (_instance.durationInMMax) {
      _writer.writeFloat(21, _instance.durationInMMax);
    }
    if (_instance.durationInMRoundedMin) {
      _writer.writeFloat(22, _instance.durationInMRoundedMin);
    }
    if (_instance.durationInMRoundedMax) {
      _writer.writeFloat(23, _instance.durationInMRoundedMax);
    }
    if (_instance.durationInterval15sRoundedMin) {
      _writer.writeFloat(24, _instance.durationInterval15sRoundedMin);
    }
    if (_instance.durationInterval15sRoundedMax) {
      _writer.writeFloat(25, _instance.durationInterval15sRoundedMax);
    }
    if (_instance.durationInterval30sRoundedMin) {
      _writer.writeFloat(26, _instance.durationInterval30sRoundedMin);
    }
    if (_instance.durationInterval30sRoundedMax) {
      _writer.writeFloat(27, _instance.durationInterval30sRoundedMax);
    }
    if (_instance.durationInterval45sRoundedMin) {
      _writer.writeFloat(28, _instance.durationInterval45sRoundedMin);
    }
    if (_instance.durationInterval45sRoundedMax) {
      _writer.writeFloat(29, _instance.durationInterval45sRoundedMax);
    }
    if (_instance.startedTimeSlotPerHourMin) {
      _writer.writeString(30, _instance.startedTimeSlotPerHourMin);
    }
    if (_instance.startedTimeSlotPerHourMax) {
      _writer.writeString(31, _instance.startedTimeSlotPerHourMax);
    }
    if (_instance.startedTimeSlotPerQuarterHourMin) {
      _writer.writeString(32, _instance.startedTimeSlotPerQuarterHourMin);
    }
    if (_instance.startedTimeSlotPerQuarterHourMax) {
      _writer.writeString(33, _instance.startedTimeSlotPerQuarterHourMax);
    }
    if (_instance.startedTimeSlotPerHalfHourMin) {
      _writer.writeString(34, _instance.startedTimeSlotPerHalfHourMin);
    }
    if (_instance.startedTimeSlotPerHalfHourMax) {
      _writer.writeString(35, _instance.startedTimeSlotPerHalfHourMax);
    }
    if (_instance.startedTimeSlotPerDayPhaseMin) {
      _writer.writeString(36, _instance.startedTimeSlotPerDayPhaseMin);
    }
    if (_instance.startedTimeSlotPerDayPhaseMax) {
      _writer.writeString(37, _instance.startedTimeSlotPerDayPhaseMax);
    }
    if (_instance.startedTimeSlotPerMinuteMin) {
      _writer.writeString(38, _instance.startedTimeSlotPerMinuteMin);
    }
    if (_instance.startedTimeSlotPerMinuteMax) {
      _writer.writeString(39, _instance.startedTimeSlotPerMinuteMax);
    }
    if (_instance.durationInSRoundedMin) {
      _writer.writeFloat(40, _instance.durationInSRoundedMin);
    }
    if (_instance.durationInSRoundedMax) {
      _writer.writeFloat(41, _instance.durationInSRoundedMax);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(42, _instance.platforms);
    }
    if (_instance.accountIds && _instance.accountIds.length) {
      _writer.writeRepeatedString(43, _instance.accountIds);
    }
    if (_instance.propertyIds && _instance.propertyIds.length) {
      _writer.writeRepeatedString(44, _instance.propertyIds);
    }
    if (_instance.datastreamIds && _instance.datastreamIds.length) {
      _writer.writeRepeatedString(45, _instance.datastreamIds);
    }
    if (_instance.originIds && _instance.originIds.length) {
      _writer.writeRepeatedString(46, _instance.originIds);
    }
    if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
      _writer.writeRepeatedString(47, _instance.identifiedUserIds);
    }
    if (_instance.durationInterval60sRoundedMin) {
      _writer.writeFloat(48, _instance.durationInterval60sRoundedMin);
    }
    if (_instance.durationInterval60sRoundedMax) {
      _writer.writeFloat(49, _instance.durationInterval60sRoundedMax);
    }
  }

  private _languageCodes: string[];
  private _matchedIntents?: ondewoNlu013.Intent[];
  private _matchedEntityTypes?: ondewoNlu014.EntityType[];
  private _minIntentsConfidenceMin: number;
  private _minIntentsConfidenceMax: number;
  private _minEntityTypesConfidenceMin: number;
  private _minEntityTypesConfidenceMax: number;
  private _earliest: number;
  private _latest: number;
  private _minNumberTurns: number;
  private _maxNumberTurns: number;
  private _labels: string[];
  private _userIds: string[];
  private _intentTags: string[];
  private _sessionIds: string[];
  private _inputContexts?: ondewoNlu007.Context[];
  private _outputContexts?: ondewoNlu007.Context[];
  private _durationInSMin: number;
  private _durationInSMax: number;
  private _durationInMMin: number;
  private _durationInMMax: number;
  private _durationInMRoundedMin: number;
  private _durationInMRoundedMax: number;
  private _durationInterval15sRoundedMin: number;
  private _durationInterval15sRoundedMax: number;
  private _durationInterval30sRoundedMin: number;
  private _durationInterval30sRoundedMax: number;
  private _durationInterval45sRoundedMin: number;
  private _durationInterval45sRoundedMax: number;
  private _startedTimeSlotPerHourMin: string;
  private _startedTimeSlotPerHourMax: string;
  private _startedTimeSlotPerQuarterHourMin: string;
  private _startedTimeSlotPerQuarterHourMax: string;
  private _startedTimeSlotPerHalfHourMin: string;
  private _startedTimeSlotPerHalfHourMax: string;
  private _startedTimeSlotPerDayPhaseMin: string;
  private _startedTimeSlotPerDayPhaseMax: string;
  private _startedTimeSlotPerMinuteMin: string;
  private _startedTimeSlotPerMinuteMax: string;
  private _durationInSRoundedMin: number;
  private _durationInSRoundedMax: number;
  private _platforms: ondewoNlu013.Intent.Message.Platform[];
  private _accountIds: string[];
  private _propertyIds: string[];
  private _datastreamIds: string[];
  private _originIds: string[];
  private _identifiedUserIds: string[];
  private _durationInterval60sRoundedMin: number;
  private _durationInterval60sRoundedMax: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionFilter.AsObject>) {
    _value = _value || {};
    this.languageCodes = (_value.languageCodes || []).slice();
    this.matchedIntents = (_value.matchedIntents || []).map(
      m => new ondewoNlu013.Intent(m)
    );
    this.matchedEntityTypes = (_value.matchedEntityTypes || []).map(
      m => new ondewoNlu014.EntityType(m)
    );
    this.minIntentsConfidenceMin = _value.minIntentsConfidenceMin;
    this.minIntentsConfidenceMax = _value.minIntentsConfidenceMax;
    this.minEntityTypesConfidenceMin = _value.minEntityTypesConfidenceMin;
    this.minEntityTypesConfidenceMax = _value.minEntityTypesConfidenceMax;
    this.earliest = _value.earliest;
    this.latest = _value.latest;
    this.minNumberTurns = _value.minNumberTurns;
    this.maxNumberTurns = _value.maxNumberTurns;
    this.labels = (_value.labels || []).slice();
    this.userIds = (_value.userIds || []).slice();
    this.intentTags = (_value.intentTags || []).slice();
    this.sessionIds = (_value.sessionIds || []).slice();
    this.inputContexts = (_value.inputContexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.outputContexts = (_value.outputContexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.durationInSMin = _value.durationInSMin;
    this.durationInSMax = _value.durationInSMax;
    this.durationInMMin = _value.durationInMMin;
    this.durationInMMax = _value.durationInMMax;
    this.durationInMRoundedMin = _value.durationInMRoundedMin;
    this.durationInMRoundedMax = _value.durationInMRoundedMax;
    this.durationInterval15sRoundedMin = _value.durationInterval15sRoundedMin;
    this.durationInterval15sRoundedMax = _value.durationInterval15sRoundedMax;
    this.durationInterval30sRoundedMin = _value.durationInterval30sRoundedMin;
    this.durationInterval30sRoundedMax = _value.durationInterval30sRoundedMax;
    this.durationInterval45sRoundedMin = _value.durationInterval45sRoundedMin;
    this.durationInterval45sRoundedMax = _value.durationInterval45sRoundedMax;
    this.startedTimeSlotPerHourMin = _value.startedTimeSlotPerHourMin;
    this.startedTimeSlotPerHourMax = _value.startedTimeSlotPerHourMax;
    this.startedTimeSlotPerQuarterHourMin =
      _value.startedTimeSlotPerQuarterHourMin;
    this.startedTimeSlotPerQuarterHourMax =
      _value.startedTimeSlotPerQuarterHourMax;
    this.startedTimeSlotPerHalfHourMin = _value.startedTimeSlotPerHalfHourMin;
    this.startedTimeSlotPerHalfHourMax = _value.startedTimeSlotPerHalfHourMax;
    this.startedTimeSlotPerDayPhaseMin = _value.startedTimeSlotPerDayPhaseMin;
    this.startedTimeSlotPerDayPhaseMax = _value.startedTimeSlotPerDayPhaseMax;
    this.startedTimeSlotPerMinuteMin = _value.startedTimeSlotPerMinuteMin;
    this.startedTimeSlotPerMinuteMax = _value.startedTimeSlotPerMinuteMax;
    this.durationInSRoundedMin = _value.durationInSRoundedMin;
    this.durationInSRoundedMax = _value.durationInSRoundedMax;
    this.platforms = (_value.platforms || []).slice();
    this.accountIds = (_value.accountIds || []).slice();
    this.propertyIds = (_value.propertyIds || []).slice();
    this.datastreamIds = (_value.datastreamIds || []).slice();
    this.originIds = (_value.originIds || []).slice();
    this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
    this.durationInterval60sRoundedMin = _value.durationInterval60sRoundedMin;
    this.durationInterval60sRoundedMax = _value.durationInterval60sRoundedMax;
    SessionFilter.refineValues(this);
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }
  get matchedIntents(): ondewoNlu013.Intent[] | undefined {
    return this._matchedIntents;
  }
  set matchedIntents(value: ondewoNlu013.Intent[] | undefined) {
    this._matchedIntents = value;
  }
  get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined {
    return this._matchedEntityTypes;
  }
  set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined) {
    this._matchedEntityTypes = value;
  }
  get minIntentsConfidenceMin(): number {
    return this._minIntentsConfidenceMin;
  }
  set minIntentsConfidenceMin(value: number) {
    this._minIntentsConfidenceMin = value;
  }
  get minIntentsConfidenceMax(): number {
    return this._minIntentsConfidenceMax;
  }
  set minIntentsConfidenceMax(value: number) {
    this._minIntentsConfidenceMax = value;
  }
  get minEntityTypesConfidenceMin(): number {
    return this._minEntityTypesConfidenceMin;
  }
  set minEntityTypesConfidenceMin(value: number) {
    this._minEntityTypesConfidenceMin = value;
  }
  get minEntityTypesConfidenceMax(): number {
    return this._minEntityTypesConfidenceMax;
  }
  set minEntityTypesConfidenceMax(value: number) {
    this._minEntityTypesConfidenceMax = value;
  }
  get earliest(): number {
    return this._earliest;
  }
  set earliest(value: number) {
    this._earliest = value;
  }
  get latest(): number {
    return this._latest;
  }
  set latest(value: number) {
    this._latest = value;
  }
  get minNumberTurns(): number {
    return this._minNumberTurns;
  }
  set minNumberTurns(value: number) {
    this._minNumberTurns = value;
  }
  get maxNumberTurns(): number {
    return this._maxNumberTurns;
  }
  set maxNumberTurns(value: number) {
    this._maxNumberTurns = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }
  get userIds(): string[] {
    return this._userIds;
  }
  set userIds(value: string[]) {
    this._userIds = value;
  }
  get intentTags(): string[] {
    return this._intentTags;
  }
  set intentTags(value: string[]) {
    this._intentTags = value;
  }
  get sessionIds(): string[] {
    return this._sessionIds;
  }
  set sessionIds(value: string[]) {
    this._sessionIds = value;
  }
  get inputContexts(): ondewoNlu007.Context[] | undefined {
    return this._inputContexts;
  }
  set inputContexts(value: ondewoNlu007.Context[] | undefined) {
    this._inputContexts = value;
  }
  get outputContexts(): ondewoNlu007.Context[] | undefined {
    return this._outputContexts;
  }
  set outputContexts(value: ondewoNlu007.Context[] | undefined) {
    this._outputContexts = value;
  }
  get durationInSMin(): number {
    return this._durationInSMin;
  }
  set durationInSMin(value: number) {
    this._durationInSMin = value;
  }
  get durationInSMax(): number {
    return this._durationInSMax;
  }
  set durationInSMax(value: number) {
    this._durationInSMax = value;
  }
  get durationInMMin(): number {
    return this._durationInMMin;
  }
  set durationInMMin(value: number) {
    this._durationInMMin = value;
  }
  get durationInMMax(): number {
    return this._durationInMMax;
  }
  set durationInMMax(value: number) {
    this._durationInMMax = value;
  }
  get durationInMRoundedMin(): number {
    return this._durationInMRoundedMin;
  }
  set durationInMRoundedMin(value: number) {
    this._durationInMRoundedMin = value;
  }
  get durationInMRoundedMax(): number {
    return this._durationInMRoundedMax;
  }
  set durationInMRoundedMax(value: number) {
    this._durationInMRoundedMax = value;
  }
  get durationInterval15sRoundedMin(): number {
    return this._durationInterval15sRoundedMin;
  }
  set durationInterval15sRoundedMin(value: number) {
    this._durationInterval15sRoundedMin = value;
  }
  get durationInterval15sRoundedMax(): number {
    return this._durationInterval15sRoundedMax;
  }
  set durationInterval15sRoundedMax(value: number) {
    this._durationInterval15sRoundedMax = value;
  }
  get durationInterval30sRoundedMin(): number {
    return this._durationInterval30sRoundedMin;
  }
  set durationInterval30sRoundedMin(value: number) {
    this._durationInterval30sRoundedMin = value;
  }
  get durationInterval30sRoundedMax(): number {
    return this._durationInterval30sRoundedMax;
  }
  set durationInterval30sRoundedMax(value: number) {
    this._durationInterval30sRoundedMax = value;
  }
  get durationInterval45sRoundedMin(): number {
    return this._durationInterval45sRoundedMin;
  }
  set durationInterval45sRoundedMin(value: number) {
    this._durationInterval45sRoundedMin = value;
  }
  get durationInterval45sRoundedMax(): number {
    return this._durationInterval45sRoundedMax;
  }
  set durationInterval45sRoundedMax(value: number) {
    this._durationInterval45sRoundedMax = value;
  }
  get startedTimeSlotPerHourMin(): string {
    return this._startedTimeSlotPerHourMin;
  }
  set startedTimeSlotPerHourMin(value: string) {
    this._startedTimeSlotPerHourMin = value;
  }
  get startedTimeSlotPerHourMax(): string {
    return this._startedTimeSlotPerHourMax;
  }
  set startedTimeSlotPerHourMax(value: string) {
    this._startedTimeSlotPerHourMax = value;
  }
  get startedTimeSlotPerQuarterHourMin(): string {
    return this._startedTimeSlotPerQuarterHourMin;
  }
  set startedTimeSlotPerQuarterHourMin(value: string) {
    this._startedTimeSlotPerQuarterHourMin = value;
  }
  get startedTimeSlotPerQuarterHourMax(): string {
    return this._startedTimeSlotPerQuarterHourMax;
  }
  set startedTimeSlotPerQuarterHourMax(value: string) {
    this._startedTimeSlotPerQuarterHourMax = value;
  }
  get startedTimeSlotPerHalfHourMin(): string {
    return this._startedTimeSlotPerHalfHourMin;
  }
  set startedTimeSlotPerHalfHourMin(value: string) {
    this._startedTimeSlotPerHalfHourMin = value;
  }
  get startedTimeSlotPerHalfHourMax(): string {
    return this._startedTimeSlotPerHalfHourMax;
  }
  set startedTimeSlotPerHalfHourMax(value: string) {
    this._startedTimeSlotPerHalfHourMax = value;
  }
  get startedTimeSlotPerDayPhaseMin(): string {
    return this._startedTimeSlotPerDayPhaseMin;
  }
  set startedTimeSlotPerDayPhaseMin(value: string) {
    this._startedTimeSlotPerDayPhaseMin = value;
  }
  get startedTimeSlotPerDayPhaseMax(): string {
    return this._startedTimeSlotPerDayPhaseMax;
  }
  set startedTimeSlotPerDayPhaseMax(value: string) {
    this._startedTimeSlotPerDayPhaseMax = value;
  }
  get startedTimeSlotPerMinuteMin(): string {
    return this._startedTimeSlotPerMinuteMin;
  }
  set startedTimeSlotPerMinuteMin(value: string) {
    this._startedTimeSlotPerMinuteMin = value;
  }
  get startedTimeSlotPerMinuteMax(): string {
    return this._startedTimeSlotPerMinuteMax;
  }
  set startedTimeSlotPerMinuteMax(value: string) {
    this._startedTimeSlotPerMinuteMax = value;
  }
  get durationInSRoundedMin(): number {
    return this._durationInSRoundedMin;
  }
  set durationInSRoundedMin(value: number) {
    this._durationInSRoundedMin = value;
  }
  get durationInSRoundedMax(): number {
    return this._durationInSRoundedMax;
  }
  set durationInSRoundedMax(value: number) {
    this._durationInSRoundedMax = value;
  }
  get platforms(): ondewoNlu013.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu013.Intent.Message.Platform[]) {
    this._platforms = value;
  }
  get accountIds(): string[] {
    return this._accountIds;
  }
  set accountIds(value: string[]) {
    this._accountIds = value;
  }
  get propertyIds(): string[] {
    return this._propertyIds;
  }
  set propertyIds(value: string[]) {
    this._propertyIds = value;
  }
  get datastreamIds(): string[] {
    return this._datastreamIds;
  }
  set datastreamIds(value: string[]) {
    this._datastreamIds = value;
  }
  get originIds(): string[] {
    return this._originIds;
  }
  set originIds(value: string[]) {
    this._originIds = value;
  }
  get identifiedUserIds(): string[] {
    return this._identifiedUserIds;
  }
  set identifiedUserIds(value: string[]) {
    this._identifiedUserIds = value;
  }
  get durationInterval60sRoundedMin(): number {
    return this._durationInterval60sRoundedMin;
  }
  set durationInterval60sRoundedMin(value: number) {
    this._durationInterval60sRoundedMin = value;
  }
  get durationInterval60sRoundedMax(): number {
    return this._durationInterval60sRoundedMax;
  }
  set durationInterval60sRoundedMax(value: number) {
    this._durationInterval60sRoundedMax = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SessionFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionFilter.AsObject {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
      matchedEntityTypes: (this.matchedEntityTypes || []).map(m =>
        m.toObject()
      ),
      minIntentsConfidenceMin: this.minIntentsConfidenceMin,
      minIntentsConfidenceMax: this.minIntentsConfidenceMax,
      minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
      minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
      earliest: this.earliest,
      latest: this.latest,
      minNumberTurns: this.minNumberTurns,
      maxNumberTurns: this.maxNumberTurns,
      labels: (this.labels || []).slice(),
      userIds: (this.userIds || []).slice(),
      intentTags: (this.intentTags || []).slice(),
      sessionIds: (this.sessionIds || []).slice(),
      inputContexts: (this.inputContexts || []).map(m => m.toObject()),
      outputContexts: (this.outputContexts || []).map(m => m.toObject()),
      durationInSMin: this.durationInSMin,
      durationInSMax: this.durationInSMax,
      durationInMMin: this.durationInMMin,
      durationInMMax: this.durationInMMax,
      durationInMRoundedMin: this.durationInMRoundedMin,
      durationInMRoundedMax: this.durationInMRoundedMax,
      durationInterval15sRoundedMin: this.durationInterval15sRoundedMin,
      durationInterval15sRoundedMax: this.durationInterval15sRoundedMax,
      durationInterval30sRoundedMin: this.durationInterval30sRoundedMin,
      durationInterval30sRoundedMax: this.durationInterval30sRoundedMax,
      durationInterval45sRoundedMin: this.durationInterval45sRoundedMin,
      durationInterval45sRoundedMax: this.durationInterval45sRoundedMax,
      startedTimeSlotPerHourMin: this.startedTimeSlotPerHourMin,
      startedTimeSlotPerHourMax: this.startedTimeSlotPerHourMax,
      startedTimeSlotPerQuarterHourMin: this.startedTimeSlotPerQuarterHourMin,
      startedTimeSlotPerQuarterHourMax: this.startedTimeSlotPerQuarterHourMax,
      startedTimeSlotPerHalfHourMin: this.startedTimeSlotPerHalfHourMin,
      startedTimeSlotPerHalfHourMax: this.startedTimeSlotPerHalfHourMax,
      startedTimeSlotPerDayPhaseMin: this.startedTimeSlotPerDayPhaseMin,
      startedTimeSlotPerDayPhaseMax: this.startedTimeSlotPerDayPhaseMax,
      startedTimeSlotPerMinuteMin: this.startedTimeSlotPerMinuteMin,
      startedTimeSlotPerMinuteMax: this.startedTimeSlotPerMinuteMax,
      durationInSRoundedMin: this.durationInSRoundedMin,
      durationInSRoundedMax: this.durationInSRoundedMax,
      platforms: (this.platforms || []).slice(),
      accountIds: (this.accountIds || []).slice(),
      propertyIds: (this.propertyIds || []).slice(),
      datastreamIds: (this.datastreamIds || []).slice(),
      originIds: (this.originIds || []).slice(),
      identifiedUserIds: (this.identifiedUserIds || []).slice(),
      durationInterval60sRoundedMin: this.durationInterval60sRoundedMin,
      durationInterval60sRoundedMax: this.durationInterval60sRoundedMax
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SessionFilter.AsProtobufJSON {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      matchedIntents: (this.matchedIntents || []).map(m =>
        m.toProtobufJSON(options)
      ),
      matchedEntityTypes: (this.matchedEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      ),
      minIntentsConfidenceMin: this.minIntentsConfidenceMin,
      minIntentsConfidenceMax: this.minIntentsConfidenceMax,
      minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
      minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
      earliest: this.earliest,
      latest: this.latest,
      minNumberTurns: this.minNumberTurns,
      maxNumberTurns: this.maxNumberTurns,
      labels: (this.labels || []).slice(),
      userIds: (this.userIds || []).slice(),
      intentTags: (this.intentTags || []).slice(),
      sessionIds: (this.sessionIds || []).slice(),
      inputContexts: (this.inputContexts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      outputContexts: (this.outputContexts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      durationInSMin: this.durationInSMin,
      durationInSMax: this.durationInSMax,
      durationInMMin: this.durationInMMin,
      durationInMMax: this.durationInMMax,
      durationInMRoundedMin: this.durationInMRoundedMin,
      durationInMRoundedMax: this.durationInMRoundedMax,
      durationInterval15sRoundedMin: this.durationInterval15sRoundedMin,
      durationInterval15sRoundedMax: this.durationInterval15sRoundedMax,
      durationInterval30sRoundedMin: this.durationInterval30sRoundedMin,
      durationInterval30sRoundedMax: this.durationInterval30sRoundedMax,
      durationInterval45sRoundedMin: this.durationInterval45sRoundedMin,
      durationInterval45sRoundedMax: this.durationInterval45sRoundedMax,
      startedTimeSlotPerHourMin: this.startedTimeSlotPerHourMin,
      startedTimeSlotPerHourMax: this.startedTimeSlotPerHourMax,
      startedTimeSlotPerQuarterHourMin: this.startedTimeSlotPerQuarterHourMin,
      startedTimeSlotPerQuarterHourMax: this.startedTimeSlotPerQuarterHourMax,
      startedTimeSlotPerHalfHourMin: this.startedTimeSlotPerHalfHourMin,
      startedTimeSlotPerHalfHourMax: this.startedTimeSlotPerHalfHourMax,
      startedTimeSlotPerDayPhaseMin: this.startedTimeSlotPerDayPhaseMin,
      startedTimeSlotPerDayPhaseMax: this.startedTimeSlotPerDayPhaseMax,
      startedTimeSlotPerMinuteMin: this.startedTimeSlotPerMinuteMin,
      startedTimeSlotPerMinuteMax: this.startedTimeSlotPerMinuteMax,
      durationInSRoundedMin: this.durationInSRoundedMin,
      durationInSRoundedMax: this.durationInSRoundedMax,
      platforms: (this.platforms || []).map(
        v => ondewoNlu013.Intent.Message.Platform[v]
      ),
      accountIds: (this.accountIds || []).slice(),
      propertyIds: (this.propertyIds || []).slice(),
      datastreamIds: (this.datastreamIds || []).slice(),
      originIds: (this.originIds || []).slice(),
      identifiedUserIds: (this.identifiedUserIds || []).slice(),
      durationInterval60sRoundedMin: this.durationInterval60sRoundedMin,
      durationInterval60sRoundedMax: this.durationInterval60sRoundedMax
    };
  }
}
export module SessionFilter {
  /**
   * Standard JavaScript object representation for SessionFilter
   */
  export interface AsObject {
    languageCodes: string[];
    matchedIntents?: ondewoNlu013.Intent.AsObject[];
    matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
    minIntentsConfidenceMin: number;
    minIntentsConfidenceMax: number;
    minEntityTypesConfidenceMin: number;
    minEntityTypesConfidenceMax: number;
    earliest: number;
    latest: number;
    minNumberTurns: number;
    maxNumberTurns: number;
    labels: string[];
    userIds: string[];
    intentTags: string[];
    sessionIds: string[];
    inputContexts?: ondewoNlu007.Context.AsObject[];
    outputContexts?: ondewoNlu007.Context.AsObject[];
    durationInSMin: number;
    durationInSMax: number;
    durationInMMin: number;
    durationInMMax: number;
    durationInMRoundedMin: number;
    durationInMRoundedMax: number;
    durationInterval15sRoundedMin: number;
    durationInterval15sRoundedMax: number;
    durationInterval30sRoundedMin: number;
    durationInterval30sRoundedMax: number;
    durationInterval45sRoundedMin: number;
    durationInterval45sRoundedMax: number;
    startedTimeSlotPerHourMin: string;
    startedTimeSlotPerHourMax: string;
    startedTimeSlotPerQuarterHourMin: string;
    startedTimeSlotPerQuarterHourMax: string;
    startedTimeSlotPerHalfHourMin: string;
    startedTimeSlotPerHalfHourMax: string;
    startedTimeSlotPerDayPhaseMin: string;
    startedTimeSlotPerDayPhaseMax: string;
    startedTimeSlotPerMinuteMin: string;
    startedTimeSlotPerMinuteMax: string;
    durationInSRoundedMin: number;
    durationInSRoundedMax: number;
    platforms: ondewoNlu013.Intent.Message.Platform[];
    accountIds: string[];
    propertyIds: string[];
    datastreamIds: string[];
    originIds: string[];
    identifiedUserIds: string[];
    durationInterval60sRoundedMin: number;
    durationInterval60sRoundedMax: number;
  }

  /**
   * Protobuf JSON representation for SessionFilter
   */
  export interface AsProtobufJSON {
    languageCodes: string[];
    matchedIntents: ondewoNlu013.Intent.AsProtobufJSON[] | null;
    matchedEntityTypes: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
    minIntentsConfidenceMin: number;
    minIntentsConfidenceMax: number;
    minEntityTypesConfidenceMin: number;
    minEntityTypesConfidenceMax: number;
    earliest: number;
    latest: number;
    minNumberTurns: number;
    maxNumberTurns: number;
    labels: string[];
    userIds: string[];
    intentTags: string[];
    sessionIds: string[];
    inputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    outputContexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    durationInSMin: number;
    durationInSMax: number;
    durationInMMin: number;
    durationInMMax: number;
    durationInMRoundedMin: number;
    durationInMRoundedMax: number;
    durationInterval15sRoundedMin: number;
    durationInterval15sRoundedMax: number;
    durationInterval30sRoundedMin: number;
    durationInterval30sRoundedMax: number;
    durationInterval45sRoundedMin: number;
    durationInterval45sRoundedMax: number;
    startedTimeSlotPerHourMin: string;
    startedTimeSlotPerHourMax: string;
    startedTimeSlotPerQuarterHourMin: string;
    startedTimeSlotPerQuarterHourMax: string;
    startedTimeSlotPerHalfHourMin: string;
    startedTimeSlotPerHalfHourMax: string;
    startedTimeSlotPerDayPhaseMin: string;
    startedTimeSlotPerDayPhaseMax: string;
    startedTimeSlotPerMinuteMin: string;
    startedTimeSlotPerMinuteMax: string;
    durationInSRoundedMin: number;
    durationInSRoundedMax: number;
    platforms: string[];
    accountIds: string[];
    propertyIds: string[];
    datastreamIds: string[];
    originIds: string[];
    identifiedUserIds: string[];
    durationInterval60sRoundedMin: number;
    durationInterval60sRoundedMax: number;
  }
}

/**
 * Message implementation for ondewo.nlu.SessionInfo
 */
export class SessionInfo implements GrpcMessage {
  static id = 'ondewo.nlu.SessionInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionInfo();
    SessionInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionInfo) {
    _instance.languageCodes = _instance.languageCodes || [];
    _instance.matchedIntents = _instance.matchedIntents || [];
    _instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
    _instance.minIntentsConfidence = _instance.minIntentsConfidence || 0;
    _instance.minEntityTypesConfidence =
      _instance.minEntityTypesConfidence || 0;
    _instance.earliest = _instance.earliest || 0;
    _instance.latest = _instance.latest || 0;
    _instance.numberTurns = _instance.numberTurns || 0;
    _instance.labels = _instance.labels || [];
    _instance.userIds = _instance.userIds || [];
    _instance.intentTags = _instance.intentTags || [];
    _instance.inputContextSteps = _instance.inputContextSteps || [];
    _instance.outputContextSteps = _instance.outputContextSteps || [];
    _instance.durationInS = _instance.durationInS || 0;
    _instance.durationInM = _instance.durationInM || 0;
    _instance.durationInMRounded = _instance.durationInMRounded || 0;
    _instance.durationInterval15sRounded =
      _instance.durationInterval15sRounded || 0;
    _instance.durationInterval30sRounded =
      _instance.durationInterval30sRounded || 0;
    _instance.durationInterval45sRounded =
      _instance.durationInterval45sRounded || 0;
    _instance.startedTimeSlotPerHour = _instance.startedTimeSlotPerHour || '';
    _instance.startedTimeSlotPerQuarterHour =
      _instance.startedTimeSlotPerQuarterHour || '';
    _instance.startedTimeSlotPerHalfHour =
      _instance.startedTimeSlotPerHalfHour || '';
    _instance.startedTimeSlotPerDayPhase =
      _instance.startedTimeSlotPerDayPhase || '';
    _instance.startedTimeSlotPerMinute =
      _instance.startedTimeSlotPerMinute || '';
    _instance.durationInSRounded = _instance.durationInSRounded || 0;
    _instance.platforms = _instance.platforms || [];
    _instance.accountIds = _instance.accountIds || [];
    _instance.propertyIds = _instance.propertyIds || [];
    _instance.datastreamIds = _instance.datastreamIds || [];
    _instance.originIds = _instance.originIds || [];
    _instance.identifiedUserIds = _instance.identifiedUserIds || [];
    _instance.durationInterval60sRounded =
      _instance.durationInterval60sRounded || 0;
    _instance.parentComment = _instance.parentComment || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SessionInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languageCodes = _instance.languageCodes || []).push(
            _reader.readString()
          );
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu013.Intent();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu013.Intent.deserializeBinaryFromReader
          );
          (_instance.matchedIntents = _instance.matchedIntents || []).push(
            messageInitializer2
          );
          break;
        case 3:
          const messageInitializer3 = new ondewoNlu014.EntityType();
          _reader.readMessage(
            messageInitializer3,
            ondewoNlu014.EntityType.deserializeBinaryFromReader
          );
          (_instance.matchedEntityTypes =
            _instance.matchedEntityTypes || []).push(messageInitializer3);
          break;
        case 4:
          _instance.minIntentsConfidence = _reader.readFloat();
          break;
        case 5:
          _instance.minEntityTypesConfidence = _reader.readFloat();
          break;
        case 6:
          _instance.earliest = _reader.readDouble();
          break;
        case 7:
          _instance.latest = _reader.readDouble();
          break;
        case 8:
          _instance.numberTurns = _reader.readInt32();
          break;
        case 9:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        case 10:
          (_instance.userIds = _instance.userIds || []).push(
            _reader.readString()
          );
          break;
        case 11:
          (_instance.intentTags = _instance.intentTags || []).push(
            _reader.readString()
          );
          break;
        case 12:
          const messageInitializer12 = new SessionInfo.ContextSteps();
          _reader.readMessage(
            messageInitializer12,
            SessionInfo.ContextSteps.deserializeBinaryFromReader
          );
          (_instance.inputContextSteps =
            _instance.inputContextSteps || []).push(messageInitializer12);
          break;
        case 13:
          const messageInitializer13 = new SessionInfo.ContextSteps();
          _reader.readMessage(
            messageInitializer13,
            SessionInfo.ContextSteps.deserializeBinaryFromReader
          );
          (_instance.outputContextSteps =
            _instance.outputContextSteps || []).push(messageInitializer13);
          break;
        case 14:
          _instance.durationInS = _reader.readFloat();
          break;
        case 15:
          _instance.durationInM = _reader.readFloat();
          break;
        case 16:
          _instance.durationInMRounded = _reader.readFloat();
          break;
        case 17:
          _instance.durationInterval15sRounded = _reader.readFloat();
          break;
        case 18:
          _instance.durationInterval30sRounded = _reader.readFloat();
          break;
        case 19:
          _instance.durationInterval45sRounded = _reader.readFloat();
          break;
        case 20:
          _instance.startedTimeSlotPerHour = _reader.readString();
          break;
        case 21:
          _instance.startedTimeSlotPerQuarterHour = _reader.readString();
          break;
        case 22:
          _instance.startedTimeSlotPerHalfHour = _reader.readString();
          break;
        case 23:
          _instance.startedTimeSlotPerDayPhase = _reader.readString();
          break;
        case 24:
          _instance.startedTimeSlotPerMinute = _reader.readString();
          break;
        case 25:
          _instance.durationInSRounded = _reader.readFloat();
          break;
        case 26:
          _reader.readPackableEnumInto(
            (_instance.platforms = _instance.platforms || [])
          );
          break;
        case 27:
          (_instance.accountIds = _instance.accountIds || []).push(
            _reader.readString()
          );
          break;
        case 28:
          (_instance.propertyIds = _instance.propertyIds || []).push(
            _reader.readString()
          );
          break;
        case 29:
          (_instance.datastreamIds = _instance.datastreamIds || []).push(
            _reader.readString()
          );
          break;
        case 30:
          (_instance.originIds = _instance.originIds || []).push(
            _reader.readString()
          );
          break;
        case 31:
          (_instance.identifiedUserIds =
            _instance.identifiedUserIds || []).push(_reader.readString());
          break;
        case 32:
          _instance.durationInterval60sRounded = _reader.readFloat();
          break;
        case 33:
          const messageInitializer33 = new ondewoNlu008.Comment();
          _reader.readMessage(
            messageInitializer33,
            ondewoNlu008.Comment.deserializeBinaryFromReader
          );
          (_instance.parentComment = _instance.parentComment || []).push(
            messageInitializer33
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SessionInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(1, _instance.languageCodes);
    }
    if (_instance.matchedIntents && _instance.matchedIntents.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.matchedIntents as any,
        ondewoNlu013.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.matchedEntityTypes as any,
        ondewoNlu014.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.minIntentsConfidence) {
      _writer.writeFloat(4, _instance.minIntentsConfidence);
    }
    if (_instance.minEntityTypesConfidence) {
      _writer.writeFloat(5, _instance.minEntityTypesConfidence);
    }
    if (_instance.earliest) {
      _writer.writeDouble(6, _instance.earliest);
    }
    if (_instance.latest) {
      _writer.writeDouble(7, _instance.latest);
    }
    if (_instance.numberTurns) {
      _writer.writeInt32(8, _instance.numberTurns);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(9, _instance.labels);
    }
    if (_instance.userIds && _instance.userIds.length) {
      _writer.writeRepeatedString(10, _instance.userIds);
    }
    if (_instance.intentTags && _instance.intentTags.length) {
      _writer.writeRepeatedString(11, _instance.intentTags);
    }
    if (_instance.inputContextSteps && _instance.inputContextSteps.length) {
      _writer.writeRepeatedMessage(
        12,
        _instance.inputContextSteps as any,
        SessionInfo.ContextSteps.serializeBinaryToWriter
      );
    }
    if (_instance.outputContextSteps && _instance.outputContextSteps.length) {
      _writer.writeRepeatedMessage(
        13,
        _instance.outputContextSteps as any,
        SessionInfo.ContextSteps.serializeBinaryToWriter
      );
    }
    if (_instance.durationInS) {
      _writer.writeFloat(14, _instance.durationInS);
    }
    if (_instance.durationInM) {
      _writer.writeFloat(15, _instance.durationInM);
    }
    if (_instance.durationInMRounded) {
      _writer.writeFloat(16, _instance.durationInMRounded);
    }
    if (_instance.durationInterval15sRounded) {
      _writer.writeFloat(17, _instance.durationInterval15sRounded);
    }
    if (_instance.durationInterval30sRounded) {
      _writer.writeFloat(18, _instance.durationInterval30sRounded);
    }
    if (_instance.durationInterval45sRounded) {
      _writer.writeFloat(19, _instance.durationInterval45sRounded);
    }
    if (_instance.startedTimeSlotPerHour) {
      _writer.writeString(20, _instance.startedTimeSlotPerHour);
    }
    if (_instance.startedTimeSlotPerQuarterHour) {
      _writer.writeString(21, _instance.startedTimeSlotPerQuarterHour);
    }
    if (_instance.startedTimeSlotPerHalfHour) {
      _writer.writeString(22, _instance.startedTimeSlotPerHalfHour);
    }
    if (_instance.startedTimeSlotPerDayPhase) {
      _writer.writeString(23, _instance.startedTimeSlotPerDayPhase);
    }
    if (_instance.startedTimeSlotPerMinute) {
      _writer.writeString(24, _instance.startedTimeSlotPerMinute);
    }
    if (_instance.durationInSRounded) {
      _writer.writeFloat(25, _instance.durationInSRounded);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(26, _instance.platforms);
    }
    if (_instance.accountIds && _instance.accountIds.length) {
      _writer.writeRepeatedString(27, _instance.accountIds);
    }
    if (_instance.propertyIds && _instance.propertyIds.length) {
      _writer.writeRepeatedString(28, _instance.propertyIds);
    }
    if (_instance.datastreamIds && _instance.datastreamIds.length) {
      _writer.writeRepeatedString(29, _instance.datastreamIds);
    }
    if (_instance.originIds && _instance.originIds.length) {
      _writer.writeRepeatedString(30, _instance.originIds);
    }
    if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
      _writer.writeRepeatedString(31, _instance.identifiedUserIds);
    }
    if (_instance.durationInterval60sRounded) {
      _writer.writeFloat(32, _instance.durationInterval60sRounded);
    }
    if (_instance.parentComment && _instance.parentComment.length) {
      _writer.writeRepeatedMessage(
        33,
        _instance.parentComment as any,
        ondewoNlu008.Comment.serializeBinaryToWriter
      );
    }
  }

  private _languageCodes: string[];
  private _matchedIntents?: ondewoNlu013.Intent[];
  private _matchedEntityTypes?: ondewoNlu014.EntityType[];
  private _minIntentsConfidence: number;
  private _minEntityTypesConfidence: number;
  private _earliest: number;
  private _latest: number;
  private _numberTurns: number;
  private _labels: string[];
  private _userIds: string[];
  private _intentTags: string[];
  private _inputContextSteps?: SessionInfo.ContextSteps[];
  private _outputContextSteps?: SessionInfo.ContextSteps[];
  private _durationInS: number;
  private _durationInM: number;
  private _durationInMRounded: number;
  private _durationInterval15sRounded: number;
  private _durationInterval30sRounded: number;
  private _durationInterval45sRounded: number;
  private _startedTimeSlotPerHour: string;
  private _startedTimeSlotPerQuarterHour: string;
  private _startedTimeSlotPerHalfHour: string;
  private _startedTimeSlotPerDayPhase: string;
  private _startedTimeSlotPerMinute: string;
  private _durationInSRounded: number;
  private _platforms: ondewoNlu013.Intent.Message.Platform[];
  private _accountIds: string[];
  private _propertyIds: string[];
  private _datastreamIds: string[];
  private _originIds: string[];
  private _identifiedUserIds: string[];
  private _durationInterval60sRounded: number;
  private _parentComment?: ondewoNlu008.Comment[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionInfo.AsObject>) {
    _value = _value || {};
    this.languageCodes = (_value.languageCodes || []).slice();
    this.matchedIntents = (_value.matchedIntents || []).map(
      m => new ondewoNlu013.Intent(m)
    );
    this.matchedEntityTypes = (_value.matchedEntityTypes || []).map(
      m => new ondewoNlu014.EntityType(m)
    );
    this.minIntentsConfidence = _value.minIntentsConfidence;
    this.minEntityTypesConfidence = _value.minEntityTypesConfidence;
    this.earliest = _value.earliest;
    this.latest = _value.latest;
    this.numberTurns = _value.numberTurns;
    this.labels = (_value.labels || []).slice();
    this.userIds = (_value.userIds || []).slice();
    this.intentTags = (_value.intentTags || []).slice();
    this.inputContextSteps = (_value.inputContextSteps || []).map(
      m => new SessionInfo.ContextSteps(m)
    );
    this.outputContextSteps = (_value.outputContextSteps || []).map(
      m => new SessionInfo.ContextSteps(m)
    );
    this.durationInS = _value.durationInS;
    this.durationInM = _value.durationInM;
    this.durationInMRounded = _value.durationInMRounded;
    this.durationInterval15sRounded = _value.durationInterval15sRounded;
    this.durationInterval30sRounded = _value.durationInterval30sRounded;
    this.durationInterval45sRounded = _value.durationInterval45sRounded;
    this.startedTimeSlotPerHour = _value.startedTimeSlotPerHour;
    this.startedTimeSlotPerQuarterHour = _value.startedTimeSlotPerQuarterHour;
    this.startedTimeSlotPerHalfHour = _value.startedTimeSlotPerHalfHour;
    this.startedTimeSlotPerDayPhase = _value.startedTimeSlotPerDayPhase;
    this.startedTimeSlotPerMinute = _value.startedTimeSlotPerMinute;
    this.durationInSRounded = _value.durationInSRounded;
    this.platforms = (_value.platforms || []).slice();
    this.accountIds = (_value.accountIds || []).slice();
    this.propertyIds = (_value.propertyIds || []).slice();
    this.datastreamIds = (_value.datastreamIds || []).slice();
    this.originIds = (_value.originIds || []).slice();
    this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
    this.durationInterval60sRounded = _value.durationInterval60sRounded;
    this.parentComment = (_value.parentComment || []).map(
      m => new ondewoNlu008.Comment(m)
    );
    SessionInfo.refineValues(this);
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }
  get matchedIntents(): ondewoNlu013.Intent[] | undefined {
    return this._matchedIntents;
  }
  set matchedIntents(value: ondewoNlu013.Intent[] | undefined) {
    this._matchedIntents = value;
  }
  get matchedEntityTypes(): ondewoNlu014.EntityType[] | undefined {
    return this._matchedEntityTypes;
  }
  set matchedEntityTypes(value: ondewoNlu014.EntityType[] | undefined) {
    this._matchedEntityTypes = value;
  }
  get minIntentsConfidence(): number {
    return this._minIntentsConfidence;
  }
  set minIntentsConfidence(value: number) {
    this._minIntentsConfidence = value;
  }
  get minEntityTypesConfidence(): number {
    return this._minEntityTypesConfidence;
  }
  set minEntityTypesConfidence(value: number) {
    this._minEntityTypesConfidence = value;
  }
  get earliest(): number {
    return this._earliest;
  }
  set earliest(value: number) {
    this._earliest = value;
  }
  get latest(): number {
    return this._latest;
  }
  set latest(value: number) {
    this._latest = value;
  }
  get numberTurns(): number {
    return this._numberTurns;
  }
  set numberTurns(value: number) {
    this._numberTurns = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }
  get userIds(): string[] {
    return this._userIds;
  }
  set userIds(value: string[]) {
    this._userIds = value;
  }
  get intentTags(): string[] {
    return this._intentTags;
  }
  set intentTags(value: string[]) {
    this._intentTags = value;
  }
  get inputContextSteps(): SessionInfo.ContextSteps[] | undefined {
    return this._inputContextSteps;
  }
  set inputContextSteps(value: SessionInfo.ContextSteps[] | undefined) {
    this._inputContextSteps = value;
  }
  get outputContextSteps(): SessionInfo.ContextSteps[] | undefined {
    return this._outputContextSteps;
  }
  set outputContextSteps(value: SessionInfo.ContextSteps[] | undefined) {
    this._outputContextSteps = value;
  }
  get durationInS(): number {
    return this._durationInS;
  }
  set durationInS(value: number) {
    this._durationInS = value;
  }
  get durationInM(): number {
    return this._durationInM;
  }
  set durationInM(value: number) {
    this._durationInM = value;
  }
  get durationInMRounded(): number {
    return this._durationInMRounded;
  }
  set durationInMRounded(value: number) {
    this._durationInMRounded = value;
  }
  get durationInterval15sRounded(): number {
    return this._durationInterval15sRounded;
  }
  set durationInterval15sRounded(value: number) {
    this._durationInterval15sRounded = value;
  }
  get durationInterval30sRounded(): number {
    return this._durationInterval30sRounded;
  }
  set durationInterval30sRounded(value: number) {
    this._durationInterval30sRounded = value;
  }
  get durationInterval45sRounded(): number {
    return this._durationInterval45sRounded;
  }
  set durationInterval45sRounded(value: number) {
    this._durationInterval45sRounded = value;
  }
  get startedTimeSlotPerHour(): string {
    return this._startedTimeSlotPerHour;
  }
  set startedTimeSlotPerHour(value: string) {
    this._startedTimeSlotPerHour = value;
  }
  get startedTimeSlotPerQuarterHour(): string {
    return this._startedTimeSlotPerQuarterHour;
  }
  set startedTimeSlotPerQuarterHour(value: string) {
    this._startedTimeSlotPerQuarterHour = value;
  }
  get startedTimeSlotPerHalfHour(): string {
    return this._startedTimeSlotPerHalfHour;
  }
  set startedTimeSlotPerHalfHour(value: string) {
    this._startedTimeSlotPerHalfHour = value;
  }
  get startedTimeSlotPerDayPhase(): string {
    return this._startedTimeSlotPerDayPhase;
  }
  set startedTimeSlotPerDayPhase(value: string) {
    this._startedTimeSlotPerDayPhase = value;
  }
  get startedTimeSlotPerMinute(): string {
    return this._startedTimeSlotPerMinute;
  }
  set startedTimeSlotPerMinute(value: string) {
    this._startedTimeSlotPerMinute = value;
  }
  get durationInSRounded(): number {
    return this._durationInSRounded;
  }
  set durationInSRounded(value: number) {
    this._durationInSRounded = value;
  }
  get platforms(): ondewoNlu013.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu013.Intent.Message.Platform[]) {
    this._platforms = value;
  }
  get accountIds(): string[] {
    return this._accountIds;
  }
  set accountIds(value: string[]) {
    this._accountIds = value;
  }
  get propertyIds(): string[] {
    return this._propertyIds;
  }
  set propertyIds(value: string[]) {
    this._propertyIds = value;
  }
  get datastreamIds(): string[] {
    return this._datastreamIds;
  }
  set datastreamIds(value: string[]) {
    this._datastreamIds = value;
  }
  get originIds(): string[] {
    return this._originIds;
  }
  set originIds(value: string[]) {
    this._originIds = value;
  }
  get identifiedUserIds(): string[] {
    return this._identifiedUserIds;
  }
  set identifiedUserIds(value: string[]) {
    this._identifiedUserIds = value;
  }
  get durationInterval60sRounded(): number {
    return this._durationInterval60sRounded;
  }
  set durationInterval60sRounded(value: number) {
    this._durationInterval60sRounded = value;
  }
  get parentComment(): ondewoNlu008.Comment[] | undefined {
    return this._parentComment;
  }
  set parentComment(value: ondewoNlu008.Comment[] | undefined) {
    this._parentComment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SessionInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionInfo.AsObject {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
      matchedEntityTypes: (this.matchedEntityTypes || []).map(m =>
        m.toObject()
      ),
      minIntentsConfidence: this.minIntentsConfidence,
      minEntityTypesConfidence: this.minEntityTypesConfidence,
      earliest: this.earliest,
      latest: this.latest,
      numberTurns: this.numberTurns,
      labels: (this.labels || []).slice(),
      userIds: (this.userIds || []).slice(),
      intentTags: (this.intentTags || []).slice(),
      inputContextSteps: (this.inputContextSteps || []).map(m => m.toObject()),
      outputContextSteps: (this.outputContextSteps || []).map(m =>
        m.toObject()
      ),
      durationInS: this.durationInS,
      durationInM: this.durationInM,
      durationInMRounded: this.durationInMRounded,
      durationInterval15sRounded: this.durationInterval15sRounded,
      durationInterval30sRounded: this.durationInterval30sRounded,
      durationInterval45sRounded: this.durationInterval45sRounded,
      startedTimeSlotPerHour: this.startedTimeSlotPerHour,
      startedTimeSlotPerQuarterHour: this.startedTimeSlotPerQuarterHour,
      startedTimeSlotPerHalfHour: this.startedTimeSlotPerHalfHour,
      startedTimeSlotPerDayPhase: this.startedTimeSlotPerDayPhase,
      startedTimeSlotPerMinute: this.startedTimeSlotPerMinute,
      durationInSRounded: this.durationInSRounded,
      platforms: (this.platforms || []).slice(),
      accountIds: (this.accountIds || []).slice(),
      propertyIds: (this.propertyIds || []).slice(),
      datastreamIds: (this.datastreamIds || []).slice(),
      originIds: (this.originIds || []).slice(),
      identifiedUserIds: (this.identifiedUserIds || []).slice(),
      durationInterval60sRounded: this.durationInterval60sRounded,
      parentComment: (this.parentComment || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SessionInfo.AsProtobufJSON {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      matchedIntents: (this.matchedIntents || []).map(m =>
        m.toProtobufJSON(options)
      ),
      matchedEntityTypes: (this.matchedEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      ),
      minIntentsConfidence: this.minIntentsConfidence,
      minEntityTypesConfidence: this.minEntityTypesConfidence,
      earliest: this.earliest,
      latest: this.latest,
      numberTurns: this.numberTurns,
      labels: (this.labels || []).slice(),
      userIds: (this.userIds || []).slice(),
      intentTags: (this.intentTags || []).slice(),
      inputContextSteps: (this.inputContextSteps || []).map(m =>
        m.toProtobufJSON(options)
      ),
      outputContextSteps: (this.outputContextSteps || []).map(m =>
        m.toProtobufJSON(options)
      ),
      durationInS: this.durationInS,
      durationInM: this.durationInM,
      durationInMRounded: this.durationInMRounded,
      durationInterval15sRounded: this.durationInterval15sRounded,
      durationInterval30sRounded: this.durationInterval30sRounded,
      durationInterval45sRounded: this.durationInterval45sRounded,
      startedTimeSlotPerHour: this.startedTimeSlotPerHour,
      startedTimeSlotPerQuarterHour: this.startedTimeSlotPerQuarterHour,
      startedTimeSlotPerHalfHour: this.startedTimeSlotPerHalfHour,
      startedTimeSlotPerDayPhase: this.startedTimeSlotPerDayPhase,
      startedTimeSlotPerMinute: this.startedTimeSlotPerMinute,
      durationInSRounded: this.durationInSRounded,
      platforms: (this.platforms || []).map(
        v => ondewoNlu013.Intent.Message.Platform[v]
      ),
      accountIds: (this.accountIds || []).slice(),
      propertyIds: (this.propertyIds || []).slice(),
      datastreamIds: (this.datastreamIds || []).slice(),
      originIds: (this.originIds || []).slice(),
      identifiedUserIds: (this.identifiedUserIds || []).slice(),
      durationInterval60sRounded: this.durationInterval60sRounded,
      parentComment: (this.parentComment || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module SessionInfo {
  /**
   * Standard JavaScript object representation for SessionInfo
   */
  export interface AsObject {
    languageCodes: string[];
    matchedIntents?: ondewoNlu013.Intent.AsObject[];
    matchedEntityTypes?: ondewoNlu014.EntityType.AsObject[];
    minIntentsConfidence: number;
    minEntityTypesConfidence: number;
    earliest: number;
    latest: number;
    numberTurns: number;
    labels: string[];
    userIds: string[];
    intentTags: string[];
    inputContextSteps?: SessionInfo.ContextSteps.AsObject[];
    outputContextSteps?: SessionInfo.ContextSteps.AsObject[];
    durationInS: number;
    durationInM: number;
    durationInMRounded: number;
    durationInterval15sRounded: number;
    durationInterval30sRounded: number;
    durationInterval45sRounded: number;
    startedTimeSlotPerHour: string;
    startedTimeSlotPerQuarterHour: string;
    startedTimeSlotPerHalfHour: string;
    startedTimeSlotPerDayPhase: string;
    startedTimeSlotPerMinute: string;
    durationInSRounded: number;
    platforms: ondewoNlu013.Intent.Message.Platform[];
    accountIds: string[];
    propertyIds: string[];
    datastreamIds: string[];
    originIds: string[];
    identifiedUserIds: string[];
    durationInterval60sRounded: number;
    parentComment?: ondewoNlu008.Comment.AsObject[];
  }

  /**
   * Protobuf JSON representation for SessionInfo
   */
  export interface AsProtobufJSON {
    languageCodes: string[];
    matchedIntents: ondewoNlu013.Intent.AsProtobufJSON[] | null;
    matchedEntityTypes: ondewoNlu014.EntityType.AsProtobufJSON[] | null;
    minIntentsConfidence: number;
    minEntityTypesConfidence: number;
    earliest: number;
    latest: number;
    numberTurns: number;
    labels: string[];
    userIds: string[];
    intentTags: string[];
    inputContextSteps: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
    outputContextSteps: SessionInfo.ContextSteps.AsProtobufJSON[] | null;
    durationInS: number;
    durationInM: number;
    durationInMRounded: number;
    durationInterval15sRounded: number;
    durationInterval30sRounded: number;
    durationInterval45sRounded: number;
    startedTimeSlotPerHour: string;
    startedTimeSlotPerQuarterHour: string;
    startedTimeSlotPerHalfHour: string;
    startedTimeSlotPerDayPhase: string;
    startedTimeSlotPerMinute: string;
    durationInSRounded: number;
    platforms: string[];
    accountIds: string[];
    propertyIds: string[];
    datastreamIds: string[];
    originIds: string[];
    identifiedUserIds: string[];
    durationInterval60sRounded: number;
    parentComment: ondewoNlu008.Comment.AsProtobufJSON[] | null;
  }

  /**
   * Message implementation for ondewo.nlu.SessionInfo.ContextSteps
   */
  export class ContextSteps implements GrpcMessage {
    static id = 'ondewo.nlu.SessionInfo.ContextSteps';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ContextSteps();
      ContextSteps.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ContextSteps) {
      _instance.contexts = _instance.contexts || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ContextSteps,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            const messageInitializer1 = new ondewoNlu007.Context();
            _reader.readMessage(
              messageInitializer1,
              ondewoNlu007.Context.deserializeBinaryFromReader
            );
            (_instance.contexts = _instance.contexts || []).push(
              messageInitializer1
            );
            break;
          default:
            _reader.skipField();
        }
      }

      ContextSteps.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ContextSteps,
      _writer: BinaryWriter
    ) {
      if (_instance.contexts && _instance.contexts.length) {
        _writer.writeRepeatedMessage(
          1,
          _instance.contexts as any,
          ondewoNlu007.Context.serializeBinaryToWriter
        );
      }
    }

    private _contexts?: ondewoNlu007.Context[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ContextSteps to deeply clone from
     */
    constructor(_value?: RecursivePartial<ContextSteps.AsObject>) {
      _value = _value || {};
      this.contexts = (_value.contexts || []).map(
        m => new ondewoNlu007.Context(m)
      );
      ContextSteps.refineValues(this);
    }
    get contexts(): ondewoNlu007.Context[] | undefined {
      return this._contexts;
    }
    set contexts(value: ondewoNlu007.Context[] | undefined) {
      this._contexts = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ContextSteps.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ContextSteps.AsObject {
      return {
        contexts: (this.contexts || []).map(m => m.toObject())
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): ContextSteps.AsProtobufJSON {
      return {
        contexts: (this.contexts || []).map(m => m.toProtobufJSON(options))
      };
    }
  }
  export module ContextSteps {
    /**
     * Standard JavaScript object representation for ContextSteps
     */
    export interface AsObject {
      contexts?: ondewoNlu007.Context.AsObject[];
    }

    /**
     * Protobuf JSON representation for ContextSteps
     */
    export interface AsProtobufJSON {
      contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionsResponse
 */
export class ListSessionsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionsResponse();
    ListSessionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionsResponse) {
    _instance.sessions = _instance.sessions || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Session();
          _reader.readMessage(
            messageInitializer1,
            Session.deserializeBinaryFromReader
          );
          (_instance.sessions = _instance.sessions || []).push(
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

    ListSessionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sessions && _instance.sessions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.sessions as any,
        Session.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _sessions?: Session[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionsResponse.AsObject>) {
    _value = _value || {};
    this.sessions = (_value.sessions || []).map(m => new Session(m));
    this.nextPageToken = _value.nextPageToken;
    ListSessionsResponse.refineValues(this);
  }
  get sessions(): Session[] | undefined {
    return this._sessions;
  }
  set sessions(value: Session[] | undefined) {
    this._sessions = value;
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
    ListSessionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionsResponse.AsObject {
    return {
      sessions: (this.sessions || []).map(m => m.toObject()),
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
  ): ListSessionsResponse.AsProtobufJSON {
    return {
      sessions: (this.sessions || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSessionsResponse {
  /**
   * Standard JavaScript object representation for ListSessionsResponse
   */
  export interface AsObject {
    sessions?: Session.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionsResponse
   */
  export interface AsProtobufJSON {
    sessions: Session.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSessionRequest
 */
export class GetSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionRequest();
    GetSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.sessionView = _instance.sessionView || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.sessionView = _reader.readEnum();
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.sessionView) {
      _writer.writeEnum(2, _instance.sessionView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _sessionView: Session.View;
  private _fieldMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSessionRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.sessionView = _value.sessionView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    GetSessionRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get sessionView(): Session.View {
    return this._sessionView;
  }
  set sessionView(value: Session.View) {
    this._sessionView = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionRequest.AsObject {
    return {
      sessionId: this.sessionId,
      sessionView: this.sessionView,
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
  ): GetSessionRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      sessionView:
        Session.View[
          this.sessionView === null || this.sessionView === undefined
            ? 0
            : this.sessionView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetSessionRequest {
  /**
   * Standard JavaScript object representation for GetSessionRequest
   */
  export interface AsObject {
    sessionId: string;
    sessionView: Session.View;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetSessionRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    sessionView: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateSessionRequest
 */
export class CreateSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSessionRequest();
    CreateSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSessionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionUuid = _instance.sessionUuid || '';
    _instance.labels = _instance.labels || [];
    _instance.contexts = _instance.contexts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionUuid = _reader.readString();
          break;
        case 3:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        case 4:
          const messageInitializer4 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer4,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
            messageInitializer4
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionUuid) {
      _writer.writeString(2, _instance.sessionUuid);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(3, _instance.labels);
    }
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.contexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionUuid: string;
  private _labels: string[];
  private _contexts?: ondewoNlu007.Context[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSessionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateSessionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionUuid = _value.sessionUuid;
    this.labels = (_value.labels || []).slice();
    this.contexts = (_value.contexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    CreateSessionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionUuid(): string {
    return this._sessionUuid;
  }
  set sessionUuid(value: string) {
    this._sessionUuid = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }
  get contexts(): ondewoNlu007.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu007.Context[] | undefined) {
    this._contexts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSessionRequest.AsObject {
    return {
      parent: this.parent,
      sessionUuid: this.sessionUuid,
      labels: (this.labels || []).slice(),
      contexts: (this.contexts || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateSessionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionUuid: this.sessionUuid,
      labels: (this.labels || []).slice(),
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CreateSessionRequest {
  /**
   * Standard JavaScript object representation for CreateSessionRequest
   */
  export interface AsObject {
    parent: string;
    sessionUuid: string;
    labels: string[];
    contexts?: ondewoNlu007.Context.AsObject[];
  }

  /**
   * Protobuf JSON representation for CreateSessionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionUuid: string;
    labels: string[];
    contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteSessionRequest
 */
export class DeleteSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSessionRequest();
    DeleteSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSessionRequest) {
    _instance.sessionId = _instance.sessionId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSessionRequest,
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

    DeleteSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
  }

  private _sessionId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSessionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteSessionRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    DeleteSessionRequest.refineValues(this);
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
    DeleteSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSessionRequest.AsObject {
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
  ): DeleteSessionRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId
    };
  }
}
export module DeleteSessionRequest {
  /**
   * Standard JavaScript object representation for DeleteSessionRequest
   */
  export interface AsObject {
    sessionId: string;
  }

  /**
   * Protobuf JSON representation for DeleteSessionRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateSessionReviewRequest
 */
export class CreateSessionReviewRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateSessionReviewRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSessionReviewRequest();
    CreateSessionReviewRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSessionReviewRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.parentReviewId = _instance.parentReviewId || '';
    _instance.sessionReview = _instance.sessionReview || undefined;
    _instance.sessionReviewView = _instance.sessionReviewView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSessionReviewRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.parentReviewId = _reader.readString();
          break;
        case 3:
          _instance.sessionReview = new SessionReview();
          _reader.readMessage(
            _instance.sessionReview,
            SessionReview.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.sessionReviewView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSessionReviewRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSessionReviewRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.parentReviewId) {
      _writer.writeString(2, _instance.parentReviewId);
    }
    if (_instance.sessionReview) {
      _writer.writeMessage(
        3,
        _instance.sessionReview as any,
        SessionReview.serializeBinaryToWriter
      );
    }
    if (_instance.sessionReviewView) {
      _writer.writeEnum(4, _instance.sessionReviewView);
    }
  }

  private _sessionId: string;
  private _parentReviewId: string;
  private _sessionReview?: SessionReview;
  private _sessionReviewView: SessionReview.View;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSessionReviewRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateSessionReviewRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.parentReviewId = _value.parentReviewId;
    this.sessionReview = _value.sessionReview
      ? new SessionReview(_value.sessionReview)
      : undefined;
    this.sessionReviewView = _value.sessionReviewView;
    CreateSessionReviewRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get parentReviewId(): string {
    return this._parentReviewId;
  }
  set parentReviewId(value: string) {
    this._parentReviewId = value;
  }
  get sessionReview(): SessionReview | undefined {
    return this._sessionReview;
  }
  set sessionReview(value: SessionReview | undefined) {
    this._sessionReview = value;
  }
  get sessionReviewView(): SessionReview.View {
    return this._sessionReviewView;
  }
  set sessionReviewView(value: SessionReview.View) {
    this._sessionReviewView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSessionReviewRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSessionReviewRequest.AsObject {
    return {
      sessionId: this.sessionId,
      parentReviewId: this.parentReviewId,
      sessionReview: this.sessionReview
        ? this.sessionReview.toObject()
        : undefined,
      sessionReviewView: this.sessionReviewView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateSessionReviewRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      parentReviewId: this.parentReviewId,
      sessionReview: this.sessionReview
        ? this.sessionReview.toProtobufJSON(options)
        : null,
      sessionReviewView:
        SessionReview.View[
          this.sessionReviewView === null ||
          this.sessionReviewView === undefined
            ? 0
            : this.sessionReviewView
        ]
    };
  }
}
export module CreateSessionReviewRequest {
  /**
   * Standard JavaScript object representation for CreateSessionReviewRequest
   */
  export interface AsObject {
    sessionId: string;
    parentReviewId: string;
    sessionReview?: SessionReview.AsObject;
    sessionReviewView: SessionReview.View;
  }

  /**
   * Protobuf JSON representation for CreateSessionReviewRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    parentReviewId: string;
    sessionReview: SessionReview.AsProtobufJSON | null;
    sessionReviewView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.SessionReview
 */
export class SessionReview implements GrpcMessage {
  static id = 'ondewo.nlu.SessionReview';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionReview();
    SessionReview.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionReview) {
    _instance.name = _instance.name || '';
    _instance.sessionReviewSteps = _instance.sessionReviewSteps || [];
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
    _instance: SessionReview,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new SessionReviewStep();
          _reader.readMessage(
            messageInitializer2,
            SessionReviewStep.deserializeBinaryFromReader
          );
          (_instance.sessionReviewSteps =
            _instance.sessionReviewSteps || []).push(messageInitializer2);
          break;
        case 3:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.createdBy = _reader.readString();
          break;
        case 6:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SessionReview.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionReview,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.sessionReviewSteps && _instance.sessionReviewSteps.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.sessionReviewSteps as any,
        SessionReviewStep.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        3,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        4,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(5, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(6, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _sessionReviewSteps?: SessionReviewStep[];
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionReview to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionReview.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.sessionReviewSteps = (_value.sessionReviewSteps || []).map(
      m => new SessionReviewStep(m)
    );
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    SessionReview.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get sessionReviewSteps(): SessionReviewStep[] | undefined {
    return this._sessionReviewSteps;
  }
  set sessionReviewSteps(value: SessionReviewStep[] | undefined) {
    this._sessionReviewSteps = value;
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
    SessionReview.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionReview.AsObject {
    return {
      name: this.name,
      sessionReviewSteps: (this.sessionReviewSteps || []).map(m =>
        m.toObject()
      ),
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
  ): SessionReview.AsProtobufJSON {
    return {
      name: this.name,
      sessionReviewSteps: (this.sessionReviewSteps || []).map(m =>
        m.toProtobufJSON(options)
      ),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module SessionReview {
  /**
   * Standard JavaScript object representation for SessionReview
   */
  export interface AsObject {
    name: string;
    sessionReviewSteps?: SessionReviewStep.AsObject[];
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for SessionReview
   */
  export interface AsProtobufJSON {
    name: string;
    sessionReviewSteps: SessionReviewStep.AsProtobufJSON[] | null;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
  export enum View {
    VIEW_UNSPECIFIED = 0,
    VIEW_FULL = 1,
    VIEW_SPARSE = 2
  }
}

/**
 * Message implementation for ondewo.nlu.SessionReviewStep
 */
export class SessionReviewStep implements GrpcMessage {
  static id = 'ondewo.nlu.SessionReviewStep';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionReviewStep();
    SessionReviewStep.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionReviewStep) {
    _instance.name = _instance.name || '';
    _instance.annotatedUsersays = _instance.annotatedUsersays || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.detectedIntents = _instance.detectedIntents || [];
    _instance.contexts = _instance.contexts || [];
    _instance.contextsOut = _instance.contextsOut || [];
    _instance.queryTextOriginal = _instance.queryTextOriginal || '';
    _instance.platforms = _instance.platforms || [];
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.audioFileResources = _instance.audioFileResources || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SessionReviewStep,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.annotatedUsersays = new ondewoNlu013.Intent.TrainingPhrase();
          _reader.readMessage(
            _instance.annotatedUsersays,
            ondewoNlu013.Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new DetectedIntent();
          _reader.readMessage(
            messageInitializer4,
            DetectedIntent.deserializeBinaryFromReader
          );
          (_instance.detectedIntents = _instance.detectedIntents || []).push(
            messageInitializer4
          );
          break;
        case 5:
          const messageInitializer5 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer5,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
            messageInitializer5
          );
          break;
        case 6:
          const messageInitializer6 = new ondewoNlu007.Context();
          _reader.readMessage(
            messageInitializer6,
            ondewoNlu007.Context.deserializeBinaryFromReader
          );
          (_instance.contextsOut = _instance.contextsOut || []).push(
            messageInitializer6
          );
          break;
        case 7:
          _instance.queryTextOriginal = _reader.readString();
          break;
        case 8:
          _reader.readPackableEnumInto(
            (_instance.platforms = _instance.platforms || [])
          );
          break;
        case 9:
          _instance.timestamp = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.createdBy = _reader.readString();
          break;
        case 13:
          _instance.modifiedBy = _reader.readString();
          break;
        case 14:
          const messageInitializer14 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer14,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFileResources =
            _instance.audioFileResources || []).push(messageInitializer14);
          break;
        default:
          _reader.skipField();
      }
    }

    SessionReviewStep.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionReviewStep,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.annotatedUsersays) {
      _writer.writeMessage(
        2,
        _instance.annotatedUsersays as any,
        ondewoNlu013.Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.detectedIntents && _instance.detectedIntents.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.detectedIntents as any,
        DetectedIntent.serializeBinaryToWriter
      );
    }
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.contexts as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.contextsOut && _instance.contextsOut.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.contextsOut as any,
        ondewoNlu007.Context.serializeBinaryToWriter
      );
    }
    if (_instance.queryTextOriginal) {
      _writer.writeString(7, _instance.queryTextOriginal);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(8, _instance.platforms);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        9,
        _instance.timestamp as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        10,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        11,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(12, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(13, _instance.modifiedBy);
    }
    if (_instance.audioFileResources && _instance.audioFileResources.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.audioFileResources as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _annotatedUsersays?: ondewoNlu013.Intent.TrainingPhrase;
  private _languageCode: string;
  private _detectedIntents?: DetectedIntent[];
  private _contexts?: ondewoNlu007.Context[];
  private _contextsOut?: ondewoNlu007.Context[];
  private _queryTextOriginal: string;
  private _platforms: ondewoNlu013.Intent.Message.Platform[];
  private _timestamp?: googleProtobuf004.Timestamp;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _audioFileResources?: AudioFileResource[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionReviewStep to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionReviewStep.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.annotatedUsersays = _value.annotatedUsersays
      ? new ondewoNlu013.Intent.TrainingPhrase(_value.annotatedUsersays)
      : undefined;
    this.languageCode = _value.languageCode;
    this.detectedIntents = (_value.detectedIntents || []).map(
      m => new DetectedIntent(m)
    );
    this.contexts = (_value.contexts || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.contextsOut = (_value.contextsOut || []).map(
      m => new ondewoNlu007.Context(m)
    );
    this.queryTextOriginal = _value.queryTextOriginal;
    this.platforms = (_value.platforms || []).slice();
    this.timestamp = _value.timestamp
      ? new googleProtobuf004.Timestamp(_value.timestamp)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.audioFileResources = (_value.audioFileResources || []).map(
      m => new AudioFileResource(m)
    );
    SessionReviewStep.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get annotatedUsersays(): ondewoNlu013.Intent.TrainingPhrase | undefined {
    return this._annotatedUsersays;
  }
  set annotatedUsersays(value: ondewoNlu013.Intent.TrainingPhrase | undefined) {
    this._annotatedUsersays = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get detectedIntents(): DetectedIntent[] | undefined {
    return this._detectedIntents;
  }
  set detectedIntents(value: DetectedIntent[] | undefined) {
    this._detectedIntents = value;
  }
  get contexts(): ondewoNlu007.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu007.Context[] | undefined) {
    this._contexts = value;
  }
  get contextsOut(): ondewoNlu007.Context[] | undefined {
    return this._contextsOut;
  }
  set contextsOut(value: ondewoNlu007.Context[] | undefined) {
    this._contextsOut = value;
  }
  get queryTextOriginal(): string {
    return this._queryTextOriginal;
  }
  set queryTextOriginal(value: string) {
    this._queryTextOriginal = value;
  }
  get platforms(): ondewoNlu013.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu013.Intent.Message.Platform[]) {
    this._platforms = value;
  }
  get timestamp(): googleProtobuf004.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf004.Timestamp | undefined) {
    this._timestamp = value;
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
  get audioFileResources(): AudioFileResource[] | undefined {
    return this._audioFileResources;
  }
  set audioFileResources(value: AudioFileResource[] | undefined) {
    this._audioFileResources = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SessionReviewStep.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionReviewStep.AsObject {
    return {
      name: this.name,
      annotatedUsersays: this.annotatedUsersays
        ? this.annotatedUsersays.toObject()
        : undefined,
      languageCode: this.languageCode,
      detectedIntents: (this.detectedIntents || []).map(m => m.toObject()),
      contexts: (this.contexts || []).map(m => m.toObject()),
      contextsOut: (this.contextsOut || []).map(m => m.toObject()),
      queryTextOriginal: this.queryTextOriginal,
      platforms: (this.platforms || []).slice(),
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      audioFileResources: (this.audioFileResources || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SessionReviewStep.AsProtobufJSON {
    return {
      name: this.name,
      annotatedUsersays: this.annotatedUsersays
        ? this.annotatedUsersays.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      detectedIntents: (this.detectedIntents || []).map(m =>
        m.toProtobufJSON(options)
      ),
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
      contextsOut: (this.contextsOut || []).map(m => m.toProtobufJSON(options)),
      queryTextOriginal: this.queryTextOriginal,
      platforms: (this.platforms || []).map(
        v => ondewoNlu013.Intent.Message.Platform[v]
      ),
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      audioFileResources: (this.audioFileResources || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module SessionReviewStep {
  /**
   * Standard JavaScript object representation for SessionReviewStep
   */
  export interface AsObject {
    name: string;
    annotatedUsersays?: ondewoNlu013.Intent.TrainingPhrase.AsObject;
    languageCode: string;
    detectedIntents?: DetectedIntent.AsObject[];
    contexts?: ondewoNlu007.Context.AsObject[];
    contextsOut?: ondewoNlu007.Context.AsObject[];
    queryTextOriginal: string;
    platforms: ondewoNlu013.Intent.Message.Platform[];
    timestamp?: googleProtobuf004.Timestamp.AsObject;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    audioFileResources?: AudioFileResource.AsObject[];
  }

  /**
   * Protobuf JSON representation for SessionReviewStep
   */
  export interface AsProtobufJSON {
    name: string;
    annotatedUsersays: ondewoNlu013.Intent.TrainingPhrase.AsProtobufJSON | null;
    languageCode: string;
    detectedIntents: DetectedIntent.AsProtobufJSON[] | null;
    contexts: ondewoNlu007.Context.AsProtobufJSON[] | null;
    contextsOut: ondewoNlu007.Context.AsProtobufJSON[] | null;
    queryTextOriginal: string;
    platforms: string[];
    timestamp: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DetectedIntent
 */
export class DetectedIntent implements GrpcMessage {
  static id = 'ondewo.nlu.DetectedIntent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DetectedIntent();
    DetectedIntent.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DetectedIntent) {
    _instance.intent = _instance.intent || undefined;
    _instance.score = _instance.score || 0;
    _instance.algorithm = _instance.algorithm || '';
    _instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
    _instance.requiredParamMissing = _instance.requiredParamMissing || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DetectedIntent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intent = new ondewoNlu013.Intent();
          _reader.readMessage(
            _instance.intent,
            ondewoNlu013.Intent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.score = _reader.readFloat();
          break;
        case 3:
          _instance.algorithm = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new ondewoNlu013.Intent.Message();
          _reader.readMessage(
            messageInitializer4,
            ondewoNlu013.Intent.Message.deserializeBinaryFromReader
          );
          (_instance.fulfillmentMessages =
            _instance.fulfillmentMessages || []).push(messageInitializer4);
          break;
        case 5:
          _instance.requiredParamMissing = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DetectedIntent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DetectedIntent,
    _writer: BinaryWriter
  ) {
    if (_instance.intent) {
      _writer.writeMessage(
        1,
        _instance.intent as any,
        ondewoNlu013.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.score) {
      _writer.writeFloat(2, _instance.score);
    }
    if (_instance.algorithm) {
      _writer.writeString(3, _instance.algorithm);
    }
    if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.fulfillmentMessages as any,
        ondewoNlu013.Intent.Message.serializeBinaryToWriter
      );
    }
    if (_instance.requiredParamMissing) {
      _writer.writeBool(5, _instance.requiredParamMissing);
    }
  }

  private _intent?: ondewoNlu013.Intent;
  private _score: number;
  private _algorithm: string;
  private _fulfillmentMessages?: ondewoNlu013.Intent.Message[];
  private _requiredParamMissing: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DetectedIntent to deeply clone from
   */
  constructor(_value?: RecursivePartial<DetectedIntent.AsObject>) {
    _value = _value || {};
    this.intent = _value.intent
      ? new ondewoNlu013.Intent(_value.intent)
      : undefined;
    this.score = _value.score;
    this.algorithm = _value.algorithm;
    this.fulfillmentMessages = (_value.fulfillmentMessages || []).map(
      m => new ondewoNlu013.Intent.Message(m)
    );
    this.requiredParamMissing = _value.requiredParamMissing;
    DetectedIntent.refineValues(this);
  }
  get intent(): ondewoNlu013.Intent | undefined {
    return this._intent;
  }
  set intent(value: ondewoNlu013.Intent | undefined) {
    this._intent = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }
  get algorithm(): string {
    return this._algorithm;
  }
  set algorithm(value: string) {
    this._algorithm = value;
  }
  get fulfillmentMessages(): ondewoNlu013.Intent.Message[] | undefined {
    return this._fulfillmentMessages;
  }
  set fulfillmentMessages(value: ondewoNlu013.Intent.Message[] | undefined) {
    this._fulfillmentMessages = value;
  }
  get requiredParamMissing(): boolean {
    return this._requiredParamMissing;
  }
  set requiredParamMissing(value: boolean) {
    this._requiredParamMissing = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DetectedIntent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DetectedIntent.AsObject {
    return {
      intent: this.intent ? this.intent.toObject() : undefined,
      score: this.score,
      algorithm: this.algorithm,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toObject()
      ),
      requiredParamMissing: this.requiredParamMissing
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DetectedIntent.AsProtobufJSON {
    return {
      intent: this.intent ? this.intent.toProtobufJSON(options) : null,
      score: this.score,
      algorithm: this.algorithm,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toProtobufJSON(options)
      ),
      requiredParamMissing: this.requiredParamMissing
    };
  }
}
export module DetectedIntent {
  /**
   * Standard JavaScript object representation for DetectedIntent
   */
  export interface AsObject {
    intent?: ondewoNlu013.Intent.AsObject;
    score: number;
    algorithm: string;
    fulfillmentMessages?: ondewoNlu013.Intent.Message.AsObject[];
    requiredParamMissing: boolean;
  }

  /**
   * Protobuf JSON representation for DetectedIntent
   */
  export interface AsProtobufJSON {
    intent: ondewoNlu013.Intent.AsProtobufJSON | null;
    score: number;
    algorithm: string;
    fulfillmentMessages: ondewoNlu013.Intent.Message.AsProtobufJSON[] | null;
    requiredParamMissing: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionLabelsRequest
 */
export class ListSessionLabelsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionLabelsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionLabelsRequest();
    ListSessionLabelsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionLabelsRequest) {
    _instance.sessionId = _instance.sessionId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionLabelsRequest,
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

    ListSessionLabelsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionLabelsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
  }

  private _sessionId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionLabelsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionLabelsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    ListSessionLabelsRequest.refineValues(this);
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
    ListSessionLabelsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionLabelsRequest.AsObject {
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
  ): ListSessionLabelsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId
    };
  }
}
export module ListSessionLabelsRequest {
  /**
   * Standard JavaScript object representation for ListSessionLabelsRequest
   */
  export interface AsObject {
    sessionId: string;
  }

  /**
   * Protobuf JSON representation for ListSessionLabelsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionLabelsOfAllSessionsRequest
 */
export class ListSessionLabelsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionLabelsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionLabelsOfAllSessionsRequest();
    ListSessionLabelsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionLabelsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionLabelsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionLabelsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionLabelsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionLabelsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSessionLabelsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListSessionLabelsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSessionLabelsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionLabelsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListSessionLabelsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListSessionLabelsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListSessionLabelsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListSessionLabelsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionLabelsResponse
 */
export class ListSessionLabelsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionLabelsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionLabelsResponse();
    ListSessionLabelsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionLabelsResponse) {
    _instance.labels = _instance.labels || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionLabelsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionLabelsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionLabelsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(1, _instance.labels);
    }
  }

  private _labels: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionLabelsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionLabelsResponse.AsObject>) {
    _value = _value || {};
    this.labels = (_value.labels || []).slice();
    ListSessionLabelsResponse.refineValues(this);
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSessionLabelsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionLabelsResponse.AsObject {
    return {
      labels: (this.labels || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListSessionLabelsResponse.AsProtobufJSON {
    return {
      labels: (this.labels || []).slice()
    };
  }
}
export module ListSessionLabelsResponse {
  /**
   * Standard JavaScript object representation for ListSessionLabelsResponse
   */
  export interface AsObject {
    labels: string[];
  }

  /**
   * Protobuf JSON representation for ListSessionLabelsResponse
   */
  export interface AsProtobufJSON {
    labels: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListLanguageCodesOfAllSessionsRequest
 */
export class ListLanguageCodesOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLanguageCodesOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLanguageCodesOfAllSessionsRequest();
    ListLanguageCodesOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLanguageCodesOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLanguageCodesOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLanguageCodesOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLanguageCodesOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLanguageCodesOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLanguageCodesOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListLanguageCodesOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLanguageCodesOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLanguageCodesOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListLanguageCodesOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListLanguageCodesOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListLanguageCodesOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListLanguageCodesOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLanguageCodesResponse
 */
export class ListLanguageCodesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLanguageCodesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLanguageCodesResponse();
    ListLanguageCodesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLanguageCodesResponse) {
    _instance.languageCodes = _instance.languageCodes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLanguageCodesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languageCodes = _instance.languageCodes || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLanguageCodesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLanguageCodesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(1, _instance.languageCodes);
    }
  }

  private _languageCodes: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLanguageCodesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLanguageCodesResponse.AsObject>) {
    _value = _value || {};
    this.languageCodes = (_value.languageCodes || []).slice();
    ListLanguageCodesResponse.refineValues(this);
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLanguageCodesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLanguageCodesResponse.AsObject {
    return {
      languageCodes: (this.languageCodes || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListLanguageCodesResponse.AsProtobufJSON {
    return {
      languageCodes: (this.languageCodes || []).slice()
    };
  }
}
export module ListLanguageCodesResponse {
  /**
   * Standard JavaScript object representation for ListLanguageCodesResponse
   */
  export interface AsObject {
    languageCodes: string[];
  }

  /**
   * Protobuf JSON representation for ListLanguageCodesResponse
   */
  export interface AsProtobufJSON {
    languageCodes: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest
 */
export class ListMatchedIntentsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMatchedIntentsOfAllSessionsRequest();
    ListMatchedIntentsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMatchedIntentsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMatchedIntentsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListMatchedIntentsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMatchedIntentsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMatchedIntentsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListMatchedIntentsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListMatchedIntentsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMatchedIntentsOfAllSessionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMatchedIntentsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListMatchedIntentsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListMatchedIntentsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListMatchedIntentsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListMatchedIntentsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsResponse
 */
export class ListMatchedIntentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListMatchedIntentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMatchedIntentsResponse();
    ListMatchedIntentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMatchedIntentsResponse) {
    _instance.matchedIntents = _instance.matchedIntents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMatchedIntentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.matchedIntents = _instance.matchedIntents || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListMatchedIntentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMatchedIntentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.matchedIntents && _instance.matchedIntents.length) {
      _writer.writeRepeatedString(1, _instance.matchedIntents);
    }
  }

  private _matchedIntents: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMatchedIntentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListMatchedIntentsResponse.AsObject>) {
    _value = _value || {};
    this.matchedIntents = (_value.matchedIntents || []).slice();
    ListMatchedIntentsResponse.refineValues(this);
  }
  get matchedIntents(): string[] {
    return this._matchedIntents;
  }
  set matchedIntents(value: string[]) {
    this._matchedIntents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMatchedIntentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMatchedIntentsResponse.AsObject {
    return {
      matchedIntents: (this.matchedIntents || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListMatchedIntentsResponse.AsProtobufJSON {
    return {
      matchedIntents: (this.matchedIntents || []).slice()
    };
  }
}
export module ListMatchedIntentsResponse {
  /**
   * Standard JavaScript object representation for ListMatchedIntentsResponse
   */
  export interface AsObject {
    matchedIntents: string[];
  }

  /**
   * Protobuf JSON representation for ListMatchedIntentsResponse
   */
  export interface AsProtobufJSON {
    matchedIntents: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest
 */
export class ListMatchedEntityTypesOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMatchedEntityTypesOfAllSessionsRequest();
    ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMatchedEntityTypesOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMatchedEntityTypesOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListMatchedEntityTypesOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMatchedEntityTypesOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMatchedEntityTypesOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      ListMatchedEntityTypesOfAllSessionsRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListMatchedEntityTypesOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMatchedEntityTypesOfAllSessionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMatchedEntityTypesOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListMatchedEntityTypesOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListMatchedEntityTypesOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListMatchedEntityTypesOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListMatchedEntityTypesOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesResponse
 */
export class ListMatchedEntityTypesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListMatchedEntityTypesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMatchedEntityTypesResponse();
    ListMatchedEntityTypesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMatchedEntityTypesResponse) {
    _instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMatchedEntityTypesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.matchedEntityTypes =
            _instance.matchedEntityTypes || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    ListMatchedEntityTypesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMatchedEntityTypesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
      _writer.writeRepeatedString(1, _instance.matchedEntityTypes);
    }
  }

  private _matchedEntityTypes: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMatchedEntityTypesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListMatchedEntityTypesResponse.AsObject>
  ) {
    _value = _value || {};
    this.matchedEntityTypes = (_value.matchedEntityTypes || []).slice();
    ListMatchedEntityTypesResponse.refineValues(this);
  }
  get matchedEntityTypes(): string[] {
    return this._matchedEntityTypes;
  }
  set matchedEntityTypes(value: string[]) {
    this._matchedEntityTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMatchedEntityTypesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMatchedEntityTypesResponse.AsObject {
    return {
      matchedEntityTypes: (this.matchedEntityTypes || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListMatchedEntityTypesResponse.AsProtobufJSON {
    return {
      matchedEntityTypes: (this.matchedEntityTypes || []).slice()
    };
  }
}
export module ListMatchedEntityTypesResponse {
  /**
   * Standard JavaScript object representation for ListMatchedEntityTypesResponse
   */
  export interface AsObject {
    matchedEntityTypes: string[];
  }

  /**
   * Protobuf JSON representation for ListMatchedEntityTypesResponse
   */
  export interface AsProtobufJSON {
    matchedEntityTypes: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListUserIdsOfAllSessionsRequest
 */
export class ListUserIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListUserIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserIdsOfAllSessionsRequest();
    ListUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListUserIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListUserIdsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListUserIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUserIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListUserIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListUserIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListUserIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListUserIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListUserIdsResponse
 */
export class ListUserIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListUserIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserIdsResponse();
    ListUserIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserIdsResponse) {
    _instance.userIds = _instance.userIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.userIds = _instance.userIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListUserIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userIds && _instance.userIds.length) {
      _writer.writeRepeatedString(1, _instance.userIds);
    }
  }

  private _userIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserIdsResponse.AsObject>) {
    _value = _value || {};
    this.userIds = (_value.userIds || []).slice();
    ListUserIdsResponse.refineValues(this);
  }
  get userIds(): string[] {
    return this._userIds;
  }
  set userIds(value: string[]) {
    this._userIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUserIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserIdsResponse.AsObject {
    return {
      userIds: (this.userIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListUserIdsResponse.AsProtobufJSON {
    return {
      userIds: (this.userIds || []).slice()
    };
  }
}
export module ListUserIdsResponse {
  /**
   * Standard JavaScript object representation for ListUserIdsResponse
   */
  export interface AsObject {
    userIds: string[];
  }

  /**
   * Protobuf JSON representation for ListUserIdsResponse
   */
  export interface AsProtobufJSON {
    userIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest
 */
export class ListIdentifiedUserIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIdentifiedUserIdsOfAllSessionsRequest();
    ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIdentifiedUserIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIdentifiedUserIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListIdentifiedUserIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIdentifiedUserIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIdentifiedUserIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      ListIdentifiedUserIdsOfAllSessionsRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListIdentifiedUserIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIdentifiedUserIdsOfAllSessionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListIdentifiedUserIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListIdentifiedUserIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListIdentifiedUserIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListIdentifiedUserIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsResponse
 */
export class ListIdentifiedUserIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListIdentifiedUserIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIdentifiedUserIdsResponse();
    ListIdentifiedUserIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIdentifiedUserIdsResponse) {
    _instance.identifiedUserIds = _instance.identifiedUserIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIdentifiedUserIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.identifiedUserIds =
            _instance.identifiedUserIds || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    ListIdentifiedUserIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIdentifiedUserIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
      _writer.writeRepeatedString(1, _instance.identifiedUserIds);
    }
  }

  private _identifiedUserIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIdentifiedUserIdsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListIdentifiedUserIdsResponse.AsObject>
  ) {
    _value = _value || {};
    this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
    ListIdentifiedUserIdsResponse.refineValues(this);
  }
  get identifiedUserIds(): string[] {
    return this._identifiedUserIds;
  }
  set identifiedUserIds(value: string[]) {
    this._identifiedUserIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIdentifiedUserIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIdentifiedUserIdsResponse.AsObject {
    return {
      identifiedUserIds: (this.identifiedUserIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIdentifiedUserIdsResponse.AsProtobufJSON {
    return {
      identifiedUserIds: (this.identifiedUserIds || []).slice()
    };
  }
}
export module ListIdentifiedUserIdsResponse {
  /**
   * Standard JavaScript object representation for ListIdentifiedUserIdsResponse
   */
  export interface AsObject {
    identifiedUserIds: string[];
  }

  /**
   * Protobuf JSON representation for ListIdentifiedUserIdsResponse
   */
  export interface AsProtobufJSON {
    identifiedUserIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListTagsOfAllSessionsRequest
 */
export class ListTagsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListTagsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTagsOfAllSessionsRequest();
    ListTagsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListTagsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTagsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListTagsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTagsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTagsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListTagsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListTagsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListTagsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTagsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListTagsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListTagsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListTagsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListTagsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListTagsResponse
 */
export class ListTagsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListTagsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTagsResponse();
    ListTagsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListTagsResponse) {
    _instance.tags = _instance.tags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTagsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    ListTagsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTagsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(1, _instance.tags);
    }
  }

  private _tags: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTagsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListTagsResponse.AsObject>) {
    _value = _value || {};
    this.tags = (_value.tags || []).slice();
    ListTagsResponse.refineValues(this);
  }
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListTagsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTagsResponse.AsObject {
    return {
      tags: (this.tags || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListTagsResponse.AsProtobufJSON {
    return {
      tags: (this.tags || []).slice()
    };
  }
}
export module ListTagsResponse {
  /**
   * Standard JavaScript object representation for ListTagsResponse
   */
  export interface AsObject {
    tags: string[];
  }

  /**
   * Protobuf JSON representation for ListTagsResponse
   */
  export interface AsProtobufJSON {
    tags: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListInputContextsOfAllSessionsRequest
 */
export class ListInputContextsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListInputContextsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListInputContextsOfAllSessionsRequest();
    ListInputContextsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListInputContextsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListInputContextsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListInputContextsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListInputContextsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListInputContextsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListInputContextsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListInputContextsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListInputContextsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListInputContextsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListInputContextsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListInputContextsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListInputContextsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListInputContextsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListInputContextsResponse
 */
export class ListInputContextsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListInputContextsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListInputContextsResponse();
    ListInputContextsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListInputContextsResponse) {
    _instance.inputContexts = _instance.inputContexts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListInputContextsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.inputContexts = _instance.inputContexts || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListInputContextsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListInputContextsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.inputContexts && _instance.inputContexts.length) {
      _writer.writeRepeatedString(1, _instance.inputContexts);
    }
  }

  private _inputContexts: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListInputContextsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListInputContextsResponse.AsObject>) {
    _value = _value || {};
    this.inputContexts = (_value.inputContexts || []).slice();
    ListInputContextsResponse.refineValues(this);
  }
  get inputContexts(): string[] {
    return this._inputContexts;
  }
  set inputContexts(value: string[]) {
    this._inputContexts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListInputContextsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListInputContextsResponse.AsObject {
    return {
      inputContexts: (this.inputContexts || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListInputContextsResponse.AsProtobufJSON {
    return {
      inputContexts: (this.inputContexts || []).slice()
    };
  }
}
export module ListInputContextsResponse {
  /**
   * Standard JavaScript object representation for ListInputContextsResponse
   */
  export interface AsObject {
    inputContexts: string[];
  }

  /**
   * Protobuf JSON representation for ListInputContextsResponse
   */
  export interface AsProtobufJSON {
    inputContexts: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListOutputContextsOfAllSessionsRequest
 */
export class ListOutputContextsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListOutputContextsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOutputContextsOfAllSessionsRequest();
    ListOutputContextsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOutputContextsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOutputContextsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOutputContextsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOutputContextsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOutputContextsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListOutputContextsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListOutputContextsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOutputContextsOfAllSessionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOutputContextsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListOutputContextsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListOutputContextsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListOutputContextsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListOutputContextsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListOutputContextsResponse
 */
export class ListOutputContextsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListOutputContextsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOutputContextsResponse();
    ListOutputContextsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOutputContextsResponse) {
    _instance.outputContexts = _instance.outputContexts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOutputContextsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.outputContexts = _instance.outputContexts || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOutputContextsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOutputContextsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.outputContexts && _instance.outputContexts.length) {
      _writer.writeRepeatedString(1, _instance.outputContexts);
    }
  }

  private _outputContexts: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOutputContextsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOutputContextsResponse.AsObject>) {
    _value = _value || {};
    this.outputContexts = (_value.outputContexts || []).slice();
    ListOutputContextsResponse.refineValues(this);
  }
  get outputContexts(): string[] {
    return this._outputContexts;
  }
  set outputContexts(value: string[]) {
    this._outputContexts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOutputContextsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOutputContextsResponse.AsObject {
    return {
      outputContexts: (this.outputContexts || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListOutputContextsResponse.AsProtobufJSON {
    return {
      outputContexts: (this.outputContexts || []).slice()
    };
  }
}
export module ListOutputContextsResponse {
  /**
   * Standard JavaScript object representation for ListOutputContextsResponse
   */
  export interface AsObject {
    outputContexts: string[];
  }

  /**
   * Protobuf JSON representation for ListOutputContextsResponse
   */
  export interface AsProtobufJSON {
    outputContexts: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListPlatformsOfAllSessionsRequest
 */
export class ListPlatformsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListPlatformsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPlatformsOfAllSessionsRequest();
    ListPlatformsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPlatformsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPlatformsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListPlatformsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPlatformsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPlatformsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListPlatformsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListPlatformsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPlatformsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPlatformsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListPlatformsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListPlatformsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListPlatformsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListPlatformsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListPlatformsResponse
 */
export class ListPlatformsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListPlatformsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPlatformsResponse();
    ListPlatformsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPlatformsResponse) {
    _instance.platforms = _instance.platforms || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPlatformsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.platforms = _instance.platforms || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListPlatformsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPlatformsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writeRepeatedString(1, _instance.platforms);
    }
  }

  private _platforms: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPlatformsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListPlatformsResponse.AsObject>) {
    _value = _value || {};
    this.platforms = (_value.platforms || []).slice();
    ListPlatformsResponse.refineValues(this);
  }
  get platforms(): string[] {
    return this._platforms;
  }
  set platforms(value: string[]) {
    this._platforms = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPlatformsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPlatformsResponse.AsObject {
    return {
      platforms: (this.platforms || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListPlatformsResponse.AsProtobufJSON {
    return {
      platforms: (this.platforms || []).slice()
    };
  }
}
export module ListPlatformsResponse {
  /**
   * Standard JavaScript object representation for ListPlatformsResponse
   */
  export interface AsObject {
    platforms: string[];
  }

  /**
   * Protobuf JSON representation for ListPlatformsResponse
   */
  export interface AsProtobufJSON {
    platforms: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListAccountIdsOfAllSessionsRequest
 */
export class ListAccountIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListAccountIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAccountIdsOfAllSessionsRequest();
    ListAccountIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAccountIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAccountIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListAccountIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAccountIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAccountIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListAccountIdsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListAccountIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListAccountIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAccountIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListAccountIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListAccountIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListAccountIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListAccountIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAccountIdsResponse
 */
export class ListAccountIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListAccountIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAccountIdsResponse();
    ListAccountIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAccountIdsResponse) {
    _instance.accountIds = _instance.accountIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAccountIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.accountIds = _instance.accountIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListAccountIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAccountIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.accountIds && _instance.accountIds.length) {
      _writer.writeRepeatedString(1, _instance.accountIds);
    }
  }

  private _accountIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAccountIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAccountIdsResponse.AsObject>) {
    _value = _value || {};
    this.accountIds = (_value.accountIds || []).slice();
    ListAccountIdsResponse.refineValues(this);
  }
  get accountIds(): string[] {
    return this._accountIds;
  }
  set accountIds(value: string[]) {
    this._accountIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListAccountIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAccountIdsResponse.AsObject {
    return {
      accountIds: (this.accountIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListAccountIdsResponse.AsProtobufJSON {
    return {
      accountIds: (this.accountIds || []).slice()
    };
  }
}
export module ListAccountIdsResponse {
  /**
   * Standard JavaScript object representation for ListAccountIdsResponse
   */
  export interface AsObject {
    accountIds: string[];
  }

  /**
   * Protobuf JSON representation for ListAccountIdsResponse
   */
  export interface AsProtobufJSON {
    accountIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListPropertyIdsOfAllSessionsRequest
 */
export class ListPropertyIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListPropertyIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPropertyIdsOfAllSessionsRequest();
    ListPropertyIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPropertyIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPropertyIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListPropertyIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPropertyIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPropertyIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListPropertyIdsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListPropertyIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPropertyIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPropertyIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListPropertyIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListPropertyIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListPropertyIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListPropertyIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListPropertyIdsResponse
 */
export class ListPropertyIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListPropertyIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPropertyIdsResponse();
    ListPropertyIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPropertyIdsResponse) {
    _instance.propertyIds = _instance.propertyIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPropertyIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.propertyIds = _instance.propertyIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListPropertyIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPropertyIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.propertyIds && _instance.propertyIds.length) {
      _writer.writeRepeatedString(1, _instance.propertyIds);
    }
  }

  private _propertyIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPropertyIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListPropertyIdsResponse.AsObject>) {
    _value = _value || {};
    this.propertyIds = (_value.propertyIds || []).slice();
    ListPropertyIdsResponse.refineValues(this);
  }
  get propertyIds(): string[] {
    return this._propertyIds;
  }
  set propertyIds(value: string[]) {
    this._propertyIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPropertyIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPropertyIdsResponse.AsObject {
    return {
      propertyIds: (this.propertyIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListPropertyIdsResponse.AsProtobufJSON {
    return {
      propertyIds: (this.propertyIds || []).slice()
    };
  }
}
export module ListPropertyIdsResponse {
  /**
   * Standard JavaScript object representation for ListPropertyIdsResponse
   */
  export interface AsObject {
    propertyIds: string[];
  }

  /**
   * Protobuf JSON representation for ListPropertyIdsResponse
   */
  export interface AsProtobufJSON {
    propertyIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest
 */
export class ListDatastreamIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListDatastreamIdsOfAllSessionsRequest();
    ListDatastreamIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListDatastreamIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListDatastreamIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListDatastreamIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListDatastreamIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListDatastreamIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListDatastreamIdsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListDatastreamIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListDatastreamIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListDatastreamIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListDatastreamIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListDatastreamIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListDatastreamIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListDatastreamIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsResponse
 */
export class ListDatastreamIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListDatastreamIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListDatastreamIdsResponse();
    ListDatastreamIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListDatastreamIdsResponse) {
    _instance.datastreamIds = _instance.datastreamIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListDatastreamIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.datastreamIds = _instance.datastreamIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListDatastreamIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListDatastreamIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.datastreamIds && _instance.datastreamIds.length) {
      _writer.writeRepeatedString(1, _instance.datastreamIds);
    }
  }

  private _datastreamIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListDatastreamIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListDatastreamIdsResponse.AsObject>) {
    _value = _value || {};
    this.datastreamIds = (_value.datastreamIds || []).slice();
    ListDatastreamIdsResponse.refineValues(this);
  }
  get datastreamIds(): string[] {
    return this._datastreamIds;
  }
  set datastreamIds(value: string[]) {
    this._datastreamIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListDatastreamIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListDatastreamIdsResponse.AsObject {
    return {
      datastreamIds: (this.datastreamIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListDatastreamIdsResponse.AsProtobufJSON {
    return {
      datastreamIds: (this.datastreamIds || []).slice()
    };
  }
}
export module ListDatastreamIdsResponse {
  /**
   * Standard JavaScript object representation for ListDatastreamIdsResponse
   */
  export interface AsObject {
    datastreamIds: string[];
  }

  /**
   * Protobuf JSON representation for ListDatastreamIdsResponse
   */
  export interface AsProtobufJSON {
    datastreamIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListOriginIdsOfAllSessionsRequest
 */
export class ListOriginIdsOfAllSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListOriginIdsOfAllSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOriginIdsOfAllSessionsRequest();
    ListOriginIdsOfAllSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOriginIdsOfAllSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionFilter = _instance.sessionFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOriginIdsOfAllSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionFilter = new SessionFilter();
          _reader.readMessage(
            _instance.sessionFilter,
            SessionFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOriginIdsOfAllSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOriginIdsOfAllSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionFilter) {
      _writer.writeMessage(
        2,
        _instance.sessionFilter as any,
        SessionFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _sessionFilter?: SessionFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOriginIdsOfAllSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListOriginIdsOfAllSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionFilter = _value.sessionFilter
      ? new SessionFilter(_value.sessionFilter)
      : undefined;
    ListOriginIdsOfAllSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionFilter(): SessionFilter | undefined {
    return this._sessionFilter;
  }
  set sessionFilter(value: SessionFilter | undefined) {
    this._sessionFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOriginIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOriginIdsOfAllSessionsRequest.AsObject {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toObject()
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
  ): ListOriginIdsOfAllSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionFilter: this.sessionFilter
        ? this.sessionFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListOriginIdsOfAllSessionsRequest {
  /**
   * Standard JavaScript object representation for ListOriginIdsOfAllSessionsRequest
   */
  export interface AsObject {
    parent: string;
    sessionFilter?: SessionFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListOriginIdsOfAllSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionFilter: SessionFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListOriginIdsResponse
 */
export class ListOriginIdsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListOriginIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOriginIdsResponse();
    ListOriginIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOriginIdsResponse) {
    _instance.originIds = _instance.originIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOriginIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.originIds = _instance.originIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOriginIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOriginIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.originIds && _instance.originIds.length) {
      _writer.writeRepeatedString(1, _instance.originIds);
    }
  }

  private _originIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOriginIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOriginIdsResponse.AsObject>) {
    _value = _value || {};
    this.originIds = (_value.originIds || []).slice();
    ListOriginIdsResponse.refineValues(this);
  }
  get originIds(): string[] {
    return this._originIds;
  }
  set originIds(value: string[]) {
    this._originIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOriginIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOriginIdsResponse.AsObject {
    return {
      originIds: (this.originIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListOriginIdsResponse.AsProtobufJSON {
    return {
      originIds: (this.originIds || []).slice()
    };
  }
}
export module ListOriginIdsResponse {
  /**
   * Standard JavaScript object representation for ListOriginIdsResponse
   */
  export interface AsObject {
    originIds: string[];
  }

  /**
   * Protobuf JSON representation for ListOriginIdsResponse
   */
  export interface AsProtobufJSON {
    originIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.AddSessionLabelsRequest
 */
export class AddSessionLabelsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddSessionLabelsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddSessionLabelsRequest();
    AddSessionLabelsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddSessionLabelsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.labels = _instance.labels || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddSessionLabelsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddSessionLabelsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddSessionLabelsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(2, _instance.labels);
    }
  }

  private _sessionId: string;
  private _labels: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddSessionLabelsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddSessionLabelsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.labels = (_value.labels || []).slice();
    AddSessionLabelsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddSessionLabelsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddSessionLabelsRequest.AsObject {
    return {
      sessionId: this.sessionId,
      labels: (this.labels || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddSessionLabelsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      labels: (this.labels || []).slice()
    };
  }
}
export module AddSessionLabelsRequest {
  /**
   * Standard JavaScript object representation for AddSessionLabelsRequest
   */
  export interface AsObject {
    sessionId: string;
    labels: string[];
  }

  /**
   * Protobuf JSON representation for AddSessionLabelsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    labels: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteSessionLabelsRequest
 */
export class DeleteSessionLabelsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteSessionLabelsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSessionLabelsRequest();
    DeleteSessionLabelsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSessionLabelsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.labels = _instance.labels || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSessionLabelsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteSessionLabelsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSessionLabelsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(2, _instance.labels);
    }
  }

  private _sessionId: string;
  private _labels: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSessionLabelsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteSessionLabelsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.labels = (_value.labels || []).slice();
    DeleteSessionLabelsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteSessionLabelsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSessionLabelsRequest.AsObject {
    return {
      sessionId: this.sessionId,
      labels: (this.labels || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteSessionLabelsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      labels: (this.labels || []).slice()
    };
  }
}
export module DeleteSessionLabelsRequest {
  /**
   * Standard JavaScript object representation for DeleteSessionLabelsRequest
   */
  export interface AsObject {
    sessionId: string;
    labels: string[];
  }

  /**
   * Protobuf JSON representation for DeleteSessionLabelsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    labels: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.AddSessionCommentRequest
 */
export class AddSessionCommentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddSessionCommentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddSessionCommentRequest();
    AddSessionCommentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddSessionCommentRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.comment = _instance.comment || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddSessionCommentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.comment = new ondewoNlu008.Comment();
          _reader.readMessage(
            _instance.comment,
            ondewoNlu008.Comment.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddSessionCommentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddSessionCommentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.comment) {
      _writer.writeMessage(
        2,
        _instance.comment as any,
        ondewoNlu008.Comment.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _comment?: ondewoNlu008.Comment;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddSessionCommentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddSessionCommentRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.comment = _value.comment
      ? new ondewoNlu008.Comment(_value.comment)
      : undefined;
    AddSessionCommentRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get comment(): ondewoNlu008.Comment | undefined {
    return this._comment;
  }
  set comment(value: ondewoNlu008.Comment | undefined) {
    this._comment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddSessionCommentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddSessionCommentRequest.AsObject {
    return {
      sessionId: this.sessionId,
      comment: this.comment ? this.comment.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddSessionCommentRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      comment: this.comment ? this.comment.toProtobufJSON(options) : null
    };
  }
}
export module AddSessionCommentRequest {
  /**
   * Standard JavaScript object representation for AddSessionCommentRequest
   */
  export interface AsObject {
    sessionId: string;
    comment?: ondewoNlu008.Comment.AsObject;
  }

  /**
   * Protobuf JSON representation for AddSessionCommentRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    comment: ondewoNlu008.Comment.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteSessionCommentsRequest
 */
export class DeleteSessionCommentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteSessionCommentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSessionCommentsRequest();
    DeleteSessionCommentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSessionCommentsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.commentNames = _instance.commentNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSessionCommentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          (_instance.commentNames = _instance.commentNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteSessionCommentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSessionCommentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.commentNames && _instance.commentNames.length) {
      _writer.writeRepeatedString(2, _instance.commentNames);
    }
  }

  private _sessionId: string;
  private _commentNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSessionCommentsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteSessionCommentsRequest.AsObject>
  ) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.commentNames = (_value.commentNames || []).slice();
    DeleteSessionCommentsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get commentNames(): string[] {
    return this._commentNames;
  }
  set commentNames(value: string[]) {
    this._commentNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteSessionCommentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSessionCommentsRequest.AsObject {
    return {
      sessionId: this.sessionId,
      commentNames: (this.commentNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteSessionCommentsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      commentNames: (this.commentNames || []).slice()
    };
  }
}
export module DeleteSessionCommentsRequest {
  /**
   * Standard JavaScript object representation for DeleteSessionCommentsRequest
   */
  export interface AsObject {
    sessionId: string;
    commentNames: string[];
  }

  /**
   * Protobuf JSON representation for DeleteSessionCommentsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    commentNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateSessionCommentsRequest
 */
export class UpdateSessionCommentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateSessionCommentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSessionCommentsRequest();
    UpdateSessionCommentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSessionCommentsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.comment = _instance.comment || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSessionCommentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.comment = new ondewoNlu008.Comment();
          _reader.readMessage(
            _instance.comment,
            ondewoNlu008.Comment.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateSessionCommentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSessionCommentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.comment) {
      _writer.writeMessage(
        2,
        _instance.comment as any,
        ondewoNlu008.Comment.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _comment?: ondewoNlu008.Comment;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSessionCommentsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateSessionCommentsRequest.AsObject>
  ) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.comment = _value.comment
      ? new ondewoNlu008.Comment(_value.comment)
      : undefined;
    UpdateSessionCommentsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get comment(): ondewoNlu008.Comment | undefined {
    return this._comment;
  }
  set comment(value: ondewoNlu008.Comment | undefined) {
    this._comment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateSessionCommentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSessionCommentsRequest.AsObject {
    return {
      sessionId: this.sessionId,
      comment: this.comment ? this.comment.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateSessionCommentsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      comment: this.comment ? this.comment.toProtobufJSON(options) : null
    };
  }
}
export module UpdateSessionCommentsRequest {
  /**
   * Standard JavaScript object representation for UpdateSessionCommentsRequest
   */
  export interface AsObject {
    sessionId: string;
    comment?: ondewoNlu008.Comment.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSessionCommentsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    comment: ondewoNlu008.Comment.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionCommentsRequest
 */
export class ListSessionCommentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionCommentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionCommentsRequest();
    ListSessionCommentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionCommentsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionCommentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionCommentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionCommentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
  }

  private _sessionId: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionCommentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionCommentsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.pageToken = _value.pageToken;
    ListSessionCommentsRequest.refineValues(this);
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
    ListSessionCommentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionCommentsRequest.AsObject {
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
  ): ListSessionCommentsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      pageToken: this.pageToken
    };
  }
}
export module ListSessionCommentsRequest {
  /**
   * Standard JavaScript object representation for ListSessionCommentsRequest
   */
  export interface AsObject {
    sessionId: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionCommentsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionCommentsResponse
 */
export class ListSessionCommentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionCommentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionCommentsResponse();
    ListSessionCommentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionCommentsResponse) {
    _instance.comment = _instance.comment || [];
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionCommentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ondewoNlu008.Comment();
          _reader.readMessage(
            messageInitializer1,
            ondewoNlu008.Comment.deserializeBinaryFromReader
          );
          (_instance.comment = _instance.comment || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionCommentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionCommentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.comment && _instance.comment.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.comment as any,
        ondewoNlu008.Comment.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
  }

  private _comment?: ondewoNlu008.Comment[];
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionCommentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionCommentsResponse.AsObject>) {
    _value = _value || {};
    this.comment = (_value.comment || []).map(m => new ondewoNlu008.Comment(m));
    this.pageToken = _value.pageToken;
    ListSessionCommentsResponse.refineValues(this);
  }
  get comment(): ondewoNlu008.Comment[] | undefined {
    return this._comment;
  }
  set comment(value: ondewoNlu008.Comment[] | undefined) {
    this._comment = value;
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
    ListSessionCommentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionCommentsResponse.AsObject {
    return {
      comment: (this.comment || []).map(m => m.toObject()),
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
  ): ListSessionCommentsResponse.AsProtobufJSON {
    return {
      comment: (this.comment || []).map(m => m.toProtobufJSON(options)),
      pageToken: this.pageToken
    };
  }
}
export module ListSessionCommentsResponse {
  /**
   * Standard JavaScript object representation for ListSessionCommentsResponse
   */
  export interface AsObject {
    comment?: ondewoNlu008.Comment.AsObject[];
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionCommentsResponse
   */
  export interface AsProtobufJSON {
    comment: ondewoNlu008.Comment.AsProtobufJSON[] | null;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionReviewsRequest
 */
export class ListSessionReviewsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionReviewsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionReviewsRequest();
    ListSessionReviewsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionReviewsRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.sessionReviewView = _instance.sessionReviewView || 0;
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionReviewsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.sessionReviewView = _reader.readEnum();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionReviewsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionReviewsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.sessionReviewView) {
      _writer.writeEnum(2, _instance.sessionReviewView);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
  }

  private _sessionId: string;
  private _sessionReviewView: SessionReview.View;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionReviewsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionReviewsRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.sessionReviewView = _value.sessionReviewView;
    this.pageToken = _value.pageToken;
    ListSessionReviewsRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get sessionReviewView(): SessionReview.View {
    return this._sessionReviewView;
  }
  set sessionReviewView(value: SessionReview.View) {
    this._sessionReviewView = value;
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
    ListSessionReviewsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionReviewsRequest.AsObject {
    return {
      sessionId: this.sessionId,
      sessionReviewView: this.sessionReviewView,
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
  ): ListSessionReviewsRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      sessionReviewView:
        SessionReview.View[
          this.sessionReviewView === null ||
          this.sessionReviewView === undefined
            ? 0
            : this.sessionReviewView
        ],
      pageToken: this.pageToken
    };
  }
}
export module ListSessionReviewsRequest {
  /**
   * Standard JavaScript object representation for ListSessionReviewsRequest
   */
  export interface AsObject {
    sessionId: string;
    sessionReviewView: SessionReview.View;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionReviewsRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    sessionReviewView: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionReviewsResponse
 */
export class ListSessionReviewsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionReviewsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionReviewsResponse();
    ListSessionReviewsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionReviewsResponse) {
    _instance.sessionReviews = _instance.sessionReviews || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionReviewsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SessionReview();
          _reader.readMessage(
            messageInitializer1,
            SessionReview.deserializeBinaryFromReader
          );
          (_instance.sessionReviews = _instance.sessionReviews || []).push(
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

    ListSessionReviewsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionReviewsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionReviews && _instance.sessionReviews.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.sessionReviews as any,
        SessionReview.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _sessionReviews?: SessionReview[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionReviewsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSessionReviewsResponse.AsObject>) {
    _value = _value || {};
    this.sessionReviews = (_value.sessionReviews || []).map(
      m => new SessionReview(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListSessionReviewsResponse.refineValues(this);
  }
  get sessionReviews(): SessionReview[] | undefined {
    return this._sessionReviews;
  }
  set sessionReviews(value: SessionReview[] | undefined) {
    this._sessionReviews = value;
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
    ListSessionReviewsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionReviewsResponse.AsObject {
    return {
      sessionReviews: (this.sessionReviews || []).map(m => m.toObject()),
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
  ): ListSessionReviewsResponse.AsProtobufJSON {
    return {
      sessionReviews: (this.sessionReviews || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSessionReviewsResponse {
  /**
   * Standard JavaScript object representation for ListSessionReviewsResponse
   */
  export interface AsObject {
    sessionReviews?: SessionReview.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionReviewsResponse
   */
  export interface AsProtobufJSON {
    sessionReviews: SessionReview.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSessionReviewRequest
 */
export class GetSessionReviewRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionReviewRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionReviewRequest();
    GetSessionReviewRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionReviewRequest) {
    _instance.sessionReviewId = _instance.sessionReviewId || '';
    _instance.sessionReviewView = _instance.sessionReviewView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionReviewRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionReviewId = _reader.readString();
          break;
        case 2:
          _instance.sessionReviewView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSessionReviewRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionReviewRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionReviewId) {
      _writer.writeString(1, _instance.sessionReviewId);
    }
    if (_instance.sessionReviewView) {
      _writer.writeEnum(2, _instance.sessionReviewView);
    }
  }

  private _sessionReviewId: string;
  private _sessionReviewView: SessionReview.View;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionReviewRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSessionReviewRequest.AsObject>) {
    _value = _value || {};
    this.sessionReviewId = _value.sessionReviewId;
    this.sessionReviewView = _value.sessionReviewView;
    GetSessionReviewRequest.refineValues(this);
  }
  get sessionReviewId(): string {
    return this._sessionReviewId;
  }
  set sessionReviewId(value: string) {
    this._sessionReviewId = value;
  }
  get sessionReviewView(): SessionReview.View {
    return this._sessionReviewView;
  }
  set sessionReviewView(value: SessionReview.View) {
    this._sessionReviewView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSessionReviewRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionReviewRequest.AsObject {
    return {
      sessionReviewId: this.sessionReviewId,
      sessionReviewView: this.sessionReviewView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetSessionReviewRequest.AsProtobufJSON {
    return {
      sessionReviewId: this.sessionReviewId,
      sessionReviewView:
        SessionReview.View[
          this.sessionReviewView === null ||
          this.sessionReviewView === undefined
            ? 0
            : this.sessionReviewView
        ]
    };
  }
}
export module GetSessionReviewRequest {
  /**
   * Standard JavaScript object representation for GetSessionReviewRequest
   */
  export interface AsObject {
    sessionReviewId: string;
    sessionReviewView: SessionReview.View;
  }

  /**
   * Protobuf JSON representation for GetSessionReviewRequest
   */
  export interface AsProtobufJSON {
    sessionReviewId: string;
    sessionReviewView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetLatestSessionReviewRequest
 */
export class GetLatestSessionReviewRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetLatestSessionReviewRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetLatestSessionReviewRequest();
    GetLatestSessionReviewRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetLatestSessionReviewRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.sessionReviewView = _instance.sessionReviewView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetLatestSessionReviewRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.sessionReviewView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetLatestSessionReviewRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetLatestSessionReviewRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.sessionReviewView) {
      _writer.writeEnum(2, _instance.sessionReviewView);
    }
  }

  private _sessionId: string;
  private _sessionReviewView: SessionReview.View;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetLatestSessionReviewRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetLatestSessionReviewRequest.AsObject>
  ) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.sessionReviewView = _value.sessionReviewView;
    GetLatestSessionReviewRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get sessionReviewView(): SessionReview.View {
    return this._sessionReviewView;
  }
  set sessionReviewView(value: SessionReview.View) {
    this._sessionReviewView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetLatestSessionReviewRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetLatestSessionReviewRequest.AsObject {
    return {
      sessionId: this.sessionId,
      sessionReviewView: this.sessionReviewView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetLatestSessionReviewRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      sessionReviewView:
        SessionReview.View[
          this.sessionReviewView === null ||
          this.sessionReviewView === undefined
            ? 0
            : this.sessionReviewView
        ]
    };
  }
}
export module GetLatestSessionReviewRequest {
  /**
   * Standard JavaScript object representation for GetLatestSessionReviewRequest
   */
  export interface AsObject {
    sessionId: string;
    sessionReviewView: SessionReview.View;
  }

  /**
   * Protobuf JSON representation for GetLatestSessionReviewRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    sessionReviewView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.FileResource
 */
export class FileResource implements GrpcMessage {
  static id = 'ondewo.nlu.FileResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FileResource();
    FileResource.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FileResource) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FileResource,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.documentFileResource = new DocumentFileResource();
          _reader.readMessage(
            _instance.documentFileResource,
            DocumentFileResource.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.audioFileResource = new AudioFileResource();
          _reader.readMessage(
            _instance.audioFileResource,
            AudioFileResource.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.imageFileResource = new ImageFileResource();
          _reader.readMessage(
            _instance.imageFileResource,
            ImageFileResource.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.videoFileResource = new VideoFileResource();
          _reader.readMessage(
            _instance.videoFileResource,
            VideoFileResource.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FileResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FileResource,
    _writer: BinaryWriter
  ) {
    if (_instance.documentFileResource) {
      _writer.writeMessage(
        1,
        _instance.documentFileResource as any,
        DocumentFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.audioFileResource) {
      _writer.writeMessage(
        2,
        _instance.audioFileResource as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.imageFileResource) {
      _writer.writeMessage(
        3,
        _instance.imageFileResource as any,
        ImageFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.videoFileResource) {
      _writer.writeMessage(
        4,
        _instance.videoFileResource as any,
        VideoFileResource.serializeBinaryToWriter
      );
    }
  }

  private _documentFileResource?: DocumentFileResource;
  private _audioFileResource?: AudioFileResource;
  private _imageFileResource?: ImageFileResource;
  private _videoFileResource?: VideoFileResource;

  private _fileResource: FileResource.FileResourceCase =
    FileResource.FileResourceCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FileResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<FileResource.AsObject>) {
    _value = _value || {};
    this.documentFileResource = _value.documentFileResource
      ? new DocumentFileResource(_value.documentFileResource)
      : undefined;
    this.audioFileResource = _value.audioFileResource
      ? new AudioFileResource(_value.audioFileResource)
      : undefined;
    this.imageFileResource = _value.imageFileResource
      ? new ImageFileResource(_value.imageFileResource)
      : undefined;
    this.videoFileResource = _value.videoFileResource
      ? new VideoFileResource(_value.videoFileResource)
      : undefined;
    FileResource.refineValues(this);
  }
  get documentFileResource(): DocumentFileResource | undefined {
    return this._documentFileResource;
  }
  set documentFileResource(value: DocumentFileResource | undefined) {
    if (value !== undefined && value !== null) {
      this._audioFileResource = this._imageFileResource = this._videoFileResource = undefined;
      this._fileResource = FileResource.FileResourceCase.documentFileResource;
    }
    this._documentFileResource = value;
  }
  get audioFileResource(): AudioFileResource | undefined {
    return this._audioFileResource;
  }
  set audioFileResource(value: AudioFileResource | undefined) {
    if (value !== undefined && value !== null) {
      this._documentFileResource = this._imageFileResource = this._videoFileResource = undefined;
      this._fileResource = FileResource.FileResourceCase.audioFileResource;
    }
    this._audioFileResource = value;
  }
  get imageFileResource(): ImageFileResource | undefined {
    return this._imageFileResource;
  }
  set imageFileResource(value: ImageFileResource | undefined) {
    if (value !== undefined && value !== null) {
      this._documentFileResource = this._audioFileResource = this._videoFileResource = undefined;
      this._fileResource = FileResource.FileResourceCase.imageFileResource;
    }
    this._imageFileResource = value;
  }
  get videoFileResource(): VideoFileResource | undefined {
    return this._videoFileResource;
  }
  set videoFileResource(value: VideoFileResource | undefined) {
    if (value !== undefined && value !== null) {
      this._documentFileResource = this._audioFileResource = this._imageFileResource = undefined;
      this._fileResource = FileResource.FileResourceCase.videoFileResource;
    }
    this._videoFileResource = value;
  }
  get fileResource() {
    return this._fileResource;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FileResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FileResource.AsObject {
    return {
      documentFileResource: this.documentFileResource
        ? this.documentFileResource.toObject()
        : undefined,
      audioFileResource: this.audioFileResource
        ? this.audioFileResource.toObject()
        : undefined,
      imageFileResource: this.imageFileResource
        ? this.imageFileResource.toObject()
        : undefined,
      videoFileResource: this.videoFileResource
        ? this.videoFileResource.toObject()
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
  ): FileResource.AsProtobufJSON {
    return {
      documentFileResource: this.documentFileResource
        ? this.documentFileResource.toProtobufJSON(options)
        : null,
      audioFileResource: this.audioFileResource
        ? this.audioFileResource.toProtobufJSON(options)
        : null,
      imageFileResource: this.imageFileResource
        ? this.imageFileResource.toProtobufJSON(options)
        : null,
      videoFileResource: this.videoFileResource
        ? this.videoFileResource.toProtobufJSON(options)
        : null
    };
  }
}
export module FileResource {
  /**
   * Standard JavaScript object representation for FileResource
   */
  export interface AsObject {
    documentFileResource?: DocumentFileResource.AsObject;
    audioFileResource?: AudioFileResource.AsObject;
    imageFileResource?: ImageFileResource.AsObject;
    videoFileResource?: VideoFileResource.AsObject;
  }

  /**
   * Protobuf JSON representation for FileResource
   */
  export interface AsProtobufJSON {
    documentFileResource: DocumentFileResource.AsProtobufJSON | null;
    audioFileResource: AudioFileResource.AsProtobufJSON | null;
    imageFileResource: ImageFileResource.AsProtobufJSON | null;
    videoFileResource: VideoFileResource.AsProtobufJSON | null;
  }
  export enum FileResourceCase {
    none = 0,
    documentFileResource = 1,
    audioFileResource = 2,
    imageFileResource = 3,
    videoFileResource = 4
  }
}

/**
 * Message implementation for ondewo.nlu.DocumentFileResource
 */
export class DocumentFileResource implements GrpcMessage {
  static id = 'ondewo.nlu.DocumentFileResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DocumentFileResource();
    DocumentFileResource.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DocumentFileResource) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.bytes = _instance.bytes || new Uint8Array();
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
    _instance: DocumentFileResource,
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
          _instance.bytes = _reader.readBytes();
          break;
        case 4:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
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

    DocumentFileResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DocumentFileResource,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(3, _instance.bytes);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        5,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
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
  private _bytes: Uint8Array;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DocumentFileResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<DocumentFileResource.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.bytes = _value.bytes;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    DocumentFileResource.refineValues(this);
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
  get bytes(): Uint8Array {
    return this._bytes;
  }
  set bytes(value: Uint8Array) {
    this._bytes = value;
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
    DocumentFileResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DocumentFileResource.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
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
  ): DocumentFileResource.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? uint8ArrayToBase64(this.bytes) : '',
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module DocumentFileResource {
  /**
   * Standard JavaScript object representation for DocumentFileResource
   */
  export interface AsObject {
    name: string;
    displayName: string;
    bytes: Uint8Array;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for DocumentFileResource
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    bytes: string;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ImageFileResource
 */
export class ImageFileResource implements GrpcMessage {
  static id = 'ondewo.nlu.ImageFileResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ImageFileResource();
    ImageFileResource.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ImageFileResource) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.bytes = _instance.bytes || new Uint8Array();
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
    _instance: ImageFileResource,
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
          _instance.bytes = _reader.readBytes();
          break;
        case 4:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
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

    ImageFileResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ImageFileResource,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(3, _instance.bytes);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        5,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
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
  private _bytes: Uint8Array;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ImageFileResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<ImageFileResource.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.bytes = _value.bytes;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    ImageFileResource.refineValues(this);
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
  get bytes(): Uint8Array {
    return this._bytes;
  }
  set bytes(value: Uint8Array) {
    this._bytes = value;
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
    ImageFileResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ImageFileResource.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
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
  ): ImageFileResource.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? uint8ArrayToBase64(this.bytes) : '',
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module ImageFileResource {
  /**
   * Standard JavaScript object representation for ImageFileResource
   */
  export interface AsObject {
    name: string;
    displayName: string;
    bytes: Uint8Array;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for ImageFileResource
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    bytes: string;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AudioFileResource
 */
export class AudioFileResource implements GrpcMessage {
  static id = 'ondewo.nlu.AudioFileResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AudioFileResource();
    AudioFileResource.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AudioFileResource) {
    _instance.name = _instance.name || '';
    _instance.bytes = _instance.bytes || new Uint8Array();
    _instance.language = _instance.language || '';
    _instance.durationInS = _instance.durationInS || 0;
    _instance.sampleRate = _instance.sampleRate || 0;
    _instance.audioFileResourceType = _instance.audioFileResourceType || 0;
    _instance.transcriptions = _instance.transcriptions || [];
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.displayName = _instance.displayName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AudioFileResource,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.bytes = _reader.readBytes();
          break;
        case 3:
          _instance.language = _reader.readString();
          break;
        case 4:
          _instance.durationInS = _reader.readFloat();
          break;
        case 5:
          _instance.sampleRate = _reader.readInt32();
          break;
        case 6:
          _instance.audioFileResourceType = _reader.readEnum();
          break;
        case 7:
          const messageInitializer7 = new S2tTranscription();
          _reader.readMessage(
            messageInitializer7,
            S2tTranscription.deserializeBinaryFromReader
          );
          (_instance.transcriptions = _instance.transcriptions || []).push(
            messageInitializer7
          );
          break;
        case 8:
          _instance.createdAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.modifiedAt = new googleProtobuf004.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf004.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.createdBy = _reader.readString();
          break;
        case 11:
          _instance.modifiedBy = _reader.readString();
          break;
        case 12:
          _instance.displayName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AudioFileResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AudioFileResource,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(2, _instance.bytes);
    }
    if (_instance.language) {
      _writer.writeString(3, _instance.language);
    }
    if (_instance.durationInS) {
      _writer.writeFloat(4, _instance.durationInS);
    }
    if (_instance.sampleRate) {
      _writer.writeInt32(5, _instance.sampleRate);
    }
    if (_instance.audioFileResourceType) {
      _writer.writeEnum(6, _instance.audioFileResourceType);
    }
    if (_instance.transcriptions && _instance.transcriptions.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.transcriptions as any,
        S2tTranscription.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        9,
        _instance.modifiedAt as any,
        googleProtobuf004.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(10, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(11, _instance.modifiedBy);
    }
    if (_instance.displayName) {
      _writer.writeString(12, _instance.displayName);
    }
  }

  private _name: string;
  private _bytes: Uint8Array;
  private _language: string;
  private _durationInS: number;
  private _sampleRate: number;
  private _audioFileResourceType: AudioFileResourceType;
  private _transcriptions?: S2tTranscription[];
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _displayName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AudioFileResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<AudioFileResource.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.bytes = _value.bytes;
    this.language = _value.language;
    this.durationInS = _value.durationInS;
    this.sampleRate = _value.sampleRate;
    this.audioFileResourceType = _value.audioFileResourceType;
    this.transcriptions = (_value.transcriptions || []).map(
      m => new S2tTranscription(m)
    );
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.displayName = _value.displayName;
    AudioFileResource.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get bytes(): Uint8Array {
    return this._bytes;
  }
  set bytes(value: Uint8Array) {
    this._bytes = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get durationInS(): number {
    return this._durationInS;
  }
  set durationInS(value: number) {
    this._durationInS = value;
  }
  get sampleRate(): number {
    return this._sampleRate;
  }
  set sampleRate(value: number) {
    this._sampleRate = value;
  }
  get audioFileResourceType(): AudioFileResourceType {
    return this._audioFileResourceType;
  }
  set audioFileResourceType(value: AudioFileResourceType) {
    this._audioFileResourceType = value;
  }
  get transcriptions(): S2tTranscription[] | undefined {
    return this._transcriptions;
  }
  set transcriptions(value: S2tTranscription[] | undefined) {
    this._transcriptions = value;
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
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AudioFileResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AudioFileResource.AsObject {
    return {
      name: this.name,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
      language: this.language,
      durationInS: this.durationInS,
      sampleRate: this.sampleRate,
      audioFileResourceType: this.audioFileResourceType,
      transcriptions: (this.transcriptions || []).map(m => m.toObject()),
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      displayName: this.displayName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AudioFileResource.AsProtobufJSON {
    return {
      name: this.name,
      bytes: this.bytes ? uint8ArrayToBase64(this.bytes) : '',
      language: this.language,
      durationInS: this.durationInS,
      sampleRate: this.sampleRate,
      audioFileResourceType:
        AudioFileResourceType[
          this.audioFileResourceType === null ||
          this.audioFileResourceType === undefined
            ? 0
            : this.audioFileResourceType
        ],
      transcriptions: (this.transcriptions || []).map(m =>
        m.toProtobufJSON(options)
      ),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      displayName: this.displayName
    };
  }
}
export module AudioFileResource {
  /**
   * Standard JavaScript object representation for AudioFileResource
   */
  export interface AsObject {
    name: string;
    bytes: Uint8Array;
    language: string;
    durationInS: number;
    sampleRate: number;
    audioFileResourceType: AudioFileResourceType;
    transcriptions?: S2tTranscription.AsObject[];
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    displayName: string;
  }

  /**
   * Protobuf JSON representation for AudioFileResource
   */
  export interface AsProtobufJSON {
    name: string;
    bytes: string;
    language: string;
    durationInS: number;
    sampleRate: number;
    audioFileResourceType: string;
    transcriptions: S2tTranscription.AsProtobufJSON[] | null;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    displayName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.VideoFileResource
 */
export class VideoFileResource implements GrpcMessage {
  static id = 'ondewo.nlu.VideoFileResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VideoFileResource();
    VideoFileResource.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VideoFileResource) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.bytes = _instance.bytes || new Uint8Array();
    _instance.durationInS = _instance.durationInS || 0;
    _instance.resolution = _instance.resolution || '';
    _instance.frameRate = _instance.frameRate || 0;
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
    _instance: VideoFileResource,
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
          _instance.bytes = _reader.readBytes();
          break;
        case 4:
          _instance.durationInS = _reader.readFloat();
          break;
        case 5:
          _instance.resolution = _reader.readString();
          break;
        case 6:
          _instance.frameRate = _reader.readFloat();
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

    VideoFileResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VideoFileResource,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(3, _instance.bytes);
    }
    if (_instance.durationInS) {
      _writer.writeFloat(4, _instance.durationInS);
    }
    if (_instance.resolution) {
      _writer.writeString(5, _instance.resolution);
    }
    if (_instance.frameRate) {
      _writer.writeFloat(6, _instance.frameRate);
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

  private _name: string;
  private _displayName: string;
  private _bytes: Uint8Array;
  private _durationInS: number;
  private _resolution: string;
  private _frameRate: number;
  private _createdAt?: googleProtobuf004.Timestamp;
  private _modifiedAt?: googleProtobuf004.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VideoFileResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<VideoFileResource.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.bytes = _value.bytes;
    this.durationInS = _value.durationInS;
    this.resolution = _value.resolution;
    this.frameRate = _value.frameRate;
    this.createdAt = _value.createdAt
      ? new googleProtobuf004.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf004.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    VideoFileResource.refineValues(this);
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
  get bytes(): Uint8Array {
    return this._bytes;
  }
  set bytes(value: Uint8Array) {
    this._bytes = value;
  }
  get durationInS(): number {
    return this._durationInS;
  }
  set durationInS(value: number) {
    this._durationInS = value;
  }
  get resolution(): string {
    return this._resolution;
  }
  set resolution(value: string) {
    this._resolution = value;
  }
  get frameRate(): number {
    return this._frameRate;
  }
  set frameRate(value: number) {
    this._frameRate = value;
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
    VideoFileResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VideoFileResource.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
      durationInS: this.durationInS,
      resolution: this.resolution,
      frameRate: this.frameRate,
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
  ): VideoFileResource.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      bytes: this.bytes ? uint8ArrayToBase64(this.bytes) : '',
      durationInS: this.durationInS,
      resolution: this.resolution,
      frameRate: this.frameRate,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module VideoFileResource {
  /**
   * Standard JavaScript object representation for VideoFileResource
   */
  export interface AsObject {
    name: string;
    displayName: string;
    bytes: Uint8Array;
    durationInS: number;
    resolution: string;
    frameRate: number;
    createdAt?: googleProtobuf004.Timestamp.AsObject;
    modifiedAt?: googleProtobuf004.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for VideoFileResource
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    bytes: string;
    durationInS: number;
    resolution: string;
    frameRate: number;
    createdAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf004.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAudioFilesRequest
 */
export class GetAudioFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAudioFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAudioFilesRequest();
    GetAudioFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAudioFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.names = _instance.names || [];
    _instance.resourceView = _instance.resourceView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAudioFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 3:
          _instance.resourceView = _reader.readEnum();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAudioFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAudioFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(2, _instance.names);
    }
    if (_instance.resourceView) {
      _writer.writeEnum(3, _instance.resourceView);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(5, _instance.sortingMode);
    }
  }

  private _parent: string;
  private _names: string[];
  private _resourceView: ResourceView;
  private _pageToken: string;
  private _sortingMode: ondewoNlu008.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAudioFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAudioFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.names = (_value.names || []).slice();
    this.resourceView = _value.resourceView;
    this.pageToken = _value.pageToken;
    this.sortingMode = _value.sortingMode;
    GetAudioFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get resourceView(): ResourceView {
    return this._resourceView;
  }
  set resourceView(value: ResourceView) {
    this._resourceView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
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
    GetAudioFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAudioFilesRequest.AsObject {
    return {
      parent: this.parent,
      names: (this.names || []).slice(),
      resourceView: this.resourceView,
      pageToken: this.pageToken,
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
  ): GetAudioFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      names: (this.names || []).slice(),
      resourceView:
        ResourceView[
          this.resourceView === null || this.resourceView === undefined
            ? 0
            : this.resourceView
        ],
      pageToken: this.pageToken,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module GetAudioFilesRequest {
  /**
   * Standard JavaScript object representation for GetAudioFilesRequest
   */
  export interface AsObject {
    parent: string;
    names: string[];
    resourceView: ResourceView;
    pageToken: string;
    sortingMode: ondewoNlu008.SortingMode;
  }

  /**
   * Protobuf JSON representation for GetAudioFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    names: string[];
    resourceView: string;
    pageToken: string;
    sortingMode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAudioFilesResponse
 */
export class GetAudioFilesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetAudioFilesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAudioFilesResponse();
    GetAudioFilesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAudioFilesResponse) {
    _instance.audioFiles = _instance.audioFiles || [];
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAudioFilesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer1,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFiles = _instance.audioFiles || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        case 3:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAudioFilesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAudioFilesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.audioFiles && _instance.audioFiles.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.audioFiles as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(3, _instance.nextPageToken);
    }
  }

  private _audioFiles?: AudioFileResource[];
  private _errorMessage: string;
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAudioFilesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAudioFilesResponse.AsObject>) {
    _value = _value || {};
    this.audioFiles = (_value.audioFiles || []).map(
      m => new AudioFileResource(m)
    );
    this.errorMessage = _value.errorMessage;
    this.nextPageToken = _value.nextPageToken;
    GetAudioFilesResponse.refineValues(this);
  }
  get audioFiles(): AudioFileResource[] | undefined {
    return this._audioFiles;
  }
  set audioFiles(value: AudioFileResource[] | undefined) {
    this._audioFiles = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
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
    GetAudioFilesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAudioFilesResponse.AsObject {
    return {
      audioFiles: (this.audioFiles || []).map(m => m.toObject()),
      errorMessage: this.errorMessage,
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
  ): GetAudioFilesResponse.AsProtobufJSON {
    return {
      audioFiles: (this.audioFiles || []).map(m => m.toProtobufJSON(options)),
      errorMessage: this.errorMessage,
      nextPageToken: this.nextPageToken
    };
  }
}
export module GetAudioFilesResponse {
  /**
   * Standard JavaScript object representation for GetAudioFilesResponse
   */
  export interface AsObject {
    audioFiles?: AudioFileResource.AsObject[];
    errorMessage: string;
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for GetAudioFilesResponse
   */
  export interface AsProtobufJSON {
    audioFiles: AudioFileResource.AsProtobufJSON[] | null;
    errorMessage: string;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddAudioFilesRequest
 */
export class AddAudioFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddAudioFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddAudioFilesRequest();
    AddAudioFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddAudioFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.audioFileResources = _instance.audioFileResources || [];
    _instance.sessionStepId = _instance.sessionStepId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddAudioFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer3,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFileResources =
            _instance.audioFileResources || []).push(messageInitializer3);
          break;
        case 4:
          _instance.sessionStepId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddAudioFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddAudioFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionId) {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.audioFileResources && _instance.audioFileResources.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.audioFileResources as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.sessionStepId) {
      _writer.writeString(4, _instance.sessionStepId);
    }
  }

  private _parent: string;
  private _sessionId: string;
  private _audioFileResources?: AudioFileResource[];
  private _sessionStepId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddAudioFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddAudioFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionId = _value.sessionId;
    this.audioFileResources = (_value.audioFileResources || []).map(
      m => new AudioFileResource(m)
    );
    this.sessionStepId = _value.sessionStepId;
    AddAudioFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get audioFileResources(): AudioFileResource[] | undefined {
    return this._audioFileResources;
  }
  set audioFileResources(value: AudioFileResource[] | undefined) {
    this._audioFileResources = value;
  }
  get sessionStepId(): string {
    return this._sessionStepId;
  }
  set sessionStepId(value: string) {
    this._sessionStepId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddAudioFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddAudioFilesRequest.AsObject {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      audioFileResources: (this.audioFileResources || []).map(m =>
        m.toObject()
      ),
      sessionStepId: this.sessionStepId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddAudioFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      audioFileResources: (this.audioFileResources || []).map(m =>
        m.toProtobufJSON(options)
      ),
      sessionStepId: this.sessionStepId
    };
  }
}
export module AddAudioFilesRequest {
  /**
   * Standard JavaScript object representation for AddAudioFilesRequest
   */
  export interface AsObject {
    parent: string;
    sessionId: string;
    audioFileResources?: AudioFileResource.AsObject[];
    sessionStepId: string;
  }

  /**
   * Protobuf JSON representation for AddAudioFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionId: string;
    audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
    sessionStepId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddAudioFilesResponse
 */
export class AddAudioFilesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.AddAudioFilesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddAudioFilesResponse();
    AddAudioFilesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddAudioFilesResponse) {
    _instance.audioFileResources = _instance.audioFileResources || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddAudioFilesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer1,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFileResources =
            _instance.audioFileResources || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddAudioFilesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddAudioFilesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.audioFileResources && _instance.audioFileResources.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.audioFileResources as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _audioFileResources?: AudioFileResource[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddAudioFilesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddAudioFilesResponse.AsObject>) {
    _value = _value || {};
    this.audioFileResources = (_value.audioFileResources || []).map(
      m => new AudioFileResource(m)
    );
    this.errorMessage = _value.errorMessage;
    AddAudioFilesResponse.refineValues(this);
  }
  get audioFileResources(): AudioFileResource[] | undefined {
    return this._audioFileResources;
  }
  set audioFileResources(value: AudioFileResource[] | undefined) {
    this._audioFileResources = value;
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
    AddAudioFilesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddAudioFilesResponse.AsObject {
    return {
      audioFileResources: (this.audioFileResources || []).map(m =>
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
  ): AddAudioFilesResponse.AsProtobufJSON {
    return {
      audioFileResources: (this.audioFileResources || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module AddAudioFilesResponse {
  /**
   * Standard JavaScript object representation for AddAudioFilesResponse
   */
  export interface AsObject {
    audioFileResources?: AudioFileResource.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for AddAudioFilesResponse
   */
  export interface AsProtobufJSON {
    audioFileResources: AudioFileResource.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteAudioFilesRequest
 */
export class DeleteAudioFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteAudioFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAudioFilesRequest();
    DeleteAudioFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAudioFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAudioFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAudioFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAudioFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(2, _instance.names);
    }
  }

  private _parent: string;
  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAudioFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteAudioFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.names = (_value.names || []).slice();
    DeleteAudioFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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
    DeleteAudioFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAudioFilesRequest.AsObject {
    return {
      parent: this.parent,
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
  ): DeleteAudioFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      names: (this.names || []).slice()
    };
  }
}
export module DeleteAudioFilesRequest {
  /**
   * Standard JavaScript object representation for DeleteAudioFilesRequest
   */
  export interface AsObject {
    parent: string;
    names: string[];
  }

  /**
   * Protobuf JSON representation for DeleteAudioFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteAudioFilesResponse
 */
export class DeleteAudioFilesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteAudioFilesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAudioFilesResponse();
    DeleteAudioFilesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAudioFilesResponse) {
    _instance.names = _instance.names || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAudioFilesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAudioFilesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAudioFilesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _names: string[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAudioFilesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteAudioFilesResponse.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    this.errorMessage = _value.errorMessage;
    DeleteAudioFilesResponse.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
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
    DeleteAudioFilesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAudioFilesResponse.AsObject {
    return {
      names: (this.names || []).slice(),
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
  ): DeleteAudioFilesResponse.AsProtobufJSON {
    return {
      names: (this.names || []).slice(),
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteAudioFilesResponse {
  /**
   * Standard JavaScript object representation for DeleteAudioFilesResponse
   */
  export interface AsObject {
    names: string[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteAudioFilesResponse
   */
  export interface AsProtobufJSON {
    names: string[];
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAudioFilesRequest
 */
export class ListAudioFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListAudioFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAudioFilesRequest();
    ListAudioFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAudioFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.resourceView = _instance.resourceView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAudioFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.resourceView = _reader.readEnum();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ListAudioFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAudioFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionId) {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.resourceView) {
      _writer.writeEnum(3, _instance.resourceView);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(5, _instance.sortingMode);
    }
  }

  private _parent: string;
  private _sessionId: string;
  private _resourceView: ResourceView;
  private _pageToken: string;
  private _sortingMode: ondewoNlu008.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAudioFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAudioFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionId = _value.sessionId;
    this.resourceView = _value.resourceView;
    this.pageToken = _value.pageToken;
    this.sortingMode = _value.sortingMode;
    ListAudioFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get resourceView(): ResourceView {
    return this._resourceView;
  }
  set resourceView(value: ResourceView) {
    this._resourceView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
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
    ListAudioFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAudioFilesRequest.AsObject {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      resourceView: this.resourceView,
      pageToken: this.pageToken,
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
  ): ListAudioFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      resourceView:
        ResourceView[
          this.resourceView === null || this.resourceView === undefined
            ? 0
            : this.resourceView
        ],
      pageToken: this.pageToken,
      sortingMode:
        ondewoNlu008.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module ListAudioFilesRequest {
  /**
   * Standard JavaScript object representation for ListAudioFilesRequest
   */
  export interface AsObject {
    parent: string;
    sessionId: string;
    resourceView: ResourceView;
    pageToken: string;
    sortingMode: ondewoNlu008.SortingMode;
  }

  /**
   * Protobuf JSON representation for ListAudioFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionId: string;
    resourceView: string;
    pageToken: string;
    sortingMode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListAudioFilesResponse
 */
export class ListAudioFilesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListAudioFilesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAudioFilesResponse();
    ListAudioFilesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAudioFilesResponse) {
    _instance.audioFiles = _instance.audioFiles || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAudioFilesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new AudioFileResource();
          _reader.readMessage(
            messageInitializer1,
            AudioFileResource.deserializeBinaryFromReader
          );
          (_instance.audioFiles = _instance.audioFiles || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListAudioFilesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAudioFilesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.audioFiles && _instance.audioFiles.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.audioFiles as any,
        AudioFileResource.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _audioFiles?: AudioFileResource[];
  private _nextPageToken: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAudioFilesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAudioFilesResponse.AsObject>) {
    _value = _value || {};
    this.audioFiles = (_value.audioFiles || []).map(
      m => new AudioFileResource(m)
    );
    this.nextPageToken = _value.nextPageToken;
    this.errorMessage = _value.errorMessage;
    ListAudioFilesResponse.refineValues(this);
  }
  get audioFiles(): AudioFileResource[] | undefined {
    return this._audioFiles;
  }
  set audioFiles(value: AudioFileResource[] | undefined) {
    this._audioFiles = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
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
    ListAudioFilesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAudioFilesResponse.AsObject {
    return {
      audioFiles: (this.audioFiles || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
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
  ): ListAudioFilesResponse.AsProtobufJSON {
    return {
      audioFiles: (this.audioFiles || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      errorMessage: this.errorMessage
    };
  }
}
export module ListAudioFilesResponse {
  /**
   * Standard JavaScript object representation for ListAudioFilesResponse
   */
  export interface AsObject {
    audioFiles?: AudioFileResource.AsObject[];
    nextPageToken: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for ListAudioFilesResponse
   */
  export interface AsProtobufJSON {
    audioFiles: AudioFileResource.AsProtobufJSON[] | null;
    nextPageToken: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetAudioFileOfSessionRequest
 */
export class GetAudioFileOfSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAudioFileOfSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAudioFileOfSessionRequest();
    GetAudioFileOfSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAudioFileOfSessionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.resourceView = _instance.resourceView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAudioFileOfSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.resourceView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAudioFileOfSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAudioFileOfSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionId) {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.resourceView) {
      _writer.writeEnum(3, _instance.resourceView);
    }
  }

  private _parent: string;
  private _sessionId: string;
  private _resourceView: ResourceView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAudioFileOfSessionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetAudioFileOfSessionRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionId = _value.sessionId;
    this.resourceView = _value.resourceView;
    GetAudioFileOfSessionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get resourceView(): ResourceView {
    return this._resourceView;
  }
  set resourceView(value: ResourceView) {
    this._resourceView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAudioFileOfSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAudioFileOfSessionRequest.AsObject {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      resourceView: this.resourceView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetAudioFileOfSessionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionId: this.sessionId,
      resourceView:
        ResourceView[
          this.resourceView === null || this.resourceView === undefined
            ? 0
            : this.resourceView
        ]
    };
  }
}
export module GetAudioFileOfSessionRequest {
  /**
   * Standard JavaScript object representation for GetAudioFileOfSessionRequest
   */
  export interface AsObject {
    parent: string;
    sessionId: string;
    resourceView: ResourceView;
  }

  /**
   * Protobuf JSON representation for GetAudioFileOfSessionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionId: string;
    resourceView: string;
  }
}
