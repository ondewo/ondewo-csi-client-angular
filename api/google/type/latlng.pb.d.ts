import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for google.type.LatLng
 */
export declare class LatLng implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): LatLng;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: LatLng): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: LatLng, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: LatLng, _writer: BinaryWriter): void;
	private _latitude;
	private _longitude;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of LatLng to deeply clone from
	 */
	constructor(_value?: RecursivePartial<LatLng.AsObject>);
	get latitude(): number;
	set latitude(value: number);
	get longitude(): number;
	set longitude(value: number);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): LatLng.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): LatLng.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): LatLng.AsProtobufJSON;
}
export declare module LatLng {
	/**
	 * Standard JavaScript object representation for LatLng
	 */
	interface AsObject {
		latitude: number;
		longitude: number;
	}
	/**
	 * Protobuf JSON representation for LatLng
	 */
	interface AsProtobufJSON {
		latitude: number;
		longitude: number;
	}
}
