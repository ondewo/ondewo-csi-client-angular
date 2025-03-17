import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleRpc006 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/session.pb';
import * as ondewoT2s013 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoS2t014 from '../../ondewo/s2t/speech-to-text.pb';
export declare enum ControlStatus {
    OK = 0,
    EMERGENCY_STOP = 1,
    VAD_START_OF_SPEECH = 2
}
export declare enum ControlMessageServiceName {
    UNKNOWNNAME = 0,
    ondewo_s2t = 1,
    ondewo_t2s = 2,
    ondewo_nlu = 3,
    ondewo_sip = 4,
    ondewo_vtsi = 5,
    ondewo_csi = 6,
    ondewo_survey = 7
}
export declare enum ControlMessageServiceMethod {
    UNKNOWNMETHOD = 0,
    update_config = 1,
    undo_config = 2,
    reset_config = 3,
    end_call = 4,
    transfer_call = 5,
    play_wav_files = 6,
    play_text = 7,
    mute = 8,
    un_mute = 9,
    stop_all_control_messages = 10,
    train_agent = 11,
    cancel_train_agent = 12,
    delete_session = 13,
    delete_all_contexts = 14,
    create_context = 15,
    update_context = 16,
    delete_context = 17,
    detect_intent = 18
}
export declare enum ConditionType {
    UNKNOWTYPE = 0,
    immediate = 1,
    duration = 2,
    datetime = 3,
    interactions = 4
}
/**
 * Message implementation for ondewo.csi.S2sPipeline
 */
export declare class S2sPipeline implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2sPipeline;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2sPipeline): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2sPipeline, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2sPipeline, _writer: BinaryWriter): void;
    private _id;
    private _s2tPipelineId;
    private _nluProjectId;
    private _nluLanguageCode;
    private _t2sPipelineId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2sPipeline to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2sPipeline.AsObject>);
    get id(): string;
    set id(value: string);
    get s2tPipelineId(): string;
    set s2tPipelineId(value: string);
    get nluProjectId(): string;
    set nluProjectId(value: string);
    get nluLanguageCode(): string;
    set nluLanguageCode(value: string);
    get t2sPipelineId(): string;
    set t2sPipelineId(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2sPipeline.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2sPipeline.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2sPipeline.AsProtobufJSON;
}
export declare namespace S2sPipeline {
    /**
     * Standard JavaScript object representation for S2sPipeline
     */
    interface AsObject {
        id: string;
        s2tPipelineId: string;
        nluProjectId: string;
        nluLanguageCode: string;
        t2sPipelineId: string;
    }
    /**
     * Protobuf JSON representation for S2sPipeline
     */
    interface AsProtobufJSON {
        id: string;
        s2tPipelineId: string;
        nluProjectId: string;
        nluLanguageCode: string;
        t2sPipelineId: string;
    }
}
/**
 * Message implementation for ondewo.csi.S2sPipelineId
 */
export declare class S2sPipelineId implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2sPipelineId;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2sPipelineId): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2sPipelineId, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2sPipelineId, _writer: BinaryWriter): void;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2sPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2sPipelineId.AsObject>);
    get id(): string;
    set id(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2sPipelineId.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2sPipelineId.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2sPipelineId.AsProtobufJSON;
}
export declare namespace S2sPipelineId {
    /**
     * Standard JavaScript object representation for S2sPipelineId
     */
    interface AsObject {
        id: string;
    }
    /**
     * Protobuf JSON representation for S2sPipelineId
     */
    interface AsProtobufJSON {
        id: string;
    }
}
/**
 * Message implementation for ondewo.csi.ListS2sPipelinesRequest
 */
