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
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleRpc007 from '../../google/rpc/status.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf012 from '@ngx-grpc/well-known-types';
export enum IntentView {
  INTENT_VIEW_UNSPECIFIED = 0,
  INTENT_VIEW_FULL = 1,
  INTENT_VIEW_PARTIAL = 2,
  INTENT_VIEW_SHALLOW = 3,
  INTENT_VIEW_MINIMUM = 4
}
export enum IntentCategory {
  ALL_INTENTS = 0,
  DEFAULT_INTENTS = 1,
  USER_DEFINED_INTENTS = 2,
  DATE_EXPIRED_INTENTS = 3,
  DATE_ACTIVE_INTENTS = 4,
  DATE_UPCOMING_INTENTS = 5
}
/**
 * Message implementation for ondewo.nlu.Intent
 */
export class Intent implements GrpcMessage {
  static id = 'ondewo.nlu.Intent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Intent();
    Intent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Intent) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.webhookState = _instance.webhookState || 0;
    _instance.priority = _instance.priority || 0;
    _instance.isFallback = _instance.isFallback || false;
    _instance.mlDisabled = _instance.mlDisabled || false;
    _instance.inputContextNames = _instance.inputContextNames || [];
    _instance.events = _instance.events || [];
    _instance.trainingPhrases = _instance.trainingPhrases || [];
    _instance.action = _instance.action || '';
    _instance.outputContexts = _instance.outputContexts || [];
    _instance.resetContexts = _instance.resetContexts || false;
    _instance.parameters = _instance.parameters || [];
    _instance.messages = _instance.messages || [];
    _instance.defaultResponsePlatforms =
      _instance.defaultResponsePlatforms || [];
    _instance.rootFollowupIntentName = _instance.rootFollowupIntentName || '';
    _instance.parentFollowupIntentName =
      _instance.parentFollowupIntentName || '';
    _instance.followupIntentInfo = _instance.followupIntentInfo || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.domainName = _instance.domainName || '';
    _instance.isStartOfDeviation = _instance.isStartOfDeviation || false;
    _instance.isEndOfDeviation = _instance.isEndOfDeviation || false;
    _instance.trainingPhraseCount = _instance.trainingPhraseCount || 0;
    _instance.status = _instance.status || 0;
    _instance.startDate = _instance.startDate || undefined;
    _instance.endDate = _instance.endDate || undefined;
    _instance.tags = _instance.tags || [];
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
  static deserializeBinaryFromReader(_instance: Intent, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 6:
          _instance.webhookState = _reader.readEnum();
          break;
        case 3:
          _instance.priority = _reader.readInt32();
          break;
        case 4:
          _instance.isFallback = _reader.readBool();
          break;
        case 19:
          _instance.mlDisabled = _reader.readBool();
          break;
        case 7:
          (_instance.inputContextNames =
            _instance.inputContextNames || []).push(_reader.readString());
          break;
        case 8:
          (_instance.events = _instance.events || []).push(
            _reader.readString()
          );
          break;
        case 9:
          const messageInitializer9 = new Intent.TrainingPhrase();
          _reader.readMessage(
            messageInitializer9,
            Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          (_instance.trainingPhrases = _instance.trainingPhrases || []).push(
            messageInitializer9
          );
          break;
        case 10:
          _instance.action = _reader.readString();
          break;
        case 11:
          const messageInitializer11 = new ondewoNlu009.Context();
          _reader.readMessage(
            messageInitializer11,
            ondewoNlu009.Context.deserializeBinaryFromReader
          );
          (_instance.outputContexts = _instance.outputContexts || []).push(
            messageInitializer11
          );
          break;
        case 12:
          _instance.resetContexts = _reader.readBool();
          break;
        case 13:
          const messageInitializer13 = new Intent.Parameter();
          _reader.readMessage(
            messageInitializer13,
            Intent.Parameter.deserializeBinaryFromReader
          );
          (_instance.parameters = _instance.parameters || []).push(
            messageInitializer13
          );
          break;
        case 14:
          const messageInitializer14 = new Intent.Message();
          _reader.readMessage(
            messageInitializer14,
            Intent.Message.deserializeBinaryFromReader
          );
          (_instance.messages = _instance.messages || []).push(
            messageInitializer14
          );
          break;
        case 15:
          _reader.readPackableEnumInto(
            (_instance.defaultResponsePlatforms =
              _instance.defaultResponsePlatforms || [])
          );
          break;
        case 16:
          _instance.rootFollowupIntentName = _reader.readString();
          break;
        case 17:
          _instance.parentFollowupIntentName = _reader.readString();
          break;
        case 18:
          const messageInitializer18 = new Intent.FollowupIntentInfo();
          _reader.readMessage(
            messageInitializer18,
            Intent.FollowupIntentInfo.deserializeBinaryFromReader
          );
          (_instance.followupIntentInfo =
            _instance.followupIntentInfo || []).push(messageInitializer18);
          break;
        case 30:
          _instance.nextPageToken = _reader.readString();
          break;
        case 31:
          _instance.domainName = _reader.readString();
          break;
        case 32:
          _instance.isStartOfDeviation = _reader.readBool();
          break;
        case 33:
          _instance.isEndOfDeviation = _reader.readBool();
          break;
        case 34:
          _instance.trainingPhraseCount = _reader.readInt32();
          break;
        case 35:
          _instance.status = _reader.readEnum();
          break;
        case 36:
          _instance.startDate = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startDate,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 37:
          _instance.endDate = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.endDate,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 38:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        case 39:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 40:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 41:
          _instance.createdBy = _reader.readString();
          break;
        case 42:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Intent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Intent, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.webhookState) {
      _writer.writeEnum(6, _instance.webhookState);
    }
    if (_instance.priority) {
      _writer.writeInt32(3, _instance.priority);
    }
    if (_instance.isFallback) {
      _writer.writeBool(4, _instance.isFallback);
    }
    if (_instance.mlDisabled) {
      _writer.writeBool(19, _instance.mlDisabled);
    }
    if (_instance.inputContextNames && _instance.inputContextNames.length) {
      _writer.writeRepeatedString(7, _instance.inputContextNames);
    }
    if (_instance.events && _instance.events.length) {
      _writer.writeRepeatedString(8, _instance.events);
    }
    if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
      _writer.writeRepeatedMessage(
        9,
        _instance.trainingPhrases as any,
        Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.action) {
      _writer.writeString(10, _instance.action);
    }
    if (_instance.outputContexts && _instance.outputContexts.length) {
      _writer.writeRepeatedMessage(
        11,
        _instance.outputContexts as any,
        ondewoNlu009.Context.serializeBinaryToWriter
      );
    }
    if (_instance.resetContexts) {
      _writer.writeBool(12, _instance.resetContexts);
    }
    if (_instance.parameters && _instance.parameters.length) {
      _writer.writeRepeatedMessage(
        13,
        _instance.parameters as any,
        Intent.Parameter.serializeBinaryToWriter
      );
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.messages as any,
        Intent.Message.serializeBinaryToWriter
      );
    }
    if (
      _instance.defaultResponsePlatforms &&
      _instance.defaultResponsePlatforms.length
    ) {
      _writer.writePackedEnum(15, _instance.defaultResponsePlatforms);
    }
    if (_instance.rootFollowupIntentName) {
      _writer.writeString(16, _instance.rootFollowupIntentName);
    }
    if (_instance.parentFollowupIntentName) {
      _writer.writeString(17, _instance.parentFollowupIntentName);
    }
    if (_instance.followupIntentInfo && _instance.followupIntentInfo.length) {
      _writer.writeRepeatedMessage(
        18,
        _instance.followupIntentInfo as any,
        Intent.FollowupIntentInfo.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(30, _instance.nextPageToken);
    }
    if (_instance.domainName) {
      _writer.writeString(31, _instance.domainName);
    }
    if (_instance.isStartOfDeviation) {
      _writer.writeBool(32, _instance.isStartOfDeviation);
    }
    if (_instance.isEndOfDeviation) {
      _writer.writeBool(33, _instance.isEndOfDeviation);
    }
    if (_instance.trainingPhraseCount) {
      _writer.writeInt32(34, _instance.trainingPhraseCount);
    }
    if (_instance.status) {
      _writer.writeEnum(35, _instance.status);
    }
    if (_instance.startDate) {
      _writer.writeMessage(
        36,
        _instance.startDate as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endDate) {
      _writer.writeMessage(
        37,
        _instance.endDate as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(38, _instance.tags);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        39,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        40,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(41, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(42, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _webhookState: Intent.WebhookState;
  private _priority: number;
  private _isFallback: boolean;
  private _mlDisabled: boolean;
  private _inputContextNames: string[];
  private _events: string[];
  private _trainingPhrases?: Intent.TrainingPhrase[];
  private _action: string;
  private _outputContexts?: ondewoNlu009.Context[];
  private _resetContexts: boolean;
  private _parameters?: Intent.Parameter[];
  private _messages?: Intent.Message[];
  private _defaultResponsePlatforms: Intent.Message.Platform[];
  private _rootFollowupIntentName: string;
  private _parentFollowupIntentName: string;
  private _followupIntentInfo?: Intent.FollowupIntentInfo[];
  private _nextPageToken: string;
  private _domainName: string;
  private _isStartOfDeviation: boolean;
  private _isEndOfDeviation: boolean;
  private _trainingPhraseCount: number;
  private _status: Intent.IntentStatus;
  private _startDate?: googleProtobuf005.Timestamp;
  private _endDate?: googleProtobuf005.Timestamp;
  private _tags: string[];
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Intent to deeply clone from
   */
  constructor(_value?: RecursivePartial<Intent.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.webhookState = _value.webhookState;
    this.priority = _value.priority;
    this.isFallback = _value.isFallback;
    this.mlDisabled = _value.mlDisabled;
    this.inputContextNames = (_value.inputContextNames || []).slice();
    this.events = (_value.events || []).slice();
    this.trainingPhrases = (_value.trainingPhrases || []).map(
      m => new Intent.TrainingPhrase(m)
    );
    this.action = _value.action;
    this.outputContexts = (_value.outputContexts || []).map(
      m => new ondewoNlu009.Context(m)
    );
    this.resetContexts = _value.resetContexts;
    this.parameters = (_value.parameters || []).map(
      m => new Intent.Parameter(m)
    );
    this.messages = (_value.messages || []).map(m => new Intent.Message(m));
    this.defaultResponsePlatforms = (
      _value.defaultResponsePlatforms || []
    ).slice();
    this.rootFollowupIntentName = _value.rootFollowupIntentName;
    this.parentFollowupIntentName = _value.parentFollowupIntentName;
    this.followupIntentInfo = (_value.followupIntentInfo || []).map(
      m => new Intent.FollowupIntentInfo(m)
    );
    this.nextPageToken = _value.nextPageToken;
    this.domainName = _value.domainName;
    this.isStartOfDeviation = _value.isStartOfDeviation;
    this.isEndOfDeviation = _value.isEndOfDeviation;
    this.trainingPhraseCount = _value.trainingPhraseCount;
    this.status = _value.status;
    this.startDate = _value.startDate
      ? new googleProtobuf005.Timestamp(_value.startDate)
      : undefined;
    this.endDate = _value.endDate
      ? new googleProtobuf005.Timestamp(_value.endDate)
      : undefined;
    this.tags = (_value.tags || []).slice();
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    Intent.refineValues(this);
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
  get webhookState(): Intent.WebhookState {
    return this._webhookState;
  }
  set webhookState(value: Intent.WebhookState) {
    this._webhookState = value;
  }
  get priority(): number {
    return this._priority;
  }
  set priority(value: number) {
    this._priority = value;
  }
  get isFallback(): boolean {
    return this._isFallback;
  }
  set isFallback(value: boolean) {
    this._isFallback = value;
  }
  get mlDisabled(): boolean {
    return this._mlDisabled;
  }
  set mlDisabled(value: boolean) {
    this._mlDisabled = value;
  }
  get inputContextNames(): string[] {
    return this._inputContextNames;
  }
  set inputContextNames(value: string[]) {
    this._inputContextNames = value;
  }
  get events(): string[] {
    return this._events;
  }
  set events(value: string[]) {
    this._events = value;
  }
  get trainingPhrases(): Intent.TrainingPhrase[] | undefined {
    return this._trainingPhrases;
  }
  set trainingPhrases(value: Intent.TrainingPhrase[] | undefined) {
    this._trainingPhrases = value;
  }
  get action(): string {
    return this._action;
  }
  set action(value: string) {
    this._action = value;
  }
  get outputContexts(): ondewoNlu009.Context[] | undefined {
    return this._outputContexts;
  }
  set outputContexts(value: ondewoNlu009.Context[] | undefined) {
    this._outputContexts = value;
  }
  get resetContexts(): boolean {
    return this._resetContexts;
  }
  set resetContexts(value: boolean) {
    this._resetContexts = value;
  }
  get parameters(): Intent.Parameter[] | undefined {
    return this._parameters;
  }
  set parameters(value: Intent.Parameter[] | undefined) {
    this._parameters = value;
  }
  get messages(): Intent.Message[] | undefined {
    return this._messages;
  }
  set messages(value: Intent.Message[] | undefined) {
    this._messages = value;
  }
  get defaultResponsePlatforms(): Intent.Message.Platform[] {
    return this._defaultResponsePlatforms;
  }
  set defaultResponsePlatforms(value: Intent.Message.Platform[]) {
    this._defaultResponsePlatforms = value;
  }
  get rootFollowupIntentName(): string {
    return this._rootFollowupIntentName;
  }
  set rootFollowupIntentName(value: string) {
    this._rootFollowupIntentName = value;
  }
  get parentFollowupIntentName(): string {
    return this._parentFollowupIntentName;
  }
  set parentFollowupIntentName(value: string) {
    this._parentFollowupIntentName = value;
  }
  get followupIntentInfo(): Intent.FollowupIntentInfo[] | undefined {
    return this._followupIntentInfo;
  }
  set followupIntentInfo(value: Intent.FollowupIntentInfo[] | undefined) {
    this._followupIntentInfo = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get domainName(): string {
    return this._domainName;
  }
  set domainName(value: string) {
    this._domainName = value;
  }
  get isStartOfDeviation(): boolean {
    return this._isStartOfDeviation;
  }
  set isStartOfDeviation(value: boolean) {
    this._isStartOfDeviation = value;
  }
  get isEndOfDeviation(): boolean {
    return this._isEndOfDeviation;
  }
  set isEndOfDeviation(value: boolean) {
    this._isEndOfDeviation = value;
  }
  get trainingPhraseCount(): number {
    return this._trainingPhraseCount;
  }
  set trainingPhraseCount(value: number) {
    this._trainingPhraseCount = value;
  }
  get status(): Intent.IntentStatus {
    return this._status;
  }
  set status(value: Intent.IntentStatus) {
    this._status = value;
  }
  get startDate(): googleProtobuf005.Timestamp | undefined {
    return this._startDate;
  }
  set startDate(value: googleProtobuf005.Timestamp | undefined) {
    this._startDate = value;
  }
  get endDate(): googleProtobuf005.Timestamp | undefined {
    return this._endDate;
  }
  set endDate(value: googleProtobuf005.Timestamp | undefined) {
    this._endDate = value;
  }
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
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
    Intent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Intent.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      webhookState: this.webhookState,
      priority: this.priority,
      isFallback: this.isFallback,
      mlDisabled: this.mlDisabled,
      inputContextNames: (this.inputContextNames || []).slice(),
      events: (this.events || []).slice(),
      trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject()),
      action: this.action,
      outputContexts: (this.outputContexts || []).map(m => m.toObject()),
      resetContexts: this.resetContexts,
      parameters: (this.parameters || []).map(m => m.toObject()),
      messages: (this.messages || []).map(m => m.toObject()),
      defaultResponsePlatforms: (this.defaultResponsePlatforms || []).slice(),
      rootFollowupIntentName: this.rootFollowupIntentName,
      parentFollowupIntentName: this.parentFollowupIntentName,
      followupIntentInfo: (this.followupIntentInfo || []).map(m =>
        m.toObject()
      ),
      nextPageToken: this.nextPageToken,
      domainName: this.domainName,
      isStartOfDeviation: this.isStartOfDeviation,
      isEndOfDeviation: this.isEndOfDeviation,
      trainingPhraseCount: this.trainingPhraseCount,
      status: this.status,
      startDate: this.startDate ? this.startDate.toObject() : undefined,
      endDate: this.endDate ? this.endDate.toObject() : undefined,
      tags: (this.tags || []).slice(),
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
  ): Intent.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      webhookState:
        Intent.WebhookState[
          this.webhookState === null || this.webhookState === undefined
            ? 0
            : this.webhookState
        ],
      priority: this.priority,
      isFallback: this.isFallback,
      mlDisabled: this.mlDisabled,
      inputContextNames: (this.inputContextNames || []).slice(),
      events: (this.events || []).slice(),
      trainingPhrases: (this.trainingPhrases || []).map(m =>
        m.toProtobufJSON(options)
      ),
      action: this.action,
      outputContexts: (this.outputContexts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      resetContexts: this.resetContexts,
      parameters: (this.parameters || []).map(m => m.toProtobufJSON(options)),
      messages: (this.messages || []).map(m => m.toProtobufJSON(options)),
      defaultResponsePlatforms: (this.defaultResponsePlatforms || []).map(
        v => Intent.Message.Platform[v]
      ),
      rootFollowupIntentName: this.rootFollowupIntentName,
      parentFollowupIntentName: this.parentFollowupIntentName,
      followupIntentInfo: (this.followupIntentInfo || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken,
      domainName: this.domainName,
      isStartOfDeviation: this.isStartOfDeviation,
      isEndOfDeviation: this.isEndOfDeviation,
      trainingPhraseCount: this.trainingPhraseCount,
      status:
        Intent.IntentStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      startDate: this.startDate ? this.startDate.toProtobufJSON(options) : null,
      endDate: this.endDate ? this.endDate.toProtobufJSON(options) : null,
      tags: (this.tags || []).slice(),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module Intent {
  /**
   * Standard JavaScript object representation for Intent
   */
  export interface AsObject {
    name: string;
    displayName: string;
    webhookState: Intent.WebhookState;
    priority: number;
    isFallback: boolean;
    mlDisabled: boolean;
    inputContextNames: string[];
    events: string[];
    trainingPhrases?: Intent.TrainingPhrase.AsObject[];
    action: string;
    outputContexts?: ondewoNlu009.Context.AsObject[];
    resetContexts: boolean;
    parameters?: Intent.Parameter.AsObject[];
    messages?: Intent.Message.AsObject[];
    defaultResponsePlatforms: Intent.Message.Platform[];
    rootFollowupIntentName: string;
    parentFollowupIntentName: string;
    followupIntentInfo?: Intent.FollowupIntentInfo.AsObject[];
    nextPageToken: string;
    domainName: string;
    isStartOfDeviation: boolean;
    isEndOfDeviation: boolean;
    trainingPhraseCount: number;
    status: Intent.IntentStatus;
    startDate?: googleProtobuf005.Timestamp.AsObject;
    endDate?: googleProtobuf005.Timestamp.AsObject;
    tags: string[];
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for Intent
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    webhookState: string;
    priority: number;
    isFallback: boolean;
    mlDisabled: boolean;
    inputContextNames: string[];
    events: string[];
    trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
    action: string;
    outputContexts: ondewoNlu009.Context.AsProtobufJSON[] | null;
    resetContexts: boolean;
    parameters: Intent.Parameter.AsProtobufJSON[] | null;
    messages: Intent.Message.AsProtobufJSON[] | null;
    defaultResponsePlatforms: string[];
    rootFollowupIntentName: string;
    parentFollowupIntentName: string;
    followupIntentInfo: Intent.FollowupIntentInfo.AsProtobufJSON[] | null;
    nextPageToken: string;
    domainName: string;
    isStartOfDeviation: boolean;
    isEndOfDeviation: boolean;
    trainingPhraseCount: number;
    status: string;
    startDate: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    endDate: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    tags: string[];
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
  export enum IntentStatus {
    ACTIVE = 0,
    INACTIVE = 1
  }
  export enum WebhookState {
    WEBHOOK_STATE_UNSPECIFIED = 0,
    WEBHOOK_STATE_ENABLED = 1,
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2
  }
  /**
   * Message implementation for ondewo.nlu.Intent.TrainingPhrase
   */
  export class TrainingPhrase implements GrpcMessage {
    static id = 'ondewo.nlu.Intent.TrainingPhrase';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new TrainingPhrase();
      TrainingPhrase.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainingPhrase) {
      _instance.name = _instance.name || '';
      _instance.type = _instance.type || 0;
      _instance.text = _instance.text || '';
      _instance.entities = _instance.entities || [];
      _instance.timesAddedCount = _instance.timesAddedCount || 0;
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
      _instance: TrainingPhrase,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.type = _reader.readEnum();
            break;
          case 3:
            _instance.text = _reader.readString();
            break;
          case 4:
            const messageInitializer4 = new Intent.TrainingPhrase.Entity();
            _reader.readMessage(
              messageInitializer4,
              Intent.TrainingPhrase.Entity.deserializeBinaryFromReader
            );
            (_instance.entities = _instance.entities || []).push(
              messageInitializer4
            );
            break;
          case 5:
            _instance.timesAddedCount = _reader.readInt32();
            break;
          case 6:
            _instance.languageCode = _reader.readString();
            break;
          case 7:
            _instance.createdAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.modifiedAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
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

      TrainingPhrase.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: TrainingPhrase,
      _writer: BinaryWriter
    ) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.type) {
        _writer.writeEnum(2, _instance.type);
      }
      if (_instance.text) {
        _writer.writeString(3, _instance.text);
      }
      if (_instance.entities && _instance.entities.length) {
        _writer.writeRepeatedMessage(
          4,
          _instance.entities as any,
          Intent.TrainingPhrase.Entity.serializeBinaryToWriter
        );
      }
      if (_instance.timesAddedCount) {
        _writer.writeInt32(5, _instance.timesAddedCount);
      }
      if (_instance.languageCode) {
        _writer.writeString(6, _instance.languageCode);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          7,
          _instance.createdAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          8,
          _instance.modifiedAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
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
    private _type: Intent.TrainingPhrase.Type;
    private _text: string;
    private _entities?: Intent.TrainingPhrase.Entity[];
    private _timesAddedCount: number;
    private _languageCode: string;
    private _createdAt?: googleProtobuf005.Timestamp;
    private _modifiedAt?: googleProtobuf005.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhrase to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainingPhrase.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.type = _value.type;
      this.text = _value.text;
      this.entities = (_value.entities || []).map(
        m => new Intent.TrainingPhrase.Entity(m)
      );
      this.timesAddedCount = _value.timesAddedCount;
      this.languageCode = _value.languageCode;
      this.createdAt = _value.createdAt
        ? new googleProtobuf005.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf005.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      TrainingPhrase.refineValues(this);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get type(): Intent.TrainingPhrase.Type {
      return this._type;
    }
    set type(value: Intent.TrainingPhrase.Type) {
      this._type = value;
    }
    get text(): string {
      return this._text;
    }
    set text(value: string) {
      this._text = value;
    }
    get entities(): Intent.TrainingPhrase.Entity[] | undefined {
      return this._entities;
    }
    set entities(value: Intent.TrainingPhrase.Entity[] | undefined) {
      this._entities = value;
    }
    get timesAddedCount(): number {
      return this._timesAddedCount;
    }
    set timesAddedCount(value: number) {
      this._timesAddedCount = value;
    }
    get languageCode(): string {
      return this._languageCode;
    }
    set languageCode(value: string) {
      this._languageCode = value;
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
      TrainingPhrase.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainingPhrase.AsObject {
      return {
        name: this.name,
        type: this.type,
        text: this.text,
        entities: (this.entities || []).map(m => m.toObject()),
        timesAddedCount: this.timesAddedCount,
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
    ): TrainingPhrase.AsProtobufJSON {
      return {
        name: this.name,
        type:
          Intent.TrainingPhrase.Type[
            this.type === null || this.type === undefined ? 0 : this.type
          ],
        text: this.text,
        entities: (this.entities || []).map(m => m.toProtobufJSON(options)),
        timesAddedCount: this.timesAddedCount,
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
  export module TrainingPhrase {
    /**
     * Standard JavaScript object representation for TrainingPhrase
     */
    export interface AsObject {
      name: string;
      type: Intent.TrainingPhrase.Type;
      text: string;
      entities?: Intent.TrainingPhrase.Entity.AsObject[];
      timesAddedCount: number;
      languageCode: string;
      createdAt?: googleProtobuf005.Timestamp.AsObject;
      modifiedAt?: googleProtobuf005.Timestamp.AsObject;
      createdBy: string;
      modifiedBy: string;
    }

    /**
     * Protobuf JSON representation for TrainingPhrase
     */
    export interface AsProtobufJSON {
      name: string;
      type: string;
      text: string;
      entities: Intent.TrainingPhrase.Entity.AsProtobufJSON[] | null;
      timesAddedCount: number;
      languageCode: string;
      createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      createdBy: string;
      modifiedBy: string;
    }
    export enum Type {
      TYPE_UNSPECIFIED = 0,
      EXAMPLE = 1,
      TEMPLATE = 2
    }
    /**
     * Message implementation for ondewo.nlu.Intent.TrainingPhrase.Entity
     */
    export class Entity implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.TrainingPhrase.Entity';

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
        _instance.entityTypeName = _instance.entityTypeName || '';
        _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
        _instance.entityValueName = _instance.entityValueName || '';
        _instance.entityValueDisplayName =
          _instance.entityValueDisplayName || '';
        _instance.start = _instance.start || 0;
        _instance.end = _instance.end || 0;
        _instance.parameterName = _instance.parameterName || '';
        _instance.parameterDisplayName = _instance.parameterDisplayName || '';
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
              _instance.entityTypeName = _reader.readString();
              break;
            case 3:
              _instance.entityTypeDisplayName = _reader.readString();
              break;
            case 4:
              _instance.entityValueName = _reader.readString();
              break;
            case 5:
              _instance.entityValueDisplayName = _reader.readString();
              break;
            case 6:
              _instance.start = _reader.readInt32();
              break;
            case 7:
              _instance.end = _reader.readInt32();
              break;
            case 8:
              _instance.parameterName = _reader.readString();
              break;
            case 9:
              _instance.parameterDisplayName = _reader.readString();
              break;
            case 10:
              _instance.createdAt = new googleProtobuf005.Timestamp();
              _reader.readMessage(
                _instance.createdAt,
                googleProtobuf005.Timestamp.deserializeBinaryFromReader
              );
              break;
            case 11:
              _instance.modifiedAt = new googleProtobuf005.Timestamp();
              _reader.readMessage(
                _instance.modifiedAt,
                googleProtobuf005.Timestamp.deserializeBinaryFromReader
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

        Entity.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter) {
        if (_instance.entityTypeName) {
          _writer.writeString(1, _instance.entityTypeName);
        }
        if (_instance.entityTypeDisplayName) {
          _writer.writeString(3, _instance.entityTypeDisplayName);
        }
        if (_instance.entityValueName) {
          _writer.writeString(4, _instance.entityValueName);
        }
        if (_instance.entityValueDisplayName) {
          _writer.writeString(5, _instance.entityValueDisplayName);
        }
        if (_instance.start) {
          _writer.writeInt32(6, _instance.start);
        }
        if (_instance.end) {
          _writer.writeInt32(7, _instance.end);
        }
        if (_instance.parameterName) {
          _writer.writeString(8, _instance.parameterName);
        }
        if (_instance.parameterDisplayName) {
          _writer.writeString(9, _instance.parameterDisplayName);
        }
        if (_instance.createdAt) {
          _writer.writeMessage(
            10,
            _instance.createdAt as any,
            googleProtobuf005.Timestamp.serializeBinaryToWriter
          );
        }
        if (_instance.modifiedAt) {
          _writer.writeMessage(
            11,
            _instance.modifiedAt as any,
            googleProtobuf005.Timestamp.serializeBinaryToWriter
          );
        }
        if (_instance.createdBy) {
          _writer.writeString(12, _instance.createdBy);
        }
        if (_instance.modifiedBy) {
          _writer.writeString(13, _instance.modifiedBy);
        }
      }

      private _entityTypeName: string;
      private _entityTypeDisplayName: string;
      private _entityValueName: string;
      private _entityValueDisplayName: string;
      private _start: number;
      private _end: number;
      private _parameterName: string;
      private _parameterDisplayName: string;
      private _createdAt?: googleProtobuf005.Timestamp;
      private _modifiedAt?: googleProtobuf005.Timestamp;
      private _createdBy: string;
      private _modifiedBy: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Entity to deeply clone from
       */
      constructor(_value?: RecursivePartial<Entity.AsObject>) {
        _value = _value || {};
        this.entityTypeName = _value.entityTypeName;
        this.entityTypeDisplayName = _value.entityTypeDisplayName;
        this.entityValueName = _value.entityValueName;
        this.entityValueDisplayName = _value.entityValueDisplayName;
        this.start = _value.start;
        this.end = _value.end;
        this.parameterName = _value.parameterName;
        this.parameterDisplayName = _value.parameterDisplayName;
        this.createdAt = _value.createdAt
          ? new googleProtobuf005.Timestamp(_value.createdAt)
          : undefined;
        this.modifiedAt = _value.modifiedAt
          ? new googleProtobuf005.Timestamp(_value.modifiedAt)
          : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        Entity.refineValues(this);
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
      get entityValueName(): string {
        return this._entityValueName;
      }
      set entityValueName(value: string) {
        this._entityValueName = value;
      }
      get entityValueDisplayName(): string {
        return this._entityValueDisplayName;
      }
      set entityValueDisplayName(value: string) {
        this._entityValueDisplayName = value;
      }
      get start(): number {
        return this._start;
      }
      set start(value: number) {
        this._start = value;
      }
      get end(): number {
        return this._end;
      }
      set end(value: number) {
        this._end = value;
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
        Entity.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Entity.AsObject {
        return {
          entityTypeName: this.entityTypeName,
          entityTypeDisplayName: this.entityTypeDisplayName,
          entityValueName: this.entityValueName,
          entityValueDisplayName: this.entityValueDisplayName,
          start: this.start,
          end: this.end,
          parameterName: this.parameterName,
          parameterDisplayName: this.parameterDisplayName,
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
          entityTypeName: this.entityTypeName,
          entityTypeDisplayName: this.entityTypeDisplayName,
          entityValueName: this.entityValueName,
          entityValueDisplayName: this.entityValueDisplayName,
          start: this.start,
          end: this.end,
          parameterName: this.parameterName,
          parameterDisplayName: this.parameterDisplayName,
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
        entityTypeName: string;
        entityTypeDisplayName: string;
        entityValueName: string;
        entityValueDisplayName: string;
        start: number;
        end: number;
        parameterName: string;
        parameterDisplayName: string;
        createdAt?: googleProtobuf005.Timestamp.AsObject;
        modifiedAt?: googleProtobuf005.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
      }

      /**
       * Protobuf JSON representation for Entity
       */
      export interface AsProtobufJSON {
        entityTypeName: string;
        entityTypeDisplayName: string;
        entityValueName: string;
        entityValueDisplayName: string;
        start: number;
        end: number;
        parameterName: string;
        parameterDisplayName: string;
        createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
      }
    }
  }

  /**
   * Message implementation for ondewo.nlu.Intent.Parameter
   */
  export class Parameter implements GrpcMessage {
    static id = 'ondewo.nlu.Intent.Parameter';

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
      _instance.defaultValue = _instance.defaultValue || '';
      _instance.entityTypeName = _instance.entityTypeName || '';
      _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
      _instance.mandatory = _instance.mandatory || false;
      _instance.prompts = _instance.prompts || [];
      _instance.isList = _instance.isList || false;
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
            _instance.defaultValue = _reader.readString();
            break;
          case 5:
            _instance.entityTypeName = _reader.readString();
            break;
          case 6:
            _instance.entityTypeDisplayName = _reader.readString();
            break;
          case 7:
            _instance.mandatory = _reader.readBool();
            break;
          case 8:
            const messageInitializer8 = new Intent.Parameter.Prompt();
            _reader.readMessage(
              messageInitializer8,
              Intent.Parameter.Prompt.deserializeBinaryFromReader
            );
            (_instance.prompts = _instance.prompts || []).push(
              messageInitializer8
            );
            break;
          case 9:
            _instance.isList = _reader.readBool();
            break;
          case 10:
            _instance.createdAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 11:
            _instance.modifiedAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
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
      if (_instance.defaultValue) {
        _writer.writeString(4, _instance.defaultValue);
      }
      if (_instance.entityTypeName) {
        _writer.writeString(5, _instance.entityTypeName);
      }
      if (_instance.entityTypeDisplayName) {
        _writer.writeString(6, _instance.entityTypeDisplayName);
      }
      if (_instance.mandatory) {
        _writer.writeBool(7, _instance.mandatory);
      }
      if (_instance.prompts && _instance.prompts.length) {
        _writer.writeRepeatedMessage(
          8,
          _instance.prompts as any,
          Intent.Parameter.Prompt.serializeBinaryToWriter
        );
      }
      if (_instance.isList) {
        _writer.writeBool(9, _instance.isList);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          10,
          _instance.createdAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          11,
          _instance.modifiedAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
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
    private _displayName: string;
    private _value: string;
    private _defaultValue: string;
    private _entityTypeName: string;
    private _entityTypeDisplayName: string;
    private _mandatory: boolean;
    private _prompts?: Intent.Parameter.Prompt[];
    private _isList: boolean;
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
      this.defaultValue = _value.defaultValue;
      this.entityTypeName = _value.entityTypeName;
      this.entityTypeDisplayName = _value.entityTypeDisplayName;
      this.mandatory = _value.mandatory;
      this.prompts = (_value.prompts || []).map(
        m => new Intent.Parameter.Prompt(m)
      );
      this.isList = _value.isList;
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
    get defaultValue(): string {
      return this._defaultValue;
    }
    set defaultValue(value: string) {
      this._defaultValue = value;
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
    get mandatory(): boolean {
      return this._mandatory;
    }
    set mandatory(value: boolean) {
      this._mandatory = value;
    }
    get prompts(): Intent.Parameter.Prompt[] | undefined {
      return this._prompts;
    }
    set prompts(value: Intent.Parameter.Prompt[] | undefined) {
      this._prompts = value;
    }
    get isList(): boolean {
      return this._isList;
    }
    set isList(value: boolean) {
      this._isList = value;
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
        defaultValue: this.defaultValue,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        mandatory: this.mandatory,
        prompts: (this.prompts || []).map(m => m.toObject()),
        isList: this.isList,
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
        defaultValue: this.defaultValue,
        entityTypeName: this.entityTypeName,
        entityTypeDisplayName: this.entityTypeDisplayName,
        mandatory: this.mandatory,
        prompts: (this.prompts || []).map(m => m.toProtobufJSON(options)),
        isList: this.isList,
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
      defaultValue: string;
      entityTypeName: string;
      entityTypeDisplayName: string;
      mandatory: boolean;
      prompts?: Intent.Parameter.Prompt.AsObject[];
      isList: boolean;
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
      defaultValue: string;
      entityTypeName: string;
      entityTypeDisplayName: string;
      mandatory: boolean;
      prompts: Intent.Parameter.Prompt.AsProtobufJSON[] | null;
      isList: boolean;
      createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      createdBy: string;
      modifiedBy: string;
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Parameter.Prompt
     */
    export class Prompt implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Parameter.Prompt';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Prompt();
        Prompt.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Prompt) {
        _instance.name = _instance.name || '';
        _instance.text = _instance.text || '';
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
        _instance: Prompt,
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
              _instance.languageCode = _reader.readString();
              break;
            case 4:
              _instance.createdAt = new googleProtobuf005.Timestamp();
              _reader.readMessage(
                _instance.createdAt,
                googleProtobuf005.Timestamp.deserializeBinaryFromReader
              );
              break;
            case 5:
              _instance.modifiedAt = new googleProtobuf005.Timestamp();
              _reader.readMessage(
                _instance.modifiedAt,
                googleProtobuf005.Timestamp.deserializeBinaryFromReader
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

        Prompt.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Prompt, _writer: BinaryWriter) {
        if (_instance.name) {
          _writer.writeString(1, _instance.name);
        }
        if (_instance.text) {
          _writer.writeString(2, _instance.text);
        }
        if (_instance.languageCode) {
          _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.createdAt) {
          _writer.writeMessage(
            4,
            _instance.createdAt as any,
            googleProtobuf005.Timestamp.serializeBinaryToWriter
          );
        }
        if (_instance.modifiedAt) {
          _writer.writeMessage(
            5,
            _instance.modifiedAt as any,
            googleProtobuf005.Timestamp.serializeBinaryToWriter
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
      private _text: string;
      private _languageCode: string;
      private _createdAt?: googleProtobuf005.Timestamp;
      private _modifiedAt?: googleProtobuf005.Timestamp;
      private _createdBy: string;
      private _modifiedBy: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Prompt to deeply clone from
       */
      constructor(_value?: RecursivePartial<Prompt.AsObject>) {
        _value = _value || {};
        this.name = _value.name;
        this.text = _value.text;
        this.languageCode = _value.languageCode;
        this.createdAt = _value.createdAt
          ? new googleProtobuf005.Timestamp(_value.createdAt)
          : undefined;
        this.modifiedAt = _value.modifiedAt
          ? new googleProtobuf005.Timestamp(_value.modifiedAt)
          : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        Prompt.refineValues(this);
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
      get languageCode(): string {
        return this._languageCode;
      }
      set languageCode(value: string) {
        this._languageCode = value;
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
        Prompt.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Prompt.AsObject {
        return {
          name: this.name,
          text: this.text,
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
      ): Prompt.AsProtobufJSON {
        return {
          name: this.name,
          text: this.text,
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
    export module Prompt {
      /**
       * Standard JavaScript object representation for Prompt
       */
      export interface AsObject {
        name: string;
        text: string;
        languageCode: string;
        createdAt?: googleProtobuf005.Timestamp.AsObject;
        modifiedAt?: googleProtobuf005.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
      }

      /**
       * Protobuf JSON representation for Prompt
       */
      export interface AsProtobufJSON {
        name: string;
        text: string;
        languageCode: string;
        createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
      }
    }
  }

  /**
   * Message implementation for ondewo.nlu.Intent.Message
   */
  export class Message implements GrpcMessage {
    static id = 'ondewo.nlu.Intent.Message';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Message();
      Message.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Message) {
      _instance.name = _instance.name || '';
      _instance.languageCode = _instance.languageCode || '';

      _instance.platform = _instance.platform || 0;
      _instance.isPrompt = _instance.isPrompt || false;
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
      _instance: Message,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 16:
            _instance.name = _reader.readString();
            break;
          case 17:
            _instance.languageCode = _reader.readString();
            break;
          case 1:
            _instance.text = new Intent.Message.Text();
            _reader.readMessage(
              _instance.text,
              Intent.Message.Text.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.image = new Intent.Message.Image();
            _reader.readMessage(
              _instance.image,
              Intent.Message.Image.deserializeBinaryFromReader
            );
            break;
          case 3:
            _instance.quickReplies = new Intent.Message.QuickReplies();
            _reader.readMessage(
              _instance.quickReplies,
              Intent.Message.QuickReplies.deserializeBinaryFromReader
            );
            break;
          case 4:
            _instance.card = new Intent.Message.Card();
            _reader.readMessage(
              _instance.card,
              Intent.Message.Card.deserializeBinaryFromReader
            );
            break;
          case 5:
            _instance.payload = new googleProtobuf012.Struct();
            _reader.readMessage(
              _instance.payload,
              googleProtobuf012.Struct.deserializeBinaryFromReader
            );
            break;
          case 7:
            _instance.simpleResponses = new Intent.Message.SimpleResponses();
            _reader.readMessage(
              _instance.simpleResponses,
              Intent.Message.SimpleResponses.deserializeBinaryFromReader
            );
            break;
          case 8:
            _instance.basicCard = new Intent.Message.BasicCard();
            _reader.readMessage(
              _instance.basicCard,
              Intent.Message.BasicCard.deserializeBinaryFromReader
            );
            break;
          case 9:
            _instance.suggestions = new Intent.Message.Suggestions();
            _reader.readMessage(
              _instance.suggestions,
              Intent.Message.Suggestions.deserializeBinaryFromReader
            );
            break;
          case 10:
            _instance.linkOutSuggestion = new Intent.Message.LinkOutSuggestion();
            _reader.readMessage(
              _instance.linkOutSuggestion,
              Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader
            );
            break;
          case 11:
            _instance.listSelect = new Intent.Message.ListSelect();
            _reader.readMessage(
              _instance.listSelect,
              Intent.Message.ListSelect.deserializeBinaryFromReader
            );
            break;
          case 12:
            _instance.carouselSelect = new Intent.Message.CarouselSelect();
            _reader.readMessage(
              _instance.carouselSelect,
              Intent.Message.CarouselSelect.deserializeBinaryFromReader
            );
            break;
          case 13:
            _instance.htmlText = new Intent.Message.HTMLText();
            _reader.readMessage(
              _instance.htmlText,
              Intent.Message.HTMLText.deserializeBinaryFromReader
            );
            break;
          case 14:
            _instance.video = new Intent.Message.Video();
            _reader.readMessage(
              _instance.video,
              Intent.Message.Video.deserializeBinaryFromReader
            );
            break;
          case 15:
            _instance.audio = new Intent.Message.Audio();
            _reader.readMessage(
              _instance.audio,
              Intent.Message.Audio.deserializeBinaryFromReader
            );
            break;
          case 6:
            _instance.platform = _reader.readEnum();
            break;
          case 18:
            _instance.isPrompt = _reader.readBool();
            break;
          case 19:
            _instance.createdAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.createdAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 20:
            _instance.modifiedAt = new googleProtobuf005.Timestamp();
            _reader.readMessage(
              _instance.modifiedAt,
              googleProtobuf005.Timestamp.deserializeBinaryFromReader
            );
            break;
          case 21:
            _instance.createdBy = _reader.readString();
            break;
          case 22:
            _instance.modifiedBy = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      Message.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Message, _writer: BinaryWriter) {
      if (_instance.name) {
        _writer.writeString(16, _instance.name);
      }
      if (_instance.languageCode) {
        _writer.writeString(17, _instance.languageCode);
      }
      if (_instance.text) {
        _writer.writeMessage(
          1,
          _instance.text as any,
          Intent.Message.Text.serializeBinaryToWriter
        );
      }
      if (_instance.image) {
        _writer.writeMessage(
          2,
          _instance.image as any,
          Intent.Message.Image.serializeBinaryToWriter
        );
      }
      if (_instance.quickReplies) {
        _writer.writeMessage(
          3,
          _instance.quickReplies as any,
          Intent.Message.QuickReplies.serializeBinaryToWriter
        );
      }
      if (_instance.card) {
        _writer.writeMessage(
          4,
          _instance.card as any,
          Intent.Message.Card.serializeBinaryToWriter
        );
      }
      if (_instance.payload) {
        _writer.writeMessage(
          5,
          _instance.payload as any,
          googleProtobuf012.Struct.serializeBinaryToWriter
        );
      }
      if (_instance.simpleResponses) {
        _writer.writeMessage(
          7,
          _instance.simpleResponses as any,
          Intent.Message.SimpleResponses.serializeBinaryToWriter
        );
      }
      if (_instance.basicCard) {
        _writer.writeMessage(
          8,
          _instance.basicCard as any,
          Intent.Message.BasicCard.serializeBinaryToWriter
        );
      }
      if (_instance.suggestions) {
        _writer.writeMessage(
          9,
          _instance.suggestions as any,
          Intent.Message.Suggestions.serializeBinaryToWriter
        );
      }
      if (_instance.linkOutSuggestion) {
        _writer.writeMessage(
          10,
          _instance.linkOutSuggestion as any,
          Intent.Message.LinkOutSuggestion.serializeBinaryToWriter
        );
      }
      if (_instance.listSelect) {
        _writer.writeMessage(
          11,
          _instance.listSelect as any,
          Intent.Message.ListSelect.serializeBinaryToWriter
        );
      }
      if (_instance.carouselSelect) {
        _writer.writeMessage(
          12,
          _instance.carouselSelect as any,
          Intent.Message.CarouselSelect.serializeBinaryToWriter
        );
      }
      if (_instance.htmlText) {
        _writer.writeMessage(
          13,
          _instance.htmlText as any,
          Intent.Message.HTMLText.serializeBinaryToWriter
        );
      }
      if (_instance.video) {
        _writer.writeMessage(
          14,
          _instance.video as any,
          Intent.Message.Video.serializeBinaryToWriter
        );
      }
      if (_instance.audio) {
        _writer.writeMessage(
          15,
          _instance.audio as any,
          Intent.Message.Audio.serializeBinaryToWriter
        );
      }
      if (_instance.platform) {
        _writer.writeEnum(6, _instance.platform);
      }
      if (_instance.isPrompt) {
        _writer.writeBool(18, _instance.isPrompt);
      }
      if (_instance.createdAt) {
        _writer.writeMessage(
          19,
          _instance.createdAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.modifiedAt) {
        _writer.writeMessage(
          20,
          _instance.modifiedAt as any,
          googleProtobuf005.Timestamp.serializeBinaryToWriter
        );
      }
      if (_instance.createdBy) {
        _writer.writeString(21, _instance.createdBy);
      }
      if (_instance.modifiedBy) {
        _writer.writeString(22, _instance.modifiedBy);
      }
    }

    private _name: string;
    private _languageCode: string;
    private _text?: Intent.Message.Text;
    private _image?: Intent.Message.Image;
    private _quickReplies?: Intent.Message.QuickReplies;
    private _card?: Intent.Message.Card;
    private _payload?: googleProtobuf012.Struct;
    private _simpleResponses?: Intent.Message.SimpleResponses;
    private _basicCard?: Intent.Message.BasicCard;
    private _suggestions?: Intent.Message.Suggestions;
    private _linkOutSuggestion?: Intent.Message.LinkOutSuggestion;
    private _listSelect?: Intent.Message.ListSelect;
    private _carouselSelect?: Intent.Message.CarouselSelect;
    private _htmlText?: Intent.Message.HTMLText;
    private _video?: Intent.Message.Video;
    private _audio?: Intent.Message.Audio;
    private _platform: Intent.Message.Platform;
    private _isPrompt: boolean;
    private _createdAt?: googleProtobuf005.Timestamp;
    private _modifiedAt?: googleProtobuf005.Timestamp;
    private _createdBy: string;
    private _modifiedBy: string;

    private _message: Message.MessageCase = Message.MessageCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Message to deeply clone from
     */
    constructor(_value?: RecursivePartial<Message.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.languageCode = _value.languageCode;
      this.text = _value.text
        ? new Intent.Message.Text(_value.text)
        : undefined;
      this.image = _value.image
        ? new Intent.Message.Image(_value.image)
        : undefined;
      this.quickReplies = _value.quickReplies
        ? new Intent.Message.QuickReplies(_value.quickReplies)
        : undefined;
      this.card = _value.card
        ? new Intent.Message.Card(_value.card)
        : undefined;
      this.payload = _value.payload
        ? new googleProtobuf012.Struct(_value.payload)
        : undefined;
      this.simpleResponses = _value.simpleResponses
        ? new Intent.Message.SimpleResponses(_value.simpleResponses)
        : undefined;
      this.basicCard = _value.basicCard
        ? new Intent.Message.BasicCard(_value.basicCard)
        : undefined;
      this.suggestions = _value.suggestions
        ? new Intent.Message.Suggestions(_value.suggestions)
        : undefined;
      this.linkOutSuggestion = _value.linkOutSuggestion
        ? new Intent.Message.LinkOutSuggestion(_value.linkOutSuggestion)
        : undefined;
      this.listSelect = _value.listSelect
        ? new Intent.Message.ListSelect(_value.listSelect)
        : undefined;
      this.carouselSelect = _value.carouselSelect
        ? new Intent.Message.CarouselSelect(_value.carouselSelect)
        : undefined;
      this.htmlText = _value.htmlText
        ? new Intent.Message.HTMLText(_value.htmlText)
        : undefined;
      this.video = _value.video
        ? new Intent.Message.Video(_value.video)
        : undefined;
      this.audio = _value.audio
        ? new Intent.Message.Audio(_value.audio)
        : undefined;
      this.platform = _value.platform;
      this.isPrompt = _value.isPrompt;
      this.createdAt = _value.createdAt
        ? new googleProtobuf005.Timestamp(_value.createdAt)
        : undefined;
      this.modifiedAt = _value.modifiedAt
        ? new googleProtobuf005.Timestamp(_value.modifiedAt)
        : undefined;
      this.createdBy = _value.createdBy;
      this.modifiedBy = _value.modifiedBy;
      Message.refineValues(this);
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
    get text(): Intent.Message.Text | undefined {
      return this._text;
    }
    set text(value: Intent.Message.Text | undefined) {
      if (value !== undefined && value !== null) {
        this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.text;
      }
      this._text = value;
    }
    get image(): Intent.Message.Image | undefined {
      return this._image;
    }
    set image(value: Intent.Message.Image | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.image;
      }
      this._image = value;
    }
    get quickReplies(): Intent.Message.QuickReplies | undefined {
      return this._quickReplies;
    }
    set quickReplies(value: Intent.Message.QuickReplies | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.quickReplies;
      }
      this._quickReplies = value;
    }
    get card(): Intent.Message.Card | undefined {
      return this._card;
    }
    set card(value: Intent.Message.Card | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.card;
      }
      this._card = value;
    }
    get payload(): googleProtobuf012.Struct | undefined {
      return this._payload;
    }
    set payload(value: googleProtobuf012.Struct | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.payload;
      }
      this._payload = value;
    }
    get simpleResponses(): Intent.Message.SimpleResponses | undefined {
      return this._simpleResponses;
    }
    set simpleResponses(value: Intent.Message.SimpleResponses | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.simpleResponses;
      }
      this._simpleResponses = value;
    }
    get basicCard(): Intent.Message.BasicCard | undefined {
      return this._basicCard;
    }
    set basicCard(value: Intent.Message.BasicCard | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.basicCard;
      }
      this._basicCard = value;
    }
    get suggestions(): Intent.Message.Suggestions | undefined {
      return this._suggestions;
    }
    set suggestions(value: Intent.Message.Suggestions | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.suggestions;
      }
      this._suggestions = value;
    }
    get linkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined {
      return this._linkOutSuggestion;
    }
    set linkOutSuggestion(value: Intent.Message.LinkOutSuggestion | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.linkOutSuggestion;
      }
      this._linkOutSuggestion = value;
    }
    get listSelect(): Intent.Message.ListSelect | undefined {
      return this._listSelect;
    }
    set listSelect(value: Intent.Message.ListSelect | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.listSelect;
      }
      this._listSelect = value;
    }
    get carouselSelect(): Intent.Message.CarouselSelect | undefined {
      return this._carouselSelect;
    }
    set carouselSelect(value: Intent.Message.CarouselSelect | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._htmlText = this._video = this._audio = undefined;
        this._message = Message.MessageCase.carouselSelect;
      }
      this._carouselSelect = value;
    }
    get htmlText(): Intent.Message.HTMLText | undefined {
      return this._htmlText;
    }
    set htmlText(value: Intent.Message.HTMLText | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._video = this._audio = undefined;
        this._message = Message.MessageCase.htmlText;
      }
      this._htmlText = value;
    }
    get video(): Intent.Message.Video | undefined {
      return this._video;
    }
    set video(value: Intent.Message.Video | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._audio = undefined;
        this._message = Message.MessageCase.video;
      }
      this._video = value;
    }
    get audio(): Intent.Message.Audio | undefined {
      return this._audio;
    }
    set audio(value: Intent.Message.Audio | undefined) {
      if (value !== undefined && value !== null) {
        this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = undefined;
        this._message = Message.MessageCase.audio;
      }
      this._audio = value;
    }
    get platform(): Intent.Message.Platform {
      return this._platform;
    }
    set platform(value: Intent.Message.Platform) {
      this._platform = value;
    }
    get isPrompt(): boolean {
      return this._isPrompt;
    }
    set isPrompt(value: boolean) {
      this._isPrompt = value;
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
    get message() {
      return this._message;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Message.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Message.AsObject {
      return {
        name: this.name,
        languageCode: this.languageCode,
        text: this.text ? this.text.toObject() : undefined,
        image: this.image ? this.image.toObject() : undefined,
        quickReplies: this.quickReplies
          ? this.quickReplies.toObject()
          : undefined,
        card: this.card ? this.card.toObject() : undefined,
        payload: this.payload ? this.payload.toObject() : undefined,
        simpleResponses: this.simpleResponses
          ? this.simpleResponses.toObject()
          : undefined,
        basicCard: this.basicCard ? this.basicCard.toObject() : undefined,
        suggestions: this.suggestions ? this.suggestions.toObject() : undefined,
        linkOutSuggestion: this.linkOutSuggestion
          ? this.linkOutSuggestion.toObject()
          : undefined,
        listSelect: this.listSelect ? this.listSelect.toObject() : undefined,
        carouselSelect: this.carouselSelect
          ? this.carouselSelect.toObject()
          : undefined,
        htmlText: this.htmlText ? this.htmlText.toObject() : undefined,
        video: this.video ? this.video.toObject() : undefined,
        audio: this.audio ? this.audio.toObject() : undefined,
        platform: this.platform,
        isPrompt: this.isPrompt,
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
    ): Message.AsProtobufJSON {
      return {
        name: this.name,
        languageCode: this.languageCode,
        text: this.text ? this.text.toProtobufJSON(options) : null,
        image: this.image ? this.image.toProtobufJSON(options) : null,
        quickReplies: this.quickReplies
          ? this.quickReplies.toProtobufJSON(options)
          : null,
        card: this.card ? this.card.toProtobufJSON(options) : null,
        payload: this.payload ? this.payload.toProtobufJSON(options) : null,
        simpleResponses: this.simpleResponses
          ? this.simpleResponses.toProtobufJSON(options)
          : null,
        basicCard: this.basicCard
          ? this.basicCard.toProtobufJSON(options)
          : null,
        suggestions: this.suggestions
          ? this.suggestions.toProtobufJSON(options)
          : null,
        linkOutSuggestion: this.linkOutSuggestion
          ? this.linkOutSuggestion.toProtobufJSON(options)
          : null,
        listSelect: this.listSelect
          ? this.listSelect.toProtobufJSON(options)
          : null,
        carouselSelect: this.carouselSelect
          ? this.carouselSelect.toProtobufJSON(options)
          : null,
        htmlText: this.htmlText ? this.htmlText.toProtobufJSON(options) : null,
        video: this.video ? this.video.toProtobufJSON(options) : null,
        audio: this.audio ? this.audio.toProtobufJSON(options) : null,
        platform:
          Intent.Message.Platform[
            this.platform === null || this.platform === undefined
              ? 0
              : this.platform
          ],
        isPrompt: this.isPrompt,
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
  export module Message {
    /**
     * Standard JavaScript object representation for Message
     */
    export interface AsObject {
      name: string;
      languageCode: string;
      text?: Intent.Message.Text.AsObject;
      image?: Intent.Message.Image.AsObject;
      quickReplies?: Intent.Message.QuickReplies.AsObject;
      card?: Intent.Message.Card.AsObject;
      payload?: googleProtobuf012.Struct.AsObject;
      simpleResponses?: Intent.Message.SimpleResponses.AsObject;
      basicCard?: Intent.Message.BasicCard.AsObject;
      suggestions?: Intent.Message.Suggestions.AsObject;
      linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject;
      listSelect?: Intent.Message.ListSelect.AsObject;
      carouselSelect?: Intent.Message.CarouselSelect.AsObject;
      htmlText?: Intent.Message.HTMLText.AsObject;
      video?: Intent.Message.Video.AsObject;
      audio?: Intent.Message.Audio.AsObject;
      platform: Intent.Message.Platform;
      isPrompt: boolean;
      createdAt?: googleProtobuf005.Timestamp.AsObject;
      modifiedAt?: googleProtobuf005.Timestamp.AsObject;
      createdBy: string;
      modifiedBy: string;
    }

    /**
     * Protobuf JSON representation for Message
     */
    export interface AsProtobufJSON {
      name: string;
      languageCode: string;
      text: Intent.Message.Text.AsProtobufJSON | null;
      image: Intent.Message.Image.AsProtobufJSON | null;
      quickReplies: Intent.Message.QuickReplies.AsProtobufJSON | null;
      card: Intent.Message.Card.AsProtobufJSON | null;
      payload: googleProtobuf012.Struct.AsProtobufJSON | null;
      simpleResponses: Intent.Message.SimpleResponses.AsProtobufJSON | null;
      basicCard: Intent.Message.BasicCard.AsProtobufJSON | null;
      suggestions: Intent.Message.Suggestions.AsProtobufJSON | null;
      linkOutSuggestion: Intent.Message.LinkOutSuggestion.AsProtobufJSON | null;
      listSelect: Intent.Message.ListSelect.AsProtobufJSON | null;
      carouselSelect: Intent.Message.CarouselSelect.AsProtobufJSON | null;
      htmlText: Intent.Message.HTMLText.AsProtobufJSON | null;
      video: Intent.Message.Video.AsProtobufJSON | null;
      audio: Intent.Message.Audio.AsProtobufJSON | null;
      platform: string;
      isPrompt: boolean;
      createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
      createdBy: string;
      modifiedBy: string;
    }
    export enum MessageCase {
      none = 0,
      text = 1,
      image = 2,
      quickReplies = 3,
      card = 4,
      payload = 5,
      simpleResponses = 6,
      basicCard = 7,
      suggestions = 8,
      linkOutSuggestion = 9,
      listSelect = 10,
      carouselSelect = 11,
      htmlText = 12,
      video = 13,
      audio = 14
    }
    export enum Platform {
      PLATFORM_UNSPECIFIED = 0,
      FACEBOOK = 1,
      SLACK = 2,
      TELEGRAM = 3,
      KIK = 4,
      SKYPE = 5,
      LINE = 6,
      VIBER = 7,
      ACTIONS_ON_GOOGLE = 8,
      PLACEHOLDER_1 = 9,
      PLACEHOLDER_2 = 10,
      PLACEHOLDER_3 = 11,
      PLACEHOLDER_4 = 12,
      PLACEHOLDER_5 = 13,
      PLACEHOLDER_6 = 14,
      PLACEHOLDER_7 = 15,
      PLACEHOLDER_8 = 16,
      PLACEHOLDER_9 = 17,
      PLACEHOLDER_10 = 18,
      PLACEHOLDER_11 = 19,
      PLACEHOLDER_12 = 20,
      PLACEHOLDER_13 = 21,
      PLACEHOLDER_14 = 22,
      PLACEHOLDER_15 = 23,
      PLACEHOLDER_16 = 24,
      PLACEHOLDER_17 = 25,
      PLACEHOLDER_18 = 26,
      PLACEHOLDER_19 = 27,
      PLACEHOLDER_20 = 28
    }
    /**
     * Message implementation for ondewo.nlu.Intent.Message.Text
     */
    export class Text implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Text';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Text();
        Text.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Text) {
        _instance.text = _instance.text || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Text,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              (_instance.text = _instance.text || []).push(
                _reader.readString()
              );
              break;
            default:
              _reader.skipField();
          }
        }

        Text.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Text, _writer: BinaryWriter) {
        if (_instance.text && _instance.text.length) {
          _writer.writeRepeatedString(1, _instance.text);
        }
      }

      private _text: string[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Text to deeply clone from
       */
      constructor(_value?: RecursivePartial<Text.AsObject>) {
        _value = _value || {};
        this.text = (_value.text || []).slice();
        Text.refineValues(this);
      }
      get text(): string[] {
        return this._text;
      }
      set text(value: string[]) {
        this._text = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Text.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Text.AsObject {
        return {
          text: (this.text || []).slice()
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Text.AsProtobufJSON {
        return {
          text: (this.text || []).slice()
        };
      }
    }
    export module Text {
      /**
       * Standard JavaScript object representation for Text
       */
      export interface AsObject {
        text: string[];
      }

      /**
       * Protobuf JSON representation for Text
       */
      export interface AsProtobufJSON {
        text: string[];
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Image
     */
    export class Image implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Image';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Image();
        Image.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Image) {
        _instance.imageUri = _instance.imageUri || '';
        _instance.accessibilityText = _instance.accessibilityText || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Image,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.imageUri = _reader.readString();
              break;
            case 2:
              _instance.accessibilityText = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        Image.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Image, _writer: BinaryWriter) {
        if (_instance.imageUri) {
          _writer.writeString(1, _instance.imageUri);
        }
        if (_instance.accessibilityText) {
          _writer.writeString(2, _instance.accessibilityText);
        }
      }

      private _imageUri: string;
      private _accessibilityText: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Image to deeply clone from
       */
      constructor(_value?: RecursivePartial<Image.AsObject>) {
        _value = _value || {};
        this.imageUri = _value.imageUri;
        this.accessibilityText = _value.accessibilityText;
        Image.refineValues(this);
      }
      get imageUri(): string {
        return this._imageUri;
      }
      set imageUri(value: string) {
        this._imageUri = value;
      }
      get accessibilityText(): string {
        return this._accessibilityText;
      }
      set accessibilityText(value: string) {
        this._accessibilityText = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Image.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Image.AsObject {
        return {
          imageUri: this.imageUri,
          accessibilityText: this.accessibilityText
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Image.AsProtobufJSON {
        return {
          imageUri: this.imageUri,
          accessibilityText: this.accessibilityText
        };
      }
    }
    export module Image {
      /**
       * Standard JavaScript object representation for Image
       */
      export interface AsObject {
        imageUri: string;
        accessibilityText: string;
      }

      /**
       * Protobuf JSON representation for Image
       */
      export interface AsProtobufJSON {
        imageUri: string;
        accessibilityText: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.QuickReplies
     */
    export class QuickReplies implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.QuickReplies';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new QuickReplies();
        QuickReplies.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: QuickReplies) {
        _instance.title = _instance.title || '';
        _instance.quickReplies = _instance.quickReplies || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: QuickReplies,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.title = _reader.readString();
              break;
            case 2:
              (_instance.quickReplies = _instance.quickReplies || []).push(
                _reader.readString()
              );
              break;
            default:
              _reader.skipField();
          }
        }

        QuickReplies.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: QuickReplies,
        _writer: BinaryWriter
      ) {
        if (_instance.title) {
          _writer.writeString(1, _instance.title);
        }
        if (_instance.quickReplies && _instance.quickReplies.length) {
          _writer.writeRepeatedString(2, _instance.quickReplies);
        }
      }

      private _title: string;
      private _quickReplies: string[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of QuickReplies to deeply clone from
       */
      constructor(_value?: RecursivePartial<QuickReplies.AsObject>) {
        _value = _value || {};
        this.title = _value.title;
        this.quickReplies = (_value.quickReplies || []).slice();
        QuickReplies.refineValues(this);
      }
      get title(): string {
        return this._title;
      }
      set title(value: string) {
        this._title = value;
      }
      get quickReplies(): string[] {
        return this._quickReplies;
      }
      set quickReplies(value: string[]) {
        this._quickReplies = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        QuickReplies.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): QuickReplies.AsObject {
        return {
          title: this.title,
          quickReplies: (this.quickReplies || []).slice()
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): QuickReplies.AsProtobufJSON {
        return {
          title: this.title,
          quickReplies: (this.quickReplies || []).slice()
        };
      }
    }
    export module QuickReplies {
      /**
       * Standard JavaScript object representation for QuickReplies
       */
      export interface AsObject {
        title: string;
        quickReplies: string[];
      }

      /**
       * Protobuf JSON representation for QuickReplies
       */
      export interface AsProtobufJSON {
        title: string;
        quickReplies: string[];
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Card
     */
    export class Card implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Card';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Card();
        Card.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Card) {
        _instance.title = _instance.title || '';
        _instance.subtitle = _instance.subtitle || '';
        _instance.imageUri = _instance.imageUri || '';
        _instance.buttons = _instance.buttons || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Card,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.title = _reader.readString();
              break;
            case 2:
              _instance.subtitle = _reader.readString();
              break;
            case 3:
              _instance.imageUri = _reader.readString();
              break;
            case 4:
              const messageInitializer4 = new Intent.Message.Card.Button();
              _reader.readMessage(
                messageInitializer4,
                Intent.Message.Card.Button.deserializeBinaryFromReader
              );
              (_instance.buttons = _instance.buttons || []).push(
                messageInitializer4
              );
              break;
            default:
              _reader.skipField();
          }
        }

        Card.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Card, _writer: BinaryWriter) {
        if (_instance.title) {
          _writer.writeString(1, _instance.title);
        }
        if (_instance.subtitle) {
          _writer.writeString(2, _instance.subtitle);
        }
        if (_instance.imageUri) {
          _writer.writeString(3, _instance.imageUri);
        }
        if (_instance.buttons && _instance.buttons.length) {
          _writer.writeRepeatedMessage(
            4,
            _instance.buttons as any,
            Intent.Message.Card.Button.serializeBinaryToWriter
          );
        }
      }

      private _title: string;
      private _subtitle: string;
      private _imageUri: string;
      private _buttons?: Intent.Message.Card.Button[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Card to deeply clone from
       */
      constructor(_value?: RecursivePartial<Card.AsObject>) {
        _value = _value || {};
        this.title = _value.title;
        this.subtitle = _value.subtitle;
        this.imageUri = _value.imageUri;
        this.buttons = (_value.buttons || []).map(
          m => new Intent.Message.Card.Button(m)
        );
        Card.refineValues(this);
      }
      get title(): string {
        return this._title;
      }
      set title(value: string) {
        this._title = value;
      }
      get subtitle(): string {
        return this._subtitle;
      }
      set subtitle(value: string) {
        this._subtitle = value;
      }
      get imageUri(): string {
        return this._imageUri;
      }
      set imageUri(value: string) {
        this._imageUri = value;
      }
      get buttons(): Intent.Message.Card.Button[] | undefined {
        return this._buttons;
      }
      set buttons(value: Intent.Message.Card.Button[] | undefined) {
        this._buttons = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Card.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Card.AsObject {
        return {
          title: this.title,
          subtitle: this.subtitle,
          imageUri: this.imageUri,
          buttons: (this.buttons || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Card.AsProtobufJSON {
        return {
          title: this.title,
          subtitle: this.subtitle,
          imageUri: this.imageUri,
          buttons: (this.buttons || []).map(m => m.toProtobufJSON(options))
        };
      }
    }
    export module Card {
      /**
       * Standard JavaScript object representation for Card
       */
      export interface AsObject {
        title: string;
        subtitle: string;
        imageUri: string;
        buttons?: Intent.Message.Card.Button.AsObject[];
      }

      /**
       * Protobuf JSON representation for Card
       */
      export interface AsProtobufJSON {
        title: string;
        subtitle: string;
        imageUri: string;
        buttons: Intent.Message.Card.Button.AsProtobufJSON[] | null;
      }

      /**
       * Message implementation for ondewo.nlu.Intent.Message.Card.Button
       */
      export class Button implements GrpcMessage {
        static id = 'ondewo.nlu.Intent.Message.Card.Button';

        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource) {
          const instance = new Button();
          Button.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
          return instance;
        }

        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Button) {
          _instance.text = _instance.text || '';
          _instance.postback = _instance.postback || '';
        }

        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(
          _instance: Button,
          _reader: BinaryReader
        ) {
          while (_reader.nextField()) {
            if (_reader.isEndGroup()) break;

            switch (_reader.getFieldNumber()) {
              case 1:
                _instance.text = _reader.readString();
                break;
              case 2:
                _instance.postback = _reader.readString();
                break;
              default:
                _reader.skipField();
            }
          }

          Button.refineValues(_instance);
        }

        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(
          _instance: Button,
          _writer: BinaryWriter
        ) {
          if (_instance.text) {
            _writer.writeString(1, _instance.text);
          }
          if (_instance.postback) {
            _writer.writeString(2, _instance.postback);
          }
        }

        private _text: string;
        private _postback: string;

        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Button to deeply clone from
         */
        constructor(_value?: RecursivePartial<Button.AsObject>) {
          _value = _value || {};
          this.text = _value.text;
          this.postback = _value.postback;
          Button.refineValues(this);
        }
        get text(): string {
          return this._text;
        }
        set text(value: string) {
          this._text = value;
        }
        get postback(): string {
          return this._postback;
        }
        set postback(value: string) {
          this._postback = value;
        }

        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
          const writer = new BinaryWriter();
          Button.serializeBinaryToWriter(this, writer);
          return writer.getResultBuffer();
        }

        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Button.AsObject {
          return {
            text: this.text,
            postback: this.postback
          };
        }

        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
          return this.toObject();
        }

        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
          // @ts-ignore
          options?: ToProtobufJSONOptions
        ): Button.AsProtobufJSON {
          return {
            text: this.text,
            postback: this.postback
          };
        }
      }
      export module Button {
        /**
         * Standard JavaScript object representation for Button
         */
        export interface AsObject {
          text: string;
          postback: string;
        }

        /**
         * Protobuf JSON representation for Button
         */
        export interface AsProtobufJSON {
          text: string;
          postback: string;
        }
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.SimpleResponse
     */
    export class SimpleResponse implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.SimpleResponse';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new SimpleResponse();
        SimpleResponse.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: SimpleResponse) {
        _instance.textToSpeech = _instance.textToSpeech || '';
        _instance.ssml = _instance.ssml || '';
        _instance.displayText = _instance.displayText || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: SimpleResponse,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.textToSpeech = _reader.readString();
              break;
            case 2:
              _instance.ssml = _reader.readString();
              break;
            case 3:
              _instance.displayText = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        SimpleResponse.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: SimpleResponse,
        _writer: BinaryWriter
      ) {
        if (_instance.textToSpeech) {
          _writer.writeString(1, _instance.textToSpeech);
        }
        if (_instance.ssml) {
          _writer.writeString(2, _instance.ssml);
        }
        if (_instance.displayText) {
          _writer.writeString(3, _instance.displayText);
        }
      }

      private _textToSpeech: string;
      private _ssml: string;
      private _displayText: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of SimpleResponse to deeply clone from
       */
      constructor(_value?: RecursivePartial<SimpleResponse.AsObject>) {
        _value = _value || {};
        this.textToSpeech = _value.textToSpeech;
        this.ssml = _value.ssml;
        this.displayText = _value.displayText;
        SimpleResponse.refineValues(this);
      }
      get textToSpeech(): string {
        return this._textToSpeech;
      }
      set textToSpeech(value: string) {
        this._textToSpeech = value;
      }
      get ssml(): string {
        return this._ssml;
      }
      set ssml(value: string) {
        this._ssml = value;
      }
      get displayText(): string {
        return this._displayText;
      }
      set displayText(value: string) {
        this._displayText = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        SimpleResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): SimpleResponse.AsObject {
        return {
          textToSpeech: this.textToSpeech,
          ssml: this.ssml,
          displayText: this.displayText
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): SimpleResponse.AsProtobufJSON {
        return {
          textToSpeech: this.textToSpeech,
          ssml: this.ssml,
          displayText: this.displayText
        };
      }
    }
    export module SimpleResponse {
      /**
       * Standard JavaScript object representation for SimpleResponse
       */
      export interface AsObject {
        textToSpeech: string;
        ssml: string;
        displayText: string;
      }

      /**
       * Protobuf JSON representation for SimpleResponse
       */
      export interface AsProtobufJSON {
        textToSpeech: string;
        ssml: string;
        displayText: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.SimpleResponses
     */
    export class SimpleResponses implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.SimpleResponses';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new SimpleResponses();
        SimpleResponses.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: SimpleResponses) {
        _instance.simpleResponses = _instance.simpleResponses || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: SimpleResponses,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              const messageInitializer1 = new Intent.Message.SimpleResponse();
              _reader.readMessage(
                messageInitializer1,
                Intent.Message.SimpleResponse.deserializeBinaryFromReader
              );
              (_instance.simpleResponses =
                _instance.simpleResponses || []).push(messageInitializer1);
              break;
            default:
              _reader.skipField();
          }
        }

        SimpleResponses.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: SimpleResponses,
        _writer: BinaryWriter
      ) {
        if (_instance.simpleResponses && _instance.simpleResponses.length) {
          _writer.writeRepeatedMessage(
            1,
            _instance.simpleResponses as any,
            Intent.Message.SimpleResponse.serializeBinaryToWriter
          );
        }
      }

      private _simpleResponses?: Intent.Message.SimpleResponse[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of SimpleResponses to deeply clone from
       */
      constructor(_value?: RecursivePartial<SimpleResponses.AsObject>) {
        _value = _value || {};
        this.simpleResponses = (_value.simpleResponses || []).map(
          m => new Intent.Message.SimpleResponse(m)
        );
        SimpleResponses.refineValues(this);
      }
      get simpleResponses(): Intent.Message.SimpleResponse[] | undefined {
        return this._simpleResponses;
      }
      set simpleResponses(value: Intent.Message.SimpleResponse[] | undefined) {
        this._simpleResponses = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        SimpleResponses.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): SimpleResponses.AsObject {
        return {
          simpleResponses: (this.simpleResponses || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): SimpleResponses.AsProtobufJSON {
        return {
          simpleResponses: (this.simpleResponses || []).map(m =>
            m.toProtobufJSON(options)
          )
        };
      }
    }
    export module SimpleResponses {
      /**
       * Standard JavaScript object representation for SimpleResponses
       */
      export interface AsObject {
        simpleResponses?: Intent.Message.SimpleResponse.AsObject[];
      }

      /**
       * Protobuf JSON representation for SimpleResponses
       */
      export interface AsProtobufJSON {
        simpleResponses: Intent.Message.SimpleResponse.AsProtobufJSON[] | null;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.BasicCard
     */
    export class BasicCard implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.BasicCard';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new BasicCard();
        BasicCard.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: BasicCard) {
        _instance.title = _instance.title || '';
        _instance.subtitle = _instance.subtitle || '';
        _instance.formattedText = _instance.formattedText || '';
        _instance.image = _instance.image || undefined;
        _instance.buttons = _instance.buttons || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: BasicCard,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.title = _reader.readString();
              break;
            case 2:
              _instance.subtitle = _reader.readString();
              break;
            case 3:
              _instance.formattedText = _reader.readString();
              break;
            case 4:
              _instance.image = new Intent.Message.Image();
              _reader.readMessage(
                _instance.image,
                Intent.Message.Image.deserializeBinaryFromReader
              );
              break;
            case 5:
              const messageInitializer5 = new Intent.Message.BasicCard.Button();
              _reader.readMessage(
                messageInitializer5,
                Intent.Message.BasicCard.Button.deserializeBinaryFromReader
              );
              (_instance.buttons = _instance.buttons || []).push(
                messageInitializer5
              );
              break;
            default:
              _reader.skipField();
          }
        }

        BasicCard.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: BasicCard,
        _writer: BinaryWriter
      ) {
        if (_instance.title) {
          _writer.writeString(1, _instance.title);
        }
        if (_instance.subtitle) {
          _writer.writeString(2, _instance.subtitle);
        }
        if (_instance.formattedText) {
          _writer.writeString(3, _instance.formattedText);
        }
        if (_instance.image) {
          _writer.writeMessage(
            4,
            _instance.image as any,
            Intent.Message.Image.serializeBinaryToWriter
          );
        }
        if (_instance.buttons && _instance.buttons.length) {
          _writer.writeRepeatedMessage(
            5,
            _instance.buttons as any,
            Intent.Message.BasicCard.Button.serializeBinaryToWriter
          );
        }
      }

      private _title: string;
      private _subtitle: string;
      private _formattedText: string;
      private _image?: Intent.Message.Image;
      private _buttons?: Intent.Message.BasicCard.Button[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of BasicCard to deeply clone from
       */
      constructor(_value?: RecursivePartial<BasicCard.AsObject>) {
        _value = _value || {};
        this.title = _value.title;
        this.subtitle = _value.subtitle;
        this.formattedText = _value.formattedText;
        this.image = _value.image
          ? new Intent.Message.Image(_value.image)
          : undefined;
        this.buttons = (_value.buttons || []).map(
          m => new Intent.Message.BasicCard.Button(m)
        );
        BasicCard.refineValues(this);
      }
      get title(): string {
        return this._title;
      }
      set title(value: string) {
        this._title = value;
      }
      get subtitle(): string {
        return this._subtitle;
      }
      set subtitle(value: string) {
        this._subtitle = value;
      }
      get formattedText(): string {
        return this._formattedText;
      }
      set formattedText(value: string) {
        this._formattedText = value;
      }
      get image(): Intent.Message.Image | undefined {
        return this._image;
      }
      set image(value: Intent.Message.Image | undefined) {
        this._image = value;
      }
      get buttons(): Intent.Message.BasicCard.Button[] | undefined {
        return this._buttons;
      }
      set buttons(value: Intent.Message.BasicCard.Button[] | undefined) {
        this._buttons = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        BasicCard.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): BasicCard.AsObject {
        return {
          title: this.title,
          subtitle: this.subtitle,
          formattedText: this.formattedText,
          image: this.image ? this.image.toObject() : undefined,
          buttons: (this.buttons || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): BasicCard.AsProtobufJSON {
        return {
          title: this.title,
          subtitle: this.subtitle,
          formattedText: this.formattedText,
          image: this.image ? this.image.toProtobufJSON(options) : null,
          buttons: (this.buttons || []).map(m => m.toProtobufJSON(options))
        };
      }
    }
    export module BasicCard {
      /**
       * Standard JavaScript object representation for BasicCard
       */
      export interface AsObject {
        title: string;
        subtitle: string;
        formattedText: string;
        image?: Intent.Message.Image.AsObject;
        buttons?: Intent.Message.BasicCard.Button.AsObject[];
      }

      /**
       * Protobuf JSON representation for BasicCard
       */
      export interface AsProtobufJSON {
        title: string;
        subtitle: string;
        formattedText: string;
        image: Intent.Message.Image.AsProtobufJSON | null;
        buttons: Intent.Message.BasicCard.Button.AsProtobufJSON[] | null;
      }

      /**
       * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button
       */
      export class Button implements GrpcMessage {
        static id = 'ondewo.nlu.Intent.Message.BasicCard.Button';

        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource) {
          const instance = new Button();
          Button.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
          return instance;
        }

        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Button) {
          _instance.title = _instance.title || '';
          _instance.openUriAction = _instance.openUriAction || undefined;
        }

        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(
          _instance: Button,
          _reader: BinaryReader
        ) {
          while (_reader.nextField()) {
            if (_reader.isEndGroup()) break;

            switch (_reader.getFieldNumber()) {
              case 1:
                _instance.title = _reader.readString();
                break;
              case 2:
                _instance.openUriAction = new Intent.Message.BasicCard.Button.OpenUriAction();
                _reader.readMessage(
                  _instance.openUriAction,
                  Intent.Message.BasicCard.Button.OpenUriAction
                    .deserializeBinaryFromReader
                );
                break;
              default:
                _reader.skipField();
            }
          }

          Button.refineValues(_instance);
        }

        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(
          _instance: Button,
          _writer: BinaryWriter
        ) {
          if (_instance.title) {
            _writer.writeString(1, _instance.title);
          }
          if (_instance.openUriAction) {
            _writer.writeMessage(
              2,
              _instance.openUriAction as any,
              Intent.Message.BasicCard.Button.OpenUriAction
                .serializeBinaryToWriter
            );
          }
        }

        private _title: string;
        private _openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction;

        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Button to deeply clone from
         */
        constructor(_value?: RecursivePartial<Button.AsObject>) {
          _value = _value || {};
          this.title = _value.title;
          this.openUriAction = _value.openUriAction
            ? new Intent.Message.BasicCard.Button.OpenUriAction(
                _value.openUriAction
              )
            : undefined;
          Button.refineValues(this);
        }
        get title(): string {
          return this._title;
        }
        set title(value: string) {
          this._title = value;
        }
        get openUriAction():
          | Intent.Message.BasicCard.Button.OpenUriAction
          | undefined {
          return this._openUriAction;
        }
        set openUriAction(
          value: Intent.Message.BasicCard.Button.OpenUriAction | undefined
        ) {
          this._openUriAction = value;
        }

        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
          const writer = new BinaryWriter();
          Button.serializeBinaryToWriter(this, writer);
          return writer.getResultBuffer();
        }

        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Button.AsObject {
          return {
            title: this.title,
            openUriAction: this.openUriAction
              ? this.openUriAction.toObject()
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
        ): Button.AsProtobufJSON {
          return {
            title: this.title,
            openUriAction: this.openUriAction
              ? this.openUriAction.toProtobufJSON(options)
              : null
          };
        }
      }
      export module Button {
        /**
         * Standard JavaScript object representation for Button
         */
        export interface AsObject {
          title: string;
          openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject;
        }

        /**
         * Protobuf JSON representation for Button
         */
        export interface AsProtobufJSON {
          title: string;
          openUriAction: Intent.Message.BasicCard.Button.OpenUriAction.AsProtobufJSON | null;
        }

        /**
         * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction
         */
        export class OpenUriAction implements GrpcMessage {
          static id =
            'ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction';

          /**
           * Deserialize binary data to message
           * @param instance message instance
           */
          static deserializeBinary(bytes: ByteSource) {
            const instance = new OpenUriAction();
            OpenUriAction.deserializeBinaryFromReader(
              instance,
              new BinaryReader(bytes)
            );
            return instance;
          }

          /**
           * Check all the properties and set default protobuf values if necessary
           * @param _instance message instance
           */
          static refineValues(_instance: OpenUriAction) {
            _instance.uri = _instance.uri || '';
          }

          /**
           * Deserializes / reads binary message into message instance using provided binary reader
           * @param _instance message instance
           * @param _reader binary reader instance
           */
          static deserializeBinaryFromReader(
            _instance: OpenUriAction,
            _reader: BinaryReader
          ) {
            while (_reader.nextField()) {
              if (_reader.isEndGroup()) break;

              switch (_reader.getFieldNumber()) {
                case 1:
                  _instance.uri = _reader.readString();
                  break;
                default:
                  _reader.skipField();
              }
            }

            OpenUriAction.refineValues(_instance);
          }

          /**
           * Serializes a message to binary format using provided binary reader
           * @param _instance message instance
           * @param _writer binary writer instance
           */
          static serializeBinaryToWriter(
            _instance: OpenUriAction,
            _writer: BinaryWriter
          ) {
            if (_instance.uri) {
              _writer.writeString(1, _instance.uri);
            }
          }

          private _uri: string;

          /**
           * Message constructor. Initializes the properties and applies default Protobuf values if necessary
           * @param _value initial values object or instance of OpenUriAction to deeply clone from
           */
          constructor(_value?: RecursivePartial<OpenUriAction.AsObject>) {
            _value = _value || {};
            this.uri = _value.uri;
            OpenUriAction.refineValues(this);
          }
          get uri(): string {
            return this._uri;
          }
          set uri(value: string) {
            this._uri = value;
          }

          /**
           * Serialize message to binary data
           * @param instance message instance
           */
          serializeBinary() {
            const writer = new BinaryWriter();
            OpenUriAction.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
          }

          /**
           * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
           */
          toObject(): OpenUriAction.AsObject {
            return {
              uri: this.uri
            };
          }

          /**
           * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
           */
          toJSON() {
            return this.toObject();
          }

          /**
           * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
           * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
           * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
           */
          toProtobufJSON(
            // @ts-ignore
            options?: ToProtobufJSONOptions
          ): OpenUriAction.AsProtobufJSON {
            return {
              uri: this.uri
            };
          }
        }
        export module OpenUriAction {
          /**
           * Standard JavaScript object representation for OpenUriAction
           */
          export interface AsObject {
            uri: string;
          }

          /**
           * Protobuf JSON representation for OpenUriAction
           */
          export interface AsProtobufJSON {
            uri: string;
          }
        }
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Suggestion
     */
    export class Suggestion implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Suggestion';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Suggestion();
        Suggestion.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Suggestion) {
        _instance.title = _instance.title || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Suggestion,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.title = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        Suggestion.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: Suggestion,
        _writer: BinaryWriter
      ) {
        if (_instance.title) {
          _writer.writeString(1, _instance.title);
        }
      }

      private _title: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Suggestion to deeply clone from
       */
      constructor(_value?: RecursivePartial<Suggestion.AsObject>) {
        _value = _value || {};
        this.title = _value.title;
        Suggestion.refineValues(this);
      }
      get title(): string {
        return this._title;
      }
      set title(value: string) {
        this._title = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Suggestion.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Suggestion.AsObject {
        return {
          title: this.title
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Suggestion.AsProtobufJSON {
        return {
          title: this.title
        };
      }
    }
    export module Suggestion {
      /**
       * Standard JavaScript object representation for Suggestion
       */
      export interface AsObject {
        title: string;
      }

      /**
       * Protobuf JSON representation for Suggestion
       */
      export interface AsProtobufJSON {
        title: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Suggestions
     */
    export class Suggestions implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Suggestions';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Suggestions();
        Suggestions.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Suggestions) {
        _instance.suggestions = _instance.suggestions || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Suggestions,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              const messageInitializer1 = new Intent.Message.Suggestion();
              _reader.readMessage(
                messageInitializer1,
                Intent.Message.Suggestion.deserializeBinaryFromReader
              );
              (_instance.suggestions = _instance.suggestions || []).push(
                messageInitializer1
              );
              break;
            default:
              _reader.skipField();
          }
        }

        Suggestions.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: Suggestions,
        _writer: BinaryWriter
      ) {
        if (_instance.suggestions && _instance.suggestions.length) {
          _writer.writeRepeatedMessage(
            1,
            _instance.suggestions as any,
            Intent.Message.Suggestion.serializeBinaryToWriter
          );
        }
      }

      private _suggestions?: Intent.Message.Suggestion[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Suggestions to deeply clone from
       */
      constructor(_value?: RecursivePartial<Suggestions.AsObject>) {
        _value = _value || {};
        this.suggestions = (_value.suggestions || []).map(
          m => new Intent.Message.Suggestion(m)
        );
        Suggestions.refineValues(this);
      }
      get suggestions(): Intent.Message.Suggestion[] | undefined {
        return this._suggestions;
      }
      set suggestions(value: Intent.Message.Suggestion[] | undefined) {
        this._suggestions = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Suggestions.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Suggestions.AsObject {
        return {
          suggestions: (this.suggestions || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Suggestions.AsProtobufJSON {
        return {
          suggestions: (this.suggestions || []).map(m =>
            m.toProtobufJSON(options)
          )
        };
      }
    }
    export module Suggestions {
      /**
       * Standard JavaScript object representation for Suggestions
       */
      export interface AsObject {
        suggestions?: Intent.Message.Suggestion.AsObject[];
      }

      /**
       * Protobuf JSON representation for Suggestions
       */
      export interface AsProtobufJSON {
        suggestions: Intent.Message.Suggestion.AsProtobufJSON[] | null;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.LinkOutSuggestion
     */
    export class LinkOutSuggestion implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.LinkOutSuggestion';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new LinkOutSuggestion();
        LinkOutSuggestion.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: LinkOutSuggestion) {
        _instance.destinationName = _instance.destinationName || '';
        _instance.uri = _instance.uri || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: LinkOutSuggestion,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.destinationName = _reader.readString();
              break;
            case 2:
              _instance.uri = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        LinkOutSuggestion.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: LinkOutSuggestion,
        _writer: BinaryWriter
      ) {
        if (_instance.destinationName) {
          _writer.writeString(1, _instance.destinationName);
        }
        if (_instance.uri) {
          _writer.writeString(2, _instance.uri);
        }
      }

      private _destinationName: string;
      private _uri: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of LinkOutSuggestion to deeply clone from
       */
      constructor(_value?: RecursivePartial<LinkOutSuggestion.AsObject>) {
        _value = _value || {};
        this.destinationName = _value.destinationName;
        this.uri = _value.uri;
        LinkOutSuggestion.refineValues(this);
      }
      get destinationName(): string {
        return this._destinationName;
      }
      set destinationName(value: string) {
        this._destinationName = value;
      }
      get uri(): string {
        return this._uri;
      }
      set uri(value: string) {
        this._uri = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        LinkOutSuggestion.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): LinkOutSuggestion.AsObject {
        return {
          destinationName: this.destinationName,
          uri: this.uri
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): LinkOutSuggestion.AsProtobufJSON {
        return {
          destinationName: this.destinationName,
          uri: this.uri
        };
      }
    }
    export module LinkOutSuggestion {
      /**
       * Standard JavaScript object representation for LinkOutSuggestion
       */
      export interface AsObject {
        destinationName: string;
        uri: string;
      }

      /**
       * Protobuf JSON representation for LinkOutSuggestion
       */
      export interface AsProtobufJSON {
        destinationName: string;
        uri: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.ListSelect
     */
    export class ListSelect implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.ListSelect';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new ListSelect();
        ListSelect.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: ListSelect) {
        _instance.title = _instance.title || '';
        _instance.items = _instance.items || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: ListSelect,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.title = _reader.readString();
              break;
            case 2:
              const messageInitializer2 = new Intent.Message.ListSelect.Item();
              _reader.readMessage(
                messageInitializer2,
                Intent.Message.ListSelect.Item.deserializeBinaryFromReader
              );
              (_instance.items = _instance.items || []).push(
                messageInitializer2
              );
              break;
            default:
              _reader.skipField();
          }
        }

        ListSelect.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: ListSelect,
        _writer: BinaryWriter
      ) {
        if (_instance.title) {
          _writer.writeString(1, _instance.title);
        }
        if (_instance.items && _instance.items.length) {
          _writer.writeRepeatedMessage(
            2,
            _instance.items as any,
            Intent.Message.ListSelect.Item.serializeBinaryToWriter
          );
        }
      }

      private _title: string;
      private _items?: Intent.Message.ListSelect.Item[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of ListSelect to deeply clone from
       */
      constructor(_value?: RecursivePartial<ListSelect.AsObject>) {
        _value = _value || {};
        this.title = _value.title;
        this.items = (_value.items || []).map(
          m => new Intent.Message.ListSelect.Item(m)
        );
        ListSelect.refineValues(this);
      }
      get title(): string {
        return this._title;
      }
      set title(value: string) {
        this._title = value;
      }
      get items(): Intent.Message.ListSelect.Item[] | undefined {
        return this._items;
      }
      set items(value: Intent.Message.ListSelect.Item[] | undefined) {
        this._items = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        ListSelect.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): ListSelect.AsObject {
        return {
          title: this.title,
          items: (this.items || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): ListSelect.AsProtobufJSON {
        return {
          title: this.title,
          items: (this.items || []).map(m => m.toProtobufJSON(options))
        };
      }
    }
    export module ListSelect {
      /**
       * Standard JavaScript object representation for ListSelect
       */
      export interface AsObject {
        title: string;
        items?: Intent.Message.ListSelect.Item.AsObject[];
      }

      /**
       * Protobuf JSON representation for ListSelect
       */
      export interface AsProtobufJSON {
        title: string;
        items: Intent.Message.ListSelect.Item.AsProtobufJSON[] | null;
      }

      /**
       * Message implementation for ondewo.nlu.Intent.Message.ListSelect.Item
       */
      export class Item implements GrpcMessage {
        static id = 'ondewo.nlu.Intent.Message.ListSelect.Item';

        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource) {
          const instance = new Item();
          Item.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
          return instance;
        }

        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Item) {
          _instance.info = _instance.info || undefined;
          _instance.title = _instance.title || '';
          _instance.description = _instance.description || '';
          _instance.image = _instance.image || undefined;
        }

        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(
          _instance: Item,
          _reader: BinaryReader
        ) {
          while (_reader.nextField()) {
            if (_reader.isEndGroup()) break;

            switch (_reader.getFieldNumber()) {
              case 1:
                _instance.info = new Intent.Message.SelectItemInfo();
                _reader.readMessage(
                  _instance.info,
                  Intent.Message.SelectItemInfo.deserializeBinaryFromReader
                );
                break;
              case 2:
                _instance.title = _reader.readString();
                break;
              case 3:
                _instance.description = _reader.readString();
                break;
              case 4:
                _instance.image = new Intent.Message.Image();
                _reader.readMessage(
                  _instance.image,
                  Intent.Message.Image.deserializeBinaryFromReader
                );
                break;
              default:
                _reader.skipField();
            }
          }

          Item.refineValues(_instance);
        }

        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter) {
          if (_instance.info) {
            _writer.writeMessage(
              1,
              _instance.info as any,
              Intent.Message.SelectItemInfo.serializeBinaryToWriter
            );
          }
          if (_instance.title) {
            _writer.writeString(2, _instance.title);
          }
          if (_instance.description) {
            _writer.writeString(3, _instance.description);
          }
          if (_instance.image) {
            _writer.writeMessage(
              4,
              _instance.image as any,
              Intent.Message.Image.serializeBinaryToWriter
            );
          }
        }

        private _info?: Intent.Message.SelectItemInfo;
        private _title: string;
        private _description: string;
        private _image?: Intent.Message.Image;

        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Item to deeply clone from
         */
        constructor(_value?: RecursivePartial<Item.AsObject>) {
          _value = _value || {};
          this.info = _value.info
            ? new Intent.Message.SelectItemInfo(_value.info)
            : undefined;
          this.title = _value.title;
          this.description = _value.description;
          this.image = _value.image
            ? new Intent.Message.Image(_value.image)
            : undefined;
          Item.refineValues(this);
        }
        get info(): Intent.Message.SelectItemInfo | undefined {
          return this._info;
        }
        set info(value: Intent.Message.SelectItemInfo | undefined) {
          this._info = value;
        }
        get title(): string {
          return this._title;
        }
        set title(value: string) {
          this._title = value;
        }
        get description(): string {
          return this._description;
        }
        set description(value: string) {
          this._description = value;
        }
        get image(): Intent.Message.Image | undefined {
          return this._image;
        }
        set image(value: Intent.Message.Image | undefined) {
          this._image = value;
        }

        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
          const writer = new BinaryWriter();
          Item.serializeBinaryToWriter(this, writer);
          return writer.getResultBuffer();
        }

        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Item.AsObject {
          return {
            info: this.info ? this.info.toObject() : undefined,
            title: this.title,
            description: this.description,
            image: this.image ? this.image.toObject() : undefined
          };
        }

        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
          return this.toObject();
        }

        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
          // @ts-ignore
          options?: ToProtobufJSONOptions
        ): Item.AsProtobufJSON {
          return {
            info: this.info ? this.info.toProtobufJSON(options) : null,
            title: this.title,
            description: this.description,
            image: this.image ? this.image.toProtobufJSON(options) : null
          };
        }
      }
      export module Item {
        /**
         * Standard JavaScript object representation for Item
         */
        export interface AsObject {
          info?: Intent.Message.SelectItemInfo.AsObject;
          title: string;
          description: string;
          image?: Intent.Message.Image.AsObject;
        }

        /**
         * Protobuf JSON representation for Item
         */
        export interface AsProtobufJSON {
          info: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
          title: string;
          description: string;
          image: Intent.Message.Image.AsProtobufJSON | null;
        }
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect
     */
    export class CarouselSelect implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.CarouselSelect';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new CarouselSelect();
        CarouselSelect.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: CarouselSelect) {
        _instance.items = _instance.items || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: CarouselSelect,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              const messageInitializer1 = new Intent.Message.CarouselSelect.Item();
              _reader.readMessage(
                messageInitializer1,
                Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader
              );
              (_instance.items = _instance.items || []).push(
                messageInitializer1
              );
              break;
            default:
              _reader.skipField();
          }
        }

        CarouselSelect.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: CarouselSelect,
        _writer: BinaryWriter
      ) {
        if (_instance.items && _instance.items.length) {
          _writer.writeRepeatedMessage(
            1,
            _instance.items as any,
            Intent.Message.CarouselSelect.Item.serializeBinaryToWriter
          );
        }
      }

      private _items?: Intent.Message.CarouselSelect.Item[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of CarouselSelect to deeply clone from
       */
      constructor(_value?: RecursivePartial<CarouselSelect.AsObject>) {
        _value = _value || {};
        this.items = (_value.items || []).map(
          m => new Intent.Message.CarouselSelect.Item(m)
        );
        CarouselSelect.refineValues(this);
      }
      get items(): Intent.Message.CarouselSelect.Item[] | undefined {
        return this._items;
      }
      set items(value: Intent.Message.CarouselSelect.Item[] | undefined) {
        this._items = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        CarouselSelect.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): CarouselSelect.AsObject {
        return {
          items: (this.items || []).map(m => m.toObject())
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): CarouselSelect.AsProtobufJSON {
        return {
          items: (this.items || []).map(m => m.toProtobufJSON(options))
        };
      }
    }
    export module CarouselSelect {
      /**
       * Standard JavaScript object representation for CarouselSelect
       */
      export interface AsObject {
        items?: Intent.Message.CarouselSelect.Item.AsObject[];
      }

      /**
       * Protobuf JSON representation for CarouselSelect
       */
      export interface AsProtobufJSON {
        items: Intent.Message.CarouselSelect.Item.AsProtobufJSON[] | null;
      }

      /**
       * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect.Item
       */
      export class Item implements GrpcMessage {
        static id = 'ondewo.nlu.Intent.Message.CarouselSelect.Item';

        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource) {
          const instance = new Item();
          Item.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
          return instance;
        }

        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Item) {
          _instance.info = _instance.info || undefined;
          _instance.title = _instance.title || '';
          _instance.description = _instance.description || '';
          _instance.image = _instance.image || undefined;
        }

        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(
          _instance: Item,
          _reader: BinaryReader
        ) {
          while (_reader.nextField()) {
            if (_reader.isEndGroup()) break;

            switch (_reader.getFieldNumber()) {
              case 1:
                _instance.info = new Intent.Message.SelectItemInfo();
                _reader.readMessage(
                  _instance.info,
                  Intent.Message.SelectItemInfo.deserializeBinaryFromReader
                );
                break;
              case 2:
                _instance.title = _reader.readString();
                break;
              case 3:
                _instance.description = _reader.readString();
                break;
              case 4:
                _instance.image = new Intent.Message.Image();
                _reader.readMessage(
                  _instance.image,
                  Intent.Message.Image.deserializeBinaryFromReader
                );
                break;
              default:
                _reader.skipField();
            }
          }

          Item.refineValues(_instance);
        }

        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter) {
          if (_instance.info) {
            _writer.writeMessage(
              1,
              _instance.info as any,
              Intent.Message.SelectItemInfo.serializeBinaryToWriter
            );
          }
          if (_instance.title) {
            _writer.writeString(2, _instance.title);
          }
          if (_instance.description) {
            _writer.writeString(3, _instance.description);
          }
          if (_instance.image) {
            _writer.writeMessage(
              4,
              _instance.image as any,
              Intent.Message.Image.serializeBinaryToWriter
            );
          }
        }

        private _info?: Intent.Message.SelectItemInfo;
        private _title: string;
        private _description: string;
        private _image?: Intent.Message.Image;

        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Item to deeply clone from
         */
        constructor(_value?: RecursivePartial<Item.AsObject>) {
          _value = _value || {};
          this.info = _value.info
            ? new Intent.Message.SelectItemInfo(_value.info)
            : undefined;
          this.title = _value.title;
          this.description = _value.description;
          this.image = _value.image
            ? new Intent.Message.Image(_value.image)
            : undefined;
          Item.refineValues(this);
        }
        get info(): Intent.Message.SelectItemInfo | undefined {
          return this._info;
        }
        set info(value: Intent.Message.SelectItemInfo | undefined) {
          this._info = value;
        }
        get title(): string {
          return this._title;
        }
        set title(value: string) {
          this._title = value;
        }
        get description(): string {
          return this._description;
        }
        set description(value: string) {
          this._description = value;
        }
        get image(): Intent.Message.Image | undefined {
          return this._image;
        }
        set image(value: Intent.Message.Image | undefined) {
          this._image = value;
        }

        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
          const writer = new BinaryWriter();
          Item.serializeBinaryToWriter(this, writer);
          return writer.getResultBuffer();
        }

        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Item.AsObject {
          return {
            info: this.info ? this.info.toObject() : undefined,
            title: this.title,
            description: this.description,
            image: this.image ? this.image.toObject() : undefined
          };
        }

        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
          return this.toObject();
        }

        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
          // @ts-ignore
          options?: ToProtobufJSONOptions
        ): Item.AsProtobufJSON {
          return {
            info: this.info ? this.info.toProtobufJSON(options) : null,
            title: this.title,
            description: this.description,
            image: this.image ? this.image.toProtobufJSON(options) : null
          };
        }
      }
      export module Item {
        /**
         * Standard JavaScript object representation for Item
         */
        export interface AsObject {
          info?: Intent.Message.SelectItemInfo.AsObject;
          title: string;
          description: string;
          image?: Intent.Message.Image.AsObject;
        }

        /**
         * Protobuf JSON representation for Item
         */
        export interface AsProtobufJSON {
          info: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
          title: string;
          description: string;
          image: Intent.Message.Image.AsProtobufJSON | null;
        }
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.HTMLText
     */
    export class HTMLText implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.HTMLText';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new HTMLText();
        HTMLText.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: HTMLText) {
        _instance.text = _instance.text || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: HTMLText,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              (_instance.text = _instance.text || []).push(
                _reader.readString()
              );
              break;
            default:
              _reader.skipField();
          }
        }

        HTMLText.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: HTMLText,
        _writer: BinaryWriter
      ) {
        if (_instance.text && _instance.text.length) {
          _writer.writeRepeatedString(1, _instance.text);
        }
      }

      private _text: string[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of HTMLText to deeply clone from
       */
      constructor(_value?: RecursivePartial<HTMLText.AsObject>) {
        _value = _value || {};
        this.text = (_value.text || []).slice();
        HTMLText.refineValues(this);
      }
      get text(): string[] {
        return this._text;
      }
      set text(value: string[]) {
        this._text = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        HTMLText.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): HTMLText.AsObject {
        return {
          text: (this.text || []).slice()
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): HTMLText.AsProtobufJSON {
        return {
          text: (this.text || []).slice()
        };
      }
    }
    export module HTMLText {
      /**
       * Standard JavaScript object representation for HTMLText
       */
      export interface AsObject {
        text: string[];
      }

      /**
       * Protobuf JSON representation for HTMLText
       */
      export interface AsProtobufJSON {
        text: string[];
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Video
     */
    export class Video implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Video';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Video();
        Video.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Video) {
        _instance.uri = _instance.uri || '';
        _instance.accessibilityText = _instance.accessibilityText || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Video,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.uri = _reader.readString();
              break;
            case 2:
              _instance.accessibilityText = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        Video.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Video, _writer: BinaryWriter) {
        if (_instance.uri) {
          _writer.writeString(1, _instance.uri);
        }
        if (_instance.accessibilityText) {
          _writer.writeString(2, _instance.accessibilityText);
        }
      }

      private _uri: string;
      private _accessibilityText: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Video to deeply clone from
       */
      constructor(_value?: RecursivePartial<Video.AsObject>) {
        _value = _value || {};
        this.uri = _value.uri;
        this.accessibilityText = _value.accessibilityText;
        Video.refineValues(this);
      }
      get uri(): string {
        return this._uri;
      }
      set uri(value: string) {
        this._uri = value;
      }
      get accessibilityText(): string {
        return this._accessibilityText;
      }
      set accessibilityText(value: string) {
        this._accessibilityText = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Video.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Video.AsObject {
        return {
          uri: this.uri,
          accessibilityText: this.accessibilityText
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Video.AsProtobufJSON {
        return {
          uri: this.uri,
          accessibilityText: this.accessibilityText
        };
      }
    }
    export module Video {
      /**
       * Standard JavaScript object representation for Video
       */
      export interface AsObject {
        uri: string;
        accessibilityText: string;
      }

      /**
       * Protobuf JSON representation for Video
       */
      export interface AsProtobufJSON {
        uri: string;
        accessibilityText: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.Audio
     */
    export class Audio implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.Audio';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new Audio();
        Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: Audio) {
        _instance.uri = _instance.uri || '';
        _instance.accessibilityText = _instance.accessibilityText || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: Audio,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.uri = _reader.readString();
              break;
            case 2:
              _instance.accessibilityText = _reader.readString();
              break;
            default:
              _reader.skipField();
          }
        }

        Audio.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: Audio, _writer: BinaryWriter) {
        if (_instance.uri) {
          _writer.writeString(1, _instance.uri);
        }
        if (_instance.accessibilityText) {
          _writer.writeString(2, _instance.accessibilityText);
        }
      }

      private _uri: string;
      private _accessibilityText: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of Audio to deeply clone from
       */
      constructor(_value?: RecursivePartial<Audio.AsObject>) {
        _value = _value || {};
        this.uri = _value.uri;
        this.accessibilityText = _value.accessibilityText;
        Audio.refineValues(this);
      }
      get uri(): string {
        return this._uri;
      }
      set uri(value: string) {
        this._uri = value;
      }
      get accessibilityText(): string {
        return this._accessibilityText;
      }
      set accessibilityText(value: string) {
        this._accessibilityText = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        Audio.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): Audio.AsObject {
        return {
          uri: this.uri,
          accessibilityText: this.accessibilityText
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): Audio.AsProtobufJSON {
        return {
          uri: this.uri,
          accessibilityText: this.accessibilityText
        };
      }
    }
    export module Audio {
      /**
       * Standard JavaScript object representation for Audio
       */
      export interface AsObject {
        uri: string;
        accessibilityText: string;
      }

      /**
       * Protobuf JSON representation for Audio
       */
      export interface AsProtobufJSON {
        uri: string;
        accessibilityText: string;
      }
    }

    /**
     * Message implementation for ondewo.nlu.Intent.Message.SelectItemInfo
     */
    export class SelectItemInfo implements GrpcMessage {
      static id = 'ondewo.nlu.Intent.Message.SelectItemInfo';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new SelectItemInfo();
        SelectItemInfo.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: SelectItemInfo) {
        _instance.key = _instance.key || '';
        _instance.synonyms = _instance.synonyms || [];
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: SelectItemInfo,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.key = _reader.readString();
              break;
            case 2:
              (_instance.synonyms = _instance.synonyms || []).push(
                _reader.readString()
              );
              break;
            default:
              _reader.skipField();
          }
        }

        SelectItemInfo.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: SelectItemInfo,
        _writer: BinaryWriter
      ) {
        if (_instance.key) {
          _writer.writeString(1, _instance.key);
        }
        if (_instance.synonyms && _instance.synonyms.length) {
          _writer.writeRepeatedString(2, _instance.synonyms);
        }
      }

      private _key: string;
      private _synonyms: string[];

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of SelectItemInfo to deeply clone from
       */
      constructor(_value?: RecursivePartial<SelectItemInfo.AsObject>) {
        _value = _value || {};
        this.key = _value.key;
        this.synonyms = (_value.synonyms || []).slice();
        SelectItemInfo.refineValues(this);
      }
      get key(): string {
        return this._key;
      }
      set key(value: string) {
        this._key = value;
      }
      get synonyms(): string[] {
        return this._synonyms;
      }
      set synonyms(value: string[]) {
        this._synonyms = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        SelectItemInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): SelectItemInfo.AsObject {
        return {
          key: this.key,
          synonyms: (this.synonyms || []).slice()
        };
      }

      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() {
        return this.toObject();
      }

      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */
      toProtobufJSON(
        // @ts-ignore
        options?: ToProtobufJSONOptions
      ): SelectItemInfo.AsProtobufJSON {
        return {
          key: this.key,
          synonyms: (this.synonyms || []).slice()
        };
      }
    }
    export module SelectItemInfo {
      /**
       * Standard JavaScript object representation for SelectItemInfo
       */
      export interface AsObject {
        key: string;
        synonyms: string[];
      }

      /**
       * Protobuf JSON representation for SelectItemInfo
       */
      export interface AsProtobufJSON {
        key: string;
        synonyms: string[];
      }
    }
  }

  /**
   * Message implementation for ondewo.nlu.Intent.FollowupIntentInfo
   */
  export class FollowupIntentInfo implements GrpcMessage {
    static id = 'ondewo.nlu.Intent.FollowupIntentInfo';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new FollowupIntentInfo();
      FollowupIntentInfo.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FollowupIntentInfo) {
      _instance.followupIntentName = _instance.followupIntentName || '';
      _instance.parentFollowupIntentName =
        _instance.parentFollowupIntentName || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: FollowupIntentInfo,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.followupIntentName = _reader.readString();
            break;
          case 2:
            _instance.parentFollowupIntentName = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      FollowupIntentInfo.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: FollowupIntentInfo,
      _writer: BinaryWriter
    ) {
      if (_instance.followupIntentName) {
        _writer.writeString(1, _instance.followupIntentName);
      }
      if (_instance.parentFollowupIntentName) {
        _writer.writeString(2, _instance.parentFollowupIntentName);
      }
    }

    private _followupIntentName: string;
    private _parentFollowupIntentName: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FollowupIntentInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<FollowupIntentInfo.AsObject>) {
      _value = _value || {};
      this.followupIntentName = _value.followupIntentName;
      this.parentFollowupIntentName = _value.parentFollowupIntentName;
      FollowupIntentInfo.refineValues(this);
    }
    get followupIntentName(): string {
      return this._followupIntentName;
    }
    set followupIntentName(value: string) {
      this._followupIntentName = value;
    }
    get parentFollowupIntentName(): string {
      return this._parentFollowupIntentName;
    }
    set parentFollowupIntentName(value: string) {
      this._parentFollowupIntentName = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      FollowupIntentInfo.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FollowupIntentInfo.AsObject {
      return {
        followupIntentName: this.followupIntentName,
        parentFollowupIntentName: this.parentFollowupIntentName
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): FollowupIntentInfo.AsProtobufJSON {
      return {
        followupIntentName: this.followupIntentName,
        parentFollowupIntentName: this.parentFollowupIntentName
      };
    }
  }
  export module FollowupIntentInfo {
    /**
     * Standard JavaScript object representation for FollowupIntentInfo
     */
    export interface AsObject {
      followupIntentName: string;
      parentFollowupIntentName: string;
    }

    /**
     * Protobuf JSON representation for FollowupIntentInfo
     */
    export interface AsProtobufJSON {
      followupIntentName: string;
      parentFollowupIntentName: string;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListIntentsRequest
 */
export class ListIntentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListIntentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIntentsRequest();
    ListIntentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIntentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentView = _instance.intentView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.filterByCategory = _instance.filterByCategory || 0;
    _instance.sortByField = _instance.sortByField || undefined;
    _instance.filterByTags = _instance.filterByTags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIntentsRequest,
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
          _instance.intentView = _reader.readEnum();
          break;
        case 5:
          _instance.pageToken = _reader.readString();
          break;
        case 6:
          _instance.filterByCategory = _reader.readEnum();
          break;
        case 7:
          _instance.sortByField = new IntentSorting();
          _reader.readMessage(
            _instance.sortByField,
            IntentSorting.deserializeBinaryFromReader
          );
          break;
        case 8:
          (_instance.filterByTags = _instance.filterByTags || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListIntentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIntentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.intentView) {
      _writer.writeEnum(3, _instance.intentView);
    }
    if (_instance.pageToken) {
      _writer.writeString(5, _instance.pageToken);
    }
    if (_instance.filterByCategory) {
      _writer.writeEnum(6, _instance.filterByCategory);
    }
    if (_instance.sortByField) {
      _writer.writeMessage(
        7,
        _instance.sortByField as any,
        IntentSorting.serializeBinaryToWriter
      );
    }
    if (_instance.filterByTags && _instance.filterByTags.length) {
      _writer.writeRepeatedString(8, _instance.filterByTags);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentView: IntentView;
  private _pageToken: string;
  private _filterByCategory: IntentCategory;
  private _sortByField?: IntentSorting;
  private _filterByTags: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIntentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListIntentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentView = _value.intentView;
    this.pageToken = _value.pageToken;
    this.filterByCategory = _value.filterByCategory;
    this.sortByField = _value.sortByField
      ? new IntentSorting(_value.sortByField)
      : undefined;
    this.filterByTags = (_value.filterByTags || []).slice();
    ListIntentsRequest.refineValues(this);
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
  get intentView(): IntentView {
    return this._intentView;
  }
  set intentView(value: IntentView) {
    this._intentView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get filterByCategory(): IntentCategory {
    return this._filterByCategory;
  }
  set filterByCategory(value: IntentCategory) {
    this._filterByCategory = value;
  }
  get sortByField(): IntentSorting | undefined {
    return this._sortByField;
  }
  set sortByField(value: IntentSorting | undefined) {
    this._sortByField = value;
  }
  get filterByTags(): string[] {
    return this._filterByTags;
  }
  set filterByTags(value: string[]) {
    this._filterByTags = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIntentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIntentsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentView: this.intentView,
      pageToken: this.pageToken,
      filterByCategory: this.filterByCategory,
      sortByField: this.sortByField ? this.sortByField.toObject() : undefined,
      filterByTags: (this.filterByTags || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIntentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentView:
        IntentView[
          this.intentView === null || this.intentView === undefined
            ? 0
            : this.intentView
        ],
      pageToken: this.pageToken,
      filterByCategory:
        IntentCategory[
          this.filterByCategory === null || this.filterByCategory === undefined
            ? 0
            : this.filterByCategory
        ],
      sortByField: this.sortByField
        ? this.sortByField.toProtobufJSON(options)
        : null,
      filterByTags: (this.filterByTags || []).slice()
    };
  }
}
export module ListIntentsRequest {
  /**
   * Standard JavaScript object representation for ListIntentsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    intentView: IntentView;
    pageToken: string;
    filterByCategory: IntentCategory;
    sortByField?: IntentSorting.AsObject;
    filterByTags: string[];
  }

  /**
   * Protobuf JSON representation for ListIntentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentView: string;
    pageToken: string;
    filterByCategory: string;
    sortByField: IntentSorting.AsProtobufJSON | null;
    filterByTags: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListIntentsResponse
 */
export class ListIntentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListIntentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIntentsResponse();
    ListIntentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIntentsResponse) {
    _instance.intents = _instance.intents || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIntentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent();
          _reader.readMessage(
            messageInitializer1,
            Intent.deserializeBinaryFromReader
          );
          (_instance.intents = _instance.intents || []).push(
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

    ListIntentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIntentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.intents && _instance.intents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.intents as any,
        Intent.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _intents?: Intent[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIntentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListIntentsResponse.AsObject>) {
    _value = _value || {};
    this.intents = (_value.intents || []).map(m => new Intent(m));
    this.nextPageToken = _value.nextPageToken;
    ListIntentsResponse.refineValues(this);
  }
  get intents(): Intent[] | undefined {
    return this._intents;
  }
  set intents(value: Intent[] | undefined) {
    this._intents = value;
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
    ListIntentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIntentsResponse.AsObject {
    return {
      intents: (this.intents || []).map(m => m.toObject()),
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
  ): ListIntentsResponse.AsProtobufJSON {
    return {
      intents: (this.intents || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListIntentsResponse {
  /**
   * Standard JavaScript object representation for ListIntentsResponse
   */
  export interface AsObject {
    intents?: Intent.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListIntentsResponse
   */
  export interface AsProtobufJSON {
    intents: Intent.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetIntentRequest
 */
export class GetIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIntentRequest();
    GetIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIntentRequest) {
    _instance.name = _instance.name || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentView = _instance.intentView || 0;
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIntentRequest,
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
        case 3:
          _instance.intentView = _reader.readEnum();
          break;
        case 10:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.intentView) {
      _writer.writeEnum(3, _instance.intentView);
    }
    if (_instance.pageToken) {
      _writer.writeString(10, _instance.pageToken);
    }
  }

  private _name: string;
  private _languageCode: string;
  private _intentView: IntentView;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIntentRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.languageCode = _value.languageCode;
    this.intentView = _value.intentView;
    this.pageToken = _value.pageToken;
    GetIntentRequest.refineValues(this);
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
  get intentView(): IntentView {
    return this._intentView;
  }
  set intentView(value: IntentView) {
    this._intentView = value;
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
    GetIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIntentRequest.AsObject {
    return {
      name: this.name,
      languageCode: this.languageCode,
      intentView: this.intentView,
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
  ): GetIntentRequest.AsProtobufJSON {
    return {
      name: this.name,
      languageCode: this.languageCode,
      intentView:
        IntentView[
          this.intentView === null || this.intentView === undefined
            ? 0
            : this.intentView
        ],
      pageToken: this.pageToken
    };
  }
}
export module GetIntentRequest {
  /**
   * Standard JavaScript object representation for GetIntentRequest
   */
  export interface AsObject {
    name: string;
    languageCode: string;
    intentView: IntentView;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for GetIntentRequest
   */
  export interface AsProtobufJSON {
    name: string;
    languageCode: string;
    intentView: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateIntentRequest
 */
export class CreateIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateIntentRequest();
    CreateIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateIntentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.intent = _instance.intent || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentView = _instance.intentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.intent = new Intent();
          _reader.readMessage(
            _instance.intent,
            Intent.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.intentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.intent) {
      _writer.writeMessage(
        2,
        _instance.intent as any,
        Intent.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.intentView) {
      _writer.writeEnum(4, _instance.intentView);
    }
  }

  private _parent: string;
  private _intent?: Intent;
  private _languageCode: string;
  private _intentView: IntentView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateIntentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.intent = _value.intent ? new Intent(_value.intent) : undefined;
    this.languageCode = _value.languageCode;
    this.intentView = _value.intentView;
    CreateIntentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get intent(): Intent | undefined {
    return this._intent;
  }
  set intent(value: Intent | undefined) {
    this._intent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get intentView(): IntentView {
    return this._intentView;
  }
  set intentView(value: IntentView) {
    this._intentView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateIntentRequest.AsObject {
    return {
      parent: this.parent,
      intent: this.intent ? this.intent.toObject() : undefined,
      languageCode: this.languageCode,
      intentView: this.intentView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateIntentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      intent: this.intent ? this.intent.toProtobufJSON(options) : null,
      languageCode: this.languageCode,
      intentView:
        IntentView[
          this.intentView === null || this.intentView === undefined
            ? 0
            : this.intentView
        ]
    };
  }
}
export module CreateIntentRequest {
  /**
   * Standard JavaScript object representation for CreateIntentRequest
   */
  export interface AsObject {
    parent: string;
    intent?: Intent.AsObject;
    languageCode: string;
    intentView: IntentView;
  }

  /**
   * Protobuf JSON representation for CreateIntentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    intent: Intent.AsProtobufJSON | null;
    languageCode: string;
    intentView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateIntentRequest
 */
export class UpdateIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateIntentRequest();
    UpdateIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateIntentRequest) {
    _instance.intent = _instance.intent || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.intentView = _instance.intentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intent = new Intent();
          _reader.readMessage(
            _instance.intent,
            Intent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.intentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intent) {
      _writer.writeMessage(
        1,
        _instance.intent as any,
        Intent.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        3,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.intentView) {
      _writer.writeEnum(4, _instance.intentView);
    }
  }

  private _intent?: Intent;
  private _languageCode: string;
  private _updateMask?: googleProtobuf004.FieldMask;
  private _intentView: IntentView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateIntentRequest.AsObject>) {
    _value = _value || {};
    this.intent = _value.intent ? new Intent(_value.intent) : undefined;
    this.languageCode = _value.languageCode;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    this.intentView = _value.intentView;
    UpdateIntentRequest.refineValues(this);
  }
  get intent(): Intent | undefined {
    return this._intent;
  }
  set intent(value: Intent | undefined) {
    this._intent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }
  get intentView(): IntentView {
    return this._intentView;
  }
  set intentView(value: IntentView) {
    this._intentView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateIntentRequest.AsObject {
    return {
      intent: this.intent ? this.intent.toObject() : undefined,
      languageCode: this.languageCode,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      intentView: this.intentView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateIntentRequest.AsProtobufJSON {
    return {
      intent: this.intent ? this.intent.toProtobufJSON(options) : null,
      languageCode: this.languageCode,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      intentView:
        IntentView[
          this.intentView === null || this.intentView === undefined
            ? 0
            : this.intentView
        ]
    };
  }
}
export module UpdateIntentRequest {
  /**
   * Standard JavaScript object representation for UpdateIntentRequest
   */
  export interface AsObject {
    intent?: Intent.AsObject;
    languageCode: string;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
    intentView: IntentView;
  }

  /**
   * Protobuf JSON representation for UpdateIntentRequest
   */
  export interface AsProtobufJSON {
    intent: Intent.AsProtobufJSON | null;
    languageCode: string;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
    intentView: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteIntentRequest
 */
export class DeleteIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteIntentRequest();
    DeleteIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteIntentRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteIntentRequest,
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

    DeleteIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteIntentRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteIntentRequest.refineValues(this);
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
    DeleteIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteIntentRequest.AsObject {
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
  ): DeleteIntentRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteIntentRequest {
  /**
   * Standard JavaScript object representation for DeleteIntentRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteIntentRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsRequest
 */
export class BatchUpdateIntentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateIntentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateIntentsRequest();
    BatchUpdateIntentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateIntentsRequest) {
    _instance.parent = _instance.parent || '';

    _instance.languageCode = _instance.languageCode || '';
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.intentView = _instance.intentView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateIntentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.intentBatchUri = _reader.readString();
          break;
        case 3:
          _instance.intentBatchInline = new IntentBatch();
          _reader.readMessage(
            _instance.intentBatchInline,
            IntentBatch.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.intentView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateIntentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateIntentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.intentBatchUri || _instance.intentBatchUri === '') {
      _writer.writeString(2, _instance.intentBatchUri);
    }
    if (_instance.intentBatchInline) {
      _writer.writeMessage(
        3,
        _instance.intentBatchInline as any,
        IntentBatch.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        5,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.intentView) {
      _writer.writeEnum(6, _instance.intentView);
    }
  }

  private _parent: string;
  private _intentBatchUri: string;
  private _intentBatchInline?: IntentBatch;
  private _languageCode: string;
  private _updateMask?: googleProtobuf004.FieldMask;
  private _intentView: IntentView;

  private _intentBatch: BatchUpdateIntentsRequest.IntentBatchCase =
    BatchUpdateIntentsRequest.IntentBatchCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateIntentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchUpdateIntentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.intentBatchUri = _value.intentBatchUri;
    this.intentBatchInline = _value.intentBatchInline
      ? new IntentBatch(_value.intentBatchInline)
      : undefined;
    this.languageCode = _value.languageCode;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    this.intentView = _value.intentView;
    BatchUpdateIntentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get intentBatchUri(): string {
    return this._intentBatchUri;
  }
  set intentBatchUri(value: string) {
    if (value !== undefined && value !== null) {
      this._intentBatchInline = undefined;
      this._intentBatch =
        BatchUpdateIntentsRequest.IntentBatchCase.intentBatchUri;
    }
    this._intentBatchUri = value;
  }
  get intentBatchInline(): IntentBatch | undefined {
    return this._intentBatchInline;
  }
  set intentBatchInline(value: IntentBatch | undefined) {
    if (value !== undefined && value !== null) {
      this._intentBatchUri = undefined;
      this._intentBatch =
        BatchUpdateIntentsRequest.IntentBatchCase.intentBatchInline;
    }
    this._intentBatchInline = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }
  get intentView(): IntentView {
    return this._intentView;
  }
  set intentView(value: IntentView) {
    this._intentView = value;
  }
  get intentBatch() {
    return this._intentBatch;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateIntentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateIntentsRequest.AsObject {
    return {
      parent: this.parent,
      intentBatchUri: this.intentBatchUri,
      intentBatchInline: this.intentBatchInline
        ? this.intentBatchInline.toObject()
        : undefined,
      languageCode: this.languageCode,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      intentView: this.intentView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchUpdateIntentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      intentBatchUri:
        this.intentBatchUri === null || this.intentBatchUri === undefined
          ? null
          : this.intentBatchUri,
      intentBatchInline: this.intentBatchInline
        ? this.intentBatchInline.toProtobufJSON(options)
        : null,
      languageCode: this.languageCode,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      intentView:
        IntentView[
          this.intentView === null || this.intentView === undefined
            ? 0
            : this.intentView
        ]
    };
  }
}
export module BatchUpdateIntentsRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateIntentsRequest
   */
  export interface AsObject {
    parent: string;
    intentBatchUri: string;
    intentBatchInline?: IntentBatch.AsObject;
    languageCode: string;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
    intentView: IntentView;
  }

  /**
   * Protobuf JSON representation for BatchUpdateIntentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    intentBatchUri: string | null;
    intentBatchInline: IntentBatch.AsProtobufJSON | null;
    languageCode: string;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
    intentView: string;
  }
  export enum IntentBatchCase {
    none = 0,
    intentBatchUri = 1,
    intentBatchInline = 2
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsResponse
 */
export class BatchUpdateIntentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateIntentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateIntentsResponse();
    BatchUpdateIntentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateIntentsResponse) {
    _instance.intents = _instance.intents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateIntentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent();
          _reader.readMessage(
            messageInitializer1,
            Intent.deserializeBinaryFromReader
          );
          (_instance.intents = _instance.intents || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateIntentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateIntentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.intents && _instance.intents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.intents as any,
        Intent.serializeBinaryToWriter
      );
    }
  }

  private _intents?: Intent[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateIntentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchUpdateIntentsResponse.AsObject>) {
    _value = _value || {};
    this.intents = (_value.intents || []).map(m => new Intent(m));
    BatchUpdateIntentsResponse.refineValues(this);
  }
  get intents(): Intent[] | undefined {
    return this._intents;
  }
  set intents(value: Intent[] | undefined) {
    this._intents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateIntentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateIntentsResponse.AsObject {
    return {
      intents: (this.intents || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchUpdateIntentsResponse.AsProtobufJSON {
    return {
      intents: (this.intents || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module BatchUpdateIntentsResponse {
  /**
   * Standard JavaScript object representation for BatchUpdateIntentsResponse
   */
  export interface AsObject {
    intents?: Intent.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateIntentsResponse
   */
  export interface AsProtobufJSON {
    intents: Intent.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteIntentsRequest
 */
export class BatchDeleteIntentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteIntentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteIntentsRequest();
    BatchDeleteIntentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteIntentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.intents = _instance.intents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteIntentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Intent();
          _reader.readMessage(
            messageInitializer2,
            Intent.deserializeBinaryFromReader
          );
          (_instance.intents = _instance.intents || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchDeleteIntentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteIntentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.intents && _instance.intents.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.intents as any,
        Intent.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _intents?: Intent[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteIntentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchDeleteIntentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.intents = (_value.intents || []).map(m => new Intent(m));
    BatchDeleteIntentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get intents(): Intent[] | undefined {
    return this._intents;
  }
  set intents(value: Intent[] | undefined) {
    this._intents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchDeleteIntentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteIntentsRequest.AsObject {
    return {
      parent: this.parent,
      intents: (this.intents || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchDeleteIntentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      intents: (this.intents || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module BatchDeleteIntentsRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteIntentsRequest
   */
  export interface AsObject {
    parent: string;
    intents?: Intent.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteIntentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    intents: Intent.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.IntentBatch
 */
export class IntentBatch implements GrpcMessage {
  static id = 'ondewo.nlu.IntentBatch';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IntentBatch();
    IntentBatch.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IntentBatch) {
    _instance.intents = _instance.intents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IntentBatch,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent();
          _reader.readMessage(
            messageInitializer1,
            Intent.deserializeBinaryFromReader
          );
          (_instance.intents = _instance.intents || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    IntentBatch.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IntentBatch,
    _writer: BinaryWriter
  ) {
    if (_instance.intents && _instance.intents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.intents as any,
        Intent.serializeBinaryToWriter
      );
    }
  }

  private _intents?: Intent[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IntentBatch to deeply clone from
   */
  constructor(_value?: RecursivePartial<IntentBatch.AsObject>) {
    _value = _value || {};
    this.intents = (_value.intents || []).map(m => new Intent(m));
    IntentBatch.refineValues(this);
  }
  get intents(): Intent[] | undefined {
    return this._intents;
  }
  set intents(value: Intent[] | undefined) {
    this._intents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IntentBatch.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IntentBatch.AsObject {
    return {
      intents: (this.intents || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IntentBatch.AsProtobufJSON {
    return {
      intents: (this.intents || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module IntentBatch {
  /**
   * Standard JavaScript object representation for IntentBatch
   */
  export interface AsObject {
    intents?: Intent.AsObject[];
  }

  /**
   * Protobuf JSON representation for IntentBatch
   */
  export interface AsProtobufJSON {
    intents: Intent.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.IntentSorting
 */
export class IntentSorting implements GrpcMessage {
  static id = 'ondewo.nlu.IntentSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IntentSorting();
    IntentSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IntentSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IntentSorting,
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

    IntentSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IntentSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: IntentSorting.IntentSortingField;
  private _sortingMode: ondewoNlu010.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IntentSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<IntentSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    IntentSorting.refineValues(this);
  }
  get sortingField(): IntentSorting.IntentSortingField {
    return this._sortingField;
  }
  set sortingField(value: IntentSorting.IntentSortingField) {
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
    IntentSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IntentSorting.AsObject {
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
  ): IntentSorting.AsProtobufJSON {
    return {
      sortingField:
        IntentSorting.IntentSortingField[
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
export module IntentSorting {
  /**
   * Standard JavaScript object representation for IntentSorting
   */
  export interface AsObject {
    sortingField: IntentSorting.IntentSortingField;
    sortingMode: ondewoNlu010.SortingMode;
  }

  /**
   * Protobuf JSON representation for IntentSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum IntentSortingField {
    NO_INTENT_SORTING = 0,
    SORT_INTENT_BY_NAME = 1,
    SORT_INTENT_BY_CREATION_DATE = 2,
    SORT_INTENT_BY_LAST_UPDATED = 3,
    SORT_INTENT_BY_USERSAYS_COUNT = 4,
    SORT_INTENT_BY_START_DATE = 5,
    SORT_INTENT_BY_END_DATE = 6
  }
}

/**
 * Message implementation for ondewo.nlu.IntentTagRequest
 */
export class IntentTagRequest implements GrpcMessage {
  static id = 'ondewo.nlu.IntentTagRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IntentTagRequest();
    IntentTagRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IntentTagRequest) {
    _instance.intentName = _instance.intentName || '';
    _instance.tags = _instance.tags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IntentTagRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        case 2:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    IntentTagRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IntentTagRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(2, _instance.tags);
    }
  }

  private _intentName: string;
  private _tags: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IntentTagRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<IntentTagRequest.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    this.tags = (_value.tags || []).slice();
    IntentTagRequest.refineValues(this);
  }
  get intentName(): string {
    return this._intentName;
  }
  set intentName(value: string) {
    this._intentName = value;
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
    IntentTagRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IntentTagRequest.AsObject {
    return {
      intentName: this.intentName,
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
  ): IntentTagRequest.AsProtobufJSON {
    return {
      intentName: this.intentName,
      tags: (this.tags || []).slice()
    };
  }
}
export module IntentTagRequest {
  /**
   * Standard JavaScript object representation for IntentTagRequest
   */
  export interface AsObject {
    intentName: string;
    tags: string[];
  }

  /**
   * Protobuf JSON representation for IntentTagRequest
   */
  export interface AsProtobufJSON {
    intentName: string;
    tags: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GetIntentTagsRequest
 */
export class GetIntentTagsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetIntentTagsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIntentTagsRequest();
    GetIntentTagsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIntentTagsRequest) {
    _instance.intentName = _instance.intentName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIntentTagsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetIntentTagsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIntentTagsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
  }

  private _intentName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIntentTagsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIntentTagsRequest.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    GetIntentTagsRequest.refineValues(this);
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
    GetIntentTagsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIntentTagsRequest.AsObject {
    return {
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
  ): GetIntentTagsRequest.AsProtobufJSON {
    return {
      intentName: this.intentName
    };
  }
}
export module GetIntentTagsRequest {
  /**
   * Standard JavaScript object representation for GetIntentTagsRequest
   */
  export interface AsObject {
    intentName: string;
  }

  /**
   * Protobuf JSON representation for GetIntentTagsRequest
   */
  export interface AsProtobufJSON {
    intentName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetIntentTagsResponse
 */
export class GetIntentTagsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetIntentTagsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIntentTagsResponse();
    GetIntentTagsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIntentTagsResponse) {
    _instance.intentTags = _instance.intentTags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIntentTagsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.intentTags = _instance.intentTags || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetIntentTagsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIntentTagsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.intentTags && _instance.intentTags.length) {
      _writer.writeRepeatedString(1, _instance.intentTags);
    }
  }

  private _intentTags: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIntentTagsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIntentTagsResponse.AsObject>) {
    _value = _value || {};
    this.intentTags = (_value.intentTags || []).slice();
    GetIntentTagsResponse.refineValues(this);
  }
  get intentTags(): string[] {
    return this._intentTags;
  }
  set intentTags(value: string[]) {
    this._intentTags = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIntentTagsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIntentTagsResponse.AsObject {
    return {
      intentTags: (this.intentTags || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetIntentTagsResponse.AsProtobufJSON {
    return {
      intentTags: (this.intentTags || []).slice()
    };
  }
}
export module GetIntentTagsResponse {
  /**
   * Standard JavaScript object representation for GetIntentTagsResponse
   */
  export interface AsObject {
    intentTags: string[];
  }

  /**
   * Protobuf JSON representation for GetIntentTagsResponse
   */
  export interface AsProtobufJSON {
    intentTags: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GetAllIntentTagsRequest
 */
export class GetAllIntentTagsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetAllIntentTagsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAllIntentTagsRequest();
    GetAllIntentTagsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAllIntentTagsRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAllIntentTagsRequest,
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

    GetAllIntentTagsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAllIntentTagsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAllIntentTagsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAllIntentTagsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    GetAllIntentTagsRequest.refineValues(this);
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
    GetAllIntentTagsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAllIntentTagsRequest.AsObject {
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
  ): GetAllIntentTagsRequest.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module GetAllIntentTagsRequest {
  /**
   * Standard JavaScript object representation for GetAllIntentTagsRequest
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for GetAllIntentTagsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateTrainingPhrasesRequest
 */
export class BatchUpdateTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateTrainingPhrasesRequest();
    BatchUpdateTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateTrainingPhrasesRequest) {
    _instance.trainingPhrases = _instance.trainingPhrases || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateTrainingPhrasesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.TrainingPhrase();
          _reader.readMessage(
            messageInitializer1,
            Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          (_instance.trainingPhrases = _instance.trainingPhrases || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.trainingPhrases as any,
        Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
  }

  private _trainingPhrases?: Intent.TrainingPhrase[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateTrainingPhrasesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchUpdateTrainingPhrasesRequest.AsObject>
  ) {
    _value = _value || {};
    this.trainingPhrases = (_value.trainingPhrases || []).map(
      m => new Intent.TrainingPhrase(m)
    );
    BatchUpdateTrainingPhrasesRequest.refineValues(this);
  }
  get trainingPhrases(): Intent.TrainingPhrase[] | undefined {
    return this._trainingPhrases;
  }
  set trainingPhrases(value: Intent.TrainingPhrase[] | undefined) {
    this._trainingPhrases = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateTrainingPhrasesRequest.AsObject {
    return {
      trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchUpdateTrainingPhrasesRequest.AsProtobufJSON {
    return {
      trainingPhrases: (this.trainingPhrases || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchUpdateTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateTrainingPhrasesRequest
   */
  export interface AsObject {
    trainingPhrases?: Intent.TrainingPhrase.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.TrainingPhraseStatus
 */
export class TrainingPhraseStatus implements GrpcMessage {
  static id = 'ondewo.nlu.TrainingPhraseStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TrainingPhraseStatus();
    TrainingPhraseStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TrainingPhraseStatus) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TrainingPhraseStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.trainingPhrase = new Intent.TrainingPhrase();
          _reader.readMessage(
            _instance.trainingPhrase,
            Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TrainingPhraseStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TrainingPhraseStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.trainingPhrase) {
      _writer.writeMessage(
        1,
        _instance.trainingPhrase as any,
        Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage || _instance.errorMessage === '') {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _trainingPhrase?: Intent.TrainingPhrase;
  private _errorMessage: string;

  private _phraseOrStatus: TrainingPhraseStatus.PhraseOrStatusCase =
    TrainingPhraseStatus.PhraseOrStatusCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TrainingPhraseStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<TrainingPhraseStatus.AsObject>) {
    _value = _value || {};
    this.trainingPhrase = _value.trainingPhrase
      ? new Intent.TrainingPhrase(_value.trainingPhrase)
      : undefined;
    this.errorMessage = _value.errorMessage;
    TrainingPhraseStatus.refineValues(this);
  }
  get trainingPhrase(): Intent.TrainingPhrase | undefined {
    return this._trainingPhrase;
  }
  set trainingPhrase(value: Intent.TrainingPhrase | undefined) {
    if (value !== undefined && value !== null) {
      this._errorMessage = undefined;
      this._phraseOrStatus =
        TrainingPhraseStatus.PhraseOrStatusCase.trainingPhrase;
    }
    this._trainingPhrase = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    if (value !== undefined && value !== null) {
      this._trainingPhrase = undefined;
      this._phraseOrStatus =
        TrainingPhraseStatus.PhraseOrStatusCase.errorMessage;
    }
    this._errorMessage = value;
  }
  get phraseOrStatus() {
    return this._phraseOrStatus;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TrainingPhraseStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TrainingPhraseStatus.AsObject {
    return {
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toObject()
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
  ): TrainingPhraseStatus.AsProtobufJSON {
    return {
      trainingPhrase: this.trainingPhrase
        ? this.trainingPhrase.toProtobufJSON(options)
        : null,
      errorMessage:
        this.errorMessage === null || this.errorMessage === undefined
          ? null
          : this.errorMessage
    };
  }
}
export module TrainingPhraseStatus {
  /**
   * Standard JavaScript object representation for TrainingPhraseStatus
   */
  export interface AsObject {
    trainingPhrase?: Intent.TrainingPhrase.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for TrainingPhraseStatus
   */
  export interface AsProtobufJSON {
    trainingPhrase: Intent.TrainingPhrase.AsProtobufJSON | null;
    errorMessage: string | null;
  }
  export enum PhraseOrStatusCase {
    none = 0,
    trainingPhrase = 1,
    errorMessage = 2
  }
}

/**
 * Message implementation for ondewo.nlu.BatchTrainingPhrasesStatusResponse
 */
export class BatchTrainingPhrasesStatusResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchTrainingPhrasesStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchTrainingPhrasesStatusResponse();
    BatchTrainingPhrasesStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchTrainingPhrasesStatusResponse) {
    _instance.trainingPhraseStatuses = _instance.trainingPhraseStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchTrainingPhrasesStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new TrainingPhraseStatus();
          _reader.readMessage(
            messageInitializer1,
            TrainingPhraseStatus.deserializeBinaryFromReader
          );
          (_instance.trainingPhraseStatuses =
            _instance.trainingPhraseStatuses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.hasErrors = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchTrainingPhrasesStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchTrainingPhrasesStatusResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.trainingPhraseStatuses &&
      _instance.trainingPhraseStatuses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.trainingPhraseStatuses as any,
        TrainingPhraseStatus.serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _trainingPhraseStatuses?: TrainingPhraseStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchTrainingPhrasesStatusResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchTrainingPhrasesStatusResponse.AsObject>
  ) {
    _value = _value || {};
    this.trainingPhraseStatuses = (_value.trainingPhraseStatuses || []).map(
      m => new TrainingPhraseStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchTrainingPhrasesStatusResponse.refineValues(this);
  }
  get trainingPhraseStatuses(): TrainingPhraseStatus[] | undefined {
    return this._trainingPhraseStatuses;
  }
  set trainingPhraseStatuses(value: TrainingPhraseStatus[] | undefined) {
    this._trainingPhraseStatuses = value;
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
    BatchTrainingPhrasesStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchTrainingPhrasesStatusResponse.AsObject {
    return {
      trainingPhraseStatuses: (this.trainingPhraseStatuses || []).map(m =>
        m.toObject()
      ),
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
  ): BatchTrainingPhrasesStatusResponse.AsProtobufJSON {
    return {
      trainingPhraseStatuses: (this.trainingPhraseStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchTrainingPhrasesStatusResponse {
  /**
   * Standard JavaScript object representation for BatchTrainingPhrasesStatusResponse
   */
  export interface AsObject {
    trainingPhraseStatuses?: TrainingPhraseStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchTrainingPhrasesStatusResponse
   */
  export interface AsProtobufJSON {
    trainingPhraseStatuses: TrainingPhraseStatus.AsProtobufJSON[] | null;
    hasErrors: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest
 */
export class BatchCreateTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchCreateTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchCreateTrainingPhrasesRequest();
    BatchCreateTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchCreateTrainingPhrasesRequest) {
    _instance.trainingPhraseRequests = _instance.trainingPhraseRequests || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchCreateTrainingPhrasesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest();
          _reader.readMessage(
            messageInitializer1,
            BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
              .deserializeBinaryFromReader
          );
          (_instance.trainingPhraseRequests =
            _instance.trainingPhraseRequests || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    BatchCreateTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchCreateTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (
      _instance.trainingPhraseRequests &&
      _instance.trainingPhraseRequests.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.trainingPhraseRequests as any,
        BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
          .serializeBinaryToWriter
      );
    }
  }

  private _trainingPhraseRequests?: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchCreateTrainingPhrasesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchCreateTrainingPhrasesRequest.AsObject>
  ) {
    _value = _value || {};
    this.trainingPhraseRequests = (_value.trainingPhraseRequests || []).map(
      m => new BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest(m)
    );
    BatchCreateTrainingPhrasesRequest.refineValues(this);
  }
  get trainingPhraseRequests():
    | BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest[]
    | undefined {
    return this._trainingPhraseRequests;
  }
  set trainingPhraseRequests(
    value:
      | BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest[]
      | undefined
  ) {
    this._trainingPhraseRequests = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchCreateTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchCreateTrainingPhrasesRequest.AsObject {
    return {
      trainingPhraseRequests: (this.trainingPhraseRequests || []).map(m =>
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
  ): BatchCreateTrainingPhrasesRequest.AsProtobufJSON {
    return {
      trainingPhraseRequests: (this.trainingPhraseRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchCreateTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for BatchCreateTrainingPhrasesRequest
   */
  export interface AsObject {
    trainingPhraseRequests?: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchCreateTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    trainingPhraseRequests:
      | BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest.AsProtobufJSON[]
      | null;
  }

  /**
   * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
   */
  export class CreateTrainingPhraseRequest implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CreateTrainingPhraseRequest();
      CreateTrainingPhraseRequest.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateTrainingPhraseRequest) {
      _instance.intentName = _instance.intentName || '';
      _instance.trainingPhrase = _instance.trainingPhrase || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CreateTrainingPhraseRequest,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.intentName = _reader.readString();
            break;
          case 2:
            _instance.trainingPhrase = new Intent.TrainingPhrase();
            _reader.readMessage(
              _instance.trainingPhrase,
              Intent.TrainingPhrase.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      CreateTrainingPhraseRequest.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CreateTrainingPhraseRequest,
      _writer: BinaryWriter
    ) {
      if (_instance.intentName) {
        _writer.writeString(1, _instance.intentName);
      }
      if (_instance.trainingPhrase) {
        _writer.writeMessage(
          2,
          _instance.trainingPhrase as any,
          Intent.TrainingPhrase.serializeBinaryToWriter
        );
      }
    }

    private _intentName: string;
    private _trainingPhrase?: Intent.TrainingPhrase;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateTrainingPhraseRequest to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<CreateTrainingPhraseRequest.AsObject>
    ) {
      _value = _value || {};
      this.intentName = _value.intentName;
      this.trainingPhrase = _value.trainingPhrase
        ? new Intent.TrainingPhrase(_value.trainingPhrase)
        : undefined;
      CreateTrainingPhraseRequest.refineValues(this);
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get trainingPhrase(): Intent.TrainingPhrase | undefined {
      return this._trainingPhrase;
    }
    set trainingPhrase(value: Intent.TrainingPhrase | undefined) {
      this._trainingPhrase = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      CreateTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateTrainingPhraseRequest.AsObject {
      return {
        intentName: this.intentName,
        trainingPhrase: this.trainingPhrase
          ? this.trainingPhrase.toObject()
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
    ): CreateTrainingPhraseRequest.AsProtobufJSON {
      return {
        intentName: this.intentName,
        trainingPhrase: this.trainingPhrase
          ? this.trainingPhrase.toProtobufJSON(options)
          : null
      };
    }
  }
  export module CreateTrainingPhraseRequest {
    /**
     * Standard JavaScript object representation for CreateTrainingPhraseRequest
     */
    export interface AsObject {
      intentName: string;
      trainingPhrase?: Intent.TrainingPhrase.AsObject;
    }

    /**
     * Protobuf JSON representation for CreateTrainingPhraseRequest
     */
    export interface AsProtobufJSON {
      intentName: string;
      trainingPhrase: Intent.TrainingPhrase.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.BatchGetTrainingPhrasesRequest
 */
export class BatchGetTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchGetTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchGetTrainingPhrasesRequest();
    BatchGetTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchGetTrainingPhrasesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchGetTrainingPhrasesRequest,
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

    BatchGetTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchGetTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchGetTrainingPhrasesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchGetTrainingPhrasesRequest.AsObject>
  ) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchGetTrainingPhrasesRequest.refineValues(this);
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
    BatchGetTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchGetTrainingPhrasesRequest.AsObject {
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
  ): BatchGetTrainingPhrasesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchGetTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for BatchGetTrainingPhrasesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchGetTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesRequest
 */
export class BatchDeleteTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteTrainingPhrasesRequest();
    BatchDeleteTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteTrainingPhrasesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteTrainingPhrasesRequest,
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

    BatchDeleteTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteTrainingPhrasesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteTrainingPhrasesRequest.AsObject>
  ) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchDeleteTrainingPhrasesRequest.refineValues(this);
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
    BatchDeleteTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteTrainingPhrasesRequest.AsObject {
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
  ): BatchDeleteTrainingPhrasesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchDeleteTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteTrainingPhrasesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse
 */
export class BatchDeleteTrainingPhrasesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteTrainingPhrasesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteTrainingPhrasesResponse();
    BatchDeleteTrainingPhrasesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteTrainingPhrasesResponse) {
    _instance.deleteStatuses = _instance.deleteStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteTrainingPhrasesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus();
          _reader.readMessage(
            messageInitializer1,
            BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
              .deserializeBinaryFromReader
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

    BatchDeleteTrainingPhrasesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteTrainingPhrasesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteStatuses as any,
        BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
          .serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _deleteStatuses?: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteTrainingPhrasesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteTrainingPhrasesResponse.AsObject>
  ) {
    _value = _value || {};
    this.deleteStatuses = (_value.deleteStatuses || []).map(
      m => new BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchDeleteTrainingPhrasesResponse.refineValues(this);
  }
  get deleteStatuses():
    | BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus[]
    | undefined {
    return this._deleteStatuses;
  }
  set deleteStatuses(
    value:
      | BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus[]
      | undefined
  ) {
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
    BatchDeleteTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteTrainingPhrasesResponse.AsObject {
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
  ): BatchDeleteTrainingPhrasesResponse.AsProtobufJSON {
    return {
      deleteStatuses: (this.deleteStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchDeleteTrainingPhrasesResponse {
  /**
   * Standard JavaScript object representation for BatchDeleteTrainingPhrasesResponse
   */
  export interface AsObject {
    deleteStatuses?: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchDeleteTrainingPhrasesResponse
   */
  export interface AsProtobufJSON {
    deleteStatuses:
      | BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus.AsProtobufJSON[]
      | null;
    hasErrors: boolean;
  }

  /**
   * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
   */
  export class DeleteTrainingPhraseStatus implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new DeleteTrainingPhraseStatus();
      DeleteTrainingPhraseStatus.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteTrainingPhraseStatus) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: DeleteTrainingPhraseStatus,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.successfullyDeleted = new googleProtobuf003.Empty();
            _reader.readMessage(
              _instance.successfullyDeleted,
              googleProtobuf003.Empty.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.errorMessage = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      DeleteTrainingPhraseStatus.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: DeleteTrainingPhraseStatus,
      _writer: BinaryWriter
    ) {
      if (_instance.successfullyDeleted) {
        _writer.writeMessage(
          1,
          _instance.successfullyDeleted as any,
          googleProtobuf003.Empty.serializeBinaryToWriter
        );
      }
      if (_instance.errorMessage || _instance.errorMessage === '') {
        _writer.writeString(2, _instance.errorMessage);
      }
    }

    private _successfullyDeleted?: googleProtobuf003.Empty;
    private _errorMessage: string;

    private _deleteStatus: DeleteTrainingPhraseStatus.DeleteStatusCase =
      DeleteTrainingPhraseStatus.DeleteStatusCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteTrainingPhraseStatus to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<DeleteTrainingPhraseStatus.AsObject>
    ) {
      _value = _value || {};
      this.successfullyDeleted = _value.successfullyDeleted
        ? new googleProtobuf003.Empty(_value.successfullyDeleted)
        : undefined;
      this.errorMessage = _value.errorMessage;
      DeleteTrainingPhraseStatus.refineValues(this);
    }
    get successfullyDeleted(): googleProtobuf003.Empty | undefined {
      return this._successfullyDeleted;
    }
    set successfullyDeleted(value: googleProtobuf003.Empty | undefined) {
      if (value !== undefined && value !== null) {
        this._errorMessage = undefined;
        this._deleteStatus =
          DeleteTrainingPhraseStatus.DeleteStatusCase.successfullyDeleted;
      }
      this._successfullyDeleted = value;
    }
    get errorMessage(): string {
      return this._errorMessage;
    }
    set errorMessage(value: string) {
      if (value !== undefined && value !== null) {
        this._successfullyDeleted = undefined;
        this._deleteStatus =
          DeleteTrainingPhraseStatus.DeleteStatusCase.errorMessage;
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
      DeleteTrainingPhraseStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteTrainingPhraseStatus.AsObject {
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
    ): DeleteTrainingPhraseStatus.AsProtobufJSON {
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
  export module DeleteTrainingPhraseStatus {
    /**
     * Standard JavaScript object representation for DeleteTrainingPhraseStatus
     */
    export interface AsObject {
      successfullyDeleted?: googleProtobuf003.Empty.AsObject;
      errorMessage: string;
    }

    /**
     * Protobuf JSON representation for DeleteTrainingPhraseStatus
     */
    export interface AsProtobufJSON {
      successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
      errorMessage: string | null;
    }
    export enum DeleteStatusCase {
      none = 0,
      successfullyDeleted = 1,
      errorMessage = 2
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesRequest
 */
export class ListTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTrainingPhrasesRequest();
    ListTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListTrainingPhrasesRequest) {
    _instance.intentName = _instance.intentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTrainingPhrasesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _intentName: string;
  private _languageCode: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTrainingPhrasesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListTrainingPhrasesRequest.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    ListTrainingPhrasesRequest.refineValues(this);
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
    ListTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTrainingPhrasesRequest.AsObject {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
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
  ): ListTrainingPhrasesRequest.AsProtobufJSON {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
      pageToken: this.pageToken
    };
  }
}
export module ListTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for ListTrainingPhrasesRequest
   */
  export interface AsObject {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesResponse
 */
export class ListTrainingPhrasesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListTrainingPhrasesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTrainingPhrasesResponse();
    ListTrainingPhrasesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListTrainingPhrasesResponse) {
    _instance.trainingPhrases = _instance.trainingPhrases || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTrainingPhrasesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.TrainingPhrase();
          _reader.readMessage(
            messageInitializer1,
            Intent.TrainingPhrase.deserializeBinaryFromReader
          );
          (_instance.trainingPhrases = _instance.trainingPhrases || []).push(
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

    ListTrainingPhrasesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTrainingPhrasesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.trainingPhrases as any,
        Intent.TrainingPhrase.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _trainingPhrases?: Intent.TrainingPhrase[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTrainingPhrasesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListTrainingPhrasesResponse.AsObject>) {
    _value = _value || {};
    this.trainingPhrases = (_value.trainingPhrases || []).map(
      m => new Intent.TrainingPhrase(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListTrainingPhrasesResponse.refineValues(this);
  }
  get trainingPhrases(): Intent.TrainingPhrase[] | undefined {
    return this._trainingPhrases;
  }
  set trainingPhrases(value: Intent.TrainingPhrase[] | undefined) {
    this._trainingPhrases = value;
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
    ListTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTrainingPhrasesResponse.AsObject {
    return {
      trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject()),
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
  ): ListTrainingPhrasesResponse.AsProtobufJSON {
    return {
      trainingPhrases: (this.trainingPhrases || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListTrainingPhrasesResponse {
  /**
   * Standard JavaScript object representation for ListTrainingPhrasesResponse
   */
  export interface AsObject {
    trainingPhrases?: Intent.TrainingPhrase.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListTrainingPhrasesResponse
   */
  export interface AsProtobufJSON {
    trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse
 */
export class BatchResponseMessagesStatusResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchResponseMessagesStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchResponseMessagesStatusResponse();
    BatchResponseMessagesStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchResponseMessagesStatusResponse) {
    _instance.responseMessageStatuses = _instance.responseMessageStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchResponseMessagesStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchResponseMessagesStatusResponse.ResponseMessageStatus();
          _reader.readMessage(
            messageInitializer1,
            BatchResponseMessagesStatusResponse.ResponseMessageStatus
              .deserializeBinaryFromReader
          );
          (_instance.responseMessageStatuses =
            _instance.responseMessageStatuses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.hasErrors = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchResponseMessagesStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchResponseMessagesStatusResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.responseMessageStatuses &&
      _instance.responseMessageStatuses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.responseMessageStatuses as any,
        BatchResponseMessagesStatusResponse.ResponseMessageStatus
          .serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _responseMessageStatuses?: BatchResponseMessagesStatusResponse.ResponseMessageStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchResponseMessagesStatusResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchResponseMessagesStatusResponse.AsObject>
  ) {
    _value = _value || {};
    this.responseMessageStatuses = (_value.responseMessageStatuses || []).map(
      m => new BatchResponseMessagesStatusResponse.ResponseMessageStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchResponseMessagesStatusResponse.refineValues(this);
  }
  get responseMessageStatuses():
    | BatchResponseMessagesStatusResponse.ResponseMessageStatus[]
    | undefined {
    return this._responseMessageStatuses;
  }
  set responseMessageStatuses(
    value:
      | BatchResponseMessagesStatusResponse.ResponseMessageStatus[]
      | undefined
  ) {
    this._responseMessageStatuses = value;
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
    BatchResponseMessagesStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchResponseMessagesStatusResponse.AsObject {
    return {
      responseMessageStatuses: (this.responseMessageStatuses || []).map(m =>
        m.toObject()
      ),
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
  ): BatchResponseMessagesStatusResponse.AsProtobufJSON {
    return {
      responseMessageStatuses: (this.responseMessageStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchResponseMessagesStatusResponse {
  /**
   * Standard JavaScript object representation for BatchResponseMessagesStatusResponse
   */
  export interface AsObject {
    responseMessageStatuses?: BatchResponseMessagesStatusResponse.ResponseMessageStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchResponseMessagesStatusResponse
   */
  export interface AsProtobufJSON {
    responseMessageStatuses:
      | BatchResponseMessagesStatusResponse.ResponseMessageStatus.AsProtobufJSON[]
      | null;
    hasErrors: boolean;
  }

  /**
   * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus
   */
  export class ResponseMessageStatus implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ResponseMessageStatus();
      ResponseMessageStatus.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ResponseMessageStatus) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ResponseMessageStatus,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.responseMessage = new Intent.Message();
            _reader.readMessage(
              _instance.responseMessage,
              Intent.Message.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.errorMessage = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      ResponseMessageStatus.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ResponseMessageStatus,
      _writer: BinaryWriter
    ) {
      if (_instance.responseMessage) {
        _writer.writeMessage(
          1,
          _instance.responseMessage as any,
          Intent.Message.serializeBinaryToWriter
        );
      }
      if (_instance.errorMessage || _instance.errorMessage === '') {
        _writer.writeString(2, _instance.errorMessage);
      }
    }

    private _responseMessage?: Intent.Message;
    private _errorMessage: string;

    private _phraseOrStatus: ResponseMessageStatus.PhraseOrStatusCase =
      ResponseMessageStatus.PhraseOrStatusCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ResponseMessageStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ResponseMessageStatus.AsObject>) {
      _value = _value || {};
      this.responseMessage = _value.responseMessage
        ? new Intent.Message(_value.responseMessage)
        : undefined;
      this.errorMessage = _value.errorMessage;
      ResponseMessageStatus.refineValues(this);
    }
    get responseMessage(): Intent.Message | undefined {
      return this._responseMessage;
    }
    set responseMessage(value: Intent.Message | undefined) {
      if (value !== undefined && value !== null) {
        this._errorMessage = undefined;
        this._phraseOrStatus =
          ResponseMessageStatus.PhraseOrStatusCase.responseMessage;
      }
      this._responseMessage = value;
    }
    get errorMessage(): string {
      return this._errorMessage;
    }
    set errorMessage(value: string) {
      if (value !== undefined && value !== null) {
        this._responseMessage = undefined;
        this._phraseOrStatus =
          ResponseMessageStatus.PhraseOrStatusCase.errorMessage;
      }
      this._errorMessage = value;
    }
    get phraseOrStatus() {
      return this._phraseOrStatus;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ResponseMessageStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ResponseMessageStatus.AsObject {
      return {
        responseMessage: this.responseMessage
          ? this.responseMessage.toObject()
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
    ): ResponseMessageStatus.AsProtobufJSON {
      return {
        responseMessage: this.responseMessage
          ? this.responseMessage.toProtobufJSON(options)
          : null,
        errorMessage:
          this.errorMessage === null || this.errorMessage === undefined
            ? null
            : this.errorMessage
      };
    }
  }
  export module ResponseMessageStatus {
    /**
     * Standard JavaScript object representation for ResponseMessageStatus
     */
    export interface AsObject {
      responseMessage?: Intent.Message.AsObject;
      errorMessage: string;
    }

    /**
     * Protobuf JSON representation for ResponseMessageStatus
     */
    export interface AsProtobufJSON {
      responseMessage: Intent.Message.AsProtobufJSON | null;
      errorMessage: string | null;
    }
    export enum PhraseOrStatusCase {
      none = 0,
      responseMessage = 1,
      errorMessage = 2
    }
  }
}

/**
 * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest
 */
export class BatchCreateResponseMessagesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchCreateResponseMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchCreateResponseMessagesRequest();
    BatchCreateResponseMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchCreateResponseMessagesRequest) {
    _instance.responseMessageRequests = _instance.responseMessageRequests || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchCreateResponseMessagesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchCreateResponseMessagesRequest.CreateResponseMessageRequest();
          _reader.readMessage(
            messageInitializer1,
            BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
              .deserializeBinaryFromReader
          );
          (_instance.responseMessageRequests =
            _instance.responseMessageRequests || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    BatchCreateResponseMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchCreateResponseMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (
      _instance.responseMessageRequests &&
      _instance.responseMessageRequests.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.responseMessageRequests as any,
        BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
          .serializeBinaryToWriter
      );
    }
  }

  private _responseMessageRequests?: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchCreateResponseMessagesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchCreateResponseMessagesRequest.AsObject>
  ) {
    _value = _value || {};
    this.responseMessageRequests = (_value.responseMessageRequests || []).map(
      m =>
        new BatchCreateResponseMessagesRequest.CreateResponseMessageRequest(m)
    );
    BatchCreateResponseMessagesRequest.refineValues(this);
  }
  get responseMessageRequests():
    | BatchCreateResponseMessagesRequest.CreateResponseMessageRequest[]
    | undefined {
    return this._responseMessageRequests;
  }
  set responseMessageRequests(
    value:
      | BatchCreateResponseMessagesRequest.CreateResponseMessageRequest[]
      | undefined
  ) {
    this._responseMessageRequests = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchCreateResponseMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchCreateResponseMessagesRequest.AsObject {
    return {
      responseMessageRequests: (this.responseMessageRequests || []).map(m =>
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
  ): BatchCreateResponseMessagesRequest.AsProtobufJSON {
    return {
      responseMessageRequests: (this.responseMessageRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchCreateResponseMessagesRequest {
  /**
   * Standard JavaScript object representation for BatchCreateResponseMessagesRequest
   */
  export interface AsObject {
    responseMessageRequests?: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchCreateResponseMessagesRequest
   */
  export interface AsProtobufJSON {
    responseMessageRequests:
      | BatchCreateResponseMessagesRequest.CreateResponseMessageRequest.AsProtobufJSON[]
      | null;
  }

  /**
   * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
   */
  export class CreateResponseMessageRequest implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CreateResponseMessageRequest();
      CreateResponseMessageRequest.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateResponseMessageRequest) {
      _instance.intentName = _instance.intentName || '';
      _instance.responseMessage = _instance.responseMessage || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CreateResponseMessageRequest,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.intentName = _reader.readString();
            break;
          case 2:
            _instance.responseMessage = new Intent.Message();
            _reader.readMessage(
              _instance.responseMessage,
              Intent.Message.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      CreateResponseMessageRequest.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CreateResponseMessageRequest,
      _writer: BinaryWriter
    ) {
      if (_instance.intentName) {
        _writer.writeString(1, _instance.intentName);
      }
      if (_instance.responseMessage) {
        _writer.writeMessage(
          2,
          _instance.responseMessage as any,
          Intent.Message.serializeBinaryToWriter
        );
      }
    }

    private _intentName: string;
    private _responseMessage?: Intent.Message;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateResponseMessageRequest to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<CreateResponseMessageRequest.AsObject>
    ) {
      _value = _value || {};
      this.intentName = _value.intentName;
      this.responseMessage = _value.responseMessage
        ? new Intent.Message(_value.responseMessage)
        : undefined;
      CreateResponseMessageRequest.refineValues(this);
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get responseMessage(): Intent.Message | undefined {
      return this._responseMessage;
    }
    set responseMessage(value: Intent.Message | undefined) {
      this._responseMessage = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      CreateResponseMessageRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateResponseMessageRequest.AsObject {
      return {
        intentName: this.intentName,
        responseMessage: this.responseMessage
          ? this.responseMessage.toObject()
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
    ): CreateResponseMessageRequest.AsProtobufJSON {
      return {
        intentName: this.intentName,
        responseMessage: this.responseMessage
          ? this.responseMessage.toProtobufJSON(options)
          : null
      };
    }
  }
  export module CreateResponseMessageRequest {
    /**
     * Standard JavaScript object representation for CreateResponseMessageRequest
     */
    export interface AsObject {
      intentName: string;
      responseMessage?: Intent.Message.AsObject;
    }

    /**
     * Protobuf JSON representation for CreateResponseMessageRequest
     */
    export interface AsProtobufJSON {
      intentName: string;
      responseMessage: Intent.Message.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateResponseMessagesRequest
 */
export class BatchUpdateResponseMessagesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateResponseMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateResponseMessagesRequest();
    BatchUpdateResponseMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateResponseMessagesRequest) {
    _instance.responseMessages = _instance.responseMessages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateResponseMessagesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.Message();
          _reader.readMessage(
            messageInitializer1,
            Intent.Message.deserializeBinaryFromReader
          );
          (_instance.responseMessages = _instance.responseMessages || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateResponseMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateResponseMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.responseMessages && _instance.responseMessages.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.responseMessages as any,
        Intent.Message.serializeBinaryToWriter
      );
    }
  }

  private _responseMessages?: Intent.Message[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateResponseMessagesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchUpdateResponseMessagesRequest.AsObject>
  ) {
    _value = _value || {};
    this.responseMessages = (_value.responseMessages || []).map(
      m => new Intent.Message(m)
    );
    BatchUpdateResponseMessagesRequest.refineValues(this);
  }
  get responseMessages(): Intent.Message[] | undefined {
    return this._responseMessages;
  }
  set responseMessages(value: Intent.Message[] | undefined) {
    this._responseMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateResponseMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateResponseMessagesRequest.AsObject {
    return {
      responseMessages: (this.responseMessages || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchUpdateResponseMessagesRequest.AsProtobufJSON {
    return {
      responseMessages: (this.responseMessages || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchUpdateResponseMessagesRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateResponseMessagesRequest
   */
  export interface AsObject {
    responseMessages?: Intent.Message.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateResponseMessagesRequest
   */
  export interface AsProtobufJSON {
    responseMessages: Intent.Message.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchGetResponseMessagesRequest
 */
export class BatchGetResponseMessagesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchGetResponseMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchGetResponseMessagesRequest();
    BatchGetResponseMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchGetResponseMessagesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchGetResponseMessagesRequest,
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

    BatchGetResponseMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchGetResponseMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchGetResponseMessagesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchGetResponseMessagesRequest.AsObject>
  ) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchGetResponseMessagesRequest.refineValues(this);
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
    BatchGetResponseMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchGetResponseMessagesRequest.AsObject {
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
  ): BatchGetResponseMessagesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchGetResponseMessagesRequest {
  /**
   * Standard JavaScript object representation for BatchGetResponseMessagesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchGetResponseMessagesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesRequest
 */
export class BatchDeleteResponseMessagesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteResponseMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteResponseMessagesRequest();
    BatchDeleteResponseMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteResponseMessagesRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteResponseMessagesRequest,
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

    BatchDeleteResponseMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteResponseMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteResponseMessagesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteResponseMessagesRequest.AsObject>
  ) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchDeleteResponseMessagesRequest.refineValues(this);
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
    BatchDeleteResponseMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteResponseMessagesRequest.AsObject {
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
  ): BatchDeleteResponseMessagesRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchDeleteResponseMessagesRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteResponseMessagesRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteResponseMessagesRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse
 */
export class BatchDeleteResponseMessagesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteResponseMessagesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteResponseMessagesResponse();
    BatchDeleteResponseMessagesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteResponseMessagesResponse) {
    _instance.deleteStatuses = _instance.deleteStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteResponseMessagesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus();
          _reader.readMessage(
            messageInitializer1,
            BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
              .deserializeBinaryFromReader
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

    BatchDeleteResponseMessagesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteResponseMessagesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteStatuses as any,
        BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
          .serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _deleteStatuses?: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteResponseMessagesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteResponseMessagesResponse.AsObject>
  ) {
    _value = _value || {};
    this.deleteStatuses = (_value.deleteStatuses || []).map(
      m =>
        new BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchDeleteResponseMessagesResponse.refineValues(this);
  }
  get deleteStatuses():
    | BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus[]
    | undefined {
    return this._deleteStatuses;
  }
  set deleteStatuses(
    value:
      | BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus[]
      | undefined
  ) {
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
    BatchDeleteResponseMessagesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteResponseMessagesResponse.AsObject {
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
  ): BatchDeleteResponseMessagesResponse.AsProtobufJSON {
    return {
      deleteStatuses: (this.deleteStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchDeleteResponseMessagesResponse {
  /**
   * Standard JavaScript object representation for BatchDeleteResponseMessagesResponse
   */
  export interface AsObject {
    deleteStatuses?: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchDeleteResponseMessagesResponse
   */
  export interface AsProtobufJSON {
    deleteStatuses:
      | BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus.AsProtobufJSON[]
      | null;
    hasErrors: boolean;
  }

  /**
   * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
   */
  export class DeleteResponseMessageStatus implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new DeleteResponseMessageStatus();
      DeleteResponseMessageStatus.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteResponseMessageStatus) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: DeleteResponseMessageStatus,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.successfullyDeleted = new googleProtobuf003.Empty();
            _reader.readMessage(
              _instance.successfullyDeleted,
              googleProtobuf003.Empty.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.errorMessage = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      DeleteResponseMessageStatus.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: DeleteResponseMessageStatus,
      _writer: BinaryWriter
    ) {
      if (_instance.successfullyDeleted) {
        _writer.writeMessage(
          1,
          _instance.successfullyDeleted as any,
          googleProtobuf003.Empty.serializeBinaryToWriter
        );
      }
      if (_instance.errorMessage || _instance.errorMessage === '') {
        _writer.writeString(2, _instance.errorMessage);
      }
    }

    private _successfullyDeleted?: googleProtobuf003.Empty;
    private _errorMessage: string;

    private _deleteStatus: DeleteResponseMessageStatus.DeleteStatusCase =
      DeleteResponseMessageStatus.DeleteStatusCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteResponseMessageStatus to deeply clone from
     */
    constructor(
      _value?: RecursivePartial<DeleteResponseMessageStatus.AsObject>
    ) {
      _value = _value || {};
      this.successfullyDeleted = _value.successfullyDeleted
        ? new googleProtobuf003.Empty(_value.successfullyDeleted)
        : undefined;
      this.errorMessage = _value.errorMessage;
      DeleteResponseMessageStatus.refineValues(this);
    }
    get successfullyDeleted(): googleProtobuf003.Empty | undefined {
      return this._successfullyDeleted;
    }
    set successfullyDeleted(value: googleProtobuf003.Empty | undefined) {
      if (value !== undefined && value !== null) {
        this._errorMessage = undefined;
        this._deleteStatus =
          DeleteResponseMessageStatus.DeleteStatusCase.successfullyDeleted;
      }
      this._successfullyDeleted = value;
    }
    get errorMessage(): string {
      return this._errorMessage;
    }
    set errorMessage(value: string) {
      if (value !== undefined && value !== null) {
        this._successfullyDeleted = undefined;
        this._deleteStatus =
          DeleteResponseMessageStatus.DeleteStatusCase.errorMessage;
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
      DeleteResponseMessageStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteResponseMessageStatus.AsObject {
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
    ): DeleteResponseMessageStatus.AsProtobufJSON {
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
  export module DeleteResponseMessageStatus {
    /**
     * Standard JavaScript object representation for DeleteResponseMessageStatus
     */
    export interface AsObject {
      successfullyDeleted?: googleProtobuf003.Empty.AsObject;
      errorMessage: string;
    }

    /**
     * Protobuf JSON representation for DeleteResponseMessageStatus
     */
    export interface AsProtobufJSON {
      successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
      errorMessage: string | null;
    }
    export enum DeleteStatusCase {
      none = 0,
      successfullyDeleted = 1,
      errorMessage = 2
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListResponseMessagesRequest
 */
export class ListResponseMessagesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListResponseMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListResponseMessagesRequest();
    ListResponseMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListResponseMessagesRequest) {
    _instance.intentName = _instance.intentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListResponseMessagesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListResponseMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListResponseMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _intentName: string;
  private _languageCode: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListResponseMessagesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListResponseMessagesRequest.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    ListResponseMessagesRequest.refineValues(this);
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
    ListResponseMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListResponseMessagesRequest.AsObject {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
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
  ): ListResponseMessagesRequest.AsProtobufJSON {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
      pageToken: this.pageToken
    };
  }
}
export module ListResponseMessagesRequest {
  /**
   * Standard JavaScript object representation for ListResponseMessagesRequest
   */
  export interface AsObject {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListResponseMessagesRequest
   */
  export interface AsProtobufJSON {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListResponseMessagesResponse
 */
export class ListResponseMessagesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListResponseMessagesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListResponseMessagesResponse();
    ListResponseMessagesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListResponseMessagesResponse) {
    _instance.responseMessages = _instance.responseMessages || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListResponseMessagesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.Message();
          _reader.readMessage(
            messageInitializer1,
            Intent.Message.deserializeBinaryFromReader
          );
          (_instance.responseMessages = _instance.responseMessages || []).push(
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

    ListResponseMessagesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListResponseMessagesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.responseMessages && _instance.responseMessages.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.responseMessages as any,
        Intent.Message.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _responseMessages?: Intent.Message[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListResponseMessagesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListResponseMessagesResponse.AsObject>
  ) {
    _value = _value || {};
    this.responseMessages = (_value.responseMessages || []).map(
      m => new Intent.Message(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListResponseMessagesResponse.refineValues(this);
  }
  get responseMessages(): Intent.Message[] | undefined {
    return this._responseMessages;
  }
  set responseMessages(value: Intent.Message[] | undefined) {
    this._responseMessages = value;
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
    ListResponseMessagesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListResponseMessagesResponse.AsObject {
    return {
      responseMessages: (this.responseMessages || []).map(m => m.toObject()),
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
  ): ListResponseMessagesResponse.AsProtobufJSON {
    return {
      responseMessages: (this.responseMessages || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListResponseMessagesResponse {
  /**
   * Standard JavaScript object representation for ListResponseMessagesResponse
   */
  export interface AsObject {
    responseMessages?: Intent.Message.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListResponseMessagesResponse
   */
  export interface AsProtobufJSON {
    responseMessages: Intent.Message.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchParametersStatusResponse
 */
export class BatchParametersStatusResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchParametersStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchParametersStatusResponse();
    BatchParametersStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchParametersStatusResponse) {
    _instance.parameterStatuses = _instance.parameterStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchParametersStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchParametersStatusResponse.ParameterStatus();
          _reader.readMessage(
            messageInitializer1,
            BatchParametersStatusResponse.ParameterStatus
              .deserializeBinaryFromReader
          );
          (_instance.parameterStatuses =
            _instance.parameterStatuses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.hasErrors = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BatchParametersStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchParametersStatusResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parameterStatuses && _instance.parameterStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.parameterStatuses as any,
        BatchParametersStatusResponse.ParameterStatus.serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _parameterStatuses?: BatchParametersStatusResponse.ParameterStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchParametersStatusResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchParametersStatusResponse.AsObject>
  ) {
    _value = _value || {};
    this.parameterStatuses = (_value.parameterStatuses || []).map(
      m => new BatchParametersStatusResponse.ParameterStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchParametersStatusResponse.refineValues(this);
  }
  get parameterStatuses():
    | BatchParametersStatusResponse.ParameterStatus[]
    | undefined {
    return this._parameterStatuses;
  }
  set parameterStatuses(
    value: BatchParametersStatusResponse.ParameterStatus[] | undefined
  ) {
    this._parameterStatuses = value;
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
    BatchParametersStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchParametersStatusResponse.AsObject {
    return {
      parameterStatuses: (this.parameterStatuses || []).map(m => m.toObject()),
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
  ): BatchParametersStatusResponse.AsProtobufJSON {
    return {
      parameterStatuses: (this.parameterStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchParametersStatusResponse {
  /**
   * Standard JavaScript object representation for BatchParametersStatusResponse
   */
  export interface AsObject {
    parameterStatuses?: BatchParametersStatusResponse.ParameterStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchParametersStatusResponse
   */
  export interface AsProtobufJSON {
    parameterStatuses:
      | BatchParametersStatusResponse.ParameterStatus.AsProtobufJSON[]
      | null;
    hasErrors: boolean;
  }

  /**
   * Message implementation for ondewo.nlu.BatchParametersStatusResponse.ParameterStatus
   */
  export class ParameterStatus implements GrpcMessage {
    static id = 'ondewo.nlu.BatchParametersStatusResponse.ParameterStatus';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ParameterStatus();
      ParameterStatus.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ParameterStatus) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ParameterStatus,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.parameter = new Intent.Parameter();
            _reader.readMessage(
              _instance.parameter,
              Intent.Parameter.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.errorMessage = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      ParameterStatus.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ParameterStatus,
      _writer: BinaryWriter
    ) {
      if (_instance.parameter) {
        _writer.writeMessage(
          1,
          _instance.parameter as any,
          Intent.Parameter.serializeBinaryToWriter
        );
      }
      if (_instance.errorMessage || _instance.errorMessage === '') {
        _writer.writeString(2, _instance.errorMessage);
      }
    }

    private _parameter?: Intent.Parameter;
    private _errorMessage: string;

    private _phraseOrStatus: ParameterStatus.PhraseOrStatusCase =
      ParameterStatus.PhraseOrStatusCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ParameterStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ParameterStatus.AsObject>) {
      _value = _value || {};
      this.parameter = _value.parameter
        ? new Intent.Parameter(_value.parameter)
        : undefined;
      this.errorMessage = _value.errorMessage;
      ParameterStatus.refineValues(this);
    }
    get parameter(): Intent.Parameter | undefined {
      return this._parameter;
    }
    set parameter(value: Intent.Parameter | undefined) {
      if (value !== undefined && value !== null) {
        this._errorMessage = undefined;
        this._phraseOrStatus = ParameterStatus.PhraseOrStatusCase.parameter;
      }
      this._parameter = value;
    }
    get errorMessage(): string {
      return this._errorMessage;
    }
    set errorMessage(value: string) {
      if (value !== undefined && value !== null) {
        this._parameter = undefined;
        this._phraseOrStatus = ParameterStatus.PhraseOrStatusCase.errorMessage;
      }
      this._errorMessage = value;
    }
    get phraseOrStatus() {
      return this._phraseOrStatus;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ParameterStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ParameterStatus.AsObject {
      return {
        parameter: this.parameter ? this.parameter.toObject() : undefined,
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
    ): ParameterStatus.AsProtobufJSON {
      return {
        parameter: this.parameter
          ? this.parameter.toProtobufJSON(options)
          : null,
        errorMessage:
          this.errorMessage === null || this.errorMessage === undefined
            ? null
            : this.errorMessage
      };
    }
  }
  export module ParameterStatus {
    /**
     * Standard JavaScript object representation for ParameterStatus
     */
    export interface AsObject {
      parameter?: Intent.Parameter.AsObject;
      errorMessage: string;
    }

    /**
     * Protobuf JSON representation for ParameterStatus
     */
    export interface AsProtobufJSON {
      parameter: Intent.Parameter.AsProtobufJSON | null;
      errorMessage: string | null;
    }
    export enum PhraseOrStatusCase {
      none = 0,
      parameter = 1,
      errorMessage = 2
    }
  }
}

/**
 * Message implementation for ondewo.nlu.BatchCreateParametersRequest
 */
export class BatchCreateParametersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchCreateParametersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchCreateParametersRequest();
    BatchCreateParametersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchCreateParametersRequest) {
    _instance.parameterRequests = _instance.parameterRequests || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchCreateParametersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchCreateParametersRequest.CreateParameterRequest();
          _reader.readMessage(
            messageInitializer1,
            BatchCreateParametersRequest.CreateParameterRequest
              .deserializeBinaryFromReader
          );
          (_instance.parameterRequests =
            _instance.parameterRequests || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    BatchCreateParametersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchCreateParametersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parameterRequests && _instance.parameterRequests.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.parameterRequests as any,
        BatchCreateParametersRequest.CreateParameterRequest
          .serializeBinaryToWriter
      );
    }
  }

  private _parameterRequests?: BatchCreateParametersRequest.CreateParameterRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchCreateParametersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchCreateParametersRequest.AsObject>
  ) {
    _value = _value || {};
    this.parameterRequests = (_value.parameterRequests || []).map(
      m => new BatchCreateParametersRequest.CreateParameterRequest(m)
    );
    BatchCreateParametersRequest.refineValues(this);
  }
  get parameterRequests():
    | BatchCreateParametersRequest.CreateParameterRequest[]
    | undefined {
    return this._parameterRequests;
  }
  set parameterRequests(
    value: BatchCreateParametersRequest.CreateParameterRequest[] | undefined
  ) {
    this._parameterRequests = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchCreateParametersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchCreateParametersRequest.AsObject {
    return {
      parameterRequests: (this.parameterRequests || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchCreateParametersRequest.AsProtobufJSON {
    return {
      parameterRequests: (this.parameterRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchCreateParametersRequest {
  /**
   * Standard JavaScript object representation for BatchCreateParametersRequest
   */
  export interface AsObject {
    parameterRequests?: BatchCreateParametersRequest.CreateParameterRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchCreateParametersRequest
   */
  export interface AsProtobufJSON {
    parameterRequests:
      | BatchCreateParametersRequest.CreateParameterRequest.AsProtobufJSON[]
      | null;
  }

  /**
   * Message implementation for ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest
   */
  export class CreateParameterRequest implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CreateParameterRequest();
      CreateParameterRequest.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateParameterRequest) {
      _instance.intentName = _instance.intentName || '';
      _instance.parameter = _instance.parameter || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CreateParameterRequest,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.intentName = _reader.readString();
            break;
          case 2:
            _instance.parameter = new Intent.Parameter();
            _reader.readMessage(
              _instance.parameter,
              Intent.Parameter.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      CreateParameterRequest.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CreateParameterRequest,
      _writer: BinaryWriter
    ) {
      if (_instance.intentName) {
        _writer.writeString(1, _instance.intentName);
      }
      if (_instance.parameter) {
        _writer.writeMessage(
          2,
          _instance.parameter as any,
          Intent.Parameter.serializeBinaryToWriter
        );
      }
    }

    private _intentName: string;
    private _parameter?: Intent.Parameter;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateParameterRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateParameterRequest.AsObject>) {
      _value = _value || {};
      this.intentName = _value.intentName;
      this.parameter = _value.parameter
        ? new Intent.Parameter(_value.parameter)
        : undefined;
      CreateParameterRequest.refineValues(this);
    }
    get intentName(): string {
      return this._intentName;
    }
    set intentName(value: string) {
      this._intentName = value;
    }
    get parameter(): Intent.Parameter | undefined {
      return this._parameter;
    }
    set parameter(value: Intent.Parameter | undefined) {
      this._parameter = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      CreateParameterRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateParameterRequest.AsObject {
      return {
        intentName: this.intentName,
        parameter: this.parameter ? this.parameter.toObject() : undefined
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): CreateParameterRequest.AsProtobufJSON {
      return {
        intentName: this.intentName,
        parameter: this.parameter
          ? this.parameter.toProtobufJSON(options)
          : null
      };
    }
  }
  export module CreateParameterRequest {
    /**
     * Standard JavaScript object representation for CreateParameterRequest
     */
    export interface AsObject {
      intentName: string;
      parameter?: Intent.Parameter.AsObject;
    }

    /**
     * Protobuf JSON representation for CreateParameterRequest
     */
    export interface AsProtobufJSON {
      intentName: string;
      parameter: Intent.Parameter.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.BatchUpdateParametersRequest
 */
export class BatchUpdateParametersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchUpdateParametersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchUpdateParametersRequest();
    BatchUpdateParametersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchUpdateParametersRequest) {
    _instance.parameters = _instance.parameters || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchUpdateParametersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.Parameter();
          _reader.readMessage(
            messageInitializer1,
            Intent.Parameter.deserializeBinaryFromReader
          );
          (_instance.parameters = _instance.parameters || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchUpdateParametersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchUpdateParametersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parameters && _instance.parameters.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.parameters as any,
        Intent.Parameter.serializeBinaryToWriter
      );
    }
  }

  private _parameters?: Intent.Parameter[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchUpdateParametersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchUpdateParametersRequest.AsObject>
  ) {
    _value = _value || {};
    this.parameters = (_value.parameters || []).map(
      m => new Intent.Parameter(m)
    );
    BatchUpdateParametersRequest.refineValues(this);
  }
  get parameters(): Intent.Parameter[] | undefined {
    return this._parameters;
  }
  set parameters(value: Intent.Parameter[] | undefined) {
    this._parameters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchUpdateParametersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchUpdateParametersRequest.AsObject {
    return {
      parameters: (this.parameters || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchUpdateParametersRequest.AsProtobufJSON {
    return {
      parameters: (this.parameters || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module BatchUpdateParametersRequest {
  /**
   * Standard JavaScript object representation for BatchUpdateParametersRequest
   */
  export interface AsObject {
    parameters?: Intent.Parameter.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchUpdateParametersRequest
   */
  export interface AsProtobufJSON {
    parameters: Intent.Parameter.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.BatchGetParametersRequest
 */
export class BatchGetParametersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchGetParametersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchGetParametersRequest();
    BatchGetParametersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchGetParametersRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchGetParametersRequest,
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

    BatchGetParametersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchGetParametersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchGetParametersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchGetParametersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchGetParametersRequest.refineValues(this);
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
    BatchGetParametersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchGetParametersRequest.AsObject {
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
  ): BatchGetParametersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchGetParametersRequest {
  /**
   * Standard JavaScript object representation for BatchGetParametersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchGetParametersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersRequest
 */
export class BatchDeleteParametersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteParametersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteParametersRequest();
    BatchDeleteParametersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteParametersRequest) {
    _instance.names = _instance.names || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteParametersRequest,
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

    BatchDeleteParametersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteParametersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteParametersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteParametersRequest.AsObject>
  ) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    BatchDeleteParametersRequest.refineValues(this);
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
    BatchDeleteParametersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteParametersRequest.AsObject {
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
  ): BatchDeleteParametersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice()
    };
  }
}
export module BatchDeleteParametersRequest {
  /**
   * Standard JavaScript object representation for BatchDeleteParametersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for BatchDeleteParametersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersResponse
 */
export class BatchDeleteParametersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.BatchDeleteParametersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchDeleteParametersResponse();
    BatchDeleteParametersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchDeleteParametersResponse) {
    _instance.deleteStatuses = _instance.deleteStatuses || [];
    _instance.hasErrors = _instance.hasErrors || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchDeleteParametersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new BatchDeleteParametersResponse.DeleteParameterStatus();
          _reader.readMessage(
            messageInitializer1,
            BatchDeleteParametersResponse.DeleteParameterStatus
              .deserializeBinaryFromReader
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

    BatchDeleteParametersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchDeleteParametersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteStatuses as any,
        BatchDeleteParametersResponse.DeleteParameterStatus
          .serializeBinaryToWriter
      );
    }
    if (_instance.hasErrors) {
      _writer.writeBool(2, _instance.hasErrors);
    }
  }

  private _deleteStatuses?: BatchDeleteParametersResponse.DeleteParameterStatus[];
  private _hasErrors: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchDeleteParametersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<BatchDeleteParametersResponse.AsObject>
  ) {
    _value = _value || {};
    this.deleteStatuses = (_value.deleteStatuses || []).map(
      m => new BatchDeleteParametersResponse.DeleteParameterStatus(m)
    );
    this.hasErrors = _value.hasErrors;
    BatchDeleteParametersResponse.refineValues(this);
  }
  get deleteStatuses():
    | BatchDeleteParametersResponse.DeleteParameterStatus[]
    | undefined {
    return this._deleteStatuses;
  }
  set deleteStatuses(
    value: BatchDeleteParametersResponse.DeleteParameterStatus[] | undefined
  ) {
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
    BatchDeleteParametersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchDeleteParametersResponse.AsObject {
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
  ): BatchDeleteParametersResponse.AsProtobufJSON {
    return {
      deleteStatuses: (this.deleteStatuses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      hasErrors: this.hasErrors
    };
  }
}
export module BatchDeleteParametersResponse {
  /**
   * Standard JavaScript object representation for BatchDeleteParametersResponse
   */
  export interface AsObject {
    deleteStatuses?: BatchDeleteParametersResponse.DeleteParameterStatus.AsObject[];
    hasErrors: boolean;
  }

  /**
   * Protobuf JSON representation for BatchDeleteParametersResponse
   */
  export interface AsProtobufJSON {
    deleteStatuses:
      | BatchDeleteParametersResponse.DeleteParameterStatus.AsProtobufJSON[]
      | null;
    hasErrors: boolean;
  }

  /**
   * Message implementation for ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus
   */
  export class DeleteParameterStatus implements GrpcMessage {
    static id =
      'ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new DeleteParameterStatus();
      DeleteParameterStatus.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteParameterStatus) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: DeleteParameterStatus,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.successfullyDeleted = new googleProtobuf003.Empty();
            _reader.readMessage(
              _instance.successfullyDeleted,
              googleProtobuf003.Empty.deserializeBinaryFromReader
            );
            break;
          case 2:
            _instance.errorMessage = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      DeleteParameterStatus.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: DeleteParameterStatus,
      _writer: BinaryWriter
    ) {
      if (_instance.successfullyDeleted) {
        _writer.writeMessage(
          1,
          _instance.successfullyDeleted as any,
          googleProtobuf003.Empty.serializeBinaryToWriter
        );
      }
      if (_instance.errorMessage || _instance.errorMessage === '') {
        _writer.writeString(2, _instance.errorMessage);
      }
    }

    private _successfullyDeleted?: googleProtobuf003.Empty;
    private _errorMessage: string;

    private _deleteStatus: DeleteParameterStatus.DeleteStatusCase =
      DeleteParameterStatus.DeleteStatusCase.none;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteParameterStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteParameterStatus.AsObject>) {
      _value = _value || {};
      this.successfullyDeleted = _value.successfullyDeleted
        ? new googleProtobuf003.Empty(_value.successfullyDeleted)
        : undefined;
      this.errorMessage = _value.errorMessage;
      DeleteParameterStatus.refineValues(this);
    }
    get successfullyDeleted(): googleProtobuf003.Empty | undefined {
      return this._successfullyDeleted;
    }
    set successfullyDeleted(value: googleProtobuf003.Empty | undefined) {
      if (value !== undefined && value !== null) {
        this._errorMessage = undefined;
        this._deleteStatus =
          DeleteParameterStatus.DeleteStatusCase.successfullyDeleted;
      }
      this._successfullyDeleted = value;
    }
    get errorMessage(): string {
      return this._errorMessage;
    }
    set errorMessage(value: string) {
      if (value !== undefined && value !== null) {
        this._successfullyDeleted = undefined;
        this._deleteStatus =
          DeleteParameterStatus.DeleteStatusCase.errorMessage;
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
      DeleteParameterStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteParameterStatus.AsObject {
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
    ): DeleteParameterStatus.AsProtobufJSON {
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
  export module DeleteParameterStatus {
    /**
     * Standard JavaScript object representation for DeleteParameterStatus
     */
    export interface AsObject {
      successfullyDeleted?: googleProtobuf003.Empty.AsObject;
      errorMessage: string;
    }

    /**
     * Protobuf JSON representation for DeleteParameterStatus
     */
    export interface AsProtobufJSON {
      successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
      errorMessage: string | null;
    }
    export enum DeleteStatusCase {
      none = 0,
      successfullyDeleted = 1,
      errorMessage = 2
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListParametersRequest
 */
export class ListParametersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListParametersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListParametersRequest();
    ListParametersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListParametersRequest) {
    _instance.intentName = _instance.intentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListParametersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentName = _reader.readString();
          break;
        case 2:
          _instance.languageCode = _reader.readString();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListParametersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListParametersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.intentName) {
      _writer.writeString(1, _instance.intentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _intentName: string;
  private _languageCode: string;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListParametersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListParametersRequest.AsObject>) {
    _value = _value || {};
    this.intentName = _value.intentName;
    this.languageCode = _value.languageCode;
    this.pageToken = _value.pageToken;
    ListParametersRequest.refineValues(this);
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
    ListParametersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListParametersRequest.AsObject {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
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
  ): ListParametersRequest.AsProtobufJSON {
    return {
      intentName: this.intentName,
      languageCode: this.languageCode,
      pageToken: this.pageToken
    };
  }
}
export module ListParametersRequest {
  /**
   * Standard JavaScript object representation for ListParametersRequest
   */
  export interface AsObject {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListParametersRequest
   */
  export interface AsProtobufJSON {
    intentName: string;
    languageCode: string;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListParametersResponse
 */
export class ListParametersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListParametersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListParametersResponse();
    ListParametersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListParametersResponse) {
    _instance.parameters = _instance.parameters || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListParametersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Intent.Parameter();
          _reader.readMessage(
            messageInitializer1,
            Intent.Parameter.deserializeBinaryFromReader
          );
          (_instance.parameters = _instance.parameters || []).push(
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

    ListParametersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListParametersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parameters && _instance.parameters.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.parameters as any,
        Intent.Parameter.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _parameters?: Intent.Parameter[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListParametersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListParametersResponse.AsObject>) {
    _value = _value || {};
    this.parameters = (_value.parameters || []).map(
      m => new Intent.Parameter(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListParametersResponse.refineValues(this);
  }
  get parameters(): Intent.Parameter[] | undefined {
    return this._parameters;
  }
  set parameters(value: Intent.Parameter[] | undefined) {
    this._parameters = value;
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
    ListParametersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListParametersResponse.AsObject {
    return {
      parameters: (this.parameters || []).map(m => m.toObject()),
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
  ): ListParametersResponse.AsProtobufJSON {
    return {
      parameters: (this.parameters || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListParametersResponse {
  /**
   * Standard JavaScript object representation for ListParametersResponse
   */
  export interface AsObject {
    parameters?: Intent.Parameter.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListParametersResponse
   */
  export interface AsProtobufJSON {
    parameters: Intent.Parameter.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest
 */
export class ListTrainingPhrasesofIntentsWithEnrichmentRequest
  implements GrpcMessage {
  static id = 'ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTrainingPhrasesofIntentsWithEnrichmentRequest();
    ListTrainingPhrasesofIntentsWithEnrichmentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest
  ) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.intentIds = _instance.intentIds || [];
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
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
          (_instance.intentIds = _instance.intentIds || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListTrainingPhrasesofIntentsWithEnrichmentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.intentIds && _instance.intentIds.length) {
      _writer.writeRepeatedString(3, _instance.intentIds);
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _intentIds: string[];
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.intentIds = (_value.intentIds || []).slice();
    this.pageToken = _value.pageToken;
    ListTrainingPhrasesofIntentsWithEnrichmentRequest.refineValues(this);
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
  get intentIds(): string[] {
    return this._intentIds;
  }
  set intentIds(value: string[]) {
    this._intentIds = value;
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
    ListTrainingPhrasesofIntentsWithEnrichmentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentIds: (this.intentIds || []).slice(),
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
  ): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      intentIds: (this.intentIds || []).slice(),
      pageToken: this.pageToken
    };
  }
}
export module ListTrainingPhrasesofIntentsWithEnrichmentRequest {
  /**
   * Standard JavaScript object representation for ListTrainingPhrasesofIntentsWithEnrichmentRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    intentIds: string[];
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListTrainingPhrasesofIntentsWithEnrichmentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    intentIds: string[];
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse
 */
export class ListTrainingPhrasesofIntentsWithEnrichmentResponse
  implements GrpcMessage {
  static id = 'ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListTrainingPhrasesofIntentsWithEnrichmentResponse();
    ListTrainingPhrasesofIntentsWithEnrichmentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse
  ) {
    _instance.trainingPhrases = _instance.trainingPhrases || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.trainingPhrases = _instance.trainingPhrases || []).push(
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

    ListTrainingPhrasesofIntentsWithEnrichmentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
      _writer.writeRepeatedString(1, _instance.trainingPhrases);
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _trainingPhrases: string[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject
    >
  ) {
    _value = _value || {};
    this.trainingPhrases = (_value.trainingPhrases || []).slice();
    this.nextPageToken = _value.nextPageToken;
    ListTrainingPhrasesofIntentsWithEnrichmentResponse.refineValues(this);
  }
  get trainingPhrases(): string[] {
    return this._trainingPhrases;
  }
  set trainingPhrases(value: string[]) {
    this._trainingPhrases = value;
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
    ListTrainingPhrasesofIntentsWithEnrichmentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject {
    return {
      trainingPhrases: (this.trainingPhrases || []).slice(),
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
  ): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsProtobufJSON {
    return {
      trainingPhrases: (this.trainingPhrases || []).slice(),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListTrainingPhrasesofIntentsWithEnrichmentResponse {
  /**
   * Standard JavaScript object representation for ListTrainingPhrasesofIntentsWithEnrichmentResponse
   */
  export interface AsObject {
    trainingPhrases: string[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListTrainingPhrasesofIntentsWithEnrichmentResponse
   */
  export interface AsProtobufJSON {
    trainingPhrases: string[];
    nextPageToken: string;
  }
}
