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
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
export enum CcaiProjectStatus {
  CCAI_PROJECT_STATUS_UNSPECIFIED = 0,
  CCAI_PROJECT_STATUS_UNDEPLOYED = 1,
  CCAI_PROJECT_STATUS_UPDATING = 2,
  CCAI_PROJECT_STATUS_DEPLOYING = 3,
  CCAI_PROJECT_STATUS_DEPLOYED = 4,
  CCAI_PROJECT_STATUS_UNDEPLOYING = 5,
  CCAI_PROJECT_STATUS_DELETING = 6,
  CCAI_PROJECT_STATUS_DELETED = 7
}
export enum CcaiServiceType {
  CCAI_SERVICE_TYPE_UNSPECIFIED = 0,
  CCAI_SERVICE_TYPE_ONDEWO_AIM = 1,
  CCAI_SERVICE_TYPE_ONDEWO_BPI = 2,
  CCAI_SERVICE_TYPE_ONDEWO_CSI = 3,
  CCAI_SERVICE_TYPE_ONDEWO_NLU = 4,
  CCAI_SERVICE_TYPE_ONDEWO_S2T = 5,
  CCAI_SERVICE_TYPE_ONDEWO_SIP = 6,
  CCAI_SERVICE_TYPE_ONDEWO_T2S = 7,
  CCAI_SERVICE_TYPE_ONDEWO_VTSI = 8,
  CCAI_SERVICE_TYPE_ONDEWO_VTSI_RABBITMQ = 9,
  CCAI_SERVICE_TYPE_ONDEWO_NLU_QA = 10,
  CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBHOOK = 11,
  CCAI_SERVICE_TYPE_ONDEWO_SURVEY = 12,
  CCAI_SERVICE_TYPE_ONDEWO_NLU_LLM = 13,
  CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBSEARCH = 14,
  CCAI_SERVICE_TYPE_ONDEWO_AIM_WEBCHAT = 15,
  CCAI_SERVICE_TYPE_ONDEWO_AIM_WEBPHONE = 16,
  CCAI_SERVICE_TYPE_ONDEWO_NLU_VECTORSTORE = 17
}
export enum CcaiServiceProvider {
  NO_CCAI_SERVICE_PROVIDER = 0,
  CCAI_SERVICE_PROVIDER_ONDEWO = 1,
  CCAI_SERVICE_PROVIDER_GOOGLE_GEMINI = 2,
  CCAI_SERVICE_PROVIDER_MICROSOFT_AZURE_OPENAI = 3,
  CCAI_SERVICE_PROVIDER_MICROSOFT_AUTOGEN = 4,
  CCAI_SERVICE_PROVIDER_OLLAMA = 5,
  CCAI_SERVICE_PROVIDER_OPENAI = 6,
  CCAI_SERVICE_PROVIDER_ANTHROPIC = 7,
  CCAI_SERVICE_PROVIDER_HUGGINGFACE = 8,
  CCAI_SERVICE_PROVIDER_IBM = 9,
  CCAI_SERVICE_PROVIDER_HAYSTACK = 10,
  CCAI_SERVICE_PROVIDER_LANGCHAIN = 11,
  CCAI_SERVICE_PROVIDER_AMAZON = 12,
  CCAI_SERVICE_PROVIDER_MISTRAL = 13,
  CCAI_SERVICE_PROVIDER_DUCKDUCKGO = 14,
  CCAI_SERVICE_PROVIDER_GOOGLE_PSE = 15,
  CCAI_SERVICE_PROVIDER_JINA = 16,
  CCAI_SERVICE_PROVIDER_TAVILY = 17,
  CCAI_SERVICE_PROVIDER_ELASTICSEARCH = 18,
  CCAI_SERVICE_PROVIDER_MILVUS = 19,
  CCAI_SERVICE_PROVIDER_QDRANT = 20,
  CCAI_SERVICE_PROVIDER_CHROMA = 21
}
export enum CcaiProjectView {
  CCAI_PROJECT_VIEW_UNSPECIFIED = 0,
  CCAI_PROJECT_VIEW_FULL = 1,
  CCAI_PROJECT_VIEW_SHALLOW = 2,
  CCAI_PROJECT_VIEW_MINIMUM = 3
}
/**
 * Message implementation for ondewo.nlu.CcaiProject
 */