export declare class ListS2sPipelinesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2sPipelinesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2sPipelinesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2sPipelinesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2sPipelinesRequest, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2sPipelinesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2sPipelinesRequest.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2sPipelinesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2sPipelinesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2sPipelinesRequest.AsProtobufJSON;
}
export declare namespace ListS2sPipelinesRequest {
    /**
     * Standard JavaScript object representation for ListS2sPipelinesRequest
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ListS2sPipelinesRequest
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for ondewo.csi.ListS2sPipelinesResponse
 */
export declare class ListS2sPipelinesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2sPipelinesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2sPipelinesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2sPipelinesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2sPipelinesResponse, _writer: BinaryWriter): void;
    private _pipelines?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2sPipelinesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2sPipelinesResponse.AsObject>);
    get pipelines(): S2sPipeline[] | undefined;
    set pipelines(value: S2sPipeline[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2sPipelinesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2sPipelinesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2sPipelinesResponse.AsProtobufJSON;
}
export declare namespace ListS2sPipelinesResponse {
    /**
     * Standard JavaScript object representation for ListS2sPipelinesResponse
     */
    interface AsObject {
        pipelines?: S2sPipeline.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListS2sPipelinesResponse
     */
    interface AsProtobufJSON {
        pipelines: S2sPipeline.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.csi.S2sStreamRequest
 */
export declare class S2sStreamRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2sStreamRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2sStreamRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2sStreamRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2sStreamRequest, _writer: BinaryWriter): void;
    private _pipelineId;
    private _sessionId;
    private _audio;
    private _endOfStream;
    private _initialIntentDisplayName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2sStreamRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2sStreamRequest.AsObject>);
    get pipelineId(): string;
    set pipelineId(value: string);
    get sessionId(): string;
    set sessionId(value: string);
    get audio(): Uint8Array;
    set audio(value: Uint8Array);
    get endOfStream(): boolean;
    set endOfStream(value: boolean);
    get initialIntentDisplayName(): string;
    set initialIntentDisplayName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2sStreamRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2sStreamRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2sStreamRequest.AsProtobufJSON;
}
export declare namespace S2sStreamRequest {
    /**
     * Standard JavaScript object representation for S2sStreamRequest
     */
    interface AsObject {
        pipelineId: string;
        sessionId: string;
        audio: Uint8Array;
        endOfStream: boolean;
        initialIntentDisplayName: string;
    }
    /**
     * Protobuf JSON representation for S2sStreamRequest
     */
    interface AsProtobufJSON {
        pipelineId: string;
        sessionId: string;
        audio: string;
        endOfStream: boolean;
        initialIntentDisplayName: string;
    }
}
/**
 * Message implementation for ondewo.csi.S2sStreamResponse
 */
export declare class S2sStreamResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2sStreamResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2sStreamResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2sStreamResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2sStreamResponse, _writer: BinaryWriter): void;
    private _detectIntentResponse?;
    private _synthesizeResponse?;
    private _sipTrigger?;
    private _response;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2sStreamResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2sStreamResponse.AsObject>);
    get detectIntentResponse(): ondewoNlu012.DetectIntentResponse | undefined;
    set detectIntentResponse(value: ondewoNlu012.DetectIntentResponse | undefined);
    get synthesizeResponse(): ondewoT2s013.SynthesizeResponse | undefined;
    set synthesizeResponse(value: ondewoT2s013.SynthesizeResponse | undefined);
    get sipTrigger(): SipTrigger | undefined;
    set sipTrigger(value: SipTrigger | undefined);
    get response(): S2sStreamResponse.ResponseCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2sStreamResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2sStreamResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2sStreamResponse.AsProtobufJSON;
}
export declare namespace S2sStreamResponse {
    /**
     * Standard JavaScript object representation for S2sStreamResponse
     */
    interface AsObject {
        detectIntentResponse?: ondewoNlu012.DetectIntentResponse.AsObject;
        synthesizeResponse?: ondewoT2s013.SynthesizeResponse.AsObject;
        sipTrigger?: SipTrigger.AsObject;
    }
    /**
     * Protobuf JSON representation for S2sStreamResponse
     */
    interface AsProtobufJSON {
        detectIntentResponse: ondewoNlu012.DetectIntentResponse.AsProtobufJSON | null;
        synthesizeResponse: ondewoT2s013.SynthesizeResponse.AsProtobufJSON | null;
        sipTrigger: SipTrigger.AsProtobufJSON | null;
    }
    enum ResponseCase {
        none = 0,
        detectIntentResponse = 1,
        synthesizeResponse = 2,
        sipTrigger = 3
    }
}
/**
 * Message implementation for ondewo.csi.SipTrigger
 */
