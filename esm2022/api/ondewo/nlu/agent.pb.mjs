/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/project-role.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu017 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu018 from '../../ondewo/nlu/session.pb';
export var AgentView;
(function (AgentView) {
    AgentView[AgentView["AGENT_VIEW_UNSPECIFIED"] = 0] = "AGENT_VIEW_UNSPECIFIED";
    AgentView[AgentView["AGENT_VIEW_FULL"] = 1] = "AGENT_VIEW_FULL";
    AgentView[AgentView["AGENT_VIEW_SHALLOW"] = 2] = "AGENT_VIEW_SHALLOW";
    AgentView[AgentView["AGENT_VIEW_MINIMUM"] = 3] = "AGENT_VIEW_MINIMUM";
})(AgentView || (AgentView = {}));
export var InitiationProtocol;
(function (InitiationProtocol) {
    InitiationProtocol[InitiationProtocol["AS_SOON_AS_POSSIBLE"] = 0] = "AS_SOON_AS_POSSIBLE";
    InitiationProtocol[InitiationProtocol["WHEN_TRAINED"] = 1] = "WHEN_TRAINED";
    InitiationProtocol[InitiationProtocol["NEVER"] = 2] = "NEVER";
})(InitiationProtocol || (InitiationProtocol = {}));
export var ReportType;
(function (ReportType) {
    ReportType[ReportType["ALL"] = 0] = "ALL";
    ReportType[ReportType["INTENT_PER_LANGUAGE"] = 1] = "INTENT_PER_LANGUAGE";
    ReportType[ReportType["ENTITY_PER_LANGUAGE"] = 2] = "ENTITY_PER_LANGUAGE";
    ReportType[ReportType["ENTITY_COLLISION"] = 3] = "ENTITY_COLLISION";
    ReportType[ReportType["INTENT_GENERAL"] = 4] = "INTENT_GENERAL";
})(ReportType || (ReportType = {}));
export var SessionsReportType;
(function (SessionsReportType) {
    SessionsReportType[SessionsReportType["SESSIONS"] = 0] = "SESSIONS";
    SessionsReportType[SessionsReportType["SESSION_STEPS"] = 1] = "SESSION_STEPS";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_INTENTS"] = 2] = "SESSION_TOP_X_INTENTS";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_ENTITY_TYPES"] = 3] = "SESSION_TOP_X_ENTITY_TYPES";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_ENTITY_VALUES"] = 4] = "SESSION_TOP_X_ENTITY_VALUES";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_USERS"] = 5] = "SESSION_TOP_X_USERS";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_LABELS"] = 6] = "SESSION_TOP_X_LABELS";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_TAGS"] = 7] = "SESSION_TOP_X_TAGS";
    SessionsReportType[SessionsReportType["SESSION_TOP_X_PHONE_NUMBERS"] = 8] = "SESSION_TOP_X_PHONE_NUMBERS";
    SessionsReportType[SessionsReportType["SESSION_HUMAN_HANDOVERS"] = 9] = "SESSION_HUMAN_HANDOVERS";
    SessionsReportType[SessionsReportType["SESSION_SQL_QUERY"] = 10] = "SESSION_SQL_QUERY";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_INTENTS"] = 11] = "SESSION_LEAST_X_INTENTS";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_ENTITY_TYPES"] = 12] = "SESSION_LEAST_X_ENTITY_TYPES";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_ENTITY_VALUES"] = 13] = "SESSION_LEAST_X_ENTITY_VALUES";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_USERS"] = 14] = "SESSION_LEAST_X_USERS";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_LABELS"] = 15] = "SESSION_LEAST_X_LABELS";
    SessionsReportType[SessionsReportType["SESSION_LEAST_X_TAGS"] = 16] = "SESSION_LEAST_X_TAGS";
    SessionsReportType[SessionsReportType["TOTAL_STATISTICS"] = 17] = "TOTAL_STATISTICS";
})(SessionsReportType || (SessionsReportType = {}));
export var ReportFormat;
(function (ReportFormat) {
    ReportFormat[ReportFormat["CSV"] = 0] = "CSV";
    ReportFormat[ReportFormat["HTML"] = 1] = "HTML";
    ReportFormat[ReportFormat["JSON"] = 2] = "JSON";
})(ReportFormat || (ReportFormat = {}));
export var AgentStatus;
(function (AgentStatus) {
    AgentStatus[AgentStatus["ACTIVE"] = 0] = "ACTIVE";
    AgentStatus[AgentStatus["INACTIVE"] = 1] = "INACTIVE";
})(AgentStatus || (AgentStatus = {}));
/**
 * Message implementation for ondewo.nlu.Agent
 */
