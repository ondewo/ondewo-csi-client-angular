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
import * as googleApi005 from '../../google/api/annotations.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
/**
 * Message implementation for ondewo.nlu.GetUserProjectCountRequest
 */
export class GetUserProjectCountRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetUserProjectCountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserProjectCountRequest();
    GetUserProjectCountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserProjectCountRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserProjectCountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserProjectCountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserProjectCountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserProjectCountRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserProjectCountRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    GetUserProjectCountRequest.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserProjectCountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserProjectCountRequest.AsObject {
    return {
      userId: this.userId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetUserProjectCountRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module GetUserProjectCountRequest {
  /**
   * Standard JavaScript object representation for GetUserProjectCountRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for GetUserProjectCountRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}