export declare class SipTrigger implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SipTrigger;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SipTrigger): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SipTrigger, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SipTrigger, _writer: BinaryWriter): void;
    private _type;
    private _content?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SipTrigger to deeply clone from
     */
    constructor(_value?: RecursivePartial<SipTrigger.AsObject>);
    get type(): SipTrigger.SipTriggerType;
    set type(value: SipTrigger.SipTriggerType);
    get content(): googleProtobuf004.Struct | undefined;
    set content(value: googleProtobuf004.Struct | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SipTrigger.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SipTrigger.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SipTrigger.AsProtobufJSON;
}
export declare namespace SipTrigger {
    /**
     * Standard JavaScript object representation for SipTrigger
     */
    interface AsObject {
        type: SipTrigger.SipTriggerType;
        content?: googleProtobuf004.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for SipTrigger
     */
    interface AsProtobufJSON {
        type: string;
        content: googleProtobuf004.Struct.AsProtobufJSON | null;
    }
    enum SipTriggerType {
        UNSPECIFIED = 0,
        HANGUP = 1,
        HUMAN_HANDOVER = 2,
        SEND_NOW = 3,
        PAUSE = 4,
        TRANSFER = 5,
        INVITE = 6,
        PLAY_AUDIO = 7
    }
}
/**
 * Message implementation for ondewo.csi.CheckUpstreamHealthResponse
 */
export declare class CheckUpstreamHealthResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CheckUpstreamHealthResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CheckUpstreamHealthResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CheckUpstreamHealthResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CheckUpstreamHealthResponse, _writer: BinaryWriter): void;
    private _s2tStatus?;
    private _nluStatus?;
    private _t2sStatus?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CheckUpstreamHealthResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CheckUpstreamHealthResponse.AsObject>);
    get s2tStatus(): googleRpc006.Status | undefined;
    set s2tStatus(value: googleRpc006.Status | undefined);
    get nluStatus(): googleRpc006.Status | undefined;
    set nluStatus(value: googleRpc006.Status | undefined);
    get t2sStatus(): googleRpc006.Status | undefined;
    set t2sStatus(value: googleRpc006.Status | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CheckUpstreamHealthResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CheckUpstreamHealthResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CheckUpstreamHealthResponse.AsProtobufJSON;
}
export declare namespace CheckUpstreamHealthResponse {
    /**
     * Standard JavaScript object representation for CheckUpstreamHealthResponse
     */
    interface AsObject {
        s2tStatus?: googleRpc006.Status.AsObject;
        nluStatus?: googleRpc006.Status.AsObject;
        t2sStatus?: googleRpc006.Status.AsObject;
    }
    /**
     * Protobuf JSON representation for CheckUpstreamHealthResponse
     */
    interface AsProtobufJSON {
        s2tStatus: googleRpc006.Status.AsProtobufJSON | null;
        nluStatus: googleRpc006.Status.AsProtobufJSON | null;
        t2sStatus: googleRpc006.Status.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.csi.ControlStreamRequest
 */
export declare class ControlStreamRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ControlStreamRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ControlStreamRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ControlStreamRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ControlStreamRequest, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ControlStreamRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ControlStreamRequest.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ControlStreamRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ControlStreamRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ControlStreamRequest.AsProtobufJSON;
}
export declare namespace ControlStreamRequest {
    /**
     * Standard JavaScript object representation for ControlStreamRequest
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ControlStreamRequest
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for ondewo.csi.ControlStreamResponse
 */
export declare class ControlStreamResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ControlStreamResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ControlStreamResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ControlStreamResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ControlStreamResponse, _writer: BinaryWriter): void;
    private _controlStatus;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ControlStreamResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ControlStreamResponse.AsObject>);
    get controlStatus(): ControlStatus;
    set controlStatus(value: ControlStatus);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ControlStreamResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ControlStreamResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ControlStreamResponse.AsProtobufJSON;
}
export declare namespace ControlStreamResponse {
    /**
     * Standard JavaScript object representation for ControlStreamResponse
     */
    interface AsObject {
        controlStatus: ControlStatus;
    }
    /**
     * Protobuf JSON representation for ControlStreamResponse
     */
    interface AsProtobufJSON {
        controlStatus: string;
    }
}
/**
 * Message implementation for ondewo.csi.SetControlStatusRequest
 */
