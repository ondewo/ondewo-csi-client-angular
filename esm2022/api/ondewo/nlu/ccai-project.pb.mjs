import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/common.pb';
export var CcaiProjectStatus;
(function (CcaiProjectStatus) {
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_UNSPECIFIED"] = 0] = "CCAI_PROJECT_STATUS_UNSPECIFIED";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_UNDEPLOYED"] = 1] = "CCAI_PROJECT_STATUS_UNDEPLOYED";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_UPDATING"] = 2] = "CCAI_PROJECT_STATUS_UPDATING";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_DEPLOYING"] = 3] = "CCAI_PROJECT_STATUS_DEPLOYING";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_DEPLOYED"] = 4] = "CCAI_PROJECT_STATUS_DEPLOYED";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_UNDEPLOYING"] = 5] = "CCAI_PROJECT_STATUS_UNDEPLOYING";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_DELETING"] = 6] = "CCAI_PROJECT_STATUS_DELETING";
    CcaiProjectStatus[CcaiProjectStatus["CCAI_PROJECT_STATUS_DELETED"] = 7] = "CCAI_PROJECT_STATUS_DELETED";
})(CcaiProjectStatus || (CcaiProjectStatus = {}));
export var CcaiServiceType;
(function (CcaiServiceType) {
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_UNSPECIFIED"] = 0] = "CCAI_SERVICE_TYPE_UNSPECIFIED";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_AIM"] = 1] = "CCAI_SERVICE_TYPE_ONDEWO_AIM";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_BPI"] = 2] = "CCAI_SERVICE_TYPE_ONDEWO_BPI";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_CSI"] = 3] = "CCAI_SERVICE_TYPE_ONDEWO_CSI";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_NLU"] = 4] = "CCAI_SERVICE_TYPE_ONDEWO_NLU";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_S2T"] = 5] = "CCAI_SERVICE_TYPE_ONDEWO_S2T";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_SIP"] = 6] = "CCAI_SERVICE_TYPE_ONDEWO_SIP";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_T2S"] = 7] = "CCAI_SERVICE_TYPE_ONDEWO_T2S";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_VTSI"] = 8] = "CCAI_SERVICE_TYPE_ONDEWO_VTSI";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_VTSI_RABBITMQ"] = 9] = "CCAI_SERVICE_TYPE_VTSI_RABBITMQ";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_NLU_QA"] = 10] = "CCAI_SERVICE_TYPE_ONDEWO_NLU_QA";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBHOOK"] = 11] = "CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBHOOK";
    CcaiServiceType[CcaiServiceType["CCAI_SERVICE_TYPE_ONDEWO_SURVEY"] = 12] = "CCAI_SERVICE_TYPE_ONDEWO_SURVEY";
})(CcaiServiceType || (CcaiServiceType = {}));
export var CcaiProjectView;
(function (CcaiProjectView) {
    CcaiProjectView[CcaiProjectView["CCAI_PROJECT_VIEW_UNSPECIFIED"] = 0] = "CCAI_PROJECT_VIEW_UNSPECIFIED";
    CcaiProjectView[CcaiProjectView["CCAI_PROJECT_VIEW_FULL"] = 1] = "CCAI_PROJECT_VIEW_FULL";
    CcaiProjectView[CcaiProjectView["CCAI_PROJECT_VIEW_SHALLOW"] = 2] = "CCAI_PROJECT_VIEW_SHALLOW";
    CcaiProjectView[CcaiProjectView["CCAI_PROJECT_VIEW_MINIMUM"] = 3] = "CCAI_PROJECT_VIEW_MINIMUM";
})(CcaiProjectView || (CcaiProjectView = {}));
/**
 * Message implementation for ondewo.nlu.CcaiProject
 */