export class Agent {
    static { this.id = 'ondewo.nlu.Agent'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Agent();
        Agent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.displayName = _instance.displayName || '';
        _instance.defaultLanguageCode = _instance.defaultLanguageCode || '';
        _instance.supportedLanguageCodes = _instance.supportedLanguageCodes || [];
        _instance.timeZone = _instance.timeZone || '';
        _instance.nluPlatform = _instance.nluPlatform || '';
        _instance.configs = _instance.configs || undefined;
        _instance.ownerId = _instance.ownerId || '';
        _instance.status = _instance.status || 0;
        _instance.description = _instance.description || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.displayName = _reader.readString();
                    break;
                case 3:
                    _instance.defaultLanguageCode = _reader.readString();
                    break;
                case 4:
                    (_instance.supportedLanguageCodes =
                        _instance.supportedLanguageCodes || []).push(_reader.readString());
                    break;
                case 5:
                    _instance.timeZone = _reader.readString();
                    break;
                case 6:
                    _instance.nluPlatform = _reader.readString();
                    break;
                case 7:
                    _instance.configs = new googleProtobuf009.Struct();
                    _reader.readMessage(_instance.configs, googleProtobuf009.Struct.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.ownerId = _reader.readString();
                    break;
                case 9:
                    _instance.status = _reader.readEnum();
                    break;
                case 10:
                    _instance.description = _reader.readString();
                    break;
                case 11:
                    _instance.createdAt = new googleProtobuf003.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.modifiedAt = new googleProtobuf003.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.createdBy = _reader.readString();
                    break;
                case 14:
                    _instance.modifiedBy = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Agent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.displayName) {
            _writer.writeString(2, _instance.displayName);
        }
        if (_instance.defaultLanguageCode) {
            _writer.writeString(3, _instance.defaultLanguageCode);
        }
        if (_instance.supportedLanguageCodes &&
            _instance.supportedLanguageCodes.length) {
            _writer.writeRepeatedString(4, _instance.supportedLanguageCodes);
        }
        if (_instance.timeZone) {
            _writer.writeString(5, _instance.timeZone);
        }
        if (_instance.nluPlatform) {
            _writer.writeString(6, _instance.nluPlatform);
        }
        if (_instance.configs) {
            _writer.writeMessage(7, _instance.configs, googleProtobuf009.Struct.serializeBinaryToWriter);
        }
        if (_instance.ownerId) {
            _writer.writeString(8, _instance.ownerId);
        }
        if (_instance.status) {
            _writer.writeEnum(9, _instance.status);
        }
        if (_instance.description) {
            _writer.writeString(10, _instance.description);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(11, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(12, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.createdBy) {
            _writer.writeString(13, _instance.createdBy);
        }
        if (_instance.modifiedBy) {
            _writer.writeString(14, _instance.modifiedBy);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Agent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.displayName = _value.displayName;
        this.defaultLanguageCode = _value.defaultLanguageCode;
        this.supportedLanguageCodes = (_value.supportedLanguageCodes || []).slice();
        this.timeZone = _value.timeZone;
        this.nluPlatform = _value.nluPlatform;
        this.configs = _value.configs
            ? new googleProtobuf009.Struct(_value.configs)
            : undefined;
        this.ownerId = _value.ownerId;
        this.status = _value.status;
        this.description = _value.description;
        this.createdAt = _value.createdAt
            ? new googleProtobuf003.Timestamp(_value.createdAt)
            : undefined;
        this.modifiedAt = _value.modifiedAt
            ? new googleProtobuf003.Timestamp(_value.modifiedAt)
            : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        Agent.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get defaultLanguageCode() {
        return this._defaultLanguageCode;
    }
    set defaultLanguageCode(value) {
        this._defaultLanguageCode = value;
    }
    get supportedLanguageCodes() {
        return this._supportedLanguageCodes;
    }
    set supportedLanguageCodes(value) {
        this._supportedLanguageCodes = value;
    }
    get timeZone() {
        return this._timeZone;
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    get nluPlatform() {
        return this._nluPlatform;
    }
    set nluPlatform(value) {
        this._nluPlatform = value;
    }
    get configs() {
        return this._configs;
    }
    set configs(value) {
        this._configs = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
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
        Agent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            displayName: this.displayName,
            defaultLanguageCode: this.defaultLanguageCode,
            supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
            timeZone: this.timeZone,
            nluPlatform: this.nluPlatform,
            configs: this.configs ? this.configs.toObject() : undefined,
            ownerId: this.ownerId,
            status: this.status,
            description: this.description,
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
            parent: this.parent,
            displayName: this.displayName,
            defaultLanguageCode: this.defaultLanguageCode,
            supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
            timeZone: this.timeZone,
            nluPlatform: this.nluPlatform,
            configs: this.configs ? this.configs.toProtobufJSON(options) : null,
            ownerId: this.ownerId,
            status: AgentStatus[this.status === null || this.status === undefined ? 0 : this.status],
            description: this.description,
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
 * Message implementation for ondewo.nlu.AgentWithOwner
 */
export class AgentWithOwner {
    static { this.id = 'ondewo.nlu.AgentWithOwner'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AgentWithOwner();
        AgentWithOwner.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agent = _instance.agent || undefined;
        _instance.owner = _instance.owner || undefined;
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
                    _instance.agent = new Agent();
                    _reader.readMessage(_instance.agent, Agent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.owner = new ondewoNlu017.User();
                    _reader.readMessage(_instance.owner, ondewoNlu017.User.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AgentWithOwner.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agent) {
            _writer.writeMessage(1, _instance.agent, Agent.serializeBinaryToWriter);
        }
        if (_instance.owner) {
            _writer.writeMessage(2, _instance.owner, ondewoNlu017.User.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentWithOwner to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agent = _value.agent ? new Agent(_value.agent) : undefined;
        this.owner = _value.owner ? new ondewoNlu017.User(_value.owner) : undefined;
        AgentWithOwner.refineValues(this);
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AgentWithOwner.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            owner: this.owner ? this.owner.toObject() : undefined
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
            agent: this.agent ? this.agent.toProtobufJSON(options) : null,
            owner: this.owner ? this.owner.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.AgentOfUserWithOwner
 */
export class AgentOfUserWithOwner {
    static { this.id = 'ondewo.nlu.AgentOfUserWithOwner'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AgentOfUserWithOwner();
        AgentOfUserWithOwner.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agentWithOwner = _instance.agentWithOwner || undefined;
        _instance.projectRole = _instance.projectRole || undefined;
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
                    _instance.agentWithOwner = new AgentWithOwner();
                    _reader.readMessage(_instance.agentWithOwner, AgentWithOwner.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.projectRole = new ondewoNlu010.ProjectRole();
                    _reader.readMessage(_instance.projectRole, ondewoNlu010.ProjectRole.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AgentOfUserWithOwner.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentWithOwner) {
            _writer.writeMessage(1, _instance.agentWithOwner, AgentWithOwner.serializeBinaryToWriter);
        }
        if (_instance.projectRole) {
            _writer.writeMessage(2, _instance.projectRole, ondewoNlu010.ProjectRole.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentOfUserWithOwner to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agentWithOwner = _value.agentWithOwner
            ? new AgentWithOwner(_value.agentWithOwner)
            : undefined;
        this.projectRole = _value.projectRole
            ? new ondewoNlu010.ProjectRole(_value.projectRole)
            : undefined;
        AgentOfUserWithOwner.refineValues(this);
    }
    get agentWithOwner() {
        return this._agentWithOwner;
    }
    set agentWithOwner(value) {
        this._agentWithOwner = value;
    }
    get projectRole() {
        return this._projectRole;
    }
    set projectRole(value) {
        this._projectRole = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AgentOfUserWithOwner.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentWithOwner: this.agentWithOwner
                ? this.agentWithOwner.toObject()
                : undefined,
            projectRole: this.projectRole ? this.projectRole.toObject() : undefined
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
            agentWithOwner: this.agentWithOwner
                ? this.agentWithOwner.toProtobufJSON(options)
                : null,
            projectRole: this.projectRole
                ? this.projectRole.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CreateAgentRequest
 */
export class CreateAgentRequest {
    static { this.id = 'ondewo.nlu.CreateAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateAgentRequest();
        CreateAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agent = _instance.agent || undefined;
        _instance.agentView = _instance.agentView || 0;
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
                    _instance.agent = new Agent();
                    _reader.readMessage(_instance.agent, Agent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.agentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agent) {
            _writer.writeMessage(1, _instance.agent, Agent.serializeBinaryToWriter);
        }
        if (_instance.agentView) {
            _writer.writeEnum(2, _instance.agentView);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agent = _value.agent ? new Agent(_value.agent) : undefined;
        this.agentView = _value.agentView;
        CreateAgentRequest.refineValues(this);
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView
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
            agent: this.agent ? this.agent.toProtobufJSON(options) : null,
            agentView: AgentView[this.agentView === null || this.agentView === undefined
                ? 0
                : this.agentView]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateAgentRequest
 */
export class UpdateAgentRequest {
    static { this.id = 'ondewo.nlu.UpdateAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateAgentRequest();
        UpdateAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agent = _instance.agent || undefined;
        _instance.agentView = _instance.agentView || 0;
        _instance.updateMask = _instance.updateMask || undefined;
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
                    _instance.agent = new Agent();
                    _reader.readMessage(_instance.agent, Agent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.agentView = _reader.readEnum();
                    break;
                case 3:
                    _instance.updateMask = new googleProtobuf002.FieldMask();
                    _reader.readMessage(_instance.updateMask, googleProtobuf002.FieldMask.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agent) {
            _writer.writeMessage(1, _instance.agent, Agent.serializeBinaryToWriter);
        }
        if (_instance.agentView) {
            _writer.writeEnum(2, _instance.agentView);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(3, _instance.updateMask, googleProtobuf002.FieldMask.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agent = _value.agent ? new Agent(_value.agent) : undefined;
        this.agentView = _value.agentView;
        this.updateMask = _value.updateMask
            ? new googleProtobuf002.FieldMask(_value.updateMask)
            : undefined;
        UpdateAgentRequest.refineValues(this);
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
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
            agent: this.agent ? this.agent.toProtobufJSON(options) : null,
            agentView: AgentView[this.agentView === null || this.agentView === undefined
                ? 0
                : this.agentView],
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteAgentRequest
 */
export class DeleteAgentRequest {
    static { this.id = 'ondewo.nlu.DeleteAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteAgentRequest();
        DeleteAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
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
                    _instance.parent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        DeleteAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent
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
            parent: this.parent
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetAgentRequest
 */
export class GetAgentRequest {
    static { this.id = 'ondewo.nlu.GetAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAgentRequest();
        GetAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.agentView = _instance.agentView || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.agentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.agentView) {
            _writer.writeEnum(2, _instance.agentView);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.agentView = _value.agentView;
        GetAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            agentView: this.agentView
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
            parent: this.parent,
            agentView: AgentView[this.agentView === null || this.agentView === undefined
                ? 0
                : this.agentView]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsRequest
 */
export class ListAgentsRequest {
    static { this.id = 'ondewo.nlu.ListAgentsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListAgentsRequest();
        ListAgentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agentView = _instance.agentView || 0;
        _instance.pageToken = _instance.pageToken || '';
        _instance.sortByField = _instance.sortByField || undefined;
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
                    _instance.agentView = _reader.readEnum();
                    break;
                case 2:
                    _instance.pageToken = _reader.readString();
                    break;
                case 3:
                    _instance.sortByField = new AgentSorting();
                    _reader.readMessage(_instance.sortByField, AgentSorting.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListAgentsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentView) {
            _writer.writeEnum(1, _instance.agentView);
        }
        if (_instance.pageToken) {
            _writer.writeString(2, _instance.pageToken);
        }
        if (_instance.sortByField) {
            _writer.writeMessage(3, _instance.sortByField, AgentSorting.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agentView = _value.agentView;
        this.pageToken = _value.pageToken;
        this.sortByField = _value.sortByField
            ? new AgentSorting(_value.sortByField)
            : undefined;
        ListAgentsRequest.refineValues(this);
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListAgentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentView: this.agentView,
            pageToken: this.pageToken,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
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
            agentView: AgentView[this.agentView === null || this.agentView === undefined
                ? 0
                : this.agentView],
            pageToken: this.pageToken,
            sortByField: this.sortByField
                ? this.sortByField.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsResponse
 */
export class ListAgentsResponse {
    static { this.id = 'ondewo.nlu.ListAgentsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListAgentsResponse();
        ListAgentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agentsWithOwners = _instance.agentsWithOwners || [];
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
                    const messageInitializer1 = new AgentWithOwner();
                    _reader.readMessage(messageInitializer1, AgentWithOwner.deserializeBinaryFromReader);
                    (_instance.agentsWithOwners = _instance.agentsWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListAgentsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentsWithOwners && _instance.agentsWithOwners.length) {
            _writer.writeRepeatedMessage(1, _instance.agentsWithOwners, AgentWithOwner.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agentsWithOwners = (_value.agentsWithOwners || []).map(m => new AgentWithOwner(m));
        this.nextPageToken = _value.nextPageToken;
        ListAgentsResponse.refineValues(this);
    }
    get agentsWithOwners() {
        return this._agentsWithOwners;
    }
    set agentsWithOwners(value) {
        this._agentsWithOwners = value;
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
        ListAgentsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentsWithOwners: (this.agentsWithOwners || []).map(m => m.toObject()),
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
            agentsWithOwners: (this.agentsWithOwners || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListAgentsOfUserResponse
 */
export class ListAgentsOfUserResponse {
    static { this.id = 'ondewo.nlu.ListAgentsOfUserResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListAgentsOfUserResponse();
        ListAgentsOfUserResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agentsOfUserWithOwners = _instance.agentsOfUserWithOwners || [];
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
                    const messageInitializer1 = new AgentOfUserWithOwner();
                    _reader.readMessage(messageInitializer1, AgentOfUserWithOwner.deserializeBinaryFromReader);
                    (_instance.agentsOfUserWithOwners =
                        _instance.agentsOfUserWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListAgentsOfUserResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentsOfUserWithOwners &&
            _instance.agentsOfUserWithOwners.length) {
            _writer.writeRepeatedMessage(1, _instance.agentsOfUserWithOwners, AgentOfUserWithOwner.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListAgentsOfUserResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agentsOfUserWithOwners = (_value.agentsOfUserWithOwners || []).map(m => new AgentOfUserWithOwner(m));
        this.nextPageToken = _value.nextPageToken;
        ListAgentsOfUserResponse.refineValues(this);
    }
    get agentsOfUserWithOwners() {
        return this._agentsOfUserWithOwners;
    }
    set agentsOfUserWithOwners(value) {
        this._agentsOfUserWithOwners = value;
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
        ListAgentsOfUserResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m => m.toObject()),
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
            agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.TrainAgentRequest
 */
export class TrainAgentRequest {
    static { this.id = 'ondewo.nlu.TrainAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TrainAgentRequest();
        TrainAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.branch = _instance.branch || '';
        _instance.initiationProtocol = _instance.initiationProtocol || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.branch = _reader.readString();
                    break;
                case 3:
                    _instance.initiationProtocol = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TrainAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.branch) {
            _writer.writeString(2, _instance.branch);
        }
        if (_instance.initiationProtocol) {
            _writer.writeEnum(3, _instance.initiationProtocol);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.branch = _value.branch;
        this.initiationProtocol = _value.initiationProtocol;
        TrainAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    get initiationProtocol() {
        return this._initiationProtocol;
    }
    set initiationProtocol(value) {
        this._initiationProtocol = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TrainAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch,
            initiationProtocol: this.initiationProtocol
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
            parent: this.parent,
            branch: this.branch,
            initiationProtocol: InitiationProtocol[this.initiationProtocol === null ||
                this.initiationProtocol === undefined
                ? 0
                : this.initiationProtocol]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BuildCacheRequest
 */
export class BuildCacheRequest {
    static { this.id = 'ondewo.nlu.BuildCacheRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BuildCacheRequest();
        BuildCacheRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.branch = _instance.branch || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.branch = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BuildCacheRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.branch) {
            _writer.writeString(2, _instance.branch);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BuildCacheRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.branch = _value.branch;
        BuildCacheRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BuildCacheRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch
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
            parent: this.parent,
            branch: this.branch
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ExportAgentRequest
 */
export class ExportAgentRequest {
    static { this.id = 'ondewo.nlu.ExportAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportAgentRequest();
        ExportAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.agentUri = _instance.agentUri || '';
        _instance.compressionLevel = _instance.compressionLevel || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.agentUri = _reader.readString();
                    break;
                case 3:
                    _instance.compressionLevel = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.agentUri) {
            _writer.writeString(2, _instance.agentUri);
        }
        if (_instance.compressionLevel) {
            _writer.writeInt32(3, _instance.compressionLevel);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.agentUri = _value.agentUri;
        this.compressionLevel = _value.compressionLevel;
        ExportAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        this._agentUri = value;
    }
    get compressionLevel() {
        return this._compressionLevel;
    }
    set compressionLevel(value) {
        this._compressionLevel = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            compressionLevel: this.compressionLevel
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
            parent: this.parent,
            agentUri: this.agentUri,
            compressionLevel: this.compressionLevel
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ExportAgentResponse
 */
export class ExportAgentResponse {
    static { this.id = 'ondewo.nlu.ExportAgentResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportAgentResponse();
        ExportAgentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
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
                    _instance.agentUri = _reader.readString();
                    break;
                case 2:
                    _instance.agentContent = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportAgentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentUri || _instance.agentUri === '') {
            _writer.writeString(1, _instance.agentUri);
        }
        if (_instance.agentContent && _instance.agentContent.length) {
            _writer.writeBytes(2, _instance.agentContent);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportAgentResponse to deeply clone from
     */
    constructor(_value) {
        this._agent = ExportAgentResponse.AgentCase.none;
        _value = _value || {};
        this.agentUri = _value.agentUri;
        this.agentContent = _value.agentContent;
        ExportAgentResponse.refineValues(this);
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportAgentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
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
            agentUri: this.agentUri === null || this.agentUri === undefined
                ? null
                : this.agentUri,
            agentContent: this.agentContent
                ? uint8ArrayToBase64(this.agentContent)
                : ''
        };
    }
}
(function (ExportAgentResponse) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ExportAgentResponse.AgentCase || (ExportAgentResponse.AgentCase = {}));
})(ExportAgentResponse || (ExportAgentResponse = {}));
/**
 * Message implementation for ondewo.nlu.ExportBenchmarkAgentRequest
 */
export class ExportBenchmarkAgentRequest {
    static { this.id = 'ondewo.nlu.ExportBenchmarkAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportBenchmarkAgentRequest();
        ExportBenchmarkAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.compressionLevel = _instance.compressionLevel || 0;
        _instance.testSize = _instance.testSize || 0;
        _instance.trainSize = _instance.trainSize || 0;
        _instance.randomState = _instance.randomState || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.compressionLevel = _reader.readInt32();
                    break;
                case 3:
                    _instance.testSize = _reader.readFloat();
                    break;
                case 4:
                    _instance.trainSize = _reader.readFloat();
                    break;
                case 5:
                    _instance.randomState = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportBenchmarkAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.compressionLevel) {
            _writer.writeInt32(2, _instance.compressionLevel);
        }
        if (_instance.testSize) {
            _writer.writeFloat(3, _instance.testSize);
        }
        if (_instance.trainSize) {
            _writer.writeFloat(4, _instance.trainSize);
        }
        if (_instance.randomState) {
            _writer.writeInt32(5, _instance.randomState);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.compressionLevel = _value.compressionLevel;
        this.testSize = _value.testSize;
        this.trainSize = _value.trainSize;
        this.randomState = _value.randomState;
        ExportBenchmarkAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get compressionLevel() {
        return this._compressionLevel;
    }
    set compressionLevel(value) {
        this._compressionLevel = value;
    }
    get testSize() {
        return this._testSize;
    }
    set testSize(value) {
        this._testSize = value;
    }
    get trainSize() {
        return this._trainSize;
    }
    set trainSize(value) {
        this._trainSize = value;
    }
    get randomState() {
        return this._randomState;
    }
    set randomState(value) {
        this._randomState = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportBenchmarkAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            compressionLevel: this.compressionLevel,
            testSize: this.testSize,
            trainSize: this.trainSize,
            randomState: this.randomState
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
            parent: this.parent,
            compressionLevel: this.compressionLevel,
            testSize: this.testSize,
            trainSize: this.trainSize,
            randomState: this.randomState
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ExportBenchmarkAgentResponse
 */
export class ExportBenchmarkAgentResponse {
    static { this.id = 'ondewo.nlu.ExportBenchmarkAgentResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportBenchmarkAgentResponse();
        ExportBenchmarkAgentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.agentContent = _instance.agentContent || new Uint8Array();
        _instance.trainingPhrases = _instance.trainingPhrases || {};
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
                    _instance.agentContent = _reader.readBytes();
                    break;
                case 2:
                    const msg_2 = {};
                    _reader.readMessage(msg_2, ExportBenchmarkAgentResponse.TrainingPhrasesEntry
                        .deserializeBinaryFromReader);
                    _instance.trainingPhrases = _instance.trainingPhrases || {};
                    _instance.trainingPhrases[msg_2.key] = msg_2.value;
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportBenchmarkAgentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.agentContent && _instance.agentContent.length) {
            _writer.writeBytes(1, _instance.agentContent);
        }
        if (!!_instance.trainingPhrases) {
            const keys_2 = Object.keys(_instance.trainingPhrases);
            if (keys_2.length) {
                const repeated_2 = keys_2
                    .map(key => ({
                    key: key,
                    value: _instance.trainingPhrases[key]
                }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(2, repeated_2, ExportBenchmarkAgentResponse.TrainingPhrasesEntry
                    .serializeBinaryToWriter);
            }
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportBenchmarkAgentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.agentContent = _value.agentContent;
        (this.trainingPhrases = _value.trainingPhrases
            ? Object.keys(_value.trainingPhrases).reduce((r, k) => ({
                ...r,
                [k]: _value.trainingPhrases[k]
                    ? new ondewoNlu015.ListTrainingPhrasesResponse(_value.trainingPhrases[k])
                    : undefined
            }), {})
            : {}),
            ExportBenchmarkAgentResponse.refineValues(this);
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        this._agentContent = value;
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportBenchmarkAgentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array(),
            trainingPhrases: this.trainingPhrases
                ? Object.keys(this.trainingPhrases).reduce((r, k) => ({
                    ...r,
                    [k]: this.trainingPhrases[k]
                        ? this.trainingPhrases[k].toObject()
                        : undefined
                }), {})
                : {}
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
            agentContent: this.agentContent
                ? uint8ArrayToBase64(this.agentContent)
                : '',
            trainingPhrases: this.trainingPhrases
                ? Object.keys(this.trainingPhrases).reduce((r, k) => ({
                    ...r,
                    [k]: this.trainingPhrases[k]
                        ? this.trainingPhrases[k].toJSON()
                        : null
                }), {})
                : {}
        };
    }
}
(function (ExportBenchmarkAgentResponse) {
    /**
     * Message implementation for ondewo.nlu.ExportBenchmarkAgentResponse.TrainingPhrasesEntry
     */
    class TrainingPhrasesEntry {
        static { this.id = 'ondewo.nlu.ExportBenchmarkAgentResponse.TrainingPhrasesEntry'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TrainingPhrasesEntry();
            TrainingPhrasesEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.value = new ondewoNlu015.ListTrainingPhrasesResponse();
                        _reader.readMessage(_instance.value, ondewoNlu015.ListTrainingPhrasesResponse
                            .deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TrainingPhrasesEntry.refineValues(_instance);
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
                _writer.writeMessage(2, _instance.value, ondewoNlu015.ListTrainingPhrasesResponse.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhrasesEntry to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.key = _value.key;
            this.value = _value.value
                ? new ondewoNlu015.ListTrainingPhrasesResponse(_value.value)
                : undefined;
            TrainingPhrasesEntry.refineValues(this);
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
            TrainingPhrasesEntry.serializeBinaryToWriter(this, writer);
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
    ExportBenchmarkAgentResponse.TrainingPhrasesEntry = TrainingPhrasesEntry;
})(ExportBenchmarkAgentResponse || (ExportBenchmarkAgentResponse = {}));
/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchRequest
 */
export class OptimizeRankingMatchRequest {
    static { this.id = 'ondewo.nlu.OptimizeRankingMatchRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new OptimizeRankingMatchRequest();
        OptimizeRankingMatchRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCodes = _instance.languageCodes || [];
        _instance.optimizationConfigs = _instance.optimizationConfigs || [];
        _instance.inPlace = _instance.inPlace || false;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    (_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
                    break;
                case 3:
                    const messageInitializer3 = new RankingMatchOptimizationConfig();
                    _reader.readMessage(messageInitializer3, RankingMatchOptimizationConfig.deserializeBinaryFromReader);
                    (_instance.optimizationConfigs =
                        _instance.optimizationConfigs || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.inPlace = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        OptimizeRankingMatchRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCodes && _instance.languageCodes.length) {
            _writer.writeRepeatedString(2, _instance.languageCodes);
        }
        if (_instance.optimizationConfigs && _instance.optimizationConfigs.length) {
            _writer.writeRepeatedMessage(3, _instance.optimizationConfigs, RankingMatchOptimizationConfig.serializeBinaryToWriter);
        }
        if (_instance.inPlace) {
            _writer.writeBool(4, _instance.inPlace);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OptimizeRankingMatchRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCodes = (_value.languageCodes || []).slice();
        this.optimizationConfigs = (_value.optimizationConfigs || []).map(m => new RankingMatchOptimizationConfig(m));
        this.inPlace = _value.inPlace;
        OptimizeRankingMatchRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get optimizationConfigs() {
        return this._optimizationConfigs;
    }
    set optimizationConfigs(value) {
        this._optimizationConfigs = value;
    }
    get inPlace() {
        return this._inPlace;
    }
    set inPlace(value) {
        this._inPlace = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        OptimizeRankingMatchRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCodes: (this.languageCodes || []).slice(),
            optimizationConfigs: (this.optimizationConfigs || []).map(m => m.toObject()),
            inPlace: this.inPlace
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
            parent: this.parent,
            languageCodes: (this.languageCodes || []).slice(),
            optimizationConfigs: (this.optimizationConfigs || []).map(m => m.toProtobufJSON(options)),
            inPlace: this.inPlace
        };
    }
}
/**
 * Message implementation for ondewo.nlu.RankingMatchOptimizationConfig
 */
export class RankingMatchOptimizationConfig {
    static { this.id = 'ondewo.nlu.RankingMatchOptimizationConfig'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RankingMatchOptimizationConfig();
        RankingMatchOptimizationConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCode = _instance.languageCode || '';
        _instance.nSplits = _instance.nSplits || 0;
        _instance.randomSeed = _instance.randomSeed || 0;
        _instance.initialThresholds = _instance.initialThresholds || undefined;
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
                    _instance.languageCode = _reader.readString();
                    break;
                case 2:
                    _instance.nSplits = _reader.readInt32();
                    break;
                case 3:
                    _instance.randomSeed = _reader.readInt32();
                    break;
                case 4:
                    _instance.initialThresholds = new googleProtobuf009.Struct();
                    _reader.readMessage(_instance.initialThresholds, googleProtobuf009.Struct.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        RankingMatchOptimizationConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCode) {
            _writer.writeString(1, _instance.languageCode);
        }
        if (_instance.nSplits) {
            _writer.writeInt32(2, _instance.nSplits);
        }
        if (_instance.randomSeed) {
            _writer.writeInt32(3, _instance.randomSeed);
        }
        if (_instance.initialThresholds) {
            _writer.writeMessage(4, _instance.initialThresholds, googleProtobuf009.Struct.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RankingMatchOptimizationConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCode = _value.languageCode;
        this.nSplits = _value.nSplits;
        this.randomSeed = _value.randomSeed;
        this.initialThresholds = _value.initialThresholds
            ? new googleProtobuf009.Struct(_value.initialThresholds)
            : undefined;
        RankingMatchOptimizationConfig.refineValues(this);
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get nSplits() {
        return this._nSplits;
    }
    set nSplits(value) {
        this._nSplits = value;
    }
    get randomSeed() {
        return this._randomSeed;
    }
    set randomSeed(value) {
        this._randomSeed = value;
    }
    get initialThresholds() {
        return this._initialThresholds;
    }
    set initialThresholds(value) {
        this._initialThresholds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RankingMatchOptimizationConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCode: this.languageCode,
            nSplits: this.nSplits,
            randomSeed: this.randomSeed,
            initialThresholds: this.initialThresholds
                ? this.initialThresholds.toObject()
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
    options) {
        return {
            languageCode: this.languageCode,
            nSplits: this.nSplits,
            randomSeed: this.randomSeed,
            initialThresholds: this.initialThresholds
                ? this.initialThresholds.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.OptimizeRankingMatchResponse
 */
export class OptimizeRankingMatchResponse {
    static { this.id = 'ondewo.nlu.OptimizeRankingMatchResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new OptimizeRankingMatchResponse();
        OptimizeRankingMatchResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.optimizationInfo = _instance.optimizationInfo || undefined;
        _instance.optimizedOndewoConfig =
            _instance.optimizedOndewoConfig || undefined;
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
                    _instance.optimizationInfo = new googleProtobuf009.Struct();
                    _reader.readMessage(_instance.optimizationInfo, googleProtobuf009.Struct.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.optimizedOndewoConfig = new googleProtobuf009.Struct();
                    _reader.readMessage(_instance.optimizedOndewoConfig, googleProtobuf009.Struct.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        OptimizeRankingMatchResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.optimizationInfo) {
            _writer.writeMessage(1, _instance.optimizationInfo, googleProtobuf009.Struct.serializeBinaryToWriter);
        }
        if (_instance.optimizedOndewoConfig) {
            _writer.writeMessage(3, _instance.optimizedOndewoConfig, googleProtobuf009.Struct.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OptimizeRankingMatchResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.optimizationInfo = _value.optimizationInfo
            ? new googleProtobuf009.Struct(_value.optimizationInfo)
            : undefined;
        this.optimizedOndewoConfig = _value.optimizedOndewoConfig
            ? new googleProtobuf009.Struct(_value.optimizedOndewoConfig)
            : undefined;
        OptimizeRankingMatchResponse.refineValues(this);
    }
    get optimizationInfo() {
        return this._optimizationInfo;
    }
    set optimizationInfo(value) {
        this._optimizationInfo = value;
    }
    get optimizedOndewoConfig() {
        return this._optimizedOndewoConfig;
    }
    set optimizedOndewoConfig(value) {
        this._optimizedOndewoConfig = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        OptimizeRankingMatchResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            optimizationInfo: this.optimizationInfo
                ? this.optimizationInfo.toObject()
                : undefined,
            optimizedOndewoConfig: this.optimizedOndewoConfig
                ? this.optimizedOndewoConfig.toObject()
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
    options) {
        return {
            optimizationInfo: this.optimizationInfo
                ? this.optimizationInfo.toProtobufJSON(options)
                : null,
            optimizedOndewoConfig: this.optimizedOndewoConfig
                ? this.optimizedOndewoConfig.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ImportAgentRequest
 */
export class ImportAgentRequest {
    static { this.id = 'ondewo.nlu.ImportAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ImportAgentRequest();
        ImportAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.agentUri = _reader.readString();
                    break;
                case 3:
                    _instance.agentContent = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ImportAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.agentUri || _instance.agentUri === '') {
            _writer.writeString(2, _instance.agentUri);
        }
        if (_instance.agentContent && _instance.agentContent.length) {
            _writer.writeBytes(3, _instance.agentContent);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ImportAgentRequest to deeply clone from
     */
    constructor(_value) {
        this._agent = ImportAgentRequest.AgentCase.none;
        _value = _value || {};
        this.parent = _value.parent;
        this.agentUri = _value.agentUri;
        this.agentContent = _value.agentContent;
        ImportAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ImportAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
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
            parent: this.parent,
            agentUri: this.agentUri === null || this.agentUri === undefined
                ? null
                : this.agentUri,
            agentContent: this.agentContent
                ? uint8ArrayToBase64(this.agentContent)
                : ''
        };
    }
}
(function (ImportAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ImportAgentRequest.AgentCase || (ImportAgentRequest.AgentCase = {}));
})(ImportAgentRequest || (ImportAgentRequest = {}));
/**
 * Message implementation for ondewo.nlu.RestoreAgentRequest
 */
export class RestoreAgentRequest {
    static { this.id = 'ondewo.nlu.RestoreAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RestoreAgentRequest();
        RestoreAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.agentUri = _reader.readString();
                    break;
                case 3:
                    _instance.agentContent = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RestoreAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.agentUri || _instance.agentUri === '') {
            _writer.writeString(2, _instance.agentUri);
        }
        if (_instance.agentContent && _instance.agentContent.length) {
            _writer.writeBytes(3, _instance.agentContent);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RestoreAgentRequest to deeply clone from
     */
    constructor(_value) {
        this._agent = RestoreAgentRequest.AgentCase.none;
        _value = _value || {};
        this.parent = _value.parent;
        this.agentUri = _value.agentUri;
        this.agentContent = _value.agentContent;
        RestoreAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RestoreAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
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
            parent: this.parent,
            agentUri: this.agentUri === null || this.agentUri === undefined
                ? null
                : this.agentUri,
            agentContent: this.agentContent
                ? uint8ArrayToBase64(this.agentContent)
                : ''
        };
    }
}
(function (RestoreAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = RestoreAgentRequest.AgentCase || (RestoreAgentRequest.AgentCase = {}));
})(RestoreAgentRequest || (RestoreAgentRequest = {}));
/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsRequest
 */
export class GetAgentStatisticsRequest {
    static { this.id = 'ondewo.nlu.GetAgentStatisticsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAgentStatisticsRequest();
        GetAgentStatisticsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.format = _instance.format || 0;
        _instance.languageCode = _instance.languageCode || '';
        _instance.type = _instance.type || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.format = _reader.readEnum();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.type = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAgentStatisticsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.format) {
            _writer.writeEnum(2, _instance.format);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.type) {
            _writer.writeEnum(4, _instance.type);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.format = _value.format;
        this.languageCode = _value.languageCode;
        this.type = _value.type;
        GetAgentStatisticsRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAgentStatisticsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            format: this.format,
            languageCode: this.languageCode,
            type: this.type
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
            parent: this.parent,
            format: ReportFormat[this.format === null || this.format === undefined ? 0 : this.format],
            languageCode: this.languageCode,
            type: ReportType[this.type === null || this.type === undefined ? 0 : this.type]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetAgentStatisticsResponse
 */
export class GetAgentStatisticsResponse {
    static { this.id = 'ondewo.nlu.GetAgentStatisticsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAgentStatisticsResponse();
        GetAgentStatisticsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.reports = _instance.reports || new Uint8Array();
        _instance.format = _instance.format || 0;
        _instance.type = _instance.type || 0;
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
                    _instance.reports = _reader.readBytes();
                    break;
                case 2:
                    _instance.format = _reader.readEnum();
                    break;
                case 3:
                    _instance.type = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAgentStatisticsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.reports && _instance.reports.length) {
            _writer.writeBytes(1, _instance.reports);
        }
        if (_instance.format) {
            _writer.writeEnum(2, _instance.format);
        }
        if (_instance.type) {
            _writer.writeEnum(3, _instance.type);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAgentStatisticsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.reports = _value.reports;
        this.format = _value.format;
        this.type = _value.type;
        GetAgentStatisticsResponse.refineValues(this);
    }
    get reports() {
        return this._reports;
    }
    set reports(value) {
        this._reports = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAgentStatisticsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
            format: this.format,
            type: this.type
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
            reports: this.reports ? uint8ArrayToBase64(this.reports) : '',
            format: ReportFormat[this.format === null || this.format === undefined ? 0 : this.format],
            type: ReportType[this.type === null || this.type === undefined ? 0 : this.type]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetSessionsStatisticsRequest
 */
export class GetSessionsStatisticsRequest {
    static { this.id = 'ondewo.nlu.GetSessionsStatisticsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionsStatisticsRequest();
        GetSessionsStatisticsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.format = _instance.format || 0;
        _instance.type = _instance.type || 0;
        _instance.sessionFilter = _instance.sessionFilter || undefined;
        _instance.contextFilters = _instance.contextFilters || [];
        _instance.limit = _instance.limit || 0;
        _instance.groupBys = _instance.groupBys || [];
        _instance.orderBys = _instance.orderBys || [];
        _instance.fieldMask = _instance.fieldMask || undefined;
        _instance.sqlQuery = _instance.sqlQuery || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.format = _reader.readEnum();
                    break;
                case 3:
                    _instance.type = _reader.readEnum();
                    break;
                case 4:
                    _instance.sessionFilter = new ondewoNlu018.SessionFilter();
                    _reader.readMessage(_instance.sessionFilter, ondewoNlu018.SessionFilter.deserializeBinaryFromReader);
                    break;
                case 5:
                    const messageInitializer5 = new ondewoNlu018.ContextFilter();
                    _reader.readMessage(messageInitializer5, ondewoNlu018.ContextFilter.deserializeBinaryFromReader);
                    (_instance.contextFilters = _instance.contextFilters || []).push(messageInitializer5);
                    break;
                case 6:
                    _instance.limit = _reader.readInt32();
                    break;
                case 7:
                    (_instance.groupBys = _instance.groupBys || []).push(_reader.readString());
                    break;
                case 8:
                    (_instance.orderBys = _instance.orderBys || []).push(_reader.readString());
                    break;
                case 9:
                    _instance.fieldMask = new googleProtobuf002.FieldMask();
                    _reader.readMessage(_instance.fieldMask, googleProtobuf002.FieldMask.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.sqlQuery = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionsStatisticsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.format) {
            _writer.writeEnum(2, _instance.format);
        }
        if (_instance.type) {
            _writer.writeEnum(3, _instance.type);
        }
        if (_instance.sessionFilter) {
            _writer.writeMessage(4, _instance.sessionFilter, ondewoNlu018.SessionFilter.serializeBinaryToWriter);
        }
        if (_instance.contextFilters && _instance.contextFilters.length) {
            _writer.writeRepeatedMessage(5, _instance.contextFilters, ondewoNlu018.ContextFilter.serializeBinaryToWriter);
        }
        if (_instance.limit) {
            _writer.writeInt32(6, _instance.limit);
        }
        if (_instance.groupBys && _instance.groupBys.length) {
            _writer.writeRepeatedString(7, _instance.groupBys);
        }
        if (_instance.orderBys && _instance.orderBys.length) {
            _writer.writeRepeatedString(8, _instance.orderBys);
        }
        if (_instance.fieldMask) {
            _writer.writeMessage(9, _instance.fieldMask, googleProtobuf002.FieldMask.serializeBinaryToWriter);
        }
        if (_instance.sqlQuery) {
            _writer.writeString(10, _instance.sqlQuery);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionsStatisticsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.format = _value.format;
        this.type = _value.type;
        this.sessionFilter = _value.sessionFilter
            ? new ondewoNlu018.SessionFilter(_value.sessionFilter)
            : undefined;
        this.contextFilters = (_value.contextFilters || []).map(m => new ondewoNlu018.ContextFilter(m));
        this.limit = _value.limit;
        this.groupBys = (_value.groupBys || []).slice();
        this.orderBys = (_value.orderBys || []).slice();
        this.fieldMask = _value.fieldMask
            ? new googleProtobuf002.FieldMask(_value.fieldMask)
            : undefined;
        this.sqlQuery = _value.sqlQuery;
        GetSessionsStatisticsRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get sessionFilter() {
        return this._sessionFilter;
    }
    set sessionFilter(value) {
        this._sessionFilter = value;
    }
    get contextFilters() {
        return this._contextFilters;
    }
    set contextFilters(value) {
        this._contextFilters = value;
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
    }
    get groupBys() {
        return this._groupBys;
    }
    set groupBys(value) {
        this._groupBys = value;
    }
    get orderBys() {
        return this._orderBys;
    }
    set orderBys(value) {
        this._orderBys = value;
    }
    get fieldMask() {
        return this._fieldMask;
    }
    set fieldMask(value) {
        this._fieldMask = value;
    }
    get sqlQuery() {
        return this._sqlQuery;
    }
    set sqlQuery(value) {
        this._sqlQuery = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSessionsStatisticsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            format: this.format,
            type: this.type,
            sessionFilter: this.sessionFilter
                ? this.sessionFilter.toObject()
                : undefined,
            contextFilters: (this.contextFilters || []).map(m => m.toObject()),
            limit: this.limit,
            groupBys: (this.groupBys || []).slice(),
            orderBys: (this.orderBys || []).slice(),
            fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
            sqlQuery: this.sqlQuery
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
            parent: this.parent,
            format: ReportFormat[this.format === null || this.format === undefined ? 0 : this.format],
            type: SessionsReportType[this.type === null || this.type === undefined ? 0 : this.type],
            sessionFilter: this.sessionFilter
                ? this.sessionFilter.toProtobufJSON(options)
                : null,
            contextFilters: (this.contextFilters || []).map(m => m.toProtobufJSON(options)),
            limit: this.limit,
            groupBys: (this.groupBys || []).slice(),
            orderBys: (this.orderBys || []).slice(),
            fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
            sqlQuery: this.sqlQuery
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetSessionsStatisticsResponse
 */
export class GetSessionsStatisticsResponse {
    static { this.id = 'ondewo.nlu.GetSessionsStatisticsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionsStatisticsResponse();
        GetSessionsStatisticsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.reports = _instance.reports || new Uint8Array();
        _instance.format = _instance.format || 0;
        _instance.type = _instance.type || 0;
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
                    _instance.reports = _reader.readBytes();
                    break;
                case 2:
                    _instance.format = _reader.readEnum();
                    break;
                case 3:
                    _instance.type = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionsStatisticsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.reports && _instance.reports.length) {
            _writer.writeBytes(1, _instance.reports);
        }
        if (_instance.format) {
            _writer.writeEnum(2, _instance.format);
        }
        if (_instance.type) {
            _writer.writeEnum(3, _instance.type);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionsStatisticsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.reports = _value.reports;
        this.format = _value.format;
        this.type = _value.type;
        GetSessionsStatisticsResponse.refineValues(this);
    }
    get reports() {
        return this._reports;
    }
    set reports(value) {
        this._reports = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSessionsStatisticsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
            format: this.format,
            type: this.type
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
            reports: this.reports ? uint8ArrayToBase64(this.reports) : '',
            format: ReportFormat[this.format === null || this.format === undefined ? 0 : this.format],
            type: SessionsReportType[this.type === null || this.type === undefined ? 0 : this.type]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.AddUserToProjectRequest
 */
export class AddUserToProjectRequest {
    static { this.id = 'ondewo.nlu.AddUserToProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddUserToProjectRequest();
        AddUserToProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.userId = _instance.userId || '';
        _instance.projectRoleId = _instance.projectRoleId || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.userId = _reader.readString();
                    break;
                case 4:
                    _instance.projectRoleId = _reader.readUint32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddUserToProjectRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.userId) {
            _writer.writeString(2, _instance.userId);
        }
        if (_instance.projectRoleId) {
            _writer.writeUint32(4, _instance.projectRoleId);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddUserToProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.userId = _value.userId;
        this.projectRoleId = _value.projectRoleId;
        AddUserToProjectRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get projectRoleId() {
        return this._projectRoleId;
    }
    set projectRoleId(value) {
        this._projectRoleId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddUserToProjectRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            userId: this.userId,
            projectRoleId: this.projectRoleId
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
            parent: this.parent,
            userId: this.userId,
            projectRoleId: this.projectRoleId
        };
    }
}
/**
 * Message implementation for ondewo.nlu.RemoveUserFromProjectRequest
 */
export class RemoveUserFromProjectRequest {
    static { this.id = 'ondewo.nlu.RemoveUserFromProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RemoveUserFromProjectRequest();
        RemoveUserFromProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.userId = _instance.userId || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.userId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RemoveUserFromProjectRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.userId) {
            _writer.writeString(2, _instance.userId);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveUserFromProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.userId = _value.userId;
        RemoveUserFromProjectRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RemoveUserFromProjectRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
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
    options) {
        return {
            parent: this.parent,
            userId: this.userId
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListUsersInProjectRequest
 */
export class ListUsersInProjectRequest {
    static { this.id = 'ondewo.nlu.ListUsersInProjectRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListUsersInProjectRequest();
        ListUsersInProjectRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.pageToken = _instance.pageToken || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListUsersInProjectRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.pageToken) {
            _writer.writeString(2, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.pageToken = _value.pageToken;
        ListUsersInProjectRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListUsersInProjectRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken
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
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.UserInProject
 */
export class UserInProject {
    static { this.id = 'ondewo.nlu.UserInProject'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UserInProject();
        UserInProject.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.user = _instance.user || undefined;
        _instance.roleId = _instance.roleId || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.user = new ondewoNlu017.User();
                    _reader.readMessage(_instance.user, ondewoNlu017.User.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.roleId = _reader.readUint32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UserInProject.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.user) {
            _writer.writeMessage(2, _instance.user, ondewoNlu017.User.serializeBinaryToWriter);
        }
        if (_instance.roleId) {
            _writer.writeUint32(3, _instance.roleId);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserInProject to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.user = _value.user ? new ondewoNlu017.User(_value.user) : undefined;
        this.roleId = _value.roleId;
        UserInProject.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UserInProject.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            user: this.user ? this.user.toObject() : undefined,
            roleId: this.roleId
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
            parent: this.parent,
            user: this.user ? this.user.toProtobufJSON(options) : null,
            roleId: this.roleId
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListUsersInProjectResponse
 */
export class ListUsersInProjectResponse {
    static { this.id = 'ondewo.nlu.ListUsersInProjectResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListUsersInProjectResponse();
        ListUsersInProjectResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.users = _instance.users || [];
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
                    const messageInitializer1 = new UserInProject();
                    _reader.readMessage(messageInitializer1, UserInProject.deserializeBinaryFromReader);
                    (_instance.users = _instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListUsersInProjectResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.users && _instance.users.length) {
            _writer.writeRepeatedMessage(1, _instance.users, UserInProject.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListUsersInProjectResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.users = (_value.users || []).map(m => new UserInProject(m));
        this.nextPageToken = _value.nextPageToken;
        ListUsersInProjectResponse.refineValues(this);
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
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
        ListUsersInProjectResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
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
            users: (this.users || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetPlatformInfoResponse
 */
export class GetPlatformInfoResponse {
    static { this.id = 'ondewo.nlu.GetPlatformInfoResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetPlatformInfoResponse();
        GetPlatformInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.version = _instance.version || '';
        _instance.commitHash = _instance.commitHash || '';
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
                    _instance.version = _reader.readString();
                    break;
                case 2:
                    _instance.commitHash = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetPlatformInfoResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.version) {
            _writer.writeString(1, _instance.version);
        }
        if (_instance.commitHash) {
            _writer.writeString(2, _instance.commitHash);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformInfoResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.version = _value.version;
        this.commitHash = _value.commitHash;
        GetPlatformInfoResponse.refineValues(this);
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get commitHash() {
        return this._commitHash;
    }
    set commitHash(value) {
        this._commitHash = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetPlatformInfoResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            version: this.version,
            commitHash: this.commitHash
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
            version: this.version,
            commitHash: this.commitHash
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsRequest
 */
export class ListProjectPermissionsRequest {
    static { this.id = 'ondewo.nlu.ListProjectPermissionsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListProjectPermissionsRequest();
        ListProjectPermissionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pageToken = _instance.pageToken || '';
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
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListProjectPermissionsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pageToken) {
            _writer.writeString(1, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pageToken = _value.pageToken;
        ListProjectPermissionsRequest.refineValues(this);
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListProjectPermissionsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            pageToken: this.pageToken
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
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListProjectPermissionsResponse
 */
export class ListProjectPermissionsResponse {
    static { this.id = 'ondewo.nlu.ListProjectPermissionsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListProjectPermissionsResponse();
        ListProjectPermissionsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.permissions = _instance.permissions || [];
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
                    (_instance.permissions = _instance.permissions || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListProjectPermissionsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.permissions && _instance.permissions.length) {
            _writer.writeRepeatedString(1, _instance.permissions);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectPermissionsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.permissions = (_value.permissions || []).slice();
        this.nextPageToken = _value.nextPageToken;
        ListProjectPermissionsResponse.refineValues(this);
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
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
        ListProjectPermissionsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            permissions: (this.permissions || []).slice(),
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
            permissions: (this.permissions || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.SetAgentStatusRequest
 */
export class SetAgentStatusRequest {
    static { this.id = 'ondewo.nlu.SetAgentStatusRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SetAgentStatusRequest();
        SetAgentStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.status = _instance.status || 0;
        _instance.agentView = _instance.agentView || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.status = _reader.readEnum();
                    break;
                case 3:
                    _instance.agentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SetAgentStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.status) {
            _writer.writeEnum(2, _instance.status);
        }
        if (_instance.agentView) {
            _writer.writeEnum(3, _instance.agentView);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetAgentStatusRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.status = _value.status;
        this.agentView = _value.agentView;
        SetAgentStatusRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SetAgentStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            status: this.status,
            agentView: this.agentView
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
            parent: this.parent,
            status: AgentStatus[this.status === null || this.status === undefined ? 0 : this.status],
            agentView: AgentView[this.agentView === null || this.agentView === undefined
                ? 0
                : this.agentView]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.AgentSorting
 */
export class AgentSorting {
    static { this.id = 'ondewo.nlu.AgentSorting'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AgentSorting();
        AgentSorting.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        AgentSorting.refineValues(_instance);
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
     * @param _value initial values object or instance of AgentSorting to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sortingField = _value.sortingField;
        this.sortingMode = _value.sortingMode;
        AgentSorting.refineValues(this);
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
        AgentSorting.serializeBinaryToWriter(this, writer);
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
            sortingField: AgentSorting.AgentSortingField[this.sortingField === null || this.sortingField === undefined
                ? 0
                : this.sortingField],
            sortingMode: ondewoNlu006.SortingMode[this.sortingMode === null || this.sortingMode === undefined
                ? 0
                : this.sortingMode]
        };
    }
}
(function (AgentSorting) {
    let AgentSortingField;
    (function (AgentSortingField) {
        AgentSortingField[AgentSortingField["NO_AGENT_SORTING"] = 0] = "NO_AGENT_SORTING";
        AgentSortingField[AgentSortingField["SORT_AGENT_BY_NAME"] = 1] = "SORT_AGENT_BY_NAME";
        AgentSortingField[AgentSortingField["SORT_AGENT_BY_CREATION_DATE"] = 2] = "SORT_AGENT_BY_CREATION_DATE";
        AgentSortingField[AgentSortingField["SORT_AGENT_BY_LAST_UPDATED"] = 3] = "SORT_AGENT_BY_LAST_UPDATED";
        AgentSortingField[AgentSortingField["SORT_AGENT_BY_OWNER_NAME"] = 4] = "SORT_AGENT_BY_OWNER_NAME";
    })(AgentSortingField = AgentSorting.AgentSortingField || (AgentSorting.AgentSortingField = {}));
})(AgentSorting || (AgentSorting = {}));
/**
 * Message implementation for ondewo.nlu.SetResourcesRequest
 */
export class SetResourcesRequest {
    static { this.id = 'ondewo.nlu.SetResourcesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SetResourcesRequest();
        SetResourcesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.name = _instance.name || '';
        _instance.type = _instance.type || '';
        _instance.resourceFile = _instance.resourceFile || new Uint8Array();
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.type = _reader.readString();
                    break;
                case 4:
                    _instance.resourceFile = _reader.readBytes();
                    break;
                case 5:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SetResourcesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.type) {
            _writer.writeString(3, _instance.type);
        }
        if (_instance.resourceFile && _instance.resourceFile.length) {
            _writer.writeBytes(4, _instance.resourceFile);
        }
        if (_instance.languageCode) {
            _writer.writeString(5, _instance.languageCode);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetResourcesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.name = _value.name;
        this.type = _value.type;
        this.resourceFile = _value.resourceFile;
        this.languageCode = _value.languageCode;
        SetResourcesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SetResourcesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array(),
            languageCode: this.languageCode
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
            parent: this.parent,
            name: this.name,
            type: this.type,
            resourceFile: this.resourceFile
                ? uint8ArrayToBase64(this.resourceFile)
                : '',
            languageCode: this.languageCode
        };
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteResourcesRequest
 */
export class DeleteResourcesRequest {
    static { this.id = 'ondewo.nlu.DeleteResourcesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteResourcesRequest();
        DeleteResourcesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.name = _instance.name || '';
        _instance.type = _instance.type || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.type = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteResourcesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.type) {
            _writer.writeString(3, _instance.type);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteResourcesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.name = _value.name;
        this.type = _value.type;
        this.languageCode = _value.languageCode;
        DeleteResourcesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteResourcesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
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
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ExportResourcesRequest
 */
export class ExportResourcesRequest {
    static { this.id = 'ondewo.nlu.ExportResourcesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportResourcesRequest();
        ExportResourcesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.name = _instance.name || '';
        _instance.type = _instance.type || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.type = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportResourcesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.type) {
            _writer.writeString(3, _instance.type);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.name = _value.name;
        this.type = _value.type;
        this.languageCode = _value.languageCode;
        ExportResourcesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportResourcesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
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
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ExportResourcesResponse
 */
export class ExportResourcesResponse {
    static { this.id = 'ondewo.nlu.ExportResourcesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExportResourcesResponse();
        ExportResourcesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.name = _instance.name || '';
        _instance.type = _instance.type || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.resourceFile = _instance.resourceFile || new Uint8Array();
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.type = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.resourceFile = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExportResourcesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.type) {
            _writer.writeString(3, _instance.type);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.resourceFile && _instance.resourceFile.length) {
            _writer.writeBytes(5, _instance.resourceFile);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExportResourcesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.name = _value.name;
        this.type = _value.type;
        this.languageCode = _value.languageCode;
        this.resourceFile = _value.resourceFile;
        ExportResourcesResponse.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExportResourcesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array()
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
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode,
            resourceFile: this.resourceFile
                ? uint8ArrayToBase64(this.resourceFile)
                : ''
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetModelStatusesRequest
 */
export class GetModelStatusesRequest {
    static { this.id = 'ondewo.nlu.GetModelStatusesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetModelStatusesRequest();
        GetModelStatusesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.cacheVersion = _instance.cacheVersion || 0;
        _instance.languageCode = _instance.languageCode || '';
        _instance.modelName = _instance.modelName || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.cacheVersion = _reader.readInt32();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.modelName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetModelStatusesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.cacheVersion) {
            _writer.writeInt32(2, _instance.cacheVersion);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.modelName) {
            _writer.writeString(4, _instance.modelName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetModelStatusesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.cacheVersion = _value.cacheVersion;
        this.languageCode = _value.languageCode;
        this.modelName = _value.modelName;
        GetModelStatusesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get cacheVersion() {
        return this._cacheVersion;
    }
    set cacheVersion(value) {
        this._cacheVersion = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get modelName() {
        return this._modelName;
    }
    set modelName(value) {
        this._modelName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetModelStatusesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            cacheVersion: this.cacheVersion,
            languageCode: this.languageCode,
            modelName: this.modelName
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
            parent: this.parent,
            cacheVersion: this.cacheVersion,
            languageCode: this.languageCode,
            modelName: this.modelName
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ModelStatus
 */
export class ModelStatus {
    static { this.id = 'ondewo.nlu.ModelStatus'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ModelStatus();
        ModelStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.cacheVersion = _instance.cacheVersion || 0;
        _instance.languageCode = _instance.languageCode || '';
        _instance.modelName = _instance.modelName || '';
        _instance.statusSetTime = _instance.statusSetTime || undefined;
        _instance.config = _instance.config || '';
        _instance.status = _instance.status || 0;
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
                    _instance.cacheVersion = _reader.readInt32();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.modelName = _reader.readString();
                    break;
                case 4:
                    _instance.statusSetTime = new googleProtobuf003.Timestamp();
                    _reader.readMessage(_instance.statusSetTime, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.config = _reader.readString();
                    break;
                case 6:
                    _instance.status = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ModelStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.cacheVersion) {
            _writer.writeInt32(1, _instance.cacheVersion);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.modelName) {
            _writer.writeString(3, _instance.modelName);
        }
        if (_instance.statusSetTime) {
            _writer.writeMessage(4, _instance.statusSetTime, googleProtobuf003.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.config) {
            _writer.writeString(5, _instance.config);
        }
        if (_instance.status) {
            _writer.writeEnum(6, _instance.status);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModelStatus to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.cacheVersion = _value.cacheVersion;
        this.languageCode = _value.languageCode;
        this.modelName = _value.modelName;
        this.statusSetTime = _value.statusSetTime
            ? new googleProtobuf003.Timestamp(_value.statusSetTime)
            : undefined;
        this.config = _value.config;
        this.status = _value.status;
        ModelStatus.refineValues(this);
    }
    get cacheVersion() {
        return this._cacheVersion;
    }
    set cacheVersion(value) {
        this._cacheVersion = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get modelName() {
        return this._modelName;
    }
    set modelName(value) {
        this._modelName = value;
    }
    get statusSetTime() {
        return this._statusSetTime;
    }
    set statusSetTime(value) {
        this._statusSetTime = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ModelStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            cacheVersion: this.cacheVersion,
            languageCode: this.languageCode,
            modelName: this.modelName,
            statusSetTime: this.statusSetTime
                ? this.statusSetTime.toObject()
                : undefined,
            config: this.config,
            status: this.status
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
            cacheVersion: this.cacheVersion,
            languageCode: this.languageCode,
            modelName: this.modelName,
            statusSetTime: this.statusSetTime
                ? this.statusSetTime.toProtobufJSON(options)
                : null,
            config: this.config,
            status: ModelStatus.StatusName[this.status === null || this.status === undefined ? 0 : this.status]
        };
    }
}
(function (ModelStatus) {
    let StatusName;
    (function (StatusName) {
        StatusName[StatusName["UNKNOWN"] = 0] = "UNKNOWN";
        StatusName[StatusName["INITIALIZING"] = 1] = "INITIALIZING";
        StatusName[StatusName["INITIALIZED"] = 2] = "INITIALIZED";
        StatusName[StatusName["LOADING_DATA"] = 3] = "LOADING_DATA";
        StatusName[StatusName["TRAINING"] = 4] = "TRAINING";
        StatusName[StatusName["TESTING"] = 5] = "TESTING";
        StatusName[StatusName["TRAINED"] = 6] = "TRAINED";
    })(StatusName = ModelStatus.StatusName || (ModelStatus.StatusName = {}));
})(ModelStatus || (ModelStatus = {}));
/**
 * Message implementation for ondewo.nlu.GetModelStatusesResponse
 */
export class GetModelStatusesResponse {
    static { this.id = 'ondewo.nlu.GetModelStatusesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetModelStatusesResponse();
        GetModelStatusesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelStatuses = _instance.modelStatuses || [];
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
                    const messageInitializer1 = new ModelStatus();
                    _reader.readMessage(messageInitializer1, ModelStatus.deserializeBinaryFromReader);
                    (_instance.modelStatuses = _instance.modelStatuses || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetModelStatusesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelStatuses && _instance.modelStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.modelStatuses, ModelStatus.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetModelStatusesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelStatuses = (_value.modelStatuses || []).map(m => new ModelStatus(m));
        GetModelStatusesResponse.refineValues(this);
    }
    get modelStatuses() {
        return this._modelStatuses;
    }
    set modelStatuses(value) {
        this._modelStatuses = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetModelStatusesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelStatuses: (this.modelStatuses || []).map(m => m.toObject())
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
            modelStatuses: (this.modelStatuses || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CustomPlatformInfo
 */
export class CustomPlatformInfo {
    static { this.id = 'ondewo.nlu.CustomPlatformInfo'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CustomPlatformInfo();
        CustomPlatformInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.platform = _instance.platform || 0;
        _instance.displayName = _instance.displayName || '';
        _instance.position = _instance.position || 0;
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
                    _instance.platform = _reader.readEnum();
                    break;
                case 2:
                    _instance.displayName = _reader.readString();
                    break;
                case 3:
                    _instance.position = _reader.readUint32();
                    break;
                case 4:
                    _instance.createdAt = new googleProtobuf003.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.modifiedAt = new googleProtobuf003.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.createdBy = _reader.readString();
                    break;
                case 7:
                    _instance.modifiedBy = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CustomPlatformInfo.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.platform) {
            _writer.writeEnum(1, _instance.platform);
        }
        if (_instance.displayName) {
            _writer.writeString(2, _instance.displayName);
        }
        if (_instance.position) {
            _writer.writeUint32(3, _instance.position);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(4, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(5, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.createdBy) {
            _writer.writeString(6, _instance.createdBy);
        }
        if (_instance.modifiedBy) {
            _writer.writeString(7, _instance.modifiedBy);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPlatformInfo to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.platform = _value.platform;
        this.displayName = _value.displayName;
        this.position = _value.position;
        this.createdAt = _value.createdAt
            ? new googleProtobuf003.Timestamp(_value.createdAt)
            : undefined;
        this.modifiedAt = _value.modifiedAt
            ? new googleProtobuf003.Timestamp(_value.modifiedAt)
            : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        CustomPlatformInfo.refineValues(this);
    }
    get platform() {
        return this._platform;
    }
    set platform(value) {
        this._platform = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
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
        CustomPlatformInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            platform: this.platform,
            displayName: this.displayName,
            position: this.position,
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
            platform: ondewoNlu015.Intent.Message.Platform[this.platform === null || this.platform === undefined
                ? 0
                : this.platform],
            displayName: this.displayName,
            position: this.position,
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
 * Message implementation for ondewo.nlu.GetPlatformMappingRequest
 */
export class GetPlatformMappingRequest {
    static { this.id = 'ondewo.nlu.GetPlatformMappingRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetPlatformMappingRequest();
        GetPlatformMappingRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
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
                    _instance.parent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetPlatformMappingRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPlatformMappingRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        GetPlatformMappingRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetPlatformMappingRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent
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
            parent: this.parent
        };
    }
}
/**
 * Message implementation for ondewo.nlu.PlatformMapping
 */
export class PlatformMapping {
    static { this.id = 'ondewo.nlu.PlatformMapping'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PlatformMapping();
        PlatformMapping.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.platformInfo = _instance.platformInfo || [];
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new CustomPlatformInfo();
                    _reader.readMessage(messageInitializer2, CustomPlatformInfo.deserializeBinaryFromReader);
                    (_instance.platformInfo = _instance.platformInfo || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PlatformMapping.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.platformInfo && _instance.platformInfo.length) {
            _writer.writeRepeatedMessage(2, _instance.platformInfo, CustomPlatformInfo.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PlatformMapping to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.platformInfo = (_value.platformInfo || []).map(m => new CustomPlatformInfo(m));
        PlatformMapping.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get platformInfo() {
        return this._platformInfo;
    }
    set platformInfo(value) {
        this._platformInfo = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PlatformMapping.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            platformInfo: (this.platformInfo || []).map(m => m.toObject())
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
            parent: this.parent,
            platformInfo: (this.platformInfo || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.FullTextSearchRequest
 */
export class FullTextSearchRequest {
    static { this.id = 'ondewo.nlu.FullTextSearchRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchRequest();
        FullTextSearchRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.term = _instance.term || '';
        _instance.pageToken = _instance.pageToken || '';
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.term = _reader.readString();
                    break;
                case 4:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.term) {
            _writer.writeString(3, _instance.term);
        }
        if (_instance.pageToken) {
            _writer.writeString(4, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.term = _value.term;
        this.pageToken = _value.pageToken;
        FullTextSearchRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        FullTextSearchRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            term: this.term,
            pageToken: this.pageToken
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
            parent: this.parent,
            languageCode: this.languageCode,
            term: this.term,
            pageToken: this.pageToken
        };
    }
}
(function (FullTextSearchRequest) {
    let QueryType;
    (function (QueryType) {
        QueryType[QueryType["ALL"] = 0] = "ALL";
        QueryType[QueryType["OndewoEntityQuery"] = 1] = "OndewoEntityQuery";
        QueryType[QueryType["OndewoEntityTypeQuery"] = 2] = "OndewoEntityTypeQuery";
        QueryType[QueryType["OndewoEntitySynonymQuery"] = 3] = "OndewoEntitySynonymQuery";
        QueryType[QueryType["OndewoIntentQuery"] = 4] = "OndewoIntentQuery";
        QueryType[QueryType["OndewoIntentContextInQuery"] = 5] = "OndewoIntentContextInQuery";
        QueryType[QueryType["OndewoIntentContextOutQuery"] = 6] = "OndewoIntentContextOutQuery";
        QueryType[QueryType["OndewoIntentUsersaysQuery"] = 7] = "OndewoIntentUsersaysQuery";
        QueryType[QueryType["OndewoIntentTagsQuery"] = 8] = "OndewoIntentTagsQuery";
        QueryType[QueryType["OndewoIntentParametersQuery"] = 9] = "OndewoIntentParametersQuery";
        QueryType[QueryType["OndewoIntentResponseQuery"] = 10] = "OndewoIntentResponseQuery";
    })(QueryType = FullTextSearchRequest.QueryType || (FullTextSearchRequest.QueryType = {}));
})(FullTextSearchRequest || (FullTextSearchRequest = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntityType
 */
export class FullTextSearchResponseEntityType {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseEntityType'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseEntityType();
        FullTextSearchResponseEntityType.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.entityTypeResults = _instance.entityTypeResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseEntityType.EntityTypeSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseEntityType.EntityTypeSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.entityTypeResults =
                        _instance.entityTypeResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseEntityType.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.entityTypeResults && _instance.entityTypeResults.length) {
            _writer.writeRepeatedMessage(3, _instance.entityTypeResults, FullTextSearchResponseEntityType.EntityTypeSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntityType to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.entityTypeResults = (_value.entityTypeResults || []).map(m => new FullTextSearchResponseEntityType.EntityTypeSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseEntityType.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get entityTypeResults() {
        return this._entityTypeResults;
    }
    set entityTypeResults(value) {
        this._entityTypeResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseEntityType.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            entityTypeResults: (this.entityTypeResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            entityTypeResults: (this.entityTypeResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseEntityType) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult
     */
    class EntityTypeSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new EntityTypeSearchResult();
            EntityTypeSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.language = _instance.language || '';
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
                        _instance.language = _reader.readString();
                        break;
                    case 4:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 7:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            EntityTypeSearchResult.refineValues(_instance);
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
            if (_instance.language) {
                _writer.writeString(3, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(4, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(5, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(6, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(7, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntityTypeSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            EntityTypeSearchResult.refineValues(this);
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
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            EntityTypeSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                language: this.language,
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
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseEntityType.EntityTypeSearchResult = EntityTypeSearchResult;
})(FullTextSearchResponseEntityType || (FullTextSearchResponseEntityType = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntity
 */
export class FullTextSearchResponseEntity {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseEntity'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseEntity();
        FullTextSearchResponseEntity.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.entityResults = _instance.entityResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseEntity.EntitySearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseEntity.EntitySearchResult
                        .deserializeBinaryFromReader);
                    (_instance.entityResults = _instance.entityResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseEntity.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.entityResults && _instance.entityResults.length) {
            _writer.writeRepeatedMessage(3, _instance.entityResults, FullTextSearchResponseEntity.EntitySearchResult.serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntity to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.entityResults = (_value.entityResults || []).map(m => new FullTextSearchResponseEntity.EntitySearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseEntity.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get entityResults() {
        return this._entityResults;
    }
    set entityResults(value) {
        this._entityResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseEntity.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            entityResults: (this.entityResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            entityResults: (this.entityResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseEntity) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult
     */
    class EntitySearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new EntitySearchResult();
            EntitySearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.entityTypeName = _instance.entityTypeName || '';
            _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
            _instance.language = _instance.language || '';
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
                        _instance.entityTypeName = _reader.readString();
                        break;
                    case 4:
                        _instance.entityTypeDisplayName = _reader.readString();
                        break;
                    case 5:
                        _instance.language = _reader.readString();
                        break;
                    case 6:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 9:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            EntitySearchResult.refineValues(_instance);
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
            if (_instance.entityTypeName) {
                _writer.writeString(3, _instance.entityTypeName);
            }
            if (_instance.entityTypeDisplayName) {
                _writer.writeString(4, _instance.entityTypeDisplayName);
            }
            if (_instance.language) {
                _writer.writeString(5, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(6, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(7, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(8, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(9, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntitySearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.entityTypeName = _value.entityTypeName;
            this.entityTypeDisplayName = _value.entityTypeDisplayName;
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            EntitySearchResult.refineValues(this);
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
        get entityTypeName() {
            return this._entityTypeName;
        }
        set entityTypeName(value) {
            this._entityTypeName = value;
        }
        get entityTypeDisplayName() {
            return this._entityTypeDisplayName;
        }
        set entityTypeDisplayName(value) {
            this._entityTypeDisplayName = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            EntitySearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                language: this.language,
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
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseEntity.EntitySearchResult = EntitySearchResult;
})(FullTextSearchResponseEntity || (FullTextSearchResponseEntity = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseEntitySynonym
 */
export class FullTextSearchResponseEntitySynonym {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseEntitySynonym'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseEntitySynonym();
        FullTextSearchResponseEntitySynonym.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.entitySynonymResults = _instance.entitySynonymResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.entitySynonymResults =
                        _instance.entitySynonymResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseEntitySynonym.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.entitySynonymResults &&
            _instance.entitySynonymResults.length) {
            _writer.writeRepeatedMessage(3, _instance.entitySynonymResults, FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseEntitySynonym to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.entitySynonymResults = (_value.entitySynonymResults || []).map(m => new FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseEntitySynonym.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get entitySynonymResults() {
        return this._entitySynonymResults;
    }
    set entitySynonymResults(value) {
        this._entitySynonymResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseEntitySynonym.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            entitySynonymResults: (this.entitySynonymResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            entitySynonymResults: (this.entitySynonymResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseEntitySynonym) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
     */
    class EntitySynonymSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new EntitySynonymSearchResult();
            EntitySynonymSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.entityTypeName = _instance.entityTypeName || '';
            _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
            _instance.entityName = _instance.entityName || '';
            _instance.entityDisplayName = _instance.entityDisplayName || '';
            _instance.language = _instance.language || '';
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
                        _instance.entityTypeName = _reader.readString();
                        break;
                    case 4:
                        _instance.entityTypeDisplayName = _reader.readString();
                        break;
                    case 5:
                        _instance.entityName = _reader.readString();
                        break;
                    case 6:
                        _instance.entityDisplayName = _reader.readString();
                        break;
                    case 7:
                        _instance.language = _reader.readString();
                        break;
                    case 8:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 10:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 11:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            EntitySynonymSearchResult.refineValues(_instance);
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
            if (_instance.entityTypeName) {
                _writer.writeString(3, _instance.entityTypeName);
            }
            if (_instance.entityTypeDisplayName) {
                _writer.writeString(4, _instance.entityTypeDisplayName);
            }
            if (_instance.entityName) {
                _writer.writeString(5, _instance.entityName);
            }
            if (_instance.entityDisplayName) {
                _writer.writeString(6, _instance.entityDisplayName);
            }
            if (_instance.language) {
                _writer.writeString(7, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(8, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(9, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(10, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(11, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntitySynonymSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.entityTypeName = _value.entityTypeName;
            this.entityTypeDisplayName = _value.entityTypeDisplayName;
            this.entityName = _value.entityName;
            this.entityDisplayName = _value.entityDisplayName;
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            EntitySynonymSearchResult.refineValues(this);
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
        get entityTypeName() {
            return this._entityTypeName;
        }
        set entityTypeName(value) {
            this._entityTypeName = value;
        }
        get entityTypeDisplayName() {
            return this._entityTypeDisplayName;
        }
        set entityTypeDisplayName(value) {
            this._entityTypeDisplayName = value;
        }
        get entityName() {
            return this._entityName;
        }
        set entityName(value) {
            this._entityName = value;
        }
        get entityDisplayName() {
            return this._entityDisplayName;
        }
        set entityDisplayName(value) {
            this._entityDisplayName = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            EntitySynonymSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                entityName: this.entityName,
                entityDisplayName: this.entityDisplayName,
                language: this.language,
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
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                entityName: this.entityName,
                entityDisplayName: this.entityDisplayName,
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult = EntitySynonymSearchResult;
})(FullTextSearchResponseEntitySynonym || (FullTextSearchResponseEntitySynonym = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntent
 */
export class FullTextSearchResponseIntent {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntent'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntent();
        FullTextSearchResponseIntent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentResults = _instance.intentResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntent.IntentSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntent.IntentSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentResults = _instance.intentResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentResults && _instance.intentResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentResults, FullTextSearchResponseIntent.IntentSearchResult.serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentResults = (_value.intentResults || []).map(m => new FullTextSearchResponseIntent.IntentSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntent.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentResults() {
        return this._intentResults;
    }
    set intentResults(value) {
        this._intentResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentResults: (this.intentResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentResults: (this.intentResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntent) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult
     */
    class IntentSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentSearchResult();
            IntentSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.domainName = _instance.domainName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.domainName = _reader.readString();
                        break;
                    case 4:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 5:
                        _instance.language = _reader.readString();
                        break;
                    case 6:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 9:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentSearchResult.refineValues(_instance);
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
            if (_instance.domainName) {
                _writer.writeString(3, _instance.domainName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(4, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(5, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(6, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(7, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(8, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(9, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.domainName = _value.domainName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentSearchResult.refineValues(this);
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
        get domainName() {
            return this._domainName;
        }
        set domainName(value) {
            this._domainName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                domainName: this.domainName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                domainName: this.domainName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntent.IntentSearchResult = IntentSearchResult;
})(FullTextSearchResponseIntent || (FullTextSearchResponseIntent = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextIn
 */
export class FullTextSearchResponseIntentContextIn {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentContextIn'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentContextIn();
        FullTextSearchResponseIntentContextIn.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentContextInResults = _instance.intentContextInResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentContextIn.IntentContextInSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentContextInResults =
                        _instance.intentContextInResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentContextIn.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentContextInResults &&
            _instance.intentContextInResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentContextInResults, FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentContextIn to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentContextInResults = (_value.intentContextInResults || []).map(m => new FullTextSearchResponseIntentContextIn.IntentContextInSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentContextIn.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentContextInResults() {
        return this._intentContextInResults;
    }
    set intentContextInResults(value) {
        this._intentContextInResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentContextIn.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentContextInResults: (this.intentContextInResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentContextInResults: (this.intentContextInResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentContextIn) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
     */
    class IntentContextInSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentContextInSearchResult();
            IntentContextInSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.intentName = _reader.readString();
                        break;
                    case 3:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 4:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 5:
                        _instance.language = _reader.readString();
                        break;
                    case 6:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 9:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentContextInSearchResult.refineValues(_instance);
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
            if (_instance.intentName) {
                _writer.writeString(2, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(3, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(4, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(5, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(6, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(7, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(8, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(9, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentContextInSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentContextInSearchResult.refineValues(this);
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentContextInSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentContextIn.IntentContextInSearchResult = IntentContextInSearchResult;
})(FullTextSearchResponseIntentContextIn || (FullTextSearchResponseIntentContextIn = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextOut
 */
export class FullTextSearchResponseIntentContextOut {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentContextOut'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentContextOut();
        FullTextSearchResponseIntentContextOut.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentContextOutResults = _instance.intentContextOutResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentContextOutResults =
                        _instance.intentContextOutResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentContextOut.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentContextOutResults &&
            _instance.intentContextOutResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentContextOutResults, FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentContextOut to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentContextOutResults = (_value.intentContextOutResults || []).map(m => new FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentContextOut.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentContextOutResults() {
        return this._intentContextOutResults;
    }
    set intentContextOutResults(value) {
        this._intentContextOutResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentContextOut.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentContextOutResults: (this.intentContextOutResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentContextOutResults: (this.intentContextOutResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentContextOut) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
     */
    class IntentContextOutSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentContextOutSearchResult();
            IntentContextOutSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.intentName = _reader.readString();
                        break;
                    case 3:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 4:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 5:
                        _instance.language = _reader.readString();
                        break;
                    case 6:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 9:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentContextOutSearchResult.refineValues(_instance);
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
            if (_instance.intentName) {
                _writer.writeString(2, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(3, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(4, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(5, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(6, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(7, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(8, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(9, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentContextOutSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentContextOutSearchResult.refineValues(this);
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentContextOutSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult = IntentContextOutSearchResult;
})(FullTextSearchResponseIntentContextOut || (FullTextSearchResponseIntentContextOut = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentUsersays
 */
export class FullTextSearchResponseIntentUsersays {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentUsersays'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentUsersays();
        FullTextSearchResponseIntentUsersays.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentUsersaysResults = _instance.intentUsersaysResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentUsersaysResults =
                        _instance.intentUsersaysResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentUsersays.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentUsersaysResults &&
            _instance.intentUsersaysResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentUsersaysResults, FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentUsersays to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentUsersaysResults = (_value.intentUsersaysResults || []).map(m => new FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentUsersays.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentUsersaysResults() {
        return this._intentUsersaysResults;
    }
    set intentUsersaysResults(value) {
        this._intentUsersaysResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentUsersays.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentUsersaysResults: (this.intentUsersaysResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentUsersaysResults: (this.intentUsersaysResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentUsersays) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
     */
    class IntentUsersaysSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentUsersaysSearchResult();
            IntentUsersaysSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.text = _instance.text || '';
            _instance.textAsEntityTypes = _instance.textAsEntityTypes || '';
            _instance.textAsEntityValues = _instance.textAsEntityValues || '';
            _instance.type = _instance.type || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.text = _reader.readString();
                        break;
                    case 3:
                        _instance.textAsEntityTypes = _reader.readString();
                        break;
                    case 4:
                        _instance.textAsEntityValues = _reader.readString();
                        break;
                    case 5:
                        _instance.type = _reader.readString();
                        break;
                    case 6:
                        _instance.intentName = _reader.readString();
                        break;
                    case 7:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 8:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 9:
                        _instance.language = _reader.readString();
                        break;
                    case 10:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 11:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 12:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 13:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentUsersaysSearchResult.refineValues(_instance);
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
            if (_instance.text) {
                _writer.writeString(2, _instance.text);
            }
            if (_instance.textAsEntityTypes) {
                _writer.writeString(3, _instance.textAsEntityTypes);
            }
            if (_instance.textAsEntityValues) {
                _writer.writeString(4, _instance.textAsEntityValues);
            }
            if (_instance.type) {
                _writer.writeString(5, _instance.type);
            }
            if (_instance.intentName) {
                _writer.writeString(6, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(7, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(8, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(9, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(10, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(11, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(12, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(13, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentUsersaysSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.text = _value.text;
            this.textAsEntityTypes = _value.textAsEntityTypes;
            this.textAsEntityValues = _value.textAsEntityValues;
            this.type = _value.type;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentUsersaysSearchResult.refineValues(this);
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
        }
        get textAsEntityTypes() {
            return this._textAsEntityTypes;
        }
        set textAsEntityTypes(value) {
            this._textAsEntityTypes = value;
        }
        get textAsEntityValues() {
            return this._textAsEntityValues;
        }
        set textAsEntityValues(value) {
            this._textAsEntityValues = value;
        }
        get type() {
            return this._type;
        }
        set type(value) {
            this._type = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentUsersaysSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                text: this.text,
                textAsEntityTypes: this.textAsEntityTypes,
                textAsEntityValues: this.textAsEntityValues,
                type: this.type,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                text: this.text,
                textAsEntityTypes: this.textAsEntityTypes,
                textAsEntityValues: this.textAsEntityValues,
                type: this.type,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult = IntentUsersaysSearchResult;
})(FullTextSearchResponseIntentUsersays || (FullTextSearchResponseIntentUsersays = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentTags
 */
export class FullTextSearchResponseIntentTags {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentTags'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentTags();
        FullTextSearchResponseIntentTags.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentTagsResults = _instance.intentTagsResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentTags.IntentTagsSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentTags.IntentTagsSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentTagsResults =
                        _instance.intentTagsResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentTags.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentTagsResults && _instance.intentTagsResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentTagsResults, FullTextSearchResponseIntentTags.IntentTagsSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentTags to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentTagsResults = (_value.intentTagsResults || []).map(m => new FullTextSearchResponseIntentTags.IntentTagsSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentTags.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentTagsResults() {
        return this._intentTagsResults;
    }
    set intentTagsResults(value) {
        this._intentTagsResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentTags.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentTagsResults: (this.intentTagsResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentTagsResults: (this.intentTagsResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentTags) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult
     */
    class IntentTagsSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentTagsSearchResult();
            IntentTagsSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.text = _instance.text || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.text = _reader.readString();
                        break;
                    case 3:
                        _instance.intentName = _reader.readString();
                        break;
                    case 4:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 5:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 6:
                        _instance.language = _reader.readString();
                        break;
                    case 7:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 10:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentTagsSearchResult.refineValues(_instance);
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
            if (_instance.text) {
                _writer.writeString(2, _instance.text);
            }
            if (_instance.intentName) {
                _writer.writeString(3, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(4, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(5, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(6, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(7, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(8, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(9, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(10, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentTagsSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.text = _value.text;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentTagsSearchResult.refineValues(this);
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentTagsSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                text: this.text,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                text: this.text,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentTags.IntentTagsSearchResult = IntentTagsSearchResult;
})(FullTextSearchResponseIntentTags || (FullTextSearchResponseIntentTags = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentResponse
 */
export class FullTextSearchResponseIntentResponse {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentResponse();
        FullTextSearchResponseIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentResponseResults = _instance.intentResponseResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentResponse.IntentResponseSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentResponse.IntentResponseSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentResponseResults =
                        _instance.intentResponseResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentResponseResults &&
            _instance.intentResponseResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentResponseResults, FullTextSearchResponseIntentResponse.IntentResponseSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentResponseResults = (_value.intentResponseResults || []).map(m => new FullTextSearchResponseIntentResponse.IntentResponseSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentResponse.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentResponseResults() {
        return this._intentResponseResults;
    }
    set intentResponseResults(value) {
        this._intentResponseResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentResponseResults: (this.intentResponseResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentResponseResults: (this.intentResponseResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentResponse) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult
     */
    class IntentResponseSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentResponseSearchResult();
            IntentResponseSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.text = _instance.text || '';
            _instance.platform = _instance.platform || '';
            _instance.responseType = _instance.responseType || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.text = _reader.readString();
                        break;
                    case 2:
                        _instance.platform = _reader.readString();
                        break;
                    case 3:
                        _instance.responseType = _reader.readString();
                        break;
                    case 4:
                        _instance.intentName = _reader.readString();
                        break;
                    case 5:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 6:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 7:
                        _instance.language = _reader.readString();
                        break;
                    case 8:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 10:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 11:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentResponseSearchResult.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.text) {
                _writer.writeString(1, _instance.text);
            }
            if (_instance.platform) {
                _writer.writeString(2, _instance.platform);
            }
            if (_instance.responseType) {
                _writer.writeString(3, _instance.responseType);
            }
            if (_instance.intentName) {
                _writer.writeString(4, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(5, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(6, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(7, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(8, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(9, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(10, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(11, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentResponseSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.text = _value.text;
            this.platform = _value.platform;
            this.responseType = _value.responseType;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentResponseSearchResult.refineValues(this);
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
        }
        get platform() {
            return this._platform;
        }
        set platform(value) {
            this._platform = value;
        }
        get responseType() {
            return this._responseType;
        }
        set responseType(value) {
            this._responseType = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentResponseSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                text: this.text,
                platform: this.platform,
                responseType: this.responseType,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                text: this.text,
                platform: this.platform,
                responseType: this.responseType,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentResponse.IntentResponseSearchResult = IntentResponseSearchResult;
})(FullTextSearchResponseIntentResponse || (FullTextSearchResponseIntentResponse = {}));
/**
 * Message implementation for ondewo.nlu.FullTextSearchResponseIntentParameters
 */
export class FullTextSearchResponseIntentParameters {
    static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentParameters'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FullTextSearchResponseIntentParameters();
        FullTextSearchResponseIntentParameters.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentParametersResults = _instance.intentParametersResults || [];
        _instance.term = _instance.term || '';
        _instance.elasticQuery = _instance.elasticQuery || '';
        _instance.time = _instance.time || 0;
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new FullTextSearchResponseIntentParameters.IntentParametersSearchResult();
                    _reader.readMessage(messageInitializer3, FullTextSearchResponseIntentParameters.IntentParametersSearchResult
                        .deserializeBinaryFromReader);
                    (_instance.intentParametersResults =
                        _instance.intentParametersResults || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.term = _reader.readString();
                    break;
                case 5:
                    _instance.elasticQuery = _reader.readString();
                    break;
                case 6:
                    _instance.time = _reader.readFloat();
                    break;
                case 7:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FullTextSearchResponseIntentParameters.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentParametersResults &&
            _instance.intentParametersResults.length) {
            _writer.writeRepeatedMessage(3, _instance.intentParametersResults, FullTextSearchResponseIntentParameters.IntentParametersSearchResult
                .serializeBinaryToWriter);
        }
        if (_instance.term) {
            _writer.writeString(4, _instance.term);
        }
        if (_instance.elasticQuery) {
            _writer.writeString(5, _instance.elasticQuery);
        }
        if (_instance.time) {
            _writer.writeFloat(6, _instance.time);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(7, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FullTextSearchResponseIntentParameters to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentParametersResults = (_value.intentParametersResults || []).map(m => new FullTextSearchResponseIntentParameters.IntentParametersSearchResult(m));
        this.term = _value.term;
        this.elasticQuery = _value.elasticQuery;
        this.time = _value.time;
        this.nextPageToken = _value.nextPageToken;
        FullTextSearchResponseIntentParameters.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentParametersResults() {
        return this._intentParametersResults;
    }
    set intentParametersResults(value) {
        this._intentParametersResults = value;
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
    }
    get elasticQuery() {
        return this._elasticQuery;
    }
    set elasticQuery(value) {
        this._elasticQuery = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
        FullTextSearchResponseIntentParameters.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentParametersResults: (this.intentParametersResults || []).map(m => m.toObject()),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentParametersResults: (this.intentParametersResults || []).map(m => m.toProtobufJSON(options)),
            term: this.term,
            elasticQuery: this.elasticQuery,
            time: this.time,
            nextPageToken: this.nextPageToken
        };
    }
}
(function (FullTextSearchResponseIntentParameters) {
    /**
     * Message implementation for ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult
     */
    class IntentParametersSearchResult {
        static { this.id = 'ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new IntentParametersSearchResult();
            IntentParametersSearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.parameterName = _instance.parameterName || '';
            _instance.parameterDisplayName = _instance.parameterDisplayName || '';
            _instance.intentName = _instance.intentName || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.tags = _instance.tags || [];
            _instance.language = _instance.language || '';
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
                        _instance.parameterName = _reader.readString();
                        break;
                    case 2:
                        _instance.parameterDisplayName = _reader.readString();
                        break;
                    case 3:
                        _instance.intentName = _reader.readString();
                        break;
                    case 4:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 5:
                        (_instance.tags = _instance.tags || []).push(_reader.readString());
                        break;
                    case 6:
                        _instance.language = _reader.readString();
                        break;
                    case 7:
                        _instance.createdAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.createdAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.modifiedAt = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.modifiedAt, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.createdBy = _reader.readString();
                        break;
                    case 10:
                        _instance.modifiedBy = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            IntentParametersSearchResult.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.parameterName) {
                _writer.writeString(1, _instance.parameterName);
            }
            if (_instance.parameterDisplayName) {
                _writer.writeString(2, _instance.parameterDisplayName);
            }
            if (_instance.intentName) {
                _writer.writeString(3, _instance.intentName);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(4, _instance.intentDisplayName);
            }
            if (_instance.tags && _instance.tags.length) {
                _writer.writeRepeatedString(5, _instance.tags);
            }
            if (_instance.language) {
                _writer.writeString(6, _instance.language);
            }
            if (_instance.createdAt) {
                _writer.writeMessage(7, _instance.createdAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.modifiedAt) {
                _writer.writeMessage(8, _instance.modifiedAt, googleProtobuf003.Timestamp.serializeBinaryToWriter);
            }
            if (_instance.createdBy) {
                _writer.writeString(9, _instance.createdBy);
            }
            if (_instance.modifiedBy) {
                _writer.writeString(10, _instance.modifiedBy);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of IntentParametersSearchResult to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.parameterName = _value.parameterName;
            this.parameterDisplayName = _value.parameterDisplayName;
            this.intentName = _value.intentName;
            this.intentDisplayName = _value.intentDisplayName;
            this.tags = (_value.tags || []).slice();
            this.language = _value.language;
            this.createdAt = _value.createdAt
                ? new googleProtobuf003.Timestamp(_value.createdAt)
                : undefined;
            this.modifiedAt = _value.modifiedAt
                ? new googleProtobuf003.Timestamp(_value.modifiedAt)
                : undefined;
            this.createdBy = _value.createdBy;
            this.modifiedBy = _value.modifiedBy;
            IntentParametersSearchResult.refineValues(this);
        }
        get parameterName() {
            return this._parameterName;
        }
        set parameterName(value) {
            this._parameterName = value;
        }
        get parameterDisplayName() {
            return this._parameterDisplayName;
        }
        set parameterDisplayName(value) {
            this._parameterDisplayName = value;
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get tags() {
            return this._tags;
        }
        set tags(value) {
            this._tags = value;
        }
        get language() {
            return this._language;
        }
        set language(value) {
            this._language = value;
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
            IntentParametersSearchResult.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                parameterName: this.parameterName,
                parameterDisplayName: this.parameterDisplayName,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
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
                parameterName: this.parameterName,
                parameterDisplayName: this.parameterDisplayName,
                intentName: this.intentName,
                intentDisplayName: this.intentDisplayName,
                tags: (this.tags || []).slice(),
                language: this.language,
                createdAt: this.createdAt
                    ? this.createdAt.toProtobufJSON(options)
                    : null,
                modifiedAt: this.modifiedAt
                    ? this.modifiedAt.toProtobufJSON(options)
                    : null,
                createdBy: this.createdBy,
                modifiedBy: this.modifiedBy
            };
        }
    }
    FullTextSearchResponseIntentParameters.IntentParametersSearchResult = IntentParametersSearchResult;
})(FullTextSearchResponseIntentParameters || (FullTextSearchResponseIntentParameters = {}));
/**
 * Message implementation for ondewo.nlu.ReindexAgentRequest
 */
export class ReindexAgentRequest {
    static { this.id = 'ondewo.nlu.ReindexAgentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ReindexAgentRequest();
        ReindexAgentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.branchName = _instance.branchName || '';
        _instance.indexTypes = _instance.indexTypes || [];
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.branchName = _reader.readString();
                    break;
                case 3:
                    (_instance.indexTypes = _instance.indexTypes || []).push(...(_reader.readPackedEnum() || []));
                    break;
                default:
                    _reader.skipField();
            }
        }
        ReindexAgentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.branchName) {
            _writer.writeString(2, _instance.branchName);
        }
        if (_instance.indexTypes && _instance.indexTypes.length) {
            _writer.writePackedEnum(3, _instance.indexTypes);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReindexAgentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.branchName = _value.branchName;
        this.indexTypes = (_value.indexTypes || []).slice();
        ReindexAgentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branchName() {
        return this._branchName;
    }
    set branchName(value) {
        this._branchName = value;
    }
    get indexTypes() {
        return this._indexTypes;
    }
    set indexTypes(value) {
        this._indexTypes = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ReindexAgentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            branchName: this.branchName,
            indexTypes: (this.indexTypes || []).slice()
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
            parent: this.parent,
            branchName: this.branchName,
            indexTypes: (this.indexTypes || []).map(v => FullTextSearchRequest.QueryType[v])
        };
    }
}