export declare class SetControlStatusRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetControlStatusRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetControlStatusRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetControlStatusRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetControlStatusRequest, _writer: BinaryWriter): void;
    private _controlStatus;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetControlStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetControlStatusRequest.AsObject>);
    get controlStatus(): ControlStatus;
    set controlStatus(value: ControlStatus);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SetControlStatusRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetControlStatusRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetControlStatusRequest.AsProtobufJSON;
}
export declare namespace SetControlStatusRequest {
    /**
     * Standard JavaScript object representation for SetControlStatusRequest
     */
    interface AsObject {
        controlStatus: ControlStatus;
    }
    /**
     * Protobuf JSON representation for SetControlStatusRequest
     */
    interface AsProtobufJSON {
        controlStatus: string;
    }
}
/**
 * Message implementation for ondewo.csi.SetControlStatusResponse
 */
export declare class SetControlStatusResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetControlStatusResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetControlStatusResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetControlStatusResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetControlStatusResponse, _writer: BinaryWriter): void;
    private _oldControlStatus;
    private _newControlStatus;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetControlStatusResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetControlStatusResponse.AsObject>);
    get oldControlStatus(): ControlStatus;
    set oldControlStatus(value: ControlStatus);
    get newControlStatus(): ControlStatus;
    set newControlStatus(value: ControlStatus);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SetControlStatusResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetControlStatusResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetControlStatusResponse.AsProtobufJSON;
}
export declare namespace SetControlStatusResponse {
    /**
     * Standard JavaScript object representation for SetControlStatusResponse
     */
    interface AsObject {
        oldControlStatus: ControlStatus;
        newControlStatus: ControlStatus;
    }
    /**
     * Protobuf JSON representation for SetControlStatusResponse
     */
    interface AsProtobufJSON {
        oldControlStatus: string;
        newControlStatus: string;
    }
}
/**
 * Message implementation for ondewo.csi.Condition
 */
export declare class Condition implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Condition;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Condition): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Condition, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Condition, _writer: BinaryWriter): void;
    private _type;
    private _value;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Condition to deeply clone from
     */
    constructor(_value?: RecursivePartial<Condition.AsObject>);
    get type(): ConditionType;
    set type(value: ConditionType);
    get value(): string;
    set value(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Condition.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Condition.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Condition.AsProtobufJSON;
}
export declare namespace Condition {
    /**
     * Standard JavaScript object representation for Condition
     */
    interface AsObject {
        type: ConditionType;
        value: string;
    }
    /**
     * Protobuf JSON representation for Condition
     */
    interface AsProtobufJSON {
        type: string;
        value: string;
    }
}
/**
 * Message implementation for ondewo.csi.ControlMessageServiceParameters
 */