export class CcaiProject {
    static { this.id = 'ondewo.nlu.CcaiProject'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CcaiProject();
        CcaiProject.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    const msg_4 = {};
                    _reader.readMessage(msg_4, CcaiProject.CcaiServicesMapEntry.deserializeBinaryFromReader);
                    _instance.ccaiServicesMap = _instance.ccaiServicesMap || {};
                    _instance.ccaiServicesMap[msg_4.key] = msg_4.value;
                    break;
                case 5:
                    _instance.ccaiProjectStatus = _reader.readEnum();
                    break;
                case 6:
                    _instance.createdAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.modifiedAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            const keys_4 = Object.keys(_instance.ccaiServicesMap);
            if (keys_4.length) {
                const repeated_4 = keys_4
                    .map(key => ({
                    key: key,
                    value: _instance.ccaiServicesMap[key]
                }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(4, repeated_4, CcaiProject.CcaiServicesMapEntry.serializeBinaryToWriter);
            }
        }
        if (_instance.ccaiProjectStatus) {
            _writer.writeEnum(5, _instance.ccaiProjectStatus);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(6, _instance.createdAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(7, _instance.modifiedAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiProject to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.displayName = _value.displayName;
        this.ownerName = _value.ownerName;
        (this.ccaiServicesMap = _value.ccaiServicesMap
            ? Object.keys(_value.ccaiServicesMap).reduce((r, k) => ({
                ...r,
                [k]: _value.ccaiServicesMap[k]
                    ? new CcaiServiceList(_value.ccaiServicesMap[k])
                    : undefined
            }), {})
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
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get ownerName() {
        return this._ownerName;
    }
    set ownerName(value) {
        this._ownerName = value;
    }
    get ccaiServicesMap() {
        return this._ccaiServicesMap;
    }
    set ccaiServicesMap(value) {
        this._ccaiServicesMap = value;
    }
    get ccaiProjectStatus() {
        return this._ccaiProjectStatus;
    }
    set ccaiProjectStatus(value) {
        this._ccaiProjectStatus = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get modifiedAt() {
        return this._modifiedAt;
    }
    set modifiedAt(value) {
        this._modifiedAt = value;
    }
    get createdBy() {
        return this._createdBy;
    }
    set createdBy(value) {
        this._createdBy = value;
    }
    get modifiedBy() {
        return this._modifiedBy;
    }
    set modifiedBy(value) {
        this._modifiedBy = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
        return {
            name: this.name,
            displayName: this.displayName,
            ownerName: this.ownerName,
            ccaiServicesMap: this.ccaiServicesMap
                ? Object.keys(this.ccaiServicesMap).reduce((r, k) => ({
                    ...r,
                    [k]: this.ccaiServicesMap[k]
                        ? this.ccaiServicesMap[k].toObject()
                        : undefined
                }), {})
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
    options) {
        return {
            name: this.name,
            displayName: this.displayName,
            ownerName: this.ownerName,
            ccaiServicesMap: this.ccaiServicesMap
                ? Object.keys(this.ccaiServicesMap).reduce((r, k) => ({
                    ...r,
                    [k]: this.ccaiServicesMap[k]
                        ? this.ccaiServicesMap[k].toJSON()
                        : null
                }), {})
                : {},
            ccaiProjectStatus: CcaiProjectStatus[this.ccaiProjectStatus === null ||
                this.ccaiProjectStatus === undefined
                ? 0
                : this.ccaiProjectStatus],
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
(function (CcaiProject) {
    /**
     * Message implementation for ondewo.nlu.CcaiProject.CcaiServicesMapEntry
     */
    class CcaiServicesMapEntry {
        static { this.id = 'ondewo.nlu.CcaiProject.CcaiServicesMapEntry'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new CcaiServicesMapEntry();
            CcaiServicesMapEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.key = _instance.key || '';
            _instance.value = _instance.value || undefined;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.key = _reader.readString();
                        break;
                    case 2:
                        _instance.value = new CcaiServiceList();
                        _reader.readMessage(_instance.value, CcaiServiceList.deserializeBinaryFromReader);
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
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.key) {
                _writer.writeString(1, _instance.key);
            }
            if (_instance.value) {
                _writer.writeMessage(2, _instance.value, CcaiServiceList.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CcaiServicesMapEntry to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.key = _value.key;
            this.value = _value.value ? new CcaiServiceList(_value.value) : undefined;
            CcaiServicesMapEntry.refineValues(this);
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
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
        toObject() {
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
        options) {
            return {
                key: this.key,
                value: this.value ? this.value.toProtobufJSON(options) : null
            };
        }
    }
    CcaiProject.CcaiServicesMapEntry = CcaiServicesMapEntry;
})(CcaiProject || (CcaiProject = {}));
/**
 * Message implementation for ondewo.nlu.CcaiServiceList
 */
export class CcaiServiceList {
    static { this.id = 'ondewo.nlu.CcaiServiceList'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CcaiServiceList();
        CcaiServiceList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ccaiServices = _instance.ccaiServices || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new CcaiService();
                    _reader.readMessage(messageInitializer1, CcaiService.deserializeBinaryFromReader);
                    (_instance.ccaiServices = _instance.ccaiServices || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiServices && _instance.ccaiServices.length) {
            _writer.writeRepeatedMessage(1, _instance.ccaiServices, CcaiService.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiServiceList to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ccaiServices = (_value.ccaiServices || []).map(m => new CcaiService(m));
        CcaiServiceList.refineValues(this);
    }
    get ccaiServices() {
        return this._ccaiServices;
    }
    set ccaiServices(value) {
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
    toObject() {
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
    options) {
        return {
            ccaiServices: (this.ccaiServices || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CcaiService
 */
export class CcaiService {
    static { this.id = 'ondewo.nlu.CcaiService'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CcaiService();
        CcaiService.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(_instance.ccaiServiceConfig, googleProtobuf002.Struct.deserializeBinaryFromReader);
                    break;
                case 19:
                    _instance.createdAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.modifiedAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.createdBy = _reader.readString();
                    break;
                case 22:
                    _instance.modifiedBy = _reader.readString();
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeMessage(18, _instance.ccaiServiceConfig, googleProtobuf002.Struct.serializeBinaryToWriter);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(19, _instance.createdAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(20, _instance.modifiedAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.createdBy) {
            _writer.writeString(21, _instance.createdBy);
        }
        if (_instance.modifiedBy) {
            _writer.writeString(22, _instance.modifiedBy);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiService to deeply clone from
     */
    constructor(_value) {
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
        CcaiService.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get grpcHost() {
        return this._grpcHost;
    }
    set grpcHost(value) {
        this._grpcHost = value;
    }
    get grpcPort() {
        return this._grpcPort;
    }
    set grpcPort(value) {
        this._grpcPort = value;
    }
    get webgrpcHost() {
        return this._webgrpcHost;
    }
    set webgrpcHost(value) {
        this._webgrpcHost = value;
    }
    get webgrpcPort() {
        return this._webgrpcPort;
    }
    set webgrpcPort(value) {
        this._webgrpcPort = value;
    }
    get grpcCert() {
        return this._grpcCert;
    }
    set grpcCert(value) {
        this._grpcCert = value;
    }
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    get port() {
        return this._port;
    }
    set port(value) {
        this._port = value;
    }
    get port2() {
        return this._port2;
    }
    set port2(value) {
        this._port2 = value;
    }
    get httpBasicAuthToken() {
        return this._httpBasicAuthToken;
    }
    set httpBasicAuthToken(value) {
        this._httpBasicAuthToken = value;
    }
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }
    get accountPassword() {
        return this._accountPassword;
    }
    set accountPassword(value) {
        this._accountPassword = value;
    }
    get apiKey() {
        return this._apiKey;
    }
    set apiKey(value) {
        this._apiKey = value;
    }
    get ccaiServiceType() {
        return this._ccaiServiceType;
    }
    set ccaiServiceType(value) {
        this._ccaiServiceType = value;
    }
    get ccaiProjectName() {
        return this._ccaiProjectName;
    }
    set ccaiProjectName(value) {
        this._ccaiProjectName = value;
    }
    get ccaiServiceConfig() {
        return this._ccaiServiceConfig;
    }
    set ccaiServiceConfig(value) {
        this._ccaiServiceConfig = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get modifiedAt() {
        return this._modifiedAt;
    }
    set modifiedAt(value) {
        this._modifiedAt = value;
    }
    get createdBy() {
        return this._createdBy;
    }
    set createdBy(value) {
        this._createdBy = value;
    }
    get modifiedBy() {
        return this._modifiedBy;
    }
    set modifiedBy(value) {
        this._modifiedBy = value;
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
    toObject() {
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
            modifiedBy: this.modifiedBy
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
    options) {
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
            ccaiServiceType: CcaiServiceType[this.ccaiServiceType === null || this.ccaiServiceType === undefined
                ? 0
                : this.ccaiServiceType],
            ccaiProjectName: this.ccaiProjectName,
            ccaiServiceConfig: this.ccaiServiceConfig
                ? this.ccaiServiceConfig.toProtobufJSON(options)
                : null,
            createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
            modifiedAt: this.modifiedAt
                ? this.modifiedAt.toProtobufJSON(options)
                : null,
            createdBy: this.createdBy,
            modifiedBy: this.modifiedBy
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CreateCcaiProjectRequest
 */
export class CreateCcaiProjectRequest {
    static { this.id = 'ondewo.nlu.CreateCcaiProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateCcaiProjectRequest();
        CreateCcaiProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ccaiProject = _instance.ccaiProject || undefined;
        _instance.nluProjectName = _instance.nluProjectName || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.ccaiProject = new CcaiProject();
                    _reader.readMessage(_instance.ccaiProject, CcaiProject.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiProject) {
            _writer.writeMessage(1, _instance.ccaiProject, CcaiProject.serializeBinaryToWriter);
        }
        if (_instance.nluProjectName) {
            _writer.writeString(4, _instance.nluProjectName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCcaiProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ccaiProject = _value.ccaiProject
            ? new CcaiProject(_value.ccaiProject)
            : undefined;
        this.nluProjectName = _value.nluProjectName;
        CreateCcaiProjectRequest.refineValues(this);
    }
    get ccaiProject() {
        return this._ccaiProject;
    }
    set ccaiProject(value) {
        this._ccaiProject = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
        return {
            ccaiProject: this.ccaiProject
                ? this.ccaiProject.toProtobufJSON(options)
                : null,
            nluProjectName: this.nluProjectName
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CreateCcaiProjectResponse
 */
export class CreateCcaiProjectResponse {
    static { this.id = 'ondewo.nlu.CreateCcaiProjectResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateCcaiProjectResponse();
        CreateCcaiProjectResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ccaiProject = _instance.ccaiProject || undefined;
        _instance.errorMessage = _instance.errorMessage || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.ccaiProject = new CcaiProject();
                    _reader.readMessage(_instance.ccaiProject, CcaiProject.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiProject) {
            _writer.writeMessage(1, _instance.ccaiProject, CcaiProject.serializeBinaryToWriter);
        }
        if (_instance.errorMessage) {
            _writer.writeString(2, _instance.errorMessage);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCcaiProjectResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ccaiProject = _value.ccaiProject
            ? new CcaiProject(_value.ccaiProject)
            : undefined;
        this.errorMessage = _value.errorMessage;
        CreateCcaiProjectResponse.refineValues(this);
    }
    get ccaiProject() {
        return this._ccaiProject;
    }
    set ccaiProject(value) {
        this._ccaiProject = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
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
    toObject() {
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
    options) {
        return {
            ccaiProject: this.ccaiProject
                ? this.ccaiProject.toProtobufJSON(options)
                : null,
            errorMessage: this.errorMessage
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetCcaiProjectRequest
 */
export class GetCcaiProjectRequest {
    static { this.id = 'ondewo.nlu.GetCcaiProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetCcaiProjectRequest();
        GetCcaiProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.ccaiProjectView = _reader.readEnum();
                    break;
                case 3:
                    _instance.ccaiServiceFilter = new CcaiServiceFilter();
                    _reader.readMessage(_instance.ccaiServiceFilter, CcaiServiceFilter.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.ccaiProjectView) {
            _writer.writeEnum(2, _instance.ccaiProjectView);
        }
        if (_instance.ccaiServiceFilter) {
            _writer.writeMessage(3, _instance.ccaiServiceFilter, CcaiServiceFilter.serializeBinaryToWriter);
        }
        if (_instance.nluProjectName) {
            _writer.writeString(4, _instance.nluProjectName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCcaiProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.ccaiProjectView = _value.ccaiProjectView;
        this.ccaiServiceFilter = _value.ccaiServiceFilter
            ? new CcaiServiceFilter(_value.ccaiServiceFilter)
            : undefined;
        this.nluProjectName = _value.nluProjectName;
        GetCcaiProjectRequest.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get ccaiProjectView() {
        return this._ccaiProjectView;
    }
    set ccaiProjectView(value) {
        this._ccaiProjectView = value;
    }
    get ccaiServiceFilter() {
        return this._ccaiServiceFilter;
    }
    set ccaiServiceFilter(value) {
        this._ccaiServiceFilter = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
        return {
            name: this.name,
            ccaiProjectView: CcaiProjectView[this.ccaiProjectView === null || this.ccaiProjectView === undefined
                ? 0
                : this.ccaiProjectView],
            ccaiServiceFilter: this.ccaiServiceFilter
                ? this.ccaiServiceFilter.toProtobufJSON(options)
                : null,
            nluProjectName: this.nluProjectName
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListCcaiProjectsRequest
 */
export class ListCcaiProjectsRequest {
    static { this.id = 'ondewo.nlu.ListCcaiProjectsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListCcaiProjectsRequest();
        ListCcaiProjectsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.ccaiProjectView = _reader.readEnum();
                    break;
                case 2:
                    _instance.ccaiServiceFilter = new CcaiServiceFilter();
                    _reader.readMessage(_instance.ccaiServiceFilter, CcaiServiceFilter.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.ccaiProjectSorting = new CcaiProjectSorting();
                    _reader.readMessage(_instance.ccaiProjectSorting, CcaiProjectSorting.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiProjectView) {
            _writer.writeEnum(1, _instance.ccaiProjectView);
        }
        if (_instance.ccaiServiceFilter) {
            _writer.writeMessage(2, _instance.ccaiServiceFilter, CcaiServiceFilter.serializeBinaryToWriter);
        }
        if (_instance.ccaiProjectSorting) {
            _writer.writeMessage(3, _instance.ccaiProjectSorting, CcaiProjectSorting.serializeBinaryToWriter);
        }
        if (_instance.pageToken) {
            _writer.writeString(4, _instance.pageToken);
        }
        if (_instance.nluProjectName) {
            _writer.writeString(5, _instance.nluProjectName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCcaiProjectsRequest to deeply clone from
     */
    constructor(_value) {
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
    get ccaiProjectView() {
        return this._ccaiProjectView;
    }
    set ccaiProjectView(value) {
        this._ccaiProjectView = value;
    }
    get ccaiServiceFilter() {
        return this._ccaiServiceFilter;
    }
    set ccaiServiceFilter(value) {
        this._ccaiServiceFilter = value;
    }
    get ccaiProjectSorting() {
        return this._ccaiProjectSorting;
    }
    set ccaiProjectSorting(value) {
        this._ccaiProjectSorting = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
        return {
            ccaiProjectView: CcaiProjectView[this.ccaiProjectView === null || this.ccaiProjectView === undefined
                ? 0
                : this.ccaiProjectView],
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
/**
 * Message implementation for ondewo.nlu.ListCcaiProjectsResponse
 */
export class ListCcaiProjectsResponse {
    static { this.id = 'ondewo.nlu.ListCcaiProjectsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListCcaiProjectsResponse();
        ListCcaiProjectsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ccaiProjects = _instance.ccaiProjects || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new CcaiProject();
                    _reader.readMessage(messageInitializer1, CcaiProject.deserializeBinaryFromReader);
                    (_instance.ccaiProjects = _instance.ccaiProjects || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiProjects && _instance.ccaiProjects.length) {
            _writer.writeRepeatedMessage(1, _instance.ccaiProjects, CcaiProject.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCcaiProjectsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ccaiProjects = (_value.ccaiProjects || []).map(m => new CcaiProject(m));
        this.nextPageToken = _value.nextPageToken;
        ListCcaiProjectsResponse.refineValues(this);
    }
    get ccaiProjects() {
        return this._ccaiProjects;
    }
    set ccaiProjects(value) {
        this._ccaiProjects = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
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
    toObject() {
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
    options) {
        return {
            ccaiProjects: (this.ccaiProjects || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CcaiProjectSorting
 */
export class CcaiProjectSorting {
    static { this.id = 'ondewo.nlu.CcaiProjectSorting'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CcaiProjectSorting();
        CcaiProjectSorting.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sortingField = _instance.sortingField || 0;
        _instance.sortingMode = _instance.sortingMode || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sortingField) {
            _writer.writeEnum(1, _instance.sortingField);
        }
        if (_instance.sortingMode) {
            _writer.writeEnum(2, _instance.sortingMode);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiProjectSorting to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sortingField = _value.sortingField;
        this.sortingMode = _value.sortingMode;
        CcaiProjectSorting.refineValues(this);
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
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
    toObject() {
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
    options) {
        return {
            sortingField: CcaiProjectSorting.CcaiProjectSortingField[this.sortingField === null || this.sortingField === undefined
                ? 0
                : this.sortingField],
            sortingMode: ondewoNlu003.SortingMode[this.sortingMode === null || this.sortingMode === undefined
                ? 0
                : this.sortingMode]
        };
    }
}
(function (CcaiProjectSorting) {
    let CcaiProjectSortingField;
    (function (CcaiProjectSortingField) {
        CcaiProjectSortingField[CcaiProjectSortingField["NO_CCAI_PROJECT_SORTING"] = 0] = "NO_CCAI_PROJECT_SORTING";
        CcaiProjectSortingField[CcaiProjectSortingField["SORT_CCAI_PROJECT_BY_NAME"] = 1] = "SORT_CCAI_PROJECT_BY_NAME";
        CcaiProjectSortingField[CcaiProjectSortingField["SORT_CCAI_PROJECT_BY_DISPLAY_NAME"] = 2] = "SORT_CCAI_PROJECT_BY_DISPLAY_NAME";
        CcaiProjectSortingField[CcaiProjectSortingField["SORT_CCAI_PROJECT_BY_CREATION_DATE"] = 3] = "SORT_CCAI_PROJECT_BY_CREATION_DATE";
        CcaiProjectSortingField[CcaiProjectSortingField["SORT_CCAI_PROJECT_BY_LAST_MODIFIED"] = 4] = "SORT_CCAI_PROJECT_BY_LAST_MODIFIED";
    })(CcaiProjectSortingField = CcaiProjectSorting.CcaiProjectSortingField || (CcaiProjectSorting.CcaiProjectSortingField = {}));
})(CcaiProjectSorting || (CcaiProjectSorting = {}));
/**
 * Message implementation for ondewo.nlu.CcaiServiceFilter
 */
export class CcaiServiceFilter {
    static { this.id = 'ondewo.nlu.CcaiServiceFilter'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CcaiServiceFilter();
        CcaiServiceFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCodes = _instance.languageCodes || [];
        _instance.ccaiServiceTypes = _instance.ccaiServiceTypes || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.ccaiServiceTypes = _instance.ccaiServiceTypes || []).push(...(_reader.readPackedEnum() || []));
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCodes && _instance.languageCodes.length) {
            _writer.writeRepeatedString(1, _instance.languageCodes);
        }
        if (_instance.ccaiServiceTypes && _instance.ccaiServiceTypes.length) {
            _writer.writePackedEnum(2, _instance.ccaiServiceTypes);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CcaiServiceFilter to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCodes = (_value.languageCodes || []).slice();
        this.ccaiServiceTypes = (_value.ccaiServiceTypes || []).slice();
        CcaiServiceFilter.refineValues(this);
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get ccaiServiceTypes() {
        return this._ccaiServiceTypes;
    }
    set ccaiServiceTypes(value) {
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
    toObject() {
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
    options) {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            ccaiServiceTypes: (this.ccaiServiceTypes || []).map(v => CcaiServiceType[v])
        };
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectRequest
 */
export class UpdateCcaiProjectRequest {
    static { this.id = 'ondewo.nlu.UpdateCcaiProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateCcaiProjectRequest();
        UpdateCcaiProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.ccaiProject = new CcaiProject();
                    _reader.readMessage(_instance.ccaiProject, CcaiProject.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.ccaiServiceFilter = new CcaiServiceFilter();
                    _reader.readMessage(_instance.ccaiServiceFilter, CcaiServiceFilter.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.updateMask = new googleProtobuf000.FieldMask();
                    _reader.readMessage(_instance.updateMask, googleProtobuf000.FieldMask.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ccaiProject) {
            _writer.writeMessage(1, _instance.ccaiProject, CcaiProject.serializeBinaryToWriter);
        }
        if (_instance.ccaiServiceFilter) {
            _writer.writeMessage(2, _instance.ccaiServiceFilter, CcaiServiceFilter.serializeBinaryToWriter);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(3, _instance.updateMask, googleProtobuf000.FieldMask.serializeBinaryToWriter);
        }
        if (_instance.nluProjectName) {
            _writer.writeString(4, _instance.nluProjectName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCcaiProjectRequest to deeply clone from
     */
    constructor(_value) {
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
    get ccaiProject() {
        return this._ccaiProject;
    }
    set ccaiProject(value) {
        this._ccaiProject = value;
    }
    get ccaiServiceFilter() {
        return this._ccaiServiceFilter;
    }
    set ccaiServiceFilter(value) {
        this._ccaiServiceFilter = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.nlu.UpdateCcaiProjectResponse
 */
export class UpdateCcaiProjectResponse {
    static { this.id = 'ondewo.nlu.UpdateCcaiProjectResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateCcaiProjectResponse();
        UpdateCcaiProjectResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.errorMessage = _instance.errorMessage || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.errorMessage) {
            _writer.writeString(2, _instance.errorMessage);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCcaiProjectResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.errorMessage = _value.errorMessage;
        UpdateCcaiProjectResponse.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
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
    toObject() {
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
    options) {
        return {
            name: this.name,
            errorMessage: this.errorMessage
        };
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectRequest
 */
export class DeleteCcaiProjectRequest {
    static { this.id = 'ondewo.nlu.DeleteCcaiProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteCcaiProjectRequest();
        DeleteCcaiProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.nluProjectName = _instance.nluProjectName || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.nluProjectName) {
            _writer.writeString(4, _instance.nluProjectName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCcaiProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.nluProjectName = _value.nluProjectName;
        DeleteCcaiProjectRequest.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
        return {
            name: this.name,
            nluProjectName: this.nluProjectName
        };
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteCcaiProjectResponse
 */
export class DeleteCcaiProjectResponse {
    static { this.id = 'ondewo.nlu.DeleteCcaiProjectResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteCcaiProjectResponse();
        DeleteCcaiProjectResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.errorMessage = _instance.errorMessage || '';
        _instance.nluProjectName = _instance.nluProjectName || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCcaiProjectResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.errorMessage = _value.errorMessage;
        this.nluProjectName = _value.nluProjectName;
        DeleteCcaiProjectResponse.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
    }
    get nluProjectName() {
        return this._nluProjectName;
    }
    set nluProjectName(value) {
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
    toObject() {
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
    options) {
        return {
            name: this.name,
            errorMessage: this.errorMessage,
            nluProjectName: this.nluProjectName
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2NhaS1wcm9qZWN0LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvY2NhaS1wcm9qZWN0LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxNQUFNLENBQU4sSUFBWSxpQkFTWDtBQVRELFdBQVksaUJBQWlCO0lBQzNCLCtHQUFtQyxDQUFBO0lBQ25DLDZHQUFrQyxDQUFBO0lBQ2xDLHlHQUFnQyxDQUFBO0lBQ2hDLDJHQUFpQyxDQUFBO0lBQ2pDLHlHQUFnQyxDQUFBO0lBQ2hDLCtHQUFtQyxDQUFBO0lBQ25DLHlHQUFnQyxDQUFBO0lBQ2hDLHVHQUErQixDQUFBO0FBQ2pDLENBQUMsRUFUVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBUzVCO0FBQ0QsTUFBTSxDQUFOLElBQVksZUFjWDtBQWRELFdBQVksZUFBZTtJQUN6Qix1R0FBaUMsQ0FBQTtJQUNqQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyxxR0FBZ0MsQ0FBQTtJQUNoQyx1R0FBaUMsQ0FBQTtJQUNqQywyR0FBbUMsQ0FBQTtJQUNuQyw0R0FBb0MsQ0FBQTtJQUNwQyxzSEFBeUMsQ0FBQTtJQUN6Qyw0R0FBb0MsQ0FBQTtBQUN0QyxDQUFDLEVBZFcsZUFBZSxLQUFmLGVBQWUsUUFjMUI7QUFDRCxN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SSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuZXhwb3J0IGVudW0gQ2NhaVByb2plY3RTdGF0dXMge1xuICBDQ0FJX1BST0pFQ1RfU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgQ0NBSV9QUk9KRUNUX1NUQVRVU19VTkRFUExPWUVEID0gMSxcbiAgQ0NBSV9QUk9KRUNUX1NUQVRVU19VUERBVElORyA9IDIsXG4gIENDQUlfUFJPSkVDVF9TVEFUVVNfREVQTE9ZSU5HID0gMyxcbiAgQ0NBSV9QUk9KRUNUX1NUQVRVU19ERVBMT1lFRCA9IDQsXG4gIENDQUlfUFJPSkVDVF9TVEFUVVNfVU5ERVBMT1lJTkcgPSA1LFxuICBDQ0FJX1BST0pFQ1RfU1RBVFVTX0RFTEVUSU5HID0gNixcbiAgQ0NBSV9QUk9KRUNUX1NUQVRVU19ERUxFVEVEID0gN1xufVxuZXhwb3J0IGVudW0gQ2NhaVNlcnZpY2VUeXBlIHtcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfVU5TUEVDSUZJRUQgPSAwLFxuICBDQ0FJX1NFUlZJQ0VfVFlQRV9PTkRFV09fQUlNID0gMSxcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfT05ERVdPX0JQSSA9IDIsXG4gIENDQUlfU0VSVklDRV9UWVBFX09OREVXT19DU0kgPSAzLFxuICBDQ0FJX1NFUlZJQ0VfVFlQRV9PTkRFV09fTkxVID0gNCxcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfT05ERVdPX1MyVCA9IDUsXG4gIENDQUlfU0VSVklDRV9UWVBFX09OREVXT19TSVAgPSA2LFxuICBDQ0FJX1NFUlZJQ0VfVFlQRV9PTkRFV09fVDJTID0gNyxcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfT05ERVdPX1ZUU0kgPSA4LFxuICBDQ0FJX1NFUlZJQ0VfVFlQRV9WVFNJX1JBQkJJVE1RID0gOSxcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfT05ERVdPX05MVV9RQSA9IDEwLFxuICBDQ0FJX1NFUlZJQ0VfVFlQRV9PTkRFV09fTkxVX1dFQkhPT0sgPSAxMSxcbiAgQ0NBSV9TRVJWSUNFX1RZUEVfT05ERVdPX1NVUlZFWSA9IDEyXG59XG5leHBvcnQgZW51bSBDY2FpUHJvamVjdFZpZXcge1xuICBDQ0FJX1BST0pFQ1RfVklFV19VTlNQRUNJRklFRCA9IDAsXG4gIENDQUlfUFJPSkVDVF9WSUVXX0ZVTEwgPSAxLFxuICBDQ0FJX1BST0pFQ1RfVklFV19TSEFMTE9XID0gMixcbiAgQ0NBSV9QUk9KRUNUX1ZJRVdfTUlOSU1VTSA9IDNcbn1cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DY2FpUHJvamVjdFxuICovXG5leHBvcnQgY2xhc3MgQ2NhaVByb2plY3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNjYWlQcm9qZWN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2NhaVByb2plY3QoKTtcbiAgICBDY2FpUHJvamVjdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENjYWlQcm9qZWN0KSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGlzcGxheU5hbWUgPSBfaW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLm93bmVyTmFtZSA9IF9pbnN0YW5jZS5vd25lck5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlc01hcCA9IF9pbnN0YW5jZS5jY2FpU2VydmljZXNNYXAgfHwge307XG4gICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0U3RhdHVzID0gX2luc3RhbmNlLmNjYWlQcm9qZWN0U3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IF9pbnN0YW5jZS5jcmVhdGVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gX2luc3RhbmNlLm1vZGlmaWVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfaW5zdGFuY2UuY3JlYXRlZEJ5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEJ5ID0gX2luc3RhbmNlLm1vZGlmaWVkQnkgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lID0gX2luc3RhbmNlLm5sdVByb2plY3ROYW1lIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVByb2plY3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm93bmVyTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbXNnXzQgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1zZ180LFxuICAgICAgICAgICAgQ2NhaVByb2plY3QuQ2NhaVNlcnZpY2VzTWFwRW50cnkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VzTWFwID0gX2luc3RhbmNlLmNjYWlTZXJ2aWNlc01hcCB8fCB7fTtcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VzTWFwW21zZ180LmtleV0gPSBtc2dfNC52YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRCeSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQnkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENjYWlQcm9qZWN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVByb2plY3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGlzcGxheU5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vd25lck5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLm93bmVyTmFtZSk7XG4gICAgfVxuICAgIGlmICghIV9pbnN0YW5jZS5jY2FpU2VydmljZXNNYXApIHtcbiAgICAgIGNvbnN0IGtleXNfNCA9IE9iamVjdC5rZXlzKF9pbnN0YW5jZS5jY2FpU2VydmljZXNNYXAgYXMgYW55KTtcblxuICAgICAgaWYgKGtleXNfNC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWRfNCA9IGtleXNfNFxuICAgICAgICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiAoX2luc3RhbmNlLmNjYWlTZXJ2aWNlc01hcCBhcyBhbnkpW2tleV1cbiAgICAgICAgICB9KSlcbiAgICAgICAgICAucmVkdWNlKChyLCB2KSA9PiBbLi4uciwgdl0sIFtdIGFzIGFueVtdKTtcblxuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgcmVwZWF0ZWRfNCxcbiAgICAgICAgICBDY2FpUHJvamVjdC5DY2FpU2VydmljZXNNYXBFbnRyeS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNjYWlQcm9qZWN0U3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg1LCBfaW5zdGFuY2UuY2NhaVByb2plY3RTdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZWRBdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kaWZpZWRBdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0IGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2UuY3JlYXRlZEJ5KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RpZmllZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS5tb2RpZmllZEJ5KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMCwgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX293bmVyTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9jY2FpU2VydmljZXNNYXA6IHsgW3Byb3A6IHN0cmluZ106IENjYWlTZXJ2aWNlTGlzdCB9O1xuICBwcml2YXRlIF9jY2FpUHJvamVjdFN0YXR1czogQ2NhaVByb2plY3RTdGF0dXM7XG4gIHByaXZhdGUgX2NyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfY3JlYXRlZEJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21vZGlmaWVkQnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmx1UHJvamVjdE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENjYWlQcm9qZWN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENjYWlQcm9qZWN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gX3ZhbHVlLmRpc3BsYXlOYW1lO1xuICAgIHRoaXMub3duZXJOYW1lID0gX3ZhbHVlLm93bmVyTmFtZTtcbiAgICAodGhpcy5jY2FpU2VydmljZXNNYXAgPSBfdmFsdWUhLmNjYWlTZXJ2aWNlc01hcFxuICAgICAgPyBPYmplY3Qua2V5cyhfdmFsdWUhLmNjYWlTZXJ2aWNlc01hcCkucmVkdWNlKFxuICAgICAgICAgIChyLCBrKSA9PiAoe1xuICAgICAgICAgICAgLi4ucixcbiAgICAgICAgICAgIFtrXTogX3ZhbHVlIS5jY2FpU2VydmljZXNNYXAhW2tdXG4gICAgICAgICAgICAgID8gbmV3IENjYWlTZXJ2aWNlTGlzdChfdmFsdWUhLmNjYWlTZXJ2aWNlc01hcCFba10pXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKVxuICAgICAgOiB7fSksXG4gICAgICAodGhpcy5jY2FpUHJvamVjdFN0YXR1cyA9IF92YWx1ZS5jY2FpUHJvamVjdFN0YXR1cyk7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubW9kaWZpZWRBdCA9IF92YWx1ZS5tb2RpZmllZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm1vZGlmaWVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IF92YWx1ZS5jcmVhdGVkQnk7XG4gICAgdGhpcy5tb2RpZmllZEJ5ID0gX3ZhbHVlLm1vZGlmaWVkQnk7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBDY2FpUHJvamVjdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TmFtZTtcbiAgfVxuICBzZXQgZGlzcGxheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG93bmVyTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vd25lck5hbWU7XG4gIH1cbiAgc2V0IG93bmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3duZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNjYWlTZXJ2aWNlc01hcCgpOiB7IFtwcm9wOiBzdHJpbmddOiBDY2FpU2VydmljZUxpc3QgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlTZXJ2aWNlc01hcDtcbiAgfVxuICBzZXQgY2NhaVNlcnZpY2VzTWFwKHZhbHVlOiB7IFtwcm9wOiBzdHJpbmddOiBDY2FpU2VydmljZUxpc3QgfSkge1xuICAgIHRoaXMuX2NjYWlTZXJ2aWNlc01hcCA9IHZhbHVlO1xuICB9XG4gIGdldCBjY2FpUHJvamVjdFN0YXR1cygpOiBDY2FpUHJvamVjdFN0YXR1cyB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0U3RhdHVzO1xuICB9XG4gIHNldCBjY2FpUHJvamVjdFN0YXR1cyh2YWx1ZTogQ2NhaVByb2plY3RTdGF0dXMpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdFN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVkQXQoKTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEF0O1xuICB9XG4gIHNldCBjcmVhdGVkQXQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RpZmllZEF0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmaWVkQXQ7XG4gIH1cbiAgc2V0IG1vZGlmaWVkQXQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21vZGlmaWVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlZEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRCeTtcbiAgfVxuICBzZXQgY3JlYXRlZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGVkQnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kaWZpZWRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZmllZEJ5O1xuICB9XG4gIHNldCBtb2RpZmllZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RpZmllZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5sdVByb2plY3ROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25sdVByb2plY3ROYW1lO1xuICB9XG4gIHNldCBubHVQcm9qZWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmx1UHJvamVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDY2FpUHJvamVjdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDY2FpUHJvamVjdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgb3duZXJOYW1lOiB0aGlzLm93bmVyTmFtZSxcbiAgICAgIGNjYWlTZXJ2aWNlc01hcDogdGhpcy5jY2FpU2VydmljZXNNYXBcbiAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLmNjYWlTZXJ2aWNlc01hcCkucmVkdWNlKFxuICAgICAgICAgICAgKHIsIGspID0+ICh7XG4gICAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICAgIFtrXTogdGhpcy5jY2FpU2VydmljZXNNYXAhW2tdXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNjYWlTZXJ2aWNlc01hcCFba10udG9PYmplY3QoKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICA6IHt9LFxuICAgICAgY2NhaVByb2plY3RTdGF0dXM6IHRoaXMuY2NhaVByb2plY3RTdGF0dXMsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdCA/IHRoaXMubW9kaWZpZWRBdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeSxcbiAgICAgIG5sdVByb2plY3ROYW1lOiB0aGlzLm5sdVByb2plY3ROYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2NhaVByb2plY3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgIG93bmVyTmFtZTogdGhpcy5vd25lck5hbWUsXG4gICAgICBjY2FpU2VydmljZXNNYXA6IHRoaXMuY2NhaVNlcnZpY2VzTWFwXG4gICAgICAgID8gT2JqZWN0LmtleXModGhpcy5jY2FpU2VydmljZXNNYXApLnJlZHVjZShcbiAgICAgICAgICAgIChyLCBrKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgICBba106IHRoaXMuY2NhaVNlcnZpY2VzTWFwIVtrXVxuICAgICAgICAgICAgICAgID8gdGhpcy5jY2FpU2VydmljZXNNYXAhW2tdLnRvSlNPTigpXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICA6IHt9LFxuICAgICAgY2NhaVByb2plY3RTdGF0dXM6XG4gICAgICAgIENjYWlQcm9qZWN0U3RhdHVzW1xuICAgICAgICAgIHRoaXMuY2NhaVByb2plY3RTdGF0dXMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLmNjYWlQcm9qZWN0U3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmNjYWlQcm9qZWN0U3RhdHVzXG4gICAgICAgIF0sXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbW9kaWZpZWRBdDogdGhpcy5tb2RpZmllZEF0XG4gICAgICAgID8gdGhpcy5tb2RpZmllZEF0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5jcmVhdGVkQnksXG4gICAgICBtb2RpZmllZEJ5OiB0aGlzLm1vZGlmaWVkQnksXG4gICAgICBubHVQcm9qZWN0TmFtZTogdGhpcy5ubHVQcm9qZWN0TmFtZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2NhaVByb2plY3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENjYWlQcm9qZWN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgICBvd25lck5hbWU6IHN0cmluZztcbiAgICBjY2FpU2VydmljZXNNYXA6IHsgW3Byb3A6IHN0cmluZ106IENjYWlTZXJ2aWNlTGlzdCB9O1xuICAgIGNjYWlQcm9qZWN0U3RhdHVzOiBDY2FpUHJvamVjdFN0YXR1cztcbiAgICBjcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDY2FpUHJvamVjdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgb3duZXJOYW1lOiBzdHJpbmc7XG4gICAgY2NhaVNlcnZpY2VzTWFwOiB7IFtwcm9wOiBzdHJpbmddOiBDY2FpU2VydmljZUxpc3QgfTtcbiAgICBjY2FpUHJvamVjdFN0YXR1czogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtb2RpZmllZEF0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgIG1vZGlmaWVkQnk6IHN0cmluZztcbiAgICBubHVQcm9qZWN0TmFtZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2NhaVByb2plY3QuQ2NhaVNlcnZpY2VzTWFwRW50cnlcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDY2FpU2VydmljZXNNYXBFbnRyeSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DY2FpUHJvamVjdC5DY2FpU2VydmljZXNNYXBFbnRyeSc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENjYWlTZXJ2aWNlc01hcEVudHJ5KCk7XG4gICAgICBDY2FpU2VydmljZXNNYXBFbnRyeS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2NhaVNlcnZpY2VzTWFwRW50cnkpIHtcbiAgICAgIF9pbnN0YW5jZS5rZXkgPSBfaW5zdGFuY2Uua2V5IHx8ICcnO1xuICAgICAgX2luc3RhbmNlLnZhbHVlID0gX2luc3RhbmNlLnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBDY2FpU2VydmljZXNNYXBFbnRyeSxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5rZXkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IG5ldyBDY2FpU2VydmljZUxpc3QoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSxcbiAgICAgICAgICAgICAgQ2NhaVNlcnZpY2VMaXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIENjYWlTZXJ2aWNlc01hcEVudHJ5LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IENjYWlTZXJ2aWNlc01hcEVudHJ5LFxuICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLmtleSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5rZXkpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS52YWx1ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAyLFxuICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSBhcyBhbnksXG4gICAgICAgICAgQ2NhaVNlcnZpY2VMaXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsdWU/OiBDY2FpU2VydmljZUxpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDY2FpU2VydmljZXNNYXBFbnRyeSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2NhaVNlcnZpY2VzTWFwRW50cnkuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLmtleSA9IF92YWx1ZS5rZXk7XG4gICAgICB0aGlzLnZhbHVlID0gX3ZhbHVlLnZhbHVlID8gbmV3IENjYWlTZXJ2aWNlTGlzdChfdmFsdWUudmFsdWUpIDogdW5kZWZpbmVkO1xuICAgICAgQ2NhaVNlcnZpY2VzTWFwRW50cnkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogQ2NhaVNlcnZpY2VMaXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBDY2FpU2VydmljZUxpc3QgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIENjYWlTZXJ2aWNlc01hcEVudHJ5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IENjYWlTZXJ2aWNlc01hcEVudHJ5LkFzT2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IENjYWlTZXJ2aWNlc01hcEVudHJ5LkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgQ2NhaVNlcnZpY2VzTWFwRW50cnkge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDY2FpU2VydmljZXNNYXBFbnRyeVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAga2V5OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IENjYWlTZXJ2aWNlTGlzdC5Bc09iamVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDY2FpU2VydmljZXNNYXBFbnRyeVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAga2V5OiBzdHJpbmc7XG4gICAgICB2YWx1ZTogQ2NhaVNlcnZpY2VMaXN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNjYWlTZXJ2aWNlTGlzdFxuICovXG5leHBvcnQgY2xhc3MgQ2NhaVNlcnZpY2VMaXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DY2FpU2VydmljZUxpc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDY2FpU2VydmljZUxpc3QoKTtcbiAgICBDY2FpU2VydmljZUxpc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDY2FpU2VydmljZUxpc3QpIHtcbiAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VzID0gX2luc3RhbmNlLmNjYWlTZXJ2aWNlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENjYWlTZXJ2aWNlTGlzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IENjYWlTZXJ2aWNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBDY2FpU2VydmljZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuY2NhaVNlcnZpY2VzID0gX2luc3RhbmNlLmNjYWlTZXJ2aWNlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2NhaVNlcnZpY2VMaXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVNlcnZpY2VMaXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNjYWlTZXJ2aWNlcyAmJiBfaW5zdGFuY2UuY2NhaVNlcnZpY2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlcyBhcyBhbnksXG4gICAgICAgIENjYWlTZXJ2aWNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NjYWlTZXJ2aWNlcz86IENjYWlTZXJ2aWNlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDY2FpU2VydmljZUxpc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2NhaVNlcnZpY2VMaXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNjYWlTZXJ2aWNlcyA9IChfdmFsdWUuY2NhaVNlcnZpY2VzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBDY2FpU2VydmljZShtKVxuICAgICk7XG4gICAgQ2NhaVNlcnZpY2VMaXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VzKCk6IENjYWlTZXJ2aWNlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jY2FpU2VydmljZXM7XG4gIH1cbiAgc2V0IGNjYWlTZXJ2aWNlcyh2YWx1ZTogQ2NhaVNlcnZpY2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NjYWlTZXJ2aWNlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENjYWlTZXJ2aWNlTGlzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDY2FpU2VydmljZUxpc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjY2FpU2VydmljZXM6ICh0aGlzLmNjYWlTZXJ2aWNlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENjYWlTZXJ2aWNlTGlzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlTZXJ2aWNlczogKHRoaXMuY2NhaVNlcnZpY2VzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDY2FpU2VydmljZUxpc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENjYWlTZXJ2aWNlTGlzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2NhaVNlcnZpY2VzPzogQ2NhaVNlcnZpY2UuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDY2FpU2VydmljZUxpc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNjYWlTZXJ2aWNlczogQ2NhaVNlcnZpY2UuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNjYWlTZXJ2aWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDY2FpU2VydmljZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2NhaVNlcnZpY2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDY2FpU2VydmljZSgpO1xuICAgIENjYWlTZXJ2aWNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2NhaVNlcnZpY2UpIHtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IF9pbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZ3JwY0hvc3QgPSBfaW5zdGFuY2UuZ3JwY0hvc3QgfHwgJyc7XG4gICAgX2luc3RhbmNlLmdycGNQb3J0ID0gX2luc3RhbmNlLmdycGNQb3J0IHx8IDA7XG4gICAgX2luc3RhbmNlLndlYmdycGNIb3N0ID0gX2luc3RhbmNlLndlYmdycGNIb3N0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS53ZWJncnBjUG9ydCA9IF9pbnN0YW5jZS53ZWJncnBjUG9ydCB8fCAwO1xuICAgIF9pbnN0YW5jZS5ncnBjQ2VydCA9IF9pbnN0YW5jZS5ncnBjQ2VydCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaG9zdCA9IF9pbnN0YW5jZS5ob3N0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wb3J0ID0gX2luc3RhbmNlLnBvcnQgfHwgMDtcbiAgICBfaW5zdGFuY2UucG9ydDIgPSBfaW5zdGFuY2UucG9ydDIgfHwgMDtcbiAgICBfaW5zdGFuY2UuaHR0cEJhc2ljQXV0aFRva2VuID0gX2luc3RhbmNlLmh0dHBCYXNpY0F1dGhUb2tlbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuYWNjb3VudE5hbWUgPSBfaW5zdGFuY2UuYWNjb3VudE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFjY291bnRQYXNzd29yZCA9IF9pbnN0YW5jZS5hY2NvdW50UGFzc3dvcmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFwaUtleSA9IF9pbnN0YW5jZS5hcGlLZXkgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlVHlwZSA9IF9pbnN0YW5jZS5jY2FpU2VydmljZVR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UuY2NhaVByb2plY3ROYW1lID0gX2luc3RhbmNlLmNjYWlQcm9qZWN0TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VDb25maWcgPSBfaW5zdGFuY2UuY2NhaVNlcnZpY2VDb25maWcgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgPSBfaW5zdGFuY2UuY3JlYXRlZEF0IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCA9IF9pbnN0YW5jZS5tb2RpZmllZEF0IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuY3JlYXRlZEJ5ID0gX2luc3RhbmNlLmNyZWF0ZWRCeSB8fCAnJztcbiAgICBfaW5zdGFuY2UubW9kaWZpZWRCeSA9IF9pbnN0YW5jZS5tb2RpZmllZEJ5IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVNlcnZpY2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmdycGNIb3N0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZ3JwY1BvcnQgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLndlYmdycGNIb3N0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2Uud2ViZ3JwY1BvcnQgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmdycGNDZXJ0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UuaG9zdCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5wb3J0ID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UucG9ydDIgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5odHRwQmFzaWNBdXRoVG9rZW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBfaW5zdGFuY2UuYWNjb3VudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYWNjb3VudFBhc3N3b3JkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLmFwaUtleSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpU2VydmljZVR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpU2VydmljZUNvbmZpZyA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlQ29uZmlnLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRCeSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2NhaVNlcnZpY2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDY2FpU2VydmljZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ncnBjSG9zdCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuZ3JwY0hvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdycGNQb3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoNSwgX2luc3RhbmNlLmdycGNQb3J0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53ZWJncnBjSG9zdCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2Uud2ViZ3JwY0hvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndlYmdycGNQb3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoNywgX2luc3RhbmNlLndlYmdycGNQb3J0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ncnBjQ2VydCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2UuZ3JwY0NlcnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmhvc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOSwgX2luc3RhbmNlLmhvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvcnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigxMCwgX2luc3RhbmNlLnBvcnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvcnQyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMTEsIF9pbnN0YW5jZS5wb3J0Mik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaHR0cEJhc2ljQXV0aFRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEyLCBfaW5zdGFuY2UuaHR0cEJhc2ljQXV0aFRva2VuKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY2NvdW50TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMywgX2luc3RhbmNlLmFjY291bnROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY2NvdW50UGFzc3dvcmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTQsIF9pbnN0YW5jZS5hY2NvdW50UGFzc3dvcmQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFwaUtleSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxNSwgX2luc3RhbmNlLmFwaUtleSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2NhaVNlcnZpY2VUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxNiwgX2luc3RhbmNlLmNjYWlTZXJ2aWNlVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2NhaVByb2plY3ROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDE3LCBfaW5zdGFuY2UuY2NhaVByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jY2FpU2VydmljZUNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VDb25maWcgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTksXG4gICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kaWZpZWRBdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jcmVhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMjEsIF9pbnN0YW5jZS5jcmVhdGVkQnkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGlmaWVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMjIsIF9pbnN0YW5jZS5tb2RpZmllZEJ5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZTogc3RyaW5nO1xuICBwcml2YXRlIF9ncnBjSG9zdDogc3RyaW5nO1xuICBwcml2YXRlIF9ncnBjUG9ydDogbnVtYmVyO1xuICBwcml2YXRlIF93ZWJncnBjSG9zdDogc3RyaW5nO1xuICBwcml2YXRlIF93ZWJncnBjUG9ydDogbnVtYmVyO1xuICBwcml2YXRlIF9ncnBjQ2VydDogc3RyaW5nO1xuICBwcml2YXRlIF9ob3N0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BvcnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9ydDI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaHR0cEJhc2ljQXV0aFRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FjY291bnROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FjY291bnRQYXNzd29yZDogc3RyaW5nO1xuICBwcml2YXRlIF9hcGlLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2NhaVNlcnZpY2VUeXBlOiBDY2FpU2VydmljZVR5cGU7XG4gIHByaXZhdGUgX2NjYWlQcm9qZWN0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9jY2FpU2VydmljZUNvbmZpZz86IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdDtcbiAgcHJpdmF0ZSBfY3JlYXRlZEF0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wO1xuICBwcml2YXRlIF9tb2RpZmllZEF0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wO1xuICBwcml2YXRlIF9jcmVhdGVkQnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9kaWZpZWRCeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2NhaVNlcnZpY2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2NhaVNlcnZpY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBfdmFsdWUuZGlzcGxheU5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuZ3JwY0hvc3QgPSBfdmFsdWUuZ3JwY0hvc3Q7XG4gICAgdGhpcy5ncnBjUG9ydCA9IF92YWx1ZS5ncnBjUG9ydDtcbiAgICB0aGlzLndlYmdycGNIb3N0ID0gX3ZhbHVlLndlYmdycGNIb3N0O1xuICAgIHRoaXMud2ViZ3JwY1BvcnQgPSBfdmFsdWUud2ViZ3JwY1BvcnQ7XG4gICAgdGhpcy5ncnBjQ2VydCA9IF92YWx1ZS5ncnBjQ2VydDtcbiAgICB0aGlzLmhvc3QgPSBfdmFsdWUuaG9zdDtcbiAgICB0aGlzLnBvcnQgPSBfdmFsdWUucG9ydDtcbiAgICB0aGlzLnBvcnQyID0gX3ZhbHVlLnBvcnQyO1xuICAgIHRoaXMuaHR0cEJhc2ljQXV0aFRva2VuID0gX3ZhbHVlLmh0dHBCYXNpY0F1dGhUb2tlbjtcbiAgICB0aGlzLmFjY291bnROYW1lID0gX3ZhbHVlLmFjY291bnROYW1lO1xuICAgIHRoaXMuYWNjb3VudFBhc3N3b3JkID0gX3ZhbHVlLmFjY291bnRQYXNzd29yZDtcbiAgICB0aGlzLmFwaUtleSA9IF92YWx1ZS5hcGlLZXk7XG4gICAgdGhpcy5jY2FpU2VydmljZVR5cGUgPSBfdmFsdWUuY2NhaVNlcnZpY2VUeXBlO1xuICAgIHRoaXMuY2NhaVByb2plY3ROYW1lID0gX3ZhbHVlLmNjYWlQcm9qZWN0TmFtZTtcbiAgICB0aGlzLmNjYWlTZXJ2aWNlQ29uZmlnID0gX3ZhbHVlLmNjYWlTZXJ2aWNlQ29uZmlnXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QoX3ZhbHVlLmNjYWlTZXJ2aWNlQ29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubW9kaWZpZWRBdCA9IF92YWx1ZS5tb2RpZmllZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm1vZGlmaWVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IF92YWx1ZS5jcmVhdGVkQnk7XG4gICAgdGhpcy5tb2RpZmllZEJ5ID0gX3ZhbHVlLm1vZGlmaWVkQnk7XG4gICAgQ2NhaVNlcnZpY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gIH1cbiAgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBncnBjSG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ncnBjSG9zdDtcbiAgfVxuICBzZXQgZ3JwY0hvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dycGNIb3N0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdycGNQb3J0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGNQb3J0O1xuICB9XG4gIHNldCBncnBjUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3JwY1BvcnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2ViZ3JwY0hvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViZ3JwY0hvc3Q7XG4gIH1cbiAgc2V0IHdlYmdycGNIb3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWJncnBjSG9zdCA9IHZhbHVlO1xuICB9XG4gIGdldCB3ZWJncnBjUG9ydCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWJncnBjUG9ydDtcbiAgfVxuICBzZXQgd2ViZ3JwY1BvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3dlYmdycGNQb3J0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdycGNDZXJ0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGNDZXJ0O1xuICB9XG4gIHNldCBncnBjQ2VydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3JwY0NlcnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvcnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuICBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIGdldCBwb3J0MigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wb3J0MjtcbiAgfVxuICBzZXQgcG9ydDIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGh0dHBCYXNpY0F1dGhUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9odHRwQmFzaWNBdXRoVG9rZW47XG4gIH1cbiAgc2V0IGh0dHBCYXNpY0F1dGhUb2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHR0cEJhc2ljQXV0aFRva2VuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjY291bnROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnROYW1lO1xuICB9XG4gIHNldCBhY2NvdW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjb3VudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWNjb3VudFBhc3N3b3JkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRQYXNzd29yZDtcbiAgfVxuICBzZXQgYWNjb3VudFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50UGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYXBpS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUtleTtcbiAgfVxuICBzZXQgYXBpS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlLZXkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VUeXBlKCk6IENjYWlTZXJ2aWNlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlTZXJ2aWNlVHlwZTtcbiAgfVxuICBzZXQgY2NhaVNlcnZpY2VUeXBlKHZhbHVlOiBDY2FpU2VydmljZVR5cGUpIHtcbiAgICB0aGlzLl9jY2FpU2VydmljZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVByb2plY3ROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0TmFtZTtcbiAgfVxuICBzZXQgY2NhaVByb2plY3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VDb25maWcoKTogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2NhaVNlcnZpY2VDb25maWc7XG4gIH1cbiAgc2V0IGNjYWlTZXJ2aWNlQ29uZmlnKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpU2VydmljZUNvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVkQXQoKTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEF0O1xuICB9XG4gIHNldCBjcmVhdGVkQXQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RpZmllZEF0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmaWVkQXQ7XG4gIH1cbiAgc2V0IG1vZGlmaWVkQXQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21vZGlmaWVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlZEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRCeTtcbiAgfVxuICBzZXQgY3JlYXRlZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGVkQnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kaWZpZWRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZmllZEJ5O1xuICB9XG4gIHNldCBtb2RpZmllZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RpZmllZEJ5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2NhaVNlcnZpY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2NhaVNlcnZpY2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBncnBjSG9zdDogdGhpcy5ncnBjSG9zdCxcbiAgICAgIGdycGNQb3J0OiB0aGlzLmdycGNQb3J0LFxuICAgICAgd2ViZ3JwY0hvc3Q6IHRoaXMud2ViZ3JwY0hvc3QsXG4gICAgICB3ZWJncnBjUG9ydDogdGhpcy53ZWJncnBjUG9ydCxcbiAgICAgIGdycGNDZXJ0OiB0aGlzLmdycGNDZXJ0LFxuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgcG9ydDI6IHRoaXMucG9ydDIsXG4gICAgICBodHRwQmFzaWNBdXRoVG9rZW46IHRoaXMuaHR0cEJhc2ljQXV0aFRva2VuLFxuICAgICAgYWNjb3VudE5hbWU6IHRoaXMuYWNjb3VudE5hbWUsXG4gICAgICBhY2NvdW50UGFzc3dvcmQ6IHRoaXMuYWNjb3VudFBhc3N3b3JkLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIGNjYWlTZXJ2aWNlVHlwZTogdGhpcy5jY2FpU2VydmljZVR5cGUsXG4gICAgICBjY2FpUHJvamVjdE5hbWU6IHRoaXMuY2NhaVByb2plY3ROYW1lLFxuICAgICAgY2NhaVNlcnZpY2VDb25maWc6IHRoaXMuY2NhaVNlcnZpY2VDb25maWdcbiAgICAgICAgPyB0aGlzLmNjYWlTZXJ2aWNlQ29uZmlnLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdCA/IHRoaXMubW9kaWZpZWRBdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENjYWlTZXJ2aWNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgZ3JwY0hvc3Q6IHRoaXMuZ3JwY0hvc3QsXG4gICAgICBncnBjUG9ydDogdGhpcy5ncnBjUG9ydCxcbiAgICAgIHdlYmdycGNIb3N0OiB0aGlzLndlYmdycGNIb3N0LFxuICAgICAgd2ViZ3JwY1BvcnQ6IHRoaXMud2ViZ3JwY1BvcnQsXG4gICAgICBncnBjQ2VydDogdGhpcy5ncnBjQ2VydCxcbiAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcbiAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgIHBvcnQyOiB0aGlzLnBvcnQyLFxuICAgICAgaHR0cEJhc2ljQXV0aFRva2VuOiB0aGlzLmh0dHBCYXNpY0F1dGhUb2tlbixcbiAgICAgIGFjY291bnROYW1lOiB0aGlzLmFjY291bnROYW1lLFxuICAgICAgYWNjb3VudFBhc3N3b3JkOiB0aGlzLmFjY291bnRQYXNzd29yZCxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICBjY2FpU2VydmljZVR5cGU6XG4gICAgICAgIENjYWlTZXJ2aWNlVHlwZVtcbiAgICAgICAgICB0aGlzLmNjYWlTZXJ2aWNlVHlwZSA9PT0gbnVsbCB8fCB0aGlzLmNjYWlTZXJ2aWNlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5jY2FpU2VydmljZVR5cGVcbiAgICAgICAgXSxcbiAgICAgIGNjYWlQcm9qZWN0TmFtZTogdGhpcy5jY2FpUHJvamVjdE5hbWUsXG4gICAgICBjY2FpU2VydmljZUNvbmZpZzogdGhpcy5jY2FpU2VydmljZUNvbmZpZ1xuICAgICAgICA/IHRoaXMuY2NhaVNlcnZpY2VDb25maWcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdFxuICAgICAgICA/IHRoaXMubW9kaWZpZWRBdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjcmVhdGVkQnk6IHRoaXMuY3JlYXRlZEJ5LFxuICAgICAgbW9kaWZpZWRCeTogdGhpcy5tb2RpZmllZEJ5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDY2FpU2VydmljZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2NhaVNlcnZpY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIGdycGNIb3N0OiBzdHJpbmc7XG4gICAgZ3JwY1BvcnQ6IG51bWJlcjtcbiAgICB3ZWJncnBjSG9zdDogc3RyaW5nO1xuICAgIHdlYmdycGNQb3J0OiBudW1iZXI7XG4gICAgZ3JwY0NlcnQ6IHN0cmluZztcbiAgICBob3N0OiBzdHJpbmc7XG4gICAgcG9ydDogbnVtYmVyO1xuICAgIHBvcnQyOiBudW1iZXI7XG4gICAgaHR0cEJhc2ljQXV0aFRva2VuOiBzdHJpbmc7XG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICBhY2NvdW50UGFzc3dvcmQ6IHN0cmluZztcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBjY2FpU2VydmljZVR5cGU6IENjYWlTZXJ2aWNlVHlwZTtcbiAgICBjY2FpUHJvamVjdE5hbWU6IHN0cmluZztcbiAgICBjY2FpU2VydmljZUNvbmZpZz86IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdC5Bc09iamVjdDtcbiAgICBjcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2NhaVNlcnZpY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIGdycGNIb3N0OiBzdHJpbmc7XG4gICAgZ3JwY1BvcnQ6IG51bWJlcjtcbiAgICB3ZWJncnBjSG9zdDogc3RyaW5nO1xuICAgIHdlYmdycGNQb3J0OiBudW1iZXI7XG4gICAgZ3JwY0NlcnQ6IHN0cmluZztcbiAgICBob3N0OiBzdHJpbmc7XG4gICAgcG9ydDogbnVtYmVyO1xuICAgIHBvcnQyOiBudW1iZXI7XG4gICAgaHR0cEJhc2ljQXV0aFRva2VuOiBzdHJpbmc7XG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICBhY2NvdW50UGFzc3dvcmQ6IHN0cmluZztcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBjY2FpU2VydmljZVR5cGU6IHN0cmluZztcbiAgICBjY2FpUHJvamVjdE5hbWU6IHN0cmluZztcbiAgICBjY2FpU2VydmljZUNvbmZpZzogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjcmVhdGVkQXQ6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbW9kaWZpZWRBdDogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNyZWF0ZUNjYWlQcm9qZWN0UmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QoKTtcbiAgICBDcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuY2NhaVByb2plY3QgPSBfaW5zdGFuY2UuY2NhaVByb2plY3QgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZUNjYWlQcm9qZWN0UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVByb2plY3QgPSBuZXcgQ2NhaVByb2plY3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0LFxuICAgICAgICAgICAgQ2NhaVByb2plY3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNjYWlQcm9qZWN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0IGFzIGFueSxcbiAgICAgICAgQ2NhaVByb2plY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jY2FpUHJvamVjdD86IENjYWlQcm9qZWN0O1xuICBwcml2YXRlIF9ubHVQcm9qZWN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENyZWF0ZUNjYWlQcm9qZWN0UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jY2FpUHJvamVjdCA9IF92YWx1ZS5jY2FpUHJvamVjdFxuICAgICAgPyBuZXcgQ2NhaVByb2plY3QoX3ZhbHVlLmNjYWlQcm9qZWN0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBDcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjY2FpUHJvamVjdCgpOiBDY2FpUHJvamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0O1xuICB9XG4gIHNldCBjY2FpUHJvamVjdCh2YWx1ZTogQ2NhaVByb2plY3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdCA9IHZhbHVlO1xuICB9XG4gIGdldCBubHVQcm9qZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ubHVQcm9qZWN0TmFtZTtcbiAgfVxuICBzZXQgbmx1UHJvamVjdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25sdVByb2plY3ROYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZUNjYWlQcm9qZWN0UmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlQcm9qZWN0OiB0aGlzLmNjYWlQcm9qZWN0ID8gdGhpcy5jY2FpUHJvamVjdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbmx1UHJvamVjdE5hbWU6IHRoaXMubmx1UHJvamVjdE5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDcmVhdGVDY2FpUHJvamVjdFJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjY2FpUHJvamVjdDogdGhpcy5jY2FpUHJvamVjdFxuICAgICAgICA/IHRoaXMuY2NhaVByb2plY3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbmx1UHJvamVjdE5hbWU6IHRoaXMubmx1UHJvamVjdE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZUNjYWlQcm9qZWN0UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjY2FpUHJvamVjdD86IENjYWlQcm9qZWN0LkFzT2JqZWN0O1xuICAgIG5sdVByb2plY3ROYW1lOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlQ2NhaVByb2plY3RSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjY2FpUHJvamVjdDogQ2NhaVByb2plY3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG5sdVByb2plY3ROYW1lOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlKCk7XG4gICAgQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuY2NhaVByb2plY3QgPSBfaW5zdGFuY2UuY2NhaVByb2plY3QgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgPSBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVByb2plY3QgPSBuZXcgQ2NhaVByb2plY3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0LFxuICAgICAgICAgICAgQ2NhaVByb2plY3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNjYWlQcm9qZWN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0IGFzIGFueSxcbiAgICAgICAgQ2NhaVByb2plY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NjYWlQcm9qZWN0PzogQ2NhaVByb2plY3Q7XG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNjYWlQcm9qZWN0ID0gX3ZhbHVlLmNjYWlQcm9qZWN0XG4gICAgICA/IG5ldyBDY2FpUHJvamVjdChfdmFsdWUuY2NhaVByb2plY3QpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IF92YWx1ZS5lcnJvck1lc3NhZ2U7XG4gICAgQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNjYWlQcm9qZWN0KCk6IENjYWlQcm9qZWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2NhaVByb2plY3Q7XG4gIH1cbiAgc2V0IGNjYWlQcm9qZWN0KHZhbHVlOiBDY2FpUHJvamVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NjYWlQcm9qZWN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2U7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2NhaVByb2plY3Q6IHRoaXMuY2NhaVByb2plY3QgPyB0aGlzLmNjYWlQcm9qZWN0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZXJyb3JNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlQ2NhaVByb2plY3RSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlQcm9qZWN0OiB0aGlzLmNjYWlQcm9qZWN0XG4gICAgICAgID8gdGhpcy5jY2FpUHJvamVjdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZXJyb3JNZXNzYWdlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVDY2FpUHJvamVjdFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjY2FpUHJvamVjdD86IENjYWlQcm9qZWN0LkFzT2JqZWN0O1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZUNjYWlQcm9qZWN0UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNjYWlQcm9qZWN0OiBDY2FpUHJvamVjdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdldENjYWlQcm9qZWN0UmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgR2V0Q2NhaVByb2plY3RSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5HZXRDY2FpUHJvamVjdFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRDY2FpUHJvamVjdFJlcXVlc3QoKTtcbiAgICBHZXRDY2FpUHJvamVjdFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRDY2FpUHJvamVjdFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFZpZXcgPSBfaW5zdGFuY2UuY2NhaVByb2plY3RWaWV3IHx8IDA7XG4gICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyID0gX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgPSBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRDY2FpUHJvamVjdFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VGaWx0ZXIgPSBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyLFxuICAgICAgICAgICAgQ2NhaVNlcnZpY2VGaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0Q2NhaVByb2plY3RSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0Q2NhaVByb2plY3RSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNjYWlQcm9qZWN0Vmlldykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLmNjYWlQcm9qZWN0Vmlldyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2NhaVNlcnZpY2VGaWx0ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VGaWx0ZXIgYXMgYW55LFxuICAgICAgICBDY2FpU2VydmljZUZpbHRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2NhaVByb2plY3RWaWV3OiBDY2FpUHJvamVjdFZpZXc7XG4gIHByaXZhdGUgX2NjYWlTZXJ2aWNlRmlsdGVyPzogQ2NhaVNlcnZpY2VGaWx0ZXI7XG4gIHByaXZhdGUgX25sdVByb2plY3ROYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRDY2FpUHJvamVjdFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0Q2NhaVByb2plY3RSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmNjYWlQcm9qZWN0VmlldyA9IF92YWx1ZS5jY2FpUHJvamVjdFZpZXc7XG4gICAgdGhpcy5jY2FpU2VydmljZUZpbHRlciA9IF92YWx1ZS5jY2FpU2VydmljZUZpbHRlclxuICAgICAgPyBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoX3ZhbHVlLmNjYWlTZXJ2aWNlRmlsdGVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBHZXRDY2FpUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVByb2plY3RWaWV3KCk6IENjYWlQcm9qZWN0VmlldyB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0VmlldztcbiAgfVxuICBzZXQgY2NhaVByb2plY3RWaWV3KHZhbHVlOiBDY2FpUHJvamVjdFZpZXcpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdFZpZXcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VGaWx0ZXIoKTogQ2NhaVNlcnZpY2VGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jY2FpU2VydmljZUZpbHRlcjtcbiAgfVxuICBzZXQgY2NhaVNlcnZpY2VGaWx0ZXIodmFsdWU6IENjYWlTZXJ2aWNlRmlsdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2NhaVNlcnZpY2VGaWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmx1UHJvamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmx1UHJvamVjdE5hbWU7XG4gIH1cbiAgc2V0IG5sdVByb2plY3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ubHVQcm9qZWN0TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldENjYWlQcm9qZWN0UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRDY2FpUHJvamVjdFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjY2FpUHJvamVjdFZpZXc6IHRoaXMuY2NhaVByb2plY3RWaWV3LFxuICAgICAgY2NhaVNlcnZpY2VGaWx0ZXI6IHRoaXMuY2NhaVNlcnZpY2VGaWx0ZXJcbiAgICAgICAgPyB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBubHVQcm9qZWN0TmFtZTogdGhpcy5ubHVQcm9qZWN0TmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldENjYWlQcm9qZWN0UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNjYWlQcm9qZWN0VmlldzpcbiAgICAgICAgQ2NhaVByb2plY3RWaWV3W1xuICAgICAgICAgIHRoaXMuY2NhaVByb2plY3RWaWV3ID09PSBudWxsIHx8IHRoaXMuY2NhaVByb2plY3RWaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmNjYWlQcm9qZWN0Vmlld1xuICAgICAgICBdLFxuICAgICAgY2NhaVNlcnZpY2VGaWx0ZXI6IHRoaXMuY2NhaVNlcnZpY2VGaWx0ZXJcbiAgICAgICAgPyB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG5sdVByb2plY3ROYW1lOiB0aGlzLm5sdVByb2plY3ROYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRDY2FpUHJvamVjdFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdldENjYWlQcm9qZWN0UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNjYWlQcm9qZWN0VmlldzogQ2NhaVByb2plY3RWaWV3O1xuICAgIGNjYWlTZXJ2aWNlRmlsdGVyPzogQ2NhaVNlcnZpY2VGaWx0ZXIuQXNPYmplY3Q7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRDY2FpUHJvamVjdFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjY2FpUHJvamVjdFZpZXc6IHN0cmluZztcbiAgICBjY2FpU2VydmljZUZpbHRlcjogQ2NhaVNlcnZpY2VGaWx0ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG5sdVByb2plY3ROYW1lOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lkxpc3RDY2FpUHJvamVjdHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTGlzdENjYWlQcm9qZWN0c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdCgpO1xuICAgIExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdENjYWlQcm9qZWN0c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuY2NhaVByb2plY3RWaWV3ID0gX2luc3RhbmNlLmNjYWlQcm9qZWN0VmlldyB8fCAwO1xuICAgIF9pbnN0YW5jZS5jY2FpU2VydmljZUZpbHRlciA9IF9pbnN0YW5jZS5jY2FpU2VydmljZUZpbHRlciB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0U29ydGluZyA9IF9pbnN0YW5jZS5jY2FpUHJvamVjdFNvcnRpbmcgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VGaWx0ZXIgPSBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyLFxuICAgICAgICAgICAgQ2NhaVNlcnZpY2VGaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFNvcnRpbmcgPSBuZXcgQ2NhaVByb2plY3RTb3J0aW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdFNvcnRpbmcsXG4gICAgICAgICAgICBDY2FpUHJvamVjdFNvcnRpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdENjYWlQcm9qZWN0c1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jY2FpUHJvamVjdFZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5jY2FpUHJvamVjdFZpZXcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyIGFzIGFueSxcbiAgICAgICAgQ2NhaVNlcnZpY2VGaWx0ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2NhaVByb2plY3RTb3J0aW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0U29ydGluZyBhcyBhbnksXG4gICAgICAgIENjYWlQcm9qZWN0U29ydGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jY2FpUHJvamVjdFZpZXc6IENjYWlQcm9qZWN0VmlldztcbiAgcHJpdmF0ZSBfY2NhaVNlcnZpY2VGaWx0ZXI/OiBDY2FpU2VydmljZUZpbHRlcjtcbiAgcHJpdmF0ZSBfY2NhaVByb2plY3RTb3J0aW5nPzogQ2NhaVByb2plY3RTb3J0aW5nO1xuICBwcml2YXRlIF9wYWdlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBfbmx1UHJvamVjdE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNjYWlQcm9qZWN0VmlldyA9IF92YWx1ZS5jY2FpUHJvamVjdFZpZXc7XG4gICAgdGhpcy5jY2FpU2VydmljZUZpbHRlciA9IF92YWx1ZS5jY2FpU2VydmljZUZpbHRlclxuICAgICAgPyBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoX3ZhbHVlLmNjYWlTZXJ2aWNlRmlsdGVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jY2FpUHJvamVjdFNvcnRpbmcgPSBfdmFsdWUuY2NhaVByb2plY3RTb3J0aW5nXG4gICAgICA/IG5ldyBDY2FpUHJvamVjdFNvcnRpbmcoX3ZhbHVlLmNjYWlQcm9qZWN0U29ydGluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVRva2VuID0gX3ZhbHVlLnBhZ2VUb2tlbjtcbiAgICB0aGlzLm5sdVByb2plY3ROYW1lID0gX3ZhbHVlLm5sdVByb2plY3ROYW1lO1xuICAgIExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2NhaVByb2plY3RWaWV3KCk6IENjYWlQcm9qZWN0VmlldyB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0VmlldztcbiAgfVxuICBzZXQgY2NhaVByb2plY3RWaWV3KHZhbHVlOiBDY2FpUHJvamVjdFZpZXcpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdFZpZXcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VGaWx0ZXIoKTogQ2NhaVNlcnZpY2VGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jY2FpU2VydmljZUZpbHRlcjtcbiAgfVxuICBzZXQgY2NhaVNlcnZpY2VGaWx0ZXIodmFsdWU6IENjYWlTZXJ2aWNlRmlsdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2NhaVNlcnZpY2VGaWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVByb2plY3RTb3J0aW5nKCk6IENjYWlQcm9qZWN0U29ydGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0U29ydGluZztcbiAgfVxuICBzZXQgY2NhaVByb2plY3RTb3J0aW5nKHZhbHVlOiBDY2FpUHJvamVjdFNvcnRpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdFNvcnRpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFnZVRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VUb2tlbjtcbiAgfVxuICBzZXQgcGFnZVRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmx1UHJvamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmx1UHJvamVjdE5hbWU7XG4gIH1cbiAgc2V0IG5sdVByb2plY3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ubHVQcm9qZWN0TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2NhaVByb2plY3RWaWV3OiB0aGlzLmNjYWlQcm9qZWN0VmlldyxcbiAgICAgIGNjYWlTZXJ2aWNlRmlsdGVyOiB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyXG4gICAgICAgID8gdGhpcy5jY2FpU2VydmljZUZpbHRlci50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2NhaVByb2plY3RTb3J0aW5nOiB0aGlzLmNjYWlQcm9qZWN0U29ydGluZ1xuICAgICAgICA/IHRoaXMuY2NhaVByb2plY3RTb3J0aW5nLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuLFxuICAgICAgbmx1UHJvamVjdE5hbWU6IHRoaXMubmx1UHJvamVjdE5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlQcm9qZWN0VmlldzpcbiAgICAgICAgQ2NhaVByb2plY3RWaWV3W1xuICAgICAgICAgIHRoaXMuY2NhaVByb2plY3RWaWV3ID09PSBudWxsIHx8IHRoaXMuY2NhaVByb2plY3RWaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmNjYWlQcm9qZWN0Vmlld1xuICAgICAgICBdLFxuICAgICAgY2NhaVNlcnZpY2VGaWx0ZXI6IHRoaXMuY2NhaVNlcnZpY2VGaWx0ZXJcbiAgICAgICAgPyB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNjYWlQcm9qZWN0U29ydGluZzogdGhpcy5jY2FpUHJvamVjdFNvcnRpbmdcbiAgICAgICAgPyB0aGlzLmNjYWlQcm9qZWN0U29ydGluZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuLFxuICAgICAgbmx1UHJvamVjdE5hbWU6IHRoaXMubmx1UHJvamVjdE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RDY2FpUHJvamVjdHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2NhaVByb2plY3RWaWV3OiBDY2FpUHJvamVjdFZpZXc7XG4gICAgY2NhaVNlcnZpY2VGaWx0ZXI/OiBDY2FpU2VydmljZUZpbHRlci5Bc09iamVjdDtcbiAgICBjY2FpUHJvamVjdFNvcnRpbmc/OiBDY2FpUHJvamVjdFNvcnRpbmcuQXNPYmplY3Q7XG4gICAgcGFnZVRva2VuOiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Q2NhaVByb2plY3RzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2NhaVByb2plY3RWaWV3OiBzdHJpbmc7XG4gICAgY2NhaVNlcnZpY2VGaWx0ZXI6IENjYWlTZXJ2aWNlRmlsdGVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjY2FpUHJvamVjdFNvcnRpbmc6IENjYWlQcm9qZWN0U29ydGluZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGFnZVRva2VuOiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdENjYWlQcm9qZWN0c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0Q2NhaVByb2plY3RzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkxpc3RDY2FpUHJvamVjdHNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RDY2FpUHJvamVjdHNSZXNwb25zZSgpO1xuICAgIExpc3RDY2FpUHJvamVjdHNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RDY2FpUHJvamVjdHNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdHMgPSBfaW5zdGFuY2UuY2NhaVByb2plY3RzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gX2luc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Q2NhaVByb2plY3RzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBDY2FpUHJvamVjdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgQ2NhaVByb2plY3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNjYWlQcm9qZWN0cyA9IF9pbnN0YW5jZS5jY2FpUHJvamVjdHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Q2NhaVByb2plY3RzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Q2NhaVByb2plY3RzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2NhaVByb2plY3RzICYmIF9pbnN0YW5jZS5jY2FpUHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2NhaVByb2plY3RzIGFzIGFueSxcbiAgICAgICAgQ2NhaVByb2plY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2NhaVByb2plY3RzPzogQ2NhaVByb2plY3RbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdENjYWlQcm9qZWN0c1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RDY2FpUHJvamVjdHNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jY2FpUHJvamVjdHMgPSAoX3ZhbHVlLmNjYWlQcm9qZWN0cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgQ2NhaVByb2plY3QobSlcbiAgICApO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IF92YWx1ZS5uZXh0UGFnZVRva2VuO1xuICAgIExpc3RDY2FpUHJvamVjdHNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNjYWlQcm9qZWN0cygpOiBDY2FpUHJvamVjdFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2NhaVByb2plY3RzO1xuICB9XG4gIHNldCBjY2FpUHJvamVjdHModmFsdWU6IENjYWlQcm9qZWN0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dFBhZ2VUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uZXh0UGFnZVRva2VuO1xuICB9XG4gIHNldCBuZXh0UGFnZVRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXh0UGFnZVRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdENjYWlQcm9qZWN0c1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RDY2FpUHJvamVjdHNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlQcm9qZWN0czogKHRoaXMuY2NhaVByb2plY3RzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdENjYWlQcm9qZWN0c1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2NhaVByb2plY3RzOiAodGhpcy5jY2FpUHJvamVjdHMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RDY2FpUHJvamVjdHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdENjYWlQcm9qZWN0c1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjY2FpUHJvamVjdHM/OiBDY2FpUHJvamVjdC5Bc09iamVjdFtdO1xuICAgIG5leHRQYWdlVG9rZW46IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Q2NhaVByb2plY3RzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNjYWlQcm9qZWN0czogQ2NhaVByb2plY3QuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV4dFBhZ2VUb2tlbjogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DY2FpUHJvamVjdFNvcnRpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIENjYWlQcm9qZWN0U29ydGluZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2NhaVByb2plY3RTb3J0aW5nJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2NhaVByb2plY3RTb3J0aW5nKCk7XG4gICAgQ2NhaVByb2plY3RTb3J0aW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2NhaVByb2plY3RTb3J0aW5nKSB7XG4gICAgX2luc3RhbmNlLnNvcnRpbmdGaWVsZCA9IF9pbnN0YW5jZS5zb3J0aW5nRmllbGQgfHwgMDtcbiAgICBfaW5zdGFuY2Uuc29ydGluZ01vZGUgPSBfaW5zdGFuY2Uuc29ydGluZ01vZGUgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENjYWlQcm9qZWN0U29ydGluZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNvcnRpbmdNb2RlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2NhaVByb2plY3RTb3J0aW5nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVByb2plY3RTb3J0aW5nLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNvcnRpbmdGaWVsZCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLnNvcnRpbmdGaWVsZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc29ydGluZ01vZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5zb3J0aW5nTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc29ydGluZ0ZpZWxkOiBDY2FpUHJvamVjdFNvcnRpbmcuQ2NhaVByb2plY3RTb3J0aW5nRmllbGQ7XG4gIHByaXZhdGUgX3NvcnRpbmdNb2RlOiBvbmRld29ObHUwMDMuU29ydGluZ01vZGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDY2FpUHJvamVjdFNvcnRpbmcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2NhaVByb2plY3RTb3J0aW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNvcnRpbmdGaWVsZCA9IF92YWx1ZS5zb3J0aW5nRmllbGQ7XG4gICAgdGhpcy5zb3J0aW5nTW9kZSA9IF92YWx1ZS5zb3J0aW5nTW9kZTtcbiAgICBDY2FpUHJvamVjdFNvcnRpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzb3J0aW5nRmllbGQoKTogQ2NhaVByb2plY3RTb3J0aW5nLkNjYWlQcm9qZWN0U29ydGluZ0ZpZWxkIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGluZ0ZpZWxkO1xuICB9XG4gIHNldCBzb3J0aW5nRmllbGQodmFsdWU6IENjYWlQcm9qZWN0U29ydGluZy5DY2FpUHJvamVjdFNvcnRpbmdGaWVsZCkge1xuICAgIHRoaXMuX3NvcnRpbmdGaWVsZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzb3J0aW5nTW9kZSgpOiBvbmRld29ObHUwMDMuU29ydGluZ01vZGUge1xuICAgIHJldHVybiB0aGlzLl9zb3J0aW5nTW9kZTtcbiAgfVxuICBzZXQgc29ydGluZ01vZGUodmFsdWU6IG9uZGV3b05sdTAwMy5Tb3J0aW5nTW9kZSkge1xuICAgIHRoaXMuX3NvcnRpbmdNb2RlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2NhaVByb2plY3RTb3J0aW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENjYWlQcm9qZWN0U29ydGluZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcnRpbmdGaWVsZDogdGhpcy5zb3J0aW5nRmllbGQsXG4gICAgICBzb3J0aW5nTW9kZTogdGhpcy5zb3J0aW5nTW9kZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENjYWlQcm9qZWN0U29ydGluZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcnRpbmdGaWVsZDpcbiAgICAgICAgQ2NhaVByb2plY3RTb3J0aW5nLkNjYWlQcm9qZWN0U29ydGluZ0ZpZWxkW1xuICAgICAgICAgIHRoaXMuc29ydGluZ0ZpZWxkID09PSBudWxsIHx8IHRoaXMuc29ydGluZ0ZpZWxkID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnNvcnRpbmdGaWVsZFxuICAgICAgICBdLFxuICAgICAgc29ydGluZ01vZGU6XG4gICAgICAgIG9uZGV3b05sdTAwMy5Tb3J0aW5nTW9kZVtcbiAgICAgICAgICB0aGlzLnNvcnRpbmdNb2RlID09PSBudWxsIHx8IHRoaXMuc29ydGluZ01vZGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc29ydGluZ01vZGVcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2NhaVByb2plY3RTb3J0aW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDY2FpUHJvamVjdFNvcnRpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNvcnRpbmdGaWVsZDogQ2NhaVByb2plY3RTb3J0aW5nLkNjYWlQcm9qZWN0U29ydGluZ0ZpZWxkO1xuICAgIHNvcnRpbmdNb2RlOiBvbmRld29ObHUwMDMuU29ydGluZ01vZGU7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2NhaVByb2plY3RTb3J0aW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzb3J0aW5nRmllbGQ6IHN0cmluZztcbiAgICBzb3J0aW5nTW9kZTogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIENjYWlQcm9qZWN0U29ydGluZ0ZpZWxkIHtcbiAgICBOT19DQ0FJX1BST0pFQ1RfU09SVElORyA9IDAsXG4gICAgU09SVF9DQ0FJX1BST0pFQ1RfQllfTkFNRSA9IDEsXG4gICAgU09SVF9DQ0FJX1BST0pFQ1RfQllfRElTUExBWV9OQU1FID0gMixcbiAgICBTT1JUX0NDQUlfUFJPSkVDVF9CWV9DUkVBVElPTl9EQVRFID0gMyxcbiAgICBTT1JUX0NDQUlfUFJPSkVDVF9CWV9MQVNUX01PRElGSUVEID0gNFxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DY2FpU2VydmljZUZpbHRlclxuICovXG5leHBvcnQgY2xhc3MgQ2NhaVNlcnZpY2VGaWx0ZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNjYWlTZXJ2aWNlRmlsdGVyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoKTtcbiAgICBDY2FpU2VydmljZUZpbHRlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENjYWlTZXJ2aWNlRmlsdGVyKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VUeXBlcyA9IF9pbnN0YW5jZS5jY2FpU2VydmljZVR5cGVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVNlcnZpY2VGaWx0ZXIsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLmNjYWlTZXJ2aWNlVHlwZXMgPSBfaW5zdGFuY2UuY2NhaVNlcnZpY2VUeXBlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRFbnVtKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENjYWlTZXJ2aWNlRmlsdGVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2NhaVNlcnZpY2VGaWx0ZXIsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2NhaVNlcnZpY2VUeXBlcyAmJiBfaW5zdGFuY2UuY2NhaVNlcnZpY2VUeXBlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDIsIF9pbnN0YW5jZS5jY2FpU2VydmljZVR5cGVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZUNvZGVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY2NhaVNlcnZpY2VUeXBlczogQ2NhaVNlcnZpY2VUeXBlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDY2FpU2VydmljZUZpbHRlciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDY2FpU2VydmljZUZpbHRlci5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZUNvZGVzID0gKF92YWx1ZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuY2NhaVNlcnZpY2VUeXBlcyA9IChfdmFsdWUuY2NhaVNlcnZpY2VUeXBlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBDY2FpU2VydmljZUZpbHRlci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGVzO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NhaVNlcnZpY2VUeXBlcygpOiBDY2FpU2VydmljZVR5cGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlTZXJ2aWNlVHlwZXM7XG4gIH1cbiAgc2V0IGNjYWlTZXJ2aWNlVHlwZXModmFsdWU6IENjYWlTZXJ2aWNlVHlwZVtdKSB7XG4gICAgdGhpcy5fY2NhaVNlcnZpY2VUeXBlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENjYWlTZXJ2aWNlRmlsdGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENjYWlTZXJ2aWNlRmlsdGVyLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VDb2RlczogKHRoaXMubGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGNjYWlTZXJ2aWNlVHlwZXM6ICh0aGlzLmNjYWlTZXJ2aWNlVHlwZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDY2FpU2VydmljZUZpbHRlci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBjY2FpU2VydmljZVR5cGVzOiAodGhpcy5jY2FpU2VydmljZVR5cGVzIHx8IFtdKS5tYXAoXG4gICAgICAgIHYgPT4gQ2NhaVNlcnZpY2VUeXBlW3ZdXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDY2FpU2VydmljZUZpbHRlciB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2NhaVNlcnZpY2VGaWx0ZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlQ29kZXM6IHN0cmluZ1tdO1xuICAgIGNjYWlTZXJ2aWNlVHlwZXM6IENjYWlTZXJ2aWNlVHlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENjYWlTZXJ2aWNlRmlsdGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZUNvZGVzOiBzdHJpbmdbXTtcbiAgICBjY2FpU2VydmljZVR5cGVzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVXBkYXRlQ2NhaVByb2plY3RSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdCgpO1xuICAgIFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdCA9IF9pbnN0YW5jZS5jY2FpUHJvamVjdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyID0gX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudXBkYXRlTWFzayA9IF9pbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgPSBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNjYWlQcm9qZWN0ID0gbmV3IENjYWlQcm9qZWN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jY2FpUHJvamVjdCxcbiAgICAgICAgICAgIENjYWlQcm9qZWN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2NhaVNlcnZpY2VGaWx0ZXIgPSBuZXcgQ2NhaVNlcnZpY2VGaWx0ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNjYWlTZXJ2aWNlRmlsdGVyLFxuICAgICAgICAgICAgQ2NhaVNlcnZpY2VGaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzay5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2NhaVByb2plY3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2NhaVByb2plY3QgYXMgYW55LFxuICAgICAgICBDY2FpUHJvamVjdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jY2FpU2VydmljZUZpbHRlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5jY2FpU2VydmljZUZpbHRlciBhcyBhbnksXG4gICAgICAgIENjYWlTZXJ2aWNlRmlsdGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVwZGF0ZU1hc2spIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NjYWlQcm9qZWN0PzogQ2NhaVByb2plY3Q7XG4gIHByaXZhdGUgX2NjYWlTZXJ2aWNlRmlsdGVyPzogQ2NhaVNlcnZpY2VGaWx0ZXI7XG4gIHByaXZhdGUgX3VwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2s7XG4gIHByaXZhdGUgX25sdVByb2plY3ROYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VXBkYXRlQ2NhaVByb2plY3RSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNjYWlQcm9qZWN0ID0gX3ZhbHVlLmNjYWlQcm9qZWN0XG4gICAgICA/IG5ldyBDY2FpUHJvamVjdChfdmFsdWUuY2NhaVByb2plY3QpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyID0gX3ZhbHVlLmNjYWlTZXJ2aWNlRmlsdGVyXG4gICAgICA/IG5ldyBDY2FpU2VydmljZUZpbHRlcihfdmFsdWUuY2NhaVNlcnZpY2VGaWx0ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSBfdmFsdWUudXBkYXRlTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrKF92YWx1ZS51cGRhdGVNYXNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjY2FpUHJvamVjdCgpOiBDY2FpUHJvamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlQcm9qZWN0O1xuICB9XG4gIHNldCBjY2FpUHJvamVjdCh2YWx1ZTogQ2NhaVByb2plY3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpUHJvamVjdCA9IHZhbHVlO1xuICB9XG4gIGdldCBjY2FpU2VydmljZUZpbHRlcigpOiBDY2FpU2VydmljZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NjYWlTZXJ2aWNlRmlsdGVyO1xuICB9XG4gIHNldCBjY2FpU2VydmljZUZpbHRlcih2YWx1ZTogQ2NhaVNlcnZpY2VGaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY2FpU2VydmljZUZpbHRlciA9IHZhbHVlO1xuICB9XG4gIGdldCB1cGRhdGVNYXNrKCk6IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZU1hc2s7XG4gIH1cbiAgc2V0IHVwZGF0ZU1hc2sodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzayB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VwZGF0ZU1hc2sgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmx1UHJvamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmx1UHJvamVjdE5hbWU7XG4gIH1cbiAgc2V0IG5sdVByb2plY3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ubHVQcm9qZWN0TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjY2FpUHJvamVjdDogdGhpcy5jY2FpUHJvamVjdCA/IHRoaXMuY2NhaVByb2plY3QudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNjYWlTZXJ2aWNlRmlsdGVyOiB0aGlzLmNjYWlTZXJ2aWNlRmlsdGVyXG4gICAgICAgID8gdGhpcy5jY2FpU2VydmljZUZpbHRlci50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBubHVQcm9qZWN0TmFtZTogdGhpcy5ubHVQcm9qZWN0TmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNjYWlQcm9qZWN0OiB0aGlzLmNjYWlQcm9qZWN0XG4gICAgICAgID8gdGhpcy5jY2FpUHJvamVjdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjY2FpU2VydmljZUZpbHRlcjogdGhpcy5jY2FpU2VydmljZUZpbHRlclxuICAgICAgICA/IHRoaXMuY2NhaVNlcnZpY2VGaWx0ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrXG4gICAgICAgID8gdGhpcy51cGRhdGVNYXNrLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG5sdVByb2plY3ROYW1lOiB0aGlzLm5sdVByb2plY3ROYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVwZGF0ZUNjYWlQcm9qZWN0UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2NhaVByb2plY3Q/OiBDY2FpUHJvamVjdC5Bc09iamVjdDtcbiAgICBjY2FpU2VydmljZUZpbHRlcj86IENjYWlTZXJ2aWNlRmlsdGVyLkFzT2JqZWN0O1xuICAgIHVwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2suQXNPYmplY3Q7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVDY2FpUHJvamVjdFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNjYWlQcm9qZWN0OiBDY2FpUHJvamVjdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2NhaVNlcnZpY2VGaWx0ZXI6IENjYWlTZXJ2aWNlRmlsdGVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB1cGRhdGVNYXNrOiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2suQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG5sdVByb2plY3ROYW1lOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlKCk7XG4gICAgVXBkYXRlQ2NhaVByb2plY3RSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgPSBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVXBkYXRlQ2NhaVByb2plY3RSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVycm9yTWVzc2FnZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlQ2NhaVByb2plY3RSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gX3ZhbHVlLmVycm9yTWVzc2FnZTtcbiAgICBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2U7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXBkYXRlQ2NhaVByb2plY3RSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmVycm9yTWVzc2FnZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFVwZGF0ZUNjYWlQcm9qZWN0UmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZXJyb3JNZXNzYWdlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVDY2FpUHJvamVjdFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlQ2NhaVByb2plY3RSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5EZWxldGVDY2FpUHJvamVjdFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGV0ZUNjYWlQcm9qZWN0UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0KCk7XG4gICAgRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgPSBfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVDY2FpUHJvamVjdFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5sdVByb2plY3ROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5ubHVQcm9qZWN0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9ubHVQcm9qZWN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlbGV0ZUNjYWlQcm9qZWN0UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBEZWxldGVDY2FpUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmx1UHJvamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmx1UHJvamVjdE5hbWU7XG4gIH1cbiAgc2V0IG5sdVByb2plY3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ubHVQcm9qZWN0TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERlbGV0ZUNjYWlQcm9qZWN0UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZWxldGVDY2FpUHJvamVjdFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBubHVQcm9qZWN0TmFtZTogdGhpcy5ubHVQcm9qZWN0TmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IERlbGV0ZUNjYWlQcm9qZWN0UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5sdVByb2plY3ROYW1lOiB0aGlzLm5sdVByb2plY3ROYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVDY2FpUHJvamVjdFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZUNjYWlQcm9qZWN0UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG5sdVByb2plY3ROYW1lOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRGVsZXRlQ2NhaVByb2plY3RSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZUNjYWlQcm9qZWN0UmVzcG9uc2UoKTtcbiAgICBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmVycm9yTWVzc2FnZSA9IF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lID0gX2luc3RhbmNlLm5sdVByb2plY3ROYW1lIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVycm9yTWVzc2FnZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmVycm9yTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubmx1UHJvamVjdE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLm5sdVByb2plY3ROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIF9ubHVQcm9qZWN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGVsZXRlQ2NhaVByb2plY3RSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IF92YWx1ZS5lcnJvck1lc3NhZ2U7XG4gICAgdGhpcy5ubHVQcm9qZWN0TmFtZSA9IF92YWx1ZS5ubHVQcm9qZWN0TmFtZTtcbiAgICBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2U7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5sdVByb2plY3ROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25sdVByb2plY3ROYW1lO1xuICB9XG4gIHNldCBubHVQcm9qZWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmx1UHJvamVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IERlbGV0ZUNjYWlQcm9qZWN0UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZXJyb3JNZXNzYWdlLFxuICAgICAgbmx1UHJvamVjdE5hbWU6IHRoaXMubmx1UHJvamVjdE5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmVycm9yTWVzc2FnZSxcbiAgICAgIG5sdVByb2plY3ROYW1lOiB0aGlzLm5sdVByb2plY3ROYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVDY2FpUHJvamVjdFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbmx1UHJvamVjdE5hbWU6IHN0cmluZztcbiAgfVxufVxuIl19