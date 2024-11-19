import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export var SortingMode;
(function (SortingMode) {
    SortingMode[SortingMode["ASCENDING"] = 0] = "ASCENDING";
    SortingMode[SortingMode["DESCENDING"] = 1] = "DESCENDING";
})(SortingMode || (SortingMode = {}));
export var NotificationFlaggedStatus;
(function (NotificationFlaggedStatus) {
    NotificationFlaggedStatus[NotificationFlaggedStatus["NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED"] = 0] = "NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED";
    NotificationFlaggedStatus[NotificationFlaggedStatus["NOTIFICATION_FLAGGED_STATUS_FLAGGED"] = 1] = "NOTIFICATION_FLAGGED_STATUS_FLAGGED";
    NotificationFlaggedStatus[NotificationFlaggedStatus["NOTIFICATION_FLAGGED_STATUS_UNFLAGGED"] = 2] = "NOTIFICATION_FLAGGED_STATUS_UNFLAGGED";
})(NotificationFlaggedStatus || (NotificationFlaggedStatus = {}));
export var NotificationReadStatus;
(function (NotificationReadStatus) {
    NotificationReadStatus[NotificationReadStatus["NOTIFICATION_READ_STATUS_UNSPECIFIED"] = 0] = "NOTIFICATION_READ_STATUS_UNSPECIFIED";
    NotificationReadStatus[NotificationReadStatus["NOTIFICATION_READ_STATUS_READ"] = 1] = "NOTIFICATION_READ_STATUS_READ";
    NotificationReadStatus[NotificationReadStatus["NOTIFICATION_READ_STATUS_UNREAD"] = 2] = "NOTIFICATION_READ_STATUS_UNREAD";
})(NotificationReadStatus || (NotificationReadStatus = {}));
export var NotificationVisibility;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_UNSPECIFIED"] = 0] = "NOTIFICATION_VISIBILITY_UNSPECIFIED";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_USER"] = 1] = "NOTIFICATION_VISIBILITY_USER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT"] = 2] = "NOTIFICATION_VISIBILITY_PROJECT";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_OWNER"] = 3] = "NOTIFICATION_VISIBILITY_PROJECT_OWNER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_ADMIN"] = 4] = "NOTIFICATION_VISIBILITY_PROJECT_ADMIN";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER"] = 5] = "NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_USER"] = 6] = "NOTIFICATION_VISIBILITY_PROJECT_USER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR"] = 7] = "NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_PROJECT_INACTIVE"] = 8] = "NOTIFICATION_VISIBILITY_PROJECT_INACTIVE";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_SERVER_ADMIN"] = 9] = "NOTIFICATION_VISIBILITY_SERVER_ADMIN";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_SERVER_MANAGER"] = 10] = "NOTIFICATION_VISIBILITY_SERVER_MANAGER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_SERVER_USER"] = 11] = "NOTIFICATION_VISIBILITY_SERVER_USER";
    NotificationVisibility[NotificationVisibility["NOTIFICATION_VISIBILITY_SERVER_INACTIVE"] = 12] = "NOTIFICATION_VISIBILITY_SERVER_INACTIVE";
})(NotificationVisibility || (NotificationVisibility = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NOTIFICATION_TYPE_UNSPECIFIED"] = 0] = "NOTIFICATION_TYPE_UNSPECIFIED";
    NotificationType[NotificationType["NOTIFICATION_TYPE_DEBUG"] = 1] = "NOTIFICATION_TYPE_DEBUG";
    NotificationType[NotificationType["NOTIFICATION_TYPE_WARNING"] = 2] = "NOTIFICATION_TYPE_WARNING";
    NotificationType[NotificationType["NOTIFICATION_TYPE_INFO"] = 3] = "NOTIFICATION_TYPE_INFO";
    NotificationType[NotificationType["NOTIFICATION_TYPE_ERROR"] = 4] = "NOTIFICATION_TYPE_ERROR";
    NotificationType[NotificationType["NOTIFICATION_TYPE_NEWS"] = 5] = "NOTIFICATION_TYPE_NEWS";
})(NotificationType || (NotificationType = {}));
export var NotificationOrigin;
(function (NotificationOrigin) {
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_UNSPECIFIED"] = 0] = "NOTIFICATION_ORIGIN_UNSPECIFIED";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_AIM"] = 1] = "NOTIFICATION_ORIGIN_ONDEWO_AIM";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_BPI"] = 2] = "NOTIFICATION_ORIGIN_ONDEWO_BPI";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_CSI"] = 3] = "NOTIFICATION_ORIGIN_ONDEWO_CSI";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_NLU"] = 4] = "NOTIFICATION_ORIGIN_ONDEWO_NLU";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_S2T"] = 5] = "NOTIFICATION_ORIGIN_ONDEWO_S2T";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_SIP"] = 6] = "NOTIFICATION_ORIGIN_ONDEWO_SIP";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_T2S"] = 7] = "NOTIFICATION_ORIGIN_ONDEWO_T2S";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_VTSI"] = 8] = "NOTIFICATION_ORIGIN_ONDEWO_VTSI";
    NotificationOrigin[NotificationOrigin["NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ"] = 9] = "NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ";
})(NotificationOrigin || (NotificationOrigin = {}));
/**
 * Message implementation for ondewo.nlu.StatResponse
 */
export class StatResponse {
    static { this.id = 'ondewo.nlu.StatResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StatResponse();
        StatResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.value = _instance.value || 0;
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
                    _instance.value = _reader.readUint32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StatResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeUint32(1, _instance.value);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StatResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        StatResponse.refineValues(this);
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
        StatResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            value: this.value
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
            value: this.value
        };
    }
}
/**
 * Message implementation for ondewo.nlu.Comment
 */
