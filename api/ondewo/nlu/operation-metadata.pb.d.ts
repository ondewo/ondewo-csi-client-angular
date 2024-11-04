import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.OperationMetadata
 */
export declare class OperationMetadata implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): OperationMetadata;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: OperationMetadata): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: OperationMetadata, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: OperationMetadata, _writer: BinaryWriter): void;
    private _status;
    private _parentOperationName;
    private _subOperationNames;
    private _createTime?;
    private _startTime?;
    private _endTime?;
    private _isCancellationRequested;
    private _cancelCommand;
    private _userIdCreated;
    private _userIdCancelled;
    private _projectParent;
    private _operationType;
    private _hostName;
    private _numReruns;
    private _maxNumReruns;
    private _description;
    private _log;
    private _logLimit;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OperationMetadata to deeply clone from
     */
    constructor(_value?: RecursivePartial<OperationMetadata.AsObject>);
    get status(): OperationMetadata.Status;
    set status(value: OperationMetadata.Status);
    get parentOperationName(): string;
    set parentOperationName(value: string);
    get subOperationNames(): string[];
    set subOperationNames(value: string[]);
    get createTime(): googleProtobuf000.Timestamp | undefined;
    set createTime(value: googleProtobuf000.Timestamp | undefined);
    get startTime(): googleProtobuf000.Timestamp | undefined;
    set startTime(value: googleProtobuf000.Timestamp | undefined);
    get endTime(): googleProtobuf000.Timestamp | undefined;
    set endTime(value: googleProtobuf000.Timestamp | undefined);
    get isCancellationRequested(): boolean;
    set isCancellationRequested(value: boolean);
    get cancelCommand(): string;
    set cancelCommand(value: string);
    get userIdCreated(): string;
    set userIdCreated(value: string);
    get userIdCancelled(): string;
    set userIdCancelled(value: string);
    get projectParent(): string;
    set projectParent(value: string);
    get operationType(): OperationMetadata.OperationType;
    set operationType(value: OperationMetadata.OperationType);
    get hostName(): string;
    set hostName(value: string);
    get numReruns(): number;
    set numReruns(value: number);
    get maxNumReruns(): number;
    set maxNumReruns(value: number);
    get description(): string;
    set description(value: string);
    get log(): string[];
    set log(value: string[]);
    get logLimit(): number;
    set logLimit(value: number);
    get createdAt(): googleProtobuf000.Timestamp | undefined;
    set createdAt(value: googleProtobuf000.Timestamp | undefined);
    get modifiedAt(): googleProtobuf000.Timestamp | undefined;
    set modifiedAt(value: googleProtobuf000.Timestamp | undefined);
    get createdBy(): string;
    set createdBy(value: string);
    get modifiedBy(): string;
    set modifiedBy(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): OperationMetadata.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): OperationMetadata.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): OperationMetadata.AsProtobufJSON;
}
export declare namespace OperationMetadata {
    /**
     * Standard JavaScript object representation for OperationMetadata
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
    enum Status {
        STATUS_UNSPECIFIED = 0,
        NOT_STARTED = 1,
        IN_PROGRESS = 2,
        DONE = 3,
        CANCELLED = 4,
        FAILED = 5
    }
    enum OperationType {
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
