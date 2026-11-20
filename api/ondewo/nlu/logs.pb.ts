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
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/operation-metadata.pb';
export enum CaiLogSource {
  CAI_LOG_SOURCE_UNSPECIFIED = 0,
  CAI_LOG_SOURCE_SERVER = 1,
  CAI_LOG_SOURCE_REMOTE_OPERATION_CONTAINER = 2,
  CAI_LOG_SOURCE_HELPER_CONTAINER = 3
}
export enum CaiLogStreamChannel {
  CAI_LOG_STREAM_CHANNEL_UNSPECIFIED = 0,
  CAI_LOG_STREAM_CHANNEL_STDOUT = 1,
  CAI_LOG_STREAM_CHANNEL_STDERR = 2
}
export enum CaiLogCaptureState {
  CAI_LOG_CAPTURE_STATE_UNSPECIFIED = 0,
  CAI_LOG_CAPTURE_STATE_CAPTURING = 1,
  CAI_LOG_CAPTURE_STATE_STOPPED = 2,
  CAI_LOG_CAPTURE_STATE_FAILED = 3,
  CAI_LOG_CAPTURE_STATE_DETACHED = 4
}
export enum CaiLogFilterField {
  CAI_LOG_FILTER_FIELD_UNSPECIFIED = 0,
  CAI_LOG_FILTER_FIELD_TEXT = 1,
  CAI_LOG_FILTER_FIELD_REGEX = 2,
  CAI_LOG_FILTER_FIELD_LOG_SOURCES = 3,
  CAI_LOG_FILTER_FIELD_EMITTER_PREFIXES = 4,
  CAI_LOG_FILTER_FIELD_THREAD_NAMES = 5,
  CAI_LOG_FILTER_FIELD_PROCESS_NAMES = 6
}
export enum CaiLogStreamEndReason {
  CAI_LOG_STREAM_END_REASON_UNSPECIFIED = 0,
  CAI_LOG_STREAM_END_REASON_ALL_CAPTURES_TERMINATED = 1,
  CAI_LOG_STREAM_END_REASON_MAX_DURATION = 2,
  CAI_LOG_STREAM_END_REASON_SERVER_SHUTDOWN = 3,
  CAI_LOG_STREAM_END_REASON_PERMISSION_REVOKED = 4,
  CAI_LOG_STREAM_END_REASON_CREDENTIALS_EXPIRED = 5
}
export enum CaiLogExportFormat {
  CAI_LOG_EXPORT_FORMAT_UNSPECIFIED = 0,
  CAI_LOG_EXPORT_FORMAT_TEXT = 1,
  CAI_LOG_EXPORT_FORMAT_NDJSON = 2,
  CAI_LOG_EXPORT_FORMAT_CSV = 3
}
/**
 * Message implementation for ondewo.nlu.CaiLogEntry
 */
