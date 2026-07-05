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
import * as googleApi004 from '../../google/api/annotations.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/operation-metadata.pb';
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
          _instance.metadata = new ondewoNlu007.OperationMetadata();
          _reader.readMessage(
            _instance.metadata,
            ondewoNlu007.OperationMetadata.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.done = _reader.readBool();
          break;
        case 4:
          _instance.error = new googleRpc006.Status();
          _reader.readMessage(
            _instance.error,
            googleRpc006.Status.deserializeBinaryFromReader
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
        ondewoNlu007.OperationMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.done) {
      _writer.writeBool(3, _instance.done);
    }
    if (_instance.error) {
      _writer.writeMessage(
        4,
        _instance.error as any,
        googleRpc006.Status.serializeBinaryToWriter
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
  private _metadata?: ondewoNlu007.OperationMetadata;
  private _done: boolean;
  private _error?: googleRpc006.Status;
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
      ? new ondewoNlu007.OperationMetadata(_value.metadata)
      : undefined;
    this.done = _value.done;
    this.error = _value.error
      ? new googleRpc006.Status(_value.error)
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
  get metadata(): ondewoNlu007.OperationMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: ondewoNlu007.OperationMetadata | undefined) {
    this._metadata = value;
  }
  get done(): boolean {
    return this._done;
  }
  set done(value: boolean) {
    this._done = value;
  }
  get error(): googleRpc006.Status | undefined {
    return this._error;
  }
  set error(value: googleRpc006.Status | undefined) {
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
    metadata?: ondewoNlu007.OperationMetadata.AsObject;
    done: boolean;
    error?: googleRpc006.Status.AsObject;
    response?: googleProtobuf002.Any.AsObject;
  }

  /**
   * Protobuf JSON representation for Operation
   */
  export interface AsProtobufJSON {
    name: string;
    metadata: ondewoNlu007.OperationMetadata.AsProtobufJSON | null;
    done: boolean;
    error: googleRpc006.Status.AsProtobufJSON | null;
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
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetOperationRequest.refineValues(this);
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
    GetOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetOperationRequest.AsObject {
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
  ): GetOperationRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetOperationRequest {
  /**
   * Standard JavaScript object representation for GetOperationRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
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
  }

  private _name: string;
  private _filter: string;
  private _pageSize: number;
  private _pageToken: string;
  private _operationFilter?: OperationFilter;

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
  ): ListOperationsRequest.AsProtobufJSON {
    return {
      name: this.name,
      filter: this.filter,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      operationFilter: this.operationFilter
        ? this.operationFilter.toProtobufJSON(options)
        : null
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
  private _statuses: ondewoNlu007.OperationMetadata.Status[];
  private _types: ondewoNlu007.OperationMetadata.OperationType[];
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
  get statuses(): ondewoNlu007.OperationMetadata.Status[] {
    return this._statuses;
  }
  set statuses(value: ondewoNlu007.OperationMetadata.Status[]) {
    this._statuses = value;
  }
  get types(): ondewoNlu007.OperationMetadata.OperationType[] {
    return this._types;
  }
  set types(value: ondewoNlu007.OperationMetadata.OperationType[]) {
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
        v => ondewoNlu007.OperationMetadata.Status[v]
      ),
      types: (this.types || []).map(
        v => ondewoNlu007.OperationMetadata.OperationType[v]
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
    statuses: ondewoNlu007.OperationMetadata.Status[];
    types: ondewoNlu007.OperationMetadata.OperationType[];
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
