import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
export declare enum CcaiProjectStatus {
    CCAI_PROJECT_STATUS_UNSPECIFIED = 0,
    CCAI_PROJECT_STATUS_UNDEPLOYED = 1,
    CCAI_PROJECT_STATUS_UPDATING = 2,
    CCAI_PROJECT_STATUS_DEPLOYING = 3,
    CCAI_PROJECT_STATUS_DEPLOYED = 4,
    CCAI_PROJECT_STATUS_UNDEPLOYING = 5,
    CCAI_PROJECT_STATUS_DELETING = 6,
    CCAI_PROJECT_STATUS_DELETED = 7
}
export declare enum CcaiServiceType {
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
export declare enum CcaiServiceProvider {
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
export declare enum CcaiProjectView {
    CCAI_PROJECT_VIEW_UNSPECIFIED = 0,
    CCAI_PROJECT_VIEW_FULL = 1,
    CCAI_PROJECT_VIEW_SHALLOW = 2,
    CCAI_PROJECT_VIEW_MINIMUM = 3
}
/**
 * Message implementation for ondewo.nlu.CcaiProject
 */
export declare class CcaiProject implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CcaiProject;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiProject): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CcaiProject, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CcaiProject, _writer: BinaryWriter): void;
    private _name;
    private _displayName;
    private _ownerName;
    private _ccaiServicesMap;
    private _ccaiProjectStatus;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiProject to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiProject.AsObject>);
    get name(): string;
    set name(value: string);
    get displayName(): string;
    set displayName(value: string);
    get ownerName(): string;
    set ownerName(value: string);
    get ccaiServicesMap(): {
        [prop: string]: CcaiServiceList;
    };
    set ccaiServicesMap(value: {
        [prop: string]: CcaiServiceList;
    });
    get ccaiProjectStatus(): CcaiProjectStatus;
    set ccaiProjectStatus(value: CcaiProjectStatus);
    get createdAt(): googleProtobuf001.Timestamp | undefined;
    set createdAt(value: googleProtobuf001.Timestamp | undefined);
    get modifiedAt(): googleProtobuf001.Timestamp | undefined;
    set modifiedAt(value: googleProtobuf001.Timestamp | undefined);
    get createdBy(): string;
    set createdBy(value: string);
    get modifiedBy(): string;
    set modifiedBy(value: string);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiProject.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CcaiProject.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CcaiProject.AsProtobufJSON;
}
export declare namespace CcaiProject {
    /**
     * Standard JavaScript object representation for CcaiProject
     */
    interface AsObject {
        name: string;
        displayName: string;
        ownerName: string;
        ccaiServicesMap: {
            [prop: string]: CcaiServiceList;
        };
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
    interface AsProtobufJSON {
        name: string;
        displayName: string;
        ownerName: string;
        ccaiServicesMap: {
            [prop: string]: CcaiServiceList;
        };
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
    class CcaiServicesMapEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): CcaiServicesMapEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: CcaiServicesMapEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: CcaiServicesMapEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: CcaiServicesMapEntry, _writer: BinaryWriter): void;
        private _key;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CcaiServicesMapEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<CcaiServicesMapEntry.AsObject>);
        get key(): string;
        set key(value: string);
        get value(): CcaiServiceList | undefined;
        set value(value: CcaiServiceList | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): CcaiServicesMapEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): CcaiServicesMapEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): CcaiServicesMapEntry.AsProtobufJSON;
    }
    namespace CcaiServicesMapEntry {
        /**
         * Standard JavaScript object representation for CcaiServicesMapEntry
         */
        interface AsObject {
            key: string;
            value?: CcaiServiceList.AsObject;
        }
        /**
         * Protobuf JSON representation for CcaiServicesMapEntry
         */
        interface AsProtobufJSON {
            key: string;
            value: CcaiServiceList.AsProtobufJSON | null;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.CcaiServiceList
 */
export declare class CcaiServiceList implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CcaiServiceList;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiServiceList): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CcaiServiceList, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CcaiServiceList, _writer: BinaryWriter): void;
    private _ccaiServices?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiServiceList to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiServiceList.AsObject>);
    get ccaiServices(): CcaiService[] | undefined;
    set ccaiServices(value: CcaiService[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiServiceList.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CcaiServiceList.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CcaiServiceList.AsProtobufJSON;
}
export declare namespace CcaiServiceList {
    /**
     * Standard JavaScript object representation for CcaiServiceList
     */
    interface AsObject {
        ccaiServices?: CcaiService.AsObject[];
    }
    /**
     * Protobuf JSON representation for CcaiServiceList
     */
    interface AsProtobufJSON {
        ccaiServices: CcaiService.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.CcaiService
 */
export declare class CcaiService implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CcaiService;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiService): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CcaiService, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CcaiService, _writer: BinaryWriter): void;
    private _name;
    private _displayName;
    private _languageCode;
    private _grpcHost;
    private _grpcPort;
    private _webgrpcHost;
    private _webgrpcPort;
    private _grpcCert;
    private _host;
    private _port;
    private _port2;
    private _httpBasicAuthToken;
    private _accountName;
    private _accountPassword;
    private _apiKey;
    private _ccaiServiceType;
    private _ccaiProjectName;
    private _ccaiServiceConfig?;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    private _headers?;
    private _ccaiServiceProvider;
    private _serviceHierarchy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiService to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiService.AsObject>);
    get name(): string;
    set name(value: string);
    get displayName(): string;
    set displayName(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get grpcHost(): string;
    set grpcHost(value: string);
    get grpcPort(): number;
    set grpcPort(value: number);
    get webgrpcHost(): string;
    set webgrpcHost(value: string);
    get webgrpcPort(): number;
    set webgrpcPort(value: number);
    get grpcCert(): string;
    set grpcCert(value: string);
    get host(): string;
    set host(value: string);
    get port(): number;
    set port(value: number);
    get port2(): number;
    set port2(value: number);
    get httpBasicAuthToken(): string;
    set httpBasicAuthToken(value: string);
    get accountName(): string;
    set accountName(value: string);
    get accountPassword(): string;
    set accountPassword(value: string);
    get apiKey(): string;
    set apiKey(value: string);
    get ccaiServiceType(): CcaiServiceType;
    set ccaiServiceType(value: CcaiServiceType);
    get ccaiProjectName(): string;
    set ccaiProjectName(value: string);
    get ccaiServiceConfig(): googleProtobuf002.Struct | undefined;
    set ccaiServiceConfig(value: googleProtobuf002.Struct | undefined);
    get createdAt(): googleProtobuf001.Timestamp | undefined;
    set createdAt(value: googleProtobuf001.Timestamp | undefined);
    get modifiedAt(): googleProtobuf001.Timestamp | undefined;
    set modifiedAt(value: googleProtobuf001.Timestamp | undefined);
    get createdBy(): string;
    set createdBy(value: string);
    get modifiedBy(): string;
    set modifiedBy(value: string);
    get headers(): googleProtobuf002.Struct | undefined;
    set headers(value: googleProtobuf002.Struct | undefined);
    get ccaiServiceProvider(): CcaiServiceProvider;
    set ccaiServiceProvider(value: CcaiServiceProvider);
    get serviceHierarchy(): string;
    set serviceHierarchy(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiService.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CcaiService.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CcaiService.AsProtobufJSON;
}
export declare namespace CcaiService {
    /**
     * Standard JavaScript object representation for CcaiService
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
export declare class CreateCcaiProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateCcaiProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateCcaiProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateCcaiProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateCcaiProjectRequest, _writer: BinaryWriter): void;
    private _ccaiProject?;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCcaiProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateCcaiProjectRequest.AsObject>);
    get ccaiProject(): CcaiProject | undefined;
    set ccaiProject(value: CcaiProject | undefined);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateCcaiProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateCcaiProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateCcaiProjectRequest.AsProtobufJSON;
}
export declare namespace CreateCcaiProjectRequest {
    /**
     * Standard JavaScript object representation for CreateCcaiProjectRequest
     */
    interface AsObject {
        ccaiProject?: CcaiProject.AsObject;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for CreateCcaiProjectRequest
     */
    interface AsProtobufJSON {
        ccaiProject: CcaiProject.AsProtobufJSON | null;
        nluProjectName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateCcaiProjectResponse
 */
export declare class CreateCcaiProjectResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateCcaiProjectResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateCcaiProjectResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateCcaiProjectResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateCcaiProjectResponse, _writer: BinaryWriter): void;
    private _ccaiProject?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCcaiProjectResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateCcaiProjectResponse.AsObject>);
    get ccaiProject(): CcaiProject | undefined;
    set ccaiProject(value: CcaiProject | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateCcaiProjectResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateCcaiProjectResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateCcaiProjectResponse.AsProtobufJSON;
}
export declare namespace CreateCcaiProjectResponse {
    /**
     * Standard JavaScript object representation for CreateCcaiProjectResponse
     */
    interface AsObject {
        ccaiProject?: CcaiProject.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for CreateCcaiProjectResponse
     */
    interface AsProtobufJSON {
        ccaiProject: CcaiProject.AsProtobufJSON | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetCcaiProjectRequest
 */
export declare class GetCcaiProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCcaiProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCcaiProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCcaiProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCcaiProjectRequest, _writer: BinaryWriter): void;
    private _name;
    private _ccaiProjectView;
    private _ccaiServiceFilter?;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCcaiProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCcaiProjectRequest.AsObject>);
    get name(): string;
    set name(value: string);
    get ccaiProjectView(): CcaiProjectView;
    set ccaiProjectView(value: CcaiProjectView);
    get ccaiServiceFilter(): CcaiServiceFilter | undefined;
    set ccaiServiceFilter(value: CcaiServiceFilter | undefined);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCcaiProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCcaiProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCcaiProjectRequest.AsProtobufJSON;
}
export declare namespace GetCcaiProjectRequest {
    /**
     * Standard JavaScript object representation for GetCcaiProjectRequest
     */
    interface AsObject {
        name: string;
        ccaiProjectView: CcaiProjectView;
        ccaiServiceFilter?: CcaiServiceFilter.AsObject;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for GetCcaiProjectRequest
     */
    interface AsProtobufJSON {
        name: string;
        ccaiProjectView: string;
        ccaiServiceFilter: CcaiServiceFilter.AsProtobufJSON | null;
        nluProjectName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetCcaiServiceRequest
 */
export declare class GetCcaiServiceRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCcaiServiceRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCcaiServiceRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCcaiServiceRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCcaiServiceRequest, _writer: BinaryWriter): void;
    private _name;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCcaiServiceRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCcaiServiceRequest.AsObject>);
    get name(): string;
    set name(value: string);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCcaiServiceRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCcaiServiceRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCcaiServiceRequest.AsProtobufJSON;
}
export declare namespace GetCcaiServiceRequest {
    /**
     * Standard JavaScript object representation for GetCcaiServiceRequest
     */
    interface AsObject {
        name: string;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for GetCcaiServiceRequest
     */
    interface AsProtobufJSON {
        name: string;
        nluProjectName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListCcaiProjectsRequest
 */
export declare class ListCcaiProjectsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCcaiProjectsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCcaiProjectsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCcaiProjectsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCcaiProjectsRequest, _writer: BinaryWriter): void;
    private _ccaiProjectView;
    private _ccaiServiceFilter?;
    private _ccaiProjectSorting?;
    private _pageToken;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCcaiProjectsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCcaiProjectsRequest.AsObject>);
    get ccaiProjectView(): CcaiProjectView;
    set ccaiProjectView(value: CcaiProjectView);
    get ccaiServiceFilter(): CcaiServiceFilter | undefined;
    set ccaiServiceFilter(value: CcaiServiceFilter | undefined);
    get ccaiProjectSorting(): CcaiProjectSorting | undefined;
    set ccaiProjectSorting(value: CcaiProjectSorting | undefined);
    get pageToken(): string;
    set pageToken(value: string);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCcaiProjectsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCcaiProjectsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCcaiProjectsRequest.AsProtobufJSON;
}
export declare namespace ListCcaiProjectsRequest {
    /**
     * Standard JavaScript object representation for ListCcaiProjectsRequest
     */
    interface AsObject {
        ccaiProjectView: CcaiProjectView;
        ccaiServiceFilter?: CcaiServiceFilter.AsObject;
        ccaiProjectSorting?: CcaiProjectSorting.AsObject;
        pageToken: string;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for ListCcaiProjectsRequest
     */
    interface AsProtobufJSON {
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
export declare class ListCcaiProjectsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCcaiProjectsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCcaiProjectsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCcaiProjectsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCcaiProjectsResponse, _writer: BinaryWriter): void;
    private _ccaiProjects?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCcaiProjectsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCcaiProjectsResponse.AsObject>);
    get ccaiProjects(): CcaiProject[] | undefined;
    set ccaiProjects(value: CcaiProject[] | undefined);
    get nextPageToken(): string;
    set nextPageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCcaiProjectsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCcaiProjectsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCcaiProjectsResponse.AsProtobufJSON;
}
export declare namespace ListCcaiProjectsResponse {
    /**
     * Standard JavaScript object representation for ListCcaiProjectsResponse
     */
    interface AsObject {
        ccaiProjects?: CcaiProject.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListCcaiProjectsResponse
     */
    interface AsProtobufJSON {
        ccaiProjects: CcaiProject.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CcaiProjectSorting
 */
export declare class CcaiProjectSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CcaiProjectSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiProjectSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CcaiProjectSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CcaiProjectSorting, _writer: BinaryWriter): void;
    private _sortingField;
    private _sortingMode;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiProjectSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiProjectSorting.AsObject>);
    get sortingField(): CcaiProjectSorting.CcaiProjectSortingField;
    set sortingField(value: CcaiProjectSorting.CcaiProjectSortingField);
    get sortingMode(): ondewoNlu003.SortingMode;
    set sortingMode(value: ondewoNlu003.SortingMode);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiProjectSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CcaiProjectSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CcaiProjectSorting.AsProtobufJSON;
}
export declare namespace CcaiProjectSorting {
    /**
     * Standard JavaScript object representation for CcaiProjectSorting
     */
    interface AsObject {
        sortingField: CcaiProjectSorting.CcaiProjectSortingField;
        sortingMode: ondewoNlu003.SortingMode;
    }
    /**
     * Protobuf JSON representation for CcaiProjectSorting
     */
    interface AsProtobufJSON {
        sortingField: string;
        sortingMode: string;
    }
    enum CcaiProjectSortingField {
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
export declare class CcaiServiceFilter implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CcaiServiceFilter;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CcaiServiceFilter): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CcaiServiceFilter, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CcaiServiceFilter, _writer: BinaryWriter): void;
    private _languageCodes;
    private _ccaiServiceTypes;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiServiceFilter to deeply clone from
     */
    constructor(_value?: RecursivePartial<CcaiServiceFilter.AsObject>);
    get languageCodes(): string[];
    set languageCodes(value: string[]);
    get ccaiServiceTypes(): CcaiServiceType[];
    set ccaiServiceTypes(value: CcaiServiceType[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CcaiServiceFilter.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CcaiServiceFilter.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CcaiServiceFilter.AsProtobufJSON;
}
export declare namespace CcaiServiceFilter {
    /**
     * Standard JavaScript object representation for CcaiServiceFilter
     */
    interface AsObject {
        languageCodes: string[];
        ccaiServiceTypes: CcaiServiceType[];
    }
    /**
     * Protobuf JSON representation for CcaiServiceFilter
     */
    interface AsProtobufJSON {
        languageCodes: string[];
        ccaiServiceTypes: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectRequest
 */
export declare class UpdateCcaiProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateCcaiProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateCcaiProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateCcaiProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateCcaiProjectRequest, _writer: BinaryWriter): void;
    private _ccaiProject?;
    private _ccaiServiceFilter?;
    private _updateMask?;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCcaiProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateCcaiProjectRequest.AsObject>);
    get ccaiProject(): CcaiProject | undefined;
    set ccaiProject(value: CcaiProject | undefined);
    get ccaiServiceFilter(): CcaiServiceFilter | undefined;
    set ccaiServiceFilter(value: CcaiServiceFilter | undefined);
    get updateMask(): googleProtobuf000.FieldMask | undefined;
    set updateMask(value: googleProtobuf000.FieldMask | undefined);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateCcaiProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateCcaiProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateCcaiProjectRequest.AsProtobufJSON;
}
export declare namespace UpdateCcaiProjectRequest {
    /**
     * Standard JavaScript object representation for UpdateCcaiProjectRequest
     */
    interface AsObject {
        ccaiProject?: CcaiProject.AsObject;
        ccaiServiceFilter?: CcaiServiceFilter.AsObject;
        updateMask?: googleProtobuf000.FieldMask.AsObject;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for UpdateCcaiProjectRequest
     */
    interface AsProtobufJSON {
        ccaiProject: CcaiProject.AsProtobufJSON | null;
        ccaiServiceFilter: CcaiServiceFilter.AsProtobufJSON | null;
        updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
        nluProjectName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectResponse
 */
export declare class UpdateCcaiProjectResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateCcaiProjectResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateCcaiProjectResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateCcaiProjectResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateCcaiProjectResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCcaiProjectResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateCcaiProjectResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateCcaiProjectResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateCcaiProjectResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateCcaiProjectResponse.AsProtobufJSON;
}
export declare namespace UpdateCcaiProjectResponse {
    /**
     * Standard JavaScript object representation for UpdateCcaiProjectResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for UpdateCcaiProjectResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectRequest
 */
export declare class DeleteCcaiProjectRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCcaiProjectRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCcaiProjectRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCcaiProjectRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCcaiProjectRequest, _writer: BinaryWriter): void;
    private _name;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCcaiProjectRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCcaiProjectRequest.AsObject>);
    get name(): string;
    set name(value: string);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCcaiProjectRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCcaiProjectRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCcaiProjectRequest.AsProtobufJSON;
}
export declare namespace DeleteCcaiProjectRequest {
    /**
     * Standard JavaScript object representation for DeleteCcaiProjectRequest
     */
    interface AsObject {
        name: string;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for DeleteCcaiProjectRequest
     */
    interface AsProtobufJSON {
        name: string;
        nluProjectName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectResponse
 */
export declare class DeleteCcaiProjectResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCcaiProjectResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCcaiProjectResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCcaiProjectResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCcaiProjectResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    private _nluProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCcaiProjectResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCcaiProjectResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    get nluProjectName(): string;
    set nluProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCcaiProjectResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCcaiProjectResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCcaiProjectResponse.AsProtobufJSON;
}
export declare namespace DeleteCcaiProjectResponse {
    /**
     * Standard JavaScript object representation for DeleteCcaiProjectResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
        nluProjectName: string;
    }
    /**
     * Protobuf JSON representation for DeleteCcaiProjectResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
        nluProjectName: string;
    }
}