export declare class ControlMessageServiceParameters implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ControlMessageServiceParameters;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ControlMessageServiceParameters): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ControlMessageServiceParameters, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ControlMessageServiceParameters, _writer: BinaryWriter): void;
    private _t2sConfig?;
    private _s2tConfig?;
    private _transferId;
    private _wavFiles;
    private _text;
    private _context?;
    private _sessionId;
    private _contextName;
    private _conditionStart?;
    private _conditionEnd?;
    private _config;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ControlMessageServiceParameters to deeply clone from
     */
    constructor(_value?: RecursivePartial<ControlMessageServiceParameters.AsObject>);
    get t2sConfig(): ondewoT2s013.RequestConfig | undefined;
    set t2sConfig(value: ondewoT2s013.RequestConfig | undefined);
    get s2tConfig(): ondewoS2t014.TranscribeRequestConfig | undefined;
    set s2tConfig(value: ondewoS2t014.TranscribeRequestConfig | undefined);
    get transferId(): string;
    set transferId(value: string);
    get wavFiles(): Uint8Array[];
    set wavFiles(value: Uint8Array[]);
    get text(): string;
    set text(value: string);
    get context(): ondewoNlu009.Context | undefined;
    set context(value: ondewoNlu009.Context | undefined);
    get sessionId(): string;
    set sessionId(value: string);
    get contextName(): string;
    set contextName(value: string);
    get conditionStart(): Condition | undefined;
    set conditionStart(value: Condition | undefined);
    get conditionEnd(): Condition | undefined;
    set conditionEnd(value: Condition | undefined);
    get config(): ControlMessageServiceParameters.ConfigCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ControlMessageServiceParameters.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ControlMessageServiceParameters.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ControlMessageServiceParameters.AsProtobufJSON;
}
export declare namespace ControlMessageServiceParameters {
    /**
     * Standard JavaScript object representation for ControlMessageServiceParameters
     */
    interface AsObject {
        t2sConfig?: ondewoT2s013.RequestConfig.AsObject;
        s2tConfig?: ondewoS2t014.TranscribeRequestConfig.AsObject;
        transferId: string;
        wavFiles: Uint8Array[];
        text: string;
        context?: ondewoNlu009.Context.AsObject;
        sessionId: string;
        contextName: string;
        conditionStart?: Condition.AsObject;
        conditionEnd?: Condition.AsObject;
    }
    /**
     * Protobuf JSON representation for ControlMessageServiceParameters
     */
    interface AsProtobufJSON {
        t2sConfig: ondewoT2s013.RequestConfig.AsProtobufJSON | null;
        s2tConfig: ondewoS2t014.TranscribeRequestConfig.AsProtobufJSON | null;
        transferId: string;
        wavFiles: string[];
        text: string;
        context: ondewoNlu009.Context.AsProtobufJSON | null;
        sessionId: string;
        contextName: string;
        conditionStart: Condition.AsProtobufJSON | null;
        conditionEnd: Condition.AsProtobufJSON | null;
    }
    enum ConfigCase {
        none = 0,
        t2sConfig = 1,
        s2tConfig = 2
    }
}
/**
 * Message implementation for ondewo.csi.ControlMessage
 */
export declare class ControlMessage implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ControlMessage;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ControlMessage): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ControlMessage, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ControlMessage, _writer: BinaryWriter): void;
    private _service;
    private _method;
    private _parameters?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ControlMessage to deeply clone from
     */
    constructor(_value?: RecursivePartial<ControlMessage.AsObject>);
    get service(): ControlMessageServiceName;
    set service(value: ControlMessageServiceName);
    get method(): ControlMessageServiceMethod;
    set method(value: ControlMessageServiceMethod);
    get parameters(): ControlMessageServiceParameters | undefined;
    set parameters(value: ControlMessageServiceParameters | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ControlMessage.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ControlMessage.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ControlMessage.AsProtobufJSON;
}
export declare namespace ControlMessage {
    /**
     * Standard JavaScript object representation for ControlMessage
     */
    interface AsObject {
        service: ControlMessageServiceName;
        method: ControlMessageServiceMethod;
        parameters?: ControlMessageServiceParameters.AsObject;
    }
    /**
     * Protobuf JSON representation for ControlMessage
     */
    interface AsProtobufJSON {
        service: string;
        method: string;
        parameters: ControlMessageServiceParameters.AsProtobufJSON | null;
    }
}
