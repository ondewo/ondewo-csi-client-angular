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
import * as googleApi000 from '../../google/api/annotations.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/entity-type.pb';
export enum ReannotateEntitiesOptions {
  REANNOTATE_NEVER = 0,
  REANNOTATE_ALWAYS = 1,
  REANNOTATE_IF_EMPTY = 2,
  REANNOTATE_AFTER_DELETION = 3,
  REANNOTATE_IF_EMPTY_OR_AFTER_DELETION = 4
}
/**
 * Message implementation for ondewo.nlu.ValidateRegexRequest
 */
export class ValidateRegexRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ValidateRegexRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateRegexRequest();
    ValidateRegexRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateRegexRequest) {
    _instance.regex = _instance.regex || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateRegexRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.regex = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateRegexRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateRegexRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.regex) {
      _writer.writeString(1, _instance.regex);
    }
  }

  private _regex: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateRegexRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ValidateRegexRequest.AsObject>) {
    _value = _value || {};
    this.regex = _value.regex;
    ValidateRegexRequest.refineValues(this);
  }
  get regex(): string {
    return this._regex;
  }
  set regex(value: string) {
    this._regex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateRegexRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateRegexRequest.AsObject {
    return {
      regex: this.regex
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateRegexRequest.AsProtobufJSON {
    return {
      regex: this.regex
    };
  }
}
export module ValidateRegexRequest {
  /**
   * Standard JavaScript object representation for ValidateRegexRequest
   */
  export interface AsObject {
    regex: string;
  }

  /**
   * Protobuf JSON representation for ValidateRegexRequest
   */
  export interface AsProtobufJSON {
    regex: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ValidateRegexResponse
 */
export class ValidateRegexResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ValidateRegexResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateRegexResponse();
    ValidateRegexResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateRegexResponse) {
    _instance.errorMessages = _instance.errorMessages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateRegexResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.errorMessages = _instance.errorMessages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateRegexResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateRegexResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.errorMessages && _instance.errorMessages.length) {
      _writer.writeRepeatedString(1, _instance.errorMessages);
    }
  }

  private _errorMessages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateRegexResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ValidateRegexResponse.AsObject>) {
    _value = _value || {};
    this.errorMessages = (_value.errorMessages || []).slice();
    ValidateRegexResponse.refineValues(this);
  }
  get errorMessages(): string[] {
    return this._errorMessages;
  }
  set errorMessages(value: string[]) {
    this._errorMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateRegexResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateRegexResponse.AsObject {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateRegexResponse.AsProtobufJSON {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }
}
export module ValidateRegexResponse {
  /**
   * Standard JavaScript object representation for ValidateRegexResponse
   */
  export interface AsObject {
    errorMessages: string[];
  }

  /**
   * Protobuf JSON representation for ValidateRegexResponse
   */
  export interface AsProtobufJSON {
    errorMessages: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export class ValidateEmbeddedRegexRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ValidateEmbeddedRegexRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateEmbeddedRegexRequest();
    ValidateEmbeddedRegexRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateEmbeddedRegexRequest) {
    _instance.entityType = _instance.entityType || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateEmbeddedRegexRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityType = new ondewoNlu009.EntityType.Entity();
          _reader.readMessage(
            _instance.entityType,
            ondewoNlu009.EntityType.Entity.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateEmbeddedRegexRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateEmbeddedRegexRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.entityType) {
      _writer.writeMessage(
        1,
        _instance.entityType as any,
        ondewoNlu009.EntityType.Entity.serializeBinaryToWriter
      );
    }
  }

  private _entityType?: ondewoNlu009.EntityType.Entity;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateEmbeddedRegexRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ValidateEmbeddedRegexRequest.AsObject>
  ) {
    _value = _value || {};
    this.entityType = _value.entityType
      ? new ondewoNlu009.EntityType.Entity(_value.entityType)
      : undefined;
    ValidateEmbeddedRegexRequest.refineValues(this);
  }
  get entityType(): ondewoNlu009.EntityType.Entity | undefined {
    return this._entityType;
  }
  set entityType(value: ondewoNlu009.EntityType.Entity | undefined) {
    this._entityType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateEmbeddedRegexRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateEmbeddedRegexRequest.AsObject {
    return {
      entityType: this.entityType ? this.entityType.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateEmbeddedRegexRequest.AsProtobufJSON {
    return {
      entityType: this.entityType
        ? this.entityType.toProtobufJSON(options)
        : null
    };
  }
}
export module ValidateEmbeddedRegexRequest {
  /**
   * Standard JavaScript object representation for ValidateEmbeddedRegexRequest
   */
  export interface AsObject {
    entityType?: ondewoNlu009.EntityType.Entity.AsObject;
  }

  /**
   * Protobuf JSON representation for ValidateEmbeddedRegexRequest
   */
  export interface AsProtobufJSON {
    entityType: ondewoNlu009.EntityType.Entity.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export class ValidateEmbeddedRegexResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ValidateEmbeddedRegexResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateEmbeddedRegexResponse();
    ValidateEmbeddedRegexResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateEmbeddedRegexResponse) {
    _instance.errorMessages = _instance.errorMessages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateEmbeddedRegexResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.errorMessages = _instance.errorMessages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateEmbeddedRegexResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateEmbeddedRegexResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.errorMessages && _instance.errorMessages.length) {
      _writer.writeRepeatedString(1, _instance.errorMessages);
    }
  }

  private _errorMessages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateEmbeddedRegexResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ValidateEmbeddedRegexResponse.AsObject>
  ) {
    _value = _value || {};
    this.errorMessages = (_value.errorMessages || []).slice();
    ValidateEmbeddedRegexResponse.refineValues(this);
  }
  get errorMessages(): string[] {
    return this._errorMessages;
  }
  set errorMessages(value: string[]) {
    this._errorMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateEmbeddedRegexResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateEmbeddedRegexResponse.AsObject {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateEmbeddedRegexResponse.AsProtobufJSON {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }
}
export module ValidateEmbeddedRegexResponse {
  /**
   * Standard JavaScript object representation for ValidateEmbeddedRegexResponse
   */
  export interface AsObject {
    errorMessages: string[];
  }

  /**
   * Protobuf JSON representation for ValidateEmbeddedRegexResponse
   */
  export interface AsProtobufJSON {
    errorMessages: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.CleanAllIntentsRequest
 */
export class CleanAllIntentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CleanAllIntentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanAllIntentsRequest();
    CleanAllIntentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanAllIntentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.substringWhiteList = _instance.substringWhiteList || [];
    _instance.dryRun = _instance.dryRun || false;
    _instance.trainingPhraseCleanerOptions =
      _instance.trainingPhraseCleanerOptions || undefined;
    _instance.reannotateEntitiesOptions =
      _instance.reannotateEntitiesOptions || 0;
    _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanAllIntentsRequest,
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
          _instance.specialCharacters = _reader.readString();
          break;
        case 4:
          (_instance.substringWhiteList =
            _instance.substringWhiteList || []).push(_reader.readString());
          break;
        case 5:
          _instance.dryRun = _reader.readBool();
          break;
        case 6:
          _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
          _reader.readMessage(
            _instance.trainingPhraseCleanerOptions,
            TrainingPhraseCleanerOptions.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.reannotateEntitiesOptions = _reader.readEnum();
          break;
        case 8:
          _instance.numberOfWorkers = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CleanAllIntentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanAllIntentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(3, _instance.specialCharacters);
    }
    if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
      _writer.writeRepeatedString(4, _instance.substringWhiteList);
    }
    if (_instance.dryRun) {
      _writer.writeBool(5, _instance.dryRun);
    }
    if (_instance.trainingPhraseCleanerOptions) {
      _writer.writeMessage(
        6,
        _instance.trainingPhraseCleanerOptions as any,
        TrainingPhraseCleanerOptions.serializeBinaryToWriter
      );
    }
    if (_instance.reannotateEntitiesOptions) {
      _writer.writeEnum(7, _instance.reannotateEntitiesOptions);
    }
    if (_instance.numberOfWorkers) {
      _writer.writeInt32(8, _instance.numberOfWorkers);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _specialCharacters: string;
  private _substringWhiteList: string[];
  private _dryRun: boolean;
  private _trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
  private _reannotateEntitiesOptions: ReannotateEntitiesOptions;
  private _numberOfWorkers: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanAllIntentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanAllIntentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.specialCharacters = _value.specialCharacters;
    this.substringWhiteList = (_value.substringWhiteList || []).slice();
    this.dryRun = _value.dryRun;
    this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
      ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
      : undefined;
    this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
    this.numberOfWorkers = _value.numberOfWorkers;
    CleanAllIntentsRequest.refineValues(this);
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
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get substringWhiteList(): string[] {
    return this._substringWhiteList;
  }
  set substringWhiteList(value: string[]) {
    this._substringWhiteList = value;
  }
  get dryRun(): boolean {
    return this._dryRun;
  }
  set dryRun(value: boolean) {
    this._dryRun = value;
  }
  get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined {
    return this._trainingPhraseCleanerOptions;
  }
  set trainingPhraseCleanerOptions(
    value: TrainingPhraseCleanerOptions | undefined
  ) {
    this._trainingPhraseCleanerOptions = value;
  }
  get reannotateEntitiesOptions(): ReannotateEntitiesOptions {
    return this._reannotateEntitiesOptions;
  }
  set reannotateEntitiesOptions(value: ReannotateEntitiesOptions) {
    this._reannotateEntitiesOptions = value;
  }
  get numberOfWorkers(): number {
    return this._numberOfWorkers;
  }
  set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanAllIntentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanAllIntentsRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      dryRun: this.dryRun,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toObject()
        : undefined,
      reannotateEntitiesOptions: this.reannotateEntitiesOptions,
      numberOfWorkers: this.numberOfWorkers
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanAllIntentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      dryRun: this.dryRun,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
        : null,
      reannotateEntitiesOptions:
        ReannotateEntitiesOptions[
          this.reannotateEntitiesOptions === null ||
          this.reannotateEntitiesOptions === undefined
            ? 0
            : this.reannotateEntitiesOptions
        ],
      numberOfWorkers: this.numberOfWorkers
    };
  }
}
export module CleanAllIntentsRequest {
  /**
   * Standard JavaScript object representation for CleanAllIntentsRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    dryRun: boolean;
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
    reannotateEntitiesOptions: ReannotateEntitiesOptions;
    numberOfWorkers: number;
  }

  /**
   * Protobuf JSON representation for CleanAllIntentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    dryRun: boolean;
    trainingPhraseCleanerOptions: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
    reannotateEntitiesOptions: string;
    numberOfWorkers: number;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanAllIntentsResponse
 */
export class CleanAllIntentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.CleanAllIntentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanAllIntentsResponse();
    CleanAllIntentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanAllIntentsResponse) {
    _instance.cleanedIntents = _instance.cleanedIntents || [];
    _instance.intentUpdateList = _instance.intentUpdateList || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanAllIntentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ondewoNlu008.Intent();
          _reader.readMessage(
            messageInitializer1,
            ondewoNlu008.Intent.deserializeBinaryFromReader
          );
          (_instance.cleanedIntents = _instance.cleanedIntents || []).push(
            messageInitializer1
          );
          break;
        case 2:
          const messageInitializer2 = new IntentUpdate();
          _reader.readMessage(
            messageInitializer2,
            IntentUpdate.deserializeBinaryFromReader
          );
          (_instance.intentUpdateList = _instance.intentUpdateList || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CleanAllIntentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanAllIntentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.cleanedIntents && _instance.cleanedIntents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.cleanedIntents as any,
        ondewoNlu008.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.intentUpdateList && _instance.intentUpdateList.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.intentUpdateList as any,
        IntentUpdate.serializeBinaryToWriter
      );
    }
  }

  private _cleanedIntents?: ondewoNlu008.Intent[];
  private _intentUpdateList?: IntentUpdate[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanAllIntentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanAllIntentsResponse.AsObject>) {
    _value = _value || {};
    this.cleanedIntents = (_value.cleanedIntents || []).map(
      m => new ondewoNlu008.Intent(m)
    );
    this.intentUpdateList = (_value.intentUpdateList || []).map(
      m => new IntentUpdate(m)
    );
    CleanAllIntentsResponse.refineValues(this);
  }
  get cleanedIntents(): ondewoNlu008.Intent[] | undefined {
    return this._cleanedIntents;
  }
  set cleanedIntents(value: ondewoNlu008.Intent[] | undefined) {
    this._cleanedIntents = value;
  }
  get intentUpdateList(): IntentUpdate[] | undefined {
    return this._intentUpdateList;
  }
  set intentUpdateList(value: IntentUpdate[] | undefined) {
    this._intentUpdateList = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanAllIntentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanAllIntentsResponse.AsObject {
    return {
      cleanedIntents: (this.cleanedIntents || []).map(m => m.toObject()),
      intentUpdateList: (this.intentUpdateList || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanAllIntentsResponse.AsProtobufJSON {
    return {
      cleanedIntents: (this.cleanedIntents || []).map(m =>
        m.toProtobufJSON(options)
      ),
      intentUpdateList: (this.intentUpdateList || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CleanAllIntentsResponse {
  /**
   * Standard JavaScript object representation for CleanAllIntentsResponse
   */
  export interface AsObject {
    cleanedIntents?: ondewoNlu008.Intent.AsObject[];
    intentUpdateList?: IntentUpdate.AsObject[];
  }

  /**
   * Protobuf JSON representation for CleanAllIntentsResponse
   */
  export interface AsProtobufJSON {
    cleanedIntents: ondewoNlu008.Intent.AsProtobufJSON[] | null;
    intentUpdateList: IntentUpdate.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanIntentRequest
 */
export class CleanIntentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CleanIntentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanIntentRequest();
    CleanIntentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanIntentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.intentName = _instance.intentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.substringWhiteList = _instance.substringWhiteList || [];
    _instance.dryRun = _instance.dryRun || false;
    _instance.trainingPhraseCleanerOptions =
      _instance.trainingPhraseCleanerOptions || undefined;
    _instance.reannotateEntitiesOptions =
      _instance.reannotateEntitiesOptions || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanIntentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.intentName = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.specialCharacters = _reader.readString();
          break;
        case 5:
          (_instance.substringWhiteList =
            _instance.substringWhiteList || []).push(_reader.readString());
          break;
        case 6:
          _instance.dryRun = _reader.readBool();
          break;
        case 7:
          _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
          _reader.readMessage(
            _instance.trainingPhraseCleanerOptions,
            TrainingPhraseCleanerOptions.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.reannotateEntitiesOptions = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CleanIntentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanIntentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.intentName) {
      _writer.writeString(2, _instance.intentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(4, _instance.specialCharacters);
    }
    if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
      _writer.writeRepeatedString(5, _instance.substringWhiteList);
    }
    if (_instance.dryRun) {
      _writer.writeBool(6, _instance.dryRun);
    }
    if (_instance.trainingPhraseCleanerOptions) {
      _writer.writeMessage(
        7,
        _instance.trainingPhraseCleanerOptions as any,
        TrainingPhraseCleanerOptions.serializeBinaryToWriter
      );
    }
    if (_instance.reannotateEntitiesOptions) {
      _writer.writeEnum(8, _instance.reannotateEntitiesOptions);
    }
  }

  private _parent: string;
  private _intentName: string;
  private _languageCode: string;
  private _specialCharacters: string;
  private _substringWhiteList: string[];
  private _dryRun: boolean;
  private _trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
  private _reannotateEntitiesOptions: ReannotateEntitiesOptions;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanIntentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanIntentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.intentName = _value.intentName;
    this.languageCode = _value.languageCode;
    this.specialCharacters = _value.specialCharacters;
    this.substringWhiteList = (_value.substringWhiteList || []).slice();
    this.dryRun = _value.dryRun;
    this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
      ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
      : undefined;
    this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
    CleanIntentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get substringWhiteList(): string[] {
    return this._substringWhiteList;
  }
  set substringWhiteList(value: string[]) {
    this._substringWhiteList = value;
  }
  get dryRun(): boolean {
    return this._dryRun;
  }
  set dryRun(value: boolean) {
    this._dryRun = value;
  }
  get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined {
    return this._trainingPhraseCleanerOptions;
  }
  set trainingPhraseCleanerOptions(
    value: TrainingPhraseCleanerOptions | undefined
  ) {
    this._trainingPhraseCleanerOptions = value;
  }
  get reannotateEntitiesOptions(): ReannotateEntitiesOptions {
    return this._reannotateEntitiesOptions;
  }
  set reannotateEntitiesOptions(value: ReannotateEntitiesOptions) {
    this._reannotateEntitiesOptions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanIntentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanIntentRequest.AsObject {
    return {
      parent: this.parent,
      intentName: this.intentName,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      dryRun: this.dryRun,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toObject()
        : undefined,
      reannotateEntitiesOptions: this.reannotateEntitiesOptions
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanIntentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      intentName: this.intentName,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      dryRun: this.dryRun,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
        : null,
      reannotateEntitiesOptions:
        ReannotateEntitiesOptions[
          this.reannotateEntitiesOptions === null ||
          this.reannotateEntitiesOptions === undefined
            ? 0
            : this.reannotateEntitiesOptions
        ]
    };
  }
}
export module CleanIntentRequest {
  /**
   * Standard JavaScript object representation for CleanIntentRequest
   */
  export interface AsObject {
    parent: string;
    intentName: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    dryRun: boolean;
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
    reannotateEntitiesOptions: ReannotateEntitiesOptions;
  }

  /**
   * Protobuf JSON representation for CleanIntentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    intentName: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    dryRun: boolean;
    trainingPhraseCleanerOptions: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
    reannotateEntitiesOptions: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanIntentResponse
 */
export class CleanIntentResponse implements GrpcMessage {
  static id = 'ondewo.nlu.CleanIntentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanIntentResponse();
    CleanIntentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanIntentResponse) {
    _instance.cleanedIntent = _instance.cleanedIntent || undefined;
    _instance.intentUpdate = _instance.intentUpdate || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanIntentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cleanedIntent = new ondewoNlu008.Intent();
          _reader.readMessage(
            _instance.cleanedIntent,
            ondewoNlu008.Intent.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.intentUpdate = new IntentUpdate();
          _reader.readMessage(
            _instance.intentUpdate,
            IntentUpdate.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CleanIntentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanIntentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.cleanedIntent) {
      _writer.writeMessage(
        1,
        _instance.cleanedIntent as any,
        ondewoNlu008.Intent.serializeBinaryToWriter
      );
    }
    if (_instance.intentUpdate) {
      _writer.writeMessage(
        2,
        _instance.intentUpdate as any,
        IntentUpdate.serializeBinaryToWriter
      );
    }
  }

  private _cleanedIntent?: ondewoNlu008.Intent;
  private _intentUpdate?: IntentUpdate;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanIntentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanIntentResponse.AsObject>) {
    _value = _value || {};
    this.cleanedIntent = _value.cleanedIntent
      ? new ondewoNlu008.Intent(_value.cleanedIntent)
      : undefined;
    this.intentUpdate = _value.intentUpdate
      ? new IntentUpdate(_value.intentUpdate)
      : undefined;
    CleanIntentResponse.refineValues(this);
  }
  get cleanedIntent(): ondewoNlu008.Intent | undefined {
    return this._cleanedIntent;
  }
  set cleanedIntent(value: ondewoNlu008.Intent | undefined) {
    this._cleanedIntent = value;
  }
  get intentUpdate(): IntentUpdate | undefined {
    return this._intentUpdate;
  }
  set intentUpdate(value: IntentUpdate | undefined) {
    this._intentUpdate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanIntentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanIntentResponse.AsObject {
    return {
      cleanedIntent: this.cleanedIntent
        ? this.cleanedIntent.toObject()
        : undefined,
      intentUpdate: this.intentUpdate ? this.intentUpdate.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanIntentResponse.AsProtobufJSON {
    return {
      cleanedIntent: this.cleanedIntent
        ? this.cleanedIntent.toProtobufJSON(options)
        : null,
      intentUpdate: this.intentUpdate
        ? this.intentUpdate.toProtobufJSON(options)
        : null
    };
  }
}
export module CleanIntentResponse {
  /**
   * Standard JavaScript object representation for CleanIntentResponse
   */
  export interface AsObject {
    cleanedIntent?: ondewoNlu008.Intent.AsObject;
    intentUpdate?: IntentUpdate.AsObject;
  }

  /**
   * Protobuf JSON representation for CleanIntentResponse
   */
  export interface AsProtobufJSON {
    cleanedIntent: ondewoNlu008.Intent.AsProtobufJSON | null;
    intentUpdate: IntentUpdate.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.TrainingPhraseCleanerOptions
 */
export class TrainingPhraseCleanerOptions implements GrpcMessage {
  static id = 'ondewo.nlu.TrainingPhraseCleanerOptions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TrainingPhraseCleanerOptions();
    TrainingPhraseCleanerOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TrainingPhraseCleanerOptions) {
    _instance.deleteRepeatedWhitespaces =
      _instance.deleteRepeatedWhitespaces || false;
    _instance.deleteLeadingSpecialCharacters =
      _instance.deleteLeadingSpecialCharacters || false;
    _instance.deleteTrailingSpecialCharacters =
      _instance.deleteTrailingSpecialCharacters || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TrainingPhraseCleanerOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deleteRepeatedWhitespaces = _reader.readBool();
          break;
        case 2:
          _instance.deleteLeadingSpecialCharacters = _reader.readBool();
          break;
        case 3:
          _instance.deleteTrailingSpecialCharacters = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    TrainingPhraseCleanerOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TrainingPhraseCleanerOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.deleteRepeatedWhitespaces) {
      _writer.writeBool(1, _instance.deleteRepeatedWhitespaces);
    }
    if (_instance.deleteLeadingSpecialCharacters) {
      _writer.writeBool(2, _instance.deleteLeadingSpecialCharacters);
    }
    if (_instance.deleteTrailingSpecialCharacters) {
      _writer.writeBool(3, _instance.deleteTrailingSpecialCharacters);
    }
  }

  private _deleteRepeatedWhitespaces: boolean;
  private _deleteLeadingSpecialCharacters: boolean;
  private _deleteTrailingSpecialCharacters: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TrainingPhraseCleanerOptions to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<TrainingPhraseCleanerOptions.AsObject>
  ) {
    _value = _value || {};
    this.deleteRepeatedWhitespaces = _value.deleteRepeatedWhitespaces;
    this.deleteLeadingSpecialCharacters = _value.deleteLeadingSpecialCharacters;
    this.deleteTrailingSpecialCharacters =
      _value.deleteTrailingSpecialCharacters;
    TrainingPhraseCleanerOptions.refineValues(this);
  }
  get deleteRepeatedWhitespaces(): boolean {
    return this._deleteRepeatedWhitespaces;
  }
  set deleteRepeatedWhitespaces(value: boolean) {
    this._deleteRepeatedWhitespaces = value;
  }
  get deleteLeadingSpecialCharacters(): boolean {
    return this._deleteLeadingSpecialCharacters;
  }
  set deleteLeadingSpecialCharacters(value: boolean) {
    this._deleteLeadingSpecialCharacters = value;
  }
  get deleteTrailingSpecialCharacters(): boolean {
    return this._deleteTrailingSpecialCharacters;
  }
  set deleteTrailingSpecialCharacters(value: boolean) {
    this._deleteTrailingSpecialCharacters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TrainingPhraseCleanerOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TrainingPhraseCleanerOptions.AsObject {
    return {
      deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
      deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
      deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TrainingPhraseCleanerOptions.AsProtobufJSON {
    return {
      deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
      deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
      deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
    };
  }
}
export module TrainingPhraseCleanerOptions {
  /**
   * Standard JavaScript object representation for TrainingPhraseCleanerOptions
   */
  export interface AsObject {
    deleteRepeatedWhitespaces: boolean;
    deleteLeadingSpecialCharacters: boolean;
    deleteTrailingSpecialCharacters: boolean;
  }

  /**
   * Protobuf JSON representation for TrainingPhraseCleanerOptions
   */
  export interface AsProtobufJSON {
    deleteRepeatedWhitespaces: boolean;
    deleteLeadingSpecialCharacters: boolean;
    deleteTrailingSpecialCharacters: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.StringUpdate
 */
export class StringUpdate implements GrpcMessage {
  static id = 'ondewo.nlu.StringUpdate';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StringUpdate();
    StringUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StringUpdate) {
    _instance.new = _instance.new || '';
    _instance.old = _instance.old || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StringUpdate,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.new = _reader.readString();
          break;
        case 2:
          _instance.old = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StringUpdate.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StringUpdate,
    _writer: BinaryWriter
  ) {
    if (_instance.new) {
      _writer.writeString(1, _instance.new);
    }
    if (_instance.old) {
      _writer.writeString(2, _instance.old);
    }
  }

  private _new: string;
  private _old: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StringUpdate to deeply clone from
   */
  constructor(_value?: RecursivePartial<StringUpdate.AsObject>) {
    _value = _value || {};
    this.new = _value.new;
    this.old = _value.old;
    StringUpdate.refineValues(this);
  }
  get new(): string {
    return this._new;
  }
  set new(value: string) {
    this._new = value;
  }
  get old(): string {
    return this._old;
  }
  set old(value: string) {
    this._old = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StringUpdate.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StringUpdate.AsObject {
    return {
      new: this.new,
      old: this.old
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StringUpdate.AsProtobufJSON {
    return {
      new: this.new,
      old: this.old
    };
  }
}
export module StringUpdate {
  /**
   * Standard JavaScript object representation for StringUpdate
   */
  export interface AsObject {
    new: string;
    old: string;
  }

  /**
   * Protobuf JSON representation for StringUpdate
   */
  export interface AsProtobufJSON {
    new: string;
    old: string;
  }
}

/**
 * Message implementation for ondewo.nlu.IntentUpdate
 */
export class IntentUpdate implements GrpcMessage {
  static id = 'ondewo.nlu.IntentUpdate';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IntentUpdate();
    IntentUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IntentUpdate) {
    _instance.intentDisplayName = _instance.intentDisplayName || '';
    _instance.trainingPhraseUpdateList =
      _instance.trainingPhraseUpdateList || [];
    _instance.deletedParameters = _instance.deletedParameters || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IntentUpdate,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.intentDisplayName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new IntentUpdate.TrainingPhraseUpdate();
          _reader.readMessage(
            messageInitializer2,
            IntentUpdate.TrainingPhraseUpdate.deserializeBinaryFromReader
          );
          (_instance.trainingPhraseUpdateList =
            _instance.trainingPhraseUpdateList || []).push(messageInitializer2);
          break;
        case 3:
          (_instance.deletedParameters =
            _instance.deletedParameters || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    IntentUpdate.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IntentUpdate,
    _writer: BinaryWriter
  ) {
    if (_instance.intentDisplayName) {
      _writer.writeString(1, _instance.intentDisplayName);
    }
    if (
      _instance.trainingPhraseUpdateList &&
      _instance.trainingPhraseUpdateList.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.trainingPhraseUpdateList as any,
        IntentUpdate.TrainingPhraseUpdate.serializeBinaryToWriter
      );
    }
    if (_instance.deletedParameters && _instance.deletedParameters.length) {
      _writer.writeRepeatedString(3, _instance.deletedParameters);
    }
  }

  private _intentDisplayName: string;
  private _trainingPhraseUpdateList?: IntentUpdate.TrainingPhraseUpdate[];
  private _deletedParameters: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IntentUpdate to deeply clone from
   */
  constructor(_value?: RecursivePartial<IntentUpdate.AsObject>) {
    _value = _value || {};
    this.intentDisplayName = _value.intentDisplayName;
    this.trainingPhraseUpdateList = (_value.trainingPhraseUpdateList || []).map(
      m => new IntentUpdate.TrainingPhraseUpdate(m)
    );
    this.deletedParameters = (_value.deletedParameters || []).slice();
    IntentUpdate.refineValues(this);
  }
  get intentDisplayName(): string {
    return this._intentDisplayName;
  }
  set intentDisplayName(value: string) {
    this._intentDisplayName = value;
  }
  get trainingPhraseUpdateList():
    | IntentUpdate.TrainingPhraseUpdate[]
    | undefined {
    return this._trainingPhraseUpdateList;
  }
  set trainingPhraseUpdateList(
    value: IntentUpdate.TrainingPhraseUpdate[] | undefined
  ) {
    this._trainingPhraseUpdateList = value;
  }
  get deletedParameters(): string[] {
    return this._deletedParameters;
  }
  set deletedParameters(value: string[]) {
    this._deletedParameters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IntentUpdate.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IntentUpdate.AsObject {
    return {
      intentDisplayName: this.intentDisplayName,
      trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map(m =>
        m.toObject()
      ),
      deletedParameters: (this.deletedParameters || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IntentUpdate.AsProtobufJSON {
    return {
      intentDisplayName: this.intentDisplayName,
      trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map(m =>
        m.toProtobufJSON(options)
      ),
      deletedParameters: (this.deletedParameters || []).slice()
    };
  }
}
export module IntentUpdate {
  /**
   * Standard JavaScript object representation for IntentUpdate
   */
  export interface AsObject {
    intentDisplayName: string;
    trainingPhraseUpdateList?: IntentUpdate.TrainingPhraseUpdate.AsObject[];
    deletedParameters: string[];
  }

  /**
   * Protobuf JSON representation for IntentUpdate
   */
  export interface AsProtobufJSON {
    intentDisplayName: string;
    trainingPhraseUpdateList:
      | IntentUpdate.TrainingPhraseUpdate.AsProtobufJSON[]
      | null;
    deletedParameters: string[];
  }

  /**
   * Message implementation for ondewo.nlu.IntentUpdate.TrainingPhraseUpdate
   */
  export class TrainingPhraseUpdate implements GrpcMessage {
    static id = 'ondewo.nlu.IntentUpdate.TrainingPhraseUpdate';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new TrainingPhraseUpdate();
      TrainingPhraseUpdate.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainingPhraseUpdate) {
      _instance.trainingPhraseUpdate =
        _instance.trainingPhraseUpdate || undefined;
      _instance.entityUpdates = _instance.entityUpdates || [];
      _instance.entitiesReannotated = _instance.entitiesReannotated || [];
      _instance.containsUpdateVariable =
        _instance.containsUpdateVariable || false;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: TrainingPhraseUpdate,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.trainingPhraseUpdate = new StringUpdate();
            _reader.readMessage(
              _instance.trainingPhraseUpdate,
              StringUpdate.deserializeBinaryFromReader
            );
            break;
          case 2:
            const messageInitializer2 = new StringUpdate();
            _reader.readMessage(
              messageInitializer2,
              StringUpdate.deserializeBinaryFromReader
            );
            (_instance.entityUpdates = _instance.entityUpdates || []).push(
              messageInitializer2
            );
            break;
          case 3:
            (_instance.entitiesReannotated =
              _instance.entitiesReannotated || []).push(_reader.readString());
            break;
          case 4:
            _instance.containsUpdateVariable = _reader.readBool();
            break;
          default:
            _reader.skipField();
        }
      }

      TrainingPhraseUpdate.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: TrainingPhraseUpdate,
      _writer: BinaryWriter
    ) {
      if (_instance.trainingPhraseUpdate) {
        _writer.writeMessage(
          1,
          _instance.trainingPhraseUpdate as any,
          StringUpdate.serializeBinaryToWriter
        );
      }
      if (_instance.entityUpdates && _instance.entityUpdates.length) {
        _writer.writeRepeatedMessage(
          2,
          _instance.entityUpdates as any,
          StringUpdate.serializeBinaryToWriter
        );
      }
      if (
        _instance.entitiesReannotated &&
        _instance.entitiesReannotated.length
      ) {
        _writer.writeRepeatedString(3, _instance.entitiesReannotated);
      }
      if (_instance.containsUpdateVariable) {
        _writer.writeBool(4, _instance.containsUpdateVariable);
      }
    }

    private _trainingPhraseUpdate?: StringUpdate;
    private _entityUpdates?: StringUpdate[];
    private _entitiesReannotated: string[];
    private _containsUpdateVariable: boolean;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhraseUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainingPhraseUpdate.AsObject>) {
      _value = _value || {};
      this.trainingPhraseUpdate = _value.trainingPhraseUpdate
        ? new StringUpdate(_value.trainingPhraseUpdate)
        : undefined;
      this.entityUpdates = (_value.entityUpdates || []).map(
        m => new StringUpdate(m)
      );
      this.entitiesReannotated = (_value.entitiesReannotated || []).slice();
      this.containsUpdateVariable = _value.containsUpdateVariable;
      TrainingPhraseUpdate.refineValues(this);
    }
    get trainingPhraseUpdate(): StringUpdate | undefined {
      return this._trainingPhraseUpdate;
    }
    set trainingPhraseUpdate(value: StringUpdate | undefined) {
      this._trainingPhraseUpdate = value;
    }
    get entityUpdates(): StringUpdate[] | undefined {
      return this._entityUpdates;
    }
    set entityUpdates(value: StringUpdate[] | undefined) {
      this._entityUpdates = value;
    }
    get entitiesReannotated(): string[] {
      return this._entitiesReannotated;
    }
    set entitiesReannotated(value: string[]) {
      this._entitiesReannotated = value;
    }
    get containsUpdateVariable(): boolean {
      return this._containsUpdateVariable;
    }
    set containsUpdateVariable(value: boolean) {
      this._containsUpdateVariable = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      TrainingPhraseUpdate.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainingPhraseUpdate.AsObject {
      return {
        trainingPhraseUpdate: this.trainingPhraseUpdate
          ? this.trainingPhraseUpdate.toObject()
          : undefined,
        entityUpdates: (this.entityUpdates || []).map(m => m.toObject()),
        entitiesReannotated: (this.entitiesReannotated || []).slice(),
        containsUpdateVariable: this.containsUpdateVariable
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): TrainingPhraseUpdate.AsProtobufJSON {
      return {
        trainingPhraseUpdate: this.trainingPhraseUpdate
          ? this.trainingPhraseUpdate.toProtobufJSON(options)
          : null,
        entityUpdates: (this.entityUpdates || []).map(m =>
          m.toProtobufJSON(options)
        ),
        entitiesReannotated: (this.entitiesReannotated || []).slice(),
        containsUpdateVariable: this.containsUpdateVariable
      };
    }
  }
  export module TrainingPhraseUpdate {
    /**
     * Standard JavaScript object representation for TrainingPhraseUpdate
     */
    export interface AsObject {
      trainingPhraseUpdate?: StringUpdate.AsObject;
      entityUpdates?: StringUpdate.AsObject[];
      entitiesReannotated: string[];
      containsUpdateVariable: boolean;
    }

    /**
     * Protobuf JSON representation for TrainingPhraseUpdate
     */
    export interface AsProtobufJSON {
      trainingPhraseUpdate: StringUpdate.AsProtobufJSON | null;
      entityUpdates: StringUpdate.AsProtobufJSON[] | null;
      entitiesReannotated: string[];
      containsUpdateVariable: boolean;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.EntityTypeUpdate
 */
export class EntityTypeUpdate implements GrpcMessage {
  static id = 'ondewo.nlu.EntityTypeUpdate';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EntityTypeUpdate();
    EntityTypeUpdate.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EntityTypeUpdate) {
    _instance.entityTypeName = _instance.entityTypeName || '';
    _instance.valuesUpdateList = _instance.valuesUpdateList || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EntityTypeUpdate,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.entityTypeName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new EntityTypeUpdate.EntityUpdate();
          _reader.readMessage(
            messageInitializer2,
            EntityTypeUpdate.EntityUpdate.deserializeBinaryFromReader
          );
          (_instance.valuesUpdateList = _instance.valuesUpdateList || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EntityTypeUpdate.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EntityTypeUpdate,
    _writer: BinaryWriter
  ) {
    if (_instance.entityTypeName) {
      _writer.writeString(1, _instance.entityTypeName);
    }
    if (_instance.valuesUpdateList && _instance.valuesUpdateList.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.valuesUpdateList as any,
        EntityTypeUpdate.EntityUpdate.serializeBinaryToWriter
      );
    }
  }

  private _entityTypeName: string;
  private _valuesUpdateList?: EntityTypeUpdate.EntityUpdate[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EntityTypeUpdate to deeply clone from
   */
  constructor(_value?: RecursivePartial<EntityTypeUpdate.AsObject>) {
    _value = _value || {};
    this.entityTypeName = _value.entityTypeName;
    this.valuesUpdateList = (_value.valuesUpdateList || []).map(
      m => new EntityTypeUpdate.EntityUpdate(m)
    );
    EntityTypeUpdate.refineValues(this);
  }
  get entityTypeName(): string {
    return this._entityTypeName;
  }
  set entityTypeName(value: string) {
    this._entityTypeName = value;
  }
  get valuesUpdateList(): EntityTypeUpdate.EntityUpdate[] | undefined {
    return this._valuesUpdateList;
  }
  set valuesUpdateList(value: EntityTypeUpdate.EntityUpdate[] | undefined) {
    this._valuesUpdateList = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EntityTypeUpdate.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EntityTypeUpdate.AsObject {
    return {
      entityTypeName: this.entityTypeName,
      valuesUpdateList: (this.valuesUpdateList || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EntityTypeUpdate.AsProtobufJSON {
    return {
      entityTypeName: this.entityTypeName,
      valuesUpdateList: (this.valuesUpdateList || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module EntityTypeUpdate {
  /**
   * Standard JavaScript object representation for EntityTypeUpdate
   */
  export interface AsObject {
    entityTypeName: string;
    valuesUpdateList?: EntityTypeUpdate.EntityUpdate.AsObject[];
  }

  /**
   * Protobuf JSON representation for EntityTypeUpdate
   */
  export interface AsProtobufJSON {
    entityTypeName: string;
    valuesUpdateList: EntityTypeUpdate.EntityUpdate.AsProtobufJSON[] | null;
  }

  /**
   * Message implementation for ondewo.nlu.EntityTypeUpdate.EntityUpdate
   */
  export class EntityUpdate implements GrpcMessage {
    static id = 'ondewo.nlu.EntityTypeUpdate.EntityUpdate';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EntityUpdate();
      EntityUpdate.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityUpdate) {
      _instance.entityValueUpdate = _instance.entityValueUpdate || undefined;
      _instance.entitySynonymUpdates = _instance.entitySynonymUpdates || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: EntityUpdate,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.entityValueUpdate = new StringUpdate();
            _reader.readMessage(
              _instance.entityValueUpdate,
              StringUpdate.deserializeBinaryFromReader
            );
            break;
          case 2:
            const messageInitializer2 = new StringUpdate();
            _reader.readMessage(
              messageInitializer2,
              StringUpdate.deserializeBinaryFromReader
            );
            (_instance.entitySynonymUpdates =
              _instance.entitySynonymUpdates || []).push(messageInitializer2);
            break;
          default:
            _reader.skipField();
        }
      }

      EntityUpdate.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EntityUpdate,
      _writer: BinaryWriter
    ) {
      if (_instance.entityValueUpdate) {
        _writer.writeMessage(
          1,
          _instance.entityValueUpdate as any,
          StringUpdate.serializeBinaryToWriter
        );
      }
      if (
        _instance.entitySynonymUpdates &&
        _instance.entitySynonymUpdates.length
      ) {
        _writer.writeRepeatedMessage(
          2,
          _instance.entitySynonymUpdates as any,
          StringUpdate.serializeBinaryToWriter
        );
      }
    }

    private _entityValueUpdate?: StringUpdate;
    private _entitySynonymUpdates?: StringUpdate[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityUpdate.AsObject>) {
      _value = _value || {};
      this.entityValueUpdate = _value.entityValueUpdate
        ? new StringUpdate(_value.entityValueUpdate)
        : undefined;
      this.entitySynonymUpdates = (_value.entitySynonymUpdates || []).map(
        m => new StringUpdate(m)
      );
      EntityUpdate.refineValues(this);
    }
    get entityValueUpdate(): StringUpdate | undefined {
      return this._entityValueUpdate;
    }
    set entityValueUpdate(value: StringUpdate | undefined) {
      this._entityValueUpdate = value;
    }
    get entitySynonymUpdates(): StringUpdate[] | undefined {
      return this._entitySynonymUpdates;
    }
    set entitySynonymUpdates(value: StringUpdate[] | undefined) {
      this._entitySynonymUpdates = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      EntityUpdate.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityUpdate.AsObject {
      return {
        entityValueUpdate: this.entityValueUpdate
          ? this.entityValueUpdate.toObject()
          : undefined,
        entitySynonymUpdates: (this.entitySynonymUpdates || []).map(m =>
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
    ): EntityUpdate.AsProtobufJSON {
      return {
        entityValueUpdate: this.entityValueUpdate
          ? this.entityValueUpdate.toProtobufJSON(options)
          : null,
        entitySynonymUpdates: (this.entitySynonymUpdates || []).map(m =>
          m.toProtobufJSON(options)
        )
      };
    }
  }
  export module EntityUpdate {
    /**
     * Standard JavaScript object representation for EntityUpdate
     */
    export interface AsObject {
      entityValueUpdate?: StringUpdate.AsObject;
      entitySynonymUpdates?: StringUpdate.AsObject[];
    }

    /**
     * Protobuf JSON representation for EntityUpdate
     */
    export interface AsProtobufJSON {
      entityValueUpdate: StringUpdate.AsProtobufJSON | null;
      entitySynonymUpdates: StringUpdate.AsProtobufJSON[] | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesRequest
 */
export class CleanAllEntityTypesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CleanAllEntityTypesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanAllEntityTypesRequest();
    CleanAllEntityTypesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanAllEntityTypesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.substringWhiteList = _instance.substringWhiteList || [];
    _instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
    _instance.forbiddenEntityTypePatterns =
      _instance.forbiddenEntityTypePatterns || [];
    _instance.dryRun = _instance.dryRun || false;
    _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanAllEntityTypesRequest,
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
          _instance.specialCharacters = _reader.readString();
          break;
        case 4:
          (_instance.substringWhiteList =
            _instance.substringWhiteList || []).push(_reader.readString());
          break;
        case 5:
          _instance.maxEntityCountUpdate = _reader.readInt32();
          break;
        case 6:
          (_instance.forbiddenEntityTypePatterns =
            _instance.forbiddenEntityTypePatterns || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.dryRun = _reader.readBool();
          break;
        case 8:
          _instance.numberOfWorkers = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CleanAllEntityTypesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanAllEntityTypesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(3, _instance.specialCharacters);
    }
    if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
      _writer.writeRepeatedString(4, _instance.substringWhiteList);
    }
    if (_instance.maxEntityCountUpdate) {
      _writer.writeInt32(5, _instance.maxEntityCountUpdate);
    }
    if (
      _instance.forbiddenEntityTypePatterns &&
      _instance.forbiddenEntityTypePatterns.length
    ) {
      _writer.writeRepeatedString(6, _instance.forbiddenEntityTypePatterns);
    }
    if (_instance.dryRun) {
      _writer.writeBool(7, _instance.dryRun);
    }
    if (_instance.numberOfWorkers) {
      _writer.writeInt32(8, _instance.numberOfWorkers);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _specialCharacters: string;
  private _substringWhiteList: string[];
  private _maxEntityCountUpdate: number;
  private _forbiddenEntityTypePatterns: string[];
  private _dryRun: boolean;
  private _numberOfWorkers: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanAllEntityTypesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanAllEntityTypesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.specialCharacters = _value.specialCharacters;
    this.substringWhiteList = (_value.substringWhiteList || []).slice();
    this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
    this.forbiddenEntityTypePatterns = (
      _value.forbiddenEntityTypePatterns || []
    ).slice();
    this.dryRun = _value.dryRun;
    this.numberOfWorkers = _value.numberOfWorkers;
    CleanAllEntityTypesRequest.refineValues(this);
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
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get substringWhiteList(): string[] {
    return this._substringWhiteList;
  }
  set substringWhiteList(value: string[]) {
    this._substringWhiteList = value;
  }
  get maxEntityCountUpdate(): number {
    return this._maxEntityCountUpdate;
  }
  set maxEntityCountUpdate(value: number) {
    this._maxEntityCountUpdate = value;
  }
  get forbiddenEntityTypePatterns(): string[] {
    return this._forbiddenEntityTypePatterns;
  }
  set forbiddenEntityTypePatterns(value: string[]) {
    this._forbiddenEntityTypePatterns = value;
  }
  get dryRun(): boolean {
    return this._dryRun;
  }
  set dryRun(value: boolean) {
    this._dryRun = value;
  }
  get numberOfWorkers(): number {
    return this._numberOfWorkers;
  }
  set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanAllEntityTypesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanAllEntityTypesRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      maxEntityCountUpdate: this.maxEntityCountUpdate,
      forbiddenEntityTypePatterns: (
        this.forbiddenEntityTypePatterns || []
      ).slice(),
      dryRun: this.dryRun,
      numberOfWorkers: this.numberOfWorkers
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanAllEntityTypesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      maxEntityCountUpdate: this.maxEntityCountUpdate,
      forbiddenEntityTypePatterns: (
        this.forbiddenEntityTypePatterns || []
      ).slice(),
      dryRun: this.dryRun,
      numberOfWorkers: this.numberOfWorkers
    };
  }
}
export module CleanAllEntityTypesRequest {
  /**
   * Standard JavaScript object representation for CleanAllEntityTypesRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    maxEntityCountUpdate: number;
    forbiddenEntityTypePatterns: string[];
    dryRun: boolean;
    numberOfWorkers: number;
  }

  /**
   * Protobuf JSON representation for CleanAllEntityTypesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    maxEntityCountUpdate: number;
    forbiddenEntityTypePatterns: string[];
    dryRun: boolean;
    numberOfWorkers: number;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesResponse
 */
export class CleanAllEntityTypesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.CleanAllEntityTypesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanAllEntityTypesResponse();
    CleanAllEntityTypesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanAllEntityTypesResponse) {
    _instance.cleanedEntityTypes = _instance.cleanedEntityTypes || [];
    _instance.deletedEntityTypes = _instance.deletedEntityTypes || [];
    _instance.entityTypeUpdates = _instance.entityTypeUpdates || [];
    _instance.entityTypeDeletions = _instance.entityTypeDeletions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanAllEntityTypesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ondewoNlu009.EntityType();
          _reader.readMessage(
            messageInitializer1,
            ondewoNlu009.EntityType.deserializeBinaryFromReader
          );
          (_instance.cleanedEntityTypes =
            _instance.cleanedEntityTypes || []).push(messageInitializer1);
          break;
        case 2:
          const messageInitializer2 = new ondewoNlu009.EntityType();
          _reader.readMessage(
            messageInitializer2,
            ondewoNlu009.EntityType.deserializeBinaryFromReader
          );
          (_instance.deletedEntityTypes =
            _instance.deletedEntityTypes || []).push(messageInitializer2);
          break;
        case 3:
          const messageInitializer3 = new EntityTypeUpdate();
          _reader.readMessage(
            messageInitializer3,
            EntityTypeUpdate.deserializeBinaryFromReader
          );
          (_instance.entityTypeUpdates =
            _instance.entityTypeUpdates || []).push(messageInitializer3);
          break;
        case 4:
          const messageInitializer4 = new EntityTypeUpdate();
          _reader.readMessage(
            messageInitializer4,
            EntityTypeUpdate.deserializeBinaryFromReader
          );
          (_instance.entityTypeDeletions =
            _instance.entityTypeDeletions || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    CleanAllEntityTypesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanAllEntityTypesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.cleanedEntityTypes && _instance.cleanedEntityTypes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.cleanedEntityTypes as any,
        ondewoNlu009.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.deletedEntityTypes && _instance.deletedEntityTypes.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.deletedEntityTypes as any,
        ondewoNlu009.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.entityTypeUpdates && _instance.entityTypeUpdates.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.entityTypeUpdates as any,
        EntityTypeUpdate.serializeBinaryToWriter
      );
    }
    if (_instance.entityTypeDeletions && _instance.entityTypeDeletions.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.entityTypeDeletions as any,
        EntityTypeUpdate.serializeBinaryToWriter
      );
    }
  }

  private _cleanedEntityTypes?: ondewoNlu009.EntityType[];
  private _deletedEntityTypes?: ondewoNlu009.EntityType[];
  private _entityTypeUpdates?: EntityTypeUpdate[];
  private _entityTypeDeletions?: EntityTypeUpdate[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanAllEntityTypesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanAllEntityTypesResponse.AsObject>) {
    _value = _value || {};
    this.cleanedEntityTypes = (_value.cleanedEntityTypes || []).map(
      m => new ondewoNlu009.EntityType(m)
    );
    this.deletedEntityTypes = (_value.deletedEntityTypes || []).map(
      m => new ondewoNlu009.EntityType(m)
    );
    this.entityTypeUpdates = (_value.entityTypeUpdates || []).map(
      m => new EntityTypeUpdate(m)
    );
    this.entityTypeDeletions = (_value.entityTypeDeletions || []).map(
      m => new EntityTypeUpdate(m)
    );
    CleanAllEntityTypesResponse.refineValues(this);
  }
  get cleanedEntityTypes(): ondewoNlu009.EntityType[] | undefined {
    return this._cleanedEntityTypes;
  }
  set cleanedEntityTypes(value: ondewoNlu009.EntityType[] | undefined) {
    this._cleanedEntityTypes = value;
  }
  get deletedEntityTypes(): ondewoNlu009.EntityType[] | undefined {
    return this._deletedEntityTypes;
  }
  set deletedEntityTypes(value: ondewoNlu009.EntityType[] | undefined) {
    this._deletedEntityTypes = value;
  }
  get entityTypeUpdates(): EntityTypeUpdate[] | undefined {
    return this._entityTypeUpdates;
  }
  set entityTypeUpdates(value: EntityTypeUpdate[] | undefined) {
    this._entityTypeUpdates = value;
  }
  get entityTypeDeletions(): EntityTypeUpdate[] | undefined {
    return this._entityTypeDeletions;
  }
  set entityTypeDeletions(value: EntityTypeUpdate[] | undefined) {
    this._entityTypeDeletions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanAllEntityTypesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanAllEntityTypesResponse.AsObject {
    return {
      cleanedEntityTypes: (this.cleanedEntityTypes || []).map(m =>
        m.toObject()
      ),
      deletedEntityTypes: (this.deletedEntityTypes || []).map(m =>
        m.toObject()
      ),
      entityTypeUpdates: (this.entityTypeUpdates || []).map(m => m.toObject()),
      entityTypeDeletions: (this.entityTypeDeletions || []).map(m =>
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
  ): CleanAllEntityTypesResponse.AsProtobufJSON {
    return {
      cleanedEntityTypes: (this.cleanedEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      ),
      deletedEntityTypes: (this.deletedEntityTypes || []).map(m =>
        m.toProtobufJSON(options)
      ),
      entityTypeUpdates: (this.entityTypeUpdates || []).map(m =>
        m.toProtobufJSON(options)
      ),
      entityTypeDeletions: (this.entityTypeDeletions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CleanAllEntityTypesResponse {
  /**
   * Standard JavaScript object representation for CleanAllEntityTypesResponse
   */
  export interface AsObject {
    cleanedEntityTypes?: ondewoNlu009.EntityType.AsObject[];
    deletedEntityTypes?: ondewoNlu009.EntityType.AsObject[];
    entityTypeUpdates?: EntityTypeUpdate.AsObject[];
    entityTypeDeletions?: EntityTypeUpdate.AsObject[];
  }

  /**
   * Protobuf JSON representation for CleanAllEntityTypesResponse
   */
  export interface AsProtobufJSON {
    cleanedEntityTypes: ondewoNlu009.EntityType.AsProtobufJSON[] | null;
    deletedEntityTypes: ondewoNlu009.EntityType.AsProtobufJSON[] | null;
    entityTypeUpdates: EntityTypeUpdate.AsProtobufJSON[] | null;
    entityTypeDeletions: EntityTypeUpdate.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanEntityTypeRequest
 */
export class CleanEntityTypeRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CleanEntityTypeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanEntityTypeRequest();
    CleanEntityTypeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanEntityTypeRequest) {
    _instance.parent = _instance.parent || '';
    _instance.entityTypeName = _instance.entityTypeName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.substringWhiteList = _instance.substringWhiteList || [];
    _instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
    _instance.dryRun = _instance.dryRun || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanEntityTypeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.entityTypeName = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.specialCharacters = _reader.readString();
          break;
        case 5:
          (_instance.substringWhiteList =
            _instance.substringWhiteList || []).push(_reader.readString());
          break;
        case 6:
          _instance.maxEntityCountUpdate = _reader.readInt32();
          break;
        case 7:
          _instance.dryRun = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    CleanEntityTypeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanEntityTypeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.entityTypeName) {
      _writer.writeString(2, _instance.entityTypeName);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(4, _instance.specialCharacters);
    }
    if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
      _writer.writeRepeatedString(5, _instance.substringWhiteList);
    }
    if (_instance.maxEntityCountUpdate) {
      _writer.writeInt32(6, _instance.maxEntityCountUpdate);
    }
    if (_instance.dryRun) {
      _writer.writeBool(7, _instance.dryRun);
    }
  }

  private _parent: string;
  private _entityTypeName: string;
  private _languageCode: string;
  private _specialCharacters: string;
  private _substringWhiteList: string[];
  private _maxEntityCountUpdate: number;
  private _dryRun: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanEntityTypeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanEntityTypeRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.entityTypeName = _value.entityTypeName;
    this.languageCode = _value.languageCode;
    this.specialCharacters = _value.specialCharacters;
    this.substringWhiteList = (_value.substringWhiteList || []).slice();
    this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
    this.dryRun = _value.dryRun;
    CleanEntityTypeRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get entityTypeName(): string {
    return this._entityTypeName;
  }
  set entityTypeName(value: string) {
    this._entityTypeName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get substringWhiteList(): string[] {
    return this._substringWhiteList;
  }
  set substringWhiteList(value: string[]) {
    this._substringWhiteList = value;
  }
  get maxEntityCountUpdate(): number {
    return this._maxEntityCountUpdate;
  }
  set maxEntityCountUpdate(value: number) {
    this._maxEntityCountUpdate = value;
  }
  get dryRun(): boolean {
    return this._dryRun;
  }
  set dryRun(value: boolean) {
    this._dryRun = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanEntityTypeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanEntityTypeRequest.AsObject {
    return {
      parent: this.parent,
      entityTypeName: this.entityTypeName,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      maxEntityCountUpdate: this.maxEntityCountUpdate,
      dryRun: this.dryRun
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CleanEntityTypeRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      entityTypeName: this.entityTypeName,
      languageCode: this.languageCode,
      specialCharacters: this.specialCharacters,
      substringWhiteList: (this.substringWhiteList || []).slice(),
      maxEntityCountUpdate: this.maxEntityCountUpdate,
      dryRun: this.dryRun
    };
  }
}
export module CleanEntityTypeRequest {
  /**
   * Standard JavaScript object representation for CleanEntityTypeRequest
   */
  export interface AsObject {
    parent: string;
    entityTypeName: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    maxEntityCountUpdate: number;
    dryRun: boolean;
  }

  /**
   * Protobuf JSON representation for CleanEntityTypeRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    entityTypeName: string;
    languageCode: string;
    specialCharacters: string;
    substringWhiteList: string[];
    maxEntityCountUpdate: number;
    dryRun: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.CleanEntityTypeResponse
 */
export class CleanEntityTypeResponse implements GrpcMessage {
  static id = 'ondewo.nlu.CleanEntityTypeResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CleanEntityTypeResponse();
    CleanEntityTypeResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CleanEntityTypeResponse) {
    _instance.cleanedEntityType = _instance.cleanedEntityType || undefined;
    _instance.entityTypeUpdate = _instance.entityTypeUpdate || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CleanEntityTypeResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.cleanedEntityType = new ondewoNlu009.EntityType();
          _reader.readMessage(
            _instance.cleanedEntityType,
            ondewoNlu009.EntityType.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.entityTypeUpdate = new EntityTypeUpdate();
          _reader.readMessage(
            _instance.entityTypeUpdate,
            EntityTypeUpdate.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CleanEntityTypeResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CleanEntityTypeResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.cleanedEntityType) {
      _writer.writeMessage(
        1,
        _instance.cleanedEntityType as any,
        ondewoNlu009.EntityType.serializeBinaryToWriter
      );
    }
    if (_instance.entityTypeUpdate) {
      _writer.writeMessage(
        2,
        _instance.entityTypeUpdate as any,
        EntityTypeUpdate.serializeBinaryToWriter
      );
    }
  }

  private _cleanedEntityType?: ondewoNlu009.EntityType;
  private _entityTypeUpdate?: EntityTypeUpdate;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CleanEntityTypeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CleanEntityTypeResponse.AsObject>) {
    _value = _value || {};
    this.cleanedEntityType = _value.cleanedEntityType
      ? new ondewoNlu009.EntityType(_value.cleanedEntityType)
      : undefined;
    this.entityTypeUpdate = _value.entityTypeUpdate
      ? new EntityTypeUpdate(_value.entityTypeUpdate)
      : undefined;
    CleanEntityTypeResponse.refineValues(this);
  }
  get cleanedEntityType(): ondewoNlu009.EntityType | undefined {
    return this._cleanedEntityType;
  }
  set cleanedEntityType(value: ondewoNlu009.EntityType | undefined) {
    this._cleanedEntityType = value;
  }
  get entityTypeUpdate(): EntityTypeUpdate | undefined {
    return this._entityTypeUpdate;
  }
  set entityTypeUpdate(value: EntityTypeUpdate | undefined) {
    this._entityTypeUpdate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CleanEntityTypeResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CleanEntityTypeResponse.AsObject {
    return {
      cleanedEntityType: this.cleanedEntityType
        ? this.cleanedEntityType.toObject()
        : undefined,
      entityTypeUpdate: this.entityTypeUpdate
        ? this.entityTypeUpdate.toObject()
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
  ): CleanEntityTypeResponse.AsProtobufJSON {
    return {
      cleanedEntityType: this.cleanedEntityType
        ? this.cleanedEntityType.toProtobufJSON(options)
        : null,
      entityTypeUpdate: this.entityTypeUpdate
        ? this.entityTypeUpdate.toProtobufJSON(options)
        : null
    };
  }
}
export module CleanEntityTypeResponse {
  /**
   * Standard JavaScript object representation for CleanEntityTypeResponse
   */
  export interface AsObject {
    cleanedEntityType?: ondewoNlu009.EntityType.AsObject;
    entityTypeUpdate?: EntityTypeUpdate.AsObject;
  }

  /**
   * Protobuf JSON representation for CleanEntityTypeResponse
   */
  export interface AsProtobufJSON {
    cleanedEntityType: ondewoNlu009.EntityType.AsProtobufJSON | null;
    entityTypeUpdate: EntityTypeUpdate.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest
 */
export class AddTrainingPhrasesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddTrainingPhrasesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddTrainingPhrasesRequest();
    AddTrainingPhrasesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddTrainingPhrasesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.trainingPhraseList = _instance.trainingPhraseList || [];
    _instance.extractEntities = _instance.extractEntities || false;
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.trainingPhraseCleanerOptions =
      _instance.trainingPhraseCleanerOptions || undefined;
    _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddTrainingPhrasesRequest,
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
          const messageInitializer3 = new AddTrainingPhrasesRequest.TrainingPhraseForIntent();
          _reader.readMessage(
            messageInitializer3,
            AddTrainingPhrasesRequest.TrainingPhraseForIntent
              .deserializeBinaryFromReader
          );
          (_instance.trainingPhraseList =
            _instance.trainingPhraseList || []).push(messageInitializer3);
          break;
        case 4:
          _instance.extractEntities = _reader.readBool();
          break;
        case 5:
          _instance.specialCharacters = _reader.readString();
          break;
        case 6:
          _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
          _reader.readMessage(
            _instance.trainingPhraseCleanerOptions,
            TrainingPhraseCleanerOptions.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.numberOfWorkers = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    AddTrainingPhrasesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddTrainingPhrasesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.trainingPhraseList && _instance.trainingPhraseList.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.trainingPhraseList as any,
        AddTrainingPhrasesRequest.TrainingPhraseForIntent
          .serializeBinaryToWriter
      );
    }
    if (_instance.extractEntities) {
      _writer.writeBool(4, _instance.extractEntities);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(5, _instance.specialCharacters);
    }
    if (_instance.trainingPhraseCleanerOptions) {
      _writer.writeMessage(
        6,
        _instance.trainingPhraseCleanerOptions as any,
        TrainingPhraseCleanerOptions.serializeBinaryToWriter
      );
    }
    if (_instance.numberOfWorkers) {
      _writer.writeInt32(7, _instance.numberOfWorkers);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _trainingPhraseList?: AddTrainingPhrasesRequest.TrainingPhraseForIntent[];
  private _extractEntities: boolean;
  private _specialCharacters: string;
  private _trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
  private _numberOfWorkers: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddTrainingPhrasesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddTrainingPhrasesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.trainingPhraseList = (_value.trainingPhraseList || []).map(
      m => new AddTrainingPhrasesRequest.TrainingPhraseForIntent(m)
    );
    this.extractEntities = _value.extractEntities;
    this.specialCharacters = _value.specialCharacters;
    this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
      ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
      : undefined;
    this.numberOfWorkers = _value.numberOfWorkers;
    AddTrainingPhrasesRequest.refineValues(this);
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
  get trainingPhraseList():
    | AddTrainingPhrasesRequest.TrainingPhraseForIntent[]
    | undefined {
    return this._trainingPhraseList;
  }
  set trainingPhraseList(
    value: AddTrainingPhrasesRequest.TrainingPhraseForIntent[] | undefined
  ) {
    this._trainingPhraseList = value;
  }
  get extractEntities(): boolean {
    return this._extractEntities;
  }
  set extractEntities(value: boolean) {
    this._extractEntities = value;
  }
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined {
    return this._trainingPhraseCleanerOptions;
  }
  set trainingPhraseCleanerOptions(
    value: TrainingPhraseCleanerOptions | undefined
  ) {
    this._trainingPhraseCleanerOptions = value;
  }
  get numberOfWorkers(): number {
    return this._numberOfWorkers;
  }
  set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddTrainingPhrasesRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      trainingPhraseList: (this.trainingPhraseList || []).map(m =>
        m.toObject()
      ),
      extractEntities: this.extractEntities,
      specialCharacters: this.specialCharacters,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toObject()
        : undefined,
      numberOfWorkers: this.numberOfWorkers
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddTrainingPhrasesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      trainingPhraseList: (this.trainingPhraseList || []).map(m =>
        m.toProtobufJSON(options)
      ),
      extractEntities: this.extractEntities,
      specialCharacters: this.specialCharacters,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
        : null,
      numberOfWorkers: this.numberOfWorkers
    };
  }
}
export module AddTrainingPhrasesRequest {
  /**
   * Standard JavaScript object representation for AddTrainingPhrasesRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    trainingPhraseList?: AddTrainingPhrasesRequest.TrainingPhraseForIntent.AsObject[];
    extractEntities: boolean;
    specialCharacters: string;
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
    numberOfWorkers: number;
  }

  /**
   * Protobuf JSON representation for AddTrainingPhrasesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    trainingPhraseList:
      | AddTrainingPhrasesRequest.TrainingPhraseForIntent.AsProtobufJSON[]
      | null;
    extractEntities: boolean;
    specialCharacters: string;
    trainingPhraseCleanerOptions: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
    numberOfWorkers: number;
  }

  /**
   * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent
   */
  export class TrainingPhraseForIntent implements GrpcMessage {
    static id = 'ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new TrainingPhraseForIntent();
      TrainingPhraseForIntent.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainingPhraseForIntent) {
      _instance.trainingPhrase = _instance.trainingPhrase || '';
      _instance.intentDisplayName = _instance.intentDisplayName || '';
      _instance.entities = _instance.entities || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: TrainingPhraseForIntent,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.trainingPhrase = _reader.readString();
            break;
          case 2:
            _instance.intentDisplayName = _reader.readString();
            break;
          case 3:
            const messageInitializer3 = new ondewoNlu008.Intent.TrainingPhrase.Entity();
            _reader.readMessage(
              messageInitializer3,
              ondewoNlu008.Intent.TrainingPhrase.Entity
                .deserializeBinaryFromReader
            );
            (_instance.entities = _instance.entities || []).push(
              messageInitializer3
            );
            break;
          default:
            _reader.skipField();
        }
      }

      TrainingPhraseForIntent.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: TrainingPhraseForIntent,
      _writer: BinaryWriter
    ) {
      if (_instance.trainingPhrase) {
        _writer.writeString(1, _instance.trainingPhrase);
      }
      if (_instance.intentDisplayName) {
        _writer.writeString(2, _instance.intentDisplayName);
      }
      if (_instance.entities && _instance.entities.length) {
        _writer.writeRepeatedMessage(
          3,
          _instance.entities as any,
          ondewoNlu008.Intent.TrainingPhrase.Entity.serializeBinaryToWriter
        );
      }
    }

    private _trainingPhrase: string;
    private _intentDisplayName: string;
    private _entities?: ondewoNlu008.Intent.TrainingPhrase.Entity[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhraseForIntent to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainingPhraseForIntent.AsObject>) {
      _value = _value || {};
      this.trainingPhrase = _value.trainingPhrase;
      this.intentDisplayName = _value.intentDisplayName;
      this.entities = (_value.entities || []).map(
        m => new ondewoNlu008.Intent.TrainingPhrase.Entity(m)
      );
      TrainingPhraseForIntent.refineValues(this);
    }
    get trainingPhrase(): string {
      return this._trainingPhrase;
    }
    set trainingPhrase(value: string) {
      this._trainingPhrase = value;
    }
    get intentDisplayName(): string {
      return this._intentDisplayName;
    }
    set intentDisplayName(value: string) {
      this._intentDisplayName = value;
    }
    get entities(): ondewoNlu008.Intent.TrainingPhrase.Entity[] | undefined {
      return this._entities;
    }
    set entities(
      value: ondewoNlu008.Intent.TrainingPhrase.Entity[] | undefined
    ) {
      this._entities = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      TrainingPhraseForIntent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainingPhraseForIntent.AsObject {
      return {
        trainingPhrase: this.trainingPhrase,
        intentDisplayName: this.intentDisplayName,
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
    ): TrainingPhraseForIntent.AsProtobufJSON {
      return {
        trainingPhrase: this.trainingPhrase,
        intentDisplayName: this.intentDisplayName,
        entities: (this.entities || []).map(m => m.toProtobufJSON(options))
      };
    }
  }
  export module TrainingPhraseForIntent {
    /**
     * Standard JavaScript object representation for TrainingPhraseForIntent
     */
    export interface AsObject {
      trainingPhrase: string;
      intentDisplayName: string;
      entities?: ondewoNlu008.Intent.TrainingPhrase.Entity.AsObject[];
    }

    /**
     * Protobuf JSON representation for TrainingPhraseForIntent
     */
    export interface AsProtobufJSON {
      trainingPhrase: string;
      intentDisplayName: string;
      entities:
        | ondewoNlu008.Intent.TrainingPhrase.Entity.AsProtobufJSON[]
        | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesResponse
 */
export class AddTrainingPhrasesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.AddTrainingPhrasesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddTrainingPhrasesResponse();
    AddTrainingPhrasesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddTrainingPhrasesResponse) {
    _instance.errorMessages = _instance.errorMessages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddTrainingPhrasesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.errorMessages = _instance.errorMessages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddTrainingPhrasesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddTrainingPhrasesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.errorMessages && _instance.errorMessages.length) {
      _writer.writeRepeatedString(1, _instance.errorMessages);
    }
  }

  private _errorMessages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddTrainingPhrasesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddTrainingPhrasesResponse.AsObject>) {
    _value = _value || {};
    this.errorMessages = (_value.errorMessages || []).slice();
    AddTrainingPhrasesResponse.refineValues(this);
  }
  get errorMessages(): string[] {
    return this._errorMessages;
  }
  set errorMessages(value: string[]) {
    this._errorMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddTrainingPhrasesResponse.AsObject {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddTrainingPhrasesResponse.AsProtobufJSON {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }
}
export module AddTrainingPhrasesResponse {
  /**
   * Standard JavaScript object representation for AddTrainingPhrasesResponse
   */
  export interface AsObject {
    errorMessages: string[];
  }

  /**
   * Protobuf JSON representation for AddTrainingPhrasesResponse
   */
  export interface AsProtobufJSON {
    errorMessages: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export class AddTrainingPhrasesFromCSVRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddTrainingPhrasesFromCSVRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddTrainingPhrasesFromCSVRequest();
    AddTrainingPhrasesFromCSVRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddTrainingPhrasesFromCSVRequest) {
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.csvContents = _instance.csvContents || new Uint8Array();
    _instance.extractEntities = _instance.extractEntities || false;
    _instance.specialCharacters = _instance.specialCharacters || '';
    _instance.trainingPhraseCleanerOptions =
      _instance.trainingPhraseCleanerOptions || undefined;
    _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddTrainingPhrasesFromCSVRequest,
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
          _instance.csvContents = _reader.readBytes();
          break;
        case 4:
          _instance.extractEntities = _reader.readBool();
          break;
        case 5:
          _instance.specialCharacters = _reader.readString();
          break;
        case 6:
          _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
          _reader.readMessage(
            _instance.trainingPhraseCleanerOptions,
            TrainingPhraseCleanerOptions.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.numberOfWorkers = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    AddTrainingPhrasesFromCSVRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddTrainingPhrasesFromCSVRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(2, _instance.languageCode);
    }
    if (_instance.csvContents && _instance.csvContents.length) {
      _writer.writeBytes(3, _instance.csvContents);
    }
    if (_instance.extractEntities) {
      _writer.writeBool(4, _instance.extractEntities);
    }
    if (_instance.specialCharacters) {
      _writer.writeString(5, _instance.specialCharacters);
    }
    if (_instance.trainingPhraseCleanerOptions) {
      _writer.writeMessage(
        6,
        _instance.trainingPhraseCleanerOptions as any,
        TrainingPhraseCleanerOptions.serializeBinaryToWriter
      );
    }
    if (_instance.numberOfWorkers) {
      _writer.writeInt32(7, _instance.numberOfWorkers);
    }
  }

  private _parent: string;
  private _languageCode: string;
  private _csvContents: Uint8Array;
  private _extractEntities: boolean;
  private _specialCharacters: string;
  private _trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
  private _numberOfWorkers: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddTrainingPhrasesFromCSVRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddTrainingPhrasesFromCSVRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.csvContents = _value.csvContents;
    this.extractEntities = _value.extractEntities;
    this.specialCharacters = _value.specialCharacters;
    this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
      ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
      : undefined;
    this.numberOfWorkers = _value.numberOfWorkers;
    AddTrainingPhrasesFromCSVRequest.refineValues(this);
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
  get csvContents(): Uint8Array {
    return this._csvContents;
  }
  set csvContents(value: Uint8Array) {
    this._csvContents = value;
  }
  get extractEntities(): boolean {
    return this._extractEntities;
  }
  set extractEntities(value: boolean) {
    this._extractEntities = value;
  }
  get specialCharacters(): string {
    return this._specialCharacters;
  }
  set specialCharacters(value: string) {
    this._specialCharacters = value;
  }
  get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined {
    return this._trainingPhraseCleanerOptions;
  }
  set trainingPhraseCleanerOptions(
    value: TrainingPhraseCleanerOptions | undefined
  ) {
    this._trainingPhraseCleanerOptions = value;
  }
  get numberOfWorkers(): number {
    return this._numberOfWorkers;
  }
  set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddTrainingPhrasesFromCSVRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddTrainingPhrasesFromCSVRequest.AsObject {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      csvContents: this.csvContents
        ? this.csvContents.subarray(0)
        : new Uint8Array(),
      extractEntities: this.extractEntities,
      specialCharacters: this.specialCharacters,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toObject()
        : undefined,
      numberOfWorkers: this.numberOfWorkers
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddTrainingPhrasesFromCSVRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      languageCode: this.languageCode,
      csvContents: this.csvContents ? uint8ArrayToBase64(this.csvContents) : '',
      extractEntities: this.extractEntities,
      specialCharacters: this.specialCharacters,
      trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
        ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
        : null,
      numberOfWorkers: this.numberOfWorkers
    };
  }
}
export module AddTrainingPhrasesFromCSVRequest {
  /**
   * Standard JavaScript object representation for AddTrainingPhrasesFromCSVRequest
   */
  export interface AsObject {
    parent: string;
    languageCode: string;
    csvContents: Uint8Array;
    extractEntities: boolean;
    specialCharacters: string;
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
    numberOfWorkers: number;
  }

  /**
   * Protobuf JSON representation for AddTrainingPhrasesFromCSVRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    languageCode: string;
    csvContents: string;
    extractEntities: boolean;
    specialCharacters: string;
    trainingPhraseCleanerOptions: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
    numberOfWorkers: number;
  }
}
