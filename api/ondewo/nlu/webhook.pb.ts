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
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operations.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as googleRpc010 from '../../google/rpc/status.pb';
import * as googleType011 from '../../google/type/latlng.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/session.pb';
/**
 * Message implementation for ondewo.nlu.PingRequest
 */
export class PingRequest implements GrpcMessage {
  static id = 'ondewo.nlu.PingRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PingRequest();
    PingRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PingRequest) {
    _instance.session = _instance.session || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PingRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.session = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PingRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PingRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.session) {
      _writer.writeString(1, _instance.session);
    }
  }

  private _session: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PingRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PingRequest.AsObject>) {
    _value = _value || {};
    this.session = _value.session;
    PingRequest.refineValues(this);
  }
  get session(): string {
    return this._session;
  }
  set session(value: string) {
    this._session = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PingRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PingRequest.AsObject {
    return {
      session: this.session
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PingRequest.AsProtobufJSON {
    return {
      session: this.session
    };
  }
}
export module PingRequest {
  /**
   * Standard JavaScript object representation for PingRequest
   */
  export interface AsObject {
    session: string;
  }

  /**
   * Protobuf JSON representation for PingRequest
   */
  export interface AsProtobufJSON {
    session: string;
  }
}

/**
 * Message implementation for ondewo.nlu.WebhookRequest
 */
export class WebhookRequest implements GrpcMessage {
  static id = 'ondewo.nlu.WebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WebhookRequest();
    WebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WebhookRequest) {
    _instance.responseId = _instance.responseId || '';
    _instance.queryResult = _instance.queryResult || undefined;
    _instance.originalDetectIntentRequest =
      _instance.originalDetectIntentRequest || undefined;
    _instance.session = _instance.session || '';
    _instance.headers = _instance.headers || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WebhookRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.responseId = _reader.readString();
          break;
        case 2:
          _instance.queryResult = new ondewoNlu014.QueryResult();
          _reader.readMessage(
            _instance.queryResult,
            ondewoNlu014.QueryResult.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.originalDetectIntentRequest = new OriginalDetectIntentRequest();
          _reader.readMessage(
            _instance.originalDetectIntentRequest,
            OriginalDetectIntentRequest.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.session = _reader.readString();
          break;
        case 5:
          _instance.headers = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.headers,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.responseId) {
      _writer.writeString(1, _instance.responseId);
    }
    if (_instance.queryResult) {
      _writer.writeMessage(
        2,
        _instance.queryResult as any,
        ondewoNlu014.QueryResult.serializeBinaryToWriter
      );
    }
    if (_instance.originalDetectIntentRequest) {
      _writer.writeMessage(
        3,
        _instance.originalDetectIntentRequest as any,
        OriginalDetectIntentRequest.serializeBinaryToWriter
      );
    }
    if (_instance.session) {
      _writer.writeString(4, _instance.session);
    }
    if (_instance.headers) {
      _writer.writeMessage(
        5,
        _instance.headers as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
  }

  private _responseId: string;
  private _queryResult?: ondewoNlu014.QueryResult;
  private _originalDetectIntentRequest?: OriginalDetectIntentRequest;
  private _session: string;
  private _headers?: googleProtobuf009.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<WebhookRequest.AsObject>) {
    _value = _value || {};
    this.responseId = _value.responseId;
    this.queryResult = _value.queryResult
      ? new ondewoNlu014.QueryResult(_value.queryResult)
      : undefined;
    this.originalDetectIntentRequest = _value.originalDetectIntentRequest
      ? new OriginalDetectIntentRequest(_value.originalDetectIntentRequest)
      : undefined;
    this.session = _value.session;
    this.headers = _value.headers
      ? new googleProtobuf009.Struct(_value.headers)
      : undefined;
    WebhookRequest.refineValues(this);
  }
  get responseId(): string {
    return this._responseId;
  }
  set responseId(value: string) {
    this._responseId = value;
  }
  get queryResult(): ondewoNlu014.QueryResult | undefined {
    return this._queryResult;
  }
  set queryResult(value: ondewoNlu014.QueryResult | undefined) {
    this._queryResult = value;
  }
  get originalDetectIntentRequest(): OriginalDetectIntentRequest | undefined {
    return this._originalDetectIntentRequest;
  }
  set originalDetectIntentRequest(
    value: OriginalDetectIntentRequest | undefined
  ) {
    this._originalDetectIntentRequest = value;
  }
  get session(): string {
    return this._session;
  }
  set session(value: string) {
    this._session = value;
  }
  get headers(): googleProtobuf009.Struct | undefined {
    return this._headers;
  }
  set headers(value: googleProtobuf009.Struct | undefined) {
    this._headers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WebhookRequest.AsObject {
    return {
      responseId: this.responseId,
      queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
      originalDetectIntentRequest: this.originalDetectIntentRequest
        ? this.originalDetectIntentRequest.toObject()
        : undefined,
      session: this.session,
      headers: this.headers ? this.headers.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WebhookRequest.AsProtobufJSON {
    return {
      responseId: this.responseId,
      queryResult: this.queryResult
        ? this.queryResult.toProtobufJSON(options)
        : null,
      originalDetectIntentRequest: this.originalDetectIntentRequest
        ? this.originalDetectIntentRequest.toProtobufJSON(options)
        : null,
      session: this.session,
      headers: this.headers ? this.headers.toProtobufJSON(options) : null
    };
  }
}
export module WebhookRequest {
  /**
   * Standard JavaScript object representation for WebhookRequest
   */
  export interface AsObject {
    responseId: string;
    queryResult?: ondewoNlu014.QueryResult.AsObject;
    originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject;
    session: string;
    headers?: googleProtobuf009.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for WebhookRequest
   */
  export interface AsProtobufJSON {
    responseId: string;
    queryResult: ondewoNlu014.QueryResult.AsProtobufJSON | null;
    originalDetectIntentRequest: OriginalDetectIntentRequest.AsProtobufJSON | null;
    session: string;
    headers: googleProtobuf009.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.WebhookResponse
 */
export class WebhookResponse implements GrpcMessage {
  static id = 'ondewo.nlu.WebhookResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WebhookResponse();
    WebhookResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WebhookResponse) {
    _instance.fulfillmentText = _instance.fulfillmentText || '';
    _instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
    _instance.source = _instance.source || '';
    _instance.payload = _instance.payload || undefined;
    _instance.outputContexts = _instance.outputContexts || [];
    _instance.followupEventInput = _instance.followupEventInput || undefined;
    _instance.sessionEntityTypes = _instance.sessionEntityTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WebhookResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fulfillmentText = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu012.Intent.Message();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu012.Intent.Message.deserializeBinaryFromReader
          );
          (_instance.fulfillmentMessages =
            _instance.fulfillmentMessages || []).push(messageInitializer2);
          break;
        case 3:
          _instance.source = _reader.readString();
          break;
        case 4:
          _instance.payload = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.payload,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          const messageInitializer5 = new ondewoNlu008.Context();
          _reader.readMessage(
            messageInitializer5,
            ondewoNlu008.Context.deserializeBinaryFromReader
          );
          (_instance.outputContexts = _instance.outputContexts || []).push(
            messageInitializer5
          );
          break;
        case 6:
          _instance.followupEventInput = new ondewoNlu014.EventInput();
          _reader.readMessage(
            _instance.followupEventInput,
            ondewoNlu014.EventInput.deserializeBinaryFromReader
          );
          break;
        case 10:
          const messageInitializer10 = new SessionEntityType();
          _reader.readMessage(
            messageInitializer10,
            SessionEntityType.deserializeBinaryFromReader
          );
          (_instance.sessionEntityTypes =
            _instance.sessionEntityTypes || []).push(messageInitializer10);
          break;
        default:
          _reader.skipField();
      }
    }

    WebhookResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WebhookResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.fulfillmentText) {
      _writer.writeString(1, _instance.fulfillmentText);
    }
    if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.fulfillmentMessages as any,
        ondewoNlu012.Intent.Message.serializeBinaryToWriter
      );
    }
    if (_instance.source) {
      _writer.writeString(3, _instance.source);
    }
    if (_instance.payload) {
      _writer.writeMessage(
        4,
        _instance.payload as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.outputContexts && _instance.outputContexts.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.outputContexts as any,
        ondewoNlu008.Context.serializeBinaryToWriter
      );
    }
    if (_instance.followupEventInput) {
      _writer.writeMessage(
        6,
        _instance.followupEventInput as any,
        ondewoNlu014.EventInput.serializeBinaryToWriter
      );
    }
    if (_instance.sessionEntityTypes && _instance.sessionEntityTypes.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.sessionEntityTypes as any,
        SessionEntityType.serializeBinaryToWriter
      );
    }
  }

  private _fulfillmentText: string;
  private _fulfillmentMessages?: ondewoNlu012.Intent.Message[];
  private _source: string;
  private _payload?: googleProtobuf009.Struct;
  private _outputContexts?: ondewoNlu008.Context[];
  private _followupEventInput?: ondewoNlu014.EventInput;
  private _sessionEntityTypes?: SessionEntityType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WebhookResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WebhookResponse.AsObject>) {
    _value = _value || {};
    this.fulfillmentText = _value.fulfillmentText;
    this.fulfillmentMessages = (_value.fulfillmentMessages || []).map(
      m => new ondewoNlu012.Intent.Message(m)
    );
    this.source = _value.source;
    this.payload = _value.payload
      ? new googleProtobuf009.Struct(_value.payload)
      : undefined;
    this.outputContexts = (_value.outputContexts || []).map(
      m => new ondewoNlu008.Context(m)
    );
    this.followupEventInput = _value.followupEventInput
      ? new ondewoNlu014.EventInput(_value.followupEventInput)
      : undefined;
    this.sessionEntityTypes = (_value.sessionEntityTypes || []).map(
      m => new SessionEntityType(m)
    );
    WebhookResponse.refineValues(this);
  }
  get fulfillmentText(): string {
    return this._fulfillmentText;
  }
  set fulfillmentText(value: string) {
    this._fulfillmentText = value;
  }
  get fulfillmentMessages(): ondewoNlu012.Intent.Message[] | undefined {
    return this._fulfillmentMessages;
  }
  set fulfillmentMessages(value: ondewoNlu012.Intent.Message[] | undefined) {
    this._fulfillmentMessages = value;
  }
  get source(): string {
    return this._source;
  }
  set source(value: string) {
    this._source = value;
  }
  get payload(): googleProtobuf009.Struct | undefined {
    return this._payload;
  }
  set payload(value: googleProtobuf009.Struct | undefined) {
    this._payload = value;
  }
  get outputContexts(): ondewoNlu008.Context[] | undefined {
    return this._outputContexts;
  }
  set outputContexts(value: ondewoNlu008.Context[] | undefined) {
    this._outputContexts = value;
  }
  get followupEventInput(): ondewoNlu014.EventInput | undefined {
    return this._followupEventInput;
  }
  set followupEventInput(value: ondewoNlu014.EventInput | undefined) {
    this._followupEventInput = value;
  }
  get sessionEntityTypes(): SessionEntityType[] | undefined {
    return this._sessionEntityTypes;
  }
  set sessionEntityTypes(value: SessionEntityType[] | undefined) {
    this._sessionEntityTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WebhookResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WebhookResponse.AsObject {
    return {
      fulfillmentText: this.fulfillmentText,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toObject()
      ),
      source: this.source,
      payload: this.payload ? this.payload.toObject() : undefined,
      outputContexts: (this.outputContexts || []).map(m => m.toObject()),
      followupEventInput: this.followupEventInput
        ? this.followupEventInput.toObject()
        : undefined,
      sessionEntityTypes: (this.sessionEntityTypes || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WebhookResponse.AsProtobufJSON {
    return {
      fulfillmentText: this.fulfillmentText,
      fulfillmentMessages: (this.fulfillmentMessages || []).map(m =>
        m.toProtobufJSON(options)
      ),
      source: this.source,
      payload: this.payload ? this.payload.toProtobufJSON(options) : null,
      outputContexts: (this.outputContexts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      followupEventInput: this.followupEventInput
        ? this.followupEventInput.toProtobufJSON(options)
        : null,
      sessionEntityTypes: (this.sessionEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module WebhookResponse {
  /**
   * Standard JavaScript object representation for WebhookResponse
   */
  export interface AsObject {
    fulfillmentText: string;
    fulfillmentMessages?: ondewoNlu012.Intent.Message.AsObject[];
    source: string;
    payload?: googleProtobuf009.Struct.AsObject;
    outputContexts?: ondewoNlu008.Context.AsObject[];
    followupEventInput?: ondewoNlu014.EventInput.AsObject;
    sessionEntityTypes?: SessionEntityType.AsObject[];
  }

  /**
   * Protobuf JSON representation for WebhookResponse
   */
  export interface AsProtobufJSON {
    fulfillmentText: string;
    fulfillmentMessages: ondewoNlu012.Intent.Message.AsProtobufJSON[] | null;
    source: string;
    payload: googleProtobuf009.Struct.AsProtobufJSON | null;
    outputContexts: ondewoNlu008.Context.AsProtobufJSON[] | null;
    followupEventInput: ondewoNlu014.EventInput.AsProtobufJSON | null;
    sessionEntityTypes: SessionEntityType.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.OriginalDetectIntentRequest
 */
export class OriginalDetectIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.OriginalDetectIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OriginalDetectIntentRequest();
    OriginalDetectIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OriginalDetectIntentRequest) {
    _instance.source = _instance.source || '';
    _instance.payload = _instance.payload || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OriginalDetectIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.source = _reader.readString();
          break;
        case 3:
          _instance.payload = new googleProtobuf009.Struct();
          _reader.readMessage(
            _instance.payload,
            googleProtobuf009.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OriginalDetectIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OriginalDetectIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.source) {
      _writer.writeString(1, _instance.source);
    }
    if (_instance.payload) {
      _writer.writeMessage(
        3,
        _instance.payload as any,
        googleProtobuf009.Struct.serializeBinaryToWriter
      );
    }
  }

  private _source: string;
  private _payload?: googleProtobuf009.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OriginalDetectIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<OriginalDetectIntentRequest.AsObject>) {
    _value = _value || {};
    this.source = _value.source;
    this.payload = _value.payload
      ? new googleProtobuf009.Struct(_value.payload)
      : undefined;
    OriginalDetectIntentRequest.refineValues(this);
  }
  get source(): string {
    return this._source;
  }
  set source(value: string) {
    this._source = value;
  }
  get payload(): googleProtobuf009.Struct | undefined {
    return this._payload;
  }
  set payload(value: googleProtobuf009.Struct | undefined) {
    this._payload = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OriginalDetectIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OriginalDetectIntentRequest.AsObject {
    return {
      source: this.source,
      payload: this.payload ? this.payload.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): OriginalDetectIntentRequest.AsProtobufJSON {
    return {
      source: this.source,
      payload: this.payload ? this.payload.toProtobufJSON(options) : null
    };
  }
}
export module OriginalDetectIntentRequest {
  /**
   * Standard JavaScript object representation for OriginalDetectIntentRequest
   */
  export interface AsObject {
    source: string;
    payload?: googleProtobuf009.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for OriginalDetectIntentRequest
   */
  export interface AsProtobufJSON {
    source: string;
    payload: googleProtobuf009.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.PingResponse
 */
export class PingResponse implements GrpcMessage {
  static id = 'ondewo.nlu.PingResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PingResponse();
    PingResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PingResponse) {
    _instance.isReachable = _instance.isReachable || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PingResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isReachable = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    PingResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PingResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.isReachable) {
      _writer.writeBool(1, _instance.isReachable);
    }
  }

  private _isReachable: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PingResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PingResponse.AsObject>) {
    _value = _value || {};
    this.isReachable = _value.isReachable;
    PingResponse.refineValues(this);
  }
  get isReachable(): boolean {
    return this._isReachable;
  }
  set isReachable(value: boolean) {
    this._isReachable = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PingResponse.AsObject {
    return {
      isReachable: this.isReachable
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PingResponse.AsProtobufJSON {
    return {
      isReachable: this.isReachable
    };
  }
}
export module PingResponse {
  /**
   * Standard JavaScript object representation for PingResponse
   */
  export interface AsObject {
    isReachable: boolean;
  }

  /**
   * Protobuf JSON representation for PingResponse
   */
  export interface AsProtobufJSON {
    isReachable: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.SessionEntityType
 */
export class SessionEntityType implements GrpcMessage {
  static id = 'ondewo.nlu.SessionEntityType';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SessionEntityType();
    SessionEntityType.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SessionEntityType) {
    _instance.name = _instance.name || '';
    _instance.entityOverrideMode = _instance.entityOverrideMode || 0;
    _instance.entities = _instance.entities || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SessionEntityType,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.entityOverrideMode = _reader.readEnum();
          break;
        case 3:
          const messageInitializer3 = new ondewoNlu013.EntityType.Entity();
          _reader.readMessage(
            messageInitializer3,
            ondewoNlu013.EntityType.Entity.deserializeBinaryFromReader
          );
          (_instance.entities = _instance.entities || []).push(
            messageInitializer3
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SessionEntityType.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SessionEntityType,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.entityOverrideMode) {
      _writer.writeEnum(2, _instance.entityOverrideMode);
    }
    if (_instance.entities && _instance.entities.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.entities as any,
        ondewoNlu013.EntityType.Entity.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _entityOverrideMode: SessionEntityType.EntityOverrideMode;
  private _entities?: ondewoNlu013.EntityType.Entity[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SessionEntityType to deeply clone from
   */
  constructor(_value?: RecursivePartial<SessionEntityType.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.entityOverrideMode = _value.entityOverrideMode;
    this.entities = (_value.entities || []).map(
      m => new ondewoNlu013.EntityType.Entity(m)
    );
    SessionEntityType.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get entityOverrideMode(): SessionEntityType.EntityOverrideMode {
    return this._entityOverrideMode;
  }
  set entityOverrideMode(value: SessionEntityType.EntityOverrideMode) {
    this._entityOverrideMode = value;
  }
  get entities(): ondewoNlu013.EntityType.Entity[] | undefined {
    return this._entities;
  }
  set entities(value: ondewoNlu013.EntityType.Entity[] | undefined) {
    this._entities = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SessionEntityType.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SessionEntityType.AsObject {
    return {
      name: this.name,
      entityOverrideMode: this.entityOverrideMode,
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
  ): SessionEntityType.AsProtobufJSON {
    return {
      name: this.name,
      entityOverrideMode:
        SessionEntityType.EntityOverrideMode[
          this.entityOverrideMode === null ||
          this.entityOverrideMode === undefined
            ? 0
            : this.entityOverrideMode
        ],
      entities: (this.entities || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module SessionEntityType {
  /**
   * Standard JavaScript object representation for SessionEntityType
   */
  export interface AsObject {
    name: string;
    entityOverrideMode: SessionEntityType.EntityOverrideMode;
    entities?: ondewoNlu013.EntityType.Entity.AsObject[];
  }

  /**
   * Protobuf JSON representation for SessionEntityType
   */
  export interface AsProtobufJSON {
    name: string;
    entityOverrideMode: string;
    entities: ondewoNlu013.EntityType.Entity.AsProtobufJSON[] | null;
  }
  export enum EntityOverrideMode {
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = 0,
    ENTITY_OVERRIDE_MODE_OVERRIDE = 1,
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = 2
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionEntityTypesRequest
 */
export class ListSessionEntityTypesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionEntityTypesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionEntityTypesRequest();
    ListSessionEntityTypesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionEntityTypesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionEntityTypesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionEntityTypesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionEntityTypesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _parent: string;
  private _pageSize: number;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionEntityTypesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSessionEntityTypesRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListSessionEntityTypesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSessionEntityTypesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionEntityTypesRequest.AsObject {
    return {
      parent: this.parent,
      pageSize: this.pageSize,
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
  ): ListSessionEntityTypesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListSessionEntityTypesRequest {
  /**
   * Standard JavaScript object representation for ListSessionEntityTypesRequest
   */
  export interface AsObject {
    parent: string;
    pageSize: number;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionEntityTypesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pageSize: number;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListSessionEntityTypesResponse
 */
export class ListSessionEntityTypesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListSessionEntityTypesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSessionEntityTypesResponse();
    ListSessionEntityTypesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSessionEntityTypesResponse) {
    _instance.sessionEntityTypes = _instance.sessionEntityTypes || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSessionEntityTypesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SessionEntityType();
          _reader.readMessage(
            messageInitializer1,
            SessionEntityType.deserializeBinaryFromReader
          );
          (_instance.sessionEntityTypes =
            _instance.sessionEntityTypes || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSessionEntityTypesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSessionEntityTypesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionEntityTypes && _instance.sessionEntityTypes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.sessionEntityTypes as any,
        SessionEntityType.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _sessionEntityTypes?: SessionEntityType[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSessionEntityTypesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSessionEntityTypesResponse.AsObject>
  ) {
    _value = _value || {};
    this.sessionEntityTypes = (_value.sessionEntityTypes || []).map(
      m => new SessionEntityType(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListSessionEntityTypesResponse.refineValues(this);
  }
  get sessionEntityTypes(): SessionEntityType[] | undefined {
    return this._sessionEntityTypes;
  }
  set sessionEntityTypes(value: SessionEntityType[] | undefined) {
    this._sessionEntityTypes = value;
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
    ListSessionEntityTypesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSessionEntityTypesResponse.AsObject {
    return {
      sessionEntityTypes: (this.sessionEntityTypes || []).map(m =>
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
  ): ListSessionEntityTypesResponse.AsProtobufJSON {
    return {
      sessionEntityTypes: (this.sessionEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSessionEntityTypesResponse {
  /**
   * Standard JavaScript object representation for ListSessionEntityTypesResponse
   */
  export interface AsObject {
    sessionEntityTypes?: SessionEntityType.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSessionEntityTypesResponse
   */
  export interface AsProtobufJSON {
    sessionEntityTypes: SessionEntityType.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetSessionEntityTypeRequest
 */
export class GetSessionEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetSessionEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSessionEntityTypeRequest();
    GetSessionEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSessionEntityTypeRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSessionEntityTypeRequest,
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

    GetSessionEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSessionEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSessionEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSessionEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetSessionEntityTypeRequest.refineValues(this);
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
    GetSessionEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSessionEntityTypeRequest.AsObject {
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
  ): GetSessionEntityTypeRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetSessionEntityTypeRequest {
  /**
   * Standard JavaScript object representation for GetSessionEntityTypeRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetSessionEntityTypeRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateSessionEntityTypeRequest
 */
export class CreateSessionEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateSessionEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSessionEntityTypeRequest();
    CreateSessionEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSessionEntityTypeRequest) {
    _instance.parent = _instance.parent || '';
    _instance.sessionEntityType = _instance.sessionEntityType || undefined;
    _instance.sessionId = _instance.sessionId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSessionEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.sessionEntityType = new SessionEntityType();
          _reader.readMessage(
            _instance.sessionEntityType,
            SessionEntityType.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.sessionId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSessionEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSessionEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.sessionEntityType) {
      _writer.writeMessage(
        2,
        _instance.sessionEntityType as any,
        SessionEntityType.serializeBinaryToWriter
      );
    }
    if (_instance.sessionId) {
      _writer.writeString(3, _instance.sessionId);
    }
  }

  private _parent: string;
  private _sessionEntityType?: SessionEntityType;
  private _sessionId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSessionEntityTypeRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateSessionEntityTypeRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.sessionEntityType = _value.sessionEntityType
      ? new SessionEntityType(_value.sessionEntityType)
      : undefined;
    this.sessionId = _value.sessionId;
    CreateSessionEntityTypeRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get sessionEntityType(): SessionEntityType | undefined {
    return this._sessionEntityType;
  }
  set sessionEntityType(value: SessionEntityType | undefined) {
    this._sessionEntityType = value;
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
    CreateSessionEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSessionEntityTypeRequest.AsObject {
    return {
      parent: this.parent,
      sessionEntityType: this.sessionEntityType
        ? this.sessionEntityType.toObject()
        : undefined,
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
  ): CreateSessionEntityTypeRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      sessionEntityType: this.sessionEntityType
        ? this.sessionEntityType.toProtobufJSON(options)
        : null,
      sessionId: this.sessionId
    };
  }
}
export module CreateSessionEntityTypeRequest {
  /**
   * Standard JavaScript object representation for CreateSessionEntityTypeRequest
   */
  export interface AsObject {
    parent: string;
    sessionEntityType?: SessionEntityType.AsObject;
    sessionId: string;
  }

  /**
   * Protobuf JSON representation for CreateSessionEntityTypeRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    sessionEntityType: SessionEntityType.AsProtobufJSON | null;
    sessionId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateSessionEntityTypeRequest
 */
export class UpdateSessionEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateSessionEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSessionEntityTypeRequest();
    UpdateSessionEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSessionEntityTypeRequest) {
    _instance.sessionEntityType = _instance.sessionEntityType || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSessionEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionEntityType = new SessionEntityType();
          _reader.readMessage(
            _instance.sessionEntityType,
            SessionEntityType.deserializeBinaryFromReader
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

    UpdateSessionEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSessionEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionEntityType) {
      _writer.writeMessage(
        1,
        _instance.sessionEntityType as any,
        SessionEntityType.serializeBinaryToWriter
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

  private _sessionEntityType?: SessionEntityType;
  private _updateMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSessionEntityTypeRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateSessionEntityTypeRequest.AsObject>
  ) {
    _value = _value || {};
    this.sessionEntityType = _value.sessionEntityType
      ? new SessionEntityType(_value.sessionEntityType)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    UpdateSessionEntityTypeRequest.refineValues(this);
  }
  get sessionEntityType(): SessionEntityType | undefined {
    return this._sessionEntityType;
  }
  set sessionEntityType(value: SessionEntityType | undefined) {
    this._sessionEntityType = value;
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
    UpdateSessionEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSessionEntityTypeRequest.AsObject {
    return {
      sessionEntityType: this.sessionEntityType
        ? this.sessionEntityType.toObject()
        : undefined,
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
  ): UpdateSessionEntityTypeRequest.AsProtobufJSON {
    return {
      sessionEntityType: this.sessionEntityType
        ? this.sessionEntityType.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateSessionEntityTypeRequest {
  /**
   * Standard JavaScript object representation for UpdateSessionEntityTypeRequest
   */
  export interface AsObject {
    sessionEntityType?: SessionEntityType.AsObject;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSessionEntityTypeRequest
   */
  export interface AsProtobufJSON {
    sessionEntityType: SessionEntityType.AsProtobufJSON | null;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteSessionEntityTypeRequest
 */
export class DeleteSessionEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteSessionEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSessionEntityTypeRequest();
    DeleteSessionEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSessionEntityTypeRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSessionEntityTypeRequest,
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

    DeleteSessionEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSessionEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSessionEntityTypeRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteSessionEntityTypeRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    DeleteSessionEntityTypeRequest.refineValues(this);
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
    DeleteSessionEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSessionEntityTypeRequest.AsObject {
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
  ): DeleteSessionEntityTypeRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteSessionEntityTypeRequest {
  /**
   * Standard JavaScript object representation for DeleteSessionEntityTypeRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteSessionEntityTypeRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}