export class Comment {
    static { this.id = 'ondewo.nlu.Comment'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Comment();
        Comment.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.text = _instance.text || '';
        _instance.userId = _instance.userId || '';
        _instance.commentAboutName = _instance.commentAboutName || '';
        _instance.parentCommentName = _instance.parentCommentName || '';
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
                    _instance.userId = _reader.readString();
                    break;
                case 4:
                    _instance.commentAboutName = _reader.readString();
                    break;
                case 5:
                    _instance.parentCommentName = _reader.readString();
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
                default:
                    _reader.skipField();
            }
        }
        Comment.refineValues(_instance);
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
        if (_instance.userId) {
            _writer.writeString(3, _instance.userId);
        }
        if (_instance.commentAboutName) {
            _writer.writeString(4, _instance.commentAboutName);
        }
        if (_instance.parentCommentName) {
            _writer.writeString(5, _instance.parentCommentName);
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
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Comment to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.text = _value.text;
        this.userId = _value.userId;
        this.commentAboutName = _value.commentAboutName;
        this.parentCommentName = _value.parentCommentName;
        this.createdAt = _value.createdAt
            ? new googleProtobuf001.Timestamp(_value.createdAt)
            : undefined;
        this.modifiedAt = _value.modifiedAt
            ? new googleProtobuf001.Timestamp(_value.modifiedAt)
            : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        Comment.refineValues(this);
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
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get commentAboutName() {
        return this._commentAboutName;
    }
    set commentAboutName(value) {
        this._commentAboutName = value;
    }
    get parentCommentName() {
        return this._parentCommentName;
    }
    set parentCommentName(value) {
        this._parentCommentName = value;
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
        Comment.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            text: this.text,
            userId: this.userId,
            commentAboutName: this.commentAboutName,
            parentCommentName: this.parentCommentName,
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
            userId: this.userId,
            commentAboutName: this.commentAboutName,
            parentCommentName: this.parentCommentName,
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
 * Message implementation for ondewo.nlu.Notification
 */
export class Notification {
    static { this.id = 'ondewo.nlu.Notification'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Notification();
        Notification.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.userName = _instance.userName || '';
        _instance.title = _instance.title || '';
        _instance.descriptionShort = _instance.descriptionShort || '';
        _instance.descriptionLong = _instance.descriptionLong || '';
        _instance.notificationFlaggedStatus =
            _instance.notificationFlaggedStatus || 0;
        _instance.notificationFlaggedTimestamp =
            _instance.notificationFlaggedTimestamp || undefined;
        _instance.notificationReadStatus = _instance.notificationReadStatus || 0;
        _instance.notificationReadTimestamp =
            _instance.notificationReadTimestamp || undefined;
        _instance.notificationOrigin = _instance.notificationOrigin || 0;
        _instance.originName = _instance.originName || '';
        _instance.originLanguage = _instance.originLanguage || '';
        _instance.notificationType = _instance.notificationType || 0;
        _instance.notificationVisibility = _instance.notificationVisibility || 0;
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
                    _instance.userName = _reader.readString();
                    break;
                case 3:
                    _instance.title = _reader.readString();
                    break;
                case 4:
                    _instance.descriptionShort = _reader.readString();
                    break;
                case 5:
                    _instance.descriptionLong = _reader.readString();
                    break;
                case 6:
                    _instance.notificationFlaggedStatus = _reader.readEnum();
                    break;
                case 7:
                    _instance.notificationFlaggedTimestamp = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.notificationFlaggedTimestamp, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.notificationReadStatus = _reader.readEnum();
                    break;
                case 9:
                    _instance.notificationReadTimestamp = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.notificationReadTimestamp, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.notificationOrigin = _reader.readEnum();
                    break;
                case 11:
                    _instance.originName = _reader.readString();
                    break;
                case 12:
                    _instance.originLanguage = _reader.readString();
                    break;
                case 13:
                    _instance.notificationType = _reader.readEnum();
                    break;
                case 14:
                    _instance.notificationVisibility = _reader.readEnum();
                    break;
                case 15:
                    _instance.createdAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 16:
                    _instance.modifiedAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 17:
                    _instance.createdBy = _reader.readString();
                    break;
                case 18:
                    _instance.modifiedBy = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Notification.refineValues(_instance);
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
        if (_instance.userName) {
            _writer.writeString(2, _instance.userName);
        }
        if (_instance.title) {
            _writer.writeString(3, _instance.title);
        }
        if (_instance.descriptionShort) {
            _writer.writeString(4, _instance.descriptionShort);
        }
        if (_instance.descriptionLong) {
            _writer.writeString(5, _instance.descriptionLong);
        }
        if (_instance.notificationFlaggedStatus) {
            _writer.writeEnum(6, _instance.notificationFlaggedStatus);
        }
        if (_instance.notificationFlaggedTimestamp) {
            _writer.writeMessage(7, _instance.notificationFlaggedTimestamp, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.notificationReadStatus) {
            _writer.writeEnum(8, _instance.notificationReadStatus);
        }
        if (_instance.notificationReadTimestamp) {
            _writer.writeMessage(9, _instance.notificationReadTimestamp, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.notificationOrigin) {
            _writer.writeEnum(10, _instance.notificationOrigin);
        }
        if (_instance.originName) {
            _writer.writeString(11, _instance.originName);
        }
        if (_instance.originLanguage) {
            _writer.writeString(12, _instance.originLanguage);
        }
        if (_instance.notificationType) {
            _writer.writeEnum(13, _instance.notificationType);
        }
        if (_instance.notificationVisibility) {
            _writer.writeEnum(14, _instance.notificationVisibility);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(15, _instance.createdAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(16, _instance.modifiedAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.createdBy) {
            _writer.writeString(17, _instance.createdBy);
        }
        if (_instance.modifiedBy) {
            _writer.writeString(18, _instance.modifiedBy);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Notification to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.userName = _value.userName;
        this.title = _value.title;
        this.descriptionShort = _value.descriptionShort;
        this.descriptionLong = _value.descriptionLong;
        this.notificationFlaggedStatus = _value.notificationFlaggedStatus;
        this.notificationFlaggedTimestamp = _value.notificationFlaggedTimestamp
            ? new googleProtobuf001.Timestamp(_value.notificationFlaggedTimestamp)
            : undefined;
        this.notificationReadStatus = _value.notificationReadStatus;
        this.notificationReadTimestamp = _value.notificationReadTimestamp
            ? new googleProtobuf001.Timestamp(_value.notificationReadTimestamp)
            : undefined;
        this.notificationOrigin = _value.notificationOrigin;
        this.originName = _value.originName;
        this.originLanguage = _value.originLanguage;
        this.notificationType = _value.notificationType;
        this.notificationVisibility = _value.notificationVisibility;
        this.createdAt = _value.createdAt
            ? new googleProtobuf001.Timestamp(_value.createdAt)
            : undefined;
        this.modifiedAt = _value.modifiedAt
            ? new googleProtobuf001.Timestamp(_value.modifiedAt)
            : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        Notification.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get descriptionShort() {
        return this._descriptionShort;
    }
    set descriptionShort(value) {
        this._descriptionShort = value;
    }
    get descriptionLong() {
        return this._descriptionLong;
    }
    set descriptionLong(value) {
        this._descriptionLong = value;
    }
    get notificationFlaggedStatus() {
        return this._notificationFlaggedStatus;
    }
    set notificationFlaggedStatus(value) {
        this._notificationFlaggedStatus = value;
    }
    get notificationFlaggedTimestamp() {
        return this._notificationFlaggedTimestamp;
    }
    set notificationFlaggedTimestamp(value) {
        this._notificationFlaggedTimestamp = value;
    }
    get notificationReadStatus() {
        return this._notificationReadStatus;
    }
    set notificationReadStatus(value) {
        this._notificationReadStatus = value;
    }
    get notificationReadTimestamp() {
        return this._notificationReadTimestamp;
    }
    set notificationReadTimestamp(value) {
        this._notificationReadTimestamp = value;
    }
    get notificationOrigin() {
        return this._notificationOrigin;
    }
    set notificationOrigin(value) {
        this._notificationOrigin = value;
    }
    get originName() {
        return this._originName;
    }
    set originName(value) {
        this._originName = value;
    }
    get originLanguage() {
        return this._originLanguage;
    }
    set originLanguage(value) {
        this._originLanguage = value;
    }
    get notificationType() {
        return this._notificationType;
    }
    set notificationType(value) {
        this._notificationType = value;
    }
    get notificationVisibility() {
        return this._notificationVisibility;
    }
    set notificationVisibility(value) {
        this._notificationVisibility = value;
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
        Notification.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            userName: this.userName,
            title: this.title,
            descriptionShort: this.descriptionShort,
            descriptionLong: this.descriptionLong,
            notificationFlaggedStatus: this.notificationFlaggedStatus,
            notificationFlaggedTimestamp: this.notificationFlaggedTimestamp
                ? this.notificationFlaggedTimestamp.toObject()
                : undefined,
            notificationReadStatus: this.notificationReadStatus,
            notificationReadTimestamp: this.notificationReadTimestamp
                ? this.notificationReadTimestamp.toObject()
                : undefined,
            notificationOrigin: this.notificationOrigin,
            originName: this.originName,
            originLanguage: this.originLanguage,
            notificationType: this.notificationType,
            notificationVisibility: this.notificationVisibility,
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
            userName: this.userName,
            title: this.title,
            descriptionShort: this.descriptionShort,
            descriptionLong: this.descriptionLong,
            notificationFlaggedStatus: NotificationFlaggedStatus[this.notificationFlaggedStatus === null ||
                this.notificationFlaggedStatus === undefined
                ? 0
                : this.notificationFlaggedStatus],
            notificationFlaggedTimestamp: this.notificationFlaggedTimestamp
                ? this.notificationFlaggedTimestamp.toProtobufJSON(options)
                : null,
            notificationReadStatus: NotificationReadStatus[this.notificationReadStatus === null ||
                this.notificationReadStatus === undefined
                ? 0
                : this.notificationReadStatus],
            notificationReadTimestamp: this.notificationReadTimestamp
                ? this.notificationReadTimestamp.toProtobufJSON(options)
                : null,
            notificationOrigin: NotificationOrigin[this.notificationOrigin === null ||
                this.notificationOrigin === undefined
                ? 0
                : this.notificationOrigin],
            originName: this.originName,
            originLanguage: this.originLanguage,
            notificationType: NotificationType[this.notificationType === null || this.notificationType === undefined
                ? 0
                : this.notificationType],
            notificationVisibility: NotificationVisibility[this.notificationVisibility === null ||
                this.notificationVisibility === undefined
                ? 0
                : this.notificationVisibility],
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
 * Message implementation for ondewo.nlu.AddNotificationsRequest
 */
export class AddNotificationsRequest {
    static { this.id = 'ondewo.nlu.AddNotificationsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddNotificationsRequest();
        AddNotificationsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notifications = _instance.notifications || [];
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
                    const messageInitializer1 = new Notification();
                    _reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
                    (_instance.notifications = _instance.notifications || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddNotificationsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notifications && _instance.notifications.length) {
            _writer.writeRepeatedMessage(1, _instance.notifications, Notification.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddNotificationsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notifications = (_value.notifications || []).map(m => new Notification(m));
        AddNotificationsRequest.refineValues(this);
    }
    get notifications() {
        return this._notifications;
    }
    set notifications(value) {
        this._notifications = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddNotificationsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notifications: (this.notifications || []).map(m => m.toObject())
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
            notifications: (this.notifications || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.AddNotificationsResponse
 */
export class AddNotificationsResponse {
    static { this.id = 'ondewo.nlu.AddNotificationsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddNotificationsResponse();
        AddNotificationsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notifications = _instance.notifications || [];
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
                    const messageInitializer1 = new Notification();
                    _reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
                    (_instance.notifications = _instance.notifications || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddNotificationsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notifications && _instance.notifications.length) {
            _writer.writeRepeatedMessage(1, _instance.notifications, Notification.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddNotificationsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notifications = (_value.notifications || []).map(m => new Notification(m));
        AddNotificationsResponse.refineValues(this);
    }
    get notifications() {
        return this._notifications;
    }
    set notifications(value) {
        this._notifications = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddNotificationsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notifications: (this.notifications || []).map(m => m.toObject())
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
            notifications: (this.notifications || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.NotificationFilter
 */
export class NotificationFilter {
    static { this.id = 'ondewo.nlu.NotificationFilter'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new NotificationFilter();
        NotificationFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCodes = _instance.languageCodes || [];
        _instance.notificationOrigins = _instance.notificationOrigins || [];
        _instance.notificationVisibilities =
            _instance.notificationVisibilities || [];
        _instance.notificationFlaggedStatus =
            _instance.notificationFlaggedStatus || [];
        _instance.notificationReadStatus = _instance.notificationReadStatus || [];
        _instance.earliest = _instance.earliest || undefined;
        _instance.latest = _instance.latest || undefined;
        _instance.userNames = _instance.userNames || [];
        _instance.originNames = _instance.originNames || [];
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
                    (_instance.notificationOrigins =
                        _instance.notificationOrigins || []).push(...(_reader.readPackedEnum() || []));
                    break;
                case 3:
                    (_instance.notificationVisibilities =
                        _instance.notificationVisibilities || []).push(...(_reader.readPackedEnum() || []));
                    break;
                case 4:
                    (_instance.notificationFlaggedStatus =
                        _instance.notificationFlaggedStatus || []).push(...(_reader.readPackedEnum() || []));
                    break;
                case 5:
                    (_instance.notificationReadStatus =
                        _instance.notificationReadStatus || []).push(...(_reader.readPackedEnum() || []));
                    break;
                case 6:
                    _instance.earliest = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.earliest, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.latest = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.latest, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                case 8:
                    (_instance.userNames = _instance.userNames || []).push(_reader.readString());
                    break;
                case 9:
                    (_instance.originNames = _instance.originNames || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        NotificationFilter.refineValues(_instance);
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
        if (_instance.notificationOrigins && _instance.notificationOrigins.length) {
            _writer.writePackedEnum(2, _instance.notificationOrigins);
        }
        if (_instance.notificationVisibilities &&
            _instance.notificationVisibilities.length) {
            _writer.writePackedEnum(3, _instance.notificationVisibilities);
        }
        if (_instance.notificationFlaggedStatus &&
            _instance.notificationFlaggedStatus.length) {
            _writer.writePackedEnum(4, _instance.notificationFlaggedStatus);
        }
        if (_instance.notificationReadStatus &&
            _instance.notificationReadStatus.length) {
            _writer.writePackedEnum(5, _instance.notificationReadStatus);
        }
        if (_instance.earliest) {
            _writer.writeMessage(6, _instance.earliest, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.latest) {
            _writer.writeMessage(7, _instance.latest, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.userNames && _instance.userNames.length) {
            _writer.writeRepeatedString(8, _instance.userNames);
        }
        if (_instance.originNames && _instance.originNames.length) {
            _writer.writeRepeatedString(9, _instance.originNames);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NotificationFilter to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCodes = (_value.languageCodes || []).slice();
        this.notificationOrigins = (_value.notificationOrigins || []).slice();
        this.notificationVisibilities = (_value.notificationVisibilities || []).slice();
        this.notificationFlaggedStatus = (_value.notificationFlaggedStatus || []).slice();
        this.notificationReadStatus = (_value.notificationReadStatus || []).slice();
        this.earliest = _value.earliest
            ? new googleProtobuf001.Timestamp(_value.earliest)
            : undefined;
        this.latest = _value.latest
            ? new googleProtobuf001.Timestamp(_value.latest)
            : undefined;
        this.userNames = (_value.userNames || []).slice();
        this.originNames = (_value.originNames || []).slice();
        NotificationFilter.refineValues(this);
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get notificationOrigins() {
        return this._notificationOrigins;
    }
    set notificationOrigins(value) {
        this._notificationOrigins = value;
    }
    get notificationVisibilities() {
        return this._notificationVisibilities;
    }
    set notificationVisibilities(value) {
        this._notificationVisibilities = value;
    }
    get notificationFlaggedStatus() {
        return this._notificationFlaggedStatus;
    }
    set notificationFlaggedStatus(value) {
        this._notificationFlaggedStatus = value;
    }
    get notificationReadStatus() {
        return this._notificationReadStatus;
    }
    set notificationReadStatus(value) {
        this._notificationReadStatus = value;
    }
    get earliest() {
        return this._earliest;
    }
    set earliest(value) {
        this._earliest = value;
    }
    get latest() {
        return this._latest;
    }
    set latest(value) {
        this._latest = value;
    }
    get userNames() {
        return this._userNames;
    }
    set userNames(value) {
        this._userNames = value;
    }
    get originNames() {
        return this._originNames;
    }
    set originNames(value) {
        this._originNames = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        NotificationFilter.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            notificationOrigins: (this.notificationOrigins || []).slice(),
            notificationVisibilities: (this.notificationVisibilities || []).slice(),
            notificationFlaggedStatus: (this.notificationFlaggedStatus || []).slice(),
            notificationReadStatus: (this.notificationReadStatus || []).slice(),
            earliest: this.earliest ? this.earliest.toObject() : undefined,
            latest: this.latest ? this.latest.toObject() : undefined,
            userNames: (this.userNames || []).slice(),
            originNames: (this.originNames || []).slice()
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
            notificationOrigins: (this.notificationOrigins || []).map(v => NotificationOrigin[v]),
            notificationVisibilities: (this.notificationVisibilities || []).map(v => NotificationVisibility[v]),
            notificationFlaggedStatus: (this.notificationFlaggedStatus || []).map(v => NotificationFlaggedStatus[v]),
            notificationReadStatus: (this.notificationReadStatus || []).map(v => NotificationReadStatus[v]),
            earliest: this.earliest ? this.earliest.toProtobufJSON(options) : null,
            latest: this.latest ? this.latest.toProtobufJSON(options) : null,
            userNames: (this.userNames || []).slice(),
            originNames: (this.originNames || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListNotificationsRequest
 */
export class ListNotificationsRequest {
    static { this.id = 'ondewo.nlu.ListNotificationsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListNotificationsRequest();
        ListNotificationsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notificationFilter = _instance.notificationFilter || undefined;
        _instance.pageToken = _instance.pageToken || '';
        _instance.fieldMask = _instance.fieldMask || undefined;
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
                    _instance.notificationFilter = new NotificationFilter();
                    _reader.readMessage(_instance.notificationFilter, NotificationFilter.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.pageToken = _reader.readString();
                    break;
                case 3:
                    _instance.fieldMask = new googleProtobuf000.FieldMask();
                    _reader.readMessage(_instance.fieldMask, googleProtobuf000.FieldMask.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListNotificationsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notificationFilter) {
            _writer.writeMessage(1, _instance.notificationFilter, NotificationFilter.serializeBinaryToWriter);
        }
        if (_instance.pageToken) {
            _writer.writeString(2, _instance.pageToken);
        }
        if (_instance.fieldMask) {
            _writer.writeMessage(3, _instance.fieldMask, googleProtobuf000.FieldMask.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListNotificationsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notificationFilter = _value.notificationFilter
            ? new NotificationFilter(_value.notificationFilter)
            : undefined;
        this.pageToken = _value.pageToken;
        this.fieldMask = _value.fieldMask
            ? new googleProtobuf000.FieldMask(_value.fieldMask)
            : undefined;
        ListNotificationsRequest.refineValues(this);
    }
    get notificationFilter() {
        return this._notificationFilter;
    }
    set notificationFilter(value) {
        this._notificationFilter = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get fieldMask() {
        return this._fieldMask;
    }
    set fieldMask(value) {
        this._fieldMask = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListNotificationsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notificationFilter: this.notificationFilter
                ? this.notificationFilter.toObject()
                : undefined,
            pageToken: this.pageToken,
            fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
            notificationFilter: this.notificationFilter
                ? this.notificationFilter.toProtobufJSON(options)
                : null,
            pageToken: this.pageToken,
            fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListNotificationsResponse
 */
export class ListNotificationsResponse {
    static { this.id = 'ondewo.nlu.ListNotificationsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListNotificationsResponse();
        ListNotificationsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notifications = _instance.notifications || [];
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
                    const messageInitializer1 = new Notification();
                    _reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
                    (_instance.notifications = _instance.notifications || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListNotificationsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notifications && _instance.notifications.length) {
            _writer.writeRepeatedMessage(1, _instance.notifications, Notification.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListNotificationsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notifications = (_value.notifications || []).map(m => new Notification(m));
        ListNotificationsResponse.refineValues(this);
    }
    get notifications() {
        return this._notifications;
    }
    set notifications(value) {
        this._notifications = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListNotificationsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notifications: (this.notifications || []).map(m => m.toObject())
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
            notifications: (this.notifications || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export class SetNotificationsFlaggedStatusRequest {
    static { this.id = 'ondewo.nlu.SetNotificationsFlaggedStatusRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SetNotificationsFlaggedStatusRequest();
        SetNotificationsFlaggedStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notificationNames = _instance.notificationNames || [];
        _instance.flagged = _instance.flagged || [];
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
                    (_instance.notificationNames =
                        _instance.notificationNames || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.flagged = _instance.flagged || []).push(...(_reader.readPackedBool() || []));
                    break;
                default:
                    _reader.skipField();
            }
        }
        SetNotificationsFlaggedStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notificationNames && _instance.notificationNames.length) {
            _writer.writeRepeatedString(1, _instance.notificationNames);
        }
        if (_instance.flagged && _instance.flagged.length) {
            _writer.writePackedBool(2, _instance.flagged);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetNotificationsFlaggedStatusRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notificationNames = (_value.notificationNames || []).slice();
        this.flagged = (_value.flagged || []).slice();
        SetNotificationsFlaggedStatusRequest.refineValues(this);
    }
    get notificationNames() {
        return this._notificationNames;
    }
    set notificationNames(value) {
        this._notificationNames = value;
    }
    get flagged() {
        return this._flagged;
    }
    set flagged(value) {
        this._flagged = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SetNotificationsFlaggedStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notificationNames: (this.notificationNames || []).slice(),
            flagged: (this.flagged || []).slice()
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
            notificationNames: (this.notificationNames || []).slice(),
            flagged: (this.flagged || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsReadStatusRequest
 */
export class SetNotificationsReadStatusRequest {
    static { this.id = 'ondewo.nlu.SetNotificationsReadStatusRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SetNotificationsReadStatusRequest();
        SetNotificationsReadStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.notificationNames = _instance.notificationNames || [];
        _instance.flagged = _instance.flagged || [];
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
                    (_instance.notificationNames =
                        _instance.notificationNames || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.flagged = _instance.flagged || []).push(...(_reader.readPackedBool() || []));
                    break;
                default:
                    _reader.skipField();
            }
        }
        SetNotificationsReadStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.notificationNames && _instance.notificationNames.length) {
            _writer.writeRepeatedString(1, _instance.notificationNames);
        }
        if (_instance.flagged && _instance.flagged.length) {
            _writer.writePackedBool(2, _instance.flagged);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetNotificationsReadStatusRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.notificationNames = (_value.notificationNames || []).slice();
        this.flagged = (_value.flagged || []).slice();
        SetNotificationsReadStatusRequest.refineValues(this);
    }
    get notificationNames() {
        return this._notificationNames;
    }
    set notificationNames(value) {
        this._notificationNames = value;
    }
    get flagged() {
        return this._flagged;
    }
    set flagged(value) {
        this._flagged = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SetNotificationsReadStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            notificationNames: (this.notificationNames || []).slice(),
            flagged: (this.flagged || []).slice()
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
            notificationNames: (this.notificationNames || []).slice(),
            flagged: (this.flagged || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.KeyValuePair
 */
export class KeyValuePair {
    static { this.id = 'ondewo.nlu.KeyValuePair'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new KeyValuePair();
        KeyValuePair.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.key = _instance.key || '';
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
                    _instance.intValue = _reader.readInt32();
                    break;
                case 3:
                    _instance.floatValue = _reader.readFloat();
                    break;
                case 4:
                    _instance.doubleValue = _reader.readDouble();
                    break;
                case 5:
                    _instance.stringValue = _reader.readString();
                    break;
                case 6:
                    _instance.createdAt = new googleProtobuf001.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf001.Timestamp.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        KeyValuePair.refineValues(_instance);
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
        if (_instance.intValue || _instance.intValue === 0) {
            _writer.writeInt32(2, _instance.intValue);
        }
        if (_instance.floatValue || _instance.floatValue === 0) {
            _writer.writeFloat(3, _instance.floatValue);
        }
        if (_instance.doubleValue || _instance.doubleValue === 0) {
            _writer.writeDouble(4, _instance.doubleValue);
        }
        if (_instance.stringValue || _instance.stringValue === '') {
            _writer.writeString(5, _instance.stringValue);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(6, _instance.createdAt, googleProtobuf001.Timestamp.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KeyValuePair to deeply clone from
     */
    constructor(_value) {
        this._value = KeyValuePair.ValueCase.none;
        _value = _value || {};
        this.key = _value.key;
        this.intValue = _value.intValue;
        this.floatValue = _value.floatValue;
        this.doubleValue = _value.doubleValue;
        this.stringValue = _value.stringValue;
        this.createdAt = _value.createdAt
            ? new googleProtobuf001.Timestamp(_value.createdAt)
            : undefined;
        KeyValuePair.refineValues(this);
    }
    get key() {
        return this._key;
    }
    set key(value) {
        this._key = value;
    }
    get intValue() {
        return this._intValue;
    }
    set intValue(value) {
        if (value !== undefined && value !== null) {
            this._floatValue = this._doubleValue = this._stringValue = this._createdAt = undefined;
            this._value = KeyValuePair.ValueCase.intValue;
        }
        this._intValue = value;
    }
    get floatValue() {
        return this._floatValue;
    }
    set floatValue(value) {
        if (value !== undefined && value !== null) {
            this._intValue = this._doubleValue = this._stringValue = this._createdAt = undefined;
            this._value = KeyValuePair.ValueCase.floatValue;
        }
        this._floatValue = value;
    }
    get doubleValue() {
        return this._doubleValue;
    }
    set doubleValue(value) {
        if (value !== undefined && value !== null) {
            this._intValue = this._floatValue = this._stringValue = this._createdAt = undefined;
            this._value = KeyValuePair.ValueCase.doubleValue;
        }
        this._doubleValue = value;
    }
    get stringValue() {
        return this._stringValue;
    }
    set stringValue(value) {
        if (value !== undefined && value !== null) {
            this._intValue = this._floatValue = this._doubleValue = this._createdAt = undefined;
            this._value = KeyValuePair.ValueCase.stringValue;
        }
        this._stringValue = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        if (value !== undefined && value !== null) {
            this._intValue = this._floatValue = this._doubleValue = this._stringValue = undefined;
            this._value = KeyValuePair.ValueCase.createdAt;
        }
        this._createdAt = value;
    }
    get value() {
        return this._value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        KeyValuePair.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            key: this.key,
            intValue: this.intValue,
            floatValue: this.floatValue,
            doubleValue: this.doubleValue,
            stringValue: this.stringValue,
            createdAt: this.createdAt ? this.createdAt.toObject() : undefined
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
            intValue: this.intValue === null || this.intValue === undefined
                ? null
                : this.intValue,
            floatValue: this.floatValue === null || this.floatValue === undefined
                ? null
                : this.floatValue,
            doubleValue: this.doubleValue === null || this.doubleValue === undefined
                ? null
                : this.doubleValue,
            stringValue: this.stringValue === null || this.stringValue === undefined
                ? null
                : this.stringValue,
            createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
        };
    }
}
(function (KeyValuePair) {
    let ValueCase;
    (function (ValueCase) {
        ValueCase[ValueCase["none"] = 0] = "none";
        ValueCase[ValueCase["intValue"] = 1] = "intValue";
        ValueCase[ValueCase["floatValue"] = 2] = "floatValue";
        ValueCase[ValueCase["doubleValue"] = 3] = "doubleValue";
        ValueCase[ValueCase["stringValue"] = 4] = "stringValue";
        ValueCase[ValueCase["createdAt"] = 5] = "createdAt";
    })(ValueCase = KeyValuePair.ValueCase || (KeyValuePair.ValueCase = {}));
})(KeyValuePair || (KeyValuePair = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvY29tbW9uLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxNQUFNLENBQU4sSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLHVEQUFhLENBQUE7SUFDYix5REFBYyxDQUFBO0FBQ2hCLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQUNELE1BQU0sQ0FBTixJQUFZLHlCQUlYO0FBSkQsV0FBWSx5QkFBeUI7SUFDbkMsK0lBQTJDLENBQUE7SUFDM0MsdUlBQXVDLENBQUE7SUFDdkMsMklBQXlDLENBQUE7QUFDM0MsQ0FBQyxFQUpXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFJcEM7QUFDRCxNQUFNLENBQU4sSUFBWSxzQkFJWDtBQUpELFdBQVksc0JBQXNCO0lBQ2hDLG1JQUF3QyxDQUFBO0lBQ3hDLHFIQUFpQyxDQUFBO0lBQ2pDLHlIQUFtQyxDQUFBO0FBQ3JDLENBQUMsRUFKVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSWpDO0FBQ0QsTUFBTSxDQUFOLElBQVksc0JBY1g7QUFkRCxXQUFZLHNCQUFzQjtJQUNoQyxpSUFBdUMsQ0FBQTtJQUN2QyxtSEFBZ0MsQ0FBQTtJQUNoQyx5SEFBbUMsQ0FBQTtJQUNuQyxxSUFBeUMsQ0FBQTtJQUN6QyxxSUFBeUMsQ0FBQTtJQUN6Qyw2SUFBNkMsQ0FBQTtJQUM3QyxtSUFBd0MsQ0FBQTtJQUN4QywySUFBNEMsQ0FBQTtJQUM1QywySUFBNEMsQ0FBQTtJQUM1QyxtSUFBd0MsQ0FBQTtJQUN4Qyx3SUFBMkMsQ0FBQTtJQUMzQyxr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SSxDQUFDLFdBQVc7WUFDdEIsV0FBVyxFQUNULElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUztnQkFDekQsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMxRSxDQUFDO0lBQ0osQ0FBQzs7QUFFSCxXQUFjLFlBQVk7SUF3QnhCLElBQVksU0FPWDtJQVBELFdBQVksU0FBUztRQUNuQix5Q0FBUSxDQUFBO1FBQ1IsaURBQVksQ0FBQTtRQUNaLHFEQUFjLENBQUE7UUFDZCx1REFBZSxDQUFBO1FBQ2YsdURBQWUsQ0FBQTtRQUNmLG1EQUFhLENBQUE7SUFDZixDQUFDLEVBUFcsU0FBUyxHQUFULHNCQUFTLEtBQVQsc0JBQVMsUUFPcEI7QUFDSCxDQUFDLEVBaENhLFlBQVksS0FBWixZQUFZLFFBZ0N6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5leHBvcnQgZW51bSBTb3J0aW5nTW9kZSB7XG4gIEFTQ0VORElORyA9IDAsXG4gIERFU0NFTkRJTkcgPSAxXG59XG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzIHtcbiAgTk9USUZJQ0FUSU9OX0ZMQUdHRURfU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgTk9USUZJQ0FUSU9OX0ZMQUdHRURfU1RBVFVTX0ZMQUdHRUQgPSAxLFxuICBOT1RJRklDQVRJT05fRkxBR0dFRF9TVEFUVVNfVU5GTEFHR0VEID0gMlxufVxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uUmVhZFN0YXR1cyB7XG4gIE5PVElGSUNBVElPTl9SRUFEX1NUQVRVU19VTlNQRUNJRklFRCA9IDAsXG4gIE5PVElGSUNBVElPTl9SRUFEX1NUQVRVU19SRUFEID0gMSxcbiAgTk9USUZJQ0FUSU9OX1JFQURfU1RBVFVTX1VOUkVBRCA9IDJcbn1cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblZpc2liaWxpdHkge1xuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9VTlNQRUNJRklFRCA9IDAsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1VTRVIgPSAxLFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9QUk9KRUNUID0gMixcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfUFJPSkVDVF9PV05FUiA9IDMsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1RfQURNSU4gPSA0LFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9QUk9KRUNUX0RFVkVMT1BFUiA9IDUsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1RfVVNFUiA9IDYsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1RfRVhFQ1VUT1IgPSA3LFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9QUk9KRUNUX0lOQUNUSVZFID0gOCxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfU0VSVkVSX0FETUlOID0gOSxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfU0VSVkVSX01BTkFHRVIgPSAxMCxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfU0VSVkVSX1VTRVIgPSAxMSxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfU0VSVkVSX0lOQUNUSVZFID0gMTJcbn1cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGUge1xuICBOT1RJRklDQVRJT05fVFlQRV9VTlNQRUNJRklFRCA9IDAsXG4gIE5PVElGSUNBVElPTl9UWVBFX0RFQlVHID0gMSxcbiAgTk9USUZJQ0FUSU9OX1RZUEVfV0FSTklORyA9IDIsXG4gIE5PVElGSUNBVElPTl9UWVBFX0lORk8gPSAzLFxuICBOT1RJRklDQVRJT05fVFlQRV9FUlJPUiA9IDQsXG4gIE5PVElGSUNBVElPTl9UWVBFX05FV1MgPSA1XG59XG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25PcmlnaW4ge1xuICBOT1RJRklDQVRJT05fT1JJR0lOX1VOU1BFQ0lGSUVEID0gMCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fQUlNID0gMSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fQlBJID0gMixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fQ1NJID0gMyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fTkxVID0gNCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fUzJUID0gNSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fU0lQID0gNixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fVDJTID0gNyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fVlRTSSA9IDgsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fT05ERVdPX1ZUU0lfUkFCQklUTVEgPSA5XG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU3RhdFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlN0YXRSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0YXRSZXNwb25zZSgpO1xuICAgIFN0YXRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN0YXRSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9pbnN0YW5jZS52YWx1ZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3RhdFJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9yZWFkZXIucmVhZFVpbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3RhdFJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU3RhdFJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnZhbHVlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlVWludDMyKDEsIF9pbnN0YW5jZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN0YXRSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdGF0UmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudmFsdWUgPSBfdmFsdWUudmFsdWU7XG4gICAgU3RhdFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0YXRSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdGF0UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN0YXRSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdGF0UmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0YXRSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdGF0UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHZhbHVlOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNvbW1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1lbnQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNvbW1lbnQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21tZW50KCk7XG4gICAgQ29tbWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENvbW1lbnQpIHtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnVzZXJJZCA9IF9pbnN0YW5jZS51c2VySWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNvbW1lbnRBYm91dE5hbWUgPSBfaW5zdGFuY2UuY29tbWVudEFib3V0TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGFyZW50Q29tbWVudE5hbWUgPSBfaW5zdGFuY2UucGFyZW50Q29tbWVudE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IF9pbnN0YW5jZS5jcmVhdGVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gX2luc3RhbmNlLm1vZGlmaWVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfaW5zdGFuY2UuY3JlYXRlZEJ5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEJ5ID0gX2luc3RhbmNlLm1vZGlmaWVkQnkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDb21tZW50LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbW1lbnRBYm91dE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnRDb21tZW50TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEJ5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRCeSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ29tbWVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IENvbW1lbnQsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UubmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXNlcklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS51c2VySWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbW1lbnRBYm91dE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmNvbW1lbnRBYm91dE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudENvbW1lbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5wYXJlbnRDb21tZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RpZmllZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDgsIF9pbnN0YW5jZS5jcmVhdGVkQnkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGlmaWVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOSwgX2luc3RhbmNlLm1vZGlmaWVkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tbWVudEFib3V0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnRDb21tZW50TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9jcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX21vZGlmaWVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2NyZWF0ZWRCeTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RpZmllZEJ5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDb21tZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENvbW1lbnQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIHRoaXMudXNlcklkID0gX3ZhbHVlLnVzZXJJZDtcbiAgICB0aGlzLmNvbW1lbnRBYm91dE5hbWUgPSBfdmFsdWUuY29tbWVudEFib3V0TmFtZTtcbiAgICB0aGlzLnBhcmVudENvbW1lbnROYW1lID0gX3ZhbHVlLnBhcmVudENvbW1lbnROYW1lO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gX3ZhbHVlLmNyZWF0ZWRBdFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKF92YWx1ZS5jcmVhdGVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1vZGlmaWVkQXQgPSBfdmFsdWUubW9kaWZpZWRBdFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKF92YWx1ZS5tb2RpZmllZEF0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jcmVhdGVkQnkgPSBfdmFsdWUuY3JlYXRlZEJ5O1xuICAgIHRoaXMubW9kaWZpZWRCeSA9IF92YWx1ZS5tb2RpZmllZEJ5O1xuICAgIENvbW1lbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cbiAgc2V0IHVzZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbW1lbnRBYm91dE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudEFib3V0TmFtZTtcbiAgfVxuICBzZXQgY29tbWVudEFib3V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tbWVudEFib3V0TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnRDb21tZW50TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRDb21tZW50TmFtZTtcbiAgfVxuICBzZXQgcGFyZW50Q29tbWVudE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudENvbW1lbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3JlYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGlmaWVkQXQoKTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZpZWRBdDtcbiAgfVxuICBzZXQgbW9kaWZpZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbW9kaWZpZWRBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEJ5O1xuICB9XG4gIHNldCBjcmVhdGVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RpZmllZEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmaWVkQnk7XG4gIH1cbiAgc2V0IG1vZGlmaWVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGlmaWVkQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDb21tZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENvbW1lbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgY29tbWVudEFib3V0TmFtZTogdGhpcy5jb21tZW50QWJvdXROYW1lLFxuICAgICAgcGFyZW50Q29tbWVudE5hbWU6IHRoaXMucGFyZW50Q29tbWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdCA/IHRoaXMubW9kaWZpZWRBdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENvbW1lbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgY29tbWVudEFib3V0TmFtZTogdGhpcy5jb21tZW50QWJvdXROYW1lLFxuICAgICAgcGFyZW50Q29tbWVudE5hbWU6IHRoaXMucGFyZW50Q29tbWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbW9kaWZpZWRBdDogdGhpcy5tb2RpZmllZEF0XG4gICAgICAgID8gdGhpcy5tb2RpZmllZEF0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5jcmVhdGVkQnksXG4gICAgICBtb2RpZmllZEJ5OiB0aGlzLm1vZGlmaWVkQnlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENvbW1lbnQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENvbW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgY29tbWVudEFib3V0TmFtZTogc3RyaW5nO1xuICAgIHBhcmVudENvbW1lbnROYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIG1vZGlmaWVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENvbW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgY29tbWVudEFib3V0TmFtZTogc3RyaW5nO1xuICAgIHBhcmVudENvbW1lbnROYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1vZGlmaWVkQXQ6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5Ob3RpZmljYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTm90aWZpY2F0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgTm90aWZpY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTm90aWZpY2F0aW9uKSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlck5hbWUgPSBfaW5zdGFuY2UudXNlck5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvblNob3J0ID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uU2hvcnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uTG9uZyA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbkxvbmcgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPVxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgfHwgMDtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCA9XG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyB8fCAwO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wID1cbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2luID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbiB8fCAwO1xuICAgIF9pbnN0YW5jZS5vcmlnaW5OYW1lID0gX2luc3RhbmNlLm9yaWdpbk5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLm9yaWdpbkxhbmd1YWdlID0gX2luc3RhbmNlLm9yaWdpbkxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25UeXBlID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvblR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0eSA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXR5IHx8IDA7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IF9pbnN0YW5jZS5jcmVhdGVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gX2luc3RhbmNlLm1vZGlmaWVkQXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfaW5zdGFuY2UuY3JlYXRlZEJ5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5tb2RpZmllZEJ5ID0gX2luc3RhbmNlLm1vZGlmaWVkQnkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBOb3RpZmljYXRpb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VyTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb25TaG9ydCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uTG9uZyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXAsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbiA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2Uub3JpZ2luTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5vcmlnaW5MYW5ndWFnZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25UeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXR5ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEJ5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQnkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE5vdGlmaWNhdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE5vdGlmaWNhdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VyTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudXNlck5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpdGxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb25TaG9ydCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuZGVzY3JpcHRpb25TaG9ydCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb25Mb25nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbkxvbmcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDYsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXAgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oOCwgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEwLCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2luKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vcmlnaW5OYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDExLCBfaW5zdGFuY2Uub3JpZ2luTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uub3JpZ2luTGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTIsIF9pbnN0YW5jZS5vcmlnaW5MYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMTMsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25UeXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxNCwgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZWRBdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE1LFxuICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0IGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGlmaWVkQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNixcbiAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDE3LCBfaW5zdGFuY2UuY3JlYXRlZEJ5KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RpZmllZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDE4LCBfaW5zdGFuY2UubW9kaWZpZWRCeSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF91c2VyTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvblNob3J0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uTG9uZzogc3RyaW5nO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wPzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25SZWFkU3RhdHVzOiBOb3RpZmljYXRpb25SZWFkU3RhdHVzO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wPzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25PcmlnaW46IE5vdGlmaWNhdGlvbk9yaWdpbjtcbiAgcHJpdmF0ZSBfb3JpZ2luTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vcmlnaW5MYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25WaXNpYmlsaXR5OiBOb3RpZmljYXRpb25WaXNpYmlsaXR5O1xuICBwcml2YXRlIF9jcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX21vZGlmaWVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2NyZWF0ZWRCeTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RpZmllZEJ5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBOb3RpZmljYXRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Tm90aWZpY2F0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLnVzZXJOYW1lID0gX3ZhbHVlLnVzZXJOYW1lO1xuICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvblNob3J0ID0gX3ZhbHVlLmRlc2NyaXB0aW9uU2hvcnQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbkxvbmcgPSBfdmFsdWUuZGVzY3JpcHRpb25Mb25nO1xuICAgIHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyA9IF92YWx1ZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzO1xuICAgIHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCA9IF92YWx1ZS5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgPSBfdmFsdWUubm90aWZpY2F0aW9uUmVhZFN0YXR1cztcbiAgICB0aGlzLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAgPSBfdmFsdWUubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKF92YWx1ZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ub3RpZmljYXRpb25PcmlnaW4gPSBfdmFsdWUubm90aWZpY2F0aW9uT3JpZ2luO1xuICAgIHRoaXMub3JpZ2luTmFtZSA9IF92YWx1ZS5vcmlnaW5OYW1lO1xuICAgIHRoaXMub3JpZ2luTGFuZ3VhZ2UgPSBfdmFsdWUub3JpZ2luTGFuZ3VhZ2U7XG4gICAgdGhpcy5ub3RpZmljYXRpb25UeXBlID0gX3ZhbHVlLm5vdGlmaWNhdGlvblR5cGU7XG4gICAgdGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXR5ID0gX3ZhbHVlLm5vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubW9kaWZpZWRBdCA9IF92YWx1ZS5tb2RpZmllZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm1vZGlmaWVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IF92YWx1ZS5jcmVhdGVkQnk7XG4gICAgdGhpcy5tb2RpZmllZEJ5ID0gX3ZhbHVlLm1vZGlmaWVkQnk7XG4gICAgTm90aWZpY2F0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJOYW1lO1xuICB9XG4gIHNldCB1c2VyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvblNob3J0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uU2hvcnQ7XG4gIH1cbiAgc2V0IGRlc2NyaXB0aW9uU2hvcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uU2hvcnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb25Mb25nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uTG9uZztcbiAgfVxuICBzZXQgZGVzY3JpcHRpb25Mb25nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkxvbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cygpOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cztcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyh2YWx1ZTogTm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cykge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wKFxuICAgIHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25SZWFkU3RhdHVzKCk6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25SZWFkU3RhdHVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25SZWFkU3RhdHVzKHZhbHVlOiBOb3RpZmljYXRpb25SZWFkU3RhdHVzKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25SZWFkVGltZXN0YW1wKCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAoXG4gICAgdmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbk9yaWdpbigpOiBOb3RpZmljYXRpb25PcmlnaW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25PcmlnaW47XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbk9yaWdpbih2YWx1ZTogTm90aWZpY2F0aW9uT3JpZ2luKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uT3JpZ2luID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9yaWdpbk5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luTmFtZTtcbiAgfVxuICBzZXQgb3JpZ2luTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JpZ2luTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvcmlnaW5MYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5MYW5ndWFnZTtcbiAgfVxuICBzZXQgb3JpZ2luTGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29yaWdpbkxhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvblR5cGUoKTogTm90aWZpY2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblR5cGU7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvblR5cGUodmFsdWU6IE5vdGlmaWNhdGlvblR5cGUpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvblZpc2liaWxpdHkoKTogTm90aWZpY2F0aW9uVmlzaWJpbGl0eSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvblZpc2liaWxpdHkodmFsdWU6IE5vdGlmaWNhdGlvblZpc2liaWxpdHkpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25WaXNpYmlsaXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3JlYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGlmaWVkQXQoKTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZpZWRBdDtcbiAgfVxuICBzZXQgbW9kaWZpZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbW9kaWZpZWRBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEJ5O1xuICB9XG4gIHNldCBjcmVhdGVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RpZmllZEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmaWVkQnk7XG4gIH1cbiAgc2V0IG1vZGlmaWVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGlmaWVkQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBOb3RpZmljYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTm90aWZpY2F0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdXNlck5hbWU6IHRoaXMudXNlck5hbWUsXG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uU2hvcnQ6IHRoaXMuZGVzY3JpcHRpb25TaG9ydCxcbiAgICAgIGRlc2NyaXB0aW9uTG9uZzogdGhpcy5kZXNjcmlwdGlvbkxvbmcsXG4gICAgICBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzOiB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMsXG4gICAgICBub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wOiB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXBcbiAgICAgICAgPyB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXAudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6IHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyxcbiAgICAgIG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA6IHRoaXMubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcFxuICAgICAgICA/IHRoaXMubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbm90aWZpY2F0aW9uT3JpZ2luOiB0aGlzLm5vdGlmaWNhdGlvbk9yaWdpbixcbiAgICAgIG9yaWdpbk5hbWU6IHRoaXMub3JpZ2luTmFtZSxcbiAgICAgIG9yaWdpbkxhbmd1YWdlOiB0aGlzLm9yaWdpbkxhbmd1YWdlLFxuICAgICAgbm90aWZpY2F0aW9uVHlwZTogdGhpcy5ub3RpZmljYXRpb25UeXBlLFxuICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eTogdGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXR5LFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtb2RpZmllZEF0OiB0aGlzLm1vZGlmaWVkQXQgPyB0aGlzLm1vZGlmaWVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5jcmVhdGVkQnksXG4gICAgICBtb2RpZmllZEJ5OiB0aGlzLm1vZGlmaWVkQnlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBOb3RpZmljYXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb25TaG9ydDogdGhpcy5kZXNjcmlwdGlvblNob3J0LFxuICAgICAgZGVzY3JpcHRpb25Mb25nOiB0aGlzLmRlc2NyaXB0aW9uTG9uZyxcbiAgICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6XG4gICAgICAgIE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNbXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNcbiAgICAgICAgXSxcbiAgICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXA6IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcFxuICAgICAgICA/IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBub3RpZmljYXRpb25SZWFkU3RhdHVzOlxuICAgICAgICBOb3RpZmljYXRpb25SZWFkU3RhdHVzW1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzXG4gICAgICAgIF0sXG4gICAgICBub3RpZmljYXRpb25SZWFkVGltZXN0YW1wOiB0aGlzLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXBcbiAgICAgICAgPyB0aGlzLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbm90aWZpY2F0aW9uT3JpZ2luOlxuICAgICAgICBOb3RpZmljYXRpb25PcmlnaW5bXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25PcmlnaW4gPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk9yaWdpbiA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5ub3RpZmljYXRpb25PcmlnaW5cbiAgICAgICAgXSxcbiAgICAgIG9yaWdpbk5hbWU6IHRoaXMub3JpZ2luTmFtZSxcbiAgICAgIG9yaWdpbkxhbmd1YWdlOiB0aGlzLm9yaWdpbkxhbmd1YWdlLFxuICAgICAgbm90aWZpY2F0aW9uVHlwZTpcbiAgICAgICAgTm90aWZpY2F0aW9uVHlwZVtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblR5cGUgPT09IG51bGwgfHwgdGhpcy5ub3RpZmljYXRpb25UeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm5vdGlmaWNhdGlvblR5cGVcbiAgICAgICAgXSxcbiAgICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdHk6XG4gICAgICAgIE5vdGlmaWNhdGlvblZpc2liaWxpdHlbXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXR5ID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXR5ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdHlcbiAgICAgICAgXSxcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jcmVhdGVkQXQgPyB0aGlzLmNyZWF0ZWRBdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtb2RpZmllZEF0OiB0aGlzLm1vZGlmaWVkQXRcbiAgICAgICAgPyB0aGlzLm1vZGlmaWVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBOb3RpZmljYXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb25TaG9ydDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uTG9uZzogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM7XG4gICAgbm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBub3RpZmljYXRpb25SZWFkU3RhdHVzOiBOb3RpZmljYXRpb25SZWFkU3RhdHVzO1xuICAgIG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgbm90aWZpY2F0aW9uT3JpZ2luOiBOb3RpZmljYXRpb25PcmlnaW47XG4gICAgb3JpZ2luTmFtZTogc3RyaW5nO1xuICAgIG9yaWdpbkxhbmd1YWdlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uVHlwZTogTm90aWZpY2F0aW9uVHlwZTtcbiAgICBub3RpZmljYXRpb25WaXNpYmlsaXR5OiBOb3RpZmljYXRpb25WaXNpYmlsaXR5O1xuICAgIGNyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBtb2RpZmllZEF0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgIG1vZGlmaWVkQnk6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBOb3RpZmljYXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb25TaG9ydDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uTG9uZzogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25SZWFkVGltZXN0YW1wOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG5vdGlmaWNhdGlvbk9yaWdpbjogc3RyaW5nO1xuICAgIG9yaWdpbk5hbWU6IHN0cmluZztcbiAgICBvcmlnaW5MYW5ndWFnZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvblR5cGU6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25WaXNpYmlsaXR5OiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1vZGlmaWVkQXQ6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5BZGROb3RpZmljYXRpb25zUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBOb3RpZmljYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGROb3RpZmljYXRpb25zUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25zICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgYXMgYW55LFxuICAgICAgICBOb3RpZmljYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucz86IE5vdGlmaWNhdGlvbltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkTm90aWZpY2F0aW9uc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IChfdmFsdWUubm90aWZpY2F0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgTm90aWZpY2F0aW9uKG0pXG4gICAgKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbnMoKTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25zKHZhbHVlOiBOb3RpZmljYXRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6ICh0aGlzLm5vdGlmaWNhdGlvbnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6ICh0aGlzLm5vdGlmaWNhdGlvbnMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGROb3RpZmljYXRpb25zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbm90aWZpY2F0aW9ucz86IE5vdGlmaWNhdGlvbi5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGROb3RpZmljYXRpb25zUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25zIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBOb3RpZmljYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgJiYgX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyBhcyBhbnksXG4gICAgICAgIE5vdGlmaWNhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub3RpZmljYXRpb25zPzogTm90aWZpY2F0aW9uW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSAoX3ZhbHVlLm5vdGlmaWNhdGlvbnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IE5vdGlmaWNhdGlvbihtKVxuICAgICk7XG4gICAgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9ucygpOiBOb3RpZmljYXRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnM7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbnModmFsdWU6IE5vdGlmaWNhdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25zOiAodGhpcy5ub3RpZmljYXRpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uczogKHRoaXMubm90aWZpY2F0aW9ucyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGROb3RpZmljYXRpb25zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb24uQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGROb3RpZmljYXRpb25zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbi5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTm90aWZpY2F0aW9uRmlsdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25GaWx0ZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lk5vdGlmaWNhdGlvbkZpbHRlcic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbkZpbHRlcigpO1xuICAgIE5vdGlmaWNhdGlvbkZpbHRlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE5vdGlmaWNhdGlvbkZpbHRlcikge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2lucyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzID1cbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPVxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgfHwgW107XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuZWFybGllc3QgPSBfaW5zdGFuY2UuZWFybGllc3QgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sYXRlc3QgPSBfaW5zdGFuY2UubGF0ZXN0IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudXNlck5hbWVzID0gX2luc3RhbmNlLnVzZXJOYW1lcyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uub3JpZ2luTmFtZXMgPSBfaW5zdGFuY2Uub3JpZ2luTmFtZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBOb3RpZmljYXRpb25GaWx0ZXIsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAuLi4oX3JlYWRlci5yZWFkUGFja2VkRW51bSgpIHx8IFtdKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmVhcmxpZXN0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZWFybGllc3QsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXRlc3QgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sYXRlc3QsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIChfaW5zdGFuY2UudXNlck5hbWVzID0gX2luc3RhbmNlLnVzZXJOYW1lcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIChfaW5zdGFuY2Uub3JpZ2luTmFtZXMgPSBfaW5zdGFuY2Uub3JpZ2luTmFtZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBOb3RpZmljYXRpb25GaWx0ZXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBOb3RpZmljYXRpb25GaWx0ZXIsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2lucyAmJiBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2lucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDIsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW5zKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyAmJlxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDMsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyAmJlxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkRW51bSg0LCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzICYmXG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDUsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lYXJsaWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5lYXJsaWVzdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXRlc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UubGF0ZXN0IGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJOYW1lcyAmJiBfaW5zdGFuY2UudXNlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDgsIF9pbnN0YW5jZS51c2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9yaWdpbk5hbWVzICYmIF9pbnN0YW5jZS5vcmlnaW5OYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg5LCBfaW5zdGFuY2Uub3JpZ2luTmFtZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25PcmlnaW5zOiBOb3RpZmljYXRpb25PcmlnaW5bXTtcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzOiBOb3RpZmljYXRpb25WaXNpYmlsaXR5W107XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNbXTtcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uUmVhZFN0YXR1czogTm90aWZpY2F0aW9uUmVhZFN0YXR1c1tdO1xuICBwcml2YXRlIF9lYXJsaWVzdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfbGF0ZXN0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wO1xuICBwcml2YXRlIF91c2VyTmFtZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9vcmlnaW5OYW1lczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBOb3RpZmljYXRpb25GaWx0ZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Tm90aWZpY2F0aW9uRmlsdGVyLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZXMgPSAoX3ZhbHVlLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25PcmlnaW5zID0gKF92YWx1ZS5ub3RpZmljYXRpb25PcmlnaW5zIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzID0gKFxuICAgICAgX3ZhbHVlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyB8fCBbXVxuICAgICkuc2xpY2UoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPSAoXG4gICAgICBfdmFsdWUubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyB8fCBbXVxuICAgICkuc2xpY2UoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgPSAoX3ZhbHVlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5lYXJsaWVzdCA9IF92YWx1ZS5lYXJsaWVzdFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKF92YWx1ZS5lYXJsaWVzdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGF0ZXN0ID0gX3ZhbHVlLmxhdGVzdFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wKF92YWx1ZS5sYXRlc3QpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVzZXJOYW1lcyA9IChfdmFsdWUudXNlck5hbWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMub3JpZ2luTmFtZXMgPSAoX3ZhbHVlLm9yaWdpbk5hbWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIE5vdGlmaWNhdGlvbkZpbHRlci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGVzO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uT3JpZ2lucygpOiBOb3RpZmljYXRpb25PcmlnaW5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbk9yaWdpbnM7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbk9yaWdpbnModmFsdWU6IE5vdGlmaWNhdGlvbk9yaWdpbltdKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uT3JpZ2lucyA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25WaXNpYmlsaXRpZXMoKTogTm90aWZpY2F0aW9uVmlzaWJpbGl0eVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25WaXNpYmlsaXRpZXModmFsdWU6IE5vdGlmaWNhdGlvblZpc2liaWxpdHlbXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblZpc2liaWxpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKCk6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNbXSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXModmFsdWU6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNbXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uUmVhZFN0YXR1cygpOiBOb3RpZmljYXRpb25SZWFkU3RhdHVzW10ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25SZWFkU3RhdHVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25SZWFkU3RhdHVzKHZhbHVlOiBOb3RpZmljYXRpb25SZWFkU3RhdHVzW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25SZWFkU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVhcmxpZXN0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VhcmxpZXN0O1xuICB9XG4gIHNldCBlYXJsaWVzdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWFybGllc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGF0ZXN0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGVzdDtcbiAgfVxuICBzZXQgbGF0ZXN0KHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXRlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlck5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck5hbWVzO1xuICB9XG4gIHNldCB1c2VyTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdXNlck5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9yaWdpbk5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luTmFtZXM7XG4gIH1cbiAgc2V0IG9yaWdpbk5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX29yaWdpbk5hbWVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTm90aWZpY2F0aW9uRmlsdGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE5vdGlmaWNhdGlvbkZpbHRlci5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBub3RpZmljYXRpb25PcmlnaW5zOiAodGhpcy5ub3RpZmljYXRpb25PcmlnaW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzOiAodGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzOiAodGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogKHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGVhcmxpZXN0OiB0aGlzLmVhcmxpZXN0ID8gdGhpcy5lYXJsaWVzdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdCA/IHRoaXMubGF0ZXN0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB1c2VyTmFtZXM6ICh0aGlzLnVzZXJOYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG9yaWdpbk5hbWVzOiAodGhpcy5vcmlnaW5OYW1lcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE5vdGlmaWNhdGlvbkZpbHRlci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBub3RpZmljYXRpb25PcmlnaW5zOiAodGhpcy5ub3RpZmljYXRpb25PcmlnaW5zIHx8IFtdKS5tYXAoXG4gICAgICAgIHYgPT4gTm90aWZpY2F0aW9uT3JpZ2luW3ZdXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzOiAodGhpcy5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgfHwgW10pLm1hcChcbiAgICAgICAgdiA9PiBOb3RpZmljYXRpb25WaXNpYmlsaXR5W3ZdXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogKHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyB8fCBbXSkubWFwKFxuICAgICAgICB2ID0+IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXNbdl1cbiAgICAgICksXG4gICAgICBub3RpZmljYXRpb25SZWFkU3RhdHVzOiAodGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzIHx8IFtdKS5tYXAoXG4gICAgICAgIHYgPT4gTm90aWZpY2F0aW9uUmVhZFN0YXR1c1t2XVxuICAgICAgKSxcbiAgICAgIGVhcmxpZXN0OiB0aGlzLmVhcmxpZXN0ID8gdGhpcy5lYXJsaWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsYXRlc3Q6IHRoaXMubGF0ZXN0ID8gdGhpcy5sYXRlc3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdXNlck5hbWVzOiAodGhpcy51c2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBvcmlnaW5OYW1lczogKHRoaXMub3JpZ2luTmFtZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE5vdGlmaWNhdGlvbkZpbHRlciB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTm90aWZpY2F0aW9uRmlsdGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZUNvZGVzOiBzdHJpbmdbXTtcbiAgICBub3RpZmljYXRpb25PcmlnaW5zOiBOb3RpZmljYXRpb25PcmlnaW5bXTtcbiAgICBub3RpZmljYXRpb25WaXNpYmlsaXRpZXM6IE5vdGlmaWNhdGlvblZpc2liaWxpdHlbXTtcbiAgICBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzW107XG4gICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogTm90aWZpY2F0aW9uUmVhZFN0YXR1c1tdO1xuICAgIGVhcmxpZXN0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIGxhdGVzdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICB1c2VyTmFtZXM6IHN0cmluZ1tdO1xuICAgIG9yaWdpbk5hbWVzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBOb3RpZmljYXRpb25GaWx0ZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlQ29kZXM6IHN0cmluZ1tdO1xuICAgIG5vdGlmaWNhdGlvbk9yaWdpbnM6IHN0cmluZ1tdO1xuICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdGllczogc3RyaW5nW107XG4gICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogc3RyaW5nW107XG4gICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogc3RyaW5nW107XG4gICAgZWFybGllc3Q6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGF0ZXN0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHVzZXJOYW1lczogc3RyaW5nW107XG4gICAgb3JpZ2luTmFtZXM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5MaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3ROb3RpZmljYXRpb25zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0KCk7XG4gICAgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZpbHRlciA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25GaWx0ZXIgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5maWVsZE1hc2sgPSBfaW5zdGFuY2UuZmllbGRNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3ROb3RpZmljYXRpb25zUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmlsdGVyID0gbmV3IE5vdGlmaWNhdGlvbkZpbHRlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmlsdGVyLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uRmlsdGVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFnZVRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZmllbGRNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmllbGRNYXNrLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmlsdGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZpbHRlciBhcyBhbnksXG4gICAgICAgIE5vdGlmaWNhdGlvbkZpbHRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmllbGRNYXNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmZpZWxkTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub3RpZmljYXRpb25GaWx0ZXI/OiBOb3RpZmljYXRpb25GaWx0ZXI7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIF9maWVsZE1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2s7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkZpbHRlciA9IF92YWx1ZS5ub3RpZmljYXRpb25GaWx0ZXJcbiAgICAgID8gbmV3IE5vdGlmaWNhdGlvbkZpbHRlcihfdmFsdWUubm90aWZpY2F0aW9uRmlsdGVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlVG9rZW4gPSBfdmFsdWUucGFnZVRva2VuO1xuICAgIHRoaXMuZmllbGRNYXNrID0gX3ZhbHVlLmZpZWxkTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrKF92YWx1ZS5maWVsZE1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25GaWx0ZXIoKTogTm90aWZpY2F0aW9uRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uRmlsdGVyO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25GaWx0ZXIodmFsdWU6IE5vdGlmaWNhdGlvbkZpbHRlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkZpbHRlciA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBmaWVsZE1hc2soKTogZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRNYXNrO1xuICB9XG4gIHNldCBmaWVsZE1hc2sodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzayB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZpZWxkTWFzayA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3ROb3RpZmljYXRpb25zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25GaWx0ZXI6IHRoaXMubm90aWZpY2F0aW9uRmlsdGVyXG4gICAgICAgID8gdGhpcy5ub3RpZmljYXRpb25GaWx0ZXIudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBmaWVsZE1hc2s6IHRoaXMuZmllbGRNYXNrID8gdGhpcy5maWVsZE1hc2sudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3ROb3RpZmljYXRpb25zUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbkZpbHRlcjogdGhpcy5ub3RpZmljYXRpb25GaWx0ZXJcbiAgICAgICAgPyB0aGlzLm5vdGlmaWNhdGlvbkZpbHRlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuLFxuICAgICAgZmllbGRNYXNrOiB0aGlzLmZpZWxkTWFzayA/IHRoaXMuZmllbGRNYXNrLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5vdGlmaWNhdGlvbkZpbHRlcj86IE5vdGlmaWNhdGlvbkZpbHRlci5Bc09iamVjdDtcbiAgICBwYWdlVG9rZW46IHN0cmluZztcbiAgICBmaWVsZE1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2suQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb25GaWx0ZXI6IE5vdGlmaWNhdGlvbkZpbHRlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGFnZVRva2VuOiBzdHJpbmc7XG4gICAgZmllbGRNYXNrOiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2suQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSgpO1xuICAgIExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBOb3RpZmljYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2Uubm90aWZpY2F0aW9ucyA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25zICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbnMgYXMgYW55LFxuICAgICAgICBOb3RpZmljYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucz86IE5vdGlmaWNhdGlvbltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSAoX3ZhbHVlLm5vdGlmaWNhdGlvbnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IE5vdGlmaWNhdGlvbihtKVxuICAgICk7XG4gICAgTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbnMoKTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25zKHZhbHVlOiBOb3RpZmljYXRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25zOiAodGhpcy5ub3RpZmljYXRpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6ICh0aGlzLm5vdGlmaWNhdGlvbnMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb24uQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QoKTtcbiAgICBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZXMgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmZsYWdnZWQgPSBfaW5zdGFuY2UuZmxhZ2dlZCB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWVzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lcyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLmZsYWdnZWQgPSBfaW5zdGFuY2UuZmxhZ2dlZCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRCb29sKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lcyAmJiBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mbGFnZ2VkICYmIF9pbnN0YW5jZS5mbGFnZ2VkLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVBhY2tlZEJvb2woMiwgX2luc3RhbmNlLmZsYWdnZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZmxhZ2dlZDogYm9vbGVhbltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubm90aWZpY2F0aW9uTmFtZXMgPSAoX3ZhbHVlLm5vdGlmaWNhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZmxhZ2dlZCA9IChfdmFsdWUuZmxhZ2dlZCB8fCBbXSkuc2xpY2UoKTtcbiAgICBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25OYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbk5hbWVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25OYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25OYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBmbGFnZ2VkKCk6IGJvb2xlYW5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsYWdnZWQ7XG4gIH1cbiAgc2V0IGZsYWdnZWQodmFsdWU6IGJvb2xlYW5bXSkge1xuICAgIHRoaXMuX2ZsYWdnZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uTmFtZXM6ICh0aGlzLm5vdGlmaWNhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZmxhZ2dlZDogKHRoaXMuZmxhZ2dlZCB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbk5hbWVzOiAodGhpcy5ub3RpZmljYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGZsYWdnZWQ6ICh0aGlzLmZsYWdnZWQgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBub3RpZmljYXRpb25OYW1lczogc3RyaW5nW107XG4gICAgZmxhZ2dlZDogYm9vbGVhbltdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbm90aWZpY2F0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICAgIGZsYWdnZWQ6IGJvb2xlYW5bXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdCgpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lcyA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuZmxhZ2dlZCA9IF9pbnN0YW5jZS5mbGFnZ2VkIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWVzIHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UuZmxhZ2dlZCA9IF9pbnN0YW5jZS5mbGFnZ2VkIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEJvb2woKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWVzICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZsYWdnZWQgJiYgX2luc3RhbmNlLmZsYWdnZWQubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkQm9vbCgyLCBfaW5zdGFuY2UuZmxhZ2dlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9mbGFnZ2VkOiBib29sZWFuW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ub3RpZmljYXRpb25OYW1lcyA9IChfdmFsdWUubm90aWZpY2F0aW9uTmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5mbGFnZ2VkID0gKF92YWx1ZS5mbGFnZ2VkIHx8IFtdKS5zbGljZSgpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbk5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uTmFtZXM7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbk5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbk5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZsYWdnZWQoKTogYm9vbGVhbltdIHtcbiAgICByZXR1cm4gdGhpcy5fZmxhZ2dlZDtcbiAgfVxuICBzZXQgZmxhZ2dlZCh2YWx1ZTogYm9vbGVhbltdKSB7XG4gICAgdGhpcy5fZmxhZ2dlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25OYW1lczogKHRoaXMubm90aWZpY2F0aW9uTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBmbGFnZ2VkOiAodGhpcy5mbGFnZ2VkIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uTmFtZXM6ICh0aGlzLm5vdGlmaWNhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZmxhZ2dlZDogKHRoaXMuZmxhZ2dlZCB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5vdGlmaWNhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgICBmbGFnZ2VkOiBib29sZWFuW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb25OYW1lczogc3RyaW5nW107XG4gICAgZmxhZ2dlZDogYm9vbGVhbltdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5LZXlWYWx1ZVBhaXJcbiAqL1xuZXhwb3J0IGNsYXNzIEtleVZhbHVlUGFpciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuS2V5VmFsdWVQYWlyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgS2V5VmFsdWVQYWlyKCk7XG4gICAgS2V5VmFsdWVQYWlyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogS2V5VmFsdWVQYWlyKSB7XG4gICAgX2luc3RhbmNlLmtleSA9IF9pbnN0YW5jZS5rZXkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBLZXlWYWx1ZVBhaXIsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmtleSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludFZhbHVlID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5mbG9hdFZhbHVlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kb3VibGVWYWx1ZSA9IF9yZWFkZXIucmVhZERvdWJsZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnN0cmluZ1ZhbHVlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBLZXlWYWx1ZVBhaXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBLZXlWYWx1ZVBhaXIsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uua2V5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5rZXkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludFZhbHVlIHx8IF9pbnN0YW5jZS5pbnRWYWx1ZSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIsIF9pbnN0YW5jZS5pbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmxvYXRWYWx1ZSB8fCBfaW5zdGFuY2UuZmxvYXRWYWx1ZSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDMsIF9pbnN0YW5jZS5mbG9hdFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kb3VibGVWYWx1ZSB8fCBfaW5zdGFuY2UuZG91YmxlVmFsdWUgPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVEb3VibGUoNCwgX2luc3RhbmNlLmRvdWJsZVZhbHVlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdHJpbmdWYWx1ZSB8fCBfaW5zdGFuY2Uuc3RyaW5nVmFsdWUgPT09ICcnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zdHJpbmdWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50VmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZmxvYXRWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9kb3VibGVWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9zdHJpbmdWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9jcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UgPSBLZXlWYWx1ZVBhaXIuVmFsdWVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBLZXlWYWx1ZVBhaXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8S2V5VmFsdWVQYWlyLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmtleSA9IF92YWx1ZS5rZXk7XG4gICAgdGhpcy5pbnRWYWx1ZSA9IF92YWx1ZS5pbnRWYWx1ZTtcbiAgICB0aGlzLmZsb2F0VmFsdWUgPSBfdmFsdWUuZmxvYXRWYWx1ZTtcbiAgICB0aGlzLmRvdWJsZVZhbHVlID0gX3ZhbHVlLmRvdWJsZVZhbHVlO1xuICAgIHRoaXMuc3RyaW5nVmFsdWUgPSBfdmFsdWUuc3RyaW5nVmFsdWU7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIEtleVZhbHVlUGFpci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cbiAgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ludFZhbHVlO1xuICB9XG4gIHNldCBpbnRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Zsb2F0VmFsdWUgPSB0aGlzLl9kb3VibGVWYWx1ZSA9IHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5fY3JlYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSBLZXlWYWx1ZVBhaXIuVmFsdWVDYXNlLmludFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9pbnRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmbG9hdFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0VmFsdWU7XG4gIH1cbiAgc2V0IGZsb2F0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRWYWx1ZSA9IHRoaXMuX2RvdWJsZVZhbHVlID0gdGhpcy5fc3RyaW5nVmFsdWUgPSB0aGlzLl9jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UuZmxvYXRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fZmxvYXRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkb3VibGVWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kb3VibGVWYWx1ZTtcbiAgfVxuICBzZXQgZG91YmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRWYWx1ZSA9IHRoaXMuX2Zsb2F0VmFsdWUgPSB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuX2NyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gS2V5VmFsdWVQYWlyLlZhbHVlQ2FzZS5kb3VibGVWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fZG91YmxlVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RyaW5nVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWU7XG4gIH1cbiAgc2V0IHN0cmluZ1ZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5faW50VmFsdWUgPSB0aGlzLl9mbG9hdFZhbHVlID0gdGhpcy5fZG91YmxlVmFsdWUgPSB0aGlzLl9jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2Uuc3RyaW5nVmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ludFZhbHVlID0gdGhpcy5fZmxvYXRWYWx1ZSA9IHRoaXMuX2RvdWJsZVZhbHVlID0gdGhpcy5fc3RyaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UuY3JlYXRlZEF0O1xuICAgIH1cbiAgICB0aGlzLl9jcmVhdGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEtleVZhbHVlUGFpci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBLZXlWYWx1ZVBhaXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgaW50VmFsdWU6IHRoaXMuaW50VmFsdWUsXG4gICAgICBmbG9hdFZhbHVlOiB0aGlzLmZsb2F0VmFsdWUsXG4gICAgICBkb3VibGVWYWx1ZTogdGhpcy5kb3VibGVWYWx1ZSxcbiAgICAgIHN0cmluZ1ZhbHVlOiB0aGlzLnN0cmluZ1ZhbHVlLFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBLZXlWYWx1ZVBhaXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgaW50VmFsdWU6XG4gICAgICAgIHRoaXMuaW50VmFsdWUgPT09IG51bGwgfHwgdGhpcy5pbnRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLmludFZhbHVlLFxuICAgICAgZmxvYXRWYWx1ZTpcbiAgICAgICAgdGhpcy5mbG9hdFZhbHVlID09PSBudWxsIHx8IHRoaXMuZmxvYXRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLmZsb2F0VmFsdWUsXG4gICAgICBkb3VibGVWYWx1ZTpcbiAgICAgICAgdGhpcy5kb3VibGVWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLmRvdWJsZVZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMuZG91YmxlVmFsdWUsXG4gICAgICBzdHJpbmdWYWx1ZTpcbiAgICAgICAgdGhpcy5zdHJpbmdWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLnN0cmluZ1ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMuc3RyaW5nVmFsdWUsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBLZXlWYWx1ZVBhaXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEtleVZhbHVlUGFpclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgaW50VmFsdWU6IG51bWJlcjtcbiAgICBmbG9hdFZhbHVlOiBudW1iZXI7XG4gICAgZG91YmxlVmFsdWU6IG51bWJlcjtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBLZXlWYWx1ZVBhaXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGludFZhbHVlOiBudW1iZXIgfCBudWxsO1xuICAgIGZsb2F0VmFsdWU6IG51bWJlciB8IG51bGw7XG4gICAgZG91YmxlVmFsdWU6IG51bWJlciB8IG51bGw7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZyB8IG51bGw7XG4gICAgY3JlYXRlZEF0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFZhbHVlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgaW50VmFsdWUgPSAxLFxuICAgIGZsb2F0VmFsdWUgPSAyLFxuICAgIGRvdWJsZVZhbHVlID0gMyxcbiAgICBzdHJpbmdWYWx1ZSA9IDQsXG4gICAgY3JlYXRlZEF0ID0gNVxuICB9XG59XG4iXX0=