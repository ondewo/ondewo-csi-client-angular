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
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleApi006 from '../../google/api/annotations.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleRpc008 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
export enum RemoteOperationContainerLifecycleState {
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_UNSPECIFIED = 0,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_NOT_FOUND = 1,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_CREATED = 2,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RUNNING = 3,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_PAUSED = 4,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RESTARTING = 5,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_EXITED = 6,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_DEAD = 7
}
/**
 * Message implementation for ondewo.nlu.Operation
 */
export class Operation implements GrpcMessage {
  static id = 'ondewo.nlu.Operation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Operation();
    Operation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Operation) {
    _instance.name = _instance.name || '';
    _instance.metadata = _instance.metadata || undefined;
    _instance.done = _instance.done || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Operation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.metadata = new ondewoNlu009.OperationMetadata();
          _reader.readMessage(
            _instance.metadata,
            ondewoNlu009.OperationMetadata.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.done = _reader.readBool();
          break;
        case 4:
          _instance.error = new googleRpc008.Status();
          _reader.readMessage(
            _instance.error,
            googleRpc008.Status.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.response = new googleProtobuf002.Any();
          _reader.readMessage(
            _instance.response,
            googleProtobuf002.Any.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Operation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Operation, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        2,
        _instance.metadata as any,
        ondewoNlu009.OperationMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.done) {
      _writer.writeBool(3, _instance.done);
    }
    if (_instance.error) {
      _writer.writeMessage(
        4,
        _instance.error as any,
        googleRpc008.Status.serializeBinaryToWriter
      );
    }
    if (_instance.response) {
      _writer.writeMessage(
        5,
        _instance.response as any,
        googleProtobuf002.Any.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _metadata?: ondewoNlu009.OperationMetadata;
  private _done: boolean;
  private _error?: googleRpc008.Status;
  private _response?: googleProtobuf002.Any;

  private _result: Operation.ResultCase = Operation.ResultCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Operation to deeply clone from
   */
  constructor(_value?: RecursivePartial<Operation.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.metadata = _value.metadata
      ? new ondewoNlu009.OperationMetadata(_value.metadata)
      : undefined;
    this.done = _value.done;
    this.error = _value.error
      ? new googleRpc008.Status(_value.error)
      : undefined;
    this.response = _value.response
      ? new googleProtobuf002.Any(_value.response)
      : undefined;
    Operation.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get metadata(): ondewoNlu009.OperationMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: ondewoNlu009.OperationMetadata | undefined) {
    this._metadata = value;
  }
  get done(): boolean {
    return this._done;
  }
  set done(value: boolean) {
    this._done = value;
  }
  get error(): googleRpc008.Status | undefined {
    return this._error;
  }
  set error(value: googleRpc008.Status | undefined) {
    if (value !== undefined && value !== null) {
      this._response = undefined;
      this._result = Operation.ResultCase.error;
    }
    this._error = value;
  }
  get response(): googleProtobuf002.Any | undefined {
    return this._response;
  }
  set response(value: googleProtobuf002.Any | undefined) {
    if (value !== undefined && value !== null) {
      this._error = undefined;
      this._result = Operation.ResultCase.response;
    }
    this._response = value;
  }
  get result() {
    return this._result;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Operation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Operation.AsObject {
    return {
      name: this.name,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      done: this.done,
      error: this.error ? this.error.toObject() : undefined,
      response: this.response ? this.response.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Operation.AsProtobufJSON {
    return {
      name: this.name,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      done: this.done,
      error: this.error ? this.error.toProtobufJSON(options) : null,
      response: this.response ? this.response.toProtobufJSON(options) : null
    };
  }
}
export module Operation {
  /**
   * Standard JavaScript object representation for Operation
   */
  export interface AsObject {
    name: string;
    metadata?: ondewoNlu009.OperationMetadata.AsObject;
    done: boolean;
    error?: googleRpc008.Status.AsObject;
    response?: googleProtobuf002.Any.AsObject;
  }

  /**
   * Protobuf JSON representation for Operation
   */
  export interface AsProtobufJSON {
    name: string;
    metadata: ondewoNlu009.OperationMetadata.AsProtobufJSON | null;
    done: boolean;
    error: googleRpc008.Status.AsProtobufJSON | null;
    response: googleProtobuf002.Any.AsProtobufJSON | null;
  }
  export enum ResultCase {
    none = 0,
    error = 1,
    response = 2
  }
}

/**
 * Message implementation for ondewo.nlu.GetOperationRequest
 */
export class GetOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetOperationRequest();
    GetOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetOperationRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetOperationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    GetOperationRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetOperationRequest.AsObject {
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
  ): GetOperationRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetOperationRequest {
  /**
   * Standard JavaScript object representation for GetOperationRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListOperationsRequest
 */
export class ListOperationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListOperationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOperationsRequest();
    ListOperationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOperationsRequest) {
    _instance.name = _instance.name || '';
    _instance.filter = _instance.filter || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.operationFilter = _instance.operationFilter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOperationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.name = _reader.readString();
          break;
        case 1:
          _instance.filter = _reader.readString();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.operationFilter = new OperationFilter();
          _reader.readMessage(
            _instance.operationFilter,
            OperationFilter.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOperationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOperationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.filter) {
      _writer.writeString(1, _instance.filter);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.operationFilter) {
      _writer.writeMessage(
        5,
        _instance.operationFilter as any,
        OperationFilter.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _filter: string;
  private _pageSize: number;
  private _pageToken: string;
  private _operationFilter?: OperationFilter;
  private _fieldMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOperationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOperationsRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.filter = _value.filter;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.operationFilter = _value.operationFilter
      ? new OperationFilter(_value.operationFilter)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    ListOperationsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
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
  get operationFilter(): OperationFilter | undefined {
    return this._operationFilter;
  }
  set operationFilter(value: OperationFilter | undefined) {
    this._operationFilter = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOperationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOperationsRequest.AsObject {
    return {
      name: this.name,
      filter: this.filter,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      operationFilter: this.operationFilter
        ? this.operationFilter.toObject()
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
  ): ListOperationsRequest.AsProtobufJSON {
    return {
      name: this.name,
      filter: this.filter,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      operationFilter: this.operationFilter
        ? this.operationFilter.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module ListOperationsRequest {
  /**
   * Standard JavaScript object representation for ListOperationsRequest
   */
  export interface AsObject {
    name: string;
    filter: string;
    pageSize: number;
    pageToken: string;
    operationFilter?: OperationFilter.AsObject;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ListOperationsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    filter: string;
    pageSize: number;
    pageToken: string;
    operationFilter: OperationFilter.AsProtobufJSON | null;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.OperationFilter
 */
export class OperationFilter implements GrpcMessage {
  static id = 'ondewo.nlu.OperationFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OperationFilter();
    OperationFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OperationFilter) {
    _instance.projectParents = _instance.projectParents || [];
    _instance.statuses = _instance.statuses || [];
    _instance.types = _instance.types || [];

    _instance.userIds = _instance.userIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OperationFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.projectParents = _instance.projectParents || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _reader.readPackableEnumInto(
            (_instance.statuses = _instance.statuses || [])
          );
          break;
        case 3:
          _reader.readPackableEnumInto(
            (_instance.types = _instance.types || [])
          );
          break;
        case 4:
          _instance.startTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.endTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          (_instance.userIds = _instance.userIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OperationFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OperationFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.projectParents && _instance.projectParents.length) {
      _writer.writeRepeatedString(1, _instance.projectParents);
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedEnum(2, _instance.statuses);
    }
    if (_instance.types && _instance.types.length) {
      _writer.writePackedEnum(3, _instance.types);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        4,
        _instance.startTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        5,
        _instance.endTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.userIds && _instance.userIds.length) {
      _writer.writeRepeatedString(6, _instance.userIds);
    }
  }

  private _projectParents: string[];
  private _statuses: ondewoNlu009.OperationMetadata.Status[];
  private _types: ondewoNlu009.OperationMetadata.OperationType[];
  private _startTime?: googleProtobuf003.Timestamp;
  private _endTime?: googleProtobuf003.Timestamp;
  private _userIds: string[];

  private _startTimeOneof: OperationFilter.StartTimeOneofCase =
    OperationFilter.StartTimeOneofCase.none;
  private _endTimeOneof: OperationFilter.EndTimeOneofCase =
    OperationFilter.EndTimeOneofCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OperationFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<OperationFilter.AsObject>) {
    _value = _value || {};
    this.projectParents = (_value.projectParents || []).slice();
    this.statuses = (_value.statuses || []).slice();
    this.types = (_value.types || []).slice();
    this.startTime = _value.startTime
      ? new googleProtobuf003.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf003.Timestamp(_value.endTime)
      : undefined;
    this.userIds = (_value.userIds || []).slice();
    OperationFilter.refineValues(this);
  }
  get projectParents(): string[] {
    return this._projectParents;
  }
  set projectParents(value: string[]) {
    this._projectParents = value;
  }
  get statuses(): ondewoNlu009.OperationMetadata.Status[] {
    return this._statuses;
  }
  set statuses(value: ondewoNlu009.OperationMetadata.Status[]) {
    this._statuses = value;
  }
  get types(): ondewoNlu009.OperationMetadata.OperationType[] {
    return this._types;
  }
  set types(value: ondewoNlu009.OperationMetadata.OperationType[]) {
    this._types = value;
  }
  get startTime(): googleProtobuf003.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf003.Timestamp | undefined) {
    if (value !== undefined && value !== null) {
      this._startTimeOneof = OperationFilter.StartTimeOneofCase.startTime;
    }
    this._startTime = value;
  }
  get endTime(): googleProtobuf003.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf003.Timestamp | undefined) {
    if (value !== undefined && value !== null) {
      this._endTimeOneof = OperationFilter.EndTimeOneofCase.endTime;
    }
    this._endTime = value;
  }
  get userIds(): string[] {
    return this._userIds;
  }
  set userIds(value: string[]) {
    this._userIds = value;
  }
  get startTimeOneof() {
    return this._startTimeOneof;
  }
  get endTimeOneof() {
    return this._endTimeOneof;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OperationFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OperationFilter.AsObject {
    return {
      projectParents: (this.projectParents || []).slice(),
      statuses: (this.statuses || []).slice(),
      types: (this.types || []).slice(),
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
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
  ): OperationFilter.AsProtobufJSON {
    return {
      projectParents: (this.projectParents || []).slice(),
      statuses: (this.statuses || []).map(
        v => ondewoNlu009.OperationMetadata.Status[v]
      ),
      types: (this.types || []).map(
        v => ondewoNlu009.OperationMetadata.OperationType[v]
      ),
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      userIds: (this.userIds || []).slice()
    };
  }
}
export module OperationFilter {
  /**
   * Standard JavaScript object representation for OperationFilter
   */
  export interface AsObject {
    projectParents: string[];
    statuses: ondewoNlu009.OperationMetadata.Status[];
    types: ondewoNlu009.OperationMetadata.OperationType[];
    startTime?: googleProtobuf003.Timestamp.AsObject;
    endTime?: googleProtobuf003.Timestamp.AsObject;
    userIds: string[];
  }

  /**
   * Protobuf JSON representation for OperationFilter
   */
  export interface AsProtobufJSON {
    projectParents: string[];
    statuses: string[];
    types: string[];
    startTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    userIds: string[];
  }
  export enum StartTimeOneofCase {
    none = 0,
    startTime = 1
  }
  export enum EndTimeOneofCase {
    none = 0,
    endTime = 1
  }
}

/**
 * Message implementation for ondewo.nlu.ListOperationsResponse
 */
export class ListOperationsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListOperationsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOperationsResponse();
    ListOperationsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOperationsResponse) {
    _instance.operations = _instance.operations || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOperationsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Operation();
          _reader.readMessage(
            messageInitializer1,
            Operation.deserializeBinaryFromReader
          );
          (_instance.operations = _instance.operations || []).push(
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

    ListOperationsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOperationsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.operations && _instance.operations.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.operations as any,
        Operation.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _operations?: Operation[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOperationsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOperationsResponse.AsObject>) {
    _value = _value || {};
    this.operations = (_value.operations || []).map(m => new Operation(m));
    this.nextPageToken = _value.nextPageToken;
    ListOperationsResponse.refineValues(this);
  }
  get operations(): Operation[] | undefined {
    return this._operations;
  }
  set operations(value: Operation[] | undefined) {
    this._operations = value;
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
    ListOperationsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOperationsResponse.AsObject {
    return {
      operations: (this.operations || []).map(m => m.toObject()),
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
  ): ListOperationsResponse.AsProtobufJSON {
    return {
      operations: (this.operations || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListOperationsResponse {
  /**
   * Standard JavaScript object representation for ListOperationsResponse
   */
  export interface AsObject {
    operations?: Operation.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListOperationsResponse
   */
  export interface AsProtobufJSON {
    operations: Operation.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CancelOperationRequest
 */
export class CancelOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CancelOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelOperationRequest();
    CancelOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelOperationRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelOperationRequest,
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

    CancelOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CancelOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    CancelOperationRequest.refineValues(this);
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
    CancelOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelOperationRequest.AsObject {
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
  ): CancelOperationRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module CancelOperationRequest {
  /**
   * Standard JavaScript object representation for CancelOperationRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for CancelOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteOperationRequest
 */
export class DeleteOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteOperationRequest();
    DeleteOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteOperationRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteOperationRequest,
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

    DeleteOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteOperationRequest.refineValues(this);
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
    DeleteOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteOperationRequest.AsObject {
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
  ): DeleteOperationRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteOperationRequest {
  /**
   * Standard JavaScript object representation for DeleteOperationRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamRemoteOperationContainerLogsRequest
 */
export class StreamRemoteOperationContainerLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.StreamRemoteOperationContainerLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamRemoteOperationContainerLogsRequest();
    StreamRemoteOperationContainerLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamRemoteOperationContainerLogsRequest) {
    _instance.name = _instance.name || '';
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.tailLines = _instance.tailLines || 0;
    _instance.containerId = _instance.containerId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamRemoteOperationContainerLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 3:
          _instance.tailLines = _reader.readInt32();
          break;
        case 4:
          _instance.containerId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamRemoteOperationContainerLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamRemoteOperationContainerLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(2, _instance.minLogLevel);
    }
    if (_instance.tailLines) {
      _writer.writeInt32(3, _instance.tailLines);
    }
    if (_instance.containerId) {
      _writer.writeString(4, _instance.containerId);
    }
  }

  private _name: string;
  private _minLogLevel: ondewoNlu010.LogSeverity;
  private _tailLines: number;
  private _containerId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamRemoteOperationContainerLogsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      StreamRemoteOperationContainerLogsRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.minLogLevel = _value.minLogLevel;
    this.tailLines = _value.tailLines;
    this.containerId = _value.containerId;
    StreamRemoteOperationContainerLogsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get minLogLevel(): ondewoNlu010.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu010.LogSeverity) {
    this._minLogLevel = value;
  }
  get tailLines(): number {
    return this._tailLines;
  }
  set tailLines(value: number) {
    this._tailLines = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamRemoteOperationContainerLogsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamRemoteOperationContainerLogsRequest.AsObject {
    return {
      name: this.name,
      minLogLevel: this.minLogLevel,
      tailLines: this.tailLines,
      containerId: this.containerId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamRemoteOperationContainerLogsRequest.AsProtobufJSON {
    return {
      name: this.name,
      minLogLevel:
        ondewoNlu010.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      tailLines: this.tailLines,
      containerId: this.containerId
    };
  }
}
export module StreamRemoteOperationContainerLogsRequest {
  /**
   * Standard JavaScript object representation for StreamRemoteOperationContainerLogsRequest
   */
  export interface AsObject {
    name: string;
    minLogLevel: ondewoNlu010.LogSeverity;
    tailLines: number;
    containerId: string;
  }

  /**
   * Protobuf JSON representation for StreamRemoteOperationContainerLogsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    minLogLevel: string;
    tailLines: number;
    containerId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerLogsRequest
 */
export class GetRemoteOperationContainerLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerLogsRequest();
    GetRemoteOperationContainerLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerLogsRequest) {
    _instance.name = _instance.name || '';
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.maxLines = _instance.maxLines || 0;
    _instance.regex = _instance.regex || '';
    _instance.containerId = _instance.containerId || '';
    _instance.beforeSeq = _instance.beforeSeq || '0';
    _instance.afterSeq = _instance.afterSeq || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 3:
          _instance.startTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.endTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.maxLines = _reader.readInt32();
          break;
        case 6:
          _instance.regex = _reader.readString();
          break;
        case 7:
          _instance.containerId = _reader.readString();
          break;
        case 8:
          _instance.beforeSeq = _reader.readInt64String();
          break;
        case 9:
          _instance.afterSeq = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(2, _instance.minLogLevel);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        3,
        _instance.startTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        4,
        _instance.endTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.maxLines) {
      _writer.writeInt32(5, _instance.maxLines);
    }
    if (_instance.regex) {
      _writer.writeString(6, _instance.regex);
    }
    if (_instance.containerId) {
      _writer.writeString(7, _instance.containerId);
    }
    if (_instance.beforeSeq) {
      _writer.writeInt64String(8, _instance.beforeSeq);
    }
    if (_instance.afterSeq) {
      _writer.writeInt64String(9, _instance.afterSeq);
    }
  }

  private _name: string;
  private _minLogLevel: ondewoNlu010.LogSeverity;
  private _startTime?: googleProtobuf003.Timestamp;
  private _endTime?: googleProtobuf003.Timestamp;
  private _maxLines: number;
  private _regex: string;
  private _containerId: string;
  private _beforeSeq: string;
  private _afterSeq: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerLogsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerLogsRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.minLogLevel = _value.minLogLevel;
    this.startTime = _value.startTime
      ? new googleProtobuf003.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf003.Timestamp(_value.endTime)
      : undefined;
    this.maxLines = _value.maxLines;
    this.regex = _value.regex;
    this.containerId = _value.containerId;
    this.beforeSeq = _value.beforeSeq;
    this.afterSeq = _value.afterSeq;
    GetRemoteOperationContainerLogsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get minLogLevel(): ondewoNlu010.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu010.LogSeverity) {
    this._minLogLevel = value;
  }
  get startTime(): googleProtobuf003.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf003.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf003.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf003.Timestamp | undefined) {
    this._endTime = value;
  }
  get maxLines(): number {
    return this._maxLines;
  }
  set maxLines(value: number) {
    this._maxLines = value;
  }
  get regex(): string {
    return this._regex;
  }
  set regex(value: string) {
    this._regex = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerLogsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerLogsRequest.AsObject {
    return {
      name: this.name,
      minLogLevel: this.minLogLevel,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      maxLines: this.maxLines,
      regex: this.regex,
      containerId: this.containerId,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerLogsRequest.AsProtobufJSON {
    return {
      name: this.name,
      minLogLevel:
        ondewoNlu010.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      maxLines: this.maxLines,
      regex: this.regex,
      containerId: this.containerId,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq
    };
  }
}
export module GetRemoteOperationContainerLogsRequest {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerLogsRequest
   */
  export interface AsObject {
    name: string;
    minLogLevel: ondewoNlu010.LogSeverity;
    startTime?: googleProtobuf003.Timestamp.AsObject;
    endTime?: googleProtobuf003.Timestamp.AsObject;
    maxLines: number;
    regex: string;
    containerId: string;
    beforeSeq: string;
    afterSeq: string;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerLogsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    minLogLevel: string;
    startTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    maxLines: number;
    regex: string;
    containerId: string;
    beforeSeq: string;
    afterSeq: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerLogsResponse
 */
export class GetRemoteOperationContainerLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerLogsResponse();
    GetRemoteOperationContainerLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerLogsResponse) {
    _instance.logLines = _instance.logLines || [];
    _instance.truncated = _instance.truncated || false;
    _instance.minAvailableSeq = _instance.minAvailableSeq || '0';
    _instance.maxAvailableSeq = _instance.maxAvailableSeq || '0';
    _instance.hasMoreOlder = _instance.hasMoreOlder || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RemoteOperationContainerLogLine();
          _reader.readMessage(
            messageInitializer1,
            RemoteOperationContainerLogLine.deserializeBinaryFromReader
          );
          (_instance.logLines = _instance.logLines || []).push(
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
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logLines && _instance.logLines.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logLines as any,
        RemoteOperationContainerLogLine.serializeBinaryToWriter
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
  }

  private _logLines?: RemoteOperationContainerLogLine[];
  private _truncated: boolean;
  private _minAvailableSeq: string;
  private _maxAvailableSeq: string;
  private _hasMoreOlder: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerLogsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerLogsResponse.AsObject>
  ) {
    _value = _value || {};
    this.logLines = (_value.logLines || []).map(
      m => new RemoteOperationContainerLogLine(m)
    );
    this.truncated = _value.truncated;
    this.minAvailableSeq = _value.minAvailableSeq;
    this.maxAvailableSeq = _value.maxAvailableSeq;
    this.hasMoreOlder = _value.hasMoreOlder;
    GetRemoteOperationContainerLogsResponse.refineValues(this);
  }
  get logLines(): RemoteOperationContainerLogLine[] | undefined {
    return this._logLines;
  }
  set logLines(value: RemoteOperationContainerLogLine[] | undefined) {
    this._logLines = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerLogsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerLogsResponse.AsObject {
    return {
      logLines: (this.logLines || []).map(m => m.toObject()),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerLogsResponse.AsProtobufJSON {
    return {
      logLines: (this.logLines || []).map(m => m.toProtobufJSON(options)),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder
    };
  }
}
export module GetRemoteOperationContainerLogsResponse {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerLogsResponse
   */
  export interface AsObject {
    logLines?: RemoteOperationContainerLogLine.AsObject[];
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerLogsResponse
   */
  export interface AsProtobufJSON {
    logLines: RemoteOperationContainerLogLine.AsProtobufJSON[] | null;
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RemoteOperationContainerLogLine
 */
export class RemoteOperationContainerLogLine implements GrpcMessage {
  static id = 'ondewo.nlu.RemoteOperationContainerLogLine';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoteOperationContainerLogLine();
    RemoteOperationContainerLogLine.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoteOperationContainerLogLine) {
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.level = _instance.level || 0;
    _instance.message = _instance.message || '';
    _instance.containerId = _instance.containerId || '';
    _instance.containerName = _instance.containerName || '';
    _instance.seq = _instance.seq || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoteOperationContainerLogLine,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timestamp = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.level = _reader.readEnum();
          break;
        case 3:
          _instance.message = _reader.readString();
          break;
        case 4:
          _instance.containerId = _reader.readString();
          break;
        case 5:
          _instance.containerName = _reader.readString();
          break;
        case 6:
          _instance.seq = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoteOperationContainerLogLine.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoteOperationContainerLogLine,
    _writer: BinaryWriter
  ) {
    if (_instance.timestamp) {
      _writer.writeMessage(
        1,
        _instance.timestamp as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.level) {
      _writer.writeEnum(2, _instance.level);
    }
    if (_instance.message) {
      _writer.writeString(3, _instance.message);
    }
    if (_instance.containerId) {
      _writer.writeString(4, _instance.containerId);
    }
    if (_instance.containerName) {
      _writer.writeString(5, _instance.containerName);
    }
    if (_instance.seq) {
      _writer.writeInt64String(6, _instance.seq);
    }
  }

  private _timestamp?: googleProtobuf003.Timestamp;
  private _level: ondewoNlu010.LogSeverity;
  private _message: string;
  private _containerId: string;
  private _containerName: string;
  private _seq: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoteOperationContainerLogLine to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoteOperationContainerLogLine.AsObject>
  ) {
    _value = _value || {};
    this.timestamp = _value.timestamp
      ? new googleProtobuf003.Timestamp(_value.timestamp)
      : undefined;
    this.level = _value.level;
    this.message = _value.message;
    this.containerId = _value.containerId;
    this.containerName = _value.containerName;
    this.seq = _value.seq;
    RemoteOperationContainerLogLine.refineValues(this);
  }
  get timestamp(): googleProtobuf003.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf003.Timestamp | undefined) {
    this._timestamp = value;
  }
  get level(): ondewoNlu010.LogSeverity {
    return this._level;
  }
  set level(value: ondewoNlu010.LogSeverity) {
    this._level = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
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
  get seq(): string {
    return this._seq;
  }
  set seq(value: string) {
    this._seq = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoteOperationContainerLogLine.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoteOperationContainerLogLine.AsObject {
    return {
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      level: this.level,
      message: this.message,
      containerId: this.containerId,
      containerName: this.containerName,
      seq: this.seq
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RemoteOperationContainerLogLine.AsProtobufJSON {
    return {
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      level:
        ondewoNlu010.LogSeverity[
          this.level === null || this.level === undefined ? 0 : this.level
        ],
      message: this.message,
      containerId: this.containerId,
      containerName: this.containerName,
      seq: this.seq
    };
  }
}
export module RemoteOperationContainerLogLine {
  /**
   * Standard JavaScript object representation for RemoteOperationContainerLogLine
   */
  export interface AsObject {
    timestamp?: googleProtobuf003.Timestamp.AsObject;
    level: ondewoNlu010.LogSeverity;
    message: string;
    containerId: string;
    containerName: string;
    seq: string;
  }

  /**
   * Protobuf JSON representation for RemoteOperationContainerLogLine
   */
  export interface AsProtobufJSON {
    timestamp: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    level: string;
    message: string;
    containerId: string;
    containerName: string;
    seq: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerStatusRequest
 */
export class GetRemoteOperationContainerStatusRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerStatusRequest();
    GetRemoteOperationContainerStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerStatusRequest) {
    _instance.name = _instance.name || '';
    _instance.containerId = _instance.containerId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.containerId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.containerId) {
      _writer.writeString(2, _instance.containerId);
    }
  }

  private _name: string;
  private _containerId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerStatusRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerStatusRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.containerId = _value.containerId;
    GetRemoteOperationContainerStatusRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerStatusRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerStatusRequest.AsObject {
    return {
      name: this.name,
      containerId: this.containerId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerStatusRequest.AsProtobufJSON {
    return {
      name: this.name,
      containerId: this.containerId
    };
  }
}
export module GetRemoteOperationContainerStatusRequest {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerStatusRequest
   */
  export interface AsObject {
    name: string;
    containerId: string;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerStatusRequest
   */
  export interface AsProtobufJSON {
    name: string;
    containerId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RemoteOperationContainerStatus
 */
export class RemoteOperationContainerStatus implements GrpcMessage {
  static id = 'ondewo.nlu.RemoteOperationContainerStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoteOperationContainerStatus();
    RemoteOperationContainerStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoteOperationContainerStatus) {
    _instance.name = _instance.name || '';
    _instance.lifecycleState = _instance.lifecycleState || 0;
    _instance.hostName = _instance.hostName || '';
    _instance.containerName = _instance.containerName || '';
    _instance.containerId = _instance.containerId || '';
    _instance.exitCode = _instance.exitCode || 0;
    _instance.oomKilled = _instance.oomKilled || false;
    _instance.healthStatus = _instance.healthStatus || '';
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
    _instance.observedAt = _instance.observedAt || undefined;
    _instance.environmentVariables = _instance.environmentVariables || {};
    _instance.command = _instance.command || [];
    _instance.memoryLimitBytes = _instance.memoryLimitBytes || '0';
    _instance.nanoCpus = _instance.nanoCpus || '0';
    _instance.cpusetCpus = _instance.cpusetCpus || '';
    _instance.cpuQuota = _instance.cpuQuota || '0';
    _instance.cpuPeriod = _instance.cpuPeriod || '0';
    _instance.image = _instance.image || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoteOperationContainerStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.lifecycleState = _reader.readEnum();
          break;
        case 3:
          _instance.hostName = _reader.readString();
          break;
        case 4:
          _instance.containerName = _reader.readString();
          break;
        case 11:
          _instance.containerId = _reader.readString();
          break;
        case 5:
          _instance.exitCode = _reader.readInt32();
          break;
        case 6:
          _instance.oomKilled = _reader.readBool();
          break;
        case 7:
          _instance.healthStatus = _reader.readString();
          break;
        case 8:
          _instance.startedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.finishedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.observedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.observedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          const msg_12 = {} as any;
          _reader.readMessage(
            msg_12,
            RemoteOperationContainerStatus.EnvironmentVariablesEntry
              .deserializeBinaryFromReader
          );
          _instance.environmentVariables = _instance.environmentVariables || {};
          _instance.environmentVariables[msg_12.key] = msg_12.value;
          break;
        case 13:
          (_instance.command = _instance.command || []).push(
            _reader.readString()
          );
          break;
        case 14:
          _instance.memoryLimitBytes = _reader.readInt64String();
          break;
        case 15:
          _instance.nanoCpus = _reader.readInt64String();
          break;
        case 16:
          _instance.cpusetCpus = _reader.readString();
          break;
        case 17:
          _instance.cpuQuota = _reader.readInt64String();
          break;
        case 18:
          _instance.cpuPeriod = _reader.readInt64String();
          break;
        case 19:
          _instance.image = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoteOperationContainerStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoteOperationContainerStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.lifecycleState) {
      _writer.writeEnum(2, _instance.lifecycleState);
    }
    if (_instance.hostName) {
      _writer.writeString(3, _instance.hostName);
    }
    if (_instance.containerName) {
      _writer.writeString(4, _instance.containerName);
    }
    if (_instance.containerId) {
      _writer.writeString(11, _instance.containerId);
    }
    if (_instance.exitCode) {
      _writer.writeInt32(5, _instance.exitCode);
    }
    if (_instance.oomKilled) {
      _writer.writeBool(6, _instance.oomKilled);
    }
    if (_instance.healthStatus) {
      _writer.writeString(7, _instance.healthStatus);
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        8,
        _instance.startedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        9,
        _instance.finishedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.observedAt) {
      _writer.writeMessage(
        10,
        _instance.observedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (!!_instance.environmentVariables) {
      const keys_12 = Object.keys(_instance.environmentVariables as any);

      if (keys_12.length) {
        const repeated_12 = keys_12
          .map(key => ({
            key: key,
            value: (_instance.environmentVariables as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          12,
          repeated_12,
          RemoteOperationContainerStatus.EnvironmentVariablesEntry
            .serializeBinaryToWriter
        );
      }
    }
    if (_instance.command && _instance.command.length) {
      _writer.writeRepeatedString(13, _instance.command);
    }
    if (_instance.memoryLimitBytes) {
      _writer.writeInt64String(14, _instance.memoryLimitBytes);
    }
    if (_instance.nanoCpus) {
      _writer.writeInt64String(15, _instance.nanoCpus);
    }
    if (_instance.cpusetCpus) {
      _writer.writeString(16, _instance.cpusetCpus);
    }
    if (_instance.cpuQuota) {
      _writer.writeInt64String(17, _instance.cpuQuota);
    }
    if (_instance.cpuPeriod) {
      _writer.writeInt64String(18, _instance.cpuPeriod);
    }
    if (_instance.image) {
      _writer.writeString(19, _instance.image);
    }
  }

  private _name: string;
  private _lifecycleState: RemoteOperationContainerLifecycleState;
  private _hostName: string;
  private _containerName: string;
  private _containerId: string;
  private _exitCode: number;
  private _oomKilled: boolean;
  private _healthStatus: string;
  private _startedAt?: googleProtobuf003.Timestamp;
  private _finishedAt?: googleProtobuf003.Timestamp;
  private _observedAt?: googleProtobuf003.Timestamp;
  private _environmentVariables: { [prop: string]: string };
  private _command: string[];
  private _memoryLimitBytes: string;
  private _nanoCpus: string;
  private _cpusetCpus: string;
  private _cpuQuota: string;
  private _cpuPeriod: string;
  private _image: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoteOperationContainerStatus to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoteOperationContainerStatus.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.lifecycleState = _value.lifecycleState;
    this.hostName = _value.hostName;
    this.containerName = _value.containerName;
    this.containerId = _value.containerId;
    this.exitCode = _value.exitCode;
    this.oomKilled = _value.oomKilled;
    this.healthStatus = _value.healthStatus;
    this.startedAt = _value.startedAt
      ? new googleProtobuf003.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf003.Timestamp(_value.finishedAt)
      : undefined;
    this.observedAt = _value.observedAt
      ? new googleProtobuf003.Timestamp(_value.observedAt)
      : undefined;
    (this.environmentVariables = _value!.environmentVariables
      ? Object.keys(_value!.environmentVariables).reduce(
          (r, k) => ({ ...r, [k]: _value!.environmentVariables![k] }),
          {}
        )
      : {}),
      (this.command = (_value.command || []).slice());
    this.memoryLimitBytes = _value.memoryLimitBytes;
    this.nanoCpus = _value.nanoCpus;
    this.cpusetCpus = _value.cpusetCpus;
    this.cpuQuota = _value.cpuQuota;
    this.cpuPeriod = _value.cpuPeriod;
    this.image = _value.image;
    RemoteOperationContainerStatus.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get lifecycleState(): RemoteOperationContainerLifecycleState {
    return this._lifecycleState;
  }
  set lifecycleState(value: RemoteOperationContainerLifecycleState) {
    this._lifecycleState = value;
  }
  get hostName(): string {
    return this._hostName;
  }
  set hostName(value: string) {
    this._hostName = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }
  get exitCode(): number {
    return this._exitCode;
  }
  set exitCode(value: number) {
    this._exitCode = value;
  }
  get oomKilled(): boolean {
    return this._oomKilled;
  }
  set oomKilled(value: boolean) {
    this._oomKilled = value;
  }
  get healthStatus(): string {
    return this._healthStatus;
  }
  set healthStatus(value: string) {
    this._healthStatus = value;
  }
  get startedAt(): googleProtobuf003.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf003.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._finishedAt = value;
  }
  get observedAt(): googleProtobuf003.Timestamp | undefined {
    return this._observedAt;
  }
  set observedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._observedAt = value;
  }
  get environmentVariables(): { [prop: string]: string } {
    return this._environmentVariables;
  }
  set environmentVariables(value: { [prop: string]: string }) {
    this._environmentVariables = value;
  }
  get command(): string[] {
    return this._command;
  }
  set command(value: string[]) {
    this._command = value;
  }
  get memoryLimitBytes(): string {
    return this._memoryLimitBytes;
  }
  set memoryLimitBytes(value: string) {
    this._memoryLimitBytes = value;
  }
  get nanoCpus(): string {
    return this._nanoCpus;
  }
  set nanoCpus(value: string) {
    this._nanoCpus = value;
  }
  get cpusetCpus(): string {
    return this._cpusetCpus;
  }
  set cpusetCpus(value: string) {
    this._cpusetCpus = value;
  }
  get cpuQuota(): string {
    return this._cpuQuota;
  }
  set cpuQuota(value: string) {
    this._cpuQuota = value;
  }
  get cpuPeriod(): string {
    return this._cpuPeriod;
  }
  set cpuPeriod(value: string) {
    this._cpuPeriod = value;
  }
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoteOperationContainerStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoteOperationContainerStatus.AsObject {
    return {
      name: this.name,
      lifecycleState: this.lifecycleState,
      hostName: this.hostName,
      containerName: this.containerName,
      containerId: this.containerId,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      healthStatus: this.healthStatus,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined,
      observedAt: this.observedAt ? this.observedAt.toObject() : undefined,
      environmentVariables: this.environmentVariables
        ? Object.keys(this.environmentVariables).reduce(
            (r, k) => ({ ...r, [k]: this.environmentVariables![k] }),
            {}
          )
        : {},
      command: (this.command || []).slice(),
      memoryLimitBytes: this.memoryLimitBytes,
      nanoCpus: this.nanoCpus,
      cpusetCpus: this.cpusetCpus,
      cpuQuota: this.cpuQuota,
      cpuPeriod: this.cpuPeriod,
      image: this.image
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RemoteOperationContainerStatus.AsProtobufJSON {
    return {
      name: this.name,
      lifecycleState:
        RemoteOperationContainerLifecycleState[
          this.lifecycleState === null || this.lifecycleState === undefined
            ? 0
            : this.lifecycleState
        ],
      hostName: this.hostName,
      containerName: this.containerName,
      containerId: this.containerId,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      healthStatus: this.healthStatus,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null,
      observedAt: this.observedAt
        ? this.observedAt.toProtobufJSON(options)
        : null,
      environmentVariables: this.environmentVariables
        ? Object.keys(this.environmentVariables).reduce(
            (r, k) => ({ ...r, [k]: this.environmentVariables![k] }),
            {}
          )
        : {},
      command: (this.command || []).slice(),
      memoryLimitBytes: this.memoryLimitBytes,
      nanoCpus: this.nanoCpus,
      cpusetCpus: this.cpusetCpus,
      cpuQuota: this.cpuQuota,
      cpuPeriod: this.cpuPeriod,
      image: this.image
    };
  }
}
export module RemoteOperationContainerStatus {
  /**
   * Standard JavaScript object representation for RemoteOperationContainerStatus
   */
  export interface AsObject {
    name: string;
    lifecycleState: RemoteOperationContainerLifecycleState;
    hostName: string;
    containerName: string;
    containerId: string;
    exitCode: number;
    oomKilled: boolean;
    healthStatus: string;
    startedAt?: googleProtobuf003.Timestamp.AsObject;
    finishedAt?: googleProtobuf003.Timestamp.AsObject;
    observedAt?: googleProtobuf003.Timestamp.AsObject;
    environmentVariables: { [prop: string]: string };
    command: string[];
    memoryLimitBytes: string;
    nanoCpus: string;
    cpusetCpus: string;
    cpuQuota: string;
    cpuPeriod: string;
    image: string;
  }

  /**
   * Protobuf JSON representation for RemoteOperationContainerStatus
   */
  export interface AsProtobufJSON {
    name: string;
    lifecycleState: string;
    hostName: string;
    containerName: string;
    containerId: string;
    exitCode: number;
    oomKilled: boolean;
    healthStatus: string;
    startedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    observedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    environmentVariables: { [prop: string]: string };
    command: string[];
    memoryLimitBytes: string;
    nanoCpus: string;
    cpusetCpus: string;
    cpuQuota: string;
    cpuPeriod: string;
    image: string;
  }

  /**
   * Message implementation for ondewo.nlu.RemoteOperationContainerStatus.EnvironmentVariablesEntry
   */
  export class EnvironmentVariablesEntry implements GrpcMessage {
    static id =
      'ondewo.nlu.RemoteOperationContainerStatus.EnvironmentVariablesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EnvironmentVariablesEntry();
      EnvironmentVariablesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EnvironmentVariablesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: EnvironmentVariablesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      EnvironmentVariablesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EnvironmentVariablesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EnvironmentVariablesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<EnvironmentVariablesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      EnvironmentVariablesEntry.refineValues(this);
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
      EnvironmentVariablesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EnvironmentVariablesEntry.AsObject {
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
    ): EnvironmentVariablesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module EnvironmentVariablesEntry {
    /**
     * Standard JavaScript object representation for EnvironmentVariablesEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for EnvironmentVariablesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.RemoteOperationContainer
 */
export class RemoteOperationContainer implements GrpcMessage {
  static id = 'ondewo.nlu.RemoteOperationContainer';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoteOperationContainer();
    RemoteOperationContainer.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoteOperationContainer) {
    _instance.containerId = _instance.containerId || '';
    _instance.containerName = _instance.containerName || '';
    _instance.hostName = _instance.hostName || '';
    _instance.lifecycleState = _instance.lifecycleState || 0;
    _instance.operationName = _instance.operationName || '';
    _instance.image = _instance.image || '';
    _instance.phase = _instance.phase || '';
    _instance.exitCode = _instance.exitCode || 0;
    _instance.oomKilled = _instance.oomKilled || false;
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
    _instance.logsAvailable = _instance.logsAvailable || false;
    _instance.environmentVariables = _instance.environmentVariables || {};
    _instance.command = _instance.command || [];
    _instance.memoryLimitBytes = _instance.memoryLimitBytes || '0';
    _instance.nanoCpus = _instance.nanoCpus || '0';
    _instance.cpusetCpus = _instance.cpusetCpus || '';
    _instance.cpuQuota = _instance.cpuQuota || '0';
    _instance.cpuPeriod = _instance.cpuPeriod || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoteOperationContainer,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.containerId = _reader.readString();
          break;
        case 2:
          _instance.containerName = _reader.readString();
          break;
        case 3:
          _instance.hostName = _reader.readString();
          break;
        case 4:
          _instance.lifecycleState = _reader.readEnum();
          break;
        case 5:
          _instance.operationName = _reader.readString();
          break;
        case 6:
          _instance.image = _reader.readString();
          break;
        case 7:
          _instance.phase = _reader.readString();
          break;
        case 8:
          _instance.exitCode = _reader.readInt32();
          break;
        case 9:
          _instance.oomKilled = _reader.readBool();
          break;
        case 10:
          _instance.startedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.finishedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.logsAvailable = _reader.readBool();
          break;
        case 13:
          const msg_13 = {} as any;
          _reader.readMessage(
            msg_13,
            RemoteOperationContainer.EnvironmentVariablesEntry
              .deserializeBinaryFromReader
          );
          _instance.environmentVariables = _instance.environmentVariables || {};
          _instance.environmentVariables[msg_13.key] = msg_13.value;
          break;
        case 14:
          (_instance.command = _instance.command || []).push(
            _reader.readString()
          );
          break;
        case 15:
          _instance.memoryLimitBytes = _reader.readInt64String();
          break;
        case 16:
          _instance.nanoCpus = _reader.readInt64String();
          break;
        case 17:
          _instance.cpusetCpus = _reader.readString();
          break;
        case 18:
          _instance.cpuQuota = _reader.readInt64String();
          break;
        case 19:
          _instance.cpuPeriod = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoteOperationContainer.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoteOperationContainer,
    _writer: BinaryWriter
  ) {
    if (_instance.containerId) {
      _writer.writeString(1, _instance.containerId);
    }
    if (_instance.containerName) {
      _writer.writeString(2, _instance.containerName);
    }
    if (_instance.hostName) {
      _writer.writeString(3, _instance.hostName);
    }
    if (_instance.lifecycleState) {
      _writer.writeEnum(4, _instance.lifecycleState);
    }
    if (_instance.operationName) {
      _writer.writeString(5, _instance.operationName);
    }
    if (_instance.image) {
      _writer.writeString(6, _instance.image);
    }
    if (_instance.phase) {
      _writer.writeString(7, _instance.phase);
    }
    if (_instance.exitCode) {
      _writer.writeInt32(8, _instance.exitCode);
    }
    if (_instance.oomKilled) {
      _writer.writeBool(9, _instance.oomKilled);
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        10,
        _instance.startedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        11,
        _instance.finishedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.logsAvailable) {
      _writer.writeBool(12, _instance.logsAvailable);
    }
    if (!!_instance.environmentVariables) {
      const keys_13 = Object.keys(_instance.environmentVariables as any);

      if (keys_13.length) {
        const repeated_13 = keys_13
          .map(key => ({
            key: key,
            value: (_instance.environmentVariables as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          13,
          repeated_13,
          RemoteOperationContainer.EnvironmentVariablesEntry
            .serializeBinaryToWriter
        );
      }
    }
    if (_instance.command && _instance.command.length) {
      _writer.writeRepeatedString(14, _instance.command);
    }
    if (_instance.memoryLimitBytes) {
      _writer.writeInt64String(15, _instance.memoryLimitBytes);
    }
    if (_instance.nanoCpus) {
      _writer.writeInt64String(16, _instance.nanoCpus);
    }
    if (_instance.cpusetCpus) {
      _writer.writeString(17, _instance.cpusetCpus);
    }
    if (_instance.cpuQuota) {
      _writer.writeInt64String(18, _instance.cpuQuota);
    }
    if (_instance.cpuPeriod) {
      _writer.writeInt64String(19, _instance.cpuPeriod);
    }
  }

  private _containerId: string;
  private _containerName: string;
  private _hostName: string;
  private _lifecycleState: RemoteOperationContainerLifecycleState;
  private _operationName: string;
  private _image: string;
  private _phase: string;
  private _exitCode: number;
  private _oomKilled: boolean;
  private _startedAt?: googleProtobuf003.Timestamp;
  private _finishedAt?: googleProtobuf003.Timestamp;
  private _logsAvailable: boolean;
  private _environmentVariables: { [prop: string]: string };
  private _command: string[];
  private _memoryLimitBytes: string;
  private _nanoCpus: string;
  private _cpusetCpus: string;
  private _cpuQuota: string;
  private _cpuPeriod: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoteOperationContainer to deeply clone from
   */
  constructor(_value?: RecursivePartial<RemoteOperationContainer.AsObject>) {
    _value = _value || {};
    this.containerId = _value.containerId;
    this.containerName = _value.containerName;
    this.hostName = _value.hostName;
    this.lifecycleState = _value.lifecycleState;
    this.operationName = _value.operationName;
    this.image = _value.image;
    this.phase = _value.phase;
    this.exitCode = _value.exitCode;
    this.oomKilled = _value.oomKilled;
    this.startedAt = _value.startedAt
      ? new googleProtobuf003.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf003.Timestamp(_value.finishedAt)
      : undefined;
    this.logsAvailable = _value.logsAvailable;
    (this.environmentVariables = _value!.environmentVariables
      ? Object.keys(_value!.environmentVariables).reduce(
          (r, k) => ({ ...r, [k]: _value!.environmentVariables![k] }),
          {}
        )
      : {}),
      (this.command = (_value.command || []).slice());
    this.memoryLimitBytes = _value.memoryLimitBytes;
    this.nanoCpus = _value.nanoCpus;
    this.cpusetCpus = _value.cpusetCpus;
    this.cpuQuota = _value.cpuQuota;
    this.cpuPeriod = _value.cpuPeriod;
    RemoteOperationContainer.refineValues(this);
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
  get hostName(): string {
    return this._hostName;
  }
  set hostName(value: string) {
    this._hostName = value;
  }
  get lifecycleState(): RemoteOperationContainerLifecycleState {
    return this._lifecycleState;
  }
  set lifecycleState(value: RemoteOperationContainerLifecycleState) {
    this._lifecycleState = value;
  }
  get operationName(): string {
    return this._operationName;
  }
  set operationName(value: string) {
    this._operationName = value;
  }
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }
  get phase(): string {
    return this._phase;
  }
  set phase(value: string) {
    this._phase = value;
  }
  get exitCode(): number {
    return this._exitCode;
  }
  set exitCode(value: number) {
    this._exitCode = value;
  }
  get oomKilled(): boolean {
    return this._oomKilled;
  }
  set oomKilled(value: boolean) {
    this._oomKilled = value;
  }
  get startedAt(): googleProtobuf003.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf003.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._finishedAt = value;
  }
  get logsAvailable(): boolean {
    return this._logsAvailable;
  }
  set logsAvailable(value: boolean) {
    this._logsAvailable = value;
  }
  get environmentVariables(): { [prop: string]: string } {
    return this._environmentVariables;
  }
  set environmentVariables(value: { [prop: string]: string }) {
    this._environmentVariables = value;
  }
  get command(): string[] {
    return this._command;
  }
  set command(value: string[]) {
    this._command = value;
  }
  get memoryLimitBytes(): string {
    return this._memoryLimitBytes;
  }
  set memoryLimitBytes(value: string) {
    this._memoryLimitBytes = value;
  }
  get nanoCpus(): string {
    return this._nanoCpus;
  }
  set nanoCpus(value: string) {
    this._nanoCpus = value;
  }
  get cpusetCpus(): string {
    return this._cpusetCpus;
  }
  set cpusetCpus(value: string) {
    this._cpusetCpus = value;
  }
  get cpuQuota(): string {
    return this._cpuQuota;
  }
  set cpuQuota(value: string) {
    this._cpuQuota = value;
  }
  get cpuPeriod(): string {
    return this._cpuPeriod;
  }
  set cpuPeriod(value: string) {
    this._cpuPeriod = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoteOperationContainer.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoteOperationContainer.AsObject {
    return {
      containerId: this.containerId,
      containerName: this.containerName,
      hostName: this.hostName,
      lifecycleState: this.lifecycleState,
      operationName: this.operationName,
      image: this.image,
      phase: this.phase,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined,
      logsAvailable: this.logsAvailable,
      environmentVariables: this.environmentVariables
        ? Object.keys(this.environmentVariables).reduce(
            (r, k) => ({ ...r, [k]: this.environmentVariables![k] }),
            {}
          )
        : {},
      command: (this.command || []).slice(),
      memoryLimitBytes: this.memoryLimitBytes,
      nanoCpus: this.nanoCpus,
      cpusetCpus: this.cpusetCpus,
      cpuQuota: this.cpuQuota,
      cpuPeriod: this.cpuPeriod
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RemoteOperationContainer.AsProtobufJSON {
    return {
      containerId: this.containerId,
      containerName: this.containerName,
      hostName: this.hostName,
      lifecycleState:
        RemoteOperationContainerLifecycleState[
          this.lifecycleState === null || this.lifecycleState === undefined
            ? 0
            : this.lifecycleState
        ],
      operationName: this.operationName,
      image: this.image,
      phase: this.phase,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null,
      logsAvailable: this.logsAvailable,
      environmentVariables: this.environmentVariables
        ? Object.keys(this.environmentVariables).reduce(
            (r, k) => ({ ...r, [k]: this.environmentVariables![k] }),
            {}
          )
        : {},
      command: (this.command || []).slice(),
      memoryLimitBytes: this.memoryLimitBytes,
      nanoCpus: this.nanoCpus,
      cpusetCpus: this.cpusetCpus,
      cpuQuota: this.cpuQuota,
      cpuPeriod: this.cpuPeriod
    };
  }
}
export module RemoteOperationContainer {
  /**
   * Standard JavaScript object representation for RemoteOperationContainer
   */
  export interface AsObject {
    containerId: string;
    containerName: string;
    hostName: string;
    lifecycleState: RemoteOperationContainerLifecycleState;
    operationName: string;
    image: string;
    phase: string;
    exitCode: number;
    oomKilled: boolean;
    startedAt?: googleProtobuf003.Timestamp.AsObject;
    finishedAt?: googleProtobuf003.Timestamp.AsObject;
    logsAvailable: boolean;
    environmentVariables: { [prop: string]: string };
    command: string[];
    memoryLimitBytes: string;
    nanoCpus: string;
    cpusetCpus: string;
    cpuQuota: string;
    cpuPeriod: string;
  }

  /**
   * Protobuf JSON representation for RemoteOperationContainer
   */
  export interface AsProtobufJSON {
    containerId: string;
    containerName: string;
    hostName: string;
    lifecycleState: string;
    operationName: string;
    image: string;
    phase: string;
    exitCode: number;
    oomKilled: boolean;
    startedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    logsAvailable: boolean;
    environmentVariables: { [prop: string]: string };
    command: string[];
    memoryLimitBytes: string;
    nanoCpus: string;
    cpusetCpus: string;
    cpuQuota: string;
    cpuPeriod: string;
  }

  /**
   * Message implementation for ondewo.nlu.RemoteOperationContainer.EnvironmentVariablesEntry
   */
  export class EnvironmentVariablesEntry implements GrpcMessage {
    static id = 'ondewo.nlu.RemoteOperationContainer.EnvironmentVariablesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EnvironmentVariablesEntry();
      EnvironmentVariablesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EnvironmentVariablesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: EnvironmentVariablesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      EnvironmentVariablesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EnvironmentVariablesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EnvironmentVariablesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<EnvironmentVariablesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      EnvironmentVariablesEntry.refineValues(this);
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
      EnvironmentVariablesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EnvironmentVariablesEntry.AsObject {
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
    ): EnvironmentVariablesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module EnvironmentVariablesEntry {
    /**
     * Standard JavaScript object representation for EnvironmentVariablesEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for EnvironmentVariablesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.ListRemoteOperationContainersRequest
 */
export class ListRemoteOperationContainersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListRemoteOperationContainersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRemoteOperationContainersRequest();
    ListRemoteOperationContainersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRemoteOperationContainersRequest) {
    _instance.name = _instance.name || '';
    _instance.includeSubOperations = _instance.includeSubOperations || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRemoteOperationContainersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.includeSubOperations = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ListRemoteOperationContainersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRemoteOperationContainersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.includeSubOperations) {
      _writer.writeBool(2, _instance.includeSubOperations);
    }
  }

  private _name: string;
  private _includeSubOperations: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRemoteOperationContainersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRemoteOperationContainersRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.includeSubOperations = _value.includeSubOperations;
    ListRemoteOperationContainersRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get includeSubOperations(): boolean {
    return this._includeSubOperations;
  }
  set includeSubOperations(value: boolean) {
    this._includeSubOperations = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRemoteOperationContainersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRemoteOperationContainersRequest.AsObject {
    return {
      name: this.name,
      includeSubOperations: this.includeSubOperations
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListRemoteOperationContainersRequest.AsProtobufJSON {
    return {
      name: this.name,
      includeSubOperations: this.includeSubOperations
    };
  }
}
export module ListRemoteOperationContainersRequest {
  /**
   * Standard JavaScript object representation for ListRemoteOperationContainersRequest
   */
  export interface AsObject {
    name: string;
    includeSubOperations: boolean;
  }

  /**
   * Protobuf JSON representation for ListRemoteOperationContainersRequest
   */
  export interface AsProtobufJSON {
    name: string;
    includeSubOperations: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.ListRemoteOperationContainersResponse
 */
export class ListRemoteOperationContainersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListRemoteOperationContainersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRemoteOperationContainersResponse();
    ListRemoteOperationContainersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRemoteOperationContainersResponse) {
    _instance.containers = _instance.containers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRemoteOperationContainersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RemoteOperationContainer();
          _reader.readMessage(
            messageInitializer1,
            RemoteOperationContainer.deserializeBinaryFromReader
          );
          (_instance.containers = _instance.containers || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListRemoteOperationContainersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRemoteOperationContainersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.containers && _instance.containers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.containers as any,
        RemoteOperationContainer.serializeBinaryToWriter
      );
    }
  }

  private _containers?: RemoteOperationContainer[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRemoteOperationContainersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRemoteOperationContainersResponse.AsObject>
  ) {
    _value = _value || {};
    this.containers = (_value.containers || []).map(
      m => new RemoteOperationContainer(m)
    );
    ListRemoteOperationContainersResponse.refineValues(this);
  }
  get containers(): RemoteOperationContainer[] | undefined {
    return this._containers;
  }
  set containers(value: RemoteOperationContainer[] | undefined) {
    this._containers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRemoteOperationContainersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRemoteOperationContainersResponse.AsObject {
    return {
      containers: (this.containers || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListRemoteOperationContainersResponse.AsProtobufJSON {
    return {
      containers: (this.containers || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListRemoteOperationContainersResponse {
  /**
   * Standard JavaScript object representation for ListRemoteOperationContainersResponse
   */
  export interface AsObject {
    containers?: RemoteOperationContainer.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListRemoteOperationContainersResponse
   */
  export interface AsProtobufJSON {
    containers: RemoteOperationContainer.AsProtobufJSON[] | null;
  }
}
