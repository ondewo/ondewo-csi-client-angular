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
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.OperationMetadata
 */
export class OperationMetadata implements GrpcMessage {
  static id = 'ondewo.nlu.OperationMetadata';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OperationMetadata();
    OperationMetadata.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OperationMetadata) {
    _instance.status = _instance.status || 0;
    _instance.parentOperationName = _instance.parentOperationName || '';
    _instance.subOperationNames = _instance.subOperationNames || [];
    _instance.createTime = _instance.createTime || undefined;
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.isCancellationRequested =
      _instance.isCancellationRequested || false;
    _instance.cancelCommand = _instance.cancelCommand || '';
    _instance.userIdCreated = _instance.userIdCreated || '';
    _instance.userIdCancelled = _instance.userIdCancelled || '';
    _instance.projectParent = _instance.projectParent || '';
    _instance.operationType = _instance.operationType || 0;
    _instance.hostName = _instance.hostName || '';
    _instance.numReruns = _instance.numReruns || 0;
    _instance.maxNumReruns = _instance.maxNumReruns || 0;
    _instance.description = _instance.description || '';
    _instance.log = _instance.log || [];
    _instance.logLimit = _instance.logLimit || 0;
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
    _instance: OperationMetadata,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.parentOperationName = _reader.readString();
          break;
        case 3:
          (_instance.subOperationNames =
            _instance.subOperationNames || []).push(_reader.readString());
          break;
        case 4:
          _instance.createTime = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.createTime,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.startTime = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.endTime = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.isCancellationRequested = _reader.readBool();
          break;
        case 8:
          _instance.cancelCommand = _reader.readString();
          break;
        case 9:
          _instance.userIdCreated = _reader.readString();
          break;
        case 10:
          _instance.userIdCancelled = _reader.readString();
          break;
        case 11:
          _instance.projectParent = _reader.readString();
          break;
        case 12:
          _instance.operationType = _reader.readEnum();
          break;
        case 13:
          _instance.hostName = _reader.readString();
          break;
        case 14:
          _instance.numReruns = _reader.readInt32();
          break;
        case 15:
          _instance.maxNumReruns = _reader.readInt32();
          break;
        case 16:
          _instance.description = _reader.readString();
          break;
        case 17:
          (_instance.log = _instance.log || []).push(_reader.readString());
          break;
        case 18:
          _instance.logLimit = _reader.readInt32();
          break;
        case 19:
          _instance.createdAt = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.modifiedAt = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
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

    OperationMetadata.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OperationMetadata,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.parentOperationName) {
      _writer.writeString(2, _instance.parentOperationName);
    }
    if (_instance.subOperationNames && _instance.subOperationNames.length) {
      _writer.writeRepeatedString(3, _instance.subOperationNames);
    }
    if (_instance.createTime) {
      _writer.writeMessage(
        4,
        _instance.createTime as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        5,
        _instance.startTime as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        6,
        _instance.endTime as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.isCancellationRequested) {
      _writer.writeBool(7, _instance.isCancellationRequested);
    }
    if (_instance.cancelCommand) {
      _writer.writeString(8, _instance.cancelCommand);
    }
    if (_instance.userIdCreated) {
      _writer.writeString(9, _instance.userIdCreated);
    }
    if (_instance.userIdCancelled) {
      _writer.writeString(10, _instance.userIdCancelled);
    }
    if (_instance.projectParent) {
      _writer.writeString(11, _instance.projectParent);
    }
    if (_instance.operationType) {
      _writer.writeEnum(12, _instance.operationType);
    }
    if (_instance.hostName) {
      _writer.writeString(13, _instance.hostName);
    }
    if (_instance.numReruns) {
      _writer.writeInt32(14, _instance.numReruns);
    }
    if (_instance.maxNumReruns) {
      _writer.writeInt32(15, _instance.maxNumReruns);
    }
    if (_instance.description) {
      _writer.writeString(16, _instance.description);
    }
    if (_instance.log && _instance.log.length) {
      _writer.writeRepeatedString(17, _instance.log);
    }
    if (_instance.logLimit) {
      _writer.writeInt32(18, _instance.logLimit);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        19,
        _instance.createdAt as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        20,
        _instance.modifiedAt as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(21, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(22, _instance.modifiedBy);
    }
  }

  private _status: OperationMetadata.Status;
  private _parentOperationName: string;
  private _subOperationNames: string[];
  private _createTime?: googleProtobuf000.Timestamp;
  private _startTime?: googleProtobuf000.Timestamp;
  private _endTime?: googleProtobuf000.Timestamp;
  private _isCancellationRequested: boolean;
  private _cancelCommand: string;
  private _userIdCreated: string;
  private _userIdCancelled: string;
  private _projectParent: string;
  private _operationType: OperationMetadata.OperationType;
  private _hostName: string;
  private _numReruns: number;
  private _maxNumReruns: number;
  private _description: string;
  private _log: string[];
  private _logLimit: number;
  private _createdAt?: googleProtobuf000.Timestamp;
  private _modifiedAt?: googleProtobuf000.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OperationMetadata to deeply clone from
   */
  constructor(_value?: RecursivePartial<OperationMetadata.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    this.parentOperationName = _value.parentOperationName;
    this.subOperationNames = (_value.subOperationNames || []).slice();
    this.createTime = _value.createTime
      ? new googleProtobuf000.Timestamp(_value.createTime)
      : undefined;
    this.startTime = _value.startTime
      ? new googleProtobuf000.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf000.Timestamp(_value.endTime)
      : undefined;
    this.isCancellationRequested = _value.isCancellationRequested;
    this.cancelCommand = _value.cancelCommand;
    this.userIdCreated = _value.userIdCreated;
    this.userIdCancelled = _value.userIdCancelled;
    this.projectParent = _value.projectParent;
    this.operationType = _value.operationType;
    this.hostName = _value.hostName;
    this.numReruns = _value.numReruns;
    this.maxNumReruns = _value.maxNumReruns;
    this.description = _value.description;
    this.log = (_value.log || []).slice();
    this.logLimit = _value.logLimit;
    this.createdAt = _value.createdAt
      ? new googleProtobuf000.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf000.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    OperationMetadata.refineValues(this);
  }
  get status(): OperationMetadata.Status {
    return this._status;
  }
  set status(value: OperationMetadata.Status) {
    this._status = value;
  }
  get parentOperationName(): string {
    return this._parentOperationName;
  }
  set parentOperationName(value: string) {
    this._parentOperationName = value;
  }
  get subOperationNames(): string[] {
    return this._subOperationNames;
  }
  set subOperationNames(value: string[]) {
    this._subOperationNames = value;
  }
  get createTime(): googleProtobuf000.Timestamp | undefined {
    return this._createTime;
  }
  set createTime(value: googleProtobuf000.Timestamp | undefined) {
    this._createTime = value;
  }
  get startTime(): googleProtobuf000.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf000.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf000.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf000.Timestamp | undefined) {
    this._endTime = value;
  }
  get isCancellationRequested(): boolean {
    return this._isCancellationRequested;
  }
  set isCancellationRequested(value: boolean) {
    this._isCancellationRequested = value;
  }
  get cancelCommand(): string {
    return this._cancelCommand;
  }
  set cancelCommand(value: string) {
    this._cancelCommand = value;
  }
  get userIdCreated(): string {
    return this._userIdCreated;
  }
  set userIdCreated(value: string) {
    this._userIdCreated = value;
  }
  get userIdCancelled(): string {
    return this._userIdCancelled;
  }
  set userIdCancelled(value: string) {
    this._userIdCancelled = value;
  }
  get projectParent(): string {
    return this._projectParent;
  }
  set projectParent(value: string) {
    this._projectParent = value;
  }
  get operationType(): OperationMetadata.OperationType {
    return this._operationType;
  }
  set operationType(value: OperationMetadata.OperationType) {
    this._operationType = value;
  }
  get hostName(): string {
    return this._hostName;
  }
  set hostName(value: string) {
    this._hostName = value;
  }
  get numReruns(): number {
    return this._numReruns;
  }
  set numReruns(value: number) {
    this._numReruns = value;
  }
  get maxNumReruns(): number {
    return this._maxNumReruns;
  }
  set maxNumReruns(value: number) {
    this._maxNumReruns = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get log(): string[] {
    return this._log;
  }
  set log(value: string[]) {
    this._log = value;
  }
  get logLimit(): number {
    return this._logLimit;
  }
  set logLimit(value: number) {
    this._logLimit = value;
  }
  get createdAt(): googleProtobuf000.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf000.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf000.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf000.Timestamp | undefined) {
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
    OperationMetadata.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OperationMetadata.AsObject {
    return {
      status: this.status,
      parentOperationName: this.parentOperationName,
      subOperationNames: (this.subOperationNames || []).slice(),
      createTime: this.createTime ? this.createTime.toObject() : undefined,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      isCancellationRequested: this.isCancellationRequested,
      cancelCommand: this.cancelCommand,
      userIdCreated: this.userIdCreated,
      userIdCancelled: this.userIdCancelled,
      projectParent: this.projectParent,
      operationType: this.operationType,
      hostName: this.hostName,
      numReruns: this.numReruns,
      maxNumReruns: this.maxNumReruns,
      description: this.description,
      log: (this.log || []).slice(),
      logLimit: this.logLimit,
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
  ): OperationMetadata.AsProtobufJSON {
    return {
      status:
        OperationMetadata.Status[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      parentOperationName: this.parentOperationName,
      subOperationNames: (this.subOperationNames || []).slice(),
      createTime: this.createTime
        ? this.createTime.toProtobufJSON(options)
        : null,
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      isCancellationRequested: this.isCancellationRequested,
      cancelCommand: this.cancelCommand,
      userIdCreated: this.userIdCreated,
      userIdCancelled: this.userIdCancelled,
      projectParent: this.projectParent,
      operationType:
        OperationMetadata.OperationType[
          this.operationType === null || this.operationType === undefined
            ? 0
            : this.operationType
        ],
      hostName: this.hostName,
      numReruns: this.numReruns,
      maxNumReruns: this.maxNumReruns,
      description: this.description,
      log: (this.log || []).slice(),
      logLimit: this.logLimit,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module OperationMetadata {
  /**
   * Standard JavaScript object representation for OperationMetadata
   */
  export interface AsObject {
    status: OperationMetadata.Status;
    parentOperationName: string;
    subOperationNames: string[];
    createTime?: googleProtobuf000.Timestamp.AsObject;
    startTime?: googleProtobuf000.Timestamp.AsObject;
    endTime?: googleProtobuf000.Timestamp.AsObject;
    isCancellationRequested: boolean;
    cancelCommand: string;
    userIdCreated: string;
    userIdCancelled: string;
    projectParent: string;
    operationType: OperationMetadata.OperationType;
    hostName: string;
    numReruns: number;
    maxNumReruns: number;
    description: string;
    log: string[];
    logLimit: number;
    createdAt?: googleProtobuf000.Timestamp.AsObject;
    modifiedAt?: googleProtobuf000.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for OperationMetadata
   */
  export interface AsProtobufJSON {
    status: string;
    parentOperationName: string;
    subOperationNames: string[];
    createTime: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    startTime: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    isCancellationRequested: boolean;
    cancelCommand: string;
    userIdCreated: string;
    userIdCancelled: string;
    projectParent: string;
    operationType: string;
    hostName: string;
    numReruns: number;
    maxNumReruns: number;
    description: string;
    log: string[];
    logLimit: number;
    createdAt: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
  export enum Status {
    STATUS_UNSPECIFIED = 0,
    NOT_STARTED = 1,
    IN_PROGRESS = 2,
    DONE = 3,
    CANCELLED = 4,
    FAILED = 5
  }
  export enum OperationType {
    OPERATION_TYPE_UNSPECIFIED = 0,
    CREATE_AGENT = 1,
    IMPORT_AGENT = 2,
    EXPORT_AGENT = 3,
    DELETE_AGENT = 4,
    RESTORE_AGENT = 5,
    BUILD_AGENT_CACHE = 6,
    TRAIN_AGENT = 7,
    EXPORT_BENCHMARK_AGENT = 8,
    INDEX_AGENT = 9
  }
}