export class CaiLogEntry implements GrpcMessage {
  static id = 'ondewo.nlu.CaiLogEntry';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CaiLogEntry();
    CaiLogEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CaiLogEntry) {
    _instance.seq = _instance.seq || '0';
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.timestampIsExact = _instance.timestampIsExact || false;
    _instance.level = _instance.level || 0;
    _instance.message = _instance.message || '';
    _instance.logSource = _instance.logSource || 0;
    _instance.channel = _instance.channel || 0;
    _instance.emitter = _instance.emitter || '';
    _instance.threadName = _instance.threadName || '';
    _instance.processName = _instance.processName || '';
    _instance.logStream = _instance.logStream || '';
    _instance.operationName = _instance.operationName || '';
    _instance.projectParent = _instance.projectParent || '';
    _instance.containerId = _instance.containerId || '';
    _instance.containerName = _instance.containerName || '';
    _instance.replicaId = _instance.replicaId || '';
    _instance.traceId = _instance.traceId || '';
    _instance.physicalLineCount = _instance.physicalLineCount || 0;
    _instance.operationType = _instance.operationType || 0;
    _instance.phase = _instance.phase || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CaiLogEntry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.seq = _reader.readInt64String();
          break;
        case 2:
          _instance.timestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.timestampIsExact = _reader.readBool();
          break;
        case 4:
          _instance.level = _reader.readEnum();
          break;
        case 5:
          _instance.message = _reader.readString();
          break;
        case 6:
          _instance.logSource = _reader.readEnum();
          break;
        case 7:
          _instance.channel = _reader.readEnum();
          break;
        case 8:
          _instance.emitter = _reader.readString();
          break;
        case 9:
          _instance.threadName = _reader.readString();
          break;
        case 10:
          _instance.processName = _reader.readString();
          break;
        case 11:
          _instance.logStream = _reader.readString();
          break;
        case 12:
          _instance.operationName = _reader.readString();
          break;
        case 13:
          _instance.projectParent = _reader.readString();
          break;
        case 14:
          _instance.containerId = _reader.readString();
          break;
        case 15:
          _instance.containerName = _reader.readString();
          break;
        case 16:
          _instance.replicaId = _reader.readString();
          break;
        case 17:
          _instance.traceId = _reader.readString();
          break;
        case 18:
          _instance.physicalLineCount = _reader.readInt32();
          break;
        case 19:
          _instance.operationType = _reader.readEnum();
          break;
        case 20:
          _instance.phase = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CaiLogEntry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CaiLogEntry,
    _writer: BinaryWriter
  ) {
    if (_instance.seq) {
      _writer.writeInt64String(1, _instance.seq);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        2,
        _instance.timestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.timestampIsExact) {
      _writer.writeBool(3, _instance.timestampIsExact);
    }
    if (_instance.level) {
      _writer.writeEnum(4, _instance.level);
    }
    if (_instance.message) {
      _writer.writeString(5, _instance.message);
    }
    if (_instance.logSource) {
      _writer.writeEnum(6, _instance.logSource);
    }
    if (_instance.channel) {
      _writer.writeEnum(7, _instance.channel);
    }
    if (_instance.emitter) {
      _writer.writeString(8, _instance.emitter);
    }
    if (_instance.threadName) {
      _writer.writeString(9, _instance.threadName);
    }
    if (_instance.processName) {
      _writer.writeString(10, _instance.processName);
    }
    if (_instance.logStream) {
      _writer.writeString(11, _instance.logStream);
    }
    if (_instance.operationName) {
      _writer.writeString(12, _instance.operationName);
    }
    if (_instance.projectParent) {
      _writer.writeString(13, _instance.projectParent);
    }
    if (_instance.containerId) {
      _writer.writeString(14, _instance.containerId);
    }
    if (_instance.containerName) {
      _writer.writeString(15, _instance.containerName);
    }
    if (_instance.replicaId) {
      _writer.writeString(16, _instance.replicaId);
    }
    if (_instance.traceId) {
      _writer.writeString(17, _instance.traceId);
    }
    if (_instance.physicalLineCount) {
      _writer.writeInt32(18, _instance.physicalLineCount);
    }
    if (_instance.operationType) {
      _writer.writeEnum(19, _instance.operationType);
    }
    if (_instance.phase) {
      _writer.writeString(20, _instance.phase);
    }
  }

  private _seq: string;
  private _timestamp?: googleProtobuf002.Timestamp;
  private _timestampIsExact: boolean;
  private _level: ondewoNlu003.LogSeverity;
  private _message: string;
  private _logSource: CaiLogSource;
  private _channel: CaiLogStreamChannel;
  private _emitter: string;
  private _threadName: string;
  private _processName: string;
  private _logStream: string;
  private _operationName: string;
  private _projectParent: string;
  private _containerId: string;
  private _containerName: string;
  private _replicaId: string;
  private _traceId: string;
  private _physicalLineCount: number;
  private _operationType: ondewoNlu004.OperationMetadata.OperationType;
  private _phase: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CaiLogEntry to deeply clone from
   */
  constructor(_value?: RecursivePartial<CaiLogEntry.AsObject>) {
    _value = _value || {};
    this.seq = _value.seq;
    this.timestamp = _value.timestamp
      ? new googleProtobuf002.Timestamp(_value.timestamp)
      : undefined;
    this.timestampIsExact = _value.timestampIsExact;
    this.level = _value.level;
    this.message = _value.message;
    this.logSource = _value.logSource;
    this.channel = _value.channel;
    this.emitter = _value.emitter;
    this.threadName = _value.threadName;
    this.processName = _value.processName;
    this.logStream = _value.logStream;
    this.operationName = _value.operationName;
    this.projectParent = _value.projectParent;
    this.containerId = _value.containerId;
    this.containerName = _value.containerName;
    this.replicaId = _value.replicaId;
    this.traceId = _value.traceId;
    this.physicalLineCount = _value.physicalLineCount;
    this.operationType = _value.operationType;
    this.phase = _value.phase;
    CaiLogEntry.refineValues(this);
  }
  get seq(): string {
    return this._seq;
  }
  set seq(value: string) {
    this._seq = value;
  }
  get timestamp(): googleProtobuf002.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf002.Timestamp | undefined) {
    this._timestamp = value;
  }
  get timestampIsExact(): boolean {
    return this._timestampIsExact;
  }
  set timestampIsExact(value: boolean) {
    this._timestampIsExact = value;
  }
  get level(): ondewoNlu003.LogSeverity {
    return this._level;
  }
  set level(value: ondewoNlu003.LogSeverity) {
    this._level = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }
  get logSource(): CaiLogSource {
    return this._logSource;
  }
  set logSource(value: CaiLogSource) {
    this._logSource = value;
  }
  get channel(): CaiLogStreamChannel {
    return this._channel;
  }
  set channel(value: CaiLogStreamChannel) {
    this._channel = value;
  }
  get emitter(): string {
    return this._emitter;
  }
  set emitter(value: string) {
    this._emitter = value;
  }
  get threadName(): string {
    return this._threadName;
  }
  set threadName(value: string) {
    this._threadName = value;
  }
  get processName(): string {
    return this._processName;
  }
  set processName(value: string) {
    this._processName = value;
  }
  get logStream(): string {
    return this._logStream;
  }
  set logStream(value: string) {
    this._logStream = value;
  }
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get projectParent(): string {
    return this._projectParent;
  }
  set projectParent(value: string) {
    this._projectParent = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get replicaId(): string {
    return this._replicaId;
  }
  set replicaId(value: string) {
    this._replicaId = value;
  }
  get traceId(): string {
    return this._traceId;
  }
  set traceId(value: string) {
    this._traceId = value;
  }
  get physicalLineCount(): number {
    return this._physicalLineCount;
  }
  set physicalLineCount(value: number) {
    this._physicalLineCount = value;
  }
  get operationType(): ondewoNlu004.OperationMetadata.OperationType {
    return this._operationType;
  }
  set operationType(value: ondewoNlu004.OperationMetadata.OperationType) {
    this._operationType = value;
  }
  get phase(): string {
    return this._phase;
  }
  set phase(value: string) {
    this._phase = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CaiLogEntry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CaiLogEntry.AsObject {
    return {
      seq: this.seq,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      timestampIsExact: this.timestampIsExact,
      level: this.level,
      message: this.message,
      logSource: this.logSource,
      channel: this.channel,
      emitter: this.emitter,
      threadName: this.threadName,
      processName: this.processName,
      logStream: this.logStream,
      operationName: this.operationName,
      projectParent: this.projectParent,
      containerId: this.containerId,
      containerName: this.containerName,
      replicaId: this.replicaId,
      traceId: this.traceId,
      physicalLineCount: this.physicalLineCount,
      operationType: this.operationType,
      phase: this.phase
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CaiLogEntry.AsProtobufJSON {
    return {
      seq: this.seq,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      timestampIsExact: this.timestampIsExact,
      level:
        ondewoNlu003.LogSeverity[
          this.level === null || this.level === undefined ? 0 : this.level
        ],
      message: this.message,
      logSource:
        CaiLogSource[
          this.logSource === null || this.logSource === undefined
            ? 0
            : this.logSource
        ],
      channel:
        CaiLogStreamChannel[
          this.channel === null || this.channel === undefined ? 0 : this.channel
        ],
      emitter: this.emitter,
      threadName: this.threadName,
      processName: this.processName,
      logStream: this.logStream,
      operationName: this.operationName,
      projectParent: this.projectParent,
      containerId: this.containerId,
      containerName: this.containerName,
      replicaId: this.replicaId,
      traceId: this.traceId,
      physicalLineCount: this.physicalLineCount,
      operationType:
        ondewoNlu004.OperationMetadata.OperationType[
          this.operationType === null || this.operationType === undefined
            ? 0
            : this.operationType
        ],
      phase: this.phase
    };
  }
}
export module CaiLogEntry {
  /**
   * Standard JavaScript object representation for CaiLogEntry
   */
  export interface AsObject {
    seq: string;
    timestamp?: googleProtobuf002.Timestamp.AsObject;
    timestampIsExact: boolean;
    level: ondewoNlu003.LogSeverity;
    message: string;
    logSource: CaiLogSource;
    channel: CaiLogStreamChannel;
    emitter: string;
    threadName: string;
    processName: string;
    logStream: string;
    operationName: string;
    projectParent: string;
    containerId: string;
    containerName: string;
    replicaId: string;
    traceId: string;
    physicalLineCount: number;
    operationType: ondewoNlu004.OperationMetadata.OperationType;
    phase: string;
  }

  /**
   * Protobuf JSON representation for CaiLogEntry
   */
  export interface AsProtobufJSON {
    seq: string;
    timestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    timestampIsExact: boolean;
    level: string;
    message: string;
    logSource: string;
    channel: string;
    emitter: string;
    threadName: string;
    processName: string;
    logStream: string;
    operationName: string;
    projectParent: string;
    containerId: string;
    containerName: string;
    replicaId: string;
    traceId: string;
    physicalLineCount: number;
    operationType: string;
    phase: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CaiLogFilter
 */
export class CaiLogFilter implements GrpcMessage {
  static id = 'ondewo.nlu.CaiLogFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CaiLogFilter();
    CaiLogFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CaiLogFilter) {
    _instance.logStreamNames = _instance.logStreamNames || [];
    _instance.operationNames = _instance.operationNames || [];
    _instance.includeSubOperations = _instance.includeSubOperations || false;
    _instance.projectParents = _instance.projectParents || [];
    _instance.containerIds = _instance.containerIds || [];
    _instance.containerNames = _instance.containerNames || [];
    _instance.replicaIds = _instance.replicaIds || [];
    _instance.operationTypes = _instance.operationTypes || [];
    _instance.phases = _instance.phases || [];
    _instance.logSources = _instance.logSources || [];
    _instance.channels = _instance.channels || [];
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.logLevels = _instance.logLevels || [];
    _instance.emitterPrefixes = _instance.emitterPrefixes || [];
    _instance.threadNames = _instance.threadNames || [];
    _instance.processNames = _instance.processNames || [];
    _instance.traceIds = _instance.traceIds || [];
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CaiLogFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.logStreamNames = _instance.logStreamNames || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.operationNames = _instance.operationNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.includeSubOperations = _reader.readBool();
          break;
        case 4:
          (_instance.projectParents = _instance.projectParents || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.containerIds = _instance.containerIds || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.containerNames = _instance.containerNames || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.replicaIds = _instance.replicaIds || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.operationTypes = _instance.operationTypes || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        case 9:
          (_instance.phases = _instance.phases || []).push(
            _reader.readString()
          );
          break;
        case 20:
          (_instance.logSources = _instance.logSources || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        case 21:
          (_instance.channels = _instance.channels || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        case 22:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 23:
          (_instance.logLevels = _instance.logLevels || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        case 24:
          _instance.includeUnleveledLines = _reader.readBool();
          break;
        case 25:
          _instance.text = _reader.readString();
          break;
        case 26:
          _instance.regex = _reader.readString();
          break;
        case 27:
          (_instance.emitterPrefixes = _instance.emitterPrefixes || []).push(
            _reader.readString()
          );
          break;
        case 28:
          (_instance.threadNames = _instance.threadNames || []).push(
            _reader.readString()
          );
          break;
        case 29:
          (_instance.processNames = _instance.processNames || []).push(
            _reader.readString()
          );
          break;
        case 30:
          (_instance.traceIds = _instance.traceIds || []).push(
            _reader.readString()
          );
          break;
        case 31:
          _instance.startTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 32:
          _instance.endTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CaiLogFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CaiLogFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.logStreamNames && _instance.logStreamNames.length) {
      _writer.writeRepeatedString(1, _instance.logStreamNames);
    }
    if (_instance.operationNames && _instance.operationNames.length) {
      _writer.writeRepeatedString(2, _instance.operationNames);
    }
    if (_instance.includeSubOperations) {
      _writer.writeBool(3, _instance.includeSubOperations);
    }
    if (_instance.projectParents && _instance.projectParents.length) {
      _writer.writeRepeatedString(4, _instance.projectParents);
    }
    if (_instance.containerIds && _instance.containerIds.length) {
      _writer.writeRepeatedString(5, _instance.containerIds);
    }
    if (_instance.containerNames && _instance.containerNames.length) {
      _writer.writeRepeatedString(6, _instance.containerNames);
    }
    if (_instance.replicaIds && _instance.replicaIds.length) {
      _writer.writeRepeatedString(7, _instance.replicaIds);
    }
    if (_instance.operationTypes && _instance.operationTypes.length) {
      _writer.writePackedEnum(8, _instance.operationTypes);
    }
    if (_instance.phases && _instance.phases.length) {
      _writer.writeRepeatedString(9, _instance.phases);
    }
    if (_instance.logSources && _instance.logSources.length) {
      _writer.writePackedEnum(20, _instance.logSources);
    }
    if (_instance.channels && _instance.channels.length) {
      _writer.writePackedEnum(21, _instance.channels);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(22, _instance.minLogLevel);
    }
    if (_instance.logLevels && _instance.logLevels.length) {
      _writer.writePackedEnum(23, _instance.logLevels);
    }
    if (
      _instance.includeUnleveledLines !== undefined &&
      _instance.includeUnleveledLines !== null
    ) {
      _writer.writeBool(24, _instance.includeUnleveledLines);
    }
    if (_instance.text !== undefined && _instance.text !== null) {
      _writer.writeString(25, _instance.text);
    }
    if (_instance.regex !== undefined && _instance.regex !== null) {
      _writer.writeString(26, _instance.regex);
    }
    if (_instance.emitterPrefixes && _instance.emitterPrefixes.length) {
      _writer.writeRepeatedString(27, _instance.emitterPrefixes);
    }
    if (_instance.threadNames && _instance.threadNames.length) {
      _writer.writeRepeatedString(28, _instance.threadNames);
    }
    if (_instance.processNames && _instance.processNames.length) {
      _writer.writeRepeatedString(29, _instance.processNames);
    }
    if (_instance.traceIds && _instance.traceIds.length) {
      _writer.writeRepeatedString(30, _instance.traceIds);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        31,
        _instance.startTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        32,
        _instance.endTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _logStreamNames: string[];
  private _operationNames: string[];
  private _includeSubOperations: boolean;
  private _projectParents: string[];
  private _containerIds: string[];
  private _containerNames: string[];
  private _replicaIds: string[];
  private _operationTypes: ondewoNlu004.OperationMetadata.OperationType[];
  private _phases: string[];
  private _logSources: CaiLogSource[];
  private _channels: CaiLogStreamChannel[];
  private _minLogLevel: ondewoNlu003.LogSeverity;
  private _logLevels: ondewoNlu003.LogSeverity[];
  private _includeUnleveledLines: boolean;
  private _text: string;
  private _regex: string;
  private _emitterPrefixes: string[];
  private _threadNames: string[];
  private _processNames: string[];
  private _traceIds: string[];
  private _startTime?: googleProtobuf002.Timestamp;
  private _endTime?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CaiLogFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CaiLogFilter.AsObject>) {
    _value = _value || {};
    this.logStreamNames = (_value.logStreamNames || []).slice();
    this.operationNames = (_value.operationNames || []).slice();
    this.includeSubOperations = _value.includeSubOperations;
    this.projectParents = (_value.projectParents || []).slice();
    this.containerIds = (_value.containerIds || []).slice();
    this.containerNames = (_value.containerNames || []).slice();
    this.replicaIds = (_value.replicaIds || []).slice();
    this.operationTypes = (_value.operationTypes || []).slice();
    this.phases = (_value.phases || []).slice();
    this.logSources = (_value.logSources || []).slice();
    this.channels = (_value.channels || []).slice();
    this.minLogLevel = _value.minLogLevel;
    this.logLevels = (_value.logLevels || []).slice();
    this.includeUnleveledLines = _value.includeUnleveledLines;
    this.text = _value.text;
    this.regex = _value.regex;
    this.emitterPrefixes = (_value.emitterPrefixes || []).slice();
    this.threadNames = (_value.threadNames || []).slice();
    this.processNames = (_value.processNames || []).slice();
    this.traceIds = (_value.traceIds || []).slice();
    this.startTime = _value.startTime
      ? new googleProtobuf002.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf002.Timestamp(_value.endTime)
      : undefined;
    CaiLogFilter.refineValues(this);
  }
  get logStreamNames(): string[] {
    return this._logStreamNames;
  }
  set logStreamNames(value: string[]) {
    this._logStreamNames = value;
  }
  get operationNames(): string[] {
    return this._operationNames;
  }
  set operationNames(value: string[]) {
    this._operationNames = value;
  }
  get includeSubOperations(): boolean {
    return this._includeSubOperations;
  }
  set includeSubOperations(value: boolean) {
    this._includeSubOperations = value;
  }
  get projectParents(): string[] {
    return this._projectParents;
  }
  set projectParents(value: string[]) {
    this._projectParents = value;
  }
  get containerIds(): string[] {
    return this._containerIds;
  }
  set containerIds(value: string[]) {
    this._containerIds = value;
  }
  get containerNames(): string[] {
    return this._containerNames;
  }
  set containerNames(value: string[]) {
    this._containerNames = value;
  }
  get replicaIds(): string[] {
    return this._replicaIds;
  }
  set replicaIds(value: string[]) {
    this._replicaIds = value;
  }
  get operationTypes(): ondewoNlu004.OperationMetadata.OperationType[] {
    return this._operationTypes;
  }
  set operationTypes(value: ondewoNlu004.OperationMetadata.OperationType[]) {
    this._operationTypes = value;
  }
  get phases(): string[] {
    return this._phases;
  }
  set phases(value: string[]) {
    this._phases = value;
  }
  get logSources(): CaiLogSource[] {
    return this._logSources;
  }
  set logSources(value: CaiLogSource[]) {
    this._logSources = value;
  }
  get channels(): CaiLogStreamChannel[] {
    return this._channels;
  }
  set channels(value: CaiLogStreamChannel[]) {
    this._channels = value;
  }
  get minLogLevel(): ondewoNlu003.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu003.LogSeverity) {
    this._minLogLevel = value;
  }
  get logLevels(): ondewoNlu003.LogSeverity[] {
    return this._logLevels;
  }
  set logLevels(value: ondewoNlu003.LogSeverity[]) {
    this._logLevels = value;
  }
  get includeUnleveledLines(): boolean {
    return this._includeUnleveledLines;
  }
  set includeUnleveledLines(value: boolean) {
    this._includeUnleveledLines = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get regex(): string {
    return this._regex;
  }
  set regex(value: string) {
    this._regex = value;
  }
  get emitterPrefixes(): string[] {
    return this._emitterPrefixes;
  }
  set emitterPrefixes(value: string[]) {
    this._emitterPrefixes = value;
  }
  get threadNames(): string[] {
    return this._threadNames;
  }
  set threadNames(value: string[]) {
    this._threadNames = value;
  }
  get processNames(): string[] {
    return this._processNames;
  }
  set processNames(value: string[]) {
    this._processNames = value;
  }
  get traceIds(): string[] {
    return this._traceIds;
  }
  set traceIds(value: string[]) {
    this._traceIds = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CaiLogFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CaiLogFilter.AsObject {
    return {
      logStreamNames: (this.logStreamNames || []).slice(),
      operationNames: (this.operationNames || []).slice(),
      includeSubOperations: this.includeSubOperations,
      projectParents: (this.projectParents || []).slice(),
      containerIds: (this.containerIds || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      replicaIds: (this.replicaIds || []).slice(),
      operationTypes: (this.operationTypes || []).slice(),
      phases: (this.phases || []).slice(),
      logSources: (this.logSources || []).slice(),
      channels: (this.channels || []).slice(),
      minLogLevel: this.minLogLevel,
      logLevels: (this.logLevels || []).slice(),
      includeUnleveledLines: this.includeUnleveledLines,
      text: this.text,
      regex: this.regex,
      emitterPrefixes: (this.emitterPrefixes || []).slice(),
      threadNames: (this.threadNames || []).slice(),
      processNames: (this.processNames || []).slice(),
      traceIds: (this.traceIds || []).slice(),
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CaiLogFilter.AsProtobufJSON {
    return {
      logStreamNames: (this.logStreamNames || []).slice(),
      operationNames: (this.operationNames || []).slice(),
      includeSubOperations: this.includeSubOperations,
      projectParents: (this.projectParents || []).slice(),
      containerIds: (this.containerIds || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      replicaIds: (this.replicaIds || []).slice(),
      operationTypes: (this.operationTypes || []).map(
        v => ondewoNlu004.OperationMetadata.OperationType[v]
      ),
      phases: (this.phases || []).slice(),
      logSources: (this.logSources || []).map(v => CaiLogSource[v]),
      channels: (this.channels || []).map(v => CaiLogStreamChannel[v]),
      minLogLevel:
        ondewoNlu003.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      logLevels: (this.logLevels || []).map(v => ondewoNlu003.LogSeverity[v]),
      includeUnleveledLines: this.includeUnleveledLines,
      text: this.text,
      regex: this.regex,
      emitterPrefixes: (this.emitterPrefixes || []).slice(),
      threadNames: (this.threadNames || []).slice(),
      processNames: (this.processNames || []).slice(),
      traceIds: (this.traceIds || []).slice(),
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null
    };
  }
}
export module CaiLogFilter {
  /**
   * Standard JavaScript object representation for CaiLogFilter
   */
  export interface AsObject {
    logStreamNames: string[];
    operationNames: string[];
    includeSubOperations: boolean;
    projectParents: string[];
    containerIds: string[];
    containerNames: string[];
    replicaIds: string[];
    operationTypes: ondewoNlu004.OperationMetadata.OperationType[];
    phases: string[];
    logSources: CaiLogSource[];
    channels: CaiLogStreamChannel[];
    minLogLevel: ondewoNlu003.LogSeverity;
    logLevels: ondewoNlu003.LogSeverity[];
    includeUnleveledLines: boolean;
    text: string;
    regex: string;
    emitterPrefixes: string[];
    threadNames: string[];
    processNames: string[];
    traceIds: string[];
    startTime?: googleProtobuf002.Timestamp.AsObject;
    endTime?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for CaiLogFilter
   */
  export interface AsProtobufJSON {
    logStreamNames: string[];
    operationNames: string[];
    includeSubOperations: boolean;
    projectParents: string[];
    containerIds: string[];
    containerNames: string[];
    replicaIds: string[];
    operationTypes: string[];
    phases: string[];
    logSources: string[];
    channels: string[];
    minLogLevel: string;
    logLevels: string[];
    includeUnleveledLines: boolean;
    text: string;
    regex: string;
    emitterPrefixes: string[];
    threadNames: string[];
    processNames: string[];
    traceIds: string[];
    startTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CaiLogStream
 */
export class CaiLogStream implements GrpcMessage {
  static id = 'ondewo.nlu.CaiLogStream';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CaiLogStream();
    CaiLogStream.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CaiLogStream) {
    _instance.name = _instance.name || '';
    _instance.logSource = _instance.logSource || 0;
    _instance.channel = _instance.channel || 0;
    _instance.projectParent = _instance.projectParent || '';
    _instance.operationName = _instance.operationName || '';
    _instance.containerId = _instance.containerId || '';
    _instance.containerName = _instance.containerName || '';
    _instance.host = _instance.host || '';
    _instance.replicaId = _instance.replicaId || '';
    _instance.processName = _instance.processName || '';
    _instance.phase = _instance.phase || '';
    _instance.captureState = _instance.captureState || 0;
    _instance.captureError = _instance.captureError || '';
    _instance.captureStartedAt = _instance.captureStartedAt || undefined;
    _instance.captureFinishedAt = _instance.captureFinishedAt || undefined;
    _instance.partialCapture = _instance.partialCapture || false;
    _instance.minAvailableSeq = _instance.minAvailableSeq || '0';
    _instance.maxAvailableSeq = _instance.maxAvailableSeq || '0';
    _instance.lineCount = _instance.lineCount || '0';
    _instance.droppedLineCount = _instance.droppedLineCount || '0';
    _instance.operationType = _instance.operationType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CaiLogStream,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.logSource = _reader.readEnum();
          break;
        case 3:
          _instance.channel = _reader.readEnum();
          break;
        case 4:
          _instance.projectParent = _reader.readString();
          break;
        case 5:
          _instance.operationName = _reader.readString();
          break;
        case 6:
          _instance.containerId = _reader.readString();
          break;
        case 7:
          _instance.containerName = _reader.readString();
          break;
        case 8:
          _instance.host = _reader.readString();
          break;
        case 9:
          _instance.replicaId = _reader.readString();
          break;
        case 10:
          _instance.processName = _reader.readString();
          break;
        case 11:
          _instance.phase = _reader.readString();
          break;
        case 12:
          _instance.captureState = _reader.readEnum();
          break;
        case 13:
          _instance.captureError = _reader.readString();
          break;
        case 14:
          _instance.captureStartedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.captureStartedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.captureFinishedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.captureFinishedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.partialCapture = _reader.readBool();
          break;
        case 17:
          _instance.minAvailableSeq = _reader.readInt64String();
          break;
        case 18:
          _instance.maxAvailableSeq = _reader.readInt64String();
          break;
        case 19:
          _instance.lineCount = _reader.readInt64String();
          break;
        case 20:
          _instance.droppedLineCount = _reader.readInt64String();
          break;
        case 21:
          _instance.operationType = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CaiLogStream.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CaiLogStream,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.logSource) {
      _writer.writeEnum(2, _instance.logSource);
    }
    if (_instance.channel) {
      _writer.writeEnum(3, _instance.channel);
    }
    if (_instance.projectParent) {
      _writer.writeString(4, _instance.projectParent);
    }
    if (_instance.operationName) {
      _writer.writeString(5, _instance.operationName);
    }
    if (_instance.containerId) {
      _writer.writeString(6, _instance.containerId);
    }
    if (_instance.containerName) {
      _writer.writeString(7, _instance.containerName);
    }
    if (_instance.host) {
      _writer.writeString(8, _instance.host);
    }
    if (_instance.replicaId) {
      _writer.writeString(9, _instance.replicaId);
    }
    if (_instance.processName) {
      _writer.writeString(10, _instance.processName);
    }
    if (_instance.phase) {
      _writer.writeString(11, _instance.phase);
    }
    if (_instance.captureState) {
      _writer.writeEnum(12, _instance.captureState);
    }
    if (_instance.captureError) {
      _writer.writeString(13, _instance.captureError);
    }
    if (_instance.captureStartedAt) {
      _writer.writeMessage(
        14,
        _instance.captureStartedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.captureFinishedAt) {
      _writer.writeMessage(
        15,
        _instance.captureFinishedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.partialCapture) {
      _writer.writeBool(16, _instance.partialCapture);
    }
    if (_instance.minAvailableSeq) {
      _writer.writeInt64String(17, _instance.minAvailableSeq);
    }
    if (_instance.maxAvailableSeq) {
      _writer.writeInt64String(18, _instance.maxAvailableSeq);
    }
    if (_instance.lineCount) {
      _writer.writeInt64String(19, _instance.lineCount);
    }
    if (_instance.droppedLineCount) {
      _writer.writeInt64String(20, _instance.droppedLineCount);
    }
    if (_instance.operationType) {
      _writer.writeEnum(21, _instance.operationType);
    }
  }

  private _name: string;
  private _logSource: CaiLogSource;
  private _channel: CaiLogStreamChannel;
  private _projectParent: string;
  private _operationName: string;
  private _containerId: string;
  private _containerName: string;
  private _host: string;
  private _replicaId: string;
  private _processName: string;
  private _phase: string;
  private _captureState: CaiLogCaptureState;
  private _captureError: string;
  private _captureStartedAt?: googleProtobuf002.Timestamp;
  private _captureFinishedAt?: googleProtobuf002.Timestamp;
  private _partialCapture: boolean;
  private _minAvailableSeq: string;
  private _maxAvailableSeq: string;
  private _lineCount: string;
  private _droppedLineCount: string;
  private _operationType: ondewoNlu004.OperationMetadata.OperationType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CaiLogStream to deeply clone from
   */
  constructor(_value?: RecursivePartial<CaiLogStream.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.logSource = _value.logSource;
    this.channel = _value.channel;
    this.projectParent = _value.projectParent;
    this.operationName = _value.operationName;
    this.containerId = _value.containerId;
    this.containerName = _value.containerName;
    this.host = _value.host;
    this.replicaId = _value.replicaId;
    this.processName = _value.processName;
    this.phase = _value.phase;
    this.captureState = _value.captureState;
    this.captureError = _value.captureError;
    this.captureStartedAt = _value.captureStartedAt
      ? new googleProtobuf002.Timestamp(_value.captureStartedAt)
      : undefined;
    this.captureFinishedAt = _value.captureFinishedAt
      ? new googleProtobuf002.Timestamp(_value.captureFinishedAt)
      : undefined;
    this.partialCapture = _value.partialCapture;
    this.minAvailableSeq = _value.minAvailableSeq;
    this.maxAvailableSeq = _value.maxAvailableSeq;
    this.lineCount = _value.lineCount;
    this.droppedLineCount = _value.droppedLineCount;
    this.operationType = _value.operationType;
    CaiLogStream.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get logSource(): CaiLogSource {
    return this._logSource;
  }
  set logSource(value: CaiLogSource) {
    this._logSource = value;
  }
  get channel(): CaiLogStreamChannel {
    return this._channel;
  }
  set channel(value: CaiLogStreamChannel) {
    this._channel = value;
  }
  get projectParent(): string {
    return this._projectParent;
  }
  set projectParent(value: string) {
    this._projectParent = value;
  }
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }
  get replicaId(): string {
    return this._replicaId;
  }
  set replicaId(value: string) {
    this._replicaId = value;
  }
  get processName(): string {
    return this._processName;
  }
  set processName(value: string) {
    this._processName = value;
  }
  get phase(): string {
    return this._phase;
  }
  set phase(value: string) {
    this._phase = value;
  }
  get captureState(): CaiLogCaptureState {
    return this._captureState;
  }
  set captureState(value: CaiLogCaptureState) {
    this._captureState = value;
  }
  get captureError(): string {
    return this._captureError;
  }
  set captureError(value: string) {
    this._captureError = value;
  }
  get captureStartedAt(): googleProtobuf002.Timestamp | undefined {
    return this._captureStartedAt;
  }
  set captureStartedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._captureStartedAt = value;
  }
  get captureFinishedAt(): googleProtobuf002.Timestamp | undefined {
    return this._captureFinishedAt;
  }
  set captureFinishedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._captureFinishedAt = value;
  }
  get partialCapture(): boolean {
    return this._partialCapture;
  }
  set partialCapture(value: boolean) {
    this._partialCapture = value;
  }
  get minAvailableSeq(): string {
    return this._minAvailableSeq;
  }
  set minAvailableSeq(value: string) {
    this._minAvailableSeq = value;
  }
  get maxAvailableSeq(): string {
    return this._maxAvailableSeq;
  }
  set maxAvailableSeq(value: string) {
    this._maxAvailableSeq = value;
  }
  get lineCount(): string {
    return this._lineCount;
  }
  set lineCount(value: string) {
    this._lineCount = value;
  }
  get droppedLineCount(): string {
    return this._droppedLineCount;
  }
  set droppedLineCount(value: string) {
    this._droppedLineCount = value;
  }
  get operationType(): ondewoNlu004.OperationMetadata.OperationType {
    return this._operationType;
  }
  set operationType(value: ondewoNlu004.OperationMetadata.OperationType) {
    this._operationType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CaiLogStream.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CaiLogStream.AsObject {
    return {
      name: this.name,
      logSource: this.logSource,
      channel: this.channel,
      projectParent: this.projectParent,
      operationName: this.operationName,
      containerId: this.containerId,
      containerName: this.containerName,
      host: this.host,
      replicaId: this.replicaId,
      processName: this.processName,
      phase: this.phase,
      captureState: this.captureState,
      captureError: this.captureError,
      captureStartedAt: this.captureStartedAt
        ? this.captureStartedAt.toObject()
        : undefined,
      captureFinishedAt: this.captureFinishedAt
        ? this.captureFinishedAt.toObject()
        : undefined,
      partialCapture: this.partialCapture,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      lineCount: this.lineCount,
      droppedLineCount: this.droppedLineCount,
      operationType: this.operationType
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CaiLogStream.AsProtobufJSON {
    return {
      name: this.name,
      logSource:
        CaiLogSource[
          this.logSource === null || this.logSource === undefined
            ? 0
            : this.logSource
        ],
      channel:
        CaiLogStreamChannel[
          this.channel === null || this.channel === undefined ? 0 : this.channel
        ],
      projectParent: this.projectParent,
      operationName: this.operationName,
      containerId: this.containerId,
      containerName: this.containerName,
      host: this.host,
      replicaId: this.replicaId,
      processName: this.processName,
      phase: this.phase,
      captureState:
        CaiLogCaptureState[
          this.captureState === null || this.captureState === undefined
            ? 0
            : this.captureState
        ],
      captureError: this.captureError,
      captureStartedAt: this.captureStartedAt
        ? this.captureStartedAt.toProtobufJSON(options)
        : null,
      captureFinishedAt: this.captureFinishedAt
        ? this.captureFinishedAt.toProtobufJSON(options)
        : null,
      partialCapture: this.partialCapture,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      lineCount: this.lineCount,
      droppedLineCount: this.droppedLineCount,
      operationType:
        ondewoNlu004.OperationMetadata.OperationType[
          this.operationType === null || this.operationType === undefined
            ? 0
            : this.operationType
        ]
    };
  }
}
export module CaiLogStream {
  /**
   * Standard JavaScript object representation for CaiLogStream
   */
  export interface AsObject {
    name: string;
    logSource: CaiLogSource;
    channel: CaiLogStreamChannel;
    projectParent: string;
    operationName: string;
    containerId: string;
    containerName: string;
    host: string;
    replicaId: string;
    processName: string;
    phase: string;
    captureState: CaiLogCaptureState;
    captureError: string;
    captureStartedAt?: googleProtobuf002.Timestamp.AsObject;
    captureFinishedAt?: googleProtobuf002.Timestamp.AsObject;
    partialCapture: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    lineCount: string;
    droppedLineCount: string;
    operationType: ondewoNlu004.OperationMetadata.OperationType;
  }

  /**
   * Protobuf JSON representation for CaiLogStream
   */
  export interface AsProtobufJSON {
    name: string;
    logSource: string;
    channel: string;
    projectParent: string;
    operationName: string;
    containerId: string;
    containerName: string;
    host: string;
    replicaId: string;
    processName: string;
    phase: string;
    captureState: string;
    captureError: string;
    captureStartedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    captureFinishedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    partialCapture: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    lineCount: string;
    droppedLineCount: string;
    operationType: string;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamLogsRequest
 */
export class StreamLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.StreamLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamLogsRequest();
    StreamLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamLogsRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.filter = new CaiLogFilter();
          _reader.readMessage(
            _instance.filter,
            CaiLogFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.tailLines = _reader.readInt32();
          break;
        case 3:
          _instance.resumeToken = _reader.readString();
          break;
        case 4:
          _instance.afterSeq = _reader.readInt64String();
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

    StreamLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.filter) {
      _writer.writeMessage(
        1,
        _instance.filter as any,
        CaiLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.tailLines !== undefined && _instance.tailLines !== null) {
      _writer.writeInt32(2, _instance.tailLines);
    }
    if (_instance.resumeToken !== undefined && _instance.resumeToken !== null) {
      _writer.writeString(3, _instance.resumeToken);
    }
    if (_instance.afterSeq !== undefined && _instance.afterSeq !== null) {
      _writer.writeInt64String(4, _instance.afterSeq);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _filter?: CaiLogFilter;
  private _tailLines: number;
  private _resumeToken: string;
  private _afterSeq: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamLogsRequest.AsObject>) {
    _value = _value || {};
    this.filter = _value.filter ? new CaiLogFilter(_value.filter) : undefined;
    this.tailLines = _value.tailLines;
    this.resumeToken = _value.resumeToken;
    this.afterSeq = _value.afterSeq;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    StreamLogsRequest.refineValues(this);
  }
  get filter(): CaiLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CaiLogFilter | undefined) {
    this._filter = value;
  }
  get tailLines(): number {
    return this._tailLines;
  }
  set tailLines(value: number) {
    this._tailLines = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get afterSeq(): string {
    return this._afterSeq;
  }
  set afterSeq(value: string) {
    this._afterSeq = value;
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
    StreamLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamLogsRequest.AsObject {
    return {
      filter: this.filter ? this.filter.toObject() : undefined,
      tailLines: this.tailLines,
      resumeToken: this.resumeToken,
      afterSeq: this.afterSeq,
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
  ): StreamLogsRequest.AsProtobufJSON {
    return {
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      tailLines: this.tailLines,
      resumeToken: this.resumeToken,
      afterSeq: this.afterSeq,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StreamLogsRequest {
  /**
   * Standard JavaScript object representation for StreamLogsRequest
   */
  export interface AsObject {
    filter?: CaiLogFilter.AsObject;
    tailLines: number;
    resumeToken: string;
    afterSeq: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamLogsRequest
   */
  export interface AsProtobufJSON {
    filter: CaiLogFilter.AsProtobufJSON | null;
    tailLines: number;
    resumeToken: string;
    afterSeq: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamLogsResponse
 */
export class StreamLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.StreamLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamLogsResponse();
    StreamLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamLogsResponse) {
    _instance.logEntries = _instance.logEntries || [];
    _instance.captureState = _instance.captureState || 0;
    _instance.captureError = _instance.captureError || '';
    _instance.droppedLineCount = _instance.droppedLineCount || '0';
    _instance.resumeToken = _instance.resumeToken || '';
    _instance.endReason = _instance.endReason || '';
    _instance.endReasonCode = _instance.endReasonCode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CaiLogEntry();
          _reader.readMessage(
            messageInitializer1,
            CaiLogEntry.deserializeBinaryFromReader
          );
          (_instance.logEntries = _instance.logEntries || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.captureState = _reader.readEnum();
          break;
        case 3:
          _instance.captureError = _reader.readString();
          break;
        case 4:
          _instance.droppedLineCount = _reader.readInt64String();
          break;
        case 5:
          _instance.resumeToken = _reader.readString();
          break;
        case 6:
          _instance.endReason = _reader.readString();
          break;
        case 7:
          _instance.endReasonCode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logEntries && _instance.logEntries.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logEntries as any,
        CaiLogEntry.serializeBinaryToWriter
      );
    }
    if (_instance.captureState) {
      _writer.writeEnum(2, _instance.captureState);
    }
    if (_instance.captureError) {
      _writer.writeString(3, _instance.captureError);
    }
    if (_instance.droppedLineCount) {
      _writer.writeInt64String(4, _instance.droppedLineCount);
    }
    if (_instance.resumeToken) {
      _writer.writeString(5, _instance.resumeToken);
    }
    if (_instance.endReason) {
      _writer.writeString(6, _instance.endReason);
    }
    if (_instance.endReasonCode) {
      _writer.writeEnum(7, _instance.endReasonCode);
    }
  }

  private _logEntries?: CaiLogEntry[];
  private _captureState: CaiLogCaptureState;
  private _captureError: string;
  private _droppedLineCount: string;
  private _resumeToken: string;
  private _endReason: string;
  private _endReasonCode: CaiLogStreamEndReason;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamLogsResponse.AsObject>) {
    _value = _value || {};
    this.logEntries = (_value.logEntries || []).map(m => new CaiLogEntry(m));
    this.captureState = _value.captureState;
    this.captureError = _value.captureError;
    this.droppedLineCount = _value.droppedLineCount;
    this.resumeToken = _value.resumeToken;
    this.endReason = _value.endReason;
    this.endReasonCode = _value.endReasonCode;
    StreamLogsResponse.refineValues(this);
  }
  get logEntries(): CaiLogEntry[] | undefined {
    return this._logEntries;
  }
  set logEntries(value: CaiLogEntry[] | undefined) {
    this._logEntries = value;
  }
  get captureState(): CaiLogCaptureState {
    return this._captureState;
  }
  set captureState(value: CaiLogCaptureState) {
    this._captureState = value;
  }
  get captureError(): string {
    return this._captureError;
  }
  set captureError(value: string) {
    this._captureError = value;
  }
  get droppedLineCount(): string {
    return this._droppedLineCount;
  }
  set droppedLineCount(value: string) {
    this._droppedLineCount = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get endReason(): string {
    return this._endReason;
  }
  set endReason(value: string) {
    this._endReason = value;
  }
  get endReasonCode(): CaiLogStreamEndReason {
    return this._endReasonCode;
  }
  set endReasonCode(value: CaiLogStreamEndReason) {
    this._endReasonCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamLogsResponse.AsObject {
    return {
      logEntries: (this.logEntries || []).map(m => m.toObject()),
      captureState: this.captureState,
      captureError: this.captureError,
      droppedLineCount: this.droppedLineCount,
      resumeToken: this.resumeToken,
      endReason: this.endReason,
      endReasonCode: this.endReasonCode
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamLogsResponse.AsProtobufJSON {
    return {
      logEntries: (this.logEntries || []).map(m => m.toProtobufJSON(options)),
      captureState:
        CaiLogCaptureState[
          this.captureState === null || this.captureState === undefined
            ? 0
            : this.captureState
        ],
      captureError: this.captureError,
      droppedLineCount: this.droppedLineCount,
      resumeToken: this.resumeToken,
      endReason: this.endReason,
      endReasonCode:
        CaiLogStreamEndReason[
          this.endReasonCode === null || this.endReasonCode === undefined
            ? 0
            : this.endReasonCode
        ]
    };
  }
}
export module StreamLogsResponse {
  /**
   * Standard JavaScript object representation for StreamLogsResponse
   */
  export interface AsObject {
    logEntries?: CaiLogEntry.AsObject[];
    captureState: CaiLogCaptureState;
    captureError: string;
    droppedLineCount: string;
    resumeToken: string;
    endReason: string;
    endReasonCode: CaiLogStreamEndReason;
  }

  /**
   * Protobuf JSON representation for StreamLogsResponse
   */
  export interface AsProtobufJSON {
    logEntries: CaiLogEntry.AsProtobufJSON[] | null;
    captureState: string;
    captureError: string;
    droppedLineCount: string;
    resumeToken: string;
    endReason: string;
    endReasonCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLogsRequest
 */
export class ListLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLogsRequest();
    ListLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLogsRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.includeCounts = _instance.includeCounts || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.filter = new CaiLogFilter();
          _reader.readMessage(
            _instance.filter,
            CaiLogFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.maxLines = _reader.readInt32();
          break;
        case 3:
          _instance.beforeSeq = _reader.readInt64String();
          break;
        case 4:
          _instance.afterSeq = _reader.readInt64String();
          break;
        case 5:
          _instance.resumeToken = _reader.readString();
          break;
        case 6:
          _instance.oldestFirst = _reader.readBool();
          break;
        case 7:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.includeCounts = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.filter) {
      _writer.writeMessage(
        1,
        _instance.filter as any,
        CaiLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.maxLines !== undefined && _instance.maxLines !== null) {
      _writer.writeInt32(2, _instance.maxLines);
    }
    if (_instance.beforeSeq !== undefined && _instance.beforeSeq !== null) {
      _writer.writeInt64String(3, _instance.beforeSeq);
    }
    if (_instance.afterSeq !== undefined && _instance.afterSeq !== null) {
      _writer.writeInt64String(4, _instance.afterSeq);
    }
    if (_instance.resumeToken !== undefined && _instance.resumeToken !== null) {
      _writer.writeString(5, _instance.resumeToken);
    }
    if (_instance.oldestFirst !== undefined && _instance.oldestFirst !== null) {
      _writer.writeBool(6, _instance.oldestFirst);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        7,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.includeCounts) {
      _writer.writeBool(8, _instance.includeCounts);
    }
  }

  private _filter?: CaiLogFilter;
  private _maxLines: number;
  private _beforeSeq: string;
  private _afterSeq: string;
  private _resumeToken: string;
  private _oldestFirst: boolean;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _includeCounts: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLogsRequest.AsObject>) {
    _value = _value || {};
    this.filter = _value.filter ? new CaiLogFilter(_value.filter) : undefined;
    this.maxLines = _value.maxLines;
    this.beforeSeq = _value.beforeSeq;
    this.afterSeq = _value.afterSeq;
    this.resumeToken = _value.resumeToken;
    this.oldestFirst = _value.oldestFirst;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.includeCounts = _value.includeCounts;
    ListLogsRequest.refineValues(this);
  }
  get filter(): CaiLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CaiLogFilter | undefined) {
    this._filter = value;
  }
  get maxLines(): number {
    return this._maxLines;
  }
  set maxLines(value: number) {
    this._maxLines = value;
  }
  get beforeSeq(): string {
    return this._beforeSeq;
  }
  set beforeSeq(value: string) {
    this._beforeSeq = value;
  }
  get afterSeq(): string {
    return this._afterSeq;
  }
  set afterSeq(value: string) {
    this._afterSeq = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get oldestFirst(): boolean {
    return this._oldestFirst;
  }
  set oldestFirst(value: boolean) {
    this._oldestFirst = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get includeCounts(): boolean {
    return this._includeCounts;
  }
  set includeCounts(value: boolean) {
    this._includeCounts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLogsRequest.AsObject {
    return {
      filter: this.filter ? this.filter.toObject() : undefined,
      maxLines: this.maxLines,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq,
      resumeToken: this.resumeToken,
      oldestFirst: this.oldestFirst,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      includeCounts: this.includeCounts
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListLogsRequest.AsProtobufJSON {
    return {
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      maxLines: this.maxLines,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq,
      resumeToken: this.resumeToken,
      oldestFirst: this.oldestFirst,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      includeCounts: this.includeCounts
    };
  }
}
export module ListLogsRequest {
  /**
   * Standard JavaScript object representation for ListLogsRequest
   */
  export interface AsObject {
    filter?: CaiLogFilter.AsObject;
    maxLines: number;
    beforeSeq: string;
    afterSeq: string;
    resumeToken: string;
    oldestFirst: boolean;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    includeCounts: boolean;
  }

  /**
   * Protobuf JSON representation for ListLogsRequest
   */
  export interface AsProtobufJSON {
    filter: CaiLogFilter.AsProtobufJSON | null;
    maxLines: number;
    beforeSeq: string;
    afterSeq: string;
    resumeToken: string;
    oldestFirst: boolean;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    includeCounts: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLogsResponse
 */
export class ListLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLogsResponse();
    ListLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLogsResponse) {
    _instance.logEntries = _instance.logEntries || [];
    _instance.truncated = _instance.truncated || false;
    _instance.minAvailableSeq = _instance.minAvailableSeq || '0';
    _instance.maxAvailableSeq = _instance.maxAvailableSeq || '0';
    _instance.hasMoreOlder = _instance.hasMoreOlder || false;
    _instance.hasMoreNewer = _instance.hasMoreNewer || false;
    _instance.nextResumeToken = _instance.nextResumeToken || '';
    _instance.scopeLimitedFilters = _instance.scopeLimitedFilters || [];
    _instance.countByLevel = _instance.countByLevel || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CaiLogEntry();
          _reader.readMessage(
            messageInitializer1,
            CaiLogEntry.deserializeBinaryFromReader
          );
          (_instance.logEntries = _instance.logEntries || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.truncated = _reader.readBool();
          break;
        case 3:
          _instance.minAvailableSeq = _reader.readInt64String();
          break;
        case 4:
          _instance.maxAvailableSeq = _reader.readInt64String();
          break;
        case 5:
          _instance.hasMoreOlder = _reader.readBool();
          break;
        case 6:
          _instance.hasMoreNewer = _reader.readBool();
          break;
        case 7:
          _instance.nextResumeToken = _reader.readString();
          break;
        case 8:
          (_instance.scopeLimitedFilters =
            _instance.scopeLimitedFilters || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        case 9:
          _instance.totalMatchingCount = _reader.readInt64String();
          break;
        case 10:
          const msg_10 = {} as any;
          _reader.readMessage(
            msg_10,
            ListLogsResponse.CountByLevelEntry.deserializeBinaryFromReader
          );
          _instance.countByLevel = _instance.countByLevel || {};
          _instance.countByLevel[msg_10.key] = msg_10.value;
          break;
        default:
          _reader.skipField();
      }
    }

    ListLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logEntries && _instance.logEntries.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logEntries as any,
        CaiLogEntry.serializeBinaryToWriter
      );
    }
    if (_instance.truncated) {
      _writer.writeBool(2, _instance.truncated);
    }
    if (_instance.minAvailableSeq) {
      _writer.writeInt64String(3, _instance.minAvailableSeq);
    }
    if (_instance.maxAvailableSeq) {
      _writer.writeInt64String(4, _instance.maxAvailableSeq);
    }
    if (_instance.hasMoreOlder) {
      _writer.writeBool(5, _instance.hasMoreOlder);
    }
    if (_instance.hasMoreNewer) {
      _writer.writeBool(6, _instance.hasMoreNewer);
    }
    if (_instance.nextResumeToken) {
      _writer.writeString(7, _instance.nextResumeToken);
    }
    if (_instance.scopeLimitedFilters && _instance.scopeLimitedFilters.length) {
      _writer.writePackedEnum(8, _instance.scopeLimitedFilters);
    }
    if (
      _instance.totalMatchingCount !== undefined &&
      _instance.totalMatchingCount !== null
    ) {
      _writer.writeInt64String(9, _instance.totalMatchingCount);
    }
    if (!!_instance.countByLevel) {
      const keys_10 = Object.keys(_instance.countByLevel as any);

      if (keys_10.length) {
        const repeated_10 = keys_10
          .map(key => ({
            key: key,
            value: (_instance.countByLevel as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          10,
          repeated_10,
          ListLogsResponse.CountByLevelEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _logEntries?: CaiLogEntry[];
  private _truncated: boolean;
  private _minAvailableSeq: string;
  private _maxAvailableSeq: string;
  private _hasMoreOlder: boolean;
  private _hasMoreNewer: boolean;
  private _nextResumeToken: string;
  private _scopeLimitedFilters: CaiLogFilterField[];
  private _totalMatchingCount: string;
  private _countByLevel: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLogsResponse.AsObject>) {
    _value = _value || {};
    this.logEntries = (_value.logEntries || []).map(m => new CaiLogEntry(m));
    this.truncated = _value.truncated;
    this.minAvailableSeq = _value.minAvailableSeq;
    this.maxAvailableSeq = _value.maxAvailableSeq;
    this.hasMoreOlder = _value.hasMoreOlder;
    this.hasMoreNewer = _value.hasMoreNewer;
    this.nextResumeToken = _value.nextResumeToken;
    this.scopeLimitedFilters = (_value.scopeLimitedFilters || []).slice();
    this.totalMatchingCount = _value.totalMatchingCount;
    (this.countByLevel = _value!.countByLevel
      ? Object.keys(_value!.countByLevel).reduce(
          (r, k) => ({ ...r, [k]: _value!.countByLevel![k] }),
          {}
        )
      : {}),
      ListLogsResponse.refineValues(this);
  }
  get logEntries(): CaiLogEntry[] | undefined {
    return this._logEntries;
  }
  set logEntries(value: CaiLogEntry[] | undefined) {
    this._logEntries = value;
  }
  get truncated(): boolean {
    return this._truncated;
  }
  set truncated(value: boolean) {
    this._truncated = value;
  }
  get minAvailableSeq(): string {
    return this._minAvailableSeq;
  }
  set minAvailableSeq(value: string) {
    this._minAvailableSeq = value;
  }
  get maxAvailableSeq(): string {
    return this._maxAvailableSeq;
  }
  set maxAvailableSeq(value: string) {
    this._maxAvailableSeq = value;
  }
  get hasMoreOlder(): boolean {
    return this._hasMoreOlder;
  }
  set hasMoreOlder(value: boolean) {
    this._hasMoreOlder = value;
  }
  get hasMoreNewer(): boolean {
    return this._hasMoreNewer;
  }
  set hasMoreNewer(value: boolean) {
    this._hasMoreNewer = value;
  }
  get nextResumeToken(): string {
    return this._nextResumeToken;
  }
  set nextResumeToken(value: string) {
    this._nextResumeToken = value;
  }
  get scopeLimitedFilters(): CaiLogFilterField[] {
    return this._scopeLimitedFilters;
  }
  set scopeLimitedFilters(value: CaiLogFilterField[]) {
    this._scopeLimitedFilters = value;
  }
  get totalMatchingCount(): string {
    return this._totalMatchingCount;
  }
  set totalMatchingCount(value: string) {
    this._totalMatchingCount = value;
  }
  get countByLevel(): { [prop: string]: string } {
    return this._countByLevel;
  }
  set countByLevel(value: { [prop: string]: string }) {
    this._countByLevel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLogsResponse.AsObject {
    return {
      logEntries: (this.logEntries || []).map(m => m.toObject()),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder,
      hasMoreNewer: this.hasMoreNewer,
      nextResumeToken: this.nextResumeToken,
      scopeLimitedFilters: (this.scopeLimitedFilters || []).slice(),
      totalMatchingCount: this.totalMatchingCount,
      countByLevel: this.countByLevel
        ? Object.keys(this.countByLevel).reduce(
            (r, k) => ({ ...r, [k]: this.countByLevel![k] }),
            {}
          )
        : {}
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListLogsResponse.AsProtobufJSON {
    return {
      logEntries: (this.logEntries || []).map(m => m.toProtobufJSON(options)),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder,
      hasMoreNewer: this.hasMoreNewer,
      nextResumeToken: this.nextResumeToken,
      scopeLimitedFilters: (this.scopeLimitedFilters || []).map(
        v => CaiLogFilterField[v]
      ),
      totalMatchingCount: this.totalMatchingCount,
      countByLevel: this.countByLevel
        ? Object.keys(this.countByLevel).reduce(
            (r, k) => ({ ...r, [k]: this.countByLevel![k] }),
            {}
          )
        : {}
    };
  }
}
export module ListLogsResponse {
  /**
   * Standard JavaScript object representation for ListLogsResponse
   */
  export interface AsObject {
    logEntries?: CaiLogEntry.AsObject[];
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
    hasMoreNewer: boolean;
    nextResumeToken: string;
    scopeLimitedFilters: CaiLogFilterField[];
    totalMatchingCount: string;
    countByLevel: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for ListLogsResponse
   */
  export interface AsProtobufJSON {
    logEntries: CaiLogEntry.AsProtobufJSON[] | null;
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
    hasMoreNewer: boolean;
    nextResumeToken: string;
    scopeLimitedFilters: string[];
    totalMatchingCount: string;
    countByLevel: { [prop: string]: string };
  }

  /**
   * Message implementation for ondewo.nlu.ListLogsResponse.CountByLevelEntry
   */
  export class CountByLevelEntry implements GrpcMessage {
    static id = 'ondewo.nlu.ListLogsResponse.CountByLevelEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CountByLevelEntry();
      CountByLevelEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CountByLevelEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '0';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CountByLevelEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readInt64String();
            break;
          default:
            _reader.skipField();
        }
      }

      CountByLevelEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CountByLevelEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeInt64String(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CountByLevelEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<CountByLevelEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      CountByLevelEntry.refineValues(this);
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

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      CountByLevelEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CountByLevelEntry.AsObject {
      return {
        key: this.key,
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
    ): CountByLevelEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module CountByLevelEntry {
    /**
     * Standard JavaScript object representation for CountByLevelEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for CountByLevelEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.GetLogStreamRequest
 */
export class GetLogStreamRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetLogStreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetLogStreamRequest();
    GetLogStreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetLogStreamRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetLogStreamRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
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

    GetLogStreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetLogStreamRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetLogStreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetLogStreamRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetLogStreamRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    GetLogStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetLogStreamRequest.AsObject {
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
  ): GetLogStreamRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetLogStreamRequest {
  /**
   * Standard JavaScript object representation for GetLogStreamRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetLogStreamRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLogStreamsRequest
 */
export class ListLogStreamsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLogStreamsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLogStreamsRequest();
    ListLogStreamsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLogStreamsRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.captureStates = _instance.captureStates || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLogStreamsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.filter = new CaiLogFilter();
          _reader.readMessage(
            _instance.filter,
            CaiLogFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          (_instance.captureStates = _instance.captureStates || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLogStreamsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLogStreamsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.filter) {
      _writer.writeMessage(
        1,
        _instance.filter as any,
        CaiLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.captureStates && _instance.captureStates.length) {
      _writer.writePackedEnum(4, _instance.captureStates);
    }
  }

  private _filter?: CaiLogFilter;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _captureStates: CaiLogCaptureState[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLogStreamsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLogStreamsRequest.AsObject>) {
    _value = _value || {};
    this.filter = _value.filter ? new CaiLogFilter(_value.filter) : undefined;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.captureStates = (_value.captureStates || []).slice();
    ListLogStreamsRequest.refineValues(this);
  }
  get filter(): CaiLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CaiLogFilter | undefined) {
    this._filter = value;
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
  get captureStates(): CaiLogCaptureState[] {
    return this._captureStates;
  }
  set captureStates(value: CaiLogCaptureState[]) {
    this._captureStates = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLogStreamsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLogStreamsRequest.AsObject {
    return {
      filter: this.filter ? this.filter.toObject() : undefined,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      captureStates: (this.captureStates || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListLogStreamsRequest.AsProtobufJSON {
    return {
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      captureStates: (this.captureStates || []).map(v => CaiLogCaptureState[v])
    };
  }
}
export module ListLogStreamsRequest {
  /**
   * Standard JavaScript object representation for ListLogStreamsRequest
   */
  export interface AsObject {
    filter?: CaiLogFilter.AsObject;
    pageToken: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    captureStates: CaiLogCaptureState[];
  }

  /**
   * Protobuf JSON representation for ListLogStreamsRequest
   */
  export interface AsProtobufJSON {
    filter: CaiLogFilter.AsProtobufJSON | null;
    pageToken: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    captureStates: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListLogStreamsResponse
 */
export class ListLogStreamsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLogStreamsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLogStreamsResponse();
    ListLogStreamsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLogStreamsResponse) {
    _instance.logStreams = _instance.logStreams || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLogStreamsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CaiLogStream();
          _reader.readMessage(
            messageInitializer1,
            CaiLogStream.deserializeBinaryFromReader
          );
          (_instance.logStreams = _instance.logStreams || []).push(
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

    ListLogStreamsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLogStreamsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logStreams && _instance.logStreams.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logStreams as any,
        CaiLogStream.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _logStreams?: CaiLogStream[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLogStreamsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListLogStreamsResponse.AsObject>) {
    _value = _value || {};
    this.logStreams = (_value.logStreams || []).map(m => new CaiLogStream(m));
    this.nextPageToken = _value.nextPageToken;
    ListLogStreamsResponse.refineValues(this);
  }
  get logStreams(): CaiLogStream[] | undefined {
    return this._logStreams;
  }
  set logStreams(value: CaiLogStream[] | undefined) {
    this._logStreams = value;
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
    ListLogStreamsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLogStreamsResponse.AsObject {
    return {
      logStreams: (this.logStreams || []).map(m => m.toObject()),
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
  ): ListLogStreamsResponse.AsProtobufJSON {
    return {
      logStreams: (this.logStreams || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListLogStreamsResponse {
  /**
   * Standard JavaScript object representation for ListLogStreamsResponse
   */
  export interface AsObject {
    logStreams?: CaiLogStream.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListLogStreamsResponse
   */
  export interface AsProtobufJSON {
    logStreams: CaiLogStream.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportLogsRequest
 */
export class ExportLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ExportLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportLogsRequest();
    ExportLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportLogsRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.format = _instance.format || 0;
    _instance.includeMetadata = _instance.includeMetadata || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.filter = new CaiLogFilter();
          _reader.readMessage(
            _instance.filter,
            CaiLogFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.format = _reader.readEnum();
          break;
        case 3:
          _instance.includeMetadata = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.filter) {
      _writer.writeMessage(
        1,
        _instance.filter as any,
        CaiLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.format) {
      _writer.writeEnum(2, _instance.format);
    }
    if (_instance.includeMetadata) {
      _writer.writeBool(3, _instance.includeMetadata);
    }
  }

  private _filter?: CaiLogFilter;
  private _format: CaiLogExportFormat;
  private _includeMetadata: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportLogsRequest.AsObject>) {
    _value = _value || {};
    this.filter = _value.filter ? new CaiLogFilter(_value.filter) : undefined;
    this.format = _value.format;
    this.includeMetadata = _value.includeMetadata;
    ExportLogsRequest.refineValues(this);
  }
  get filter(): CaiLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CaiLogFilter | undefined) {
    this._filter = value;
  }
  get format(): CaiLogExportFormat {
    return this._format;
  }
  set format(value: CaiLogExportFormat) {
    this._format = value;
  }
  get includeMetadata(): boolean {
    return this._includeMetadata;
  }
  set includeMetadata(value: boolean) {
    this._includeMetadata = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportLogsRequest.AsObject {
    return {
      filter: this.filter ? this.filter.toObject() : undefined,
      format: this.format,
      includeMetadata: this.includeMetadata
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ExportLogsRequest.AsProtobufJSON {
    return {
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      format:
        CaiLogExportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      includeMetadata: this.includeMetadata
    };
  }
}
export module ExportLogsRequest {
  /**
   * Standard JavaScript object representation for ExportLogsRequest
   */
  export interface AsObject {
    filter?: CaiLogFilter.AsObject;
    format: CaiLogExportFormat;
    includeMetadata: boolean;
  }

  /**
   * Protobuf JSON representation for ExportLogsRequest
   */
  export interface AsProtobufJSON {
    filter: CaiLogFilter.AsProtobufJSON | null;
    format: string;
    includeMetadata: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.ExportLogsResponse
 */
export class ExportLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ExportLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportLogsResponse();
    ExportLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportLogsResponse) {
    _instance.chunk = _instance.chunk || new Uint8Array();
    _instance.entryCount = _instance.entryCount || '0';
    _instance.last = _instance.last || false;
    _instance.truncated = _instance.truncated || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chunk = _reader.readBytes();
          break;
        case 2:
          _instance.entryCount = _reader.readInt64String();
          break;
        case 3:
          _instance.last = _reader.readBool();
          break;
        case 4:
          _instance.truncated = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunk && _instance.chunk.length) {
      _writer.writeBytes(1, _instance.chunk);
    }
    if (_instance.entryCount) {
      _writer.writeInt64String(2, _instance.entryCount);
    }
    if (_instance.last) {
      _writer.writeBool(3, _instance.last);
    }
    if (_instance.truncated) {
      _writer.writeBool(4, _instance.truncated);
    }
  }

  private _chunk: Uint8Array;
  private _entryCount: string;
  private _last: boolean;
  private _truncated: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportLogsResponse.AsObject>) {
    _value = _value || {};
    this.chunk = _value.chunk;
    this.entryCount = _value.entryCount;
    this.last = _value.last;
    this.truncated = _value.truncated;
    ExportLogsResponse.refineValues(this);
  }
  get chunk(): Uint8Array {
    return this._chunk;
  }
  set chunk(value: Uint8Array) {
    this._chunk = value;
  }
  get entryCount(): string {
    return this._entryCount;
  }
  set entryCount(value: string) {
    this._entryCount = value;
  }
  get last(): boolean {
    return this._last;
  }
  set last(value: boolean) {
    this._last = value;
  }
  get truncated(): boolean {
    return this._truncated;
  }
  set truncated(value: boolean) {
    this._truncated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportLogsResponse.AsObject {
    return {
      chunk: this.chunk ? this.chunk.subarray(0) : new Uint8Array(),
      entryCount: this.entryCount,
      last: this.last,
      truncated: this.truncated
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ExportLogsResponse.AsProtobufJSON {
    return {
      chunk: this.chunk ? uint8ArrayToBase64(this.chunk) : '',
      entryCount: this.entryCount,
      last: this.last,
      truncated: this.truncated
    };
  }
}
export module ExportLogsResponse {
  /**
   * Standard JavaScript object representation for ExportLogsResponse
   */
  export interface AsObject {
    chunk: Uint8Array;
    entryCount: string;
    last: boolean;
    truncated: boolean;
  }

  /**
   * Protobuf JSON representation for ExportLogsResponse
   */
  export interface AsProtobufJSON {
    chunk: string;
    entryCount: string;
    last: boolean;
    truncated: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLogsRequest
 */
export class DeleteLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLogsRequest();
    DeleteLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLogsRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.filter = new CaiLogFilter();
          _reader.readMessage(
            _instance.filter,
            CaiLogFilter.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.filter) {
      _writer.writeMessage(
        1,
        _instance.filter as any,
        CaiLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(2, _instance.validateOnly);
    }
  }

  private _filter?: CaiLogFilter;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteLogsRequest.AsObject>) {
    _value = _value || {};
    this.filter = _value.filter ? new CaiLogFilter(_value.filter) : undefined;
    this.validateOnly = _value.validateOnly;
    DeleteLogsRequest.refineValues(this);
  }
  get filter(): CaiLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CaiLogFilter | undefined) {
    this._filter = value;
  }
  get validateOnly(): boolean {
    return this._validateOnly;
  }
  set validateOnly(value: boolean) {
    this._validateOnly = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLogsRequest.AsObject {
    return {
      filter: this.filter ? this.filter.toObject() : undefined,
      validateOnly: this.validateOnly
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteLogsRequest.AsProtobufJSON {
    return {
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module DeleteLogsRequest {
  /**
   * Standard JavaScript object representation for DeleteLogsRequest
   */
  export interface AsObject {
    filter?: CaiLogFilter.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteLogsRequest
   */
  export interface AsProtobufJSON {
    filter: CaiLogFilter.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLogsResponse
 */
export class DeleteLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLogsResponse();
    DeleteLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLogsResponse) {
    _instance.deletedLogEntryCount = _instance.deletedLogEntryCount || '0';
    _instance.deletedLogStreamCount = _instance.deletedLogStreamCount || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deletedLogEntryCount = _reader.readInt64String();
          break;
        case 2:
          _instance.deletedLogStreamCount = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deletedLogEntryCount) {
      _writer.writeInt64String(1, _instance.deletedLogEntryCount);
    }
    if (_instance.deletedLogStreamCount) {
      _writer.writeInt64String(2, _instance.deletedLogStreamCount);
    }
  }

  private _deletedLogEntryCount: string;
  private _deletedLogStreamCount: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteLogsResponse.AsObject>) {
    _value = _value || {};
    this.deletedLogEntryCount = _value.deletedLogEntryCount;
    this.deletedLogStreamCount = _value.deletedLogStreamCount;
    DeleteLogsResponse.refineValues(this);
  }
  get deletedLogEntryCount(): string {
    return this._deletedLogEntryCount;
  }
  set deletedLogEntryCount(value: string) {
    this._deletedLogEntryCount = value;
  }
  get deletedLogStreamCount(): string {
    return this._deletedLogStreamCount;
  }
  set deletedLogStreamCount(value: string) {
    this._deletedLogStreamCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLogsResponse.AsObject {
    return {
      deletedLogEntryCount: this.deletedLogEntryCount,
      deletedLogStreamCount: this.deletedLogStreamCount
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteLogsResponse.AsProtobufJSON {
    return {
      deletedLogEntryCount: this.deletedLogEntryCount,
      deletedLogStreamCount: this.deletedLogStreamCount
    };
  }
}
export module DeleteLogsResponse {
  /**
   * Standard JavaScript object representation for DeleteLogsResponse
   */
  export interface AsObject {
    deletedLogEntryCount: string;
    deletedLogStreamCount: string;
  }

  /**
   * Protobuf JSON representation for DeleteLogsResponse
   */
  export interface AsProtobufJSON {
    deletedLogEntryCount: string;
    deletedLogStreamCount: string;
  }
}