export class CcaiProject implements GrpcMessage {
  static id = 'ondewo.nlu.CcaiProject';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CcaiProject();
    CcaiProject.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CcaiProject) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.ownerName = _instance.ownerName || '';
    _instance.ccaiServicesMap = _instance.ccaiServicesMap || {};
    _instance.ccaiProjectStatus = _instance.ccaiProjectStatus || 0;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CcaiProject,
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
          _instance.ownerName = _reader.readString();
          break;
        case 4:
          const msg_4 = {} as any;
          _reader.readMessage(
            msg_4,
            CcaiProject.CcaiServicesMapEntry.deserializeBinaryFromReader
          );
          _instance.ccaiServicesMap = _instance.ccaiServicesMap || {};
          _instance.ccaiServicesMap[msg_4.key] = msg_4.value;
          break;
        case 5:
          _instance.ccaiProjectStatus = _reader.readEnum();
          break;
        case 6:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.createdBy = _reader.readString();
          break;
        case 9:
          _instance.modifiedBy = _reader.readString();
          break;
        case 10:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CcaiProject.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CcaiProject,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.ownerName) {
      _writer.writeString(3, _instance.ownerName);
    }
    if (!!_instance.ccaiServicesMap) {
      const keys_4 = Object.keys(_instance.ccaiServicesMap as any);

      if (keys_4.length) {
        const repeated_4 = keys_4
          .map(key => ({
            key: key,
            value: (_instance.ccaiServicesMap as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          4,
          repeated_4,
          CcaiProject.CcaiServicesMapEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.ccaiProjectStatus) {
      _writer.writeEnum(5, _instance.ccaiProjectStatus);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        7,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(8, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(9, _instance.modifiedBy);
    }
    if (_instance.nluProjectName) {
      _writer.writeString(10, _instance.nluProjectName);
    }
  }

  private _name: string;
  private _displayName: string;
  private _ownerName: string;
  private _ccaiServicesMap: { [prop: string]: CcaiServiceList };
  private _ccaiProjectStatus: CcaiProjectStatus;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CcaiProject to deeply clone from
   */
  constructor(_value?: RecursivePartial<CcaiProject.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.ownerName = _value.ownerName;
    (this.ccaiServicesMap = _value!.ccaiServicesMap
      ? Object.keys(_value!.ccaiServicesMap).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.ccaiServicesMap![k]
              ? new CcaiServiceList(_value!.ccaiServicesMap![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.ccaiProjectStatus = _value.ccaiProjectStatus);
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.nluProjectName = _value.nluProjectName;
    CcaiProject.refineValues(this);
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
  get ownerName(): string {
    return this._ownerName;
  }
  set ownerName(value: string) {
    this._ownerName = value;
  }
  get ccaiServicesMap(): { [prop: string]: CcaiServiceList } {
    return this._ccaiServicesMap;
  }
  set ccaiServicesMap(value: { [prop: string]: CcaiServiceList }) {
    this._ccaiServicesMap = value;
  }
  get ccaiProjectStatus(): CcaiProjectStatus {
    return this._ccaiProjectStatus;
  }
  set ccaiProjectStatus(value: CcaiProjectStatus) {
    this._ccaiProjectStatus = value;
  }
  get createdAt(): googleProtobuf001.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf001.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf001.Timestamp | undefined) {
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
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CcaiProject.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CcaiProject.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      ownerName: this.ownerName,
      ccaiServicesMap: this.ccaiServicesMap
        ? Object.keys(this.ccaiServicesMap).reduce(
            (r, k) => ({
              ...r,
              [k]: this.ccaiServicesMap![k]
                ? this.ccaiServicesMap![k].toObject()
                : undefined
            }),
            {}
          )
        : {},
      ccaiProjectStatus: this.ccaiProjectStatus,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CcaiProject.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      ownerName: this.ownerName,
      ccaiServicesMap: this.ccaiServicesMap
        ? Object.keys(this.ccaiServicesMap).reduce(
            (r, k) => ({
              ...r,
              [k]: this.ccaiServicesMap![k]
                ? this.ccaiServicesMap![k].toJSON()
                : null
            }),
            {}
          )
        : {},
      ccaiProjectStatus:
        CcaiProjectStatus[
          this.ccaiProjectStatus === null ||
          this.ccaiProjectStatus === undefined
            ? 0
            : this.ccaiProjectStatus
        ],
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      nluProjectName: this.nluProjectName
    };
  }
}
export module CcaiProject {
  /**
   * Standard JavaScript object representation for CcaiProject
   */
  export interface AsObject {
    name: string;
    displayName: string;
    ownerName: string;
    ccaiServicesMap: { [prop: string]: CcaiServiceList };
    ccaiProjectStatus: CcaiProjectStatus;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for CcaiProject
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    ownerName: string;
    ccaiServicesMap: { [prop: string]: CcaiServiceList };
    ccaiProjectStatus: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    nluProjectName: string;
  }

  /**
   * Message implementation for ondewo.nlu.CcaiProject.CcaiServicesMapEntry
   */
  export class CcaiServicesMapEntry implements GrpcMessage {
    static id = 'ondewo.nlu.CcaiProject.CcaiServicesMapEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CcaiServicesMapEntry();
      CcaiServicesMapEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiServicesMapEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CcaiServicesMapEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new CcaiServiceList();
            _reader.readMessage(
              _instance.value,
              CcaiServiceList.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      CcaiServicesMapEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CcaiServicesMapEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          CcaiServiceList.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: CcaiServiceList;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiServicesMapEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiServicesMapEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value ? new CcaiServiceList(_value.value) : undefined;
      CcaiServicesMapEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): CcaiServiceList | undefined {
      return this._value;
    }
    set value(value: CcaiServiceList | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      CcaiServicesMapEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiServicesMapEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): CcaiServicesMapEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module CcaiServicesMapEntry {
    /**
     * Standard JavaScript object representation for CcaiServicesMapEntry
     */
    export interface AsObject {
      key: string;
      value?: CcaiServiceList.AsObject;
    }

    /**
     * Protobuf JSON representation for CcaiServicesMapEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: CcaiServiceList.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.CcaiServiceList
 */
export class CcaiServiceList implements GrpcMessage {
  static id = 'ondewo.nlu.CcaiServiceList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CcaiServiceList();
    CcaiServiceList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CcaiServiceList) {
    _instance.ccaiServices = _instance.ccaiServices || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CcaiServiceList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CcaiService();
          _reader.readMessage(
            messageInitializer1,
            CcaiService.deserializeBinaryFromReader
          );
          (_instance.ccaiServices = _instance.ccaiServices || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CcaiServiceList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CcaiServiceList,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiServices && _instance.ccaiServices.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.ccaiServices as any,
        CcaiService.serializeBinaryToWriter
      );
    }
  }

  private _ccaiServices?: CcaiService[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CcaiServiceList to deeply clone from
   */
  constructor(_value?: RecursivePartial<CcaiServiceList.AsObject>) {
    _value = _value || {};
    this.ccaiServices = (_value.ccaiServices || []).map(
      m => new CcaiService(m)
    );
    CcaiServiceList.refineValues(this);
  }
  get ccaiServices(): CcaiService[] | undefined {
    return this._ccaiServices;
  }
  set ccaiServices(value: CcaiService[] | undefined) {
    this._ccaiServices = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CcaiServiceList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CcaiServiceList.AsObject {
    return {
      ccaiServices: (this.ccaiServices || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CcaiServiceList.AsProtobufJSON {
    return {
      ccaiServices: (this.ccaiServices || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CcaiServiceList {
  /**
   * Standard JavaScript object representation for CcaiServiceList
   */
  export interface AsObject {
    ccaiServices?: CcaiService.AsObject[];
  }

  /**
   * Protobuf JSON representation for CcaiServiceList
   */
  export interface AsProtobufJSON {
    ccaiServices: CcaiService.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.CcaiService
 */
export class CcaiService implements GrpcMessage {
  static id = 'ondewo.nlu.CcaiService';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CcaiService();
    CcaiService.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CcaiService) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.grpcHost = _instance.grpcHost || '';
    _instance.grpcPort = _instance.grpcPort || 0;
    _instance.webgrpcHost = _instance.webgrpcHost || '';
    _instance.webgrpcPort = _instance.webgrpcPort || 0;
    _instance.grpcCert = _instance.grpcCert || '';
    _instance.host = _instance.host || '';
    _instance.port = _instance.port || 0;
    _instance.port2 = _instance.port2 || 0;
    _instance.httpBasicAuthToken = _instance.httpBasicAuthToken || '';
    _instance.accountName = _instance.accountName || '';
    _instance.accountPassword = _instance.accountPassword || '';
    _instance.apiKey = _instance.apiKey || '';
    _instance.ccaiServiceType = _instance.ccaiServiceType || 0;
    _instance.ccaiProjectName = _instance.ccaiProjectName || '';
    _instance.ccaiServiceConfig = _instance.ccaiServiceConfig || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.headers = _instance.headers || undefined;
    _instance.ccaiServiceProvider = _instance.ccaiServiceProvider || 0;
    _instance.serviceHierarchy = _instance.serviceHierarchy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CcaiService,
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
          _instance.languageCode = _reader.readString();
          break;
        case 4:
          _instance.grpcHost = _reader.readString();
          break;
        case 5:
          _instance.grpcPort = _reader.readInt32();
          break;
        case 6:
          _instance.webgrpcHost = _reader.readString();
          break;
        case 7:
          _instance.webgrpcPort = _reader.readInt32();
          break;
        case 8:
          _instance.grpcCert = _reader.readString();
          break;
        case 9:
          _instance.host = _reader.readString();
          break;
        case 10:
          _instance.port = _reader.readInt32();
          break;
        case 11:
          _instance.port2 = _reader.readInt32();
          break;
        case 12:
          _instance.httpBasicAuthToken = _reader.readString();
          break;
        case 13:
          _instance.accountName = _reader.readString();
          break;
        case 14:
          _instance.accountPassword = _reader.readString();
          break;
        case 15:
          _instance.apiKey = _reader.readString();
          break;
        case 16:
          _instance.ccaiServiceType = _reader.readEnum();
          break;
        case 17:
          _instance.ccaiProjectName = _reader.readString();
          break;
        case 18:
          _instance.ccaiServiceConfig = new googleProtobuf002.Struct();
          _reader.readMessage(
            _instance.ccaiServiceConfig,
            googleProtobuf002.Struct.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.createdBy = _reader.readString();
          break;
        case 22:
          _instance.modifiedBy = _reader.readString();
          break;
        case 23:
          _instance.headers = new googleProtobuf002.Struct();
          _reader.readMessage(
            _instance.headers,
            googleProtobuf002.Struct.deserializeBinaryFromReader
          );
          break;
        case 24:
          _instance.ccaiServiceProvider = _reader.readEnum();
          break;
        case 25:
          _instance.serviceHierarchy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CcaiService.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CcaiService,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.grpcHost) {
      _writer.writeString(4, _instance.grpcHost);
    }
    if (_instance.grpcPort) {
      _writer.writeInt32(5, _instance.grpcPort);
    }
    if (_instance.webgrpcHost) {
      _writer.writeString(6, _instance.webgrpcHost);
    }
    if (_instance.webgrpcPort) {
      _writer.writeInt32(7, _instance.webgrpcPort);
    }
    if (_instance.grpcCert) {
      _writer.writeString(8, _instance.grpcCert);
    }
    if (_instance.host) {
      _writer.writeString(9, _instance.host);
    }
    if (_instance.port) {
      _writer.writeInt32(10, _instance.port);
    }
    if (_instance.port2) {
      _writer.writeInt32(11, _instance.port2);
    }
    if (_instance.httpBasicAuthToken) {
      _writer.writeString(12, _instance.httpBasicAuthToken);
    }
    if (_instance.accountName) {
      _writer.writeString(13, _instance.accountName);
    }
    if (_instance.accountPassword) {
      _writer.writeString(14, _instance.accountPassword);
    }
    if (_instance.apiKey) {
      _writer.writeString(15, _instance.apiKey);
    }
    if (_instance.ccaiServiceType) {
      _writer.writeEnum(16, _instance.ccaiServiceType);
    }
    if (_instance.ccaiProjectName) {
      _writer.writeString(17, _instance.ccaiProjectName);
    }
    if (_instance.ccaiServiceConfig) {
      _writer.writeMessage(
        18,
        _instance.ccaiServiceConfig as any,
        googleProtobuf002.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        19,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        20,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(21, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(22, _instance.modifiedBy);
    }
    if (_instance.headers) {
      _writer.writeMessage(
        23,
        _instance.headers as any,
        googleProtobuf002.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.ccaiServiceProvider) {
      _writer.writeEnum(24, _instance.ccaiServiceProvider);
    }
    if (_instance.serviceHierarchy) {
      _writer.writeString(25, _instance.serviceHierarchy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _languageCode: string;
  private _grpcHost: string;
  private _grpcPort: number;
  private _webgrpcHost: string;
  private _webgrpcPort: number;
  private _grpcCert: string;
  private _host: string;
  private _port: number;
  private _port2: number;
  private _httpBasicAuthToken: string;
  private _accountName: string;
  private _accountPassword: string;
  private _apiKey: string;
  private _ccaiServiceType: CcaiServiceType;
  private _ccaiProjectName: string;
  private _ccaiServiceConfig?: googleProtobuf002.Struct;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;
  private _headers?: googleProtobuf002.Struct;
  private _ccaiServiceProvider: CcaiServiceProvider;
  private _serviceHierarchy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CcaiService to deeply clone from
   */
  constructor(_value?: RecursivePartial<CcaiService.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.languageCode = _value.languageCode;
    this.grpcHost = _value.grpcHost;
    this.grpcPort = _value.grpcPort;
    this.webgrpcHost = _value.webgrpcHost;
    this.webgrpcPort = _value.webgrpcPort;
    this.grpcCert = _value.grpcCert;
    this.host = _value.host;
    this.port = _value.port;
    this.port2 = _value.port2;
    this.httpBasicAuthToken = _value.httpBasicAuthToken;
    this.accountName = _value.accountName;
    this.accountPassword = _value.accountPassword;
    this.apiKey = _value.apiKey;
    this.ccaiServiceType = _value.ccaiServiceType;
    this.ccaiProjectName = _value.ccaiProjectName;
    this.ccaiServiceConfig = _value.ccaiServiceConfig
      ? new googleProtobuf002.Struct(_value.ccaiServiceConfig)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    this.headers = _value.headers
      ? new googleProtobuf002.Struct(_value.headers)
      : undefined;
    this.ccaiServiceProvider = _value.ccaiServiceProvider;
    this.serviceHierarchy = _value.serviceHierarchy;
    CcaiService.refineValues(this);
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
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get grpcHost(): string {
    return this._grpcHost;
  }
  set grpcHost(value: string) {
    this._grpcHost = value;
  }
  get grpcPort(): number {
    return this._grpcPort;
  }
  set grpcPort(value: number) {
    this._grpcPort = value;
  }
  get webgrpcHost(): string {
    return this._webgrpcHost;
  }
  set webgrpcHost(value: string) {
    this._webgrpcHost = value;
  }
  get webgrpcPort(): number {
    return this._webgrpcPort;
  }
  set webgrpcPort(value: number) {
    this._webgrpcPort = value;
  }
  get grpcCert(): string {
    return this._grpcCert;
  }
  set grpcCert(value: string) {
    this._grpcCert = value;
  }
  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }
  get port(): number {
    return this._port;
  }
  set port(value: number) {
    this._port = value;
  }
  get port2(): number {
    return this._port2;
  }
  set port2(value: number) {
    this._port2 = value;
  }
  get httpBasicAuthToken(): string {
    return this._httpBasicAuthToken;
  }
  set httpBasicAuthToken(value: string) {
    this._httpBasicAuthToken = value;
  }
  get accountName(): string {
    return this._accountName;
  }
  set accountName(value: string) {
    this._accountName = value;
  }
  get accountPassword(): string {
    return this._accountPassword;
  }
  set accountPassword(value: string) {
    this._accountPassword = value;
  }
  get apiKey(): string {
    return this._apiKey;
  }
  set apiKey(value: string) {
    this._apiKey = value;
  }
  get ccaiServiceType(): CcaiServiceType {
    return this._ccaiServiceType;
  }
  set ccaiServiceType(value: CcaiServiceType) {
    this._ccaiServiceType = value;
  }
  get ccaiProjectName(): string {
    return this._ccaiProjectName;
  }
  set ccaiProjectName(value: string) {
    this._ccaiProjectName = value;
  }
  get ccaiServiceConfig(): googleProtobuf002.Struct | undefined {
    return this._ccaiServiceConfig;
  }
  set ccaiServiceConfig(value: googleProtobuf002.Struct | undefined) {
    this._ccaiServiceConfig = value;
  }
  get createdAt(): googleProtobuf001.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf001.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf001.Timestamp | undefined) {
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
  get headers(): googleProtobuf002.Struct | undefined {
    return this._headers;
  }
  set headers(value: googleProtobuf002.Struct | undefined) {
    this._headers = value;
  }
  get ccaiServiceProvider(): CcaiServiceProvider {
    return this._ccaiServiceProvider;
  }
  set ccaiServiceProvider(value: CcaiServiceProvider) {
    this._ccaiServiceProvider = value;
  }
  get serviceHierarchy(): string {
    return this._serviceHierarchy;
  }
  set serviceHierarchy(value: string) {
    this._serviceHierarchy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CcaiService.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CcaiService.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      languageCode: this.languageCode,
      grpcHost: this.grpcHost,
      grpcPort: this.grpcPort,
      webgrpcHost: this.webgrpcHost,
      webgrpcPort: this.webgrpcPort,
      grpcCert: this.grpcCert,
      host: this.host,
      port: this.port,
      port2: this.port2,
      httpBasicAuthToken: this.httpBasicAuthToken,
      accountName: this.accountName,
      accountPassword: this.accountPassword,
      apiKey: this.apiKey,
      ccaiServiceType: this.ccaiServiceType,
      ccaiProjectName: this.ccaiProjectName,
      ccaiServiceConfig: this.ccaiServiceConfig
        ? this.ccaiServiceConfig.toObject()
        : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      headers: this.headers ? this.headers.toObject() : undefined,
      ccaiServiceProvider: this.ccaiServiceProvider,
      serviceHierarchy: this.serviceHierarchy
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CcaiService.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      languageCode: this.languageCode,
      grpcHost: this.grpcHost,
      grpcPort: this.grpcPort,
      webgrpcHost: this.webgrpcHost,
      webgrpcPort: this.webgrpcPort,
      grpcCert: this.grpcCert,
      host: this.host,
      port: this.port,
      port2: this.port2,
      httpBasicAuthToken: this.httpBasicAuthToken,
      accountName: this.accountName,
      accountPassword: this.accountPassword,
      apiKey: this.apiKey,
      ccaiServiceType:
        CcaiServiceType[
          this.ccaiServiceType === null || this.ccaiServiceType === undefined
            ? 0
            : this.ccaiServiceType
        ],
      ccaiProjectName: this.ccaiProjectName,
      ccaiServiceConfig: this.ccaiServiceConfig
        ? this.ccaiServiceConfig.toProtobufJSON(options)
        : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      headers: this.headers ? this.headers.toProtobufJSON(options) : null,
      ccaiServiceProvider:
        CcaiServiceProvider[
          this.ccaiServiceProvider === null ||
          this.ccaiServiceProvider === undefined
            ? 0
            : this.ccaiServiceProvider
        ],
      serviceHierarchy: this.serviceHierarchy
    };
  }
}
export module CcaiService {
  /**
   * Standard JavaScript object representation for CcaiService
   */
  export interface AsObject {
    name: string;
    displayName: string;
    languageCode: string;
    grpcHost: string;
    grpcPort: number;
    webgrpcHost: string;
    webgrpcPort: number;
    grpcCert: string;
    host: string;
    port: number;
    port2: number;
    httpBasicAuthToken: string;
    accountName: string;
    accountPassword: string;
    apiKey: string;
    ccaiServiceType: CcaiServiceType;
    ccaiProjectName: string;
    ccaiServiceConfig?: googleProtobuf002.Struct.AsObject;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
    headers?: googleProtobuf002.Struct.AsObject;
    ccaiServiceProvider: CcaiServiceProvider;
    serviceHierarchy: string;
  }

  /**
   * Protobuf JSON representation for CcaiService
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    languageCode: string;
    grpcHost: string;
    grpcPort: number;
    webgrpcHost: string;
    webgrpcPort: number;
    grpcCert: string;
    host: string;
    port: number;
    port2: number;
    httpBasicAuthToken: string;
    accountName: string;
    accountPassword: string;
    apiKey: string;
    ccaiServiceType: string;
    ccaiProjectName: string;
    ccaiServiceConfig: googleProtobuf002.Struct.AsProtobufJSON | null;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
    headers: googleProtobuf002.Struct.AsProtobufJSON | null;
    ccaiServiceProvider: string;
    serviceHierarchy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateCcaiProjectRequest
 */
export class CreateCcaiProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateCcaiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCcaiProjectRequest();
    CreateCcaiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCcaiProjectRequest) {
    _instance.ccaiProject = _instance.ccaiProject || undefined;
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCcaiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ccaiProject = new CcaiProject();
          _reader.readMessage(
            _instance.ccaiProject,
            CcaiProject.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCcaiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCcaiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiProject) {
      _writer.writeMessage(
        1,
        _instance.ccaiProject as any,
        CcaiProject.serializeBinaryToWriter
      );
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _ccaiProject?: CcaiProject;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCcaiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCcaiProjectRequest.AsObject>) {
    _value = _value || {};
    this.ccaiProject = _value.ccaiProject
      ? new CcaiProject(_value.ccaiProject)
      : undefined;
    this.nluProjectName = _value.nluProjectName;
    CreateCcaiProjectRequest.refineValues(this);
  }
  get ccaiProject(): CcaiProject | undefined {
    return this._ccaiProject;
  }
  set ccaiProject(value: CcaiProject | undefined) {
    this._ccaiProject = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCcaiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCcaiProjectRequest.AsObject {
    return {
      ccaiProject: this.ccaiProject ? this.ccaiProject.toObject() : undefined,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateCcaiProjectRequest.AsProtobufJSON {
    return {
      ccaiProject: this.ccaiProject
        ? this.ccaiProject.toProtobufJSON(options)
        : null,
      nluProjectName: this.nluProjectName
    };
  }
}
export module CreateCcaiProjectRequest {
  /**
   * Standard JavaScript object representation for CreateCcaiProjectRequest
   */
  export interface AsObject {
    ccaiProject?: CcaiProject.AsObject;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for CreateCcaiProjectRequest
   */
  export interface AsProtobufJSON {
    ccaiProject: CcaiProject.AsProtobufJSON | null;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateCcaiProjectResponse
 */
export class CreateCcaiProjectResponse implements GrpcMessage {
  static id = 'ondewo.nlu.CreateCcaiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCcaiProjectResponse();
    CreateCcaiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCcaiProjectResponse) {
    _instance.ccaiProject = _instance.ccaiProject || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCcaiProjectResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ccaiProject = new CcaiProject();
          _reader.readMessage(
            _instance.ccaiProject,
            CcaiProject.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCcaiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCcaiProjectResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiProject) {
      _writer.writeMessage(
        1,
        _instance.ccaiProject as any,
        CcaiProject.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _ccaiProject?: CcaiProject;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCcaiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCcaiProjectResponse.AsObject>) {
    _value = _value || {};
    this.ccaiProject = _value.ccaiProject
      ? new CcaiProject(_value.ccaiProject)
      : undefined;
    this.errorMessage = _value.errorMessage;
    CreateCcaiProjectResponse.refineValues(this);
  }
  get ccaiProject(): CcaiProject | undefined {
    return this._ccaiProject;
  }
  set ccaiProject(value: CcaiProject | undefined) {
    this._ccaiProject = value;
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
    CreateCcaiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCcaiProjectResponse.AsObject {
    return {
      ccaiProject: this.ccaiProject ? this.ccaiProject.toObject() : undefined,
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
  ): CreateCcaiProjectResponse.AsProtobufJSON {
    return {
      ccaiProject: this.ccaiProject
        ? this.ccaiProject.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module CreateCcaiProjectResponse {
  /**
   * Standard JavaScript object representation for CreateCcaiProjectResponse
   */
  export interface AsObject {
    ccaiProject?: CcaiProject.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CreateCcaiProjectResponse
   */
  export interface AsProtobufJSON {
    ccaiProject: CcaiProject.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetCcaiProjectRequest
 */
export class GetCcaiProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetCcaiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCcaiProjectRequest();
    GetCcaiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCcaiProjectRequest) {
    _instance.name = _instance.name || '';
    _instance.ccaiProjectView = _instance.ccaiProjectView || 0;
    _instance.ccaiServiceFilter = _instance.ccaiServiceFilter || undefined;
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCcaiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.ccaiProjectView = _reader.readEnum();
          break;
        case 3:
          _instance.ccaiServiceFilter = new CcaiServiceFilter();
          _reader.readMessage(
            _instance.ccaiServiceFilter,
            CcaiServiceFilter.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetCcaiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCcaiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.ccaiProjectView) {
      _writer.writeEnum(2, _instance.ccaiProjectView);
    }
    if (_instance.ccaiServiceFilter) {
      _writer.writeMessage(
        3,
        _instance.ccaiServiceFilter as any,
        CcaiServiceFilter.serializeBinaryToWriter
      );
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _name: string;
  private _ccaiProjectView: CcaiProjectView;
  private _ccaiServiceFilter?: CcaiServiceFilter;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCcaiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCcaiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.ccaiProjectView = _value.ccaiProjectView;
    this.ccaiServiceFilter = _value.ccaiServiceFilter
      ? new CcaiServiceFilter(_value.ccaiServiceFilter)
      : undefined;
    this.nluProjectName = _value.nluProjectName;
    GetCcaiProjectRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get ccaiProjectView(): CcaiProjectView {
    return this._ccaiProjectView;
  }
  set ccaiProjectView(value: CcaiProjectView) {
    this._ccaiProjectView = value;
  }
  get ccaiServiceFilter(): CcaiServiceFilter | undefined {
    return this._ccaiServiceFilter;
  }
  set ccaiServiceFilter(value: CcaiServiceFilter | undefined) {
    this._ccaiServiceFilter = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCcaiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCcaiProjectRequest.AsObject {
    return {
      name: this.name,
      ccaiProjectView: this.ccaiProjectView,
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toObject()
        : undefined,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetCcaiProjectRequest.AsProtobufJSON {
    return {
      name: this.name,
      ccaiProjectView:
        CcaiProjectView[
          this.ccaiProjectView === null || this.ccaiProjectView === undefined
            ? 0
            : this.ccaiProjectView
        ],
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toProtobufJSON(options)
        : null,
      nluProjectName: this.nluProjectName
    };
  }
}
export module GetCcaiProjectRequest {
  /**
   * Standard JavaScript object representation for GetCcaiProjectRequest
   */
  export interface AsObject {
    name: string;
    ccaiProjectView: CcaiProjectView;
    ccaiServiceFilter?: CcaiServiceFilter.AsObject;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for GetCcaiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
    ccaiProjectView: string;
    ccaiServiceFilter: CcaiServiceFilter.AsProtobufJSON | null;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetCcaiServiceRequest
 */
export class GetCcaiServiceRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetCcaiServiceRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCcaiServiceRequest();
    GetCcaiServiceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCcaiServiceRequest) {
    _instance.name = _instance.name || '';
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCcaiServiceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetCcaiServiceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCcaiServiceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _name: string;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCcaiServiceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCcaiServiceRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.nluProjectName = _value.nluProjectName;
    GetCcaiServiceRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCcaiServiceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCcaiServiceRequest.AsObject {
    return {
      name: this.name,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetCcaiServiceRequest.AsProtobufJSON {
    return {
      name: this.name,
      nluProjectName: this.nluProjectName
    };
  }
}
export module GetCcaiServiceRequest {
  /**
   * Standard JavaScript object representation for GetCcaiServiceRequest
   */
  export interface AsObject {
    name: string;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for GetCcaiServiceRequest
   */
  export interface AsProtobufJSON {
    name: string;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListCcaiProjectsRequest
 */
export class ListCcaiProjectsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListCcaiProjectsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCcaiProjectsRequest();
    ListCcaiProjectsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCcaiProjectsRequest) {
    _instance.ccaiProjectView = _instance.ccaiProjectView || 0;
    _instance.ccaiServiceFilter = _instance.ccaiServiceFilter || undefined;
    _instance.ccaiProjectSorting = _instance.ccaiProjectSorting || undefined;
    _instance.pageToken = _instance.pageToken || '';
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCcaiProjectsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ccaiProjectView = _reader.readEnum();
          break;
        case 2:
          _instance.ccaiServiceFilter = new CcaiServiceFilter();
          _reader.readMessage(
            _instance.ccaiServiceFilter,
            CcaiServiceFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.ccaiProjectSorting = new CcaiProjectSorting();
          _reader.readMessage(
            _instance.ccaiProjectSorting,
            CcaiProjectSorting.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCcaiProjectsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCcaiProjectsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiProjectView) {
      _writer.writeEnum(1, _instance.ccaiProjectView);
    }
    if (_instance.ccaiServiceFilter) {
      _writer.writeMessage(
        2,
        _instance.ccaiServiceFilter as any,
        CcaiServiceFilter.serializeBinaryToWriter
      );
    }
    if (_instance.ccaiProjectSorting) {
      _writer.writeMessage(
        3,
        _instance.ccaiProjectSorting as any,
        CcaiProjectSorting.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.nluProjectName) {
      _writer.writeString(5, _instance.nluProjectName);
    }
  }

  private _ccaiProjectView: CcaiProjectView;
  private _ccaiServiceFilter?: CcaiServiceFilter;
  private _ccaiProjectSorting?: CcaiProjectSorting;
  private _pageToken: string;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCcaiProjectsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCcaiProjectsRequest.AsObject>) {
    _value = _value || {};
    this.ccaiProjectView = _value.ccaiProjectView;
    this.ccaiServiceFilter = _value.ccaiServiceFilter
      ? new CcaiServiceFilter(_value.ccaiServiceFilter)
      : undefined;
    this.ccaiProjectSorting = _value.ccaiProjectSorting
      ? new CcaiProjectSorting(_value.ccaiProjectSorting)
      : undefined;
    this.pageToken = _value.pageToken;
    this.nluProjectName = _value.nluProjectName;
    ListCcaiProjectsRequest.refineValues(this);
  }
  get ccaiProjectView(): CcaiProjectView {
    return this._ccaiProjectView;
  }
  set ccaiProjectView(value: CcaiProjectView) {
    this._ccaiProjectView = value;
  }
  get ccaiServiceFilter(): CcaiServiceFilter | undefined {
    return this._ccaiServiceFilter;
  }
  set ccaiServiceFilter(value: CcaiServiceFilter | undefined) {
    this._ccaiServiceFilter = value;
  }
  get ccaiProjectSorting(): CcaiProjectSorting | undefined {
    return this._ccaiProjectSorting;
  }
  set ccaiProjectSorting(value: CcaiProjectSorting | undefined) {
    this._ccaiProjectSorting = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCcaiProjectsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCcaiProjectsRequest.AsObject {
    return {
      ccaiProjectView: this.ccaiProjectView,
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toObject()
        : undefined,
      ccaiProjectSorting: this.ccaiProjectSorting
        ? this.ccaiProjectSorting.toObject()
        : undefined,
      pageToken: this.pageToken,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListCcaiProjectsRequest.AsProtobufJSON {
    return {
      ccaiProjectView:
        CcaiProjectView[
          this.ccaiProjectView === null || this.ccaiProjectView === undefined
            ? 0
            : this.ccaiProjectView
        ],
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toProtobufJSON(options)
        : null,
      ccaiProjectSorting: this.ccaiProjectSorting
        ? this.ccaiProjectSorting.toProtobufJSON(options)
        : null,
      pageToken: this.pageToken,
      nluProjectName: this.nluProjectName
    };
  }
}
export module ListCcaiProjectsRequest {
  /**
   * Standard JavaScript object representation for ListCcaiProjectsRequest
   */
  export interface AsObject {
    ccaiProjectView: CcaiProjectView;
    ccaiServiceFilter?: CcaiServiceFilter.AsObject;
    ccaiProjectSorting?: CcaiProjectSorting.AsObject;
    pageToken: string;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for ListCcaiProjectsRequest
   */
  export interface AsProtobufJSON {
    ccaiProjectView: string;
    ccaiServiceFilter: CcaiServiceFilter.AsProtobufJSON | null;
    ccaiProjectSorting: CcaiProjectSorting.AsProtobufJSON | null;
    pageToken: string;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListCcaiProjectsResponse
 */
export class ListCcaiProjectsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListCcaiProjectsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCcaiProjectsResponse();
    ListCcaiProjectsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCcaiProjectsResponse) {
    _instance.ccaiProjects = _instance.ccaiProjects || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCcaiProjectsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CcaiProject();
          _reader.readMessage(
            messageInitializer1,
            CcaiProject.deserializeBinaryFromReader
          );
          (_instance.ccaiProjects = _instance.ccaiProjects || []).push(
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

    ListCcaiProjectsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCcaiProjectsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiProjects && _instance.ccaiProjects.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.ccaiProjects as any,
        CcaiProject.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _ccaiProjects?: CcaiProject[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCcaiProjectsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCcaiProjectsResponse.AsObject>) {
    _value = _value || {};
    this.ccaiProjects = (_value.ccaiProjects || []).map(
      m => new CcaiProject(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListCcaiProjectsResponse.refineValues(this);
  }
  get ccaiProjects(): CcaiProject[] | undefined {
    return this._ccaiProjects;
  }
  set ccaiProjects(value: CcaiProject[] | undefined) {
    this._ccaiProjects = value;
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
    ListCcaiProjectsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCcaiProjectsResponse.AsObject {
    return {
      ccaiProjects: (this.ccaiProjects || []).map(m => m.toObject()),
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
  ): ListCcaiProjectsResponse.AsProtobufJSON {
    return {
      ccaiProjects: (this.ccaiProjects || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListCcaiProjectsResponse {
  /**
   * Standard JavaScript object representation for ListCcaiProjectsResponse
   */
  export interface AsObject {
    ccaiProjects?: CcaiProject.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListCcaiProjectsResponse
   */
  export interface AsProtobufJSON {
    ccaiProjects: CcaiProject.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CcaiProjectSorting
 */
export class CcaiProjectSorting implements GrpcMessage {
  static id = 'ondewo.nlu.CcaiProjectSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CcaiProjectSorting();
    CcaiProjectSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CcaiProjectSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CcaiProjectSorting,
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

    CcaiProjectSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CcaiProjectSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: CcaiProjectSorting.CcaiProjectSortingField;
  private _sortingMode: ondewoNlu003.SortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CcaiProjectSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<CcaiProjectSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    CcaiProjectSorting.refineValues(this);
  }
  get sortingField(): CcaiProjectSorting.CcaiProjectSortingField {
    return this._sortingField;
  }
  set sortingField(value: CcaiProjectSorting.CcaiProjectSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoNlu003.SortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoNlu003.SortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CcaiProjectSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CcaiProjectSorting.AsObject {
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
  ): CcaiProjectSorting.AsProtobufJSON {
    return {
      sortingField:
        CcaiProjectSorting.CcaiProjectSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoNlu003.SortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module CcaiProjectSorting {
  /**
   * Standard JavaScript object representation for CcaiProjectSorting
   */
  export interface AsObject {
    sortingField: CcaiProjectSorting.CcaiProjectSortingField;
    sortingMode: ondewoNlu003.SortingMode;
  }

  /**
   * Protobuf JSON representation for CcaiProjectSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum CcaiProjectSortingField {
    NO_CCAI_PROJECT_SORTING = 0,
    SORT_CCAI_PROJECT_BY_NAME = 1,
    SORT_CCAI_PROJECT_BY_DISPLAY_NAME = 2,
    SORT_CCAI_PROJECT_BY_CREATION_DATE = 3,
    SORT_CCAI_PROJECT_BY_LAST_MODIFIED = 4
  }
}

/**
 * Message implementation for ondewo.nlu.CcaiServiceFilter
 */
export class CcaiServiceFilter implements GrpcMessage {
  static id = 'ondewo.nlu.CcaiServiceFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CcaiServiceFilter();
    CcaiServiceFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CcaiServiceFilter) {
    _instance.languageCodes = _instance.languageCodes || [];
    _instance.ccaiServiceTypes = _instance.ccaiServiceTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CcaiServiceFilter,
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
          _reader.readPackableEnumInto(
            (_instance.ccaiServiceTypes = _instance.ccaiServiceTypes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CcaiServiceFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CcaiServiceFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCodes && _instance.languageCodes.length) {
      _writer.writeRepeatedString(1, _instance.languageCodes);
    }
    if (_instance.ccaiServiceTypes && _instance.ccaiServiceTypes.length) {
      _writer.writePackedEnum(2, _instance.ccaiServiceTypes);
    }
  }

  private _languageCodes: string[];
  private _ccaiServiceTypes: CcaiServiceType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CcaiServiceFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CcaiServiceFilter.AsObject>) {
    _value = _value || {};
    this.languageCodes = (_value.languageCodes || []).slice();
    this.ccaiServiceTypes = (_value.ccaiServiceTypes || []).slice();
    CcaiServiceFilter.refineValues(this);
  }
  get languageCodes(): string[] {
    return this._languageCodes;
  }
  set languageCodes(value: string[]) {
    this._languageCodes = value;
  }
  get ccaiServiceTypes(): CcaiServiceType[] {
    return this._ccaiServiceTypes;
  }
  set ccaiServiceTypes(value: CcaiServiceType[]) {
    this._ccaiServiceTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CcaiServiceFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CcaiServiceFilter.AsObject {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      ccaiServiceTypes: (this.ccaiServiceTypes || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CcaiServiceFilter.AsProtobufJSON {
    return {
      languageCodes: (this.languageCodes || []).slice(),
      ccaiServiceTypes: (this.ccaiServiceTypes || []).map(
        v => CcaiServiceType[v]
      )
    };
  }
}
export module CcaiServiceFilter {
  /**
   * Standard JavaScript object representation for CcaiServiceFilter
   */
  export interface AsObject {
    languageCodes: string[];
    ccaiServiceTypes: CcaiServiceType[];
  }

  /**
   * Protobuf JSON representation for CcaiServiceFilter
   */
  export interface AsProtobufJSON {
    languageCodes: string[];
    ccaiServiceTypes: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectRequest
 */
export class UpdateCcaiProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateCcaiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCcaiProjectRequest();
    UpdateCcaiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCcaiProjectRequest) {
    _instance.ccaiProject = _instance.ccaiProject || undefined;
    _instance.ccaiServiceFilter = _instance.ccaiServiceFilter || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCcaiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ccaiProject = new CcaiProject();
          _reader.readMessage(
            _instance.ccaiProject,
            CcaiProject.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.ccaiServiceFilter = new CcaiServiceFilter();
          _reader.readMessage(
            _instance.ccaiServiceFilter,
            CcaiServiceFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCcaiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCcaiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ccaiProject) {
      _writer.writeMessage(
        1,
        _instance.ccaiProject as any,
        CcaiProject.serializeBinaryToWriter
      );
    }
    if (_instance.ccaiServiceFilter) {
      _writer.writeMessage(
        2,
        _instance.ccaiServiceFilter as any,
        CcaiServiceFilter.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        3,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _ccaiProject?: CcaiProject;
  private _ccaiServiceFilter?: CcaiServiceFilter;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCcaiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCcaiProjectRequest.AsObject>) {
    _value = _value || {};
    this.ccaiProject = _value.ccaiProject
      ? new CcaiProject(_value.ccaiProject)
      : undefined;
    this.ccaiServiceFilter = _value.ccaiServiceFilter
      ? new CcaiServiceFilter(_value.ccaiServiceFilter)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.nluProjectName = _value.nluProjectName;
    UpdateCcaiProjectRequest.refineValues(this);
  }
  get ccaiProject(): CcaiProject | undefined {
    return this._ccaiProject;
  }
  set ccaiProject(value: CcaiProject | undefined) {
    this._ccaiProject = value;
  }
  get ccaiServiceFilter(): CcaiServiceFilter | undefined {
    return this._ccaiServiceFilter;
  }
  set ccaiServiceFilter(value: CcaiServiceFilter | undefined) {
    this._ccaiServiceFilter = value;
  }
  get updateMask(): googleProtobuf000.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf000.FieldMask | undefined) {
    this._updateMask = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCcaiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCcaiProjectRequest.AsObject {
    return {
      ccaiProject: this.ccaiProject ? this.ccaiProject.toObject() : undefined,
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toObject()
        : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateCcaiProjectRequest.AsProtobufJSON {
    return {
      ccaiProject: this.ccaiProject
        ? this.ccaiProject.toProtobufJSON(options)
        : null,
      ccaiServiceFilter: this.ccaiServiceFilter
        ? this.ccaiServiceFilter.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      nluProjectName: this.nluProjectName
    };
  }
}
export module UpdateCcaiProjectRequest {
  /**
   * Standard JavaScript object representation for UpdateCcaiProjectRequest
   */
  export interface AsObject {
    ccaiProject?: CcaiProject.AsObject;
    ccaiServiceFilter?: CcaiServiceFilter.AsObject;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for UpdateCcaiProjectRequest
   */
  export interface AsProtobufJSON {
    ccaiProject: CcaiProject.AsProtobufJSON | null;
    ccaiServiceFilter: CcaiServiceFilter.AsProtobufJSON | null;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectResponse
 */
export class UpdateCcaiProjectResponse implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateCcaiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCcaiProjectResponse();
    UpdateCcaiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCcaiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCcaiProjectResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCcaiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCcaiProjectResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCcaiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCcaiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    UpdateCcaiProjectResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    UpdateCcaiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCcaiProjectResponse.AsObject {
    return {
      name: this.name,
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
  ): UpdateCcaiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateCcaiProjectResponse {
  /**
   * Standard JavaScript object representation for UpdateCcaiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateCcaiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectRequest
 */
export class DeleteCcaiProjectRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteCcaiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCcaiProjectRequest();
    DeleteCcaiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCcaiProjectRequest) {
    _instance.name = _instance.name || '';
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCcaiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCcaiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCcaiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _name: string;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCcaiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCcaiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.nluProjectName = _value.nluProjectName;
    DeleteCcaiProjectRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCcaiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCcaiProjectRequest.AsObject {
    return {
      name: this.name,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteCcaiProjectRequest.AsProtobufJSON {
    return {
      name: this.name,
      nluProjectName: this.nluProjectName
    };
  }
}
export module DeleteCcaiProjectRequest {
  /**
   * Standard JavaScript object representation for DeleteCcaiProjectRequest
   */
  export interface AsObject {
    name: string;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for DeleteCcaiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
    nluProjectName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectResponse
 */
export class DeleteCcaiProjectResponse implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteCcaiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCcaiProjectResponse();
    DeleteCcaiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCcaiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.nluProjectName = _instance.nluProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCcaiProjectResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        case 4:
          _instance.nluProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCcaiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCcaiProjectResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
    if (_instance.nluProjectName) {
      _writer.writeString(4, _instance.nluProjectName);
    }
  }

  private _name: string;
  private _errorMessage: string;
  private _nluProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCcaiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCcaiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    this.nluProjectName = _value.nluProjectName;
    DeleteCcaiProjectResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  get nluProjectName(): string {
    return this._nluProjectName;
  }
  set nluProjectName(value: string) {
    this._nluProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCcaiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCcaiProjectResponse.AsObject {
    return {
      name: this.name,
      errorMessage: this.errorMessage,
      nluProjectName: this.nluProjectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteCcaiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage,
      nluProjectName: this.nluProjectName
    };
  }
}
export module DeleteCcaiProjectResponse {
  /**
   * Standard JavaScript object representation for DeleteCcaiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
    nluProjectName: string;
  }

  /**
   * Protobuf JSON representation for DeleteCcaiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
    nluProjectName: string;
  }
}
