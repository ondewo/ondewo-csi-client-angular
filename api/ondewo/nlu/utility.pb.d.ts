import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/entity-type.pb';
export declare enum ReannotateEntitiesOptions {
    REANNOTATE_NEVER = 0,
    REANNOTATE_ALWAYS = 1,
    REANNOTATE_IF_EMPTY = 2,
    REANNOTATE_AFTER_DELETION = 3,
    REANNOTATE_IF_EMPTY_OR_AFTER_DELETION = 4
}
/**
 * Message implementation for ondewo.nlu.ValidateRegexRequest
 */
export declare class ValidateRegexRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ValidateRegexRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ValidateRegexRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ValidateRegexRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ValidateRegexRequest, _writer: BinaryWriter): void;
    private _regex?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateRegexRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ValidateRegexRequest.AsObject>);
    get regex(): string | undefined;
    set regex(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ValidateRegexRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ValidateRegexRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ValidateRegexRequest.AsProtobufJSON;
}
export declare module ValidateRegexRequest {
    /**
     * Standard JavaScript object representation for ValidateRegexRequest
     */
    interface AsObject {
        regex?: string;
    }
    /**
     * Protobuf JSON representation for ValidateRegexRequest
     */
    interface AsProtobufJSON {
        regex?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ValidateRegexResponse
 */
export declare class ValidateRegexResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ValidateRegexResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ValidateRegexResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ValidateRegexResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ValidateRegexResponse, _writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateRegexResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ValidateRegexResponse.AsObject>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ValidateRegexResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ValidateRegexResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ValidateRegexResponse.AsProtobufJSON;
}
export declare module ValidateRegexResponse {
    /**
     * Standard JavaScript object representation for ValidateRegexResponse
     */
    interface AsObject {
        errorMessages?: string[];
    }
    /**
     * Protobuf JSON representation for ValidateRegexResponse
     */
    interface AsProtobufJSON {
        errorMessages?: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export declare class ValidateEmbeddedRegexRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ValidateEmbeddedRegexRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ValidateEmbeddedRegexRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ValidateEmbeddedRegexRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ValidateEmbeddedRegexRequest, _writer: BinaryWriter): void;
    private _entityType?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateEmbeddedRegexRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ValidateEmbeddedRegexRequest.AsObject>);
    get entityType(): ondewoNlu009.EntityType.Entity | undefined;
    set entityType(value: ondewoNlu009.EntityType.Entity | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ValidateEmbeddedRegexRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ValidateEmbeddedRegexRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ValidateEmbeddedRegexRequest.AsProtobufJSON;
}
export declare module ValidateEmbeddedRegexRequest {
    /**
     * Standard JavaScript object representation for ValidateEmbeddedRegexRequest
     */
    interface AsObject {
        entityType?: ondewoNlu009.EntityType.Entity.AsObject;
    }
    /**
     * Protobuf JSON representation for ValidateEmbeddedRegexRequest
     */
    interface AsProtobufJSON {
        entityType?: ondewoNlu009.EntityType.Entity.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export declare class ValidateEmbeddedRegexResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ValidateEmbeddedRegexResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ValidateEmbeddedRegexResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ValidateEmbeddedRegexResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ValidateEmbeddedRegexResponse, _writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateEmbeddedRegexResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ValidateEmbeddedRegexResponse.AsObject>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ValidateEmbeddedRegexResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ValidateEmbeddedRegexResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ValidateEmbeddedRegexResponse.AsProtobufJSON;
}
export declare module ValidateEmbeddedRegexResponse {
    /**
     * Standard JavaScript object representation for ValidateEmbeddedRegexResponse
     */
    interface AsObject {
        errorMessages?: string[];
    }
    /**
     * Protobuf JSON representation for ValidateEmbeddedRegexResponse
     */
    interface AsProtobufJSON {
        errorMessages?: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsRequest
 */
export declare class CleanAllIntentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanAllIntentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanAllIntentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanAllIntentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanAllIntentsRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _dryRun?;
    private _trainingPhraseCleanerOptions?;
    private _reannotateEntitiesOptions?;
    private _numberOfWorkers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllIntentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanAllIntentsRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get reannotateEntitiesOptions(): ReannotateEntitiesOptions | undefined;
    set reannotateEntitiesOptions(value: ReannotateEntitiesOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanAllIntentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanAllIntentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanAllIntentsRequest.AsProtobufJSON;
}
export declare module CleanAllIntentsRequest {
    /**
     * Standard JavaScript object representation for CleanAllIntentsRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        dryRun?: boolean;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
        reannotateEntitiesOptions?: ReannotateEntitiesOptions;
        numberOfWorkers?: number;
    }
    /**
     * Protobuf JSON representation for CleanAllIntentsRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        dryRun?: boolean;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
        reannotateEntitiesOptions?: string;
        numberOfWorkers?: number;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsResponse
 */
export declare class CleanAllIntentsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanAllIntentsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanAllIntentsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanAllIntentsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanAllIntentsResponse, _writer: BinaryWriter): void;
    private _cleanedIntents?;
    private _intentUpdateList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllIntentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanAllIntentsResponse.AsObject>);
    get cleanedIntents(): ondewoNlu008.Intent[] | undefined;
    set cleanedIntents(value: ondewoNlu008.Intent[] | undefined);
    get intentUpdateList(): IntentUpdate[] | undefined;
    set intentUpdateList(value: IntentUpdate[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanAllIntentsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanAllIntentsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanAllIntentsResponse.AsProtobufJSON;
}
export declare module CleanAllIntentsResponse {
    /**
     * Standard JavaScript object representation for CleanAllIntentsResponse
     */
    interface AsObject {
        cleanedIntents?: ondewoNlu008.Intent.AsObject[];
        intentUpdateList?: IntentUpdate.AsObject[];
    }
    /**
     * Protobuf JSON representation for CleanAllIntentsResponse
     */
    interface AsProtobufJSON {
        cleanedIntents?: ondewoNlu008.Intent.AsProtobufJSON[] | null;
        intentUpdateList?: IntentUpdate.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanIntentRequest
 */
export declare class CleanIntentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanIntentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanIntentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanIntentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanIntentRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _intentName?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _dryRun?;
    private _trainingPhraseCleanerOptions?;
    private _reannotateEntitiesOptions?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanIntentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanIntentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intentName(): string | undefined;
    set intentName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get reannotateEntitiesOptions(): ReannotateEntitiesOptions | undefined;
    set reannotateEntitiesOptions(value: ReannotateEntitiesOptions | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanIntentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanIntentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanIntentRequest.AsProtobufJSON;
}
export declare module CleanIntentRequest {
    /**
     * Standard JavaScript object representation for CleanIntentRequest
     */
    interface AsObject {
        parent?: string;
        intentName?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        dryRun?: boolean;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
        reannotateEntitiesOptions?: ReannotateEntitiesOptions;
    }
    /**
     * Protobuf JSON representation for CleanIntentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        intentName?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        dryRun?: boolean;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
        reannotateEntitiesOptions?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanIntentResponse
 */
export declare class CleanIntentResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanIntentResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanIntentResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanIntentResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanIntentResponse, _writer: BinaryWriter): void;
    private _cleanedIntent?;
    private _intentUpdate?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanIntentResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanIntentResponse.AsObject>);
    get cleanedIntent(): ondewoNlu008.Intent | undefined;
    set cleanedIntent(value: ondewoNlu008.Intent | undefined);
    get intentUpdate(): IntentUpdate | undefined;
    set intentUpdate(value: IntentUpdate | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanIntentResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanIntentResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanIntentResponse.AsProtobufJSON;
}
export declare module CleanIntentResponse {
    /**
     * Standard JavaScript object representation for CleanIntentResponse
     */
    interface AsObject {
        cleanedIntent?: ondewoNlu008.Intent.AsObject;
        intentUpdate?: IntentUpdate.AsObject;
    }
    /**
     * Protobuf JSON representation for CleanIntentResponse
     */
    interface AsProtobufJSON {
        cleanedIntent?: ondewoNlu008.Intent.AsProtobufJSON | null;
        intentUpdate?: IntentUpdate.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.TrainingPhraseCleanerOptions
 */
export declare class TrainingPhraseCleanerOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TrainingPhraseCleanerOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainingPhraseCleanerOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TrainingPhraseCleanerOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TrainingPhraseCleanerOptions, _writer: BinaryWriter): void;
    private _deleteRepeatedWhitespaces?;
    private _deleteLeadingSpecialCharacters?;
    private _deleteTrailingSpecialCharacters?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhraseCleanerOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainingPhraseCleanerOptions.AsObject>);
    get deleteRepeatedWhitespaces(): boolean | undefined;
    set deleteRepeatedWhitespaces(value: boolean | undefined);
    get deleteLeadingSpecialCharacters(): boolean | undefined;
    set deleteLeadingSpecialCharacters(value: boolean | undefined);
    get deleteTrailingSpecialCharacters(): boolean | undefined;
    set deleteTrailingSpecialCharacters(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainingPhraseCleanerOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TrainingPhraseCleanerOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhraseCleanerOptions.AsProtobufJSON;
}
export declare module TrainingPhraseCleanerOptions {
    /**
     * Standard JavaScript object representation for TrainingPhraseCleanerOptions
     */
    interface AsObject {
        deleteRepeatedWhitespaces?: boolean;
        deleteLeadingSpecialCharacters?: boolean;
        deleteTrailingSpecialCharacters?: boolean;
    }
    /**
     * Protobuf JSON representation for TrainingPhraseCleanerOptions
     */
    interface AsProtobufJSON {
        deleteRepeatedWhitespaces?: boolean;
        deleteLeadingSpecialCharacters?: boolean;
        deleteTrailingSpecialCharacters?: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.StringUpdate
 */
export declare class StringUpdate implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StringUpdate;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StringUpdate): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StringUpdate, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StringUpdate, _writer: BinaryWriter): void;
    private _new?;
    private _old?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StringUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<StringUpdate.AsObject>);
    get new(): string | undefined;
    set new(value: string | undefined);
    get old(): string | undefined;
    set old(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StringUpdate.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StringUpdate.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StringUpdate.AsProtobufJSON;
}
export declare module StringUpdate {
    /**
     * Standard JavaScript object representation for StringUpdate
     */
    interface AsObject {
        new?: string;
        old?: string;
    }
    /**
     * Protobuf JSON representation for StringUpdate
     */
    interface AsProtobufJSON {
        new?: string;
        old?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.IntentUpdate
 */
export declare class IntentUpdate implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IntentUpdate;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentUpdate): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IntentUpdate, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IntentUpdate, _writer: BinaryWriter): void;
    private _intentDisplayName?;
    private _trainingPhraseUpdateList?;
    private _deletedParameters?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentUpdate.AsObject>);
    get intentDisplayName(): string | undefined;
    set intentDisplayName(value: string | undefined);
    get trainingPhraseUpdateList(): IntentUpdate.TrainingPhraseUpdate[] | undefined;
    set trainingPhraseUpdateList(value: IntentUpdate.TrainingPhraseUpdate[] | undefined);
    get deletedParameters(): string[] | undefined;
    set deletedParameters(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentUpdate.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IntentUpdate.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IntentUpdate.AsProtobufJSON;
}
export declare module IntentUpdate {
    /**
     * Standard JavaScript object representation for IntentUpdate
     */
    interface AsObject {
        intentDisplayName?: string;
        trainingPhraseUpdateList?: IntentUpdate.TrainingPhraseUpdate.AsObject[];
        deletedParameters?: string[];
    }
    /**
     * Protobuf JSON representation for IntentUpdate
     */
    interface AsProtobufJSON {
        intentDisplayName?: string;
        trainingPhraseUpdateList?: IntentUpdate.TrainingPhraseUpdate.AsProtobufJSON[] | null;
        deletedParameters?: string[];
    }
    /**
     * Message implementation for ondewo.nlu.TrainingPhraseUpdate
     */
    class TrainingPhraseUpdate implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TrainingPhraseUpdate;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TrainingPhraseUpdate): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TrainingPhraseUpdate, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TrainingPhraseUpdate, _writer: BinaryWriter): void;
        private _trainingPhraseUpdate?;
        private _entityUpdates?;
        private _entitiesReannotated?;
        private _containsUpdateVariable?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhraseUpdate to deeply clone from
         */
        constructor(_value?: RecursivePartial<TrainingPhraseUpdate.AsObject>);
        get trainingPhraseUpdate(): StringUpdate | undefined;
        set trainingPhraseUpdate(value: StringUpdate | undefined);
        get entityUpdates(): StringUpdate[] | undefined;
        set entityUpdates(value: StringUpdate[] | undefined);
        get entitiesReannotated(): string[] | undefined;
        set entitiesReannotated(value: string[] | undefined);
        get containsUpdateVariable(): boolean | undefined;
        set containsUpdateVariable(value: boolean | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TrainingPhraseUpdate.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TrainingPhraseUpdate.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhraseUpdate.AsProtobufJSON;
    }
    module TrainingPhraseUpdate {
        /**
         * Standard JavaScript object representation for TrainingPhraseUpdate
         */
        interface AsObject {
            trainingPhraseUpdate?: StringUpdate.AsObject;
            entityUpdates?: StringUpdate.AsObject[];
            entitiesReannotated?: string[];
            containsUpdateVariable?: boolean;
        }
        /**
         * Protobuf JSON representation for TrainingPhraseUpdate
         */
        interface AsProtobufJSON {
            trainingPhraseUpdate?: StringUpdate.AsProtobufJSON | null;
            entityUpdates?: StringUpdate.AsProtobufJSON[] | null;
            entitiesReannotated?: string[];
            containsUpdateVariable?: boolean;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeUpdate
 */
export declare class EntityTypeUpdate implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeUpdate;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeUpdate): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeUpdate, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeUpdate, _writer: BinaryWriter): void;
    private _entityTypeName?;
    private _valuesUpdateList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeUpdate.AsObject>);
    get entityTypeName(): string | undefined;
    set entityTypeName(value: string | undefined);
    get valuesUpdateList(): EntityTypeUpdate.EntityUpdate[] | undefined;
    set valuesUpdateList(value: EntityTypeUpdate.EntityUpdate[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeUpdate.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeUpdate.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeUpdate.AsProtobufJSON;
}
export declare module EntityTypeUpdate {
    /**
     * Standard JavaScript object representation for EntityTypeUpdate
     */
    interface AsObject {
        entityTypeName?: string;
        valuesUpdateList?: EntityTypeUpdate.EntityUpdate.AsObject[];
    }
    /**
     * Protobuf JSON representation for EntityTypeUpdate
     */
    interface AsProtobufJSON {
        entityTypeName?: string;
        valuesUpdateList?: EntityTypeUpdate.EntityUpdate.AsProtobufJSON[] | null;
    }
    /**
     * Message implementation for ondewo.nlu.EntityUpdate
     */
    class EntityUpdate implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): EntityUpdate;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: EntityUpdate): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: EntityUpdate, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: EntityUpdate, _writer: BinaryWriter): void;
        private _entityValueUpdate?;
        private _entitySynonymUpdates?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntityUpdate to deeply clone from
         */
        constructor(_value?: RecursivePartial<EntityUpdate.AsObject>);
        get entityValueUpdate(): StringUpdate | undefined;
        set entityValueUpdate(value: StringUpdate | undefined);
        get entitySynonymUpdates(): StringUpdate[] | undefined;
        set entitySynonymUpdates(value: StringUpdate[] | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): EntityUpdate.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): EntityUpdate.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): EntityUpdate.AsProtobufJSON;
    }
    module EntityUpdate {
        /**
         * Standard JavaScript object representation for EntityUpdate
         */
        interface AsObject {
            entityValueUpdate?: StringUpdate.AsObject;
            entitySynonymUpdates?: StringUpdate.AsObject[];
        }
        /**
         * Protobuf JSON representation for EntityUpdate
         */
        interface AsProtobufJSON {
            entityValueUpdate?: StringUpdate.AsProtobufJSON | null;
            entitySynonymUpdates?: StringUpdate.AsProtobufJSON[] | null;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesRequest
 */
export declare class CleanAllEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanAllEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanAllEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanAllEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanAllEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _maxEntityCountUpdate?;
    private _forbiddenEntityTypePatterns?;
    private _dryRun?;
    private _numberOfWorkers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanAllEntityTypesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get maxEntityCountUpdate(): number | undefined;
    set maxEntityCountUpdate(value: number | undefined);
    get forbiddenEntityTypePatterns(): string[] | undefined;
    set forbiddenEntityTypePatterns(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanAllEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanAllEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanAllEntityTypesRequest.AsProtobufJSON;
}
export declare module CleanAllEntityTypesRequest {
    /**
     * Standard JavaScript object representation for CleanAllEntityTypesRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        maxEntityCountUpdate?: number;
        forbiddenEntityTypePatterns?: string[];
        dryRun?: boolean;
        numberOfWorkers?: number;
    }
    /**
     * Protobuf JSON representation for CleanAllEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        maxEntityCountUpdate?: number;
        forbiddenEntityTypePatterns?: string[];
        dryRun?: boolean;
        numberOfWorkers?: number;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesResponse
 */
export declare class CleanAllEntityTypesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanAllEntityTypesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanAllEntityTypesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanAllEntityTypesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanAllEntityTypesResponse, _writer: BinaryWriter): void;
    private _cleanedEntityTypes?;
    private _deletedEntityTypes?;
    private _entityTypeUpdates?;
    private _entityTypeDeletions?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllEntityTypesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanAllEntityTypesResponse.AsObject>);
    get cleanedEntityTypes(): ondewoNlu009.EntityType[] | undefined;
    set cleanedEntityTypes(value: ondewoNlu009.EntityType[] | undefined);
    get deletedEntityTypes(): ondewoNlu009.EntityType[] | undefined;
    set deletedEntityTypes(value: ondewoNlu009.EntityType[] | undefined);
    get entityTypeUpdates(): EntityTypeUpdate[] | undefined;
    set entityTypeUpdates(value: EntityTypeUpdate[] | undefined);
    get entityTypeDeletions(): EntityTypeUpdate[] | undefined;
    set entityTypeDeletions(value: EntityTypeUpdate[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanAllEntityTypesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanAllEntityTypesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanAllEntityTypesResponse.AsProtobufJSON;
}
export declare module CleanAllEntityTypesResponse {
    /**
     * Standard JavaScript object representation for CleanAllEntityTypesResponse
     */
    interface AsObject {
        cleanedEntityTypes?: ondewoNlu009.EntityType.AsObject[];
        deletedEntityTypes?: ondewoNlu009.EntityType.AsObject[];
        entityTypeUpdates?: EntityTypeUpdate.AsObject[];
        entityTypeDeletions?: EntityTypeUpdate.AsObject[];
    }
    /**
     * Protobuf JSON representation for CleanAllEntityTypesResponse
     */
    interface AsProtobufJSON {
        cleanedEntityTypes?: ondewoNlu009.EntityType.AsProtobufJSON[] | null;
        deletedEntityTypes?: ondewoNlu009.EntityType.AsProtobufJSON[] | null;
        entityTypeUpdates?: EntityTypeUpdate.AsProtobufJSON[] | null;
        entityTypeDeletions?: EntityTypeUpdate.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeRequest
 */
export declare class CleanEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanEntityTypeRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeName?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _maxEntityCountUpdate?;
    private _dryRun?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanEntityTypeRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeName(): string | undefined;
    set entityTypeName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get maxEntityCountUpdate(): number | undefined;
    set maxEntityCountUpdate(value: number | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanEntityTypeRequest.AsProtobufJSON;
}
export declare module CleanEntityTypeRequest {
    /**
     * Standard JavaScript object representation for CleanEntityTypeRequest
     */
    interface AsObject {
        parent?: string;
        entityTypeName?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        maxEntityCountUpdate?: number;
        dryRun?: boolean;
    }
    /**
     * Protobuf JSON representation for CleanEntityTypeRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entityTypeName?: string;
        languageCode?: string;
        specialCharacters?: string;
        substringWhiteList?: string[];
        maxEntityCountUpdate?: number;
        dryRun?: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeResponse
 */
export declare class CleanEntityTypeResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CleanEntityTypeResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CleanEntityTypeResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CleanEntityTypeResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CleanEntityTypeResponse, _writer: BinaryWriter): void;
    private _cleanedEntityType?;
    private _entityTypeUpdate?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanEntityTypeResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CleanEntityTypeResponse.AsObject>);
    get cleanedEntityType(): ondewoNlu009.EntityType | undefined;
    set cleanedEntityType(value: ondewoNlu009.EntityType | undefined);
    get entityTypeUpdate(): EntityTypeUpdate | undefined;
    set entityTypeUpdate(value: EntityTypeUpdate | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CleanEntityTypeResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CleanEntityTypeResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CleanEntityTypeResponse.AsProtobufJSON;
}
export declare module CleanEntityTypeResponse {
    /**
     * Standard JavaScript object representation for CleanEntityTypeResponse
     */
    interface AsObject {
        cleanedEntityType?: ondewoNlu009.EntityType.AsObject;
        entityTypeUpdate?: EntityTypeUpdate.AsObject;
    }
    /**
     * Protobuf JSON representation for CleanEntityTypeResponse
     */
    interface AsProtobufJSON {
        cleanedEntityType?: ondewoNlu009.EntityType.AsProtobufJSON | null;
        entityTypeUpdate?: EntityTypeUpdate.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest
 */
export declare class AddTrainingPhrasesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddTrainingPhrasesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddTrainingPhrasesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddTrainingPhrasesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddTrainingPhrasesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _trainingPhraseList?;
    private _extractEntities?;
    private _specialCharacters?;
    private _trainingPhraseCleanerOptions?;
    private _numberOfWorkers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddTrainingPhrasesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get trainingPhraseList(): AddTrainingPhrasesRequest.TrainingPhraseForIntent[] | undefined;
    set trainingPhraseList(value: AddTrainingPhrasesRequest.TrainingPhraseForIntent[] | undefined);
    get extractEntities(): boolean | undefined;
    set extractEntities(value: boolean | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddTrainingPhrasesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddTrainingPhrasesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module AddTrainingPhrasesRequest {
    /**
     * Standard JavaScript object representation for AddTrainingPhrasesRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        trainingPhraseList?: AddTrainingPhrasesRequest.TrainingPhraseForIntent.AsObject[];
        extractEntities?: boolean;
        specialCharacters?: string;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
        numberOfWorkers?: number;
    }
    /**
     * Protobuf JSON representation for AddTrainingPhrasesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        trainingPhraseList?: AddTrainingPhrasesRequest.TrainingPhraseForIntent.AsProtobufJSON[] | null;
        extractEntities?: boolean;
        specialCharacters?: string;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
        numberOfWorkers?: number;
    }
    /**
     * Message implementation for ondewo.nlu.TrainingPhraseForIntent
     */
    class TrainingPhraseForIntent implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TrainingPhraseForIntent;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TrainingPhraseForIntent): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TrainingPhraseForIntent, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TrainingPhraseForIntent, _writer: BinaryWriter): void;
        private _trainingPhrase?;
        private _intentDisplayName?;
        private _entities?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhraseForIntent to deeply clone from
         */
        constructor(_value?: RecursivePartial<TrainingPhraseForIntent.AsObject>);
        get trainingPhrase(): string | undefined;
        set trainingPhrase(value: string | undefined);
        get intentDisplayName(): string | undefined;
        set intentDisplayName(value: string | undefined);
        get entities(): ondewoNlu008.Intent.TrainingPhrase.Entity[] | undefined;
        set entities(value: ondewoNlu008.Intent.TrainingPhrase.Entity[] | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TrainingPhraseForIntent.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TrainingPhraseForIntent.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhraseForIntent.AsProtobufJSON;
    }
    module TrainingPhraseForIntent {
        /**
         * Standard JavaScript object representation for TrainingPhraseForIntent
         */
        interface AsObject {
            trainingPhrase?: string;
            intentDisplayName?: string;
            entities?: ondewoNlu008.Intent.TrainingPhrase.Entity.AsObject[];
        }
        /**
         * Protobuf JSON representation for TrainingPhraseForIntent
         */
        interface AsProtobufJSON {
            trainingPhrase?: string;
            intentDisplayName?: string;
            entities?: ondewoNlu008.Intent.TrainingPhrase.Entity.AsProtobufJSON[] | null;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesResponse
 */
export declare class AddTrainingPhrasesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddTrainingPhrasesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddTrainingPhrasesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddTrainingPhrasesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddTrainingPhrasesResponse, _writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddTrainingPhrasesResponse.AsObject>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddTrainingPhrasesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddTrainingPhrasesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddTrainingPhrasesResponse.AsProtobufJSON;
}
export declare module AddTrainingPhrasesResponse {
    /**
     * Standard JavaScript object representation for AddTrainingPhrasesResponse
     */
    interface AsObject {
        errorMessages?: string[];
    }
    /**
     * Protobuf JSON representation for AddTrainingPhrasesResponse
     */
    interface AsProtobufJSON {
        errorMessages?: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export declare class AddTrainingPhrasesFromCSVRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddTrainingPhrasesFromCSVRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddTrainingPhrasesFromCSVRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddTrainingPhrasesFromCSVRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddTrainingPhrasesFromCSVRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _csvContents?;
    private _extractEntities?;
    private _specialCharacters?;
    private _trainingPhraseCleanerOptions?;
    private _numberOfWorkers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddTrainingPhrasesFromCSVRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddTrainingPhrasesFromCSVRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get csvContents(): Uint8Array | undefined;
    set csvContents(value: Uint8Array | undefined);
    get extractEntities(): boolean | undefined;
    set extractEntities(value: boolean | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddTrainingPhrasesFromCSVRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddTrainingPhrasesFromCSVRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddTrainingPhrasesFromCSVRequest.AsProtobufJSON;
}
export declare module AddTrainingPhrasesFromCSVRequest {
    /**
     * Standard JavaScript object representation for AddTrainingPhrasesFromCSVRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        csvContents?: Uint8Array;
        extractEntities?: boolean;
        specialCharacters?: string;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
        numberOfWorkers?: number;
    }
    /**
     * Protobuf JSON representation for AddTrainingPhrasesFromCSVRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        csvContents?: string;
        extractEntities?: boolean;
        specialCharacters?: string;
        trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsProtobufJSON | null;
        numberOfWorkers?: number;
    }
}
